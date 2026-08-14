// Natural example restoration — batch 03
// Each example is independently written and tied to the displayed sense.
var CURATED_NATURAL_EXAMPLES = (typeof CURATED_NATURAL_EXAMPLES !== "undefined")
  ? CURATED_NATURAL_EXAMPLES
  : {};
var CURATED_NATURAL_MEANINGS = (typeof CURATED_NATURAL_MEANINGS !== "undefined")
  ? CURATED_NATURAL_MEANINGS
  : {};

Object.assign(CURATED_NATURAL_EXAMPLES, {
  "astronaut": ["The astronaut described what it felt like to see Earth from space.", "這名太空人描述從太空看見地球的感受。"],
  "astronomer": ["The astronomer used a telescope to observe a distant galaxy.", "天文學家用望遠鏡觀測遙遠的星系。"],
  "astronomy": ["Astronomy helps us understand the stars and planets.", "天文學幫助我們了解恆星和行星。"],
  "asylum": ["The family applied for asylum after fleeing the war.", "這個家庭逃離戰爭後申請庇護。"],
  "athlete": ["The athlete trained every morning before work.", "這名運動員每天上班前都訓練。"],
  "athletics": ["She won a medal in athletics at the school competition.", "她在校際田徑比賽中贏得獎牌。"],
  "attachment": ["I included the receipt as an attachment to the email.", "我把收據當作電子郵件附件附上。"],
  "attorney": ["The attorney explained the contract in plain language.", "律師用淺顯的語言說明合約。"],
  "attraction": ["The night market is a popular attraction for visitors.", "夜市是遊客喜愛的景點。"],
  "auction": ["The painting was sold at auction for more than expected.", "這幅畫在拍賣會上以高於預期的價格售出。"],
  "auctioneer": ["The auctioneer raised the price with each new bid.", "拍賣師隨著每次新出價提高價格。"],
  "auditorium": ["The graduation ceremony was held in the school auditorium.", "畢業典禮在學校禮堂舉行。"],
  "aunt": ["My aunt brings homemade cookies whenever she visits.", "我阿姨每次來訪都會帶自製餅乾。"],
  "authentication": ["Two-factor authentication protects your account from unauthorized access.", "雙重身分驗證可保護你的帳戶免於未授權存取。"],
  "authorization": ["You need written authorization before using the company's logo.", "使用公司標誌前需要書面授權。"],
  "auto": ["The vintage auto was restored by its owner.", "這輛老式汽車由車主修復。"],
  "autobiography": ["Her autobiography describes her childhood in the countryside.", "她的自傳描述了在鄉下度過的童年。"],
  "awareness": ["The campaign raised awareness of road safety.", "這項活動提升了大眾對道路安全的意識。"],
  "backdrop": ["Snow-covered mountains formed a dramatic backdrop for the photo.", "白雪覆蓋的山脈成為照片醒目的背景。"],
  "backlog": ["The support team worked late to clear the backlog of requests.", "客服團隊加班處理積壓的請求。"],
  "backpacker": ["The backpacker stayed in a hostel near the station.", "這名背包客住在車站附近的青年旅館。"],
  "bacteria": ["Some bacteria are useful for making yogurt.", "有些細菌可用來製作優格。"],
  "bacterium": ["A single bacterium can multiply quickly under the right conditions.", "在適當條件下，單一細菌能迅速繁殖。"],
  "balloon": ["The child let go of the balloon and watched it float away.", "那個孩子放開氣球，看著它飄走。"],
  "ballot": ["Voters marked their choices on a secret ballot.", "選民在不記名選票上標示自己的選擇。"],
  "banana": ["He sliced a banana into his bowl of oatmeal.", "他把一根香蕉切片放進燕麥粥裡。"],
  "bandage": ["The nurse placed a clean bandage over the cut.", "護理師在傷口上覆蓋乾淨的繃帶。"],
  "bank account": ["She opened a bank account after starting her first job.", "她開始第一份工作後開了一個銀行帳戶。"],
  "banker": ["The banker explained the loan options to the couple.", "銀行家向這對夫妻說明貸款選項。"],
  "baptist": ["She was raised as a Baptist and still attends church regularly.", "她從小是浸禮會教友，現在仍固定去教堂。"],
  "barcode": ["The cashier scanned the barcode on the package.", "收銀員掃描包裝上的條碼。"],
  "basket": ["She carried the vegetables home in a woven basket.", "她用編織籃子把蔬菜帶回家。"],
  "beach": ["We walked along the beach before sunset.", "日落前我們沿著海灘散步。"],
  "beacon": ["The lighthouse beacon guided the boat through the fog.", "燈塔的信標引導船隻穿過濃霧。"],
  "beaker": ["The students measured the liquid in a glass beaker.", "學生在玻璃燒杯中量取液體。"],
  "bearing": ["The mechanic replaced a worn bearing in the wheel.", "技師更換了車輪中磨損的軸承。"],
  "beauty": ["The beauty of the lake made us stop and take pictures.", "湖泊的美景讓我們停下來拍照。"],
  "beer": ["He ordered a cold beer with his dinner.", "他晚餐時點了一杯冰啤酒。"],
  "behalf": ["On behalf of the team, I would like to thank our volunteers.", "我謹代表團隊感謝志工們。"],
  "belief": ["Her belief in herself helped her speak confidently.", "她對自己的信念幫助她自信地發言。"],
  "believer": ["He is a strong believer in learning from mistakes.", "他深信人能從錯誤中學習。"],
  "betrayal": ["She felt a deep sense of betrayal after reading the message.", "讀完那則訊息後，她感到深深的背叛。"],
  "bike": ["She rides her bike to work when the weather is nice.", "天氣好時，她騎自行車去上班。"],
  "binoculars": ["We used binoculars to watch birds across the lake.", "我們用雙筒望遠鏡觀察湖對岸的鳥。"],
  "biology": ["Biology was his favorite subject in high school.", "生物學是他高中時最喜歡的科目。"],
  "blade": ["Be careful because the blade on this knife is very sharp.", "小心，這把刀的刀刃很鋒利。"],
  "blender": ["Use a blender to make a smooth fruit drink.", "用果汁機打出滑順的水果飲品。"],
  "bluetooth": ["I connected the speakers to my phone through Bluetooth.", "我透過藍牙將喇叭連接到手機。"],
  "board game": ["We played a board game after dinner.", "晚餐後我們玩了一款桌上遊戲。"],
  "boarding": ["Boarding begins thirty minutes before the flight leaves.", "登機會在班機起飛前三十分鐘開始。"],
  "boat": ["They rented a small boat to explore the lake.", "他們租了一艘小船探索湖面。"],
  "body": ["Regular exercise keeps your body strong.", "規律運動能讓身體保持強壯。"],
  "boiler": ["The boiler provides hot water for the whole building.", "鍋爐為整棟建築供應熱水。"],
  "bolt": ["Tighten the bolt before using the new shelf.", "使用新層架前先把螺栓鎖緊。"],
  "bookstore": ["I found the novel at a small bookstore near campus.", "我在校園附近的一間小書店找到這本小說。"],
  "boulder": ["A large boulder blocked part of the hiking trail.", "一塊大圓石擋住了部分登山步道。"],
  "boulevard": ["The boulevard is lined with trees and outdoor cafés.", "這條林蔭大道兩旁有樹木和露天咖啡館。"],
  "bowling": ["Our coworkers went bowling after the meeting.", "我們的同事會議後去打保齡球。"],
  "boyfriend": ["She introduced her boyfriend to her parents.", "她把男朋友介紹給父母。"],
  "bracelet": ["He gave her a silver bracelet for her birthday.", "他送給她一條銀手鍊作為生日禮物。"]
});

Object.assign(CURATED_NATURAL_MEANINGS, {
  "auto": "汽車（尤指美式用語）"
});
