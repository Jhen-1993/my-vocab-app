const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),C=require(path.join(root,'baby-core.js'));
const clone=x=>JSON.parse(JSON.stringify(x));
const pet=extra=>C.normalize({version:2,characterId:'blue-boy',xp:100,stars:0,...extra});
const date=n=>{const d=new Date('2026-12-15T12:00:00Z');d.setUTCDate(d.getUTCDate()+n);return d.toISOString().slice(0,10);};
const complete=(p,d)=>{let r;for(let i=0;i<C.day(p,d).goal;i++)r=C.award(p,d,'word '+i);return r;};
for(const goal of [5,10,15]){
 const p=pet({goal}),r=complete(p,date(0));assert.equal(r.xp,goal*6);assert.equal(p.xp,100+goal*6);assert.equal(p.stars,3);
 const snapshot=clone(p);C.award(p,date(0),'other');assert.deepEqual(p,snapshot);
}
const locked=pet({goal:5});C.award(locked,date(0),'first');locked.goal=15;
assert.equal(C.day(locked,date(0)).goal,5);for(let i=0;i<4;i++)C.award(locked,date(0),'more'+i);
assert.equal(locked.xp,130);assert.equal(C.day(locked,date(1)).goal,15);
for(const character of C.characters.concat(C.hiddenCharacters)){
 const p=pet({characterId:character.id,gender:character.gender,stars:200});
 for(const item of C.accessories.filter(a=>!a.milestone)){
  const before=p.stars;assert.equal(C.buyAccessory(p,item.id),true);assert.equal(p.stars,before-item.cost);
  assert.equal(C.buyAccessory(p,item.id),true);assert.equal(p.stars,before-item.cost);
  assert.equal(p.accessory,item.id);assert.equal(C.wearAccessory(p,null),true);assert.equal(C.wearAccessory(p,item.id),true);
 }
 assert.equal(p.ownedAccessories.length,6);
 assert.deepEqual(C.normalize(clone(p)),p);
}
const poor=pet(),before=clone(poor);assert.equal(C.buyAccessory(poor,'rose-bow'),false);assert.deepEqual(poor,before);
for(const id of ['invalid','moon-crown','clover-clip']){assert.equal(C.buyAccessory(poor,id),false);assert.equal(C.wearAccessory(poor,id),false);}
// Learning still grants daily XP/stars; login gifts have their own calendar.
const p=pet({hiddenMaster:true,masterRevealed:false});
for(let n=0;n<30;n++)assert.deepEqual(complete(p,date(n)).milestones,[]);
assert.equal(p.stars,90);assert.deepEqual(p.ownedAccessories,[]);
assert.equal(p.hiddenMaster,true);assert.equal(p.masterRevealed,false);
assert.equal(C.normalize({version:2,xp:777,goal:15,characterId:'blue-girl'}).xp,777);
const corrupt=pet({ownedAccessories:['rose-bow','rose-bow','unknown'],accessory:'unknown',claimedStreakRewards:[7,7,11]});
assert.deepEqual(corrupt.ownedAccessories,['rose-bow']);assert.equal(corrupt.accessory,null);assert.deepEqual(corrupt.claimedStreakRewards,[7]);
// Execute production UI handlers in a minimal DOM; this does not replace browser layout QA.
const nodes=new Map();
function element(id=''){
 const e={id,hidden:true,disabled:false,dataset:{},classList:{add(){},remove(){},toggle(){}},setAttribute(){},focus(){},querySelector(){return element();},querySelectorAll(selector){const key=selector.slice(1,-1);return this.children.filter(n=>Object.hasOwn(n.attrs,key));},children:[]};
 let html='';Object.defineProperty(e,'innerHTML',{get:()=>html,set:value=>{
  html=value;e.children=[];
  for(const tag of value.matchAll(/<([a-z][\w-]*)\b([^>]*)>/gi)){
   const attrs={};for(const m of tag[2].matchAll(/([\w-]+)="([^"]*)"/g))attrs[m[1]]=m[2];
   if(!attrs.id&&!Object.keys(attrs).some(k=>k.startsWith('data-')))continue;
   const child=element(attrs.id);child.attrs=attrs;child.disabled=/\sdisabled(?:\s|$)/.test(tag[2]);
   for(const [k,v]of Object.entries(attrs))if(k.startsWith('data-'))child.dataset[k.slice(5)]=v;
   e.children.push(child);if(child.id)nodes.set(child.id,child);
  }
 }});return e;
}
for(const id of ['panel-home','panel-games','garden-toast'])nodes.set(id,element(id));
const doc={getElementById:id=>nodes.get(id)||null};
const context={document:doc,console,setTimeout:()=>1,clearTimeout(){},BabyCore:C};context.window=context;vm.createContext(context);
for(const file of ['baby-accessories.js','baby-avatar.js','baby-garden.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context);
let draws=0;
for(const ch of C.characters.concat(C.hiddenCharacters))for(let stage=0;stage<10;stage++)for(const item of C.accessories){
 if(ch.id.startsWith('master-')&&stage!==9)continue;
 const html=context.BabyAvatar.render(stage,ch.gender,ch.id,item.id),hat=['beret','bucket-hat'].includes(item.id);
 assert.equal(html.includes('accessory-window'),!hat&&item.id!=='hero-cape');assert.ok(html.includes(item.name));assert.ok(!html.includes('NaN'));
 if(hat){
  assert.ok(html.includes('wearing-painted-hat'));assert.ok(!html.includes('painted-idle-anchor'));
  assert.ok(html.includes('height="420"'));assert.ok(html.includes(`assets/worn-hats/${item.id}/${ch.asset}-${stage}-cels.webp`));
  assert.equal(context.BabyAccessories.render(item.id,stage,ch.id,4),'');
 }
 for(const match of html.matchAll(/(?:src|href)="(assets\/[^"]+)"/g))assert.ok(fs.existsSync(path.join(root,match[1])),match[1]);
 draws++;
}
assert.ok(!context.BabyAvatar.render(0,'boy','blue-boy','<bad>').includes('accessory-window'));
const data={companion:pet({stars:100,goal:10})};let saves=0;
const app={data:()=>data,escape:s=>String(s),today:()=>date(0),addDays:(d,n)=>{const day=new Date(d+'T12:00:00Z');day.setUTCDate(day.getUTCDate()+n);return day.toISOString().slice(0,10);},wordCount:()=>0,save:async()=>{saves++;},shuffle:a=>a,decks:{},tab(){},preview(){}};
(async()=>{
 const garden=context.BabyGarden.create(app);garden.renderHome();
 assert.ok(nodes.get('panel-home').innerHTML.includes('+60 成長值'));
 assert.ok(nodes.get('panel-home').innerHTML.includes('男寶、女寶都能戴'));
 await nodes.get('wear-rose-bow').onclick();assert.equal(data.companion.stars,94);assert.equal(data.companion.accessory,'rose-bow');
 await nodes.get('remove-accessory').onclick();assert.equal(data.companion.accessory,null);
 await nodes.get('wear-rose-bow').onclick();assert.equal(data.companion.stars,94);assert.equal(data.companion.accessory,'rose-bow');
 assert.ok(nodes.get('panel-home').innerHTML.includes('戴著莓果蝴蝶結'));
 assert.equal(saves,4);assert.equal(nodes.get('reward-hero-cape').disabled,true);
 assert.equal(nodes.get('reward-starry').disabled,true);assert.equal(nodes.get('reward-giant-teddy').disabled,true);
 for(let n=-29;n<=0;n++)C.recordLogin(data.companion,date(n));
 garden.renderHome();assert.equal(nodes.get('reward-hero-cape').disabled,false);
 await nodes.get('reward-hero-cape').onclick();assert.equal(data.companion.accessory,'hero-cape');assert.equal(data.companion.stars,94);
 await nodes.get('reward-starry').onclick();assert.equal(data.companion.room,'starry');assert.equal(data.companion.stars,94);
 assert.ok(nodes.get('panel-home').innerHTML.includes('assets/rewards/giant-teddy.webp'));
 await nodes.get('reward-giant-teddy').onclick();assert.equal(data.companion.teddyVisible,false);
 assert.ok(!nodes.get('panel-home').innerHTML.includes('class="giant-teddy"'));
 await nodes.get('reward-giant-teddy').onclick();assert.equal(data.companion.teddyVisible,true);
 console.log(JSON.stringify({status:'PASS',goalXP:[30,60,90],shopItems:6,loginGiftItems:3,renderCases:draws,purchaseAndEquipHandlers:true,allCharactersSupported:true,backupRoundTrip:true,rewardDeduplication:true,loginGiftUIHandlers:true},null,2));
})().catch(e=>{console.error(e);process.exitCode=1;});
