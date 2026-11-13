/* Whole painted cels: animation without image warping or blended limbs. */
(function(root){
 'use strict';
 const actions=[{"name":"閉嘴、微笑、張嘴 · 抱奶瓶喝奶","frames":6,"poses":[[0,1800],[1,1500],[2,1200],[1,1200],[0,1400],[5,300],[3,260],[4,2400],[3,260],[4,1800],[3,260],[5,400],[0,2000],[1,1600],[0,3000]]},{"name":"手腳交替爬行","frames":4,"poses":[[0,190],[1,160],[2,190],[3,160],[2,190],[1,160],[0,190]]},{"name":"張手保持平衡 · 輪流抬腳學步","frames":4,"poses":[[0,260],[1,220],[2,260],[3,220],[2,260],[1,220],[0,500]]},{"name":"蹲下蓄力 · 抬腳蹦跳 · 落地","frames":4,"poses":[[0,800],[1,150],[2,220],[3,180],[0,900]]},{"name":"拿起積木 · 疊上積木塔","frames":4,"poses":[[0,1000],[1,380],[2,350],[3,1400],[2,350],[1,380],[0,1000]]},{"name":"背著書包揮手打招呼","frames":4,"poses":[[0,1000],[1,220],[2,220],[1,220],[2,220],[3,350],[2,220],[1,220],[0,1400]]},{"name":"閱讀 · 抬手調整耳機","frames":4,"poses":[[0,1500],[1,350],[2,600],[3,600],[2,350],[1,350],[0,1800]]},{"name":"低頭寫筆記 · 抬頭微笑","frames":4,"poses":[[0,1000],[1,350],[2,400],[1,350],[2,400],[1,350],[3,1400],[0,1000]]},{"name":"閱讀 · 翻動書頁 · 抬頭","frames":4,"poses":[[0,1500],[1,350],[2,500],[1,350],[0,1000],[3,1000],[0,1200]]},{"name":"操作電腦 · 抬頭微笑","frames":4,"poses":[[0,1200],[1,300],[0,300],[1,300],[2,1000],[3,700],[2,500],[1,300],[0,1200]]}];
 const poses=[0,0,1,2,2,0,1,1,0,0];
 const variants={"sunny-girl":{"0":{"name":"微笑、張嘴 · 抱奶瓶喝奶","frames":4,"poses":[[0,1700],[1,1200],[2,450],[3,2200],[2,450],[1,1200],[0,1800]]},"4":{"name":"握好跳繩 · 蹦跳過繩","frames":4,"poses":[[0,300],[1,250],[2,250],[3,300],[0,350]]},"7":{"name":"辯論練習 · 自信表達","frames":4,"poses":[[0,1400],[1,500],[2,700],[3,1200],[2,700],[1,500],[0,1400]]},"8":{"name":"研讀法律 · 翻閱法學書","frames":4,"poses":[[0,1400],[1,500],[2,700],[3,1200],[2,700],[1,500],[0,1400]]},"9":{"name":"查閱案件 · 從容陳述","frames":4,"poses":[[0,1400],[1,500],[2,700],[3,1200],[2,700],[1,500],[0,1400]]}},"sunny-boy":{"0":{"name":"微笑、張嘴 · 抱奶瓶喝奶","frames":4,"poses":[[0,1700],[1,1200],[2,450],[3,2200],[2,450],[1,1200],[0,1800]]},"4":{"name":"拍拍小球 · 接住抱好","frames":4,"poses":[[0,650],[1,300],[2,350],[3,700],[0,650]]},"7":{"name":"校隊練習 · 穩定運球","frames":4,"poses":[[0,900],[1,230],[2,230],[1,230],[3,800],[0,500]]},"8":{"name":"大學校隊 · 準備投籃","frames":4,"poses":[[0,1100],[1,450],[2,400],[3,700],[2,350],[1,350],[0,1200]]},"9":{"name":"籃球國手 · 控球練習","frames":4,"poses":[[0,1100],[1,230],[2,230],[1,230],[2,230],[1,230],[3,900],[0,700]]}},"sweet-girl":{"0":{"name":"微笑、張嘴 · 抱奶瓶喝奶","frames":4,"poses":[[0,1700],[1,1200],[2,450],[3,2200],[2,450],[1,1200],[0,1800]]},"4":{"name":"抱抱洋娃娃 · 溫柔哄睡","frames":4,"poses":[[0,1400],[1,500],[2,700],[3,1200],[2,700],[1,500],[0,1400]]},"7":{"name":"觀察構圖 · 畫下靈感","frames":4,"poses":[[0,1400],[1,500],[2,700],[3,1200],[2,700],[1,500],[0,1400]]},"8":{"name":"研讀藝術 · 翻閱展覽畫冊","frames":4,"poses":[[0,1400],[1,500],[2,700],[3,1200],[2,700],[1,500],[0,1400]]},"9":{"name":"策劃展覽 · 介紹畫廊作品","frames":4,"poses":[[0,1400],[1,500],[2,700],[3,1200],[2,700],[1,500],[0,1400]]}},"calm-boy":{"0":{"name":"微笑、張嘴 · 抱奶瓶喝奶","frames":4,"poses":[[0,1700],[1,1200],[2,450],[3,2200],[2,450],[1,1200],[0,1800]]},"4":{"name":"組裝積木機器人","frames":4,"poses":[[0,1400],[1,500],[2,700],[3,1200],[2,700],[1,500],[0,1400]]},"7":{"name":"機器人社團 · 調整零件","frames":4,"poses":[[0,1400],[1,500],[2,700],[3,1200],[2,700],[1,500],[0,1400]]},"8":{"name":"工程實作 · 測試機器人","frames":4,"poses":[[0,1400],[1,500],[2,700],[3,1200],[2,700],[1,500],[0,1400]]},"9":{"name":"研發機器人 · 精密調校","frames":4,"poses":[[0,1400],[1,500],[2,700],[3,1200],[2,700],[1,500],[0,1400]]}}};
 const masterAction={name:'輕撥佛珠 · 垂目微笑',frames:4,poses:[[0,2000],[1,500],[2,350],[1,500],[0,1800],[3,1200],[0,2000]]};
 variants['master-boy']={9:masterAction};variants['master-girl']={9:masterAction};
 const blueCareerPoses=[[0,1200],[1,450],[2,450],[3,800],[2,450],[1,450],[0,1200]];
 variants['blue-boy']={};variants['blue-girl']={};
 for(const [id,names] of [['blue-boy',['背著小提琴去上課 · 揮手','弦樂團練習 · 拉奏小提琴','校園演奏 · 專注運弓','音樂主修 · 練習樂曲','小提琴家 · 溫柔演奏']],['blue-girl',['翻閱太空圖鑑 · 認識星球','天文社觀星 · 舉起望遠鏡','科學專題 · 調整火箭模型','航太研究 · 測試衛星模型','太空人 · 抱著頭盔揮手']]]){
  names.forEach((name,i)=>{variants[id][i+5]={name,frames:4,poses:blueCareerPoses};});
 }
 function actionFor(stage,id){if(stage===6&&id==='calm-boy')return {...actions[6],name:'閱讀 · 抬手調整眼鏡'};return variants[id]&&variants[id][stage]||actions[stage];}
 function render(stage,gender,characterId){
  stage=Math.max(0,Math.min(9,Math.floor(Number(stage)||0)));
  gender=gender==='girl'?'girl':'boy';
  const identity=root.BabyCore&&root.BabyCore.character(characterId);
  const variant=identity&&variants[identity.id]&&(!identity.id.startsWith('master-')||stage===9)&&(!identity.id.startsWith('blue-')||stage>=5)?identity.id:null;
  if(identity)gender=identity.gender;
  const action=actionFor(stage,variant),file='assets/painted/'+(identity?identity.asset:gender)+'-'+stage+'-cels.webp';
  const src=root.BABY_ART_ASSETS&&root.BABY_ART_ASSETS[file]||file;
  const image=cls=>'<img class="'+cls+'" src="'+src+'" width="'+(320*action.frames)+'" height="360" alt="" aria-hidden="true" draggable="false">';
  return '<span class="baby-illustration baby-painted painted-cels painted-stage-'+stage+(variant?' painted-variant painted-'+variant:'')+'" role="img" aria-label="'+(gender==='girl'?'女寶':'男寶')+' · '+action.name+'" style="--cel-width:'+(action.frames*100)+'%">'+
   '<span class="painted-motion">'+(stage===0&&!variant?'<span class="painted-idle-anchor">'+image('painted-anchor')+'</span>':'')+
   '<span class="painted-window">'+image('painted-strip')+'</span></span><span class="painted-love" aria-hidden="true">♡</span></span>';
 }
 root.BabyAvatar={render,actions,poses,actionFor,variants};
})(typeof window==='object'?window:globalThis);
