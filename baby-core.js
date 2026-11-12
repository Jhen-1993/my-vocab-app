/* 寶寶養成規則：與畫面分離，使用本地日期；同一單字每日只計分一次。 */
(function(root){
  'use strict';
  const goals = [5, 10, 15];
  const stages = [
    {xp:0, name:'初生寶寶', note:'每一個新單字，都是長大的養分。'},
    {xp:90, name:'爬爬寶寶', note:'開始探索世界，也開始認識更多單字。'},
    {xp:240, name:'學步寶寶', note:'一步一步，和你一起走得更遠。'},
    {xp:600, name:'活力幼兒', note:'帶著好奇心，發現英文裡的小宇宙。'},
    {xp:1200, name:'幼兒園', note:'背好小書包，和你一起認識新朋友。'},
    {xp:2400, name:'小學生', note:'每天學一點，累積大大的勇氣。'},
    {xp:4500, name:'國中生', note:'有你一起練習，困難的單字也不怕。'},
    {xp:7500, name:'高中生', note:'找到喜歡的方向，朝夢想慢慢前進。'},
    {xp:12000, name:'大學生', note:'帶著學會的英文，去看更大的世界。'},
    {xp:18000, name:'大人', note:'我們一起長大了，學習的故事仍在繼續。'}
  ];
  const rooms = [{id:'peach',name:'奶油小屋',cost:0},{id:'mint',name:'薄荷花園',cost:3},{id:'lavender',name:'星空夢境',cost:6}];
  function normalize(raw){
    const p = raw && typeof raw === 'object' && !Array.isArray(raw) ? raw : {};
    const legacy=p.version!==2;
    p.motion = p.motion !== false;
    // 只在新建或舊存檔缺少性別時抽取；重繪、改名與成長不會重抽。
    if(p.gender !== 'boy' && p.gender !== 'girl')p.gender = Math.random() < 0.5 ? 'boy' : 'girl';
    p.name = typeof p.name === 'string' && p.name.trim() ? p.name.trim().slice(0,20) : '快樂小寶';
    p.goal = goals.includes(p.goal) ? p.goal : 5;
    p.stars = Number.isSafeInteger(p.stars) && p.stars >= 0 ? p.stars : 0;
    p.days = p.days && typeof p.days === 'object' && !Array.isArray(p.days) ? p.days : {};
    for(const key of Object.keys(p.days)){
      const d = p.days[key];
      if(!/^\d{4}-\d{2}-\d{2}$/.test(key) || !d || typeof d !== 'object'){delete p.days[key];continue;}
      d.goal = goals.includes(d.goal) ? d.goal : p.goal;
      d.words = [...new Set((Array.isArray(d.words) ? d.words : []).filter(w=>typeof w==='string').map(wordKey))].slice(0,d.goal);
      d.completed = d.words.length >= d.goal;
      d.gameReward = d.gameReward === true;
      d.routineReward = d.routineReward === true;
      d.gameWords = [...new Set((Array.isArray(d.gameWords)?d.gameWords:[]).filter(w=>typeof w==='string').map(wordKey))].slice(0,20);
    }
    // 舊版達標日換成成長值；重複載入不得重複補發。
    if(legacy || !Number.isSafeInteger(p.xp) || p.xp<0)p.xp=Object.values(p.days).filter(d=>d.completed).length*30;
    p.version=2;
    p.owned = [...new Set(['peach'].concat(Array.isArray(p.owned) ? p.owned.filter(x=>rooms.some(r=>r.id===x)) : []))];
    p.room = p.owned.includes(p.room) ? p.room : 'peach';
    return p;
  }
  function wordKey(word){ return String(word).trim().toLowerCase().replace(/\s+/g,' '); }
  function day(p,date){
    if(!p.days[date]) p.days[date] = {words:[],goal:p.goal,completed:false,gameReward:false,routineReward:false,gameWords:[]};
    // 未開始作答前可以變更目標；開始後鎖定當日目標。
    if(!p.days[date].words.length) p.days[date].goal = p.goal;
    return p.days[date];
  }
  function award(p,date,word){
    const d = day(p,date), key = wordKey(word);
    if(!key || d.completed || d.words.includes(key)) return {added:false,grew:false,xp:0};
    d.words.push(key);
    const grew = d.words.length >= d.goal;
    if(grew){ d.completed = true; p.stars += 3; p.xp+=30; }
    return {added:true,grew,xp:grew?30:0};
  }
  function awardGame(p,date,word){
    const d=day(p,date),key=wordKey(word);
    if(!key || d.gameWords.includes(key) || d.gameWords.length>=20)return 0;
    d.gameWords.push(key);p.xp+=2;return 2;
  }
  function finishRoutine(p,date){
    const d=day(p,date);
    if(d.routineReward)return false;
    d.routineReward=true;p.xp+=20;return true;
  }
  function finishGame(p,date){
    const d = day(p,date);
    if(d.gameReward) return false;
    d.gameReward = true; p.stars++; p.xp+=5; return true;
  }
  function summary(p,date,previousDate){
    const dates = Object.keys(p.days).filter(k=>k<=date && p.days[k].completed).sort();
    let streak=0, cursor=p.days[date] && p.days[date].completed ? date : previousDate(date);
    while(p.days[cursor] && p.days[cursor].completed){streak++;cursor=previousDate(cursor);}
    const index = stages.reduce((a,s,i)=>p.xp>=s.xp ? i : a,0);
    const adultLevel=index===stages.length-1?1+Math.floor((p.xp-stages[index].xp)/1000):0;
    const start=adultLevel?stages[index].xp+(adultLevel-1)*1000:stages[index].xp;
    const next=stages[index+1] || {xp:start+1000,name:'成人 Lv.'+(adultLevel+1)};
    return {days:dates.length,streak,index,stage:stages[index],next,adultLevel,xp:p.xp,progress:Math.floor((p.xp-start)/(next.xp-start)*100),today:day(p,date)};
  }
  function buy(p,id){
    const room=rooms.find(r=>r.id===id);
    if(!room) return false;
    if(!p.owned.includes(id)){
      if(p.stars < room.cost) return false;
      p.stars -= room.cost; p.owned.push(id);
    }
    p.room=id; return true;
  }
  const api={normalize,day,award,awardGame,finishRoutine,finishGame,summary,buy,wordKey,stages,rooms};
  if(typeof module==='object' && module.exports) module.exports=api;
  else root.BabyCore=api;
})(typeof window==='object' ? window : globalThis);
