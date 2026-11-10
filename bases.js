/* =====================================================================
   FIXAR · tela por base (dados reais do painel) — período: mês / tudo + mês a mês
   Como instalar: coloque este arquivo ao lado do seu index.html e
   adicione UMA linha antes de </body>:   <script src="bases.js"></script>
   Não altera o painel nem o login. Só lê os dados que o painel já carregou.
   ===================================================================== */
(function(){
"use strict";
console.log('bases.js v4 (sem 30 dias; abre no mês; bases por usuário)');
const WRAP=(document.getElementById('main')||{}).closest?document.getElementById('main').closest('.wrap'):null;
if(!WRAP){console.warn('bases.js: painel não encontrado');return}
const st=document.createElement('style');st.id='b-css';st.textContent=`#baseApp .page-h{display:flex;align-items:flex-end;gap:12px;flex-wrap:wrap}#baseApp .page-h .right{margin-left:auto;display:flex;gap:7px;flex-wrap:wrap;align-items:center}#baseApp .b-tabs{display:flex;gap:6px;margin-bottom:14px;flex-wrap:wrap}#baseApp .b-tab{padding:7px 14px;border-radius:8px;border:1px solid var(--border);background:var(--surface);cursor:pointer;font-size:11.5px;font-weight:700;letter-spacing:.3px;color:var(--ink-2);transition:var(--t)}#baseApp .b-tab.active{background:var(--accent);color:#fff;border-color:var(--accent)}#baseApp .b-tab:hover:not(.active){background:var(--surface-2);color:var(--ink)}#baseApp .demo{border:1px dashed color-mix(in srgb,var(--warn) 55%,transparent);background:color-mix(in srgb,var(--warn) 8%,transparent);color:var(--ink-2);border-radius:var(--r-sm);padding:7px 12px;font-size:11px;margin-bottom:12px}#baseApp .demo b{color:var(--warn)}#baseApp .card-h{flex-wrap:wrap}#baseApp .card-h .right{margin-left:auto;display:flex;gap:6px;align-items:center}#baseApp .fic{font-size:8.5px;font-weight:800;letter-spacing:.6px;text-transform:uppercase;color:var(--warn);border:1px solid color-mix(in srgb,var(--warn) 45%,transparent);border-radius:20px;padding:1px 7px}#baseApp .real{font-size:8.5px;font-weight:800;letter-spacing:.6px;text-transform:uppercase;color:var(--good);border:1px solid color-mix(in srgb,var(--good) 45%,transparent);border-radius:20px;padding:1px 7px}#baseApp .b-tres{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;align-items:start}@media (max-width:900px){#baseApp .b-tres{grid-template-columns:minmax(0,1fr)}}#baseApp .duas{align-items:start}#baseApp .card{min-width:0}#baseApp .b-dd{position:relative}#baseApp .b-dd-btn{display:flex;align-items:center;gap:10px;justify-content:space-between;min-width:190px;height:34px;padding:0 12px;background:#1b1b1b;color:#f2f2f2;border:1px solid #333;border-radius:8px;cursor:pointer;font-size:12px;font-weight:600}#baseApp .b-dd-btn:hover{border-color:#4a4a4a}#baseApp .b-dd-menu{position:absolute;right:0;top:calc(100% + 4px);z-index:60;min-width:100%;max-height:340px;overflow:auto;background:#1b1b1b;border:1px solid #333;border-radius:8px;padding:4px;box-shadow:0 10px 30px rgba(0,0,0,.55)}#baseApp .b-dd-menu[hidden]{display:none}#baseApp .b-dd-menu button{display:block;width:100%;text-align:left;white-space:nowrap;background:#1b1b1b;color:#f2f2f2;border:0;border-radius:5px;padding:8px 10px;font-size:12px;cursor:pointer}#baseApp .b-dd-menu button:hover{background:#2c2c2c}#baseApp .b-dd-menu button.on{background:#3987e5;color:#fff}#baseApp select{color-scheme:dark;background:#1b1b1b;color:#f2f2f2}#baseApp select option{background:#1b1b1b;color:#f2f2f2}#baseApp select option:checked{background:#3987e5;color:#fff}#baseApp>.wrap>#b-main>.card{margin-bottom:12px}#baseApp .hbar:last-child{margin-bottom:0}#baseApp .hbar-n{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#baseApp .hbar-v{white-space:nowrap}#baseApp .brow{display:block;width:100%;text-align:left;background:none;border:0;border-bottom:1px solid var(--border);padding:11px 4px;cursor:pointer;border-radius:0}#baseApp .brow:last-child{border-bottom:0}#baseApp .brow:hover{background:var(--surface-2)}#baseApp .brow-h{display:flex;align-items:center;gap:8px;margin-bottom:6px;font-weight:800;font-size:12px;letter-spacing:.3px}#baseApp .brow-h i{width:9px;height:9px;border-radius:50%;background:var(--c)}#baseApp .brow-h span{margin-left:auto;color:var(--accent);font-size:10px;font-weight:700;letter-spacing:.6px;text-transform:uppercase}#baseApp .bpair{display:grid;grid-template-columns:1fr 1fr;gap:10px 18px}#baseApp .bpair .hbar{margin:0}@media (max-width:760px){#baseApp .bpair{grid-template-columns:1fr}}#baseApp tbody tr.go{cursor:pointer}#baseApp tbody tr.go:hover{background:var(--surface-2)}#baseApp tbody tr.sel td{background:color-mix(in srgb,var(--accent) 14%,transparent)}#baseApp tr.fim td{font-weight:800;border-top:2px solid var(--border-2);background:var(--surface-2)}#baseApp .b-seg{display:flex;background:var(--surface-2);border:1px solid var(--border);border-radius:var(--r-sm);padding:2px;flex-wrap:wrap}#baseApp .b-seg button{background:none;border:0;padding:5px 10px;border-radius:4px;cursor:pointer;font-size:10.5px;font-weight:700;letter-spacing:.4px;color:var(--muted);transition:var(--t)}#baseApp .b-seg button[aria-pressed="true"]{background:var(--surface);color:var(--ink);box-shadow:0 1px 2px rgba(0,0,0,.2)}#baseApp .btn.primary{background:var(--accent);border-color:var(--accent);color:#fff}#baseApp .btn.primary:hover{filter:brightness(1.12);color:#fff}#baseApp .legend{display:flex;flex-wrap:wrap;gap:4px 12px;margin-top:10px;padding-top:8px;border-top:1px solid var(--border)}#baseApp .legend span{display:flex;align-items:center;gap:5px;font-size:9px;color:var(--ink-2);letter-spacing:.4px;text-transform:uppercase}#baseApp .legend i{width:8px;height:8px;border-radius:2px;flex:none}#baseApp .stack{display:flex;gap:2px;height:14px;margin:4px 0 2px}#baseApp .stack i{display:block;height:100%;min-width:2px;border-radius:3px}#baseApp .donutrow{display:flex;align-items:center;gap:16px;flex-wrap:wrap}#baseApp .donut{position:relative;width:112px;height:112px;flex:none}#baseApp .donut svg{width:100%;height:100%;transform:rotate(-90deg)}#baseApp .donut div{position:absolute;inset:0;display:grid;place-content:center;text-align:center}#baseApp .donut b{font-weight:800;letter-spacing:-.8px;line-height:1}#baseApp .donut span{font-size:8px;color:var(--muted);letter-spacing:.8px;text-transform:uppercase}#baseApp .dl{display:grid;gap:6px;flex:1;min-width:150px}#baseApp .dl div{display:flex;align-items:center;gap:7px;font-size:11.5px;color:var(--ink-2)}#baseApp .dl i{width:9px;height:9px;border-radius:2px;flex:none}#baseApp .dl b{margin-left:auto;color:var(--ink);font-variant-numeric:tabular-nums}#baseApp .tiles{display:grid;grid-template-columns:repeat(auto-fill,minmax(112px,1fr));gap:6px}#baseApp .tile{background:var(--surface-2);border:1px solid var(--border);border-radius:var(--r-sm);padding:7px 8px;cursor:pointer;transition:var(--t);position:relative;overflow:hidden;text-align:left;min-width:0}#baseApp .tile:hover{border-color:var(--border-2);transform:translateY(-1px)}#baseApp .tile::before{content:"";position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--st)}#baseApp .tile-n{display:flex;align-items:center;gap:5px;font-size:11px;font-weight:800;letter-spacing:.3px}#baseApp .dot{width:7px;height:7px;border-radius:50%;background:var(--st);flex:none}#baseApp .tile-t{font-size:9px;color:var(--muted);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#baseApp .tile-st{font-size:8.5px;letter-spacing:.5px;text-transform:uppercase;color:var(--st);font-weight:800;margin-top:3px}#baseApp .tile-m{font-size:8.5px;color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#baseApp .b-mini{display:flex;align-items:flex-start;gap:10px;padding:8px 0;border-bottom:1px solid var(--border);font-size:11px;color:var(--ink-2);line-height:1.5}#baseApp .b-mini:last-child{border-bottom:0}#baseApp .b-mini b{color:var(--ink)}#baseApp .b-mini .t{margin-left:auto;color:var(--muted);white-space:nowrap;font-size:10px}#baseApp .note{background:var(--surface);border:1px solid var(--border);border-left:3px solid var(--accent);border-radius:var(--r-sm);padding:10px 12px;font-size:11.5px;color:var(--ink-2);margin-bottom:12px}#baseApp .note b{color:var(--ink)}#baseApp svg.ch{display:block;width:100%;height:auto;overflow:visible}#baseApp svg.ch text{font:400 10px var(--sans);fill:var(--ink-2)}#baseApp svg.ch .gl{stroke:var(--grid);stroke-width:1}#baseApp .chk{width:17px;height:17px;accent-color:var(--accent);cursor:pointer}#baseApp .chk:disabled{cursor:default;opacity:.55}#baseApp .sub{font-size:9.5px;color:var(--muted);letter-spacing:.4px;text-transform:uppercase}#b-tip{position:fixed;pointer-events:none;z-index:120;background:var(--surface);border:1px solid var(--border-2);border-radius:6px;padding:7px 9px;font-size:11px;box-shadow:var(--shadow);opacity:0;transition:opacity .1s;max-width:250px}#b-tip.on{opacity:1}#b-tip b{display:block;font-size:11.5px;margin-bottom:2px}`;document.head.appendChild(st);
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
let MALL=[],PALL=[],REF=new Date(),BASES=[];
const COR=['var(--s1)','var(--s2)','var(--s3)','var(--s4)','var(--s5)','var(--s6)'];
const MESN=['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'];
const mkey=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0');
const mlab=k=>{const [y,m]=k.split('-');return MESN[+m-1]+'/'+y};
function hydrate(){
  let emb={};try{emb=JSON.parse(document.getElementById('dados-embutidos').textContent)}catch(e){}
  MALL=parseCSV(emb.fechamento_bases).map(r=>({k:norm(r.base),n:r.base,d:pdate(r.data),q:qn(r.quantidade),eq:qn(r.equipes),meta:r.meta,mot:r.motivo,obs:r.observacao,ger:r.gerente,h:r.hora})).filter(r=>r.d&&r.k);
  PALL=parseCSV(emb.fechamento_producao).map(r=>({k:norm(r.base),n:r.base,d:pdate(r.data),q:qn(r.quantidade),eq:qn(r.equipes),p:/^caixa tanquinho$/i.test((r.produto||'').trim())?'BLINDAGEM':r.produto,ger:r.gerente,h:r.hora})).filter(r=>r.d&&r.k);
  const ok=window.CEO_BASES_OK;if(ok){MALL=MALL.filter(r=>ok.has(r.k));PALL=PALL.filter(r=>ok.has(r.k))}
  const src=MALL.length?MALL:PALL;REF=src.length?new Date(Math.max(...src.map(r=>+r.d))):new Date();
  const map={};
  [...MALL,...PALL].forEach(r=>{if(!map[r.k])map[r.k]={k:r.k,nome:r.n,M:[],P:[],ger:''}});
  MALL.forEach(r=>{const b=map[r.k];b.M.push(r);if(r.ger&&!/importado/i.test(r.ger)&&!b.ger)b.ger=r.ger});
  PALL.forEach(r=>map[r.k].P.push(r));
  BASES=Object.values(map).sort((a,c)=>a.nome.localeCompare(c.nome)).map((b,i)=>Object.assign(b,{id:b.k,c:COR[i%6]}));
}
/* período: um mês 'aaaa-mm' (padrão = mês de referência) ou 'tudo' */
let PER='tudo',ATUAL=null;
function perInicial(b){const ms=porMes(b).map(o=>o.k);const r=mkey(REF);return ms.includes(r)?r:(ms[0]||'tudo')}
function faixa(per){
  if(per==='tudo')return {ini:null,fim:null,rot:'todo o período',curto:'tudo'};
  const [y,m]=per.split('-').map(Number);const ini=new Date(y,m-1,1);let fim=new Date(y,m,0);if(fim>REF)fim=new Date(REF);
  return {ini,fim,rot:mlab(per)+(fim.getMonth()===REF.getMonth()&&fim.getFullYear()===REF.getFullYear()?' (até '+REF.toLocaleDateString('pt-BR')+')':''),curto:mlab(per)};
}
const dentro=(d,f)=>!f.ini||(d>=f.ini&&d<=f.fim);
function diasDe(f){const out=[];const d=new Date(f.ini);while(d<=f.fim){out.push(new Date(d));d.setDate(d.getDate()+1)}return out}
function porMes(b){
  const m={};
  const add=(r,campo,eqc)=>{const k=mkey(r.d);const o=m[k]||(m[k]={k,med:0,bli:0,eqM:0,eqB:0,dias:new Set()});o[campo]+=r.q;o[eqc]+=r.eq;if(r.q>0)o.dias.add(dkey(r.d))};
  b.M.forEach(r=>add(r,'med','eqM'));b.P.forEach(r=>add(r,'bli','eqB'));
  return Object.values(m).sort((a,c)=>a.k<c.k?1:-1).map(o=>Object.assign(o,{nd:o.dias.size}));
}
function calc(b,per){
  const f=faixa(per);
  const M=b.M.filter(r=>dentro(r.d,f)),P=b.P.filter(r=>dentro(r.d,f));
  const med=sum(M,r=>r.q),bli=sum(P,r=>r.q),eqM=sum(M,r=>r.eq),eqB=sum(P,r=>r.eq);
  const diasLanc=new Set([...M,...P].filter(r=>r.q>0).map(r=>dkey(r.d))).size;
  const prod={};P.forEach(r=>{prod[r.p||'—']=(prod[r.p||'—']||0)+r.q});
  let serie;
  if(per==='tudo'){
    const meses=porMes(b).slice().reverse();
    serie={labels:meses.map(o=>mlab(o.k)),med:meses.map(o=>o.med),bli:meses.map(o=>o.bli),tit:'Medidores e blindagens por mês'};
  }else{
    const dias=diasDe(f),idx={};dias.forEach((d,i)=>idx[dkey(d)]=i);
    const sm=Array(dias.length).fill(0),sb=Array(dias.length).fill(0);
    M.forEach(r=>{const i=idx[dkey(r.d)];if(i!=null)sm[i]+=r.q});P.forEach(r=>{const i=idx[dkey(r.d)];if(i!=null)sb[i]+=r.q});
    serie={labels:dias.map(dlab),med:sm,bli:sb,tit:'Medidores e blindagens por dia',nDias:dias.length};
  }
  /* lançamentos agrupados por dia: medidores + blindagem na mesma linha */
  const dia={};
  const get=r=>dia[dkey(r.d)]||(dia[dkey(r.d)]={d:r.d,med:0,bli:0,eqM:0,eqB:0,mot:[],ger:new Set()});
  M.forEach(r=>{const o=get(r);o.med+=r.q;o.eqM+=r.eq;if(r.mot)o.mot.push(r.mot);if(r.ger)o.ger.add(r.ger)});
  P.forEach(r=>{const o=get(r);o.bli+=r.q;o.eqB+=r.eq;if(r.ger)o.ger.add(r.ger)});
  const lanc=Object.values(dia).sort((a,c)=>+c.d-+a.d);
  return {f,med,bli,eqM,eqB,diasLanc,serie,lanc,prodL:Object.entries(prod).map(([n,v])=>({n,v})).sort((a,c)=>c.v-a.v)};
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
const bobj=k=>BASES.find(b=>b.k===k);
function seletor(b){
  const meses=porMes(b).map(o=>o.k);
  const ops=[...meses.map(k=>[k,mlab(k)+(k===mkey(REF)?' (este mês)':'')]),['tudo','Tudo (todo o período)']];
  const atual=(ops.find(o=>o[0]===PER)||ops[0])[1];
  return `<div class="b-dd" id="b-dd"><button type="button" class="b-dd-btn" id="b-ddbtn" aria-haspopup="listbox" aria-expanded="false">${esc(atual)}<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></button><div class="b-dd-menu" id="b-ddmenu" role="listbox" hidden>${ops.map(([v,t])=>`<button type="button" role="option" data-per="${v}" class="${v===PER?'on':''}">${esc(t)}</button>`).join('')}</div></div>`;
}
function tabelaMeses(b){
  const ms=porMes(b);if(!ms.length)return '<div class="vazio">sem lançamentos</div>';
  const nd=sum(ms,o=>o.nd);
  const linha=o=>`<tr class="go${o.k===PER?' sel':''}" data-mes="${o.k}" title="Ver ${mlab(o.k)}"><td><b>${mlab(o.k)}</b></td><td class="num">${num(o.med)}</td><td class="num">${num(o.bli)}</td><td class="num">${num(o.eqM)}</td><td class="num">${num(o.eqB)}</td><td class="num">${o.nd}</td><td class="num">${o.nd&&o.med?nf1.format(o.med/o.nd):'—'}</td><td class="num">${o.nd&&o.bli?nf1.format(o.bli/o.nd):'—'}</td></tr>`;
  const T=k=>sum(ms,o=>o[k]);
  return `<div class="tbl-wrap"><table><thead><tr><th>Mês</th><th class="num">Medidores</th><th class="num">Blindagens</th><th class="num">Eq. medidores</th><th class="num">Eq. blindagem</th><th class="num">Dias c/ lanç.</th><th class="num">Média med./dia</th><th class="num">Média blind./dia</th></tr></thead><tbody>${ms.map(linha).join('')}<tr class="fim"><td>Total</td><td class="num">${num(T('med'))}</td><td class="num">${num(T('bli'))}</td><td class="num">${num(T('eqM'))}</td><td class="num">${num(T('eqB'))}</td><td class="num">${nd}</td><td class="num">${nd?nf1.format(T('med')/nd):'—'}</td><td class="num">${nd?nf1.format(T('bli')/nd):'—'}</td></tr></tbody></table></div><div class="sub" style="margin-top:8px">clique num mês para ver os dias dele</div>`;
}
function view(b){
  const c=calc(b,PER),rot=c.f.rot,cur=c.f.curto;
  const porDia=v=>c.diasLanc?nf1.format(v/c.diasLanc)+' por dia com lançamento':'';
  const prod=c.prodL.length?hbar(c.prodL.slice(0,8).map(p=>({l:p.n,v:p.v})),num,'var(--s2)'):'<div class="vazio">sem lançamentos de blindagem no período</div>';
  const s=c.serie;
  const chart=(c.med+c.bli>0&&s.labels.length>1)?lineChart([{n:'Medidores',c:'var(--s1)',v:s.med},{n:'Blindagens',c:'var(--s2)',v:s.bli}],s.labels,num,s.tit,1000,250)
    :(c.med+c.bli>0?'<div class="vazio">só um '+(PER==='tudo'?'mês':'dia')+' com dados — veja a tabela abaixo</div>':'<div class="vazio">Esta base não teve lançamentos de medidores nem de blindagem no período.</div>');
  const MAXL=PER==='tudo'?60:40;
  const rows=c.lanc.slice(0,MAXL).map(r=>`<tr><td>${dlab(r.d)}/${r.d.getFullYear()}</td><td class="num">${num(r.med)}</td><td class="num">${num(r.bli)}</td><td class="num">${num(r.eqM)}</td><td class="num">${num(r.eqB)}</td><td>${esc(r.mot.join('; '))}</td><td>${esc([...r.ger].join(', '))}</td></tr>`).join('');
  const sobra=c.lanc.length>MAXL?`<div class="sub" style="margin-top:8px">mostrando os ${MAXL} dias mais recentes de ${c.lanc.length}</div>`:'';
  const diasTxt=PER==='tudo'?c.diasLanc+'':c.diasLanc+' de '+s.nDias;
  return `<div class="kpis">${kpi('med','var(--s1)','Medidores · '+cur,num(c.med),porDia(c.med))}${kpi('bli','var(--s2)','Blindagens · '+cur,num(c.bli),porDia(c.bli))}${kpi('pes','var(--s6)','Equipes no período',num(c.eqM),'medidores (soma dos dias)'+(c.eqB?' · blindagem '+num(c.eqB):''))}${kpi('warn','var(--s4)','Dias com lançamento',diasTxt,PER==='tudo'?'em '+porMes(b).length+' meses':'')}</div>
  ${card(s.tit,rot,chart,REALT)}
  ${card('Mês a mês','todos os meses desta base',tabelaMeses(b),REALT)}
  ${card('Blindagem por produto',rot,prod,REALT)}${card('Lançamentos por dia',rot,rows?`<div class="tbl-wrap"><table><thead><tr><th>Data</th><th class="num">Medidores</th><th class="num">Blindagens</th><th class="num">Eq. med.</th><th class="num">Eq. blind.</th><th>Motivo</th><th>Gerente</th></tr></thead><tbody>${rows}</tbody></table></div>${sobra}`:'<div class="vazio">sem lançamentos no período</div>',REALT)}`;
}
function showOriginal(){WRAP.style.display='';APP.style.display='none';scrollTo(0,0)}
function render(){
  const x=ATUAL;
  $('pageTitle').textContent=x.nome;$('subTitle').textContent=(x.ger?'Gerente: '+x.ger+' · ':'')+faixa(PER).rot;
  $('pageRight').innerHTML=seletor(x)+'<button class="btn" id="b-back">← Painel da diretoria</button>';
  $('main').innerHTML=view(x);$('back').onclick=showOriginal;
  const bt=$('ddbtn'),mn=$('ddmenu');
  bt.onclick=e=>{e.stopPropagation();const abrir=mn.hidden;mn.hidden=!abrir;bt.setAttribute('aria-expanded',abrir)};
  mn.onclick=e=>{const o=e.target.closest('[data-per]');if(!o)return;PER=o.dataset.per;render()};
}
function openBase(b){
  hydrate();ATUAL=bobj(b.k)||{k:b.k,nome:b.nome,M:[],P:[],ger:''};PER=perInicial(ATUAL);render();
  WRAP.style.display='none';APP.style.display='';scrollTo(0,0);
}
document.addEventListener('click',e=>{const m=document.getElementById('b-ddmenu');if(m&&!m.hidden&&!e.target.closest('#b-dd')){m.hidden=true;const b=document.getElementById('b-ddbtn');if(b)b.setAttribute('aria-expanded','false')}});
APP.addEventListener('click',e=>{const tr=e.target.closest('tr[data-mes]');if(!tr)return;PER=tr.dataset.mes;render();scrollTo({top:0,behavior:'smooth'})});
function baseDoElemento(el){
  const h=el.closest('.hbar');const txt=h?(h.querySelector('.hbar-n')||{}).textContent:el.textContent;
  const n=norm(txt);if(!n)return null;hydrate();return BASES.find(b=>b.k===n)||null;
}
WRAP.addEventListener('click',e=>{const el=e.target.closest('#main .hbar, #main .tag');if(!el)return;const b=baseDoElemento(el);if(b)openBase(b)});
WRAP.addEventListener('mouseover',e=>{const el=e.target.closest('#main .hbar, #main .tag');if(!el||el.dataset.bchk)return;el.dataset.bchk='1';if(baseDoElemento(el)){el.style.cursor='pointer';if(!el.title)el.title='Abrir a base'}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&APP.style.display!=='none')showOriginal()});
})();
