/* Painted accessories share the painted character's discrete frame animation. */
(function(root){
  'use strict';
  const art={"beret":{"width":384,"height":234},"rose-bow":{"width":384,"height":240},"blue-bow":{"width":384,"height":223},"star-clip":{"width":384,"height":371},"bucket-hat":{"width":384,"height":270},"crown":{"width":384,"height":260},"clover-clip":{"width":357,"height":384},"moon-crown":{"width":384,"height":239}};
  const source=id=>'assets/accessories/'+id+'-painted.webp';
  // Hairline anchors in the original 320 × 360 coordinate system.
  const heads={
    'blue-boy':[[157,46,142],[183,111,147],[156,44,135],[161,88,134],[157,50,149],[151,41,89],[144,38,70],[149,33,48],[151,34,48],[151,35,48]],
    'blue-girl':[[156,51,141],[175,110,140],[154,51,128],[180,105,120],[166,88,135],[157,47,91],[164,46,73],[166,47,58],[161,44,58],[158,45,57]],
    'sunny-girl':[[154,49,155],[171,94,154],[153,47,140],[185,98,136],[166,71,121],[184,46,100],[177,46,75],[163,35,56],[163,35,56],[162,34,56]],
    'sunny-boy':[[154,45,151],[172,96,148],[151,44,143],[164,88,137],[153,48,150],[158,44,103],[158,47,75],[164,37,44],[164,36,44],[164,33,44]],
    'sweet-girl':[[154,48,155],[175,96,153],[152,46,140],[178,96,140],[148,48,148],[165,45,104],[164,48,77],[166,37,55],[165,37,55],[163,34,57]],
    'calm-boy':[[154,46,152],[173,96,149],[153,44,141],[165,85,137],[153,48,151],[158,43,106],[161,48,73],[162,33,50],[163,35,50],[160,33,50]],
    'master-boy':Array(10).fill([160,31,40]),
    'master-girl':Array(10).fill([160,31,40])
  };
  function anchor(stage,id,frame){
    const [x,y,w]=(heads[id]||heads['blue-boy'])[stage];
    // Jumping cels move the head substantially; the overlay switches on the same frame.
    const jump={
      'blue-boy':[[0,0],[-8,-41],[-6,-17],[1,0]],
      'blue-girl':[[0,0],[-20,-53],[-17,-67],[-1,-4]],
      'sunny-girl':[[0,0],[-20,-49],[-18,-62],[0,-1]],
      'sunny-boy':[[0,0],[-7,-40],[-7,-43],[0,0]],
      'sweet-girl':[[0,0],[-13,-45],[-11,-58],[0,0]],
      'calm-boy':[[0,0],[-7,-38],[-7,-40],[0,0]]
    };
    const delta=stage===3?(jump[id]||jump['blue-boy'])[frame]||[0,0]:[0,0];
    return [x+delta[0],y+delta[1],w];
  }
  function drawing(id,stage,characterId,frame){
    if(id==='hero-cape')return capeDrawing(stage,characterId,frame);
    const item=art[id];if(!item||id==='beret'||id==='bucket-hat')return '';
    const [x,y,w]=anchor(stage,characterId,frame),clip=id.endsWith('bow')||id.endsWith('clip');
    const width=w*(id.endsWith('bow')?.32:clip?.30:1.08);
    const height=width*item.height/item.width;
    // Clips attach to the side hair; crowns follow the hairline.
    // Match the blue girl's painted-in bow so a replacement covers it.
    const side=characterId==='sunny-girl'&&stage>=2&&stage<=6?.32:.43;
    const cx=clip?x-w*side:x;
    const cy=clip?y+w*.15:y+w*.30;
    const angle=clip?-22:-3;
    return '<g transform="translate('+cx+' '+cy+') rotate('+angle+')"><image href="'+source(id)+'" x="'+(-width/2)+'" y="'+(clip?-height/2:-height)+'" width="'+width+'" height="'+height+'"/></g>';

  }
  function capeGeometry(stage,id,frame){
    const [x,y,w]=anchor(stage,id,frame),type=stage===1?'crawl':stage<=4?'seated':'standing';
    const width=Math.min(280,w*(stage>=5?2.1:1.7)),height=width*(type==='crawl'?.592:type==='seated'?.55:.956);
    return {type,x:type==='crawl'?Math.max(4,x-width*.87):x-width/2,y:y+w*(stage>=5?.72:.64),width,height};
  }
  function capeDrawing(stage,id,frame){
    const g=capeGeometry(stage,id,frame);
    return '<image href="assets/rewards/cape-'+g.type+'.webp" x="'+g.x+'" y="'+g.y+'" width="'+g.width+'" height="'+g.height+'"/>';
  }
  function icon(id){if(id==='hero-cape')return '<img src="assets/rewards/cape-standing.webp" width="480" height="459" alt="" aria-hidden="true" loading="lazy">';return art[id]?'<img src="'+source(id)+'" width="'+art[id].width+'" height="'+art[id].height+'" alt="" aria-hidden="true" loading="lazy" decoding="async">':'';}
  function render(id,stage,characterId,frames){
    // Hats use complete wearing-hat paintings in BabyAvatar, never overlays.
    if((!art[id]&&id!=='hero-cape')||id==='beret'||id==='bucket-hat')return '';
    let cels='';
    for(let frame=0;frame<frames;frame++)cels+='<g transform="translate('+(frame*320)+' 0)">'+drawing(id,stage,characterId,frame)+'</g>';
    return '<span class="accessory-window" aria-hidden="true"><svg class="painted-strip accessory-strip" viewBox="0 -90 '+(frames*320)+' 450" focusable="false">'+cels+'</svg></span>';
  }
  root.BabyAccessories={icon,render,drawing,anchor,capeGeometry};
})(typeof window==='object'?window:globalThis);
