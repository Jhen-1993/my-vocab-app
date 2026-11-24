const assert=require('node:assert/strict'),C=require('../baby-core.js');
const clone=x=>JSON.parse(JSON.stringify(x));
const day=(n,start='2026-12-15')=>{const d=new Date(start+'T12:00:00Z');d.setUTCDate(d.getUTCDate()+n);return d.toISOString().slice(0,10);};
const make=extra=>C.normalize({version:2,characterId:'blue-girl',xp:789,stars:50,...extra});
for(const ch of C.characters){
 const p=make({characterId:ch.id}),earned=[];
 for(let n=0;n<30;n++){
  const result=C.recordLogin(p,day(n));earned.push(...result.rewards.map(r=>r.days));
  assert.equal(result.streak,n+1);assert.equal(Object.keys(p.days).length,0,'Login must not require studying');
  const after=clone(p);assert.deepEqual(C.recordLogin(p,day(n)).rewards,[]);assert.deepEqual(p,after,'Repeated visits are idempotent');
  if(n===5)assert.deepEqual(p.ownedDecorations,[]);
  if(n===6){assert.deepEqual(p.ownedDecorations,['giant-teddy']);assert.equal(p.teddyVisible,true);}
  if(n===12)assert.ok(!p.ownedAccessories.includes('hero-cape'));
  if(n===13)assert.ok(p.ownedAccessories.includes('hero-cape'));
  if(n===28)assert.ok(!p.owned.includes('starry'));
 }
 assert.deepEqual(earned,[7,14,30]);assert.equal(p.xp,789);assert.equal(p.stars,50);
 assert.equal(C.wearAccessory(p,'hero-cape'),true);assert.equal(C.buy(p,'starry'),true);
 assert.equal(C.toggleTeddy(p),true);assert.equal(p.teddyVisible,false);
 const restored=C.normalize(clone(p));assert.deepEqual(restored,p);assert.deepEqual(C.recordLogin(restored,day(29)).rewards,[]);
 assert.equal(C.loginStreak(restored,day(30)),30);assert.equal(C.loginStreak(restored,day(31)),0);
 assert.equal(C.recordLogin(restored,day(31)).streak,1);assert.ok(restored.owned.includes('starry'));
 for(let n=32;n<62;n++)assert.deepEqual(C.recordLogin(restored,day(n)).rewards,[]);
 assert.deepEqual(restored.claimedLoginRewards,[7,14,30]);assert.equal(restored.stars,50);
}
const missing=make();for(const n of [0,1,2,3,4,5,7])C.recordLogin(missing,day(n));assert.deepEqual(missing.claimedLoginRewards,[]);
assert.equal(C.buy(missing,'starry'),false);assert.equal(missing.room,'peach');assert.equal(missing.stars,50);
assert.equal(C.buyAccessory(missing,'hero-cape'),false);assert.equal(C.wearAccessory(missing,'hero-cape'),false);assert.equal(C.toggleTeddy(missing),false);
const leap=make();for(let n=0;n<7;n++)C.recordLogin(leap,day(n,'2028-02-25'));assert.equal(C.loginStreak(leap,'2028-03-02'),7);
const invalid=make({loginDays:['bad','2026-02-30','2026-11-23','2026-11-23'],claimedLoginRewards:[7,7,8],ownedDecorations:['giant-teddy','bad','giant-teddy']});
assert.deepEqual(invalid.loginDays,['2026-11-23']);assert.deepEqual(invalid.claimedLoginRewards,[7]);assert.deepEqual(invalid.ownedDecorations,['giant-teddy']);
for(const value of ['not-a-date','2026-02-30',null]){const before=clone(invalid);assert.equal(C.recordLogin(invalid,value).added,false);assert.deepEqual(invalid,before);}
const old=make({ownedAccessories:['clover-clip','moon-crown'],claimedStreakRewards:[7,30],accessory:'moon-crown',days:Object.fromEntries(Array.from({length:29},(_,n)=>[day(n),{words:[],goal:5}]))});
assert.equal(old.loginDays.length,29);assert.deepEqual(C.recordLogin(old,day(29)).rewards.map(r=>r.days),[7,14,30]);assert.equal(old.accessory,'moon-crown');assert.equal(old.stars,50);
const snapshot=clone(old);assert.deepEqual(C.normalize(clone(old)),snapshot,'Migration is idempotent');
console.log(JSON.stringify({status:'PASS',loginMilestones:[7,14,30],sameDayDeduplication:true,noStudyRequirement:true,brokenStreakRestarts:true,unlockedGiftsRetained:true,noRepeatClaims:true,allGenders:true,yearAndLeapDay:true,backupRoundTrip:true,legacyCollectionsPreserved:true,lockedPurchaseRejected:true},null,2));
