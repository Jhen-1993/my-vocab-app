// Personal AI Relay for the vocabulary app.
// Deploy one copy to each user's own Cloudflare Workers account.

const DEFAULT_ALLOWED_ORIGIN = "https://jhen-1993.github.io";
const MAX_SYSTEM_CHARS = 6000;
const MAX_MESSAGE_CHARS = 2400;
const MAX_TOTAL_MESSAGE_CHARS = 12000;
const MAX_MESSAGES = 24;

const TURN_SCHEMA = {
  type: "object",
  additionalProperties: false,
  properties: {
    reply: { type: "string" },
    replyZh: { type: "string" },
    hasIssues: { type: "boolean" },
    better: { type: "string" },
    note: { type: "string" }
  },
  required: ["reply", "replyZh", "hasIssues", "better", "note"]
};

function allowedOrigins(env) {
  return String(env.ALLOWED_ORIGIN || DEFAULT_ALLOWED_ORIGIN)
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
}

function corsHeaders(request, env) {
  const origin = request.headers.get("Origin");
  if (origin && !allowedOrigins(env).includes(origin)) return null;

  const headers = {
    "Vary": "Origin",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Max-Age": "86400"
  };
  if (origin) headers["Access-Control-Allow-Origin"] = origin;
  return headers;
}

function json(request, env, body, status = 200) {
  const headers = corsHeaders(request, env);
  if (!headers) {
    return new Response(JSON.stringify({ error: "This origin is not allowed." }), {
      status: 403,
      headers: { "Content-Type": "application/json" }
    });
  }
  headers["Content-Type"] = "application/json; charset=utf-8";
  headers["Cache-Control"] = "no-store";
  return new Response(JSON.stringify(body), { status, headers });
}

function cleanMessages(value) {
  if (!Array.isArray(value) || value.length === 0 || value.length > MAX_MESSAGES) {
    throw new Error("messages must contain between 1 and " + MAX_MESSAGES + " items.");
  }

  let total = 0;
  return value.map((item) => {
    if (!item || (item.role !== "user" && item.role !== "assistant") || typeof item.content !== "string") {
      throw new Error("Each message needs a user/assistant role and text content.");
    }
    const content = item.content.trim();
    if (!content || content.length > MAX_MESSAGE_CHARS) {
      throw new Error("A message is empty or too long.");
    }
    total += content.length;
    if (total > MAX_TOTAL_MESSAGE_CHARS) {
      throw new Error("The conversation is too long for one request.");
    }
    return { role: item.role, content };
  });
}

function cleanTurn(value) {
  if (!value || typeof value !== "object" || typeof value.reply !== "string") {
    throw new Error("The model did not return the expected speaking-practice format.");
  }
  return {
    reply: value.reply.slice(0, 2000),
    replyZh: typeof value.replyZh === "string" ? value.replyZh.slice(0, 2000) : "",
    hasIssues: Boolean(value.hasIssues),
    better: typeof value.better === "string" ? value.better.slice(0, 2000) : "",
    note: typeof value.note === "string" ? value.note.slice(0, 2000) : ""
  };
}

function parseModelJson(text) {
  const cleaned = String(text || "").replace(/```json|```/gi, "").trim();
  try {
    return cleanTurn(JSON.parse(cleaned));
  } catch (error) {
    throw new Error("The model returned invalid JSON. Try the message again.");
  }
}

async function upstreamJson(response) {
  const raw = await response.text();
  let parsed = {};
  try { parsed = raw ? JSON.parse(raw) : {}; } catch (error) {}
  if (!response.ok) {
    const detail = parsed && parsed.error && parsed.error.message ? ": " + parsed.error.message : "";
    throw new Error("AI provider request failed (HTTP " + response.status + ")" + detail);
  }
  return parsed;
}

async function callOpenAI(env, system, messages) {
  if (!env.OPENAI_API_KEY) throw new Error("OPENAI_API_KEY is not configured in this Relay.");
  if (!env.AI_MODEL) throw new Error("AI_MODEL is not configured in this Relay.");

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + env.OPENAI_API_KEY
    },
    body: JSON.stringify({
      model: env.AI_MODEL,
      max_completion_tokens: 500,
      messages: [{ role: "system", content: system }].concat(messages),
      response_format: {
        type: "json_schema",
        json_schema: {
          name: "speaking_turn",
          strict: true,
          schema: TURN_SCHEMA
        }
      }
    })
  });

  const data = await upstreamJson(response);
  const message = data && data.choices && data.choices[0] && data.choices[0].message;
  return parseModelJson(message && message.content);
}

async function callAnthropic(env, system, messages) {
  if (!env.ANTHROPIC_API_KEY) throw new Error("ANTHROPIC_API_KEY is not configured in this Relay.");
  if (!env.AI_MODEL) throw new Error("AI_MODEL is not configured in this Relay.");

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01"
    },
    body: JSON.stringify({
      model: env.AI_MODEL,
      max_tokens: 500,
      system,
      messages
    })
  });

  const data = await upstreamJson(response);
  const text = (data.content || [])
    .filter((block) => block.type === "text")
    .map((block) => block.text)
    .join("");
  return parseModelJson(text);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const headers = corsHeaders(request, env);
    if (!headers) return json(request, env, { error: "This origin is not allowed." }, 403);

    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers });

    const provider = env.AI_PROVIDER === "anthropic" ? "anthropic" : "openai";
    if (request.method === "GET" && url.pathname === "/health") {
      return json(request, env, {
        ok: true,
        provider,
        accessTokenRequired: Boolean(env.RELAY_ACCESS_TOKEN)
      });
    }

    if (request.method !== "POST" || url.pathname !== "/speak") {
      return json(request, env, { error: "Not found." }, 404);
    }

    if (env.RELAY_ACCESS_TOKEN) {
      const expected = "Bearer " + env.RELAY_ACCESS_TOKEN;
      if (request.headers.get("Authorization") !== expected) {
        return json(request, env, { error: "Relay access token is missing or incorrect." }, 401);
      }
    }

    try {
      const payload = await request.json();
      const system = typeof payload.system === "string" ? payload.system.trim() : "";
      if (!system || system.length > MAX_SYSTEM_CHARS) {
        throw new Error("The speaking instructions are missing or too long.");
      }
      const messages = cleanMessages(payload.messages);
      const turn = provider === "anthropic"
        ? await callAnthropic(env, system, messages)
        : await callOpenAI(env, system, messages);
      return json(request, env, turn);
    } catch (error) {
      const message = error && error.message ? error.message : "Unexpected Relay error.";
      return json(request, env, { error: message }, 502);
    }
  }
};
