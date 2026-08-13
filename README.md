# 單字複習網站：GitHub 上傳版

這個資料夾可直接作為 GitHub repository 的根目錄使用。

## 檔案結構

- `index.html`：網站介面、複習排程與本機學習紀錄。
- `data/decks.js`：核心字庫（初階、中階、高階）。
- `data/advanced-expansion.js`：第一批高階擴充字庫。
- `data/advanced-expansion-2.js`：第二批高階擴充候選字庫；程式會自動去重並加入 500 個新字。
- `data/toeic-700-expansion.js`：基礎與中階職場字庫；程式會自動加入 120 個基礎字與 380 個約 TOEIC 550–700 分常見字。
- `data/card-examples.js`：集中管理 1,200 則補充例句，供 `decks.js` 套用到原先沒有例句的卡片。
- `data/parts-of-speech.js`：4,000 字的獨立詞性索引；不改動既有四欄字庫，支援多詞性與詞性篩選。
- `THIRD_PARTY_NOTICES.md`：詞性索引使用的 WordNet 參考與授權聲明。
- `ai-relay-worker/`：可選的 Cloudflare Worker，僅供口說 AI 功能使用。

目前字庫共有 4,000 個唯一單字：初階 1,204、中階 1,628、高階 1,168；每一張卡都有英文例句。

## 詞性標籤

單字卡會顯示詞性，並可在「我的單字卡」依詞性篩選。多詞性單字會並列，例如 `record` 可標示為 `n.／v.`。支援的標籤包括 `n.`、`v.`、`adj.`、`adv.`、`prep.`、`conj.`、`pron.`、`quant.`、`phr.v.` 與 `idiom`。

自訂或批次匯入單字時，原有 `英文|中文|例句|例句翻譯` 格式維持相容；若要自行指定詞性，可在第 5 欄加入，例如 `ambiguous|模稜兩可的|Her answer was ambiguous.|她的回答模稜兩可。|adj.`。

## 上傳到 GitHub Pages

1. 將本資料夾內的所有檔案與資料夾上傳到 GitHub repository 根目錄。
2. 在 GitHub repository 的 **Settings → Pages**，選擇 `main` branch 與 `/(root)` 後儲存。
3. 等待 GitHub Pages 發布後開啟網站連結。

請保留完整 `data/` 資料夾；`index.html` 會在開啟時依序載入字庫與例句檔案。

## 複習規則

- 答對：14 天後維護複習。
- 答錯或使用提示／答案：當日可加強重練，後續依第 2、4、7、15、30 天進行鞏固；完成後回到 14 天維護。

## 口說 AI（可選）

若要啟用口說 AI，請依 `ai-relay-worker/README.md` 部署 Cloudflare Worker，並將 Worker URL 與存取密碼輸入網站的口說設定。AI 供應商 API key 應只存放在 Cloudflare Secret，不能放入 GitHub 或 `index.html`。


## 作者免責聲明

1. 僅是為了讓自己背單字不打瞌睡，才做出這個背單字和複習工具。若您認為本專案的內容或設計可能涉及您的權利，歡迎透過 GitHub Issues 聯繫作者。
2. AI 口說功能須由使用者自行設定第三方 AI 服務的帳號、API Key 與 Relay。使用過程產生的 token、API 費用、用量限制、服務品質及退款事宜，均依該 AI 服務供應商規定辦理，作者不代收費用、也不提供退款或品質保證。
3. 本工具所提供的內容僅供學習參考，不保證資訊絕對正確。

