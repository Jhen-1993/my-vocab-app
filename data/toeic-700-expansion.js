// 基礎與中階擴充候選字庫：以生活、行政、客服與職場英語為主。
// decks.js 會先略過已收錄單字，再分別加入 120 個 beginner 與 380 個 intermediate 字。
// 格式：英文單字或片語|繁中意思；未附例句的卡片使用「中文意思＋提示」模式出題。
var BEGINNER_TOEIC_CANDIDATES = String.raw`
abroad|在國外；到國外
absent|缺席的；不在場的
access|進入；使用權
accident|意外；事故
accommodation|住宿；住處
active|活躍的；積極的
actual|實際的；真實的
admire|欽佩；欣賞
adult|成人；成年的
adventure|冒險；奇遇
advice|建議；忠告
afford|負擔得起
agency|代理機構；機構
aid|協助；援助
alarm|警報；使驚慌
alike|相像的；同樣地
allow|允許；容許
alone|獨自的；單獨地
ambulance|救護車
amount|數量；總額
ancient|古老的；古代的
announce|宣布；公告
annoy|使困擾；使生氣
apartment|公寓
apologize|道歉
appearance|外貌；出現
appetite|食慾；胃口
appliance|家電；器具
appointment|約會；預約
appreciate|感謝；欣賞
approach|接近；方法
appropriate|合適的；適當的
approval|同意；核准
argue|爭論；主張
arrival|抵達；到達者
artwork|藝術作品
aside|在旁邊；撇開
asleep|睡著的
assist|幫助；協助
attention|注意；關注
attract|吸引
audience|觀眾；聽眾
average|平均；一般的
avoid|避免；避開
background|背景
backpack|背包
bakery|麵包店
balcony|陽台
barber|理髮師
bargain|便宜貨；討價還價
basement|地下室
battery|電池
beachfront|海濱的
bean|豆子
behavior|行為
belt|皮帶；地帶
benefit|好處；福利
beside|在旁邊
bicycle|自行車
billboard|廣告看板
blanket|毯子
block|街區；阻擋
boarding pass|登機證
boil|煮沸；沸騰
booking|預訂；預約
borrow|借入
bottle|瓶子
branch|分店；樹枝
brave|勇敢的
breakdown|故障；細分
breath|呼吸；一口氣
bridge|橋
bright|明亮的；聰明的
brochure|小冊子；簡介
bucket|桶子
buffet|自助餐
bulletin|公告；簡報
bundle|一捆；打包
bus stop|公車站
button|按鈕；鈕扣
cabin|小屋；機艙
calm|平靜的；使平靜
campground|露營地
cancel|取消
carrier|運輸公司；搬運者
cashier|收銀員
casual|休閒的；隨意的
catalog|目錄
celebration|慶祝活動
cell phone|手機
central|中心的；主要的
cereal|穀類早餐
chain|連鎖店；鏈條
changeable|易變的；可更換的
charge|收費；充電
charity|慈善機構
checkout|結帳；退房
cheerful|愉快的；開朗的
childhood|童年
choice|選擇
citizen|公民；市民
city hall|市政府
classmate|同學
clerk|店員；辦事員
climate|氣候
closet|壁櫥；衣櫃
coastline|海岸線
collect|收集；領取
comfortable|舒適的
comment|評論；意見
communication|溝通；通訊
community|社區；共同體
compare|比較
compete|競爭
competition|比賽；競爭
complaint|抱怨；申訴
complete|完成；完整的
concentrate|專心；集中
condition|狀況；條件
confirm|確認
connection|連接；轉機
consider|考慮
contact|聯絡；接觸
contest|比賽；競爭
continue|繼續
convenient|方便的
conversation|對話
copy|複製；副本
corner|角落
costume|服裝；戲服
counter|櫃檯；計數器
couple|一對；幾個
courage|勇氣
course|課程；路線
court|法院；球場
cover|覆蓋；封面
crash|碰撞；當機
credit card|信用卡
crew|全體工作人員
crosswalk|行人穿越道
crowded|擁擠的
culture|文化
cupboard|櫥櫃
curious|好奇的
customer|顧客
customs|海關；習俗
damage|損害；損壞
dairy|乳製品的；乳品店
daily|每日的；每天
deadline|截止期限
debate|辯論；討論
decide|決定
decision|決定；決策
decoration|裝飾品；裝潢
decrease|減少；降低
delivery|遞送；送貨
department|部門；百貨專櫃
depend|依靠；取決於
describe|描述
design|設計；圖樣
dessert|甜點
destination|目的地
detail|細節
diary|日記；行事曆
diet|飲食；節食
digital|數位的
dine|用餐
direction|方向；指示
discount|折扣
discuss|討論
disease|疾病
display|展示；陳列
distance|距離
district|地區；行政區
document|文件
donate|捐贈
double|兩倍的；雙人房
download|下載
downtown|市中心
drama|戲劇；戲劇性事件
drawer|抽屜
driver's license|駕照
drugstore|藥局
dry cleaner|乾洗店
due|到期的；應付的
durable|耐用的
earn|賺得；獲得
earthquake|地震
edge|邊緣
educate|教育
effective|有效的
effort|努力
elderly|年長的；高齡者
elevator|電梯
emergency|緊急情況
employee|員工
empty|空的
encourage|鼓勵
energy|精力；能源
enjoyable|愉快的
entrance|入口
environment|環境
equal|相等的；平等的
equipment|設備
especially|尤其；特別地
event|活動；事件
everywhere|到處
exact|精確的；確切的
exchange|交換；兌換
excited|興奮的
exhibition|展覽
expense|費用；支出
experience|經驗；經歷
expert|專家；熟練的
explain|解釋
express|表達；快遞的
extra|額外的
facility|設施
fair|公平的；市集
familiar|熟悉的
fare|車資；票價
fashion|時尚；方式
favorite|最喜歡的
fee|費用；手續費
festival|節慶
figure|數字；人物
file|檔案；歸檔
fill out|填寫
final|最後的；決賽
firm|公司；堅固的
fitness|健康；適任性
flavor|味道；風味
floor plan|平面圖
focus|專注；焦點
foreign|外國的
form|表格；形成
formal|正式的
forward|向前；轉寄
fresh|新鮮的；嶄新的
friendly|友善的
frustrated|感到挫折的
furniture|家具
garage|車庫；修車廠
gardener|園丁
general|一般的；總體的
gentle|溫和的
gift shop|禮品店
goal|目標
goods|商品；貨物
government|政府
graduate|畢業生；畢業
grocery|雜貨；食品雜貨店
guidebook|旅遊指南
gym|健身房
habit|習慣
hallway|走廊
handle|處理；把手
hang|懸掛
harbor|港口
headquarters|總部
healthcare|醫療保健
helpful|有幫助的
highway|高速公路
hiking|健行
hire|雇用；租用
honest|誠實的
honor|榮譽；尊敬
hotel lobby|飯店大廳
household|家庭；家用的
human resources|人力資源
ideal|理想的
identify|辨識；確認
image|影像；形象
improve|改善；進步
include|包括
income|收入
independent|獨立的
industry|產業
inform|通知；告知
ingredient|原料；成分
injury|受傷；傷害
instruction|說明；指示
insurance|保險
interview|面試；訪談
introduce|介紹；引進
invitation|邀請函；邀請
island|島嶼
item|項目；物品
itinerary|行程表
journey|旅程
judge|判斷；法官
junk|垃圾；廢棄物
keep in touch|保持聯絡
keyboard|鍵盤
knowledge|知識
label|標籤；標示
landmark|地標
laundry|洗衣；待洗衣物
law|法律
leader|領導者
leisure|休閒
lending|出借；貸款
length|長度
level|程度；樓層
library card|借書證
license|執照；許可
lifestyle|生活方式
limit|限制；上限
link|連結；關聯
liquid|液體
local|當地的；本地人
locate|找到；定位
location|地點
locker|置物櫃
logo|標誌
luggage|行李
maintenance|維護；保養
manager|經理
map|地圖；繪製
marketplace|市集；市場
material|材料；資料
means|方法；手段
measure|測量；措施
medical|醫療的
membership|會員資格
message|訊息
method|方法
middle|中間；中央
minimize|最小化；減少
minor|較小的；次要的
mobile|可移動的；手機
modern|現代的
monitor|監看；螢幕
monthly|每月的
move in|搬入
movie theater|電影院
museum|博物館
neighborhood|社區；街坊
network|網絡；聯繫
nonstop|直達的；不停的
notice|通知；注意到
novel|小說；新穎的
nutrition|營養
object|物體；反對
occasion|場合；時機
offer|提供；提議
office supplies|辦公用品
operate|操作；經營
opinion|意見；看法
opportunity|機會
ordinary|普通的
organize|組織；整理
original|原本的；原創的
outdoor|戶外的
overseas|海外的
owner|所有人；業主
package|包裹；套裝
parking lot|停車場
particular|特定的；特別的
passenger|乘客
passport|護照
patient|病人；有耐心的
pattern|模式；圖案
payment|付款
peaceful|和平的；平靜的
percentage|百分比
perfect|完美的
performance|表現；演出
period|期間；時期
permission|許可；允許
personal|個人的
photography|攝影
physical|身體的；實體的
piece|一件；片段
planet|行星
platform|月台；平台
pleasant|令人愉快的
plenty|大量；充足
podcast|Podcast 節目
polite|有禮貌的
population|人口
portable|可攜式的
position|位置；職位
positive|正面的；肯定的
post office|郵局
practice|練習；慣例
prefer|偏好
prepare|準備
presenter|主持人；報告者
prevent|預防；阻止
price|價格
printer|印表機
private|私人的
prize|獎品
process|流程；處理
produce|生產；農產品
professional|專業人士；專業的
profit|利潤；獲利
program|節目；程式；計畫
progress|進展；進步
project|專案；投影
promise|承諾；保證
promote|促銷；升遷
proper|適當的；正確的
protect|保護
provide|提供
public|公共的；公開的
purchase|購買
purpose|目的
quality|品質
queue|隊伍；排隊
quiet|安靜的
quite|相當；很
railway|鐵路
raise|提高；舉起
rare|罕見的
rate|比率；評價
receipt|收據
receive|收到
reception|接待處；接收
recommend|推薦；建議
record|紀錄；錄製
recycle|回收；再利用
reduce|減少
reference|參考；推薦人
refund|退款；退費
region|地區
register|登記；註冊
regular|固定的；規律的
relax|放鬆
release|釋出；發布
reliable|可靠的
remain|保持；剩下
remind|提醒
repair|修理；維修
repeat|重複；再次說
replace|取代；更換
reply|回覆
report|報告；報導
request|請求；要求
reserve|預訂；保留
resource|資源
respond|回應
responsible|負責任的
restaurant|餐廳
result|結果
return|返回；歸還
review|複習；評論
reward|獎勵；報酬
ride|騎乘；搭乘
roadside|路邊的
route|路線
routine|例行工作；日常
safe|安全的
salary|薪水
sale|銷售；特價
sample|樣本；範例
satisfied|滿意的
schedule|行程；安排
science|科學
seat|座位
secretary|祕書
select|選擇；精選的
seminar|研討會
senior|資深的；年長的
separate|分開；不同的
service|服務
share|分享；股份
shelf|架子
shift|輪班；改變
shipment|貨運；裝運
shopper|購物者
shortcut|捷徑
sign|標誌；簽名
signal|訊號；示意
similar|相似的
simple|簡單的
site|地點；網站
skill|技能
smart|聰明的；時髦的
snack|點心
software|軟體
solution|解決方案
source|來源
space|空間；太空
speaker|講者；喇叭
specialist|專家
specific|特定的；明確的
spend|花費；度過
spouse|配偶
staff|員工；職員
standard|標準；標準的
statement|聲明；報表
stationery|文具
stay|停留；住宿
stock|庫存；股票
storage|儲存；倉庫
store|商店；儲存
strategy|策略
strength|力量；優勢
stress|壓力；強調
structure|結構
studio|工作室；錄音室
submit|提交；送出
subway|地鐵
success|成功
suggest|建議；暗示
summary|摘要
supplier|供應商
support|支持；支援
surface|表面
survey|調查；問卷
system|系統
talent|才能；人才
target|目標
task|任務
tax|稅
teamwork|團隊合作
technical|技術的
technology|科技
temporary|暫時的
tenant|房客；承租人
term|期間；術語
terminal|航廈；終端機
textbook|教科書
theme|主題
theory|理論
throughout|遍及；自始至終
ticket counter|售票櫃檯
tidy|整齊的；整理
tip|小費；提示
tourist|遊客
track|軌道；追蹤
trade|貿易；交易
traffic|交通；流量
training|訓練
transfer|轉移；轉乘
transportation|運輸
travel agent|旅行社人員
treat|對待；款待
trend|趨勢
trip|旅行；絆倒
trust|信任；信託
type|類型；打字
typical|典型的
uniform|制服；一致的
unusual|不尋常的
update|更新
upgrade|升級
upload|上傳
useful|有用的
usual|通常的
value|價值；重視
vehicle|車輛
vendor|供應商；攤販
venue|場地；舉辦地
version|版本
video call|視訊通話
view|景色；觀點
visitor|訪客
volunteer|志工；自願者
warehouse|倉庫
weather forecast|天氣預報
website|網站
welcome|歡迎；受歡迎的
wheelchair|輪椅
wireless|無線的
workshop|工作坊；研習會
worldwide|全世界的
worth|值得的；價值
writer|作者
yearly|每年的
`.trim().split("\n").map(function(line){
  var parts = line.split("|");
  return [parts[0], parts[1], "", ""];
});

