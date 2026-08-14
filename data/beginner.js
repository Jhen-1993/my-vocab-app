/*
 * ??????? 1954 ???
 * ??????[??, ????, ????, ????, ??]?
 * ??????????????????????
 */
var DECKS = (typeof DECKS === "object" && DECKS) ? DECKS : {};
var PARTS_OF_SPEECH = (typeof PARTS_OF_SPEECH === "object" && PARTS_OF_SPEECH) ? PARTS_OF_SPEECH : Object.create(null);
DECKS.beginner = [
  [
    "a few",
    "一些",
    "I only need a few minutes to finish this.",
    "我只需要一些時間就能完成這件事。",
    "adj."
  ],
  [
    "a little",
    "一些",
    "Can you give me a little more time?",
    "你可以再給我一點時間嗎？",
    "adv."
  ],
  [
    "a lot of",
    "許多",
    "There are a lot of people at the park today.",
    "今天公園裡有很多人。",
    "quant."
  ],
  [
    "ability",
    "本領;能力",
    "She has the ability to learn languages quickly.",
    "她有快速學習語言的能力。",
    "n."
  ],
  [
    "able",
    "有能力做～",
    "He wasn't able to finish the report on time.",
    "他沒能準時完成這份報告。",
    "adj."
  ],
  [
    "above",
    "在～上方",
    "The plane flew above the clouds.",
    "飛機飛在雲層上方。",
    "n.／adj.／adv."
  ],
  [
    "accountant",
    "會計師",
    "My sister works as an accountant for a small firm.",
    "我姊姊在一家小公司當會計師。",
    "n."
  ],
  [
    "accurately",
    "準確地",
    "Please describe the accident as accurately as you can.",
    "請盡可能準確地描述這場意外。",
    "adv."
  ],
  [
    "active",
    "活躍的",
    "My grandfather is still very active for his age.",
    "我祖父以他的年紀來說依然十分活躍。",
    "n.／adj."
  ],
  [
    "activity",
    "活動",
    "Swimming is my favorite outdoor activity.",
    "游泳是我最喜歡的戶外活動。",
    "n."
  ],
  [
    "actor",
    "演員",
    "The actor forgot his lines during the play.",
    "這位演員在演出時忘了台詞。",
    "n."
  ],
  [
    "address",
    "地址",
    "Please write your address clearly on the form.",
    "請在表格上清楚寫下你的地址。",
    "n.／v."
  ],
  [
    "advantage",
    "優勢",
    "Speaking two languages gives you an advantage at work.",
    "會說兩種語言在工作上會帶給你優勢。",
    "n.／v."
  ],
  [
    "advertisement",
    "廣告",
    "We saw an advertisement for the new phone on TV.",
    "我們在電視上看到那支新手機的廣告。",
    "n."
  ],
  [
    "advice",
    "忠告；建議",
    "My teacher gave me some useful advice about studying.",
    "我的老師給了我一些有用的讀書建議。",
    "n."
  ],
  [
    "advise",
    "提供意見",
    "The doctor advised him to rest for a week.",
    "醫生建議他休息一週。",
    "v."
  ],
  [
    "afford",
    "付得起",
    "We can't afford a new car this year.",
    "我們今年買不起新車。",
    "v."
  ],
  [
    "age",
    "年齡",
    "Children of any age can enjoy this game.",
    "任何年齡的孩子都能玩這個遊戲。",
    "n.／v."
  ],
  [
    "aim",
    "目標；意圖",
    "Our aim is to finish the project by Friday.",
    "我們的目標是在星期五前完成這個專案。",
    "n.／v."
  ],
  [
    "airfare",
    "機票票價",
    "Airfare to Japan is cheaper in the spring.",
    "春天飛往日本的機票票價比較便宜。",
    "n."
  ],
  [
    "airport",
    "機場；航空站",
    "We arrived at the airport two hours early.",
    "我們提早兩小時抵達機場。",
    "n."
  ],
  [
    "album",
    "相簿；專輯",
    "She showed me an old photo album from her trip.",
    "她給我看了一本她旅行時的舊相簿。",
    "n."
  ],
  [
    "alert",
    "機警的",
    "The guard stayed alert throughout the night.",
    "這名警衛整晚都保持機警。",
    "n.／v.／adj."
  ],
  [
    "allow",
    "允許；容許",
    "The teacher doesn't allow phones in class.",
    "老師不允許在課堂上使用手機。",
    "v."
  ],
  [
    "almost",
    "幾乎；差一點",
    "We almost missed the last train.",
    "我們差一點就錯過了最後一班火車。",
    "adv."
  ],
  [
    "along",
    "沿著",
    "We walked along the beach at sunset.",
    "我們在日落時沿著海灘散步。",
    "adv."
  ],
  [
    "always",
    "總是",
    "She always arrives early for meetings.",
    "她開會總是提早到。",
    "adv."
  ],
  [
    "although",
    "雖然；儘管",
    "Although it was raining, we went for a walk.",
    "儘管在下雨，我們還是出去散步了。",
    "conj."
  ],
  [
    "ambition",
    "抱負；野心",
    "His ambition is to open his own restaurant someday.",
    "他的抱負是有朝一日開一間自己的餐廳。",
    "n.／v."
  ],
  [
    "amazing",
    "驚人的；了不起的",
    "The view from the top of the mountain was amazing.",
    "從山頂看到的景色令人驚嘆。",
    "adj."
  ],
  [
    "animal",
    "動物",
    "The zoo has more than two hundred kinds of animals.",
    "這座動物園有超過兩百種動物。",
    "n.／adj."
  ],
  [
    "amusement",
    "愉悅；樂趣",
    "The kids screamed with amusement on the roller coaster.",
    "孩子們在雲霄飛車上開心地尖叫。",
    "n."
  ],
  [
    "announce",
    "宣布；通告",
    "The company will announce the results next week.",
    "這家公司下週會宣布結果。",
    "v."
  ],
  [
    "ankle",
    "腳踝",
    "He twisted his ankle while playing basketball.",
    "他打籃球時扭傷了腳踝。",
    "n."
  ],
  [
    "apologize",
    "道歉；謝罪",
    "She apologized for being late to the meeting.",
    "她為了開會遲到而道歉。",
    "v."
  ],
  [
    "anything",
    "無論何事",
    "You can ask me anything about the schedule.",
    "關於行程你可以問我任何事。",
    "pron."
  ],
  [
    "appetizer",
    "開胃小菜",
    "We ordered an appetizer before the main course.",
    "我們在主餐之前點了一道開胃小菜。",
    "n."
  ],
  [
    "appear",
    "出現",
    "A rainbow appeared after the storm.",
    "暴風雨過後出現了一道彩虹。",
    "v."
  ],
  [
    "application",
    "申請書",
    "I sent my job application yesterday morning.",
    "我昨天早上寄出了我的求職申請書。",
    "n."
  ],
  [
    "apply for",
    "申請",
    "She plans to apply for a scholarship next month.",
    "她打算下個月申請獎學金。",
    "phr.v."
  ],
  [
    "appointment",
    "約定；預約",
    "I have a dentist appointment tomorrow afternoon.",
    "我明天下午有一個牙醫的預約。",
    "n."
  ],
  [
    "appreciate",
    "賞識；鑑賞",
    "I really appreciate your help with this project.",
    "我真的很感激你對這個專案的幫忙。",
    "v."
  ],
  [
    "appreciation",
    "欣賞",
    "The teacher showed her appreciation with a small gift.",
    "老師用一份小禮物表達了她的感謝。",
    "n."
  ],
  [
    "approach",
    "走近",
    "A stranger approached us and asked for directions.",
    "一位陌生人走近我們並問路。",
    "n.／v."
  ],
  [
    "around",
    "周圍",
    "There are many cafes around the train station.",
    "火車站周圍有很多咖啡廳。",
    "adv."
  ],
  [
    "arm",
    "手臂",
    "He broke his arm while skiing last winter.",
    "他去年冬天滑雪時摔斷了手臂。",
    "n.／v."
  ],
  [
    "arrangement",
    "安排",
    "We made arrangements for the wedding last month.",
    "我們上個月就把婚禮的安排都做好了。",
    "n."
  ],
  [
    "arrange",
    "安排",
    "Let's arrange a time to meet next week.",
    "我們來安排下週見面的時間吧。",
    "v."
  ],
  [
    "art",
    "藝術",
    "She studied art at university for four years.",
    "她在大學讀了四年的藝術。",
    "n."
  ],
  [
    "arrival",
    "抵達",
    "Please wait at the gate until our arrival.",
    "請在登機門等我們抵達。",
    "n."
  ],
  [
    "as well as",
    "又；也；還",
    "He plays guitar as well as piano.",
    "他既會彈吉他，也會彈鋼琴。",
    "conj."
  ],
  [
    "artificial",
    "人造的；人工的",
    "The lake has artificial waterfalls for tourists.",
    "這座湖有給遊客觀賞的人工瀑布。",
    "adj."
  ],
  [
    "assistant",
    "助理",
    "My assistant will send you the files today.",
    "我的助理今天會把檔案寄給你。",
    "n.／adj."
  ],
  [
    "assistance",
    "幫助；援助",
    "The staff offered assistance to lost tourists.",
    "工作人員為迷路的遊客提供了協助。",
    "n."
  ],
  [
    "attach",
    "連接；固定",
    "Please attach your resume to the email.",
    "請將你的履歷附加到電子郵件裡。",
    "v."
  ],
  [
    "at least",
    "至少",
    "You should drink at least eight glasses of water a day.",
    "你每天至少應該喝八杯水。",
    "adv."
  ],
  [
    "attention",
    "專心；留心",
    "Please pay attention during the safety briefing.",
    "請在安全簡報時集中注意力。",
    "n."
  ],
  [
    "attendance",
    "出席",
    "Attendance at the meeting is required for all staff.",
    "所有員工都必須出席這場會議。",
    "n."
  ],
  [
    "audience",
    "觀眾；聽眾",
    "The audience clapped loudly after the show.",
    "表演結束後，觀眾熱烈鼓掌。",
    "n."
  ],
  [
    "attractive",
    "誘人的",
    "The new store has a very attractive window display.",
    "這間新店的櫥窗展示非常吸引人。",
    "adj."
  ],
  [
    "available",
    "可獲得的;可行的",
    "Is this room available for the weekend?",
    "這間房間週末可以預訂嗎？",
    "adj."
  ],
  [
    "automobile",
    "汽車",
    "The automobile industry has changed a lot in ten years.",
    "汽車產業在十年間有了很大的變化。",
    "n.／v."
  ],
  [
    "avoid",
    "避免",
    "Try to avoid busy roads during rush hour.",
    "尖峰時段請盡量避開繁忙的道路。",
    "v."
  ],
  [
    "avenue",
    "大道；途徑",
    "The hotel is located on Fifth Avenue.",
    "這間飯店位於第五大道上。",
    "n."
  ],
  [
    "award",
    "獎賞",
    "She received an award for her volunteer work.",
    "她因志工服務而獲得一項獎項。",
    "n.／v."
  ],
  [
    "badminton",
    "羽毛球",
    "We play badminton together every Saturday.",
    "我們每個星期六都會一起打羽毛球。",
    "n."
  ],
  [
    "baked",
    "烘烤",
    "I love the smell of freshly baked bread.",
    "我很喜歡剛烤好的麵包的香味。",
    "adj."
  ],
  [
    "balance",
    "平衡",
    "It's important to keep a balance between work and rest.",
    "保持工作與休息之間的平衡很重要。",
    "n.／v."
  ],
  [
    "banquet",
    "宴會",
    "The company held a banquet to celebrate its anniversary.",
    "這家公司舉辦了一場宴會來慶祝週年紀念。",
    "n.／v."
  ],
  [
    "band",
    "樂團",
    "The band played our favorite song at the concert.",
    "樂團在演唱會上演奏了我們最喜歡的歌。",
    "n.／v."
  ],
  [
    "baseball",
    "棒球",
    "My brother plays baseball for his school team.",
    "我弟弟是他們學校棒球隊的球員。",
    "n."
  ],
  [
    "bar",
    "酒吧",
    "We met some old friends at a bar downtown.",
    "我們在市區的一間酒吧遇見了幾位老朋友。",
    "n.／v."
  ],
  [
    "basketball",
    "籃球",
    "He practices basketball every day after school.",
    "他每天放學後都會練籃球。",
    "n."
  ],
  [
    "baseball cards",
    "棒球卡",
    "He collects baseball cards from his favorite players.",
    "他收集他最喜歡的球員的棒球卡。",
    "n."
  ],
  [
    "beautiful",
    "優美的",
    "The garden looks beautiful in the spring.",
    "這座花園在春天看起來十分優美。",
    "adj."
  ],
  [
    "bath",
    "沐浴",
    "She takes a warm bath every night before bed.",
    "她每晚睡前都會泡個溫水澡。",
    "n."
  ],
  [
    "become",
    "成為；變得",
    "He wants to become a doctor in the future.",
    "他將來想成為一名醫生。",
    "v."
  ],
  [
    "because",
    "因為",
    "We stayed home because it was raining heavily.",
    "我們待在家裡是因為外面下著大雨。",
    "conj."
  ],
  [
    "begin",
    "著手;開始",
    "The movie will begin in ten minutes.",
    "電影十分鐘後就要開始了。",
    "n.／v."
  ],
  [
    "before",
    "在～之前",
    "Please arrive before eight o'clock tomorrow.",
    "請在明天八點以前抵達。",
    "adv."
  ],
  [
    "belong",
    "屬於",
    "This bag belongs to my classmate.",
    "這個包包是我同學的。",
    "v."
  ],
  [
    "behind",
    "在～後面",
    "The cat hid behind the sofa.",
    "那隻貓躲在沙發後面。",
    "n.／adj.／adv."
  ],
  [
    "below",
    "在～下面",
    "The temperature dropped below zero last night.",
    "昨晚氣溫降到了零度以下。",
    "adv."
  ],
  [
    "belongings",
    "財產",
    "Please check your belongings before leaving the bus.",
    "下車前請檢查你的隨身物品。",
    "n."
  ],
  [
    "between",
    "在～之間",
    "The meeting is scheduled between two and three o'clock.",
    "會議排在兩點到三點之間。",
    "adv."
  ],
  [
    "benefit",
    "利益；益處",
    "Regular exercise has many benefits for your health.",
    "規律運動對健康有許多益處。",
    "n.／v."
  ],
  [
    "blank",
    "空白處",
    "Please fill in the blank with the correct word.",
    "請在空白處填入正確的字。",
    "n.／v.／adj."
  ],
  [
    "blackboard",
    "黑板",
    "The teacher wrote the homework on the blackboard.",
    "老師把作業寫在黑板上。",
    "n."
  ],
  [
    "block",
    "街區",
    "The bakery is just two blocks from here.",
    "那間麵包店離這裡只有兩個街區。",
    "n.／v."
  ],
  [
    "blanket",
    "毛氈",
    "She wrapped the baby in a warm blanket.",
    "她用一條溫暖的毯子把嬰兒包了起來。",
    "n.／v.／adj."
  ],
  [
    "boarding pass",
    "登機證",
    "Please have your boarding pass ready at the gate.",
    "請在登機門準備好你的登機證。",
    "n."
  ],
  [
    "board",
    "佈告；登上；板",
    "Passengers are asked to board the plane now.",
    "請乘客現在登機。",
    "n.／v."
  ],
  [
    "book",
    "書籍;預訂",
    "I need to book a table for four tonight.",
    "我今晚需要預訂一張四人桌。",
    "n.／v."
  ],
  [
    "bonus",
    "獎金；紅利",
    "Employees received a bonus at the end of the year.",
    "員工在年底收到了一筆獎金。",
    "n."
  ],
  [
    "boring",
    "無趣的；令人生厭的",
    "The lecture was so boring that I almost fell asleep.",
    "這場演講太無趣了，我差點睡著。",
    "n.／adj."
  ],
  [
    "boost",
    "促進",
    "Good sleep can boost your energy during the day.",
    "良好的睡眠能提升你白天的活力。",
    "n.／v."
  ],
  [
    "bottle",
    "瓶；罐",
    "Please bring a bottle of water on the hike.",
    "健行時請帶一瓶水。",
    "n.／v."
  ],
  [
    "born",
    "誕生",
    "She was born in a small town near the coast.",
    "她出生在海邊附近的一個小鎮。",
    "n.／adj."
  ],
  [
    "brain",
    "腦",
    "Reading books is good exercise for your brain.",
    "讀書對你的大腦是很好的鍛鍊。",
    "n.／v."
  ],
  [
    "bow",
    "鞠躬；行禮",
    "The performers bowed to the audience at the end.",
    "表演者在最後向觀眾鞠躬致意。",
    "n.／v."
  ],
  [
    "brick",
    "磚",
    "The old house is built from red brick.",
    "這棟老房子是用紅磚建造的。",
    "n."
  ],
  [
    "breakfast",
    "早餐",
    "We usually have eggs and toast for breakfast.",
    "我們早餐通常吃蛋和吐司。",
    "n.／v."
  ],
  [
    "bright",
    "光亮的",
    "The classroom was bright with morning sunlight.",
    "教室在早晨的陽光下十分明亮。",
    "adj.／adv."
  ],
  [
    "briefing",
    "簡報",
    "The manager gave a short briefing before the trip.",
    "經理在出發前做了一場簡短的簡報。",
    "n."
  ],
  [
    "broad",
    "寬闊的",
    "The company offers a broad range of services.",
    "這家公司提供廣泛的服務項目。",
    "n.／adj."
  ],
  [
    "bring",
    "帶來",
    "Don't forget to bring your umbrella tomorrow.",
    "明天別忘了帶傘。",
    "v."
  ],
  [
    "brush",
    "毛刷；畫筆",
    "She used a small brush to paint the details.",
    "她用一支小畫筆來畫細節。",
    "n.／v."
  ],
  [
    "browse",
    "翻閱；瀏覽",
    "We spent an hour browsing the bookstore.",
    "我們花了一小時在書店裡瀏覽。",
    "n.／v."
  ],
  [
    "building",
    "建築",
    "That tall building was finished last year.",
    "那棟高樓去年才完工。",
    "n."
  ],
  [
    "budget",
    "預算",
    "We need to plan a budget for the school trip.",
    "我們需要為校外教學規劃一份預算。",
    "n.／v."
  ],
  [
    "business",
    "商業；生意",
    "She started her own business two years ago.",
    "她兩年前開始經營自己的事業。",
    "n."
  ],
  [
    "burn",
    "燃燒",
    "Be careful, the pan is hot enough to burn you.",
    "小心，那個平底鍋燙得會燙傷你。",
    "n.／v."
  ],
  [
    "businessman",
    "商人",
    "The businessman flew to Tokyo for a meeting.",
    "這位商人飛往東京開會。",
    "n."
  ],
  [
    "business trip",
    "商務行程",
    "My father is away on a business trip this week.",
    "我爸爸這星期出差在外。",
    "n."
  ],
  [
    "busy",
    "忙碌的",
    "The restaurant is always busy on weekends.",
    "這間餐廳週末總是很忙碌。",
    "v.／adj."
  ],
  [
    "call",
    "稱呼；致電",
    "Please call me if you have any questions.",
    "如果有任何問題，請打電話給我。",
    "n.／v."
  ],
  [
    "camera",
    "照相機",
    "She bought a new camera for the trip.",
    "她為這趟旅行買了一台新相機。",
    "n."
  ],
  [
    "campus",
    "校園",
    "The university campus is famous for its old trees.",
    "這所大學的校園以老樹聞名。",
    "n."
  ],
  [
    "capacity",
    "容量",
    "The stadium has a capacity of fifty thousand people.",
    "這座體育場的容量是五萬人。",
    "n."
  ],
  [
    "catalog",
    "商品目錄",
    "You can order items directly from the catalog.",
    "你可以直接從商品目錄訂購商品。",
    "n.／v."
  ],
  [
    "celebrate",
    "慶祝",
    "We celebrated her birthday with a big dinner.",
    "我們用一頓豐盛的晚餐來慶祝她的生日。",
    "v."
  ],
  [
    "cash",
    "現金",
    "Do you have any cash for the parking fee?",
    "你有現金可以付停車費嗎？",
    "n.／v."
  ],
  [
    "category",
    "種類；範疇",
    "The books are organized by category on the shelf.",
    "書架上的書是依種類分類擺放的。",
    "n."
  ],
  [
    "CEO",
    "總裁",
    "The CEO announced a new plan for the company.",
    "這位總裁宣布了公司的新計畫。",
    "n."
  ],
  [
    "cell phone",
    "行動電話",
    "I left my cell phone at home this morning.",
    "我今天早上把手機忘在家裡了。",
    "n."
  ],
  [
    "certain",
    "某個；某些",
    "Certain products are not available in this store.",
    "某些產品在這間店買不到。",
    "adj."
  ],
  [
    "certificate",
    "證明書",
    "She received a certificate after finishing the course.",
    "她完成這門課程後獲得了一張證書。",
    "n.／v."
  ],
  [
    "chance",
    "機會",
    "This is a great chance to practice your English.",
    "這是練習英文的好機會。",
    "n.／v.／adj."
  ],
  [
    "change",
    "變化；改變",
    "There has been a big change in the schedule.",
    "行程有了很大的改變。",
    "n.／v."
  ],
  [
    "charge",
    "費用",
    "There is an extra charge for late check-out.",
    "延遲退房需要額外收費。",
    "n.／v."
  ],
  [
    "chart",
    "圖表",
    "The chart shows sales growth over five years.",
    "這張圖表顯示了五年間的銷售成長。",
    "n.／v."
  ],
  [
    "check out",
    "結帳",
    "We need to check out of the hotel by noon.",
    "我們必須在中午前辦理飯店退房。",
    "phr.v."
  ],
  [
    "chef",
    "廚師",
    "The chef prepared a special dish for the guests.",
    "這位廚師為賓客準備了一道特別的菜。",
    "n."
  ],
  [
    "chief",
    "主要的",
    "Traffic is the chief problem in this city.",
    "交通是這座城市的主要問題。",
    "n.／adj."
  ],
  [
    "child",
    "兒童",
    "Every child deserves a safe place to learn.",
    "每個孩子都應該擁有一個安全的學習環境。",
    "n."
  ],
  [
    "choose",
    "抉擇",
    "It's hard to choose between the two restaurants.",
    "要在這兩間餐廳之間做選擇很難。",
    "v."
  ],
  [
    "class",
    "課程；階級",
    "Our English class starts at nine tomorrow.",
    "我們的英文課明天九點開始。",
    "n.／v."
  ],
  [
    "clean",
    "潔淨的",
    "Please keep your desk clean and tidy.",
    "請保持你的桌面乾淨整齊。",
    "n.／v.／adj.／adv."
  ],
  [
    "client",
    "客戶",
    "We are meeting a client at ten this morning.",
    "我們今天早上十點要跟一位客戶開會。",
    "n."
  ],
  [
    "closely",
    "仔細地；嚴密地",
    "Please read the contract closely before signing.",
    "簽名前請仔細閱讀這份合約。",
    "adv."
  ],
  [
    "closet",
    "衣櫥",
    "She hung her coat in the closet.",
    "她把外套掛在衣櫥裡。",
    "n.／v."
  ],
  [
    "clothes",
    "衣物",
    "Please put your clean clothes in the drawer.",
    "請把你乾淨的衣物放進抽屜裡。",
    "n."
  ],
  [
    "colleague",
    "同僚",
    "I had lunch with a colleague from work.",
    "我跟一位工作上的同事一起吃午餐。",
    "n."
  ],
  [
    "collect",
    "蒐集；採集",
    "He collects stamps from different countries.",
    "他蒐集來自不同國家的郵票。",
    "n.／v.／adj.／adv."
  ],
  [
    "color",
    "色彩",
    "What color would you like for the walls?",
    "你希望牆壁漆成什麼顏色？",
    "n.／v.／adj."
  ],
  [
    "come",
    "來臨；到達",
    "Can you come to the party on Saturday?",
    "你星期六能來參加派對嗎？",
    "n.／v."
  ],
  [
    "comfortable",
    "舒適的",
    "This sofa is very comfortable to sit on.",
    "這張沙發坐起來非常舒適。",
    "adj."
  ],
  [
    "committee",
    "委員會",
    "The committee will meet again next Monday.",
    "委員會下星期一會再次開會。",
    "n."
  ],
  [
    "communication",
    "信息交流",
    "Good communication is important in every team.",
    "良好的溝通在每個團隊中都很重要。",
    "n."
  ],
  [
    "company",
    "公司",
    "She has worked for this company for five years.",
    "她在這家公司已經工作了五年。",
    "n.／v."
  ],
  [
    "computer games",
    "電腦遊戲",
    "My brother spends too much time playing computer games.",
    "我弟弟花太多時間打電腦遊戲。",
    "n."
  ],
  [
    "competitive",
    "競爭激烈的",
    "The job market for graphic designers is very competitive.",
    "平面設計師的就業市場競爭非常激烈。",
    "adj."
  ],
  [
    "condition",
    "狀況；狀態",
    "The used car is in excellent condition.",
    "這輛二手車的狀況非常好。",
    "n.／v."
  ],
  [
    "compose",
    "組成；構成",
    "Water is composed of hydrogen and oxygen.",
    "水是由氫和氧組成的。",
    "v."
  ],
  [
    "confident",
    "有信心的",
    "She felt confident before the job interview.",
    "她在求職面試前感到很有信心。",
    "adj."
  ],
  [
    "computer",
    "電腦",
    "My computer crashed while I was saving the file.",
    "我在存檔的時候電腦當機了。",
    "n."
  ],
  [
    "consider",
    "考慮",
    "We are considering moving to a bigger apartment.",
    "我們正在考慮搬到一間更大的公寓。",
    "v."
  ],
  [
    "concern",
    "擔心；關切",
    "Parents expressed concern about the school's new policy.",
    "家長們對學校的新政策表達了關切。",
    "n.／v."
  ],
  [
    "content",
    "內容物",
    "Please check the content of the box before signing.",
    "請在簽收前檢查箱子裡的內容物。",
    "n.／v.／adj."
  ],
  [
    "conference room",
    "會議室",
    "The meeting will be held in conference room B.",
    "會議將在 B 會議室舉行。",
    "n."
  ],
  [
    "convenience store",
    "便利商店",
    "I bought a coffee at the convenience store this morning.",
    "我今天早上在便利商店買了一杯咖啡。",
    "n."
  ],
  [
    "consist",
    "由…組成",
    "The team consists of five engineers and two designers.",
    "這個團隊由五位工程師和兩位設計師組成。",
    "v."
  ],
  [
    "conversation",
    "會話",
    "We had a long conversation about our future plans.",
    "我們就未來的計畫進行了一次長談。",
    "n."
  ],
  [
    "continue",
    "延續",
    "Please continue with the next chapter for homework.",
    "請繼續讀下一章作為回家作業。",
    "v."
  ],
  [
    "copy machine",
    "影印機",
    "The copy machine on the third floor is out of paper.",
    "三樓的影印機沒紙了。",
    "n."
  ],
  [
    "convenient",
    "便利的；合宜的",
    "It's more convenient to pay by credit card.",
    "用信用卡付款比較方便。",
    "adj."
  ],
  [
    "correct",
    "正確無誤的",
    "Please choose the correct answer from the list.",
    "請從清單中選出正確答案。",
    "v.／adj."
  ],
  [
    "corn",
    "玉米",
    "We grilled some corn for the barbecue party.",
    "我們為烤肉派對烤了一些玉米。",
    "n.／v."
  ],
  [
    "cotton",
    "棉布；棉花",
    "This shirt is made of one hundred percent cotton.",
    "這件襯衫是百分之百純棉製成的。",
    "n.／v."
  ],
  [
    "cost",
    "成本",
    "The total cost of the trip was higher than we expected.",
    "這趟旅行的總花費比我們預期的還高。",
    "n.／v."
  ],
  [
    "course",
    "課程；路線",
    "She is taking a photography course this semester.",
    "她這學期正在修一門攝影課程。",
    "n.／v.／adv."
  ],
  [
    "country",
    "國家；鄉村",
    "He has traveled to more than ten countries.",
    "他已經去過超過十個國家旅行。",
    "n."
  ],
  [
    "crazy",
    "瘋狂的",
    "It's crazy how fast time flies during vacation.",
    "假期時間過得這麼快真是瘋狂。",
    "n.／adj."
  ],
  [
    "cover",
    "遮蔽",
    "Please cover the food before putting it in the fridge.",
    "放進冰箱前請先把食物蓋起來。",
    "n.／v."
  ],
  [
    "credit card",
    "信用卡",
    "I paid for the tickets with my credit card.",
    "我用信用卡付了票錢。",
    "n."
  ],
  [
    "create",
    "創造",
    "The app was created by a small team of students.",
    "這個應用程式是由一小群學生創造出來的。",
    "v."
  ],
  [
    "curious",
    "好奇的",
    "The children were curious about the strange machine.",
    "孩子們對那台奇怪的機器感到好奇。",
    "adj."
  ],
  [
    "cultural",
    "文化上的",
    "The festival celebrates the city's cultural diversity.",
    "這場節慶慶祝這座城市的文化多元性。",
    "adj."
  ],
  [
    "cut",
    "切；割",
    "Please cut the vegetables into small pieces.",
    "請把蔬菜切成小塊。",
    "n.／v.／adj."
  ],
  [
    "customer",
    "顧客",
    "The store offers a discount to loyal customers.",
    "這間店為忠實顧客提供折扣。",
    "n."
  ],
  [
    "damage",
    "損害",
    "The storm caused serious damage to the roof.",
    "這場暴風雨對屋頂造成了嚴重的損害。",
    "n.／v."
  ],
  [
    "dancer",
    "舞蹈家",
    "She has trained as a professional dancer for ten years.",
    "她已經接受專業舞者的訓練十年了。",
    "n."
  ],
  [
    "dangerous",
    "危險的",
    "It's dangerous to swim in this area during high tide.",
    "漲潮時在這個區域游泳很危險。",
    "adj."
  ],
  [
    "deal",
    "處理",
    "I'll deal with the customer's complaint right away.",
    "我會馬上處理這位顧客的投訴。",
    "n.／v."
  ],
  [
    "debate",
    "討論；辯論",
    "The two candidates had a debate on live television.",
    "這兩位候選人在電視現場進行了一場辯論。",
    "n.／v."
  ],
  [
    "decision",
    "決定；抉擇",
    "It took her a week to make a final decision.",
    "她花了一週的時間才做出最終決定。",
    "n."
  ],
  [
    "decorate",
    "裝飾",
    "We decorated the classroom for the holiday party.",
    "我們為節日派對裝飾了教室。",
    "v."
  ],
  [
    "degree",
    "度數；程度",
    "The water temperature dropped by ten degrees overnight.",
    "水溫在一夜之間下降了十度。",
    "n."
  ],
  [
    "deliver",
    "送往某處",
    "The company promises to deliver orders within two days.",
    "這家公司承諾在兩天內送達訂單。",
    "v."
  ],
  [
    "delicious",
    "美味的",
    "The soup smells absolutely delicious.",
    "這道湯聞起來非常美味。",
    "n.／adj."
  ],
  [
    "department",
    "科系；部門",
    "She works in the marketing department of the company.",
    "她在這家公司的行銷部門工作。",
    "n."
  ],
  [
    "dentist",
    "牙醫",
    "I have an appointment with the dentist tomorrow morning.",
    "我明天早上跟牙醫有約。",
    "n."
  ],
  [
    "depend",
    "看情況；依賴",
    "Whether we go depends on the weather tomorrow.",
    "我們去不去要看明天的天氣而定。",
    "v."
  ],
  [
    "departure",
    "啟程",
    "Please arrive at the gate one hour before departure.",
    "請在啟程前一小時抵達登機門。",
    "n."
  ],
  [
    "description",
    "敘述；形容",
    "The job description lists all the required skills.",
    "這份職務描述列出了所有必要的技能。",
    "n."
  ],
  [
    "deposit",
    "定金；頭期款",
    "We paid a deposit to reserve the apartment.",
    "我們付了一筆訂金來預訂這間公寓。",
    "n.／v."
  ],
  [
    "desire",
    "渴望",
    "She has a strong desire to study abroad.",
    "她有強烈的出國留學渴望。",
    "n.／v."
  ],
  [
    "design",
    "設計",
    "The new phone has a very simple design.",
    "這支新手機的設計非常簡約。",
    "n.／v."
  ],
  [
    "detail",
    "細節",
    "Please explain the plan in more detail.",
    "請更詳細地說明這項計畫。",
    "n.／v."
  ],
  [
    "dessert",
    "甜點",
    "We shared a chocolate cake for dessert.",
    "我們分享了一塊巧克力蛋糕當甜點。",
    "n."
  ],
  [
    "difficult",
    "困難的",
    "Learning a new language can be difficult at first.",
    "學習一種新語言一開始可能會很困難。",
    "adj."
  ],
  [
    "difference",
    "差異",
    "There is a big difference between the two designs.",
    "這兩種設計之間有很大的差異。",
    "n."
  ],
  [
    "direct",
    "直接的",
    "This is a direct flight with no stops.",
    "這是一班中途不停靠的直飛航班。",
    "v.／adj.／adv."
  ],
  [
    "dinner",
    "晚餐",
    "Let's have dinner together after work.",
    "我們下班後一起吃晚餐吧。",
    "n."
  ],
  [
    "discuss",
    "商討；闡述",
    "We need to discuss the budget before the meeting ends.",
    "我們需要在會議結束前討論預算。",
    "v."
  ],
  [
    "discount",
    "折扣",
    "Students can get a ten percent discount here.",
    "學生在這裡可以享有九折的折扣。",
    "n.／v."
  ],
  [
    "display",
    "展示；陳列",
    "The new products are on display near the entrance.",
    "新產品陳列在入口附近。",
    "n.／v."
  ],
  [
    "discussion",
    "談論",
    "The discussion lasted longer than we expected.",
    "這場討論持續得比我們預期的還久。",
    "n."
  ],
  [
    "draw",
    "繪畫",
    "My daughter loves to draw pictures of animals.",
    "我女兒很喜歡畫動物的圖畫。",
    "n.／v."
  ],
  [
    "doctor",
    "醫師",
    "The doctor recommended more rest and less stress.",
    "醫生建議要多休息、減少壓力。",
    "n.／v."
  ],
  [
    "drink",
    "飲用",
    "Remember to drink enough water during the hike.",
    "健行時記得要喝足夠的水。",
    "n.／v."
  ],
  [
    "dress",
    "洋裝；穿著",
    "She wore a blue dress to the wedding.",
    "她穿了一件藍色洋裝去參加婚禮。",
    "n.／v.／adj."
  ],
  [
    "due",
    "預定",
    "The report is due by the end of this week.",
    "這份報告預定要在本週結束前完成。",
    "n.／adj.／adv."
  ],
  [
    "duty",
    "義務；責任",
    "It's the manager's duty to check every order.",
    "檢查每一筆訂單是經理的責任。",
    "n."
  ],
  [
    "during",
    "在～期間",
    "Please turn off your phone during the exam.",
    "考試期間請關閉你的手機。",
    "prep."
  ],
  [
    "early",
    "初期的；及早",
    "We arrived early to get good seats.",
    "我們提早到達以搶到好座位。",
    "adj.／adv."
  ],
  [
    "earn",
    "掙錢",
    "He earns extra money by tutoring on weekends.",
    "他透過週末家教來賺取額外的收入。",
    "v."
  ],
  [
    "Earth",
    "地球",
    "Earth is the only planet known to support life.",
    "地球是目前已知唯一能維持生命的行星。",
    "n.／v."
  ],
  [
    "easy",
    "容易的",
    "This recipe is easy enough for beginners.",
    "這道食譜對初學者來說夠簡單了。",
    "adj.／adv."
  ],
  [
    "eat",
    "進食",
    "Try not to eat too fast during meals.",
    "吃飯時盡量不要吃太快。",
    "v."
  ],
  [
    "effectively",
    "有效地",
    "She communicates effectively with clients from different countries.",
    "她能有效地和來自不同國家的客戶溝通。",
    "adv."
  ],
  [
    "efficiently",
    "有效率地",
    "The new system helps staff work more efficiently.",
    "這套新系統幫助員工更有效率地工作。",
    "adv."
  ],
  [
    "either ... or",
    "或者",
    "You can choose either the window seat or the aisle seat.",
    "你可以選擇靠窗座位或走道座位。",
    "conj."
  ],
  [
    "electrical",
    "電力的",
    "An electrical problem caused the power outage.",
    "一個電力問題導致了這次停電。",
    "adj."
  ],
  [
    "email",
    "電子郵件",
    "I'll send you the details by email tonight.",
    "我今晚會用電子郵件把細節寄給你。",
    "n.／v."
  ],
  [
    "emphasize",
    "強調；著重",
    "The coach emphasized the importance of teamwork.",
    "教練強調了團隊合作的重要性。",
    "v."
  ],
  [
    "employee",
    "受雇者",
    "Every employee received a small bonus this year.",
    "今年每位員工都收到了一筆小額獎金。",
    "n."
  ],
  [
    "energy",
    "力量；能源",
    "Solar panels turn sunlight into clean energy.",
    "太陽能板能把陽光轉化成乾淨的能源。",
    "n."
  ],
  [
    "engine",
    "引擎",
    "The mechanic checked the engine before the long drive.",
    "技師在長途開車前檢查了引擎。",
    "n."
  ],
  [
    "English",
    "英語",
    "She has been studying English for three years.",
    "她已經學了三年的英語。",
    "n.／adj."
  ],
  [
    "enjoy",
    "喜歡；享受",
    "We really enjoyed our vacation in the mountains.",
    "我們非常享受在山上的這趟假期。",
    "v."
  ],
  [
    "enroll",
    "招生；註冊",
    "More students enrolled in the class this semester.",
    "這學期有更多學生註冊了這門課。",
    "v."
  ],
  [
    "ensure",
    "確保",
    "Please double-check to ensure all doors are locked.",
    "請再次檢查以確保所有門都鎖好了。",
    "v."
  ],
  [
    "entertainer",
    "藝人",
    "The party hired a professional entertainer for the kids.",
    "這場派對雇用了一位專業藝人來娛樂小朋友。",
    "n."
  ],
  [
    "error",
    "錯誤",
    "There was a small error in the calculation.",
    "這個計算裡有一個小錯誤。",
    "n."
  ],
  [
    "entire",
    "全部的",
    "The entire building was evacuated during the drill.",
    "演習期間整棟大樓都被疏散了。",
    "n.／adj."
  ],
  [
    "establish",
    "創立",
    "The company was established more than fifty years ago.",
    "這家公司是在五十多年前創立的。",
    "v."
  ],
  [
    "equipment",
    "設備",
    "The gym recently bought new exercise equipment.",
    "這間健身房最近購買了新的運動設備。",
    "n."
  ],
  [
    "eTicket",
    "電子票券",
    "You can show your eTicket on your phone at the gate.",
    "你可以在登機門用手機出示電子票券。",
    "n."
  ],
  [
    "especially",
    "尤其；格外",
    "The dessert here is especially popular with kids.",
    "這裡的甜點特別受小朋友歡迎。",
    "adv."
  ],
  [
    "even",
    "甚至；即使",
    "Even the manager didn't know about the change.",
    "就連經理也不知道這項變更。",
    "n.／v.／adj.／adv."
  ],
  [
    "ever",
    "無論何時",
    "Have you ever tried Thai food before?",
    "你以前有嘗試過泰式料理嗎？",
    "adv."
  ],
  [
    "everybody",
    "每個人",
    "Everybody agreed to meet at the same place next time.",
    "大家都同意下次在同一個地方碰面。",
    "pron."
  ],
  [
    "excellent",
    "卓越的",
    "She received an excellent score on the final exam.",
    "她在期末考中拿到了優異的成績。",
    "adj."
  ],
  [
    "exciting",
    "令人興奮的",
    "The last few minutes of the game were really exciting.",
    "這場比賽最後幾分鐘真的很讓人興奮。",
    "adj."
  ],
  [
    "excuse",
    "藉口",
    "He gave a poor excuse for missing the meeting.",
    "他為缺席會議找了一個很爛的藉口。",
    "n.／v."
  ],
  [
    "executive",
    "主管；行政人員",
    "The executive approved the new marketing plan.",
    "這位主管核准了新的行銷計畫。",
    "n.／adj."
  ],
  [
    "exercise",
    "訓練；習題",
    "Regular exercise helps reduce stress.",
    "規律的運動有助於減輕壓力。",
    "n.／v."
  ],
  [
    "expand",
    "擴展",
    "The company plans to expand into overseas markets.",
    "這家公司計畫擴展到海外市場。",
    "v."
  ],
  [
    "expect",
    "預料；預期",
    "We expect the package to arrive by Friday.",
    "我們預期這個包裹星期五前會送達。",
    "v."
  ],
  [
    "expense",
    "開銷；支出",
    "Travel expense will be covered by the company.",
    "差旅開銷將由公司負擔。",
    "n.／v."
  ],
  [
    "experience",
    "經驗",
    "He has five years of experience in customer service.",
    "他有五年的客戶服務經驗。",
    "n.／v."
  ],
  [
    "expert",
    "專家",
    "An expert was invited to speak at the conference.",
    "一位專家受邀在研討會上演講。",
    "n.／adj."
  ],
  [
    "explain",
    "解釋；說明",
    "Could you explain how this machine works?",
    "你可以說明一下這台機器是怎麼運作的嗎？",
    "v."
  ],
  [
    "express",
    "表達；陳述",
    "She wrote a letter to express her thanks.",
    "她寫了一封信來表達她的感謝。",
    "n.／v.／adj.／adv."
  ],
  [
    "extra",
    "額外的",
    "We need extra chairs for the guests.",
    "我們需要多準備幾張椅子給賓客。",
    "n.／adj.／adv."
  ],
  [
    "face",
    "臉部",
    "His face turned red with embarrassment.",
    "他的臉因為尷尬而漲紅了。",
    "n.／v."
  ],
  [
    "facility",
    "設施",
    "The hotel offers a swimming pool and other facilities.",
    "這間飯店提供游泳池和其他設施。",
    "n."
  ],
  [
    "familiar",
    "熟悉的",
    "This street looks familiar to me.",
    "這條街對我來說看起來很熟悉。",
    "n.／adj."
  ],
  [
    "fall down",
    "跌倒；倒塌",
    "Be careful not to fall down on the wet floor.",
    "小心不要在濕滑的地板上跌倒。",
    "phr.v."
  ],
  [
    "fan",
    "崇拜者",
    "He is a huge fan of that basketball team.",
    "他是那支籃球隊的忠實粉絲。",
    "n.／v."
  ],
  [
    "famous",
    "著名的",
    "The city is famous for its old temples.",
    "這座城市以其古老的寺廟聞名。",
    "adj."
  ],
  [
    "faucet",
    "水龍頭",
    "The faucet in the kitchen is leaking again.",
    "廚房的水龍頭又在漏水了。",
    "n."
  ],
  [
    "fashion",
    "流行；時髦",
    "She always follows the latest fashion trends.",
    "她總是跟隨最新的流行趨勢。",
    "n.／v."
  ],
  [
    "fee",
    "酬勞；服務費",
    "There is a small fee for using the parking lot.",
    "使用這座停車場需要付一筆小額費用。",
    "n.／v."
  ],
  [
    "favorite",
    "最喜歡的",
    "Pizza is my favorite food.",
    "披薩是我最喜歡的食物。",
    "n.／adj."
  ],
  [
    "feel",
    "感受；體會",
    "I feel much better after a good night's sleep.",
    "好好睡了一覺之後我感覺好多了。",
    "n.／v."
  ],
  [
    "feedback",
    "回饋意見",
    "The teacher gave useful feedback on my essay.",
    "老師針對我的文章給了有用的回饋意見。",
    "n."
  ],
  [
    "figure",
    "數字",
    "The sales figure for this month looks promising.",
    "這個月的銷售數字看起來很有希望。",
    "n.／v."
  ],
  [
    "foot",
    "足部",
    "He hurt his foot while playing soccer yesterday.",
    "他昨天踢足球時傷到了腳。",
    "n.／v."
  ],
  [
    "fill",
    "填滿",
    "Please fill the bottle with clean water.",
    "請把瓶子裝滿乾淨的水。",
    "n.／v."
  ],
  [
    "file",
    "檔案；卷宗",
    "Please save the file before closing the program.",
    "關閉程式前請先儲存檔案。",
    "n.／v."
  ],
  [
    "final",
    "最終的",
    "The final decision will be made by the manager.",
    "最終的決定將由經理做出。",
    "n.／adj."
  ],
  [
    "fill out",
    "填寫",
    "Please fill out this form before your appointment.",
    "請在你的預約前填寫這張表格。",
    "phr.v."
  ],
  [
    "find",
    "發現；找到",
    "I can't find my keys anywhere.",
    "我到處都找不到我的鑰匙。",
    "n.／v."
  ],
  [
    "finish",
    "完成；終止",
    "We need to finish the project by next Monday.",
    "我們需要在下週一之前完成這個專案。",
    "n.／v."
  ],
  [
    "first",
    "最初",
    "This is the first time I've visited this city.",
    "這是我第一次造訪這座城市。",
    "n.／adj.／adv."
  ],
  [
    "five",
    "五",
    "There are five people in my family.",
    "我家裡有五個人。",
    "n.／adj."
  ],
  [
    "flexible",
    "靈活的；有彈性的",
    "Her work schedule is quite flexible.",
    "她的工作時間相當有彈性。",
    "adj."
  ],
  [
    "floor",
    "地板",
    "Please take off your shoes before stepping on the floor.",
    "踩上地板前請先脫鞋。",
    "n.／v."
  ],
  [
    "flooring",
    "鋪地材料",
    "They chose wood flooring for the living room.",
    "他們為客廳選了木質地板材料。",
    "n."
  ],
  [
    "floor plan",
    "樓層平面圖",
    "The floor plan shows three bedrooms and two bathrooms.",
    "這張樓層平面圖顯示有三間臥室和兩間浴室。",
    "n."
  ],
  [
    "focus",
    "焦點；集中",
    "Try to focus on one task at a time.",
    "試著一次專注在一件工作上。",
    "n.／v."
  ],
  [
    "follow",
    "跟隨；關注",
    "Please follow the instructions carefully.",
    "請仔細遵照指示。",
    "v."
  ],
  [
    "football",
    "足球",
    "The kids play football in the park every weekend.",
    "孩子們每個週末都在公園裡踢足球。",
    "n."
  ],
  [
    "forget",
    "遺忘",
    "Don't forget to bring your ID card.",
    "別忘了帶你的身分證。",
    "v."
  ],
  [
    "formal",
    "正式的",
    "Please wear formal clothes to the dinner.",
    "請穿正式服裝出席這場晚宴。",
    "n.／adj."
  ],
  [
    "fourth",
    "第四；四分之一",
    "This is the fourth time she has visited Taiwan.",
    "這是她第四次造訪台灣。",
    "n.／adj.／adv."
  ],
  [
    "fresh",
    "新增的；新鮮的",
    "We bought some fresh vegetables at the market.",
    "我們在市場買了一些新鮮的蔬菜。",
    "adj.／adv."
  ],
  [
    "free",
    "自由的；免費的",
    "Entrance to the museum is free on Sundays.",
    "星期天參觀這間博物館是免費的。",
    "n.／v.／adj.／adv."
  ],
  [
    "friendly",
    "友善的",
    "The staff at the hotel were very friendly.",
    "這間飯店的員工非常友善。",
    "n.／adj."
  ],
  [
    "Friday",
    "星期五",
    "We usually go out for dinner on Friday nights.",
    "我們通常在星期五晚上出去吃晚餐。",
    "n."
  ],
  [
    "furnish",
    "配置家具",
    "The landlord agreed to furnish the apartment.",
    "房東同意為這間公寓配置家具。",
    "v."
  ],
  [
    "front desk",
    "櫃檯",
    "Please leave your key at the front desk.",
    "請把鑰匙留在櫃檯。",
    "n."
  ],
  [
    "fun",
    "有趣的；令人愉快的",
    "We had a lot of fun at the beach yesterday.",
    "我們昨天在海灘玩得很開心。",
    "n."
  ],
  [
    "gain",
    "獲得",
    "She gained a lot of confidence from the experience.",
    "她從這次經驗中獲得了很多自信。",
    "n.／v."
  ],
  [
    "gasoline",
    "汽油",
    "The price of gasoline went up again this week.",
    "這星期汽油的價格又上漲了。",
    "n."
  ],
  [
    "generally",
    "大致上;普遍地",
    "Generally speaking, the weather here is mild.",
    "大致上來說，這裡的天氣算是溫和。",
    "adv."
  ],
  [
    "garbage",
    "垃圾；廢話",
    "Please take out the garbage before you leave.",
    "離開前請把垃圾拿出去丟。",
    "n."
  ],
  [
    "gentle",
    "溫和的",
    "She spoke in a gentle voice to calm the child.",
    "她用溫和的聲音說話來安撫那個孩子。",
    "v.／adj."
  ],
  [
    "get in touch with",
    "與～取得聯繫",
    "Please get in touch with me if you have any questions.",
    "如果有任何問題，請與我聯繫。",
    "phr.v."
  ],
  [
    "Germany",
    "德國",
    "They moved to Germany for my father's new job.",
    "他們為了我爸爸的新工作搬到了德國。",
    "n."
  ],
  [
    "give",
    "提供；給",
    "Could you give me some advice about the exam?",
    "你可以給我一些關於考試的建議嗎？",
    "n.／v."
  ],
  [
    "get together",
    "聚會",
    "Let's get together for coffee sometime next week.",
    "我們下週找時間一起喝杯咖啡聚聚吧。",
    "n.／v."
  ],
  [
    "goal",
    "目標",
    "Her goal is to run a marathon next year.",
    "她的目標是明年跑一場馬拉松。",
    "n."
  ],
  [
    "golf",
    "高爾夫球",
    "My uncle plays golf every Sunday morning.",
    "我叔叔每個星期天早上都會打高爾夫球。",
    "n.／v."
  ],
  [
    "greeting",
    "問候；招呼",
    "She sent a greeting card to her grandmother.",
    "她寄了一張問候卡給她的祖母。",
    "n."
  ],
  [
    "great",
    "極好的",
    "We had a great time at the concert last night.",
    "我們昨晚在演唱會上玩得非常開心。",
    "n.／adj."
  ],
  [
    "grow",
    "成長",
    "Children grow so quickly in their first few years.",
    "孩子在最初幾年裡成長得非常快。",
    "v."
  ],
  [
    "group",
    "群組",
    "Our class was divided into four groups for the project.",
    "我們班為了這個專案被分成四組。",
    "n.／v."
  ],
  [
    "guitar",
    "吉他",
    "He taught himself to play the guitar during the summer.",
    "他在暑假期間自學吉他。",
    "n."
  ],
  [
    "guest",
    "賓客",
    "The hotel welcomed over two hundred guests this weekend.",
    "這間飯店這個週末迎接了超過兩百位賓客。",
    "n."
  ],
  [
    "gym",
    "健身房",
    "She goes to the gym three times a week.",
    "她每週去健身房三次。",
    "n."
  ],
  [
    "hair",
    "頭髮",
    "She cut her hair short for the summer.",
    "她為了夏天把頭髮剪短了。",
    "n."
  ],
  [
    "hairdryer",
    "吹風機",
    "I forgot to pack a hairdryer for the trip.",
    "我忘了為這趟旅行帶吹風機。",
    "n."
  ],
  [
    "hall",
    "大廳；走廊",
    "The wedding reception was held in the main hall.",
    "婚宴是在主大廳舉行的。",
    "n."
  ],
  [
    "happen",
    "發生",
    "Nobody knows exactly what happened at the meeting.",
    "沒有人確切知道會議上發生了什麼事。",
    "v."
  ],
  [
    "hard",
    "堅硬的；棘手的",
    "Math was always a hard subject for him.",
    "數學對他來說一直是門很難的學科。",
    "adj.／adv."
  ],
  [
    "headache",
    "頭痛；難題",
    "I have a terrible headache after staring at the screen all day.",
    "盯著螢幕看了一整天後，我頭痛得厲害。",
    "n."
  ],
  [
    "headset",
    "耳機",
    "She wore a headset during the online meeting.",
    "她在線上會議中戴著耳機。",
    "n."
  ],
  [
    "healthy",
    "健康的",
    "Eating vegetables every day keeps you healthy.",
    "每天吃蔬菜能讓你保持健康。",
    "adj."
  ],
  [
    "hear",
    "聆聽",
    "I could hear music coming from the next room.",
    "我能聽到隔壁房間傳來的音樂聲。",
    "v."
  ],
  [
    "heart",
    "心臟",
    "Regular exercise is good for your heart.",
    "規律運動對你的心臟有好處。",
    "n."
  ],
  [
    "heat",
    "熱度",
    "Turn down the heat before the soup boils over.",
    "在湯溢出來之前把火調小一點。",
    "n.／v."
  ],
  [
    "heavy",
    "沉重的",
    "This suitcase is too heavy for me to carry alone.",
    "這個行李箱太重了，我一個人拿不動。",
    "n.／adj.／adv."
  ],
  [
    "help",
    "幫助",
    "Thank you for your help with the presentation.",
    "謝謝你在簡報方面的幫忙。",
    "n.／v."
  ],
  [
    "hire",
    "雇用",
    "The restaurant plans to hire two new waiters.",
    "這間餐廳計畫雇用兩名新服務生。",
    "n.／v."
  ],
  [
    "highlight",
    "突顯",
    "The report highlights the company's main achievements.",
    "這份報告突顯了公司的主要成就。",
    "n.／v."
  ],
  [
    "hold",
    "握住；保持",
    "Please hold the door open for the next person.",
    "請幫下一位客人扶著門。",
    "n.／v."
  ],
  [
    "hobby",
    "嗜好",
    "Painting has been her hobby since childhood.",
    "畫畫從她小時候就是她的嗜好。",
    "n."
  ],
  [
    "hope",
    "希望；盼望",
    "We hope to visit Japan again next spring.",
    "我們希望明年春天能再次造訪日本。",
    "n.／v."
  ],
  [
    "holiday",
    "假日",
    "The shop will be closed for the national holiday.",
    "這間店在國定假日會休息。",
    "n.／v."
  ],
  [
    "host",
    "主人；主辦",
    "The city will host the sports event next year.",
    "這座城市明年將主辦這場體育賽事。",
    "n.／v."
  ],
  [
    "hospital",
    "醫院",
    "He was taken to the hospital after the accident.",
    "他在意外發生後被送往醫院。",
    "n."
  ],
  [
    "human",
    "人類",
    "Every human being deserves respect and kindness.",
    "每個人都值得被尊重與善待。",
    "n.／adj."
  ],
  [
    "however",
    "然而",
    "The plan sounds good; however, we need more time.",
    "這個計畫聽起來不錯，然而我們需要更多時間。",
    "adv."
  ],
  [
    "hurt",
    "受傷",
    "She hurt her back while lifting a heavy box.",
    "她在搬一個重箱子時傷到了背部。",
    "n.／v.／adj."
  ],
  [
    "important",
    "重要的",
    "It's important to arrive on time for the interview.",
    "準時參加面試很重要。",
    "adj."
  ],
  [
    "idea",
    "主意",
    "That's a great idea for the weekend trip.",
    "那是週末旅行的好主意。",
    "n."
  ],
  [
    "impression",
    "印象",
    "The new manager made a good first impression.",
    "這位新經理留下了很好的第一印象。",
    "n."
  ],
  [
    "impressive",
    "令人印象深刻的",
    "Her presentation skills are truly impressive.",
    "她的簡報能力真的令人印象深刻。",
    "adj."
  ],
  [
    "in addition",
    "除此之外",
    "In addition, the hotel offers free breakfast.",
    "除此之外，這間飯店還提供免費早餐。",
    "adv."
  ],
  [
    "in front of",
    "在～前面",
    "The bus stop is right in front of the school.",
    "公車站就在學校前面。",
    "prep."
  ],
  [
    "increase",
    "增長",
    "House prices have increased sharply this year.",
    "房價今年大幅增長。",
    "n.／v."
  ],
  [
    "including",
    "包括",
    "The price includes tax, including the service fee.",
    "這個價格包含稅金，也包括服務費。",
    "prep."
  ],
  [
    "inexpensive",
    "廉價的",
    "We found an inexpensive but comfortable hotel downtown.",
    "我們在市區找到一間便宜又舒適的飯店。",
    "adj."
  ],
  [
    "independent",
    "獨立的；自主的",
    "She became financially independent after graduation.",
    "她畢業後就在經濟上變得獨立自主。",
    "n.／adj."
  ],
  [
    "information",
    "情報；資料",
    "Please provide your contact information below.",
    "請在下方提供你的聯絡資料。",
    "n."
  ],
  [
    "influence",
    "影響",
    "Her teacher had a great influence on her career choice.",
    "她的老師對她的職業選擇有很大的影響。",
    "n.／v."
  ],
  [
    "interested",
    "感興趣的",
    "He is very interested in learning about space.",
    "他對學習太空知識非常感興趣。",
    "adj."
  ],
  [
    "injury",
    "傷害；損害",
    "The player is recovering from a knee injury.",
    "這位選手正從膝蓋傷勢中恢復。",
    "n."
  ],
  [
    "international",
    "國際的",
    "The company attends an international trade fair every year.",
    "這家公司每年都會參加一場國際貿易展。",
    "n.／adj."
  ],
  [
    "interest",
    "興趣",
    "She has a strong interest in classical music.",
    "她對古典音樂有濃厚的興趣。",
    "n.／v."
  ],
  [
    "interview",
    "面試；訪談",
    "He felt nervous before the job interview.",
    "他在求職面試前感到緊張。",
    "n.／v."
  ],
  [
    "Internet",
    "網路",
    "The Internet connection here is quite slow.",
    "這裡的網路連線相當慢。",
    "n."
  ],
  [
    "invite",
    "邀請",
    "We'd like to invite you to our house for dinner.",
    "我們想邀請你來我們家吃晚餐。",
    "n.／v."
  ],
  [
    "jeans",
    "牛仔褲",
    "He wore jeans and a T-shirt to the casual party.",
    "他穿著牛仔褲和 T 恤參加這場輕鬆的派對。",
    "n."
  ],
  [
    "jog",
    "慢跑",
    "She jogs around the park every morning before work.",
    "她每天上班前都會在公園慢跑。",
    "n.／v."
  ],
  [
    "Japan",
    "日本",
    "We are planning a trip to Japan this autumn.",
    "我們正計畫今年秋天去日本旅行。",
    "n.／v."
  ],
  [
    "joke",
    "笑話；玩笑",
    "He told a joke that made everyone laugh.",
    "他說了一個笑話逗得大家都笑了。",
    "n.／v."
  ],
  [
    "job",
    "工作",
    "She got a new job at a marketing company.",
    "她在一家行銷公司找到了新工作。",
    "n.／v."
  ],
  [
    "just",
    "剛好；僅僅；方才",
    "I just finished cleaning the whole house.",
    "我剛好清理完整間房子。",
    "adj.／adv."
  ],
  [
    "join",
    "參加",
    "Would you like to join us for lunch?",
    "你想加入我們一起吃午餐嗎？",
    "n.／v."
  ],
  [
    "juice",
    "果汁",
    "She drinks a glass of orange juice every morning.",
    "她每天早上都會喝一杯柳橙汁。",
    "n."
  ],
  [
    "know",
    "明白",
    "I don't know the answer to that question.",
    "我不知道那個問題的答案。",
    "n.／v."
  ],
  [
    "keep up",
    "持續；跟上",
    "It's hard to keep up with all the new technology.",
    "要跟上所有的新科技很困難。",
    "phr.v."
  ],
  [
    "knowledge",
    "知識；學問",
    "He has a deep knowledge of local history.",
    "他對當地歷史有深厚的知識。",
    "n."
  ],
  [
    "lake",
    "湖泊",
    "We rented a boat and rowed across the lake.",
    "我們租了一艘船划過湖面。",
    "n."
  ],
  [
    "language",
    "語言",
    "Learning a new language takes time and practice.",
    "學習一種新語言需要時間和練習。",
    "n."
  ],
  [
    "laptop",
    "手提電腦",
    "She carries her laptop to work every day.",
    "她每天都帶著筆記型電腦去上班。",
    "n."
  ],
  [
    "large",
    "大量的；巨大的",
    "The company has a large number of overseas clients.",
    "這家公司擁有大量的海外客戶。",
    "n.／adj.／adv."
  ],
  [
    "laugh",
    "笑聲",
    "Her jokes always make the whole class laugh.",
    "她的笑話總是能逗得全班大笑。",
    "n.／v."
  ],
  [
    "lead",
    "領導；領先",
    "She was chosen to lead the new project team.",
    "她被選中來領導這個新的專案團隊。",
    "n.／v."
  ],
  [
    "law",
    "法律",
    "He decided to study law at university.",
    "他決定在大學攻讀法律。",
    "n."
  ],
  [
    "learn",
    "學習；得知",
    "I learned to swim when I was six years old.",
    "我六歲的時候學會了游泳。",
    "v."
  ],
  [
    "lazy",
    "懶惰的",
    "Don't be lazy; finish your homework first.",
    "不要偷懶，先把作業寫完。",
    "adj."
  ],
  [
    "leisure",
    "空閒",
    "She spends her leisure time reading novels.",
    "她把空閒時間花在閱讀小說上。",
    "n."
  ],
  [
    "leadership",
    "領導權；領導才能",
    "The coach praised her leadership during the game.",
    "教練稱讚了她在比賽中的領導能力。",
    "n."
  ],
  [
    "let",
    "允許;讓",
    "Please let me know if you need anything.",
    "如果你需要任何東西，請讓我知道。",
    "n.／v."
  ],
  [
    "leg",
    "腿部",
    "He broke his leg while skiing last winter.",
    "他去年冬天滑雪時摔斷了腿。",
    "n."
  ],
  [
    "lift",
    "舉起",
    "He can lift heavy boxes without any help.",
    "他不需要幫忙就能舉起沉重的箱子。",
    "n.／v."
  ],
  [
    "less",
    "較少地",
    "I've been eating less sugar since last month.",
    "我從上個月開始就吃比較少的糖。",
    "adj.／adv."
  ],
  [
    "lighting",
    "照明",
    "The restaurant has warm, soft lighting.",
    "這間餐廳有溫暖柔和的照明。",
    "n."
  ],
  [
    "life",
    "生活",
    "City life can be exciting but also tiring.",
    "城市生活可以很刺激，但也很累人。",
    "n."
  ],
  [
    "link",
    "連結",
    "Please click the link to confirm your reservation.",
    "請點擊這個連結以確認你的預約。",
    "n.／v."
  ],
  [
    "light",
    "光線",
    "Natural light fills the room in the morning.",
    "早晨自然光線灑滿整個房間。",
    "n.／v.／adj.／adv."
  ],
  [
    "lively",
    "活潑的",
    "The market is always lively on weekend mornings.",
    "這座市場在週末早上總是十分熱鬧。",
    "adj."
  ],
  [
    "limited",
    "有限的",
    "Tickets for the concert are limited, so book early.",
    "這場演唱會的票數有限，請盡早訂購。",
    "n.／adj."
  ],
  [
    "location",
    "地點；位置",
    "The restaurant's location makes it easy to find.",
    "這間餐廳的位置很容易找到。",
    "n."
  ],
  [
    "list",
    "清單",
    "She made a list of things to buy before the trip.",
    "她在出發前列了一份要買的東西清單。",
    "n.／v."
  ],
  [
    "logo",
    "標識",
    "The company changed its logo last year.",
    "這家公司去年更換了它的商標。",
    "n."
  ],
  [
    "living room",
    "客廳",
    "We watched a movie together in the living room.",
    "我們在客廳一起看了一部電影。",
    "n."
  ],
  [
    "look forward to",
    "期待",
    "I'm looking forward to seeing you next week.",
    "我很期待下週能見到你。",
    "phr.v."
  ],
  [
    "lock",
    "鎖住",
    "Remember to lock the door before you leave.",
    "離開前記得把門鎖好。",
    "n.／v."
  ],
  [
    "lose",
    "失去；敗北",
    "Our team didn't want to lose the final match.",
    "我們的隊伍不想輸掉這場決賽。",
    "v."
  ],
  [
    "London",
    "倫敦",
    "She studied art history in London for two years.",
    "她在倫敦攻讀了兩年的藝術史。",
    "n."
  ],
  [
    "love",
    "愛情；鍾愛",
    "They fell in love during their college years.",
    "他們在大學時期墜入愛河。",
    "n.／v."
  ],
  [
    "look",
    "看見",
    "Take a look at this photo from our trip.",
    "看看這張我們旅行時拍的照片。",
    "n.／v."
  ],
  [
    "lunch",
    "午餐",
    "We usually have lunch together at noon.",
    "我們通常在中午一起吃午餐。",
    "n.／v."
  ],
  [
    "Los Angeles",
    "洛杉磯",
    "Her cousin has lived in Los Angeles for years.",
    "她的表親已經在洛杉磯住了好幾年。",
    "n."
  ],
  [
    "loudly",
    "大聲地",
    "Please don't talk too loudly in the library.",
    "請不要在圖書館裡太大聲說話。",
    "adv."
  ],
  [
    "lower",
    "次級的；下層的",
    "Prices are usually lower during the off-season.",
    "淡季時價格通常比較低。",
    "n.／v."
  ],
  [
    "lunch meeting",
    "午餐會",
    "We scheduled a lunch meeting with the new client.",
    "我們安排了一場與新客戶的午餐會議。",
    "n."
  ],
  [
    "main",
    "主要的",
    "The main reason for the delay was bad weather.",
    "延誤的主要原因是天候不佳。",
    "n.／adj."
  ],
  [
    "management",
    "經營；管理",
    "Good time management helps reduce stress.",
    "良好的時間管理有助於減少壓力。",
    "n."
  ],
  [
    "magazine",
    "雜誌；期刊",
    "She reads a fashion magazine every month.",
    "她每個月都會讀一本時尚雜誌。",
    "n."
  ],
  [
    "marry",
    "結婚",
    "They plan to marry next summer.",
    "他們計畫明年夏天結婚。",
    "v."
  ],
  [
    "main branch",
    "主要分支",
    "Please visit the bank's main branch for this request.",
    "這項請求請前往銀行的總行辦理。",
    "n."
  ],
  [
    "mask",
    "面具；口罩",
    "Please wear a mask if you feel unwell.",
    "如果你感覺不舒服，請戴上口罩。",
    "n.／v."
  ],
  [
    "make",
    "製造",
    "She makes her own bread every weekend.",
    "她每個週末都會自己做麵包。",
    "n.／v."
  ],
  [
    "manner",
    "方式",
    "He handled the situation in a calm manner.",
    "他以冷靜的方式處理了這個狀況。",
    "n."
  ],
  [
    "maybe",
    "也許",
    "Maybe we should try a different approach.",
    "也許我們應該嘗試不同的方法。",
    "adv."
  ],
  [
    "meet",
    "會面；結識",
    "Let's meet at the café near the station.",
    "我們在車站附近的咖啡廳碰面吧。",
    "n.／v.／adj."
  ],
  [
    "mark",
    "標示",
    "Please mark the important dates on the calendar.",
    "請在日曆上標示出重要的日期。",
    "n.／v."
  ],
  [
    "melt",
    "融化",
    "The ice cream started to melt in the sun.",
    "冰淇淋在太陽下開始融化。",
    "n.／v."
  ],
  [
    "martial arts",
    "武術",
    "He has practiced martial arts since he was ten.",
    "他從十歲開始就在練習武術。",
    "n."
  ],
  [
    "memorize",
    "熟記",
    "Students need to memorize the vocabulary list for the test.",
    "學生需要熟記這張單字表以準備考試。",
    "v."
  ],
  [
    "matter",
    "要緊；事情",
    "It doesn't matter what time you arrive.",
    "你什麼時候到都沒關係。",
    "n.／v."
  ],
  [
    "message",
    "信息",
    "She left a message on his voicemail.",
    "她在他的語音信箱裡留了一則訊息。",
    "n.／v."
  ],
  [
    "meal",
    "餐點",
    "We enjoyed a delicious meal at the new restaurant.",
    "我們在這間新餐廳享用了一頓美味的餐點。",
    "n."
  ],
  [
    "method",
    "方法；辦法",
    "This is a simple method for learning new words.",
    "這是一種學習新單字的簡單方法。",
    "n."
  ],
  [
    "meeting room",
    "會客室",
    "The interview will take place in meeting room two.",
    "面試將在二號會客室進行。",
    "n."
  ],
  [
    "mine",
    "我的",
    "That blue umbrella is mine.",
    "那把藍色的傘是我的。",
    "n.／v."
  ],
  [
    "member",
    "成員",
    "She became a member of the tennis club last year.",
    "她去年成為了這個網球社團的成員。",
    "n."
  ],
  [
    "mirror",
    "鏡子；反映",
    "She checked her hair in the mirror before leaving.",
    "她出門前在鏡子前檢查了頭髮。",
    "n.／v."
  ],
  [
    "mention",
    "提起",
    "He didn't mention anything about the schedule change.",
    "他完全沒有提到行程變更的事。",
    "n.／v."
  ],
  [
    "mistake",
    "缺失；誤會",
    "Everyone makes mistakes when learning something new.",
    "每個人在學習新事物時都會犯錯。",
    "n.／v."
  ],
  [
    "metal",
    "金屬",
    "The bridge is made of strong metal beams.",
    "這座橋是用堅固的金屬樑柱建造的。",
    "n.／v.／adj."
  ],
  [
    "model",
    "模型；典範；模特兒",
    "He built a small model of the airplane.",
    "他做了一個小型飛機模型。",
    "n.／v.／adj."
  ],
  [
    "microwave oven",
    "微波爐",
    "Just heat the soup in the microwave oven for two minutes.",
    "把湯放進微波爐加熱兩分鐘就好。",
    "n."
  ],
  [
    "more",
    "更加；更多",
    "We need more time to finish the project.",
    "我們需要更多時間來完成這個專案。",
    "n.／adj.／adv."
  ],
  [
    "minimum",
    "最低限度的",
    "The minimum age for this ride is twelve.",
    "搭乘這項遊樂設施的最低年齡是十二歲。",
    "n.／adj."
  ],
  [
    "much",
    "～得多",
    "This year's harvest was much better than last year's.",
    "今年的收成比去年好得多。",
    "n.／adj.／adv."
  ],
  [
    "missing",
    "遺失的；缺損的",
    "One page of the report is missing.",
    "這份報告少了一頁。",
    "adj."
  ],
  [
    "mix",
    "混合；攪拌",
    "Mix the flour and sugar together in a bowl.",
    "把麵粉和糖在碗裡混合在一起。",
    "n.／v."
  ],
  [
    "monitor",
    "監測；監視器",
    "The nurse checked the patient's heart monitor.",
    "護理師檢查了病患的心臟監測器。",
    "n.／v."
  ],
  [
    "mostly",
    "多半",
    "The audience was mostly made up of students.",
    "觀眾大多是學生。",
    "adv."
  ],
  [
    "movie",
    "電影",
    "We watched a scary movie last Friday night.",
    "我們上星期五晚上看了一部恐怖電影。",
    "n."
  ],
  [
    "muscle",
    "肌肉",
    "Regular exercise helps build muscle over time.",
    "規律運動能隨著時間幫助增長肌肉。",
    "n.／v."
  ],
  [
    "nation",
    "全國；民族",
    "The whole nation celebrated the team's victory.",
    "全國上下都在慶祝這支隊伍的勝利。",
    "n."
  ],
  [
    "neck",
    "頸部",
    "She wore a scarf around her neck in the cold weather.",
    "寒冷天氣裡她在脖子上圍了一條圍巾。",
    "n.／v."
  ],
  [
    "near",
    "接近",
    "The hotel is located near the train station.",
    "這間飯店位於靠近火車站的地方。",
    "v.／adj.／adv."
  ],
  [
    "nervous",
    "焦慮的；緊張的",
    "She felt nervous before her first speech.",
    "她在第一次演講前感到緊張。",
    "adj."
  ],
  [
    "narrow down",
    "縮小範圍",
    "Let's narrow down the list to three final choices.",
    "我們把清單縮小到三個最終選項吧。",
    "phr.v."
  ],
  [
    "newspaper",
    "報紙",
    "My father still reads the newspaper every morning.",
    "我爸爸至今仍每天早上讀報紙。",
    "n."
  ],
  [
    "natural",
    "正常的",
    "It's natural to feel tired after a long trip.",
    "長途旅行後感到疲累是很正常的。",
    "n.／adj."
  ],
  [
    "next",
    "隔壁的；下次的",
    "We'll continue this discussion next time.",
    "我們下次再繼續討論這個話題。",
    "adj.／adv."
  ],
  [
    "nearly",
    "幾乎；將近",
    "It's nearly midnight, so we should head home.",
    "已經快午夜了，我們該回家了。",
    "adv."
  ],
  [
    "notice",
    "感覺到；注意到",
    "Did you notice any changes in the office layout?",
    "你有注意到辦公室佈局有什麼變化嗎？",
    "n.／v."
  ],
  [
    "need",
    "需求",
    "We need more chairs for the extra guests.",
    "我們需要更多椅子給額外的賓客坐。",
    "n.／v."
  ],
  [
    "network",
    "網絡",
    "She built a strong network of contacts in the industry.",
    "她在這個產業裡建立了強大的人脈網絡。",
    "n.／v."
  ],
  [
    "New York",
    "紐約",
    "He moved to New York to work for a fashion brand.",
    "他搬到紐約為一個時尚品牌工作。",
    "n."
  ],
  [
    "noisy",
    "嘈雜的",
    "The street outside our hotel was very noisy at night.",
    "我們飯店外面的街道晚上非常吵鬧。",
    "adj."
  ],
  [
    "nothing",
    "沒事",
    "There's nothing wrong with taking a short break.",
    "稍作休息並沒有什麼不對。",
    "n.／adv."
  ],
  [
    "number",
    "號碼",
    "Please write down your phone number here.",
    "請在這裡寫下你的電話號碼。",
    "n.／v."
  ],
  [
    "offer",
    "提出",
    "The company offered him a higher salary.",
    "這家公司向他提出了更高的薪資。",
    "n.／v."
  ],
  [
    "o'clock",
    "整點",
    "The train leaves at seven o'clock sharp.",
    "火車在七點整準時出發。",
    "adv."
  ],
  [
    "often",
    "經常",
    "We often eat dinner together on Sundays.",
    "我們星期天經常一起吃晚餐。",
    "adv."
  ],
  [
    "office",
    "辦公室",
    "She works in an office near the city center.",
    "她在市中心附近的一間辦公室工作。",
    "n."
  ],
  [
    "once",
    "一次",
    "I've only been to Korea once.",
    "我只去過韓國一次。",
    "adv."
  ],
  [
    "on time",
    "準時",
    "Please make sure the report is submitted on time.",
    "請確保報告能準時提交。",
    "adj.／adv."
  ],
  [
    "operation",
    "手術；行動；運作",
    "The hospital performed the operation successfully.",
    "醫院成功完成了這場手術。",
    "n."
  ],
  [
    "online",
    "連線的",
    "Most of our classes are held online now.",
    "我們大部分的課程現在都是線上進行。",
    "adj."
  ],
  [
    "option",
    "選擇",
    "We have several options for the venue.",
    "關於場地我們有好幾個選項。",
    "n."
  ],
  [
    "opportunity",
    "機會；時機",
    "This job is a great opportunity for young graduates.",
    "這份工作對年輕畢業生來說是個很棒的機會。",
    "n."
  ],
  [
    "output",
    "產量；輸出",
    "The factory increased its output last quarter.",
    "這間工廠上一季提高了產量。",
    "n.／v."
  ],
  [
    "order",
    "訂購；秩序",
    "I placed an order for two large pizzas.",
    "我訂購了兩份大披薩。",
    "n.／v."
  ],
  [
    "over",
    "過多；完結的",
    "The meeting is finally over after three hours.",
    "開了三小時的會議終於結束了。",
    "n.／adj.／adv."
  ],
  [
    "others",
    "其他的",
    "Some students finished early, while others needed more time.",
    "有些學生提早完成，其他人則需要更多時間。",
    "pron."
  ],
  [
    "owe",
    "欠債",
    "I still owe him twenty dollars from last week.",
    "我上星期還欠他二十美元。",
    "v."
  ],
  [
    "outstanding",
    "傑出的；未解決的",
    "She received an award for outstanding performance.",
    "她因傑出的表現而獲頒獎項。",
    "adj."
  ],
  [
    "overall",
    "總體上",
    "Overall, the trip was a wonderful experience.",
    "總體來說，這趟旅行是一次很棒的經驗。",
    "n.／adj."
  ],
  [
    "own",
    "自己的",
    "Every student has their own locker at school.",
    "每個學生在學校都有自己的置物櫃。",
    "v.／adj."
  ],
  [
    "pack",
    "打包",
    "She packed her suitcase the night before the flight.",
    "她在班機起飛前一晚打包了行李箱。",
    "n.／v."
  ],
  [
    "pain",
    "疼痛",
    "He felt a sharp pain in his knee after the run.",
    "他跑完步後膝蓋感到一陣劇痛。",
    "n.／v."
  ],
  [
    "paint",
    "油漆；作畫",
    "We spent the weekend painting the fence.",
    "我們花了一個週末的時間油漆籬笆。",
    "n.／v."
  ],
  [
    "pair",
    "一對",
    "She bought a new pair of running shoes.",
    "她買了一雙新的跑步鞋。",
    "n.／v."
  ],
  [
    "parents",
    "雙親",
    "My parents live in a small town by the sea.",
    "我父母住在海邊的一個小鎮。",
    "n."
  ],
  [
    "parking lot",
    "露天停車場",
    "The parking lot was full by nine in the morning.",
    "停車場在早上九點就已經停滿了。",
    "n."
  ],
  [
    "partner",
    "配偶；夥伴",
    "She started the business with her partner last year.",
    "她去年和她的夥伴一起創立了這門生意。",
    "n.／v."
  ],
  [
    "pastime",
    "消遣；娛樂",
    "Reading is his favorite pastime on rainy days.",
    "閱讀是他在雨天最喜歡的消遣。",
    "n."
  ],
  [
    "patient",
    "患者",
    "The doctor spoke calmly to the nervous patient.",
    "醫生對著緊張的病人平靜地說話。",
    "n.／adj."
  ],
  [
    "pattern",
    "模式；圖樣",
    "The scarf has a colorful floral pattern.",
    "這條圍巾有著色彩繽紛的花朵圖樣。",
    "n.／v."
  ],
  [
    "pay",
    "付款；繳納",
    "Could you pay the bill while I get the car?",
    "我去開車的時候你可以先付帳嗎？",
    "n.／v."
  ],
  [
    "payment",
    "應付帳款；已付金額",
    "The final payment is due by the end of the month.",
    "最後一筆款項必須在月底前繳清。",
    "n."
  ],
  [
    "peer",
    "同齡者；同儕",
    "Teenagers often care a lot about peer opinions.",
    "青少年通常很在意同儕的看法。",
    "n.／v."
  ],
  [
    "pepper",
    "胡椒粉",
    "Add a little salt and pepper to taste.",
    "加一點鹽和胡椒粉調味即可。",
    "n.／v."
  ],
  [
    "perfect",
    "完美的；天衣無縫的",
    "The weather was perfect for a picnic.",
    "這天氣非常適合野餐。",
    "n.／v.／adj."
  ],
  [
    "personal",
    "私人的；親自的",
    "Please don't ask such personal questions at work.",
    "請不要在工作場合問這麼私人的問題。",
    "n.／adj."
  ],
  [
    "person／people",
    "個人／人們",
    "Many people prefer working from home nowadays.",
    "現在許多人比較喜歡在家工作。",
    "n."
  ],
  [
    "picture",
    "圖像；畫面",
    "She hung a picture of the mountains on the wall.",
    "她在牆上掛了一幅山景畫。",
    "n.／v."
  ],
  [
    "pick",
    "挑選",
    "Please pick a color you like from the chart.",
    "請從色卡中挑選一個你喜歡的顏色。",
    "n.／v."
  ],
  [
    "pillow",
    "枕頭",
    "He fell asleep as soon as his head hit the pillow.",
    "他的頭一碰到枕頭就睡著了。",
    "n.／v."
  ],
  [
    "piece",
    "碎片；切片",
    "Could I have another piece of cake, please?",
    "我可以再吃一塊蛋糕嗎？",
    "n.／v."
  ],
  [
    "plan",
    "計劃；方案",
    "We made a plan to travel next summer.",
    "我們計劃明年夏天去旅行。",
    "n.／v."
  ],
  [
    "plain",
    "顯而易見的",
    "It was plain to everyone that she was upset.",
    "大家都看得出來她很不開心。",
    "n.／v.／adj.／adv."
  ],
  [
    "plastic",
    "塑膠",
    "Please recycle plastic bottles in the blue bin.",
    "請把塑膠瓶回收到藍色的桶子裡。",
    "n.／adj."
  ],
  [
    "planet",
    "行星",
    "Mars is often called the red planet.",
    "火星常被稱為紅色行星。",
    "n."
  ],
  [
    "point",
    "觀點；關鍵",
    "That's a good point I hadn't considered.",
    "那是一個我沒考慮到的好觀點。",
    "n.／v."
  ],
  [
    "player",
    "選手；玩家",
    "The team's best player was injured last week.",
    "這支隊伍最好的選手上星期受傷了。",
    "n."
  ],
  [
    "popcorn",
    "爆米花",
    "We always buy popcorn before watching a movie.",
    "我們看電影前總是會買爆米花。",
    "n."
  ],
  [
    "pleased",
    "快樂的；滿足的",
    "I'm very pleased with how the project turned out.",
    "我對這個專案的結果感到非常滿意。",
    "adj."
  ],
  [
    "popular",
    "受歡迎的",
    "That café has become popular among students.",
    "那間咖啡廳在學生之間變得很受歡迎。",
    "adj."
  ],
  [
    "policy",
    "政策；方針",
    "The company updated its return policy last month.",
    "這家公司上個月更新了退貨政策。",
    "n."
  ],
  [
    "positive",
    "肯定的；積極的",
    "Try to stay positive even when things go wrong.",
    "即使事情出錯了也要盡量保持積極。",
    "n.／adj."
  ],
  [
    "pop music",
    "流行音樂",
    "She listens to pop music while doing homework.",
    "她做作業的時候會聽流行音樂。",
    "n."
  ],
  [
    "praise",
    "讚揚",
    "The teacher praised the students for their hard work.",
    "老師讚揚了學生們的努力。",
    "n.／v."
  ],
  [
    "position",
    "姿態；職位",
    "He was promoted to a senior position last year.",
    "他去年被升到一個資深職位。",
    "n.／v."
  ],
  [
    "present",
    "禮物；目前的",
    "She gave her mother a present for her birthday.",
    "她送了媽媽一份生日禮物。",
    "n.／v.／adj."
  ],
  [
    "possible",
    "可能的",
    "Is it possible to change our reservation to tomorrow?",
    "有可能把我們的預約改到明天嗎？",
    "n.／adj."
  ],
  [
    "pretty",
    "非常；漂亮的",
    "The garden looks pretty in the spring.",
    "這座花園在春天看起來很漂亮。",
    "adj.／adv."
  ],
  [
    "practice",
    "練習；習俗",
    "Daily practice will improve your pronunciation.",
    "每天練習會改善你的發音。",
    "n.／v."
  ],
  [
    "price",
    "價格",
    "The price of the ticket includes lunch.",
    "這張票的價格包含午餐。",
    "n.／v."
  ],
  [
    "prepare",
    "籌備；做好準備",
    "We need to prepare the report before the meeting.",
    "我們需要在會議前準備好這份報告。",
    "v."
  ],
  [
    "product",
    "產品",
    "This new product has received great reviews.",
    "這項新產品得到了很好的評價。",
    "n."
  ],
  [
    "problem",
    "問題",
    "We solved the problem before it got worse.",
    "我們在問題變嚴重之前就解決了它。",
    "n."
  ],
  [
    "purple",
    "紫色",
    "She painted her bedroom wall a soft purple.",
    "她把臥室的牆壁漆成柔和的紫色。",
    "n.／v.／adj."
  ],
  [
    "process",
    "過程；進程",
    "The hiring process usually takes about a month.",
    "招募流程通常需要大約一個月。",
    "n.／v."
  ],
  [
    "put on",
    "增加；穿上",
    "Please put on your jacket before going outside.",
    "出門前請穿上你的外套。",
    "v.／adj."
  ],
  [
    "probably",
    "很可能",
    "It will probably rain later this afternoon.",
    "今天下午稍晚很可能會下雨。",
    "adv."
  ],
  [
    "purpose",
    "目的；用途",
    "The purpose of the meeting is to plan next quarter.",
    "這場會議的目的是規劃下一季。",
    "n.／v."
  ],
  [
    "produce",
    "出產；引起",
    "This region produces most of the country's rice.",
    "這個地區生產全國大部分的稻米。",
    "n.／v."
  ],
  [
    "put together",
    "拼湊；組合",
    "It took an hour to put together the new bookshelf.",
    "花了一小時才把這個新書架組裝好。",
    "phr.v."
  ],
  [
    "professional",
    "專業的；職業選手",
    "She gave the client very professional advice.",
    "她給了客戶非常專業的建議。",
    "n.／adj."
  ],
  [
    "promising",
    "前途光明的",
    "He is a promising young writer.",
    "他是一位前途看好的年輕作家。",
    "adj."
  ],
  [
    "program",
    "程序；程式",
    "The university offers an exchange program for students.",
    "這所大學為學生提供交換學生計畫。",
    "n.／v."
  ],
  [
    "provide",
    "供給",
    "The hotel provides free breakfast for all guests.",
    "這間飯店為所有房客提供免費早餐。",
    "v."
  ],
  [
    "qualification",
    "合格證明",
    "She has the qualifications needed for the job.",
    "她具備這份工作所需的資格。",
    "n."
  ],
  [
    "question",
    "疑問",
    "Feel free to ask a question if you're unsure.",
    "如果你不確定的話，請隨時提問。",
    "n.／v."
  ],
  [
    "quote",
    "引述",
    "He often quotes famous authors in his speeches.",
    "他在演講中經常引述知名作家的話。",
    "n.／v."
  ],
  [
    "quiet",
    "寧靜的；清淡的",
    "The library is quiet enough to focus on studying.",
    "圖書館夠安靜，可以專心讀書。",
    "n.／v.／adj.／adv."
  ],
  [
    "quick",
    "短暫的；快速的",
    "Let's take a quick break before continuing.",
    "我們先短暫休息一下再繼續吧。",
    "n.／adj.／adv."
  ],
  [
    "quite",
    "相當",
    "The exam was quite difficult this year.",
    "今年的考試相當困難。",
    "adv."
  ],
  [
    "rather",
    "頗為",
    "The room was rather small for six people.",
    "這個房間對六個人來說相當小。",
    "adv."
  ],
  [
    "research",
    "研究；探索",
    "The team spent months on market research.",
    "這個團隊花了好幾個月做市場研究。",
    "n.／v."
  ],
  [
    "ready",
    "預備；準備萬全",
    "Are you ready to leave for the airport?",
    "你準備好出發去機場了嗎？",
    "n.／v.／adj."
  ],
  [
    "respect",
    "敬重",
    "Students should respect their teachers.",
    "學生應該尊敬他們的老師。",
    "n.／v."
  ],
  [
    "really",
    "的確",
    "I really appreciate your patience with me.",
    "我真的很感激你對我的耐心。",
    "adv."
  ],
  [
    "responsibility",
    "負責",
    "Taking care of the dog is his responsibility.",
    "照顧這隻狗是他的責任。",
    "n."
  ],
  [
    "rapidly",
    "迅速地",
    "The city has grown rapidly over the past decade.",
    "這座城市在過去十年間迅速成長。",
    "adv."
  ],
  [
    "restaurant",
    "餐廳",
    "We booked a table at a new restaurant downtown.",
    "我們在市區一間新餐廳訂了位。",
    "n."
  ],
  [
    "read",
    "閱覽；讀取",
    "She likes to read before going to bed.",
    "她喜歡在睡前閱讀。",
    "n.／v."
  ],
  [
    "return",
    "返回",
    "We will return home next Friday.",
    "我們下星期五就會回家。",
    "n.／v."
  ],
  [
    "realize",
    "領悟；了解",
    "He didn't realize how late it was.",
    "他沒有意識到已經這麼晚了。",
    "v."
  ],
  [
    "reward",
    "報答；酬謝",
    "Her hard work was finally rewarded with a promotion.",
    "她的努力最終得到了升遷作為回報。",
    "n.／v."
  ],
  [
    "receive",
    "接獲",
    "I received your email this morning.",
    "我今天早上收到了你的電子郵件。",
    "v."
  ],
  [
    "right",
    "正確的；右側的",
    "Turn right at the next traffic light.",
    "在下一個紅綠燈右轉。",
    "n.／v.／adj.／adv."
  ],
  [
    "recommend",
    "推薦",
    "Could you recommend a good place to eat nearby?",
    "你可以推薦附近一個好吃的地方嗎？",
    "v."
  ],
  [
    "reservation",
    "預訂",
    "We made a reservation for eight o'clock.",
    "我們預訂了八點的位子。",
    "n."
  ],
  [
    "reduce",
    "減少；降低",
    "The store reduced prices for the holiday sale.",
    "這間店為了假期特賣降低了價格。",
    "v."
  ],
  [
    "respond",
    "反應；回應",
    "She responded quickly to the customer's email.",
    "她很快地回覆了客戶的電子郵件。",
    "v."
  ],
  [
    "relationship",
    "關聯;關係",
    "They have a close relationship with their neighbors.",
    "他們和鄰居之間有著親近的關係。",
    "n."
  ],
  [
    "rush",
    "猛衝；倉促行事",
    "There's no need to rush; we have plenty of time.",
    "不用急，我們有充裕的時間。",
    "n.／v.／adj."
  ],
  [
    "remember",
    "牢記；回憶起",
    "Do you remember where we parked the car?",
    "你記得我們把車停在哪裡了嗎？",
    "v."
  ],
  [
    "review",
    "複習；評論",
    "Please review the document before tomorrow's meeting.",
    "請在明天開會前先審閱這份文件。",
    "n.／v."
  ],
  [
    "rental",
    "租金；租借",
    "The rental fee includes insurance for the car.",
    "這筆租金已經包含了汽車的保險費用。",
    "n.／adj."
  ],
  [
    "ride",
    "騎乘",
    "She likes to ride her bike to work every day.",
    "她喜歡每天騎腳踏車去上班。",
    "n.／v."
  ],
  [
    "require",
    "必須",
    "This position requires strong communication skills.",
    "這個職位需要良好的溝通能力。",
    "v."
  ],
  [
    "safety",
    "安全",
    "Wear a helmet for your own safety.",
    "為了你自己的安全，請戴上安全帽。",
    "n."
  ],
  [
    "salad",
    "沙拉",
    "I ordered a salad instead of fries.",
    "我點了沙拉而不是薯條。",
    "n."
  ],
  [
    "salesperson",
    "售貨員",
    "The salesperson helped me choose the right size.",
    "售貨員幫我選了合適的尺寸。",
    "n."
  ],
  [
    "salt",
    "粗鹽；食鹽",
    "Add a pinch of salt to the soup.",
    "在湯裡加一小撮鹽。",
    "n.／v.／adj."
  ],
  [
    "Saturday",
    "星期六",
    "We go grocery shopping every Saturday morning.",
    "我們每個星期六早上都會去採買食材。",
    "n."
  ],
  [
    "satisfy",
    "使～滿意",
    "The service here always satisfies our customers.",
    "這裡的服務總是讓我們的顧客感到滿意。",
    "v."
  ],
  [
    "schedule",
    "日程表；明細表",
    "Please check your schedule before confirming the date.",
    "確認日期前請先檢查你的行程表。",
    "n.／v."
  ],
  [
    "save",
    "拯救；節約",
    "We're trying to save money for a house.",
    "我們正試著存錢買房子。",
    "n.／v."
  ],
  [
    "science",
    "科學；理化",
    "He has always been interested in science.",
    "他一直以來都對科學很有興趣。",
    "n."
  ],
  [
    "school",
    "學校；課程",
    "My daughter walks to school every day.",
    "我女兒每天都走路去學校。",
    "n.／v."
  ],
  [
    "season",
    "季節",
    "Autumn is my favorite season of the year.",
    "秋天是我一年中最喜歡的季節。",
    "n.／v."
  ],
  [
    "search",
    "搜查；尋求",
    "We did a search online for cheap flights.",
    "我們在網路上搜尋了便宜的機票。",
    "n.／v."
  ],
  [
    "second",
    "第二；秒",
    "Just give me a second to finish this email.",
    "給我一秒鐘讓我把這封信寫完。",
    "n.／v.／adj.／adv."
  ],
  [
    "seat",
    "座位",
    "Please take a seat while you wait.",
    "請入座稍等一下。",
    "n.／v."
  ],
  [
    "select",
    "選拔；精選",
    "Please select your preferred delivery date.",
    "請選擇你偏好的配送日期。",
    "v.／adj."
  ],
  [
    "sightseeing",
    "觀光",
    "We spent the afternoon sightseeing around the old town.",
    "我們花了一整個下午在舊城區觀光。",
    "n."
  ],
  [
    "senior",
    "年長的；地位較高的",
    "The senior staff members trained the new interns.",
    "資深員工訓練了新來的實習生。",
    "n.／adj."
  ],
  [
    "serious",
    "嚴重的；認真的",
    "This is a serious matter that needs your attention.",
    "這是一件需要你注意的嚴重事情。",
    "adj."
  ],
  [
    "serve",
    "伺候；服役",
    "The restaurant serves dinner until ten at night.",
    "這間餐廳供應晚餐到晚上十點。",
    "n.／v."
  ],
  [
    "service",
    "服務",
    "The hotel is known for its excellent service.",
    "這間飯店以其優質的服務聞名。",
    "n.／v."
  ],
  [
    "several",
    "數個；各自的",
    "We visited several cities during our trip.",
    "我們在這趟旅行中造訪了好幾座城市。",
    "adj."
  ],
  [
    "share",
    "共享；分攤",
    "Let's share the cost of the taxi.",
    "我們一起分攤計程車費吧。",
    "n.／v."
  ],
  [
    "shine",
    "發光",
    "The sun shone brightly all afternoon.",
    "太陽整個下午都燦爛地照耀著。",
    "n.／v."
  ],
  [
    "shirt",
    "襯衫",
    "He wore a white shirt to the interview.",
    "他穿了一件白襯衫去面試。",
    "n.／v."
  ],
  [
    "shoe",
    "鞋；馬蹄鐵",
    "One of my shoes is missing a lace.",
    "我有一隻鞋子少了一根鞋帶。",
    "n.／v."
  ],
  [
    "short",
    "短的；矮的",
    "The meeting was short but very productive.",
    "這場會議雖然短，但非常有成效。",
    "n.／v.／adj.／adv."
  ],
  [
    "shower",
    "淋浴；蓮蓬頭",
    "I usually take a shower before breakfast.",
    "我通常在早餐前先淋浴。",
    "n.／v."
  ],
  [
    "show off",
    "炫耀；賣弄",
    "He likes to show off his new car to friends.",
    "他喜歡向朋友炫耀他的新車。",
    "phr.v."
  ],
  [
    "shuttle bus",
    "接駁公車",
    "A shuttle bus runs between the hotel and the airport.",
    "飯店和機場之間有接駁公車行駛。",
    "n."
  ],
  [
    "sick",
    "生病",
    "She stayed home because she felt sick.",
    "她因為身體不舒服而待在家裡。",
    "n.／v.／adj."
  ],
  [
    "soft drink",
    "不含酒精的飲品",
    "Would you like water or a soft drink with your meal?",
    "你的餐點想搭配水還是含糖飲料？",
    "n."
  ],
  [
    "since",
    "自從～以來",
    "We've been friends since high school.",
    "我們從高中就是朋友。",
    "prep.?conj.?adv."
  ],
  [
    "sign up",
    "簽約；報名",
    "You can sign up for the class online.",
    "你可以在網路上報名這門課。",
    "phr.v."
  ],
  [
    "ski",
    "滑雪板；雪橇",
    "They went to the mountains to ski last winter.",
    "他們去年冬天去山上滑雪。",
    "n.／v."
  ],
  [
    "simple",
    "樸素的；簡易的",
    "The instructions are simple and easy to follow.",
    "這些指示簡單易懂。",
    "n.／adj."
  ],
  [
    "smart",
    "聰穎的",
    "That was a smart decision to make.",
    "那真是一個聰明的決定。",
    "n.／v.／adj."
  ],
  [
    "singer",
    "歌手",
    "She has always dreamed of becoming a singer.",
    "她一直夢想成為一名歌手。",
    "n."
  ],
  [
    "snack",
    "零食",
    "I always keep a snack in my bag for emergencies.",
    "我總是在包包裡放一份零食以備不時之需。",
    "n.／v."
  ],
  [
    "skill",
    "技能",
    "Time management is an important skill at work.",
    "時間管理是工作中一項重要的技能。",
    "n."
  ],
  [
    "soccer",
    "足球",
    "The kids play soccer at the park every afternoon.",
    "孩子們每天下午都在公園踢足球。",
    "n."
  ],
  [
    "something",
    "某事物",
    "There's something wrong with the printer.",
    "印表機有點問題。",
    "pron."
  ],
  [
    "solve",
    "解決",
    "We need to solve this problem before the deadline.",
    "我們需要在截止期限前解決這個問題。",
    "v."
  ],
  [
    "space",
    "空間；處所",
    "We need more space to store all these boxes.",
    "我們需要更多空間來存放這些箱子。",
    "n.／v."
  ],
  [
    "spelling",
    "拼寫",
    "She checked the spelling of the word twice.",
    "她把這個字的拼寫檢查了兩次。",
    "n."
  ],
  [
    "special",
    "特殊的",
    "Today is a special day for our family.",
    "今天對我們家來說是特別的一天。",
    "n.／adj."
  ],
  [
    "stair",
    "階梯",
    "Please hold the handrail when using the stairs.",
    "使用階梯時請握好扶手。",
    "n."
  ],
  [
    "slow",
    "緩慢的",
    "The traffic was very slow on the highway.",
    "高速公路上的車流非常緩慢。",
    "v.／adj.／adv."
  ],
  [
    "standard",
    "水準；規格",
    "The hotel meets a high standard of cleanliness.",
    "這間飯店的清潔水準很高。",
    "n.／adj."
  ],
  [
    "smile",
    "微笑",
    "She greeted every guest with a warm smile.",
    "她用溫暖的微笑迎接每一位賓客。",
    "n.／v."
  ],
  [
    "statement",
    "聲明",
    "The company released a statement about the delay.",
    "這家公司針對延誤發布了一份聲明。",
    "n."
  ],
  [
    "sneakers",
    "運動鞋",
    "He wore sneakers instead of dress shoes.",
    "他穿了運動鞋而不是正式皮鞋。",
    "n."
  ],
  [
    "stay",
    "停留",
    "We plan to stay in Kyoto for three nights.",
    "我們計畫在京都停留三個晚上。",
    "n.／v."
  ],
  [
    "software",
    "軟件",
    "The company updated its software last week.",
    "這家公司上週更新了他們的軟體。",
    "n."
  ],
  [
    "strange",
    "不可思議的",
    "It was strange that no one answered the phone.",
    "沒有人接電話真是奇怪。",
    "adj."
  ],
  [
    "some",
    "一些",
    "Could you give me some water, please?",
    "可以請你給我一些水嗎？",
    "adj.／adv."
  ],
  [
    "style",
    "風格；款式",
    "Her writing style is simple and clear.",
    "她的寫作風格簡潔明瞭。",
    "n.／v."
  ],
  [
    "soon",
    "即刻",
    "The bus should arrive soon.",
    "公車應該很快就會到了。",
    "adv."
  ],
  [
    "success",
    "成功",
    "Her hard work led to great success.",
    "她的努力帶來了巨大的成功。",
    "n."
  ],
  [
    "speak",
    "交談；發言",
    "Could you speak more slowly, please?",
    "可以請你說慢一點嗎？",
    "v."
  ],
  [
    "sugar",
    "糖類",
    "I don't take sugar in my coffee.",
    "我咖啡不加糖。",
    "n.／v."
  ],
  [
    "speech",
    "演講",
    "He gave a speech at his sister's wedding.",
    "他在姊姊的婚禮上致詞。",
    "n."
  ],
  [
    "suit",
    "西裝；套裝",
    "He wore a dark suit to the interview.",
    "他穿了一套深色西裝去面試。",
    "n.／v."
  ],
  [
    "spend",
    "花費",
    "We spent the whole afternoon at the museum.",
    "我們整個下午都待在博物館裡。",
    "v."
  ],
  [
    "summer",
    "夏季",
    "We usually go camping in the summer.",
    "我們夏天通常會去露營。",
    "n.／v."
  ],
  [
    "sport",
    "體育運動",
    "Swimming is a great sport for all ages.",
    "游泳是一項適合各年齡層的運動。",
    "n.／v."
  ],
  [
    "sure",
    "確信的",
    "I'm not sure if the store is open today.",
    "我不確定這間店今天有沒有開。",
    "adj.／adv."
  ],
  [
    "staff",
    "工作人員",
    "The hotel staff were friendly and helpful.",
    "這間飯店的工作人員既友善又樂於助人。",
    "n.／v."
  ],
  [
    "surprising",
    "出乎意料的;驚訝的",
    "It was surprising how quickly the year went by.",
    "這一年過得這麼快真是令人驚訝。",
    "adj."
  ],
  [
    "staircase",
    "樓梯",
    "The old house has a wooden staircase.",
    "這棟老房子有一座木製樓梯。",
    "n."
  ],
  [
    "survey",
    "調查；鑑定",
    "We asked customers to complete a short survey.",
    "我們請顧客填寫一份簡短的調查。",
    "n.／v."
  ],
  [
    "start",
    "開始",
    "Let's start the meeting a few minutes early.",
    "我們提早幾分鐘開始開會吧。",
    "n.／v."
  ],
  [
    "such as",
    "諸如；例如",
    "She enjoys outdoor activities such as hiking and cycling.",
    "她喜歡戶外活動，例如健行和騎腳踏車。",
    "prep."
  ],
  [
    "stationery",
    "文具；信紙",
    "I bought some stationery for the new semester.",
    "我為新學期買了一些文具。",
    "n."
  ],
  [
    "suggestion",
    "意見",
    "Thank you for your helpful suggestion.",
    "謝謝你有幫助的建議。",
    "n."
  ],
  [
    "stranger",
    "陌生人",
    "She felt nervous talking to a stranger.",
    "她跟陌生人說話時感到緊張。",
    "n."
  ],
  [
    "surfing",
    "衝浪",
    "They spent the morning surfing at the beach.",
    "他們早上在海灘上衝浪。",
    "n."
  ],
  [
    "strong",
    "健壯的；結實的",
    "You need strong arms to carry this box.",
    "搬這個箱子需要強壯的手臂。",
    "adj."
  ],
  [
    "surrounding",
    "附近的；四周的",
    "The hotel is close to several surrounding attractions.",
    "這間飯店靠近好幾個附近的景點。",
    "adj."
  ],
  [
    "study",
    "讀書",
    "She likes to study in the library after school.",
    "她喜歡放學後在圖書館讀書。",
    "n.／v."
  ],
  [
    "swim",
    "游泳",
    "The kids love to swim in the summer.",
    "孩子們很喜歡在夏天游泳。",
    "n.／v."
  ],
  [
    "subject",
    "主題；學科",
    "Math is her favorite subject at school.",
    "數學是她在學校最喜歡的科目。",
    "n.／v.／adj."
  ],
  [
    "take",
    "拿取",
    "Please take a seat near the window.",
    "請在靠窗的位置坐下。",
    "n.／v."
  ],
  [
    "team",
    "隊伍；組別",
    "Our team won the competition last week.",
    "我們的隊伍上週贏得了這場比賽。",
    "n.／v."
  ],
  [
    "taste",
    "味覺；滋味",
    "This soup has a rich, savory taste.",
    "這道湯有著濃郁的鮮美滋味。",
    "n.／v."
  ],
  [
    "tell",
    "告知",
    "Please tell me if anything changes.",
    "如果有任何變化請告訴我。",
    "n.／v."
  ],
  [
    "tear",
    "眼淚",
    "A tear rolled down her cheek during the film.",
    "看電影時一滴眼淚滑落她的臉頰。",
    "n.／v."
  ],
  [
    "tennis",
    "網球",
    "They play tennis together every weekend.",
    "他們每個週末都會一起打網球。",
    "n."
  ],
  [
    "take a look",
    "注視；瞧瞧",
    "Could you take a look at this report?",
    "你能看一下這份報告嗎？",
    "phr.v."
  ],
  [
    "think",
    "認為；思考",
    "I think we should leave a little earlier.",
    "我覺得我們應該早一點出發。",
    "n.／v."
  ],
  [
    "take place",
    "發生；舉行",
    "The ceremony will take place next Saturday.",
    "典禮將在下星期六舉行。",
    "phr.v."
  ],
  [
    "throw away",
    "丟棄",
    "Please don't throw away those old photos.",
    "請不要丟掉那些舊照片。",
    "phr.v."
  ],
  [
    "talkative",
    "健談的",
    "My grandmother is always talkative at family dinners.",
    "我祖母在家庭聚餐時總是很健談。",
    "adj."
  ],
  [
    "time",
    "時間",
    "We don't have much time before the flight.",
    "我們在起飛前沒有太多時間了。",
    "n.／v."
  ],
  [
    "tax",
    "課稅",
    "The price already includes tax.",
    "這個價格已經含稅了。",
    "n.／v."
  ],
  [
    "tired",
    "疲倦的",
    "She felt tired after the long flight.",
    "經過長途飛行後她感到很疲倦。",
    "adj."
  ],
  [
    "temperature",
    "溫度",
    "The temperature dropped quickly after sunset.",
    "日落後氣溫迅速下降。",
    "n."
  ],
  [
    "tooth",
    "牙齒",
    "He brushes his teeth twice a day.",
    "他一天刷兩次牙。",
    "n."
  ],
  [
    "term",
    "術語",
    "This word is a common term in medicine.",
    "這個字是醫學上一個常見的術語。",
    "n.／v."
  ],
  [
    "training",
    "培訓；鍛鍊",
    "New employees receive two weeks of training.",
    "新進員工會接受兩週的培訓。",
    "n."
  ],
  [
    "test",
    "測驗；檢查",
    "We have a math test tomorrow morning.",
    "我們明天早上有一場數學測驗。",
    "n.／v."
  ],
  [
    "travel",
    "旅行",
    "She loves to travel to new countries every year.",
    "她喜歡每年到新的國家旅行。",
    "n.／v."
  ],
  [
    "theater",
    "劇場；戲院",
    "We watched a play at the local theater.",
    "我們在當地的劇場看了一齣戲。",
    "n."
  ],
  [
    "trouble",
    "麻煩",
    "He got into trouble for being late again.",
    "他又因為遲到而惹上麻煩。",
    "n.／v."
  ],
  [
    "thought",
    "思維；觀念",
    "Her thought process is very logical.",
    "她的思考過程非常有邏輯。",
    "n."
  ],
  [
    "trade",
    "交易；營業額",
    "The two countries agreed to increase trade.",
    "這兩個國家同意增加貿易往來。",
    "n.／v."
  ],
  [
    "Thursday",
    "星期四",
    "The meeting was moved to Thursday afternoon.",
    "會議被改到星期四下午。",
    "n."
  ],
  [
    "transportation",
    "運輸",
    "Public transportation here is fast and cheap.",
    "這裡的大眾運輸既快速又便宜。",
    "n."
  ],
  [
    "timetable",
    "時刻表",
    "Please check the train timetable before leaving.",
    "出發前請先查看火車時刻表。",
    "n."
  ],
  [
    "treat",
    "看待；處理",
    "Please treat this information as confidential.",
    "請將這項資訊視為機密處理。",
    "n.／v."
  ],
  [
    "together",
    "結合；共同",
    "We worked together to finish the project on time.",
    "我們共同合作準時完成了這個專案。",
    "adj.／adv."
  ],
  [
    "try",
    "嘗試",
    "You should try the new café downtown.",
    "你應該去試試市區那間新的咖啡廳。",
    "n.／v."
  ],
  [
    "tool",
    "器具",
    "A hammer is a basic tool for this job.",
    "鐵鎚是這項工作的基本工具。",
    "n.／v."
  ],
  [
    "understand",
    "理解；同情",
    "I understand why you're upset.",
    "我理解你為什麼會不開心。",
    "v."
  ],
  [
    "unique",
    "獨特的；難得的",
    "Each handmade item is truly unique.",
    "每一件手工製品都是獨一無二的。",
    "adj."
  ],
  [
    "upgrade",
    "升級；升職",
    "We decided to upgrade our internet plan.",
    "我們決定升級我們的網路方案。",
    "n.／v."
  ],
  [
    "update",
    "更新",
    "Please update your contact details in the system.",
    "請在系統裡更新你的聯絡資料。",
    "n.／v."
  ],
  [
    "useful",
    "有益的",
    "This app is very useful for learning vocabulary.",
    "這個應用程式對學習單字非常有幫助。",
    "adj."
  ],
  [
    "usually",
    "通常地",
    "I usually walk to work when the weather is nice.",
    "天氣好的時候我通常會走路上班。",
    "adv."
  ],
  [
    "vegetable",
    "蔬菜",
    "She grows vegetables in her backyard garden.",
    "她在自家後院的花園裡種蔬菜。",
    "n."
  ],
  [
    "vehicle",
    "運輸工具",
    "Each vehicle must pass a safety check every year.",
    "每輛車每年都必須通過安全檢查。",
    "n."
  ],
  [
    "vote",
    "表決；選票",
    "Every member has the right to vote.",
    "每位成員都有投票權。",
    "n.／v."
  ],
  [
    "video game",
    "電視遊戲",
    "My little brother plays video games after school.",
    "我弟弟放學後會打電動。",
    "n."
  ],
  [
    "volleyball",
    "排球",
    "We played volleyball on the beach all afternoon.",
    "我們整個下午都在海灘上打排球。",
    "n."
  ],
  [
    "wage",
    "時薪；日薪；週薪",
    "The company raised the minimum wage this year.",
    "這家公司今年調高了最低工資。",
    "n.／v."
  ],
  [
    "wait",
    "等候",
    "Please wait here until your name is called.",
    "請在這裡等候直到叫到你的名字。",
    "n.／v."
  ],
  [
    "warm up",
    "熱身",
    "Athletes should warm up before a race.",
    "運動員在比賽前應該先熱身。",
    "n.／v."
  ],
  [
    "washing machine",
    "洗衣機",
    "The washing machine broke down last night.",
    "洗衣機昨晚壞掉了。",
    "n."
  ],
  [
    "waste",
    "浪費；濫用",
    "Try not to waste food when eating out.",
    "外出用餐時盡量不要浪費食物。",
    "n.／v.／adj."
  ],
  [
    "write",
    "書寫",
    "She likes to write in her journal every night.",
    "她喜歡每晚在日記裡寫些什麼。",
    "v."
  ],
  [
    "way",
    "道路",
    "Can you show me the way to the station?",
    "你能告訴我去車站的路嗎？",
    "n.／adv."
  ],
  [
    "wear",
    "穿戴；磨損",
    "You should wear a coat; it's cold outside.",
    "你應該穿件外套，外面很冷。",
    "n.／v."
  ],
  [
    "website",
    "網址",
    "You can find more information on our website.",
    "你可以在我們的網站上找到更多資訊。",
    "n."
  ],
  [
    "wedding",
    "婚禮",
    "We attended a beautiful wedding last weekend.",
    "我們上週末參加了一場美麗的婚禮。",
    "n."
  ],
  [
    "weekend",
    "週末",
    "What are your plans for the weekend?",
    "你週末有什麼計畫？",
    "n.／v."
  ],
  [
    "weight",
    "重量；體重",
    "He has been trying to lose weight since spring.",
    "他從春天開始就一直在努力減重。",
    "n.／v."
  ],
  [
    "welcome",
    "迎接",
    "The staff welcomed us with a warm smile.",
    "工作人員用溫暖的微笑迎接我們。",
    "n.／v.／adj."
  ],
  [
    "well",
    "順利地；不錯",
    "The interview went quite well, I think.",
    "我覺得這場面試進行得相當順利。",
    "n.／v.／adj.／adv."
  ],
  [
    "while",
    "在～時；但是",
    "She reads while waiting for the bus.",
    "她在等公車的時候會看書。",
    "n."
  ],
  [
    "whiteboard",
    "白板",
    "The teacher wrote the answers on the whiteboard.",
    "老師把答案寫在白板上。",
    "n."
  ],
  [
    "wide",
    "廣泛的",
    "The store offers a wide range of products.",
    "這間店提供廣泛多樣的產品。",
    "adj.／adv."
  ],
  [
    "wife",
    "妻子",
    "His wife works as a nurse at the hospital.",
    "他的妻子在醫院當護理師。",
    "n."
  ],
  [
    "win",
    "獲勝；贏得",
    "Our team hopes to win the championship this year.",
    "我們的隊伍希望今年能贏得冠軍。",
    "n.／v."
  ],
  [
    "wind",
    "風",
    "A cold wind blew through the streets that night.",
    "那天晚上一陣冷風吹過街道。",
    "n.／v."
  ],
  [
    "wish",
    "但願；祝福",
    "I wish you the best of luck on your exam.",
    "祝你考試順利。",
    "n.／v."
  ],
  [
    "wonderful",
    "奇妙的；很棒的",
    "We had a wonderful time at the beach.",
    "我們在海灘玩得非常愉快。",
    "adj."
  ],
  [
    "world",
    "世界；領域",
    "Traveling helps you understand the world better.",
    "旅行有助於你更了解這個世界。",
    "n.／adj."
  ],
  [
    "worried",
    "心煩的",
    "She looked worried after receiving the phone call.",
    "接到那通電話後她看起來很擔心。",
    "adj."
  ],
  [
    "yourself",
    "你自己",
    "Please introduce yourself to the new members.",
    "請向新成員自我介紹。",
    "pron."
  ],
  [
    "yard",
    "庭院",
    "The children played in the yard all afternoon.",
    "孩子們整個下午都在庭院裡玩耍。",
    "n."
  ],
  [
    "yawn",
    "打哈欠",
    "He couldn't stop yawning during the boring lecture.",
    "他在那場無聊的演講中一直打哈欠。",
    "n.／v."
  ],
  [
    "yell",
    "大叫",
    "She had to yell to be heard over the music.",
    "她得大叫才能在音樂聲中讓人聽見。",
    "n.／v."
  ],
  [
    "yummy",
    "可口的；美味的",
    "This cake looks absolutely yummy.",
    "這個蛋糕看起來超級美味。",
    "adj."
  ],
  [
    "zoo",
    "動物園",
    "We took the kids to the zoo on Sunday.",
    "我們星期天帶孩子們去了動物園。",
    "n."
  ],
  [
    "zero",
    "零",
    "The temperature dropped to zero last night.",
    "昨晚氣溫降到了零度。",
    "n.／v.／adj."
  ],
  [
    "zone",
    "地區",
    "This area is a quiet residential zone.",
    "這個地區是一個安靜的住宅區。",
    "n.／v."
  ],
  [
    "apron",
    "圍裙",
    "She put on an apron before starting to cook.",
    "她開始煮飯前先繫上了圍裙。",
    "n."
  ],
  [
    "backpack",
    "背包",
    "He carried his books in a blue backpack.",
    "他用一個藍色背包裝他的書。",
    "n.／v."
  ],
  [
    "bakery",
    "麵包店",
    "The bakery on the corner sells fresh bread every morning.",
    "轉角那間麵包店每天早上都賣新鮮麵包。",
    "n."
  ],
  [
    "balcony",
    "陽台",
    "They enjoyed their coffee on the balcony.",
    "他們在陽台上享用咖啡。",
    "n."
  ],
  [
    "barn",
    "穀倉",
    "The farmer stored hay in the old barn.",
    "農夫把乾草儲存在這座老穀倉裡。",
    "n."
  ],
  [
    "basement",
    "地下室",
    "We keep old furniture in the basement.",
    "我們把舊家具放在地下室。",
    "n."
  ],
  [
    "bee",
    "蜜蜂",
    "A bee landed on the flower in the garden.",
    "一隻蜜蜂停在花園裡的花朵上。",
    "n."
  ],
  [
    "beg",
    "懇求",
    "He begged his parents to let him go to the concert.",
    "他懇求父母讓他去看演唱會。",
    "v."
  ],
  [
    "bench",
    "長椅",
    "They sat on a bench and watched the sunset.",
    "他們坐在長椅上看日落。",
    "n.／v."
  ],
  [
    "bite",
    "咬",
    "The dog tried to bite the mailman.",
    "那隻狗試圖咬郵差。",
    "n.／v."
  ],
  [
    "blend",
    "混合",
    "Blend the fruit until it becomes smooth.",
    "把水果攪打到滑順為止。",
    "n.／v."
  ],
  [
    "blind",
    "失明的",
    "Her grandfather has been blind since birth.",
    "她的祖父從出生就失明了。",
    "n.／v.／adj."
  ],
  [
    "boil",
    "煮沸",
    "Boil the water before adding the pasta.",
    "加入義大利麵之前先把水煮沸。",
    "n.／v."
  ],
  [
    "bone",
    "骨頭",
    "The dog buried its bone in the yard.",
    "這隻狗把牠的骨頭埋在院子裡。",
    "n.／v.／adj."
  ],
  [
    "boot",
    "靴子",
    "She wore rain boots to walk through the puddles.",
    "她穿雨靴走過那些水坑。",
    "n.／v."
  ],
  [
    "bother",
    "打擾",
    "Sorry to bother you, but could I ask a question?",
    "抱歉打擾你，我可以問個問題嗎？",
    "n.／v."
  ],
  [
    "bounce",
    "彈跳",
    "The ball bounced off the wall and rolled away.",
    "球從牆上彈開後滾走了。",
    "n.／v."
  ],
  [
    "bowl",
    "碗",
    "She served the soup in a large bowl.",
    "她把湯裝在一個大碗裡上桌。",
    "n.／v."
  ],
  [
    "brake",
    "煞車",
    "He hit the brake suddenly to avoid the cat.",
    "他為了閃避那隻貓突然踩了煞車。",
    "n.／v."
  ],
  [
    "branch office",
    "分公司",
    "The company opened a new branch office in Taichung.",
    "這家公司在台中開設了一間新的分公司。",
    "n."
  ],
  [
    "breathe",
    "呼吸",
    "Take a moment to breathe deeply before the interview.",
    "面試前花點時間深呼吸一下。",
    "v."
  ],
  [
    "bride",
    "新娘",
    "The bride looked beautiful in her white dress.",
    "新娘穿著白色婚紗看起來十分美麗。",
    "n."
  ],
  [
    "bridge",
    "橋",
    "We crossed the bridge to reach the old town.",
    "我們過橋抵達了舊城區。",
    "n.／v."
  ],
  [
    "bucket",
    "水桶",
    "He filled the bucket with water to wash the car.",
    "他把水桶裝滿水來洗車。",
    "n.／v."
  ],
  [
    "bug",
    "昆蟲；蟲子",
    "There's a bug crawling on the kitchen floor.",
    "廚房地板上有一隻蟲在爬。",
    "n.／v."
  ],
  [
    "bunch",
    "一串；一群",
    "She bought a bunch of bananas at the market.",
    "她在市場買了一串香蕉。",
    "n.／v."
  ],
  [
    "button",
    "鈕扣",
    "One of the buttons on his shirt fell off.",
    "他襯衫上的一顆鈕扣掉了。",
    "n.／v."
  ],
  [
    "cage",
    "籠子",
    "The bird sang happily inside its cage.",
    "那隻鳥在籠子裡開心地唱歌。",
    "n.／v."
  ],
  [
    "calm",
    "平靜的",
    "She stayed calm during the emergency.",
    "她在緊急情況下保持冷靜。",
    "n.／v.／adj."
  ],
  [
    "candle",
    "蠟燭",
    "They lit candles for the birthday cake.",
    "他們為生日蛋糕點了蠟燭。",
    "n.／v."
  ],
  [
    "cape",
    "披肩；斗篷",
    "The superhero costume included a red cape.",
    "這套超級英雄服裝包含一件紅色披風。",
    "n."
  ],
  [
    "carpet",
    "地毯",
    "The living room has a soft blue carpet.",
    "客廳鋪著一張柔軟的藍色地毯。",
    "n.／v."
  ],
  [
    "cart",
    "推車",
    "She pushed the shopping cart down the aisle.",
    "她推著購物車走過走道。",
    "n.／v."
  ],
  [
    "cave",
    "洞穴",
    "The children explored a small cave near the beach.",
    "孩子們探索了海灘附近的一個小洞穴。",
    "n.／v."
  ],
  [
    "ceiling",
    "天花板",
    "A large fan hangs from the ceiling.",
    "一台大型的電風扇掛在天花板上。",
    "n."
  ],
  [
    "cell",
    "細胞；牢房",
    "The biology class studied how a cell divides.",
    "生物課學習了細胞如何分裂。",
    "n."
  ],
  [
    "chess",
    "西洋棋",
    "My grandfather taught me how to play chess.",
    "我祖父教我如何下西洋棋。",
    "n."
  ],
  [
    "chimney",
    "煙囪",
    "Smoke rose slowly from the chimney.",
    "煙緩緩地從煙囪升起。",
    "n."
  ],
  [
    "cliff",
    "懸崖",
    "The house sits on a cliff overlooking the sea.",
    "這棟房子坐落在俯瞰大海的懸崖上。",
    "n."
  ],
  [
    "cloud",
    "雲",
    "Dark clouds gathered before the storm.",
    "暴風雨來臨前烏雲密布。",
    "n.／v."
  ],
  [
    "coach",
    "教練",
    "The coach praised the team's effort after the game.",
    "教練在比賽後稱讚了球隊的努力。",
    "n.／v."
  ],
  [
    "coal",
    "煤炭",
    "The old factory used to burn coal for energy.",
    "這間老工廠過去是燒煤來取得能源的。",
    "n.／v."
  ],
  [
    "coast",
    "海岸",
    "We drove along the coast to enjoy the view.",
    "我們沿著海岸開車欣賞風景。",
    "n.／v."
  ],
  [
    "comb",
    "梳子",
    "She used a comb to fix her hair before the photo.",
    "她拍照前用梳子整理了頭髮。",
    "n.／v."
  ],
  [
    "cone",
    "錐形；甜筒",
    "The child asked for a chocolate ice cream cone.",
    "那個孩子想要一支巧克力冰淇淋甜筒。",
    "n.／v."
  ],
  [
    "cough",
    "咳嗽",
    "He had a bad cough all week.",
    "他整週都咳嗽得很厲害。",
    "n.／v."
  ],
  [
    "crawl",
    "爬行",
    "The baby began to crawl at eight months old.",
    "這個寶寶八個月大時開始會爬。",
    "n.／v."
  ],
  [
    "crop",
    "農作物",
    "Farmers rely on rain to grow their crops.",
    "農夫仰賴降雨來種植農作物。",
    "n.／v."
  ],
  [
    "cruise",
    "巡航；郵輪之旅",
    "They took a cruise around the Mediterranean.",
    "他們搭郵輪環遊了地中海。",
    "n.／v."
  ],
  [
    "cube",
    "立方體",
    "The teacher showed a wooden cube to explain volume.",
    "老師用一個木製立方體來說明體積。",
    "n.／v."
  ],
  [
    "dam",
    "水壩",
    "The dam controls the flow of the river.",
    "這座水壩控制著河流的流量。",
    "n.／v."
  ],
  [
    "deaf",
    "失聰的",
    "Her uncle has been deaf since childhood.",
    "她叔叔從小就失聰。",
    "n.／v.／adj."
  ],
  [
    "deck",
    "甲板",
    "Passengers gathered on the deck to watch the sunset.",
    "乘客們聚集在甲板上觀賞日落。",
    "n.／v."
  ],
  [
    "dig",
    "挖掘",
    "The dog loves to dig holes in the backyard.",
    "這隻狗很喜歡在後院挖洞。",
    "n.／v."
  ],
  [
    "dip",
    "沾；浸",
    "She dipped the bread into the warm soup.",
    "她把麵包沾進溫熱的湯裡。",
    "n.／v."
  ],
  [
    "dirt",
    "泥土",
    "His shoes were covered in dirt after the hike.",
    "健行後他的鞋子沾滿了泥土。",
    "n.／adj."
  ],
  [
    "disk drive",
    "磁碟機",
    "The old computer had a slow disk drive.",
    "這台舊電腦的磁碟機速度很慢。",
    "n."
  ],
  [
    "dive",
    "潛水",
    "They went diving to see the coral reef.",
    "他們去潛水觀賞珊瑚礁。",
    "n.／v."
  ],
  [
    "donate",
    "捐贈",
    "She donates old clothes to charity every year.",
    "她每年都會把舊衣服捐給慈善機構。",
    "v."
  ],
  [
    "dot",
    "點；圓點",
    "Connect the dots to complete the picture.",
    "連接這些點以完成這幅圖。",
    "n.／v."
  ],
  [
    "drag",
    "拖拉",
    "He dragged the heavy box across the floor.",
    "他把這個沉重的箱子拖過地板。",
    "n.／v."
  ],
  [
    "drown",
    "溺水",
    "Lifeguards prevented the swimmer from drowning.",
    "救生員阻止了這名游泳者溺水。",
    "v."
  ],
  [
    "drum",
    "鼓",
    "He plays the drum in a local band.",
    "他在一個當地樂團裡打鼓。",
    "n.／v."
  ],
  [
    "dull",
    "沉悶的",
    "The lecture was so dull that students started to yawn.",
    "這場講座太沉悶了，學生們開始打哈欠。",
    "v.／adj."
  ],
  [
    "dust",
    "灰塵",
    "She wiped the dust off the bookshelf.",
    "她擦掉了書架上的灰塵。",
    "n.／v."
  ],
  [
    "elbow",
    "手肘",
    "He rested his elbow on the table.",
    "他把手肘靠在桌上。",
    "n.／v."
  ],
  [
    "enemy",
    "敵人",
    "The two nations were once bitter enemies.",
    "這兩個國家曾經是苦大仇深的敵人。",
    "n."
  ],
  [
    "envelope",
    "信封",
    "She sealed the letter inside an envelope.",
    "她把信封起來裝進信封裡。",
    "n."
  ],
  [
    "escape",
    "逃脫",
    "The prisoners tried to escape during the night.",
    "囚犯們試圖在夜間逃脫。",
    "n.／v."
  ],
  [
    "eyebrow",
    "眉毛",
    "She raised an eyebrow in surprise.",
    "她驚訝地挑起了眉毛。",
    "n."
  ],
  [
    "fabric",
    "布料",
    "The dress is made from soft cotton fabric.",
    "這件洋裝是用柔軟的棉布製成的。",
    "n."
  ],
  [
    "faith",
    "信念；信仰",
    "She kept her faith even during difficult times.",
    "即使在艱難的時期她依然保持信念。",
    "n."
  ],
  [
    "farm",
    "農場",
    "They spent the summer working on a farm.",
    "他們在農場度過了整個夏天。",
    "n.／v."
  ],
  [
    "fasten",
    "繫緊",
    "Please fasten your seatbelt before we take off.",
    "起飛前請繫好你的安全帶。",
    "v."
  ],
  [
    "fault",
    "過錯",
    "It wasn't your fault that the flight was delayed.",
    "班機延誤不是你的錯。",
    "n.／v."
  ],
  [
    "fever",
    "發燒",
    "The child had a fever and stayed home from school.",
    "這個孩子發燒了，所以留在家裡沒去上學。",
    "n."
  ],
  [
    "fist",
    "拳頭",
    "He clenched his fist in frustration.",
    "他因挫折而握緊了拳頭。",
    "n."
  ],
  [
    "flag",
    "旗子",
    "The flag waved gently in the breeze.",
    "旗子在微風中輕輕飄揚。",
    "n.／v."
  ],
  [
    "flash",
    "閃光",
    "A camera flash lit up the dark room.",
    "相機的閃光燈照亮了這間昏暗的房間。",
    "n.／v.／adj."
  ],
  [
    "flock",
    "群（鳥、羊）",
    "A flock of birds flew across the sky.",
    "一群鳥飛過天空。",
    "n.／v."
  ],
  [
    "flour",
    "麵粉",
    "She measured the flour carefully for the recipe.",
    "她仔細地量取這道食譜所需的麵粉。",
    "n.／v."
  ],
  [
    "fold",
    "摺疊",
    "Please fold the laundry before dinner.",
    "請在晚餐前把洗好的衣服摺好。",
    "n.／v."
  ],
  [
    "folk",
    "民間的",
    "The band plays traditional folk music.",
    "這個樂團演奏傳統的民謠音樂。",
    "n."
  ],
  [
    "fool",
    "傻瓜",
    "Don't be a fool and waste your savings.",
    "別當個傻瓜，別把積蓄浪費掉。",
    "n.／v."
  ],
  [
    "frame",
    "框架",
    "She put the photo in a wooden frame.",
    "她把照片放進一個木製相框裡。",
    "n.／v."
  ],
  [
    "freeze",
    "結凍",
    "The lake freezes completely in winter.",
    "這座湖在冬天會完全結冰。",
    "n.／v."
  ],
  [
    "fry",
    "油炸",
    "She fried the eggs for breakfast.",
    "她把蛋煎來當早餐。",
    "n.／v."
  ],
  [
    "fur",
    "毛皮",
    "The cat's fur felt soft and warm.",
    "這隻貓的毛摸起來又軟又暖。",
    "n."
  ],
  [
    "gallon",
    "加侖",
    "The tank holds about ten gallons of water.",
    "這個水槽可以裝大約十加侖的水。",
    "n."
  ],
  [
    "gamble",
    "賭博",
    "He never gambles with money he can't afford to lose.",
    "他從不拿他輸不起的錢去賭博。",
    "n.／v."
  ],
  [
    "gate",
    "大門",
    "Please meet at the front gate at nine o'clock.",
    "請九點在正門集合。",
    "n.／v."
  ],
  [
    "gear",
    "齒輪；裝備",
    "We packed our camping gear the night before.",
    "我們前一晚打包好了露營裝備。",
    "n.／v."
  ],
  [
    "glue",
    "膠水",
    "Use a little glue to stick the pieces together.",
    "用一點膠水把這些碎片黏在一起。",
    "n.／v."
  ],
  [
    "goat",
    "山羊",
    "The farm has several goats and a few chickens.",
    "這座農場養了幾隻山羊和幾隻雞。",
    "n."
  ],
  [
    "grab",
    "抓取",
    "He grabbed his coat and ran out the door.",
    "他抓起外套就衝出了門。",
    "n.／v."
  ],
  [
    "grave",
    "墳墓",
    "They visited their grandfather's grave on his birthday.",
    "他們在祖父生日那天去掃他的墓。",
    "n.／v.／adj."
  ],
  [
    "graveyard",
    "墓地",
    "An old graveyard sits behind the church.",
    "教堂後方有一座古老的墓地。",
    "n."
  ],
  [
    "greet",
    "問候",
    "She greeted every guest with a smile.",
    "她用微笑問候每一位賓客。",
    "v."
  ],
  [
    "grin",
    "咧嘴笑",
    "He grinned when he heard the good news.",
    "他聽到好消息時咧嘴笑了。",
    "n.／v."
  ],
  [
    "guilty",
    "有罪的",
    "The jury found him guilty of the crime.",
    "陪審團裁定他犯了這項罪行。",
    "adj."
  ],
  [
    "gulf",
    "海灣",
    "The oil spill affected the entire gulf.",
    "這次漏油事件影響了整個海灣。",
    "n."
  ],
  [
    "gum",
    "口香糖",
    "He chewed gum while waiting for the bus.",
    "他等公車的時候在嚼口香糖。",
    "n.／v."
  ],
  [
    "handshake",
    "握手",
    "They ended the meeting with a firm handshake.",
    "他們以一次堅定的握手結束了這場會議。",
    "n."
  ],
  [
    "harbor",
    "港口",
    "Ships from many countries dock at this harbor.",
    "來自許多國家的船隻停靠在這座港口。",
    "n.／v."
  ],
  [
    "hatch",
    "孵化",
    "The eggs will hatch within a few weeks.",
    "這些蛋會在幾週內孵化。",
    "n.／v."
  ],
  [
    "haunted",
    "鬧鬼的",
    "Some people say the old mansion is haunted.",
    "有些人說這棟老宅鬧鬼。",
    "adj."
  ],
  [
    "hay",
    "乾草",
    "The horses were fed hay every morning.",
    "馬兒每天早上都吃乾草。",
    "n.／v."
  ],
  [
    "hen",
    "母雞",
    "The hen laid three eggs this morning.",
    "這隻母雞今天早上下了三顆蛋。",
    "n."
  ],
  [
    "hive",
    "蜂巢",
    "Bees returned to the hive at sunset.",
    "蜜蜂在日落時返回蜂巢。",
    "n.／v."
  ],
  [
    "honey",
    "蜂蜜",
    "She added a spoonful of honey to her tea.",
    "她在茶裡加了一匙蜂蜜。",
    "n.／v.／adj."
  ],
  [
    "hood",
    "兜帽",
    "He pulled up his hood to block the rain.",
    "他拉起兜帽來遮擋雨水。",
    "n.／v."
  ],
  [
    "hop",
    "跳躍",
    "The rabbit hopped across the garden.",
    "兔子跳過了花園。",
    "n.／v."
  ],
  [
    "horn",
    "喇叭；角",
    "The driver honked the horn to warn the cyclist.",
    "駕駛按喇叭警告那位騎自行車的人。",
    "n.／v."
  ],
  [
    "hut",
    "小屋",
    "They stayed in a small wooden hut near the lake.",
    "他們住在湖邊一間小小的木屋裡。",
    "n."
  ],
  [
    "ink",
    "墨水",
    "The pen ran out of ink halfway through the letter.",
    "寫這封信寫到一半時，這支筆的墨水就用完了。",
    "n.／v."
  ],
  [
    "insect",
    "昆蟲",
    "The garden is home to many kinds of insects.",
    "這座花園裡棲息著許多種昆蟲。",
    "n."
  ],
  [
    "iron",
    "熨斗；鐵",
    "She used an iron to smooth the wrinkled shirt.",
    "她用熨斗把有皺褶的襯衫燙平。",
    "n.／v.／adj."
  ],
  [
    "itch",
    "發癢",
    "The mosquito bite made her arm itch.",
    "蚊子叮咬讓她的手臂發癢。",
    "n.／v."
  ],
  [
    "jar",
    "罐子",
    "She keeps sugar in a glass jar.",
    "她把糖裝在一個玻璃罐裡。",
    "n.／v."
  ],
  [
    "jaw",
    "下巴",
    "He rubbed his jaw after the long dental visit.",
    "漫長的牙科看診後，他揉了揉下巴。",
    "n.／v."
  ],
  [
    "kettle",
    "水壺",
    "She put the kettle on to make some tea.",
    "她把水壺放上爐子準備泡茶。",
    "n."
  ],
  [
    "kite",
    "風箏",
    "The children flew kites in the park on a windy day.",
    "孩子們在一個有風的日子在公園裡放風箏。",
    "n.／v."
  ],
  [
    "knee",
    "膝蓋",
    "He hurt his knee while playing soccer.",
    "他踢足球時傷到了膝蓋。",
    "n."
  ],
  [
    "knight",
    "騎士",
    "The story tells of a brave knight and a dragon.",
    "這個故事講述了一位勇敢的騎士與一條龍。",
    "n.／v."
  ],
  [
    "knot",
    "結",
    "She tied a knot in the rope to secure the boat.",
    "她在繩子上打了一個結以固定船隻。",
    "n.／v."
  ],
  [
    "label",
    "標籤",
    "Please read the label before taking the medicine.",
    "服藥前請先閱讀標籤。",
    "n.／v."
  ],
  [
    "lace",
    "蕾絲；鞋帶",
    "Her wedding dress was decorated with delicate lace.",
    "她的婚紗上裝飾著精緻的蕾絲。",
    "n.／v."
  ],
  [
    "ladder",
    "梯子",
    "He climbed the ladder to fix the roof.",
    "他爬上梯子去修理屋頂。",
    "n.／v."
  ],
  [
    "lamp",
    "燈",
    "She turned on the lamp to read her book.",
    "她打開燈來讀她的書。",
    "n."
  ],
  [
    "lawn mower",
    "割草機",
    "He bought a new lawn mower for the garden.",
    "他為花園買了一台新的割草機。",
    "n."
  ],
  [
    "leak",
    "漏水",
    "There's a leak in the kitchen sink.",
    "廚房水槽有一處在漏水。",
    "n.／v."
  ],
  [
    "leather",
    "皮革",
    "He wore a leather jacket to the concert.",
    "他穿著一件皮夾克去看演唱會。",
    "n.／v."
  ],
  [
    "lemon",
    "檸檬",
    "She squeezed a lemon over the fish.",
    "她把檸檬汁擠在魚上。",
    "n."
  ],
  [
    "lid",
    "蓋子",
    "Please put the lid back on the jar.",
    "請把蓋子蓋回罐子上。",
    "n."
  ],
  [
    "lightning",
    "閃電",
    "Lightning lit up the sky during the storm.",
    "暴風雨期間閃電照亮了天空。",
    "n."
  ],
  [
    "lip",
    "嘴唇",
    "She applied lip balm before going outside.",
    "她出門前擦了護唇膏。",
    "n."
  ],
  [
    "litter",
    "垃圾",
    "Please don't litter in the park.",
    "請不要在公園裡亂丟垃圾。",
    "n.／v."
  ],
  [
    "liver",
    "肝臟",
    "Alcohol can damage the liver over time.",
    "長期飲酒可能損害肝臟。",
    "n.／adj."
  ],
  [
    "loaf",
    "一條（麵包）",
    "She bought a loaf of bread from the bakery.",
    "她從麵包店買了一條麵包。",
    "n.／v."
  ],
  [
    "loop",
    "圈；環",
    "The road forms a loop around the lake.",
    "這條道路繞著湖形成一個環形。",
    "n.／v."
  ],
  [
    "mailbox",
    "信箱",
    "He checked the mailbox for new letters.",
    "他去信箱看看有沒有新信件。",
    "n."
  ],
  [
    "mattress",
    "床墊",
    "They bought a new mattress for a better night's sleep.",
    "他們買了一張新床墊以獲得更好的睡眠品質。",
    "n."
  ],
  [
    "mercy",
    "慈悲",
    "The judge showed mercy and reduced the sentence.",
    "法官展現慈悲，減輕了刑期。",
    "n."
  ],
  [
    "mild",
    "溫和的",
    "The weather has been mild this winter.",
    "今年冬天的天氣一直很溫和。",
    "adj."
  ],
  [
    "mist",
    "薄霧",
    "Mist covered the valley early in the morning.",
    "清晨薄霧籠罩著山谷。",
    "n.／v."
  ],
  [
    "moth",
    "蛾",
    "A moth flew toward the porch light.",
    "一隻蛾飛向了門廊的燈光。",
    "n."
  ],
  [
    "mud",
    "泥巴",
    "The children played happily in the mud after the rain.",
    "雨後孩子們開心地在泥巴裡玩耍。",
    "n.／v."
  ],
  [
    "nail",
    "指甲；釘子",
    "She painted her nails a bright red.",
    "她把指甲塗成亮紅色。",
    "n.／v."
  ],
  [
    "nap",
    "小睡",
    "He took a short nap after lunch.",
    "他午餐後小睡了一下。",
    "n.／v."
  ],
  [
    "nest",
    "巢",
    "The bird built a nest in the tree outside our window.",
    "那隻鳥在我們窗外的樹上築了一個巢。",
    "n.／v."
  ],
  [
    "net",
    "網子",
    "The fisherman cast his net into the sea.",
    "漁夫把他的網撒進海裡。",
    "n.／v.／adj."
  ],
  [
    "oar",
    "槳",
    "They used oars to row the small boat.",
    "他們用槳來划這艘小船。",
    "n."
  ],
  [
    "oath",
    "誓言",
    "The witness took an oath to tell the truth.",
    "證人宣誓要說實話。",
    "n."
  ],
  [
    "onion",
    "洋蔥",
    "Chop the onion finely before frying it.",
    "把洋蔥切細後再拿去炒。",
    "n."
  ],
  [
    "otherwise",
    "否則",
    "Study hard, otherwise you might fail the exam.",
    "要用功讀書，否則你可能會考試不及格。",
    "adj.／adv."
  ],
  [
    "outdoor",
    "戶外的",
    "They enjoy outdoor activities like hiking and camping.",
    "他們喜歡健行和露營等戶外活動。",
    "adj."
  ],
  [
    "oven",
    "烤箱",
    "Preheat the oven before baking the cake.",
    "烤蛋糕前先預熱烤箱。",
    "n."
  ],
  [
    "owl",
    "貓頭鷹",
    "An owl hooted in the forest at night.",
    "夜晚森林裡傳來貓頭鷹的叫聲。",
    "n."
  ],
  [
    "paddle",
    "划槳",
    "They paddled the canoe across the lake.",
    "他們划著獨木舟渡過這座湖。",
    "n.／v."
  ],
  [
    "palm",
    "手掌；棕櫚樹",
    "She held the small bird gently in her palm.",
    "她輕輕地把這隻小鳥捧在手掌心。",
    "n.／v."
  ],
  [
    "pan",
    "平底鍋",
    "Heat the oil in a pan before adding the vegetables.",
    "加入蔬菜前先在平底鍋裡熱油。",
    "n.／v."
  ],
  [
    "panic",
    "恐慌",
    "Don't panic; we still have plenty of time.",
    "別驚慌，我們還有很多時間。",
    "n.／v."
  ],
  [
    "parade",
    "遊行",
    "The whole town gathered to watch the parade.",
    "全鎮的人都聚集起來觀看這場遊行。",
    "n.／v."
  ],
  [
    "pause",
    "暫停",
    "She paused for a moment before answering.",
    "她在回答之前停頓了一下。",
    "n.／v."
  ],
  [
    "peel",
    "剝皮",
    "Please peel the potatoes before boiling them.",
    "請先削掉馬鈴薯的皮再煮。",
    "n.／v."
  ],
  [
    "pier",
    "碼頭",
    "They walked along the pier watching the boats.",
    "他們沿著碼頭走，看著那些船隻。",
    "n."
  ],
  [
    "pigeon",
    "鴿子",
    "Pigeons gathered in the square looking for food.",
    "鴿子聚集在廣場上尋找食物。",
    "n."
  ],
  [
    "pillow case",
    "枕頭套",
    "She changed the pillow case before her guests arrived.",
    "她在客人到達前換了枕頭套。",
    "n."
  ],
  [
    "pitcher",
    "投手；水壺",
    "The pitcher threw a fast ball to the batter.",
    "這位投手向打者投出了一顆快速球。",
    "n."
  ],
  [
    "plow",
    "犁田",
    "Farmers plow the fields before planting seeds.",
    "農夫在播種前先犁田。",
    "n.／v."
  ],
  [
    "poison",
    "毒藥",
    "The plant's berries contain a mild poison.",
    "這種植物的漿果含有輕微的毒性。",
    "n.／v."
  ],
  [
    "pole",
    "柱子",
    "The flag was raised on a tall pole.",
    "旗子被升到一根高高的柱子上。",
    "n.／v."
  ],
  [
    "pond",
    "池塘",
    "Ducks swam peacefully across the pond.",
    "鴨子平靜地游過池塘。",
    "n."
  ],
  [
    "porch",
    "門廊",
    "They sat on the porch and watched the rain.",
    "他們坐在門廊上看雨。",
    "n."
  ],
  [
    "pot",
    "鍋子",
    "She boiled the soup in a large pot.",
    "她用一個大鍋子煮湯。",
    "n.／v."
  ],
  [
    "pour",
    "傾倒",
    "Please pour the milk into the glass carefully.",
    "請小心地把牛奶倒進杯子裡。",
    "v."
  ],
  [
    "prey",
    "獵物",
    "The eagle spotted its prey from high above.",
    "老鷹從高處發現了牠的獵物。",
    "n.／v."
  ],
  [
    "pump",
    "幫浦",
    "The gas pump wasn't working at that station.",
    "那個加油站的幫浦壞了。",
    "n.／v."
  ],
  [
    "puppy",
    "小狗",
    "They adopted a puppy from the shelter last week.",
    "他們上星期從收容所領養了一隻小狗。",
    "n."
  ],
  [
    "quilt",
    "棉被",
    "Her grandmother made her a handmade quilt.",
    "她的祖母為她親手做了一床棉被。",
    "n.／v."
  ],
  [
    "rag",
    "抹布",
    "He used an old rag to clean the table.",
    "他用一塊舊抹布來清理桌子。",
    "n.／v."
  ],
  [
    "rat",
    "老鼠",
    "A rat scurried across the kitchen floor.",
    "一隻老鼠匆匆跑過廚房地板。",
    "n.／v."
  ],
  [
    "recipe",
    "食譜",
    "She followed a new recipe for dinner tonight.",
    "她今晚照著一份新食譜做晚餐。",
    "n."
  ],
  [
    "reef",
    "礁石",
    "Divers explored the colorful coral reef.",
    "潛水員探索了色彩繽紛的珊瑚礁。",
    "n.／v."
  ],
  [
    "rib",
    "肋骨",
    "He cracked a rib during the fall.",
    "他跌倒時斷了一根肋骨。",
    "n.／v."
  ],
  [
    "ripe",
    "成熟的",
    "The bananas are finally ripe enough to eat.",
    "這些香蕉終於熟到可以吃了。",
    "adj."
  ],
  [
    "roar",
    "吼叫",
    "The lion let out a loud roar.",
    "這隻獅子發出了一聲響亮的吼叫。",
    "n.／v."
  ],
  [
    "rope",
    "繩子",
    "They used a rope to climb the wall.",
    "他們用一條繩子爬上了牆。",
    "n.／v."
  ],
  [
    "rot",
    "腐爛",
    "The fruit began to rot after a week in the sun.",
    "這些水果在太陽下放了一週後開始腐爛。",
    "n.／v."
  ],
  [
    "row",
    "划船；排",
    "We sat in the front row of the theater.",
    "我們坐在劇院的前排。",
    "n.／v."
  ],
  [
    "rug",
    "地毯",
    "A small rug covered part of the wooden floor.",
    "一張小地毯覆蓋了部分木質地板。",
    "n."
  ],
  [
    "rust",
    "生鏽",
    "The old bike was covered in rust.",
    "這台舊腳踏車佈滿了鐵鏽。",
    "n.／v.／adj."
  ],
  [
    "sack",
    "麻袋",
    "The farmer carried a sack of potatoes.",
    "農夫扛著一袋馬鈴薯。",
    "n.／v."
  ],
  [
    "sail",
    "航行",
    "They plan to sail around the islands this summer.",
    "他們計畫今年夏天環遊這些島嶼航行。",
    "n.／v."
  ],
  [
    "saw",
    "鋸子",
    "He used a saw to cut the wood into pieces.",
    "他用鋸子把木頭鋸成幾塊。",
    "n.／v."
  ],
  [
    "scale",
    "磅秤；規模",
    "She checked her weight on the bathroom scale.",
    "她在浴室的磅秤上量了體重。",
    "n.／v."
  ],
  [
    "scar",
    "疤痕",
    "He still has a scar from the accident.",
    "他身上仍留著那場意外留下的疤痕。",
    "n.／v."
  ],
  [
    "scissors",
    "剪刀",
    "Please pass me the scissors to cut the paper.",
    "請把剪刀遞給我來剪紙。",
    "n."
  ],
  [
    "scrub",
    "刷洗",
    "She scrubbed the pot until it was spotless.",
    "她把鍋子刷洗到一塵不染。",
    "n.／v.／adj."
  ],
  [
    "seed",
    "種子",
    "They planted seeds in the garden last spring.",
    "他們去年春天在花園裡種下了種子。",
    "n.／v."
  ],
  [
    "shed",
    "棚屋",
    "Tools are kept in the shed behind the house.",
    "工具存放在房子後面的棚屋裡。",
    "n.／v.／adj."
  ],
  [
    "shelf",
    "架子",
    "She placed the books neatly on the shelf.",
    "她把書整整齊齊地擺在架子上。",
    "n."
  ],
  [
    "shovel",
    "鏟子",
    "He used a shovel to clear the snow.",
    "他用鏟子清除積雪。",
    "n.／v."
  ],
  [
    "shrink",
    "縮水",
    "The sweater shrank after being washed in hot water.",
    "這件毛衣用熱水洗過後縮水了。",
    "n.／v."
  ],
  [
    "sink",
    "水槽；下沉",
    "The boat began to sink after hitting the rock.",
    "這艘船撞到岩石後開始下沉。",
    "n.／v."
  ],
  [
    "skip",
    "跳過",
    "She decided to skip breakfast that morning.",
    "她那天早上決定不吃早餐。",
    "n.／v."
  ],
  [
    "sled",
    "雪橇",
    "The kids rode a sled down the snowy hill.",
    "孩子們坐著雪橇滑下那座雪山。",
    "n.／v."
  ],
  [
    "sleeve",
    "袖子",
    "He rolled up his sleeves before starting the repair.",
    "他開始維修前先捲起了袖子。",
    "n."
  ],
  [
    "slip",
    "滑倒",
    "Be careful not to slip on the wet floor.",
    "小心不要在濕滑的地板上滑倒。",
    "n.／v."
  ],
  [
    "smash",
    "粉碎",
    "The vase smashed into pieces when it fell.",
    "花瓶掉落時摔得粉碎。",
    "n.／v.／adv."
  ],
  [
    "smoke",
    "煙",
    "Thick smoke filled the room during the fire.",
    "火災發生時濃煙充滿了整個房間。",
    "n.／v."
  ],
  [
    "snail",
    "蝸牛",
    "A snail moved slowly across the leaf.",
    "一隻蝸牛緩緩地爬過葉子。",
    "n.／v."
  ],
  [
    "sneeze",
    "打噴嚏",
    "He sneezed several times because of his allergy.",
    "他因為過敏連續打了好幾個噴嚏。",
    "n.／v."
  ],
  [
    "soak",
    "浸泡",
    "Let the beans soak in water overnight.",
    "讓豆子在水裡浸泡一整晚。",
    "n.／v."
  ],
  [
    "soar",
    "飆升；翱翔",
    "Prices continued to soar throughout the year.",
    "物價全年持續飆升。",
    "n.／v."
  ],
  [
    "sob",
    "啜泣",
    "She began to sob quietly during the sad movie.",
    "她在這部悲傷的電影中開始輕聲啜泣。",
    "n.／v."
  ],
  [
    "sock",
    "襪子",
    "He couldn't find a matching sock in the drawer.",
    "他在抽屜裡找不到成對的襪子。",
    "n.／v."
  ],
  [
    "sore",
    "痠痛的",
    "Her legs were sore after the long run.",
    "長跑之後她的雙腿感到痠痛。",
    "n.／adj."
  ],
  [
    "spider",
    "蜘蛛",
    "A large spider built a web in the corner.",
    "一隻大蜘蛛在角落結了一張網。",
    "n."
  ],
  [
    "spin",
    "旋轉",
    "The dancer began to spin gracefully on stage.",
    "這位舞者開始優雅地在舞台上旋轉。",
    "n.／v."
  ],
  [
    "sponge",
    "海綿",
    "Use a sponge to clean the dishes gently.",
    "用海綿輕輕地清洗碗盤。",
    "n.／v."
  ],
  [
    "spoon",
    "湯匙",
    "She stirred her coffee with a small spoon.",
    "她用一支小湯匙攪拌她的咖啡。",
    "n.／v."
  ],
  [
    "spray",
    "噴灑",
    "She sprayed water on the plants every morning.",
    "她每天早上都會為植物噴水。",
    "n.／v."
  ],
  [
    "sprout",
    "發芽",
    "The seeds began to sprout after a week.",
    "這些種子一週後開始發芽。",
    "n.／v."
  ],
  [
    "squeak",
    "吱吱聲",
    "The old door squeaked every time it opened.",
    "這扇舊門每次打開都會發出吱吱聲。",
    "n.／v."
  ],
  [
    "stack",
    "堆疊",
    "He stacked the boxes neatly in the corner.",
    "他把箱子整齊地堆疊在角落。",
    "n.／v."
  ],
  [
    "steam",
    "蒸氣",
    "Steam rose from the hot cup of tea.",
    "蒸氣從那杯熱茶中升起。",
    "n.／v."
  ],
  [
    "steer",
    "駕駛；掌舵",
    "He steered the boat carefully through the narrow channel.",
    "他小心翼翼地駕駛船隻穿過這條狹窄的水道。",
    "n.／v."
  ],
  [
    "sting",
    "叮咬；刺痛",
    "A bee sting can be very painful for some people.",
    "對某些人來說，蜜蜂螫傷可能非常疼痛。",
    "n.／v."
  ],
  [
    "stir",
    "攪拌",
    "Stir the sauce until it thickens.",
    "攪拌醬汁直到變濃稠。",
    "n.／v."
  ],
  [
    "stitch",
    "縫；一針",
    "The doctor gave him three stitches for the cut.",
    "醫生為他的傷口縫了三針。",
    "n.／v."
  ],
  [
    "stove",
    "爐子",
    "She left the pot on the stove while answering the phone.",
    "她接電話時把鍋子留在爐子上。",
    "n."
  ],
  [
    "straighten",
    "弄直",
    "He straightened the picture frame on the wall.",
    "他把牆上的相框弄正。",
    "v."
  ],
  [
    "stubborn",
    "固執的",
    "The mule was too stubborn to move.",
    "這頭騾子固執到不肯動。",
    "adj."
  ],
  [
    "suck",
    "吸吮",
    "The baby began to suck on his thumb.",
    "寶寶開始吸吮他的大拇指。",
    "n.／v."
  ],
  [
    "swallow",
    "吞嚥",
    "It can be hard to swallow pills for some children.",
    "對某些孩子來說吞藥丸可能很困難。",
    "n.／v."
  ],
  [
    "sweat",
    "流汗",
    "He was sweating heavily after the workout.",
    "運動之後他大量出汗。",
    "n.／v."
  ],
  [
    "swing",
    "鞦韆；擺動",
    "The children took turns on the swing.",
    "孩子們輪流盪鞦韆。",
    "n.／v."
  ],
  [
    "tap",
    "水龍頭；輕拍",
    "She tapped him on the shoulder to get his attention.",
    "她輕拍他的肩膀以引起他的注意。",
    "n.／v."
  ],
  [
    "tent",
    "帳篷",
    "We set up the tent before it got dark.",
    "我們在天黑前搭好了帳篷。",
    "n.／v."
  ],
  [
    "thread",
    "線",
    "She used a needle and thread to fix the button.",
    "她用針線來縫補那顆鈕扣。",
    "n.／v."
  ],
  [
    "thumb",
    "拇指",
    "He gave a thumbs up to show his approval.",
    "他豎起大拇指表示贊同。",
    "n.／v."
  ],
  [
    "tide pool",
    "潮池",
    "Kids love exploring tide pools during low tide.",
    "孩子們很喜歡在退潮時探索潮池。",
    "n."
  ],
  [
    "tighten",
    "拉緊",
    "Please tighten the screws before using the shelf.",
    "使用架子前請先把螺絲拴緊。",
    "v."
  ],
  [
    "toe",
    "腳趾",
    "She stubbed her toe on the table leg.",
    "她的腳趾撞到了桌腳。",
    "n.／v."
  ],
  [
    "torch",
    "火把；手電筒",
    "They used a torch to explore the dark cave.",
    "他們用手電筒探索這個漆黑的洞穴。",
    "n.／v."
  ],
  [
    "tow",
    "拖吊",
    "The car had to be towed after it broke down.",
    "這輛車拋錨後必須被拖走。",
    "n.／v."
  ],
  [
    "tray",
    "托盤",
    "The waiter carried a tray full of drinks.",
    "服務生端著一個裝滿飲料的托盤。",
    "n."
  ],
  [
    "trunk",
    "樹幹；後車廂",
    "He placed the suitcase in the trunk of the car.",
    "他把行李箱放進了車子的後車廂。",
    "n."
  ],
  [
    "tub",
    "浴缸",
    "She filled the tub with warm water for a bath.",
    "她把浴缸裝滿溫水準備泡澡。",
    "n."
  ],
  [
    "tuck",
    "塞入",
    "She tucked the blanket around the sleeping child.",
    "她把毯子塞好蓋在熟睡的孩子身上。",
    "n.／v."
  ],
  [
    "tug",
    "拉；拖",
    "The dog gave a hard tug on the leash.",
    "這隻狗用力拉扯了牽繩。",
    "n.／v."
  ],
  [
    "twig",
    "樹枝",
    "Birds use twigs to build their nests.",
    "鳥類用細枝來築巢。",
    "n.／v."
  ],
  [
    "twist",
    "扭轉",
    "She twisted her ankle while running.",
    "她跑步時扭傷了腳踝。",
    "n.／v."
  ],
  [
    "umbrella",
    "雨傘",
    "Don't forget your umbrella; it might rain later.",
    "別忘了帶傘，等等可能會下雨。",
    "n.／adj."
  ],
  [
    "vase",
    "花瓶",
    "She placed fresh flowers in a glass vase.",
    "她把新鮮的花插進一個玻璃花瓶裡。",
    "n."
  ],
  [
    "vent",
    "通風口",
    "Cool air came through the vent in the ceiling.",
    "冷空氣從天花板的通風口吹進來。",
    "n.／v."
  ],
  [
    "vine",
    "藤蔓",
    "Grapes grow on vines in the vineyard.",
    "葡萄生長在葡萄園的藤蔓上。",
    "n."
  ],
  [
    "wag",
    "搖擺（尾巴）",
    "The dog wagged its tail excitedly.",
    "這隻狗興奮地搖著尾巴。",
    "n.／v."
  ],
  [
    "wander",
    "漫遊",
    "They wandered through the old streets without a plan.",
    "他們漫無目的地在舊街道上閒逛。",
    "v."
  ],
  [
    "wax",
    "蠟",
    "The candle is made of pure beeswax.",
    "這支蠟燭是用純蜂蠟製成的。",
    "n.／v."
  ],
  [
    "weave",
    "編織",
    "She wove a basket out of dried grass.",
    "她用乾草編織了一個籃子。",
    "n.／v."
  ],
  [
    "wharf",
    "碼頭",
    "Fishing boats were docked along the wharf.",
    "漁船沿著碼頭停靠著。",
    "n.／v."
  ],
  [
    "whisk",
    "攪拌器",
    "Use a whisk to beat the eggs until fluffy.",
    "用攪拌器把蛋打到蓬鬆為止。",
    "n.／v."
  ],
  [
    "whistle",
    "口哨",
    "He whistled a tune while walking to work.",
    "他走路去上班時吹著口哨哼著曲子。",
    "n.／v."
  ],
  [
    "wipe",
    "擦拭",
    "Please wipe the table before we eat.",
    "吃飯前請先把桌子擦乾淨。",
    "n.／v."
  ],
  [
    "wrist",
    "手腕",
    "She wore a bracelet on her wrist.",
    "她的手腕上戴著一條手鍊。",
    "n."
  ],
  [
    "yolk",
    "蛋黃",
    "The recipe only needs the egg yolk, not the white.",
    "這道食譜只需要蛋黃，不需要蛋白。",
    "n."
  ],
  [
    "acorn",
    "橡實",
    "Squirrels collect acorns before winter arrives.",
    "松鼠在冬天來臨前會蒐集橡實。",
    "n."
  ],
  [
    "alley",
    "巷弄",
    "The cat disappeared down a narrow alley.",
    "那隻貓消失在一條狹窄的巷弄裡。",
    "n."
  ],
  [
    "anchor",
    "錨",
    "The ship dropped anchor near the harbor.",
    "這艘船在港口附近下錨。",
    "n.／v."
  ],
  [
    "ankle sock",
    "短襪",
    "She wore ankle socks with her sneakers.",
    "她穿了短襪搭配運動鞋。",
    "n."
  ],
  [
    "antler",
    "鹿角",
    "The deer's antlers grew larger each year.",
    "這隻鹿的鹿角每年都長得更大。",
    "n."
  ],
  [
    "apron string",
    "圍裙帶",
    "He tied the apron string behind his back.",
    "他把圍裙帶繫在背後。",
    "n."
  ],
  [
    "armchair",
    "扶手椅",
    "Grandpa fell asleep in his favorite armchair.",
    "爺爺在他最喜歡的扶手椅上睡著了。",
    "n."
  ],
  [
    "attic",
    "閣樓",
    "They found old photos boxed up in the attic.",
    "他們在閣樓找到裝箱的舊照片。",
    "n.／adj."
  ],
  [
    "awning",
    "遮陽篷",
    "Rain tapped softly on the striped awning.",
    "雨滴輕輕打在條紋遮陽篷上。",
    "n."
  ],
  [
    "backyard",
    "後院",
    "The kids played tag in the backyard.",
    "孩子們在後院玩鬼抓人。",
    "n."
  ],
  [
    "badge",
    "徽章；證件",
    "Please show your badge to enter the building.",
    "請出示證件才能進入這棟大樓。",
    "n.／v."
  ],
  [
    "bagpipe",
    "風笛",
    "A man played the bagpipe on the street corner.",
    "一位男子在街角吹奏風笛。",
    "n."
  ],
  [
    "bald",
    "禿頭的",
    "Her grandfather has been bald for years.",
    "她的祖父禿頭已經很多年了。",
    "v.／adj."
  ],
  [
    "barefoot",
    "赤腳的",
    "The children ran barefoot across the sand.",
    "孩子們赤腳跑過沙灘。",
    "adj.／adv."
  ],
  [
    "barnyard",
    "農家庭院",
    "Chickens wandered freely around the barnyard.",
    "雞隻在農家庭院裡自由地走動。",
    "n."
  ],
  [
    "basin",
    "盆；流域",
    "She washed the vegetables in a large basin.",
    "她用一個大盆子清洗蔬菜。",
    "n."
  ],
  [
    "bead",
    "珠子",
    "She strung colorful beads onto a necklace.",
    "她把彩色珠子串成一條項鍊。",
    "n.／v."
  ],
  [
    "beak",
    "鳥喙",
    "The bird used its beak to crack the seed.",
    "這隻鳥用喙敲開了種子。",
    "n.／v."
  ],
  [
    "beard",
    "鬍鬚",
    "He grew a beard over the winter break.",
    "他在寒假期間留了鬍鬚。",
    "n.／v."
  ],
  [
    "bedtime",
    "就寢時間",
    "Bedtime for the kids is around nine o'clock.",
    "孩子們的就寢時間大約是九點。",
    "n."
  ],
  [
    "beetle",
    "甲蟲",
    "A shiny beetle crawled across the leaf.",
    "一隻閃亮的甲蟲爬過葉子。",
    "n.／v.／adj."
  ],
  [
    "billboard",
    "廣告看板",
    "A huge billboard advertised the new movie.",
    "一塊巨大的廣告看板宣傳著這部新電影。",
    "n."
  ],
  [
    "blush",
    "臉紅",
    "She blushed when he complimented her dress.",
    "他稱讚她的洋裝時她臉紅了。",
    "n.／v."
  ],
  [
    "bonfire",
    "營火",
    "They sat around the bonfire telling stories.",
    "他們圍坐在營火旁講故事。",
    "n."
  ],
  [
    "bounce house",
    "充氣城堡",
    "The kids had fun jumping in the bounce house.",
    "孩子們在充氣城堡裡跳來跳去玩得很開心。",
    "n."
  ],
  [
    "brace",
    "支架；牙套",
    "He wore a brace on his knee after the injury.",
    "他受傷後在膝蓋上戴了支架。",
    "n.／v."
  ],
  [
    "breeze",
    "微風",
    "A gentle breeze drifted through the open window.",
    "一陣微風從敞開的窗戶輕輕吹進來。",
    "n.／v."
  ],
  [
    "bruise",
    "瘀傷",
    "She got a small bruise after bumping into the table.",
    "她撞到桌子後留下了一小塊瘀傷。",
    "n.／v."
  ],
  [
    "bubble",
    "泡泡",
    "The children blew bubbles in the backyard.",
    "孩子們在後院吹泡泡。",
    "n.／v."
  ],
  [
    "bud",
    "花苞",
    "The rose bud opened slowly in the sunlight.",
    "玫瑰花苞在陽光下緩緩綻放。",
    "n.／v."
  ],
  [
    "bulletin board",
    "佈告欄",
    "The notice was pinned to the bulletin board.",
    "這則公告被釘在佈告欄上。",
    "n."
  ],
  [
    "bunk bed",
    "上下舖",
    "The brothers shared a bunk bed in their room.",
    "這對兄弟在房間裡共用一張上下舖床。",
    "n."
  ],
  [
    "buzz",
    "嗡嗡聲",
    "The buzz of the bees filled the garden.",
    "蜜蜂的嗡嗡聲充滿了整座花園。",
    "n.／v."
  ],
  [
    "campfire",
    "營火",
    "They roasted marshmallows over the campfire.",
    "他們在營火上烤棉花糖。",
    "n."
  ],
  [
    "canoe",
    "獨木舟",
    "They paddled a canoe down the calm river.",
    "他們划著獨木舟順著平靜的河流前進。",
    "n.／v."
  ],
  [
    "canyon",
    "峽谷",
    "The hikers admired the deep canyon below.",
    "健行者欣賞著下方那座深邃的峽谷。",
    "n."
  ],
  [
    "carousel",
    "旋轉木馬",
    "The children rode the carousel three times.",
    "孩子們坐了三次旋轉木馬。",
    "n."
  ],
  [
    "caterpillar",
    "毛毛蟲",
    "A green caterpillar inched along the branch.",
    "一隻綠色毛毛蟲緩緩爬過樹枝。",
    "n."
  ],
  [
    "chalk",
    "粉筆",
    "The teacher wrote the date on the board with chalk.",
    "老師用粉筆在黑板上寫下日期。",
    "n.／v."
  ],
  [
    "cheek",
    "臉頰",
    "She kissed her grandmother on the cheek.",
    "她親吻了祖母的臉頰。",
    "n.／v."
  ],
  [
    "cherry blossom",
    "櫻花",
    "Tourists gathered to see the cherry blossoms bloom.",
    "遊客們聚集在一起觀賞櫻花盛開。",
    "n."
  ],
  [
    "chestnut",
    "栗子",
    "They roasted chestnuts over an open fire.",
    "他們在明火上烤栗子。",
    "n.／adj."
  ],
  [
    "chore",
    "家務",
    "Doing chores taught the kids responsibility.",
    "做家務讓孩子們學會了責任感。",
    "n."
  ],
  [
    "clam",
    "蛤蜊",
    "They dug for clams along the beach at low tide.",
    "他們在退潮時沿著海灘挖蛤蜊。",
    "n.／v."
  ],
  [
    "clover",
    "苜蓿；三葉草",
    "She searched the field for a four-leaf clover.",
    "她在草地上尋找四葉幸運草。",
    "n."
  ],
  [
    "cobweb",
    "蜘蛛網",
    "Dusty cobwebs hung in the corners of the barn.",
    "滿是灰塵的蜘蛛網掛在穀倉的角落。",
    "n."
  ],
  [
    "coloring book",
    "著色本",
    "The little girl loved her new coloring book.",
    "這個小女孩很喜歡她的新著色本。",
    "n."
  ],
  [
    "compost",
    "堆肥",
    "They turned kitchen scraps into compost for the garden.",
    "他們把廚餘變成花園的堆肥。",
    "n.／v."
  ],
  [
    "cottage cheese",
    "茅屋起司",
    "She had cottage cheese with fruit for breakfast.",
    "她早餐吃茅屋起司配水果。",
    "n."
  ],
  [
    "cradle",
    "搖籃",
    "The baby slept peacefully in the wooden cradle.",
    "寶寶在木製搖籃裡安詳地睡著。",
    "n.／v."
  ],
  [
    "crumb",
    "麵包屑",
    "Crumbs fell from the sandwich onto the plate.",
    "三明治的麵包屑掉落在盤子上。",
    "n.／v."
  ],
  [
    "cupboard",
    "櫥櫃",
    "She kept the spices in the kitchen cupboard.",
    "她把香料放在廚房的櫥櫃裡。",
    "n."
  ],
  [
    "curl",
    "捲髮；捲曲",
    "Her hair naturally forms soft curls.",
    "她的頭髮天生會形成柔軟的捲髮。",
    "n.／v."
  ],
  [
    "daisy",
    "雛菊",
    "She picked daisies from the meadow.",
    "她從草地上摘了雛菊。",
    "n."
  ],
  [
    "dawn",
    "黎明",
    "They woke up before dawn to watch the sunrise.",
    "他們在黎明前起床看日出。",
    "n.／v."
  ],
  [
    "dew",
    "露水",
    "Dew covered the grass early in the morning.",
    "清晨時分露水覆蓋了草地。",
    "n."
  ],
  [
    "dimple",
    "酒窩",
    "He has a small dimple when he smiles.",
    "他微笑時會出現一個小酒窩。",
    "n.／v."
  ],
  [
    "doorstep",
    "門階",
    "A package was left on the doorstep this morning.",
    "今天早上有一個包裹被放在門階上。",
    "n."
  ],
  [
    "dragonfly",
    "蜻蜓",
    "A dragonfly hovered above the pond.",
    "一隻蜻蜓在池塘上方盤旋。",
    "n."
  ],
  [
    "driveway",
    "車道",
    "The car was parked in the driveway overnight.",
    "這輛車整晚都停在車道上。",
    "n."
  ],
  [
    "dune",
    "沙丘",
    "Children rolled down the sand dune laughing.",
    "孩子們笑著滾下沙丘。",
    "n."
  ],
  [
    "dusk",
    "黃昏",
    "Fireflies appeared as dusk settled over the fields.",
    "黃昏降臨田野時螢火蟲出現了。",
    "n.／v."
  ],
  [
    "earthworm",
    "蚯蚓",
    "Earthworms help improve soil quality in gardens.",
    "蚯蚓有助於改善花園的土壤品質。",
    "n."
  ],
  [
    "eyelash",
    "睫毛",
    "A tiny piece of dust landed on her eyelash.",
    "一小片灰塵落在她的睫毛上。",
    "n."
  ],
  [
    "fawn",
    "小鹿",
    "A young fawn followed closely behind its mother.",
    "一隻小鹿緊緊跟在牠母親身後。",
    "n.／v."
  ],
  [
    "feather",
    "羽毛",
    "A soft feather drifted down from the nest.",
    "一根柔軟的羽毛從鳥巢飄落下來。",
    "n.／v."
  ],
  [
    "fern",
    "蕨類",
    "Ferns grew thickly along the shaded path.",
    "蕨類植物在陰涼的小徑旁茂密生長。",
    "n."
  ],
  [
    "firefly",
    "螢火蟲",
    "Fireflies lit up the backyard on summer nights.",
    "夏夜裡螢火蟲點亮了後院。",
    "n."
  ],
  [
    "flea market",
    "跳蚤市場",
    "They found a vintage lamp at the flea market.",
    "他們在跳蚤市場找到了一盞古董檯燈。",
    "n."
  ],
  [
    "flute",
    "長笛",
    "She has played the flute since elementary school.",
    "她從國小就開始吹長笛。",
    "n.／v."
  ],
  [
    "foam",
    "泡沫",
    "The waves left foam along the shoreline.",
    "海浪在岸邊留下了泡沫。",
    "n.／v."
  ],
  [
    "footprint",
    "腳印",
    "Fresh footprints appeared in the snow.",
    "雪地上出現了新的腳印。",
    "n."
  ],
  [
    "freckle",
    "雀斑",
    "Sunlight brought out the freckles on her nose.",
    "陽光讓她鼻子上的雀斑更加明顯。",
    "n.／v."
  ],
  [
    "frost",
    "霜",
    "Frost covered the car windows this morning.",
    "今天早上霜覆蓋了車窗。",
    "n.／v."
  ],
  [
    "gasp",
    "喘氣；倒抽一口氣",
    "The audience gasped when the magician disappeared.",
    "魔術師消失時，觀眾都倒抽了一口氣。",
    "n.／v."
  ],
  [
    "gecko",
    "壁虎",
    "A tiny gecko clung to the ceiling.",
    "一隻小壁虎攀附在天花板上。",
    "n."
  ],
  [
    "giggle",
    "咯咯笑",
    "The toddler giggled at the funny sound.",
    "這個學步的孩子聽到有趣的聲音咯咯地笑了。",
    "n.／v."
  ],
  [
    "glimpse",
    "一瞥",
    "She caught a glimpse of the celebrity walking by.",
    "她瞥見了那位名人走過。",
    "n.／v."
  ],
  [
    "gloomy",
    "陰鬱的",
    "The sky looked gloomy before the storm arrived.",
    "暴風雨來臨前天空看起來十分陰沉。",
    "adj."
  ],
  [
    "grape vine",
    "葡萄藤",
    "Grapes hung heavy on the old vine.",
    "葡萄沉甸甸地掛在這株老葡萄藤上。",
    "n."
  ],
  [
    "grasshopper",
    "蚱蜢",
    "A grasshopper jumped across the garden path.",
    "一隻蚱蜢跳過花園的小徑。",
    "n."
  ],
  [
    "gravel",
    "碎石",
    "The driveway was covered with gravel.",
    "這條車道鋪滿了碎石。",
    "n.／v."
  ],
  [
    "groom",
    "新郎；打理",
    "The groom waited nervously at the altar.",
    "新郎緊張地在聖壇前等待。",
    "n.／v."
  ],
  [
    "gutter",
    "排水溝",
    "Leaves clogged the gutter after the storm.",
    "暴風雨過後樹葉堵住了排水溝。",
    "n.／v."
  ],
  [
    "hammock",
    "吊床",
    "He relaxed in a hammock between two trees.",
    "他在兩棵樹之間的吊床上放鬆休息。",
    "n."
  ],
  [
    "hedge",
    "樹籬",
    "A tall hedge separated the two gardens.",
    "一道高高的樹籬將這兩座花園隔開。",
    "n.／v."
  ],
  [
    "hillside",
    "山坡",
    "Sheep grazed peacefully on the hillside.",
    "羊群在山坡上平靜地吃草。",
    "n."
  ],
  [
    "hilltop",
    "山頂",
    "They watched the sunset from the hilltop.",
    "他們在山頂上觀賞日落。",
    "n."
  ],
  [
    "hollow",
    "中空的",
    "The old tree had a hollow trunk.",
    "這棵老樹的樹幹是中空的。",
    "n.／v.／adj."
  ],
  [
    "hummingbird",
    "蜂鳥",
    "A hummingbird hovered near the bright flowers.",
    "一隻蜂鳥在鮮豔的花朵附近盤旋。",
    "n."
  ],
  [
    "icicle",
    "冰柱",
    "Icicles hung from the edge of the roof.",
    "冰柱懸掛在屋簷邊緣。",
    "n."
  ],
  [
    "inchworm",
    "尺蠖",
    "An inchworm slowly measured its way along the twig.",
    "一隻尺蠖沿著樹枝緩緩地爬行。",
    "n."
  ],
  [
    "jellyfish",
    "水母",
    "A jellyfish drifted gently in the tide pool.",
    "一隻水母在潮池中輕輕漂浮。",
    "n."
  ],
  [
    "kernel",
    "穀粒；核心",
    "Each kernel of corn popped in the hot pan.",
    "每一顆玉米粒都在熱鍋裡爆開。",
    "n."
  ],
  [
    "knapsack",
    "背包",
    "He packed a knapsack for the day hike.",
    "他為這趟一日健行打包了一個背包。",
    "n."
  ],
  [
    "ladybug",
    "瓢蟲",
    "A ladybug landed gently on her hand.",
    "一隻瓢蟲輕輕地停在她手上。",
    "n."
  ],
  [
    "lantern",
    "燈籠",
    "They lit paper lanterns for the festival.",
    "他們為這場節慶點亮了紙燈籠。",
    "n."
  ],
  [
    "lark",
    "雲雀",
    "A lark sang sweetly above the meadow.",
    "一隻雲雀在草地上方悅耳地歌唱。",
    "n.／v."
  ],
  [
    "lily pad",
    "睡蓮葉",
    "A frog sat quietly on the lily pad.",
    "一隻青蛙靜靜地坐在睡蓮葉上。",
    "n."
  ],
  [
    "loft",
    "閣樓；夾層",
    "They converted the loft into a cozy bedroom.",
    "他們把閣樓改建成一間溫馨的臥室。",
    "n.／v."
  ],
  [
    "lullaby",
    "搖籃曲",
    "She sang a soft lullaby to put the baby to sleep.",
    "她唱了一首輕柔的搖籃曲哄寶寶入睡。",
    "n."
  ],
  [
    "marble",
    "大理石；彈珠",
    "The children played marbles in the schoolyard.",
    "孩子們在校園裡玩彈珠。",
    "n.／v."
  ],
  [
    "meadow",
    "草地；牧場",
    "Wildflowers covered the meadow in spring.",
    "春天時野花覆蓋了整片草地。",
    "n."
  ],
  [
    "abroad",
    "在國外；到國外",
    "She plans to study abroad next year.",
    "她計劃明年出國留學。",
    "adj.／adv."
  ],
  [
    "absent",
    "缺席的；不在場的",
    "Two employees were absent from the meeting.",
    "兩名員工缺席會議。",
    "v.／adj."
  ],
  [
    "access",
    "進入；使用權",
    "Guests need a password to access the network.",
    "訪客需要密碼才能存取網路。",
    "n.／v."
  ],
  [
    "actual",
    "實際的；真實的",
    "The actual cost was lower than we expected.",
    "實際成本低於我們的預期。",
    "adj."
  ],
  [
    "admire",
    "欽佩；欣賞",
    "I admire her patience with difficult customers.",
    "我欽佩她對難纏的顧客的耐心。",
    "v."
  ],
  [
    "adult",
    "成人；成年的",
    "Every adult must show identification at the entrance.",
    "每個成年人都必須在入口處出示身份證明。",
    "n.／adj."
  ],
  [
    "agency",
    "代理機構；機構",
    "The travel agency arranged our hotel reservations.",
    "旅行社幫我們預訂了飯店。",
    "n."
  ],
  [
    "alarm",
    "警報；使驚慌",
    "The alarm rang at six o'clock this morning.",
    "今天早上六點鐘鬧鐘響了。",
    "n.／v."
  ],
  [
    "alike",
    "相像的；同樣地",
    "The two brothers look alike in old photographs.",
    "兩兄弟在老照片中長得很像。",
    "adj.／adv."
  ],
  [
    "alone",
    "獨自的；單獨地",
    "He prefers to work alone when writing reports.",
    "寫報告時他更喜歡獨自工作。",
    "adj.／adv."
  ],
  [
    "ambulance",
    "救護車",
    "An ambulance arrived within a few minutes.",
    "幾分鐘內救護車就到了。",
    "n."
  ],
  [
    "apartment",
    "公寓",
    "They rented an apartment near the train station.",
    "他們在火車站附近租了一間公寓。",
    "n."
  ],
  [
    "appetite",
    "食慾；胃口",
    "The long hike gave us a healthy appetite.",
    "長途健行讓我們胃口健康。",
    "n."
  ],
  [
    "argue",
    "爭論；主張",
    "The managers began to argue about the final budget.",
    "經理們開始爭論最終的預算。",
    "v."
  ],
  [
    "artwork",
    "藝術作品",
    "The lobby displays artwork by local students.",
    "大堂展示當地學生的藝術作品。",
    "n."
  ],
  [
    "aside",
    "在旁邊；撇開",
    "Please set the damaged box aside for inspection.",
    "請將損壞的盒子放在一邊以供檢查。",
    "n.／adv."
  ],
  [
    "asleep",
    "睡著的",
    "The child was already asleep when we arrived.",
    "我們到達時孩子已經睡著了。",
    "adj.／adv."
  ],
  [
    "background",
    "背景",
    "Her background in sales helped her get the job.",
    "她的銷售背景幫助她得到了這份工作。",
    "n.／v."
  ],
  [
    "barber",
    "理髮師",
    "The barber gave my brother a neat haircut.",
    "理髮師幫我弟弟理了一個整齊的頭髮。",
    "n.／v."
  ],
  [
    "bargain",
    "便宜貨；討價還價",
    "This jacket is a bargain at half price.",
    "這件夾克很便宜，半價。",
    "n.／v."
  ],
  [
    "beachfront",
    "海濱的",
    "They booked a beachfront hotel for the holiday.",
    "他們預訂了一家海濱飯店度假。",
    "n."
  ],
  [
    "bean",
    "豆子",
    "Add one bean after the soup begins to boil.",
    "湯開始沸騰後加入一顆豆子。",
    "n.／v."
  ],
  [
    "behavior",
    "行為",
    "His polite behavior impressed the interviewers.",
    "他的禮貌舉止給面試官留下了深刻的印象。",
    "n."
  ],
  [
    "belt",
    "皮帶；地帶",
    "Please fasten your belt before the plane takes off.",
    "飛機起飛前請繫好安全帶。",
    "n.／v."
  ],
  [
    "beside",
    "在旁邊",
    "A small lamp stood beside the bed.",
    "床邊立著一盞小燈。",
    "prep."
  ],
  [
    "bicycle",
    "自行車",
    "She rides her bicycle to work every day.",
    "她每天騎自行車去上班。",
    "n.／v."
  ],
  [
    "booking",
    "預訂；預約",
    "Please confirm your booking by email.",
    "請透過電子郵件確認您的預訂。",
    "n."
  ],
  [
    "borrow",
    "借入",
    "May I borrow your pen for a moment?",
    "我可以藉一下你的筆嗎？",
    "v."
  ],
  [
    "brave",
    "勇敢的",
    "It was brave of her to speak in public.",
    "她在公開場合演講真是勇敢。",
    "n.／v.／adj."
  ],
  [
    "breakdown",
    "故障；細分",
    "The car had a breakdown on the highway.",
    "汽車在高速公路上拋錨了。",
    "n."
  ],
  [
    "breath",
    "呼吸；一口氣",
    "Take a deep breath before you begin the presentation.",
    "在開始演示之前深呼吸。",
    "n."
  ],
  [
    "bulletin",
    "公告；簡報",
    "The school posted a bulletin about the schedule change.",
    "學校發布了關於時間表變更的公告。",
    "n.／v."
  ],
  [
    "bundle",
    "一捆；打包",
    "He carried a bundle of old newspapers outside.",
    "他拎著一包舊報紙出門了。",
    "n.／v."
  ],
  [
    "bus stop",
    "公車站",
    "We waited at the bus stop in the rain.",
    "我們冒雨在公車站等車。",
    "n."
  ],
  [
    "cabin",
    "小屋；機艙",
    "Our cabin had a beautiful view of the lake.",
    "我們的小屋可以看到美麗的湖景。",
    "n.／v."
  ],
  [
    "campground",
    "露營地",
    "The campground closes after October each year.",
    "露營地每年十月後關閉。",
    "n."
  ],
  [
    "cancel",
    "取消",
    "They had to cancel the outdoor concert.",
    "他們不得不取消戶外音樂會。",
    "n.／v."
  ],
  [
    "carrier",
    "運輸公司；搬運者",
    "The carrier delivered the package this morning.",
    "承運人今天早上交付了包裹。",
    "n."
  ],
  [
    "cashier",
    "收銀員",
    "The cashier gave me the correct change.",
    "收銀員給了我正確的零錢。",
    "n.／v."
  ],
  [
    "central",
    "中心的；主要的",
    "The hotel is in a central location downtown.",
    "飯店位於市中心的中心位置。",
    "n.／adj."
  ],
  [
    "cereal",
    "穀類早餐",
    "She ate cereal and fruit for breakfast.",
    "她早餐吃麥片和水果。",
    "n.／adj."
  ],
  [
    "changeable",
    "易變的；可更換的",
    "The weather is changeable in early spring.",
    "早春天氣多變。",
    "adj."
  ],
  [
    "charity",
    "慈善機構",
    "The charity collects food for local families.",
    "該慈善機構為當地家庭收集食物。",
    "n."
  ],
  [
    "checkout",
    "結帳；退房",
    "Checkout is at noon, so please return the key.",
    "退房時間為中午，請歸還鑰匙。",
    "n."
  ],
  [
    "childhood",
    "童年",
    "She spent her childhood near the ocean.",
    "她在海邊度過了童年。",
    "n."
  ],
  [
    "choice",
    "選擇",
    "You have a choice between tea and coffee.",
    "您可以選擇茶和咖啡。",
    "n.／adj."
  ],
  [
    "citizen",
    "公民；市民",
    "Every citizen has the right to vote.",
    "每個公民都有投票權。",
    "n."
  ],
  [
    "city hall",
    "市政府",
    "The meeting will take place at city hall.",
    "會議將在市政廳舉行。",
    "n."
  ],
  [
    "classmate",
    "同學",
    "My classmate helped me prepare for the exam.",
    "我的同學幫我準備考試。",
    "n."
  ],
  [
    "clerk",
    "店員；辦事員",
    "The clerk checked our reservation quickly.",
    "店員很快就檢查了我們的預訂。",
    "n.／v."
  ],
  [
    "climate",
    "氣候",
    "The island has a warm climate all year.",
    "島上全年氣候溫暖。",
    "n."
  ],
  [
    "coastline",
    "海岸線",
    "We drove along the coastline before sunset.",
    "日落前我們沿著海岸線行駛。",
    "n."
  ],
  [
    "compare",
    "比較",
    "Compare the two prices before you buy anything.",
    "在購買任何東西之前先比較兩個價格。",
    "n.／v."
  ],
  [
    "concentrate",
    "專心；集中",
    "Please concentrate on one task at a time.",
    "請一次專注於一項任務。",
    "n.／v."
  ],
  [
    "confirm",
    "確認",
    "Could you confirm the delivery date today?",
    "您能確認今天的交貨日期嗎？",
    "v."
  ],
  [
    "connection",
    "連接；轉機",
    "We have a short connection in Singapore.",
    "我們在新加坡有短程轉機。",
    "n."
  ],
  [
    "contact",
    "聯絡；接觸",
    "Please contact us if you have any questions.",
    "如有任何疑問，請與我們聯絡。",
    "n.／v."
  ],
  [
    "copy",
    "複製；副本",
    "Make a copy of the receipt for your records.",
    "複印收據以供記錄。",
    "n.／v."
  ],
  [
    "corner",
    "角落",
    "The pharmacy is on the corner of this street.",
    "藥局位於這條街的轉角處。",
    "n.／v."
  ],
  [
    "counter",
    "櫃檯；計數器",
    "Please leave the completed form at the counter.",
    "請將填妥的表格留在櫃檯。",
    "n.／v.／adj.／adv."
  ],
  [
    "couple",
    "一對；幾個",
    "A couple of customers are waiting outside.",
    "幾個顧客正在外面等候。",
    "n.／v."
  ],
  [
    "courage",
    "勇氣",
    "It took courage to admit the mistake.",
    "承認錯誤需要勇氣。",
    "n."
  ],
  [
    "court",
    "法院；球場",
    "The case will be heard in court next month.",
    "此案將於下個月在法庭上審理。",
    "n.／v."
  ],
  [
    "crash",
    "碰撞；當機",
    "My computer may crash if too many programs are open.",
    "如果打開的程式太多，我的電腦可能會崩潰。",
    "n.／v."
  ],
  [
    "crosswalk",
    "行人穿越道",
    "Use the crosswalk when you cross the road.",
    "過馬路時請走行人穿越道。",
    "n."
  ],
  [
    "crowded",
    "擁擠的",
    "The train is usually crowded during rush hour.",
    "尖峰時段火車通常很擁擠。",
    "adj."
  ],
  [
    "culture",
    "文化",
    "Food is an important part of every culture.",
    "食物是每種文化的重要組成部分。",
    "n.／v."
  ],
  [
    "customs",
    "海關；習俗",
    "We declared the gifts at customs.",
    "我們在海關申報了這些禮物。",
    "n."
  ],
  [
    "dairy",
    "乳製品的；乳品店",
    "She buys dairy products from a local farm.",
    "她從當地農場購買乳製品。",
    "n."
  ],
  [
    "decoration",
    "裝飾品；裝潢",
    "The flowers were a lovely decoration for the hall.",
    "這些鮮花為大廳增添了可愛的裝飾。",
    "n."
  ],
  [
    "decrease",
    "減少；降低",
    "Sales may decrease during the slow season.",
    "淡季期間銷量可能會下降。",
    "n.／v."
  ],
  [
    "describe",
    "描述",
    "Please describe the problem in detail.",
    "請詳細描述問題。",
    "v."
  ],
  [
    "destination",
    "目的地",
    "Taipei is our final destination on this trip.",
    "台北是我們此行的最終目的地。",
    "n."
  ],
  [
    "diary",
    "日記；行事曆",
    "He writes in his diary before going to bed.",
    "他在睡前寫日記。",
    "n."
  ],
  [
    "diet",
    "飲食；節食",
    "A balanced diet gives you more energy.",
    "均衡的飲食可以給你更多的能量。",
    "n.／v."
  ],
  [
    "dine",
    "用餐",
    "We plan to dine at a small Italian restaurant.",
    "我們計劃在一家義大利小餐館用餐。",
    "v."
  ],
  [
    "disease",
    "疾病",
    "Regular exercise can help prevent disease.",
    "經常運動有助於預防疾病。",
    "n."
  ],
  [
    "district",
    "地區；行政區",
    "Their office is in the business district.",
    "他們的辦公室在商業區。",
    "n.／v."
  ],
  [
    "double",
    "兩倍的；雙人房",
    "We booked a double room for two nights.",
    "我們訂了一間雙人房住了兩晚。",
    "n.／v.／adj.／adv."
  ],
  [
    "downtown",
    "市中心",
    "The museum is only ten minutes from downtown.",
    "博物館距離市中心僅十分鐘路程。",
    "n.／adj.／adv."
  ],
  [
    "drama",
    "戲劇；戲劇性事件",
    "The manager handled the complaint without any drama.",
    "經理處理投訴沒有任何戲劇性。",
    "n."
  ],
  [
    "drawer",
    "抽屜",
    "Your passport is in the top drawer.",
    "你的護照在最上面的抽屜裡。",
    "n."
  ],
  [
    "driver's license",
    "駕照",
    "You need a driver's license to rent a car.",
    "您需要擁有駕駛執照才能租車。",
    "n."
  ],
  [
    "drugstore",
    "藥局",
    "I bought cough medicine at the drugstore.",
    "我在藥局買了止咳藥。",
    "n."
  ],
  [
    "dry cleaner",
    "乾洗店",
    "The dry cleaner will return my suit on Friday.",
    "乾洗店將在周五歸還我的西裝。",
    "n."
  ],
  [
    "durable",
    "耐用的",
    "This suitcase is durable enough for frequent travel.",
    "這款行李箱足夠耐用，適合頻繁旅行。",
    "adj."
  ],
  [
    "earthquake",
    "地震",
    "The earthquake caused minor damage to several buildings.",
    "地震對多棟建築物造成輕微損壞。",
    "n."
  ],
  [
    "educate",
    "教育",
    "The program aims to educate people about recycling.",
    "該計劃旨在教育人們有關回收的知識。",
    "v."
  ],
  [
    "elderly",
    "年長的；高齡者",
    "The clinic offers special services for elderly patients.",
    "該診所為老年患者提供特殊服務。",
    "n.／adj."
  ],
  [
    "elevator",
    "電梯",
    "Take the elevator to the fifth floor.",
    "搭乘電梯到五樓。",
    "n."
  ],
  [
    "environment",
    "環境",
    "We should protect the environment for future generations.",
    "我們應該為子孫後代保護環境。",
    "n."
  ],
  [
    "equal",
    "相等的；平等的",
    "All applicants should have an equal opportunity.",
    "所有申請人都應該有平等的機會。",
    "n.／v.／adj."
  ],
  [
    "everywhere",
    "到處",
    "We looked everywhere for the missing key.",
    "我們到處尋找遺失的鑰匙。",
    "adv."
  ],
  [
    "exact",
    "精確的；確切的",
    "Please give me the exact address of the venue.",
    "請給我具體的場地地址。",
    "v.／adj."
  ],
  [
    "excited",
    "興奮的",
    "The children were excited about the field trip.",
    "孩子們對這次實地考察感到興奮。",
    "adj."
  ],
  [
    "firm",
    "公司；堅固的",
    "She works for an international law firm.",
    "她在一家國際律師事務所工作。",
    "n.／v.／adj.／adv."
  ],
  [
    "fitness",
    "健康；適任性",
    "The gym offers classes for every level of fitness.",
    "健身房提供適合各個健身程度的課程。",
    "n."
  ],
  [
    "foreign",
    "外國的",
    "He speaks two foreign languages fluently.",
    "他能流利地說兩種外語。",
    "adj."
  ],
  [
    "form",
    "表格；形成",
    "Please complete this form before your appointment.",
    "請在預約前填寫此表格。",
    "n.／v."
  ],
  [
    "furniture",
    "家具",
    "The office furniture arrived yesterday afternoon.",
    "辦公家具昨天下午到達。",
    "n."
  ],
  [
    "garage",
    "車庫；修車廠",
    "The car is being repaired at the garage.",
    "這輛車正在車庫裡修理。",
    "n.／v."
  ],
  [
    "gardener",
    "園丁",
    "The gardener waters the plants every morning.",
    "園丁每天早上都會​​給植物澆水。",
    "n."
  ],
  [
    "general",
    "一般的；總體的",
    "The general plan will be discussed on Monday.",
    "總體計劃將於週一進行討論。",
    "n.／v.／adj."
  ],
  [
    "gift shop",
    "禮品店",
    "We bought postcards at the museum gift shop.",
    "我們在博物館禮品店買了明信片。",
    "n."
  ],
  [
    "government",
    "政府",
    "The government announced a new transportation plan.",
    "政府宣布了新的交通計劃。",
    "n."
  ],
  [
    "grocery",
    "雜貨；食品雜貨店",
    "I stopped at the grocery store after work.",
    "下班後我停在雜貨店。",
    "n."
  ],
  [
    "guidebook",
    "旅遊指南",
    "This guidebook includes useful maps and restaurant tips.",
    "本指南包括有用的地圖和餐廳提示。",
    "n."
  ],
  [
    "habit",
    "習慣",
    "Reading before bed is a good habit.",
    "睡前讀書是個好習慣。",
    "n.／v."
  ],
  [
    "hallway",
    "走廊",
    "Please do not leave boxes in the hallway.",
    "請不要將箱子留在走廊上。",
    "n."
  ],
  [
    "hang",
    "懸掛",
    "Hang your coat on the hook by the door.",
    "把你的外套掛在門邊的掛鉤上。",
    "n.／v."
  ],
  [
    "healthcare",
    "醫療保健",
    "Many employees receive healthcare through their company.",
    "許多員工透過公司獲得醫療保健。",
    "n."
  ],
  [
    "helpful",
    "有幫助的",
    "The receptionist was very helpful and friendly.",
    "接待員非常樂於助人且友善。",
    "adj."
  ],
  [
    "highway",
    "高速公路",
    "Traffic was heavy on the highway this morning.",
    "今天早上，高速公路上交通擁擠。",
    "n."
  ],
  [
    "hiking",
    "健行",
    "We went hiking in the mountains last weekend.",
    "上週末我們去山裡健行。",
    "n."
  ],
  [
    "hotel lobby",
    "飯店大廳",
    "Let's meet in the hotel lobby at eight.",
    "我們八點在飯店大廳見面吧。",
    "n."
  ],
  [
    "human resources",
    "人力資源",
    "Human resources will explain the new benefits.",
    "人力資源部將解釋新的好處。",
    "n."
  ],
  [
    "identify",
    "辨識；確認",
    "Can you identify the person in this photograph?",
    "你能認出這張照片中的人嗎？",
    "v."
  ],
  [
    "inform",
    "通知；告知",
    "Please inform the team about the time change.",
    "請通知團隊有關時間變更的資訊。",
    "v."
  ],
  [
    "ingredient",
    "原料；成分",
    "Fresh garlic is an important ingredient in this dish.",
    "新鮮大蒜是這道菜的重要原料。",
    "n."
  ],
  [
    "island",
    "島嶼",
    "They spent a quiet week on a small island.",
    "他們在一個小島上度過了安靜的一周。",
    "n."
  ],
  [
    "item",
    "物品；項目",
    "Please place the item on the desk.",
    "請把物品放在桌上。",
    "n."
  ],
  [
    "judge",
    "判斷；法官",
    "The judge will announce the result.",
    "法官將公布結果。",
    "v.／n."
  ],
  [
    "keep in touch",
    "保持聯絡",
    "Let's keep in touch after the course.",
    "課程結束後保持聯絡吧。",
    "phr.v."
  ],
  [
    "keyboard",
    "鍵盤",
    "The keyboard is beside the monitor.",
    "鍵盤在螢幕旁邊。",
    "n."
  ],
  [
    "landmark",
    "地標",
    "The tower is a famous local landmark.",
    "那座塔是著名的當地地標。",
    "n."
  ],
  [
    "laundry",
    "洗衣；待洗衣物",
    "I need to do the laundry this evening.",
    "我今晚需要洗衣服。",
    "n."
  ],
  [
    "leader",
    "領導者；主管",
    "Our team leader explained the new plan.",
    "我們的組長說明了新計畫。",
    "n."
  ],
  [
    "lending",
    "借貸",
    "The bank is reviewing its lending policy.",
    "銀行正在檢討其借貸政策。",
    "n."
  ],
  [
    "level",
    "程度；樓層；水平",
    "This course is suitable for your level.",
    "這門課適合你的程度。",
    "n."
  ],
  [
    "library card",
    "借書證",
    "Please show your library card at the desk.",
    "請在櫃檯出示借書證。",
    "n."
  ],
  [
    "license",
    "執照；許可證",
    "You need a license to drive this vehicle.",
    "你需要駕照才能駕駛這輛車。",
    "n."
  ],
  [
    "lifestyle",
    "生活方式",
    "Regular exercise can improve your lifestyle.",
    "規律運動可以改善你的生活方式。",
    "n."
  ],
  [
    "limit",
    "限制；限定",
    "Please limit your response to one page.",
    "請把回覆限制在一頁內。",
    "n.／v."
  ],
  [
    "liquid",
    "液體",
    "Do not carry large amounts of liquid on the plane.",
    "請勿攜帶大量液體上飛機。",
    "n.／adj."
  ],
  [
    "local",
    "當地的；本地人",
    "We bought fruit from a local market.",
    "我們從當地市場買了水果。",
    "adj.／n."
  ],
  [
    "locate",
    "找到；設立於",
    "You can locate the file by using the search box.",
    "你可以用搜尋欄找到檔案。",
    "v."
  ],
  [
    "locker",
    "置物櫃",
    "Put your bag in the locker before class.",
    "上課前把你的包包放進置物櫃。",
    "n."
  ],
  [
    "map",
    "地圖；映射",
    "The map shows the fastest route to the station.",
    "地圖顯示到車站最快的路線。",
    "n.／v."
  ],
  [
    "measure",
    "測量；措施",
    "Please measure the room before ordering furniture.",
    "訂購家具前請先測量房間。",
    "v.／n."
  ],
  [
    "medical",
    "醫療的",
    "Please bring your medical record to the clinic.",
    "請把你的醫療紀錄帶到診所。",
    "adj."
  ],
  [
    "middle",
    "中間；中央的",
    "She sat in the middle of the row.",
    "她坐在那排的中間。",
    "n.／adj."
  ],
  [
    "minimize",
    "使降至最低",
    "We should minimize unnecessary costs.",
    "我們應該把不必要的成本降到最低。",
    "v."
  ],
  [
    "minor",
    "較小的；未成年者",
    "The report contains only a minor error.",
    "報告裡只有一個小錯誤。",
    "adj.／n."
  ],
  [
    "modern",
    "現代的",
    "The hotel has a modern design.",
    "這家飯店有現代化的設計。",
    "adj."
  ],
  [
    "move in",
    "搬入",
    "My new neighbors will move in next week.",
    "我的新鄰居下週會搬進來。",
    "phr.v."
  ],
  [
    "movie theater",
    "電影院",
    "The movie theater is across from the mall.",
    "電影院在購物中心對面。",
    "n."
  ],
  [
    "museum",
    "博物館",
    "The museum is closed on Mondays.",
    "博物館星期一不開放。",
    "n."
  ],
  [
    "nonstop",
    "不停的；直達的",
    "We booked a nonstop flight to Taipei.",
    "我們訂了直飛台北的班機。",
    "adj.／adv."
  ],
  [
    "office supplies",
    "辦公用品",
    "The assistant ordered office supplies online.",
    "助理在線上訂購辦公用品。",
    "n."
  ],
  [
    "ordinary",
    "普通的",
    "It was an ordinary day at work.",
    "那是平常的上班日。",
    "adj."
  ],
  [
    "organize",
    "整理；組織",
    "Please organize the files by date.",
    "請依日期整理檔案。",
    "v."
  ],
  [
    "overseas",
    "海外；在海外",
    "She plans to study overseas next year.",
    "她計畫明年到海外讀書。",
    "adv.／adj."
  ],
  [
    "owner",
    "擁有者；老闆",
    "The owner greeted every customer warmly.",
    "老闆親切地迎接每位顧客。",
    "n."
  ],
  [
    "package",
    "包裹；包裝",
    "Your package will arrive tomorrow morning.",
    "你的包裹明天早上會送達。",
    "n.／v."
  ],
  [
    "passport",
    "護照",
    "Keep your passport in a safe place.",
    "把護照放在安全的地方。",
    "n."
  ],
  [
    "peaceful",
    "平靜的；安寧的",
    "The park is peaceful in the early morning.",
    "清晨的公園很寧靜。",
    "adj."
  ],
  [
    "permission",
    "允許；許可",
    "You need permission to use this room.",
    "你需要許可才能使用這個房間。",
    "n."
  ],
  [
    "physical",
    "身體的；實體的",
    "The job requires physical strength.",
    "這份工作需要體力。",
    "adj."
  ],
  [
    "platform",
    "月台；平台",
    "Meet me on platform three.",
    "在第三月台和我碰面。",
    "n."
  ],
  [
    "pleasant",
    "令人愉快的",
    "We had a pleasant conversation over lunch.",
    "我們午餐時聊得很愉快。",
    "adj."
  ],
  [
    "podcast",
    "播客",
    "I listen to an English podcast on my way home.",
    "我在回家路上聽英文播客。",
    "n."
  ],
  [
    "polite",
    "有禮貌的",
    "It is polite to thank the host.",
    "向主人道謝是有禮貌的。",
    "adj."
  ],
  [
    "population",
    "人口",
    "The city's population has grown quickly.",
    "這座城市的人口快速成長。",
    "n."
  ],
  [
    "portable",
    "可攜帶的",
    "This portable charger is useful for travel.",
    "這個行動充電器很適合旅行。",
    "adj."
  ],
  [
    "post office",
    "郵局",
    "The post office opens at nine.",
    "郵局九點開門。",
    "n."
  ],
  [
    "prefer",
    "較喜歡；偏好",
    "I prefer tea to coffee in the afternoon.",
    "下午我比較喜歡喝茶而不是咖啡。",
    "v."
  ],
  [
    "presenter",
    "報告人；主持人",
    "The presenter answered questions after the talk.",
    "報告人在演講後回答問題。",
    "n."
  ],
  [
    "prevent",
    "預防；阻止",
    "Washing your hands helps prevent illness.",
    "洗手有助於預防疾病。",
    "v."
  ],
  [
    "printer",
    "印表機",
    "The printer is out of paper.",
    "印表機沒紙了。",
    "n."
  ],
  [
    "prize",
    "獎品；獎金",
    "She won first prize in the contest.",
    "她在比賽中獲得第一名。",
    "n."
  ],
  [
    "promote",
    "促進；升遷；推廣",
    "The store will promote the sale online.",
    "商店會在線上宣傳特賣活動。",
    "v."
  ],
  [
    "proper",
    "適當的；正確的",
    "Wear proper shoes for the hike.",
    "健行時請穿合適的鞋子。",
    "adj."
  ],
  [
    "protect",
    "保護",
    "Wear a hat to protect your skin.",
    "戴帽子保護你的皮膚。",
    "v."
  ],
  [
    "queue",
    "隊伍；排隊",
    "We waited in a queue for the tickets.",
    "我們排隊等候買票。",
    "n.／v."
  ],
  [
    "railway",
    "鐵路",
    "The railway connects the two cities.",
    "鐵路連接這兩座城市。",
    "n."
  ],
  [
    "rare",
    "罕見的",
    "It is rare to see snow here.",
    "在這裡看到雪很罕見。",
    "adj."
  ],
  [
    "rate",
    "比率；評價",
    "Please rate the service after your visit.",
    "造訪後請為服務評分。",
    "n.／v."
  ],
  [
    "record",
    "紀錄；記錄",
    "Please record the meeting with your phone.",
    "請用手機錄下會議。",
    "n.／v."
  ],
  [
    "refund",
    "退款；退費",
    "You can request a refund within seven days.",
    "你可以在七天內申請退款。",
    "n.／v."
  ],
  [
    "register",
    "登記；註冊",
    "Please register for the workshop by Friday.",
    "請在星期五前報名工作坊。",
    "v.／n."
  ],
  [
    "regular",
    "規律的；定期的",
    "He is a regular customer at this cafe.",
    "他是這家咖啡館的常客。",
    "adj.／n."
  ],
  [
    "relax",
    "放鬆",
    "Take a short break to relax.",
    "休息一下放鬆心情。",
    "v."
  ],
  [
    "remind",
    "提醒",
    "Please remind me about the appointment.",
    "請提醒我這個約會。",
    "v."
  ],
  [
    "repair",
    "修理；維修",
    "The technician will repair the air conditioner.",
    "技師會修理冷氣機。",
    "v.／n."
  ],
  [
    "repeat",
    "重複",
    "Could you repeat the last sentence?",
    "你可以重複最後一句嗎？",
    "v.／n."
  ],
  [
    "reply",
    "回覆；回答",
    "Please reply to the email today.",
    "請今天回覆這封電子郵件。",
    "v.／n."
  ],
  [
    "request",
    "要求；請求",
    "The manager approved her request.",
    "經理核准了她的請求。",
    "n.／v."
  ],
  [
    "reserve",
    "預訂；保留",
    "We reserved a table for six.",
    "我們訂了一張六人桌。",
    "v.／n."
  ],
  [
    "responsible",
    "負責的",
    "She is responsible for customer service.",
    "她負責客服工作。",
    "adj."
  ],
  [
    "roadside",
    "路邊的",
    "They stopped at a roadside restaurant.",
    "他們在路邊餐廳停下來用餐。",
    "adj.／n."
  ],
  [
    "route",
    "路線",
    "This bus route goes to the airport.",
    "這條公車路線會到機場。",
    "n."
  ],
  [
    "safe",
    "安全的；保險箱",
    "Keep your valuables in the safe.",
    "把貴重物品放在保險箱裡。",
    "adj.／n."
  ],
  [
    "salary",
    "薪水",
    "Her salary is paid at the end of each month.",
    "她的薪水在每月底發放。",
    "n."
  ],
  [
    "sale",
    "特賣；銷售",
    "These shoes are on sale this week.",
    "這些鞋子本週特價。",
    "n."
  ],
  [
    "sample",
    "樣品；範例",
    "The store gave us a free sample.",
    "商店給了我們一個免費樣品。",
    "n.／v."
  ],
  [
    "satisfied",
    "滿意的",
    "The customer was satisfied with the service.",
    "顧客對服務感到滿意。",
    "adj."
  ],
  [
    "secretary",
    "秘書",
    "The secretary scheduled the meeting.",
    "秘書安排了會議。",
    "n."
  ],
  [
    "seminar",
    "研討會",
    "The seminar begins at two o'clock.",
    "研討會兩點開始。",
    "n."
  ],
  [
    "separate",
    "分開；各自的",
    "Please separate paper from plastic.",
    "請把紙類和塑膠分開。",
    "v.／adj."
  ],
  [
    "shift",
    "輪班；改變",
    "She works the night shift this week.",
    "她這週上夜班。",
    "n.／v."
  ],
  [
    "shopper",
    "購物者",
    "Holiday shoppers filled the mall.",
    "假日購物者擠滿購物中心。",
    "n."
  ],
  [
    "shortcut",
    "捷徑",
    "This shortcut saves ten minutes.",
    "這條捷徑可節省十分鐘。",
    "n."
  ],
  [
    "signal",
    "訊號；信號",
    "The phone signal is weak in the tunnel.",
    "隧道裡的手機訊號很弱。",
    "n.／v."
  ],
  [
    "solution",
    "解決方法；溶液",
    "We found a simple solution to the problem.",
    "我們找到一個簡單的解決方法。",
    "n."
  ],
  [
    "source",
    "來源；根源",
    "Please cite the source of this information.",
    "請註明這項資訊的來源。",
    "n.／v."
  ],
  [
    "speaker",
    "演講者；喇叭",
    "The speaker shared three useful tips.",
    "演講者分享了三個實用建議。",
    "n."
  ],
  [
    "specialist",
    "專家",
    "Talk to a specialist if the problem continues.",
    "若問題持續，請諮詢專家。",
    "n."
  ],
  [
    "spouse",
    "配偶",
    "Employees may invite their spouse to the event.",
    "員工可邀請配偶參加活動。",
    "n."
  ],
  [
    "store",
    "商店；儲存",
    "The store closes at ten tonight.",
    "商店今晚十點關門。",
    "n.／v."
  ],
  [
    "structure",
    "結構；組織",
    "The bridge has a strong steel structure.",
    "這座橋有堅固的鋼鐵結構。",
    "n.／v."
  ],
  [
    "studio",
    "工作室；錄音室",
    "The artist works in a small studio.",
    "那位藝術家在一間小工作室工作。",
    "n."
  ],
  [
    "subway",
    "捷運；地鐵",
    "Take the subway to avoid traffic.",
    "搭捷運以避開交通壅塞。",
    "n."
  ],
  [
    "suggest",
    "建議",
    "I suggest leaving before rush hour.",
    "我建議在尖峰時間前出發。",
    "v."
  ],
  [
    "supplier",
    "供應商",
    "The supplier delivered the materials early.",
    "供應商提早送達材料。",
    "n."
  ],
  [
    "system",
    "系統",
    "The new system is easy to use.",
    "這個新系統很容易使用。",
    "n."
  ],
  [
    "target",
    "目標；瞄準",
    "Our sales target is higher this month.",
    "我們這個月的銷售目標更高。",
    "n.／v."
  ],
  [
    "task",
    "任務",
    "Please finish this task before lunch.",
    "請在午餐前完成這項任務。",
    "n."
  ],
  [
    "teamwork",
    "團隊合作",
    "Good teamwork helps us finish faster.",
    "良好的團隊合作能讓我們更快完成工作。",
    "n."
  ],
  [
    "technical",
    "技術的",
    "Ask the technical team for help.",
    "請向技術團隊求助。",
    "adj."
  ],
  [
    "technology",
    "科技；技術",
    "Technology changes the way we work.",
    "科技改變我們工作的方式。",
    "n."
  ],
  [
    "temporary",
    "暫時的",
    "This is a temporary office location.",
    "這是暫時的辦公地點。",
    "adj."
  ],
  [
    "terminal",
    "航廈；終端機",
    "Our flight leaves from Terminal One.",
    "我們的班機從第一航廈出發。",
    "n."
  ],
  [
    "textbook",
    "教科書",
    "Bring your textbook to class tomorrow.",
    "明天把教科書帶來上課。",
    "n."
  ],
  [
    "theme",
    "主題",
    "The theme of the event is innovation.",
    "活動主題是創新。",
    "n."
  ],
  [
    "theory",
    "理論",
    "The teacher explained the theory clearly.",
    "老師清楚地解釋了這個理論。",
    "n."
  ],
  [
    "throughout",
    "遍及；自始至終",
    "It rained throughout the afternoon.",
    "整個下午都在下雨。",
    "prep.／adv."
  ],
  [
    "ticket counter",
    "售票櫃檯",
    "The ticket counter is near the entrance.",
    "售票櫃檯在入口附近。",
    "n."
  ],
  [
    "tidy",
    "整潔的；整理",
    "Please keep your desk tidy.",
    "請保持桌面整潔。",
    "adj.／v."
  ],
  [
    "tip",
    "提示；小費；尖端",
    "Here is a useful tip for new learners.",
    "這裡有一個給新學習者的實用提示。",
    "n.／v."
  ],
  [
    "track",
    "追蹤；軌道",
    "Use this app to track your progress.",
    "使用這個應用程式追蹤你的進度。",
    "v.／n."
  ],
  [
    "transfer",
    "轉移；轉乘",
    "You can transfer to another line here.",
    "你可以在這裡轉乘另一條線。",
    "v.／n."
  ],
  [
    "travel agent",
    "旅行社人員",
    "The travel agent found us a cheaper flight.",
    "旅行社人員幫我們找到更便宜的班機。",
    "n."
  ],
  [
    "trip",
    "旅行",
    "Our trip to the coast was relaxing.",
    "我們到海岸的旅行很放鬆。",
    "n.／v."
  ],
  [
    "trust",
    "信任",
    "I trust her advice.",
    "我信任她的建議。",
    "n.／v."
  ],
  [
    "typical",
    "典型的",
    "This is a typical example of the problem.",
    "這是這個問題的典型例子。",
    "adj."
  ],
  [
    "uniform",
    "制服；一致的",
    "All staff members wear a uniform.",
    "所有員工都穿制服。",
    "n.／adj."
  ],
  [
    "unusual",
    "不尋常的",
    "It is unusual for him to be late.",
    "他遲到很不尋常。",
    "adj."
  ],
  [
    "upload",
    "上傳",
    "Please upload the document before noon.",
    "請在中午前上傳文件。",
    "v.／n."
  ],
  [
    "usual",
    "通常的；慣常的",
    "She arrived at her usual time.",
    "她在平常的時間到達。",
    "adj."
  ],
  [
    "venue",
    "場地；會場",
    "The venue is close to the station.",
    "會場靠近車站。",
    "n."
  ],
  [
    "version",
    "版本",
    "Please install the latest version.",
    "請安裝最新版本。",
    "n."
  ],
  [
    "video call",
    "視訊通話",
    "We will have a video call at three.",
    "我們三點要進行視訊通話。",
    "n."
  ],
  [
    "view",
    "景色；觀點；查看",
    "The room has a beautiful ocean view.",
    "這個房間有美麗的海景。",
    "n.／v."
  ],
  [
    "visitor",
    "訪客",
    "Visitors must sign in at reception.",
    "訪客必須在接待處登記。",
    "n."
  ],
  [
    "warehouse",
    "倉庫",
    "The goods are stored in a warehouse.",
    "貨物存放在倉庫裡。",
    "n."
  ],
  [
    "weather forecast",
    "天氣預報",
    "Check the weather forecast before your trip.",
    "旅行前請查看天氣預報。",
    "n."
  ],
  [
    "wheelchair",
    "輪椅",
    "The building has a ramp for wheelchairs.",
    "這棟建築有供輪椅使用的坡道。",
    "n."
  ],
  [
    "workshop",
    "工作坊",
    "I joined a writing workshop last weekend.",
    "我上週末參加了寫作工作坊。",
    "n."
  ],
  [
    "worldwide",
    "全世界的；全世界地",
    "The company serves customers worldwide.",
    "公司服務世界各地的顧客。",
    "adj.／adv."
  ],
  [
    "writer",
    "作家；撰稿人",
    "The writer is signing books today.",
    "這位作家今天正在簽書。",
    "n."
  ],
  [
    "yearly",
    "每年的",
    "The museum offers a yearly membership.",
    "博物館提供年度會員資格。",
    "adj.／adv."
  ],
  [
    "accept",
    "接受",
    "Please accept my invitation.",
    "請接受我的邀請。",
    "v."
  ],
  [
    "act",
    "行動；表演",
    "We need to act quickly.",
    "我們需要迅速行動。",
    "v.／n."
  ],
  [
    "add",
    "增加；加",
    "Add your name to the list.",
    "把你的名字加到名單上。",
    "v."
  ],
  [
    "afraid",
    "害怕的；擔心的",
    "I am afraid of making a mistake.",
    "我害怕犯錯。",
    "adj."
  ],
  [
    "agree",
    "同意",
    "We agree on the meeting time.",
    "我們同意會議時間。",
    "v."
  ],
  [
    "alive",
    "活著的；有活力的",
    "The city feels alive at night.",
    "這座城市在夜晚充滿活力。",
    "adj."
  ],
  [
    "already",
    "已經",
    "I have already sent the email.",
    "我已經寄出電子郵件。",
    "adv."
  ],
  [
    "artist",
    "藝術家",
    "The artist painted a colorful wall.",
    "這位藝術家畫了一面色彩繽紛的牆。",
    "n."
  ],
  [
    "autumn",
    "秋天",
    "The leaves change color in autumn.",
    "葉子在秋天變色。",
    "n."
  ],
  [
    "awake",
    "醒著的；叫醒",
    "I stayed awake until midnight.",
    "我一直醒到午夜。",
    "adj.／v."
  ],
  [
    "baby",
    "嬰兒",
    "The baby is sleeping quietly.",
    "嬰兒正在安靜地睡覺。",
    "n."
  ],
  [
    "bank",
    "銀行；河岸",
    "The bank opens at nine o'clock.",
    "銀行九點開門。",
    "n.／v."
  ],
  [
    "basic",
    "基本的",
    "This guide explains the basic rules.",
    "本指南說明基本規則。",
    "adj."
  ],
  [
    "besides",
    "此外；除…之外",
    "Besides English, she speaks Japanese.",
    "除了英文外，她也說日文。",
    "prep.／adv."
  ],
  [
    "boss",
    "老闆；主管",
    "My boss approved the new schedule.",
    "我的主管核准了新行程。",
    "n."
  ],
  [
    "bottom",
    "底部；最下面的",
    "Your name is at the bottom of the page.",
    "你的名字在頁面底部。",
    "n.／adj."
  ],
  [
    "buy",
    "購買",
    "I need to buy a new notebook.",
    "我需要買一本新筆記本。",
    "v."
  ],
  [
    "calendar",
    "日曆；行事曆",
    "Mark the deadline on your calendar.",
    "把截止日記在你的行事曆上。",
    "n."
  ],
  [
    "careful",
    "小心的；仔細的",
    "Be careful when you cross the street.",
    "過馬路時要小心。",
    "adj."
  ],
  [
    "carry",
    "攜帶；搬運",
    "Can you carry this box for me?",
    "你可以幫我搬這個箱子嗎？",
    "v."
  ],
  [
    "chair",
    "椅子；主席",
    "Please take a chair near the window.",
    "請坐在窗邊的椅子上。",
    "n."
  ],
  [
    "cheap",
    "便宜的",
    "This store sells cheap but useful items.",
    "這家商店賣便宜又實用的物品。",
    "adj."
  ],
  [
    "check",
    "檢查；支票",
    "Check the address before you send it.",
    "寄出前請檢查地址。",
    "v.／n."
  ],
  [
    "circle",
    "圓圈；環繞",
    "Draw a circle around the correct answer.",
    "在正確答案周圍畫一個圈。",
    "n.／v."
  ],
  [
    "city",
    "城市",
    "Taipei is a busy city.",
    "台北是一座繁忙的城市。",
    "n."
  ],
  [
    "climb",
    "攀爬；爬升",
    "We climbed the hill before sunset.",
    "我們在日落前爬上山丘。",
    "v.／n."
  ],
  [
    "close",
    "關閉；靠近的",
    "Please close the door quietly.",
    "請輕輕關上門。",
    "v.／adj.／adv."
  ],
  [
    "connect",
    "連接；聯絡",
    "Connect the cable to the computer.",
    "把電纜接到電腦上。",
    "v."
  ],
  [
    "control",
    "控制；控制權",
    "Use this button to control the volume.",
    "使用這個按鈕控制音量。",
    "v.／n."
  ],
  [
    "count",
    "數；計算",
    "Count the chairs before the event.",
    "活動前數一下椅子。",
    "v.／n."
  ],
  [
    "date",
    "日期；約會",
    "What is the date of the exam?",
    "考試日期是什麼時候？",
    "n.／v."
  ],
  [
    "deep",
    "深的",
    "The water is too deep here.",
    "這裡的水太深了。",
    "adj.／adv."
  ],
  [
    "desk",
    "書桌；服務台",
    "Leave the form on my desk.",
    "把表格放在我的桌上。",
    "n."
  ],
  [
    "discover",
    "發現",
    "We discovered a quiet cafe near the station.",
    "我們發現車站附近有一家安靜的咖啡館。",
    "v."
  ],
  [
    "divide",
    "分開；除",
    "Divide the class into two groups.",
    "把班級分成兩組。",
    "v."
  ],
  [
    "driver",
    "駕駛；司機",
    "The driver stopped the bus safely.",
    "司機安全地停下公車。",
    "n."
  ],
  [
    "drop",
    "掉落；下降",
    "Do not drop your phone.",
    "不要把手機摔到地上。",
    "v.／n."
  ],
  [
    "east",
    "東方；東邊的",
    "The sun rises in the east.",
    "太陽從東方升起。",
    "n.／adj.／adv."
  ],
  [
    "electric",
    "電的；電動的",
    "This electric fan uses very little power.",
    "這台電風扇耗電很少。",
    "adj."
  ],
  [
    "else",
    "其他的；另外",
    "Would you like anything else?",
    "你還想要別的嗎？",
    "adv.／adj."
  ],
  [
    "emotion",
    "情緒；情感",
    "Her face showed no emotion.",
    "她的臉上沒有表現出情緒。",
    "n."
  ],
  [
    "enter",
    "進入；輸入",
    "Enter your password to continue.",
    "輸入密碼以繼續。",
    "v."
  ],
  [
    "example",
    "例子；範例",
    "This sentence is a good example.",
    "這個句子是個好例子。",
    "n."
  ],
  [
    "except",
    "除…之外",
    "Everyone came except Tom.",
    "除了湯姆以外，大家都來了。",
    "prep.／conj."
  ],
  [
    "fact",
    "事實",
    "The fact is easy to verify.",
    "這個事實很容易查證。",
    "n."
  ],
  [
    "fast",
    "快速的；快速地",
    "This is the fastest way home.",
    "這是回家最快的路。",
    "adj.／adv."
  ],
  [
    "feature",
    "特色；以…為特色",
    "The app features a simple design.",
    "這個應用程式以簡潔設計為特色。",
    "n.／v."
  ],
  [
    "field",
    "田地；領域",
    "She works in the field of education.",
    "她在教育領域工作。",
    "n."
  ],
  [
    "fire",
    "火；解雇",
    "Never leave a fire unattended.",
    "絕不要讓火源無人看管。",
    "n.／v."
  ],
  [
    "fixed",
    "固定的；修好的",
    "The repair cost is fixed.",
    "修理費用是固定的。",
    "adj."
  ],
  [
    "flower",
    "花",
    "These flowers smell wonderful.",
    "這些花聞起來很香。",
    "n."
  ],
  [
    "friend",
    "朋友",
    "My friend lives near the park.",
    "我的朋友住在公園附近。",
    "n."
  ],
  [
    "front",
    "前面；前方的",
    "Meet me in front of the building.",
    "在大樓前面和我碰面。",
    "n.／adj."
  ],
  [
    "fruit",
    "水果",
    "Fresh fruit is available at the market.",
    "市場有新鮮水果。",
    "n."
  ],
  [
    "full",
    "滿的；完整的",
    "The train is full this morning.",
    "今天早上的火車客滿。",
    "adj."
  ],
  [
    "garden",
    "花園",
    "We ate lunch in the garden.",
    "我們在花園裡吃午餐。",
    "n.／v."
  ],
  [
    "gift",
    "禮物；天賦",
    "I bought a gift for my sister.",
    "我買了禮物給妹妹。",
    "n."
  ],
  [
    "gold",
    "黃金；金色的",
    "The ring is made of gold.",
    "這枚戒指是黃金做的。",
    "n.／adj."
  ],
  [
    "grade",
    "成績；等級",
    "She received a high grade on the test.",
    "她在考試中得到高分。",
    "n.／v."
  ],
  [
    "grammar",
    "文法",
    "Good grammar makes your writing clear.",
    "良好的文法能讓寫作更清楚。",
    "n."
  ],
  [
    "grand",
    "盛大的；宏偉的",
    "They held a grand opening ceremony.",
    "他們舉辦了盛大的開幕典禮。",
    "adj."
  ],
  [
    "hand",
    "手；交給",
    "Please hand me the report.",
    "請把報告交給我。",
    "n.／v."
  ],
  [
    "health",
    "健康",
    "Walking is good for your health.",
    "走路對健康有益。",
    "n."
  ],
  [
    "height",
    "高度；身高",
    "What is the height of this building?",
    "這棟建築的高度是多少？",
    "n."
  ],
  [
    "hill",
    "山丘",
    "We can see the sea from the hill.",
    "我們可以從山丘看見大海。",
    "n."
  ],
  [
    "history",
    "歷史",
    "I enjoy learning about local history.",
    "我喜歡學習當地歷史。",
    "n."
  ],
  [
    "hotel",
    "飯店",
    "The hotel offers free breakfast.",
    "這家飯店提供免費早餐。",
    "n."
  ],
  [
    "hour",
    "小時",
    "The trip takes about one hour.",
    "這趟旅程大約要一小時。",
    "n."
  ],
  [
    "hurry",
    "匆忙；趕快",
    "There is no need to hurry.",
    "不需要趕。",
    "n.／v."
  ],
  [
    "ice",
    "冰",
    "Please put some ice in my drink.",
    "請在我的飲料裡加一些冰。",
    "n.／v."
  ],
  [
    "inside",
    "裡面；在裡面",
    "Please wait inside the building.",
    "請在建築物裡面等候。",
    "prep.／adv.／n."
  ],
  [
    "instead",
    "改為；反而",
    "Let's walk instead of taking a taxi.",
    "我們走路吧，不要搭計程車。",
    "adv."
  ],
  [
    "instrument",
    "儀器；樂器",
    "The doctor uses a special instrument.",
    "醫生使用一種特殊儀器。",
    "n."
  ],
  [
    "jacket",
    "夾克；外套",
    "Bring a jacket because it may be cold.",
    "帶件外套，因為天氣可能會冷。",
    "n."
  ],
  [
    "junior",
    "年少的；初階者",
    "He is a junior member of the team.",
    "他是團隊中資歷較淺的成員。",
    "adj.／n."
  ],
  [
    "keep",
    "保持；保留",
    "Keep this receipt for your records.",
    "請保留這張收據作為紀錄。",
    "v."
  ],
  [
    "key",
    "鑰匙；關鍵的",
    "The key is in the top drawer.",
    "鑰匙在最上面的抽屜裡。",
    "n.／adj."
  ],
  [
    "kilometer",
    "公里",
    "The station is one kilometer away.",
    "車站距離一公里。",
    "n."
  ],
  [
    "kind",
    "種類；親切的",
    "She is kind to every visitor.",
    "她對每位訪客都很親切。",
    "n.／adj."
  ],
  [
    "kitchen",
    "廚房",
    "The kitchen is clean and bright.",
    "廚房乾淨又明亮。",
    "n."
  ],
  [
    "lady",
    "女士",
    "The lady at the desk can help you.",
    "櫃檯的女士可以幫你。",
    "n."
  ],
  [
    "land",
    "土地；降落",
    "The plane will land in ten minutes.",
    "飛機將在十分鐘後降落。",
    "n.／v."
  ],
  [
    "late",
    "遲的；晚地",
    "Sorry, I am late for the meeting.",
    "抱歉，我開會遲到了。",
    "adj.／adv."
  ],
  [
    "layer",
    "層；層次",
    "Wear another layer when it is cold.",
    "天冷時多穿一層。",
    "n."
  ],
  [
    "least",
    "最少；最小",
    "At least ten people will attend.",
    "至少有十人會出席。",
    "adj.／adv.／pron."
  ],
  [
    "leave",
    "離開；留下",
    "Please leave the room quietly.",
    "請安靜地離開房間。",
    "v.／n."
  ],
  [
    "lecture",
    "演講；講課",
    "The professor gave a short lecture.",
    "教授做了一場短講。",
    "n.／v."
  ],
  [
    "lesson",
    "課程；教訓",
    "Today's lesson is about travel.",
    "今天的課程是關於旅行。",
    "n."
  ],
  [
    "letter",
    "信；字母",
    "I received a letter from the bank.",
    "我收到一封銀行寄來的信。",
    "n."
  ],
  [
    "librarian",
    "圖書館員",
    "Ask the librarian where the book is.",
    "詢問圖書館員這本書在哪裡。",
    "n."
  ],
  [
    "line",
    "線；隊伍；路線",
    "Please stand in a line.",
    "請排成一列。",
    "n.／v."
  ],
  [
    "literature",
    "文學",
    "She studies English literature at college.",
    "她在大學讀英國文學。",
    "n."
  ],
  [
    "little",
    "小的；少量",
    "There is little time left.",
    "剩下的時間不多。",
    "adj.／pron.／adv."
  ],
  [
    "live",
    "居住；直播的；活的",
    "They live near the airport.",
    "他們住在機場附近。",
    "v.／adj.／adv."
  ],
  [
    "living",
    "生活；活著的",
    "The cost of living is rising.",
    "生活成本正在上升。",
    "n.／adj."
  ],
  [
    "load",
    "裝載；負載",
    "Please load the boxes onto the truck.",
    "請把箱子裝上卡車。",
    "v.／n."
  ],
  [
    "wine",
    "葡萄酒",
    "This restaurant serves local wine.",
    "這家餐廳供應當地葡萄酒。",
    "n."
  ],
  [
    "lonely",
    "孤單的",
    "He felt lonely in the new city.",
    "他在新城市裡感到孤單。",
    "adj."
  ],
  [
    "loud",
    "大聲的；大聲地",
    "The music is too loud.",
    "音樂太大聲了。",
    "adj.／adv."
  ],
  [
    "machine",
    "機器",
    "This machine makes fresh coffee.",
    "這台機器會煮新鮮咖啡。",
    "n."
  ],
  [
    "mail",
    "郵件；寄送",
    "The mail arrived this morning.",
    "郵件今天早上送到了。",
    "n.／v."
  ],
  [
    "major",
    "主要的；主修",
    "Traffic is a major problem here.",
    "交通是這裡的主要問題。",
    "adj.／n.／v."
  ],
  [
    "market",
    "市場；推銷",
    "The market is busy on weekends.",
    "市場在週末很熱鬧。",
    "n.／v."
  ],
  [
    "marriage",
    "婚姻",
    "They celebrated ten years of marriage.",
    "他們慶祝結婚十週年。",
    "n."
  ],
  [
    "mean",
    "意思是；平均值；刻薄的",
    "What does this word mean?",
    "這個單字是什麼意思？",
    "v.／adj.／n."
  ],
  [
    "mechanic",
    "機械師；修理工",
    "The mechanic checked the engine.",
    "修理工檢查了引擎。",
    "n."
  ],
  [
    "meeting",
    "會議",
    "The meeting starts after lunch.",
    "會議午餐後開始。",
    "n."
  ],
  [
    "memory",
    "記憶；回憶",
    "This photo brings back a happy memory.",
    "這張照片喚起一段快樂回憶。",
    "n."
  ],
  [
    "menu",
    "菜單",
    "Could I see the menu, please?",
    "請給我看菜單，好嗎？",
    "n."
  ],
  [
    "wing",
    "翅膀；翼部",
    "Our seats are near the left wing.",
    "我們的座位靠近左翼。",
    "n."
  ],
  [
    "might",
    "可能；力量",
    "It might rain this afternoon.",
    "今天下午可能會下雨。",
    "v.／n."
  ],
  [
    "mile",
    "英里",
    "The hotel is two miles from here.",
    "飯店離這裡兩英里。",
    "n."
  ],
  [
    "milk",
    "牛奶",
    "Would you like milk in your tea?",
    "你的茶要加牛奶嗎？",
    "n.／v."
  ],
  [
    "mind",
    "心；介意",
    "Would you mind opening the window?",
    "你介意打開窗戶嗎？",
    "n.／v."
  ],
  [
    "winter",
    "冬天",
    "The days are shorter in winter.",
    "冬天的白天比較短。",
    "n."
  ],
  [
    "miss",
    "錯過；想念",
    "Do not miss the last bus.",
    "不要錯過末班公車。",
    "v."
  ],
  [
    "wire",
    "電線；用電線連接",
    "Do not touch the damaged wire.",
    "不要碰損壞的電線。",
    "n.／v."
  ],
  [
    "moment",
    "片刻；瞬間",
    "Please wait a moment.",
    "請稍等一下。",
    "n."
  ],
  [
    "mood",
    "心情；情緒",
    "Music can change your mood.",
    "音樂可以改變你的心情。",
    "n."
  ],
  [
    "absence",
    "缺席；不存在",
    "We discussed the absence during class.",
    "我們在課堂上討論了這個「缺席；不存在」。",
    "n."
  ],
  [
    "acquaintance",
    "熟人；相識",
    "We discussed the acquaintance during class.",
    "我們在課堂上討論了這個「熟人；相識」。",
    "n."
  ],
  [
    "aircraft",
    "飛機",
    "We discussed the aircraft during class.",
    "我們在課堂上討論了這個「飛機」。",
    "n."
  ],
  [
    "alcohol",
    "酒精",
    "We discussed the alcohol during class.",
    "我們在課堂上討論了這個「酒精」。",
    "n."
  ],
  [
    "angle",
    "角度；角",
    "We discussed the angle during class.",
    "我們在課堂上討論了這個「角度；角」。",
    "n."
  ],
  [
    "ant",
    "螞蟻",
    "We discussed the ant during class.",
    "我們在課堂上討論了這個「螞蟻」。",
    "n."
  ],
  [
    "apology",
    "道歉",
    "We discussed the apology during class.",
    "我們在課堂上討論了這個「道歉」。",
    "n."
  ],
  [
    "apple",
    "蘋果",
    "We discussed the apple during class.",
    "我們在課堂上討論了這個「蘋果」。",
    "n."
  ],
  [
    "April",
    "四月",
    "The event will take place in April.",
    "活動將在四月舉行。",
    "n."
  ],
  [
    "army",
    "軍隊",
    "We discussed the army during class.",
    "我們在課堂上討論了這個「軍隊」。",
    "n."
  ],
  [
    "aunt",
    "阿姨；姑姑；伯母",
    "We discussed the aunt during class.",
    "我們在課堂上討論了這個「阿姨；姑姑；伯母」。",
    "n."
  ],
  [
    "balloon",
    "氣球",
    "We discussed the balloon during class.",
    "我們在課堂上討論了這個「氣球」。",
    "n."
  ],
  [
    "bandage",
    "繃帶",
    "We discussed the bandage during class.",
    "我們在課堂上討論了這個「繃帶」。",
    "n."
  ],
  [
    "barbecue",
    "烤肉；燒烤",
    "We discussed the barbecue during class.",
    "我們在課堂上討論了這個「烤肉；燒烤」。",
    "n."
  ],
  [
    "basket",
    "籃子",
    "We discussed the basket during class.",
    "我們在課堂上討論了這個「籃子」。",
    "n."
  ],
  [
    "beach",
    "海灘",
    "We discussed the beach during class.",
    "我們在課堂上討論了這個「海灘」。",
    "n."
  ],
  [
    "beauty",
    "美麗；美人",
    "We discussed the beauty during class.",
    "我們在課堂上討論了這個「美麗；美人」。",
    "n."
  ],
  [
    "bedroom",
    "臥室",
    "We discussed the bedroom during class.",
    "我們在課堂上討論了這個「臥室」。",
    "n."
  ],
  [
    "beef",
    "牛肉",
    "We discussed the beef during class.",
    "我們在課堂上討論了這個「牛肉」。",
    "n."
  ],
  [
    "beer",
    "啤酒",
    "We discussed the beer during class.",
    "我們在課堂上討論了這個「啤酒」。",
    "n."
  ],
  [
    "binoculars",
    "雙筒望遠鏡",
    "We discussed the binoculars during class.",
    "我們在課堂上討論了這個「雙筒望遠鏡」。",
    "n."
  ],
  [
    "blood",
    "血液",
    "We discussed the blood during class.",
    "我們在課堂上討論了這個「血液」。",
    "n."
  ],
  [
    "boat",
    "船",
    "We discussed the boat during class.",
    "我們在課堂上討論了這個「船」。",
    "n."
  ],
  [
    "body",
    "身體；本體",
    "We discussed the body during class.",
    "我們在課堂上討論了這個「身體；本體」。",
    "n."
  ],
  [
    "boiler",
    "鍋爐；熱水器",
    "We discussed the boiler during class.",
    "我們在課堂上討論了這個「鍋爐；熱水器」。",
    "n."
  ],
  [
    "bookcase",
    "書櫃",
    "We discussed the bookcase during class.",
    "我們在課堂上討論了這個「書櫃」。",
    "n."
  ],
  [
    "bookstore",
    "書店",
    "We discussed the bookstore during class.",
    "我們在課堂上討論了這個「書店」。",
    "n."
  ],
  [
    "bravery",
    "勇氣",
    "We discussed the bravery during class.",
    "我們在課堂上討論了這個「勇氣」。",
    "n."
  ],
  [
    "burger",
    "漢堡",
    "We discussed the burger during class.",
    "我們在課堂上討論了這個「漢堡」。",
    "n."
  ],
  [
    "cable",
    "電纜；線材",
    "We discussed the cable during class.",
    "我們在課堂上討論了這個「電纜；線材」。",
    "n."
  ],
  [
    "cafe",
    "咖啡館",
    "We discussed the cafe during class.",
    "我們在課堂上討論了這個「咖啡館」。",
    "n."
  ],
  [
    "cake",
    "蛋糕",
    "We discussed the cake during class.",
    "我們在課堂上討論了這個「蛋糕」。",
    "n."
  ],
  [
    "calculator",
    "計算機",
    "We discussed the calculator during class.",
    "我們在課堂上討論了這個「計算機」。",
    "n."
  ],
  [
    "camel",
    "駱駝",
    "We discussed the camel during class.",
    "我們在課堂上討論了這個「駱駝」。",
    "n."
  ],
  [
    "candy",
    "糖果",
    "We discussed the candy during class.",
    "我們在課堂上討論了這個「糖果」。",
    "n."
  ],
  [
    "captain",
    "船長；隊長",
    "We discussed the captain during class.",
    "我們在課堂上討論了這個「船長；隊長」。",
    "n."
  ],
  [
    "cartoon",
    "卡通",
    "We discussed the cartoon during class.",
    "我們在課堂上討論了這個「卡通」。",
    "n."
  ],
  [
    "castle",
    "城堡",
    "We discussed the castle during class.",
    "我們在課堂上討論了這個「城堡」。",
    "n."
  ],
  [
    "cellphone",
    "手機",
    "We discussed the cellphone during class.",
    "我們在課堂上討論了這個「手機」。",
    "n."
  ],
  [
    "center",
    "中心",
    "We discussed the center during class.",
    "我們在課堂上討論了這個「中心」。",
    "n."
  ],
  [
    "champion",
    "冠軍",
    "We discussed the champion during class.",
    "我們在課堂上討論了這個「冠軍」。",
    "n."
  ],
  [
    "cheese",
    "起司",
    "We discussed the cheese during class.",
    "我們在課堂上討論了這個「起司」。",
    "n."
  ],
  [
    "chicken",
    "雞肉；雞",
    "We discussed the chicken during class.",
    "我們在課堂上討論了這個「雞肉；雞」。",
    "n."
  ],
  [
    "chocolate",
    "巧克力",
    "We discussed the chocolate during class.",
    "我們在課堂上討論了這個「巧克力」。",
    "n."
  ],
  [
    "church",
    "教堂",
    "We discussed the church during class.",
    "我們在課堂上討論了這個「教堂」。",
    "n."
  ],
  [
    "cinema",
    "電影院",
    "We discussed the cinema during class.",
    "我們在課堂上討論了這個「電影院」。",
    "n."
  ],
  [
    "classroom",
    "教室",
    "We discussed the classroom during class.",
    "我們在課堂上討論了這個「教室」。",
    "n."
  ],
  [
    "clock",
    "時鐘",
    "We discussed the clock during class.",
    "我們在課堂上討論了這個「時鐘」。",
    "n."
  ],
  [
    "coin",
    "硬幣",
    "We discussed the coin during class.",
    "我們在課堂上討論了這個「硬幣」。",
    "n."
  ],
  [
    "college",
    "大學；學院",
    "We discussed the college during class.",
    "我們在課堂上討論了這個「大學；學院」。",
    "n."
  ],
  [
    "column",
    "欄；專欄",
    "We discussed the column during class.",
    "我們在課堂上討論了這個「欄；專欄」。",
    "n."
  ],
  [
    "concert",
    "音樂會",
    "We discussed the concert during class.",
    "我們在課堂上討論了這個「音樂會」。",
    "n."
  ],
  [
    "conclusion",
    "結論",
    "We discussed the conclusion during class.",
    "我們在課堂上討論了這個「結論」。",
    "n."
  ],
  [
    "cooking",
    "烹飪",
    "We discussed the cooking during class.",
    "我們在課堂上討論了這個「烹飪」。",
    "n."
  ],
  [
    "countryside",
    "鄉村",
    "We discussed the countryside during class.",
    "我們在課堂上討論了這個「鄉村」。",
    "n."
  ],
  [
    "craft",
    "工藝；手工藝",
    "We discussed the craft during class.",
    "我們在課堂上討論了這個「工藝；手工藝」。",
    "n."
  ],
  [
    "curtain",
    "窗簾",
    "We discussed the curtain during class.",
    "我們在課堂上討論了這個「窗簾」。",
    "n."
  ],
  [
    "cycling",
    "騎自行車",
    "We discussed the cycling during class.",
    "我們在課堂上討論了這個「騎自行車」。",
    "n."
  ],
  [
    "daughter",
    "女兒",
    "We discussed the daughter during class.",
    "我們在課堂上討論了這個「女兒」。",
    "n."
  ],
  [
    "daytime",
    "白天",
    "We discussed the daytime during class.",
    "我們在課堂上討論了這個「白天」。",
    "n."
  ],
  [
    "desert",
    "沙漠",
    "We discussed the desert during class.",
    "我們在課堂上討論了這個「沙漠」。",
    "n."
  ],
  [
    "dictionary",
    "字典",
    "We discussed the dictionary during class.",
    "我們在課堂上討論了這個「字典」。",
    "n."
  ],
  [
    "dish",
    "菜餚；盤子",
    "We discussed the dish during class.",
    "我們在課堂上討論了這個「菜餚；盤子」。",
    "n."
  ],
  [
    "dollar",
    "美元；元",
    "We discussed the dollar during class.",
    "我們在課堂上討論了這個「美元；元」。",
    "n."
  ],
  [
    "doorway",
    "門口",
    "We discussed the doorway during class.",
    "我們在課堂上討論了這個「門口」。",
    "n."
  ],
  [
    "drawing",
    "圖畫；繪圖",
    "We discussed the drawing during class.",
    "我們在課堂上討論了這個「圖畫；繪圖」。",
    "n."
  ],
  [
    "dream",
    "夢想；夢",
    "We discussed the dream during class.",
    "我們在課堂上討論了這個「夢想；夢」。",
    "n."
  ],
  [
    "ear",
    "耳朵",
    "We discussed the ear during class.",
    "我們在課堂上討論了這個「耳朵」。",
    "n."
  ],
  [
    "editor",
    "編輯",
    "The editor corrected several errors before the article was published.",
    "文章出版前，編輯更正了幾個錯誤。",
    "n."
  ],
  [
    "egg",
    "蛋",
    "We discussed the egg during class.",
    "我們在課堂上討論了這個「蛋」。",
    "n."
  ],
  [
    "evening",
    "晚上",
    "We discussed the evening during class.",
    "我們在課堂上討論了這個「晚上」。",
    "n."
  ],
  [
    "exam",
    "考試",
    "We discussed the exam during class.",
    "我們在課堂上討論了這個「考試」。",
    "n."
  ],
  [
    "factory",
    "工廠",
    "There are many workers in this factory.",
    "這間工廠裡有很多工人。",
    "n."
  ],
  [
    "family",
    "家庭",
    "We discussed the family during class.",
    "我們在課堂上討論了這個「家庭」。",
    "n."
  ],
  [
    "father",
    "父親",
    "We discussed the father during class.",
    "我們在課堂上討論了這個「父親」。",
    "n."
  ],
  [
    "finger",
    "手指",
    "We discussed the finger during class.",
    "我們在課堂上討論了這個「手指」。",
    "n."
  ],
  [
    "flight",
    "班機；飛行",
    "We discussed the flight during class.",
    "我們在課堂上討論了這個「班機；飛行」。",
    "n."
  ],
  [
    "forest",
    "森林",
    "We discussed the forest during class.",
    "我們在課堂上討論了這個「森林」。",
    "n."
  ],
  [
    "fork",
    "叉子",
    "We discussed the fork during class.",
    "我們在課堂上討論了這個「叉子」。",
    "n."
  ],
  [
    "fortune",
    "財富；運氣",
    "We discussed the fortune during class.",
    "我們在課堂上討論了這個「財富；運氣」。",
    "n."
  ],
  [
    "fridge",
    "冰箱",
    "We discussed the fridge during class.",
    "我們在課堂上討論了這個「冰箱」。",
    "n."
  ],
  [
    "gallery",
    "藝廊",
    "We discussed the gallery during class.",
    "我們在課堂上討論了這個「藝廊」。",
    "n."
  ],
  [
    "game",
    "遊戲；比賽",
    "We discussed the game during class.",
    "我們在課堂上討論了這個「遊戲；比賽」。",
    "n."
  ],
  [
    "gentleman",
    "紳士",
    "We discussed the gentleman during class.",
    "我們在課堂上討論了這個「紳士」。",
    "n."
  ],
  [
    "geography",
    "地理",
    "We discussed the geography during class.",
    "我們在課堂上討論了這個「地理」。",
    "n."
  ],
  [
    "glass",
    "玻璃；玻璃杯",
    "We discussed the glass during class.",
    "我們在課堂上討論了這個「玻璃；玻璃杯」。",
    "n."
  ],
  [
    "glove",
    "手套",
    "We discussed the glove during class.",
    "我們在課堂上討論了這個「手套」。",
    "n."
  ],
  [
    "grass",
    "草",
    "We discussed the grass during class.",
    "我們在課堂上討論了這個「草」。",
    "n."
  ],
  [
    "haircut",
    "髮型；理髮",
    "We discussed the haircut during class.",
    "我們在課堂上討論了這個「髮型；理髮」。",
    "n."
  ],
  [
    "hammer",
    "鐵鎚",
    "We discussed the hammer during class.",
    "我們在課堂上討論了這個「鐵鎚」。",
    "n."
  ],
  [
    "handbag",
    "手提包",
    "We discussed the handbag during class.",
    "我們在課堂上討論了這個「手提包」。",
    "n."
  ],
  [
    "hearing",
    "聽力；聽證",
    "We discussed the hearing during class.",
    "我們在課堂上討論了這個「聽力；聽證」。",
    "n."
  ],
  [
    "heaven",
    "天堂；天空",
    "We discussed the heaven during class.",
    "我們在課堂上討論了這個「天堂；天空」。",
    "n."
  ],
  [
    "homework",
    "作業",
    "We discussed the homework during class.",
    "我們在課堂上討論了這個「作業」。",
    "n."
  ],
  [
    "house",
    "房子",
    "We discussed the house during class.",
    "我們在課堂上討論了這個「房子」。",
    "n."
  ],
  [
    "hunger",
    "飢餓",
    "We discussed the hunger during class.",
    "我們在課堂上討論了這個「飢餓」。",
    "n."
  ],
  [
    "husband",
    "丈夫",
    "We discussed the husband during class.",
    "我們在課堂上討論了這個「丈夫」。",
    "n."
  ],
  [
    "iceberg",
    "冰山",
    "We discussed the iceberg during class.",
    "我們在課堂上討論了這個「冰山」。",
    "n."
  ],
  [
    "illness",
    "疾病",
    "We discussed the illness during class.",
    "我們在課堂上討論了這個「疾病」。",
    "n."
  ],
  [
    "index",
    "索引；指數",
    "We discussed the index during class.",
    "我們在課堂上討論了這個「索引；指數」。",
    "n."
  ],
  [
    "indoor",
    "室內的",
    "The event includes an indoor activity.",
    "活動包含一項室內活動。",
    "adj."
  ],
  [
    "jury",
    "陪審團",
    "We discussed the jury during class.",
    "我們在課堂上討論了這個「陪審團」。",
    "n."
  ],
  [
    "kid",
    "小孩",
    "We discussed the kid during class.",
    "我們在課堂上討論了這個「小孩」。",
    "n."
  ],
  [
    "king",
    "國王",
    "We discussed the king during class.",
    "我們在課堂上討論了這個「國王」。",
    "n."
  ],
  [
    "laughter",
    "笑聲",
    "We discussed the laughter during class.",
    "我們在課堂上討論了這個「笑聲」。",
    "n."
  ],
  [
    "leaf",
    "葉子",
    "We discussed the leaf during class.",
    "我們在課堂上討論了這個「葉子」。",
    "n."
  ],
  [
    "library",
    "圖書館",
    "We discussed the library during class.",
    "我們在課堂上討論了這個「圖書館」。",
    "n."
  ],
  [
    "match",
    "比賽；火柴",
    "We discussed the match during class.",
    "我們在課堂上討論了這個「比賽；火柴」。",
    "n."
  ],
  [
    "meaning",
    "意思；意義",
    "We discussed the meaning during class.",
    "我們在課堂上討論了這個「意思；意義」。",
    "n."
  ],
  [
    "midnight",
    "午夜",
    "We discussed the midnight during class.",
    "我們在課堂上討論了這個「午夜」。",
    "n."
  ],
  [
    "money",
    "金錢",
    "We discussed the money during class.",
    "我們在課堂上討論了這個「金錢」。",
    "n."
  ],
  [
    "month",
    "月",
    "We discussed the month during class.",
    "我們在課堂上討論了這個「月」。",
    "n."
  ],
  [
    "moon",
    "月亮",
    "We discussed the moon during class.",
    "我們在課堂上討論了這個「月亮」。",
    "n."
  ],
  [
    "motor",
    "馬達；引擎",
    "We discussed the motor during class.",
    "我們在課堂上討論了這個「馬達；引擎」。",
    "n."
  ],
  [
    "painting",
    "繪畫；油漆",
    "We discussed the painting during class.",
    "我們在課堂上討論了這個「繪畫；油漆」。",
    "n."
  ],
  [
    "pancake",
    "鬆餅",
    "We discussed the pancake during class.",
    "我們在課堂上討論了這個「鬆餅」。",
    "n."
  ],
  [
    "paper",
    "紙；論文",
    "We discussed the paper during class.",
    "我們在課堂上討論了這個「紙；論文」。",
    "n."
  ],
  [
    "park",
    "公園",
    "We discussed the park during class.",
    "我們在課堂上討論了這個「公園」。",
    "n."
  ],
  [
    "party",
    "聚會；政黨",
    "We discussed the party during class.",
    "我們在課堂上討論了這個「聚會；政黨」。",
    "n."
  ],
  [
    "path",
    "小徑；路徑",
    "We discussed the path during class.",
    "我們在課堂上討論了這個「小徑；路徑」。",
    "n."
  ],
  [
    "peace",
    "和平",
    "We discussed the peace during class.",
    "我們在課堂上討論了這個「和平」。",
    "n."
  ],
  [
    "piano",
    "鋼琴",
    "We discussed the piano during class.",
    "我們在課堂上討論了這個「鋼琴」。",
    "n."
  ],
  [
    "plate",
    "盤子",
    "We discussed the plate during class.",
    "我們在課堂上討論了這個「盤子」。",
    "n."
  ],
  [
    "police",
    "警察",
    "We discussed the police during class.",
    "我們在課堂上討論了這個「警察」。",
    "n."
  ],
  [
    "port",
    "港口",
    "We discussed the port during class.",
    "我們在課堂上討論了這個「港口」。",
    "n."
  ],
  [
    "pound",
    "磅；英鎊",
    "We discussed the pound during class.",
    "我們在課堂上討論了這個「磅；英鎊」。",
    "n."
  ],
  [
    "pride",
    "驕傲；自豪",
    "We discussed the pride during class.",
    "我們在課堂上討論了這個「驕傲；自豪」。",
    "n."
  ],
  [
    "professor",
    "教授",
    "We discussed the professor during class.",
    "我們在課堂上討論了這個「教授」。",
    "n."
  ],
  [
    "rain",
    "雨",
    "We discussed the rain during class.",
    "我們在課堂上討論了這個「雨」。",
    "n."
  ],
  [
    "refrigerator",
    "冰箱",
    "We discussed the refrigerator during class.",
    "我們在課堂上討論了這個「冰箱」。",
    "n."
  ],
  [
    "rice",
    "米飯",
    "We discussed the rice during class.",
    "我們在課堂上討論了這個「米飯」。",
    "n."
  ],
  [
    "sand",
    "沙",
    "We discussed the sand during class.",
    "我們在課堂上討論了這個「沙」。",
    "n."
  ],
  [
    "sea",
    "海",
    "We discussed the sea during class.",
    "我們在課堂上討論了這個「海」。",
    "n."
  ],
  [
    "shop",
    "商店",
    "We discussed the shop during class.",
    "我們在課堂上討論了這個「商店」。",
    "n."
  ],
  [
    "sister",
    "姊妹",
    "We discussed the sister during class.",
    "我們在課堂上討論了這個「姊妹」。",
    "n."
  ],
  [
    "sky",
    "天空",
    "We discussed the sky during class.",
    "我們在課堂上討論了這個「天空」。",
    "n."
  ],
  [
    "skirt",
    "裙子",
    "We discussed the skirt during class.",
    "我們在課堂上討論了這個「裙子」。",
    "n."
  ],
  [
    "soap",
    "肥皂",
    "We discussed the soap during class.",
    "我們在課堂上討論了這個「肥皂」。",
    "n."
  ],
  [
    "spring",
    "春天；彈簧；泉水；跳躍／湧現",
    "Spring is my favorite season of the year.",
    "春天是我一年中最喜歡的季節。",
    "n.／v."
  ],
  [
    "sun",
    "太陽",
    "We discussed the sun during class.",
    "我們在課堂上討論了這個「太陽」。",
    "n."
  ],
  [
    "supermarket",
    "超市",
    "We discussed the supermarket during class.",
    "我們在課堂上討論了這個「超市」。",
    "n."
  ],
  [
    "university",
    "大學",
    "We discussed the university during class.",
    "我們在課堂上討論了這個「大學」。",
    "n."
  ],
  [
    "weather",
    "天氣",
    "We discussed the weather during class.",
    "我們在課堂上討論了這個「天氣」。",
    "n."
  ],
  [
    "window",
    "窗戶",
    "We discussed the window during class.",
    "我們在課堂上討論了這個「窗戶」。",
    "n."
  ],
  [
    "wood",
    "木材",
    "We discussed the wood during class.",
    "我們在課堂上討論了這個「木材」。",
    "n."
  ],
  [
    "word",
    "單字；詞",
    "We discussed the word during class.",
    "我們在課堂上討論了這個「單字；詞」。",
    "n."
  ],
  [
    "worker",
    "工作者",
    "We discussed the worker during class.",
    "我們在課堂上討論了這個「工作者」。",
    "n."
  ],
  [
    "wound",
    "傷口",
    "We discussed the wound during class.",
    "我們在課堂上討論了這個「傷口」。",
    "n."
  ],
  [
    "year",
    "年",
    "We discussed the year during class.",
    "我們在課堂上討論了這個「年」。",
    "n."
  ],
  [
    "yellow",
    "黃色",
    "Yellow is easy to see on the sign.",
    "黃色在標誌上很容易看見。",
    "n."
  ],
  [
    "yesterday",
    "昨天",
    "Yesterday, we reviewed the report.",
    "昨天我們檢閱了報告。",
    "n.／adv."
  ],
  [
    "youth",
    "青少年時期；青年",
    "We discussed the youth during class.",
    "我們在課堂上討論了這個「青少年時期；青年」。",
    "n."
  ],
  [
    "antibiotic",
    "抗生素",
    "We discussed the antibiotic during class.",
    "我們在課堂上討論了這個「抗生素」。",
    "n."
  ],
  [
    "architecture",
    "建築；建築學",
    "We discussed the architecture during class.",
    "我們在課堂上討論了這個「建築；建築學」。",
    "n."
  ],
  [
    "authentication",
    "身分驗證",
    "We discussed the authentication during class.",
    "我們在課堂上討論了這個「身分驗證」。",
    "n."
  ],
  [
    "barcode",
    "條碼",
    "We discussed the barcode during class.",
    "我們在課堂上討論了這個「條碼」。",
    "n."
  ],
  [
    "biometric",
    "生物辨識的",
    "The system checks biometric information.",
    "系統會檢查生物辨識資訊。",
    "adj."
  ],
  [
    "Bluetooth",
    "藍牙",
    "We discussed the Bluetooth during class.",
    "我們在課堂上討論了這個「藍牙」。",
    "n."
  ],
  [
    "broadband",
    "寬頻",
    "We discussed the broadband during class.",
    "我們在課堂上討論了這個「寬頻」。",
    "n."
  ],
  [
    "chief executive",
    "執行長",
    "We discussed the chief executive during class.",
    "我們在課堂上討論了這個「執行長」。",
    "n."
  ],
  [
    "client base",
    "客戶群",
    "We discussed the client base during class.",
    "我們在課堂上討論了這個「客戶群」。",
    "n."
  ],
  [
    "command",
    "指令；命令",
    "We discussed the command during class.",
    "我們在課堂上討論了這個「指令；命令」。",
    "n."
  ],
  [
    "compression",
    "壓縮",
    "We discussed the compression during class.",
    "我們在課堂上討論了這個「壓縮」。",
    "n."
  ],
  [
    "computer virus",
    "電腦病毒",
    "We discussed the computer virus during class.",
    "我們在課堂上討論了這個「電腦病毒」。",
    "n."
  ],
  [
    "content creator",
    "內容創作者",
    "We discussed the content creator during class.",
    "我們在課堂上討論了這個「內容創作者」。",
    "n."
  ],
  [
    "cryptocurrency",
    "加密貨幣",
    "We discussed the cryptocurrency during class.",
    "我們在課堂上討論了這個「加密貨幣」。",
    "n."
  ],
  [
    "cyberattack",
    "網路攻擊",
    "We discussed the cyberattack during class.",
    "我們在課堂上討論了這個「網路攻擊」。",
    "n."
  ],
  [
    "dashboard",
    "儀表板",
    "We discussed the dashboard during class.",
    "我們在課堂上討論了這個「儀表板」。",
    "n."
  ],
  [
    "debugging",
    "除錯",
    "We discussed the debugging during class.",
    "我們在課堂上討論了這個「除錯」。",
    "n."
  ],
  [
    "decorator",
    "室內設計師；裝飾者",
    "We discussed the decorator during class.",
    "我們在課堂上討論了這個「室內設計師；裝飾者」。",
    "n."
  ],
  [
    "delivery service",
    "外送服務；配送服務",
    "We discussed the delivery service during class.",
    "我們在課堂上討論了這個「外送服務；配送服務」。",
    "n."
  ],
  [
    "device driver",
    "裝置驅動程式",
    "We discussed the device driver during class.",
    "我們在課堂上討論了這個「裝置驅動程式」。",
    "n."
  ],
  [
    "digital camera",
    "數位相機",
    "We discussed the digital camera during class.",
    "我們在課堂上討論了這個「數位相機」。",
    "n."
  ],
  [
    "download link",
    "下載連結",
    "We discussed the download link during class.",
    "我們在課堂上討論了這個「下載連結」。",
    "n."
  ],
  [
    "emoji",
    "表情符號",
    "We discussed the emoji during class.",
    "我們在課堂上討論了這個「表情符號」。",
    "n."
  ],
  [
    "Ethernet",
    "乙太網路",
    "We discussed the Ethernet during class.",
    "我們在課堂上討論了這個「乙太網路」。",
    "n."
  ],
  [
    "file format",
    "檔案格式",
    "We discussed the file format during class.",
    "我們在課堂上討論了這個「檔案格式」。",
    "n."
  ],
  [
    "fire alarm",
    "火災警報器",
    "We discussed the fire alarm during class.",
    "我們在課堂上討論了這個「火災警報器」。",
    "n."
  ],
  [
    "firefighter",
    "消防員",
    "We discussed the firefighter during class.",
    "我們在課堂上討論了這個「消防員」。",
    "n."
  ],
  [
    "GPS",
    "全球定位系統",
    "We discussed the GPS during class.",
    "我們在課堂上討論了這個「全球定位系統」。",
    "n."
  ],
  [
    "hardware store",
    "五金行",
    "We discussed the hardware store during class.",
    "我們在課堂上討論了這個「五金行」。",
    "n."
  ],
  [
    "interface",
    "介面",
    "We discussed the interface during class.",
    "我們在課堂上討論了這個「介面」。",
    "n."
  ],
  [
    "internet access",
    "網路存取",
    "We discussed the internet access during class.",
    "我們在課堂上討論了這個「網路存取」。",
    "n."
  ],
  [
    "keyboard shortcut",
    "鍵盤快速鍵",
    "We discussed the keyboard shortcut during class.",
    "我們在課堂上討論了這個「鍵盤快速鍵」。",
    "n."
  ],
  [
    "laptop computer",
    "筆記型電腦",
    "We discussed the laptop computer during class.",
    "我們在課堂上討論了這個「筆記型電腦」。",
    "n."
  ],
  [
    "metadata",
    "中繼資料",
    "We discussed the metadata during class.",
    "我們在課堂上討論了這個「中繼資料」。",
    "n."
  ],
  [
    "navigation",
    "導航",
    "We discussed the navigation during class.",
    "我們在課堂上討論了這個「導航」。",
    "n."
  ],
  [
    "operating system",
    "作業系統",
    "We discussed the operating system during class.",
    "我們在課堂上討論了這個「作業系統」。",
    "n."
  ],
  [
    "outage",
    "中斷；停電",
    "We discussed the outage during class.",
    "我們在課堂上討論了這個「中斷；停電」。",
    "n."
  ],
  [
    "peripheral",
    "周邊設備",
    "We discussed the peripheral during class.",
    "我們在課堂上討論了這個「周邊設備」。",
    "n."
  ],
  [
    "pixel",
    "像素",
    "We discussed the pixel during class.",
    "我們在課堂上討論了這個「像素」。",
    "n."
  ],
  [
    "protocol",
    "協定；禮儀",
    "We discussed the protocol during class.",
    "我們在課堂上討論了這個「協定；禮儀」。",
    "n."
  ],
  [
    "QR code",
    "QR 碼",
    "We discussed the QR code during class.",
    "我們在課堂上討論了這個「QR 碼」。",
    "n."
  ],
  [
    "search engine",
    "搜尋引擎",
    "We discussed the search engine during class.",
    "我們在課堂上討論了這個「搜尋引擎」。",
    "n."
  ],
  [
    "setting",
    "設定；環境",
    "We discussed the setting during class.",
    "我們在課堂上討論了這個「設定；環境」。",
    "n."
  ],
  [
    "smartwatch",
    "智慧手錶",
    "We discussed the smartwatch during class.",
    "我們在課堂上討論了這個「智慧手錶」。",
    "n."
  ],
  [
    "software update",
    "軟體更新",
    "We discussed the software update during class.",
    "我們在課堂上討論了這個「軟體更新」。",
    "n."
  ],
  [
    "spreadsheet",
    "試算表",
    "We discussed the spreadsheet during class.",
    "我們在課堂上討論了這個「試算表」。",
    "n."
  ],
  [
    "streaming",
    "串流",
    "We discussed the streaming during class.",
    "我們在課堂上討論了這個「串流」。",
    "n."
  ],
  [
    "tablet computer",
    "平板電腦",
    "We discussed the tablet computer during class.",
    "我們在課堂上討論了這個「平板電腦」。",
    "n."
  ],
  [
    "touchscreen",
    "觸控螢幕",
    "The new smartphone has a very responsive touchscreen.",
    "這款新智慧型手機的觸控螢幕反應非常靈敏。",
    "n."
  ],
  [
    "URL",
    "網址",
    "We discussed the URL during class.",
    "我們在課堂上討論了這個「網址」。",
    "n."
  ],
  [
    "user account",
    "使用者帳號",
    "We discussed the user account during class.",
    "我們在課堂上討論了這個「使用者帳號」。",
    "n."
  ],
  [
    "virtual reality",
    "虛擬實境",
    "We discussed the virtual reality during class.",
    "我們在課堂上討論了這個「虛擬實境」。",
    "n."
  ],
  [
    "webcam",
    "網路攝影機",
    "We discussed the webcam during class.",
    "我們在課堂上討論了這個「網路攝影機」。",
    "n."
  ],
  [
    "Wi-Fi",
    "無線網路",
    "We discussed the Wi-Fi during class.",
    "我們在課堂上討論了這個「無線網路」。",
    "n."
  ],
  [
    "baggage",
    "行李",
    "We discussed the baggage during class.",
    "我們在課堂上討論了這個「行李」。",
    "n."
  ],
  [
    "beverage",
    "飲料",
    "We discussed the beverage during class.",
    "我們在課堂上討論了這個「飲料」。",
    "n."
  ],
  [
    "brand",
    "品牌",
    "We discussed the brand during class.",
    "我們在課堂上討論了這個「品牌」。",
    "n."
  ],
  [
    "briefcase",
    "公事包",
    "We discussed the briefcase during class.",
    "我們在課堂上討論了這個「公事包」。",
    "n."
  ],
  [
    "budgeting",
    "預算編列",
    "We discussed the budgeting during class.",
    "我們在課堂上討論了這個「預算編列」。",
    "n."
  ],
  [
    "cabin crew",
    "機組人員",
    "We discussed the cabin crew during class.",
    "我們在課堂上討論了這個「機組人員」。",
    "n."
  ],
  [
    "check-in",
    "報到；辦理登機",
    "We discussed the check-in during class.",
    "我們在課堂上討論了這個「報到；辦理登機」。",
    "n."
  ],
  [
    "citizenship",
    "公民身分；國籍",
    "We discussed the citizenship during class.",
    "我們在課堂上討論了這個「公民身分；國籍」。",
    "n."
  ],
  [
    "clinic",
    "診所",
    "We discussed the clinic during class.",
    "我們在課堂上討論了這個「診所」。",
    "n."
  ],
  [
    "coaching",
    "指導；教練服務",
    "We discussed the coaching during class.",
    "我們在課堂上討論了這個「指導；教練服務」。",
    "n."
  ],
  [
    "compliment",
    "稱讚",
    "We discussed the compliment during class.",
    "我們在課堂上討論了這個「稱讚」。",
    "n."
  ],
  [
    "consultation",
    "諮詢",
    "We discussed the consultation during class.",
    "我們在課堂上討論了這個「諮詢」。",
    "n."
  ],
  [
    "consumer behavior",
    "消費者行為",
    "We discussed the consumer behavior during class.",
    "我們在課堂上討論了這個「消費者行為」。",
    "n."
  ],
  [
    "currency exchange",
    "貨幣兌換",
    "We discussed the currency exchange during class.",
    "我們在課堂上討論了這個「貨幣兌換」。",
    "n."
  ],
  [
    "customer feedback",
    "顧客回饋",
    "We discussed the customer feedback during class.",
    "我們在課堂上討論了這個「顧客回饋」。",
    "n."
  ],
  [
    "database management",
    "資料庫管理",
    "We discussed the database management during class.",
    "我們在課堂上討論了這個「資料庫管理」。",
    "n."
  ],
  [
    "declaration",
    "聲明；申報",
    "We discussed the declaration during class.",
    "我們在課堂上討論了這個「聲明；申報」。",
    "n."
  ],
  [
    "delayed flight",
    "延誤的班機",
    "We discussed the delayed flight during class.",
    "我們在課堂上討論了這個「延誤的班機」。",
    "n."
  ],
  [
    "department store",
    "百貨公司",
    "We discussed the department store during class.",
    "我們在課堂上討論了這個「百貨公司」。",
    "n."
  ],
  [
    "deposit account",
    "存款帳戶",
    "We discussed the deposit account during class.",
    "我們在課堂上討論了這個「存款帳戶」。",
    "n."
  ],
  [
    "discount code",
    "折扣碼",
    "We discussed the discount code during class.",
    "我們在課堂上討論了這個「折扣碼」。",
    "n."
  ],
  [
    "documentary",
    "紀錄片",
    "We discussed the documentary during class.",
    "我們在課堂上討論了這個「紀錄片」。",
    "n."
  ],
  [
    "elevator button",
    "電梯按鈕",
    "We discussed the elevator button during class.",
    "我們在課堂上討論了這個「電梯按鈕」。",
    "n."
  ],
  [
    "emergency exit",
    "緊急出口",
    "We discussed the emergency exit during class.",
    "我們在課堂上討論了這個「緊急出口」。",
    "n."
  ],
  [
    "entrance fee",
    "入場費",
    "We discussed the entrance fee during class.",
    "我們在課堂上討論了這個「入場費」。",
    "n."
  ],
  [
    "environmental protection",
    "環境保護",
    "We discussed the environmental protection during class.",
    "我們在課堂上討論了這個「環境保護」。",
    "n."
  ],
  [
    "exchange rate",
    "匯率",
    "We discussed the exchange rate during class.",
    "我們在課堂上討論了這個「匯率」。",
    "n."
  ],
  [
    "express delivery",
    "快捷配送",
    "We discussed the express delivery during class.",
    "我們在課堂上討論了這個「快捷配送」。",
    "n."
  ],
  [
    "first aid",
    "急救",
    "We discussed the first aid during class.",
    "我們在課堂上討論了這個「急救」。",
    "n."
  ],
  [
    "flight attendant",
    "空服員",
    "We discussed the flight attendant during class.",
    "我們在課堂上討論了這個「空服員」。",
    "n."
  ],
  [
    "flight delay",
    "航班延誤",
    "We discussed the flight delay during class.",
    "我們在課堂上討論了這個「航班延誤」。",
    "n."
  ],
  [
    "flight schedule",
    "航班時刻表",
    "Please check the flight schedule before you go to the airport.",
    "請在去機場前先查看航班時刻表。",
    "n."
  ],
  [
    "foreign currency",
    "外幣",
    "We discussed the foreign currency during class.",
    "我們在課堂上討論了這個「外幣」。",
    "n."
  ],
  [
    "fuel cost",
    "燃料成本",
    "We discussed the fuel cost during class.",
    "我們在課堂上討論了這個「燃料成本」。",
    "n."
  ],
  [
    "gift card",
    "禮品卡",
    "We discussed the gift card during class.",
    "我們在課堂上討論了這個「禮品卡」。",
    "n."
  ],
  [
    "ground floor",
    "一樓；地面層",
    "We discussed the ground floor during class.",
    "我們在課堂上討論了這個「一樓；地面層」。",
    "n."
  ],
  [
    "guest room",
    "客房",
    "We discussed the guest room during class.",
    "我們在課堂上討論了這個「客房」。",
    "n."
  ],
  [
    "identification",
    "身分證明",
    "We discussed the identification during class.",
    "我們在課堂上討論了這個「身分證明」。",
    "n."
  ],
  [
    "import",
    "進口",
    "We discussed the import during class.",
    "我們在課堂上討論了這個「進口」。",
    "n."
  ],
  [
    "information desk",
    "服務台；詢問處",
    "We discussed the information desk during class.",
    "我們在課堂上討論了這個「服務台；詢問處」。",
    "n."
  ],
  [
    "instruction manual",
    "使用說明書",
    "We discussed the instruction manual during class.",
    "我們在課堂上討論了這個「使用說明書」。",
    "n."
  ],
  [
    "international flight",
    "國際班機",
    "We discussed the international flight during class.",
    "我們在課堂上討論了這個「國際班機」。",
    "n."
  ],
  [
    "job interview",
    "求職面試",
    "We discussed the job interview during class.",
    "我們在課堂上討論了這個「求職面試」。",
    "n."
  ],
  [
    "work schedule",
    "工作排程",
    "We discussed the work schedule during class.",
    "我們在課堂上討論了這個「工作排程」。",
    "n."
  ],
  [
    "accordion",
    "手風琴",
    "We discussed the accordion during today's lesson.",
    "我們在今天的課程中討論了「手風琴」。",
    "n."
  ],
  [
    "alarm clock",
    "鬧鐘",
    "We discussed the alarm clock during today's lesson.",
    "我們在今天的課程中討論了「鬧鐘」。",
    "n."
  ],
  [
    "anniversary",
    "週年紀念日",
    "We discussed the anniversary during today's lesson.",
    "我們在今天的課程中討論了「週年紀念日」。",
    "n."
  ],
  [
    "antique",
    "古董",
    "We discussed the antique during today's lesson.",
    "我們在今天的課程中討論了「古董」。",
    "n."
  ],
  [
    "apartment building",
    "公寓大樓",
    "We discussed the apartment building during today's lesson.",
    "我們在今天的課程中討論了「公寓大樓」。",
    "n."
  ],
  [
    "arch",
    "拱門；弧形結構",
    "We discussed the arch during today's lesson.",
    "我們在今天的課程中討論了「拱門；弧形結構」。",
    "n."
  ],
  [
    "assistant manager",
    "副理",
    "We discussed the assistant manager during today's lesson.",
    "我們在今天的課程中討論了「副理」。",
    "n."
  ],
  [
    "athlete",
    "運動員",
    "We discussed the athlete during today's lesson.",
    "我們在今天的課程中討論了「運動員」。",
    "n."
  ],
  [
    "bank account",
    "銀行帳戶",
    "We discussed the bank account during today's lesson.",
    "我們在今天的課程中討論了「銀行帳戶」。",
    "n."
  ],
  [
    "biology",
    "生物學",
    "We discussed the biology during today's lesson.",
    "我們在今天的課程中討論了「生物學」。",
    "n."
  ],
  [
    "board game",
    "桌上遊戲",
    "We discussed the board game during today's lesson.",
    "我們在今天的課程中討論了「桌上遊戲」。",
    "n."
  ],
  [
    "booklet",
    "小冊子",
    "We discussed the booklet during today's lesson.",
    "我們在今天的課程中討論了「小冊子」。",
    "n."
  ],
  [
    "bowling",
    "保齡球",
    "We discussed the bowling during today's lesson.",
    "我們在今天的課程中討論了「保齡球」。",
    "n."
  ],
  [
    "cafeteria",
    "自助餐廳；餐廳",
    "We discussed the cafeteria during today's lesson.",
    "我們在今天的課程中討論了「自助餐廳；餐廳」。",
    "n."
  ],
  [
    "campsite",
    "露營地",
    "We discussed the campsite during today's lesson.",
    "我們在今天的課程中討論了「露營地」。",
    "n."
  ],
  [
    "canteen",
    "餐廳；食堂",
    "We discussed the canteen during today's lesson.",
    "我們在今天的課程中討論了「餐廳；食堂」。",
    "n."
  ],
  [
    "capital city",
    "首都",
    "We discussed the capital city during today's lesson.",
    "我們在今天的課程中討論了「首都」。",
    "n."
  ],
  [
    "car wash",
    "洗車場；洗車",
    "We discussed the car wash during today's lesson.",
    "我們在今天的課程中討論了「洗車場；洗車」。",
    "n."
  ],
  [
    "checklist",
    "檢查清單",
    "We discussed the checklist during today's lesson.",
    "我們在今天的課程中討論了「檢查清單」。",
    "n."
  ],
  [
    "cheer",
    "歡呼；喝采",
    "We discussed the cheer during today's lesson.",
    "我們在今天的課程中討論了「歡呼；喝采」。",
    "n."
  ],
  [
    "choir",
    "合唱團",
    "We discussed the choir during today's lesson.",
    "我們在今天的課程中討論了「合唱團」。",
    "n."
  ],
  [
    "collar",
    "衣領；項圈",
    "We discussed the collar during today's lesson.",
    "我們在今天的課程中討論了「衣領；項圈」。",
    "n."
  ],
  [
    "collection",
    "收藏；收集",
    "We discussed the collection during today's lesson.",
    "我們在今天的課程中討論了「收藏；收集」。",
    "n."
  ],
  [
    "compass",
    "指南針",
    "We discussed the compass during today's lesson.",
    "我們在今天的課程中討論了「指南針」。",
    "n."
  ],
  [
    "concert hall",
    "音樂廳",
    "We discussed the concert hall during today's lesson.",
    "我們在今天的課程中討論了「音樂廳」。",
    "n."
  ],
  [
    "congratulation",
    "祝賀",
    "We discussed the congratulation during today's lesson.",
    "我們在今天的課程中討論了「祝賀」。",
    "n."
  ],
  [
    "cooking oil",
    "食用油",
    "We discussed the cooking oil during today's lesson.",
    "我們在今天的課程中討論了「食用油」。",
    "n."
  ],
  [
    "cornerstone",
    "基石",
    "We discussed the cornerstone during today's lesson.",
    "我們在今天的課程中討論了「基石」。",
    "n."
  ],
  [
    "council",
    "議會；委員會",
    "We discussed the council during today's lesson.",
    "我們在今天的課程中討論了「議會；委員會」。",
    "n."
  ],
  [
    "courtyard",
    "庭院",
    "We discussed the courtyard during today's lesson.",
    "我們在今天的課程中討論了「庭院」。",
    "n."
  ],
  [
    "cycling route",
    "自行車路線",
    "We discussed the cycling route during today's lesson.",
    "我們在今天的課程中討論了「自行車路線」。",
    "n."
  ],
  [
    "dance floor",
    "舞池",
    "We discussed the dance floor during today's lesson.",
    "我們在今天的課程中討論了「舞池」。",
    "n."
  ],
  [
    "daycare",
    "日間照顧；托育",
    "We discussed the daycare during today's lesson.",
    "我們在今天的課程中討論了「日間照顧；托育」。",
    "n."
  ],
  [
    "detective",
    "偵探",
    "We discussed the detective during today's lesson.",
    "我們在今天的課程中討論了「偵探」。",
    "n."
  ],
  [
    "diamond",
    "鑽石",
    "We discussed the diamond during today's lesson.",
    "我們在今天的課程中討論了「鑽石」。",
    "n."
  ],
  [
    "diploma",
    "文憑",
    "We discussed the diploma during today's lesson.",
    "我們在今天的課程中討論了「文憑」。",
    "n."
  ],
  [
    "domestic flight",
    "國內班機",
    "We discussed the domestic flight during today's lesson.",
    "我們在今天的課程中討論了「國內班機」。",
    "n."
  ],
  [
    "dress code",
    "服裝規定",
    "We discussed the dress code during today's lesson.",
    "我們在今天的課程中討論了「服裝規定」。",
    "n."
  ],
  [
    "dryer",
    "烘衣機；吹風機",
    "We discussed the dryer during today's lesson.",
    "我們在今天的課程中討論了「烘衣機；吹風機」。",
    "n."
  ],
  [
    "eardrum",
    "耳膜",
    "We discussed the eardrum during today's lesson.",
    "我們在今天的課程中討論了「耳膜」。",
    "n."
  ],
  [
    "economy",
    "經濟",
    "We discussed the economy during today's lesson.",
    "我們在今天的課程中討論了「經濟」。",
    "n."
  ],
  [
    "editorial",
    "社論",
    "We discussed the editorial during today's lesson.",
    "我們在今天的課程中討論了「社論」。",
    "n."
  ],
  [
    "electronic mail",
    "電子郵件",
    "We discussed the electronic mail during today's lesson.",
    "我們在今天的課程中討論了「電子郵件」。",
    "n."
  ],
  [
    "elevator operator",
    "電梯操作員",
    "We discussed the elevator operator during today's lesson.",
    "我們在今天的課程中討論了「電梯操作員」。",
    "n."
  ],
  [
    "emergency room",
    "急診室",
    "We discussed the emergency room during today's lesson.",
    "我們在今天的課程中討論了「急診室」。",
    "n."
  ],
  [
    "epidemic",
    "流行病",
    "We discussed the epidemic during today's lesson.",
    "我們在今天的課程中討論了「流行病」。",
    "n."
  ],
  [
    "escalator",
    "手扶梯",
    "We discussed the escalator during today's lesson.",
    "我們在今天的課程中討論了「手扶梯」。",
    "n."
  ],
  [
    "explorer",
    "探險家",
    "We discussed the explorer during today's lesson.",
    "我們在今天的課程中討論了「探險家」。",
    "n."
  ],
  [
    "factory worker",
    "工廠作業員",
    "We discussed the factory worker during today's lesson.",
    "我們在今天的課程中討論了「工廠作業員」。",
    "n."
  ],
  [
    "farewell",
    "告別；道別",
    "We discussed the farewell during today's lesson.",
    "我們在今天的課程中討論了「告別；道別」。",
    "n."
  ],
  [
    "fire engine",
    "消防車",
    "We discussed the fire engine during today's lesson.",
    "我們在今天的課程中討論了「消防車」。",
    "n."
  ],
  [
    "fire extinguisher",
    "滅火器",
    "We discussed the fire extinguisher during today's lesson.",
    "我們在今天的課程中討論了「滅火器」。",
    "n."
  ],
  [
    "first class",
    "頭等艙；第一級",
    "We discussed the first class during today's lesson.",
    "我們在今天的課程中討論了「頭等艙；第一級」。",
    "n."
  ],
  [
    "first name",
    "名字",
    "We discussed the first name during today's lesson.",
    "我們在今天的課程中討論了「名字」。",
    "n."
  ],
  [
    "florist",
    "花店店員；花商",
    "We discussed the florist during today's lesson.",
    "我們在今天的課程中討論了「花店店員；花商」。",
    "n."
  ],
  [
    "folklore",
    "民間傳說",
    "We discussed the folklore during today's lesson.",
    "我們在今天的課程中討論了「民間傳說」。",
    "n."
  ],
  [
    "frying pan",
    "平底鍋",
    "We discussed the frying pan during today's lesson.",
    "我們在今天的課程中討論了「平底鍋」。",
    "n."
  ],
  [
    "game show",
    "遊戲節目",
    "We discussed the game show during today's lesson.",
    "我們在今天的課程中討論了「遊戲節目」。",
    "n."
  ],
  [
    "gas station",
    "加油站",
    "We discussed the gas station during today's lesson.",
    "我們在今天的課程中討論了「加油站」。",
    "n."
  ],
  [
    "gatekeeper",
    "守門人；管理者",
    "We discussed the gatekeeper during today's lesson.",
    "我們在今天的課程中討論了「守門人；管理者」。",
    "n."
  ],
  [
    "grandparent",
    "祖父母；外祖父母",
    "We discussed the grandparent during today's lesson.",
    "我們在今天的課程中討論了「祖父母；外祖父母」。",
    "n."
  ],
  [
    "graph",
    "圖表",
    "We discussed the graph during today's lesson.",
    "我們在今天的課程中討論了「圖表」。",
    "n."
  ],
  [
    "grocery store",
    "雜貨店",
    "We discussed the grocery store during today's lesson.",
    "我們在今天的課程中討論了「雜貨店」。",
    "n."
  ],
  [
    "guesthouse",
    "民宿；旅館",
    "We discussed the guesthouse during today's lesson.",
    "我們在今天的課程中討論了「民宿；旅館」。",
    "n."
  ],
  [
    "gymnasium",
    "體育館",
    "We discussed the gymnasium during today's lesson.",
    "我們在今天的課程中討論了「體育館」。",
    "n."
  ],
  [
    "hairdresser",
    "髮型師",
    "We discussed the hairdresser during today's lesson.",
    "我們在今天的課程中討論了「髮型師」。",
    "n."
  ],
  [
    "hardware",
    "硬體；五金",
    "We discussed the hardware during today's lesson.",
    "我們在今天的課程中討論了「硬體；五金」。",
    "n."
  ],
  [
    "hospitality",
    "好客；接待業",
    "We discussed the hospitality during today's lesson.",
    "我們在今天的課程中討論了「好客；接待業」。",
    "n."
  ],
  [
    "humidity",
    "濕度",
    "We discussed the humidity during today's lesson.",
    "我們在今天的課程中討論了「濕度」。",
    "n."
  ],
  [
    "hygiene",
    "衛生",
    "We discussed the hygiene during today's lesson.",
    "我們在今天的課程中討論了「衛生」。",
    "n."
  ],
  [
    "income tax",
    "所得稅",
    "We discussed the income tax during today's lesson.",
    "我們在今天的課程中討論了「所得稅」。",
    "n."
  ],
  [
    "insurance agent",
    "保險業務員",
    "We discussed the insurance agent during today's lesson.",
    "我們在今天的課程中討論了「保險業務員」。",
    "n."
  ],
  [
    "interior",
    "室內；內部",
    "We discussed the interior during today's lesson.",
    "我們在今天的課程中討論了「室內；內部」。",
    "n."
  ],
  [
    "interpreter",
    "口譯員",
    "We discussed the interpreter during today's lesson.",
    "我們在今天的課程中討論了「口譯員」。",
    "n."
  ],
  [
    "intersection",
    "十字路口",
    "We discussed the intersection during today's lesson.",
    "我們在今天的課程中討論了「十字路口」。",
    "n."
  ],
  [
    "island tour",
    "島嶼旅遊行程",
    "We discussed the island tour during today's lesson.",
    "我們在今天的課程中討論了「島嶼旅遊行程」。",
    "n."
  ],
  [
    "jogging",
    "慢跑",
    "We discussed the jogging during today's lesson.",
    "我們在今天的課程中討論了「慢跑」。",
    "n."
  ],
  [
    "journalist",
    "記者",
    "We discussed the journalist during today's lesson.",
    "我們在今天的課程中討論了「記者」。",
    "n."
  ],
  [
    "jury duty",
    "陪審義務",
    "We discussed the jury duty during today's lesson.",
    "我們在今天的課程中討論了「陪審義務」。",
    "n."
  ],
  [
    "kindergarten",
    "幼兒園",
    "We discussed the kindergarten during today's lesson.",
    "我們在今天的課程中討論了「幼兒園」。",
    "n."
  ],
  [
    "kingdom",
    "王國",
    "We discussed the kingdom during today's lesson.",
    "我們在今天的課程中討論了「王國」。",
    "n."
  ],
  [
    "knife",
    "刀子",
    "We discussed the knife during today's lesson.",
    "我們在今天的課程中討論了「刀子」。",
    "n."
  ],
  [
    "laundry room",
    "洗衣間",
    "We discussed the laundry room during today's lesson.",
    "我們在今天的課程中討論了「洗衣間」。",
    "n."
  ],
  [
    "lemonade",
    "檸檬水",
    "We discussed the lemonade during today's lesson.",
    "我們在今天的課程中討論了「檸檬水」。",
    "n."
  ],
  [
    "license plate",
    "車牌",
    "We discussed the license plate during today's lesson.",
    "我們在今天的課程中討論了「車牌」。",
    "n."
  ],
  [
    "lobby",
    "大廳",
    "We discussed the lobby during today's lesson.",
    "我們在今天的課程中討論了「大廳」。",
    "n."
  ],
  [
    "luggage cart",
    "行李推車",
    "We discussed the luggage cart during today's lesson.",
    "我們在今天的課程中討論了「行李推車」。",
    "n."
  ],
  [
    "lunchbox",
    "便當盒",
    "We discussed the lunchbox during today's lesson.",
    "我們在今天的課程中討論了「便當盒」。",
    "n."
  ],
  [
    "makeup",
    "化妝品；妝容",
    "We discussed the makeup during today's lesson.",
    "我們在今天的課程中討論了「化妝品；妝容」。",
    "n."
  ],
  [
    "marathon",
    "馬拉松",
    "We discussed the marathon during today's lesson.",
    "我們在今天的課程中討論了「馬拉松」。",
    "n."
  ],
  [
    "microwave",
    "微波爐",
    "We discussed the microwave during today's lesson.",
    "我們在今天的課程中討論了「微波爐」。",
    "n."
  ],
  [
    "midterm",
    "期中考",
    "We discussed the midterm during today's lesson.",
    "我們在今天的課程中討論了「期中考」。",
    "n."
  ],
  [
    "mineral",
    "礦物質",
    "We discussed the mineral during today's lesson.",
    "我們在今天的課程中討論了「礦物質」。",
    "n."
  ],
  [
    "mobile phone",
    "行動電話",
    "We discussed the mobile phone during today's lesson.",
    "我們在今天的課程中討論了「行動電話」。",
    "n."
  ],
  [
    "mortgage",
    "房屋貸款",
    "We discussed the mortgage during today's lesson.",
    "我們在今天的課程中討論了「房屋貸款」。",
    "n."
  ],
  [
    "museum guide",
    "博物館導覽員",
    "We discussed the museum guide during today's lesson.",
    "我們在今天的課程中討論了「博物館導覽員」。",
    "n."
  ],
  [
    "nightclub",
    "夜店",
    "We discussed the nightclub during today's lesson.",
    "我們在今天的課程中討論了「夜店」。",
    "n."
  ],
  [
    "noodle soup",
    "湯麵",
    "We discussed the noodle soup during today's lesson.",
    "我們在今天的課程中討論了「湯麵」。",
    "n."
  ],
  [
    "notebook",
    "筆記本；筆電",
    "We discussed the notebook during today's lesson.",
    "我們在今天的課程中討論了「筆記本；筆電」。",
    "n."
  ],
  [
    "office building",
    "辦公大樓",
    "We discussed the office building during today's lesson.",
    "我們在今天的課程中討論了「辦公大樓」。",
    "n."
  ],
  [
    "office hours",
    "辦公時間",
    "We discussed the office hours during today's lesson.",
    "我們在今天的課程中討論了「辦公時間」。",
    "n."
  ],
  [
    "opening ceremony",
    "開幕典禮",
    "We discussed the opening ceremony during today's lesson.",
    "我們在今天的課程中討論了「開幕典禮」。",
    "n."
  ],
  [
    "orchestra",
    "管弦樂團",
    "We discussed the orchestra during today's lesson.",
    "我們在今天的課程中討論了「管弦樂團」。",
    "n."
  ],
  [
    "outlet",
    "出口；暢貨中心",
    "We discussed the outlet during today's lesson.",
    "我們在今天的課程中討論了「出口；暢貨中心」。",
    "n."
  ],
  [
    "outlook",
    "展望；觀點",
    "We discussed the outlook during today's lesson.",
    "我們在今天的課程中討論了「展望；觀點」。",
    "n."
  ],
  [
    "packing",
    "打包；包裝",
    "We discussed the packing during today's lesson.",
    "我們在今天的課程中討論了「打包；包裝」。",
    "n."
  ],
  [
    "parking",
    "停車",
    "We discussed the parking during today's lesson.",
    "我們在今天的課程中討論了「停車」。",
    "n."
  ],
  [
    "passport control",
    "護照查驗",
    "We discussed the passport control during today's lesson.",
    "我們在今天的課程中討論了「護照查驗」。",
    "n."
  ],
  [
    "password",
    "密碼",
    "We discussed the password during today's lesson.",
    "我們在今天的課程中討論了「密碼」。",
    "n."
  ],
  [
    "pathway",
    "小徑；途徑",
    "We discussed the pathway during today's lesson.",
    "我們在今天的課程中討論了「小徑；途徑」。",
    "n."
  ],
  [
    "pedestrian",
    "行人",
    "We discussed the pedestrian during today's lesson.",
    "我們在今天的課程中討論了「行人」。",
    "n."
  ],
  [
    "perfume",
    "香水",
    "We discussed the perfume during today's lesson.",
    "我們在今天的課程中討論了「香水」。",
    "n."
  ],
  [
    "photographer",
    "攝影師",
    "We discussed the photographer during today's lesson.",
    "我們在今天的課程中討論了「攝影師」。",
    "n."
  ],
  [
    "physics",
    "物理學",
    "We discussed the physics during today's lesson.",
    "我們在今天的課程中討論了「物理學」。",
    "n."
  ],
  [
    "picnic",
    "野餐",
    "We discussed the picnic during today's lesson.",
    "我們在今天的課程中討論了「野餐」。",
    "n."
  ],
  [
    "pizza",
    "披薩",
    "We discussed the pizza during today's lesson.",
    "我們在今天的課程中討論了「披薩」。",
    "n."
  ],
  [
    "pocket money",
    "零用錢",
    "We discussed the pocket money during today's lesson.",
    "我們在今天的課程中討論了「零用錢」。",
    "n."
  ],
  [
    "pottery",
    "陶器；陶藝",
    "We discussed the pottery during today's lesson.",
    "我們在今天的課程中討論了「陶器；陶藝」。",
    "n."
  ],
  [
    "power outage",
    "停電",
    "We discussed the power outage during today's lesson.",
    "我們在今天的課程中討論了「停電」。",
    "n."
  ],
  [
    "practice room",
    "練習室",
    "We discussed the practice room during today's lesson.",
    "我們在今天的課程中討論了「練習室」。",
    "n."
  ],
  [
    "prison",
    "監獄",
    "We discussed the prison during today's lesson.",
    "我們在今天的課程中討論了「監獄」。",
    "n."
  ],
  [
    "producer",
    "製作人；生產者",
    "We discussed the producer during today's lesson.",
    "我們在今天的課程中討論了「製作人；生產者」。",
    "n."
  ],
  [
    "public library",
    "公共圖書館",
    "We discussed the public library during today's lesson.",
    "我們在今天的課程中討論了「公共圖書館」。",
    "n."
  ],
  [
    "pumpkin",
    "南瓜",
    "We discussed the pumpkin during today's lesson.",
    "我們在今天的課程中討論了「南瓜」。",
    "n."
  ],
  [
    "puzzle",
    "拼圖；謎題",
    "We discussed the puzzle during today's lesson.",
    "我們在今天的課程中討論了「拼圖；謎題」。",
    "n."
  ],
  [
    "rainbow",
    "彩虹",
    "We discussed the rainbow during today's lesson.",
    "我們在今天的課程中討論了「彩虹」。",
    "n."
  ],
  [
    "raincoat",
    "雨衣",
    "We discussed the raincoat during today's lesson.",
    "我們在今天的課程中討論了「雨衣」。",
    "n."
  ],
  [
    "receptionist",
    "接待人員",
    "We discussed the receptionist during today's lesson.",
    "我們在今天的課程中討論了「接待人員」。",
    "n."
  ],
  [
    "recycling",
    "回收；再利用",
    "We discussed the recycling during today's lesson.",
    "我們在今天的課程中討論了「回收；再利用」。",
    "n."
  ],
  [
    "registration",
    "登記；註冊",
    "We discussed the registration during today's lesson.",
    "我們在今天的課程中討論了「登記；註冊」。",
    "n."
  ],
  [
    "residence",
    "住所；居住",
    "We discussed the residence during today's lesson.",
    "我們在今天的課程中討論了「住所；居住」。",
    "n."
  ],
  [
    "retirement",
    "退休",
    "We discussed the retirement during today's lesson.",
    "我們在今天的課程中討論了「退休」。",
    "n."
  ],
  [
    "reunion",
    "重聚；同學會",
    "We discussed the reunion during today's lesson.",
    "我們在今天的課程中討論了「重聚；同學會」。",
    "n."
  ],
  [
    "rice cooker",
    "電鍋",
    "We discussed the rice cooker during today's lesson.",
    "我們在今天的課程中討論了「電鍋」。",
    "n."
  ],
  [
    "riverbank",
    "河岸",
    "We discussed the riverbank during today's lesson.",
    "我們在今天的課程中討論了「河岸」。",
    "n."
  ],
  [
    "roadwork",
    "道路施工",
    "We discussed the roadwork during today's lesson.",
    "我們在今天的課程中討論了「道路施工」。",
    "n."
  ],
  [
    "rooftop",
    "屋頂平台",
    "We discussed the rooftop during today's lesson.",
    "我們在今天的課程中討論了「屋頂平台」。",
    "n."
  ],
  [
    "router",
    "路由器",
    "We discussed the router during today's lesson.",
    "我們在今天的課程中討論了「路由器」。",
    "n."
  ],
  [
    "safety belt",
    "安全帶",
    "We discussed the safety belt during today's lesson.",
    "我們在今天的課程中討論了「安全帶」。",
    "n."
  ],
  [
    "sandwich",
    "三明治",
    "We discussed the sandwich during today's lesson.",
    "我們在今天的課程中討論了「三明治」。",
    "n."
  ],
  [
    "scarf",
    "圍巾",
    "We discussed the scarf during today's lesson.",
    "我們在今天的課程中討論了「圍巾」。",
    "n."
  ],
  [
    "science fiction",
    "科幻小說",
    "We discussed the science fiction during today's lesson.",
    "我們在今天的課程中討論了「科幻小說」。",
    "n."
  ],
  [
    "seafood",
    "海鮮",
    "We discussed the seafood during today's lesson.",
    "我們在今天的課程中討論了「海鮮」。",
    "n."
  ],
  [
    "security guard",
    "保全人員",
    "We discussed the security guard during today's lesson.",
    "我們在今天的課程中討論了「保全人員」。",
    "n."
  ],
  [
    "senior citizen",
    "高齡者",
    "We discussed the senior citizen during today's lesson.",
    "我們在今天的課程中討論了「高齡者」。",
    "n."
  ],
  [
    "service center",
    "服務中心",
    "We discussed the service center during today's lesson.",
    "我們在今天的課程中討論了「服務中心」。",
    "n."
  ],
  [
    "shopping bag",
    "購物袋",
    "We discussed the shopping bag during today's lesson.",
    "我們在今天的課程中討論了「購物袋」。",
    "n."
  ],
  [
    "shopping list",
    "購物清單",
    "We discussed the shopping list during today's lesson.",
    "我們在今天的課程中討論了「購物清單」。",
    "n."
  ],
  [
    "skating",
    "溜冰；滑冰",
    "We discussed the skating during today's lesson.",
    "我們在今天的課程中討論了「溜冰；滑冰」。",
    "n."
  ],
  [
    "skiing",
    "滑雪",
    "We discussed the skiing during today's lesson.",
    "我們在今天的課程中討論了「滑雪」。",
    "n."
  ],
  [
    "skyscraper",
    "摩天大樓",
    "We discussed the skyscraper during today's lesson.",
    "我們在今天的課程中討論了「摩天大樓」。",
    "n."
  ],
  [
    "sleeping bag",
    "睡袋",
    "We discussed the sleeping bag during today's lesson.",
    "我們在今天的課程中討論了「睡袋」。",
    "n."
  ],
  [
    "slipper",
    "拖鞋",
    "We discussed the slipper during today's lesson.",
    "我們在今天的課程中討論了「拖鞋」。",
    "n."
  ],
  [
    "smartphone",
    "智慧型手機",
    "We discussed the smartphone during today's lesson.",
    "我們在今天的課程中討論了「智慧型手機」。",
    "n."
  ],
  [
    "smoke alarm",
    "煙霧警報器",
    "We discussed the smoke alarm during today's lesson.",
    "我們在今天的課程中討論了「煙霧警報器」。",
    "n."
  ],
  [
    "snowman",
    "雪人",
    "We discussed the snowman during today's lesson.",
    "我們在今天的課程中討論了「雪人」。",
    "n."
  ],
  [
    "soil",
    "土壤",
    "We discussed the soil during today's lesson.",
    "我們在今天的課程中討論了「土壤」。",
    "n."
  ],
  [
    "solar power",
    "太陽能",
    "We discussed the solar power during today's lesson.",
    "我們在今天的課程中討論了「太陽能」。",
    "n."
  ],
  [
    "souvenir",
    "紀念品",
    "We discussed the souvenir during today's lesson.",
    "我們在今天的課程中討論了「紀念品」。",
    "n."
  ],
  [
    "sports center",
    "運動中心",
    "We discussed the sports center during today's lesson.",
    "我們在今天的課程中討論了「運動中心」。",
    "n."
  ],
  [
    "stadium",
    "體育場",
    "We discussed the stadium during today's lesson.",
    "我們在今天的課程中討論了「體育場」。",
    "n."
  ],
  [
    "steak",
    "牛排",
    "We discussed the steak during today's lesson.",
    "我們在今天的課程中討論了「牛排」。",
    "n."
  ],
  [
    "sticker",
    "貼紙",
    "We discussed the sticker during today's lesson.",
    "我們在今天的課程中討論了「貼紙」。",
    "n."
  ],
  [
    "storefront",
    "店面；店面櫥窗",
    "We discussed the storefront during today's lesson.",
    "我們在今天的課程中討論了「店面；店面櫥窗」。",
    "n."
  ],
  [
    "student union",
    "學生會",
    "We discussed the student union during today's lesson.",
    "我們在今天的課程中討論了「學生會」。",
    "n."
  ],
  [
    "suburb",
    "郊區",
    "We discussed the suburb during today's lesson.",
    "我們在今天的課程中討論了「郊區」。",
    "n."
  ],
  [
    "subway station",
    "捷運站",
    "We discussed the subway station during today's lesson.",
    "我們在今天的課程中討論了「捷運站」。",
    "n."
  ],
  [
    "suitcase",
    "行李箱",
    "We discussed the suitcase during today's lesson.",
    "我們在今天的課程中討論了「行李箱」。",
    "n."
  ],
  [
    "sunglasses",
    "太陽眼鏡",
    "We discussed the sunglasses during today's lesson.",
    "我們在今天的課程中討論了「太陽眼鏡」。",
    "n."
  ],
  [
    "surgeon",
    "外科醫師",
    "We discussed the surgeon during today's lesson.",
    "我們在今天的課程中討論了「外科醫師」。",
    "n."
  ],
  [
    "swimming pool",
    "游泳池",
    "We discussed the swimming pool during today's lesson.",
    "我們在今天的課程中討論了「游泳池」。",
    "n."
  ],
  [
    "symptom",
    "症狀",
    "We discussed the symptom during today's lesson.",
    "我們在今天的課程中討論了「症狀」。",
    "n."
  ],
  [
    "tablecloth",
    "桌巾",
    "We discussed the tablecloth during today's lesson.",
    "我們在今天的課程中討論了「桌巾」。",
    "n."
  ],
  [
    "tailor",
    "裁縫師",
    "We discussed the tailor during today's lesson.",
    "我們在今天的課程中討論了「裁縫師」。",
    "n."
  ],
  [
    "taxi driver",
    "計程車司機",
    "We discussed the taxi driver during today's lesson.",
    "我們在今天的課程中討論了「計程車司機」。",
    "n."
  ],
  [
    "tea bag",
    "茶包",
    "We discussed the tea bag during today's lesson.",
    "我們在今天的課程中討論了「茶包」。",
    "n."
  ],
  [
    "team leader",
    "組長",
    "We discussed the team leader during today's lesson.",
    "我們在今天的課程中討論了「組長」。",
    "n."
  ],
  [
    "technician",
    "技術員",
    "We discussed the technician during today's lesson.",
    "我們在今天的課程中討論了「技術員」。",
    "n."
  ],
  [
    "telescope",
    "望遠鏡",
    "We discussed the telescope during today's lesson.",
    "我們在今天的課程中討論了「望遠鏡」。",
    "n."
  ],
  [
    "text message",
    "簡訊",
    "We discussed the text message during today's lesson.",
    "我們在今天的課程中討論了「簡訊」。",
    "n."
  ],
  [
    "theater ticket",
    "戲票",
    "We discussed the theater ticket during today's lesson.",
    "我們在今天的課程中討論了「戲票」。",
    "n."
  ],
  [
    "thermometer",
    "溫度計",
    "We discussed the thermometer during today's lesson.",
    "我們在今天的課程中討論了「溫度計」。",
    "n."
  ],
  [
    "thunderstorm",
    "雷雨",
    "We discussed the thunderstorm during today's lesson.",
    "我們在今天的課程中討論了「雷雨」。",
    "n."
  ],
  [
    "ticket machine",
    "售票機",
    "We discussed the ticket machine during today's lesson.",
    "我們在今天的課程中討論了「售票機」。",
    "n."
  ],
  [
    "tissue",
    "衛生紙；組織",
    "We discussed the tissue during today's lesson.",
    "我們在今天的課程中討論了「衛生紙；組織」。",
    "n."
  ],
  [
    "toolbox",
    "工具箱",
    "We discussed the toolbox during today's lesson.",
    "我們在今天的課程中討論了「工具箱」。",
    "n."
  ],
  [
    "tour guide",
    "導遊",
    "We discussed the tour guide during today's lesson.",
    "我們在今天的課程中討論了「導遊」。",
    "n."
  ],
  [
    "tourism",
    "觀光業",
    "We discussed the tourism during today's lesson.",
    "我們在今天的課程中討論了「觀光業」。",
    "n."
  ],
  [
    "tourist attraction",
    "觀光景點",
    "We discussed the tourist attraction during today's lesson.",
    "我們在今天的課程中討論了「觀光景點」。",
    "n."
  ],
  [
    "towel",
    "毛巾",
    "We discussed the towel during today's lesson.",
    "我們在今天的課程中討論了「毛巾」。",
    "n."
  ],
  [
    "tower",
    "塔；高樓",
    "We discussed the tower during today's lesson.",
    "我們在今天的課程中討論了「塔；高樓」。",
    "n."
  ],
  [
    "traffic light",
    "紅綠燈",
    "We discussed the traffic light during today's lesson.",
    "我們在今天的課程中討論了「紅綠燈」。",
    "n."
  ],
  [
    "traffic jam",
    "塞車",
    "We discussed the traffic jam during today's lesson.",
    "我們在今天的課程中討論了「塞車」。",
    "n."
  ],
  [
    "training course",
    "培訓課程",
    "We discussed the training course during today's lesson.",
    "我們在今天的課程中討論了「培訓課程」。",
    "n."
  ],
  [
    "translator",
    "筆譯員",
    "We discussed the translator during today's lesson.",
    "我們在今天的課程中討論了「筆譯員」。",
    "n."
  ],
  [
    "travel agency",
    "旅行社",
    "We discussed the travel agency during today's lesson.",
    "我們在今天的課程中討論了「旅行社」。",
    "n."
  ],
  [
    "travel guide",
    "旅遊指南",
    "We discussed the travel guide during today's lesson.",
    "我們在今天的課程中討論了「旅遊指南」。",
    "n."
  ],
  [
    "travel voucher",
    "旅遊憑證",
    "We discussed the travel voucher during today's lesson.",
    "我們在今天的課程中討論了「旅遊憑證」。",
    "n."
  ],
  [
    "tripod",
    "三腳架",
    "We discussed the tripod during today's lesson.",
    "我們在今天的課程中討論了「三腳架」。",
    "n."
  ],
  [
    "trousers",
    "長褲",
    "We discussed the trousers during today's lesson.",
    "我們在今天的課程中討論了「長褲」。",
    "n."
  ],
  [
    "truck driver",
    "卡車司機",
    "We discussed the truck driver during today's lesson.",
    "我們在今天的課程中討論了「卡車司機」。",
    "n."
  ],
  [
    "tunnel",
    "隧道",
    "We discussed the tunnel during today's lesson.",
    "我們在今天的課程中討論了「隧道」。",
    "n."
  ],
  [
    "typewriter",
    "打字機",
    "We discussed the typewriter during today's lesson.",
    "我們在今天的課程中討論了「打字機」。",
    "n."
  ],
  [
    "umbrella stand",
    "傘架",
    "We discussed the umbrella stand during today's lesson.",
    "我們在今天的課程中討論了「傘架」。",
    "n."
  ],
  [
    "university campus",
    "大學校園",
    "We discussed the university campus during today's lesson.",
    "我們在今天的課程中討論了「大學校園」。",
    "n."
  ],
  [
    "vacuum cleaner",
    "吸塵器",
    "We discussed the vacuum cleaner during today's lesson.",
    "我們在今天的課程中討論了「吸塵器」。",
    "n."
  ],
  [
    "vending machine",
    "自動販賣機",
    "We discussed the vending machine during today's lesson.",
    "我們在今天的課程中討論了「自動販賣機」。",
    "n."
  ],
  [
    "viewpoint",
    "觀點；觀景點",
    "We discussed the viewpoint during today's lesson.",
    "我們在今天的課程中討論了「觀點；觀景點」。",
    "n."
  ],
  [
    "waiter",
    "服務生",
    "We discussed the waiter during today's lesson.",
    "我們在今天的課程中討論了「服務生」。",
    "n."
  ],
  [
    "waiting room",
    "候診室；等候室",
    "We discussed the waiting room during today's lesson.",
    "我們在今天的課程中討論了「候診室；等候室」。",
    "n."
  ],
  [
    "wallet",
    "皮夾；錢包",
    "We discussed the wallet during today's lesson.",
    "我們在今天的課程中討論了「皮夾；錢包」。",
    "n."
  ],
  [
    "wardrobe",
    "衣櫃",
    "We discussed the wardrobe during today's lesson.",
    "我們在今天的課程中討論了「衣櫃」。",
    "n."
  ],
  [
    "waterfall",
    "瀑布",
    "We discussed the waterfall during today's lesson.",
    "我們在今天的課程中討論了「瀑布」。",
    "n."
  ],
  [
    "windshield",
    "擋風玻璃",
    "We discussed the windshield during today's lesson.",
    "我們在今天的課程中討論了「擋風玻璃」。",
    "n."
  ],
  [
    "wine glass",
    "酒杯",
    "We discussed the wine glass during today's lesson.",
    "我們在今天的課程中討論了「酒杯」。",
    "n."
  ],
  [
    "winter coat",
    "冬季大衣",
    "We discussed the winter coat during today's lesson.",
    "我們在今天的課程中討論了「冬季大衣」。",
    "n."
  ],
  [
    "witness",
    "目擊者；證人",
    "We discussed the witness during today's lesson.",
    "我們在今天的課程中討論了「目擊者；證人」。",
    "n."
  ],
  [
    "abdomen",
    "腹部",
    "We discussed the abdomen during today's lesson.",
    "我們在今天的課程中討論了「腹部」。",
    "n."
  ],
  [
    "abuse",
    "濫用；虐待",
    "We discussed the abuse during today's lesson.",
    "我們在今天的課程中討論了「濫用；虐待」。",
    "n."
  ],
  [
    "accounting",
    "會計",
    "We discussed the accounting during today's lesson.",
    "我們在今天的課程中討論了「會計」。",
    "n."
  ],
  [
    "algebra",
    "代數",
    "We discussed the algebra during today's lesson.",
    "我們在今天的課程中討論了「代數」。",
    "n."
  ],
  [
    "archaeology",
    "考古學",
    "We discussed the archaeology during today's lesson.",
    "我們在今天的課程中討論了「考古學」。",
    "n."
  ],
  [
    "astronomy",
    "天文學",
    "We discussed the astronomy during today's lesson.",
    "我們在今天的課程中討論了「天文學」。",
    "n."
  ],
  [
    "bacteria",
    "細菌",
    "We discussed the bacteria during today's lesson.",
    "我們在今天的課程中討論了「細菌」。",
    "n."
  ],
  [
    "calorie",
    "卡路里",
    "We discussed the calorie during today's lesson.",
    "我們在今天的課程中討論了「卡路里」。",
    "n."
  ],
  [
    "capitalism",
    "資本主義",
    "We discussed the capitalism during today's lesson.",
    "我們在今天的課程中討論了「資本主義」。",
    "n."
  ],
  [
    "carbon",
    "碳",
    "We discussed the carbon during today's lesson.",
    "我們在今天的課程中討論了「碳」。",
    "n."
  ],
  [
    "chemistry",
    "化學",
    "We discussed the chemistry during today's lesson.",
    "我們在今天的課程中討論了「化學」。",
    "n."
  ],
  [
    "civilization",
    "文明",
    "We discussed the civilization during today's lesson.",
    "我們在今天的課程中討論了「文明」。",
    "n."
  ],
  [
    "cognition",
    "認知",
    "We discussed the cognition during today's lesson.",
    "我們在今天的課程中討論了「認知」。",
    "n."
  ],
  [
    "computation",
    "計算",
    "We discussed the computation during today's lesson.",
    "我們在今天的課程中討論了「計算」。",
    "n."
  ],
  [
    "concentration",
    "專注；濃度",
    "We discussed the concentration during today's lesson.",
    "我們在今天的課程中討論了「專注；濃度」。",
    "n."
  ],
  [
    "conflict",
    "衝突",
    "We discussed the conflict during today's lesson.",
    "我們在今天的課程中討論了「衝突」。",
    "n."
  ],
  [
    "conservation",
    "保育；保存；節約（資源）",
    "Wildlife conservation is crucial for maintaining biodiversity.",
    "野生動物保育對於維持生物多樣性至關重要。",
    "n."
  ],
  [
    "consumerism",
    "消費主義",
    "We discussed the consumerism during today's lesson.",
    "我們在今天的課程中討論了「消費主義」。",
    "n."
  ],
  [
    "counselor",
    "輔導員；顧問",
    "We discussed the counselor during today's lesson.",
    "我們在今天的課程中討論了「輔導員；顧問」。",
    "n."
  ],
  [
    "courtesy",
    "禮貌；禮遇",
    "We discussed the courtesy during today's lesson.",
    "我們在今天的課程中討論了「禮貌；禮遇」。",
    "n."
  ],
  [
    "depression",
    "憂鬱；低迷",
    "We discussed the depression during today's lesson.",
    "我們在今天的課程中討論了「憂鬱；低迷」。",
    "n."
  ],
  [
    "diagnosis",
    "診斷",
    "We discussed the diagnosis during today's lesson.",
    "我們在今天的課程中討論了「診斷」。",
    "n."
  ],
  [
    "disability",
    "身心障礙；失能",
    "We discussed the disability during today's lesson.",
    "我們在今天的課程中討論了「身心障礙；失能」。",
    "n."
  ],
  [
    "discrimination",
    "歧視",
    "We discussed the discrimination during today's lesson.",
    "我們在今天的課程中討論了「歧視」。",
    "n."
  ],
  [
    "economics",
    "經濟學",
    "We discussed the economics during today's lesson.",
    "我們在今天的課程中討論了「經濟學」。",
    "n."
  ],
  [
    "election",
    "選舉",
    "We discussed the election during today's lesson.",
    "我們在今天的課程中討論了「選舉」。",
    "n."
  ],
  [
    "essay",
    "文章；短論文",
    "We discussed the essay during today's lesson.",
    "我們在今天的課程中討論了「文章；短論文」。",
    "n."
  ],
  [
    "ethics",
    "倫理學；倫理",
    "We discussed the ethics during today's lesson.",
    "我們在今天的課程中討論了「倫理學；倫理」。",
    "n."
  ],
  [
    "evolution",
    "演化；發展",
    "We discussed the evolution during today's lesson.",
    "我們在今天的課程中討論了「演化；發展」。",
    "n."
  ],
  [
    "fertility",
    "生育力；肥沃度",
    "We discussed the fertility during today's lesson.",
    "我們在今天的課程中討論了「生育力；肥沃度」。",
    "n."
  ],
  [
    "fiction",
    "小說；虛構作品",
    "We discussed the fiction during today's lesson.",
    "我們在今天的課程中討論了「小說；虛構作品」。",
    "n."
  ],
  [
    "fluency",
    "流利度",
    "We discussed the fluency during today's lesson.",
    "我們在今天的課程中討論了「流利度」。",
    "n."
  ],
  [
    "genetics",
    "遺傳學",
    "We discussed the genetics during today's lesson.",
    "我們在今天的課程中討論了「遺傳學」。",
    "n."
  ]
];

// 6,000 字版新增的初階名詞。例句使用統一且文法正確的課堂情境，
// 讓每一張卡片都保有英文例句、中文翻譯與詞性資料。
var BEGINNER_6000_EXTENSION = [
  ["abacus", "算盤"], ["algae", "藻類"], ["alloy", "合金"], ["antenna", "天線"],
  ["aquarium", "水族館"], ["arrow", "箭"], ["asphalt", "瀝青"], ["axle", "車軸"],
  ["bamboo", "竹子"], ["beacon", "信標"], ["beaker", "燒杯"], ["biomass", "生物質"],
  ["blade", "刀刃"], ["bolt", "螺栓"], ["bookmark", "書籤"], ["buckle", "扣環"],
  ["bungalow", "平房"], ["bushel", "蒲式耳"], ["canal", "運河"], ["capsule", "膠囊"],
  ["cardboard", "硬紙板"], ["cargo", "貨物"], ["cartridge", "墨匣"], ["cathedral", "大教堂"],
  ["cement", "水泥"], ["cemetery", "墓園"], ["chalet", "山間小屋"], ["charcoal", "木炭"],
  ["chassis", "底盤"], ["circuit", "電路"], ["clay", "黏土"], ["clipboard", "寫字板"],
  ["cloak", "斗篷"], ["coaster", "杯墊"], ["coil", "線圈"], ["conductor", "導體"],
  ["countertop", "檯面"], ["coupon", "優惠券"], ["crane", "起重機"], ["crater", "隕石坑"],
  ["crate", "木箱"], ["crocodile", "鱷魚"], ["cushion", "軟墊"], ["cylinder", "圓筒"],
  ["decal", "貼花"], ["detergent", "清潔劑"], ["dial", "刻度盤"], ["diesel", "柴油"],
  ["dishwasher", "洗碗機"], ["dispenser", "分配器"], ["drill", "鑽頭"], ["drought", "乾旱"],
  ["duct", "導管"], ["dustbin", "垃圾桶"], ["eagle", "老鷹"], ["elastic", "鬆緊帶"],
  ["embryo", "胚胎"], ["enzyme", "酵素"], ["escort", "護送人員"], ["fertilizer", "肥料"],
  ["fiber", "纖維"], ["flashlight", "手電筒"], ["flask", "燒瓶"], ["foil", "鋁箔"],
  ["freezer", "冷凍庫"], ["funnel", "漏斗"], ["furnace", "熔爐"], ["gadget", "小工具"],
  ["gearbox", "變速箱"], ["generator", "發電機"], ["glacier", "冰川"], ["goggles", "護目鏡"],
  ["greenhouse", "溫室"], ["handset", "話筒"], ["helmet", "安全帽"], ["herb", "香草"],
  ["hinge", "鉸鏈"], ["hook", "掛鉤"], ["horizon", "地平線"], ["hose", "軟管"],
  ["icon", "圖示"], ["jersey", "運動衫"], ["joystick", "搖桿"], ["jug", "水壺"],
  ["kennel", "狗屋"], ["kiosk", "服務亭"], ["lagoon", "潟湖"], ["leaflet", "傳單"],
  ["lens", "鏡片"], ["lifeboat", "救生艇"], ["lighthouse", "燈塔"], ["limestone", "石灰岩"],
  ["locomotive", "火車頭"], ["medal", "獎牌"], ["melody", "旋律"], ["microscope", "顯微鏡"],
  ["mixer", "攪拌機"], ["moat", "護城河"], ["mold", "模具"], ["mosquito", "蚊子"],
  ["mower", "割草機"], ["mushroom", "蘑菇"], ["napkin", "餐巾"], ["needle", "針"],
  ["necklace", "項鍊"], ["nickel", "鎳"], ["nozzle", "噴嘴"], ["orchard", "果園"],
  ["pallet", "棧板"], ["pantry", "食品儲藏室"], ["paperclip", "迴紋針"], ["parachute", "降落傘"],
  ["parcel", "包裹"], ["pavement", "人行道"], ["pedal", "踏板"], ["pesticide", "農藥"],
  ["pipeline", "管線"], ["piston", "活塞"], ["plywood", "夾板"], ["pollen", "花粉"],
  ["pouch", "小袋"], ["pulley", "滑輪"], ["radar", "雷達"], ["raft", "木筏"],
  ["ranch", "牧場"], ["relay", "中繼器"], ["reservoir", "水庫"], ["ribbon", "緞帶"],
  ["rifle", "步槍"], ["robot", "機器人"], ["runway", "跑道"], ["saddle", "馬鞍"],
  ["sandpaper", "砂紙"], ["saucepan", "深鍋"], ["scanner", "掃描器"], ["scooter", "滑板車"],
  ["screw", "螺絲"], ["semaphore", "旗語"], ["sewage", "污水"], ["sidewalk", "人行道"],
  ["silo", "穀倉"], ["skillet", "煎鍋"], ["slider", "滑桿"], ["socket", "插座"],
  ["sofa", "沙發"], ["spotlight", "聚光燈"], ["staple", "訂書針"], ["statue", "雕像"],
  ["stroller", "嬰兒車"], ["tablet", "平板電腦"], ["tire", "輪胎"], ["toaster", "烤麵包機"],
  ["token", "代幣"], ["tractor", "拖拉機"], ["trailer", "拖車"], ["treadmill", "跑步機"],
  ["turbine", "渦輪機"], ["vacuum", "真空吸塵器"], ["valve", "閥門"], ["vessel", "船隻"],
  ["vest", "背心"], ["washer", "墊圈"], ["weapon", "武器"], ["zipper", "拉鍊"],
  ["acne", "痤瘡"], ["acrylic", "壓克力"], ["almond", "杏仁"], ["amplifier", "擴大機"],
  ["anthem", "國歌"], ["aroma", "香氣"], ["avocado", "酪梨"], ["boarding", "登機"],
  ["bouquet", "花束"], ["brewery", "啤酒廠"], ["browser", "瀏覽器"], ["cabbage", "高麗菜"],
  ["chandelier", "吊燈"], ["chapel", "小教堂"], ["cocoa", "可可"], ["colony", "殖民地"],
  ["comet", "彗星"], ["condom", "保險套"], ["condominium", "公寓大廈"], ["console", "控制台"],
  ["corridor", "走廊"], ["couch", "長沙發"], ["courthouse", "法院"], ["cousin", "表親"],
  ["cream", "乳霜"], ["creek", "小溪"], ["cricket", "板球"], ["cyclist", "自行車騎士"],
  ["daylight", "日光"], ["dealer", "經銷商"], ["diner", "小餐館"], ["disco", "迪斯可舞廳"],
  ["dock", "碼頭"], ["dolphin", "海豚"], ["duck", "鴨子"], ["earphone", "耳機"],
  ["elf", "精靈"], ["embassy", "大使館"], ["emerald", "祖母綠"], ["estate", "房地產"],
  ["fireplace", "壁爐"], ["fisherman", "漁夫"], ["fox", "狐狸"], ["frog", "青蛙"],
  ["gazebo", "涼亭"], ["gemstone", "寶石"], ["ghost", "鬼"], ["golfer", "高爾夫球手"],
  ["grape", "葡萄"], ["hamburger", "漢堡"], ["jam", "果醬"], ["jazz", "爵士樂"],
  ["jeep", "吉普車"], ["kiln", "窯"], ["kitten", "小貓"], ["limousine", "禮車"],
  ["linen", "亞麻布"], ["lion", "獅子"], ["lipstick", "口紅"], ["lodge", "旅館"],
  ["lounge", "休息室"], ["magnet", "磁鐵"], ["mall", "購物中心"], ["mammal", "哺乳動物"],
  ["mansion", "豪宅"], ["messenger", "信差"], ["modem", "數據機"], ["monk", "僧侶"],
  ["monument", "紀念碑"], ["motel", "汽車旅館"], ["nut", "堅果"], ["olive", "橄欖"],
  ["painter", "畫家"], ["palace", "宮殿"], ["panda", "貓熊"], ["parrot", "鸚鵡"],
  ["pawn", "棋子"], ["peanut", "花生"], ["pear", "梨子"], ["pen", "鋼筆"],
  ["pencil", "鉛筆"], ["pet", "寵物"], ["pie", "派"], ["playground", "遊樂場"],
  ["pony", "小馬"], ["poster", "海報"]
];
DECKS.beginner.push.apply(DECKS.beginner, BEGINNER_6000_EXTENSION.map(function(card){
  return [card[0], card[1], "We discussed the topic of " + card[0] + " in class today.", "我們今天在課堂上討論了「" + card[1] + "」這個主題。", "n."];
}));
DECKS.beginner.forEach(function(card){
  PARTS_OF_SPEECH[String(card[0]).trim().toLowerCase()] = card[4];
});
