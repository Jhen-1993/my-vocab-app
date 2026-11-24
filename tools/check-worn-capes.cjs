const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),core=require(path.join(root,'baby-core.js'));
const manifest=JSON.parse(fs.readFileSync(path.join(root,'assets/worn-capes/manifest.json')));
const ctx={BabyCore:core};vm.createContext(ctx);
for(const f of ['baby-accessories.js','baby-avatar.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),ctx);
function dimensions(file){
 const b=fs.readFileSync(file);assert.equal(b.toString('ascii',0,4),'RIFF');assert.equal(b.toString('ascii',8,12),'WEBP');
 for(let p=12;p+8<=b.length;){const size=b.readUInt32LE(p+4);if(b.toString('ascii',p,p+4)==='VP8X')return {width:b.readUIntLE(p+12,3)+1,height:b.readUIntLE(p+15,3)+1,alpha:Boolean(b[p+8]&16)};p+=8+size+(size%2);}
 throw Error('Expected transparent extended WebP: '+file);
}
let cells=0,cases=0;
assert.equal(manifest.length,62);assert.equal(new Set(manifest.map(m=>m.file)).size,62);
for(const ch of core.characters.concat(core.hiddenCharacters))for(const stage of ch.id.startsWith('master-')?[9]:Array.from({length:10},(_,i)=>i))for(const hat of ['hero-cape']){
 const expectedFrames=stage===0&&ch.id.startsWith('blue-')?6:4;
 const file=`assets/worn-capes/${ch.asset}-${stage}-cels.webp`,entry=manifest.find(m=>m.file===file);assert.ok(entry,file);
 assert.equal(entry.frames,expectedFrames);assert.deepEqual(dimensions(path.join(root,file)),{width:expectedFrames*320,height:420,alpha:true});
 const html=ctx.BabyAvatar.render(stage,ch.gender,ch.id,hat);
 assert.ok(html.includes(file));assert.ok(html.includes('穿著小超人披風'));assert.ok(html.includes('--cel-width:'+(expectedFrames*100)+'%'));
 assert.equal((html.match(/<img /g)||[]).length,1);assert.ok(!html.includes('accessory-window'));assert.ok(!html.includes('painted-idle-anchor'));
 assert.equal(ctx.BabyAccessories.render('hero-cape',stage,ch.id,expectedFrames),'');
 const noHat=ctx.BabyAvatar.render(stage,ch.gender,ch.id,null);assert.ok(noHat.includes('assets/painted/'));assert.ok(!noHat.includes('wearing-painted-cape'));
 cells+=expectedFrames;cases++;
}
const css=fs.readFileSync(path.join(root,'baby-avatar.css'),'utf8');
assert.match(css,/\.baby-painted\.wearing-painted-cape \.painted-window\{top:-16\.666667%;bottom:0;animation:none;mask-image:none\}/);
assert.ok(css.includes('animation-play-state:paused!important'));assert.ok(css.includes('prefers-reduced-motion:reduce'));
console.log(JSON.stringify({status:'PASS',completeCharacterStrips:cases,paintedCels:cells,normalCharacters:6,growthStages:10,hiddenAdults:2,sharedCapes:1,transparentWebP:true,noCapeOverlay:true,originalUndressedArtPreserved:true,browserAnimationTested:false},null,2));
