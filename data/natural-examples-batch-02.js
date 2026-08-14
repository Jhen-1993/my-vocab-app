// Natural example restoration — batch 02
// Every sentence is independently written for the target word and displayed
// sense.  It deliberately does not use the old category-template system.
var CURATED_NATURAL_EXAMPLES = (typeof CURATED_NATURAL_EXAMPLES !== "undefined")
  ? CURATED_NATURAL_EXAMPLES
  : {};
var CURATED_NATURAL_MEANINGS = (typeof CURATED_NATURAL_MEANINGS !== "undefined")
  ? CURATED_NATURAL_MEANINGS
  : {};
var CURATED_NATURAL_POS = (typeof CURATED_NATURAL_POS !== "undefined")
  ? CURATED_NATURAL_POS
  : {};

Object.assign(CURATED_NATURAL_EXAMPLES, {
  "allergy": ["She carries medicine in case her peanut allergy causes a reaction.", "她隨身帶藥，以防花生過敏引起反應。"],
  "allocation": ["The committee approved a larger allocation for library books.", "委員會核准撥出更多經費購買圖書館藏書。"],
  "allotment": ["Each team received an equal allotment of tickets.", "每個團隊都分到相同配額的票券。"],
  "alloy": ["The bike frame is made from a light aluminum alloy.", "這輛自行車的車架由輕量鋁合金製成。"],
  "almond": ["She sprinkled sliced almonds over the salad.", "她在沙拉上撒了切片杏仁。"],
  "alphabet": ["Children learn the alphabet before they begin to read.", "孩子開始閱讀前會先學字母表。"],
  "altar": ["Flowers were placed beside the altar before the ceremony.", "儀式開始前，祭壇旁擺放了鮮花。"],
  "altitude": ["At this altitude, some hikers feel short of breath.", "在這個海拔高度，有些登山客會覺得呼吸急促。"],
  "alumnus": ["He is an alumnus of National Taiwan University.", "他是國立臺灣大學的男性校友。"],
  "amenities": ["The hotel offers amenities such as free Wi-Fi and a fitness room.", "這間飯店提供免費 Wi-Fi 和健身房等便利設施。"],
  "ammunition": ["The soldiers checked their ammunition before the training exercise.", "士兵在訓練演習前檢查了彈藥。"],
  "amusement park": ["The children spent the afternoon riding roller coasters at the amusement park.", "孩子們在遊樂園玩了一下午的雲霄飛車。"],
  "analog": ["The engineer compared the analog signal with the digital one.", "工程師將類比訊號與數位訊號作比較。"],
  "anatomy": ["The anatomy class used a model of the human heart.", "解剖學課使用人體心臟模型教學。"],
  "ancestry": ["She traced her ancestry back to a village in Ireland.", "她追溯自己的祖先血統到愛爾蘭的一座村莊。"],
  "anchovy": ["He added anchovies to the pizza for a salty flavor.", "他在披薩上加了鯷魚來增添鹹香。"],
  "anemia": ["The doctor ordered a blood test to check for anemia.", "醫師安排驗血以檢查是否貧血。"],
  "anesthesia": ["The surgeon explained how the anesthesia would work.", "外科醫師說明麻醉將如何進行。"],
  "angle": ["The photographer changed the angle to include the whole bridge.", "攝影師改變角度，好把整座橋都拍進畫面。"],
  "angler": ["The angler released the fish after taking a photo.", "這名釣客拍照後將魚放回水裡。"],
  "animation": ["The studio used hand-drawn animation for the opening scene.", "工作室在開場場景使用手繪動畫。"],
  "anniversary": ["They celebrated their tenth anniversary with a quiet dinner.", "他們以一頓安靜的晚餐慶祝十週年紀念日。"],
  "announcer": ["The announcer introduced the next performer.", "播報員介紹下一位表演者。"],
  "annuity": ["After retiring, she receives a monthly annuity from her pension plan.", "退休後，她從退休金計畫中每月領取年金。"],
  "ant": ["An ant carried a crumb across the kitchen floor.", "一隻螞蟻拖著麵包屑穿過廚房地板。"],
  "anthropologist": ["The anthropologist spent years studying the community's traditions.", "這名人類學家花了數年研究該社群的傳統。"],
  "anthropology": ["She chose anthropology because she enjoys learning about different cultures.", "她選擇人類學，因為喜歡了解不同文化。"],
  "antibody": ["The vaccine helps the body produce antibodies.", "疫苗有助於身體產生抗體。"],
  "antivirus": ["Install antivirus software before connecting the new computer to the internet.", "新電腦連上網路前，請先安裝防毒軟體。"],
  "anxiety": ["Deep breathing can help reduce anxiety before an exam.", "深呼吸有助於減輕考試前的焦慮。"],
  "apartment building": ["The elevator in our apartment building is being repaired.", "我們公寓大樓的電梯正在維修。"],
  "aperture": ["A wider aperture lets more light into the camera.", "較大的光圈能讓更多光線進入相機。"],
  "apology": ["He offered a sincere apology for arriving late.", "他為遲到誠懇地道歉。"],
  "appendix": ["The chart is included in the appendix at the end of the report.", "這張圖表收錄在報告末尾的附錄中。"],
  "applause": ["The audience gave the singer a long round of applause.", "觀眾為歌手報以長時間的掌聲。"],
  "apprentice": ["The apprentice watched the mechanic repair the engine.", "學徒看著技師修理引擎。"],
  "appropriation": ["The legislature approved an appropriation for flood prevention.", "立法機關核准了一筆用於防洪的撥款。"],
  "aptitude": ["She has a natural aptitude for learning languages.", "她有學習語言的天賦。"],
  "aquarium": ["We watched colorful fish swim through the tunnel at the aquarium.", "我們在水族館看著色彩繽紛的魚游過隧道。"],
  "arbitrator": ["The arbitrator listened to both sides before making a decision.", "仲裁人在作出決定前聽取雙方說法。"],
  "arch": ["The old stone arch framed the entrance to the garden.", "古老的石拱門框住了花園入口。"],
  "archaeologist": ["The archaeologist carefully brushed sand from the pottery.", "考古學家小心地刷去陶器上的沙土。"],
  "architect": ["The architect designed a library with large windows.", "建築師設計了一座有大片窗戶的圖書館。"],
  "architecture": ["The city's modern architecture attracts many visitors.", "這座城市的現代建築吸引許多遊客。"],
  "argument": ["Their argument started over something very small.", "他們因一件小事起了爭論。"],
  "armor": ["The museum displayed a suit of medieval armor.", "博物館展示了一套中世紀盔甲。"],
  "army": ["The army sent engineers to repair the damaged bridge.", "軍隊派遣工程人員修復受損的橋梁。"],
  "aroma": ["The aroma of fresh bread filled the kitchen.", "新鮮麵包的香氣充滿廚房。"],
  "arrow": ["The arrow on the sign points toward the exit.", "標誌上的箭頭指向出口。"],
  "art gallery": ["Her paintings will be shown at a local art gallery.", "她的畫作將在當地藝廊展出。"],
  "artery": ["The doctor found a blockage in one of his arteries.", "醫師在他的一條動脈中發現阻塞。"],
  "arthritis": ["My grandmother uses a warm compress to ease her arthritis.", "我的祖母用溫熱敷來減輕關節炎的不適。"],
  "artifact": ["The museum displayed an ancient artifact found near the river.", "博物館展示了一件在河邊發現的古代人工製品。"],
  "artisan": ["An artisan carved the bowl from a single piece of wood.", "一名工匠用一整塊木頭雕出這個碗。"],
  "assemblage": ["The exhibit is an assemblage of photographs, letters, and maps.", "這場展覽是一組由照片、信件和地圖構成的集合。"],
  "assertion": ["His assertion that the train was late was easy to verify.", "他聲稱火車誤點，這個說法很容易查證。"],
  "assessment": ["The teacher gave each student a short reading assessment.", "老師給每位學生一份簡短的閱讀評估。"],
  "assessor": ["The property assessor visited the house last week.", "不動產評估員上週查看了這棟房子。"],
  "association": ["She joined a professional association for young engineers.", "她加入了青年工程師的專業協會。"],
  "assurance": ["The manager gave us an assurance that the problem would be fixed.", "經理向我們保證這個問題會被解決。"]
});

// Correct the displayed headword data when the original expansion assigned an
// inaccurate meaning or part of speech.  The example above uses these senses.
Object.assign(CURATED_NATURAL_MEANINGS, {
  "angler": "釣客；釣魚者",
  "analog": "類比式；類比裝置"
});
Object.assign(CURATED_NATURAL_POS, {
  "analog": "adj.／n."
});
