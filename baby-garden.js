/* 使用既有單字與儲存管道，遊戲不更動間隔複習排程。 */
window.BabyGarden = {create:function(app){
  'use strict';
  const C=window.BabyCore, h=app.escape, home=document.getElementById('panel-home'), games=document.getElementById('panel-games');
  let game=null, mode='choice', level='beginner', length=5;
  const pet=()=>{const d=app.data(); return d.companion || (d.companion=C.normalize());};
  const info=()=>C.summary(pet(),app.today(),d=>app.addDays(d,-1));
  let toastTimer;
  function toast(message){
    const el=document.getElementById('garden-toast'); el.textContent=message; el.hidden=false;
    clearTimeout(toastTimer); toastTimer=setTimeout(()=>{el.hidden=true;},4500);
  }
  function baby(){const a=C.appearance(pet());return window.BabyAvatar.render(a.stage,a.gender,a.characterId,pet().accessory);}
  let deferredMaster=null;
  function showMasterReveal(p,demo){
    const dialog=document.getElementById('master-reveal');
    if(!dialog||dialog.open||!C.needsMasterReveal(p))return;
    const content=document.getElementById('master-reveal-content');
    const focusBefore=document.activeElement;
    dialog.classList.toggle('motion-paused',p.motion===false);
    dialog.onclose=()=>{if(!demo&&!p.masterRevealed)deferredMaster=p;if(focusBefore&&focusBefore.isConnected&&focusBefore.focus)focusBefore.focus();};
    const lines=C.masterVerses[p.masterVerse===1?1:0],arrival=lines.length*1800+1400;
    content.innerHTML=`<div class="master-glow-stage"><div class="master-light-dust" aria-hidden="true">${Array.from({length:8},(_,i)=>`<i style="--dust:${i}"></i>`).join('')}</div><p class="garden-kicker">${demo?'測試用 · 成年前的相遇':'成年前的相遇'}</p><h2 id="master-reveal-title">一段新的因緣</h2><div class="master-verse master-emerging">${lines.map((line,i)=>`<p style="--line-delay:${1000+i*1800}ms">${h(line)}</p>`).join('')}</div><button class="garden-primary master-arrival" style="--reveal-delay:${arrival}ms" id="master-reveal-next">迎接新的成長</button></div><button class="garden-text" id="master-reveal-later">稍後再看</button>`;
    document.getElementById('master-reveal-later').onclick=()=>dialog.close();
    document.getElementById('master-reveal-next').onclick=async function(){
      if(this.disabled)return;this.disabled=true;
      // 資料匯入或重設後，不讓舊視窗改動另一位寶寶。
      if(!demo&&pet()!==p){dialog.close();checkMasterReveal();return;}
      if(!C.revealMaster(p))return;
      if(!demo){await app.save();renderHome();if(app.onAppearanceChange)app.onAppearanceChange();}
      const a=C.appearance(p);
      content.innerHTML=`<div class="master-glow-stage master-awakened"><p class="master-blessing">恭喜，遇見 2% 的福報因緣</p><h2 id="master-reveal-title">隱藏結局・了卻塵緣 六根清淨</h2><div class="master-reveal-avatar">${window.BabyAvatar.render(a.stage,a.gender,a.characterId,p.accessory)}</div><p class="master-message">${h(p.name)}，願以智慧與慈悲，陪你繼續學習。</p></div><button class="garden-primary" id="master-reveal-done">繼續一起學英文</button>`;
      document.getElementById('master-reveal-done').onclick=()=>dialog.close();
      document.getElementById('master-reveal-done').focus();
    };
    dialog.showModal();
  }
  function checkMasterReveal(){const p=pet();if(p!==deferredMaster&&C.needsMasterReveal(p))showMasterReveal(p,false);}
  let delightTimer;
  function renderHome(){
    if(!app.data()) return;
    const p=pet(), visit=C.recordLogin(p,app.today());
    if(visit.added||visit.rewards.length)app.save().then(()=>{if(visit.rewards.length)toast(milestoneMessage(visit.rewards));});
    const s=info(), d=s.today, percent=Math.round(d.words.length/d.goal*100);
    const week=Array.from({length:7},(_,i)=>app.addDays(app.today(),i-6));
    home.innerHTML=`
      <div class="garden-heading"><div><div class="garden-kicker">A LITTLE ENGLISH, A LITTLE GROWTH</div><h2>可愛小寶陪你一起學英文</h2><p>學幾個單字，陪 ${h(p.name)} 多認識一點世界。</p></div><span class="garden-date">${h(app.today().replace(/-/g,' / '))}</span></div>
      <div class="garden-layout">
        <section class="nursery room-${p.room} ${p.motion===false?'motion-paused':''}" aria-label="寶寶的小屋">
          <div class="room-top"><span class="room-pill">成長第 ${s.days} 天</span><div class="room-top-actions"><button class="baby-motion" id="baby-motion" aria-pressed="${p.motion!==false}" aria-label="寶寶自動動作">${p.motion===false?'播放動作':'暫停動作'}</button><span class="room-star">✦ ${p.stars} 星星</span></div></div>
          ${p.room==='starry'?'<div class="starry-meteors" aria-hidden="true"><i></i><i></i><i></i></div>':''}<div class="nursery-window"><i></i></div><span class="room-spark spark-one">✧</span><span class="room-spark spark-two">✦</span><div class="room-plant" aria-hidden="true">♧</div>
          <div class="baby-speech">${d.completed?'咿呀咿呀～小寶寶長大了！':'嘻嘻～陪寶寶學單字。'}</div>
          <div class="nursery-scene ${p.teddyVisible?'has-teddy':''}">${p.teddyVisible?'<img class="giant-teddy" src="assets/rewards/giant-teddy.webp" alt="超大可愛泰迪熊陪著小寶" width="640" height="740">':''}<button class="baby-button" id="pet-baby" aria-label="摸摸${h(p.name)}">${baby(s.index)}</button></div>
          <div class="baby-caption"><h3>${h(p.name)} <span>${p.gender==='girl'?'女寶':'男寶'} · ${s.stage.name}</span></h3><p>${s.stage.note}</p><p class="baby-touch-hint">摸摸寶寶的頭嘛～ ♡ </p></div>
          ${C.needsMasterReveal(p)?'<button class="garden-outline" id="master-resume">迎接新的成長</button>':''}<div class="growth-meter"><div><strong>成長值 ${s.xp.toLocaleString()} XP</strong><span>${s.adultLevel?'成人 Lv.'+s.adultLevel:s.stage.name}</span></div><div class="garden-progress" role="progressbar" aria-label="下一個成長階段" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${s.progress}"><span style="width:${s.progress}%"></span></div><p>距離 ${s.next.name} 還差 <b>${(s.next.xp-s.xp).toLocaleString()} XP</b></p></div><div class="room-floor"></div>
        </section>
        <div class="garden-right">
          <section class="daily-card"><div class="card-heading"><span class="garden-kicker">TODAY’S LITTLE STEPS</span><span class="soft-badge">${d.completed?'已達標 ✓':'每日任務'}</span></div><h3>${d.completed?'今天的成長養分已滿！':'給寶寶今天的成長養分'}</h3><p>不使用提示，答對 ${d.goal} 個不同的英文單字。</p><div class="goal-number">${d.words.length}<span> / ${d.goal} 個單字</span><span class="goal-percent">${percent}%</span></div><div class="garden-progress" role="progressbar" aria-label="今日學習目標" aria-valuenow="${d.words.length}" aria-valuemin="0" aria-valuemax="${d.goal}"><span style="width:${percent}%"></span></div><div class="reward-note">達標獎勵 <strong>+${C.goalXP(d.goal)} 成長值 · ✦ 3 星星</strong></div><button class="garden-primary" id="garden-learn">${d.completed?'再練習一下':'開始今日學習'} </button><button class="garden-text" id="garden-preview">先翻翻單字卡</button></section>
          <section class="growth-tasks" aria-label="今日成長任務"><div><span>${d.routineReward?'✓':'○'} 完成一輪今日填空</span><b>${d.routineReward?'已領取':'+20 XP'}</b></div><div><span>${d.gameReward?'✓':'○'} 完成第一回合遊戲</span><b>${d.gameReward?'已領取':'+5 XP · ✦ 1'}</b></div><div><span>遊戲答對新單字 ${d.gameWords.length}/20</span><b>每字 +2 XP</b></div></section>
          <div class="little-stats"><div><b>${s.streak}<small> 天</small></b><span>連續達標</span></div><div><b>${s.days}<small> 天</small></b><span>累積成長</span></div><div><b>${app.wordCount()}<small> 個</small></b><span>收藏單字</span></div></div>
        </div>
      </div>
      ${app.appearancePreview===true?`<details class="baby-looks ${p.motion===false?'motion-paused':''}"><summary>測試用：查看各階段外觀</summary><label for="baby-look-stage">成長階段</label><select id="baby-look-stage">${C.stages.map((st,i)=>`<option value="${i}" ${i===s.index?'selected':''}>${st.name} · ${st.xp.toLocaleString()} XP</option>`).join('')}</select><div id="baby-look-pair" class="baby-look-pair"></div><div id="master-test-controls" class="master-test-controls"></div></details>`:''}
      <div class="garden-section-heading"><h3>陪小寶一起玩遊戲</h3><span>每次 5 題，從小小的挑戰開始</span></div>
      <div class="game-shortcuts"><button class="game-shortcut" data-play="choice"><span class="game-icon peach-icon">Aa</span><div><span class="mini-label">WORD PICK</span><h3>單字選選樂</h3><p>看英文，找出正確的中文意思。</p></div></button><button class="game-shortcut" data-play="spell"><span class="game-icon lavender-icon">a_z</span><div><span class="mini-label">SPELL & GROW</span><h3>拼字小花園</h3><p>看中文，把記得的英文拼出來。</p></div></button></div>
      <div class="garden-bottom"><section class="journey-card"><div class="card-heading"><h3>我們的成長旅程</h3><span class="mini-label">GROW TOGETHER</span></div><div class="stage-path">${C.stages.map((st,i)=>`<div class="stage-stop ${i<=s.index?'reached':''}"><span>${['◒','❀','♧','✧','✿','▤','◇','☆','✦','♡'][i]}</span><b>${st.name}</b><small>${st.xp===0?'初次見面':st.xp.toLocaleString()+' XP'}</small></div>`).join('')}</div><p class="journey-note">再累積 ${(s.next.xp-s.xp).toLocaleString()} 成長值，就能到達「${s.next.name}」。<br>成年後每 1,000 XP 再升一級，學習不會到期。偶爾休息也不會倒退。</p><div class="week-row">${week.map(date=>`<div class="${p.days[date]&&p.days[date].completed?'done':''}"><span>${['日','一','二','三','四','五','六'][new Date(date+'T12:00:00').getDay()]}</span><b title="${date}">${p.days[date]&&p.days[date].completed?'✓':date.slice(8)}</b></div>`).join('')}</div></section>
      <section class="personalize-card"><div class="card-heading"><h3>寶寶的小日常</h3><span aria-hidden="true">✿</span></div><form id="baby-settings"><label for="baby-name">寶寶的名字</label><div class="name-row"><input id="baby-name" maxlength="20" required value="${h(p.name)}"><button class="garden-outline" type="submit">儲存</button></div><label for="baby-goal">寶寶每日成長目標</label><select id="baby-goal">${[5,10,15].map(n=>`<option value="${n}" ${p.goal===n?'selected':''}>${n} 個單字 · ${C.goalXP(n)} XP${n===5?' · 輕鬆起步':n===10?' · 穩定練習':' · 挑戰自己'}</option>`).join('')}</select><p class="settings-note">此為成長獎勵門檻；今日字卡份量在進入時另選 15／20／30 個。開始作答後，更改成長目標於隔日生效。</p></form><label>換個小屋布置</label><div class="room-options">${C.rooms.map(r=>`<button class="room-option ${p.room===r.id?'selected':''}" data-room="${r.id}" ${!p.owned.includes(r.id)&&(r.milestone||p.stars<r.cost)?'disabled':''}><span class="swatch room-${r.id}"></span>${r.name}<small>${p.room===r.id?'使用中':p.owned.includes(r.id)?'已擁有':r.milestone?'登入 '+r.milestone+' 天':'✦ '+r.cost}</small></button>`).join('')}</div></section></div>
      ${wardrobe(p,s)}
      <p class="garden-footnote">成長從啟用新版後開始計算。複習與遊戲共用每日目標，每日目標與填空完成獎勵各領一次；遊戲新單字每字 +2 XP，每天最多 20 字。</p>`;
    clearTimeout(delightTimer);
    const renderLooks=()=>{const stage=Number(document.getElementById('baby-look-stage').value)||0;document.getElementById('baby-look-pair').innerHTML=C.characters.map(c=>`<div><h4>${c.name}${stage===9&&c.career?' · '+c.career:''}</h4>${window.BabyAvatar.render(stage,c.gender,c.id)}<p>${window.BabyAvatar.actionFor(stage,c.id).name}</p></div>`).join('');};
    if(app.appearancePreview===true){document.getElementById('baby-look-stage').onchange=renderLooks;renderLooks();
      const preview=document.getElementById('master-test-controls');
      preview.innerHTML='<p>測試用：隱藏成長揭曉（不影響目前小寶）</p><button class="garden-outline" id="master-test-boy">男寶 · 開經偈</button><button class="garden-outline" id="master-test-girl">女寶 · 金剛經偈</button>';
      for(const gender of ['boy','girl'])document.getElementById('master-test-'+gender).onclick=()=>showMasterReveal(C.normalize({version:2,characterId:'blue-'+gender,name:'測試小寶',xp:18000,hiddenMaster:true,masterVerse:gender==='girl'?1:0}),true);
    }
    document.getElementById('pet-baby').onclick=function(){
      const button=this, bubble=home.querySelector('.baby-speech');
      const messages=['咿呀～寶寶最喜歡你了！','抱抱～我們一起長大！','今天也要陪寶寶玩英文嘛～ ♡'];
      button.classList.remove('is-delighted');void button.offsetWidth;button.classList.add('is-delighted');
      bubble.textContent=messages[Math.floor(Math.random()*messages.length)];
      clearTimeout(delightTimer);
      delightTimer=setTimeout(()=>{if(button.isConnected){button.classList.remove('is-delighted');bubble.textContent=d.completed?'今天也一起長大了，謝謝你！':'今天，也陪我學一點英文吧。';}},2400);
    };
    document.getElementById('baby-motion').onclick=async function(){
      p.motion=p.motion===false;
      home.querySelector('.nursery').classList.toggle('motion-paused',!p.motion);
      const looks=home.querySelector('.baby-looks');if(looks)looks.classList.toggle('motion-paused',!p.motion);
      this.textContent=p.motion?'暫停動作':'播放動作';this.setAttribute('aria-pressed',String(p.motion));
      await app.save();
    };
    document.getElementById('garden-learn').onclick=()=>app.tab('review');
    document.getElementById('garden-preview').onclick=app.preview;
    home.querySelectorAll('[data-play]').forEach(b=>b.onclick=()=>{mode=b.dataset.play;game=null;app.tab('games');});
    document.getElementById('baby-settings').onsubmit=async e=>{
      e.preventDefault();const name=document.getElementById('baby-name').value.trim();if(!name)return;
      p.name=name.slice(0,20);p.goal=Number(document.getElementById('baby-goal').value);await app.save();renderHome();toast('設定已儲存'+(d.words.length?'；學習目標於隔日生效。':'。'));
    };
    home.querySelectorAll('[data-room]').forEach(b=>b.onclick=async()=>{if(C.buy(p,b.dataset.room)){await app.save();renderHome();toast('已換上'+C.rooms.find(r=>r.id===b.dataset.room).name+'。');}});
    bindWardrobe(p);
    home.querySelectorAll('[data-teddy]').forEach(b=>b.onclick=async()=>{if(p!==pet()||!C.toggleTeddy(p))return;await app.save();renderHome();toast(p.teddyVisible?'泰迪熊來陪小寶了！':'泰迪熊已收好，隨時可以再擺出。');const next=document.getElementById('reward-giant-teddy');if(next)next.focus({preventScroll:true});});
    if(C.needsMasterReveal(p))document.getElementById('master-resume').onclick=()=>showMasterReveal(p,false);
    if(!home.hidden)checkMasterReveal();
  }
  function milestoneMessage(rewards){
    return (rewards||[]).map(r=>'連續登入 '+r.days+' 天！獲得'+r.name+'。').join('');
  }
  function wardrobe(p,s){
    const card=item=>{
      const owned=p.ownedAccessories.includes(item.id),wearing=p.accessory===item.id;
      const locked=!owned&&!!item.milestone,short=!owned&&!locked&&p.stars<item.cost;
      const label=wearing?'穿戴中':owned?'換上':locked?'連續 '+item.milestone+' 天解鎖':short?'還差 '+(item.cost-p.stars)+' 星':'購買並戴上 · ✦ '+item.cost;
      return `<div class="accessory-card ${wearing?'selected':''}"><div class="accessory-icon">${window.BabyAccessories.icon(item.id)}</div><h4>${item.name}</h4><p>${item.legacy?'早期紀念收藏':item.milestone?'連續登入限定 · '+item.milestone+' 天':owned?'已收藏，隨時免費換戴':'✦ '+item.cost+' 星星'}</p><button class="garden-outline" id="wear-${item.id}" data-accessory="${item.id}" aria-label="${item.name}：${label}" ${wearing||locked||short?'disabled':''}>${label}</button></div>`;
    };
    return `<section class="wardrobe-card" aria-labelledby="wardrobe-title"><div class="card-heading"><div><span class="garden-kicker">LITTLE TREASURES</span><h3 id="wardrobe-title">星星小物店</h3></div><span class="room-star">✦ ${p.stars} 星星</span></div><p class="wardrobe-note">男寶、女寶都能戴。每次戴一件，收藏後可以免費換戴。</p><div class="wardrobe-current"><span>現在戴著：<strong>${p.accessory?C.accessories.find(a=>a.id===p.accessory).name:'自然可愛的模樣'}</strong></span><button class="garden-outline" id="remove-accessory" ${p.accessory?'':'disabled'}>卸下配件</button></div><div class="accessory-grid">${C.accessories.filter(a=>!a.milestone).map(card).join('')}</div>${C.accessories.some(a=>a.legacy&&p.ownedAccessories.includes(a.id))?'<h4>我的紀念收藏</h4><div class="accessory-grid">'+C.accessories.filter(a=>a.legacy&&p.ownedAccessories.includes(a.id)).map(card).join('')+'</div>':''}${loginRewardCards(p)}<p class="wardrobe-note">隱藏結局仍維持原本機率；配件不影響成長路線。</p><p id="wardrobe-status" class="sr-only" role="status" aria-live="polite"></p></section>`;
  }
  function loginRewardCards(p){
    const streak=C.loginStreak(p,app.today());
    const images={'giant-teddy':'giant-teddy.webp','hero-cape':'cape-standing.webp',starry:'starry-room.webp'};
    const descriptions={'giant-teddy':'毛茸茸的大夥伴，陪小寶一起長大。','hero-cape':'男寶、女寶都能穿的小英雄披風。',starry:'流星、銀河與夢幻旋轉木馬，收藏一整片星空。'};
    return `<div class="streak-heading"><h4>每天回來，收藏一份驚喜</h4><span>連續登入 ${streak} 天 · 今日已記錄</span></div><p class="wardrobe-note">連續登入 7 天送超大泰迪熊，14 天送小超人披風，30 天送星空小屋。每天開啟網站即算一天；中斷後重新累計，已領獎勵永久保留，每份存檔各領一次。</p><div class="accessory-grid login-reward-grid">${C.loginRewards.map(r=>{
      const owned=(r.kind==='room'?p.owned:r.kind==='accessory'?p.ownedAccessories:p.ownedDecorations).includes(r.id);
      const active=r.kind==='room'?p.room===r.id:r.kind==='accessory'?p.accessory===r.id:p.teddyVisible;
      const label=!owned?'還差 '+Math.max(0,r.days-streak)+' 天':r.kind==='decoration'?(active?'收起泰迪熊':'擺出泰迪熊'):active?'使用中':r.kind==='room'?'入住星空小屋':'穿上披風';
      const attr=r.kind==='room'?'data-room="'+r.id+'"':r.kind==='accessory'?'data-accessory="'+r.id+'"':'data-teddy="toggle"';
      return `<div class="accessory-card ${active?'selected':''}"><div class="accessory-icon reward-art"><img src="assets/rewards/${images[r.id]}" alt="" loading="lazy"></div><span class="soft-badge">連續登入 ${r.days} 天</span><h4>${r.name}</h4><p>${descriptions[r.id]}</p><button class="garden-outline" id="reward-${r.id}" ${attr} ${!owned||(active&&r.kind!=='decoration')?'disabled':''}>${label}</button></div>`;
    }).join('')}</div>`;
  }
  function bindWardrobe(p){
    const update=async(button,id)=>{
      if(p!==pet())return;
      const owned=p.ownedAccessories.includes(id);
      const ok=id===null||owned?C.wearAccessory(p,id):C.buyAccessory(p,id);
      if(!ok)return;
      button.disabled=true;
      await app.save();
      if(p!==pet())return;
      renderHome();if(app.onAppearanceChange)app.onAppearanceChange();
      const message=id===null?'配件已卸下。':(owned?'已換上':'已收藏並戴上')+C.accessories.find(a=>a.id===id).name+'。';
      toast(message);document.getElementById('wardrobe-status').textContent=message;
      // Keep keyboard users at the wardrobe after replacing the home markup.
      const focus=document.getElementById(id===null?'wear-'+C.accessories[0].id:'remove-accessory');
      if(focus&&!focus.disabled)focus.focus({preventScroll:true});
    };
    home.querySelectorAll('[data-accessory]').forEach(button=>button.onclick=()=>update(button,button.dataset.accessory));
    document.getElementById('remove-accessory').onclick=function(){return update(this,null);};
  }
  function shuffled(list){return app.shuffle(list.slice());}
  function pool(){
    const source=level==='collected'?app.data().words:app.decks[level].map(w=>({en:w[0],zh:w[1],example:w[2]}));
    const seen=new Set();
    return source.filter(w=>{
      if(!w || !String(w.en||'').trim() || !String(w.zh||'').trim())return false;
      const key=C.wordKey(w.en);if(seen.has(key))return false;seen.add(key);return true;
    });
  }
  function renderGames(){
    if(game){renderRound();return;}
    games.innerHTML=`<div class="garden-heading"><div><div class="garden-kicker">THE PLAYROOM</div><h2>玩一下，也學會一點。</h2><p>答對不同的單字，就能為寶寶累積今天的成長養分。</p></div><span class="playroom-mark">✧</span></div><div class="game-setup"><fieldset class="mode-picker"><legend>選一個小遊戲</legend><button data-mode="choice" aria-pressed="${mode==='choice'}" class="${mode==='choice'?'selected':''}"><span class="game-icon peach-icon">Aa</span><b>單字選選樂</b><small>看英文，選中文 · 四選一</small></button><button data-mode="spell" aria-pressed="${mode==='spell'}" class="${mode==='spell'?'selected':''}"><span class="game-icon lavender-icon">a_z</span><b>拼字小花園</b><small>看中文，拼英文 · 拼字練習</small></button></fieldset><div class="setup-fields"><div><label for="game-level">練習字庫</label><select id="game-level">${[['beginner','初階 · 生活基礎'],['intermediate','中階 · 日常應用'],['advanced','高階 · 進階挑戰'],['collected','我的收藏單字']].map(([v,l])=>`<option value="${v}" ${v===level?'selected':''}>${l}</option>`).join('')}</select></div><div><label for="game-length">每回合題數</label><select id="game-length"><option value="5" ${length===5?'selected':''}>5 題 · 小小暖身</option><option value="10" ${length===10?'selected':''}>10 題 · 多練一點</option></select></div></div><div class="play-rules"><b>✦ 每日第一個完整回合：+5 成長值、1 顆星星</b><p>答對今天尚未領取遊戲獎勵的單字，每字 +2 成長值（每日最多 20 字，兩種遊戲共用）。答錯可看解析，遊戲不更動原本複習排程。</p></div><p id="game-setup-error" role="status"></p><button id="start-game" class="garden-primary">開始遊戲 </button></div>`;
    games.querySelectorAll('[data-mode]').forEach(b=>b.onclick=()=>{mode=b.dataset.mode;renderGames();});
    document.getElementById('game-level').onchange=e=>{level=e.target.value;};
    document.getElementById('game-length').onchange=e=>{length=Number(e.target.value);};
    document.getElementById('start-game').onclick=()=>{
      const words=pool();
      if(words.length<(mode==='choice'?4:1) || (mode==='choice' && new Set(words.map(w=>w.zh)).size<4)){
        document.getElementById('game-setup-error').textContent='這個字庫的單字不足，請新增單字或選擇其他字庫（選選樂需至少 4 種不同中文意思）。';return;
      }
      game={mode,words:shuffled(words).slice(0,length),pool:words,index:0,correct:0,xp:0,answered:false,missed:[],finished:false};renderRound();
    };
  }
  function renderRound(){
    const g=game;if(!g)return;
    if(g.finished){
      games.innerHTML=`<div class="game-result"><span class="result-flower">✿</span><div class="garden-kicker">A LITTLE MORE EVERY DAY</div><h2>又學會了一點點！</h2><p>這回合答對 <strong>${g.correct} / ${g.words.length}</strong> 題</p><div class="result-rewards">本回合獲得 <strong>+${g.xp+(g.reward?5:0)} 成長值</strong><br>${g.reward?'✦ 額外獲得 1 顆星星':'今天的回合獎勵已領取。'}<br>今日成長養分：${info().today.words.length} / ${info().today.goal} 個單字</div>${g.missed.length?'<div class="missed-words"><h3>這些單字，下次再一起記住</h3>'+g.missed.map(w=>'<p><b>'+h(w.en)+'</b><span>'+h(w.zh)+'</span></p>').join('')+'</div>':'<p>全部答對了！給認真的自己一點掌聲。</p>'}<div class="result-actions"><button class="garden-primary" id="play-again">再玩一回合</button><button class="garden-outline" id="back-home">看看寶寶</button></div></div>`;
      document.getElementById('play-again').onclick=()=>{game=null;renderGames();};document.getElementById('back-home').onclick=()=>{game=null;app.tab('home');};return;
    }
    const w=g.words[g.index];
    if(g.mode==='choice'&&!g.options){
      const distractors=[...new Set(shuffled(g.pool).filter(x=>x.zh!==w.zh).map(x=>x.zh))].slice(0,3);
      g.options=shuffled([w.zh,...distractors]);
    }
    games.innerHTML=`<div class="round-top"><button class="garden-text" id="exit-game">結束這回合</button><span>${g.mode==='choice'?'單字選選樂':'拼字小花園'} · ${g.index+1} / ${g.words.length}</span><b>✓ ${g.correct}</b></div><div class="garden-progress"><span style="width:${g.index/g.words.length*100}%"></span></div><div class="question-area"><div class="garden-kicker">${g.mode==='choice'?'CHOOSE THE MEANING':'SPELL THE WORD'}</div><h2 class="question-word">${h(g.mode==='choice'?w.en:w.zh)}</h2><p>${g.mode==='choice'?'這個英文單字是什麼意思？':'想一想，這個中文對應哪個英文單字？'}</p>${g.mode==='choice'?'<button class="garden-text" id="game-pronounce" aria-label="播放英文發音">♫ 聽聽發音</button>':''}</div><div class="answer-area">${g.mode==='choice'?'<div class="choice-grid">'+g.options.map((option,i)=>`<button class="choice-answer" data-answer="${i}"><span>${String.fromCharCode(65+i)}</span>${h(option)}</button>`).join('')+'</div>':'<form id="spell-form"><label class="sr-only" for="spell-answer">英文答案</label><input id="spell-answer" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="輸入英文單字…" required><button class="garden-primary" type="submit">確認答案</button></form>'}<div id="game-feedback" role="status" aria-live="polite"></div><button class="garden-primary next-question" id="next-question" hidden>${g.index+1===g.words.length?'看看本回合成果':'下一題'}</button></div><p class="game-bottom-note">不趕時間，慢慢想。每一個單字都是長大的養分。</p>`;
    document.getElementById('exit-game').onclick=()=>{if(confirm('結束這回合嗎？已獲得的成長養分會保留，完成整回合才能領取每日遊戲星星。')){game=null;renderGames();}};
    if(g.mode==='choice'){
      document.getElementById('game-pronounce').onclick=()=>app.speak(w.en);
      games.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>answer(g.options[Number(b.dataset.answer)],b));
    }else{
      document.getElementById('spell-form').onsubmit=e=>{e.preventDefault();answer(document.getElementById('spell-answer').value);};
      if(!g.answered)document.getElementById('spell-answer').focus();
    }
    document.getElementById('next-question').onclick=async()=>{
      if(!g.answered || g.advancing)return;g.advancing=true;
      g.index++;g.answered=false;g.options=null;
      if(g.index===g.words.length){g.finished=true;g.reward=C.finishGame(pet(),app.today());await app.save();}
      g.advancing=false;renderRound();
    };
    if(g.answered){paintAnswer(g);document.getElementById('next-question').hidden=!!g.saving;}
  }
  async function answer(value,button){
    const g=game;if(!g || g.answered || !value.trim())return;
    g.answered=true;const w=g.words[g.index];
    const correct=g.mode==='choice'?value===w.zh:C.wordKey(value)===C.wordKey(w.en);
    if(correct)g.correct++;else g.missed.push(w);
    const before=info().index;
    const award=correct?C.award(pet(),app.today(),w.en):{added:false,grew:false,xp:0};
    award.gameXP=correct?C.awardGame(pet(),app.today(),w.en):0;
    award.stageUp=info().index>before?info().stage.name:'';
    g.xp+=award.xp+award.gameXP;
    g.response={value,correct,award};g.saving=true;paintAnswer(g);
    await app.save();g.saving=false;
    // User may have switched panels while saving; only focus the live question.
    if(game===g){const next=document.getElementById('next-question');if(next){next.hidden=false;if(!games.hidden)next.focus();}}
  }
  function paintAnswer(g){
    const w=g.words[g.index], {value,correct,award}=g.response;
    games.querySelectorAll('.choice-answer, #spell-form input, #spell-form button').forEach(el=>{el.disabled=true;});
    if(g.mode==='spell')document.getElementById('spell-answer').value=value;
    else games.querySelectorAll('[data-answer]').forEach(b=>{if(g.options[Number(b.dataset.answer)]===value)b.classList.add(correct?'is-correct':'is-wrong');});
    if(g.mode==='choice')games.querySelectorAll('[data-answer]').forEach(b=>{if(g.options[Number(b.dataset.answer)]===w.zh)b.classList.add('is-correct');});
    const feedback=document.getElementById('game-feedback');
    feedback.className='answer-feedback '+(correct?'correct':'wrong');
    feedback.innerHTML=`<b>${correct?'✓ 答對了！':'再記住一次，下次就更熟悉。'}</b><p><strong>${h(w.en)}</strong> · ${h(w.zh)}</p>${w.example?'<p class="feedback-example">'+h(w.example)+'</p>':''}<small>${award.grew?'✦ 每日目標完成：+'+award.xp+' XP、3 顆星星。'+milestoneMessage(award.milestones):award.added?'每日目標進度 +1。':correct?'今日目標已完成，或此字已計入。':'這題未獲得成長值，看看答案再繼續。'}${award.gameXP?' 額外遊戲獎勵 +'+award.gameXP+' XP。':correct?' 這個單字的遊戲獎勵已領取，或今日已達 20 字。':''}${award.stageUp?' ✨ 長大了！現在是'+award.stageUp+'。':''}</small>`;
  }
  function record(word){
    const before=info().index;
    const result=C.award(pet(),app.today(),word);
    if(result.grew)toast('✦ 每日目標完成！成長值 +'+result.xp+'，獲得 3 顆星星。'+milestoneMessage(result.milestones)+(info().index>before?' ✨ 長大成'+info().stage.name+'了！':''));
    return result;
  }
  function finishRoutine(extraXP){
    const before=info().index;
    const earned=C.finishRoutine(pet(),app.today());
    if(earned)toast('✨ 填空任務完成！成長值 +'+(20+(extraXP||0))+(extraXP?'（含每日目標獎勵）':'')+'。'+(info().index>before?' 長大成'+info().stage.name+'了！':''));
    return earned;
  }
  function reset(){game=null;const dialog=document.getElementById('master-reveal');if(dialog&&dialog.open)dialog.close();}
  function render(){renderHome();if(!games.hidden)renderGames();}
  return {render,renderHome,renderGames,record,finishRoutine,reset,checkMasterReveal};
}};
