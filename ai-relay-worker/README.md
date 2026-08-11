# Personal AI Relay setup

This Worker lets each learner use their own OpenAI or Anthropic API account for the speaking-practice feature. The vocabulary web page stores only the Worker URL (and, if used, a separate Relay access token). It never stores an AI provider API key.

## Fastest setup: one-click deployment

After you upload this entire `ai-relay-worker` folder to the public `main` branch of `jhen-1993/my-vocab-app`, learners can use this link:

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https%3A%2F%2Fgithub.com%2Fjhen-1993%2Fmy-vocab-app%2Ftree%2Fmain%2Fai-relay-worker)

Cloudflare will guide them through creating their own copy of the Worker. They choose their AI provider, set their provider API key as a Secret, deploy, and copy the resulting `https://...workers.dev` URL back to the vocabulary app.

## Manual one-time setup in Cloudflare Workers

1. Create a Cloudflare account and open **Workers & Pages**.
2. Create a new Worker, replace its starter code with `worker.js`, then deploy it.
3. Open the Worker's **Settings → Variables and Secrets** and add the values below. Mark API keys and `RELAY_ACCESS_TOKEN` as **Secret**.
4. Deploy again and copy the Worker URL, for example `https://my-speaking-relay.<account>.workers.dev`.
5. In the vocabulary app, open **口說練習 → 連接我的 AI**, paste that URL, and choose **測試並連接**.

## Required Worker variables

| Variable | Value |
| --- | --- |
| `AI_PROVIDER` | `openai` or `anthropic` |
| `AI_MODEL` | A chat model that your own API account can use. For OpenAI, choose a model supporting Structured Outputs. |
| `ALLOWED_ORIGIN` | `https://jhen-1993.github.io` |
| `OPENAI_API_KEY` | Required only when `AI_PROVIDER=openai`; store as a Secret. |
| `ANTHROPIC_API_KEY` | Required only when `AI_PROVIDER=anthropic`; store as a Secret. |
| `RELAY_ACCESS_TOKEN` | Strongly recommended: a long random personal password; store as a Secret. |

If you set `RELAY_ACCESS_TOKEN`, paste the same value into the app's **個人連線密碼** field. This is not the OpenAI or Anthropic API key. It protects the Relay endpoint from being used by someone who only knows its URL.

## Security notes

- Never paste an OpenAI or Anthropic API key into the vocabulary web page or commit it to GitHub.
- `ALLOWED_ORIGIN` permits browser requests only from the published vocabulary site. It is helpful but is not a complete authentication mechanism by itself; use `RELAY_ACCESS_TOKEN` for personal protection.
- This is a personal Relay. Each learner must deploy and fund their own Worker/API account. The website owner does not receive their API key.
- Every automated speaking reply consumes tokens from the learner's own OpenAI or Anthropic API account. Learners should set provider-side spend limits or alerts before using the feature.
- If a learner no longer wants to use the feature, they can delete the Worker secret or delete the Worker. They can also remove the stored Relay URL from **口說練習 → AI 設定**.

## Provider notes

OpenAI requests use the Chat Completions endpoint with Structured Outputs. Anthropic requests use the Messages endpoint and request strict JSON in the prompt. The Worker normalizes either response into the single format expected by the vocabulary app.
