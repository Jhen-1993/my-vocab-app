/* 寶寶養成規則：與畫面分離，使用本地日期；同一單字每日只計分一次。 */
(function(root){
  'use strict';
  const goals = [5, 10, 15];
  const characters = [
    {id:'blue-boy',gender:'boy',asset:'boy',name:'藍衣男寶',career:'小提琴家'},
    {id:'blue-girl',gender:'girl',asset:'girl',name:'藍衣女寶',career:'太空人'},
    {id:'sunny-girl',gender:'girl',asset:'sunny-girl',name:'黃衣女寶',career:'幹練律師'},
    {id:'sunny-boy',gender:'boy',asset:'sunny-boy',name:'綠衣男寶',career:'籃球國手'},
    {id:'sweet-girl',gender:'girl',asset:'sweet-girl',name:'粉衣女寶',career:'畫廊老闆'},
    {id:'calm-boy',gender:'boy',asset:'calm-boy',name:'灰衣男寶',career:'機器人工程師'}
  ];
  const hiddenCharacters = ['boy','girl'].map(gender=>({id:'master-'+gender,gender,asset:'master-'+gender,name:'弘法大師',career:'弘法大師'}));
  const masterVerses = [
    ['無上甚深微妙法','百千萬劫難遭遇','我今見聞得受持','願解如來真實義'],
    ['一切有為法','如夢幻泡影','如露亦如電','應作如是觀']
  ];
  function character(id){return characters.concat(hiddenCharacters).find(c=>c.id===id);}
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
  const rooms = [{id:'peach',name:'奶油小屋',cost:0},{id:'mint',name:'薄荷花園',cost:3},{id:'lavender',name:'星空夢境',cost:6},{id:'starry',name:'銀河旋轉木馬小屋',milestone:30}];
  const accessories = [
    {id:'rose-bow',name:'莓果蝴蝶結',cost:6},
    {id:'blue-bow',name:'天空蝴蝶結',cost:9},
    {id:'star-clip',name:'星星髮夾',cost:12},
    {id:'beret',name:'奶茶貝雷帽',cost:18},
    {id:'bucket-hat',name:'薄荷漁夫帽',cost:24},
    {id:'crown',name:'小星光皇冠',cost:30},
    {id:'clover-clip',name:'幸運草髮夾',milestone:7,legacy:true},
    {id:'moon-crown',name:'月光皇冠',milestone:30,legacy:true},
    {id:'hero-cape',name:'小超人披風',milestone:14}
  ];
  const loginRewards=[{days:7,id:'giant-teddy',kind:'decoration',name:'超大可愛泰迪熊'},{days:14,id:'hero-cape',kind:'accessory',name:'小超人披風'},{days:30,id:'starry',kind:'room',name:'銀河旋轉木馬小屋'}];
  function normalize(raw){
    const p = raw && typeof raw === 'object' && !Array.isArray(raw) ? raw : {};
    const isNew=Object.keys(p).length===0;
    const legacy=p.version!==2;
    p.motion = p.motion !== false;
    // 舊寶寶沿用原本藍衣形象；新建時六選一，之後依持久化身分呈現。
    let identity=characters.find(c=>c.id===p.characterId);
    if(!identity){
      if(p.gender==='boy'||p.gender==='girl')identity=character('blue-'+p.gender);
      else if(Object.keys(p).some(k=>k!=='motion'))identity=character(Math.random()<0.5?'blue-boy':'blue-girl');
      else identity=characters[Math.floor(Math.random()*characters.length)];
    }
    p.characterId=identity.id;p.gender=identity.gender;
    // 外觀與隱藏成長路線獨立；只在全新寶寶建立時抽取，舊資料不補抽。
    p.hiddenMaster=isNew?Math.random()<0.02:p.hiddenMaster===true;
    p.masterRevealed=p.hiddenMaster&&p.masterRevealed===true;
    p.masterVerse=p.hiddenMaster?(isNew?Math.floor(Math.random()*masterVerses.length):(p.masterVerse===1?1:0)):0;
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
    p.ownedAccessories = [...new Set((Array.isArray(p.ownedAccessories) ? p.ownedAccessories : []).filter(id=>accessories.some(a=>a.id===id)))];
    p.accessory = p.ownedAccessories.includes(p.accessory) ? p.accessory : null;
    // Preserve previously earned items without reissuing retired study-streak rewards.
    p.claimedStreakRewards = [...new Set((Array.isArray(p.claimedStreakRewards)?p.claimedStreakRewards:[]).filter(n=>n===7||n===30))];
    const oldVisits=p.loginTrackingVersion===1?[]:Object.keys(p.days);
    p.loginDays=[...new Set(oldVisits.concat(Array.isArray(p.loginDays)?p.loginDays:[]).filter(validDate))].sort();
    p.loginTrackingVersion=1;
    p.claimedLoginRewards=[...new Set((Array.isArray(p.claimedLoginRewards)?p.claimedLoginRewards:[]).filter(n=>loginRewards.some(r=>r.days===n)))];
    p.ownedDecorations=[...new Set((Array.isArray(p.ownedDecorations)?p.ownedDecorations:[]).filter(id=>id==='giant-teddy'))];
    p.teddyVisible=p.ownedDecorations.includes('giant-teddy')&&p.teddyVisible!==false;
    return p;
  }
  function wordKey(word){ return String(word).trim().toLowerCase().replace(/\s+/g,' '); }
  function needsMasterReveal(p){return p.hiddenMaster===true&&p.xp>=stages[9].xp&&!p.masterRevealed;}
  function revealMaster(p){if(!needsMasterReveal(p))return false;p.masterRevealed=true;return true;}
  function appearance(p){
    const index=stages.reduce((a,s,i)=>p.xp>=s.xp?i:a,0);
    // 偈語確認前停留在大學生外觀，不閃現一般職業，也不提前載入隱藏成體。
    return {stage:needsMasterReveal(p)?8:index,gender:p.gender,characterId:index===9&&p.hiddenMaster&&p.masterRevealed?'master-'+p.gender:p.characterId};
  }
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
    if(grew){ d.completed = true; p.stars += 3; p.xp+=goalXP(d.goal); }
    return {added:true,grew,xp:grew?goalXP(d.goal):0,milestones:[]};
  }
  function goalXP(goal){return (goals.includes(goal)?goal:5)*6;}
  function previousDay(date){
    const d=new Date(date+'T12:00:00Z');d.setUTCDate(d.getUTCDate()-1);
    return d.toISOString().slice(0,10);
  }
  function streakFor(p,date,previousDate=previousDay){
    let streak=0,cursor=p.days[date]&&p.days[date].completed?date:previousDate(date);
    while(p.days[cursor]&&p.days[cursor].completed){streak++;cursor=previousDate(cursor);}
    return streak;
  }
  function validDate(value){
    if(typeof value!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(value))return false;
    const d=new Date(value+'T12:00:00Z');return Number.isFinite(d.getTime())&&d.toISOString().slice(0,10)===value;
  }
  function loginStreak(p,date){
    const dates=new Set(p.loginDays),start=dates.has(date)?date:previousDay(date);
    let cursor=start,count=0;while(dates.has(cursor)){count++;cursor=previousDay(cursor);}return count;
  }
  function recordLogin(p,date){
    if(!validDate(date))return {added:false,rewards:[],streak:0};
    const added=!p.loginDays.includes(date);
    if(added){p.loginDays.push(date);p.loginDays.sort();}
    const streak=loginStreak(p,date),rewards=[];
    for(const reward of loginRewards){
      if(streak<reward.days||p.claimedLoginRewards.includes(reward.days))continue;
      const collection=reward.kind==='room'?p.owned:reward.kind==='accessory'?p.ownedAccessories:p.ownedDecorations;
      if(!collection.includes(reward.id))collection.push(reward.id);
      if(reward.kind==='decoration')p.teddyVisible=true;
      p.claimedLoginRewards.push(reward.days);rewards.push(reward);
    }
    return {added,rewards,streak};
  }
  function toggleTeddy(p){if(!p.ownedDecorations.includes('giant-teddy'))return false;p.teddyVisible=!p.teddyVisible;return true;}
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
    const streak=streakFor(p,date,previousDate);
    const index = stages.reduce((a,s,i)=>p.xp>=s.xp ? i : a,0);
    const adultLevel=index===stages.length-1?1+Math.floor((p.xp-stages[index].xp)/1000):0;
    const start=adultLevel?stages[index].xp+(adultLevel-1)*1000:stages[index].xp;
    const next=stages[index+1] || {xp:start+1000,name:'成人 Lv.'+(adultLevel+1)};
    const identity=character(appearance(p).characterId);
    const stage=needsMasterReveal(p)?{...stages[8],name:'成長的轉捩點',note:'一段新的旅程，正等著與你相遇。'}:index===9&&identity&&identity.career?{...stages[index],name:identity.career,...(p.hiddenMaster&&p.masterRevealed?{note:'願以智慧與慈悲，陪你繼續學習。'}:{})}:stages[index];
    return {days:dates.length,streak,index,stage,next,adultLevel,xp:p.xp,progress:Math.floor((p.xp-start)/(next.xp-start)*100),today:day(p,date)};
  }
  function buy(p,id){
    const room=rooms.find(r=>r.id===id);
    if(!room) return false;
    if(!p.owned.includes(id)){
      if(room.milestone)return false;
      if(p.stars < room.cost) return false;
      p.stars -= room.cost; p.owned.push(id);
    }
    p.room=id; return true;
  }
  function buyAccessory(p,id){
    const item=accessories.find(a=>a.id===id);
    if(!item||item.milestone)return false;
    if(!p.ownedAccessories.includes(id)){
      if(p.stars<item.cost)return false;
      p.stars-=item.cost;p.ownedAccessories.push(id);
    }
    p.accessory=id;return true;
  }
  function wearAccessory(p,id){
    if(id!==null&&!p.ownedAccessories.includes(id))return false;
    p.accessory=id;return true;
  }
  const api={normalize,day,award,awardGame,finishRoutine,finishGame,summary,buy,buyAccessory,wearAccessory,accessories,goalXP,recordLogin,loginStreak,loginRewards,toggleTeddy,wordKey,stages,rooms,characters,character,hiddenCharacters,masterVerses,needsMasterReveal,revealMaster,appearance};
  if(typeof module==='object' && module.exports) module.exports=api;
  else root.BabyCore=api;
})(typeof window==='object' ? window : globalThis);
