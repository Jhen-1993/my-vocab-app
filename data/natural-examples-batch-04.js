// Natural example restoration — batch 04
// Every pair has a word-specific context; no category sentence is reused.
var CURATED_NATURAL_EXAMPLES = (typeof CURATED_NATURAL_EXAMPLES !== "undefined")
  ? CURATED_NATURAL_EXAMPLES
  : {};
var CURATED_NATURAL_MEANINGS = (typeof CURATED_NATURAL_MEANINGS !== "undefined")
  ? CURATED_NATURAL_MEANINGS
  : {};

Object.assign(CURATED_NATURAL_EXAMPLES, {
  "brand": ["This brand is known for making durable hiking shoes.", "這個品牌以製造耐穿的登山鞋聞名。"],
  "bravery": ["Her bravery helped the children stay calm during the fire drill.", "她的勇氣幫助孩子們在消防演練時保持冷靜。"],
  "brewery": ["The brewery offers tours that explain how its beer is made.", "這間啤酒廠提供導覽，說明啤酒如何釀造。"],
  "briefcase": ["He kept the signed contract in his briefcase.", "他把已簽署的合約放在公事包裡。"],
  "broadband": ["Reliable broadband is important for people who work from home.", "穩定的寬頻對在家工作的人很重要。"],
  "broadcaster": ["The broadcaster reported the election results live.", "這名播報員現場報導選舉結果。"],
  "broccoli": ["She steamed broccoli to serve with the chicken.", "她蒸了花椰菜搭配雞肉。"],
  "broker": ["The broker helped them find an apartment within their budget.", "這名經紀人協助他們在預算內找到公寓。"],
  "brother": ["My brother taught me how to ride a bicycle.", "我哥哥教我騎自行車。"],
  "browser": ["Open the link in your browser to read the article.", "在瀏覽器中開啟連結以閱讀文章。"],
  "buddy": ["My hiking buddy always brings an extra bottle of water.", "我的登山夥伴總會多帶一瓶水。"],
  "budgeting": ["Budgeting helped her save enough money for a trip.", "預算編列幫助她存到足夠的旅費。"],
  "buffalo": ["A herd of buffalo crossed the grassland at dawn.", "一群水牛在黎明時穿越草原。"],
  "builder": ["The builder checked the foundation before the walls were raised.", "建造商在砌牆前檢查地基。"],
  "bull": ["The bull stood quietly in the field beside the fence.", "那頭公牛安靜地站在柵欄旁的田地裡。"],
  "bullion": ["The bank keeps gold bullion in a secure vault.", "銀行把金條保存在安全金庫中。"],
  "bungalow": ["They rented a small bungalow near the beach.", "他們在海灘附近租了一間小平房。"],
  "bureau": ["The tourism bureau published a map of local attractions.", "觀光局出版了一份當地景點地圖。"],
  "bureaucrat": ["The bureaucrat reviewed the application before approving the permit.", "這名官員在核准許可前審閱申請文件。"],
  "burger": ["He ordered a burger with extra onions.", "他點了一個加很多洋蔥的漢堡。"],
  "burial": ["The family held a quiet burial for their grandfather.", "家人為祖父舉行了安靜的葬禮。"],
  "bus driver": ["The bus driver waited until everyone was seated.", "公車司機等到所有人都坐好才開車。"],
  "butter": ["Spread a little butter on the warm toast.", "在熱吐司上抹一點奶油。"],
  "buyer": ["The buyer inspected the house before making an offer.", "買方在出價前查看了房子。"],
  "bylaw": ["The city council changed a bylaw about parking near schools.", "市議會修改了一項關於校園附近停車的附則。"],
  "cabbage": ["She added shredded cabbage to the soup.", "她在湯裡加入切絲的高麗菜。"],
  "cabin crew": ["The cabin crew demonstrated how to use the safety equipment.", "機組人員示範如何使用安全設備。"],
  "cabinet": ["The glasses are stored in the cabinet above the sink.", "玻璃杯放在水槽上方的櫥櫃裡。"],
  "cable": ["The charging cable is too short to reach the outlet.", "充電線太短，搆不到插座。"],
  "cactus": ["The cactus needs very little water to survive.", "仙人掌只需要很少的水就能存活。"],
  "cafe": ["We met at a quiet cafe near the library.", "我們在圖書館附近的一間安靜咖啡館見面。"],
  "cafeteria": ["Students lined up for lunch in the school cafeteria.", "學生在學校餐廳排隊吃午餐。"],
  "cake": ["They brought a chocolate cake to the birthday party.", "他們帶了一個巧克力蛋糕去生日派對。"],
  "calculation": ["A small calculation showed that the train would arrive late.", "簡單計算後發現火車會誤點。"],
  "calculator": ["Use a calculator to check your answer.", "用計算機檢查你的答案。"],
  "calorie": ["The label shows how many calories are in one serving.", "標籤顯示一份食物含有多少卡路里。"],
  "camel": ["The camel carried supplies across the desert.", "駱駝載著補給品穿越沙漠。"],
  "campsite": ["We found a campsite beside a clear mountain stream.", "我們在清澈的山澗旁找到一處露營地。"],
  "canal": ["Small boats moved slowly along the canal.", "小船沿著運河緩慢行駛。"],
  "candy": ["The children were allowed one piece of candy after dinner.", "孩子們晚餐後可以吃一顆糖果。"],
  "capitalization": ["The company increased its capitalization before expanding overseas.", "公司在海外擴張前提高了資本額。"],
  "capsule": ["Take one capsule with water after breakfast.", "早餐後配水服用一粒膠囊。"],
  "captain": ["The captain announced that the ship would leave at noon.", "船長宣布船隻將在中午出發。"],
  "car wash": ["We stopped at a car wash after driving through the mud.", "開過泥濘路段後，我們在洗車場停下來洗車。"],
  "carbon": ["Trees absorb carbon dioxide from the air.", "樹木吸收空氣中的二氧化碳。"],
  "caregiver": ["The caregiver helped him prepare breakfast each morning.", "照護者每天早上協助他準備早餐。"],
  "cargo": ["The ship carried cargo from Taiwan to Japan.", "這艘船把貨物從臺灣運往日本。"],
  "carpenter": ["The carpenter built a wooden table for the kitchen.", "木匠為廚房做了一張木桌。"],
  "carriage": ["The horses pulled a carriage through the old town.", "馬匹拉著馬車穿過老城區。"],
  "carrot": ["He cut the carrot into thin slices for the salad.", "他把胡蘿蔔切成薄片做沙拉。"],
  "cartoon": ["The children watched a cartoon before bed.", "孩子們睡前看了一部卡通。"],
  "castle": ["The castle overlooks the river from the top of the hill.", "這座城堡從山頂俯瞰河流。"],
  "catering": ["The hotel provides catering for weddings and business events.", "這家飯店為婚禮和商務活動提供餐飲服務。"],
  "cathedral": ["Visitors admired the stained-glass windows in the cathedral.", "訪客欣賞大教堂裡的彩繪玻璃窗。"],
  "cavalry": ["The museum has an exhibit about the history of the cavalry.", "博物館有一個介紹騎兵歷史的展覽。"],
  "celebrity": ["The celebrity greeted fans outside the theater.", "這位名人在劇院外向粉絲打招呼。"],
  "cellar": ["The restaurant stores its wine in a cool cellar.", "這間餐廳把酒存放在涼爽的地窖裡。"],
  "cellphone": ["Please silence your cellphone during the movie.", "看電影時請把手機調成靜音。"],
  "cement": ["The workers poured cement to make a new sidewalk.", "工人灌注水泥鋪設新的行人道。"],
  "cemetery": ["They left flowers at the cemetery on the anniversary.", "他們在週年紀念日到墓園獻花。"]
});

Object.assign(CURATED_NATURAL_MEANINGS, {
  "builder": "建造商；建築工人",
  "bureaucrat": "官員；官僚",
  "capitalization": "資本額；資本化"
});
