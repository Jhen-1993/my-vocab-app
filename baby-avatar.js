/* Whole painted cels: animation without image warping or blended limbs. */
(function(root){
 'use strict';
 const actions=[{"name":"閉嘴、微笑、張嘴 · 抱奶瓶喝奶","frames":6,"poses":[[0,1800],[1,1500],[2,1200],[1,1200],[0,1400],[5,300],[3,260],[4,2400],[3,260],[4,1800],[3,260],[5,400],[0,2000],[1,1600],[0,3000]]},{"name":"手腳交替爬行","frames":4,"poses":[[0,190],[1,160],[2,190],[3,160],[2,190],[1,160],[0,190]]},{"name":"張手保持平衡 · 輪流抬腳學步","frames":4,"poses":[[0,260],[1,220],[2,260],[3,220],[2,260],[1,220],[0,500]]},{"name":"蹲下蓄力 · 抬腳蹦跳 · 落地","frames":4,"poses":[[0,800],[1,150],[2,220],[3,180],[0,900]]},{"name":"拿起積木 · 疊上積木塔","frames":4,"poses":[[0,1000],[1,380],[2,350],[3,1400],[2,350],[1,380],[0,1000]]},{"name":"背著書包揮手打招呼","frames":4,"poses":[[0,1000],[1,220],[2,220],[1,220],[2,220],[3,350],[2,220],[1,220],[0,1400]]},{"name":"閱讀 · 抬手調整耳機","frames":4,"poses":[[0,1500],[1,350],[2,600],[3,600],[2,350],[1,350],[0,1800]]},{"name":"低頭寫筆記 · 抬頭微笑","frames":4,"poses":[[0,1000],[1,350],[2,400],[1,350],[2,400],[1,350],[3,1400],[0,1000]]},{"name":"閱讀 · 翻動書頁 · 抬頭","frames":4,"poses":[[0,1500],[1,350],[2,500],[1,350],[0,1000],[3,1000],[0,1200]]},{"name":"操作電腦 · 抬頭微笑","frames":4,"poses":[[0,1200],[1,300],[0,300],[1,300],[2,1000],[3,700],[2,500],[1,300],[0,1200]]}];
 const poses=[0,0,1,2,2,0,1,1,0,0];
 function render(stage,gender){
  stage=Math.max(0,Math.min(9,Math.floor(Number(stage)||0)));
  gender=gender==='girl'?'girl':'boy';
  const action=actions[stage],file='assets/painted/'+gender+'-'+stage+'-cels.webp';
  const src=root.BABY_ART_ASSETS&&root.BABY_ART_ASSETS[file]||file;
  const image=cls=>'<img class="'+cls+'" src="'+src+'" width="'+(320*action.frames)+'" height="360" alt="" aria-hidden="true" draggable="false">';
  return '<span class="baby-illustration baby-painted painted-cels painted-stage-'+stage+'" role="img" aria-label="'+(gender==='girl'?'女寶':'男寶')+' · '+action.name+'" style="--cel-width:'+(action.frames*100)+'%">'+
   '<span class="painted-motion">'+(stage===0?'<span class="painted-idle-anchor">'+image('painted-anchor')+'</span>':'')+
   '<span class="painted-window">'+image('painted-strip')+'</span></span><span class="painted-love" aria-hidden="true">♡</span></span>';
 }
 root.BabyAvatar={render,actions,poses};
})(typeof window==='object'?window:globalThis);
