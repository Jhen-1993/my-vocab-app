// 個人口說 AI Relay：前端只呼叫此 Worker，AI 供應商的 API key 永遠留在 Cloudflare Secret。
// 每位使用者可部署自己的 Worker；本檔不保存學習單字或複習進度。

// 安全與流量上限：可由 Cloudflare 環境變數覆寫；限制可降低濫用與意外的 API 成本。
const DEFAULT_ALLOWED_ORIGIN = "https://jhen-1993.github.io";
const MAX_SYSTEM_CHARS = 6000;
const MAX_MESSAGE_CHARS = 2400;
const MAX_TOTAL_MESSAGE_CHARS = 12000;
const MAX_MESSAGES = 24;

// OpenAI Structured Outputs 使用的回覆格式；前端依這五個欄位顯示英文回覆與修正建議。
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

// 將逗號分隔的 ALLOWED_ORIGIN 環境變數轉為可比對的來源清單。
function allowedOrigins(env) {
  return String(env.ALLOWED_ORIGIN || DEFAULT_ALLOWED_ORIGIN)
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
}

// 建立 CORS 標頭；不在允許清單中的瀏覽器來源一律拒絕。
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

// 統一輸出不快取的 JSON 回應，同時套用來源限制。
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

// 驗證並截斷前端傳來的對話歷史，避免過長提示詞造成 API 成本與錯誤。
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

// 驗證並限制 AI 回傳欄位的長度，確保前端能安全顯示。
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

// 移除模型偶爾附上的 Markdown 程式碼圍欄，再解析預期的 JSON 回覆。
function parseModelJson(text) {
  const cleaned = String(text || "").replace(/```json|```/gi, "").trim();
  try {
    return cleanTurn(JSON.parse(cleaned));
  } catch (error) {
    throw new Error("The model returned invalid JSON. Try the message again.");
  }
}

// 將 OpenAI／Anthropic 的 HTTP 錯誤轉換為可讀訊息，成功時回傳解析後 JSON。
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

// 呼叫 OpenAI Chat Completions，並強制模型依 TURN_SCHEMA 回傳 JSON。
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

// 呼叫 Anthropic Messages API；回覆文字仍須解析為前端統一格式。
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

// Worker 路由：GET /health 供檢查設定，POST /speak 處理一次口說對話。
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

    // 若設定 Relay token，前端必須帶 Bearer token 才能使用付費 AI Relay。
    if (env.RELAY_ACCESS_TOKEN) {
      const expected = "Bearer " + env.RELAY_ACCESS_TOKEN;
      if (request.headers.get("Authorization") !== expected) {
        return json(request, env, { error: "Relay access token is missing or incorrect." }, 401);
      }
    }

    try {
      // 驗證輸入後依供應商轉送；任何錯誤都轉為 JSON，方便前端顯示。
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
