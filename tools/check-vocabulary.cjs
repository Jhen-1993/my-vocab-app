const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(process.argv[2] || path.join(__dirname,'..'));
const levels = ['beginner','intermediate','advanced'];
const clone = x => JSON.parse(JSON.stringify(x));
function load(order=levels){
  const c=vm.createContext({}); c.window=c;
  for(const level of order) vm.runInContext(fs.readFileSync(path.join(root,'data',level+'.js'),'utf8'),c,{filename:level+'.js',timeout:10000});
  return c;
}
const c=load(), manifest=JSON.parse(fs.readFileSync(path.join(root,'history/vocabulary-cleanup-20261120.json')));
const seen=new Set(), lookup=new Map();
const validPos=new Set(['n.','v.','adj.','adv.','prep.','conj.','pron.','quant.','num.','det.','phr.v.','idiom']);
for(const level of levels){
  assert.equal(c.DECKS[level].length,manifest.afterCounts[level]);
  for(const row of c.DECKS[level]){
    assert.equal(row.length,5);
    for(const field of row){assert.equal(typeof field,'string');assert.ok(field.trim());assert.ok(!/[\uFFFD\u0000-\u0008\u000B\u000C\u000E-\u001F]/.test(field));}
    const word=row[0].trim().toLowerCase();
    assert.ok(!seen.has(word),'Duplicate '+word);seen.add(word);lookup.set(word,{level,row});
    assert.ok(!c.RETIRED_BUILTIN_TERMS[word],'Retired live card '+word);
    assert.ok(!/請核對|__REAL_WORD_EXTENSION__|We discussed the .+ during|The report includes information about|The report includes an? .+ example|Any changes must be recorded before implementation/.test(row[2]+row[3]),word);
    for(const tag of row[4].split(/[／/]/))assert.ok(validPos.has(tag),word+' invalid POS '+tag);
    assert.ok(row[4].split(/[／/]/).includes(c.EXAMPLE_POS_AUDIT[word]),word+' inconsistent example POS');
  }
}
assert.equal(seen.size,6084);
for(const name of ['PARTS_OF_SPEECH','EXAMPLE_POS_AUDIT','POS_LABEL_OVERRIDES','EXAMPLE_VARIANTS','REVIEW_EXAMPLE_VARIANTS','TATOEBA_EXAMPLE_SOURCES']){
  for(const key of Object.keys(c[name])) assert.ok(seen.has(key),name+' orphan '+key);
}
for(const name of ['EXAMPLE_VARIANTS','REVIEW_EXAMPLE_VARIANTS'])for(const [word,settings] of Object.entries(c[name])){
  const sentences=new Set([lookup.get(word).row[2]]);
  for(const item of settings.alternatives||[]){assert.ok(item.example&&item.exampleZh);assert.ok(!sentences.has(item.example),'Duplicate alternative '+word);sentences.add(item.example);}
}
for(const level of levels){
  const isolated=load([level]);
  assert.deepEqual(Object.keys(isolated.DECKS),[level]);
  assert.deepEqual(clone(isolated.DECKS[level]),clone(c.DECKS[level]));
  for(const word of Object.keys(isolated.EXAMPLE_POS_AUDIT)) assert.equal(lookup.get(word).level,level);
}
for(const order of [levels.slice().reverse(),['intermediate','advanced','beginner']]){
  const other=load(order);
  for(const level of levels)assert.deepEqual(clone(other.DECKS[level]),clone(c.DECKS[level]));
}
for(const obsolete of ['applyExampleQualityPass','qualityGenericNounExample','QUALITY_WORD_EXAMPLES','CURATED_NATURAL_EXAMPLES','REAL_WORD_EXTENSION','TATOEBA_EXAMPLES'])assert.equal(c[obsolete],undefined);

