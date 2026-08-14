# 單字複習網站：GitHub 上傳版
## 檔案結構

- `index.html`：網站介面、複習排程與本機學習紀錄。
- `data/beginner.js`：初階字庫。
- `data/intermediate.js`：中階字庫。
- `data/advanced.js`：高階字庫。
- 三個字庫檔都使用相同格式：`英文、中文、英文例句、例句翻譯、詞性`；詞性索引會在載入時自動建立。
- `THIRD_PARTY_NOTICES.md`：詞性索引使用的 WordNet 參考與授權聲明。
- `ai-relay-worker/`：可選的 Cloudflare Worker，僅供口說 AI 功能使用。

## 詞性標籤

單字卡會顯示詞性，並可在「我的單字卡」依詞性篩選。多詞性單字會並列，例如 `record` 可標示為 `n.／v.`。支援的標籤包括 `n.`、`v.`、`adj.`、`adv.`、`prep.`、`conj.`、`pron.`、`quant.`、`phr.v.` 與 `idiom`。

自訂或批次匯入單字時，原有 `英文|中文|例句|例句翻譯` 格式維持相容；若要自行指定詞性，可在第 5 欄加入，例如 `ambiguous|模稜兩可的|Her answer was ambiguous.|她的回答模稜兩可。|adj.`。

## 複習規則

- 答對：14 天後維護複習。
- 答錯或使用提示／答案：當日可加強重練，後續依第 2、4、7、15、30 天進行鞏固；完成後回到 14 天維護。 參考 The Ebbinghaus Forgetting Curve 的 Spaced Repetition 法，能大幅提升大腦的記憶效率。

## 口說 AI（可選）

若要啟用口說 AI，請依 `ai-relay-worker/README.md` 部署 Cloudflare Worker，並將 Worker URL 與存取密碼輸入網站的口說設定。AI 供應商 API key 應只存放在 Cloudflare Secret，不能放入 GitHub 或 `index.html`。


## 作者免責聲明

1. 僅是為了讓自己背單字不打瞌睡，才做出這個背單字和複習工具。若您認為本專案的內容或設計可能涉及您的權利，歡迎透過 GitHub Issues 聯繫作者。
2. AI 口說功能須由使用者自行設定第三方 AI 服務的帳號、API Key 與 Relay。使用過程產生的 token、API 費用、用量限制、服務品質及退款事宜，均依該 AI 服務供應商規定辦理，作者不代收費用、也不提供退款或品質保證。
3. 本工具所提供的內容僅供學習參考，不保證資訊絕對正確。