var INTERMEDIATE_TOEIC_CANDIDATES = String.raw`
abide by|遵守；遵循
abolish|廢除；取消
abrupt|突然的；唐突的
absorb|吸收；理解
abstract|摘要；抽象的
accelerate|加速；促進
accessible|可進入的；易取得的
accommodate|提供住宿；配合
accomplish|完成；實現
account for|說明；占比
accumulate|累積；積聚
accuracy|精確度；正確性
acknowledge|承認；確認收到
acquire|取得；獲得
adapt|適應；調整
adequate|足夠的；適當的
adjust|調整；適應
administrative|行政的；管理的
advantageous|有利的；有益的
advertise|做廣告；刊登
advise|建議；忠告
agenda|議程
allocate|分配；撥出
alternative|替代方案；可供選擇的
ambassador|大使；代表
amend|修正；修改
annual|每年的；年度的
anticipate|預期；預先準備
applicant|申請人；求職者
application|申請；應用程式
appoint|任命；指定
appraise|評估；鑑定
approximate|大約的；近似
arbitration|仲裁
archive|檔案庫；歸檔
arrange|安排；整理
assemble|組裝；集合
assess|評估；判定
assign|指派；分配
assure|向…保證；確保
attend|出席；照顧
attendee|出席者
authorize|授權；批准
automate|自動化
availability|可用性；有空
backup|備份；後援
balance|平衡；餘額
bankruptcy|破產
barrier|障礙；屏障
benchmark|基準；評比標準
bidding|投標；出價
binding|有約束力的；裝訂
boost|促進；提升
brief|簡短的；簡報
budget|預算
budgetary|預算的
bulletin board|公告欄
business card|名片
bylaws|章程；附則
calculate|計算；估算
campaign|活動；宣傳計畫
candidate|候選人；應徵者
capacity|容量；能力
capital|資本；首都
carefully|仔細地
career path|職涯發展路徑
catalogue|產品目錄
category|類別
certify|證明；認證
chairperson|主席
circulate|流通；傳閱
clarify|澄清；說明
client|客戶；委託人
closure|關閉；結束
coincide|同時發生；一致
collaborate|合作；協作
collective|集體的；共同的
commission|佣金；委員會
committee|委員會
commute|通勤
compensation|補償；薪酬
compile|彙整；編譯
compliance|遵循；合規
component|組成部分；零件
compound|混合物；加重
comprise|包括；由…組成
conclude|結論；結束
concrete|具體的；混凝土
conduct|執行；行為
conference|會議；研討會
confidential|機密的
consent|同意；許可
consequently|因此；所以
considerable|相當大的；重要的
consist of|由…組成
consult|諮詢；查閱
consultant|顧問
consumer|消費者
consumption|消費；耗用
contribute|貢獻；投稿
convert|轉換；改裝
cooperate|合作
coordinate|協調
corporate|公司的；企業的
correspond|符合；通信
cost-effective|符合成本效益的
coverage|涵蓋範圍；保險額
credential|證書；資格
criteria|標準；準則
critical|重要的；批判性的
currency|貨幣；流通
customize|客製化
database|資料庫
deadline extension|延後截止期限
decline|下降；婉拒
deduct|扣除；推論
defect|瑕疵；缺點
delegate|委派；代表
demonstrate|展示；證明
depart|離開；出發
dependent|依賴的；受撫養者
deploy|部署；調度
designate|指定；任命
desirable|理想的；值得擁有的
detect|發現；偵測
determine|決定；判定
develop|發展；開發
diagnose|診斷；找出問題
discontinue|停止；中止
distribute|分配；配送
diversify|多樣化；分散
division|部門；分割
domestic|國內的；家庭的
draft|草稿；起草
duration|持續時間
economic|經濟的
economical|節省的；經濟實惠的
edit|編輯；修改
efficient|有效率的
eliminate|排除；消除
eligible|符合資格的
emphasize|強調
employment|就業；工作
enclose|附上；圍住
encounter|遇到；遭遇
enhance|提升；增強
enroll|登記；註冊
ensure|確保
enterprise|企業；事業
entertain|招待；使娛樂
entitle|使有資格；命名
entry|進入；條目
environmental|環境的
equivalent|相等的；等值物
estimate|估計；估價
evaluate|評估
evidence|證據
exceed|超過
exclude|排除；不包括
exclusively|專門地；僅僅
executive|主管；行政的
exempt|免除；豁免的
expenditure|支出；費用
expertise|專業知識
expiration|到期；終止
extend|延長；擴展
extension|延期；分機
external|外部的
facilitate|促進；使容易
factor|因素；因子
feedback|回饋意見
finalize|完成；敲定
financial|財務的
financing|融資；資金
flexibility|彈性；靈活性
forecast|預測；預報
format|格式；編排
freight|貨運；貨物
fulfill|履行；完成
function|功能；運作
funding|資金；經費
furthermore|此外；而且
generate|產生；生成
global|全球的
grant|授予；補助金
guarantee|保證；保固
guideline|指導原則
headcount|人數；員額
highlight|強調；重點
implement|執行；實施
implication|含意；影響
incentive|獎勵；誘因
incorporate|納入；成立公司
indicate|指出；顯示
inevitable|不可避免的
initial|最初的；縮寫字首
initiative|主動性；倡議
innovative|創新的
inspect|檢查；視察
installation|安裝；設施
institute|機構；制定
integrate|整合；融入
intellectual|智力的；知識分子
intensive|密集的；加強的
internal|內部的
interpret|解釋；口譯
inventory|庫存；清單
invest|投資
invoice|發票
issue|議題；發行
justify|證明合理；辯護
launch|推出；發射
legislation|法規；立法
liable|有責任的；可能遭受的
logistics|物流
mandatory|強制的；必須的
manufacture|製造；製造業
manufacturer|製造商
market share|市場占有率
marketing|行銷
maximum|最大值；最高的
merchandise|商品；貨品
merge|合併；融合
merger|合併案
minimum|最低限度；最小的
mission|任務；使命
mutual|相互的；共同的
negotiate|談判；協商
negotiation|談判；協商
objective|目標；客觀的
obligation|義務；責任
obtain|獲得；取得
occupancy|入住率；占用
ongoing|持續進行的
operate|經營；操作
operational|營運的；操作上的
optimize|最佳化
option|選項；選擇權
outcome|結果；成果
outstanding|未付的；傑出的
overhead|營運費用；頭頂上方的
participate|參與
partnership|合作關係；合夥
pending|待處理的；即將發生的
permanent|永久的；正式的
permit|允許；許可證
personnel|人事；人員
perspective|觀點；角度
policy|政策；規則
portfolio|作品集；投資組合
potential|潛力；可能的
practical|實際的；實用的
precede|在…之前；領先
precise|精確的
predict|預測
preference|偏好；優先選擇
preliminary|初步的；預備的
premium|保費；高級的
preserve|保存；維護
priority|優先事項
procedure|程序；手續
productivity|生產力；效率
proficiency|熟練度
prohibit|禁止
proportion|比例；部分
prospective|預期的；潛在的
provision|提供；條款
qualify|符合資格；使具資格
quotation|報價單；引文
recruit|招募；新進人員
recruitment|招募；徵才
recover|恢復；取回
recruiter|招募人員
redeem|兌換；贖回
refer|提及；轉介
regulation|規章；管制
reimburse|償還；報銷
relocate|搬遷；調任
renew|更新；續約
renovate|翻修；整修
replacement|替代品；更換
represent|代表；象徵
requirement|要求；條件
research|研究；調查
resolution|決議；解決方案
retail|零售；零售的
retain|保留；維持
retire|退休；撤回
revenue|營收；收入
revise|修訂；複習
rotation|輪調；轉動
salary range|薪資範圍
sector|部門；產業
security|安全；證券
shortage|短缺；不足
significant|重要的；顯著的
specialize|專精；專門從事
specification|規格；說明
stakeholder|利害關係人
stationary|固定不動的
statistic|統計數字
status|狀態；身分
storage capacity|儲存容量
subcontractor|分包商
subsequent|後續的；隨後的
substantial|大量的；重要的
supervisor|主管；監督者
supply chain|供應鏈
surplus|剩餘；盈餘
sustain|維持；支撐
teleconference|電話會議
tentative|暫定的；不確定的
terminate|終止；結束
therefore|因此
timeline|時程表
transaction|交易；事務
transition|轉變；過渡
translate|翻譯
transport|運輸；運送
trend|趨勢
utility|公用事業；效用
valid|有效的；有根據的
variable|可變的；變數
verify|驗證；核實
visible|可見的；明顯的
warranty|保固；保證書
wholesale|批發；批發的
withdraw|撤回；提款
workforce|勞動力；全體員工
workload|工作量
abatement|減少；減稅
absentee|缺席者；曠工者
accelerator|加速器；加速方案
accessibility|可近用性；無障礙性
accrual|應計；累積
accrued expense|應計費用
acquisition|收購；取得
activation|啟用；活化
adaptability|適應力
add-on|附加項目；加購項
adjustment|調整；調節
admission|入場；承認
advisory|顧問的；諮詢通知
affiliate|關係企業；使隸屬
affordable|可負擔的
after-sales service|售後服務
agency fee|代理費
agenda item|議程項目
airfare|機票費；機票價格
alignment|一致；校準
allowance|津貼；補助額
amendment|修正案；修改
amortization|攤銷；分期償還
analyst|分析師
annual report|年度報告
appraisal|評估；估價
approval process|核准流程
asset|資產
asset management|資產管理
assignment|任務；指派
assistance|協助；援助
audit|稽核；審計
auditor|稽核員；審計師
automation|自動化
aviation|航空業；航空
backorder|缺貨待補訂單
balance sheet|資產負債表
bank transfer|銀行轉帳
bar code|條碼
baseline|基準線；基準
beneficiary|受益人
bid|投標；出價
billing|開立帳單；帳務處理
board meeting|董事會會議
bonus scheme|獎金制度
brand awareness|品牌知名度
brand loyalty|品牌忠誠度
break-even|損益兩平的
brokerage|經紀業；佣金
budget cut|預算削減
business trip|商務旅行
cash flow|現金流量
cash register|收銀機
certification|認證；證書
chair a meeting|主持會議
change order|變更訂單
claim|索賠；主張
clearance|清關；出清
co-branding|共同品牌行銷
code of conduct|行為準則
commercial|商業廣告；商業的
commodity|商品；大宗物資
communication skills|溝通技巧
company policy|公司政策
competitive|有競爭力的；競爭性的
competitor|競爭者
complement|補充；互補物
comprehensive|全面的；綜合的
computerized|電腦化的
concession|讓步；特許權
confirmation number|確認號碼
consignment|寄售；託運貨物
consignee|收貨人
consignor|寄件人；託運人
consortium|財團；聯盟
consumer demand|消費者需求
consumer goods|消費品
contingency plan|應變計畫
contractor|承包商
convention|年會；慣例
copyright|版權；著作權
core business|核心業務
cost analysis|成本分析
cost reduction|降低成本
costing|成本計算
counteroffer|還價；反提議
courier|快遞員；快遞服務
credit line|信用額度
credit limit|信用限額
creditor|債權人
cross-functional|跨部門的
customer base|客戶群
customer loyalty|客戶忠誠度
customer retention|客戶留存
customer service desk|客服櫃檯
customs declaration|海關申報
data entry|資料輸入
debit card|簽帳金融卡
debtor|債務人
decision maker|決策者
deduction|扣除額；推論
default|違約；預設值
defective|有瑕疵的
delivery date|交貨日期
demand forecast|需求預測
depreciation|折舊；貶值
direct deposit|直接存款
direct marketing|直接行銷
directors' meeting|董事會會議
disbursement|支付；撥款
distribution center|配送中心
distributor|經銷商
dividend|股利；股息
down payment|頭期款
downsizing|縮編；裁員
due date|到期日
e-commerce|電子商務
earnings|收益；薪資
efficiency|效率
electronic signature|電子簽章
eligibility|資格；合格條件
employer|雇主
employment contract|聘僱合約
endorsement|背書；推薦
enrollment form|報名表；登記表
entrepreneur|企業家；創業家
entrepreneurship|創業精神
entry-level|入門級的；初階職位的
escalate|升高；向上呈報
estimate|估價；預估
executive assistant|行政助理
expense account|費用帳戶
export|出口；出口品
exporter|出口商
facility management|設施管理
farewell party|歡送會
financial statement|財務報表
fixed cost|固定成本
follow up|追蹤；後續處理
forecasting|預測；預報
franchise|特許經營；加盟權
freelance|自由接案；自由職業的
fulfillment center|訂單履行中心
fundraiser|募款活動；募款人
gain|收益；獲得
general manager|總經理
goal setting|目標設定
goods receipt|收貨確認
gross profit|毛利
growth rate|成長率
handover|交接；移交
hazard|危害；危險
health insurance|健康保險
head office|總公司
in-house|內部的；公司內部地
incur|招致；產生（費用）
indemnity|賠償；保障
induction|新進人員訓練；感應
industrial|工業的；產業的
information technology|資訊科技
infrastructure|基礎設施
installment|分期付款；一期款項
institution|機構；制度
insurance policy|保險單
intellectual property|智慧財產
interest rate|利率
intern|實習生
internship|實習
investment|投資
investor|投資人
invoice number|發票號碼
joint venture|合資企業
key performance indicator|關鍵績效指標
labor cost|勞動成本
laboratory|實驗室
labor union|工會
landlord|房東
lease|租約；出租
legal counsel|法律顧問
letterhead|信頭；公司抬頭紙
liability|負債；法律責任
licensee|被授權人
licensing|授權；核發執照
line manager|直屬主管
loan|貸款；借出
loan application|貸款申請
loss|損失；虧損
loyalty program|會員忠誠計畫
machine operator|機台操作員
mailing list|郵寄名單
manufacturing|製造業；製造
market research|市場研究
market segment|市場區隔
marketplace|市場平台
media coverage|媒體報導
merger agreement|合併協議
milestone|里程碑
minimum wage|最低工資
minutes|會議紀錄
monetary|貨幣的；金錢的
monitoring|監測；監控
multinational|跨國企業；跨國的
mutual fund|共同基金
net income|淨利；淨收入
networking|人脈建立；網路連線
nonprofit|非營利組織；非營利的
notice period|通知期間；離職預告期
occupational|職業的；職務上的
offshore|離岸的；海外的
onboarding|新人到職流程
operating cost|營運成本
operating margin|營業利益率
order form|訂購單
organizational|組織的
outsource|外包
overdue|逾期的
overtime|加班；加班費
ownership|所有權
packaging|包裝；包裝材料
payroll|薪資名冊；薪資總額
performance review|績效評估
petty cash|零用金
placement|安置；職位安排
planning|規劃；計畫
point of sale|銷售點
policyholder|保單持有人
portable device|可攜式裝置
portfolio manager|投資組合經理
postal code|郵遞區號
prepaid|預付的
press release|新聞稿
price list|價目表
pricing|定價；價格策略
procurement|採購
production line|生產線
profit margin|利潤率
profitability|獲利能力
project manager|專案經理
promotional|促銷的；宣傳的
prospect|潛在客戶；前景
public relations|公共關係
purchase order|採購訂單
quality control|品質管制
quality assurance|品質保證
quarterly|每季的
recession|衰退；不景氣
recruitment agency|人力仲介公司
refund policy|退款政策
reimbursement|報銷；償還
relocation|搬遷；調任
remittance|匯款；付款
renewal|續約；更新
retailer|零售商
return policy|退貨政策
risk assessment|風險評估
royalty|權利金；版稅
sales associate|銷售人員
sales forecast|銷售預測
sales representative|業務代表
sales target|銷售目標
salesperson|銷售員
savings account|儲蓄帳戶
schedule change|行程變更
security deposit|押金
service charge|服務費
shareholder|股東
shipping label|運送標籤
shipping rate|運費費率
short-term|短期的
signatory|簽署人；簽約方
social security|社會保險
sole proprietor|獨資業主
specification sheet|規格表
staffing|人力配置；聘僱
startup|新創公司；創業初期
stockholder|股東
strategic|策略性的
subscription|訂閱；訂購
subsidiary|子公司；附屬的
superannuation|退休金制度
supplier agreement|供應商協議
supply shortage|供應短缺
surveyor|調查員；測量師
sustainability|永續性
tariff|關稅；費率
tax deduction|稅額扣除
telecommute|遠距工作
tender|投標；溫柔的
terms and conditions|條款與條件
trade fair|商展；貿易展覽
trademark|商標
turnover|營業額；人員流動率
understaffed|人手不足的
unforeseen|未預見的
union representative|工會代表
unit cost|單位成本
unpaid|未付款的
upgrade|升級；改善
user-friendly|使用者友善的
vacancy|職缺；空缺
valuation|估價；評價
vendor contract|供應商合約
virtual meeting|線上會議
warehouse receipt|倉單；倉庫收據
webinar|線上研討會
workplace|工作場所
written notice|書面通知
`.trim().split("\n").map(function(line){
  var parts = line.split("|");
  return [parts[0], parts[1], "", ""];
});
