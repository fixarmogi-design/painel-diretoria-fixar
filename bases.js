/* =====================================================================
   FIXAR · Fase 1 — tela por base (dados reais do painel)
   Como instalar: coloque este arquivo ao lado do seu index.html e
   adicione UMA linha antes de </body>:   <script src="bases.js"></script>
   Não altera o painel nem o login. Só lê os dados que o painel já carregou.
   ===================================================================== */
(function(){
"use strict";
const WRAP=(document.getElementById('main')||{}).closest?document.getElementById('main').closest('.wrap'):null;
if(!WRAP){console.warn('bases.js: painel não encontrado');return}
const st=document.createElement('style');st.id='b-css';st.textContent=`#baseApp .page-h{display:flex;align-items:flex-end;gap:12px;flex-wrap:wrap}#baseApp .page-h .right{margin-left:auto;display:flex;gap:7px;flex-wrap:wrap;align-items:center}#baseApp .b-tabs{display:flex;gap:6px;margin-bottom:14px;flex-wrap:wrap}#baseApp .b-tab{padding:7px 14px;border-radius:8px;border:1px solid var(--border);background:var(--surface);cursor:pointer;font-size:11.5px;font-weight:700;letter-spacing:.3px;color:var(--ink-2);transition:var(--t)}#baseApp .b-tab.active{background:var(--accent);color:#fff;border-color:var(--accent)}#baseApp .b-tab:hover:not(.active){background:var(--surface-2);color:var(--ink)}#baseApp .demo{border:1px dashed color-mix(in srgb,var(--warn) 55%,transparent);background:color-mix(in srgb,var(--warn) 8%,transparent);color:var(--ink-2);border-radius:var(--r-sm);padding:7px 12px;font-size:11px;margin-bottom:12px}#baseApp .demo b{color:var(--warn)}#baseApp .card-h{flex-wrap:wrap}#baseApp .card-h .right{margin-left:auto;display:flex;gap:6px;align-items:center}#baseApp .fic{font-size:8.5px;font-weight:800;letter-spacing:.6px;text-transform:uppercase;color:var(--warn);border:1px solid color-mix(in srgb,var(--warn) 45%,transparent);border-radius:20px;padding:1px 7px}#baseApp .real{font-size:8.5px;font-weight:800;letter-spacing:.6px;text-transform:uppercase;color:var(--good);border:1px solid color-mix(in srgb,var(--good) 45%,transparent);border-radius:20px;padding:1px 7px}#baseApp .b-tres{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;align-items:start}@media (max-width:900px){#baseApp .b-tres{grid-template-columns:minmax(0,1fr)}}#baseApp .duas{align-items:start}#baseApp .card{min-width:0}#baseApp .hbar:last-child{margin-bottom:0}#baseApp .hbar-n{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#baseApp .hbar-v{white-space:nowrap}#baseApp .brow{display:block;width:100%;text-align:left;background:none;border:0;border-bottom:1px solid var(--border);padding:11px 4px;cursor:pointer;border-radius:0}#baseApp .brow:last-child{border-bottom:0}#baseApp .brow:hover{background:var(--surface-2)}#baseApp .brow-h{display:flex;align-items:center;gap:8px;margin-bottom:6px;font-weight:800;font-size:12px;letter-spacing:.3px}#baseApp .brow-h i{width:9px;height:9px;border-radius:50%;background:var(--c)}#baseApp .brow-h span{margin-left:auto;color:var(--accent);font-size:10px;font-weight:700;letter-spacing:.6px;text-transform:uppercase}#baseApp .bpair{display:grid;grid-template-columns:1fr 1fr;gap:10px 18px}#baseApp .bpair .hbar{margin:0}@media (max-width:760px){#baseApp .bpair{grid-template-columns:1fr}}#baseApp tbody tr.go{cursor:pointer}#baseApp tbody tr.go:hover{background:var(--surface-2)}#baseApp tr.fim td{font-weight:800;border-top:2px solid var(--border-2);background:var(--surface-2)}#baseApp .b-seg{display:flex;background:var(--surface-2);border:1px solid var(--border);border-radius:var(--r-sm);padding:2px;flex-wrap:wrap}#baseApp .b-seg button{background:none;border:0;padding:5px 10px;border-radius:4px;cursor:pointer;font-size:10.5px;font-weight:700;letter-spacing:.4px;color:var(--muted);transition:var(--t)}#baseApp .b-seg button[aria-pressed="true"]{background:var(--surface);color:var(--ink);box-shadow:0 1px 2px rgba(0,0,0,.2)}#baseApp .btn.primary{background:var(--accent);border-color:var(--accent);color:#fff}#baseApp .btn.primary:hover{filter:brightness(1.12);color:#fff}#baseApp .legend{display:flex;flex-wrap:wrap;gap:4px 12px;margin-top:10px;padding-top:8px;border-top:1px solid var(--border)}#baseApp .legend span{display:flex;align-items:center;gap:5px;font-size:9px;color:var(--ink-2);letter-spacing:.4px;text-transform:uppercase}#baseApp .legend i{width:8px;height:8px;border-radius:2px;flex:none}#baseApp .stack{display:flex;gap:2px;height:14px;margin:4px 0 2px}#baseApp .stack i{display:block;height:100%;min-width:2px;border-radius:3px}#baseApp .donutrow{display:flex;align-items:center;gap:16px;flex-wrap:wrap}#baseApp .donut{position:relative;width:112px;height:112px;flex:none}#baseApp .donut svg{width:100%;height:100%;transform:rotate(-90deg)}#baseApp .donut div{position:absolute;inset:0;display:grid;place-content:center;text-align:center}#baseApp .donut b{font-weight:800;letter-spacing:-.8px;line-height:1}#baseApp .donut span{font-size:8px;color:var(--muted);letter-spacing:.8px;text-transform:uppercase}#baseApp .dl{display:grid;gap:6px;flex:1;min-width:150px}#baseApp .dl div{display:flex;align-items:center;gap:7px;font-size:11.5px;color:var(--ink-2)}#baseApp .dl i{width:9px;height:9px;border-radius:2px;flex:none}#baseApp .dl b{margin-left:auto;color:var(--ink);font-variant-numeric:tabular-nums}#baseApp .tiles{display:grid;grid-template-columns:repeat(auto-fill,minmax(112px,1fr));gap:6px}#baseApp .tile{background:var(--surface-2);border:1px solid var(--border);border-radius:var(--r-sm);padding:7px 8px;cursor:pointer;transition:var(--t);position:relative;overflow:hidden;text-align:left;min-width:0}#baseApp .tile:hover{border-color:var(--border-2);transform:translateY(-1px)}#baseApp .tile::before{content:"";position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--st)}#baseApp .tile-n{display:flex;align-items:center;gap:5px;font-size:11px;font-weight:800;letter-spacing:.3px}#baseApp .dot{width:7px;height:7px;border-radius:50%;background:var(--st);flex:none}#baseApp .tile-t{font-size:9px;color:var(--muted);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#baseApp .tile-st{font-size:8.5px;letter-spacing:.5px;text-transform:uppercase;color:var(--st);font-weight:800;margin-top:3px}#baseApp .tile-m{font-size:8.5px;color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#baseApp .b-mini{display:flex;align-items:flex-start;gap:10px;padding:8px 0;border-bottom:1px solid var(--border);font-size:11px;color:var(--ink-2);line-height:1.5}#baseApp .b-mini:last-child{border-bottom:0}#baseApp .b-mini b{color:var(--ink)}#baseApp .b-mini .t{margin-left:auto;color:var(--muted);white-space:nowrap;font-size:10px}#baseApp .note{background:var(--surface);border:1px solid var(--border);border-left:3px solid var(--accent);border-radius:var(--r-sm);padding:10px 12px;font-size:11.5px;color:var(--ink-2);margin-bottom:12px}#baseApp .note b{color:var(--ink)}#baseApp svg.ch{display:block;width:100%;height:auto;overflow:visible}#baseApp svg.ch text{font:400 10px var(--sans);fill:var(--ink-2)}#baseApp svg.ch .gl{stroke:var(--grid);stroke-width:1}#baseApp .chk{width:17px;height:17px;accent-color:var(--accent);cursor:pointer}#baseApp .chk:disabled{cursor:default;opacity:.55}#baseApp .sub{font-size:9.5px;color:var(--muted);letter-spacing:.4px;text-transform:uppercase}#b-tip{position:fixed;pointer-events:none;z-index:120;background:var(--surface);border:1px solid var(--border-2);border-radius:6px;padding:7px 9px;font-size:11px;box-shadow:var(--shadow);opacity:0;transition:opacity .1s;max-width:250px}#b-tip.on{opacity:1}#b-tip b{display:block;font-size:11.5px;margin-bottom:2px}`;document.head.appendChild(st);
const APP=document.createElement('div');APP.id='baseApp';APP.style.display='none';
APP.innerHTML='<div class="wrap"><div class="page-h"><div><h1 id="b-pageTitle"></h1><p id="b-subTitle"></p></div><div class="right" id="b-pageRight"></div></div><div id="b-main"></div></div>';
WRAP.after(APP);
const tipEl=document.createElement('div');tipEl.id='b-tip';document.body.appendChild(tipEl);
const $=id=>document.getElementById('b-'+id);
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const norm=s=>String(s??'').normalize('NFD').replace(/[̀-ͯ]/g,'').trim().toLowerCase();
const nf0=new Intl.NumberFormat('pt-BR',{maximumFractionDigits:0}),nf1=new Intl.NumberFormat('pt-BR',{maximumFractionDigits:1});
const num=v=>nf0.format(Math.round(v)),pct=v=>nf0.format(Math.round(v*100))+'%';
const brl=v=>'R$ '+nf0.format(Math.round(v));
const brlc=v=>{const a=Math.abs(v);if(a>=1e6)return 'R$ '+nf1.format(v/1e6)+' mi';if(a>=1e3)return 'R$ '+nf1.format(v/1e3)+' mil';return 'R$ '+nf0.format(v)};
const sum=(a,f)=>a.reduce((s,x)=>s+(f?f(x):x),0);
function rng(seed){return()=>{seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function parseCSV(t){const rows=[];let row=[],f='',q=false;t=t||'';for(let i=0;i<t.length;i++){const c=t[i];if(q){if(c==='"'){if(t[i+1]==='"'){f+='"';i++}else q=false}else f+=c}else if(c==='"')q=true;else if(c===';'){row.push(f);f=''}else if(c==='\n'||c==='\r'){if(c==='\r'&&t[i+1]==='\n')i++;row.push(f);rows.push(row);row=[];f=''}else f+=c}
  if(f!==''||row.length){row.push(f);rows.push(row)}
  if(!rows.length)return[];const h=rows[0].map(x=>norm(x).replace(/\s+/g,'_'));
  return rows.slice(1).filter(r=>r.some(c=>(c||'').trim()!=='')).map(r=>{const o={};h.forEach((k,j)=>o[k]=(r[j]??'').trim());return o})}
const pdate=s=>{const m=String(s||'').match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/);return m?new Date(+m[3],+m[2]-1,+m[1]):null};
const dkey=d=>d.getFullYear()+'-'+d.getMonth()+'-'+d.getDate();
const dlab=d=>String(d.getDate()).padStart(2,'0')+'/'+String(d.getMonth()+1).padStart(2,'0');
const qn=s=>{const n=parseFloat(String(s||'').replace(/\.(?=\d{3}(\D|$))/g,'').replace(',','.'));return isNaN(n)?0:n};
let DIAS=[],REF=new Date(),BASES=[];
const COR=['var(--s1)','var(--s2)','var(--s3)','var(--s4)','var(--s5)','var(--s6)'];
function hydrate(){
  let emb={};try{emb=JSON.parse(document.getElementById('dados-embutidos').textContent)}catch(e){}
  const M=parseCSV(emb.fechamento_bases).map(r=>({k:norm(r.base),n:r.base,d:pdate(r.data),q:qn(r.quantidade),eq:qn(r.equipes),meta:r.meta,mot:r.motivo,obs:r.observacao,ger:r.gerente,h:r.hora})).filter(r=>r.d&&r.k);
  const P=parseCSV(emb.fechamento_producao).map(r=>({k:norm(r.base),n:r.base,d:pdate(r.data),q:qn(r.quantidade),p:r.produto})).filter(r=>r.d&&r.k);
  const src=M.length?M:P;REF=src.length?new Date(Math.max(...src.map(r=>+r.d))):new Date();
  DIAS=[...Array(30)].map((_,i)=>{const d=new Date(REF);d.setDate(d.getDate()-29+i);return d});
  const idx={};DIAS.forEach((d,i)=>idx[dkey(d)]=i);
  const map={};[...M,...P].forEach(r=>{if(!map[r.k])map[r.k]={k:r.k,nome:r.n,sMed:Array(30).fill(0),sBli:Array(30).fill(0),eq:0,prod:{},rows:[],ger:''}});
  M.forEach(r=>{const b=map[r.k],i=idx[dkey(r.d)];if(i!=null){b.sMed[i]+=r.q;b.eq+=r.eq}b.rows.push(r);if(r.ger&&!/importado/i.test(r.ger)&&!b.ger)b.ger=r.ger});
  P.forEach(r=>{const b=map[r.k],i=idx[dkey(r.d)];if(i==null)return;b.sBli[i]+=r.q;b.prod[r.p||'—']=(b.prod[r.p||'—']||0)+r.q});
  BASES=Object.values(map).sort((a,c)=>a.nome.localeCompare(c.nome)).map((b,i)=>Object.assign(b,{id:b.k,c:COR[i%6],med:sum(b.sMed),bli:sum(b.sBli),dias:b.sMed.filter(v=>v>0).length,prodL:Object.entries(b.prod).map(([n,v])=>({n,v})).sort((a,c)=>c.v-a.v),rows:b.rows.sort((a,c)=>+c.d-+a.d||String(c.h).localeCompare(String(a.h)))}));
}
/* ---------- gráficos ---------- */
const CH={};let chId=0;
function niceStep(raw){const p=Math.pow(10,Math.floor(Math.log10(raw)));const f=raw/p;return (f<=1?1:f<=2?2:f<=2.5?2.5:f<=5?5:10)*p}
function axis(max){const st=niceStep(max/4||1);const top=st*Math.ceil(max/st||1);const t=[];for(let v=0;v<=top+1e-9;v+=st)t.push(v);return {top,t}}
const legend=ser=>'<div class="legend">'+ser.map(s=>`<span><i style="background:${s.c}"></i>${esc(s.n)}</span>`).join('')+'</div>';
function hbar(rows,fmt,color){const mx=Math.max(1e-9,...rows.map(r=>r.v));return rows.map(r=>`<div class="hbar" data-tip="${esc(r.tip||r.l+'|'+fmt(r.v))}"><span class="hbar-n" title="${esc(r.l)}">${esc(r.l)}</span><span class="hbar-v">${fmt(r.v)}</span><span class="hbar-tr"><i class="hbar-fl" style="width:${Math.max(.5,r.v/mx*100)}%;background:${r.c||color||'var(--s1)'}"></i></span></div>`).join('')}
function donut(segs,center,sub){const r=42,L=2*Math.PI*r;let off=0;const tot=sum(segs,x=>x.v)||1;
  const arcs=segs.filter(s=>s.v>0).map(s=>{const len=L*s.v/tot,vs=Math.max(0,len-2);const a=`<circle cx="52" cy="52" r="${r}" fill="none" style="stroke:${s.c}" stroke-width="10" stroke-dasharray="${vs.toFixed(1)} ${(L-vs).toFixed(1)}" stroke-dashoffset="${(-off).toFixed(1)}" data-tip="${esc(s.n+'|'+s.v+' ('+pct(s.v/tot)+')')}"/>`;off+=len;return a}).join('');
  return `<div class="donut"><svg viewBox="0 0 104 104"><circle cx="52" cy="52" r="${r}" fill="none" style="stroke:var(--surface-3)" stroke-width="10"/>${arcs}</svg><div><b style="font-size:${String(center).length>6?15:22}px">${center}</b><span>${sub}</span></div></div>`}
const dl=(segs,fmt)=>'<div class="dl">'+segs.map(s=>`<div><i style="background:${s.c}"></i>${esc(s.n)}<b>${fmt?fmt(s.v):s.v}</b></div>`).join('')+'</div>';
function lineChart(ser,labels,fmt,title,W,H){
  W=W||1000;H=H||260;const ml=44,mr=14,mt=12,mb=26,id='c'+(++chId);
  const mx=Math.max(1,...ser.flatMap(s=>s.v));const ax=axis(mx);
  const X=k=>ml+(W-ml-mr)*k/(labels.length-1),Y=v=>mt+(H-mt-mb)*(1-v/ax.top);
  let g=ax.t.map(v=>`<line class="gl" x1="${ml}" x2="${W-mr}" y1="${Y(v)}" y2="${Y(v)}"/><text x="${ml-6}" y="${Y(v)+3}" text-anchor="end">${fmt(v)}</text>`).join('');
  labels.forEach((l,k)=>{if(k%4===0||k===labels.length-1)g+=`<text x="${X(k)}" y="${H-7}" text-anchor="middle">${l}</text>`});
  ser.forEach(s=>{
    const d=s.v.map((v,k)=>(k?'L':'M')+X(k).toFixed(1)+','+Y(v).toFixed(1)).join('');
    g+=`<path d="${d}L${X(labels.length-1)},${Y(0)}L${X(0)},${Y(0)}Z" style="fill:${s.c}" opacity=".10"/><path d="${d}" fill="none" style="stroke:${s.c}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>`;
    g+=`<circle cx="${X(labels.length-1)}" cy="${Y(s.v[s.v.length-1])}" r="4" style="fill:${s.c};stroke:var(--surface);stroke-width:2"/>`});
  g+=`<line id="${id}x" class="gl" y1="${mt}" y2="${H-mb}" x1="0" x2="0" style="display:none;stroke:var(--muted)"/><g id="${id}d"></g><rect x="${ml}" y="${mt}" width="${W-ml-mr}" height="${H-mt-mb}" fill="transparent" data-line="${id}"/>`;
  CH[id]={ser,labels,fmt,X,Y,W,ml,mr};
  return `<svg class="ch" id="${id}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(title)}">${g}</svg>`+legend(ser)}
const tip=tipEl;
function showTip(html,x,y){tip.innerHTML=html;tip.classList.add('on');const r=tip.getBoundingClientRect();let l=x+14,t=y+14;if(l+r.width>innerWidth-8)l=x-r.width-14;if(t+r.height>innerHeight-8)t=y-r.height-14;tip.style.left=Math.max(4,l)+'px';tip.style.top=Math.max(4,t)+'px'}
const hideTip=()=>tip.classList.remove('on');
const tipHtml=s=>{const p=s.split('|').map(esc);return '<b>'+p[0]+'</b>'+p.slice(1).join('<br>')};
APP.addEventListener('mouseover',e=>{const t=e.target.closest('[data-tip]');if(t)showTip(tipHtml(t.getAttribute('data-tip')),e.clientX,e.clientY)});
APP.addEventListener('mousemove',e=>{const l=e.target.closest('[data-line]');
  if(l){const c=CH[l.dataset.line],sv=l.ownerSVGElement,r=sv.getBoundingClientRect(),sx=c.W/r.width;const px=(e.clientX-r.left)*sx;let k=Math.round((px-c.ml)/((c.W-c.ml-c.mr)/(c.labels.length-1)));k=Math.max(0,Math.min(c.labels.length-1,k));
    const x=c.X(k),ln=sv.querySelector('#'+l.dataset.line+'x');ln.setAttribute('x1',x);ln.setAttribute('x2',x);ln.style.display='';
    sv.querySelector('#'+l.dataset.line+'d').innerHTML=c.ser.map(s=>`<circle cx="${x}" cy="${c.Y(s.v[k])}" r="4.5" style="fill:${s.c};stroke:var(--surface);stroke-width:2"/>`).join('');
    showTip('<b>'+c.labels[k]+'</b>'+c.ser.map(s=>esc(s.n)+': '+c.fmt(s.v[k])).join('<br>'),e.clientX,e.clientY);return}
  if(tip.classList.contains('on')&&e.target.closest('[data-tip]'))showTip(tip.innerHTML,e.clientX,e.clientY)});
APP.addEventListener('mouseout',e=>{if(e.target.closest('[data-tip],[data-line]')){hideTip();const l=e.target.closest('[data-line]');if(l){const s=l.ownerSVGElement;s.querySelector('#'+l.dataset.line+'x').style.display='none';s.querySelector('#'+l.dataset.line+'d').innerHTML=''}}});

/* ---------- peças ---------- */
const IC={med:'<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M7 9h4M7 13h10M8 21h8"/>',bli:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/>',pes:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6M16 4.5a3.5 3.5 0 010 7M18 14.5c2 .7 3.5 2.6 3.5 5.5"/>',car:'<path d="M3 16V9a1 1 0 011-1h9l4 4h3a1 1 0 011 1v3M3 16h2m14 0h2M7 16a2 2 0 104 0m4 0a2 2 0 104 0"/>',db:'<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',warn:'<path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0zM12 9v4M12 17h.01"/>'};
const svg=(p,w)=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="${w||18}" height="${w||18}">${p}</svg>`;
const kpi=(ic,c,l,v,h)=>`<div class="card kpi"><div class="kpi-ic" style="background:color-mix(in srgb,${c} 16%,transparent);color:${c}">${svg(IC[ic])}</div><div><div class="kpi-l">${l}</div><div class="kpi-v">${v}</div>${h?`<div style="font-size:10px;color:var(--muted);margin-top:1px">${h}</div>`:''}</div></div>`;
const FIC='<span class="fic">fictício</span>',REALT='<span class="real">dados do painel</span>';
const card=(t,s,body,right,cls)=>`<section class="card ${cls||''}"><div class="card-h"><span class="card-t">${t}</span>${s?`<span class="card-s">${s}</span>`:''}${right?`<span class="right">${right}</span>`:''}</div><div class="card-b">${body}</div></section>`;
const tag=(t,c)=>`<span class="tag" style="--tg:${c};--tg-bg:color-mix(in srgb,${c} 14%,transparent);--tg-bd:color-mix(in srgb,${c} 34%,transparent)"><i></i>${esc(t)}</span>`;
const stack=parts=>{const t=sum(parts,p=>p.v)||1;return `<div class="stack">${parts.map(p=>`<i style="width:${p.v/t*100}%;background:${p.c}" data-tip="${esc(p.n+'|'+brlc(p.v)+' ('+pct(p.v/t)+')')}"></i>`).join('')}</div>`};
const periodo=()=>'últimos 30 dias até '+REF.toLocaleDateString('pt-BR');
const bobj=k=>BASES.find(b=>b.k===k);
function view(b){
  const prod=b.prodL.length?hbar(b.prodL.slice(0,8).map(p=>({l:p.n,v:p.v})),num,'var(--s2)'):'<div class="vazio">sem lançamentos de blindagem no período</div>';
  const chart=b.med+b.bli>0?lineChart([{n:'Medidores',c:'var(--s1)',v:b.sMed},{n:'Blindagens',c:'var(--s2)',v:b.sBli}],DIAS.map(dlab),num,'Medidores e blindagens por dia',1000,250):'<div class="vazio">Esta base não teve lançamentos de medidores nem de blindagem no período.</div>';
  const rows=b.rows.slice(0,12).map(r=>`<tr><td>${dlab(r.d)}/${r.d.getFullYear()}</td><td class="num">${num(r.q)}</td><td class="num">${num(r.eq)}</td><td>${esc(r.meta||'')}</td><td>${esc(r.mot||'')}</td><td>${esc(r.ger||'')}</td></tr>`).join('');
  return `<div class="kpis">${kpi('med','var(--s1)','Medidores · 30 dias',num(b.med),nf1.format(b.med/30)+' por dia')}${kpi('bli','var(--s2)','Blindagens · 30 dias',num(b.bli),nf1.format(b.bli/30)+' por dia')}${kpi('pes','var(--s6)','Equipes no período',num(b.eq),'soma dos dias')}${kpi('warn','var(--s4)','Dias com lançamento',b.dias+' de 30','')}</div>
  ${card('Medidores e blindagens por dia',periodo(),chart,REALT)}
  <div class="duas">${card('Blindagem por produto',periodo(),prod,REALT)}${card('Últimos lançamentos','medidores',rows?`<div class="tbl-wrap"><table><thead><tr><th>Data</th><th class="num">Medidores</th><th class="num">Equipes</th><th>Meta</th><th>Motivo</th><th>Gerente</th></tr></thead><tbody>${rows}</tbody></table></div>`:'<div class="vazio">sem lançamentos</div>',REALT)}</div>`;
}
function showOriginal(){WRAP.style.display='';APP.style.display='none';scrollTo(0,0)}
function openBase(b){
  hydrate();const x=bobj(b.k)||{k:b.k,nome:b.nome,sMed:Array(30).fill(0),sBli:Array(30).fill(0),eq:0,prodL:[],rows:[],med:0,bli:0,dias:0,ger:''};
  $('pageTitle').textContent=x.nome;$('subTitle').textContent=(x.ger?'Gerente: '+x.ger+' · ':'')+periodo();
  $('pageRight').innerHTML='<button class="btn" id="b-back">← Painel da diretoria</button>';
  $('main').innerHTML=view(x);$('back').onclick=showOriginal;
  WRAP.style.display='none';APP.style.display='';scrollTo(0,0);
}
function baseDoElemento(el){
  const h=el.closest('.hbar');const txt=h?(h.querySelector('.hbar-n')||{}).textContent:el.textContent;
  const n=norm(txt);if(!n)return null;hydrate();return BASES.find(b=>b.k===n)||null;
}
WRAP.addEventListener('click',e=>{const el=e.target.closest('#main .hbar, #main .tag');if(!el)return;const b=baseDoElemento(el);if(b)openBase(b)});
WRAP.addEventListener('mouseover',e=>{const el=e.target.closest('#main .hbar, #main .tag');if(!el||el.dataset.bchk)return;el.dataset.bchk='1';if(baseDoElemento(el)){el.style.cursor='pointer';if(!el.title)el.title='Abrir a base'}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&APP.style.display!=='none')showOriginal()});
})();
