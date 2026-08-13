/*
 * ??????? 2378 ???
 * ??????[??, ????, ????, ????, ??]?
 * ??????????????????????
 */
var DECKS = (typeof DECKS === "object" && DECKS) ? DECKS : {};
var PARTS_OF_SPEECH = (typeof PARTS_OF_SPEECH === "object" && PARTS_OF_SPEECH) ? PARTS_OF_SPEECH : Object.create(null);
DECKS.intermediate = [
  [
    "accommodation",
    "食宿",
    "The tour price includes meals and accommodation.",
    "這趟旅遊的價格包含餐飲和住宿。",
    "n."
  ],
  [
    "accomplishment",
    "成就",
    "Finishing the marathon was a huge accomplishment for her.",
    "完成馬拉松對她來說是個很大的成就。",
    "n."
  ],
  [
    "alternative",
    "可替代的；兩者擇一",
    "We need to find an alternative solution.",
    "我們需要找到一個替代方案。",
    "n.／adj."
  ],
  [
    "appliance",
    "家用電器",
    "The kitchen comes with all major appliances.",
    "這間廚房配有所有主要的家用電器。",
    "n."
  ],
  [
    "approximately",
    "大致；大約",
    "The trip takes approximately three hours by car.",
    "這趟車程大約需要三個小時。",
    "adv."
  ],
  [
    "campaign",
    "宣傳活動",
    "The company launched a new marketing campaign.",
    "這家公司推出了一項新的行銷宣傳活動。",
    "n.／v."
  ],
  [
    "ceremony",
    "典禮；儀式",
    "The graduation ceremony will be held in June.",
    "畢業典禮將於六月舉行。",
    "n."
  ],
  [
    "competence",
    "稱職；勝任",
    "Her competence in the role impressed the manager.",
    "她在這個職位上的稱職表現讓經理印象深刻。",
    "n."
  ],
  [
    "complete",
    "十足的；完整的",
    "Please submit a complete set of documents.",
    "請提交一整套完整的文件。",
    "v.／adj."
  ],
  [
    "confirmation",
    "證實；證明",
    "We received a confirmation email for the booking.",
    "我們收到了一封訂位確認的電子郵件。",
    "n."
  ],
  [
    "convey",
    "傳達",
    "The letter conveys her gratitude clearly.",
    "這封信清楚地傳達了她的感激之情。",
    "v."
  ],
  [
    "convincingly",
    "令人信服地",
    "He argued his point convincingly during the debate.",
    "他在辯論中極具說服力地闡述了自己的觀點。",
    "adv."
  ],
  [
    "cooperation",
    "協助；配合",
    "The project succeeded thanks to close cooperation between teams.",
    "這項專案的成功得益於各團隊之間的密切合作。",
    "n."
  ],
  [
    "duplicate",
    "贗品",
    "The museum keeps a duplicate of the painting on display.",
    "這間博物館展示了這幅畫的一件複製品。",
    "n.／v.／adj."
  ],
  [
    "enthusiasm",
    "熱忱",
    "She approached the new job with great enthusiasm.",
    "她以極大的熱忱投入這份新工作。",
    "n."
  ],
  [
    "entitle",
    "權利",
    "This ticket entitles you to a free drink.",
    "這張票讓你有權享有一杯免費飲料。",
    "v."
  ],
  [
    "estimate",
    "估計",
    "The mechanic gave us an estimate for the repair.",
    "技師給了我們維修費用的估價。",
    "n.／v."
  ],
  [
    "extracurricular",
    "課外的",
    "She joined several extracurricular activities in college.",
    "她在大學參加了好幾項課外活動。",
    "adj."
  ],
  [
    "etiquette",
    "禮儀",
    "Good table etiquette is important at formal dinners.",
    "良好的餐桌禮儀在正式晚宴上很重要。",
    "n."
  ],
  [
    "fuel",
    "燃料",
    "The plane stopped to refuel before the next flight.",
    "這架飛機在下一段航程前先加了燃料。",
    "n.／v."
  ],
  [
    "impose",
    "禁令；制裁",
    "The government decided to impose new import taxes.",
    "政府決定對進口商品課徵新稅。",
    "v."
  ],
  [
    "innovative",
    "新穎的",
    "The startup is known for its innovative products.",
    "這家新創公司以其創新的產品聞名。",
    "adj."
  ],
  [
    "inspection",
    "視察",
    "The factory passed its annual safety inspection.",
    "這間工廠通過了年度安全視察。",
    "n."
  ],
  [
    "intelligent",
    "有智慧的",
    "The dog is remarkably intelligent and easy to train.",
    "這隻狗異常聰明，很容易訓練。",
    "adj."
  ],
  [
    "launch",
    "發起；出版",
    "The company will launch its new app next month.",
    "這家公司下個月將推出他們的新應用程式。",
    "n.／v."
  ],
  [
    "manufacturer",
    "廠商",
    "Please contact the manufacturer for warranty details.",
    "保固細節請洽詢製造商。",
    "n."
  ],
  [
    "layout",
    "佈置；編排",
    "The office layout was redesigned for better teamwork.",
    "辦公室的佈局經過重新設計以促進團隊合作。",
    "n."
  ],
  [
    "maintenance",
    "維修；保養",
    "Regular maintenance keeps the machines running smoothly.",
    "定期保養能讓機器運作順暢。",
    "n."
  ],
  [
    "occupation",
    "職業",
    "Please state your occupation on the form.",
    "請在表格上填寫你的職業。",
    "n."
  ],
  [
    "organization",
    "機構；團體",
    "She volunteers for a local charity organization.",
    "她在當地一個慈善機構擔任志工。",
    "n."
  ],
  [
    "philosophy",
    "哲學",
    "He studied philosophy before switching to law.",
    "他在轉讀法律之前主修哲學。",
    "n."
  ],
  [
    "permit",
    "許可",
    "You need a permit to park in this area.",
    "你需要許可證才能在這個區域停車。",
    "n.／v."
  ],
  [
    "photography",
    "攝影技術",
    "She took a course in digital photography last year.",
    "她去年上了一門數位攝影課程。",
    "n."
  ],
  [
    "postage",
    "郵資",
    "Please add extra postage for international shipping.",
    "國際運送請加上額外的郵資。",
    "n."
  ],
  [
    "potential",
    "潛在的",
    "The manager saw great potential in the new hire.",
    "經理在這位新進員工身上看到了很大的潛力。",
    "n.／adj."
  ],
  [
    "precise",
    "精確的；恰好的",
    "We need precise measurements before cutting the wood.",
    "裁切木材前我們需要精確的測量數據。",
    "adj."
  ],
  [
    "presentation",
    "出示；外觀",
    "She gave a confident presentation to the board.",
    "她向董事會做了一場自信的簡報。",
    "n."
  ],
  [
    "priority",
    "優先考慮的事",
    "Finishing the report is our top priority this week.",
    "完成這份報告是我們這星期的第一優先事項。",
    "n."
  ],
  [
    "procedure",
    "步驟；手續",
    "Please follow the correct procedure when filing a claim.",
    "申請理賠時請依照正確的手續辦理。",
    "n."
  ],
  [
    "purchase",
    "採購",
    "The company plans to purchase new office equipment next month.",
    "這家公司計畫下個月採購新的辦公設備。",
    "n.／v."
  ],
  [
    "prior to",
    "先於",
    "Please arrive at the venue prior to the start of the event.",
    "請在活動開始前抵達場地。",
    "prep."
  ],
  [
    "profile",
    "人物介紹",
    "The magazine featured a profile of the young entrepreneur.",
    "這本雜誌刊登了一篇關於這位年輕創業家的人物介紹。",
    "n.／v."
  ],
  [
    "private",
    "私有的；私密的",
    "This is a private matter that I'd rather not discuss.",
    "這是一件私人的事，我不太想討論。",
    "n.／adj."
  ],
  [
    "projector",
    "投影機",
    "The projector in the meeting room isn't working today.",
    "會議室裡的投影機今天故障了。",
    "n."
  ],
  [
    "red carpet",
    "隆重",
    "The company rolled out the red carpet for its biggest client.",
    "公司為最大的客戶準備了隆重的接待。",
    "n.／adj."
  ],
  [
    "recognize",
    "辨識出",
    "I almost didn't recognize her with her new haircut.",
    "她剪了新髮型，我差點認不出她來。",
    "v."
  ],
  [
    "punctual",
    "守時的；如期的",
    "He is always punctual, arriving five minutes early to every meeting.",
    "他總是很守時，每次開會都提早五分鐘到。",
    "adj."
  ],
  [
    "receipt",
    "收據；收入",
    "Please keep your receipt in case you need to return the item.",
    "請保留收據，以防你需要退貨。",
    "n.／v."
  ],
  [
    "semester",
    "一學期",
    "She studied abroad for one semester during college.",
    "她在大學時出國留學了一個學期。",
    "n."
  ],
  [
    "reception",
    "接待",
    "Guests were greeted warmly at the hotel reception.",
    "賓客在飯店的接待處受到熱情的迎接。",
    "n."
  ],
  [
    "significant",
    "重大的；影響深遠的",
    "The new law will have a significant impact on small businesses.",
    "這項新法對小型企業將產生重大影響。",
    "adj."
  ],
  [
    "regret",
    "懊悔；惋惜",
    "I regret not taking that job offer years ago.",
    "我很後悔多年前沒有接受那份工作邀約。",
    "n.／v."
  ],
  [
    "slide",
    "滑行；下跌",
    "Stock prices continued to slide throughout the afternoon.",
    "股價整個下午持續下跌。",
    "n.／v."
  ],
  [
    "reliable",
    "可靠的",
    "We need a reliable partner for this long-term project.",
    "這項長期專案我們需要一位可靠的合作夥伴。",
    "adj."
  ],
  [
    "socialize",
    "交誼",
    "She enjoys socializing with colleagues after work.",
    "她喜歡下班後和同事交際應酬。",
    "v."
  ],
  [
    "reminder",
    "提醒；聯想",
    "This photo is a reminder of our trip to Italy.",
    "這張照片讓人想起我們去義大利的那趟旅行。",
    "n."
  ],
  [
    "squeeze",
    "擠壓",
    "Squeeze the lemon over the fish before serving.",
    "上菜前把檸檬汁擠在魚上。",
    "n.／v."
  ],
  [
    "representative",
    "典型的；代表",
    "A sales representative will contact you within 24 hours.",
    "一位業務代表將在 24 小時內與你聯繫。",
    "n.／adj."
  ],
  [
    "storage",
    "儲藏；保管",
    "We rented extra storage space for the old files.",
    "我們租了額外的儲藏空間來存放舊檔案。",
    "n."
  ],
  [
    "requirement",
    "必需品；條件",
    "Fluent English is a requirement for this position.",
    "流利的英語是這個職位的必要條件。",
    "n."
  ],
  [
    "strengthen",
    "增強；改善",
    "Regular practice will strengthen your speaking skills.",
    "規律的練習會增強你的口說能力。",
    "v."
  ],
  [
    "straw",
    "稻草；吸管",
    "Please use a paper straw instead of a plastic one.",
    "請使用紙吸管而不是塑膠吸管。",
    "n.／v.／adj."
  ],
  [
    "strict",
    "嚴厲的",
    "The teacher is strict but fair with all her students.",
    "這位老師對所有學生都很嚴格但公平。",
    "adj."
  ],
  [
    "stress",
    "壓力；緊張",
    "Too much stress at work can affect your health.",
    "工作上過多的壓力會影響你的健康。",
    "n.／v."
  ],
  [
    "submit",
    "服從；提交",
    "Please submit your application before the deadline.",
    "請在截止期限前提交你的申請。",
    "v."
  ],
  [
    "strike",
    "罷工",
    "Workers went on strike to demand better pay.",
    "工人們罷工要求更好的薪資。",
    "n.／v."
  ],
  [
    "summary",
    "摘要",
    "Please write a short summary of the meeting for the team.",
    "請為團隊寫一份會議的簡短摘要。",
    "n.／adj."
  ],
  [
    "supply",
    "供應量",
    "The factory increased its supply to meet growing demand.",
    "這間工廠增加了供應量以因應日益成長的需求。",
    "n.／v."
  ],
  [
    "submission",
    "屈服；聽從",
    "The deadline for submission has been extended to Friday.",
    "投稿的截止日期已延長至星期五。",
    "n."
  ],
  [
    "take into account",
    "斟酌",
    "We need to take into account the client's budget before proposing a plan.",
    "在提出方案前，我們需要考慮客戶的預算。",
    "phr.v."
  ],
  [
    "urgent",
    "緊急的；迫切的",
    "This is an urgent request that needs immediate attention.",
    "這是一項需要立即處理的緊急請求。",
    "adj."
  ],
  [
    "take up",
    "佔用",
    "The new furniture takes up too much space in the office.",
    "新的家具在辦公室裡佔用了太多空間。",
    "phr.v."
  ],
  [
    "vet",
    "獸醫",
    "We took the puppy to the vet for its first checkup.",
    "我們帶小狗去看獸醫做第一次健康檢查。",
    "n.／v."
  ],
  [
    "vice president",
    "副首長",
    "She was promoted to vice president of marketing last year.",
    "她去年被升任為行銷部副總裁。",
    "n."
  ],
  [
    "video conference",
    "視訊會議",
    "We held a video conference with our overseas branch.",
    "我們與海外分公司舉行了一場視訊會議。",
    "n."
  ],
  [
    "voucher",
    "憑證",
    "You can use this voucher for a free coffee at any branch.",
    "你可以在任何分店用這張憑證兌換一杯免費咖啡。",
    "n."
  ],
  [
    "vinegar",
    "食用醋",
    "Add a splash of vinegar to balance the flavor.",
    "加一點醋來平衡味道。",
    "n."
  ],
  [
    "a game of cat and mouse",
    "貓捉老鼠遊戲",
    "The negotiation felt like a game of cat and mouse between the two sides.",
    "這場談判就像雙方在玩一場貓捉老鼠的遊戲。",
    "n."
  ],
  [
    "a leap of faith",
    "放手一搏",
    "Quitting her job to start a business was a real leap of faith.",
    "辭掉工作去創業對她來說真的是放手一搏。",
    "n."
  ],
  [
    "aboard",
    "船上",
    "Passengers were welcomed aboard the ship by the crew.",
    "船員在船上歡迎乘客登船。",
    "adv."
  ],
  [
    "absolutely",
    "絕對地",
    "I absolutely agree with your suggestion.",
    "我完全同意你的建議。",
    "adv."
  ],
  [
    "accident",
    "事故",
    "Traffic was delayed due to an accident on the highway.",
    "因為高速公路上發生事故，交通延誤了。",
    "n."
  ],
  [
    "account",
    "認定",
    "We must account for every expense in the budget report.",
    "我們必須在預算報告中說明每一筆支出。",
    "n.／v."
  ],
  [
    "accurate",
    "準確",
    "Please make sure the figures in the report are accurate.",
    "請確保報告中的數字是準確的。",
    "adj."
  ],
  [
    "achieve",
    "達到",
    "She worked hard to achieve her goal of becoming a manager.",
    "她努力工作以達成成為經理的目標。",
    "v."
  ],
  [
    "acre",
    "英畝",
    "The farm covers more than one hundred acres of land.",
    "這座農場佔地超過一百英畝。",
    "n."
  ],
  [
    "action",
    "行動",
    "The company took quick action to fix the software bug.",
    "這家公司迅速採取行動修復了這個軟體錯誤。",
    "n.／v."
  ],
  [
    "adapt",
    "適應",
    "It took her a while to adapt to the new work environment.",
    "她花了一段時間才適應新的工作環境。",
    "v."
  ],
  [
    "additional",
    "另外",
    "Please let us know if you need any additional information.",
    "如果你需要任何額外的資訊，請告訴我們。",
    "adj."
  ],
  [
    "admission",
    "承認",
    "His admission of the mistake surprised everyone.",
    "他承認犯錯讓所有人都感到驚訝。",
    "n."
  ],
  [
    "admit",
    "承認",
    "He finally admitted that he had made a mistake.",
    "他終於承認自己犯了一個錯誤。",
    "v."
  ],
  [
    "adopt",
    "採用",
    "The company decided to adopt a new management system.",
    "這家公司決定採用一套新的管理系統。",
    "v."
  ],
  [
    "advance",
    "前進",
    "The team made great advance on the project this week.",
    "團隊這星期在這個專案上取得了很大的進展。",
    "n.／v.／adj."
  ],
  [
    "advancement",
    "進步",
    "Technological advancement has changed the way we work.",
    "科技的進步改變了我們的工作方式。",
    "n."
  ],
  [
    "adventure",
    "冒險",
    "They went on an exciting adventure through the mountains.",
    "他們展開了一場穿越山區的刺激冒險。",
    "n.／v."
  ],
  [
    "advertising",
    "廣告",
    "The company spends a lot on online advertising.",
    "這家公司在線上廣告上投入了大量資金。",
    "n."
  ],
  [
    "affiliate",
    "加上",
    "The store is an affiliate of a larger retail chain.",
    "這間店隸屬於一個更大的零售連鎖體系。",
    "n.／v."
  ],
  [
    "affordable",
    "實惠的",
    "We're looking for affordable housing near the city center.",
    "我們正在尋找市中心附近價格實惠的住房。",
    "adj."
  ],
  [
    "agent",
    "經紀人",
    "Her agent negotiated a better contract for her.",
    "她的經紀人為她談成了一份更好的合約。",
    "n."
  ],
  [
    "aggressive",
    "積極的",
    "The company launched an aggressive marketing campaign.",
    "這家公司推出了一場積極強勢的行銷活動。",
    "adj."
  ],
  [
    "agriculture",
    "農業",
    "Agriculture remains a major industry in this region.",
    "農業仍是這個地區的主要產業。",
    "n."
  ],
  [
    "aid",
    "幫忙",
    "The organization provides aid to families in need.",
    "這個組織為有需要的家庭提供援助。",
    "n.／v."
  ],
  [
    "airline",
    "航空",
    "The airline announced new routes to Southeast Asia.",
    "這家航空公司宣布開闢飛往東南亞的新航線。",
    "n."
  ],
  [
    "alarming",
    "驚人的",
    "The report showed an alarming rise in local unemployment.",
    "這份報告顯示當地失業率出現驚人的上升。",
    "adj."
  ],
  [
    "alcoholic",
    "酒精",
    "The bar serves both alcoholic and non-alcoholic drinks.",
    "這間酒吧供應含酒精和不含酒精的飲料。",
    "n.／adj."
  ],
  [
    "alien",
    "外僑",
    "The film tells the story of an alien visiting Earth.",
    "這部電影講述了一個外星人造訪地球的故事。",
    "n.／v.／adj."
  ],
  [
    "aluminum",
    "鋁",
    "The cans are made of recyclable aluminum.",
    "這些罐子是用可回收的鋁製成的。",
    "n."
  ],
  [
    "amateur",
    "業餘",
    "He started as an amateur photographer before going professional.",
    "他一開始是業餘攝影師，後來才轉為專業。",
    "n.／adj."
  ],
  [
    "amaze",
    "驚奇",
    "The magician's tricks amazed the entire audience.",
    "這位魔術師的把戲讓全場觀眾都感到驚奇。",
    "v."
  ],
  [
    "ambitious",
    "野心勃勃的",
    "She set an ambitious goal to double sales this year.",
    "她設定了一個野心勃勃的目標，要在今年讓銷售額翻倍。",
    "adj."
  ],
  [
    "amount",
    "分量",
    "The amount of paperwork has increased significantly.",
    "文書作業的份量已經大幅增加。",
    "n.／v."
  ],
  [
    "analyze",
    "分析",
    "The team will analyze the survey results next week.",
    "團隊下週將分析這份調查的結果。",
    "v."
  ],
  [
    "ancestor",
    "祖先",
    "Her ancestors immigrated to this country over a century ago.",
    "她的祖先在一個多世紀前移民到這個國家。",
    "n."
  ],
  [
    "ancient",
    "古老的",
    "The museum displays artifacts from an ancient civilization.",
    "這間博物館展出來自古文明的文物。",
    "n.／adj."
  ],
  [
    "announcement",
    "公告",
    "The company made an important announcement this morning.",
    "這家公司今天早上發布了一項重要公告。",
    "n."
  ],
  [
    "annoy",
    "惹惱",
    "Loud noises at night really annoy the neighbors.",
    "夜間的噪音真的很惹惱鄰居。",
    "v."
  ],
  [
    "anxiously",
    "焦急地",
    "She waited anxiously for the exam results.",
    "她焦急地等待考試結果。",
    "adv."
  ],
  [
    "apparent",
    "明顯的",
    "It became apparent that the plan wouldn't work.",
    "很明顯這個計畫行不通。",
    "adj."
  ],
  [
    "appeal",
    "申訴",
    "The company decided to appeal the court's decision.",
    "這家公司決定對法院的判決提出申訴。",
    "n.／v."
  ],
  [
    "appearance",
    "容貌",
    "First appearances can be misleading sometimes.",
    "第一印象有時候可能會讓人誤判。",
    "n."
  ],
  [
    "apply",
    "申請",
    "She plans to apply for a master's program next year.",
    "她打算明年申請一個碩士學程。",
    "v."
  ],
  [
    "appropriate",
    "合適的",
    "Please wear appropriate clothing for the interview.",
    "面試請穿著合適的服裝。",
    "v.／adj."
  ],
  [
    "approval",
    "贊同",
    "The project needs approval from senior management.",
    "這項專案需要高階管理層的核准。",
    "n."
  ],
  [
    "area",
    "區域",
    "This area of the city is known for its restaurants.",
    "這座城市的這個區域以餐廳聞名。",
    "n."
  ],
  [
    "arguably",
    "按理說",
    "This is arguably the best restaurant in town.",
    "這間餐廳按理說是這個城鎮上最好的餐廳。",
    "adv."
  ],
  [
    "armed",
    "武裝的",
    "Armed guards were stationed at the entrance.",
    "武裝警衛駐守在入口處。",
    "adj."
  ],
  [
    "arouse",
    "激發",
    "The mystery novel aroused her curiosity from the first page.",
    "這本懸疑小說從第一頁就激起了她的好奇心。",
    "v."
  ],
  [
    "arrest",
    "逮捕",
    "Police made an arrest shortly after the incident.",
    "警方在事件發生後不久就進行了逮捕。",
    "n.／v."
  ],
  [
    "article",
    "文章",
    "She wrote an article about remote work trends.",
    "她寫了一篇關於遠距工作趨勢的文章。",
    "n.／v."
  ],
  [
    "ash",
    "灰燼",
    "The volcano covered the town in a layer of ash.",
    "這座火山讓小鎮覆蓋了一層火山灰。",
    "n.／v."
  ],
  [
    "aspect",
    "方面",
    "Cost is just one aspect of the decision.",
    "成本只是這項決定的其中一個面向。",
    "n."
  ],
  [
    "assemble",
    "組合",
    "It took an hour to assemble the new bookshelf.",
    "組裝這個新書架花了一個小時。",
    "v."
  ],
  [
    "assembly",
    "裝配",
    "The factory has an efficient assembly line for its products.",
    "這間工廠有一條高效率的產品裝配線。",
    "n."
  ],
  [
    "assist",
    "協助",
    "Please let me know how I can assist you.",
    "請告訴我可以怎麼協助你。",
    "n.／v."
  ],
  [
    "associate",
    "相關",
    "People often associate the brand with high quality.",
    "人們常把這個品牌跟高品質聯想在一起。",
    "n.／v.／adj."
  ],
  [
    "atmosphere",
    "氣氛",
    "The restaurant has a cozy, relaxed atmosphere.",
    "這間餐廳有著溫馨放鬆的氣氛。",
    "n."
  ],
  [
    "attempt",
    "嘗試",
    "This was her third attempt to pass the exam.",
    "這是她第三次嘗試通過這場考試。",
    "n.／v."
  ],
  [
    "attend",
    "出席",
    "All employees are required to attend the training session.",
    "所有員工都必須出席這場培訓課程。",
    "v."
  ],
  [
    "attitude",
    "態度",
    "His positive attitude inspires everyone on the team.",
    "他積極的態度激勵了團隊裡的每個人。",
    "n."
  ],
  [
    "attract",
    "吸引",
    "The new store design attracts a lot of foot traffic.",
    "這間新店的設計吸引了很多人潮。",
    "v."
  ],
  [
    "author",
    "作者",
    "The author signed copies of her new book at the event.",
    "這位作者在活動中為她的新書簽名。",
    "n.／v."
  ],
  [
    "authority",
    "權威",
    "She is recognized as an authority in environmental science.",
    "她被公認為環境科學領域的權威。",
    "n."
  ],
  [
    "automatic",
    "自動的",
    "The doors have an automatic sensor.",
    "這扇門有自動感應器。",
    "adj."
  ],
  [
    "average",
    "平均",
    "The average commute time here is about thirty minutes.",
    "這裡的平均通勤時間大約是三十分鐘。",
    "n.／v.／adj."
  ],
  [
    "aware",
    "察覺",
    "Please be aware that the office will close early today.",
    "請注意，辦公室今天會提早關門。",
    "adj."
  ],
  [
    "become／to be consumed with",
    "被～吞噬",
    "She became consumed with worry after missing the flight.",
    "錯過班機後，她被憂慮徹底吞噬。",
    "phr.v."
  ],
  [
    "bacon",
    "燻肉",
    "He ordered eggs and bacon for breakfast.",
    "他點了蛋和培根當早餐。",
    "n."
  ],
  [
    "ballet",
    "芭蕾",
    "She has taken ballet lessons since she was five.",
    "她從五歲開始上芭蕾舞課。",
    "n."
  ],
  [
    "banana split",
    "香蕉船",
    "They shared a banana split for dessert.",
    "他們分享了一份香蕉船當甜點。",
    "n."
  ],
  [
    "barely",
    "僅僅",
    "We barely made it to the airport in time.",
    "我們差一點就趕不上飛機了。",
    "adv."
  ],
  [
    "barrel",
    "桶子",
    "The wine is aged in oak barrels for two years.",
    "這款酒在橡木桶中陳釀兩年。",
    "n.／v."
  ],
  [
    "barrier",
    "障礙",
    "Language can be a barrier when working with international clients.",
    "與國際客戶合作時，語言可能會是一種障礙。",
    "n."
  ],
  [
    "basis",
    "基礎",
    "The report is based on data collected on a monthly basis.",
    "這份報告是根據每月蒐集的資料所撰寫的。",
    "n."
  ],
  [
    "battery",
    "電池",
    "Please charge the battery before the trip.",
    "出發前請先為電池充電。",
    "n."
  ],
  [
    "bay",
    "海灣",
    "The hotel offers a beautiful view of the bay.",
    "這間飯店可以欣賞到海灣的美麗景色。",
    "n.／v.／adj."
  ],
  [
    "beast",
    "野獸",
    "The documentary follows a wild beast in its natural habitat.",
    "這部紀錄片跟拍一隻野獸在其自然棲息地的生活。",
    "n."
  ],
  [
    "belly",
    "肚子",
    "The baby giggled when tickled on the belly.",
    "寶寶的肚子被搔癢時咯咯地笑了。",
    "n.／v."
  ],
  [
    "berry",
    "果實",
    "We picked fresh berries from the garden.",
    "我們從花園裡摘了新鮮的莓果。",
    "n.／v."
  ],
  [
    "bidding",
    "投標",
    "Several companies took part in the bidding for the contract.",
    "好幾家公司參與了這份合約的投標。",
    "n."
  ],
  [
    "billion",
    "十億",
    "The company's revenue surpassed one billion dollars last year.",
    "這家公司去年的營收超過了十億美元。",
    "n.／adj."
  ],
  [
    "biography",
    "傳記",
    "She recently published a biography of a famous scientist.",
    "她最近出版了一位知名科學家的傳記。",
    "n."
  ],
  [
    "biscuit",
    "餅乾",
    "She served tea with biscuits in the afternoon.",
    "她在下午端出茶和餅乾。",
    "n."
  ],
  [
    "black and white",
    "黑白",
    "The exhibit features black and white photographs from the 1950s.",
    "這場展覽展出 1950 年代的黑白照片。",
    "n.／adj."
  ],
  [
    "bloom",
    "開花",
    "The cherry blossoms bloom every spring in this park.",
    "這座公園裡的櫻花每年春天都會開花。",
    "n.／v."
  ],
  [
    "blossom",
    "開花",
    "The apple trees blossom beautifully in early April.",
    "蘋果樹在四月初開出美麗的花朵。",
    "n.／v."
  ],
  [
    "border",
    "邊界",
    "The two countries share a long border.",
    "這兩個國家共享一條漫長的邊界。",
    "n.／v."
  ],
  [
    "branch",
    "分支",
    "The bank opened a new branch downtown.",
    "這家銀行在市區開了一間新分行。",
    "n.／v."
  ],
  [
    "break out",
    "爆發",
    "A fire broke out in the warehouse last night.",
    "昨晚倉庫爆發了一場火災。",
    "phr.v."
  ],
  [
    "brilliant",
    "燦爛",
    "She came up with a brilliant idea for the campaign.",
    "她想出了一個為這場活動而設的絕妙點子。",
    "adj."
  ],
  [
    "bring sth. to life",
    "使～更生動",
    "The illustrations really bring the story to life.",
    "這些插畫讓這個故事變得更加生動。",
    "phr.v."
  ],
  [
    "broadcast",
    "播放",
    "The concert will be broadcast live online.",
    "這場演唱會將會在線上實況播出。",
    "n.／v."
  ],
  [
    "brutal",
    "殘酷",
    "The weather was brutal during the winter storm.",
    "這場冬季暴風雪期間天氣十分惡劣。",
    "adj."
  ],
  [
    "buffet",
    "自助餐",
    "The hotel offers a breakfast buffet every morning.",
    "這間飯店每天早上都提供自助早餐。",
    "n.／v."
  ],
  [
    "bulb",
    "燈泡",
    "The light bulb in the hallway needs to be replaced.",
    "走廊裡的燈泡需要更換了。",
    "n."
  ],
  [
    "cancellation",
    "消除",
    "We received a cancellation fee after changing our booking.",
    "我們更改預約後被收取了取消費用。",
    "n."
  ],
  [
    "candidate",
    "候選人",
    "Three candidates applied for the marketing position.",
    "有三位候選人申請了這個行銷職位。",
    "n."
  ],
  [
    "capable",
    "能力",
    "She is fully capable of managing the project alone.",
    "她完全有能力獨自管理這個專案。",
    "adj."
  ],
  [
    "capture",
    "捕獲",
    "The photo perfectly captures the excitement of the moment.",
    "這張照片完美捕捉了那一刻的興奮氛圍。",
    "n.／v."
  ],
  [
    "care for sb",
    "關心",
    "She has always cared for her younger siblings.",
    "她一直都很關心她的弟弟妹妹們。",
    "phr.v."
  ],
  [
    "career",
    "事業",
    "He built a successful career in finance.",
    "他在金融業建立了一番成功的事業。",
    "n.／v."
  ],
  [
    "carve out",
    "開拓",
    "She managed to carve out a niche in the fashion industry.",
    "她成功在時尚產業裡開拓出一片屬於自己的天地。",
    "phr.v."
  ],
  [
    "case",
    "案子",
    "The lawyer is preparing for a difficult case next month.",
    "這位律師正在為下個月一件棘手的案子做準備。",
    "n.／v."
  ],
  [
    "catch",
    "抓住",
    "He had to run to catch the last train.",
    "他必須用跑的才趕得上最後一班火車。",
    "n.／v."
  ],
  [
    "cause",
    "原因",
    "The exact cause of the delay is still unknown.",
    "延誤的確切原因目前仍不清楚。",
    "n.／v."
  ],
  [
    "celebration",
    "慶典",
    "The town holds a big celebration every summer.",
    "這座小鎮每年夏天都會舉辦盛大的慶典。",
    "n."
  ],
  [
    "century",
    "世紀",
    "The building has stood for more than a century.",
    "這棟建築已經矗立了超過一個世紀。",
    "n."
  ],
  [
    "chain",
    "鏈子",
    "She wore a delicate gold chain around her neck.",
    "她脖子上戴著一條精緻的金鍊子。",
    "n.／v."
  ],
  [
    "challenge",
    "挑戰",
    "Learning a new language is a fun challenge for many adults.",
    "對許多成年人來說，學習新語言是一項有趣的挑戰。",
    "n.／v."
  ],
  [
    "chamber",
    "議院",
    "The bill was passed by both chambers of parliament.",
    "這項法案獲得議會兩院的通過。",
    "n.／v."
  ],
  [
    "channel",
    "引導",
    "The manager tried to channel the team's energy into the new project.",
    "經理試圖將團隊的精力引導到這個新專案上。",
    "n.／v."
  ],
  [
    "chapter",
    "章節",
    "Please read the next chapter before our discussion.",
    "請在我們討論之前先讀完下一章。",
    "n."
  ],
  [
    "character",
    "人物",
    "The novel's main character faces many difficult choices.",
    "這本小說的主角面臨許多艱難的抉擇。",
    "n.／v."
  ],
  [
    "characteristic",
    "特徵",
    "Curiosity is one of her most notable characteristics.",
    "好奇心是她最顯著的特質之一。",
    "n.／adj."
  ],
  [
    "charm",
    "魅力",
    "The old town square is full of charm and history.",
    "這座舊城廣場充滿了魅力與歷史。",
    "n.／v."
  ],
  [
    "cheerful",
    "愉快",
    "She greeted every customer with a cheerful smile.",
    "她總是用愉快的笑容迎接每一位顧客。",
    "adj."
  ],
  [
    "chemical",
    "化學",
    "The factory follows strict rules for handling chemical waste.",
    "這間工廠在處理化學廢棄物時遵循嚴格的規定。",
    "n.／adj."
  ],
  [
    "cherry",
    "櫻桃",
    "We picked cherries from the orchard last weekend.",
    "我們上週末在果園裡摘了櫻桃。",
    "n.／adj."
  ],
  [
    "chicken breast",
    "雞胸肉",
    "Grilled chicken breast is a popular choice for a healthy lunch.",
    "烤雞胸肉是健康午餐的熱門選擇。",
    "n."
  ],
  [
    "chip",
    "切開",
    "Be careful not to chip the edge of the plate.",
    "小心不要把盤子的邊緣弄缺角。",
    "n.／v."
  ],
  [
    "chirp",
    "嘰嘰喳喳",
    "Birds began to chirp outside as the sun rose.",
    "太陽升起時，外頭的鳥兒開始嘰嘰喳喳地叫。",
    "n.／v."
  ],
  [
    "chopped",
    "斬除",
    "Add the chopped onions to the pan and stir.",
    "把切碎的洋蔥加進鍋裡並攪拌。",
    "adj."
  ],
  [
    "claim",
    "要求",
    "She filed a claim with the insurance company after the accident.",
    "她在意外發生後向保險公司提出理賠申請。",
    "n.／v."
  ],
  [
    "clear",
    "明確",
    "Please give me clear instructions before I start.",
    "請在我開始之前給我明確的指示。",
    "n.／v.／adj.／adv."
  ],
  [
    "click",
    "點擊",
    "Click the button below to confirm your order.",
    "點擊下方的按鈕以確認你的訂單。",
    "n.／v."
  ],
  [
    "clothing",
    "服裝",
    "The store sells affordable clothing for the whole family.",
    "這間店販售全家人都負擔得起的服裝。",
    "n."
  ],
  [
    "clue",
    "線索",
    "Detectives found an important clue at the scene.",
    "偵探在現場找到了一條重要的線索。",
    "n.／v."
  ],
  [
    "cocktail dress",
    "酒會禮服",
    "She wore a black cocktail dress to the reception.",
    "她穿了一件黑色的酒會禮服出席這場招待會。",
    "n."
  ],
  [
    "coconut",
    "椰子",
    "The dessert is made with fresh coconut milk.",
    "這道甜點是用新鮮的椰奶製成的。",
    "n."
  ],
  [
    "code",
    "法典",
    "Every employee must follow the company's code of conduct.",
    "每位員工都必須遵守公司的行為準則。",
    "n.／v."
  ],
  [
    "combine",
    "結合",
    "The recipe combines sweet and spicy flavors perfectly.",
    "這道食譜完美地結合了甜味與辣味。",
    "n.／v."
  ],
  [
    "come in handy",
    "派上用場",
    "A good flashlight will come in handy during the camping trip.",
    "一支好用的手電筒在露營時會派上用場。",
    "idiom"
  ],
  [
    "come into play",
    "發揮作用",
    "Experience really comes into play in a crisis like this.",
    "在這樣的危機中，經驗真的能發揮作用。",
    "phr.v."
  ],
  [
    "comedy",
    "喜劇",
    "We watched a light comedy to relax after work.",
    "我們下班後看了一部輕鬆的喜劇來放鬆。",
    "n."
  ],
  [
    "comfort",
    "舒服",
    "The soft blanket gave her a sense of comfort.",
    "這條柔軟的毯子給了她一種舒適感。",
    "n.／v."
  ],
  [
    "comic",
    "漫畫",
    "He has collected comic books since he was a kid.",
    "他從小就開始收集漫畫書。",
    "n.／adj."
  ],
  [
    "comment",
    "評論",
    "Please leave a comment if you have any feedback.",
    "如果你有任何意見，請留言。",
    "n.／v."
  ],
  [
    "commerce",
    "商業",
    "The city has been a center of commerce for centuries.",
    "這座城市數百年來一直是商業中心。",
    "n."
  ],
  [
    "commercial",
    "廣告",
    "The new commercial for the phone aired during the game.",
    "這支新手機的廣告在比賽期間播出。",
    "n.／adj."
  ],
  [
    "committed",
    "承諾",
    "She is fully committed to finishing the project on time.",
    "她全力承諾要準時完成這個專案。",
    "adj."
  ],
  [
    "communicate",
    "溝通",
    "It's important to communicate clearly with your team.",
    "與團隊清楚溝通是很重要的。",
    "v."
  ],
  [
    "community",
    "社區",
    "The event brought the whole community together.",
    "這場活動把整個社區的人聚集在一起。",
    "n."
  ],
  [
    "compete",
    "競爭",
    "Local shops struggle to compete with online stores.",
    "當地商店很難跟網路商店競爭。",
    "v."
  ],
  [
    "competition",
    "競賽",
    "She won first place in the regional competition.",
    "她在區域競賽中贏得了第一名。",
    "n."
  ],
  [
    "competitor",
    "競爭者",
    "Our biggest competitor just launched a similar product.",
    "我們最大的競爭對手剛推出了一款類似的產品。",
    "n."
  ],
  [
    "complaint",
    "抱怨",
    "The hotel received several complaints about the noise.",
    "這間飯店收到了幾起關於噪音的投訴。",
    "n."
  ],
  [
    "complex",
    "複雜",
    "The tax system here is notoriously complex.",
    "這裡的稅制以複雜著稱。",
    "n.／adj."
  ],
  [
    "complicated",
    "複雜",
    "The instructions seemed complicated at first glance.",
    "這些指示乍看之下似乎很複雜。",
    "adj."
  ],
  [
    "compound",
    "合成",
    "Scientists discovered a new chemical compound.",
    "科學家發現了一種新的化合物。",
    "n.／v.／adj."
  ],
  [
    "concept",
    "概念",
    "The teacher explained the concept with a simple example.",
    "老師用一個簡單的例子解釋了這個概念。",
    "n."
  ],
  [
    "conference",
    "會議",
    "The annual conference attracts experts from around the world.",
    "這場年度會議吸引了來自世界各地的專家。",
    "n."
  ],
  [
    "connecting",
    "連接",
    "We have a connecting flight in Tokyo before reaching Paris.",
    "我們在抵達巴黎之前會在東京轉機。",
    "adj."
  ],
  [
    "consequence",
    "結果",
    "Every action has a consequence, whether good or bad.",
    "每個行動都會帶來後果，不論好壞。",
    "n."
  ],
  [
    "consequently",
    "所以",
    "The flight was delayed; consequently, we missed our connection.",
    "班機延誤了，因此我們錯過了轉機。",
    "adv."
  ],
  [
    "considerably",
    "相當",
    "Prices have risen considerably over the past year.",
    "過去一年價格上漲得相當多。",
    "adv."
  ],
  [
    "construct",
    "構造",
    "Workers will construct a new bridge across the river.",
    "工人們將在河上建造一座新橋。",
    "n.／v."
  ],
  [
    "construction",
    "結構",
    "The construction of the new stadium began last spring.",
    "這座新體育場的建設從去年春天開始。",
    "n."
  ],
  [
    "constructive",
    "建設性的",
    "Please give constructive feedback rather than just criticism.",
    "請給予建設性的意見，而不只是批評。",
    "adj."
  ],
  [
    "consult",
    "參考",
    "Please consult the manual before using the machine.",
    "使用這台機器前請參考說明手冊。",
    "v."
  ],
  [
    "consultant",
    "顧問",
    "The company hired a consultant to improve efficiency.",
    "這家公司聘請了一位顧問來提升效率。",
    "n."
  ],
  [
    "consumer",
    "消費者",
    "Consumer demand for eco-friendly products is growing.",
    "消費者對環保產品的需求正在成長。",
    "n."
  ],
  [
    "container",
    "容器",
    "Please store the leftovers in an airtight container.",
    "請把剩菜存放在密封容器裡。",
    "n."
  ],
  [
    "contest",
    "比賽",
    "She entered a photography contest last month.",
    "她上個月參加了一場攝影比賽。",
    "n.／v."
  ],
  [
    "contract",
    "合約",
    "Both parties signed the contract after final negotiations.",
    "雙方在最後協商後簽署了合約。",
    "n.／v."
  ],
  [
    "contribution",
    "貢獻",
    "Her contribution to the project was greatly appreciated.",
    "她對這個專案的貢獻受到極大的肯定。",
    "n."
  ],
  [
    "converse",
    "交談",
    "They conversed in French throughout the dinner.",
    "他們整頓晚餐都用法語交談。",
    "n.／v.／adj."
  ],
  [
    "convince",
    "說服",
    "It took some effort to convince him to join the team.",
    "花了一番功夫才說服他加入這個團隊。",
    "v."
  ],
  [
    "corded",
    "有線",
    "The office still uses a corded phone at the front desk.",
    "這間辦公室的櫃檯仍在使用有線電話。",
    "adj."
  ],
  [
    "correspond",
    "符合",
    "Her actions didn't correspond with what she had promised.",
    "她的行動與她的承諾不相符。",
    "v."
  ],
  [
    "costume",
    "服裝",
    "The actors wore elaborate costumes for the play.",
    "演員們為這齣戲穿上了精緻的戲服。",
    "n.／v."
  ],
  [
    "cottage",
    "茅屋",
    "They rented a cottage by the lake for the weekend.",
    "他們週末租了一間湖邊的小屋。",
    "n."
  ],
  [
    "count on",
    "指望",
    "You can always count on her to help in an emergency.",
    "緊急情況下你總是可以指望她來幫忙。",
    "phr.v."
  ],
  [
    "courageous",
    "勇敢",
    "It was courageous of her to speak up in the meeting.",
    "她在會議中發聲是很勇敢的行為。",
    "adj."
  ],
  [
    "cozy",
    "舒適",
    "The cabin felt cozy with a fire burning in the fireplace.",
    "壁爐裡的火燃燒著，讓這間小屋顯得十分溫馨。",
    "n.／adj."
  ],
  [
    "creation",
    "創作",
    "The exhibit showcases the artist's latest creation.",
    "這場展覽展出這位藝術家最新的創作。",
    "n."
  ],
  [
    "creative",
    "創作者",
    "The agency is known for its creative advertising campaigns.",
    "這間廣告公司以其富有創意的行銷活動聞名。",
    "adj."
  ],
  [
    "creativity",
    "創造力",
    "The workshop encourages creativity among young students.",
    "這場工作坊鼓勵年輕學生發揮創造力。",
    "n."
  ],
  [
    "creature",
    "生物",
    "The aquarium is home to many unusual sea creatures.",
    "這座水族館裡住著許多不尋常的海洋生物。",
    "n."
  ],
  [
    "credit",
    "信用",
    "Good credit history makes it easier to get a loan.",
    "良好的信用紀錄能讓貸款更容易核准。",
    "n.／v."
  ],
  [
    "crew",
    "船員",
    "The crew worked together to prepare the ship for departure.",
    "船員們一起合作，為船隻的啟航做準備。",
    "n.／v."
  ],
  [
    "crisp",
    "酥脆",
    "The bread came out crisp and golden from the oven.",
    "這麵包從烤箱出爐時又酥脆又金黃。",
    "n.／v.／adj."
  ],
  [
    "critic",
    "評論家",
    "The film received praise from several respected critics.",
    "這部電影獲得了好幾位知名評論家的讚揚。",
    "n."
  ],
  [
    "criticism",
    "批評",
    "She accepted the criticism gracefully and improved her work.",
    "她大方地接受批評並改進了她的作品。",
    "n."
  ],
  [
    "crowd",
    "群組",
    "A large crowd gathered outside the stadium before the game.",
    "比賽前有一大群人聚集在體育場外。",
    "n.／v."
  ],
  [
    "cucumber",
    "黃瓜",
    "The salad has fresh cucumber and tomatoes.",
    "這份沙拉裡有新鮮的小黃瓜和番茄。",
    "n."
  ],
  [
    "cuisine",
    "美食",
    "The restaurant specializes in traditional Italian cuisine.",
    "這間餐廳專門供應傳統義大利美食。",
    "n."
  ],
  [
    "cultivate",
    "培植",
    "It takes years to cultivate trust between business partners.",
    "建立商業夥伴之間的信任需要多年的培養。",
    "v."
  ],
  [
    "cup of tea",
    "一杯茶",
    "She always starts her morning with a cup of tea.",
    "她總是以一杯茶開始她的早晨。",
    "n."
  ],
  [
    "curve",
    "彎曲",
    "Drive carefully; there's a sharp curve ahead.",
    "請小心駕駛，前方有一個急彎。",
    "n.／v."
  ],
  [
    "custom-made",
    "訂製的",
    "He wears a custom-made suit for important meetings.",
    "他重要會議都穿訂製西裝。",
    "adj."
  ],
  [
    "daily",
    "每日",
    "She writes in her journal on a daily basis.",
    "她每天都會在日記裡寫東西。",
    "n.／adj.／adv."
  ],
  [
    "dare",
    "果敢",
    "I wouldn't dare to interrupt the CEO during the presentation.",
    "我不敢在執行長簡報時打斷他。",
    "n.／v."
  ],
  [
    "darling",
    "親愛的；寶貝",
    "\"Good morning, darling,\" she whispered to her son.",
    "「早安，寶貝，」她輕聲對兒子說。",
    "n.／adj."
  ],
  [
    "dash",
    "衝撞",
    "He made a quick dash to catch the closing doors.",
    "他快速衝過去想趕上正在關閉的門。",
    "n.／v."
  ],
  [
    "data",
    "資料",
    "The team analyzed the data before making a decision.",
    "團隊在做決定前先分析了資料。",
    "n."
  ],
  [
    "decade",
    "十年",
    "The company has grown steadily over the past decade.",
    "這家公司在過去十年間穩定成長。",
    "n."
  ],
  [
    "decide",
    "決定",
    "We need to decide on a venue for the conference soon.",
    "我們需要盡快決定會議的場地。",
    "v."
  ],
  [
    "define",
    "確定",
    "Let's define the project goals before we begin.",
    "開始之前，我們先來確定專案目標。",
    "v."
  ],
  [
    "definition",
    "定義",
    "The dictionary gives a clear definition of the word.",
    "字典對這個字給出了清楚的定義。",
    "n."
  ],
  [
    "delay",
    "延遲",
    "The meeting was pushed back due to a delay in the flight.",
    "因為班機延誤，會議被延後了。",
    "n.／v."
  ],
  [
    "delivery",
    "輸送",
    "The delivery is expected to arrive by Thursday.",
    "這批貨預計星期四前送達。",
    "n."
  ],
  [
    "demand",
    "需求",
    "Demand for the new product exceeded expectations.",
    "這項新產品的需求超出了預期。",
    "n.／v."
  ],
  [
    "demonstration",
    "示範",
    "The salesperson gave a demonstration of the new appliance.",
    "銷售人員展示了這項新家電的操作示範。",
    "n."
  ],
  [
    "dependable",
    "可信的",
    "He is a dependable colleague who always meets deadlines.",
    "他是一位可靠的同事，總是能準時完成工作。",
    "adj."
  ],
  [
    "dependent",
    "依賴的",
    "The village is dependent on tourism for its economy.",
    "這個村莊的經濟仰賴觀光業。",
    "n.／adj."
  ],
  [
    "depressing",
    "沉悶",
    "The gray weather made the whole day feel depressing.",
    "陰沉的天氣讓整天都顯得沉悶。",
    "adj."
  ],
  [
    "deserve",
    "應得",
    "After all her hard work, she deserves this promotion.",
    "經過這麼多努力，她應得這次升遷。",
    "v."
  ],
  [
    "designer",
    "設計師",
    "The building was created by a famous designer.",
    "這棟建築是由一位知名設計師打造的。",
    "n."
  ],
  [
    "despite",
    "儘管",
    "Despite the rain, the outdoor concert went ahead as planned.",
    "儘管下雨，這場戶外演唱會仍照計畫舉行。",
    "n."
  ],
  [
    "determine",
    "確定",
    "Tests will determine which treatment is best for the patient.",
    "檢測結果將決定哪種治療對病人最合適。",
    "v."
  ],
  [
    "developed",
    "發達",
    "This is one of the most developed neighborhoods in the city.",
    "這是這座城市最發達的街區之一。",
    "adj."
  ],
  [
    "development",
    "發育",
    "Good nutrition is essential for a child's development.",
    "良好的營養對孩童的發育至關重要。",
    "n."
  ],
  [
    "device",
    "設備",
    "Please turn off all electronic devices during takeoff.",
    "起飛期間請關閉所有電子設備。",
    "n."
  ],
  [
    "devote",
    "致力",
    "She devotes most of her free time to volunteer work.",
    "她把大部分的空閒時間都投入在志工服務上。",
    "v."
  ],
  [
    "digital",
    "數字",
    "The company shifted from print to digital marketing.",
    "這家公司從紙本行銷轉向數位行銷。",
    "adj."
  ],
  [
    "diligence",
    "勤勉",
    "Her diligence at work has not gone unnoticed.",
    "她工作上的勤勉並沒有被忽略。",
    "n."
  ],
  [
    "direction",
    "方向",
    "We asked a local for directions to the museum.",
    "我們向當地人問了去博物館的方向。",
    "n."
  ],
  [
    "director",
    "導演",
    "The film's director won an award for best new talent.",
    "這部電影的導演獲得了最佳新人獎。",
    "n."
  ],
  [
    "disadvantaged",
    "劣勢",
    "The program supports children from disadvantaged backgrounds.",
    "這項計畫支持來自弱勢背景的孩童。",
    "adj."
  ],
  [
    "disappointing",
    "令人失望的",
    "The movie's ending was quite disappointing.",
    "這部電影的結局相當令人失望。",
    "adj."
  ],
  [
    "disappointment",
    "失望",
    "Losing the final match was a huge disappointment for the team.",
    "輸掉這場決賽對這支隊伍來說是很大的失望。",
    "n."
  ],
  [
    "disaster",
    "災難",
    "The flood was declared a national disaster.",
    "這場洪水被宣布為全國性的災難。",
    "n."
  ],
  [
    "disconnected",
    "斷開的",
    "The call dropped because the line was disconnected.",
    "因為線路斷線，這通電話中斷了。",
    "adj."
  ],
  [
    "disguise",
    "偽裝",
    "The actor wore a disguise to avoid being recognized.",
    "這位演員戴著偽裝以避免被認出來。",
    "n.／v."
  ],
  [
    "disk",
    "唱片",
    "He still keeps his old vinyl disk collection.",
    "他仍然保留著他的舊黑膠唱片收藏。",
    "n.／v."
  ],
  [
    "dissatisfaction",
    "不滿",
    "Customer dissatisfaction rose after the price increase.",
    "漲價後顧客的不滿情緒升高了。",
    "n."
  ],
  [
    "distance",
    "距離",
    "The two offices are within walking distance of each other.",
    "這兩間辦公室彼此步行距離內就能到達。",
    "n.／v."
  ],
  [
    "distant",
    "遙遠",
    "They kept in touch even after moving to a distant city.",
    "即使搬到遙遠的城市，他們仍保持聯繫。",
    "adj."
  ],
  [
    "distinctive",
    "獨特的",
    "The perfume has a distinctive floral scent.",
    "這款香水有一種獨特的花香氣味。",
    "adj."
  ],
  [
    "distinguished",
    "傑出的",
    "He is a distinguished professor of economics.",
    "他是一位傑出的經濟學教授。",
    "adj."
  ],
  [
    "distraction",
    "娛樂",
    "Turn off your phone to avoid distraction while studying.",
    "讀書時請關掉手機以避免分心。",
    "n."
  ],
  [
    "distribute",
    "分配",
    "Volunteers will distribute food to families in need.",
    "志工們將把食物分配給有需要的家庭。",
    "v."
  ],
  [
    "document",
    "文件",
    "Please sign the document before returning it to us.",
    "請在簽署這份文件後交還給我們。",
    "n.／v."
  ],
  [
    "domestic",
    "國內",
    "The airline mainly operates domestic flights.",
    "這家航空公司主要經營國內航班。",
    "n.／adj."
  ],
  [
    "download",
    "下載",
    "You can download the app for free from the store.",
    "你可以從商店免費下載這個應用程式。",
    "v."
  ],
  [
    "doze",
    "瞌睡",
    "He dozed off during the long lecture.",
    "他在這場冗長的講座中打起了瞌睡。",
    "n.／v."
  ],
  [
    "drain",
    "排洩",
    "The sink is draining slowly and needs to be cleaned.",
    "水槽排水很慢，需要清理一下。",
    "n.／v."
  ],
  [
    "dramatically",
    "顯著地",
    "Sales dropped dramatically after the scandal.",
    "醜聞爆發後銷售量顯著下滑。",
    "adv."
  ],
  [
    "dreadful",
    "可怕",
    "The traffic this morning was absolutely dreadful.",
    "今天早上的交通狀況實在糟糕透了。",
    "adj."
  ],
  [
    "drift",
    "漂移",
    "The boat began to drift away from the shore.",
    "這艘船開始漂離岸邊。",
    "n.／v."
  ],
  [
    "drive",
    "駕駛",
    "She drives to work every day except Fridays.",
    "除了星期五以外，她每天都開車上班。",
    "n.／v."
  ],
  [
    "dynamic",
    "動態",
    "The team has a dynamic and energetic work culture.",
    "這個團隊擁有充滿活力的工作文化。",
    "n.／adj."
  ],
  [
    "eager",
    "急切",
    "The new intern is eager to learn as much as possible.",
    "這位新來的實習生急切地想學習盡可能多的東西。",
    "n.／adj."
  ],
  [
    "earnest",
    "認真",
    "He made an earnest effort to fix the misunderstanding.",
    "他認真努力地想解決這個誤會。",
    "n.／adj."
  ],
  [
    "ease",
    "緩解",
    "The medicine helped ease her headache quickly.",
    "這種藥很快就緩解了她的頭痛。",
    "n.／v."
  ],
  [
    "edge",
    "邊緣",
    "Be careful standing near the edge of the cliff.",
    "站在懸崖邊緣要小心。",
    "n.／v."
  ],
  [
    "edible",
    "食用",
    "Not all wild mushrooms are edible.",
    "不是所有的野生蘑菇都可以食用。",
    "n.／adj."
  ],
  [
    "edition",
    "版本",
    "This is a limited edition of the classic novel.",
    "這是這本經典小說的限量版。",
    "n."
  ],
  [
    "education",
    "教育",
    "Access to quality education remains unequal in many areas.",
    "在許多地區，優質教育的取得機會仍然不平等。",
    "n."
  ],
  [
    "effect",
    "效果",
    "The new policy had an immediate effect on productivity.",
    "這項新政策對生產力產生了立即的效果。",
    "n.／v."
  ],
  [
    "effective",
    "有效的",
    "Regular practice is an effective way to improve your skills.",
    "規律練習是提升技能的有效方法。",
    "adj."
  ],
  [
    "effort",
    "功夫",
    "It took a lot of effort to organize the entire event.",
    "籌辦整場活動花費了很大的功夫。",
    "n."
  ],
  [
    "electrician",
    "零工",
    "We called an electrician to fix the wiring.",
    "我們找了一位電工來修理電線。",
    "n."
  ],
  [
    "element",
    "元素",
    "Trust is a key element of any strong relationship.",
    "信任是任何穩固關係中的關鍵要素。",
    "n."
  ],
  [
    "elementary",
    "初級",
    "She teaches at a local elementary school.",
    "她在當地一所小學任教。",
    "adj."
  ],
  [
    "emerge",
    "出現",
    "New evidence began to emerge during the investigation.",
    "新的證據在調查過程中逐漸浮現。",
    "v."
  ],
  [
    "emergency",
    "緊急",
    "Please call this number only in case of an emergency.",
    "請只在緊急情況下撥打這支電話。",
    "n."
  ],
  [
    "emerging",
    "新興的",
    "Investors are watching several emerging markets closely.",
    "投資人正密切關注幾個新興市場。",
    "adj."
  ],
  [
    "emotional",
    "情緒化的",
    "She gave an emotional speech at her retirement party.",
    "她在退休派對上發表了一場情感真摯的演講。",
    "adj."
  ],
  [
    "employ",
    "雇用",
    "The factory employs over three hundred workers.",
    "這間工廠雇用了超過三百名工人。",
    "n.／v."
  ],
  [
    "empty",
    "空的",
    "The office was completely empty by six in the evening.",
    "傍晚六點時，辦公室已經完全空無一人。",
    "n.／v.／adj."
  ],
  [
    "enable",
    "啟用",
    "This setting will enable notifications for new messages.",
    "這項設定會啟用新訊息的通知。",
    "v."
  ],
  [
    "encounter",
    "遭遇",
    "We encountered heavy traffic on the way to the airport.",
    "我們在前往機場的路上遇到了嚴重的塞車。",
    "n.／v."
  ],
  [
    "encourage",
    "鼓勵",
    "Her teacher encouraged her to enter the writing contest.",
    "她的老師鼓勵她參加這場寫作比賽。",
    "v."
  ],
  [
    "energetic",
    "有活力的",
    "The new coach brings an energetic style to training.",
    "這位新教練為訓練帶來了充滿活力的風格。",
    "adj."
  ],
  [
    "enforcement",
    "強制",
    "Stricter enforcement of the rule reduced accidents.",
    "更嚴格地執行這項規定減少了意外事故。",
    "n."
  ],
  [
    "engaged",
    "訂婚",
    "They got engaged after dating for three years.",
    "他們交往三年後訂婚了。",
    "adj."
  ],
  [
    "engineer",
    "工程師",
    "The engineer inspected the bridge for safety issues.",
    "這位工程師檢查了這座橋是否存在安全問題。",
    "n.／v."
  ],
  [
    "enjoyable",
    "和藹可親的",
    "The trip was enjoyable despite the bad weather.",
    "儘管天氣不好，這趟旅行還是很愉快。",
    "adj."
  ],
  [
    "enormous",
    "巨大",
    "The company invested an enormous amount of money in research.",
    "這家公司在研究上投入了巨額資金。",
    "adj."
  ],
  [
    "entertain",
    "招待",
    "They entertained guests at their home every weekend.",
    "他們每個週末都在家裡招待賓客。",
    "v."
  ],
  [
    "entertainment",
    "娛樂",
    "The cruise ship offers a variety of entertainment options.",
    "這艘郵輪提供多種娛樂選擇。",
    "n."
  ],
  [
    "entrance",
    "入口",
    "Please meet us at the main entrance of the museum.",
    "請在博物館的主要入口跟我們會合。",
    "n.／v."
  ],
  [
    "environmental",
    "環境的",
    "The company adopted new environmental protection measures.",
    "這家公司採取了新的環境保護措施。",
    "adj."
  ],
  [
    "equip",
    "裝備",
    "The gym is equipped with the latest exercise machines.",
    "這間健身房配備了最新的運動器材。",
    "v."
  ],
  [
    "essential",
    "必要的",
    "Sleep is essential for good health.",
    "睡眠對健康而言是必要的。",
    "n.／adj."
  ],
  [
    "evaluate",
    "評價",
    "Managers evaluate employee performance twice a year.",
    "經理每年會評估員工表現兩次。",
    "v."
  ],
  [
    "event",
    "事件",
    "The wedding was the biggest event of the year for them.",
    "這場婚禮對他們來說是這一年最重要的大事。",
    "n."
  ],
  [
    "eventually",
    "終於",
    "After months of practice, she eventually mastered the skill.",
    "經過數月的練習，她終於掌握了這項技能。",
    "adv."
  ],
  [
    "everything in between",
    "介於兩者之間",
    "The store sells everything from clothes to electronics and everything in between.",
    "這間店販售從衣服到電子產品，以及介於兩者之間的各種商品。",
    "pron."
  ],
  [
    "evident",
    "明顯",
    "It was evident that the team needed more support.",
    "很明顯這個團隊需要更多支援。",
    "adj."
  ],
  [
    "exception",
    "例外",
    "Everyone must follow the rule, with no exception.",
    "每個人都必須遵守這項規定，沒有例外。",
    "n."
  ],
  [
    "exchange",
    "交換",
    "They exchanged phone numbers before leaving the party.",
    "他們在離開派對前交換了電話號碼。",
    "n.／v."
  ],
  [
    "exclusive",
    "獨家",
    "The magazine published an exclusive interview with the actress.",
    "這本雜誌刊登了一篇與這位女演員的獨家專訪。",
    "n.／adj."
  ],
  [
    "exhibit",
    "展覽",
    "The gallery is showing a new exhibit of modern art.",
    "這間藝廊正在展出一場現代藝術新展。",
    "n.／v."
  ],
  [
    "exhibition",
    "展覽",
    "Thousands attended the exhibition on opening day.",
    "開幕日有數千人參觀了這場展覽。",
    "n."
  ],
  [
    "existence",
    "存在",
    "The company has been in existence for over fifty years.",
    "這家公司已經存在超過五十年了。",
    "n."
  ],
  [
    "exit",
    "出口",
    "Please use the emergency exit in case of fire.",
    "發生火災時請使用緊急出口。",
    "n.／v."
  ],
  [
    "expansion",
    "擴張",
    "The company announced plans for expansion into new markets.",
    "這家公司宣布了拓展新市場的計畫。",
    "n."
  ],
  [
    "expectation",
    "期望",
    "The film failed to meet audience expectations.",
    "這部電影未能符合觀眾的期望。",
    "n."
  ],
  [
    "experiment",
    "實驗",
    "The students conducted a simple experiment in chemistry class.",
    "學生們在化學課上進行了一項簡單的實驗。",
    "n.／v."
  ],
  [
    "explore",
    "探索",
    "We spent the afternoon exploring the old city streets.",
    "我們花了一個下午探索這座舊城的街道。",
    "v."
  ],
  [
    "exposure",
    "暴露",
    "Long exposure to the sun can damage your skin.",
    "長時間曝曬在陽光下會傷害你的皮膚。",
    "n."
  ],
  [
    "expression",
    "表達",
    "Her facial expression revealed how nervous she was.",
    "她的表情透露出她有多緊張。",
    "n."
  ],
  [
    "extend",
    "延伸",
    "The company decided to extend the warranty period.",
    "這家公司決定延長保固期。",
    "v."
  ],
  [
    "extraordinary",
    "非凡的",
    "Her extraordinary talent was obvious from a young age.",
    "她非凡的天賦從小就顯而易見。",
    "adj."
  ],
  [
    "extremely",
    "非常地",
    "The exam was extremely difficult this semester.",
    "這學期的考試非常困難。",
    "adv."
  ],
  [
    "facial",
    "臉部的",
    "The spa offers a relaxing facial treatment.",
    "這間水療館提供令人放鬆的臉部護理療程。",
    "n.／adj."
  ],
  [
    "fail",
    "失敗",
    "The plan failed because of poor communication.",
    "這個計畫因為溝通不良而失敗了。",
    "v."
  ],
  [
    "fair",
    "公平",
    "The judges tried to be fair to all the contestants.",
    "評審們試圖對所有參賽者都保持公平。",
    "n.／v.／adj.／adv."
  ],
  [
    "fame",
    "名譽",
    "The singer achieved fame after her first album.",
    "這位歌手在第一張專輯後聲名大噪。",
    "n."
  ],
  [
    "fancy",
    "幻想",
    "She has a fancy for expensive handbags.",
    "她對昂貴的手提包情有獨鍾。",
    "n.／v.／adj."
  ],
  [
    "fantastic",
    "空想的",
    "We had a fantastic time at the beach resort.",
    "我們在海灘度假村玩得非常開心。",
    "adj."
  ],
  [
    "faraway",
    "遙遠",
    "He dreams of visiting faraway places someday.",
    "他夢想有朝一日能造訪遙遠的地方。",
    "adj."
  ],
  [
    "fare",
    "票價",
    "The bus fare increased slightly this year.",
    "今年公車票價略微上漲。",
    "n.／v."
  ],
  [
    "fear",
    "恐懼",
    "Her fear of flying kept her from traveling abroad.",
    "她對飛行的恐懼讓她無法出國旅行。",
    "n.／v."
  ],
  [
    "feast",
    "宴會",
    "The family gathered for a big feast on the holiday.",
    "這家人在節日聚在一起享用了一頓豐盛的宴席。",
    "n.／v."
  ],
  [
    "feast for sb.／sth.",
    "盛宴",
    "The city's architecture is a feast for the eyes.",
    "這座城市的建築是一場視覺的盛宴。",
    "idiom"
  ],
  [
    "feel at home",
    "賓至如歸",
    "The staff made us feel at home from the moment we arrived.",
    "從我們一到達開始，工作人員就讓我們有賓至如歸的感覺。",
    "idiom"
  ],
  [
    "female",
    "女性",
    "The company hired more female engineers this year.",
    "這家公司今年雇用了更多女性工程師。",
    "n.／adj."
  ],
  [
    "festival",
    "節日",
    "The city hosts a music festival every summer.",
    "這座城市每年夏天都會舉辦一場音樂節。",
    "n."
  ],
  [
    "fierce",
    "激烈",
    "Competition in the market has become fierce.",
    "市場上的競爭已經變得十分激烈。",
    "adj."
  ],
  [
    "financial",
    "金融",
    "She works in the financial department of the bank.",
    "她在銀行的財務部門工作。",
    "adj."
  ],
  [
    "fine",
    "良好",
    "The weather looks fine for the weekend hike.",
    "週末健行的天氣看起來不錯。",
    "n.／v.／adj.／adv."
  ],
  [
    "firework",
    "煙火",
    "Fireworks lit up the sky at midnight.",
    "午夜時分煙火照亮了天空。",
    "n."
  ],
  [
    "flame",
    "火焰",
    "A single candle flame lit up the dark room.",
    "一支蠟燭的火焰照亮了這間昏暗的房間。",
    "n.／v."
  ],
  [
    "flat",
    "平坦的",
    "The road became flat once we left the mountains.",
    "離開山區後，這條路變得平坦。",
    "n.／adj.／adv."
  ],
  [
    "flavor",
    "喜好的",
    "This tea comes in several different flavors.",
    "這款茶有好幾種不同的口味。",
    "n.／v."
  ],
  [
    "float",
    "漂浮",
    "The leaves floated gently down the river.",
    "樹葉輕輕地漂浮在河面上。",
    "n.／v."
  ],
  [
    "float sb.'s boat",
    "引起～興趣",
    "Classical music really floats her boat.",
    "古典音樂真的很能引起她的興趣。",
    "idiom"
  ],
  [
    "fluent",
    "流利",
    "He became fluent in Spanish after living in Madrid for a year.",
    "他在馬德里住了一年後，西班牙語變得流利。",
    "adj."
  ],
  [
    "flush",
    "紅暈",
    "Her cheeks flushed with embarrassment.",
    "她的臉頰因尷尬而泛起紅暈。",
    "n.／v.／adj.／adv."
  ],
  [
    "flying saucer",
    "飛碟",
    "The movie is about a flying saucer landing on Earth.",
    "這部電影講述一艘飛碟降落在地球的故事。",
    "n."
  ],
  [
    "follower",
    "跟隨者",
    "The influencer has millions of followers online.",
    "這位網紅在網路上擁有數百萬名追蹤者。",
    "n."
  ],
  [
    "following",
    "跟隨",
    "Following the instructions carefully will help avoid mistakes.",
    "仔細遵照指示有助於避免錯誤。",
    "n.／adj."
  ],
  [
    "forbidden",
    "禁止",
    "Smoking is forbidden inside the building.",
    "建築物內禁止吸菸。",
    "adj."
  ],
  [
    "force",
    "迫使",
    "Heavy rain forced the organizers to cancel the event.",
    "大雨迫使主辦單位取消了這場活動。",
    "n.／v."
  ],
  [
    "formula",
    "配方",
    "The chef guards her secret sauce formula closely.",
    "這位主廚嚴密守護著她的秘密醬料配方。",
    "n."
  ],
  [
    "forth",
    "往前",
    "The negotiations went back and forth for hours.",
    "這場談判來回進行了好幾個小時。",
    "n.／adv."
  ],
  [
    "fortunate",
    "幸運",
    "We were fortunate to get tickets to the sold-out show.",
    "我們很幸運能買到這場售罄演出的票。",
    "adj."
  ],
  [
    "forward",
    "向前",
    "The company is looking forward to a strong year ahead.",
    "這家公司對接下來充滿希望的一年抱持期待。",
    "n.／v.／adj.／adv."
  ],
  [
    "found",
    "創立",
    "The two friends founded the company together in college.",
    "這兩位朋友在大學時期共同創立了這家公司。",
    "n.／v.／adj."
  ],
  [
    "foundation",
    "基礎",
    "A strong foundation is key to any successful project.",
    "穩固的基礎是任何成功專案的關鍵。",
    "n."
  ],
  [
    "fountain",
    "噴水池",
    "Tourists often take photos by the fountain in the square.",
    "遊客常在廣場的噴水池旁拍照。",
    "n."
  ],
  [
    "freedom",
    "自由",
    "Freedom of speech is protected by the constitution.",
    "言論自由受到憲法的保障。",
    "n."
  ],
  [
    "freeway",
    "高速公路",
    "Traffic on the freeway was backed up for miles.",
    "高速公路上的車流回堵了好幾英里。",
    "n."
  ],
  [
    "frequently",
    "頻繁地",
    "She frequently travels for work.",
    "她經常因為工作而出差。",
    "adv."
  ],
  [
    "friendship",
    "友誼",
    "Their friendship has lasted more than twenty years.",
    "他們的友誼已經維持了超過二十年。",
    "n."
  ],
  [
    "frown",
    "皺眉",
    "He frowned when he saw the unexpected bill.",
    "他看到那筆意外的帳單時皺起了眉頭。",
    "n.／v."
  ],
  [
    "frustrated",
    "沮喪",
    "She felt frustrated after failing the test twice.",
    "她連續兩次考試不及格後感到很沮喪。",
    "adj."
  ],
  [
    "frustration",
    "挫折",
    "His frustration grew as the meeting ran late.",
    "隨著會議一再拖延，他的挫折感也越來越強烈。",
    "n."
  ],
  [
    "fulfilling",
    "完成",
    "Teaching can be a very fulfilling career.",
    "教書可以是一份非常有成就感的職業。",
    "adj."
  ],
  [
    "function",
    "功能",
    "This app has a function that tracks your daily steps.",
    "這個應用程式有一個追蹤每日步數的功能。",
    "n.／v."
  ],
  [
    "fund",
    "基金",
    "The charity relies on donations to fund its programs.",
    "這個慈善機構仰賴捐款來資助其計畫。",
    "n.／v."
  ],
  [
    "fundamental",
    "基本的",
    "Trust is fundamental to any good relationship.",
    "信任是任何良好關係的基本要素。",
    "n.／adj."
  ],
  [
    "further",
    "促進",
    "The grant will further the research on renewable energy.",
    "這筆補助將促進再生能源的研究。",
    "v.／adj.／adv."
  ],
  [
    "future",
    "未來",
    "She is optimistic about the future of the company.",
    "她對這家公司的未來抱持樂觀態度。",
    "n.／adj."
  ],
  [
    "gap",
    "差距",
    "There is a growing gap between the rich and the poor.",
    "貧富之間的差距正在擴大。",
    "n.／v."
  ],
  [
    "garlic",
    "大蒜",
    "Add some minced garlic to the sauce for extra flavor.",
    "在醬汁裡加一些蒜末以增添風味。",
    "n."
  ],
  [
    "gas",
    "瓦斯",
    "Please turn off the gas before leaving the kitchen.",
    "離開廚房前請關掉瓦斯。",
    "n.／v."
  ],
  [
    "gaze",
    "注視",
    "She gazed out the window, lost in thought.",
    "她凝視著窗外，陷入了沉思。",
    "n.／v."
  ],
  [
    "generation",
    "世代",
    "Three generations of the family live under one roof.",
    "這個家庭三代同堂住在一起。",
    "n."
  ],
  [
    "genuine",
    "真正",
    "His apology seemed genuine and heartfelt.",
    "他的道歉聽起來真誠而發自內心。",
    "adj."
  ],
  [
    "gigantic",
    "巨大",
    "A gigantic billboard now stands at the intersection.",
    "一塊巨大的廣告牌現在矗立在這個路口。",
    "adj."
  ],
  [
    "ginger",
    "薑絲",
    "The soup is flavored with fresh ginger.",
    "這道湯用新鮮的薑調味。",
    "n.／v.／adj."
  ],
  [
    "give away",
    "拋棄",
    "She decided to give away her old clothes to charity.",
    "她決定把舊衣服捐給慈善機構。",
    "phr.v."
  ],
  [
    "give credit to someone",
    "相信～",
    "We should give credit to the whole team for this success.",
    "這次的成功我們應該歸功於整個團隊。",
    "phr.v."
  ],
  [
    "global",
    "全球",
    "The brand has a global presence in over fifty countries.",
    "這個品牌在超過五十個國家都有據點。",
    "adj."
  ],
  [
    "glow",
    "發光",
    "The city lights glowed brightly against the night sky.",
    "城市的燈光在夜空下閃耀著明亮的光芒。",
    "n.／v."
  ],
  [
    "goods",
    "貨物",
    "The truck delivers goods to stores across the region.",
    "這輛卡車將貨物運送到這個地區的各家商店。",
    "n."
  ],
  [
    "gossip",
    "流言",
    "She avoids getting involved in office gossip.",
    "她盡量不涉入辦公室的流言蜚語。",
    "n.／v."
  ],
  [
    "govern",
    "治理",
    "A new council was elected to govern the town.",
    "一個新的議會被選出來治理這座小鎮。",
    "v."
  ],
  [
    "gradually",
    "漸漸地",
    "Her English improved gradually over the year.",
    "她的英語在這一年間漸漸進步。",
    "adv."
  ],
  [
    "graduate",
    "畢業生",
    "The company hires several graduates every summer.",
    "這家公司每年夏天都會雇用幾位應屆畢業生。",
    "n.／v.／adj."
  ],
  [
    "grain",
    "糧食",
    "The region exports a large amount of grain each year.",
    "這個地區每年出口大量的糧食。",
    "n.／v."
  ],
  [
    "grapefruit",
    "柚子",
    "She starts her morning with half a grapefruit.",
    "她每天早上都以半顆葡萄柚開始。",
    "n."
  ],
  [
    "grasp",
    "掌握",
    "It took a while for him to grasp the new concept.",
    "他花了一段時間才掌握這個新概念。",
    "n.／v."
  ],
  [
    "gratitude",
    "感謝",
    "She wrote a letter expressing her gratitude to her mentor.",
    "她寫了一封信向她的導師表達感謝。",
    "n."
  ],
  [
    "ground",
    "地面",
    "The ground was still wet from last night's rain.",
    "地面因為昨晚的雨還是濕的。",
    "n.／v."
  ],
  [
    "growth",
    "發展",
    "The country has seen steady economic growth this year.",
    "這個國家今年經歷了穩定的經濟成長。",
    "n."
  ],
  [
    "grub",
    "挖掘",
    "Workers had to grub through old files to find the record.",
    "員工們必須翻找舊檔案才能找到這份紀錄。",
    "n.／v."
  ],
  [
    "guard",
    "守衛",
    "A guard checks IDs at the entrance every morning.",
    "每天早上都有一位警衛在入口處檢查身分證件。",
    "n.／v."
  ],
  [
    "guardian",
    "監護人",
    "Her aunt became her legal guardian after her parents passed away.",
    "她父母過世後，她的阿姨成了她的法定監護人。",
    "n."
  ],
  [
    "guidance",
    "領導",
    "Under her guidance, the team achieved record sales.",
    "在她的帶領下，這個團隊創下了銷售紀錄。",
    "n."
  ],
  [
    "guide",
    "指導",
    "A local guide showed us around the ancient temple.",
    "一位當地導遊帶我們參觀了這座古老的寺廟。",
    "n.／v."
  ],
  [
    "handcrafted",
    "手工製作",
    "Each piece of furniture is handcrafted by skilled artisans.",
    "每一件家具都是由熟練的工匠手工製作而成。",
    "adj."
  ],
  [
    "handful",
    "少數",
    "Only a handful of employees knew about the merger.",
    "只有少數幾位員工知道這次合併的事。",
    "n."
  ],
  [
    "handle",
    "處理",
    "She handles customer complaints with patience and care.",
    "她耐心且細心地處理顧客的投訴。",
    "n.／v."
  ],
  [
    "handwriting",
    "手寫",
    "His handwriting is difficult to read.",
    "他的字跡很難辨認。",
    "n."
  ],
  [
    "handy",
    "便利",
    "A pocket dictionary is handy when traveling abroad.",
    "出國旅行時，一本口袋字典很方便。",
    "n.／adj."
  ],
  [
    "hang your hat",
    "告訴你一個號外",
    "Here's a hang-your-hat moment: the merger deal fell through.",
    "這裡有個大新聞：這樁併購案破局了。",
    "idiom"
  ],
  [
    "hardship",
    "困苦",
    "The family faced great hardship after losing their home.",
    "這個家庭在失去家園後面臨極大的困苦。",
    "n."
  ],
  [
    "harmful",
    "有害的",
    "Excessive sun exposure can be harmful to your skin.",
    "過度曬太陽可能對你的皮膚有害。",
    "adj."
  ],
  [
    "harmony",
    "和諧",
    "The colors in the painting work together in harmony.",
    "這幅畫裡的色彩搭配得十分和諧。",
    "n."
  ],
  [
    "harvest",
    "收成",
    "Farmers celebrate a good harvest every autumn.",
    "農夫們每年秋天都會慶祝豐收。",
    "n.／v."
  ],
  [
    "headline",
    "標題",
    "The story made the front-page headline this morning.",
    "這則新聞今天早上登上了頭版標題。",
    "n.／v."
  ],
  [
    "headquarters",
    "司令部",
    "The company's headquarters is located in downtown Taipei.",
    "這家公司的總部位於台北市中心。",
    "n."
  ],
  [
    "healthful",
    "健康的",
    "A healthful diet includes plenty of fruits and vegetables.",
    "健康的飲食包含大量的蔬菜和水果。",
    "adj."
  ],
  [
    "hell",
    "地獄",
    "The traffic jam made the commute feel like hell.",
    "塞車讓這趟通勤感覺像是地獄一般。",
    "n."
  ],
  [
    "hero",
    "英雄",
    "The firefighter was hailed as a hero after the rescue.",
    "這位消防員在這次救援後被譽為英雄。",
    "n."
  ],
  [
    "hesitate",
    "遲疑",
    "Don't hesitate to contact us if you have questions.",
    "如果有任何問題，請不要猶豫，儘管聯絡我們。",
    "v."
  ],
  [
    "highly",
    "高度",
    "She is a highly respected leader in the industry.",
    "她是這個產業裡備受尊敬的領導者。",
    "adv."
  ],
  [
    "hike",
    "遠足",
    "We went on a challenging hike up the mountain.",
    "我們進行了一趟具挑戰性的登山健行。",
    "n.／v."
  ],
  [
    "honest",
    "誠實",
    "I appreciate your honest opinion on the matter.",
    "我很感激你對這件事誠實的看法。",
    "adj."
  ],
  [
    "honor",
    "榮譽",
    "It was an honor to receive the award in front of my colleagues.",
    "能在同事面前獲得這個獎項是我的榮幸。",
    "n.／v."
  ],
  [
    "hook sb. in",
    "拉攏～",
    "The catchy jingle really hooks listeners in.",
    "這段朗朗上口的廣告曲真的很能抓住聽眾的注意力。",
    "phr.v."
  ],
  [
    "horrible",
    "可怕",
    "The traffic accident was a horrible sight to witness.",
    "這場車禍是一個令人不忍目睹的可怕景象。",
    "adj."
  ],
  [
    "hostel",
    "宿舍",
    "We stayed at a cheap hostel during our backpacking trip.",
    "我們背包旅行時住在一間便宜的青年旅館。",
    "n."
  ],
  [
    "humorous",
    "幽默",
    "His humorous stories always lighten the mood at meetings.",
    "他幽默的故事總能為會議帶來輕鬆的氣氛。",
    "adj."
  ],
  [
    "hunt",
    "狩獵",
    "Wolves hunt in packs to catch larger prey.",
    "狼群會成群狩獵以捕捉較大的獵物。",
    "n.／v."
  ],
  [
    "ideal",
    "理想",
    "This apartment is ideal for a small family.",
    "這間公寓非常適合小家庭居住。",
    "n.／adj."
  ],
  [
    "identity",
    "特性",
    "The brand has built a strong identity over the years.",
    "這個品牌多年來建立了鮮明的品牌形象。",
    "n."
  ],
  [
    "idol",
    "偶像",
    "She has been a fan of the pop idol since middle school.",
    "她從國中就開始是這位流行偶像的粉絲。",
    "n."
  ],
  [
    "illustrate",
    "說明",
    "The diagram helps illustrate how the system works.",
    "這張圖表有助於說明這套系統的運作方式。",
    "v."
  ],
  [
    "image",
    "圖像",
    "The company is trying to improve its public image.",
    "這家公司正試圖改善其公眾形象。",
    "n.／v."
  ],
  [
    "imagination",
    "想像力",
    "Children often have vivid imaginations.",
    "孩童通常擁有豐富生動的想像力。",
    "n."
  ],
  [
    "imaginative",
    "想像的",
    "Her imaginative designs stand out in the industry.",
    "她富有想像力的設計在業界十分突出。",
    "adj."
  ],
  [
    "imagine",
    "想像",
    "It's hard to imagine life without smartphones now.",
    "現在很難想像沒有智慧型手機的生活。",
    "v."
  ],
  [
    "immediately",
    "立即",
    "Please respond to the client's email immediately.",
    "請立即回覆客戶的電子郵件。",
    "adv."
  ],
  [
    "immigration",
    "遷居",
    "The city's growth is largely driven by immigration.",
    "這座城市的成長主要是由移民所推動的。",
    "n."
  ],
  [
    "impact",
    "碰撞",
    "The new policy will have a big impact on small businesses.",
    "這項新政策將對小型企業產生很大的影響。",
    "n.／v."
  ],
  [
    "impartial",
    "公正",
    "The judge remained impartial throughout the trial.",
    "這位法官在整個審判過程中保持公正。",
    "adj."
  ],
  [
    "importance",
    "重要性",
    "She stressed the importance of arriving on time.",
    "她強調了準時抵達的重要性。",
    "n."
  ],
  [
    "improve",
    "改善",
    "Regular feedback helps employees improve their performance.",
    "定期的回饋有助於員工改善他們的表現。",
    "v."
  ],
  [
    "in a good／bad mood",
    "心情好／壞",
    "He's usually in a good mood after his morning coffee.",
    "他喝完早晨的咖啡後通常心情都很好。",
    "idiom"
  ],
  [
    "in addition to",
    "除了",
    "In addition to her job, she volunteers on weekends.",
    "除了正職工作外，她週末還會做志工。",
    "prep."
  ],
  [
    "incense",
    "香氣",
    "The temple was filled with the smell of incense.",
    "這座寺廟裡瀰漫著香的氣味。",
    "n.／v."
  ],
  [
    "include",
    "包括",
    "The package price includes breakfast and airport transfer.",
    "這個套裝行程的價格包含早餐和機場接送。",
    "v."
  ],
  [
    "inconsistency",
    "前後矛盾",
    "The report contains several inconsistencies that need fixing.",
    "這份報告有幾處前後矛盾的地方需要修正。",
    "n."
  ],
  [
    "inconvenient",
    "不方便",
    "The construction made parking very inconvenient this week.",
    "這星期的施工讓停車變得非常不方便。",
    "adj."
  ],
  [
    "industry",
    "工業",
    "The fishing industry supports thousands of local jobs.",
    "漁業支撐著數千個當地的工作機會。",
    "n."
  ],
  [
    "influential",
    "有影響",
    "She is one of the most influential figures in the fashion world.",
    "她是時尚界最有影響力的人物之一。",
    "adj."
  ],
  [
    "initial",
    "初始",
    "The initial results of the study look promising.",
    "這項研究的初步結果看起來很有希望。",
    "n.／v.／adj."
  ],
  [
    "inn",
    "店面",
    "We stayed at a charming country inn for the weekend.",
    "我們週末住在一間迷人的鄉村小旅店。",
    "n."
  ],
  [
    "inner",
    "裡面的",
    "Trust your inner voice when making a big decision.",
    "做重大決定時要相信你內心的聲音。",
    "adj."
  ],
  [
    "inspiring",
    "鼓舞人心",
    "Her story of overcoming hardship is truly inspiring.",
    "她克服困境的故事真的很鼓舞人心。",
    "adj."
  ],
  [
    "install",
    "安裝",
    "A technician will install the new software tomorrow.",
    "技術人員明天會安裝這套新軟體。",
    "v."
  ],
  [
    "instead of",
    "而不是",
    "We took the stairs instead of the elevator.",
    "我們走樓梯而不是搭電梯。",
    "prep."
  ],
  [
    "instruction",
    "指令",
    "Please follow the instruction manual carefully.",
    "請仔細遵照說明手冊的指示。",
    "n."
  ],
  [
    "insurance",
    "保險",
    "Health insurance is provided by the company.",
    "健康保險是由公司提供的。",
    "n."
  ],
  [
    "intend",
    "打算",
    "She intends to finish her degree next year.",
    "她打算明年完成她的學位。",
    "v."
  ],
  [
    "interpret",
    "翻譯",
    "The guide helped interpret for the foreign visitors.",
    "這位導遊幫忙為外國訪客翻譯。",
    "v."
  ],
  [
    "interrupt",
    "打斷",
    "Please don't interrupt while she's speaking.",
    "她說話的時候請不要打斷她。",
    "n.／v."
  ],
  [
    "intimate",
    "親密",
    "They shared an intimate conversation over dinner.",
    "他們在晚餐時進行了一場親密的談話。",
    "n.／v.／adj."
  ],
  [
    "introduce",
    "介紹",
    "Let me introduce you to my colleague, Sarah.",
    "讓我向你介紹我的同事，莎拉。",
    "v."
  ],
  [
    "invitation",
    "請帖",
    "We received an invitation to their wedding last week.",
    "我們上週收到了他們婚禮的請帖。",
    "n."
  ],
  [
    "isolated",
    "被孤立",
    "The village felt isolated during the heavy snowstorm.",
    "這場暴風雪期間，這座村莊感覺與外界隔絕。",
    "adj."
  ],
  [
    "issue",
    "問題",
    "The team quickly resolved the technical issue.",
    "團隊很快地解決了這個技術問題。",
    "n.／v."
  ],
  [
    "ivory",
    "象牙",
    "The trade of ivory is banned in many countries.",
    "象牙貿易在許多國家是被禁止的。",
    "n."
  ],
  [
    "jealous",
    "嫉妒",
    "He felt a little jealous of his brother's success.",
    "他對哥哥的成功感到有點嫉妒。",
    "adj."
  ],
  [
    "jet lag",
    "時差",
    "It took her a few days to recover from jet lag.",
    "她花了幾天時間才從時差中恢復過來。",
    "n."
  ],
  [
    "jewel",
    "鑽石",
    "The museum displays a collection of rare jewels.",
    "這間博物館展出一系列稀有的珠寶。",
    "n.／v."
  ],
  [
    "jewelry",
    "首飾",
    "She inherited a piece of jewelry from her grandmother.",
    "她從祖母那裡繼承了一件首飾。",
    "n."
  ],
  [
    "journal",
    "日誌",
    "He keeps a travel journal to record his adventures.",
    "他寫旅行日誌來記錄他的冒險經歷。",
    "n."
  ],
  [
    "journey",
    "旅程",
    "Their journey across the country took three weeks.",
    "他們橫越這個國家的旅程花了三週。",
    "n.／v."
  ],
  [
    "junk",
    "破爛",
    "The garage was full of old junk we needed to clear out.",
    "車庫裡堆滿了我們需要清理掉的舊雜物。",
    "n.／v."
  ],
  [
    "kick off",
    "開球",
    "The conference will kick off with a keynote speech.",
    "這場研討會將以一場主題演講揭開序幕。",
    "phr.v."
  ],
  [
    "knob",
    "把手",
    "Turn the door knob gently to avoid making noise.",
    "輕輕轉動門把以避免發出聲音。",
    "n."
  ],
  [
    "let sb. in on sth",
    "告訴～有關～",
    "She let me in on the surprise party plans.",
    "她讓我知道了驚喜派對的計畫。",
    "phr.v."
  ],
  [
    "labor",
    "勞動",
    "The construction project required a lot of manual labor.",
    "這項建設工程需要大量的人力勞動。",
    "n.／v."
  ],
  [
    "lack",
    "缺乏",
    "The project failed due to a lack of funding.",
    "這個專案因為資金不足而失敗了。",
    "n.／v."
  ],
  [
    "landscape",
    "景觀",
    "The painting captures the beauty of the mountain landscape.",
    "這幅畫捕捉了山區景觀之美。",
    "n.／v."
  ],
  [
    "largescale",
    "大規模",
    "The company launched a largescale marketing campaign.",
    "這家公司推出了一場大規模的行銷活動。",
    "adj."
  ],
  [
    "latter",
    "後者",
    "Of the two options, we chose the latter.",
    "在這兩個選項中，我們選擇了後者。",
    "n.／adj."
  ],
  [
    "lawn",
    "草坪",
    "He mows the lawn every Saturday morning.",
    "他每個星期六早上都會修剪草坪。",
    "n."
  ],
  [
    "lawyer",
    "律師",
    "She hired a lawyer to review the contract.",
    "她請了一位律師來審閱這份合約。",
    "n."
  ],
  [
    "learning curve",
    "學習曲線",
    "There's a steep learning curve when starting a new job.",
    "開始一份新工作時，學習曲線通常會很陡峭。",
    "n."
  ],
  [
    "legal",
    "法律",
    "The company sought legal advice before signing the deal.",
    "這家公司在簽約前尋求了法律意見。",
    "adj."
  ],
  [
    "legend",
    "傳說",
    "According to legend, the castle is haunted.",
    "根據傳說，這座城堡鬧鬼。",
    "n."
  ],
  [
    "length",
    "長度",
    "The bridge stretches over a kilometer in length.",
    "這座橋的長度超過一公里。",
    "n."
  ],
  [
    "limitation",
    "限度",
    "Every plan has its limitations and risks.",
    "每個計畫都有其限制與風險。",
    "n."
  ],
  [
    "liquor",
    "酒類",
    "The store sells beer, wine, and liquor.",
    "這間店販售啤酒、葡萄酒和烈酒。",
    "n."
  ],
  [
    "literary",
    "文章",
    "She has a deep interest in classic literary works.",
    "她對古典文學作品有著濃厚的興趣。",
    "adj."
  ],
  [
    "loss",
    "損失",
    "The company reported a small loss this quarter.",
    "這家公司這一季公布了小幅虧損。",
    "n."
  ],
  [
    "lotion",
    "洗劑",
    "She applies lotion to keep her skin moisturized.",
    "她擦乳液來保持皮膚的滋潤。",
    "n."
  ],
  [
    "loyal",
    "忠誠",
    "The restaurant has built a loyal customer base over the years.",
    "這間餐廳這些年來累積了一群忠實的顧客。",
    "adj."
  ],
  [
    "luck",
    "運氣",
    "Good luck on your exam tomorrow!",
    "祝你明天考試好運！",
    "n."
  ],
  [
    "luggage",
    "行李",
    "Please make sure your luggage doesn't exceed the weight limit.",
    "請確保你的行李沒有超過重量限制。",
    "n."
  ],
  [
    "madam",
    "夫人；女士",
    "The waiter politely said, \"Good evening, madam.\"",
    "服務生禮貌地說：「晚安，女士。」",
    "n."
  ],
  [
    "magical",
    "神奇",
    "The garden looked magical under the string lights.",
    "這座花園在燈串下看起來十分夢幻。",
    "adj."
  ],
  [
    "magnificent",
    "壯麗",
    "The view from the tower was absolutely magnificent.",
    "從塔上看到的景色實在壯麗非凡。",
    "adj."
  ],
  [
    "maintain",
    "維持",
    "It's important to maintain a healthy work-life balance.",
    "維持健康的工作與生活平衡很重要。",
    "v."
  ],
  [
    "make sense",
    "意義",
    "Her explanation finally made sense to me.",
    "她的解釋終於讓我明白了。",
    "idiom"
  ],
  [
    "manage",
    "管理",
    "She manages a team of ten people.",
    "她管理著一個十人的團隊。",
    "v."
  ],
  [
    "manager",
    "經理",
    "The manager approved the new budget proposal.",
    "這位經理核准了這項新的預算提案。",
    "n."
  ],
  [
    "marvelous",
    "奇妙",
    "We had a marvelous time at the festival.",
    "我們在這場節慶中玩得非常盡興。",
    "adj."
  ],
  [
    "masses",
    "群眾",
    "The concert attracted masses of fans from across the country.",
    "這場演唱會吸引了來自全國各地的大批粉絲。",
    "n."
  ],
  [
    "master",
    "主人",
    "The dog loyally followed its master everywhere.",
    "這隻狗忠實地跟著牠的主人到處走。",
    "n.／v.／adj."
  ],
  [
    "material",
    "材料",
    "The company uses sustainable materials in its products.",
    "這家公司在其產品中使用永續材料。",
    "n.／adj."
  ],
  [
    "maturity",
    "到期",
    "The bond reaches maturity in ten years.",
    "這張債券十年後到期。",
    "n."
  ],
  [
    "meaningful",
    "富有意義的",
    "She wanted a career that felt meaningful.",
    "她想要一份讓她覺得有意義的職業。",
    "adj."
  ],
  [
    "means",
    "方法",
    "Email is the fastest means of communication for the team.",
    "電子郵件是這個團隊最快速的溝通方式。",
    "n."
  ],
  [
    "media",
    "媒體",
    "The story quickly spread across social media.",
    "這則消息很快就在社群媒體上傳開了。",
    "n."
  ],
  [
    "membership",
    "會籍",
    "She renewed her gym membership for another year.",
    "她續訂了健身房的會籍，再繼續一年。",
    "n."
  ],
  [
    "memorable",
    "難忘的",
    "Our trip to Japan was truly memorable.",
    "我們的日本之旅真的令人難忘。",
    "adj."
  ],
  [
    "merchant",
    "商人",
    "The old merchant sold spices from around the world.",
    "這位老商人販售來自世界各地的香料。",
    "n."
  ],
  [
    "merit",
    "優點",
    "Both proposals have their own merits.",
    "這兩份提案各有其優點。",
    "n.／v."
  ],
  [
    "messy",
    "麻煩的",
    "The divorce turned into a long, messy legal battle.",
    "這場離婚演變成一場冗長且棘手的法律糾紛。",
    "adj."
  ],
  [
    "microphone",
    "麥克風",
    "Please speak closer to the microphone.",
    "請靠近麥克風說話。",
    "n."
  ],
  [
    "miserable",
    "悲慘",
    "He felt miserable after losing his job.",
    "他失業後感到十分悲慘。",
    "adj."
  ],
  [
    "misery",
    "苦難",
    "The war brought years of misery to the region.",
    "這場戰爭為這個地區帶來了多年的苦難。",
    "n."
  ],
  [
    "misfortune",
    "不幸",
    "It was pure misfortune that the flight was canceled.",
    "班機被取消純粹是運氣不好。",
    "n."
  ],
  [
    "miss out",
    "錯過",
    "Don't miss out on this limited-time offer.",
    "別錯過這項限時優惠。",
    "phr.v."
  ],
  [
    "mixture",
    "混合物",
    "The recipe calls for a mixture of flour and sugar.",
    "這道食譜需要麵粉和糖的混合物。",
    "n."
  ],
  [
    "mobile",
    "移動",
    "The company developed a mobile version of its website.",
    "這家公司開發了網站的行動版本。",
    "n.／adj."
  ],
  [
    "moist",
    "潮濕",
    "Keep the soil moist for the seeds to grow properly.",
    "保持土壤潮濕，種子才能正常生長。",
    "adj."
  ],
  [
    "monthly",
    "每月一次",
    "The team holds a monthly review meeting.",
    "這個團隊每月會舉行一次檢討會議。",
    "n.／adj.／adv."
  ],
  [
    "moral",
    "道德",
    "The story teaches an important moral lesson.",
    "這個故事教導了一個重要的道德教訓。",
    "n.／adj."
  ],
  [
    "moreover",
    "而且",
    "The hotel is affordable; moreover, it's close to the beach.",
    "這間飯店價格實惠，而且離海灘很近。",
    "adv."
  ],
  [
    "motivate",
    "刺激",
    "A good manager knows how to motivate their team.",
    "一位好的經理知道如何激勵他們的團隊。",
    "v."
  ],
  [
    "musical",
    "音樂",
    "We watched a musical on Broadway last night.",
    "我們昨晚在百老匯看了一場音樂劇。",
    "n.／adj."
  ],
  [
    "native",
    "本地人",
    "She is a native speaker of Mandarin Chinese.",
    "她的母語是華語。",
    "n.／adj."
  ],
  [
    "nature",
    "自然",
    "He enjoys spending time in nature on weekends.",
    "他喜歡週末花時間親近大自然。",
    "n."
  ],
  [
    "necessarily",
    "一定地",
    "Higher price doesn't necessarily mean better quality.",
    "價格較高不一定代表品質較好。",
    "adv."
  ],
  [
    "neighborhood",
    "鄰里",
    "They moved to a quiet neighborhood outside the city.",
    "他們搬到了城外一個安靜的社區。",
    "n."
  ],
  [
    "nevertheless",
    "還是",
    "The plan was risky; nevertheless, they decided to proceed.",
    "這個計畫有風險，但他們還是決定進行。",
    "adv."
  ],
  [
    "nightmare",
    "夢魘",
    "Losing the important files was a real nightmare.",
    "遺失那些重要檔案簡直是一場惡夢。",
    "n."
  ],
  [
    "noble",
    "高貴",
    "He acted with noble intentions throughout the crisis.",
    "他在整場危機中都懷抱著高尚的動機行事。",
    "n.／adj."
  ],
  [
    "normal",
    "正常",
    "It's normal to feel nervous before a big exam.",
    "大考前感到緊張是正常的。",
    "n.／adj."
  ],
  [
    "nourishing",
    "滋補",
    "The soup is warm and nourishing on a cold day.",
    "這道湯在寒冷的日子裡既溫暖又滋補。",
    "adj."
  ],
  [
    "novel",
    "小說",
    "She is currently writing her second novel.",
    "她目前正在寫她的第二本小說。",
    "n.／adj."
  ],
  [
    "numerous",
    "大量",
    "The company has received numerous complaints this month.",
    "這家公司這個月收到了大量的客訴。",
    "adj."
  ],
  [
    "object",
    "物體",
    "Scientists studied the strange object found in the field.",
    "科學家研究了在田野中發現的這個奇怪物體。",
    "n.／v."
  ],
  [
    "objective",
    "目標",
    "Our main objective this quarter is to increase sales.",
    "我們這一季的主要目標是提高銷售額。",
    "n.／adj."
  ],
  [
    "observe",
    "查看",
    "Researchers observed the animals in their natural habitat.",
    "研究人員在動物的自然棲息地觀察牠們。",
    "v."
  ],
  [
    "obstacle",
    "障礙",
    "Lack of funding was the biggest obstacle to the project.",
    "資金不足是這個專案最大的障礙。",
    "n."
  ],
  [
    "obtain",
    "獲得",
    "She worked hard to obtain her professional certification.",
    "她努力工作以取得她的專業證照。",
    "v."
  ],
  [
    "obvious",
    "明顯",
    "It was obvious that he hadn't prepared for the meeting.",
    "很明顯他沒有為這場會議做準備。",
    "adj."
  ],
  [
    "occasion",
    "場合",
    "This dress is perfect for a formal occasion.",
    "這件洋裝非常適合正式場合。",
    "n.／v."
  ],
  [
    "odd",
    "奇怪",
    "It felt odd to see the office so empty.",
    "看到辦公室這麼空蕩讓人感覺很奇怪。",
    "adj."
  ],
  [
    "offering",
    "奉獻",
    "The company expanded its product offering this year.",
    "這家公司今年擴充了它的產品項目。",
    "n."
  ],
  [
    "on top of that",
    "最重要的是",
    "The flight was delayed, and on top of that, it started raining.",
    "班機延誤了，最糟的是，還開始下雨了。",
    "adv."
  ],
  [
    "open market",
    "公開市場",
    "The company plans to sell its shares on the open market.",
    "這家公司計畫在公開市場上出售其股份。",
    "n."
  ],
  [
    "opera",
    "歌劇",
    "They attended an opera performance downtown last night.",
    "他們昨晚在市區觀賞了一場歌劇演出。",
    "n."
  ],
  [
    "opinion",
    "意見",
    "I'd like to hear your opinion on this proposal.",
    "我想聽聽你對這項提案的意見。",
    "n."
  ],
  [
    "organically",
    "有機",
    "The farm grows all its vegetables organically.",
    "這座農場所有的蔬菜都是有機栽種的。",
    "adv."
  ],
  [
    "original",
    "原來",
    "Please return the item in its original packaging.",
    "請將商品連同原始包裝一併退回。",
    "n.／adj."
  ],
  [
    "out of date",
    "過時了",
    "The information on the website is out of date.",
    "這個網站上的資訊已經過時了。",
    "adj."
  ],
  [
    "outcome",
    "結果",
    "We are waiting to hear the outcome of the negotiations.",
    "我們正在等待這場談判的結果。",
    "n."
  ],
  [
    "overlook",
    "忽略",
    "Don't overlook the small details in the contract.",
    "不要忽略合約中的小細節。",
    "n.／v."
  ],
  [
    "overnight",
    "過夜",
    "The package was sent by overnight delivery.",
    "這個包裹是用隔夜快遞寄送的。",
    "adj.／adv."
  ],
  [
    "overtake",
    "超車",
    "The driver overtook two cars on the narrow road.",
    "這位駕駛在這條狹窄的道路上超越了兩輛車。",
    "v."
  ],
  [
    "part",
    "部分",
    "Communication is a key part of any successful team.",
    "溝通是任何成功團隊的關鍵部分。",
    "n.／v.／adv."
  ],
  [
    "participate",
    "參與",
    "Employees are encouraged to participate in the training.",
    "員工被鼓勵參加這場培訓。",
    "v."
  ],
  [
    "participation",
    "參與",
    "Active participation is required in every class discussion.",
    "每次課堂討論都需要積極參與。",
    "n."
  ],
  [
    "particular",
    "特別",
    "She has a particular interest in ancient history.",
    "她對古代歷史有著特別的興趣。",
    "n.／adj."
  ],
  [
    "partnership",
    "合作關係",
    "The two companies formed a strategic partnership.",
    "這兩家公司建立了一個策略性的合作關係。",
    "n."
  ],
  [
    "pass away",
    "去世",
    "Her grandfather passed away peacefully last month.",
    "她的祖父上個月安詳地過世了。",
    "phr.v."
  ],
  [
    "passenger",
    "乘客",
    "The bus can carry up to fifty passengers.",
    "這輛公車最多可以載運五十名乘客。",
    "n."
  ],
  [
    "passion",
    "熱情",
    "She pursued her passion for photography full-time.",
    "她全職追求她對攝影的熱情。",
    "n."
  ],
  [
    "patience",
    "忍耐",
    "Teaching young children requires a lot of patience.",
    "教導年幼的孩子需要很大的耐心。",
    "n."
  ],
  [
    "percent",
    "百分比",
    "Sales grew by ten percent this quarter.",
    "這一季的銷售額成長了百分之十。",
    "n."
  ],
  [
    "percentage",
    "百分比",
    "A small percentage of customers requested a refund.",
    "一小部分的顧客要求退款。",
    "n."
  ],
  [
    "performance",
    "性能",
    "The new engine offers better fuel performance.",
    "這款新引擎提供更好的燃油性能。",
    "n."
  ],
  [
    "performer",
    "表演者",
    "The performer received a standing ovation.",
    "這位表演者獲得了全場起立鼓掌。",
    "n."
  ],
  [
    "period",
    "期間",
    "Sales usually increase during the holiday period.",
    "節慶期間銷售額通常會增加。",
    "n."
  ],
  [
    "personality",
    "個性",
    "Her cheerful personality makes her popular at work.",
    "她開朗的個性讓她在職場上很受歡迎。",
    "n."
  ],
  [
    "pest",
    "害蟲",
    "The farm uses natural methods to control pests.",
    "這座農場使用天然的方法來防治害蟲。",
    "n."
  ],
  [
    "petal",
    "花瓣",
    "Rose petals covered the path to the venue.",
    "玫瑰花瓣鋪滿了通往會場的小徑。",
    "n."
  ],
  [
    "physically",
    "物理",
    "The job requires you to be physically fit.",
    "這份工作需要良好的體能。",
    "adv."
  ],
  [
    "pioneer",
    "先鋒",
    "She was a pioneer in the field of renewable energy.",
    "她是再生能源領域的先驅。",
    "n.／v."
  ],
  [
    "pit",
    "礦井",
    "Workers were trapped inside the mining pit for hours.",
    "工人們被困在礦井裡好幾個小時。",
    "n.／v."
  ],
  [
    "pleasure",
    "樂趣",
    "It was a pleasure to meet you at the conference.",
    "很榮幸能在研討會上認識你。",
    "n."
  ],
  [
    "plentiful",
    "豐富",
    "Fresh seafood is plentiful along the coast.",
    "沿海地區的新鮮海鮮十分豐富。",
    "adj."
  ],
  [
    "plenty",
    "豐富",
    "There is plenty of time before the meeting starts.",
    "離會議開始還有很多時間。",
    "n.／adv."
  ],
  [
    "plug",
    "插頭",
    "Please make sure the plug is fully inserted.",
    "請確保插頭已完全插入。",
    "n.／v."
  ],
  [
    "plum",
    "梅子",
    "The tree produces sweet, juicy plums every summer.",
    "這棵樹每年夏天都會結出香甜多汁的李子。",
    "n.／adv."
  ],
  [
    "plumber",
    "水管工人",
    "We called a plumber to fix the leaking pipe.",
    "我們找了一位水管工人來修理漏水的管線。",
    "n."
  ],
  [
    "poke fun at／of",
    "嘲笑",
    "The kids sometimes poke fun at his old-fashioned clothes.",
    "孩子們有時候會嘲笑他老派的穿著。",
    "phr.v."
  ],
  [
    "political",
    "政治",
    "The debate quickly turned into a political argument.",
    "這場辯論很快就變成了一場政治爭論。",
    "adj."
  ],
  [
    "popularity",
    "聲望",
    "The app's popularity grew rapidly after the update.",
    "這個應用程式更新後人氣迅速攀升。",
    "n."
  ],
  [
    "possess",
    "擁有",
    "She possesses a natural talent for languages.",
    "她天生擁有學習語言的天賦。",
    "v."
  ],
  [
    "post",
    "職位",
    "He was offered a senior post at the company.",
    "他獲得了這家公司一個高階職位的邀約。",
    "n.／v."
  ],
  [
    "powdered",
    "粉狀",
    "The recipe calls for powdered sugar on top.",
    "這道食譜需要在上面撒糖粉。",
    "adj."
  ],
  [
    "powerful",
    "強大",
    "The new engine is more powerful than the old model.",
    "這款新引擎比舊型號更強大。",
    "adj.／adv."
  ],
  [
    "practical",
    "實用",
    "She gave us some practical tips for saving money.",
    "她給了我們一些實用的省錢技巧。",
    "adj."
  ],
  [
    "prayer",
    "禱告",
    "They said a quiet prayer before the meal.",
    "他們在用餐前默默地禱告。",
    "n."
  ],
  [
    "precious",
    "珍貴",
    "Time with family is precious to her.",
    "與家人相處的時光對她來說很珍貴。",
    "adj.／adv."
  ],
  [
    "preferable",
    "最好",
    "A direct flight is preferable to one with a layover.",
    "直飛班機比轉機的班機更為理想。",
    "adj."
  ],
  [
    "pregnant",
    "懷孕的",
    "She announced that she was pregnant with her first child.",
    "她宣布自己懷了第一個孩子。",
    "adj."
  ],
  [
    "preparation",
    "準備",
    "Careful preparation is key to a successful presentation.",
    "周全的準備是成功簡報的關鍵。",
    "n."
  ],
  [
    "preserves",
    "果醬",
    "She made homemade fruit preserves for the winter.",
    "她做了自製的水果果醬過冬。",
    "n."
  ],
  [
    "president",
    "首長",
    "The president of the company gave a speech at the event.",
    "這家公司的總裁在這場活動中發表了演說。",
    "n."
  ],
  [
    "press",
    "按壓",
    "Press the button to start the machine.",
    "按下這個按鈕以啟動機器。",
    "n.／v."
  ],
  [
    "pressure",
    "壓力",
    "He handled the pressure of the deadline calmly.",
    "他冷靜地應對這個截止期限帶來的壓力。",
    "n.／v."
  ],
  [
    "previous",
    "過去",
    "Her previous job was in the finance industry.",
    "她之前的工作是在金融業。",
    "adj."
  ],
  [
    "print",
    "印刷",
    "Please print two copies of the document.",
    "請把這份文件印兩份。",
    "n.／v."
  ],
  [
    "privacy",
    "隱私",
    "The new law aims to protect users' online privacy.",
    "這項新法旨在保護使用者的線上隱私。",
    "n."
  ],
  [
    "privilege",
    "特權",
    "It's a privilege to work with such a talented team.",
    "能與這麼有才華的團隊共事是一種榮幸。",
    "n.／v."
  ],
  [
    "proceed",
    "繼續",
    "Let's proceed with the plan as discussed.",
    "我們就照討論的計畫繼續進行吧。",
    "v."
  ],
  [
    "production",
    "生產",
    "The factory increased production to meet demand.",
    "這間工廠提高了產量以因應需求。",
    "n."
  ],
  [
    "productive",
    "生產的",
    "Working from home makes her more productive.",
    "在家工作讓她更有生產力。",
    "adj."
  ],
  [
    "profit",
    "利潤",
    "The company reported a healthy profit this year.",
    "這家公司今年公布了穩健的利潤。",
    "n.／v."
  ],
  [
    "profitable",
    "有利可圖的",
    "The new branch became profitable within a year.",
    "這間新分店在一年內就開始獲利。",
    "adj."
  ],
  [
    "progress",
    "進展",
    "The team made good progress on the project this week.",
    "團隊這星期在這個專案上取得了良好的進展。",
    "n.／v."
  ],
  [
    "project",
    "計劃",
    "She is leading a new project at work.",
    "她正在主導一項新的工作專案。",
    "n.／v."
  ],
  [
    "prominent",
    "突出",
    "He holds a prominent position in the company.",
    "他在這家公司擔任重要的職位。",
    "adj."
  ],
  [
    "promise",
    "承諾",
    "She kept her promise to help with the event.",
    "她信守了要協助這場活動的承諾。",
    "n.／v."
  ],
  [
    "promotional",
    "促銷",
    "The store is running a promotional sale this week.",
    "這間店這星期正在舉辦促銷特賣。",
    "adj."
  ],
  [
    "prompt",
    "提示",
    "A prompt reply would be greatly appreciated.",
    "如果能盡快回覆，我們會非常感激。",
    "n.／v.／adj."
  ],
  [
    "proof",
    "證明",
    "She showed proof of purchase to get a refund.",
    "她出示了購買證明以取得退款。",
    "n.／v.／adj."
  ],
  [
    "property",
    "屬性",
    "The house is a valuable piece of property.",
    "這棟房子是一項珍貴的資產。",
    "n."
  ],
  [
    "prosperous",
    "繁榮",
    "The region has become more prosperous over the past decade.",
    "這個地區在過去十年間變得更加繁榮。",
    "adj."
  ],
  [
    "proudly",
    "驕傲地",
    "She proudly displayed her award on the shelf.",
    "她驕傲地把獎項展示在架子上。",
    "adv."
  ],
  [
    "prove",
    "證明",
    "The results proved her theory to be correct.",
    "這些結果證明了她的理論是正確的。",
    "v."
  ],
  [
    "psychological",
    "心理",
    "The therapist specializes in psychological counseling.",
    "這位治療師專攻心理諮商。",
    "adj."
  ],
  [
    "psychology",
    "心理學",
    "He studied psychology before switching to business.",
    "他在轉讀商業之前主修心理學。",
    "n."
  ],
  [
    "public",
    "公開",
    "The information is now available to the public.",
    "這項資訊現在已經公開供大眾取得。",
    "n.／adj."
  ],
  [
    "publication",
    "發表",
    "The article is scheduled for publication next month.",
    "這篇文章預計下個月發表。",
    "n."
  ],
  [
    "publicity",
    "宣傳",
    "The scandal brought unwanted publicity to the brand.",
    "這起醜聞為這個品牌帶來了不受歡迎的關注。",
    "n."
  ],
  [
    "publish",
    "發布",
    "The company will publish its annual report next week.",
    "這家公司下週將發布年度報告。",
    "v."
  ],
  [
    "punch",
    "穿孔",
    "Please punch a hole in each page for the binder.",
    "請在每一頁打一個洞以便裝入活頁夾。",
    "n.／v."
  ],
  [
    "pursue",
    "追求",
    "She decided to pursue a career in medicine.",
    "她決定追求從醫的職業生涯。",
    "v."
  ],
  [
    "pursuit",
    "追求",
    "His pursuit of excellence pushed the whole team forward.",
    "他對卓越的追求推動了整個團隊前進。",
    "n."
  ],
  [
    "put sth. into motion",
    "發動～",
    "The manager put the new plan into motion right away.",
    "經理立刻啟動了這項新計畫。",
    "phr.v."
  ],
  [
    "quality",
    "質量",
    "The company is known for the quality of its products.",
    "這家公司以其產品的品質聞名。",
    "n.／adj."
  ],
  [
    "raise",
    "提高",
    "She asked her boss for a raise after two years.",
    "她在任職兩年後向老闆要求加薪。",
    "n.／v."
  ],
  [
    "raisin",
    "葡萄乾",
    "The cookies are filled with raisins and oats.",
    "這些餅乾裡含有葡萄乾和燕麥。",
    "n."
  ],
  [
    "range",
    "範圍",
    "The store offers a wide range of products.",
    "這間店提供範圍廣泛的產品。",
    "n.／v."
  ],
  [
    "razor",
    "剃刀",
    "He packed a razor for his business trip.",
    "他為這趟出差打包了一支刮鬍刀。",
    "n.／v."
  ],
  [
    "reach",
    "到達",
    "We should reach the hotel before dark.",
    "我們應該在天黑前抵達飯店。",
    "n.／v."
  ],
  [
    "reason",
    "原因",
    "She explained the reason for her absence.",
    "她說明了她缺席的原因。",
    "n.／v."
  ],
  [
    "reasonable",
    "合理",
    "The price seems reasonable for this quality.",
    "以這樣的品質來說，這個價格似乎很合理。",
    "adj."
  ],
  [
    "recent",
    "最近",
    "Her recent work has received great reviews.",
    "她最近的作品獲得了很好的評價。",
    "n.／adj."
  ],
  [
    "recognition",
    "承認",
    "He finally received recognition for his years of hard work.",
    "他多年的努力終於獲得了肯定。",
    "n."
  ],
  [
    "recover",
    "恢復",
    "It took her weeks to fully recover from the flu.",
    "她花了好幾週才從流感中完全康復。",
    "v."
  ],
  [
    "reference",
    "參考",
    "Please provide two professional references.",
    "請提供兩位專業推薦人的聯絡方式。",
    "n.／v."
  ],
  [
    "referral",
    "推薦",
    "We got the client through a referral from a friend.",
    "我們透過一位朋友的推薦找到了這位客戶。",
    "n."
  ],
  [
    "regarding",
    "關於",
    "I'm writing regarding your recent inquiry.",
    "我寫這封信是關於你最近的詢問。",
    "prep."
  ],
  [
    "region",
    "區域",
    "The company plans to expand into a new region.",
    "這家公司計畫拓展到一個新的區域。",
    "n."
  ],
  [
    "regulation",
    "規則",
    "New safety regulations came into effect this year.",
    "新的安全規範今年開始生效。",
    "n.／adj."
  ],
  [
    "relate to",
    "涉及到",
    "This issue relates to the previous discussion.",
    "這個問題與先前的討論有關。",
    "phr.v."
  ],
  [
    "relation",
    "關係",
    "The two events have no relation to each other.",
    "這兩起事件彼此並沒有關聯。",
    "n."
  ],
  [
    "release",
    "發布",
    "The company will release the new product in June.",
    "這家公司將在六月發布這項新產品。",
    "n.／v."
  ],
  [
    "relieved",
    "安心",
    "She felt relieved when the test results came back normal.",
    "檢測結果正常時，她感到十分安心。",
    "adj."
  ],
  [
    "rely",
    "依靠",
    "The team relies heavily on data to make decisions.",
    "這個團隊高度仰賴數據來做決策。",
    "v."
  ],
  [
    "remain",
    "留下",
    "Despite the offer, she chose to remain with her current company.",
    "儘管有邀約，她還是選擇留在現在的公司。",
    "v."
  ],
  [
    "remarkable",
    "卓越",
    "She showed remarkable patience during the crisis.",
    "她在這場危機中展現出卓越的耐心。",
    "adj."
  ],
  [
    "remote",
    "遠程",
    "Many employees now work remote full-time.",
    "現在許多員工都是全職遠距工作。",
    "n.／adj."
  ],
  [
    "rented",
    "出租",
    "They live in a rented apartment near downtown.",
    "他們住在市中心附近一間出租公寓裡。",
    "adj."
  ],
  [
    "replace",
    "更換",
    "We need to replace the old printer soon.",
    "我們很快就需要更換這台舊印表機。",
    "v."
  ],
  [
    "report",
    "報告",
    "Please submit your report by the end of the day.",
    "請在今天結束前提交你的報告。",
    "n.／v."
  ],
  [
    "reporter",
    "記者",
    "A local reporter covered the story for the news.",
    "一位當地記者為新聞報導了這則故事。",
    "n."
  ],
  [
    "represent",
    "代表",
    "She was chosen to represent the company at the conference.",
    "她被選中代表公司出席這場研討會。",
    "v."
  ],
  [
    "representation",
    "表示",
    "The chart is a visual representation of the sales data.",
    "這張圖表是銷售數據的視覺化呈現。",
    "n."
  ],
  [
    "reputation",
    "聲譽",
    "The restaurant has built a strong reputation for quality food.",
    "這間餐廳因餐點品質建立了良好的聲譽。",
    "n."
  ],
  [
    "researcher",
    "研究員",
    "A team of researchers is studying the effects of the drug.",
    "一組研究人員正在研究這款藥物的效果。",
    "n."
  ],
  [
    "resident",
    "居民",
    "Local residents complained about the noise from construction.",
    "當地居民對施工的噪音提出了抱怨。",
    "n.／adj."
  ],
  [
    "resign",
    "辭職",
    "She decided to resign after ten years at the company.",
    "她在這家公司待了十年後決定辭職。",
    "v."
  ],
  [
    "resolve",
    "解決",
    "The two sides met to resolve their differences.",
    "雙方會面以解決彼此的分歧。",
    "n.／v."
  ],
  [
    "resource",
    "資源",
    "The library is a great resource for students.",
    "這間圖書館對學生來說是很棒的資源。",
    "n."
  ],
  [
    "respectable",
    "可敬",
    "He built a respectable career over three decades.",
    "他在三十年間建立了一番值得敬重的事業。",
    "adj."
  ],
  [
    "response",
    "響應",
    "We received a quick response from customer service.",
    "我們很快就收到了客服的回覆。",
    "n."
  ],
  [
    "result",
    "結果",
    "The result of the survey surprised the whole team.",
    "這份調查的結果讓整個團隊都感到驚訝。",
    "n.／v."
  ],
  [
    "rising",
    "升起",
    "Rising costs have forced the store to raise prices.",
    "不斷上升的成本迫使這間店提高了價格。",
    "n.／adj."
  ],
  [
    "risky",
    "冒險的",
    "Investing all your savings in one stock is risky.",
    "把所有積蓄投資在一支股票上是有風險的。",
    "adj."
  ],
  [
    "roasted",
    "烘培",
    "The café serves freshly roasted coffee beans.",
    "這間咖啡廳供應新鮮烘焙的咖啡豆。",
    "adj."
  ],
  [
    "role",
    "角色",
    "She played a key role in the company's success.",
    "她在這家公司的成功中扮演了關鍵角色。",
    "n."
  ],
  [
    "roll",
    "滾動",
    "The ball rolled across the floor and under the sofa.",
    "球滾過地板並滾到了沙發底下。",
    "n.／v."
  ],
  [
    "romantic",
    "浪漫",
    "They took a romantic walk along the beach at sunset.",
    "他們在日落時分沿著海灘進行了一次浪漫的散步。",
    "n.／adj."
  ],
  [
    "roughly",
    "大致",
    "The trip takes roughly two hours by train.",
    "搭火車這趟旅程大約需要兩小時。",
    "adv."
  ],
  [
    "routine",
    "常規",
    "Exercise has become part of her daily routine.",
    "運動已經成為她每日常規的一部分。",
    "n.／adj."
  ],
  [
    "ruin",
    "廢墟",
    "The ancient ruins attract thousands of tourists each year.",
    "這些古老的遺跡每年吸引數千名遊客。",
    "n.／v."
  ],
  [
    "rumor",
    "傳聞",
    "There's a rumor that the company might merge with a competitor.",
    "有傳聞說這家公司可能會與一個競爭對手合併。",
    "n.／v."
  ],
  [
    "safely",
    "安全",
    "Please drive safely on your way home.",
    "回家路上請小心開車。",
    "adv."
  ],
  [
    "sausage",
    "香腸",
    "We grilled sausages and vegetables for dinner.",
    "我們烤了香腸和蔬菜當晚餐。",
    "n."
  ],
  [
    "scarce",
    "缺乏",
    "Water became scarce during the long drought.",
    "在這場長期乾旱期間，水資源變得稀缺。",
    "adj.／adv."
  ],
  [
    "scary",
    "可怕",
    "The horror movie was too scary for the kids.",
    "這部恐怖電影對孩子們來說太可怕了。",
    "adj."
  ],
  [
    "scatter",
    "分散",
    "The wind scattered the papers across the yard.",
    "風把紙張吹得散落在院子各處。",
    "n.／v."
  ],
  [
    "scoop",
    "盛舀",
    "She used a small scoop to serve the ice cream.",
    "她用一支小勺子舀冰淇淋。",
    "n.／v."
  ],
  [
    "sculpture",
    "雕塑",
    "The park features a large bronze sculpture at its center.",
    "這座公園中央有一座大型青銅雕塑。",
    "n.／v."
  ],
  [
    "seal",
    "密封",
    "Please seal the envelope before mailing it.",
    "寄出前請把這個信封密封好。",
    "n.／v."
  ],
  [
    "security",
    "安全",
    "The building has strict security measures in place.",
    "這棟大樓實施了嚴格的安全措施。",
    "n."
  ],
  [
    "seek",
    "尋求",
    "The company is seeking new talent to join the team.",
    "這家公司正在尋求新的人才加入團隊。",
    "n.／v."
  ],
  [
    "seize",
    "把握",
    "She seized the opportunity to advance her career.",
    "她把握了推進職涯的機會。",
    "v."
  ],
  [
    "sense",
    "感覺",
    "I have a strange sense that something is wrong.",
    "我有一種奇怪的感覺，覺得有些不對勁。",
    "n.／v."
  ],
  [
    "series",
    "系列",
    "She is currently writing a series of children's books.",
    "她目前正在寫一系列的童書。",
    "n."
  ],
  [
    "shampoo",
    "洗髮乳",
    "This shampoo is designed for dry, damaged hair.",
    "這款洗髮乳是為乾燥受損的髮質設計的。",
    "n.／v."
  ],
  [
    "shape",
    "形狀",
    "The cookies were cut into star shapes.",
    "這些餅乾被切成了星星的形狀。",
    "n.／v."
  ],
  [
    "shave",
    "刮鬍子",
    "He shaves every morning before work.",
    "他每天上班前都會刮鬍子。",
    "n.／v."
  ],
  [
    "shelter",
    "庇護",
    "The organization provides shelter for homeless families.",
    "這個組織為無家可歸的家庭提供庇護所。",
    "n.／v."
  ],
  [
    "shiny",
    "閃亮",
    "The car looked shiny after a fresh wash.",
    "這輛車洗完後看起來閃閃發亮。",
    "adj."
  ],
  [
    "shocked",
    "震驚",
    "Everyone was shocked by the sudden announcement.",
    "每個人都對這則突如其來的消息感到震驚。",
    "adj."
  ],
  [
    "shortage",
    "缺少",
    "The region is facing a serious water shortage.",
    "這個地區正面臨嚴重的水資源短缺。",
    "n."
  ],
  [
    "sign",
    "標誌",
    "Follow the signs to reach the exit.",
    "請依照標誌指示前往出口。",
    "n.／v.／adj."
  ],
  [
    "signature style",
    "招牌式",
    "Bold colors are part of the designer's signature style.",
    "大膽的用色是這位設計師招牌風格的一部分。",
    "n."
  ],
  [
    "similar",
    "類似",
    "The two proposals are quite similar in their approach.",
    "這兩份提案在做法上相當類似。",
    "adj."
  ],
  [
    "simply",
    "簡單地",
    "She simply refused to give up on the idea.",
    "她就是不肯放棄這個想法。",
    "adv."
  ],
  [
    "sincerely",
    "誠摯",
    "We sincerely appreciate your continued support.",
    "我們誠摯感謝你持續的支持。",
    "adv."
  ],
  [
    "single",
    "單身",
    "He has been single for the past two years.",
    "他過去兩年一直保持單身。",
    "n.／v.／adj."
  ],
  [
    "sir",
    "先生",
    "\"Excuse me, sir, is this seat taken?\" she asked.",
    "「先生，不好意思，請問這個位子有人坐嗎？」她問道。",
    "n."
  ],
  [
    "site",
    "現場",
    "Workers arrived early to prepare the construction site.",
    "工人們提早抵達以準備施工現場。",
    "n.／v."
  ],
  [
    "situation",
    "情況",
    "The manager handled the difficult situation calmly.",
    "經理冷靜地處理了這個棘手的情況。",
    "n."
  ],
  [
    "skeleton",
    "骨架",
    "The museum displays a complete dinosaur skeleton.",
    "這間博物館展出一副完整的恐龍骨架。",
    "n."
  ],
  [
    "sketch",
    "素描",
    "The architect made a quick sketch of the building design.",
    "這位建築師快速畫了一張建築設計的素描。",
    "n.／v."
  ],
  [
    "slice",
    "切片",
    "Please cut the bread into thin slices.",
    "請把麵包切成薄片。",
    "n.／v."
  ],
  [
    "slightly",
    "略有",
    "Prices have gone up slightly since last year.",
    "自去年以來，價格略有上漲。",
    "adv."
  ],
  [
    "snap",
    "快照",
    "She took a quick snap of the sunset with her phone.",
    "她用手機快速拍了一張日落的照片。",
    "n.／v."
  ],
  [
    "social",
    "社會的",
    "Social media has changed the way businesses advertise.",
    "社群媒體改變了企業做廣告的方式。",
    "n.／adj."
  ],
  [
    "solid",
    "固體",
    "Water turns into a solid when it freezes.",
    "水結凍後會變成固體。",
    "n.／adj."
  ],
  [
    "somewhat",
    "有些",
    "The meeting was somewhat longer than expected.",
    "這場會議比預期的稍微長了一點。",
    "adv."
  ],
  [
    "soul",
    "靈魂",
    "Music has always been the soul of the festival.",
    "音樂一直是這場節慶的靈魂所在。",
    "n."
  ],
  [
    "spark",
    "火花",
    "Her comment sparked an interesting discussion.",
    "她的評論激起了一場有趣的討論。",
    "n.／v."
  ],
  [
    "sparkle",
    "火花",
    "The lake sparkled under the afternoon sun.",
    "這座湖在午後的陽光下閃閃發光。",
    "n.／v."
  ],
  [
    "specialize",
    "專攻",
    "The clinic specializes in sports injuries.",
    "這間診所專攻運動傷害治療。",
    "v."
  ],
  [
    "specific",
    "具體",
    "Please give me specific details about the problem.",
    "請給我這個問題的具體細節。",
    "n.／adj."
  ],
  [
    "spell",
    "拼寫",
    "Can you spell your last name for me?",
    "你可以幫我拼一下你的姓氏嗎？",
    "n.／v."
  ],
  [
    "spice up",
    "調劑",
    "A quick trip abroad can spice up your routine.",
    "一趟短暫的出國旅行能為你的日常生活增添一些變化。",
    "phr.v."
  ],
  [
    "spiritual",
    "精神",
    "She finds spiritual comfort in quiet morning walks.",
    "她在安靜的晨間散步中找到心靈上的慰藉。",
    "n.／adj."
  ],
  [
    "spiritually",
    "精神上的",
    "The retreat left her feeling spiritually renewed.",
    "這場靜修讓她感覺精神上煥然一新。",
    "adv."
  ],
  [
    "splash",
    "噴濺",
    "The kids loved splashing around in the pool.",
    "孩子們很喜歡在泳池裡潑水嬉戲。",
    "n.／v."
  ],
  [
    "splendid",
    "燦爛",
    "The fireworks display was absolutely splendid.",
    "這場煙火表演真的非常燦爛壯觀。",
    "adj."
  ],
  [
    "spot",
    "斑點",
    "We found a quiet spot to have our picnic.",
    "我們找到了一個安靜的地方野餐。",
    "n.／v."
  ],
  [
    "spread",
    "傳播",
    "News of the merger spread quickly across the office.",
    "合併的消息在辦公室裡迅速傳開。",
    "n.／v.／adj."
  ],
  [
    "sprinkle",
    "潑灑",
    "Sprinkle some cheese on top before baking.",
    "烘烤前在上面撒一些起司。",
    "n.／v."
  ],
  [
    "stage",
    "舞臺",
    "The singer walked onto the stage to loud applause.",
    "這位歌手在熱烈的掌聲中走上舞臺。",
    "n.／v."
  ],
  [
    "stale",
    "過時",
    "The bread had gone stale after a few days.",
    "這麵包放了幾天後就變得不新鮮了。",
    "v.／adj."
  ],
  [
    "starvation",
    "飢餓",
    "The charity works to prevent starvation in the region.",
    "這個慈善機構致力於防止該地區發生飢荒。",
    "n."
  ],
  [
    "state",
    "州",
    "California is the most populous state in the country.",
    "加州是這個國家人口最多的州。",
    "n.／v."
  ],
  [
    "status",
    "狀態",
    "Please check the status of your order online.",
    "請上網查看你訂單的狀態。",
    "n."
  ],
  [
    "stock",
    "股票",
    "She invested in stock from a promising tech company.",
    "她投資了一家前景看好的科技公司的股票。",
    "n.／v.／adj."
  ],
  [
    "strategy",
    "戰略",
    "The company revised its marketing strategy this year.",
    "這家公司今年修訂了它的行銷戰略。",
    "n."
  ],
  [
    "strength",
    "實力",
    "Teamwork is one of the company's greatest strengths.",
    "團隊合作是這家公司最大的優勢之一。",
    "n."
  ],
  [
    "strive",
    "努力",
    "She strives to improve her skills every single day.",
    "她每天都努力精進自己的技能。",
    "v."
  ],
  [
    "struggle",
    "鬥爭",
    "Many small businesses struggle during economic downturns.",
    "許多小型企業在經濟低迷時期都很掙扎。",
    "n.／v."
  ],
  [
    "suitable",
    "合適的",
    "This apartment isn't suitable for a large family.",
    "這間公寓不適合一個大家庭居住。",
    "adj."
  ],
  [
    "superior",
    "優越",
    "The new model offers superior performance at a lower price.",
    "這款新機型以更低的價格提供更優越的性能。",
    "n.／adj."
  ],
  [
    "support",
    "支持",
    "Thank you for your continued support of our small business.",
    "謝謝你一直以來對我們這間小店的支持。",
    "n.／v."
  ],
  [
    "suppose",
    "猜想",
    "I suppose we should leave soon to avoid the traffic.",
    "我想我們該早點出發以避開塞車。",
    "v."
  ],
  [
    "surf",
    "衝浪",
    "They spent the whole morning learning to surf.",
    "他們花了整個早上學習衝浪。",
    "n.／v."
  ],
  [
    "surface",
    "表面",
    "Dust had settled on every surface in the room.",
    "房間裡每個表面都積了一層灰塵。",
    "n.／v.／adj."
  ],
  [
    "survival",
    "生存",
    "The training focuses on basic wilderness survival skills.",
    "這項訓練著重於基本的野外求生技能。",
    "n."
  ],
  [
    "survive",
    "生存",
    "Few of the old buildings survived the earthquake.",
    "地震後很少有舊建築物倖存下來。",
    "v."
  ],
  [
    "suspicion",
    "懷疑",
    "Police grew suspicious of his unusual behavior.",
    "警方對他不尋常的行為起了疑心。",
    "n."
  ],
  [
    "suspicious",
    "可疑的",
    "A suspicious package was found near the entrance.",
    "入口附近發現了一個可疑的包裹。",
    "adj."
  ],
  [
    "symbolize",
    "象徵",
    "The white dove is often used to symbolize peace.",
    "白鴿常被用來象徵和平。",
    "v."
  ],
  [
    "syrup",
    "糖漿",
    "She poured syrup over the pancakes.",
    "她把糖漿淋在鬆餅上。",
    "n."
  ],
  [
    "tag",
    "標籤",
    "Please check the price tag before buying the item.",
    "購買前請先確認價格標籤。",
    "n.／v."
  ],
  [
    "take for granted",
    "理所當然的",
    "We often take clean water for granted.",
    "我們常常把乾淨的水視為理所當然。",
    "idiom"
  ],
  [
    "talent",
    "天賦",
    "He has a natural talent for painting.",
    "他天生具有繪畫的天賦。",
    "n."
  ],
  [
    "technically",
    "技術上",
    "Technically, the contract hasn't been signed yet.",
    "嚴格來說，這份合約還沒有正式簽署。",
    "adv."
  ],
  [
    "technique",
    "技術",
    "She learned a new technique for managing stress.",
    "她學會了一種管理壓力的新技巧。",
    "n."
  ],
  [
    "technological",
    "技術性",
    "Technological advances have transformed the industry.",
    "技術上的進步已經改變了這個產業。",
    "adj."
  ],
  [
    "teenager",
    "青少年",
    "As a teenager, she loved reading fantasy novels.",
    "她青少年時期很喜歡讀奇幻小說。",
    "n."
  ],
  [
    "temporarily",
    "暫時",
    "The store is temporarily closed for renovations.",
    "這間店因整修而暫時歇業。",
    "adv."
  ],
  [
    "the departed",
    "離去",
    "The ceremony honored the memory of the departed.",
    "這場儀式是為了緬懷已故的人。",
    "n."
  ],
  [
    "thirst",
    "口渴",
    "The long hike left them with an intense thirst.",
    "這趟長途健行讓他們感到極度口渴。",
    "n.／v."
  ],
  [
    "tide",
    "湖水",
    "The tide comes in quickly along this part of the coast.",
    "這段海岸潮水漲得很快。",
    "n.／v."
  ],
  [
    "tissue paper",
    "面紙",
    "She wrapped the gift in colorful tissue paper.",
    "她用彩色的面紙包裝了這份禮物。",
    "n."
  ],
  [
    "To top it all off",
    "最糟糕的是",
    "The car broke down, and to top it all off, it started to rain.",
    "車子拋錨了，最糟的是，還開始下雨了。",
    "adv."
  ],
  [
    "toast",
    "土司",
    "He had toast and jam for breakfast.",
    "他早餐吃了土司配果醬。",
    "n.／v."
  ],
  [
    "toss",
    "折騰",
    "She tossed and turned all night, unable to sleep.",
    "她整晚輾轉反側，無法入睡。",
    "n.／v."
  ],
  [
    "tough",
    "強硬",
    "The negotiations were tough but ultimately successful.",
    "這場談判很艱難，但最終成功了。",
    "n.／adj."
  ],
  [
    "tourist",
    "遊客",
    "The old town attracts thousands of tourists every year.",
    "這座舊城每年吸引數千名遊客。",
    "n."
  ],
  [
    "traditional",
    "傳統",
    "The restaurant serves traditional dishes from the region.",
    "這間餐廳供應這個地區的傳統菜餚。",
    "adj."
  ],
  [
    "traffic",
    "交通",
    "Traffic was heavier than usual this morning.",
    "今天早上的交通比平常更繁忙。",
    "n.／v."
  ],
  [
    "tragedy",
    "悲劇",
    "The play tells the tragedy of a fallen king.",
    "這齣戲講述了一位落難國王的悲劇故事。",
    "n."
  ],
  [
    "transform",
    "改造",
    "The renovation transformed the old warehouse into a modern office.",
    "這次整修把老舊的倉庫改造成了現代化的辦公室。",
    "v."
  ],
  [
    "translate",
    "翻譯",
    "Could you translate this document into English?",
    "你能把這份文件翻譯成英文嗎？",
    "v."
  ],
  [
    "transport",
    "運輸",
    "The city plans to improve its public transport system.",
    "這座城市計畫改善其大眾運輸系統。",
    "n.／v."
  ],
  [
    "trash",
    "垃圾",
    "Please take the trash out before you leave.",
    "離開前請把垃圾拿出去丟。",
    "n.／v."
  ],
  [
    "traveler",
    "旅客",
    "The hostel is popular among budget travelers.",
    "這間青年旅館在精打細算的旅客之間很受歡迎。",
    "n."
  ],
  [
    "tremendous",
    "巨大",
    "The event was a tremendous success.",
    "這場活動獲得了巨大的成功。",
    "adj."
  ],
  [
    "trend",
    "趨勢",
    "Remote work has become a growing trend in recent years.",
    "遠距工作近年來已成為日益成長的趨勢。",
    "n.／v."
  ],
  [
    "tribute",
    "進貢",
    "The concert was a tribute to the late singer.",
    "這場演唱會是對這位已故歌手的致敬。",
    "n."
  ],
  [
    "triumph",
    "勝利",
    "Winning the championship was a triumph for the whole team.",
    "贏得冠軍是整個團隊的一大勝利。",
    "n.／v."
  ],
  [
    "tropical",
    "熱帶",
    "They spent their honeymoon on a tropical island.",
    "他們在一座熱帶島嶼度蜜月。",
    "adj."
  ],
  [
    "tune in",
    "在調",
    "Fans tuned in to watch the live broadcast.",
    "粉絲們收看了這場現場直播。",
    "phr.v."
  ],
  [
    "turn the tide",
    "力挽狂瀾",
    "A single goal turned the tide of the entire match.",
    "一記進球扭轉了整場比賽的局勢。",
    "idiom"
  ],
  [
    "type",
    "類型",
    "What type of music do you usually listen to?",
    "你通常都聽哪種類型的音樂？",
    "n.／v."
  ],
  [
    "undergo",
    "經歷",
    "The building will undergo major renovations next year.",
    "這棟建築明年將進行大規模的整修。",
    "v."
  ],
  [
    "undesirable",
    "不良的",
    "The chemical has several undesirable side effects.",
    "這種化學物質有幾種不良的副作用。",
    "n.／adj."
  ],
  [
    "unexpectedly",
    "居然",
    "The company unexpectedly announced a merger this week.",
    "這家公司這星期出乎意料地宣布了合併案。",
    "adv."
  ],
  [
    "unfavorable",
    "不利的",
    "The team is playing under unfavorable weather conditions.",
    "這支隊伍正在不利的天候條件下比賽。",
    "adj."
  ],
  [
    "unplug",
    "拔出",
    "Please unplug the toaster after use.",
    "使用後請將烤麵包機的插頭拔掉。",
    "v."
  ],
  [
    "unpredictable",
    "不可預知的",
    "Mountain weather can be extremely unpredictable.",
    "山區的天氣可能極度難以預測。",
    "adj."
  ],
  [
    "upset",
    "煩惱",
    "She was upset about missing the deadline.",
    "她因為錯過截止期限而感到心煩。",
    "n.／v.／adj."
  ],
  [
    "urban",
    "城市的",
    "Urban areas tend to have higher living costs.",
    "城市地區的生活成本通常較高。",
    "adj."
  ],
  [
    "utilize",
    "利用",
    "The team learned to utilize new software to save time.",
    "團隊學會了利用新軟體來節省時間。",
    "v."
  ],
  [
    "value",
    "價值",
    "The house has increased in value over the years.",
    "這棟房子這些年來價值不斷上升。",
    "n.／v."
  ],
  [
    "variety",
    "品種",
    "The bakery offers a variety of fresh bread every day.",
    "這間麵包店每天都提供多種新鮮麵包。",
    "n."
  ],
  [
    "various",
    "各種",
    "The report covers various aspects of the market.",
    "這份報告涵蓋了市場的各種面向。",
    "adj."
  ],
  [
    "vast",
    "廣大",
    "The company manages a vast amount of customer data.",
    "這家公司管理著龐大的客戶資料量。",
    "adj."
  ],
  [
    "vegetarian",
    "素食主義者",
    "She has been a vegetarian for over ten years.",
    "她已經吃素超過十年了。",
    "n."
  ],
  [
    "victim",
    "受害者",
    "The charity supports victims of natural disasters.",
    "這個慈善機構支持天災的受害者。",
    "n."
  ],
  [
    "violet",
    "紫羅蘭",
    "The garden was full of violet flowers in spring.",
    "這座花園春天開滿了紫羅蘭花。",
    "n.／adj."
  ],
  [
    "viral marketing",
    "病毒式行銷",
    "The brand used viral marketing to reach younger audiences.",
    "這個品牌利用病毒式行銷來觸及年輕受眾。",
    "n."
  ],
  [
    "virus",
    "病毒",
    "A computer virus infected several company laptops.",
    "一個電腦病毒感染了公司裡好幾台筆電。",
    "n."
  ],
  [
    "vision",
    "視力",
    "Regular eye exams help maintain good vision.",
    "定期眼科檢查有助於維持良好的視力。",
    "n."
  ],
  [
    "visual",
    "視覺的",
    "The presentation included several visual aids.",
    "這場簡報包含了幾項視覺輔助教材。",
    "adj."
  ],
  [
    "vital",
    "重要",
    "Clear communication is vital to the project's success.",
    "清晰的溝通對這個專案的成功至關重要。",
    "adj."
  ],
  [
    "volcano",
    "火山",
    "The volcano has been dormant for over a century.",
    "這座火山已經沉睡超過一個世紀了。",
    "n."
  ],
  [
    "volunteer",
    "志願者",
    "She spends her weekends as a volunteer at the shelter.",
    "她週末都在收容所擔任志工。",
    "n.／v.／adj."
  ],
  [
    "weekly",
    "每週",
    "The team holds a weekly progress meeting on Mondays.",
    "團隊每週一都會舉行進度會議。",
    "n.／adj.／adv."
  ],
  [
    "whip up",
    "掀起",
    "The chef whipped up a quick meal for the unexpected guests.",
    "主廚為這些不速之客迅速做了一頓餐。",
    "phr.v."
  ],
  [
    "whole wheat",
    "全麥",
    "She prefers whole wheat bread over white bread.",
    "她比較喜歡全麥麵包勝過白麵包。",
    "n."
  ],
  [
    "wireless",
    "無線",
    "The office switched to a wireless network last year.",
    "這間辦公室去年改用了無線網路。",
    "n.／adj."
  ],
  [
    "wonder",
    "難怪",
    "No wonder she looked tired after such a long trip.",
    "難怪她經過這麼長的旅程後看起來很累。",
    "n.／v."
  ],
  [
    "word of mouth",
    "口耳相傳",
    "The restaurant became popular purely through word of mouth.",
    "這間餐廳完全是靠口耳相傳而變得受歡迎。",
    "n."
  ],
  [
    "worth",
    "價值",
    "The painting is worth a lot more than we expected.",
    "這幅畫的價值比我們預期的高出許多。",
    "n.／adj."
  ],
  [
    "worthy",
    "配稱",
    "Her dedication makes her a worthy candidate for the award.",
    "她的付出讓她成為這個獎項的實至名歸的人選。",
    "n.／adj."
  ],
  [
    "wrapped",
    "包裹",
    "The gifts were neatly wrapped under the tree.",
    "這些禮物整整齊齊地包好放在樹下。",
    "adj."
  ],
  [
    "invoice",
    "發票",
    "Please send the invoice to the accounting department by Friday.",
    "請在星期五之前把發票寄給會計部門。",
    "n.／v."
  ],
  [
    "reimburse",
    "償還",
    "The company will reimburse you for your travel expenses.",
    "公司會核銷你的差旅費用。",
    "v."
  ],
  [
    "deadline",
    "截止期限",
    "We need to submit the proposal before the deadline.",
    "我們必須在截止期限前提交提案。",
    "n."
  ],
  [
    "negotiate",
    "談判",
    "Both sides agreed to negotiate a new contract.",
    "雙方同意就新合約進行談判。",
    "v."
  ],
  [
    "inventory",
    "庫存",
    "The warehouse conducts an inventory check every month.",
    "倉庫每個月都會進行一次庫存盤點。",
    "n.／v."
  ],
  [
    "merger",
    "合併",
    "The merger between the two firms was announced yesterday.",
    "這兩家公司的合併案昨天已經公布了。",
    "n."
  ],
  [
    "revenue",
    "營收",
    "The company's revenue grew by ten percent last year.",
    "這家公司去年的營收成長了百分之十。",
    "n."
  ],
  [
    "quarterly",
    "每季的",
    "The manager reviews sales figures on a quarterly basis.",
    "這位經理每一季都會檢視銷售數字。",
    "n.／adj.／adv."
  ],
  [
    "shipment",
    "貨運；裝運",
    "The shipment is expected to arrive at the port on Monday.",
    "這批貨預計星期一會抵達港口。",
    "n."
  ],
  [
    "vendor",
    "供應商",
    "We are comparing offers from three different vendors.",
    "我們正在比較三家不同供應商的報價。",
    "n."
  ],
  [
    "warranty",
    "保固",
    "The laptop comes with a two-year warranty.",
    "這台筆電附有兩年保固。",
    "n."
  ],
  [
    "clientele",
    "客群",
    "The restaurant has built a loyal clientele over the years.",
    "這間餐廳這些年來累積了一批忠實客群。",
    "n."
  ],
  [
    "overhead",
    "營運成本",
    "Reducing overhead costs helped the company stay profitable.",
    "降低營運成本幫助公司維持獲利。",
    "n.／adj.／adv."
  ],
  [
    "payroll",
    "薪資名冊",
    "The payroll department processes salaries at the end of each month.",
    "薪資部門每個月底處理薪水發放作業。",
    "n."
  ],
  [
    "proposal",
    "提案",
    "The marketing team submitted a new proposal for the campaign.",
    "行銷團隊針對這次活動提交了新的提案。",
    "n."
  ],
  [
    "logistics",
    "物流",
    "The logistics team coordinates deliveries across the country.",
    "物流團隊負責協調全國各地的貨物運送。",
    "n."
  ],
  [
    "procurement",
    "採購",
    "The procurement office handles all purchases over a certain amount.",
    "採購部門負責處理超過一定金額的所有採購案。",
    "n."
  ],
  [
    "stakeholder",
    "利害關係人",
    "The plan was presented to all major stakeholders.",
    "這項計畫已向所有主要利害關係人簡報過。",
    "n."
  ],
  [
    "subsidiary",
    "子公司",
    "The company opened a new subsidiary in Southeast Asia.",
    "這家公司在東南亞開設了一間新的子公司。",
    "n.／adj."
  ],
  [
    "turnover",
    "人員流動率；營業額",
    "High staff turnover has become a concern for the HR team.",
    "員工流動率偏高已成為人資團隊擔憂的問題。",
    "n."
  ],
  [
    "compliance",
    "合規",
    "The audit checks compliance with safety regulations.",
    "這項稽核在檢查是否符合安全法規。",
    "n."
  ],
  [
    "itinerary",
    "行程表",
    "Her business trip itinerary includes stops in three cities.",
    "她的出差行程包含三個城市的停留點。",
    "n."
  ],
  [
    "endorse",
    "背書；認可",
    "The board voted to endorse the new strategy.",
    "董事會投票通過認可這項新策略。",
    "v."
  ],
  [
    "allocate",
    "分配",
    "Funds were allocated to each department based on last year's budget.",
    "資金是根據去年的預算分配給各部門的。",
    "v."
  ],
  [
    "draft",
    "草擬",
    "Please draft a reply to the client by tomorrow morning.",
    "請在明天早上之前草擬一份給客戶的回覆。",
    "n.／v."
  ],
  [
    "forecast",
    "預測",
    "The sales forecast for next quarter looks promising.",
    "下一季的銷售預測看起來令人樂觀。",
    "n.／v."
  ],
  [
    "liaise",
    "聯繫協調",
    "She liaises with suppliers to make sure orders arrive on time.",
    "她負責與供應商聯繫協調，以確保訂單準時送達。",
    "v."
  ],
  [
    "outsource",
    "外包",
    "The company decided to outsource its customer service.",
    "這家公司決定將客服業務外包出去。",
    "v."
  ],
  [
    "quota",
    "配額",
    "Each salesperson has a monthly quota to meet.",
    "每位業務員每個月都有配額要達成。",
    "n."
  ],
  [
    "redundant",
    "冗員的；多餘的",
    "Several positions became redundant after the merger.",
    "合併之後，有幾個職位變得多餘而遭到裁撤。",
    "adj."
  ],
  [
    "retail",
    "零售",
    "The brand is expanding into the retail market.",
    "這個品牌正在拓展進入零售市場。",
    "n.／v.／adv."
  ],
  [
    "tenant",
    "房客；承租人",
    "The tenant signed a two-year lease for the office space.",
    "這位承租人簽下了這間辦公空間兩年的租約。",
    "n.／v."
  ],
  [
    "transaction",
    "交易",
    "All transactions are recorded in the accounting system.",
    "所有交易都會記錄在會計系統裡。",
    "n."
  ],
  [
    "venture",
    "創業；投資事業",
    "The two companies launched a joint venture last spring.",
    "這兩家公司去年春天共同成立了一間合資企業。",
    "n.／v."
  ],
  [
    "accommodate",
    "容納；配合",
    "The hotel can accommodate up to three hundred guests.",
    "這間飯店最多可以容納三百位賓客。",
    "v."
  ],
  [
    "agenda",
    "議程",
    "The meeting agenda includes a review of last month's sales.",
    "這次會議的議程包含檢視上個月的銷售狀況。",
    "n."
  ],
  [
    "correspondence",
    "書信往來",
    "All correspondence with clients should be kept on file.",
    "與客戶往來的所有書信都應該歸檔保存。",
    "n."
  ],
  [
    "delegate",
    "委派；代表",
    "The manager delegated the task to a junior staff member.",
    "經理把這項任務委派給一位資淺員工。",
    "n.／v."
  ],
  [
    "feasibility",
    "可行性",
    "The team conducted a feasibility study before starting the project.",
    "團隊在展開專案之前先做了一項可行性研究。",
    "n."
  ],
  [
    "incentive",
    "誘因；獎勵",
    "The company offers incentives for employees who exceed their targets.",
    "公司為超越目標的員工提供獎勵誘因。",
    "n."
  ],
  [
    "acquire",
    "取得；收購",
    "The tech giant plans to acquire a promising startup next month.",
    "這家科技巨頭計畫下個月收購一家頗具潛力的新創公司。",
    "v."
  ],
  [
    "amend",
    "修訂",
    "The board voted to amend the company's bylaws.",
    "董事會投票通過修訂公司章程。",
    "v."
  ],
  [
    "appraisal",
    "評估；考核",
    "Employees receive a performance appraisal every six months.",
    "員工每六個月會接受一次績效考核。",
    "n."
  ],
  [
    "arrears",
    "欠款；拖欠款項",
    "The tenant fell into arrears after missing three months of rent.",
    "這位房客連續三個月未繳租金而積欠款項。",
    "n."
  ],
  [
    "asset",
    "資產",
    "Skilled employees are one of the company's greatest assets.",
    "熟練的員工是公司最大的資產之一。",
    "n."
  ],
  [
    "audit",
    "稽核；審計",
    "An external firm conducts an audit of the accounts every year.",
    "一家外部事務所每年都會對帳目進行稽核。",
    "n.／v."
  ],
  [
    "brochure",
    "小冊子；宣傳手冊",
    "The sales team handed out brochures at the trade show.",
    "業務團隊在商展上發放了宣傳手冊。",
    "n."
  ],
  [
    "clause",
    "條款",
    "Please review the termination clause before signing the contract.",
    "請在簽約前先審閱終止條款。",
    "n."
  ],
  [
    "commission",
    "佣金",
    "Sales representatives earn a commission on every deal they close.",
    "業務代表每完成一筆交易都能賺取佣金。",
    "n.／v."
  ],
  [
    "consolidate",
    "整合；鞏固",
    "The two departments were consolidated to reduce costs.",
    "這兩個部門被整合以降低成本。",
    "v."
  ],
  [
    "correspondent",
    "通訊記者；聯絡人",
    "Our correspondent in Tokyo will cover the product launch.",
    "我們駐東京的記者將報導這場產品發表會。",
    "n.／adj."
  ],
  [
    "curb",
    "抑制；控制",
    "The new policy aims to curb unnecessary spending.",
    "這項新政策旨在抑制不必要的開支。",
    "n.／v."
  ],
  [
    "disburse",
    "支付；撥款",
    "Funds will be disbursed to vendors within thirty days.",
    "款項將在三十天內撥付給供應商。",
    "v."
  ],
  [
    "dispatch",
    "派遣；發送",
    "The company will dispatch a technician to fix the issue tomorrow.",
    "公司明天會派一名技術人員來解決這個問題。",
    "n.／v."
  ],
  [
    "downsize",
    "裁員；縮編",
    "The firm decided to downsize its overseas offices.",
    "這家公司決定縮編其海外辦公室。",
    "v."
  ],
  [
    "enclose",
    "附上（信件、文件）",
    "Please find the signed contract enclosed with this email.",
    "請查收隨此電子郵件附上的已簽署合約。",
    "v."
  ],
  [
    "endeavor",
    "努力；致力",
    "The team's latest endeavor focuses on entering the European market.",
    "這個團隊最新的努力方向是進軍歐洲市場。",
    "n.／v."
  ],
  [
    "entrepreneur",
    "創業家",
    "The award recognizes young entrepreneurs who launched successful startups.",
    "這個獎項表揚成功創辦新創公司的年輕創業家。",
    "n."
  ],
  [
    "fiscal",
    "財政的；會計年度的",
    "The company's fiscal year ends in March.",
    "這家公司的會計年度於三月結束。",
    "adj."
  ],
  [
    "franchise",
    "加盟；特許經營",
    "The coffee chain plans to expand through franchise agreements.",
    "這間咖啡連鎖店計畫透過加盟協議來擴張。",
    "n.／v."
  ],
  [
    "gross",
    "總額的；毛額的",
    "Gross revenue increased despite rising operating costs.",
    "儘管營運成本上升，總營收依然成長。",
    "n.／v.／adj."
  ],
  [
    "implement",
    "實施；執行",
    "The company will implement the new software system next quarter.",
    "公司下一季將實施這套新的軟體系統。",
    "n.／v."
  ],
  [
    "lucrative",
    "獲利豐厚的",
    "Exporting to Southeast Asia has proven to be a lucrative venture.",
    "拓展東南亞出口業務證實是一項獲利豐厚的事業。",
    "adj."
  ],
  [
    "mediate",
    "調解",
    "A neutral party was asked to mediate the dispute between the two firms.",
    "一位中立人士被請來調解這兩家公司之間的糾紛。",
    "v.／adj."
  ],
  [
    "mandate",
    "授權；命令",
    "The new CEO has a clear mandate to restructure the company.",
    "這位新執行長獲得明確授權來重整公司。",
    "n.／v."
  ],
  [
    "obsolete",
    "過時的；淘汰的",
    "The factory replaced its obsolete equipment with automated machines.",
    "這間工廠以自動化機器汰換了過時的設備。",
    "adj."
  ],
  [
    "perk",
    "額外福利",
    "Free gym membership is one of the perks offered to employees.",
    "免費健身房會籍是提供給員工的福利之一。",
    "n.／v."
  ],
  [
    "premise",
    "前提；假設",
    "The business plan is based on the premise that demand will keep growing.",
    "這份商業計畫是建立在需求將持續成長的前提之上。",
    "n.／v."
  ],
  [
    "prospectus",
    "招股說明書",
    "Investors should read the prospectus carefully before buying shares.",
    "投資人在購買股份前應該仔細閱讀招股說明書。",
    "n."
  ],
  [
    "relocate",
    "遷移；搬遷",
    "The headquarters will relocate to a larger building next year.",
    "總部明年將遷移到一棟更大的建築物。",
    "v."
  ],
  [
    "accelerate",
    "加速",
    "The company plans to accelerate its expansion into Asia.",
    "這家公司計畫加速拓展進軍亞洲市場。",
    "v."
  ],
  [
    "accompany",
    "陪伴；伴隨",
    "She asked a colleague to accompany her to the client meeting.",
    "她請一位同事陪她一起去見客戶。",
    "v."
  ],
  [
    "accumulate",
    "累積",
    "Frequent flyers accumulate points that can be redeemed for tickets.",
    "常客可以累積點數兌換機票。",
    "v."
  ],
  [
    "adequate",
    "足夠的",
    "The budget wasn't adequate to cover all the expenses.",
    "這筆預算不足以支應所有開銷。",
    "adj."
  ],
  [
    "adjust",
    "調整",
    "Please adjust the thermostat if the room feels too cold.",
    "如果房間太冷，請調整一下溫控器。",
    "v."
  ],
  [
    "administer",
    "管理；施行",
    "The nurse administered the vaccine carefully.",
    "護理師仔細地施打了這劑疫苗。",
    "v."
  ],
  [
    "aisle",
    "走道",
    "Please make sure the aisle stays clear during the flight.",
    "飛行期間請確保走道保持暢通。",
    "n."
  ],
  [
    "allege",
    "聲稱",
    "The report alleges that the company hid the accident.",
    "這份報告聲稱這家公司隱瞞了這起意外。",
    "v."
  ],
  [
    "ally",
    "盟友",
    "The two companies became allies in the new market.",
    "這兩家公司在這個新市場中成了盟友。",
    "n.／v."
  ],
  [
    "analogy",
    "類比",
    "The teacher used a simple analogy to explain the concept.",
    "老師用一個簡單的類比來說明這個概念。",
    "n."
  ],
  [
    "annual",
    "每年的",
    "The company holds an annual conference for all staff.",
    "這家公司每年都會為全體員工舉辦一場年度大會。",
    "n.／adj."
  ],
  [
    "anticipate",
    "預期",
    "We anticipate strong demand for the new product.",
    "我們預期這項新產品會有強勁的需求。",
    "v."
  ],
  [
    "apparatus",
    "裝置；器材",
    "The lab is equipped with modern testing apparatus.",
    "這間實驗室配備了現代化的測試裝置。",
    "n."
  ],
  [
    "apt",
    "恰當的；易於～的",
    "Her comment was apt given the circumstances.",
    "考量到當時的情況，她的評論十分恰當。",
    "adj."
  ],
  [
    "arena",
    "競技場；領域",
    "The company is entering a highly competitive arena.",
    "這家公司正進入一個競爭極為激烈的領域。",
    "n."
  ],
  [
    "array",
    "陣列；一系列",
    "The store offers a wide array of choices.",
    "這間店提供各式各樣的選擇。",
    "n.／v."
  ],
  [
    "ascend",
    "上升；攀登",
    "Hikers ascend the mountain slowly to avoid altitude sickness.",
    "登山客緩慢上山以避免高山症。",
    "v."
  ],
  [
    "aspire",
    "渴望；立志",
    "She aspires to become a company director one day.",
    "她立志有朝一日成為公司的董事。",
    "v."
  ],
  [
    "assert",
    "斷言；主張",
    "He asserted that the deadline was unrealistic.",
    "他堅稱這個截止日期不切實際。",
    "v."
  ],
  [
    "assess",
    "評估",
    "Teachers assess student progress every semester.",
    "老師每學期都會評估學生的學習進度。",
    "v."
  ],
  [
    "assign",
    "分配；指派",
    "The manager assigned the task to two team members.",
    "經理把這項任務指派給兩位團隊成員。",
    "v."
  ],
  [
    "assort",
    "分類；配置",
    "The store assorts its products by category.",
    "這間店依照類別分類擺放商品。",
    "v."
  ],
  [
    "assure",
    "向…保證",
    "She assured us that the shipment would arrive on time.",
    "她向我們保證貨物將準時抵達。",
    "v."
  ],
  [
    "attest",
    "證明；證實",
    "Several witnesses can attest to what happened.",
    "好幾位目擊者可以證明當時發生的事。",
    "v."
  ],
  [
    "avert",
    "避免；防止",
    "Quick action helped avert a bigger disaster.",
    "迅速的行動幫助避免了更大的災難。",
    "v."
  ],
  [
    "awesome",
    "了不起的",
    "The view from the summit was absolutely awesome.",
    "從山頂看到的景色實在太壯觀了。",
    "adj."
  ],
  [
    "backfire",
    "適得其反",
    "The plan backfired and made things worse.",
    "這個計畫適得其反，讓情況變得更糟。",
    "n.／v."
  ],
  [
    "backup",
    "備份；支援",
    "Always keep a backup of important files.",
    "重要檔案一定要保留備份。",
    "n."
  ],
  [
    "balance sheet",
    "資產負債表",
    "The accountant reviewed the balance sheet before the audit.",
    "會計師在審計前檢查了資產負債表。",
    "n."
  ],
  [
    "bankrupt",
    "破產的",
    "The store went bankrupt after years of losses.",
    "這間店在虧損多年後宣告破產。",
    "n.／v.／adj."
  ],
  [
    "barrier-free",
    "無障礙的",
    "The new building is fully barrier-free.",
    "這棟新建築完全無障礙。",
    "adj."
  ],
  [
    "batch",
    "一批",
    "The factory produces a new batch of products every day.",
    "這間工廠每天生產一批新的產品。",
    "n.／v."
  ],
  [
    "bias",
    "偏見",
    "The study aimed to avoid any gender bias.",
    "這項研究致力於避免任何性別偏見。",
    "n.／v.／adj."
  ],
  [
    "blueprint",
    "藍圖",
    "The architect presented the blueprint for the new office.",
    "建築師展示了新辦公室的藍圖。",
    "n.／v."
  ],
  [
    "boast",
    "誇耀；擁有",
    "The city boasts a rich cultural history.",
    "這座城市擁有豐富的文化歷史。",
    "n.／v."
  ],
  [
    "bounce back",
    "恢復；反彈",
    "The market bounced back quickly after the dip.",
    "市場在下跌後迅速反彈。",
    "phr.v."
  ],
  [
    "boundary",
    "界線；界限",
    "It's important to set clear boundaries at work.",
    "在職場設立清楚的界線很重要。",
    "n."
  ],
  [
    "brainstorm",
    "腦力激盪",
    "The team brainstormed ideas for the new campaign.",
    "團隊為這場新活動進行了腦力激盪。",
    "n.／v."
  ],
  [
    "breakthrough",
    "突破",
    "Scientists made a major breakthrough in cancer research.",
    "科學家在癌症研究上取得了重大突破。",
    "n."
  ],
  [
    "brief",
    "簡短的；簡報",
    "The manager gave a brief update before the meeting ended.",
    "經理在會議結束前做了簡短的說明。",
    "n.／v.／adj."
  ],
  [
    "broaden",
    "拓寬",
    "Traveling helps broaden your perspective.",
    "旅行有助於拓寬你的視野。",
    "v."
  ],
  [
    "budget cut",
    "預算削減",
    "The department is dealing with another budget cut.",
    "這個部門正面臨另一次預算削減。",
    "n."
  ],
  [
    "burden",
    "負擔",
    "The extra workload became a heavy burden on the team.",
    "額外的工作量成為團隊沉重的負擔。",
    "n.／v."
  ],
  [
    "capacity building",
    "能力建設",
    "The NGO focuses on capacity building in rural areas.",
    "這個非政府組織致力於鄉村地區的能力建設。",
    "n."
  ],
  [
    "capitalize",
    "利用；資本化",
    "The company capitalized on the trend early.",
    "這家公司很早就利用了這股趨勢。",
    "v."
  ],
  [
    "cast doubt on",
    "使人懷疑",
    "New evidence cast doubt on the original theory.",
    "新的證據讓人對原本的理論產生懷疑。",
    "phr.v."
  ],
  [
    "casual",
    "隨意的",
    "The office has a casual dress code on Fridays.",
    "這間辦公室星期五採寬鬆的服裝規定。",
    "adj."
  ],
  [
    "catastrophe",
    "災難",
    "The flood was described as an environmental catastrophe.",
    "這場洪水被形容為一場環境災難。",
    "n."
  ],
  [
    "cater",
    "迎合；提供餐飲",
    "The restaurant caters to a wide range of dietary needs.",
    "這間餐廳能滿足廣泛的飲食需求。",
    "v."
  ],
  [
    "caution",
    "謹慎；警告",
    "Drivers should use extra caution in foggy conditions.",
    "駕駛在起霧的狀況下應格外謹慎。",
    "n.／v."
  ],
  [
    "cease",
    "停止",
    "The company ceased operations last month.",
    "這家公司上個月停止了營運。",
    "n.／v."
  ],
  [
    "chaos",
    "混亂",
    "The power outage caused chaos in the office.",
    "停電讓辦公室陷入一片混亂。",
    "n."
  ],
  [
    "chart out",
    "規劃",
    "The team charted out a plan for the next quarter.",
    "團隊為下一季規劃了一份計畫。",
    "phr.v."
  ],
  [
    "chronic",
    "慢性的；長期的",
    "Chronic stress can affect both physical and mental health.",
    "慢性壓力可能影響身心健康。",
    "adj."
  ],
  [
    "circulate",
    "流通；傳閱",
    "Please circulate the report to all department heads.",
    "請把這份報告傳閱給所有部門主管。",
    "v."
  ],
  [
    "civic",
    "市民的；公民的",
    "Voting is an important civic duty.",
    "投票是重要的公民義務。",
    "adj."
  ],
  [
    "clarify",
    "澄清",
    "Could you clarify what you meant by that comment?",
    "你可以澄清一下那句話的意思嗎？",
    "v."
  ],
  [
    "clash",
    "衝突",
    "The two schedules clash, so we need to reschedule.",
    "這兩個行程互相衝突，所以我們需要重新安排時間。",
    "n.／v."
  ],
  [
    "coincidence",
    "巧合",
    "It was a strange coincidence that we met on the same flight.",
    "我們搭到同一班飛機真是奇妙的巧合。",
    "n."
  ],
  [
    "collapse",
    "倒塌；崩潰",
    "The old bridge finally collapsed after years of neglect.",
    "這座老橋在多年疏於維護後終於倒塌。",
    "n.／v."
  ],
  [
    "collide",
    "碰撞",
    "The two cars collided at the intersection.",
    "這兩輛車在十字路口相撞了。",
    "v."
  ],
  [
    "commence",
    "開始",
    "The ceremony will commence at ten o'clock sharp.",
    "典禮將在十點整開始。",
    "v."
  ],
  [
    "compact",
    "緊湊的；小型的",
    "They bought a compact car for city driving.",
    "他們買了一輛小型車用於市區駕駛。",
    "n.／v.／adj."
  ],
  [
    "compensate",
    "補償",
    "The airline compensated passengers for the long delay.",
    "航空公司為這次長時間的延誤補償了乘客。",
    "v."
  ],
  [
    "compile",
    "彙編；編譯",
    "The team compiled the survey results into a report.",
    "團隊把調查結果彙編成一份報告。",
    "v."
  ],
  [
    "comply",
    "遵守",
    "All staff must comply with the new safety rules.",
    "所有員工都必須遵守這項新的安全規定。",
    "v."
  ],
  [
    "compromise",
    "妥協",
    "Both sides had to compromise to reach an agreement.",
    "雙方都必須妥協才能達成協議。",
    "n.／v."
  ],
  [
    "conceal",
    "隱藏",
    "He tried to conceal his disappointment.",
    "他試圖隱藏他的失望。",
    "v."
  ],
  [
    "concede",
    "讓步；承認",
    "She conceded that the plan needed more work.",
    "她承認這個計畫還需要更多的努力。",
    "v."
  ],
  [
    "condense",
    "濃縮；簡化",
    "Please condense the report into two pages.",
    "請把這份報告濃縮成兩頁。",
    "v."
  ],
  [
    "confine",
    "限制",
    "Her research is confined to a specific age group.",
    "她的研究局限於特定的年齡層。",
    "v."
  ],
  [
    "conform",
    "遵從；符合",
    "The product must conform to safety standards.",
    "這項產品必須符合安全標準。",
    "v."
  ],
  [
    "confront",
    "面對；對質",
    "She decided to confront the issue directly.",
    "她決定直接面對這個問題。",
    "v."
  ],
  [
    "consecutive",
    "連續的",
    "The team won three consecutive championships.",
    "這支隊伍連續三年贏得冠軍。",
    "adj.／adv."
  ],
  [
    "consensus",
    "共識",
    "The committee reached a consensus after long discussion.",
    "委員會經過長時間討論後達成共識。",
    "n."
  ],
  [
    "constitute",
    "構成",
    "Overtime hours constitute a large part of her salary.",
    "加班時數佔了她薪水的一大部分。",
    "v."
  ],
  [
    "contemplate",
    "考慮；沉思",
    "She contemplated quitting her job for months.",
    "她考慮辭職已經好幾個月了。",
    "v."
  ],
  [
    "contradict",
    "與～矛盾",
    "His statement seemed to contradict earlier reports.",
    "他的說法似乎與先前的報導相矛盾。",
    "v."
  ],
  [
    "convert",
    "轉換",
    "The old factory was converted into loft apartments.",
    "這間舊工廠被改建成了樓中樓公寓。",
    "n.／v."
  ],
  [
    "coordinate",
    "協調",
    "She coordinates schedules for the entire team.",
    "她負責協調整個團隊的行程。",
    "n.／v.／adj."
  ],
  [
    "counteract",
    "抵消；抗衡",
    "The company launched a new ad to counteract negative press.",
    "這家公司推出一則新廣告來抵消負面報導的影響。",
    "v."
  ],
  [
    "cripple",
    "嚴重削弱",
    "The strike crippled the country's transport system.",
    "這場罷工嚴重癱瘓了這個國家的運輸系統。",
    "n.／v."
  ],
  [
    "crucial",
    "至關重要的",
    "Getting enough sleep is crucial for good health.",
    "充足的睡眠對健康至關重要。",
    "adj."
  ],
  [
    "customary",
    "習慣的；慣例的",
    "It's customary to tip the waiter in this country.",
    "在這個國家給服務生小費是慣例。",
    "adj."
  ],
  [
    "decline",
    "下降；婉拒",
    "Sales declined slightly during the off-season.",
    "銷售額在淡季時略微下滑。",
    "n.／v."
  ],
  [
    "deduce",
    "推斷",
    "From the evidence, she deduced who was responsible.",
    "從證據中，她推斷出誰該負責。",
    "v."
  ],
  [
    "default",
    "預設；違約",
    "The settings will revert to default if not changed.",
    "如果不修改，設定會恢復成預設值。",
    "n.／v."
  ],
  [
    "defer",
    "延後；服從",
    "The meeting was deferred to next Monday.",
    "這場會議被延後到下星期一。",
    "v."
  ],
  [
    "deficient",
    "不足的；有缺陷的",
    "The diet was deficient in essential vitamins.",
    "這份飲食缺乏必要的維生素。",
    "adj."
  ],
  [
    "demolish",
    "拆除",
    "The old building will be demolished next month.",
    "這棟舊建築下個月將被拆除。",
    "v."
  ],
  [
    "denounce",
    "譴責",
    "The organization denounced the unfair treatment of workers.",
    "這個組織譴責對工人的不公平待遇。",
    "v."
  ],
  [
    "deploy",
    "部署",
    "The company deployed new software across all offices.",
    "這家公司在所有辦公室部署了新軟體。",
    "v."
  ],
  [
    "deprive",
    "剝奪",
    "Lack of sleep can deprive you of energy the next day.",
    "睡眠不足可能會剝奪你隔天的精力。",
    "v."
  ],
  [
    "descend",
    "下降",
    "The plane began to descend as it approached the airport.",
    "飛機接近機場時開始下降。",
    "v."
  ],
  [
    "devise",
    "設計；想出",
    "The team devised a new strategy to cut costs.",
    "團隊設計了一套削減成本的新策略。",
    "n.／v."
  ],
  [
    "diagnose",
    "診斷",
    "The doctor diagnosed him with a minor infection.",
    "醫生診斷他患有輕微感染。",
    "v."
  ],
  [
    "differentiate",
    "區分",
    "It's hard to differentiate between the two products.",
    "要區分這兩項產品很困難。",
    "v."
  ],
  [
    "diminish",
    "減少；縮小",
    "Interest in the old brand has diminished over time.",
    "人們對這個舊品牌的興趣隨著時間逐漸減弱。",
    "v."
  ],
  [
    "disclose",
    "揭露",
    "The company must disclose any financial risks to investors.",
    "這家公司必須向投資人揭露任何財務風險。",
    "v."
  ],
  [
    "discreet",
    "謹慎的；審慎的",
    "Please be discreet when discussing the layoffs.",
    "討論裁員議題時請務必謹慎。",
    "adj."
  ],
  [
    "disperse",
    "驅散；分散",
    "Police asked the crowd to disperse peacefully.",
    "警方要求群眾和平散去。",
    "v."
  ],
  [
    "dispose",
    "處理；丟棄",
    "Please dispose of the waste properly.",
    "請妥善處理這些廢棄物。",
    "v."
  ],
  [
    "disrupt",
    "擾亂",
    "Heavy snow disrupted flights across the country.",
    "大雪擾亂了全國各地的航班。",
    "v."
  ],
  [
    "distort",
    "扭曲",
    "The report distorted the original data.",
    "這份報告扭曲了原始數據。",
    "v."
  ],
  [
    "divert",
    "轉移；改道",
    "The flight was diverted due to bad weather.",
    "這班飛機因天候不佳而改道。",
    "v."
  ],
  [
    "domain",
    "領域；網域",
    "She is an expert in the domain of cybersecurity.",
    "她是網路資安領域的專家。",
    "n."
  ],
  [
    "dominate",
    "支配；主導",
    "The company dominates the local smartphone market.",
    "這家公司主導著當地的智慧型手機市場。",
    "v."
  ],
  [
    "dwell",
    "居住；細想",
    "Try not to dwell on past mistakes.",
    "盡量不要糾結於過去的錯誤。",
    "v."
  ],
  [
    "elaborate",
    "詳盡的；詳細說明",
    "Could you elaborate on your proposal a bit more?",
    "你可以再詳細說明一下你的提案嗎？",
    "v.／adj."
  ],
  [
    "eliminate",
    "消除",
    "The new process eliminates unnecessary paperwork.",
    "這套新流程消除了不必要的文書作業。",
    "v."
  ],
  [
    "embark",
    "開始；著手",
    "The company is about to embark on a new venture.",
    "這家公司即將展開一項新的事業。",
    "v."
  ],
  [
    "enact",
    "制定；實施",
    "The government enacted a new environmental law.",
    "政府制定了一項新的環境法規。",
    "v."
  ],
  [
    "engage",
    "吸引；使…參與",
    "The presentation engaged the audience from the start.",
    "這場簡報從一開始就吸引了觀眾。",
    "v."
  ],
  [
    "enhance",
    "提升",
    "The update enhances the app's overall performance.",
    "這次更新提升了這個應用程式的整體效能。",
    "v."
  ],
  [
    "enlighten",
    "啟發；使…了解",
    "The lecture enlightened many students about the topic.",
    "這場講座讓許多學生對這個主題有了更深的理解。",
    "v."
  ],
  [
    "enrich",
    "豐富化；充實",
    "Travel can enrich your understanding of other cultures.",
    "旅行能豐富你對其他文化的理解。",
    "v."
  ],
  [
    "erode",
    "侵蝕；削弱",
    "Trust between the two teams eroded over time.",
    "隨著時間，這兩個團隊之間的信任逐漸被削弱。",
    "v."
  ],
  [
    "escalate",
    "升級；加劇",
    "The dispute quickly escalated into a legal battle.",
    "這場糾紛迅速升級成一場法律訴訟。",
    "v."
  ],
  [
    "evoke",
    "喚起",
    "The old photo evoked memories of her childhood.",
    "這張舊照片喚起了她童年的回憶。",
    "v."
  ],
  [
    "excel",
    "擅長；出色",
    "She excels at problem-solving under pressure.",
    "她擅長在壓力下解決問題。",
    "v."
  ],
  [
    "exceed",
    "超過",
    "Sales exceeded expectations this quarter.",
    "這一季的銷售額超出了預期。",
    "v."
  ],
  [
    "exemplify",
    "舉例說明",
    "The case exemplifies the risks of poor planning.",
    "這個案例說明了規劃不周所帶來的風險。",
    "v."
  ],
  [
    "exert",
    "施加；運用",
    "She exerted a great deal of effort to finish on time.",
    "她付出了很大的努力才準時完成。",
    "v."
  ],
  [
    "exhaust",
    "耗盡",
    "The team exhausted every option before giving up.",
    "團隊在放棄之前用盡了每一個選項。",
    "n.／v."
  ],
  [
    "expel",
    "驅逐；開除",
    "The student was expelled for cheating on the exam.",
    "這名學生因考試作弊而被開除。",
    "v."
  ],
  [
    "extract",
    "提取",
    "The company extracts oil from the region's reserves.",
    "這家公司從這個地區的儲量中開採石油。",
    "n.／v."
  ],
  [
    "falter",
    "動搖；猶豫",
    "Her confidence faltered before the big presentation.",
    "她在這場重要簡報前信心動搖了。",
    "n.／v."
  ],
  [
    "finalize",
    "敲定；完成",
    "Please finalize the contract by Friday.",
    "請在星期五前敲定這份合約。",
    "v."
  ],
  [
    "foresee",
    "預見",
    "No one could have foreseen such a sudden change.",
    "沒有人能預見到如此突然的變化。",
    "v."
  ],
  [
    "formulate",
    "制定；擬定",
    "The team formulated a new strategy for growth.",
    "團隊制定了一套新的成長策略。",
    "v."
  ],
  [
    "fortify",
    "強化",
    "The company fortified its cybersecurity systems.",
    "這家公司強化了它的網路資安系統。",
    "v."
  ],
  [
    "foster",
    "培養；促進",
    "The program fosters creativity among young students.",
    "這項計畫在年輕學生中培養創造力。",
    "n.／v.／adj."
  ],
  [
    "fraction",
    "一小部分；分數",
    "Only a small fraction of applicants were selected.",
    "只有一小部分的申請者獲選。",
    "n.／v."
  ],
  [
    "frank",
    "坦率的",
    "She gave a frank assessment of the situation.",
    "她對這個情況做出了坦率的評估。",
    "n.／v.／adj."
  ],
  [
    "fulfill",
    "實現；履行",
    "He finally fulfilled his dream of owning a business.",
    "他終於實現了擁有自己事業的夢想。",
    "v."
  ],
  [
    "generate",
    "產生",
    "The new product line generated strong sales.",
    "這個新產品線帶來了強勁的銷售。",
    "v."
  ],
  [
    "grant",
    "授予；補助金",
    "The university received a grant for climate research.",
    "這所大學獲得了一筆氣候研究的補助金。",
    "n.／v."
  ],
  [
    "hamper",
    "阻礙",
    "Bad weather hampered the rescue effort.",
    "惡劣的天氣阻礙了這次救援行動。",
    "n.／v."
  ],
  [
    "harness",
    "利用；駕馭",
    "The company harnesses solar power for its factories.",
    "這家公司利用太陽能為工廠供電。",
    "n.／v."
  ],
  [
    "hasten",
    "加速；催促",
    "She hastened to finish the report before the deadline.",
    "她加緊腳步在截止期限前完成了報告。",
    "v."
  ],
  [
    "hover",
    "盤旋",
    "The drone hovered above the field taking photos.",
    "這架無人機在田野上方盤旋拍照。",
    "v."
  ],
  [
    "identical",
    "完全相同的",
    "The two designs looked almost identical.",
    "這兩份設計看起來幾乎一模一樣。",
    "adj."
  ],
  [
    "immense",
    "巨大的",
    "The project required an immense amount of planning.",
    "這個專案需要極其龐大的規劃工作。",
    "adj."
  ],
  [
    "impending",
    "即將發生的",
    "Employees sensed the impending layoffs.",
    "員工們感覺到裁員即將發生。",
    "adj."
  ],
  [
    "imperative",
    "必要的；緊急的",
    "It's imperative that we finish this by tomorrow.",
    "我們必須在明天前完成這件事。",
    "n.／adj."
  ],
  [
    "imply",
    "暗示",
    "Her tone implied that she wasn't fully satisfied.",
    "她的語氣暗示她並不完全滿意。",
    "v."
  ],
  [
    "inaugurate",
    "開創；就職",
    "The new mayor was inaugurated last week.",
    "這位新市長上週正式就職。",
    "v."
  ],
  [
    "incorporate",
    "納入；併入",
    "The design incorporates feedback from customers.",
    "這個設計納入了顧客的意見回饋。",
    "v.／adj."
  ],
  [
    "inevitable",
    "不可避免的",
    "Some level of risk is inevitable in business.",
    "在商業活動中，一定程度的風險是不可避免的。",
    "n.／adj."
  ],
  [
    "infer",
    "推論",
    "From her silence, we inferred that she disagreed.",
    "從她的沉默中，我們推斷她不同意。",
    "v."
  ],
  [
    "infuse",
    "注入；灌輸",
    "The new manager infused fresh energy into the team.",
    "這位新經理為團隊注入了新的活力。",
    "v."
  ],
  [
    "initiate",
    "發起；開始",
    "She initiated a new mentorship program at the company.",
    "她在公司發起了一項新的導師計畫。",
    "n.／v."
  ],
  [
    "inquire",
    "詢問",
    "Please inquire at the front desk for more information.",
    "請到櫃台詢問更多資訊。",
    "v."
  ],
  [
    "instigate",
    "發起；煽動",
    "He instigated a discussion about better working hours.",
    "他發起了一場關於更好工時的討論。",
    "v."
  ],
  [
    "integrate",
    "整合",
    "The two systems were integrated into one platform.",
    "這兩套系統被整合成一個平台。",
    "v."
  ],
  [
    "intensify",
    "加強；加劇",
    "Competition in the industry has intensified this year.",
    "這個產業的競爭今年加劇了。",
    "v."
  ],
  [
    "interfere",
    "干涉；妨礙",
    "Please don't interfere with the negotiation process.",
    "請不要干涉這個談判過程。",
    "v."
  ],
  [
    "intervene",
    "介入；干預",
    "The teacher intervened before the argument escalated.",
    "老師在爭吵升級前介入處理。",
    "v."
  ],
  [
    "intrigue",
    "激起興趣",
    "The mystery of the old house intrigued the visitors.",
    "這棟老宅的神秘感激起了訪客的興趣。",
    "n.／v."
  ],
  [
    "invalidate",
    "使無效",
    "A single error can invalidate the entire report.",
    "一個錯誤就可能讓整份報告失效。",
    "v."
  ],
  [
    "invoke",
    "援引；喚起",
    "The lawyer invoked a previous ruling to support the case.",
    "這位律師援引先前的判決來支持這個案件。",
    "v."
  ],
  [
    "irritate",
    "激怒；使…煩躁",
    "Loud noise from the construction site irritated the residents.",
    "工地傳出的噪音讓居民感到惱怒。",
    "v."
  ],
  [
    "isolate",
    "隔離；孤立",
    "The team isolated the cause of the software bug.",
    "團隊找出並隔離了這個軟體錯誤的成因。",
    "v."
  ],
  [
    "jeopardize",
    "危及",
    "Missing the deadline could jeopardize the entire project.",
    "錯過截止期限可能危及整個專案。",
    "v."
  ],
  [
    "lag",
    "落後；延遲",
    "The economy has begun to lag behind neighboring countries.",
    "這個國家的經濟開始落後於鄰國。",
    "n.／v."
  ],
  [
    "liable",
    "應負責任的；有…傾向的",
    "The driver is liable for any damage caused.",
    "駕駛須對所造成的任何損害負責。",
    "adj."
  ],
  [
    "linger",
    "徘徊；逗留",
    "A faint smell of coffee lingered in the office.",
    "辦公室裡殘留著一絲咖啡的香氣。",
    "v."
  ],
  [
    "manifest",
    "顯現；表明",
    "Her stress began to manifest as physical symptoms.",
    "她的壓力開始以生理症狀顯現出來。",
    "n.／v.／adj."
  ],
  [
    "merge",
    "合併",
    "The two departments merged into a single division.",
    "這兩個部門合併成了一個單位。",
    "v."
  ],
  [
    "mobilize",
    "動員",
    "The organization mobilized volunteers within hours.",
    "這個組織在幾小時內動員了志工。",
    "v."
  ],
  [
    "modify",
    "修改",
    "Please modify the schedule to fit everyone's availability.",
    "請修改行程以配合大家的時間。",
    "v."
  ],
  [
    "mount",
    "安裝；增加",
    "Pressure mounted on the team to deliver results.",
    "團隊面臨的壓力越來越大，必須拿出成果。",
    "n.／v."
  ],
  [
    "mutual",
    "相互的",
    "Their partnership is based on mutual trust.",
    "他們的合作關係建立在相互信任之上。",
    "adj."
  ],
  [
    "narrate",
    "敘述",
    "She narrated the documentary in a calm voice.",
    "她用平靜的語調為這部紀錄片旁白。",
    "v."
  ],
  [
    "negate",
    "否定；抵消",
    "The extra cost negated any savings from the deal.",
    "額外的成本抵消了這筆交易所省下的錢。",
    "v."
  ],
  [
    "neutral",
    "中立的",
    "The mediator remained neutral throughout the discussion.",
    "這位調解人在整個討論過程中保持中立。",
    "n.／adj."
  ],
  [
    "nourish",
    "滋養",
    "A balanced diet helps nourish the body.",
    "均衡的飲食有助於滋養身體。",
    "v."
  ],
  [
    "notify",
    "通知",
    "Please notify us immediately if there are any changes.",
    "如果有任何變更，請立即通知我們。",
    "v."
  ],
  [
    "nurture",
    "培育；養育",
    "Good managers nurture the talent within their teams.",
    "優秀的經理會培育團隊內部的人才。",
    "n.／v."
  ],
  [
    "obscure",
    "模糊的；晦澀的",
    "The instructions were written in obscure technical terms.",
    "這些說明是用晦澀的技術術語寫成的。",
    "v.／adj."
  ],
  [
    "omit",
    "省略",
    "Please don't omit any important details from the report.",
    "請不要在報告中省略任何重要細節。",
    "v."
  ],
  [
    "optimize",
    "優化",
    "The team optimized the website for faster loading.",
    "團隊優化了這個網站以提升載入速度。",
    "v."
  ],
  [
    "outweigh",
    "超過；勝過",
    "The benefits of the plan outweigh the risks.",
    "這項計畫的好處大於風險。",
    "v."
  ],
  [
    "overlap",
    "重疊",
    "Their job responsibilities overlap in several areas.",
    "他們的工作職責在好幾個方面有重疊。",
    "n.／v."
  ],
  [
    "oversee",
    "監督",
    "She oversees the daily operations of the store.",
    "她負責監督這間店的日常營運。",
    "v."
  ],
  [
    "paramount",
    "首要的",
    "Safety is of paramount importance in this industry.",
    "安全在這個產業中是首要的重要事項。",
    "adj."
  ],
  [
    "perceive",
    "察覺；感知",
    "Customers perceive the brand as reliable and modern.",
    "顧客認為這個品牌既可靠又現代。",
    "v."
  ],
  [
    "persist",
    "堅持；持續",
    "Despite the setbacks, she persisted with her plan.",
    "儘管遭遇挫折，她仍堅持她的計畫。",
    "v."
  ],
  [
    "portray",
    "描繪；描寫",
    "The film portrays the struggles of immigrant families.",
    "這部電影描繪了移民家庭所面臨的困境。",
    "v."
  ],
  [
    "prevail",
    "盛行；獲勝",
    "Common sense eventually prevailed in the discussion.",
    "常識最終在這場討論中占了上風。",
    "v."
  ],
  [
    "proclaim",
    "宣告；宣布",
    "The company proclaimed its commitment to sustainability.",
    "這家公司宣告了對永續發展的承諾。",
    "v."
  ],
  [
    "prolong",
    "延長",
    "Poor maintenance can prolong repair times significantly.",
    "保養不良可能會大幅延長維修時間。",
    "v."
  ],
  [
    "propel",
    "推動；驅使",
    "Strong demand propelled the company's rapid growth.",
    "強勁的需求推動了這家公司的快速成長。",
    "v."
  ],
  [
    "provoke",
    "激起；挑起",
    "The comment provoked a strong reaction from the audience.",
    "這句評論激起了觀眾強烈的反應。",
    "v."
  ],
  [
    "quest",
    "追尋；探索",
    "She embarked on a quest to find the perfect job.",
    "她展開了一段尋找理想工作的旅程。",
    "n.／v."
  ],
  [
    "rectify",
    "糾正；改正",
    "The company moved quickly to rectify the mistake.",
    "這家公司迅速採取行動糾正這個錯誤。",
    "v."
  ],
  [
    "refine",
    "精煉；改善",
    "The team refined the design after user feedback.",
    "團隊在收到使用者回饋後改善了這項設計。",
    "v."
  ],
  [
    "refrain",
    "克制；忍住",
    "Please refrain from using your phone during the exam.",
    "考試期間請勿使用手機。",
    "n.／v."
  ],
  [
    "refute",
    "反駁",
    "The scientist refuted the claims made in the article.",
    "這位科學家反駁了這篇文章中提出的論點。",
    "v."
  ],
  [
    "reinforce",
    "強化；加強",
    "The training reinforces skills learned in the classroom.",
    "這項訓練強化了在課堂上學到的技能。",
    "v."
  ],
  [
    "relinquish",
    "放棄；交出",
    "He relinquished control of the company after retiring.",
    "他退休後放棄了對這家公司的掌控權。",
    "v."
  ],
  [
    "render",
    "使成為；提供",
    "The error rendered the entire system useless.",
    "這個錯誤讓整個系統變得無法使用。",
    "n.／v."
  ],
  [
    "reside",
    "居住",
    "She has resided in this city for over a decade.",
    "她已經在這座城市住了超過十年。",
    "v."
  ],
  [
    "retain",
    "保留；留住",
    "The company works hard to retain its best employees.",
    "這家公司努力留住它最優秀的員工。",
    "v."
  ],
  [
    "retrieve",
    "取回",
    "She retrieved the file from the archive.",
    "她從檔案庫裡取回了這份文件。",
    "v."
  ],
  [
    "reveal",
    "揭露",
    "The survey revealed some surprising results.",
    "這份調查揭露了一些出人意料的結果。",
    "v."
  ],
  [
    "revoke",
    "撤銷",
    "The license was revoked after the violation.",
    "這張執照在違規後被撤銷了。",
    "n.／v."
  ],
  [
    "sanction",
    "制裁；批准",
    "The country imposed sanctions on the exporting firms.",
    "這個國家對這些出口企業實施了制裁。",
    "n.／v."
  ],
  [
    "sever",
    "切斷；斷絕",
    "The company severed ties with its former supplier.",
    "這家公司斷絕了與前任供應商的往來。",
    "v."
  ],
  [
    "shatter",
    "粉碎",
    "The news shattered her confidence completely.",
    "這則消息徹底粉碎了她的自信。",
    "v."
  ],
  [
    "simulate",
    "模擬",
    "The training program simulates real emergency situations.",
    "這項訓練課程模擬真實的緊急狀況。",
    "v."
  ],
  [
    "sparse",
    "稀疏的",
    "Public transport is sparse in this rural area.",
    "這個鄉村地區的大眾運輸相當稀少。",
    "adj."
  ],
  [
    "speculate",
    "推測",
    "Analysts speculate that prices will rise next year.",
    "分析師推測明年價格會上漲。",
    "v."
  ],
  [
    "stimulate",
    "刺激；促進",
    "Lower interest rates aim to stimulate spending.",
    "降低利率的目的是刺激消費。",
    "v."
  ],
  [
    "substantiate",
    "證實",
    "She provided documents to substantiate her claim.",
    "她提供了文件來證實她的說法。",
    "v."
  ],
  [
    "suppress",
    "壓抑；抑制",
    "He struggled to suppress his frustration during the meeting.",
    "他在會議中努力壓抑自己的挫折感。",
    "v."
  ],
  [
    "surpass",
    "超越",
    "This year's sales surpassed all previous records.",
    "今年的銷售額超越了過去所有的紀錄。",
    "v."
  ],
  [
    "suspend",
    "暫停；懸掛",
    "The service was temporarily suspended for maintenance.",
    "這項服務因維護而暫時中止。",
    "v."
  ],
  [
    "tackle",
    "處理；應付",
    "The city launched a new plan to tackle traffic congestion.",
    "這座城市推出了新計畫來應對交通壅塞問題。",
    "n.／v."
  ],
  [
    "tedious",
    "冗長乏味的",
    "Filling out the paperwork was a tedious process.",
    "填寫這些文書作業是一件冗長乏味的事。",
    "adj."
  ],
  [
    "terminate",
    "終止",
    "The company terminated the contract after the breach.",
    "這家公司在違約後終止了這份合約。",
    "v."
  ],
  [
    "thrive",
    "茁壯成長",
    "Small businesses can thrive with the right support.",
    "在適當的支持下，小型企業能夠蓬勃發展。",
    "v."
  ],
  [
    "transcend",
    "超越",
    "Great art transcends cultural and language barriers.",
    "偉大的藝術能超越文化與語言的隔閡。",
    "v."
  ],
  [
    "transmit",
    "傳輸；傳遞",
    "The device transmits data wirelessly to the server.",
    "這台裝置以無線方式將資料傳輸到伺服器。",
    "v."
  ],
  [
    "undermine",
    "削弱",
    "Constant criticism can undermine an employee's confidence.",
    "不斷的批評可能會削弱員工的信心。",
    "v."
  ],
  [
    "unveil",
    "揭幕；公布",
    "The company will unveil its new product next week.",
    "這家公司下週將公布它的新產品。",
    "v."
  ],
  [
    "uphold",
    "維護；支持",
    "The court upheld the original decision.",
    "法院維持了原本的判決。",
    "v."
  ],
  [
    "validate",
    "證實；驗證",
    "The results were validated by an independent lab.",
    "這些結果經過一間獨立實驗室的驗證。",
    "v."
  ],
  [
    "verify",
    "核實",
    "Please verify your identity before proceeding.",
    "繼續之前請先核實你的身分。",
    "v."
  ],
  [
    "vouch",
    "擔保；作證",
    "I can vouch for her honesty and reliability.",
    "我可以為她的誠實與可靠作擔保。",
    "v."
  ],
  [
    "withstand",
    "承受；抵擋",
    "The building was designed to withstand strong earthquakes.",
    "這棟建築的設計能承受強震。",
    "v."
  ],
  [
    "yield",
    "產出；讓步",
    "The negotiations finally yielded a positive result.",
    "這場談判最終產生了正面的結果。",
    "n.／v."
  ],
  [
    "abolish",
    "廢除",
    "The country voted to abolish the outdated law.",
    "這個國家投票決定廢除這項過時的法律。",
    "v."
  ],
  [
    "abrupt",
    "突然的",
    "Her abrupt departure surprised everyone in the room.",
    "她突然的離去讓在場的每個人都感到驚訝。",
    "adj."
  ],
  [
    "accountable",
    "負責的",
    "Managers must be accountable for their team's decisions.",
    "經理必須為團隊的決策負責。",
    "adj."
  ],
  [
    "adept",
    "熟練的",
    "She is adept at handling difficult clients.",
    "她擅長應付難纏的客戶。",
    "n.／adj."
  ],
  [
    "adjacent",
    "鄰近的",
    "The parking lot is adjacent to the main building.",
    "停車場就在主建築物旁邊。",
    "adj."
  ],
  [
    "advent",
    "來臨；出現",
    "The advent of smartphones changed daily life dramatically.",
    "智慧型手機的出現徹底改變了日常生活。",
    "n."
  ],
  [
    "aggregate",
    "總計；合計",
    "The aggregate cost of the project exceeded the budget.",
    "這個專案的總成本超出了預算。",
    "n.／v.／adj."
  ],
  [
    "alienate",
    "疏遠；使…感到孤立",
    "Harsh criticism can alienate team members.",
    "嚴厲的批評可能會讓團隊成員感到疏離。",
    "v."
  ],
  [
    "alter",
    "改變",
    "They altered their travel plans due to the weather.",
    "他們因為天氣而改變了旅行計畫。",
    "v."
  ],
  [
    "ambiguity",
    "模糊性；含糊",
    "The contract's ambiguity led to a dispute between the parties.",
    "這份合約的模糊之處導致雙方產生糾紛。",
    "n."
  ],
  [
    "amplify",
    "放大；擴大",
    "Social media can amplify small stories into major news.",
    "社群媒體能把小事放大成重大新聞。",
    "v."
  ],
  [
    "analogous",
    "類似的",
    "The situation is analogous to what happened last year.",
    "這個情況與去年發生的事情類似。",
    "adj."
  ],
  [
    "anecdote",
    "軼事；趣聞",
    "She shared a funny anecdote about her first job.",
    "她分享了一則關於她第一份工作的趣事。",
    "n."
  ],
  [
    "annex",
    "附加；併吞",
    "The company annexed a smaller competitor last year.",
    "這家公司去年併購了一間較小的競爭對手。",
    "n.／v."
  ],
  [
    "anonymous",
    "匿名的",
    "The donation was made by an anonymous donor.",
    "這筆捐款是由一位匿名捐贈者所捐出的。",
    "adj."
  ],
  [
    "antagonize",
    "激怒；使…敵對",
    "His blunt comments antagonized several colleagues.",
    "他直率的評論激怒了好幾位同事。",
    "v."
  ],
  [
    "apex",
    "頂點；顛峰",
    "The company reached the apex of its success last year.",
    "這家公司去年達到了成功的顛峰。",
    "n."
  ],
  [
    "apprehensive",
    "憂慮的",
    "She felt apprehensive about the upcoming exam.",
    "她對即將到來的考試感到憂慮。",
    "adj."
  ],
  [
    "arithmetic",
    "算術",
    "Basic arithmetic is taught in elementary school.",
    "基本算術是在小學教授的。",
    "n.／adj."
  ],
  [
    "arrogant",
    "傲慢的",
    "His arrogant attitude made him unpopular with coworkers.",
    "他傲慢的態度讓他不受同事歡迎。",
    "adj."
  ],
  [
    "ascertain",
    "確定；查明",
    "Investigators tried to ascertain the cause of the fire.",
    "調查人員試圖查明這場火災的起因。",
    "v."
  ],
  [
    "aspiration",
    "抱負；渴望",
    "Her aspiration is to become a company director.",
    "她的抱負是成為一名公司董事。",
    "n."
  ],
  [
    "assault",
    "攻擊",
    "The report described an assault on the security system.",
    "這份報告描述了一次對安全系統的攻擊。",
    "n.／v."
  ],
  [
    "attribute",
    "歸因於；屬性",
    "She attributes her success to years of hard work.",
    "她把她的成功歸因於多年的努力。",
    "n.／v."
  ],
  [
    "augment",
    "增加；擴增",
    "The team augmented its budget with outside funding.",
    "團隊用外部資金擴增了預算。",
    "v."
  ],
  [
    "authentic",
    "真實的；正宗的",
    "The restaurant serves authentic Italian cuisine.",
    "這間餐廳供應正宗的義大利料理。",
    "adj."
  ],
  [
    "authorize",
    "授權",
    "Only the manager can authorize this kind of expense.",
    "只有經理可以授權這類支出。",
    "v."
  ],
  [
    "autonomous",
    "自主的",
    "The company is developing autonomous delivery vehicles.",
    "這家公司正在開發自駕送貨車輛。",
    "adj."
  ],
  [
    "avid",
    "熱衷的",
    "He is an avid reader of science fiction novels.",
    "他是一位熱衷閱讀科幻小說的讀者。",
    "adj."
  ],
  [
    "awry",
    "出錯的；走樣的",
    "The plan went awry when the flight was canceled.",
    "班機被取消後，這個計畫就出了差錯。",
    "adj.／adv."
  ],
  [
    "belated",
    "遲來的",
    "She sent a belated birthday card to her friend.",
    "她寄了一張遲來的生日卡給朋友。",
    "adj."
  ],
  [
    "bewilder",
    "使困惑",
    "The complicated instructions bewildered many customers.",
    "這些複雜的說明讓許多顧客感到困惑。",
    "v."
  ],
  [
    "bleak",
    "荒涼的；暗淡的",
    "The forecast for the industry looks bleak this year.",
    "這個產業今年的前景看起來十分黯淡。",
    "adj."
  ],
  [
    "blunt",
    "直率的；鈍的",
    "He gave a blunt assessment of the company's problems.",
    "他對公司的問題給出了直率的評估。",
    "v.／adj."
  ],
  [
    "bribe",
    "賄賂",
    "The official was accused of accepting a bribe.",
    "這位官員被指控收受賄賂。",
    "n.／v."
  ],
  [
    "brisk",
    "輕快的；生意興隆的",
    "Business has been brisk since the store reopened.",
    "自從這間店重新開幕以來，生意一直很興隆。",
    "v.／adj."
  ],
  [
    "bulk",
    "大量；散裝",
    "The store offers discounts for buying in bulk.",
    "這間店對大量購買提供折扣。",
    "n.／v."
  ],
  [
    "buoyant",
    "樂觀的；輕快的",
    "Investors remain buoyant despite market uncertainty.",
    "儘管市場不明朗，投資人依然保持樂觀。",
    "adj."
  ],
  [
    "cache",
    "儲藏；快取",
    "Clearing the browser cache can fix loading issues.",
    "清除瀏覽器快取可以解決載入問題。",
    "n.／v."
  ],
  [
    "candid",
    "坦率的",
    "The interview offered a candid look at her career.",
    "這次訪談呈現了她職涯的坦率一面。",
    "adj."
  ],
  [
    "capricious",
    "反覆無常的",
    "The manager's capricious decisions frustrated the staff.",
    "經理反覆無常的決定讓員工感到沮喪。",
    "adj."
  ],
  [
    "carve",
    "雕刻；開闢",
    "The company carved out a niche in the luxury market.",
    "這家公司在奢侈品市場中開闢了一片利基。",
    "v."
  ],
  [
    "cascade",
    "瀑布；連鎖反應",
    "A single error caused a cascade of system failures.",
    "一個錯誤引發了一連串的系統故障。",
    "n.／v."
  ],
  [
    "catalyst",
    "催化劑",
    "The new manager was a catalyst for change in the office.",
    "這位新經理是辦公室變革的催化劑。",
    "n."
  ],
  [
    "cater to",
    "迎合",
    "The menu caters to a variety of dietary preferences.",
    "這份菜單迎合了各種飲食偏好。",
    "phr.v."
  ],
  [
    "chronicle",
    "編年史；記錄",
    "The book chronicles the company's fifty-year history.",
    "這本書記錄了這家公司五十年的歷史。",
    "n.／v."
  ],
  [
    "circumstance",
    "情況；環境",
    "Under normal circumstances, the process takes a week.",
    "在正常情況下，這個流程需要一週的時間。",
    "n."
  ],
  [
    "clamp down",
    "嚴加取締",
    "Authorities clamped down on illegal street vendors.",
    "當局嚴格取締非法街頭攤販。",
    "phr.v."
  ],
  [
    "clarity",
    "清晰；明確",
    "The report was written with great clarity.",
    "這份報告寫得十分清楚明確。",
    "n."
  ],
  [
    "compassion",
    "同情心",
    "The nurse treated every patient with compassion.",
    "這位護理師以同理心對待每一位病患。",
    "n."
  ],
  [
    "compatible",
    "相容的",
    "Make sure the software is compatible with your device.",
    "請確認這套軟體與你的裝置相容。",
    "adj."
  ],
  [
    "complement",
    "補足；相輔相成",
    "The new hire's skills complement the existing team well.",
    "這位新員工的技能與現有團隊相輔相成。",
    "n.／v."
  ],
  [
    "comprehend",
    "理解",
    "It took time for students to comprehend the new concept.",
    "學生花了一些時間才理解這個新概念。",
    "v."
  ],
  [
    "concise",
    "簡潔的",
    "Please keep your email concise and to the point.",
    "請讓你的電子郵件保持簡潔切中要點。",
    "adj."
  ],
  [
    "condone",
    "寬恕；縱容",
    "The company does not condone any form of discrimination.",
    "這家公司不容忍任何形式的歧視行為。",
    "v."
  ],
  [
    "configure",
    "設定；配置",
    "Please configure the printer before the meeting.",
    "請在會議前先設定好印表機。",
    "v."
  ],
  [
    "congregate",
    "聚集",
    "Employees congregated in the lobby for the announcement.",
    "員工們聚集在大廳等待這項宣布。",
    "v."
  ],
  [
    "contentious",
    "有爭議的",
    "The proposal became a contentious topic at the meeting.",
    "這項提案在會議中成了一個有爭議的話題。",
    "adj."
  ],
  [
    "contingent",
    "視情況而定的；意外事件",
    "Her attendance is contingent on finishing the project first.",
    "她能否出席取決於能不能先完成這個專案。",
    "n.／adj."
  ],
  [
    "contradictory",
    "矛盾的",
    "The witness gave contradictory statements to the police.",
    "這位證人向警方提供了互相矛盾的證詞。",
    "n.／adj."
  ],
  [
    "convene",
    "召集；集會",
    "The board will convene next week to discuss the merger.",
    "董事會將於下週召開會議討論這次合併。",
    "v."
  ],
  [
    "convertible",
    "可轉換的",
    "The bond is convertible into company shares.",
    "這張債券可以轉換成公司股份。",
    "n.／adj."
  ],
  [
    "convict",
    "定罪；囚犯",
    "The jury convicted him after a lengthy trial.",
    "陪審團在漫長的審判後判他有罪。",
    "n.／v."
  ],
  [
    "cordial",
    "友好的",
    "The two companies maintain a cordial business relationship.",
    "這兩家公司維持著友好的商業關係。",
    "n.／adj."
  ],
  [
    "corrode",
    "腐蝕",
    "Salt water can corrode metal parts over time.",
    "鹽水長期下來會腐蝕金屬零件。",
    "v."
  ],
  [
    "credible",
    "可信的",
    "The report needs credible sources to support its claims.",
    "這份報告需要可信的資料來源來支持其論點。",
    "adj."
  ],
  [
    "crest",
    "頂點；山脊",
    "Sales reached their crest during the holiday season.",
    "銷售額在假期季節達到了頂點。",
    "n.／v."
  ],
  [
    "cumbersome",
    "笨重的；麻煩的",
    "The old process was cumbersome and slow.",
    "這套舊流程既笨重又緩慢。",
    "adj."
  ],
  [
    "curtail",
    "削減；縮減",
    "The company had to curtail spending during the recession.",
    "這家公司在經濟衰退期間必須削減開支。",
    "v."
  ],
  [
    "dazzle",
    "使…目眩；使…驚豔",
    "The fireworks display dazzled the crowd.",
    "這場煙火表演讓觀眾為之驚豔。",
    "n.／v."
  ],
  [
    "debris",
    "殘骸；碎片",
    "Workers cleared the debris after the storm.",
    "工人們在暴風雨後清理了殘骸。",
    "n."
  ],
  [
    "decipher",
    "破解；辨識",
    "Experts worked for years to decipher the ancient text.",
    "專家們花了數年時間才破解這份古文。",
    "v."
  ],
  [
    "decode",
    "解碼；解讀",
    "The software can decode the encrypted file quickly.",
    "這套軟體能快速解碼這個加密檔案。",
    "v."
  ],
  [
    "delicacy",
    "美味佳餚；精緻",
    "The dish is considered a local delicacy.",
    "這道菜被視為當地的一道美食佳餚。",
    "n."
  ],
  [
    "demeanor",
    "舉止；態度",
    "Her calm demeanor put the nervous client at ease.",
    "她冷靜的舉止讓緊張的客戶感到安心。",
    "n."
  ],
  [
    "abide by",
    "遵守；遵循",
    "All employees must abide by the safety rules.",
    "所有員工必須遵守安全規則。",
    "phr.v."
  ],
  [
    "absorb",
    "吸收；理解",
    "It took time to absorb the new information.",
    "吸收新資訊需要時間。",
    "v."
  ],
  [
    "abstract",
    "摘要；抽象的",
    "The report begins with a brief abstract.",
    "報告以簡短的摘要開始。",
    "n.／v.／adj."
  ],
  [
    "accomplish",
    "完成；實現",
    "The team worked late to accomplish its goal.",
    "為了實現目標，團隊工作到很晚。",
    "v."
  ],
  [
    "account for",
    "說明；占比",
    "Travel costs account for most of the budget.",
    "差旅費佔預算的大部分。",
    "phr.v."
  ],
  [
    "accuracy",
    "精確度；正確性",
    "Please check the accuracy of the figures.",
    "請檢查數字的準確性。",
    "n."
  ],
  [
    "acknowledge",
    "承認；確認收到",
    "Please acknowledge receipt of the revised contract.",
    "請確認收到修訂後的合約。",
    "v."
  ],
  [
    "administrative",
    "行政的；管理的",
    "He handles administrative tasks for the department.",
    "他處理該部門的行政任務。",
    "adj."
  ],
  [
    "advantageous",
    "有利的；有益的",
    "A flexible schedule is advantageous for many parents.",
    "靈活的時間表對許多父母來說都是有利的。",
    "adj."
  ],
  [
    "advertise",
    "做廣告；刊登",
    "The company will advertise the position online.",
    "該公司將在網路上發布該職位的廣告。",
    "v."
  ],
  [
    "ambassador",
    "大使；代表",
    "The ambassador spoke at the cultural event.",
    "大使在文化活動上發表演說。",
    "n."
  ],
  [
    "applicant",
    "申請人；求職者",
    "Each applicant must submit two references.",
    "每位申請者必須提交兩份推薦信。",
    "n."
  ],
  [
    "appoint",
    "任命；指定",
    "The board will appoint a new chairperson.",
    "董事會將任命一名新主席。",
    "v."
  ],
  [
    "appraise",
    "評估；鑑定",
    "An expert will appraise the painting tomorrow.",
    "明天專家將對這幅畫進行鑑定。",
    "v."
  ],
  [
    "approximate",
    "大約的；近似",
    "The approximate cost is fifty thousand dollars.",
    "大約成本是五萬美元。",
    "v.／adj."
  ],
  [
    "archive",
    "檔案庫；歸檔",
    "Please archive the completed files by year.",
    "請按年份歸檔已完成的文件。",
    "n.／v."
  ],
  [
    "attendee",
    "出席者",
    "Every attendee received a name badge.",
    "每位與會者都收到了名牌。",
    "n."
  ],
  [
    "automate",
    "自動化",
    "The company plans to automate routine payments.",
    "該公司計劃將日常付款自動化。",
    "v."
  ],
  [
    "availability",
    "可用性；有空",
    "Please check the manager's availability first.",
    "請先檢查經理是否有空。",
    "n."
  ],
  [
    "bankruptcy",
    "破產",
    "The retailer filed for bankruptcy last month.",
    "該零售商上個月申請破產。",
    "n."
  ],
  [
    "binding",
    "有約束力的；裝訂",
    "The signed agreement is legally binding.",
    "簽署的協議具有法律約束力。",
    "n.／adj."
  ],
  [
    "budgetary",
    "預算的",
    "The committee discussed budgetary limits.",
    "委員會討論了預算限制。",
    "adj."
  ],
  [
    "business card",
    "名片",
    "She handed me her business card after the meeting.",
    "會議結束後她遞給我她的名片。",
    "n."
  ],
  [
    "bylaws",
    "章程；附則",
    "The association changed its bylaws last year.",
    "該協會去年修改了章程。",
    "n."
  ],
  [
    "calculate",
    "計算；估算",
    "Use this formula to calculate the total cost.",
    "使用此公式計算總成本。",
    "v."
  ],
  [
    "capital",
    "資本；首都",
    "The startup needs more capital to expand.",
    "這家新創公司需要更多資金來擴張。",
    "n.／adj."
  ],
  [
    "carefully",
    "仔細地",
    "Please read the instructions carefully.",
    "請仔細閱讀說明。",
    "adv."
  ],
  [
    "career path",
    "職涯發展路徑",
    "The mentor helped her plan a career path.",
    "導師幫助她規劃了職涯道路。",
    "n."
  ],
  [
    "catalogue",
    "產品目錄",
    "The catalogue lists every product by number.",
    "該目錄按編號列出了每種產品。",
    "n.／v."
  ],
  [
    "certify",
    "證明；認證",
    "An inspector must certify the equipment as safe.",
    "檢查員必須證明設備是安全的。",
    "v."
  ],
  [
    "chairperson",
    "主席",
    "The chairperson opened the meeting on time.",
    "主席準時宣布會議開幕。",
    "n."
  ],
  [
    "closure",
    "關閉；結束",
    "The road closure delayed several deliveries.",
    "道路封閉導致數次交貨延遲。",
    "n.／v."
  ],
  [
    "collaborate",
    "合作；協作",
    "Our designers collaborate with local artists.",
    "我們的設計師與當地藝術家合作。",
    "v."
  ],
  [
    "collective",
    "集體的；共同的",
    "The team made a collective decision.",
    "團隊做出了集體決定。",
    "n.／adj."
  ],
  [
    "compensation",
    "補償；薪酬",
    "The company offered compensation for the delay.",
    "該公司為延誤提供了補償。",
    "n."
  ],
  [
    "component",
    "組成部分；零件",
    "This small component controls the main switch.",
    "這個小部件控制主開關。",
    "n."
  ],
  [
    "comprise",
    "包括；由…組成",
    "The course will comprise six short modules.",
    "該課程將包括六個簡短的模組。",
    "v."
  ],
  [
    "conclude",
    "結論；結束",
    "We can conclude that the plan is working.",
    "我們可以得出結論，該計劃正在發揮作用。",
    "v."
  ],
  [
    "concrete",
    "具體的；混凝土",
    "Please give us a concrete example.",
    "請給我們一個具體的例子。",
    "n.／v.／adj."
  ],
  [
    "conduct",
    "執行；行為",
    "The firm will conduct a customer survey.",
    "該公司將進行客戶調查。",
    "n.／v."
  ],
  [
    "confidential",
    "機密的",
    "Keep these financial records confidential.",
    "對這些財務記錄保密。",
    "adj."
  ],
  [
    "consent",
    "同意；許可",
    "We need your written consent before proceeding.",
    "在繼續之前，我們需要您的書面同意。",
    "n.／v."
  ],
  [
    "considerable",
    "相當大的；重要的",
    "The project requires considerable planning.",
    "該項目需要大量的規劃。",
    "adj."
  ],
  [
    "consist of",
    "由…組成",
    "The package will consist of three separate parts.",
    "該套件將由三個獨立的部分組成。",
    "phr.v."
  ],
  [
    "consumption",
    "消費；耗用",
    "Energy consumption rises during the summer.",
    "夏季能源消耗增加。",
    "n."
  ],
  [
    "contribute",
    "貢獻；投稿",
    "Everyone can contribute an idea to the discussion.",
    "每個人都可以在討論中貢獻自己的想法。",
    "v."
  ],
  [
    "cooperate",
    "合作",
    "The two departments must cooperate closely.",
    "兩個部門必須密切合作。",
    "v."
  ],
  [
    "corporate",
    "公司的；企業的",
    "The corporate office approved the proposal.",
    "公司辦公室批准了該提案。",
    "adj."
  ],
  [
    "cost-effective",
    "符合成本效益的",
    "Online training can be a cost-effective solution.",
    "線上培訓可能是一種經濟高效的解決方案。",
    "adj."
  ],
  [
    "coverage",
    "涵蓋範圍；保險額",
    "The insurance provides coverage for theft.",
    "該保險為竊盜提供承保。",
    "n."
  ],
  [
    "credential",
    "證書；資格",
    "Her teaching credential expires in June.",
    "她的教師資格證將於六月到期。",
    "n."
  ],
  [
    "critical",
    "重要的；批判性的",
    "Good communication is critical to the project's success.",
    "良好的溝通對於專案的成功至關重要。",
    "adj."
  ],
  [
    "currency",
    "貨幣；流通",
    "You can exchange currency at the airport.",
    "您可以在機場兌換貨幣。",
    "n."
  ],
  [
    "customize",
    "客製化",
    "Customers can customize the color of the bag.",
    "客戶可以訂製袋子的顏色。",
    "v."
  ],
  [
    "database",
    "資料庫",
    "The client information is stored in a secure database.",
    "客戶資訊儲存在安全資料庫中。",
    "n."
  ],
  [
    "deadline extension",
    "延後截止期限",
    "They requested a deadline extension for the report.",
    "他們要求延長報告的截止日期。",
    "n."
  ],
  [
    "deduct",
    "扣除；推論",
    "The company will deduct the fee from your payment.",
    "本公司將從您的付款中扣除該費用。",
    "v."
  ],
  [
    "defect",
    "瑕疵；缺點",
    "The technician found a defect in the screen.",
    "技術人員發現螢幕有缺陷。",
    "n.／v."
  ],
  [
    "demonstrate",
    "展示；證明",
    "Please demonstrate how the new system works.",
    "請示範新系統如何運作。",
    "v."
  ],
  [
    "depart",
    "離開；出發",
    "The train will depart from platform three.",
    "火車將從三號月台出發。",
    "v."
  ],
  [
    "designate",
    "指定；任命",
    "Please designate one person to lead the group.",
    "請指定一人領導該小組。",
    "v.／adj."
  ],
  [
    "desirable",
    "理想的；值得擁有的",
    "Experience in sales is a desirable qualification.",
    "銷售經驗是理想的資格。",
    "adj."
  ],
  [
    "detect",
    "發現；偵測",
    "The sensor can detect smoke in the room.",
    "感應器可以偵測房間內的煙霧。",
    "v."
  ],
  [
    "develop",
    "發展；開發",
    "The company hopes to develop a new service.",
    "該公司希望開發一項新服務。",
    "v."
  ],
  [
    "discontinue",
    "停止；中止",
    "The store will discontinue this product line.",
    "該商店將停止該產品線。",
    "v."
  ],
  [
    "diversify",
    "多樣化；分散",
    "The firm wants to diversify its sources of income.",
    "該公司希望實現收入來源多元化。",
    "v."
  ],
  [
    "division",
    "部門；分割",
    "She works in the marketing division.",
    "她在行銷部門工作。",
    "n."
  ],
  [
    "duration",
    "持續時間",
    "The course has a duration of three weeks.",
    "該課程為期三週。",
    "n."
  ],
  [
    "economic",
    "經濟的",
    "The report examines recent economic trends.",
    "該報告探討了近期的經濟趨勢。",
    "adj."
  ],
  [
    "economical",
    "節省的；經濟實惠的",
    "Taking the bus is more economical than driving.",
    "搭乘公共汽車比開車更經濟。",
    "adj."
  ],
  [
    "edit",
    "編輯；修改",
    "Please edit the document before you send it.",
    "請在傳送之前編輯該文件。",
    "v."
  ],
  [
    "efficient",
    "有效率的",
    "The new process is more efficient than the old one.",
    "新流程比舊流程更有效率。",
    "adj."
  ],
  [
    "eligible",
    "符合資格的",
    "Only full-time staff are eligible for this benefit.",
    "只有全職員工才有資格享有這項福利。",
    "adj."
  ],
  [
    "employment",
    "就業；工作",
    "The agency helps people find employment.",
    "該機構幫助人們找到工作。",
    "n."
  ],
  [
    "enterprise",
    "企業；事業",
    "The family runs a small enterprise.",
    "這個家庭經營著一家小企業。",
    "n."
  ],
  [
    "entry",
    "進入；條目",
    "Write your name in the first entry on the form.",
    "在表格的第一個條目中寫下您的姓名。",
    "n."
  ],
  [
    "equivalent",
    "相等的；等值物",
    "One hundred centimeters is equivalent to one meter.",
    "一百公分相當於一公尺。",
    "n.／adj."
  ],
  [
    "evidence",
    "證據",
    "The report provides evidence of steady growth.",
    "該報告提供了穩定成長的證據。",
    "n.／v."
  ],
  [
    "exclude",
    "排除；不包括",
    "Please exclude duplicate records from the list.",
    "請從清單中排除重複的記錄。",
    "v."
  ],
  [
    "exclusively",
    "專門地；僅僅",
    "This lounge is used exclusively by members.",
    "此休息室僅供會員使用。",
    "adv."
  ],
  [
    "expenditure",
    "支出；費用",
    "The annual expenditure exceeded the original budget.",
    "年度支出超出了原始預算。",
    "n."
  ],
  [
    "expertise",
    "專業知識",
    "We need someone with expertise in digital marketing.",
    "我們需要具有數位行銷專業知識的人。",
    "n."
  ],
  [
    "expiration",
    "到期；終止",
    "Check the expiration date before using the coupon.",
    "使用優惠券前請檢查有效期限。",
    "n."
  ],
  [
    "extension",
    "延期；分機",
    "Please call extension 204 for technical support.",
    "請撥打分機204尋求技術支援。",
    "n."
  ],
  [
    "external",
    "外部的",
    "The company hired an external consultant.",
    "該公司聘請了一名外部顧問。",
    "n.／adj."
  ],
  [
    "factor",
    "因素；因子",
    "Price was an important factor in our decision.",
    "價格是我們決定的重要因素。",
    "n.／v."
  ],
  [
    "financing",
    "融資；資金",
    "The project received financing from a local bank.",
    "該項目獲得了當地一家銀行的融資。",
    "n."
  ],
  [
    "flexibility",
    "彈性；靈活性",
    "Remote work gives employees more flexibility.",
    "遠距工作為員工提供了更大的靈活性。",
    "n."
  ],
  [
    "format",
    "格式；編排",
    "Please save the file in PDF format.",
    "請將文件儲存為 PDF 格式。",
    "n.／v."
  ],
  [
    "freight",
    "貨運；貨物",
    "The freight arrived at the warehouse on Tuesday.",
    "貨物於週二抵達倉庫。",
    "n.／v."
  ],
  [
    "funding",
    "資金；經費",
    "The museum received funding from several donors.",
    "博物館獲得了多個捐助者的資助。",
    "n."
  ],
  [
    "furthermore",
    "此外；而且",
    "Furthermore, the plan will reduce operating costs.",
    "此外，該計劃還將降低營運成本。",
    "adv."
  ],
  [
    "guarantee",
    "保證；保固",
    "The store offers a one-year guarantee.",
    "商店提供一年保固。",
    "n.／v."
  ],
  [
    "guideline",
    "指導原則",
    "Follow the guideline when completing the form.",
    "填寫表格時請遵循指南。",
    "n."
  ],
  [
    "headcount",
    "人數；員額",
    "The department's headcount increased this quarter.",
    "本季該部門的員工人數有所增加。",
    "n."
  ],
  [
    "implication",
    "含意；影響",
    "The change has an important implication for customers.",
    "這項變化對客戶來說具有重要意義。",
    "n."
  ],
  [
    "indicate",
    "指出；顯示",
    "The chart may indicate a rise in online sales.",
    "此圖表可能表示線上銷售額有所上升。",
    "v."
  ],
  [
    "initiative",
    "主動性；倡議",
    "She showed initiative by solving the problem early.",
    "她表現出了主動性，儘早解決了問題。",
    "n.／adj."
  ],
  [
    "inspect",
    "檢查；視察",
    "A technician will inspect the machine today.",
    "今天技術人員將檢查機器。",
    "v."
  ],
  [
    "installation",
    "安裝；設施",
    "The installation of the new software took an hour.",
    "新軟體的安裝花了一個小時。",
    "n."
  ],
  [
    "institute",
    "機構；制定",
    "The institute offers courses in language education.",
    "該學院提供語言教育課程。",
    "n.／v."
  ],
  [
    "intellectual",
    "智力的；知識分子",
    "The job requires intellectual curiosity and patience.",
    "這項工作需要求知慾和耐心。",
    "n.／adj."
  ],
  [
    "intensive",
    "密集的；加強的",
    "They completed an intensive training program.",
    "他們完成了密集培訓計劃。",
    "n.／adj."
  ],
  [
    "internal",
    "內部的",
    "Please discuss internal matters privately.",
    "內部事務請私下討論。",
    "adj."
  ],
  [
    "invest",
    "投資",
    "Many people invest money for retirement.",
    "許多人為退休投資。",
    "v."
  ],
  [
    "manufacture",
    "製造；製造業",
    "The factory will manufacture parts for bicycles.",
    "該工廠將生產自行車零件。",
    "n.／v."
  ],
  [
    "market share",
    "市場占有率",
    "The company gained market share last year.",
    "該公司去年獲得了市場份額。",
    "n."
  ],
  [
    "marketing",
    "行銷",
    "She works in marketing for a software company.",
    "她在一家軟體公司從事行銷工作。",
    "n."
  ],
  [
    "maximum",
    "最大值；最高的",
    "The room can hold a maximum of fifty people.",
    "房間最多可容納五十人。",
    "n.／adj."
  ],
  [
    "merchandise",
    "商品；貨品",
    "The store displayed new merchandise near the entrance.",
    "商店在入口處展示了新商品。",
    "n.／v."
  ],
  [
    "mission",
    "任務；使命",
    "Our mission is to provide reliable service.",
    "我們的使命是提供可靠的服務。",
    "n."
  ],
  [
    "negotiation",
    "談判；協商",
    "The contract is still under negotiation.",
    "合約仍在談判中。",
    "n."
  ],
  [
    "obligation",
    "義務；責任",
    "You have no obligation to accept the offer.",
    "您沒有義務接受該要約。",
    "n."
  ],
  [
    "occupancy",
    "入住率；占用",
    "Hotel occupancy is high during the festival.",
    "節慶期間飯店入住率較高。",
    "n."
  ],
  [
    "operate",
    "經營；操作",
    "The company will operate stores across the country.",
    "該公司將在全國各地經營商店。",
    "v."
  ],
  [
    "operational",
    "營運的；操作上的",
    "The new website will be operational on Monday.",
    "新網站將於週一上線。",
    "adj."
  ],
  [
    "pending",
    "待處理的；即將發生的",
    "Your application is still pending approval.",
    "您的申請仍在等待批准。",
    "adj."
  ],
  [
    "permanent",
    "永久的；正式的",
    "She accepted a permanent position with the firm.",
    "她接受了該公司的永久職位。",
    "n.／adj."
  ],
  [
    "personnel",
    "人事；人員",
    "Personnel will contact you about the schedule.",
    "工作人員將就日程安排與您聯繫。",
    "n."
  ],
  [
    "portfolio",
    "作品集；投資組合",
    "He showed his design portfolio to the client.",
    "他向客戶展示了他的設計作品集。",
    "n."
  ],
  [
    "precede",
    "在…之前；領先",
    "A short introduction will precede the presentation.",
    "在演示之前將有一個簡短的介紹。",
    "v."
  ],
  [
    "predict",
    "預測",
    "Experts predict higher demand next year.",
    "專家預測明年需求會更高。",
    "v."
  ],
  [
    "preference",
    "偏好；優先選擇",
    "Please tell us your seating preference.",
    "請告訴我們您的座位偏好。",
    "n."
  ],
  [
    "premium",
    "保費；高級的",
    "The premium plan includes extra support.",
    "高級計劃包括額外的支援。",
    "n.／adj."
  ],
  [
    "preserve",
    "保存；維護",
    "Store the food properly to preserve its freshness.",
    "正確儲存食物以保持其新鮮度。",
    "n.／v."
  ],
  [
    "productivity",
    "生產力；效率",
    "Short breaks can improve productivity.",
    "短暫的休息可以提高生產力。",
    "n."
  ],
  [
    "proficiency",
    "熟練度",
    "The role requires proficiency in English.",
    "該職位需要精通英語。",
    "n."
  ],
  [
    "prospective",
    "預期的；潛在的",
    "The event attracted prospective customers.",
    "此次活動吸引了潛在客戶。",
    "adj."
  ],
  [
    "provision",
    "提供；條款",
    "The contract includes a provision for early cancellation.",
    "合約包含提前取消的條款。",
    "n.／v."
  ],
  [
    "qualify",
    "符合資格；使具資格",
    "You may qualify for a discount as a student.",
    "作為學生，您可能有資格享受折扣。",
    "v."
  ],
  [
    "quotation",
    "報價單；引文",
    "We received a quotation from three suppliers.",
    "我們收到了三個供應商的報價。",
    "n."
  ],
  [
    "recruit",
    "招募；新進人員",
    "The company plans to recruit more engineers.",
    "該公司計劃招聘更多工程師。",
    "n.／v."
  ],
  [
    "recruitment",
    "招募；徵才",
    "Recruitment begins again in September.",
    "9月再次開始招募。",
    "n."
  ],
  [
    "recruiter",
    "招募人員",
    "The recruiter explained the interview process.",
    "招聘人員解釋了面試過程。",
    "n."
  ],
  [
    "redeem",
    "兌換；贖回",
    "You can redeem this coupon before Friday.",
    "您可以在周五之前兌換此優惠券。",
    "v."
  ],
  [
    "refer",
    "提及；轉介",
    "Please refer to page ten for more details.",
    "詳情請參閱第十頁。",
    "v."
  ],
  [
    "renew",
    "更新；續約",
    "We need to renew the lease next month.",
    "我們下個月需要續租。",
    "v."
  ],
  [
    "renovate",
    "翻修；整修",
    "They plan to renovate the old office.",
    "他們計劃翻新舊辦公室。",
    "v."
  ],
  [
    "replacement",
    "替代品；更換",
    "We sent a replacement for the damaged item.",
    "我們為損壞的物品發送了替換品。",
    "n."
  ],
  [
    "resolution",
    "決議；解決方案",
    "The committee reached a resolution after discussion.",
    "委員會經討論後達成決議。",
    "n."
  ],
  [
    "retire",
    "退休；撤回",
    "My uncle plans to retire next summer.",
    "我叔叔計劃明年夏天退休。",
    "v."
  ],
  [
    "revise",
    "修訂；複習",
    "Please revise the report using these comments.",
    "請使用這些意見修改報告。",
    "n.／v."
  ],
  [
    "rotation",
    "輪調；轉動",
    "The staff rotation changes every two weeks.",
    "人員輪調每兩週更換一次。",
    "n."
  ],
  [
    "salary range",
    "薪資範圍",
    "The job posting lists a clear salary range.",
    "招聘啟事列出了明確的薪資範圍。",
    "n."
  ],
  [
    "sector",
    "部門；產業",
    "Tourism is an important sector of the local economy.",
    "旅遊業是當地經濟的重要部門。",
    "n."
  ],
  [
    "specification",
    "規格；說明",
    "The engineer checked the product specification.",
    "工程師檢查了產品規格。",
    "n."
  ],
  [
    "stationary",
    "固定不動的",
    "Keep the camera stationary while taking the picture.",
    "拍照時保持相機靜止。",
    "adj."
  ],
  [
    "storage capacity",
    "儲存容量",
    "This device has enough storage capacity for photos.",
    "該設備有足夠的照片儲存容量。",
    "n."
  ],
  [
    "subcontractor",
    "分包商",
    "The builder hired a subcontractor for the electrical work.",
    "建築商聘請了一家分包商進行電氣工程。",
    "n."
  ],
  [
    "supervisor",
    "主管；監督者",
    "Ask your supervisor before changing the schedule.",
    "在更改時間表之前詢問您的主管。",
    "n."
  ],
  [
    "supply chain",
    "供應鏈",
    "The storm disrupted the global supply chain.",
    "風暴擾亂了全球供應鏈。",
    "n."
  ],
  [
    "teleconference",
    "電話會議",
    "We joined the teleconference from different offices.",
    "我們從不同的辦公室參加了電話會議。",
    "n."
  ],
  [
    "therefore",
    "因此",
    "The road was closed; therefore, we took another route.",
    "道路被封閉了；因此，我們走了另一條路。",
    "adv."
  ],
  [
    "timeline",
    "時程表",
    "The project timeline shows each major task.",
    "專案時間表顯示了每項主要任務。",
    "n."
  ],
  [
    "transition",
    "轉變；過渡",
    "The transition to the new system went smoothly.",
    "向新系統的過渡進展順利。",
    "n.／v."
  ],
  [
    "utility",
    "公用事業；效用",
    "Water is an essential public utility.",
    "水是重要的公共設施。",
    "n.／adj."
  ],
  [
    "valid",
    "有效的；有根據的",
    "Your ticket is valid until the end of the month.",
    "您的門票有效期至月底。",
    "adj."
  ],
  [
    "variable",
    "可變的；變數",
    "Shipping costs are variable, so the final price can change.",
    "運輸成本是可變的，因此最終價格可能會改變。",
    "n.／adj."
  ],
  [
    "visible",
    "可見的；明顯的",
    "The sign is clearly visible from the street.",
    "從街上可以清楚地看到該標誌。",
    "adj."
  ],
  [
    "wholesale",
    "批發；批發的",
    "They buy coffee beans at wholesale prices.",
    "他們以批發價購買咖啡豆。",
    "n.／v.／adj.／adv."
  ],
  [
    "withdraw",
    "撤回；提款",
    "You can withdraw cash from this machine.",
    "您可以從這台機器提取現金。",
    "v."
  ],
  [
    "workload",
    "工作量",
    "Her workload became heavier before the deadline.",
    "在截止日期之前，她的工作量變得更加繁重。",
    "n."
  ],
  [
    "abatement",
    "減少；減稅",
    "The city offered a tax abatement for the project.",
    "該市為該項目提供了稅收減免。",
    "n."
  ],
  [
    "absentee",
    "缺席者；曠工者",
    "The teacher spoke with the absentee after class.",
    "下課後老師與缺席者交談。",
    "n."
  ],
  [
    "accelerator",
    "加速器；加速方案",
    "The startup joined a business accelerator last spring.",
    "這家新創公司去年春天加入了一個商業加速器。",
    "n."
  ],
  [
    "accessibility",
    "可近用性；無障礙性",
    "The new ramp improves accessibility for wheelchair users.",
    "新坡道改善了輪椅使用者的無障礙環境。",
    "n."
  ],
  [
    "accrual",
    "應計；累積",
    "The accountant recorded the accrual at month-end.",
    "會計師在月底記錄了應計費用。",
    "n."
  ],
  [
    "accrued expense",
    "應計費用",
    "Rent is listed as an accrued expense this month.",
    "租金列為本月應計費用。",
    "n."
  ],
  [
    "acquisition",
    "收購；取得",
    "The acquisition created a larger company.",
    "這次收購創造了一家更大的公司。",
    "n."
  ],
  [
    "activation",
    "啟用；活化",
    "Account activation takes only a few minutes.",
    "帳戶啟動只需幾分鐘。",
    "n."
  ],
  [
    "adaptability",
    "適應力",
    "Adaptability is valuable in a changing workplace.",
    "適應能力在不斷變化的工作場所中很有價值。",
    "n."
  ],
  [
    "add-on",
    "附加項目；加購項",
    "The extended warranty is an optional add-on.",
    "延長保固是一個可選的附加項目。",
    "n."
  ],
  [
    "adjustment",
    "調整；調節",
    "The manager made a small adjustment to the schedule.",
    "經理對日程做了一個小小的調整。",
    "n."
  ],
  [
    "advisory",
    "顧問的；諮詢通知",
    "The firm issued an advisory about the service outage.",
    "該公司發布了有關服務中斷的諮詢。",
    "n.／adj."
  ],
  [
    "after-sales service",
    "售後服務",
    "Good after-sales service builds customer trust.",
    "良好的售後服務贏得客戶的信任。",
    "n."
  ],
  [
    "agency fee",
    "代理費",
    "The agency fee is included in the final invoice.",
    "代理費包含在最終發票中。",
    "n."
  ],
  [
    "agenda item",
    "議程項目",
    "The budget is the first agenda item today.",
    "預算是今天的第一個議程項目。",
    "n."
  ],
  [
    "alignment",
    "一致；校準",
    "The team's goals are in alignment with the strategy.",
    "團隊的目標與策略一致。",
    "n."
  ],
  [
    "allowance",
    "津貼；補助額",
    "The company gives interns a monthly allowance.",
    "公司每月發給實習生津貼。",
    "n.／v."
  ],
  [
    "amendment",
    "修正案；修改",
    "The contract amendment needs both signatures.",
    "合約修改需要雙方簽名。",
    "n."
  ],
  [
    "amortization",
    "攤銷；分期償還",
    "The loan amortization is spread over five years.",
    "貸款攤銷分五年進行。",
    "n."
  ],
  [
    "analyst",
    "分析師",
    "The analyst presented the sales forecast.",
    "分析師提出了銷售預測。",
    "n."
  ],
  [
    "annual report",
    "年度報告",
    "Shareholders read the annual report carefully.",
    "股東們仔細閱讀了年度報告。",
    "n."
  ],
  [
    "approval process",
    "核准流程",
    "The approval process takes about three days.",
    "審批過程大約需要三天。",
    "n."
  ],
  [
    "asset management",
    "資產管理",
    "She works in asset management for a bank.",
    "她在銀行從事資產管理工作。",
    "n."
  ],
  [
    "assignment",
    "任務；指派",
    "Your first assignment is due on Friday.",
    "你的第一份作業將於週五截止。",
    "n."
  ],
  [
    "auditor",
    "稽核員；審計師",
    "The auditor reviewed the company's accounts.",
    "審計員審查了公司的帳目。",
    "n."
  ],
  [
    "automation",
    "自動化",
    "Automation reduced the time needed for data entry.",
    "自動化減少了資料輸入所需的時間。",
    "n."
  ],
  [
    "aviation",
    "航空業；航空",
    "She hopes to build a career in aviation.",
    "她希望在航空領域開創自己的職業生涯。",
    "n."
  ],
  [
    "backorder",
    "缺貨待補訂單",
    "The item is on backorder until next week.",
    "該商品已延期交貨至下週。",
    "n."
  ],
  [
    "bank transfer",
    "銀行轉帳",
    "Please pay by bank transfer if possible.",
    "如果可能，請透過銀行轉帳付款。",
    "n."
  ],
  [
    "bar code",
    "條碼",
    "The cashier scanned the bar code on the package.",
    "收銀員掃描了包裹上的條碼。",
    "n."
  ],
  [
    "baseline",
    "基準線；基準",
    "We need a baseline before measuring improvement.",
    "在衡量改進之前我們需要一個基準。",
    "n."
  ],
  [
    "beneficiary",
    "受益人",
    "Please name a beneficiary on the insurance form.",
    "請在保單上註明受益人。",
    "n.／adj."
  ],
  [
    "bid",
    "投標；出價",
    "The contractor submitted the lowest bid.",
    "承包商提交了最低報價。",
    "n.／v."
  ],
  [
    "billing",
    "開立帳單；帳務處理",
    "Please contact billing if the amount is incorrect.",
    "如果金額不正確，請聯絡帳單。",
    "n."
  ],
  [
    "board meeting",
    "董事會會議",
    "The proposal will be discussed at the board meeting.",
    "該提案將在董事會會議上討論。",
    "n."
  ],
  [
    "bonus scheme",
    "獎金制度",
    "The company introduced a new bonus scheme.",
    "該公司推出了新的獎金計劃。",
    "n."
  ],
  [
    "brand awareness",
    "品牌知名度",
    "The campaign increased brand awareness among students.",
    "該活動提高了學生的品牌知名度。",
    "n."
  ],
  [
    "brand loyalty",
    "品牌忠誠度",
    "Good service can strengthen brand loyalty.",
    "良好的服務可以增強品牌忠誠度。",
    "n."
  ],
  [
    "break-even",
    "損益兩平的",
    "The new store reached break-even in its first year.",
    "新店開幕第一年就實現了收支平衡。",
    "adj."
  ],
  [
    "brokerage",
    "經紀業；佣金",
    "The brokerage charges a fee for each trade.",
    "經紀公司對每筆交易收取費用。",
    "n."
  ],
  [
    "cash flow",
    "現金流量",
    "The manager monitors cash flow every week.",
    "經理每週監控現金流量。",
    "n."
  ],
  [
    "cash register",
    "收銀機",
    "The cash register stopped working this morning.",
    "今天早上收銀機停止運作了。",
    "n."
  ],
  [
    "certification",
    "認證；證書",
    "This certification is required for the position.",
    "該職位需要此認證。",
    "n."
  ],
  [
    "chair a meeting",
    "主持會議",
    "She will chair a meeting with the regional team.",
    "她將主持與區域團隊的會議。",
    "phr.v."
  ],
  [
    "change order",
    "變更訂單",
    "The client approved the change order yesterday.",
    "客戶昨天批准了變更單。",
    "n."
  ],
  [
    "clearance",
    "清關；出清",
    "The shipment is waiting for customs clearance.",
    "貨物正在等待清關。",
    "n."
  ],
  [
    "co-branding",
    "共同品牌行銷",
    "The two companies launched a co-branding campaign.",
    "兩家公司發起了聯合品牌活動。",
    "n."
  ],
  [
    "code of conduct",
    "行為準則",
    "Everyone must follow the company's code of conduct.",
    "每個人都必須遵守公司的行為準則。",
    "n."
  ],
  [
    "communication skills",
    "溝通技巧",
    "Good communication skills are essential in this role.",
    "良好的溝通技巧對於這個角色至關重要。",
    "n."
  ],
  [
    "company policy",
    "公司政策",
    "Remote work is allowed under company policy.",
    "公司政策允許遠距工作。",
    "n."
  ],
  [
    "computerized",
    "電腦化的",
    "The warehouse uses a computerized tracking system.",
    "倉庫使用電腦化追蹤系統。",
    "adj."
  ],
  [
    "concession",
    "讓步；特許權",
    "The supplier offered a concession on the price.",
    "供應商在價格上做出了讓步。",
    "n."
  ],
  [
    "confirmation number",
    "確認號碼",
    "Please keep your confirmation number for reference.",
    "請保留您的確認號碼以供參考。",
    "n."
  ],
  [
    "consignment",
    "寄售；託運貨物",
    "The shop sells local jewelry on consignment.",
    "這家商店寄售當地珠寶。",
    "n."
  ],
  [
    "consignee",
    "收貨人",
    "The consignee signed for the delivery.",
    "收貨人簽收交貨。",
    "n."
  ],
  [
    "consignor",
    "寄件人；託運人",
    "The consignor arranged the shipment yesterday.",
    "發貨人昨天安排出貨。",
    "n."
  ],
  [
    "consortium",
    "財團；聯盟",
    "A consortium of banks financed the project.",
    "一個銀行財團為該項目提供了資金。",
    "n."
  ],
  [
    "consumer demand",
    "消費者需求",
    "Consumer demand rose before the holiday season.",
    "假期前消費需求上升。",
    "n."
  ],
  [
    "consumer goods",
    "消費品",
    "The company produces household consumer goods.",
    "該公司生產家庭消費品。",
    "n."
  ],
  [
    "contingency plan",
    "應變計畫",
    "We prepared a contingency plan for bad weather.",
    "我們針對惡劣天氣制定了應急計劃。",
    "n."
  ],
  [
    "contractor",
    "承包商",
    "The contractor will repair the roof next week.",
    "承包商將於下週修復屋頂。",
    "n."
  ],
  [
    "convention",
    "年會；慣例",
    "The annual convention attracted visitors from abroad.",
    "一年一度的大會吸引了來自國外的參觀者。",
    "n."
  ],
  [
    "copyright",
    "版權；著作權",
    "The artist owns the copyright to the image.",
    "藝術家擁有該圖像的版權。",
    "n.／v."
  ],
  [
    "core business",
    "核心業務",
    "Customer support is part of our core business.",
    "客戶支援是我們核心業務的一部分。",
    "n."
  ],
  [
    "cost analysis",
    "成本分析",
    "The team completed a cost analysis before buying.",
    "該團隊在購買前完成了成本分析。",
    "n."
  ],
  [
    "cost reduction",
    "降低成本",
    "The plan focuses on cost reduction without layoffs.",
    "該計劃的重點是在不裁員的情況下降低成本。",
    "n."
  ],
  [
    "costing",
    "成本計算",
    "Accurate costing helps us set fair prices.",
    "準確的成本核算有助於我們制定公平的價格。",
    "n."
  ],
  [
    "counteroffer",
    "還價；反提議",
    "She made a counteroffer after reviewing the contract.",
    "她在查看合約後提出了還價。",
    "n."
  ],
  [
    "courier",
    "快遞員；快遞服務",
    "The courier delivered the documents before noon.",
    "快遞員在中午前將文件送達。",
    "n."
  ],
  [
    "credit line",
    "信用額度",
    "The bank approved a larger credit line.",
    "銀行批准了更大的信貸額度。",
    "n."
  ],
  [
    "credit limit",
    "信用限額",
    "The card has a monthly credit limit.",
    "該卡有每月信用額度。",
    "n."
  ],
  [
    "creditor",
    "債權人",
    "The creditor agreed to a new payment plan.",
    "債權人同意新的付款計劃。",
    "n."
  ],
  [
    "cross-functional",
    "跨部門的",
    "The project needs a cross-functional team.",
    "該專案需要一個跨職能團隊。",
    "adj."
  ],
  [
    "customer base",
    "客戶群",
    "The store has a loyal customer base.",
    "該店擁有忠實的顧客群。",
    "n."
  ],
  [
    "customer loyalty",
    "客戶忠誠度",
    "The program rewards customer loyalty.",
    "該計劃獎勵客戶忠誠度。",
    "n."
  ],
  [
    "customer retention",
    "客戶留存",
    "Quick support improves customer retention.",
    "快速支援可以提高客戶保留率。",
    "n."
  ],
  [
    "customer service desk",
    "客服櫃檯",
    "Please ask at the customer service desk.",
    "請到客戶服務台詢問。",
    "n."
  ],
  [
    "customs declaration",
    "海關申報",
    "Fill out the customs declaration before landing.",
    "落地前填寫海關申報單。",
    "n."
  ],
  [
    "data entry",
    "資料輸入",
    "She spent the afternoon doing data entry.",
    "她花了一個下午的時間進行資料輸入。",
    "n."
  ],
  [
    "debit card",
    "簽帳金融卡",
    "I paid for lunch with my debit card.",
    "我用金融卡支付午餐費用。",
    "n."
  ],
  [
    "debtor",
    "債務人",
    "The debtor made a payment last week.",
    "債務人上週付款了。",
    "n."
  ],
  [
    "decision maker",
    "決策者",
    "The sales team met with the decision maker.",
    "銷售團隊與決策者會面。",
    "n."
  ],
  [
    "deduction",
    "扣除額；推論",
    "The receipt supports the tax deduction.",
    "收據支持減稅。",
    "n."
  ],
  [
    "defective",
    "有瑕疵的",
    "The store replaced the defective charger.",
    "商店更換了有缺陷的充電器。",
    "adj."
  ],
  [
    "delivery date",
    "交貨日期",
    "Please confirm the delivery date by email.",
    "請透過電子郵件確認交貨日期。",
    "n."
  ],
  [
    "demand forecast",
    "需求預測",
    "The demand forecast helps us plan inventory.",
    "需求預測可以幫助我們規劃庫存。",
    "n."
  ],
  [
    "depreciation",
    "折舊；貶值",
    "Depreciation reduces the asset's value over time.",
    "隨著時間的推移，折舊會降低資產的價值。",
    "n."
  ],
  [
    "direct deposit",
    "直接存款",
    "My salary arrives by direct deposit.",
    "我的薪水是透過直接存款到達的。",
    "n."
  ],
  [
    "direct marketing",
    "直接行銷",
    "The brand uses direct marketing to reach members.",
    "該品牌使用直接行銷來接觸會員。",
    "n."
  ],
  [
    "directors' meeting",
    "董事會會議",
    "The budget was approved at the directors' meeting.",
    "該預算已由董事會議批准。",
    "n."
  ],
  [
    "disbursement",
    "支付；撥款",
    "The grant disbursement will occur in July.",
    "補助金將於七月發放。",
    "n."
  ],
  [
    "distribution center",
    "配送中心",
    "The package left the distribution center this morning.",
    "包裹今天早上離開了配送中心。",
    "n."
  ],
  [
    "distributor",
    "經銷商",
    "The distributor supplies products to local stores.",
    "分銷商向當地商店供應產品。",
    "n."
  ],
  [
    "dividend",
    "股利；股息",
    "The company paid a dividend to its shareholders.",
    "該公司向股東支付股利。",
    "n."
  ],
  [
    "down payment",
    "頭期款",
    "We saved for the down payment on the apartment.",
    "我們存了錢付了公寓的頭期款。",
    "n."
  ],
  [
    "downsizing",
    "縮編；裁員",
    "The firm announced downsizing after sales declined.",
    "該公司在銷售額下降後宣布裁員。",
    "n."
  ],
  [
    "due date",
    "到期日",
    "The payment is required by the due date.",
    "需要在到期日之前付款。",
    "n."
  ],
  [
    "e-commerce",
    "電子商務",
    "E-commerce sales grew quickly last year.",
    "去年電子商務銷售額快速成長。",
    "n."
  ],
  [
    "earnings",
    "收益；薪資",
    "The report showed higher earnings this quarter.",
    "報告顯示本季收益較高。",
    "n."
  ],
  [
    "efficiency",
    "效率",
    "The new tool improved the team's efficiency.",
    "新工具提高了團隊的效率。",
    "n."
  ],
  [
    "electronic signature",
    "電子簽章",
    "Please add your electronic signature here.",
    "請在此處新增您的電子簽名。",
    "n."
  ],
  [
    "eligibility",
    "資格；合格條件",
    "Your eligibility depends on your employment status.",
    "您的資格取決於您的就業狀況。",
    "n."
  ],
  [
    "employer",
    "雇主",
    "The employer provides training for new staff.",
    "雇主為新進員工提供培訓。",
    "n."
  ],
  [
    "employment contract",
    "聘僱合約",
    "Read the employment contract before signing it.",
    "簽署僱傭合約前請閱讀僱傭合約。",
    "n."
  ],
  [
    "endorsement",
    "背書；推薦",
    "The product received an endorsement from a chef.",
    "該產品得到了廚師的認可。",
    "n."
  ],
  [
    "enrollment form",
    "報名表；登記表",
    "Submit the enrollment form by Friday.",
    "在周五之前提交報名表。",
    "n."
  ],
  [
    "entrepreneurship",
    "創業精神",
    "The course teaches the basics of entrepreneurship.",
    "課程教授創業的基礎知識。",
    "n."
  ],
  [
    "entry-level",
    "入門級的；初階職位的",
    "This is an entry-level role with training.",
    "這是經過訓練的入門級角色。",
    "adj."
  ],
  [
    "executive assistant",
    "行政助理",
    "The executive assistant scheduled the meeting.",
    "行政助理安排了會議。",
    "n."
  ],
  [
    "expense account",
    "費用帳戶",
    "Keep receipts for your expense account.",
    "保留您的費用帳戶收據。",
    "n."
  ],
  [
    "export",
    "出口；出口品",
    "The company plans to export tea to several countries.",
    "該公司計劃向多個國家出口茶葉。",
    "n.／v."
  ],
  [
    "exporter",
    "出口商",
    "The exporter arranged the shipping documents.",
    "出口商安排了裝運單據。",
    "n."
  ],
  [
    "facility management",
    "設施管理",
    "Facility management keeps the building safe and clean.",
    "設施管理確保建築物安全和清潔。",
    "n."
  ],
  [
    "farewell party",
    "歡送會",
    "We held a farewell party for our colleague.",
    "我們為同事舉辦了歡送會。",
    "n."
  ],
  [
    "financial statement",
    "財務報表",
    "The accountant prepared the financial statement.",
    "會計師準備了財務報表。",
    "n."
  ],
  [
    "fixed cost",
    "固定成本",
    "Rent is a fixed cost for the business.",
    "租金是企業的固定成本。",
    "n."
  ],
  [
    "follow up",
    "追蹤；後續處理",
    "I will follow up with the client tomorrow.",
    "明天我會跟客戶跟進。",
    "phr.v."
  ],
  [
    "forecasting",
    "預測；預報",
    "Accurate forecasting helps prevent product shortages.",
    "準確的預測有助於防止產品短缺。",
    "n."
  ],
  [
    "freelance",
    "自由接案；自由職業的",
    "She works freelance as a graphic designer.",
    "她是一名自由職業平面設計師。",
    "n.／v.／adj."
  ],
  [
    "fulfillment center",
    "訂單履行中心",
    "The order was packed at the fulfillment center.",
    "訂單已在履行中心包裝。",
    "n."
  ],
  [
    "fundraiser",
    "募款活動；募款人",
    "The school held a fundraiser for new books.",
    "學校為新書舉辦了募款活動。",
    "n."
  ],
  [
    "general manager",
    "總經理",
    "The general manager welcomed the new employees.",
    "總經理對新進員工的到來表示歡迎。",
    "n."
  ],
  [
    "goal setting",
    "目標設定",
    "Goal setting helps teams stay focused.",
    "目標設定有助於團隊保持專注。",
    "n."
  ],
  [
    "goods receipt",
    "收貨確認",
    "Please record the goods receipt in the system.",
    "請在系統中記錄收貨情況。",
    "n."
  ],
  [
    "gross profit",
    "毛利",
    "Gross profit increased after costs fell.",
    "成本下降後毛利增加。",
    "n."
  ],
  [
    "growth rate",
    "成長率",
    "The growth rate slowed during the winter.",
    "冬季生長速度減慢。",
    "n."
  ],
  [
    "handover",
    "交接；移交",
    "The handover to the new manager was smooth.",
    "向新經理的移交很順利。",
    "n."
  ],
  [
    "hazard",
    "危害；危險",
    "A wet floor can be a safety hazard.",
    "潮濕的地板可能有安全隱憂。",
    "n.／v."
  ],
  [
    "health insurance",
    "健康保險",
    "The job includes health insurance for employees.",
    "該工作包括員工的健康保險。",
    "n."
  ],
  [
    "head office",
    "總公司",
    "The final decision came from the head office.",
    "最終決定由總部做出。",
    "n."
  ],
  [
    "in-house",
    "內部的；公司內部地",
    "The company provides in-house training.",
    "本公司提供內部培訓。",
    "adj.?adv."
  ],
  [
    "incur",
    "招致；產生（費用）",
    "Late payment may incur an additional fee.",
    "逾期付款可能會產生額外費用。",
    "v."
  ],
  [
    "indemnity",
    "賠償；保障",
    "The contract includes an indemnity clause.",
    "合約包括賠償條款。",
    "n."
  ],
  [
    "induction",
    "新進人員訓練；感應",
    "New employees attend an induction on their first day.",
    "新進員工第一天參加入職培訓。",
    "n."
  ],
  [
    "industrial",
    "工業的；產業的",
    "The town has an industrial area near the port.",
    "該鎮在港口附近有一個工業區。",
    "adj."
  ],
  [
    "information technology",
    "資訊科技",
    "She works in information technology at the hospital.",
    "她在醫院從事資訊科技工作。",
    "n."
  ],
  [
    "installment",
    "分期付款；一期款項",
    "We paid for the computer in a single installment.",
    "我們一次性支付了這台電腦的費用。",
    "n."
  ],
  [
    "institution",
    "機構；制度",
    "The bank is a trusted financial institution.",
    "該銀行是值得信賴的金融機構。",
    "n."
  ],
  [
    "insurance policy",
    "保險單",
    "Read your insurance policy before you travel.",
    "旅行前請閱讀您的保險單。",
    "n."
  ],
  [
    "intellectual property",
    "智慧財產",
    "The company protects its intellectual property carefully.",
    "公司認真保護其智慧財產權。",
    "n."
  ],
  [
    "interest rate",
    "利率",
    "The bank lowered its interest rate this month.",
    "該銀行本月降低了利率。",
    "n."
  ],
  [
    "intern",
    "實習生",
    "The intern learned how to prepare reports.",
    "實習生學習如何準備報告。",
    "n.／v."
  ],
  [
    "internship",
    "實習",
    "Her internship lasted for three months.",
    "她的實習持續了三個月。",
    "n."
  ],
  [
    "investment",
    "投資",
    "The new factory was a major investment.",
    "新工廠是一項重大投資。",
    "n."
  ],
  [
    "investor",
    "投資人",
    "The investor asked detailed questions about the plan.",
    "投資者詢問了有關該計劃的詳細問題。",
    "n."
  ],
  [
    "invoice number",
    "發票號碼",
    "Please include the invoice number with your payment.",
    "請在付款時附上發票號碼。",
    "n."
  ],
  [
    "joint venture",
    "合資企業",
    "The firms created a joint venture in Asia.",
    "兩家公司在亞洲成立了一家合資企業。",
    "n."
  ],
  [
    "key performance indicator",
    "關鍵績效指標",
    "Customer satisfaction is a key performance indicator.",
    "客戶滿意度是關鍵績效指標。",
    "n."
  ],
  [
    "labor cost",
    "勞動成本",
    "Labor cost increased because of overtime.",
    "由於加班，人工成本增加。",
    "n."
  ],
  [
    "laboratory",
    "實驗室",
    "The samples were tested in the laboratory.",
    "樣品在實驗室進行了測試。",
    "n."
  ],
  [
    "labor union",
    "工會",
    "The labor union met with company leaders.",
    "工會會見了公司領導。",
    "n."
  ],
  [
    "landlord",
    "房東",
    "The landlord repaired the broken heater.",
    "房東修好了壞掉的暖氣。",
    "n."
  ],
  [
    "lease",
    "租約；出租",
    "They signed a two-year lease for the office.",
    "他們簽署了一份為期兩年的辦公室租約。",
    "n.／v."
  ],
  [
    "legal counsel",
    "法律顧問",
    "The company consulted its legal counsel.",
    "該公司諮詢了其法律顧問。",
    "n."
  ],
  [
    "letterhead",
    "信頭；公司抬頭紙",
    "Please print the letter on company letterhead.",
    "請將這封信印在公司抬頭紙上。",
    "n."
  ],
  [
    "liability",
    "負債；法律責任",
    "The waiver limits the company's liability.",
    "該豁免限制了公司的責任。",
    "n."
  ],
  [
    "licensee",
    "被授權人",
    "The licensee may use the brand name.",
    "被授權人可以使用該品牌名稱。",
    "n."
  ],
  [
    "licensing",
    "授權；核發執照",
    "Licensing allows others to sell the product legally.",
    "許可證允許其他人合法銷售產品。",
    "n."
  ],
  [
    "line manager",
    "直屬主管",
    "Ask your line manager for feedback.",
    "向您的直線經理尋求回饋。",
    "n."
  ],
  [
    "loan",
    "貸款；借出",
    "The bank approved her loan application.",
    "銀行批准了她的貸款申請。",
    "n.／v."
  ],
  [
    "loan application",
    "貸款申請",
    "He completed the loan application online.",
    "他在線上完成了貸款申請。",
    "n."
  ],
  [
    "loyalty program",
    "會員忠誠計畫",
    "The loyalty program gives members extra points.",
    "忠誠度計劃為會員提供額外積分。",
    "n."
  ],
  [
    "machine operator",
    "機台操作員",
    "The machine operator checked the controls.",
    "機器操作員檢查了控制裝置。",
    "n."
  ],
  [
    "mailing list",
    "郵寄名單",
    "Please add my address to the mailing list.",
    "請將我的地址加入郵件清單。",
    "n."
  ],
  [
    "manufacturing",
    "製造業；製造",
    "Manufacturing provides many jobs in the region.",
    "製造業為該地區提供了許多就業機會。",
    "n."
  ],
  [
    "market research",
    "市場研究",
    "The team conducted market research before launching.",
    "該團隊在推出之前進行了市場調查。",
    "n."
  ],
  [
    "market segment",
    "市場區隔",
    "This product targets a young market segment.",
    "該產品針對年輕的市場區隔。",
    "n."
  ],
  [
    "marketplace",
    "市場平台",
    "The online marketplace connects buyers and sellers.",
    "線上市場連接買家和賣家。",
    "n."
  ],
  [
    "media coverage",
    "媒體報導",
    "The event received positive media coverage.",
    "該活動得到了媒體的積極報導。",
    "n."
  ],
  [
    "merger agreement",
    "合併協議",
    "Both companies signed the merger agreement.",
    "兩家公司簽署了合併協議。",
    "n."
  ],
  [
    "milestone",
    "里程碑",
    "Finishing the design was an important milestone.",
    "完成設計是一個重要的里程碑。",
    "n."
  ],
  [
    "minimum wage",
    "最低工資",
    "The minimum wage increased this year.",
    "今年最低工資標準有所提高。",
    "n."
  ],
  [
    "minutes",
    "會議紀錄",
    "The secretary sent the meeting minutes by email.",
    "秘書透過電子郵件發送了會議紀要。",
    "n."
  ],
  [
    "monetary",
    "貨幣的；金錢的",
    "The award has both monetary and personal value.",
    "該獎項具有金錢和個人價值。",
    "adj."
  ],
  [
    "monitoring",
    "監測；監控",
    "Regular monitoring helps us find problems early.",
    "定期監控有助於我們及早發現問題。",
    "n."
  ],
  [
    "multinational",
    "跨國企業；跨國的",
    "She works for a multinational company.",
    "她在跨國公司工作。",
    "adj."
  ],
  [
    "mutual fund",
    "共同基金",
    "He invests a small amount in a mutual fund.",
    "他向共同基金投資了少量資金。",
    "n."
  ],
  [
    "net income",
    "淨利；淨收入",
    "Net income rose after expenses were reduced.",
    "費用減少後淨利增加。",
    "n."
  ],
  [
    "networking",
    "人脈建立；網路連線",
    "Networking helped her find a new job.",
    "網路幫助她找到了一份新工作。",
    "n."
  ],
  [
    "nonprofit",
    "非營利組織；非營利的",
    "The nonprofit provides meals for older people.",
    "該非營利組織為老年人提供膳食。",
    "n.／adj."
  ],
  [
    "notice period",
    "通知期間；離職預告期",
    "Employees must give a two-week notice period.",
    "員工必須提前兩週通知。",
    "n."
  ],
  [
    "occupational",
    "職業的；職務上的",
    "The clinic treats occupational injuries.",
    "該診所治療職業傷害。",
    "adj."
  ],
  [
    "offshore",
    "離岸的；海外的",
    "The company opened an offshore office.",
    "該公司開設了離岸辦事處。",
    "adj.／adv."
  ],
  [
    "onboarding",
    "新人到職流程",
    "The onboarding process begins before the first day.",
    "入職流程在第一天之前開始。",
    "n."
  ],
  [
    "operating cost",
    "營運成本",
    "Electricity is a major operating cost.",
    "電力是主要的營運成本。",
    "n."
  ],
  [
    "operating margin",
    "營業利益率",
    "The company improved its operating margin.",
    "該公司改善了營業利潤率。",
    "n."
  ],
  [
    "order form",
    "訂購單",
    "Please complete the order form online.",
    "請在線上填寫訂單。",
    "n."
  ],
  [
    "organizational",
    "組織的",
    "The change created several organizational challenges.",
    "這項變化帶來了一些組織挑戰。",
    "adj."
  ],
  [
    "overdue",
    "逾期的",
    "Your library book is overdue.",
    "你圖書館的書已逾期。",
    "adj."
  ],
  [
    "overtime",
    "加班；加班費",
    "The staff worked overtime to finish the order.",
    "工作人員加班完成訂單。",
    "n.／adv."
  ],
  [
    "ownership",
    "所有權",
    "The document proves ownership of the vehicle.",
    "該文件證明車輛的所有權。",
    "n."
  ],
  [
    "packaging",
    "包裝；包裝材料",
    "The packaging protects the product during shipping.",
    "包裝在運送過程中保護產品。",
    "n."
  ],
  [
    "performance review",
    "績效評估",
    "Her performance review is scheduled for June.",
    "她的績效評估定於六月進行。",
    "n."
  ],
  [
    "petty cash",
    "零用金",
    "Use petty cash only for small purchases.",
    "僅在小額採購時使用零用現金。",
    "n."
  ],
  [
    "placement",
    "安置；職位安排",
    "The agency helped with job placement.",
    "該機構幫助安排工作。",
    "n."
  ],
  [
    "planning",
    "規劃；計畫",
    "Careful planning prevented delays.",
    "仔細的計劃避免了延誤。",
    "n."
  ],
  [
    "point of sale",
    "銷售點",
    "The display stands near the point of sale.",
    "顯示器位於銷售點附近。",
    "n."
  ],
  [
    "policyholder",
    "保單持有人",
    "The policyholder reported the accident promptly.",
    "投保人及時報告了事故。",
    "n."
  ],
  [
    "portable device",
    "可攜式裝置",
    "This portable device fits easily in a bag.",
    "這款便攜式設備可輕鬆放入包中。",
    "n."
  ],
  [
    "portfolio manager",
    "投資組合經理",
    "The portfolio manager reviewed the investments.",
    "投資組合經理審查了投資。",
    "n."
  ],
  [
    "postal code",
    "郵遞區號",
    "Please enter your postal code correctly.",
    "請正確輸入您的郵遞區號。",
    "n."
  ],
  [
    "prepaid",
    "預付的",
    "The card is prepaid and cannot be reloaded.",
    "該卡為預付費卡，無法儲值。",
    "adj."
  ],
  [
    "press release",
    "新聞稿",
    "The company issued a press release this morning.",
    "該公司今天上午發布了一份新聞稿。",
    "n."
  ],
  [
    "price list",
    "價目表",
    "The supplier emailed an updated price list.",
    "供應商透過電子郵件發送了更新的價目表。",
    "n."
  ],
  [
    "pricing",
    "定價；價格策略",
    "The manager reviewed the pricing strategy.",
    "經理審查了定價策略。",
    "n."
  ],
  [
    "production line",
    "生產線",
    "The new production line started last week.",
    "新生產線已於上週啟動。",
    "n."
  ],
  [
    "profit margin",
    "利潤率",
    "The shop increased its profit margin.",
    "這家商店增加了利潤率。",
    "n."
  ],
  [
    "profitability",
    "獲利能力",
    "The report examines the product's profitability.",
    "該報告審查了該產品的盈利能力。",
    "n."
  ],
  [
    "project manager",
    "專案經理",
    "The project manager assigned the next tasks.",
    "專案經理佈置了接下來的任務。",
    "n."
  ],
  [
    "prospect",
    "潛在客戶；前景",
    "The salesperson called a promising prospect.",
    "銷售人員稱其前景廣闊。",
    "n.／v."
  ],
  [
    "public relations",
    "公共關係",
    "She works in public relations for the museum.",
    "她在博物館從事公共關係工作。",
    "n."
  ],
  [
    "purchase order",
    "採購訂單",
    "The buyer sent a purchase order to the supplier.",
    "買方向供應商發送了採購訂單。",
    "n."
  ],
  [
    "quality control",
    "品質管制",
    "Quality control checks every finished item.",
    "品質管制檢查每件成品。",
    "n."
  ],
  [
    "quality assurance",
    "品質保證",
    "Quality assurance prevents defects before shipping.",
    "品質保證可防止出貨前出現缺陷。",
    "n."
  ],
  [
    "recruitment agency",
    "人力仲介公司",
    "The recruitment agency found several candidates.",
    "招聘機構找到了幾名候選人。",
    "n."
  ],
  [
    "refund policy",
    "退款政策",
    "Please read the refund policy before ordering.",
    "請在訂購前閱讀退款政策。",
    "n."
  ],
  [
    "reimbursement",
    "報銷；償還",
    "Submit the receipt to request reimbursement.",
    "提交收據以請求報銷。",
    "n."
  ],
  [
    "relocation",
    "搬遷；調任",
    "The company offered relocation support for the transfer.",
    "本公司為此次轉移提供搬遷支援。",
    "n."
  ],
  [
    "remittance",
    "匯款",
    "The bank processed the remittance today.",
    "銀行今天處理了這筆匯款。",
    "n."
  ],
  [
    "renewal",
    "續約；更新",
    "Your membership renewal is due next month.",
    "你的會員續約下個月到期。",
    "n."
  ],
  [
    "retailer",
    "零售商",
    "The retailer opened a new branch downtown.",
    "這家零售商在市中心開了新分店。",
    "n."
  ],
  [
    "return policy",
    "退貨政策",
    "Please read the return policy before buying.",
    "購買前請閱讀退貨政策。",
    "n."
  ],
  [
    "risk assessment",
    "風險評估",
    "The team completed a risk assessment.",
    "團隊完成了一項風險評估。",
    "n."
  ],
  [
    "royalty",
    "權利金；版稅",
    "The author receives a royalty for each book sold.",
    "作者每賣出一本書就收到版稅。",
    "n."
  ],
  [
    "sales associate",
    "銷售專員",
    "A sales associate helped me find the product.",
    "銷售專員幫我找到商品。",
    "n."
  ],
  [
    "sales forecast",
    "銷售預測",
    "The sales forecast looks positive this quarter.",
    "本季的銷售預測看起來樂觀。",
    "n."
  ],
  [
    "sales representative",
    "業務代表",
    "The sales representative visited our office.",
    "業務代表拜訪了我們的辦公室。",
    "n."
  ],
  [
    "sales target",
    "銷售目標",
    "The team reached its sales target early.",
    "團隊提早達成銷售目標。",
    "n."
  ],
  [
    "savings account",
    "儲蓄帳戶",
    "She opened a savings account at the bank.",
    "她在銀行開了儲蓄帳戶。",
    "n."
  ],
  [
    "schedule change",
    "行程變更",
    "We received a schedule change by email.",
    "我們透過電子郵件收到行程變更通知。",
    "n."
  ],
  [
    "security deposit",
    "押金；保證金",
    "The landlord returned the security deposit.",
    "房東退還了押金。",
    "n."
  ],
  [
    "service charge",
    "服務費",
    "A service charge is included in the bill.",
    "帳單中已包含服務費。",
    "n."
  ],
  [
    "shareholder",
    "股東",
    "Each shareholder can vote at the meeting.",
    "每位股東都可以在會議中投票。",
    "n."
  ],
  [
    "shipping label",
    "運送標籤",
    "Attach the shipping label to the box.",
    "請把運送標籤貼在箱子上。",
    "n."
  ],
  [
    "shipping rate",
    "運費費率",
    "The shipping rate depends on the package weight.",
    "運費取決於包裹重量。",
    "n."
  ],
  [
    "short-term",
    "短期的",
    "We need a short-term solution.",
    "我們需要一個短期解決方案。",
    "adj."
  ],
  [
    "signatory",
    "簽署人",
    "Every signatory received a copy of the agreement.",
    "每位簽署人都收到一份協議副本。",
    "n."
  ],
  [
    "social security",
    "社會保險",
    "Social security contributions appear on the pay slip.",
    "社會保險提撥會顯示在薪資單上。",
    "n."
  ],
  [
    "sole proprietor",
    "獨資業主",
    "A sole proprietor manages the business alone.",
    "獨資業主獨自管理企業。",
    "n."
  ],
  [
    "specification sheet",
    "規格表",
    "Please check the specification sheet carefully.",
    "請仔細查看規格表。",
    "n."
  ],
  [
    "staffing",
    "人力配置",
    "Staffing is limited during the holiday.",
    "假日期間的人力配置有限。",
    "n."
  ],
  [
    "startup",
    "新創公司；創業初期",
    "The startup launched its first product.",
    "這家新創公司推出了第一項產品。",
    "n."
  ],
  [
    "stockholder",
    "股東",
    "The stockholder asked about future profits.",
    "股東詢問未來的利潤。",
    "n."
  ],
  [
    "strategic",
    "策略性的",
    "They made a strategic decision to expand.",
    "他們做出擴張的策略性決定。",
    "adj."
  ],
  [
    "subscription",
    "訂閱；訂購",
    "My magazine subscription ends in June.",
    "我的雜誌訂閱在六月結束。",
    "n."
  ],
  [
    "superannuation",
    "退休金制度",
    "The company contributes to staff superannuation.",
    "公司為員工提撥退休金。",
    "n."
  ],
  [
    "supplier agreement",
    "供應商協議",
    "Both sides signed the supplier agreement.",
    "雙方簽署了供應商協議。",
    "n."
  ],
  [
    "supply shortage",
    "供應短缺",
    "A supply shortage delayed production.",
    "供應短缺延誤了生產。",
    "n."
  ],
  [
    "surveyor",
    "調查員；測量師",
    "The surveyor inspected the property yesterday.",
    "測量師昨天檢查了這項房產。",
    "n."
  ],
  [
    "sustainability",
    "永續性",
    "Sustainability is part of the company's plan.",
    "永續性是公司計畫的一部分。",
    "n."
  ],
  [
    "tariff",
    "關稅；費率",
    "The new tariff increased import costs.",
    "新的關稅提高了進口成本。",
    "n."
  ],
  [
    "tax deduction",
    "稅額扣除",
    "Keep receipts for a possible tax deduction.",
    "請保留收據以便申請可能的稅額扣除。",
    "n."
  ],
  [
    "telecommute",
    "遠距工作",
    "Many employees telecommute twice a week.",
    "許多員工每週遠距工作兩天。",
    "v."
  ],
  [
    "tender",
    "投標；投標書",
    "The company submitted a tender for the project.",
    "公司為該專案提交了投標書。",
    "n.／v."
  ],
  [
    "terms and conditions",
    "條款與條件",
    "Read the terms and conditions before signing.",
    "簽署前請閱讀條款與條件。",
    "n."
  ],
  [
    "trade fair",
    "商展",
    "We met new suppliers at the trade fair.",
    "我們在商展認識了新供應商。",
    "n."
  ],
  [
    "trademark",
    "商標",
    "The company registered its trademark last year.",
    "公司去年註冊了商標。",
    "n.／v."
  ],
  [
    "understaffed",
    "人手不足的",
    "The restaurant is understaffed tonight.",
    "這家餐廳今晚人手不足。",
    "adj."
  ],
  [
    "unforeseen",
    "未預見的",
    "Unforeseen delays changed the schedule.",
    "未預見的延誤改變了行程。",
    "adj."
  ],
  [
    "union representative",
    "工會代表",
    "The union representative attended the discussion.",
    "工會代表參加了討論。",
    "n."
  ],
  [
    "unit cost",
    "單位成本",
    "The unit cost fell after production increased.",
    "生產增加後，單位成本下降。",
    "n."
  ],
  [
    "unpaid",
    "未付款的；無薪的",
    "The invoice remains unpaid.",
    "這張發票仍未付款。",
    "adj."
  ],
  [
    "user-friendly",
    "容易使用的",
    "The new website is user-friendly.",
    "新網站很容易使用。",
    "adj."
  ],
  [
    "vacancy",
    "職缺；空房",
    "There is one vacancy in the sales department.",
    "銷售部有一個職缺。",
    "n."
  ],
  [
    "valuation",
    "估價；評價",
    "The bank requested a property valuation.",
    "銀行要求進行房產估價。",
    "n."
  ],
  [
    "vendor contract",
    "供應商合約",
    "Our lawyer reviewed the vendor contract.",
    "我們的律師審閱了供應商合約。",
    "n."
  ],
  [
    "virtual meeting",
    "線上會議",
    "The virtual meeting starts at ten.",
    "線上會議十點開始。",
    "n."
  ],
  [
    "warehouse receipt",
    "倉單；倉庫收據",
    "The warehouse receipt confirms delivery.",
    "倉單確認已交貨。",
    "n."
  ],
  [
    "webinar",
    "線上研討會",
    "I registered for a marketing webinar.",
    "我報名了行銷線上研討會。",
    "n."
  ],
  [
    "workplace",
    "工作場所",
    "Safety matters in every workplace.",
    "每個工作場所的安全都很重要。",
    "n."
  ],
  [
    "written notice",
    "書面通知",
    "The tenant received written notice yesterday.",
    "房客昨天收到書面通知。",
    "n."
  ],
  [
    "mountain",
    "山",
    "The mountain looks beautiful after the rain.",
    "雨後的山看起來很美。",
    "n."
  ],
  [
    "move",
    "移動；搬家；舉動",
    "Please move the chair closer to the table.",
    "請把椅子移近桌子。",
    "v.／n."
  ],
  [
    "multiple",
    "多個的",
    "The form is available in multiple languages.",
    "這份表格提供多種語言版本。",
    "adj."
  ],
  [
    "wise",
    "明智的",
    "It is wise to save part of your income.",
    "儲蓄部分收入是明智的。",
    "adj."
  ],
  [
    "music",
    "音樂",
    "Soft music helps me focus.",
    "柔和的音樂幫助我專心。",
    "n."
  ],
  [
    "musician",
    "音樂家",
    "The musician played the piano beautifully.",
    "這位音樂家優美地彈奏鋼琴。",
    "n."
  ],
  [
    "narrow",
    "狹窄的；縮小",
    "The street is too narrow for buses.",
    "這條街太窄，公車無法通行。",
    "adj.／v."
  ],
  [
    "nearby",
    "附近的；在附近",
    "There is a nearby pharmacy.",
    "附近有一家藥局。",
    "adj.／adv."
  ],
  [
    "necessary",
    "必要的",
    "A passport is necessary for this trip.",
    "這趟旅行需要護照。",
    "adj."
  ],
  [
    "neighbor",
    "鄰居",
    "Our neighbor watered the plants.",
    "我們的鄰居幫忙澆花。",
    "n."
  ],
  [
    "news",
    "新聞；消息",
    "Did you hear the news this morning?",
    "你今天早上聽到這則新聞了嗎？",
    "n."
  ],
  [
    "noise",
    "噪音",
    "The noise outside made it hard to sleep.",
    "外面的噪音讓人難以入睡。",
    "n."
  ],
  [
    "north",
    "北方；北邊的",
    "The office is on the north side of town.",
    "辦公室在城鎮北邊。",
    "n.／adj.／adv."
  ],
  [
    "note",
    "筆記；注意；記下",
    "Please note the change in the schedule.",
    "請注意行程的變更。",
    "n.／v."
  ],
  [
    "nurse",
    "護理師；照護",
    "The nurse checked my temperature.",
    "護理師量了我的體溫。",
    "n.／v."
  ],
  [
    "ocean",
    "海洋",
    "The hotel room faces the ocean.",
    "飯店房間面向海洋。",
    "n."
  ],
  [
    "officer",
    "職員；官員",
    "A police officer helped the visitor.",
    "一名警察協助了訪客。",
    "n."
  ],
  [
    "oil",
    "油；石油",
    "Add a little oil to the pan.",
    "在平底鍋裡加一點油。",
    "n.／v."
  ],
  [
    "opposite",
    "相反的；對面",
    "The bank is opposite the post office.",
    "銀行在郵局對面。",
    "adj.／prep.／n."
  ],
  [
    "woman",
    "女性；女人",
    "The woman at the counter greeted us.",
    "櫃檯的女士向我們打招呼。",
    "n."
  ],
  [
    "origin",
    "起源；來源",
    "Please state the origin of the product.",
    "請說明產品的產地。",
    "n."
  ],
  [
    "other",
    "其他的；另一個",
    "Do you have any other questions?",
    "你還有其他問題嗎？",
    "adj.／pron."
  ],
  [
    "page",
    "頁；翻頁",
    "Please read page ten of the manual.",
    "請閱讀手冊第十頁。",
    "n.／v."
  ],
  [
    "perform",
    "執行；表演",
    "The team performed well under pressure.",
    "團隊在壓力下表現良好。",
    "v."
  ],
  [
    "perhaps",
    "也許",
    "Perhaps we can meet next week.",
    "也許我們可以下週見面。",
    "adv."
  ],
  [
    "person",
    "人",
    "Each person needs a name tag.",
    "每個人都需要名牌。",
    "n."
  ],
  [
    "phone",
    "電話；打電話",
    "Please phone me when you arrive.",
    "你到達時請打電話給我。",
    "n.／v."
  ],
  [
    "photo",
    "照片",
    "She sent a photo of the receipt.",
    "她傳了一張收據的照片。",
    "n."
  ],
  [
    "pilot",
    "飛行員；領航",
    "The pilot welcomed passengers onboard.",
    "飛行員歡迎乘客登機。",
    "n.／v."
  ],
  [
    "pipe",
    "管子；管道",
    "Water is leaking from the pipe.",
    "水從管子裡漏出來。",
    "n.／v."
  ],
  [
    "place",
    "地方；放置",
    "Please place the keys on the table.",
    "請把鑰匙放在桌上。",
    "n.／v."
  ],
  [
    "plant",
    "植物；工廠；種植",
    "The factory plant employs many local people.",
    "這座工廠雇用許多當地人。",
    "n.／v."
  ],
  [
    "pocket",
    "口袋；一小筆",
    "My phone is in my jacket pocket.",
    "我的手機在外套口袋裡。",
    "n.／v."
  ],
  [
    "pool",
    "游泳池；集合",
    "The hotel pool opens at seven.",
    "飯店游泳池七點開放。",
    "n.／v."
  ],
  [
    "postcard",
    "明信片",
    "I sent a postcard from the beach.",
    "我從海灘寄了一張明信片。",
    "n."
  ],
  [
    "primary",
    "主要的；初級的",
    "Customer safety is our primary concern.",
    "顧客安全是我們最主要的關切。",
    "adj.／n."
  ],
  [
    "proud",
    "自豪的",
    "Her parents are proud of her work.",
    "她的父母以她的工作為榮。",
    "adj."
  ],
  [
    "pull",
    "拉；拉力",
    "Pull the door toward you.",
    "把門往你的方向拉。",
    "v.／n."
  ],
  [
    "quarter",
    "四分之一；季度",
    "Sales increased in the first quarter.",
    "第一季的銷售額增加了。",
    "n."
  ],
  [
    "quit",
    "停止；離職",
    "He decided to quit smoking.",
    "他決定戒菸。",
    "v."
  ],
  [
    "radio",
    "收音機；無線電",
    "I heard the news on the radio.",
    "我在收音機上聽到新聞。",
    "n.／v."
  ],
  [
    "react",
    "反應；回應",
    "Customers reacted positively to the change.",
    "顧客對這項改變反應正面。",
    "v."
  ],
  [
    "real",
    "真實的；真正的",
    "The picture looks almost real.",
    "這張圖片看起來幾乎是真的。",
    "adj."
  ],
  [
    "remove",
    "移除；搬走",
    "Please remove your name from the list.",
    "請把你的名字從名單中移除。",
    "v."
  ],
  [
    "rest",
    "休息；其餘",
    "Take a rest after the long walk.",
    "長途步行後休息一下。",
    "n.／v."
  ],
  [
    "rise",
    "上升；起床",
    "Prices may rise next month.",
    "價格下個月可能上漲。",
    "v.／n."
  ],
  [
    "risk",
    "風險；冒險",
    "There is a risk of delay.",
    "有延誤的風險。",
    "n.／v."
  ],
  [
    "river",
    "河流",
    "The river runs through the town.",
    "這條河流穿過城鎮。",
    "n."
  ],
  [
    "road",
    "道路",
    "This road leads to the airport.",
    "這條路通往機場。",
    "n."
  ],
  [
    "roof",
    "屋頂",
    "Rain fell loudly on the roof.",
    "雨大聲落在屋頂上。",
    "n.／v."
  ],
  [
    "room",
    "房間；空間",
    "Is there room for one more chair?",
    "還有空間放一張椅子嗎？",
    "n."
  ],
  [
    "rule",
    "規則；統治",
    "Please follow the safety rules.",
    "請遵守安全規則。",
    "n.／v."
  ],
  [
    "run",
    "跑；運作；經營",
    "The train runs every thirty minutes.",
    "火車每三十分鐘一班。",
    "v.／n."
  ],
  [
    "scene",
    "場景；景象",
    "The beach scene was beautiful.",
    "海灘景色很美。",
    "n."
  ],
  [
    "screen",
    "螢幕；篩選",
    "The screen is too bright at night.",
    "螢幕在夜晚太亮了。",
    "n.／v."
  ],
  [
    "secret",
    "秘密的；秘密",
    "Please keep this plan secret.",
    "請對這個計畫保密。",
    "n.／adj."
  ],
  [
    "section",
    "部分；區段",
    "Read the first section of the report.",
    "閱讀報告的第一部分。",
    "n."
  ],
  [
    "segment",
    "部分；區段",
    "The final segment of the show was short.",
    "節目的最後一段很短。",
    "n.／v."
  ],
  [
    "self",
    "自己；自我",
    "She completed the task by herself.",
    "她獨自完成了任務。",
    "n.／pron."
  ],
  [
    "sell",
    "賣；銷售",
    "They sell fresh bread every morning.",
    "他們每天早上賣新鮮麵包。",
    "v."
  ],
  [
    "send",
    "寄送；發送",
    "Send me the file when it is ready.",
    "檔案準備好時寄給我。",
    "v."
  ],
  [
    "sentence",
    "句子；判決",
    "Write one sentence for each word.",
    "為每個單字寫一個句子。",
    "n.／v."
  ],
  [
    "set",
    "放置；一組；固定的",
    "Set the cups on the table.",
    "把杯子放在桌上。",
    "v.／n.／adj."
  ],
  [
    "settle",
    "解決；安頓",
    "We settled the bill before leaving.",
    "離開前我們結清了帳單。",
    "v."
  ],
  [
    "shade",
    "陰影；遮蔽",
    "Sit in the shade to stay cool.",
    "坐在陰影處保持涼爽。",
    "n.／v."
  ],
  [
    "shadow",
    "影子；遮蔽",
    "The tree cast a long shadow.",
    "這棵樹投下長長的影子。",
    "n.／v."
  ],
  [
    "sheet",
    "一張紙；床單",
    "Please print the form on one sheet.",
    "請把表格印在一張紙上。",
    "n."
  ],
  [
    "ship",
    "船；運送",
    "The store will ship your order tomorrow.",
    "商店明天會寄出你的訂單。",
    "n.／v."
  ],
  [
    "show",
    "展示；表演；節目",
    "Please show your ticket at the door.",
    "請在門口出示你的票。",
    "v.／n."
  ],
  [
    "silent",
    "安靜的；無聲的",
    "Please keep your phone silent during class.",
    "上課時請把手機調成靜音。",
    "adj."
  ],
  [
    "silver",
    "銀；銀色的",
    "The necklace is made of silver.",
    "這條項鍊是銀製的。",
    "n.／adj."
  ],
  [
    "skin",
    "皮膚",
    "Use sunscreen to protect your skin.",
    "使用防曬乳保護皮膚。",
    "n.／v."
  ],
  [
    "sleep",
    "睡覺；睡眠",
    "A good night's sleep improves focus.",
    "一夜好眠能提升專注力。",
    "v.／n."
  ],
  [
    "slight",
    "輕微的",
    "There was a slight delay this morning.",
    "今天早上有些微延誤。",
    "adj."
  ],
  [
    "small",
    "小的",
    "We need a small table for the room.",
    "我們需要一張小桌子放在房間裡。",
    "adj."
  ],
  [
    "smell",
    "聞起來；氣味",
    "The soup smells delicious.",
    "湯聞起來很香。",
    "v.／n."
  ],
  [
    "snow",
    "雪；下雪",
    "It began to snow in the afternoon.",
    "下午開始下雪。",
    "n.／v."
  ],
  [
    "so",
    "所以；如此",
    "The road was closed, so we took a bus.",
    "道路封閉，所以我們搭公車。",
    "conj.／adv."
  ],
  [
    "soft",
    "柔軟的；柔和的",
    "Use a soft cloth to clean the screen.",
    "使用柔軟的布清潔螢幕。",
    "adj.／adv."
  ],
  [
    "someone",
    "某人",
    "Someone left a bag on the bus.",
    "有人把包包留在公車上。",
    "pron."
  ],
  [
    "sometimes",
    "有時候",
    "I sometimes work from home.",
    "我有時候在家工作。",
    "adv."
  ],
  [
    "son",
    "兒子",
    "Her son starts school next year.",
    "她的兒子明年開始上學。",
    "n."
  ],
  [
    "song",
    "歌曲",
    "This song is popular with students.",
    "這首歌很受學生歡迎。",
    "n."
  ],
  [
    "sound",
    "聲音；聽起來",
    "That sounds like a good idea.",
    "那聽起來是個好主意。",
    "n.／v.／adj."
  ],
  [
    "soup",
    "湯",
    "The soup is hot, so be careful.",
    "湯很燙，所以要小心。",
    "n."
  ],
  [
    "south",
    "南方；南邊的",
    "The beach is south of the city.",
    "海灘在城市南方。",
    "n.／adj.／adv."
  ],
  [
    "spice",
    "香料；增添趣味",
    "This spice gives the dish a warm flavor.",
    "這種香料讓菜餚帶有溫暖的風味。",
    "n.／v."
  ],
  [
    "spirit",
    "精神；心情",
    "The team showed a strong spirit.",
    "團隊展現了強大的精神。",
    "n."
  ],
  [
    "split",
    "分開；裂縫",
    "Let's split the bill equally.",
    "我們平分帳單吧。",
    "v.／n."
  ],
  [
    "sponsor",
    "贊助；贊助者",
    "A local company will sponsor the event.",
    "一家當地公司將贊助這場活動。",
    "n.／v."
  ],
  [
    "stairs",
    "樓梯",
    "Take the stairs to the second floor.",
    "走樓梯到二樓。",
    "n."
  ],
  [
    "stamp",
    "郵票；蓋印",
    "Put a stamp on the envelope.",
    "在信封上貼一張郵票。",
    "n.／v."
  ],
  [
    "station",
    "車站；站點",
    "The station is only five minutes away.",
    "車站只要五分鐘就到。",
    "n."
  ],
  [
    "steal",
    "偷竊",
    "Someone tried to steal my bike.",
    "有人試圖偷我的腳踏車。",
    "v."
  ],
  [
    "steel",
    "鋼",
    "The bridge is made of steel.",
    "這座橋是鋼製的。",
    "n."
  ],
  [
    "step",
    "步驟；踏步",
    "The first step is to read the instructions.",
    "第一步是閱讀說明。",
    "n.／v."
  ],
  [
    "stick",
    "棍子；黏住",
    "The label will stick to the box.",
    "標籤會黏在箱子上。",
    "n.／v."
  ],
  [
    "still",
    "仍然；靜止的",
    "The office is still open.",
    "辦公室仍然開著。",
    "adv.／adj."
  ],
  [
    "stomach",
    "胃；腹部",
    "My stomach hurts after lunch.",
    "午餐後我的胃痛。",
    "n."
  ],
  [
    "storm",
    "暴風雨；猛攻",
    "The storm delayed several flights.",
    "暴風雨延誤了好幾班飛機。",
    "n.／v."
  ],
  [
    "straight",
    "直的；直接地",
    "Go straight for two blocks.",
    "直走兩個街區。",
    "adj.／adv."
  ],
  [
    "stream",
    "小溪；串流",
    "A small stream runs behind the hotel.",
    "飯店後方有一條小溪。",
    "n.／v."
  ],
  [
    "street",
    "街道",
    "The cafe is on the next street.",
    "咖啡館在下一條街。",
    "n."
  ],
  [
    "stretch",
    "伸展；延伸",
    "Stretch your legs after sitting for hours.",
    "坐了幾個小時後伸展雙腿。",
    "v.／n."
  ],
  [
    "string",
    "細繩；一串",
    "Tie the package with a string.",
    "用細繩綁好包裹。",
    "n.／v."
  ],
  [
    "student",
    "學生",
    "Every student needs an ID card.",
    "每位學生都需要學生證。",
    "n."
  ],
  [
    "succeed",
    "成功",
    "You can succeed with regular practice.",
    "透過規律練習你可以成功。",
    "v."
  ],
  [
    "such",
    "這樣的；如此",
    "Such mistakes are easy to avoid.",
    "這類錯誤很容易避免。",
    "adj.／pron."
  ],
  [
    "sudden",
    "突然的",
    "There was a sudden change in the weather.",
    "天氣突然改變。",
    "adj."
  ],
  [
    "surprise",
    "驚喜；使驚訝",
    "The gift was a pleasant surprise.",
    "這份禮物是個愉快的驚喜。",
    "n.／v."
  ],
  [
    "sweater",
    "毛衣",
    "Wear a sweater on cool days.",
    "天涼時穿毛衣。",
    "n."
  ],
  [
    "symbol",
    "符號；象徵",
    "This symbol means the door is open.",
    "這個符號表示門是開著的。",
    "n.／v."
  ],
  [
    "table",
    "桌子；表格",
    "The data are shown in the table.",
    "資料顯示在表格中。",
    "n.／v."
  ],
  [
    "tail",
    "尾巴；尾端",
    "The dog wagged its tail.",
    "狗搖了搖尾巴。",
    "n.／v."
  ],
  [
    "talk",
    "談話；交談",
    "We need to talk about the plan.",
    "我們需要談談這個計畫。",
    "n.／v."
  ],
  [
    "tall",
    "高的",
    "That building is very tall.",
    "那棟建築非常高。",
    "adj."
  ],
  [
    "tank",
    "箱；槽；坦克",
    "The water tank is full.",
    "水箱是滿的。",
    "n.／v."
  ],
  [
    "tape",
    "膠帶；錄音帶",
    "Use tape to close the box.",
    "用膠帶封好箱子。",
    "n.／v."
  ],
  [
    "taxi",
    "計程車",
    "We took a taxi to the airport.",
    "我們搭計程車去機場。",
    "n.／v."
  ],
  [
    "tea",
    "茶",
    "Would you like a cup of tea?",
    "你想喝杯茶嗎？",
    "n."
  ],
  [
    "teach",
    "教導",
    "She teaches English at a local school.",
    "她在當地學校教英文。",
    "v."
  ],
  [
    "teacher",
    "教師",
    "The teacher explained the answer.",
    "老師解釋了答案。",
    "n."
  ],
  [
    "telephone",
    "電話；打電話",
    "The telephone is ringing.",
    "電話正在響。",
    "n.／v."
  ],
  [
    "television",
    "電視",
    "The news is on television tonight.",
    "今晚電視上有新聞。",
    "n."
  ],
  [
    "tend",
    "傾向；照料",
    "Prices tend to rise in summer.",
    "價格在夏季往往上漲。",
    "v."
  ],
  [
    "than",
    "比；而非",
    "This route is faster than the other one.",
    "這條路比另一條快。",
    "prep.／conj."
  ],
  [
    "thank",
    "感謝",
    "Thank you for your kind help.",
    "謝謝你的熱心幫助。",
    "v."
  ],
  [
    "there",
    "那裡；有",
    "There is a bus stop nearby.",
    "附近有一個公車站。",
    "adv."
  ],
  [
    "thick",
    "厚的；濃的",
    "This book is too thick to carry.",
    "這本書太厚，不方便攜帶。",
    "adj."
  ],
  [
    "thin",
    "薄的；瘦的",
    "Wear a thin jacket in spring.",
    "春天穿一件薄外套。",
    "adj.／v."
  ],
  [
    "thing",
    "東西；事情",
    "The most important thing is to start.",
    "最重要的事情是開始。",
    "n."
  ],
  [
    "third",
    "第三；三分之一",
    "Her office is on the third floor.",
    "她的辦公室在三樓。",
    "adj.／n."
  ],
  [
    "thirsty",
    "口渴的",
    "I am thirsty after the walk.",
    "走路後我口渴了。",
    "adj."
  ],
  [
    "though",
    "雖然；不過",
    "Though it was late, we kept working.",
    "雖然很晚了，我們仍繼續工作。",
    "conj.／adv."
  ],
  [
    "thousand",
    "一千",
    "More than a thousand people attended.",
    "超過一千人出席。",
    "n.／quant."
  ],
  [
    "through",
    "穿過；透過",
    "Walk through the lobby and turn left.",
    "穿過大廳後左轉。",
    "prep.／adv."
  ],
  [
    "throw",
    "丟；投擲",
    "Please do not throw paper on the floor.",
    "請不要把紙丟在地上。",
    "v."
  ],
  [
    "ticket",
    "票；罰單",
    "Keep your ticket until the trip ends.",
    "旅程結束前請保留車票。",
    "n.／v."
  ],
  [
    "tie",
    "領帶；綁",
    "He wore a blue tie to the interview.",
    "他面試時戴了一條藍色領帶。",
    "n.／v."
  ],
  [
    "title",
    "標題；頭銜",
    "Write a clear title for your report.",
    "為你的報告寫一個清楚的標題。",
    "n.／v."
  ],
  [
    "today",
    "今天；今日的",
    "Today is the deadline for applications.",
    "今天是申請截止日。",
    "n.／adv."
  ],
  [
    "toilet",
    "廁所",
    "The toilet is at the end of the hall.",
    "廁所在走廊盡頭。",
    "n."
  ],
  [
    "tomato",
    "番茄",
    "Add a tomato to the salad.",
    "在沙拉裡加一顆番茄。",
    "n."
  ],
  [
    "tomorrow",
    "明天",
    "We will discuss the plan tomorrow.",
    "我們明天會討論這個計畫。",
    "n.／adv."
  ],
  [
    "tone",
    "語氣；音調",
    "Use a polite tone in your email.",
    "在電子郵件中使用有禮的語氣。",
    "n.／v."
  ],
  [
    "tongue",
    "舌頭；語言",
    "The soup burned my tongue.",
    "湯燙到了我的舌頭。",
    "n."
  ],
  [
    "topic",
    "主題；話題",
    "Today's topic is customer service.",
    "今天的主題是客戶服務。",
    "n."
  ],
  [
    "total",
    "總數；總計",
    "The total comes to fifty dollars.",
    "總計是五十美元。",
    "n.／adj.／v."
  ],
  [
    "touch",
    "觸碰；聯絡",
    "Do not touch the wet paint.",
    "不要碰未乾的油漆。",
    "v.／n."
  ],
  [
    "tour",
    "旅行；導覽",
    "We joined a guided tour of the city.",
    "我們參加了城市導覽。",
    "n.／v."
  ],
  [
    "toward",
    "朝向；接近",
    "Walk toward the station.",
    "朝車站方向走。",
    "prep."
  ],
  [
    "town",
    "城鎮",
    "The town has a small train station.",
    "這個城鎮有一個小火車站。",
    "n."
  ],
  [
    "toy",
    "玩具",
    "The child put the toy in a box.",
    "孩子把玩具放進箱子裡。",
    "n.／v."
  ],
  [
    "tradition",
    "傳統",
    "This festival is an old tradition.",
    "這個節日是古老的傳統。",
    "n."
  ],
  [
    "train",
    "火車；訓練",
    "The train arrives at platform two.",
    "火車到達第二月台。",
    "n.／v."
  ],
  [
    "tree",
    "樹",
    "A large tree stands by the road.",
    "路邊有一棵大樹。",
    "n."
  ],
  [
    "trial",
    "試驗；審判",
    "The software is free during the trial.",
    "試用期間軟體免費。",
    "n.／adj."
  ],
  [
    "truck",
    "卡車",
    "The truck delivered the boxes.",
    "卡車送來了箱子。",
    "n.／v."
  ],
  [
    "true",
    "真實的；正確的",
    "Is this information true?",
    "這項資訊是真的嗎？",
    "adj."
  ],
  [
    "truth",
    "真相；事實",
    "The truth will become clear soon.",
    "真相很快就會明朗。",
    "n."
  ],
  [
    "tube",
    "管子；地鐵",
    "Squeeze the cream from the tube.",
    "把乳霜從軟管中擠出來。",
    "n."
  ],
  [
    "Tuesday",
    "星期二",
    "The office is closed on Tuesday.",
    "辦公室星期二休息。",
    "n."
  ],
  [
    "tune",
    "曲調；調整",
    "Please tune the radio to this station.",
    "請把收音機調到這個頻道。",
    "n.／v."
  ],
  [
    "turn",
    "轉彎；輪流；變成",
    "Turn right at the next corner.",
    "下一個轉角右轉。",
    "v.／n."
  ],
  [
    "twice",
    "兩次；兩倍",
    "I check my email twice a day.",
    "我每天查看電子郵件兩次。",
    "adv."
  ],
  [
    "unable",
    "不能夠的",
    "I was unable to attend the meeting.",
    "我無法出席會議。",
    "adj."
  ],
  [
    "uncle",
    "叔叔；舅舅",
    "My uncle lives in the south.",
    "我叔叔住在南部。",
    "n."
  ],
  [
    "under",
    "在…下面；少於",
    "Your bag is under the chair.",
    "你的包包在椅子下面。",
    "prep.／adv."
  ],
  [
    "until",
    "直到",
    "Please wait until your number is called.",
    "請等到叫到你的號碼。",
    "prep.／conj."
  ],
  [
    "upper",
    "上面的；較高的",
    "The files are on the upper shelf.",
    "檔案在上層架子上。",
    "adj."
  ],
  [
    "use",
    "使用；用途",
    "Use this link to open the form.",
    "使用這個連結開啟表格。",
    "v.／n."
  ],
  [
    "vacation",
    "假期",
    "She will take a vacation in July.",
    "她七月要休假。",
    "n.／v."
  ],
  [
    "valley",
    "山谷",
    "The village lies in a green valley.",
    "這個村莊位於翠綠的山谷中。",
    "n."
  ],
  [
    "video",
    "影片；錄影",
    "Watch the video before the lesson.",
    "上課前觀看影片。",
    "n.／v."
  ],
  [
    "village",
    "村莊",
    "The village is famous for its pottery.",
    "這個村莊以陶器聞名。",
    "n."
  ],
  [
    "violin",
    "小提琴",
    "She plays the violin after school.",
    "她放學後拉小提琴。",
    "n."
  ],
  [
    "visit",
    "拜訪；參觀",
    "We will visit the museum tomorrow.",
    "我們明天會參觀博物館。",
    "v.／n."
  ],
  [
    "voice",
    "聲音；表達意見",
    "I recognized her voice immediately.",
    "我立刻認出她的聲音。",
    "n.／v."
  ],
  [
    "wake",
    "醒來；叫醒",
    "I wake up early on weekdays.",
    "我平日早起。",
    "v.／n."
  ],
  [
    "walk",
    "走路；散步",
    "Let's walk to the station.",
    "我們走去車站吧。",
    "v.／n."
  ],
  [
    "wall",
    "牆",
    "There is a clock on the wall.",
    "牆上有一個時鐘。",
    "n."
  ],
  [
    "want",
    "想要；需要",
    "I want to learn more English.",
    "我想學更多英文。",
    "v.／n."
  ],
  [
    "warm",
    "溫暖的；使暖和",
    "Keep the soup warm.",
    "讓湯保持溫熱。",
    "adj.／v."
  ],
  [
    "warn",
    "警告；提醒注意",
    "The sign warns drivers about the curve.",
    "標誌警告駕駛注意彎道。",
    "v."
  ],
  [
    "wash",
    "洗；清洗",
    "Wash your hands before eating.",
    "吃東西前洗手。",
    "v.／n."
  ],
  [
    "water",
    "水；澆水",
    "Please water the plants every day.",
    "請每天澆花。",
    "n.／v."
  ],
  [
    "wave",
    "波浪；揮手",
    "She waved goodbye from the train.",
    "她從火車上揮手道別。",
    "n.／v."
  ],
  [
    "weak",
    "虛弱的；弱的",
    "The signal is weak in this room.",
    "這個房間的訊號很弱。",
    "adj."
  ],
  [
    "web",
    "網；網路",
    "The article is available on the web.",
    "這篇文章可在網路上閱讀。",
    "n."
  ],
  [
    "week",
    "星期；週",
    "The report is due next week.",
    "報告下週到期。",
    "n."
  ],
  [
    "weigh",
    "重量為；稱重",
    "This package weighs two kilograms.",
    "這個包裹重兩公斤。",
    "v."
  ],
  [
    "west",
    "西方；西邊的",
    "The sun sets in the west.",
    "太陽從西方落下。",
    "n.／adj.／adv."
  ],
  [
    "wet",
    "濕的；弄濕",
    "The floor is wet after the rain.",
    "雨後地板是濕的。",
    "adj.／v."
  ],
  [
    "wheel",
    "輪子；轉動",
    "The wheel needs more air.",
    "這個輪胎需要更多空氣。",
    "n.／v."
  ],
  [
    "white",
    "白色的；白色",
    "Please write on the white board.",
    "請寫在白板上。",
    "adj.／n."
  ],
  [
    "whole",
    "全部的；整個",
    "I spent the whole day studying.",
    "我花了一整天讀書。",
    "adj.／n."
  ],
  [
    "wild",
    "野生的；狂野的",
    "We saw wild birds near the lake.",
    "我們在湖邊看到野鳥。",
    "adj."
  ],
  [
    "acknowledgment",
    "確認；致謝",
    "The report includes information about the acknowledgment.",
    "報告包含關於「確認；致謝」的資訊。",
    "n."
  ],
  [
    "adaptation",
    "適應；改編",
    "The report includes information about the adaptation.",
    "報告包含關於「適應；改編」的資訊。",
    "n."
  ],
  [
    "administration",
    "行政；管理",
    "The report includes information about the administration.",
    "報告包含關於「行政；管理」的資訊。",
    "n."
  ],
  [
    "adviser",
    "顧問；指導者",
    "The report includes information about the adviser.",
    "報告包含關於「顧問；指導者」的資訊。",
    "n."
  ],
  [
    "affiliation",
    "隸屬；關係",
    "The report includes information about the affiliation.",
    "報告包含關於「隸屬；關係」的資訊。",
    "n."
  ],
  [
    "allocation",
    "分配；配置",
    "The report includes information about the allocation.",
    "報告包含關於「分配；配置」的資訊。",
    "n."
  ],
  [
    "assessment",
    "評估",
    "The report includes information about the assessment.",
    "報告包含關於「評估」的資訊。",
    "n."
  ],
  [
    "authorization",
    "授權；核准",
    "The report includes information about the authorization.",
    "報告包含關於「授權；核准」的資訊。",
    "n."
  ],
  [
    "collaboration",
    "合作",
    "The report includes information about the collaboration.",
    "報告包含關於「合作」的資訊。",
    "n."
  ],
  [
    "comparison",
    "比較",
    "The report includes information about the comparison.",
    "報告包含關於「比較」的資訊。",
    "n."
  ],
  [
    "convenience",
    "便利；方便",
    "The report includes information about the convenience.",
    "報告包含關於「便利；方便」的資訊。",
    "n."
  ],
  [
    "coordination",
    "協調",
    "The report includes information about the coordination.",
    "報告包含關於「協調」的資訊。",
    "n."
  ],
  [
    "corporation",
    "公司；法人",
    "The report includes information about the corporation.",
    "報告包含關於「公司；法人」的資訊。",
    "n."
  ],
  [
    "designation",
    "指定；職稱",
    "The report includes information about the designation.",
    "報告包含關於「指定；職稱」的資訊。",
    "n."
  ],
  [
    "digitalization",
    "數位化",
    "The report includes information about the digitalization.",
    "報告包含關於「數位化」的資訊。",
    "n."
  ],
  [
    "distribution",
    "分配；配送",
    "The report includes information about the distribution.",
    "報告包含關於「分配；配送」的資訊。",
    "n."
  ],
  [
    "documentation",
    "文件記錄；文件作業",
    "The report includes information about the documentation.",
    "報告包含關於「文件記錄；文件作業」的資訊。",
    "n."
  ],
  [
    "encouragement",
    "鼓勵",
    "The report includes information about the encouragement.",
    "報告包含關於「鼓勵」的資訊。",
    "n."
  ],
  [
    "engagement",
    "參與；聘用",
    "The report includes information about the engagement.",
    "報告包含關於「參與；聘用」的資訊。",
    "n."
  ],
  [
    "enrollment",
    "註冊；入學",
    "The report includes information about the enrollment.",
    "報告包含關於「註冊；入學」的資訊。",
    "n."
  ],
  [
    "evaluation",
    "評價；評估",
    "The report includes information about the evaluation.",
    "報告包含關於「評價；評估」的資訊。",
    "n."
  ],
  [
    "finance",
    "財務；金融",
    "The report includes information about the finance.",
    "報告包含關於「財務；金融」的資訊。",
    "n."
  ],
  [
    "indication",
    "指示；跡象",
    "The report includes information about the indication.",
    "報告包含關於「指示；跡象」的資訊。",
    "n."
  ],
  [
    "integration",
    "整合",
    "The report includes information about the integration.",
    "報告包含關於「整合」的資訊。",
    "n."
  ],
  [
    "intention",
    "意圖；打算",
    "The report includes information about the intention.",
    "報告包含關於「意圖；打算」的資訊。",
    "n."
  ],
  [
    "justification",
    "理由；正當性",
    "The report includes information about the justification.",
    "報告包含關於「理由；正當性」的資訊。",
    "n."
  ],
  [
    "motivation",
    "動機",
    "The report includes information about the motivation.",
    "報告包含關於「動機」的資訊。",
    "n."
  ],
  [
    "possibility",
    "可能性",
    "The report includes information about the possibility.",
    "報告包含關於「可能性」的資訊。",
    "n."
  ],
  [
    "profession",
    "職業；專業",
    "The report includes information about the profession.",
    "報告包含關於「職業；專業」的資訊。",
    "n."
  ],
  [
    "prohibition",
    "禁止",
    "The report includes information about the prohibition.",
    "報告包含關於「禁止」的資訊。",
    "n."
  ],
  [
    "quantity",
    "數量",
    "The report includes information about the quantity.",
    "報告包含關於「數量」的資訊。",
    "n."
  ],
  [
    "recommendation",
    "建議；推薦",
    "The report includes information about the recommendation.",
    "報告包含關於「建議；推薦」的資訊。",
    "n."
  ],
  [
    "reduction",
    "減少；降低",
    "The report includes information about the reduction.",
    "報告包含關於「減少；降低」的資訊。",
    "n."
  ],
  [
    "rejection",
    "拒絕；退件",
    "The report includes information about the rejection.",
    "報告包含關於「拒絕；退件」的資訊。",
    "n."
  ],
  [
    "reliability",
    "可靠性",
    "The report includes information about the reliability.",
    "報告包含關於「可靠性」的資訊。",
    "n."
  ],
  [
    "retention",
    "保留；留任",
    "The report includes information about the retention.",
    "報告包含關於「保留；留任」的資訊。",
    "n."
  ],
  [
    "revision",
    "修訂；複習",
    "The report includes information about the revision.",
    "報告包含關於「修訂；複習」的資訊。",
    "n."
  ],
  [
    "selection",
    "選擇；精選品",
    "The report includes information about the selection.",
    "報告包含關於「選擇；精選品」的資訊。",
    "n."
  ],
  [
    "signature",
    "簽名",
    "The report includes information about the signature.",
    "報告包含關於「簽名」的資訊。",
    "n."
  ],
  [
    "significance",
    "重要性；意義",
    "The report includes information about the significance.",
    "報告包含關於「重要性；意義」的資訊。",
    "n."
  ],
  [
    "supervision",
    "監督；督導",
    "The report includes information about the supervision.",
    "報告包含關於「監督；督導」的資訊。",
    "n."
  ],
  [
    "taxation",
    "課稅；稅制",
    "The report includes information about the taxation.",
    "報告包含關於「課稅；稅制」的資訊。",
    "n."
  ],
  [
    "treatment",
    "處理；治療",
    "The report includes information about the treatment.",
    "報告包含關於「處理；治療」的資訊。",
    "n."
  ],
  [
    "validity",
    "有效性",
    "The report includes information about the validity.",
    "報告包含關於「有效性」的資訊。",
    "n."
  ],
  [
    "variation",
    "變化；變異",
    "The report includes information about the variation.",
    "報告包含關於「變化；變異」的資訊。",
    "n."
  ],
  [
    "verification",
    "驗證；核實",
    "The report includes information about the verification.",
    "報告包含關於「驗證；核實」的資訊。",
    "n."
  ],
  [
    "volume",
    "數量；音量",
    "The report includes information about the volume.",
    "報告包含關於「數量；音量」的資訊。",
    "n."
  ],
  [
    "workstation",
    "工作站",
    "The report includes information about the workstation.",
    "報告包含關於「工作站」的資訊。",
    "n."
  ],
  [
    "workflow",
    "工作流程",
    "The report includes information about the workflow.",
    "報告包含關於「工作流程」的資訊。",
    "n."
  ],
  [
    "abbreviation",
    "縮寫",
    "The report includes information about the abbreviation.",
    "報告包含關於「縮寫」的資訊。",
    "n."
  ],
  [
    "abundance",
    "豐富；大量",
    "The report includes information about the abundance.",
    "報告包含關於「豐富；大量」的資訊。",
    "n."
  ],
  [
    "academy",
    "學院；研究院",
    "The report includes information about the academy.",
    "報告包含關於「學院；研究院」的資訊。",
    "n."
  ],
  [
    "acceptance",
    "接受；認可",
    "The report includes information about the acceptance.",
    "報告包含關於「接受；認可」的資訊。",
    "n."
  ],
  [
    "accessory",
    "配件；飾品",
    "The report includes information about the accessory.",
    "報告包含關於「配件；飾品」的資訊。",
    "n."
  ],
  [
    "achievement",
    "成就",
    "The report includes information about the achievement.",
    "報告包含關於「成就」的資訊。",
    "n."
  ],
  [
    "acidity",
    "酸度",
    "The report includes information about the acidity.",
    "報告包含關於「酸度」的資訊。",
    "n."
  ],
  [
    "adapter",
    "轉接器",
    "The report includes information about the adapter.",
    "報告包含關於「轉接器」的資訊。",
    "n."
  ],
  [
    "addition",
    "增加；加法",
    "The report includes information about the addition.",
    "報告包含關於「增加；加法」的資訊。",
    "n."
  ],
  [
    "adhesive",
    "黏著劑",
    "The report includes information about the adhesive.",
    "報告包含關於「黏著劑」的資訊。",
    "n."
  ],
  [
    "adulthood",
    "成年期",
    "The report includes information about the adulthood.",
    "報告包含關於「成年期」的資訊。",
    "n."
  ],
  [
    "affection",
    "喜愛；感情",
    "The report includes information about the affection.",
    "報告包含關於「喜愛；感情」的資訊。",
    "n."
  ],
  [
    "allergy",
    "過敏",
    "The report includes information about the allergy.",
    "報告包含關於「過敏」的資訊。",
    "n."
  ],
  [
    "alphabet",
    "字母表",
    "The report includes information about the alphabet.",
    "報告包含關於「字母表」的資訊。",
    "n."
  ],
  [
    "analysis",
    "分析",
    "The report includes information about the analysis.",
    "報告包含關於「分析」的資訊。",
    "n."
  ],
  [
    "anatomy",
    "解剖學；構造",
    "The report includes information about the anatomy.",
    "報告包含關於「解剖學；構造」的資訊。",
    "n."
  ],
  [
    "animation",
    "動畫",
    "The report includes information about the animation.",
    "報告包含關於「動畫」的資訊。",
    "n."
  ],
  [
    "architect",
    "建築師",
    "The report includes information about the architect.",
    "報告包含關於「建築師」的資訊。",
    "n."
  ],
  [
    "argument",
    "論點；爭論",
    "The report includes information about the argument.",
    "報告包含關於「論點；爭論」的資訊。",
    "n."
  ],
  [
    "armor",
    "盔甲；防護裝備",
    "The report includes information about the armor.",
    "報告包含關於「盔甲；防護裝備」的資訊。",
    "n."
  ],
  [
    "attachment",
    "附件；依附",
    "The report includes information about the attachment.",
    "報告包含關於「附件；依附」的資訊。",
    "n."
  ],
  [
    "attraction",
    "吸引力；景點",
    "The report includes information about the attraction.",
    "報告包含關於「吸引力；景點」的資訊。",
    "n."
  ],
  [
    "auction",
    "拍賣",
    "The report includes information about the auction.",
    "報告包含關於「拍賣」的資訊。",
    "n."
  ],
  [
    "adolescent",
    "青少年",
    "The report includes information about the adolescent.",
    "報告包含關於「青少年」的資訊。",
    "n."
  ],
  [
    "anxiety",
    "焦慮",
    "The report includes information about the anxiety.",
    "報告包含關於「焦慮」的資訊。",
    "n."
  ],
  [
    "awareness",
    "認知；意識",
    "The report includes information about the awareness.",
    "報告包含關於「認知；意識」的資訊。",
    "n."
  ],
  [
    "belief",
    "信念；相信",
    "The report includes information about the belief.",
    "報告包含關於「信念；相信」的資訊。",
    "n."
  ],
  [
    "confidence",
    "信心",
    "The report includes information about the confidence.",
    "報告包含關於「信心」的資訊。",
    "n."
  ],
  [
    "curiosity",
    "好奇心",
    "The report includes information about the curiosity.",
    "報告包含關於「好奇心」的資訊。",
    "n."
  ],
  [
    "dependence",
    "依賴",
    "The report includes information about the dependence.",
    "報告包含關於「依賴」的資訊。",
    "n."
  ],
  [
    "disadvantage",
    "缺點；不利條件",
    "The report includes information about the disadvantage.",
    "報告包含關於「缺點；不利條件」的資訊。",
    "n."
  ],
  [
    "discipline",
    "紀律；學科",
    "The report includes information about the discipline.",
    "報告包含關於「紀律；學科」的資訊。",
    "n."
  ],
  [
    "discovery",
    "發現",
    "The report includes information about the discovery.",
    "報告包含關於「發現」的資訊。",
    "n."
  ],
  [
    "diversity",
    "多樣性",
    "The report includes information about the diversity.",
    "報告包含關於「多樣性」的資訊。",
    "n."
  ],
  [
    "equality",
    "平等",
    "The report includes information about the equality.",
    "報告包含關於「平等」的資訊。",
    "n."
  ],
  [
    "failure",
    "失敗；故障",
    "The report includes information about the failure.",
    "報告包含關於「失敗；故障」的資訊。",
    "n."
  ],
  [
    "funeral",
    "葬禮",
    "The report includes information about the funeral.",
    "報告包含關於「葬禮」的資訊。",
    "n."
  ],
  [
    "generosity",
    "慷慨",
    "The report includes information about the generosity.",
    "報告包含關於「慷慨」的資訊。",
    "n."
  ],
  [
    "happiness",
    "幸福；快樂",
    "The report includes information about the happiness.",
    "報告包含關於「幸福；快樂」的資訊。",
    "n."
  ],
  [
    "heritage",
    "遺產；傳統",
    "The report includes information about the heritage.",
    "報告包含關於「遺產；傳統」的資訊。",
    "n."
  ],
  [
    "independence",
    "獨立",
    "The report includes information about the independence.",
    "報告包含關於「獨立」的資訊。",
    "n."
  ],
  [
    "insecurity",
    "不安全感；不穩定",
    "The report includes information about the insecurity.",
    "報告包含關於「不安全感；不穩定」的資訊。",
    "n."
  ],
  [
    "intelligence",
    "智力；情報",
    "The report includes information about the intelligence.",
    "報告包含關於「智力；情報」的資訊。",
    "n."
  ],
  [
    "kindness",
    "善意",
    "The report includes information about the kindness.",
    "報告包含關於「善意」的資訊。",
    "n."
  ],
  [
    "loneliness",
    "孤獨",
    "The report includes information about the loneliness.",
    "報告包含關於「孤獨」的資訊。",
    "n."
  ],
  [
    "loyalty",
    "忠誠",
    "The report includes information about the loyalty.",
    "報告包含關於「忠誠」的資訊。",
    "n."
  ],
  [
    "movement",
    "移動；運動",
    "The report includes information about the movement.",
    "報告包含關於「移動；運動」的資訊。",
    "n."
  ],
  [
    "necessity",
    "必要性；必需品",
    "The report includes information about the necessity.",
    "報告包含關於「必要性；必需品」的資訊。",
    "n."
  ],
  [
    "poverty",
    "貧窮",
    "The report includes information about the poverty.",
    "報告包含關於「貧窮」的資訊。",
    "n."
  ],
  [
    "satisfaction",
    "滿足；滿意",
    "The report includes information about the satisfaction.",
    "報告包含關於「滿足；滿意」的資訊。",
    "n."
  ],
  [
    "similarity",
    "相似性",
    "The report includes information about the similarity.",
    "報告包含關於「相似性」的資訊。",
    "n."
  ],
  [
    "society",
    "社會",
    "The report includes information about the society.",
    "報告包含關於「社會」的資訊。",
    "n."
  ],
  [
    "unity",
    "團結；一致",
    "The report includes information about the unity.",
    "報告包含關於「團結；一致」的資訊。",
    "n."
  ],
  [
    "victory",
    "勝利",
    "The report includes information about the victory.",
    "報告包含關於「勝利」的資訊。",
    "n."
  ],
  [
    "violence",
    "暴力",
    "The report includes information about the violence.",
    "報告包含關於「暴力」的資訊。",
    "n."
  ],
  [
    "wealth",
    "財富",
    "The report includes information about the wealth.",
    "報告包含關於「財富」的資訊。",
    "n."
  ],
  [
    "wisdom",
    "智慧",
    "The report includes information about the wisdom.",
    "報告包含關於「智慧」的資訊。",
    "n."
  ],
  [
    "altitude",
    "海拔；高度",
    "The report includes information about the altitude.",
    "報告包含關於「海拔；高度」的資訊。",
    "n."
  ],
  [
    "continent",
    "大陸；洲",
    "The report includes information about the continent.",
    "報告包含關於「大陸；洲」的資訊。",
    "n."
  ],
  [
    "electricity",
    "電力",
    "The report includes information about the electricity.",
    "報告包含關於「電力」的資訊。",
    "n."
  ],
  [
    "flood",
    "洪水",
    "The report includes information about the flood.",
    "報告包含關於「洪水」的資訊。",
    "n."
  ],
  [
    "geology",
    "地質學",
    "The report includes information about the geology.",
    "報告包含關於「地質學」的資訊。",
    "n."
  ],
  [
    "gravity",
    "重力；嚴重性",
    "The report includes information about the gravity.",
    "報告包含關於「重力；嚴重性」的資訊。",
    "n."
  ],
  [
    "hurricane",
    "颶風",
    "The report includes information about the hurricane.",
    "報告包含關於「颶風」的資訊。",
    "n."
  ],
  [
    "latitude",
    "緯度",
    "The report includes information about the latitude.",
    "報告包含關於「緯度」的資訊。",
    "n."
  ],
  [
    "longitude",
    "經度",
    "The report includes information about the longitude.",
    "報告包含關於「經度」的資訊。",
    "n."
  ],
  [
    "pollution",
    "污染",
    "The report includes information about the pollution.",
    "報告包含關於「污染」的資訊。",
    "n."
  ],
  [
    "rainfall",
    "降雨量",
    "The report includes information about the rainfall.",
    "報告包含關於「降雨量」的資訊。",
    "n."
  ],
  [
    "thunder",
    "雷聲",
    "The report includes information about the thunder.",
    "報告包含關於「雷聲」的資訊。",
    "n."
  ],
  [
    "wildlife",
    "野生動物",
    "The report includes information about the wildlife.",
    "報告包含關於「野生動物」的資訊。",
    "n."
  ],
  [
    "assumption",
    "假設",
    "The report includes information about the assumption.",
    "報告包含關於「假設」的資訊。",
    "n."
  ],
  [
    "citation",
    "引用；引文",
    "The report includes information about the citation.",
    "報告包含關於「引用；引文」的資訊。",
    "n."
  ],
  [
    "context",
    "背景；語境",
    "The report includes information about the context.",
    "報告包含關於「背景；語境」的資訊。",
    "n."
  ],
  [
    "contrast",
    "對比；差異",
    "The report includes information about the contrast.",
    "報告包含關於「對比；差異」的資訊。",
    "n."
  ],
  [
    "illustration",
    "插圖；說明",
    "The report includes information about the illustration.",
    "報告包含關於「插圖；說明」的資訊。",
    "n."
  ],
  [
    "interpretation",
    "解釋；口譯",
    "The report includes information about the interpretation.",
    "報告包含關於「解釋；口譯」的資訊。",
    "n."
  ],
  [
    "introduction",
    "介紹；導言",
    "The report includes information about the introduction.",
    "報告包含關於「介紹；導言」的資訊。",
    "n."
  ],
  [
    "logic",
    "邏輯",
    "The report includes information about the logic.",
    "報告包含關於「邏輯」的資訊。",
    "n."
  ],
  [
    "paragraph",
    "段落",
    "The report includes information about the paragraph.",
    "報告包含關於「段落」的資訊。",
    "n."
  ],
  [
    "principle",
    "原則",
    "The report includes information about the principle.",
    "報告包含關於「原則」的資訊。",
    "n."
  ],
  [
    "questionnaire",
    "問卷",
    "The report includes information about the questionnaire.",
    "報告包含關於「問卷」的資訊。",
    "n."
  ],
  [
    "broccoli",
    "花椰菜",
    "The report includes information about the broccoli.",
    "報告包含關於「花椰菜」的資訊。",
    "n."
  ],
  [
    "butter",
    "奶油",
    "The report includes information about the butter.",
    "報告包含關於「奶油」的資訊。",
    "n."
  ],
  [
    "lettuce",
    "萵苣；生菜",
    "The report includes information about the lettuce.",
    "報告包含關於「萵苣；生菜」的資訊。",
    "n."
  ],
  [
    "noodle",
    "麵條",
    "The report includes information about the noodle.",
    "報告包含關於「麵條」的資訊。",
    "n."
  ],
  [
    "orange",
    "柳橙；橘子",
    "The report includes information about the orange.",
    "報告包含關於「柳橙；橘子」的資訊。",
    "n."
  ],
  [
    "pastry",
    "糕點",
    "The report includes information about the pastry.",
    "報告包含關於「糕點」的資訊。",
    "n."
  ],
  [
    "potato",
    "馬鈴薯",
    "The report includes information about the potato.",
    "報告包含關於「馬鈴薯」的資訊。",
    "n."
  ],
  [
    "sauce",
    "醬汁",
    "The report includes information about the sauce.",
    "報告包含關於「醬汁」的資訊。",
    "n."
  ],
  [
    "strawberry",
    "草莓",
    "The report includes information about the strawberry.",
    "報告包含關於「草莓」的資訊。",
    "n."
  ],
  [
    "yogurt",
    "優格",
    "The report includes information about the yogurt.",
    "報告包含關於「優格」的資訊。",
    "n."
  ],
  [
    "absolute",
    "絕對的",
    "The report includes an absolute example.",
    "報告包含一個絕對的的例子。",
    "adj."
  ],
  [
    "acceptable",
    "可接受的",
    "The report includes an acceptable example.",
    "報告包含一個可接受的的例子。",
    "adj."
  ],
  [
    "advanced",
    "進階的；先進的",
    "The report includes an advanced example.",
    "報告包含一個進階的；先進的的例子。",
    "adj."
  ],
  [
    "applicable",
    "適用的",
    "The report includes an applicable example.",
    "報告包含一個適用的的例子。",
    "adj."
  ],
  [
    "common",
    "常見的；共同的",
    "The report includes a common example.",
    "報告包含一個常見的；共同的的例子。",
    "adj."
  ],
  [
    "consistent",
    "一致的；持續的",
    "The report includes a consistent example.",
    "報告包含一個一致的；持續的的例子。",
    "adj."
  ],
  [
    "constant",
    "持續的；不變的",
    "The report includes a constant example.",
    "報告包含一個持續的；不變的的例子。",
    "adj."
  ],
  [
    "current",
    "目前的；現行的",
    "The report includes a current example.",
    "報告包含一個目前的；現行的的例子。",
    "adj."
  ],
  [
    "custom",
    "客製的；習俗",
    "The report includes a custom example.",
    "報告包含一個客製的；習俗的例子。",
    "adj."
  ],
  [
    "electronic",
    "電子的",
    "The report includes an electronic example.",
    "報告包含一個電子的的例子。",
    "adj."
  ],
  [
    "estimated",
    "估計的",
    "The report includes an estimated example.",
    "報告包含一個估計的的例子。",
    "adj."
  ],
  [
    "experienced",
    "有經驗的",
    "The report includes an experienced example.",
    "報告包含一個有經驗的的例子。",
    "adj."
  ],
  [
    "frequent",
    "頻繁的",
    "The report includes a frequent example.",
    "報告包含一個頻繁的的例子。",
    "adj."
  ],
  [
    "functional",
    "可運作的；功能性的",
    "The report includes a functional example.",
    "報告包含一個可運作的；功能性的的例子。",
    "adj."
  ],
  [
    "governmental",
    "政府的",
    "The report includes a governmental example.",
    "報告包含一個政府的的例子。",
    "adj."
  ],
  [
    "immediate",
    "立即的",
    "The report includes an immediate example.",
    "報告包含一個立即的的例子。",
    "adj."
  ],
  [
    "individual",
    "個人的；個體",
    "The report includes an individual example.",
    "報告包含一個個人的；個體的例子。",
    "adj."
  ],
  [
    "manual",
    "手動的；手冊",
    "The report includes a manual example.",
    "報告包含一個手動的；手冊的例子。",
    "adj."
  ],
  [
    "national",
    "國家的；全國的",
    "The report includes a national example.",
    "報告包含一個國家的；全國的的例子。",
    "adj."
  ],
  [
    "negative",
    "負面的；否定的",
    "The report includes a negative example.",
    "報告包含一個負面的；否定的的例子。",
    "adj."
  ],
  [
    "official",
    "官方的；正式的",
    "The report includes an official example.",
    "報告包含一個官方的；正式的的例子。",
    "adj."
  ],
  [
    "optional",
    "可選的",
    "The report includes an optional example.",
    "報告包含一個可選的的例子。",
    "adj."
  ],
  [
    "rapid",
    "快速的",
    "The report includes a rapid example.",
    "報告包含一個快速的的例子。",
    "adj."
  ],
  [
    "regional",
    "區域的",
    "The report includes a regional example.",
    "報告包含一個區域的的例子。",
    "adj."
  ],
  [
    "relevant",
    "相關的",
    "The report includes a relevant example.",
    "報告包含一個相關的的例子。",
    "adj."
  ],
  [
    "required",
    "必要的；被要求的",
    "The report includes a required example.",
    "報告包含一個必要的；被要求的的例子。",
    "adj."
  ],
  [
    "residential",
    "住宅的",
    "The report includes a residential example.",
    "報告包含一個住宅的的例子。",
    "adj."
  ],
  [
    "secure",
    "安全的；穩固的",
    "The report includes a secure example.",
    "報告包含一個安全的；穩固的的例子。",
    "adj."
  ],
  [
    "stable",
    "穩定的",
    "The report includes a stable example.",
    "報告包含一個穩定的的例子。",
    "adj."
  ],
  [
    "successful",
    "成功的",
    "The report includes a successful example.",
    "報告包含一個成功的的例子。",
    "adj."
  ],
  [
    "sufficient",
    "足夠的",
    "The report includes a sufficient example.",
    "報告包含一個足夠的的例子。",
    "adj."
  ],
  [
    "willing",
    "願意的",
    "The staff are willing to help.",
    "員工願意提供協助。",
    "adj."
  ],
  [
    "actively",
    "積極地",
    "The report was actively reviewed.",
    "這份報告被積極地檢閱。",
    "adv."
  ],
  [
    "actually",
    "實際上",
    "The report was actually reviewed.",
    "這份報告被實際上檢閱。",
    "adv."
  ],
  [
    "additionally",
    "此外；額外地",
    "The report was additionally reviewed.",
    "這份報告被此外；額外地檢閱。",
    "adv."
  ],
  [
    "appropriately",
    "適當地",
    "The report was appropriately reviewed.",
    "這份報告被適當地檢閱。",
    "adv."
  ],
  [
    "automatically",
    "自動地",
    "The system automatically handled the update.",
    "系統自動處理了更新。",
    "adv."
  ],
  [
    "certainly",
    "當然；確實",
    "The report was certainly reviewed.",
    "這份報告被當然；確實檢閱。",
    "adv."
  ],
  [
    "clearly",
    "清楚地",
    "The report was clearly reviewed.",
    "這份報告被清楚地檢閱。",
    "adv."
  ],
  [
    "commonly",
    "通常地；普遍地",
    "The report was commonly reviewed.",
    "這份報告被通常地；普遍地檢閱。",
    "adv."
  ],
  [
    "constantly",
    "持續地",
    "The report was constantly reviewed.",
    "這份報告被持續地檢閱。",
    "adv."
  ],
  [
    "currently",
    "目前地",
    "The report was currently reviewed.",
    "這份報告被目前地檢閱。",
    "adv."
  ],
  [
    "directly",
    "直接地",
    "The report was directly reviewed.",
    "這份報告被直接地檢閱。",
    "adv."
  ],
  [
    "finally",
    "最後；終於",
    "The report was finally reviewed.",
    "這份報告被最後；終於檢閱。",
    "adv."
  ],
  [
    "globally",
    "全球地",
    "The report was globally reviewed.",
    "這份報告被全球地檢閱。",
    "adv."
  ],
  [
    "independently",
    "獨立地",
    "The report was independently reviewed.",
    "這份報告被獨立地檢閱。",
    "adv."
  ],
  [
    "initially",
    "起初地",
    "The report was initially reviewed.",
    "這份報告被起初地檢閱。",
    "adv."
  ],
  [
    "internationally",
    "國際性地",
    "The report was internationally reviewed.",
    "這份報告被國際性地檢閱。",
    "adv."
  ],
  [
    "locally",
    "在當地",
    "The report was locally reviewed.",
    "這份報告被在當地檢閱。",
    "adv."
  ],
  [
    "mainly",
    "主要地",
    "The report was mainly reviewed.",
    "這份報告被主要地檢閱。",
    "adv."
  ],
  [
    "normally",
    "通常地",
    "The report was normally reviewed.",
    "這份報告被通常地檢閱。",
    "adv."
  ],
  [
    "originally",
    "原本地",
    "The report was originally reviewed.",
    "這份報告被原本地檢閱。",
    "adv."
  ],
  [
    "particularly",
    "特別地",
    "The report was particularly reviewed.",
    "這份報告被特別地檢閱。",
    "adv."
  ],
  [
    "personally",
    "親自地",
    "The report was personally reviewed.",
    "這份報告被親自地檢閱。",
    "adv."
  ],
  [
    "previously",
    "先前地",
    "The report was previously reviewed.",
    "這份報告被先前地檢閱。",
    "adv."
  ],
  [
    "primarily",
    "主要地",
    "The report was primarily reviewed.",
    "這份報告被主要地檢閱。",
    "adv."
  ],
  [
    "professionally",
    "專業地",
    "The report was professionally reviewed.",
    "這份報告被專業地檢閱。",
    "adv."
  ],
  [
    "promptly",
    "迅速地",
    "The report was promptly reviewed.",
    "這份報告被迅速地檢閱。",
    "adv."
  ],
  [
    "quickly",
    "快速地",
    "The report was quickly reviewed.",
    "這份報告被快速地檢閱。",
    "adv."
  ],
  [
    "recently",
    "最近地",
    "The report was recently reviewed.",
    "這份報告被最近地檢閱。",
    "adv."
  ],
  [
    "regularly",
    "定期地",
    "The report was regularly reviewed.",
    "這份報告被定期地檢閱。",
    "adv."
  ],
  [
    "remotely",
    "遠端地",
    "The report was remotely reviewed.",
    "這份報告被遠端地檢閱。",
    "adv."
  ],
  [
    "separately",
    "分別地",
    "The report was separately reviewed.",
    "這份報告被分別地檢閱。",
    "adv."
  ],
  [
    "seriously",
    "嚴肅地；認真地",
    "The report was seriously reviewed.",
    "這份報告被嚴肅地；認真地檢閱。",
    "adv."
  ],
  [
    "significantly",
    "顯著地",
    "The report was significantly reviewed.",
    "這份報告被顯著地檢閱。",
    "adv."
  ],
  [
    "similarly",
    "相似地",
    "The report was similarly reviewed.",
    "這份報告被相似地檢閱。",
    "adv."
  ],
  [
    "specifically",
    "明確地；特別地",
    "The report was specifically reviewed.",
    "這份報告被明確地；特別地檢閱。",
    "adv."
  ],
  [
    "successfully",
    "成功地",
    "The report was successfully reviewed.",
    "這份報告被成功地檢閱。",
    "adv."
  ],
  [
    "traditionally",
    "傳統地",
    "The report was traditionally reviewed.",
    "這份報告被傳統地檢閱。",
    "adv."
  ],
  [
    "typically",
    "通常地；典型地",
    "The report was typically reviewed.",
    "這份報告被通常地；典型地檢閱。",
    "adv."
  ],
  [
    "urgently",
    "緊急地",
    "The report was urgently reviewed.",
    "這份報告被緊急地檢閱。",
    "adv."
  ],
  [
    "virtually",
    "幾乎；實際上",
    "The report was virtually reviewed.",
    "這份報告被幾乎；實際上檢閱。",
    "adv."
  ],
  [
    "widely",
    "廣泛地",
    "The report was widely reviewed.",
    "這份報告被廣泛地檢閱。",
    "adv."
  ],
  [
    "job opening",
    "職缺",
    "The report includes information about the job opening.",
    "報告包含關於「職缺」的資訊。",
    "n."
  ],
  [
    "key card",
    "感應卡；房卡",
    "The report includes information about the key card.",
    "報告包含關於「感應卡；房卡」的資訊。",
    "n."
  ],
  [
    "luggage allowance",
    "行李額度",
    "The report includes information about the luggage allowance.",
    "報告包含關於「行李額度」的資訊。",
    "n."
  ],
  [
    "membership card",
    "會員卡",
    "The report includes information about the membership card.",
    "報告包含關於「會員卡」的資訊。",
    "n."
  ],
  [
    "mobile payment",
    "行動支付",
    "The report includes information about the mobile payment.",
    "報告包含關於「行動支付」的資訊。",
    "n."
  ],
  [
    "network connection",
    "網路連線",
    "The report includes information about the network connection.",
    "報告包含關於「網路連線」的資訊。",
    "n."
  ],
  [
    "online booking",
    "線上訂位；預訂",
    "The report includes information about the online booking.",
    "報告包含關於「線上訂位；預訂」的資訊。",
    "n."
  ],
  [
    "online course",
    "線上課程",
    "The report includes information about the online course.",
    "報告包含關於「線上課程」的資訊。",
    "n."
  ],
  [
    "passenger seat",
    "乘客座位",
    "The report includes information about the passenger seat.",
    "報告包含關於「乘客座位」的資訊。",
    "n."
  ],
  [
    "payment method",
    "付款方式",
    "The report includes information about the payment method.",
    "報告包含關於「付款方式」的資訊。",
    "n."
  ],
  [
    "phone number",
    "電話號碼",
    "The report includes information about the phone number.",
    "報告包含關於「電話號碼」的資訊。",
    "n."
  ],
  [
    "price tag",
    "價格標籤",
    "The report includes information about the price tag.",
    "報告包含關於「價格標籤」的資訊。",
    "n."
  ],
  [
    "product review",
    "產品評論",
    "The report includes information about the product review.",
    "報告包含關於「產品評論」的資訊。",
    "n."
  ],
  [
    "public transport",
    "大眾運輸",
    "The report includes information about the public transport.",
    "報告包含關於「大眾運輸」的資訊。",
    "n."
  ],
  [
    "receipt number",
    "收據號碼",
    "The report includes information about the receipt number.",
    "報告包含關於「收據號碼」的資訊。",
    "n."
  ],
  [
    "reference number",
    "參考編號",
    "The report includes information about the reference number.",
    "報告包含關於「參考編號」的資訊。",
    "n."
  ],
  [
    "rental car",
    "租賃車",
    "The report includes information about the rental car.",
    "報告包含關於「租賃車」的資訊。",
    "n."
  ],
  [
    "reservation number",
    "訂位編號",
    "The report includes information about the reservation number.",
    "報告包含關於「訂位編號」的資訊。",
    "n."
  ],
  [
    "return flight",
    "回程班機",
    "The report includes information about the return flight.",
    "報告包含關於「回程班機」的資訊。",
    "n."
  ],
  [
    "room service",
    "客房服務",
    "The report includes information about the room service.",
    "報告包含關於「客房服務」的資訊。",
    "n."
  ],
  [
    "safety check",
    "安全檢查",
    "The report includes information about the safety check.",
    "報告包含關於「安全檢查」的資訊。",
    "n."
  ],
  [
    "sales receipt",
    "銷售收據",
    "The report includes information about the sales receipt.",
    "報告包含關於「銷售收據」的資訊。",
    "n."
  ],
  [
    "security check",
    "安檢",
    "The report includes information about the security check.",
    "報告包含關於「安檢」的資訊。",
    "n."
  ],
  [
    "service desk",
    "服務櫃檯",
    "The report includes information about the service desk.",
    "報告包含關於「服務櫃檯」的資訊。",
    "n."
  ],
  [
    "shopping cart",
    "購物車",
    "The report includes information about the shopping cart.",
    "報告包含關於「購物車」的資訊。",
    "n."
  ],
  [
    "shopping mall",
    "購物中心",
    "The report includes information about the shopping mall.",
    "報告包含關於「購物中心」的資訊。",
    "n."
  ],
  [
    "social media",
    "社群媒體",
    "The report includes information about the social media.",
    "報告包含關於「社群媒體」的資訊。",
    "n."
  ],
  [
    "software license",
    "軟體授權",
    "The report includes information about the software license.",
    "報告包含關於「軟體授權」的資訊。",
    "n."
  ],
  [
    "staff member",
    "員工",
    "The report includes information about the staff member.",
    "報告包含關於「員工」的資訊。",
    "n."
  ],
  [
    "store manager",
    "店長",
    "The report includes information about the store manager.",
    "報告包含關於「店長」的資訊。",
    "n."
  ],
  [
    "student ID",
    "學生證",
    "The report includes information about the student ID.",
    "報告包含關於「學生證」的資訊。",
    "n."
  ],
  [
    "survey form",
    "問卷表",
    "The report includes information about the survey form.",
    "報告包含關於「問卷表」的資訊。",
    "n."
  ],
  [
    "travel insurance",
    "旅遊保險",
    "The report includes information about the travel insurance.",
    "報告包含關於「旅遊保險」的資訊。",
    "n."
  ],
  [
    "travel itinerary",
    "旅行行程表",
    "The report includes information about the travel itinerary.",
    "報告包含關於「旅行行程表」的資訊。",
    "n."
  ],
  [
    "user manual",
    "使用手冊",
    "The report includes information about the user manual.",
    "報告包含關於「使用手冊」的資訊。",
    "n."
  ],
  [
    "waiting area",
    "等候區",
    "The report includes information about the waiting area.",
    "報告包含關於「等候區」的資訊。",
    "n."
  ],
  [
    "work permit",
    "工作許可證",
    "The report includes information about the work permit.",
    "報告包含關於「工作許可證」的資訊。",
    "n."
  ],
  [
    "academic",
    "學術的",
    "The lesson included an academic example.",
    "課程包含一個學術的的例子。",
    "adj."
  ],
  [
    "appreciative",
    "感激的；欣賞的",
    "The lesson included an appreciative example.",
    "課程包含一個感激的；欣賞的的例子。",
    "adj."
  ],
  [
    "civil",
    "公民的；有禮的",
    "The lesson included a civil example.",
    "課程包含一個公民的；有禮的的例子。",
    "adj."
  ],
  [
    "clinical",
    "臨床的",
    "The lesson included a clinical example.",
    "課程包含一個臨床的的例子。",
    "adj."
  ],
  [
    "decent",
    "合宜的；不錯的",
    "The lesson included a decent example.",
    "課程包含一個合宜的；不錯的的例子。",
    "adj."
  ],
  [
    "defensive",
    "防禦的；防衛的",
    "The lesson included a defensive example.",
    "課程包含一個防禦的；防衛的的例子。",
    "adj."
  ],
  [
    "dramatic",
    "顯著的；戲劇性的",
    "The lesson included a dramatic example.",
    "課程包含一個顯著的；戲劇性的的例子。",
    "adj."
  ],
  [
    "ethical",
    "合乎倫理的",
    "The lesson included an ethical example.",
    "課程包含一個合乎倫理的的例子。",
    "adj."
  ],
  [
    "experimental",
    "實驗性的",
    "The lesson included an experimental example.",
    "課程包含一個實驗性的的例子。",
    "adj."
  ],
  [
    "virtual",
    "虛擬的；線上的",
    "The lesson included a virtual example.",
    "課程包含一個虛擬的；線上的的例子。",
    "adj."
  ],
  [
    "abandon",
    "放棄；遺棄",
    "We learned how to abandon during today's lesson.",
    "我們在今天的課程中學習如何「放棄；遺棄」。",
    "v."
  ],
  [
    "activate",
    "啟用；啟動",
    "We learned how to activate during today's lesson.",
    "我們在今天的課程中學習如何「啟用；啟動」。",
    "v."
  ],
  [
    "approve",
    "核准；同意",
    "We learned how to approve during today's lesson.",
    "我們在今天的課程中學習如何「核准；同意」。",
    "v."
  ],
  [
    "classify",
    "分類",
    "We learned how to classify during today's lesson.",
    "我們在今天的課程中學習如何「分類」。",
    "v."
  ],
  [
    "disagree",
    "不同意；有歧見",
    "We learned how to disagree during today's lesson.",
    "我們在今天的課程中學習如何「不同意；有歧見」。",
    "v."
  ],
  [
    "execute",
    "執行",
    "We learned how to execute during today's lesson.",
    "我們在今天的課程中學習如何「執行」。",
    "v."
  ],
  [
    "maximize",
    "使最大化",
    "We learned how to maximize during today's lesson.",
    "我們在今天的課程中學習如何「使最大化」。",
    "v."
  ],
  [
    "occupy",
    "占用；居住",
    "We learned how to occupy during today's lesson.",
    "我們在今天的課程中學習如何「占用；居住」。",
    "v."
  ],
  [
    "persuade",
    "說服",
    "We learned how to persuade during today's lesson.",
    "我們在今天的課程中學習如何「說服」。",
    "v."
  ],
  [
    "prioritize",
    "排定優先順序",
    "We learned how to prioritize during today's lesson.",
    "我們在今天的課程中學習如何「排定優先順序」。",
    "v."
  ],
  [
    "propose",
    "提議；提出",
    "We learned how to propose during today's lesson.",
    "我們在今天的課程中學習如何「提議；提出」。",
    "v."
  ],
  [
    "reflect",
    "反映；仔細思考",
    "We learned how to reflect during today's lesson.",
    "我們在今天的課程中學習如何「反映；仔細思考」。",
    "v."
  ],
  [
    "regulate",
    "管理；規範",
    "We learned how to regulate during today's lesson.",
    "我們在今天的課程中學習如何「管理；規範」。",
    "v."
  ],
  [
    "reject",
    "拒絕；退回",
    "We learned how to reject during today's lesson.",
    "我們在今天的課程中學習如何「拒絕；退回」。",
    "v."
  ],
  [
    "relate",
    "有關；建立關係",
    "We learned how to relate during today's lesson.",
    "我們在今天的課程中學習如何「有關；建立關係」。",
    "v."
  ],
  [
    "simplify",
    "簡化",
    "We learned how to simplify during today's lesson.",
    "我們在今天的課程中學習如何「簡化」。",
    "v."
  ],
  [
    "specify",
    "明確說明",
    "We learned how to specify during today's lesson.",
    "我們在今天的課程中學習如何「明確說明」。",
    "v."
  ],
  [
    "supervise",
    "監督；管理",
    "We learned how to supervise during today's lesson.",
    "我們在今天的課程中學習如何「監督；管理」。",
    "v."
  ],
  [
    "vary",
    "不同；變化",
    "We learned how to vary during today's lesson.",
    "我們在今天的課程中學習如何「不同；變化」。",
    "v."
  ],
  [
    "accountability",
    "責任歸屬",
    "We discussed the accountability during today's lesson.",
    "我們在今天的課程中討論了「責任歸屬」。",
    "n."
  ],
  [
    "accreditation",
    "認證；認可",
    "We discussed the accreditation during today's lesson.",
    "我們在今天的課程中討論了「認證；認可」。",
    "n."
  ],
  [
    "adequacy",
    "充足性；適足性",
    "We discussed the adequacy during today's lesson.",
    "我們在今天的課程中討論了「充足性；適足性」。",
    "n."
  ],
  [
    "assurance",
    "保證；確信",
    "We discussed the assurance during today's lesson.",
    "我們在今天的課程中討論了「保證；確信」。",
    "n."
  ],
  [
    "chief financial officer",
    "財務長",
    "We discussed the chief financial officer during today's lesson.",
    "我們在今天的課程中討論了「財務長」。",
    "n."
  ],
  [
    "client service",
    "客戶服務",
    "We discussed the client service during today's lesson.",
    "我們在今天的課程中討論了「客戶服務」。",
    "n."
  ],
  [
    "commitment",
    "承諾；投入",
    "We discussed the commitment during today's lesson.",
    "我們在今天的課程中討論了「承諾；投入」。",
    "n."
  ],
  [
    "conversion",
    "轉換；轉化",
    "We discussed the conversion during today's lesson.",
    "我們在今天的課程中討論了「轉換；轉化」。",
    "n."
  ],
  [
    "corporate culture",
    "企業文化",
    "We discussed the corporate culture during today's lesson.",
    "我們在今天的課程中討論了「企業文化」。",
    "n."
  ],
  [
    "customer care",
    "顧客服務",
    "We discussed the customer care during today's lesson.",
    "我們在今天的課程中討論了「顧客服務」。",
    "n."
  ],
  [
    "customer satisfaction",
    "顧客滿意度",
    "We discussed the customer satisfaction during today's lesson.",
    "我們在今天的課程中討論了「顧客滿意度」。",
    "n."
  ],
  [
    "customization",
    "客製化",
    "We discussed the customization during today's lesson.",
    "我們在今天的課程中討論了「客製化」。",
    "n."
  ],
  [
    "data analysis",
    "資料分析",
    "We discussed the data analysis during today's lesson.",
    "我們在今天的課程中討論了「資料分析」。",
    "n."
  ],
  [
    "data security",
    "資料安全",
    "We discussed the data security during today's lesson.",
    "我們在今天的課程中討論了「資料安全」。",
    "n."
  ],
  [
    "digital signature",
    "數位簽章",
    "We discussed the digital signature during today's lesson.",
    "我們在今天的課程中討論了「數位簽章」。",
    "n."
  ],
  [
    "digital transformation",
    "數位轉型",
    "We discussed the digital transformation during today's lesson.",
    "我們在今天的課程中討論了「數位轉型」。",
    "n."
  ],
  [
    "disclosure",
    "揭露；公開",
    "We discussed the disclosure during today's lesson.",
    "我們在今天的課程中討論了「揭露；公開」。",
    "n."
  ],
  [
    "domestic market",
    "國內市場",
    "We discussed the domestic market during today's lesson.",
    "我們在今天的課程中討論了「國內市場」。",
    "n."
  ],
  [
    "electronic payment",
    "電子支付",
    "We discussed the electronic payment during today's lesson.",
    "我們在今天的課程中討論了「電子支付」。",
    "n."
  ],
  [
    "emergency contact",
    "緊急聯絡人",
    "We discussed the emergency contact during today's lesson.",
    "我們在今天的課程中討論了「緊急聯絡人」。",
    "n."
  ],
  [
    "equity",
    "權益；公平",
    "We discussed the equity during today's lesson.",
    "我們在今天的課程中討論了「權益；公平」。",
    "n."
  ],
  [
    "filing",
    "歸檔；申報",
    "We discussed the filing during today's lesson.",
    "我們在今天的課程中討論了「歸檔；申報」。",
    "n."
  ],
  [
    "finance department",
    "財務部門",
    "We discussed the finance department during today's lesson.",
    "我們在今天的課程中討論了「財務部門」。",
    "n."
  ],
  [
    "human resource department",
    "人力資源部門",
    "We discussed the human resource department during today's lesson.",
    "我們在今天的課程中討論了「人力資源部門」。",
    "n."
  ],
  [
    "identification number",
    "身分識別號碼",
    "We discussed the identification number during today's lesson.",
    "我們在今天的課程中討論了「身分識別號碼」。",
    "n."
  ],
  [
    "implementation",
    "執行；實施",
    "We discussed the implementation during today's lesson.",
    "我們在今天的課程中討論了「執行；實施」。",
    "n."
  ],
  [
    "innovation",
    "創新",
    "We discussed the innovation during today's lesson.",
    "我們在今天的課程中討論了「創新」。",
    "n."
  ],
  [
    "insurance coverage",
    "保險保障範圍",
    "We discussed the insurance coverage during today's lesson.",
    "我們在今天的課程中討論了「保險保障範圍」。",
    "n."
  ],
  [
    "inventory control",
    "庫存管理",
    "We discussed the inventory control during today's lesson.",
    "我們在今天的課程中討論了「庫存管理」。",
    "n."
  ],
  [
    "investment plan",
    "投資計畫",
    "We discussed the investment plan during today's lesson.",
    "我們在今天的課程中討論了「投資計畫」。",
    "n."
  ],
  [
    "issue date",
    "發行日期",
    "We discussed the issue date during today's lesson.",
    "我們在今天的課程中討論了「發行日期」。",
    "n."
  ],
  [
    "job applicant",
    "求職者",
    "We discussed the job applicant during today's lesson.",
    "我們在今天的課程中討論了「求職者」。",
    "n."
  ],
  [
    "job description",
    "職務說明",
    "We discussed the job description during today's lesson.",
    "我們在今天的課程中討論了「職務說明」。",
    "n."
  ],
  [
    "job offer",
    "工作邀約",
    "We discussed the job offer during today's lesson.",
    "我們在今天的課程中討論了「工作邀約」。",
    "n."
  ],
  [
    "job requirement",
    "職務條件",
    "We discussed the job requirement during today's lesson.",
    "我們在今天的課程中討論了「職務條件」。",
    "n."
  ],
  [
    "launch date",
    "推出日期",
    "We discussed the launch date during today's lesson.",
    "我們在今天的課程中討論了「推出日期」。",
    "n."
  ],
  [
    "legal advice",
    "法律建議",
    "We discussed the legal advice during today's lesson.",
    "我們在今天的課程中討論了「法律建議」。",
    "n."
  ],
  [
    "legal document",
    "法律文件",
    "We discussed the legal document during today's lesson.",
    "我們在今天的課程中討論了「法律文件」。",
    "n."
  ],
  [
    "license agreement",
    "授權協議",
    "We discussed the license agreement during today's lesson.",
    "我們在今天的課程中討論了「授權協議」。",
    "n."
  ],
  [
    "maintenance fee",
    "維護費",
    "We discussed the maintenance fee during today's lesson.",
    "我們在今天的課程中討論了「維護費」。",
    "n."
  ],
  [
    "management team",
    "管理團隊",
    "We discussed the management team during today's lesson.",
    "我們在今天的課程中討論了「管理團隊」。",
    "n."
  ],
  [
    "manufacturing cost",
    "製造成本",
    "We discussed the manufacturing cost during today's lesson.",
    "我們在今天的課程中討論了「製造成本」。",
    "n."
  ],
  [
    "marketing campaign",
    "行銷活動",
    "We discussed the marketing campaign during today's lesson.",
    "我們在今天的課程中討論了「行銷活動」。",
    "n."
  ],
  [
    "network security",
    "網路安全",
    "We discussed the network security during today's lesson.",
    "我們在今天的課程中討論了「網路安全」。",
    "n."
  ],
  [
    "occupancy rate",
    "入住率；使用率",
    "We discussed the occupancy rate during today's lesson.",
    "我們在今天的課程中討論了「入住率；使用率」。",
    "n."
  ],
  [
    "office equipment",
    "辦公設備",
    "We discussed the office equipment during today's lesson.",
    "我們在今天的課程中討論了「辦公設備」。",
    "n."
  ],
  [
    "office manager",
    "辦公室經理",
    "We discussed the office manager during today's lesson.",
    "我們在今天的課程中討論了「辦公室經理」。",
    "n."
  ],
  [
    "online application",
    "線上申請",
    "We discussed the online application during today's lesson.",
    "我們在今天的課程中討論了「線上申請」。",
    "n."
  ],
  [
    "operation manual",
    "操作手冊",
    "We discussed the operation manual during today's lesson.",
    "我們在今天的課程中討論了「操作手冊」。",
    "n."
  ],
  [
    "outsourcing",
    "外包",
    "We discussed the outsourcing during today's lesson.",
    "我們在今天的課程中討論了「外包」。",
    "n."
  ],
  [
    "payment deadline",
    "付款截止日",
    "We discussed the payment deadline during today's lesson.",
    "我們在今天的課程中討論了「付款截止日」。",
    "n."
  ],
  [
    "payroll tax",
    "薪資稅",
    "We discussed the payroll tax during today's lesson.",
    "我們在今天的課程中討論了「薪資稅」。",
    "n."
  ],
  [
    "personnel department",
    "人事部門",
    "We discussed the personnel department during today's lesson.",
    "我們在今天的課程中討論了「人事部門」。",
    "n."
  ],
  [
    "policy change",
    "政策變更",
    "We discussed the policy change during today's lesson.",
    "我們在今天的課程中討論了「政策變更」。",
    "n."
  ],
  [
    "portfolio management",
    "投資組合管理",
    "We discussed the portfolio management during today's lesson.",
    "我們在今天的課程中討論了「投資組合管理」。",
    "n."
  ],
  [
    "position description",
    "職位說明",
    "We discussed the position description during today's lesson.",
    "我們在今天的課程中討論了「職位說明」。",
    "n."
  ],
  [
    "potential customer",
    "潛在顧客",
    "We discussed the potential customer during today's lesson.",
    "我們在今天的課程中討論了「潛在顧客」。",
    "n."
  ],
  [
    "presentation skills",
    "簡報技巧",
    "We discussed the presentation skills during today's lesson.",
    "我們在今天的課程中討論了「簡報技巧」。",
    "n."
  ],
  [
    "process improvement",
    "流程改善",
    "We discussed the process improvement during today's lesson.",
    "我們在今天的課程中討論了「流程改善」。",
    "n."
  ],
  [
    "product line",
    "產品線",
    "We discussed the product line during today's lesson.",
    "我們在今天的課程中討論了「產品線」。",
    "n."
  ],
  [
    "product launch",
    "產品上市",
    "We discussed the product launch during today's lesson.",
    "我們在今天的課程中討論了「產品上市」。",
    "n."
  ],
  [
    "production cost",
    "生產成本",
    "We discussed the production cost during today's lesson.",
    "我們在今天的課程中討論了「生產成本」。",
    "n."
  ],
  [
    "professional development",
    "專業發展",
    "We discussed the professional development during today's lesson.",
    "我們在今天的課程中討論了「專業發展」。",
    "n."
  ],
  [
    "project management",
    "專案管理",
    "We discussed the project management during today's lesson.",
    "我們在今天的課程中討論了「專案管理」。",
    "n."
  ],
  [
    "project proposal",
    "專案提案",
    "We discussed the project proposal during today's lesson.",
    "我們在今天的課程中討論了「專案提案」。",
    "n."
  ],
  [
    "promotion campaign",
    "促銷活動",
    "We discussed the promotion campaign during today's lesson.",
    "我們在今天的課程中討論了「促銷活動」。",
    "n."
  ],
  [
    "property insurance",
    "財產保險",
    "We discussed the property insurance during today's lesson.",
    "我們在今天的課程中討論了「財產保險」。",
    "n."
  ],
  [
    "proposal deadline",
    "提案截止日",
    "We discussed the proposal deadline during today's lesson.",
    "我們在今天的課程中討論了「提案截止日」。",
    "n."
  ],
  [
    "quality standard",
    "品質標準",
    "We discussed the quality standard during today's lesson.",
    "我們在今天的課程中討論了「品質標準」。",
    "n."
  ],
  [
    "quarterly report",
    "季報",
    "We discussed the quarterly report during today's lesson.",
    "我們在今天的課程中討論了「季報」。",
    "n."
  ],
  [
    "recruitment process",
    "招募流程",
    "We discussed the recruitment process during today's lesson.",
    "我們在今天的課程中討論了「招募流程」。",
    "n."
  ],
  [
    "reference check",
    "推薦人查核",
    "We discussed the reference check during today's lesson.",
    "我們在今天的課程中討論了「推薦人查核」。",
    "n."
  ],
  [
    "regional office",
    "區域辦公室",
    "We discussed the regional office during today's lesson.",
    "我們在今天的課程中討論了「區域辦公室」。",
    "n."
  ],
  [
    "registration fee",
    "報名費；註冊費",
    "We discussed the registration fee during today's lesson.",
    "我們在今天的課程中討論了「報名費；註冊費」。",
    "n."
  ],
  [
    "rejection letter",
    "拒絕信",
    "We discussed the rejection letter during today's lesson.",
    "我們在今天的課程中討論了「拒絕信」。",
    "n."
  ],
  [
    "reliability test",
    "可靠度測試",
    "We discussed the reliability test during today's lesson.",
    "我們在今天的課程中討論了「可靠度測試」。",
    "n."
  ],
  [
    "renewal notice",
    "續約通知",
    "We discussed the renewal notice during today's lesson.",
    "我們在今天的課程中討論了「續約通知」。",
    "n."
  ],
  [
    "research project",
    "研究計畫",
    "We discussed the research project during today's lesson.",
    "我們在今天的課程中討論了「研究計畫」。",
    "n."
  ],
  [
    "resource allocation",
    "資源分配",
    "We discussed the resource allocation during today's lesson.",
    "我們在今天的課程中討論了「資源分配」。",
    "n."
  ],
  [
    "response time",
    "回應時間",
    "We discussed the response time during today's lesson.",
    "我們在今天的課程中討論了「回應時間」。",
    "n."
  ],
  [
    "retention rate",
    "留任率；保留率",
    "We discussed the retention rate during today's lesson.",
    "我們在今天的課程中討論了「留任率；保留率」。",
    "n."
  ],
  [
    "revenue growth",
    "營收成長",
    "We discussed the revenue growth during today's lesson.",
    "我們在今天的課程中討論了「營收成長」。",
    "n."
  ],
  [
    "risk management",
    "風險管理",
    "We discussed the risk management during today's lesson.",
    "我們在今天的課程中討論了「風險管理」。",
    "n."
  ],
  [
    "role description",
    "角色說明",
    "We discussed the role description during today's lesson.",
    "我們在今天的課程中討論了「角色說明」。",
    "n."
  ],
  [
    "safety regulation",
    "安全規範",
    "We discussed the safety regulation during today's lesson.",
    "我們在今天的課程中討論了「安全規範」。",
    "n."
  ],
  [
    "sales commission",
    "銷售佣金",
    "We discussed the sales commission during today's lesson.",
    "我們在今天的課程中討論了「銷售佣金」。",
    "n."
  ],
  [
    "sales report",
    "銷售報告",
    "We discussed the sales report during today's lesson.",
    "我們在今天的課程中討論了「銷售報告」。",
    "n."
  ],
  [
    "sales strategy",
    "銷售策略",
    "We discussed the sales strategy during today's lesson.",
    "我們在今天的課程中討論了「銷售策略」。",
    "n."
  ],
  [
    "schedule conflict",
    "時程衝突",
    "We discussed the schedule conflict during today's lesson.",
    "我們在今天的課程中討論了「時程衝突」。",
    "n."
  ],
  [
    "selection process",
    "遴選流程",
    "We discussed the selection process during today's lesson.",
    "我們在今天的課程中討論了「遴選流程」。",
    "n."
  ],
  [
    "service provider",
    "服務供應商",
    "We discussed the service provider during today's lesson.",
    "我們在今天的課程中討論了「服務供應商」。",
    "n."
  ],
  [
    "shipping cost",
    "運費",
    "We discussed the shipping cost during today's lesson.",
    "我們在今天的課程中討論了「運費」。",
    "n."
  ],
  [
    "short-term goal",
    "短期目標",
    "We discussed the short-term goal during today's lesson.",
    "我們在今天的課程中討論了「短期目標」。",
    "n."
  ],
  [
    "signature line",
    "簽名欄",
    "We discussed the signature line during today's lesson.",
    "我們在今天的課程中討論了「簽名欄」。",
    "n."
  ],
  [
    "software development",
    "軟體開發",
    "We discussed the software development during today's lesson.",
    "我們在今天的課程中討論了「軟體開發」。",
    "n."
  ],
  [
    "staff training",
    "員工訓練",
    "We discussed the staff training during today's lesson.",
    "我們在今天的課程中討論了「員工訓練」。",
    "n."
  ],
  [
    "stock market",
    "股票市場",
    "We discussed the stock market during today's lesson.",
    "我們在今天的課程中討論了「股票市場」。",
    "n."
  ],
  [
    "storage space",
    "儲存空間",
    "We discussed the storage space during today's lesson.",
    "我們在今天的課程中討論了「儲存空間」。",
    "n."
  ],
  [
    "strategic plan",
    "策略計畫",
    "We discussed the strategic plan during today's lesson.",
    "我們在今天的課程中討論了「策略計畫」。",
    "n."
  ],
  [
    "submission deadline",
    "提交截止日",
    "We discussed the submission deadline during today's lesson.",
    "我們在今天的課程中討論了「提交截止日」。",
    "n."
  ],
  [
    "supplier contract",
    "供應商合約",
    "We discussed the supplier contract during today's lesson.",
    "我們在今天的課程中討論了「供應商合約」。",
    "n."
  ],
  [
    "supply chain management",
    "供應鏈管理",
    "We discussed the supply chain management during today's lesson.",
    "我們在今天的課程中討論了「供應鏈管理」。",
    "n."
  ],
  [
    "survey result",
    "問卷結果",
    "We discussed the survey result during today's lesson.",
    "我們在今天的課程中討論了「問卷結果」。",
    "n."
  ],
  [
    "tax return",
    "報稅表；退稅",
    "We discussed the tax return during today's lesson.",
    "我們在今天的課程中討論了「報稅表；退稅」。",
    "n."
  ],
  [
    "team meeting",
    "團隊會議",
    "We discussed the team meeting during today's lesson.",
    "我們在今天的課程中討論了「團隊會議」。",
    "n."
  ],
  [
    "temporary position",
    "臨時職位",
    "We discussed the temporary position during today's lesson.",
    "我們在今天的課程中討論了「臨時職位」。",
    "n."
  ],
  [
    "tender document",
    "投標文件",
    "We discussed the tender document during today's lesson.",
    "我們在今天的課程中討論了「投標文件」。",
    "n."
  ],
  [
    "terms of payment",
    "付款條件",
    "We discussed the terms of payment during today's lesson.",
    "我們在今天的課程中討論了「付款條件」。",
    "n."
  ],
  [
    "training program",
    "培訓計畫",
    "We discussed the training program during today's lesson.",
    "我們在今天的課程中討論了「培訓計畫」。",
    "n."
  ],
  [
    "transaction fee",
    "交易手續費",
    "We discussed the transaction fee during today's lesson.",
    "我們在今天的課程中討論了「交易手續費」。",
    "n."
  ],
  [
    "transportation cost",
    "運輸成本",
    "We discussed the transportation cost during today's lesson.",
    "我們在今天的課程中討論了「運輸成本」。",
    "n."
  ],
  [
    "travel expense",
    "差旅費",
    "We discussed the travel expense during today's lesson.",
    "我們在今天的課程中討論了「差旅費」。",
    "n."
  ],
  [
    "turnover rate",
    "流動率；周轉率",
    "We discussed the turnover rate during today's lesson.",
    "我們在今天的課程中討論了「流動率；周轉率」。",
    "n."
  ],
  [
    "unit price",
    "單價",
    "We discussed the unit price during today's lesson.",
    "我們在今天的課程中討論了「單價」。",
    "n."
  ],
  [
    "user feedback",
    "使用者回饋",
    "We discussed the user feedback during today's lesson.",
    "我們在今天的課程中討論了「使用者回饋」。",
    "n."
  ],
  [
    "validity period",
    "有效期間",
    "We discussed the validity period during today's lesson.",
    "我們在今天的課程中討論了「有效期間」。",
    "n."
  ],
  [
    "value-added tax",
    "加值型營業稅",
    "We discussed the value-added tax during today's lesson.",
    "我們在今天的課程中討論了「加值型營業稅」。",
    "n."
  ],
  [
    "vendor management",
    "供應商管理",
    "We discussed the vendor management during today's lesson.",
    "我們在今天的課程中討論了「供應商管理」。",
    "n."
  ],
  [
    "verification process",
    "驗證流程",
    "We discussed the verification process during today's lesson.",
    "我們在今天的課程中討論了「驗證流程」。",
    "n."
  ],
  [
    "volume discount",
    "大量折扣",
    "We discussed the volume discount during today's lesson.",
    "我們在今天的課程中討論了「大量折扣」。",
    "n."
  ],
  [
    "warranty period",
    "保固期間",
    "We discussed the warranty period during today's lesson.",
    "我們在今天的課程中討論了「保固期間」。",
    "n."
  ],
  [
    "workforce planning",
    "人力規劃",
    "We discussed the workforce planning during today's lesson.",
    "我們在今天的課程中討論了「人力規劃」。",
    "n."
  ],
  [
    "workload balance",
    "工作量平衡",
    "We discussed the workload balance during today's lesson.",
    "我們在今天的課程中討論了「工作量平衡」。",
    "n."
  ],
  [
    "workflow automation",
    "工作流程自動化",
    "We discussed the workflow automation during today's lesson.",
    "我們在今天的課程中討論了「工作流程自動化」。",
    "n."
  ],
  [
    "workplace safety",
    "職場安全",
    "We discussed the workplace safety during today's lesson.",
    "我們在今天的課程中討論了「職場安全」。",
    "n."
  ],
  [
    "criminal",
    "犯罪的；刑事的",
    "The lesson included a criminal example.",
    "課程包含一個犯罪的；刑事的的例子。",
    "adj."
  ],
  [
    "data collection",
    "資料蒐集",
    "We discussed the data collection during today's lesson.",
    "我們在今天的課程中討論了「資料蒐集」。",
    "n."
  ],
  [
    "democracy",
    "民主",
    "We discussed the democracy during today's lesson.",
    "我們在今天的課程中討論了「民主」。",
    "n."
  ],
  [
    "denial",
    "否認；拒絕",
    "We discussed the denial during today's lesson.",
    "我們在今天的課程中討論了「否認；拒絕」。",
    "n."
  ],
  [
    "diplomacy",
    "外交；外交手腕",
    "We discussed the diplomacy during today's lesson.",
    "我們在今天的課程中討論了「外交；外交手腕」。",
    "n."
  ],
  [
    "electoral",
    "選舉的",
    "The lesson included an electoral example.",
    "課程包含一個選舉的的例子。",
    "adj."
  ],
  [
    "governance",
    "治理；管理",
    "We discussed the governance during today's lesson.",
    "我們在今天的課程中討論了「治理；管理」。",
    "n."
  ],
  [
    "graduation",
    "畢業典禮；畢業",
    "We discussed the graduation during today's lesson.",
    "我們在今天的課程中討論了「畢業典禮；畢業」。",
    "n."
  ],
  [
    "habitat",
    "棲地",
    "We discussed the habitat during today's lesson.",
    "我們在今天的課程中討論了「棲地」。",
    "n."
  ],
  [
    "histogram",
    "直方圖",
    "We discussed the histogram during today's lesson.",
    "我們在今天的課程中討論了「直方圖」。",
    "n."
  ],
  [
    "hormone",
    "荷爾蒙",
    "We discussed the hormone during today's lesson.",
    "我們在今天的課程中討論了「荷爾蒙」。",
    "n."
  ],
  [
    "hydrogen",
    "氫",
    "We discussed the hydrogen during today's lesson.",
    "我們在今天的課程中討論了「氫」。",
    "n."
  ],
  [
    "immunity",
    "免疫力",
    "We discussed the immunity during today's lesson.",
    "我們在今天的課程中討論了「免疫力」。",
    "n."
  ],
  [
    "infection",
    "感染",
    "We discussed the infection during today's lesson.",
    "我們在今天的課程中討論了「感染」。",
    "n."
  ],
  [
    "inflation",
    "通貨膨脹",
    "We discussed the inflation during today's lesson.",
    "我們在今天的課程中討論了「通貨膨脹」。",
    "n."
  ],
  [
    "insomnia",
    "失眠",
    "We discussed the insomnia during today's lesson.",
    "我們在今天的課程中討論了「失眠」。",
    "n."
  ],
  [
    "interaction",
    "互動",
    "We discussed the interaction during today's lesson.",
    "我們在今天的課程中討論了「互動」。",
    "n."
  ],
  [
    "isolation",
    "隔離；孤立",
    "We discussed the isolation during today's lesson.",
    "我們在今天的課程中討論了「隔離；孤立」。",
    "n."
  ],
  [
    "journalism",
    "新聞業；新聞學",
    "We discussed the journalism during today's lesson.",
    "我們在今天的課程中討論了「新聞業；新聞學」。",
    "n."
  ],
  [
    "jurisdiction",
    "管轄權",
    "We discussed the jurisdiction during today's lesson.",
    "我們在今天的課程中討論了「管轄權」。",
    "n."
  ],
  [
    "magnetism",
    "磁力；吸引力",
    "We discussed the magnetism during today's lesson.",
    "我們在今天的課程中討論了「磁力；吸引力」。",
    "n."
  ],
  [
    "malnutrition",
    "營養不良",
    "We discussed the malnutrition during today's lesson.",
    "我們在今天的課程中討論了「營養不良」。",
    "n."
  ],
  [
    "mathematics",
    "數學",
    "We discussed the mathematics during today's lesson.",
    "我們在今天的課程中討論了「數學」。",
    "n."
  ],
  [
    "medication",
    "藥物；藥物治療",
    "We discussed the medication during today's lesson.",
    "我們在今天的課程中討論了「藥物；藥物治療」。",
    "n."
  ],
  [
    "migration",
    "遷移；移民",
    "We discussed the migration during today's lesson.",
    "我們在今天的課程中討論了「遷移；移民」。",
    "n."
  ],
  [
    "ministry",
    "政府部門；部",
    "We discussed the ministry during today's lesson.",
    "我們在今天的課程中討論了「政府部門；部」。",
    "n."
  ],
  [
    "mobility",
    "移動性；流動性",
    "We discussed the mobility during today's lesson.",
    "我們在今天的課程中討論了「移動性；流動性」。",
    "n."
  ],
  [
    "mortality",
    "死亡率",
    "We discussed the mortality during today's lesson.",
    "我們在今天的課程中討論了「死亡率」。",
    "n."
  ],
  [
    "narrative",
    "敘述；故事",
    "We discussed the narrative during today's lesson.",
    "我們在今天的課程中討論了「敘述；故事」。",
    "n."
  ],
  [
    "nationalism",
    "民族主義",
    "We discussed the nationalism during today's lesson.",
    "我們在今天的課程中討論了「民族主義」。",
    "n."
  ],
  [
    "neurology",
    "神經學",
    "We discussed the neurology during today's lesson.",
    "我們在今天的課程中討論了「神經學」。",
    "n."
  ],
  [
    "nutrient",
    "營養素",
    "We discussed the nutrient during today's lesson.",
    "我們在今天的課程中討論了「營養素」。",
    "n."
  ],
  [
    "opposition",
    "反對；對立",
    "We discussed the opposition during today's lesson.",
    "我們在今天的課程中討論了「反對；對立」。",
    "n."
  ],
  [
    "pathogen",
    "病原體",
    "We discussed the pathogen during today's lesson.",
    "我們在今天的課程中討論了「病原體」。",
    "n."
  ],
  [
    "perception",
    "感知；看法",
    "We discussed the perception during today's lesson.",
    "我們在今天的課程中討論了「感知；看法」。",
    "n."
  ],
  [
    "pharmacy",
    "藥局；藥學",
    "We discussed the pharmacy during today's lesson.",
    "我們在今天的課程中討論了「藥局；藥學」。",
    "n."
  ],
  [
    "physician",
    "醫師",
    "We discussed the physician during today's lesson.",
    "我們在今天的課程中討論了「醫師」。",
    "n."
  ],
  [
    "physiology",
    "生理學",
    "We discussed the physiology during today's lesson.",
    "我們在今天的課程中討論了「生理學」。",
    "n."
  ],
  [
    "prediction",
    "預測",
    "We discussed the prediction during today's lesson.",
    "我們在今天的課程中討論了「預測」。",
    "n."
  ],
  [
    "prevention",
    "預防",
    "We discussed the prevention during today's lesson.",
    "我們在今天的課程中討論了「預防」。",
    "n."
  ],
  [
    "probability",
    "可能性；機率",
    "We discussed the probability during today's lesson.",
    "我們在今天的課程中討論了「可能性；機率」。",
    "n."
  ],
  [
    "radiation",
    "輻射",
    "We discussed the radiation during today's lesson.",
    "我們在今天的課程中討論了「輻射」。",
    "n."
  ],
  [
    "recovery",
    "恢復；復原",
    "We discussed the recovery during today's lesson.",
    "我們在今天的課程中討論了「恢復；復原」。",
    "n."
  ],
  [
    "reflection",
    "反思；反射",
    "We discussed the reflection during today's lesson.",
    "我們在今天的課程中討論了「反思；反射」。",
    "n."
  ],
  [
    "reform",
    "改革",
    "We discussed the reform during today's lesson.",
    "我們在今天的課程中討論了「改革」。",
    "n."
  ],
  [
    "rehabilitation",
    "復健；復原",
    "We discussed the rehabilitation during today's lesson.",
    "我們在今天的課程中討論了「復健；復原」。",
    "n."
  ],
  [
    "chopsticks",
    "筷子",
    "We discussed the chopsticks during today's lesson.",
    "我們在今天的課程中討論了「筷子」。",
    "n."
  ],
  [
    "cocktail",
    "雞尾酒",
    "We discussed the cocktail during today's lesson.",
    "我們在今天的課程中討論了「雞尾酒」。",
    "n."
  ],
  [
    "coffee shop",
    "咖啡店",
    "We discussed the coffee shop during today's lesson.",
    "我們在今天的課程中討論了「咖啡店」。",
    "n."
  ],
  [
    "commuter",
    "通勤者",
    "We discussed the commuter during today's lesson.",
    "我們在今天的課程中討論了「通勤者」。",
    "n."
  ],
  [
    "computer keyboard",
    "電腦鍵盤",
    "We discussed the computer keyboard during today's lesson.",
    "我們在今天的課程中討論了「電腦鍵盤」。",
    "n."
  ],
  [
    "cookie",
    "餅乾",
    "We discussed the cookie during today's lesson.",
    "我們在今天的課程中討論了「餅乾」。",
    "n."
  ],
  [
    "sensation",
    "感覺；轟動",
    "We discussed the sensation during today's lesson.",
    "我們在今天的課程中討論了「感覺；轟動」。",
    "n."
  ],
  [
    "sociology",
    "社會學",
    "We discussed the sociology during today's lesson.",
    "我們在今天的課程中討論了「社會學」。",
    "n."
  ],
  [
    "species",
    "物種",
    "We discussed the species during today's lesson.",
    "我們在今天的課程中討論了「物種」。",
    "n."
  ],
  [
    "substance",
    "物質；實質",
    "We discussed the substance during today's lesson.",
    "我們在今天的課程中討論了「物質；實質」。",
    "n."
  ],
  [
    "surgery",
    "手術",
    "We discussed the surgery during today's lesson.",
    "我們在今天的課程中討論了「手術」。",
    "n."
  ],
  [
    "therapy",
    "治療；療法",
    "We discussed the therapy during today's lesson.",
    "我們在今天的課程中討論了「治療；療法」。",
    "n."
  ],
  [
    "transmission",
    "傳播；傳輸",
    "We discussed the transmission during today's lesson.",
    "我們在今天的課程中討論了「傳播；傳輸」。",
    "n."
  ],
  [
    "copper",
    "銅",
    "We discussed the copper during today's lesson.",
    "我們在今天的課程中討論了「銅」。",
    "n."
  ],
  [
    "coral",
    "珊瑚",
    "We discussed the coral during today's lesson.",
    "我們在今天的課程中討論了「珊瑚」。",
    "n."
  ],
  [
    "vaccination",
    "疫苗接種",
    "We discussed the vaccination during today's lesson.",
    "我們在今天的課程中討論了「疫苗接種」。",
    "n."
  ],
  [
    "violation",
    "違反；侵害",
    "We discussed the violation during today's lesson.",
    "我們在今天的課程中討論了「違反；侵害」。",
    "n."
  ],
  [
    "absorption",
    "吸收；吸收量",
    "We discussed the absorption during today's lesson.",
    "我們在今天的課程中討論了「吸收；吸收量」。",
    "n."
  ],
  [
    "acoustic",
    "聲音的；聽覺的",
    "The lesson included an acoustic example.",
    "課程包含一個聲音的；聽覺的的例子。",
    "adj."
  ],
  [
    "agreement",
    "協議；同意",
    "We discussed the agreement during today's lesson.",
    "我們在今天的課程中討論了「協議；同意」。",
    "n."
  ],
  [
    "championship",
    "冠軍賽；冠軍頭銜",
    "We discussed the championship during today's lesson.",
    "我們在今天的課程中討論了「冠軍賽；冠軍頭銜」。",
    "n."
  ],
  [
    "disagreement",
    "意見不合",
    "We discussed the disagreement during today's lesson.",
    "我們在今天的課程中討論了「意見不合」。",
    "n."
  ],
  [
    "actress",
    "女演員",
    "We discussed the actress during today's lesson.",
    "我們在今天的課程中討論了「女演員」。",
    "n."
  ],
  [
    "air conditioner",
    "冷氣機",
    "We discussed the air conditioner during today's lesson.",
    "我們在今天的課程中討論了「冷氣機」。",
    "n."
  ],
  [
    "amusement park",
    "遊樂園",
    "We discussed the amusement park during today's lesson.",
    "我們在今天的課程中討論了「遊樂園」。",
    "n."
  ],
  [
    "anchovy",
    "鯷魚",
    "We discussed the anchovy during today's lesson.",
    "我們在今天的課程中討論了「鯷魚」。",
    "n."
  ],
  [
    "applause",
    "掌聲",
    "We discussed the applause during today's lesson.",
    "我們在今天的課程中討論了「掌聲」。",
    "n."
  ],
  [
    "archery",
    "射箭",
    "We discussed the archery during today's lesson.",
    "我們在今天的課程中討論了「射箭」。",
    "n."
  ],
  [
    "art gallery",
    "藝廊",
    "We discussed the art gallery during today's lesson.",
    "我們在今天的課程中討論了「藝廊」。",
    "n."
  ],
  [
    "asthma",
    "氣喘",
    "We discussed the asthma during today's lesson.",
    "我們在今天的課程中討論了「氣喘」。",
    "n."
  ],
  [
    "attorney",
    "律師",
    "We discussed the attorney during today's lesson.",
    "我們在今天的課程中討論了「律師」。",
    "n."
  ],
  [
    "backache",
    "背痛",
    "We discussed the backache during today's lesson.",
    "我們在今天的課程中討論了「背痛」。",
    "n."
  ],
  [
    "bathroom",
    "浴室；洗手間",
    "We discussed the bathroom during today's lesson.",
    "我們在今天的課程中討論了「浴室；洗手間」。",
    "n."
  ],
  [
    "blender",
    "果汁機",
    "We discussed the blender during today's lesson.",
    "我們在今天的課程中討論了「果汁機」。",
    "n."
  ],
  [
    "blouse",
    "女用上衣",
    "We discussed the blouse during today's lesson.",
    "我們在今天的課程中討論了「女用上衣」。",
    "n."
  ],
  [
    "booth",
    "攤位；小隔間",
    "We discussed the booth during today's lesson.",
    "我們在今天的課程中討論了「攤位；小隔間」。",
    "n."
  ],
  [
    "boulevard",
    "林蔭大道",
    "We discussed the boulevard during today's lesson.",
    "我們在今天的課程中討論了「林蔭大道」。",
    "n."
  ],
  [
    "bracelet",
    "手鍊",
    "We discussed the bracelet during today's lesson.",
    "我們在今天的課程中討論了「手鍊」。",
    "n."
  ],
  [
    "bus driver",
    "公車司機",
    "We discussed the bus driver during today's lesson.",
    "我們在今天的課程中討論了「公車司機」。",
    "n."
  ],
  [
    "cactus",
    "仙人掌",
    "We discussed the cactus during today's lesson.",
    "我們在今天的課程中討論了「仙人掌」。",
    "n."
  ],
  [
    "canvas",
    "畫布；帆布",
    "We discussed the canvas during today's lesson.",
    "我們在今天的課程中討論了「畫布；帆布」。",
    "n."
  ],
  [
    "carnival",
    "嘉年華會",
    "We discussed the carnival during today's lesson.",
    "我們在今天的課程中討論了「嘉年華會」。",
    "n."
  ],
  [
    "carpenter",
    "木匠",
    "We discussed the carpenter during today's lesson.",
    "我們在今天的課程中討論了「木匠」。",
    "n."
  ],
  [
    "carriage",
    "馬車；車廂",
    "We discussed the carriage during today's lesson.",
    "我們在今天的課程中討論了「馬車；車廂」。",
    "n."
  ],
  [
    "carrot",
    "胡蘿蔔",
    "We discussed the carrot during today's lesson.",
    "我們在今天的課程中討論了「胡蘿蔔」。",
    "n."
  ],
  [
    "cellar",
    "地窖",
    "We discussed the cellar during today's lesson.",
    "我們在今天的課程中討論了「地窖」。",
    "n."
  ],
  [
    "champagne",
    "香檳",
    "We discussed the champagne during today's lesson.",
    "我們在今天的課程中討論了「香檳」。",
    "n."
  ],
  [
    "charger",
    "充電器",
    "We discussed the charger during today's lesson.",
    "我們在今天的課程中討論了「充電器」。",
    "n."
  ],
  [
    "chest",
    "胸部；箱子",
    "We discussed the chest during today's lesson.",
    "我們在今天的課程中討論了「胸部；箱子」。",
    "n."
  ],
  [
    "chin",
    "下巴",
    "We discussed the chin during today's lesson.",
    "我們在今天的課程中討論了「下巴」。",
    "n."
  ]
];

// 6,000 字版新增的中階名詞：職場、科技、健康與社會主題。
// 每列以「英文|中文」保存；載入時統一補上例句、翻譯與詞性。
var INTERMEDIATE_6000_EXTENSION = "absenteeism|缺勤;abstraction|抽象概念;accession|就任;aggregation|聚合;allotment|配額;assessor|評估員;auditorium|禮堂;backlog|積壓工作;ballot|選票;barter|以物易物;bylaw|附則;capitalization|資本化;chairman|主席;compilation|彙編;consultancy|顧問服務;dealership|經銷商資格;debit|借記;directory|目錄;exemption|豁免;fulfillment|履行;leasing|租賃;ledger|分類帳;liquidation|清算;newsletter|電子報;underwriting|核保;amenities|便利設施;apprentice|學徒;aptitude|才能;backpacker|背包客;catering|餐飲服務;chauffeur|司機;checkpoint|檢查站;commuting|通勤;concierge|禮賓員;embarkation|登船;excursion|短途旅行;gateway|入口;resort|度假村;transit|轉運;visa|簽證;analog|類比裝置;antivirus|防毒軟體;chipset|晶片組;codec|編解碼器;configuration|設定;connectivity|連線能力;desktop|桌上型電腦;inbox|收件匣;notification|通知;plugin|外掛;portal|入口網站;processor|處理器;server|伺服器;username|使用者名稱;arthritis|關節炎;cancer|癌症;cholesterol|膽固醇;dietitian|營養師;dosage|劑量;fatigue|疲勞;fracture|骨折;injection|注射;prescription|處方;wellness|健康;activism|行動主義;adoption|採用;ancestry|祖先血統;census|人口普查;crime|犯罪;ethnicity|族群;gender|性別;housing|住房;justice|正義;morality|道德;municipality|市政府;nationality|國籍;prejudice|偏見;religion|宗教;sanitation|衛生;stereotype|刻板印象;acoustics|聲學;atom|原子;cosmos|宇宙;equation|方程式;fossil|化石;galaxy|星系;molecule|分子;universe|宇宙;acreage|土地面積;annuity|年金;arbitrator|仲裁人;bookkeeping|簿記;demolition|拆除;donation|捐款;drainage|排水;examiner|考官;excavation|挖掘;foreclosure|喪失抵押品贖回權;goodwill|商譽;guarantor|保證人;importer|進口商;insurer|保險公司;investigator|調查員;litigation|訴訟;machinery|機械;nominee|被提名人;operator|操作員;ordinance|條例;participant|參與者;penalty|處罰;principal|本金;proprietor|所有人;recipient|收件人;solicitor|事務律師;subscriber|訂閱者;trainee|受訓者;trustee|受託人;wholesaler|批發商;zoology|動物學;acronym|縮寫;adolescence|青春期;adjacency|鄰接;adjective|形容詞;aggression|侵略性;ailment|小病;artery|動脈;association|協會;amphibian|兩棲動物;appendix|附錄;arcade|拱廊;artifact|人工製品;artisan|工匠;asylum|庇護;athletics|田徑;autobiography|自傳;broadcaster|廣播員;bullion|金條;bureau|局;calibration|校準;carcass|動物屍體;cavalry|騎兵;circuitry|電路系統;circulation|流通;cockpit|駕駛艙;composite|複合材料;conformity|一致性;constituency|選區;corrosion|腐蝕;custody|監護權;decay|腐敗;deficiency|缺乏;denominator|分母;dentistry|牙醫學;dependency|依賴;detention|拘留;disposal|處置;distinction|差異;doctrine|教義;elasticity|彈性;enactment|制定;enclosure|附件;encyclopedia|百科全書;expedition|遠征;faculty|教職員;federation|聯盟;filtration|過濾;fireworks|煙火;fragrance|香味;frequency|頻率;geometry|幾何學;gradient|梯度;hydraulics|液壓學;ideology|意識形態;importation|進口;indentation|縮排;infancy|嬰兒期;intensity|強度;intimacy|親密關係;irrigation|灌溉;legislature|立法機關;magnitude|規模;margin|邊際;metabolism|新陳代謝;mutation|突變;orientation|說明會;parliament|國會;pathology|病理學;pension|退休金;precision|精確度;readership|讀者群;renovation|翻修;residency|住院醫師訓練;specialty|專業;spirituality|靈性;subsidy|補助金;tenancy|租賃權;toxicity|毒性;transparency|透明度;utilization|利用;vegetation|植被;ventilation|通風;visibility|能見度;vulnerability|脆弱性;allegation|指控;amplitude|振幅;anthropology|人類學;capability|能力;censorship|審查制度;classification|分類;compatibility|相容性;conscience|良心;consistency|一致性;contraception|避孕;correlation|相關性;credibility|可信度;dignity|尊嚴;dilemma|兩難;disorder|失調;endpoint|端點;friction|摩擦;inspiration|靈感;abnormality|異常;abrasion|磨損;acceleration|加速;actuality|現實;adhesion|附著力;adulteration|摻假;aeration|通氣;aerodynamics|空氣動力學;aeronautics|航空學;aerosol|氣霧劑;aftermath|後果;aggravation|惡化;alkalinity|鹼度;ammunition|彈藥;anemia|貧血;anesthesia|麻醉;antibody|抗體;aperture|孔徑;assemblage|集合;auctioneer|拍賣師;bacterium|細菌;bearing|軸承;buffer|緩衝區;cabinet|櫥櫃;capacitor|電容器;conveyor|輸送帶;derivation|推導;dismissal|解雇;enlargement|擴大".split(";").map(function(row){ return row.split("|"); });
DECKS.intermediate.push.apply(DECKS.intermediate, INTERMEDIATE_6000_EXTENSION.map(function(card){
  return [card[0], card[1], "We discussed the topic of " + card[0] + " in class today.", "我們今天在課堂上討論了「" + card[1] + "」這個主題。", "n."];
}));

// 6,500 字版：常見職場詞組。組合前會先排除既有字卡，確保不重複。
var WORK_PHRASE_MODIFIERS = [["annual","年度"],["monthly","每月"],["quarterly","季度"],["revised","修訂後的"],["detailed","詳細的"],["official","正式的"],["internal","內部的"],["external","外部的"],["current","目前的"],["future","未來的"],["regular","定期的"],["urgent","緊急的"],["important","重要的"],["final","最終的"],["draft","草案"],["digital","數位"],["shared","共用"],["available","可用的"],["scheduled","已排定的"],["requested","已請求的"],["updated","已更新的"],["required","必要的"]];
var WORK_PHRASE_NOUNS = [["report","報告"],["meeting","會議"],["plan","計畫"],["schedule","時程"],["budget","預算"],["policy","政策"],["procedure","流程"],["document","文件"],["request","申請"],["service","服務"],["support","支援"],["training","培訓"],["program","方案"],["project","專案"],["system","系統"],["update","更新"],["review","審查"],["survey","調查"],["record","紀錄"],["agreement","協議"],["application","申請表"],["process","程序"],["payment","付款"],["statement","聲明"],["notice","通知"]];
var existingIntermediateWords = {};
Object.keys(DECKS).forEach(function(level){ DECKS[level].forEach(function(card){ existingIntermediateWords[String(card[0]).toLowerCase()] = true; }); });
var INTERMEDIATE_6500_EXTENSION = [];
// Give each work phrase a context that fits its noun instead of repeating one meeting sentence.
function makeWorkPhraseExample(phrase, meaning, noun){
  if(phrase === "future review"){
    return [
      "The budget plan has been approved, but it remains subject to future review.",
      "預算計畫已通過，但仍需在未來進行審查。"
    ];
  }
  var templates = {
    report: ["The " + phrase + " will be circulated after the audit.", "稽核結束後會發送這份「" + meaning + "」。"],
    meeting: ["The " + phrase + " has been scheduled for next week.", "這場「" + meaning + "」已排定於下週舉行。"],
    plan: ["The " + phrase + " will guide the next stage of the project.", "這份「" + meaning + "」將指引專案的下一階段。"],
    schedule: ["Please confirm the " + phrase + " before Friday.", "請在週五前確認這份「" + meaning + "」。"],
    budget: ["The " + phrase + " must be approved before implementation.", "這份「" + meaning + "」必須在執行前獲得核准。"],
    policy: ["Staff will be informed when the " + phrase + " takes effect.", "「" + meaning + "」生效時會通知全體員工。"],
    procedure: ["Employees should follow the " + phrase + " carefully.", "員工應仔細遵循這項「" + meaning + "」。"],
    document: ["Please store the " + phrase + " in the shared folder.", "請將這份「" + meaning + "」存放在共用資料夾。"],
    request: ["We will respond to the " + phrase + " within two business days.", "我們會在兩個工作天內回覆這項「" + meaning + "」。"],
    service: ["The " + phrase + " is available to all clients.", "所有客戶都可使用這項「" + meaning + "」。"],
    support: ["The help desk will provide " + phrase + " to staff.", "服務台會為員工提供「" + meaning + "」。"],
    training: ["Employees must complete the " + phrase + " before starting work.", "員工開始工作前必須完成這項「" + meaning + "」。"],
    program: ["The " + phrase + " aims to improve customer service.", "這項「" + meaning + "」旨在改善客戶服務。"],
    project: ["The " + phrase + " will begin after funding is confirmed.", "資金確認後，這項「" + meaning + "」就會開始。"],
    system: ["The " + phrase + " will replace the current platform.", "這套「" + meaning + "」將取代目前的平台。"],
    update: ["The " + phrase + " includes the latest security fixes.", "這項「" + meaning + "」包含最新的安全修正。"],
    review: ["The proposal remains subject to " + phrase + ".", "這項提案仍須接受「" + meaning + "」。"],
    survey: ["The " + phrase + " will be sent to customers next week.", "這份「" + meaning + "」將於下週寄給客戶。"],
    record: ["The " + phrase + " must be kept for audit purposes.", "這份「" + meaning + "」必須為稽核目的妥善保存。"],
    agreement: ["The legal team will review the " + phrase + " before it is signed.", "法務團隊會在簽署前審閱這份「" + meaning + "」。"],
    application: ["We will review the " + phrase + " after all documents arrive.", "所有文件到齊後，我們會審查這份「" + meaning + "」。"],
    process: ["The " + phrase + " is designed to minimize delays.", "這項「" + meaning + "」旨在減少延誤。"],
    payment: ["The " + phrase + " must be processed by the due date.", "這筆「" + meaning + "」必須在到期日前處理。"],
    statement: ["Please verify the figures in the " + phrase + ".", "請核對這份「" + meaning + "」中的數字。"],
    notice: ["Staff received the " + phrase + " by email.", "員工已透過電子郵件收到這份「" + meaning + "」。"]
  };
  return templates[noun] || ["The " + phrase + " is part of the current workflow.", "「" + meaning + "」是目前工作流程的一部分。"];
}
WORK_PHRASE_MODIFIERS.forEach(function(modifier){
  WORK_PHRASE_NOUNS.forEach(function(noun){
    var phrase = modifier[0] + " " + noun[0];
    if(!existingIntermediateWords[phrase] && INTERMEDIATE_6500_EXTENSION.length < 500){
      existingIntermediateWords[phrase] = true;
      var meaning = modifier[1] + noun[1];
      if(phrase === "future review") meaning = "未來審查；日後評估";
      var examplePair = makeWorkPhraseExample(phrase, meaning, noun[0]);
      INTERMEDIATE_6500_EXTENSION.push([phrase, meaning, examplePair[0], examplePair[1], "n."]);
    }
  });
});
DECKS.intermediate.push.apply(DECKS.intermediate, INTERMEDIATE_6500_EXTENSION);
DECKS.intermediate.forEach(function(card){
  PARTS_OF_SPEECH[String(card[0]).trim().toLowerCase()] = card[4];
});