vm.runInContext(fs.readFileSync(path.join(root,'baby-core.js'),'utf8'),c);
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const inline=[...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)].map(m=>m[1]);
for(const script of inline)new vm.Script(script);
const main=inline.find(s=>s.includes('function normalizeLoadedData'));
assert.ok(main);
// Exercise production functions before UI initialization, without real browser storage.
const probe=main.replace('  var reviewEl =',`  globalThis.auditHooks={normalizeLoadedData,makeWord,startRecoveryCycle,scheduleAfterCorrectAnswer,addDays,getCardExamples,setData:function(v){data=v;},getData:function(){return data;}}; return;\n  var reviewEl =`);
vm.runInContext(probe,c,{filename:'index.html',timeout:10000});
const hooks=c.auditHooks;
function fixture(words, imported={}){
  return {words:clone(words),companion:c.BabyCore.normalize({version:2,characterId:'blue-boy',xp:1234,stars:12,days:{}}),reviewLog:[{date:'2026-11-19',correct:3,wrong:2}],importedDecks:imported};
}
function saved(en,category,id){return {id,en,category,zh:'舊釋義',example:'Old saved sentence.',exampleZh:'舊翻譯',pos:'n.',box:2,streak:3,wrongTotal:7,helpCount:2,reviewStage:2,nextReview:'2026-12-15',lastInterval:3,addedAt:'2026-01-01',history:[{date:'2026-11-18',result:'wrong'}]};}
const fromLevels=new Map(manifest.levelChanges.map(x=>[x.word.toLowerCase(),x.from]));
const reverseRename=Object.fromEntries(Object.entries(manifest.renamedHeadwords).map(([a,b])=>[b,a]));
const originals=[];
for(const [key,{level}] of lookup){const oldWord=reverseRename[key]||key;originals.push(saved(oldWord,fromLevels.get(oldWord)||level,'old-'+originals.length));}
originals.push(saved('automatic','custom','custom-automatic'),saved('custommade','custom','custom-spelling'),saved('image','bulk','bulk-image'),saved('unknown historical word','advanced','unknown'));
const originalById=new Map(originals.map(w=>[w.id,clone(w)]));
const d=fixture(originals,{beginner:true,intermediate:true,advanced:true});
const reviewLog=clone(d.reviewLog);
hooks.setData(d);hooks.normalizeLoadedData();
assert.equal(d.words.length,originals.length);
assert.deepEqual(clone(d.reviewLog),reviewLog);
const content=new Set(['en','zh','example','exampleZh','pos','category']);
for(const w of d.words){
  const old=originalById.get(w.id);assert.ok(old);
  if(old.category==='custom'||old.category==='bulk'||old.id==='unknown'){assert.deepEqual(clone(w),old);continue;}
  for(const key of Object.keys(old))if(!content.has(key))assert.deepEqual(clone(w[key]),old[key],w.en+' progress changed '+key);
  const current=lookup.get(w.en.toLowerCase());assert.ok(current);
  assert.equal(w.category,current.level);
  assert.deepEqual([w.en,w.zh,w.example,w.exampleZh,w.pos],clone(current.row));
}
const after=JSON.stringify(d);hooks.normalizeLoadedData();assert.equal(JSON.stringify(d),after,'Migration must be idempotent');
const priorSpelling=fixture([saved('custommade','intermediate','old-custommade'),saved('poke fun at／of','intermediate','old-poke')]);
hooks.setData(priorSpelling);hooks.normalizeLoadedData();
assert.equal(priorSpelling.words[0].en,'custom-made');assert.equal(priorSpelling.words[1].en,'poke fun at');
assert.equal(priorSpelling.words[1].id,'old-poke');
const retiredNames=Object.keys(c.RETIRED_BUILTIN_TERMS);
const retiredCards=retiredNames.map((word,i)=>saved(word,'advanced','retired-'+i));
const r=fixture([...retiredCards,saved(retiredNames[0],'bulk','bulk-retired'),saved(retiredNames[0],'custom','custom-retired')],{advanced:true});
hooks.setData(r);hooks.normalizeLoadedData();
assert.deepEqual(clone(r.retiredBuiltinWords),retiredCards);
assert.equal(r.words.length,c.BUILTIN_REPLACEMENT_WORDS.length+2);
assert.equal(new Set(r.words.filter(w=>levels.includes(w.category)).map(w=>w.en.toLowerCase())).size,c.BUILTIN_REPLACEMENT_WORDS.length);
for(const w of r.words.filter(w=>levels.includes(w.category))){assert.ok(w.example&&w.exampleZh);assert.equal(w.category,lookup.get(w.en.toLowerCase()).level);}
const deletedId=r.words.find(w=>levels.includes(w.category)).id;
r.words=r.words.filter(w=>w.id!==deletedId);const once=JSON.stringify(r);hooks.normalizeLoadedData();assert.equal(JSON.stringify(r),once,'Deleted replacement must not be re-added on every load');
const restored=JSON.parse(JSON.stringify(r));hooks.setData(restored);hooks.normalizeLoadedData();assert.equal(JSON.stringify(restored),once,'Backup round trip must preserve migrated progress');

// Confirm existing SRS and game behavior while refactoring only the vocabulary.
const schedule={};hooks.startRecoveryCycle(schedule,'2026-11-20');
const due=[schedule.nextReview];
for(let i=0;i<4;i++){hooks.scheduleAfterCorrectAnswer(schedule,schedule.nextReview);due.push(schedule.nextReview);}
assert.deepEqual(due,['2026-11-21','2026-11-23','2026-11-26','2026-12-04','2026-12-19']);
hooks.scheduleAfterCorrectAnswer(schedule,schedule.nextReview);assert.equal(schedule.nextReview,'2027-01-02');assert.equal(schedule.reviewStage,null);
const rewards=[];
for(const goal of [5,10,15]){
  const pet=c.BabyCore.normalize({version:2,characterId:'blue-boy',goal,xp:0,stars:0,days:{}});
  for(let i=0;i<goal;i++)c.BabyCore.award(pet,'2026-11-20','word-'+i);
  rewards.push({goal,xp:pet.xp,stars:pet.stars});assert.equal(pet.xp,goal*6);assert.equal(pet.stars,3);
  c.BabyCore.award(pet,'2026-11-20','word-0');assert.equal(pet.xp,goal*6);
}
console.log(JSON.stringify({status:'PASS',counts:manifest.afterCounts,total:seen.size,independentDeckLoading:true,migrationCardsChecked:originals.length,retiredCardsArchived:retiredCards.length,customAndBulkPreserved:true,historyPreserved:true,backupRoundTrip:true,srsDueDates:due,currentGameRewards:rewards},null,2));
