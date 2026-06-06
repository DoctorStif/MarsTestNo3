/* eslint-disable */
// @ts-nocheck

// ═══════════════════════════════════════
// TRANSLATIONS
// ═══════════════════════════════════════
import { marsResources } from './i18n/resources';

const T = marsResources;

let currentLang = 'tr';
const langConfig = {
  tr: { flag: '🇹🇷', label: 'TR' },
  en: { flag: '🇬🇧', label: 'EN' },
  de: { flag: '🇩🇪', label: 'DE' }
};

function closeMobileMenu() {
  document.body.classList.remove('menu-open');
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('mobile-menu');
  if (toggle) toggle.setAttribute('aria-expanded', 'false');
  if (menu) menu.setAttribute('aria-hidden', 'true');
}

function openMobileMenu() {
  document.body.classList.add('menu-open');
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('mobile-menu');
  if (toggle) toggle.setAttribute('aria-expanded', 'true');
  if (menu) menu.setAttribute('aria-hidden', 'false');
}

function toggleMobileMenu() {
  if (document.body.classList.contains('menu-open')) closeMobileMenu();
  else openMobileMenu();
}

function applyLang(lang) {
  currentLang = lang;
  window.marsReactI18nChangeLanguage?.(lang);
  const dict = T[lang];
  document.documentElement.lang = lang;

  // Update lang selector display
  document.getElementById('lang-flag').textContent = langConfig[lang].flag;
  document.getElementById('lang-label').textContent = langConfig[lang].label;
  document.querySelectorAll('.lang-option').forEach(o => {
    o.classList.toggle('active', o.dataset.lang === lang);
  });

  // Apply translations to data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  // Apply innerHTML translations (for spans inside)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  // Apply placeholder translations
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });

  // Update page title
  const titles = { tr:'Mars Kaplama – Endüstriyel Yüzey Kaplama', en:'Mars Kaplama – Industrial Surface Coating', de:'Mars Kaplama – Industrielle Oberflächenbeschichtung' };
  document.title = titles[lang];

  // Rebuild gallery if it is visible
  if (typeof buildGallery === 'function') buildGallery(currentFilter);
  const langSwitch = document.querySelector('.lang-switcher');
  if (langSwitch) langSwitch.classList.remove('open');
}

export function setMarsLanguage(lang) {
  applyLang(lang);
}

// ═══════════════════════════════════════
// THEME ENGINE
// ═══════════════════════════════════════
let isDark = true;

// ═══════════════════════════════════════
// GALLERY DATA
// ═══════════════════════════════════════
// ═══════════════════════════════════════
// BOLT COATING ANIMATION — Generic per-page
// ═══════════════════════════════════════
const STAGES_DATA = {
  tr: [
    { label:'Yağlı Cıvata',  desc:'Ham cıvata yüzeyinde üretim kalıntısı yağ ve pas tabakası bulunur. Bu kirlilikler kaplamanın tutunmasını engeller.' },
    { label:'Yağ Giderme',   desc:'Alkalin yağ giderme banyosunda cıvata 60–80°C\'de yıkanır. Tüm organik kirlilikler ve yağ kalıntıları uzaklaştırılır.' },
    { label:'Asitleme',      desc:'Seyreltik asit banyosunda oksit tabakası ve yüzey pası çözündürülür. Metal yüzey kaplama için aktif hale getirilir.' },
    { label:'Kumlama',       desc:'Basınçlı abrasif tanecikleriyle yüzey pürüzlendirilir. Mikro düzeyde tüm kirlilikler ve çapaklar giderilir.' },
    { label:'Kaplama',       desc:'Elektrolitik banyoda çinko iyonları metal yüzeye biriktirilir. Kontrollü parametrelerle 8–12 μm kaplama kalınlığı elde edilir.' },
    { label:'Bitmiş Ürün',   desc:'Kaplama tamamlandı. Yüzey tuz spreyine karşı 480 saat direnç gösterir. Kromat işlemi ile korozyon koruması artırıldı.' }
  ],
  en: [
    { label:'Oily Bolt',        desc:'The raw bolt surface contains manufacturing oil residue and rust layers. These contaminants prevent the coating from adhering properly.' },
    { label:'Degreasing',       desc:'The bolt is washed in an alkaline degreasing bath at 60–80°C. All organic contaminants and oil residues are completely removed.' },
    { label:'Acid Pickling',    desc:'The oxide layer and surface rust are dissolved in a dilute acid bath. The metal surface is activated and prepared for coating.' },
    { label:'Shot Blasting',    desc:'The surface is roughened with pressurized abrasive particles. All micro-level contamination and burrs are removed for optimal adhesion.' },
    { label:'Coating',          desc:'Zinc ions are deposited onto the metal surface in an electrolytic bath. A controlled 8–12 μm coating thickness is achieved.' },
    { label:'Finished Product', desc:'Coating complete. The surface offers 480 hours of salt spray resistance. Chromate post-treatment further enhances corrosion protection.' }
  ],
  de: [
    { label:'Fettige Schraube', desc:'Die Rohschraube weist Fertigungsölrückstände und Rostschichten auf. Diese Verunreinigungen verhindern die Haftung der Beschichtung.' },
    { label:'Entfettung',       desc:'Die Schraube wird in einem alkalischen Entfettungsbad bei 60–80°C gewaschen. Alle organischen Verunreinigungen werden vollständig entfernt.' },
    { label:'Beizen',           desc:'Die Oxidschicht und der Oberflächenrost werden in einem verdünnten Säurebad aufgelöst. Die Metalloberfläche wird für die Beschichtung aktiviert.' },
    { label:'Strahlen',         desc:'Die Oberfläche wird mit Druckstrahlmitteln aufgerauht. Alle Mikro-Verunreinigungen und Grate werden für optimale Haftung entfernt.' },
    { label:'Beschichtung',     desc:'Zinkionen werden in einem Elektrolytbad auf der Metalloberfläche abgeschieden. Eine kontrollierte Schichtdicke von 8–12 μm wird erreicht.' },
    { label:'Fertiges Produkt', desc:'Beschichtung abgeschlossen. Die Oberfläche bietet 480 Stunden Salzsprühwiderstand. Chromatnachbehandlung verbessert den Korrosionsschutz.' }
  ]
};

// Track one RAF handle per page
const boltAnims = {};

export function stopMarsBoltAnimation(pageId) {
  if (boltAnims[pageId]) {
    cancelAnimationFrame(boltAnims[pageId]);
    boltAnims[pageId] = null;
  }
}

export function stopAllMarsBoltAnimations(exceptId) {
  Object.keys(boltAnims).forEach(pageId => {
    if (pageId !== exceptId) stopMarsBoltAnimation(pageId);
  });
}

// Stage visual configs (shared)
const STAGE_CONFIGS = [
  { boltBody:'#5a4a3a', boltHead:'#4a3c2e', rust:true,  oilSheen:true,  particles:null,   bath:null,      shine:false },
  { boltBody:'#6b5540', boltHead:'#5c4635', rust:true,  oilSheen:false, particles:null,   bath:'#1a4a7a', shine:false },
  { boltBody:'#7a6550', boltHead:'#6b5640', rust:false, oilSheen:false, particles:null,   bath:'#4a6a1a', shine:false },
  { boltBody:'#8a7a6a', boltHead:'#7a6a5a', rust:false, oilSheen:false, particles:'blast',bath:null,      shine:false },
  { boltBody:'#7890a0', boltHead:'#6880a0', rust:false, oilSheen:false, particles:'zinc', bath:'#0a1e3a', shine:false },
  { boltBody:'#a8c8e0', boltHead:'#90b8d8', rust:false, oilSheen:false, particles:null,   bath:null,      shine:true  },
];

function shadeColor(hex, pct) {
  const n = parseInt(hex.replace('#',''), 16);
  const r = Math.max(0, Math.min(255, ((n>>16)&255) + pct));
  const g = Math.max(0, Math.min(255, ((n>>8)&255) + pct));
  const b = Math.max(0, Math.min(255, (n&255) + pct));
  return `rgb(${r},${g},${b})`;
}

function randomParticle(type, CX, H, SHANK_W) {
  if (type === 'blast') {
    const angle = Math.random() * Math.PI * 2;
    const speed = 2 + Math.random() * 4;
    return { x:CX+(Math.random()-.5)*SHANK_W, y:H*.45, vx:Math.cos(angle)*speed, vy:Math.sin(angle)*speed-1, life:1, type:'blast', size:1.5+Math.random()*2.5, color:`hsl(${30+Math.random()*40},80%,${50+Math.random()*30}%)` };
  }
  if (type === 'zinc') {
    return { x:CX+(Math.random()-.5)*200, y:H*.82+Math.random()*40, vx:(Math.random()-.5)*.5, vy:-(1+Math.random()*2.5), life:1, type:'zinc', size:2+Math.random()*3, color:`hsl(${200+Math.random()*30},${60+Math.random()*30}%,${55+Math.random()*20}%)` };
  }
}

/**
 * Start the bolt animation for a specific page.
 * @param {string} pageId  e.g. 'about', 'services', 'gallery', …
 * @param {number} [jumpStage]  optional stage to jump to immediately
 */
export function startMarsBoltAnimation(pageId, jumpStage) {
  const canvas = document.getElementById('bolt-canvas-' + pageId);
  const pillsContainer = document.getElementById('cs-' + pageId);
  const numEl  = document.getElementById('sdb-num-'  + pageId);
  const textEl = document.getElementById('sdb-text-' + pageId);
  const replayBtn = document.getElementById('replay-btn-' + pageId);

  if (!canvas || !pillsContainer) return;

  // Stop any running animation for this page
  stopMarsBoltAnimation(pageId);

  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  const CX = W/2, CY = H/2;

  // Bolt geometry
  const HEAD_W=88, HEAD_H=54;
  const HEAD_Y=CY-80;
  const SHANK_W=36;
  const SHANK_Y_START=HEAD_Y+HEAD_H;
  const SHANK_LEN=130;
  const SHANK_Y_END=SHANK_Y_START+SHANK_LEN;
  const WASHER_H=10, TIP_H=22, THREAD_PITCH=12;

  function hexPoints(cx,cy,w,h){
    const pts=[];
    for(let i=0;i<6;i++){const a=(Math.PI/3)*i-Math.PI/6;pts.push([cx+(w/2)*Math.cos(a),cy+(h/2)*Math.sin(a)]);}
    return pts;
  }

  // State
  let stage = (jumpStage !== undefined) ? Math.max(0, Math.min(5, jumpStage)) : 0;
  let stageT = (jumpStage !== undefined) ? 0 : 0;
  const STAGE_DUR = 320; // ~5s per stage at 60fps — slower
  let particles = [];
  let coatLevel = (stage >= 5) ? 1 : (stage === 4 ? 0 : 0);
  let frame = 0;

  if (replayBtn) replayBtn.classList.remove('show');

  // Update side-panel pills + description
  function updateUI(s) {
    const pills = pillsContainer.querySelectorAll('.cs-pill');
    pills.forEach((p,i) => {
      p.classList.toggle('active', i === s);
      p.classList.toggle('done', i < s);
    });
    const data = STAGES_DATA[currentLang] || STAGES_DATA.tr;
    if (numEl)  numEl.textContent  = String(s+1).padStart(2,'0');
    if (textEl) textEl.textContent = data[s]?.desc || '';
  }

  updateUI(stage);

  // ── Draw one frame ──
  function drawBolt(cfg, coatT) {
    const bodyColor = cfg.boltBody;
    const headColor = cfg.boltHead;
    const coatColor = '#a8c8e0';

    // Bath
    if (cfg.bath) {
      ctx.save();
      const bathTop = CY - 10;
      ctx.fillStyle = cfg.bath + '55';
      ctx.fillRect(CX-140, bathTop, 280, H-bathTop);
      for (let b=0;b<8;b++) {
        const bx = CX-100+((b*47+frame*.7)%200);
        const by = H-10-((frame*.8+b*33)%(H-bathTop));
        ctx.beginPath(); ctx.arc(bx,by,3+b%3,0,Math.PI*2);
        ctx.strokeStyle = cfg.bath+'aa'; ctx.lineWidth=1; ctx.stroke();
      }
      ctx.restore();
    }

    // Washer
    ctx.save();
    ctx.fillStyle=headColor;
    ctx.fillRect(CX-SHANK_W*.85, SHANK_Y_START, SHANK_W*1.7, WASHER_H);
    if(coatT>0){ctx.fillStyle=coatColor;ctx.globalAlpha=coatT*.9;ctx.fillRect(CX-SHANK_W*.85,SHANK_Y_START,SHANK_W*1.7,WASHER_H);ctx.globalAlpha=1;}
    ctx.restore();

    // Hex head
    const hpts=hexPoints(CX,HEAD_Y+HEAD_H/2,HEAD_W,HEAD_H);
    ctx.save();
    ctx.beginPath();
    hpts.forEach((p,i)=>i===0?ctx.moveTo(p[0],p[1]):ctx.lineTo(p[0],p[1]));
    ctx.closePath();
    const hg=ctx.createLinearGradient(CX-HEAD_W/2,HEAD_Y,CX+HEAD_W/2,HEAD_Y);
    hg.addColorStop(0,shadeColor(headColor,-25));
    hg.addColorStop(.35,headColor);
    hg.addColorStop(.65,shadeColor(headColor,15));
    hg.addColorStop(1,shadeColor(headColor,-20));
    ctx.fillStyle=hg; ctx.fill();
    if(coatT>0){
      ctx.beginPath();
      hpts.forEach((p,i)=>i===0?ctx.moveTo(p[0],p[1]):ctx.lineTo(p[0],p[1]));
      ctx.closePath();
      ctx.fillStyle=coatColor;ctx.globalAlpha=coatT*.85;ctx.fill();ctx.globalAlpha=1;
    }
    ctx.beginPath();
    hpts.forEach((p,i)=>i===0?ctx.moveTo(p[0],p[1]):ctx.lineTo(p[0],p[1]));
    ctx.closePath();
    ctx.strokeStyle='rgba(0,0,0,.25)';ctx.lineWidth=1.5;ctx.stroke();
    const ipts=hexPoints(CX,HEAD_Y+HEAD_H/2,HEAD_W*.5,HEAD_H*.5);
    ctx.beginPath();
    ipts.forEach((p,i)=>i===0?ctx.moveTo(p[0],p[1]):ctx.lineTo(p[0],p[1]));
    ctx.closePath();
    ctx.strokeStyle='rgba(0,0,0,.18)';ctx.lineWidth=1;ctx.stroke();
    ctx.restore();

    // Shank
    ctx.save();
    const sg=ctx.createLinearGradient(CX-SHANK_W/2,0,CX+SHANK_W/2,0);
    sg.addColorStop(0,shadeColor(bodyColor,-30));
    sg.addColorStop(.3,bodyColor);
    sg.addColorStop(.7,shadeColor(bodyColor,20));
    sg.addColorStop(1,shadeColor(bodyColor,-25));
    ctx.fillStyle=sg;
    ctx.fillRect(CX-SHANK_W/2,SHANK_Y_START+WASHER_H,SHANK_W,SHANK_LEN-WASHER_H-TIP_H);
    if(coatT>0){ctx.fillStyle=coatColor;ctx.globalAlpha=coatT*.85;ctx.fillRect(CX-SHANK_W/2,SHANK_Y_START+WASHER_H,SHANK_W,SHANK_LEN-WASHER_H-TIP_H);ctx.globalAlpha=1;}
    ctx.restore();

    // Threads
    ctx.save();
    const tS=SHANK_Y_START+WASHER_H+6, tE=SHANK_Y_END-TIP_H-4;
    for(let ty=tS;ty<tE;ty+=THREAD_PITCH){
      ctx.fillStyle=`rgba(255,255,255,${.18+Math.sin((ty-tS)/6)*.08})`;
      ctx.fillRect(CX-SHANK_W/2+1,ty,SHANK_W-2,3);
      ctx.fillStyle='rgba(0,0,0,.12)';
      ctx.fillRect(CX-SHANK_W/2+1,ty+3,SHANK_W-2,2);
    }
    if(coatT>0){
      for(let ty=tS;ty<tE;ty+=THREAD_PITCH){
        ctx.fillStyle=`rgba(168,200,224,${coatT*.5})`;
        ctx.fillRect(CX-SHANK_W/2+1,ty,SHANK_W-2,3);
      }
    }
    ctx.restore();

    // Tip
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(CX-SHANK_W/2,SHANK_Y_END-TIP_H);
    ctx.lineTo(CX+SHANK_W/2,SHANK_Y_END-TIP_H);
    ctx.lineTo(CX+SHANK_W/2-8,SHANK_Y_END);
    ctx.lineTo(CX-SHANK_W/2+8,SHANK_Y_END);
    ctx.closePath();
    ctx.fillStyle=shadeColor(bodyColor,-20);ctx.fill();
    if(coatT>0){ctx.fillStyle=coatColor;ctx.globalAlpha=coatT*.8;ctx.fill();ctx.globalAlpha=1;}
    ctx.restore();

    // Rust
    if(cfg.rust){
      ctx.save(); ctx.globalAlpha=.65;
      [[CX-8,HEAD_Y+18,14,10],[CX+12,HEAD_Y+30,10,8],[CX-5,CY-20,16,12],[CX+8,CY+10,10,14],[CX-10,CY+40,18,10]]
        .forEach(([rx,ry,rw,rh])=>{
          const rg=ctx.createRadialGradient(rx,ry,0,rx,ry,rw);
          rg.addColorStop(0,'#8b3a0a');rg.addColorStop(1,'transparent');
          ctx.fillStyle=rg;ctx.beginPath();ctx.ellipse(rx,ry,rw,rh,0,0,Math.PI*2);ctx.fill();
        });
      ctx.restore();
    }

    // Oil sheen
    if(cfg.oilSheen){
      ctx.save();
      const oa=(Math.sin(frame*.04)+1)*.5;
      const og=ctx.createLinearGradient(CX-SHANK_W/2-5,CY-60,CX+SHANK_W/2+5,CY+60);
      og.addColorStop(0,'rgba(80,60,20,0)');
      og.addColorStop(.3+oa*.2,'rgba(140,110,40,.22)');
      og.addColorStop(.6,'rgba(60,80,120,.16)');
      og.addColorStop(1,'rgba(80,60,20,0)');
      ctx.fillStyle=og;ctx.globalAlpha=.7;
      ctx.beginPath();
      ctx.moveTo(CX-HEAD_W/2,HEAD_Y);ctx.lineTo(CX+HEAD_W/2,HEAD_Y);
      ctx.lineTo(CX+SHANK_W/2+2,SHANK_Y_END);ctx.lineTo(CX-SHANK_W/2-2,SHANK_Y_END);
      ctx.closePath();ctx.fill();ctx.restore();
      const dY=SHANK_Y_END-10+Math.sin(frame*.06)*6;
      ctx.save();ctx.globalAlpha=.45;
      ctx.beginPath();ctx.arc(CX-6,dY+14,5,0,Math.PI*2);
      ctx.fillStyle='#6a4a10';ctx.fill();ctx.restore();
    }

    // Shine
    if(cfg.shine&&coatT>.6){
      ctx.save();
      ctx.globalAlpha=(coatT-.6)/.4*.55;
      const shg=ctx.createLinearGradient(CX-SHANK_W/2,HEAD_Y,CX-SHANK_W/2+14,SHANK_Y_END);
      shg.addColorStop(0,'rgba(255,255,255,0)');
      shg.addColorStop(.25,'rgba(255,255,255,.7)');
      shg.addColorStop(.5,'rgba(255,255,255,0)');
      ctx.fillStyle=shg;
      ctx.fillRect(CX-SHANK_W/2,HEAD_Y,SHANK_W/3,SHANK_LEN+HEAD_H+WASHER_H+TIP_H);
      ctx.restore();
    }
  }

  function tick() {
    frame++;
    ctx.clearRect(0,0,W,H);

    // Orbit rings
    ctx.save(); ctx.globalAlpha=.12; ctx.strokeStyle='#c8922a'; ctx.lineWidth=1;
    [160,195,210].forEach(r=>{
      ctx.beginPath();ctx.arc(CX,CY,r,0,Math.PI*2);
      ctx.setLineDash([4+r*.05,8]);ctx.stroke();
    });
    ctx.setLineDash([]); ctx.restore();

    // Rotating dot
    ctx.save(); ctx.globalAlpha=.4; ctx.fillStyle='#c8922a';
    const ang=(frame/300)*Math.PI*2;
    ctx.beginPath();ctx.arc(CX+210*Math.cos(ang),CY+210*Math.sin(ang),5,0,Math.PI*2);ctx.fill();
    ctx.restore();

    const cfg = STAGE_CONFIGS[stage];

    // Particles
    if(cfg.particles==='blast'&&Math.random()<.55) particles.push(randomParticle('blast',CX,H,SHANK_W));
    if(cfg.particles==='zinc' &&Math.random()<.7)  particles.push(randomParticle('zinc', CX,H,SHANK_W));
    particles=particles.filter(p=>p.life>0);
    ctx.save();
    particles.forEach(p=>{
      p.x+=p.vx;p.y+=p.vy;
      p.vy+=(p.type==='blast')?.18:.05;
      p.life-=(p.type==='blast')?.028:.018;
      ctx.globalAlpha=p.life*.9;ctx.fillStyle=p.color;
      ctx.beginPath();ctx.arc(p.x,p.y,p.size,0,Math.PI*2);ctx.fill();
    });
    ctx.restore();

    // Coat level
    if(stage===4) coatLevel=Math.min(1,stageT*1.6);
    else if(stage===5) coatLevel=1;
    else coatLevel=0;

    drawBolt(cfg, coatLevel);

    // Stage label badge
    const data=STAGES_DATA[currentLang]||STAGES_DATA.tr;
    const lbl=data[stage]?.label||'';
    ctx.save();
    ctx.fillStyle='#c8922a';ctx.globalAlpha=.9;
    ctx.fillRect(CX-70,H-48,140,28);
    ctx.fillStyle='#0f1623';ctx.globalAlpha=1;
    ctx.font='700 12px "Barlow Condensed",sans-serif';
    ctx.textAlign='center';
    ctx.fillText(`${String(stage+1).padStart(2,'0')} — ${lbl.toUpperCase()}`,CX,H-28);
    ctx.restore();

    // Progress bar
    const pW=W*.7,pX=CX-pW/2,pY=H-12;
    ctx.save();
    ctx.fillStyle='rgba(200,146,42,.15)';ctx.fillRect(pX,pY,pW,4);
    ctx.fillStyle='#c8922a';ctx.fillRect(pX,pY,pW*((stage+stageT)/6),4);
    ctx.restore();

    // Advance
    stageT += 1/STAGE_DUR;
    if(stageT>=1){
      stageT=0; particles=[];
      if(stage<5){ stage++; updateUI(stage); }
      else {
        if(replayBtn) replayBtn.classList.add('show');
        return;
      }
    }

    boltAnims[pageId] = requestAnimationFrame(tick);
  }

  boltAnims[pageId] = requestAnimationFrame(tick);

  // ── Clickable pills — jump to that stage ──
  pillsContainer.querySelectorAll('.cs-pill').forEach(pill => {
    // Remove old listeners by cloning
    const fresh = pill.cloneNode(true);
    pill.parentNode.replaceChild(fresh, pill);
    fresh.addEventListener('click', () => {
      const s = parseInt(fresh.dataset.stage);
      if (isNaN(s)) return;
      // Restart animation from chosen stage
      startMarsBoltAnimation(pageId, s);
    });
  });

  // Replay
  if (replayBtn) {
    const freshRb = replayBtn.cloneNode(true);
    replayBtn.parentNode.replaceChild(freshRb, replayBtn);
    freshRb.id = 'replay-btn-' + pageId;
    freshRb.addEventListener('click', () => { freshRb.classList.remove('show'); startMarsBoltAnimation(pageId, 0); });
  }
}

// Pages that carry the animation (all except home)
const ANIM_PAGES = ['about','services','gallery','quality','sustainability','career','contact'];

// Start animation when a page is shown
function startGalleryAnim() { /* kept for backward compat, now handled in showPage */ }

const galleryData = [
  { id:1,  cat:'fastener',  title_tr:'Çinko Kaplı Cıvata Seti',       title_en:'Zinc-Coated Bolt Set',       title_de:'Zinkverzinkter Schraubensatz', sub_tr:'M8-M16 Elektrolitik Çinko', h:280, src:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
  { id:2,  cat:'zinc',      title_tr:'Mavi Kromat Kaplama',             title_en:'Blue Chromate Coating',      title_de:'Blaue Chromatierung', sub_tr:'Elektrolitik Çinko', h:200, src:'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80' },
  { id:3,  cat:'phosphate', title_tr:'Mangan Fosfat Yüzey',             title_en:'Manganese Phosphate Surface',title_de:'Mangan-Phosphatoberfläche', sub_tr:'Fosfat – Mat Koyu', h:240, src:'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=600&q=80' },
  { id:4,  cat:'fastener',  title_tr:'Metrik Cıvata Koleksiyonu',       title_en:'Metric Bolt Collection',     title_de:'Metrische Schraubenkollektion', sub_tr:'Çeşitli Boy ve Kaplama', h:200, src:'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80' },
  { id:5,  cat:'geomet',    title_tr:'Geomet® 500 Kaplama',             title_en:'Geomet® 500 Coating',        title_de:'Geomet® 500 Beschichtung', sub_tr:'Çinko Lamel – OEM', h:260, src:'https://images.unsplash.com/photo-1565793979098-1ec73b56d6e9?w=600&q=80' },
  { id:6,  cat:'paint',     title_tr:'Toz Boya Uygulaması',             title_en:'Powder Coating Application', title_de:'Pulverbeschichtungsanwendung', sub_tr:'RAL 9005 Siyah', h:220, src:'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80' },
  { id:7,  cat:'fastener',  title_tr:'Flanşlı Somun Serisi',            title_en:'Flange Nut Series',          title_de:'Flanschmutternserie', sub_tr:'DIN 6923 – Çinko Kaplı', h:200, src:'https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=600&q=80' },
  { id:8,  cat:'nickel',    title_tr:'Elektrolitik Nikel Yüzey',        title_en:'Electrolytic Nickel Surface', title_de:'Elektrolytische Nickeloberfläche', sub_tr:'Parlak Nikel', h:260, src:'https://images.unsplash.com/photo-1603732551658-5fabbafa84eb?w=600&q=80' },
  { id:9,  cat:'zinc',      title_tr:'Sarı Kromat Kaplama',             title_en:'Yellow Chromate Coating',    title_de:'Gelbe Chromatierung', sub_tr:'Elektrolitik Çinko', h:220, src:'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=600&q=80' },
  { id:10, cat:'phosphate', title_tr:'Fosfat Boya Altı Katmanı',        title_en:'Phosphate Sub-Paint Layer',  title_de:'Phosphat-Grundierschicht', sub_tr:'Çinko Fosfat + Epoksi', h:240, src:'https://images.unsplash.com/photo-1542621334-a254cf47733d?w=600&q=80' },
  { id:11, cat:'geomet',    title_tr:'Dacromet® Kaplama',               title_en:'Dacromet® Coating',          title_de:'Dacromet® Beschichtung', sub_tr:'Lamel – İnşaat', h:200, src:'https://images.unsplash.com/photo-1558618047-f4e90ea8e23e?w=600&q=80' },
  { id:12, cat:'paint',     title_tr:'Yaş Boya Uygulama Hattı',         title_en:'Wet Paint Application Line', title_de:'Nasslack-Anwendungslinie', sub_tr:'Elektrostatik Sistem', h:280, src:'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80' },
  { id:13, cat:'fastener',  title_tr:'Çinko-Nikel Cıvata',             title_en:'Zinc-Nickel Bolt',           title_de:'Zink-Nickel-Schraube', sub_tr:'M10 Hex – Zn-Ni', h:220, src:'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&q=80' },
  { id:14, cat:'nickel',    title_tr:'Kimyasal Nikel Kaplama',          title_en:'Electroless Nickel Coating', title_de:'Chemische Nickelbeschichtung', sub_tr:'Tekdüze Dağılım', h:200, src:'https://images.unsplash.com/photo-1574607383476-f517f260d30b?w=600&q=80' },
  { id:15, cat:'zinc',      title_tr:'Siyah Passivation',               title_en:'Black Passivation',          title_de:'Schwarze Passivierung', sub_tr:'Çinko – Siyah Kromat', h:240, src:'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&q=80' },
  { id:16, cat:'fastener',  title_tr:'Havşa Başlı Vida Seti',          title_en:'Countersunk Screw Set',      title_de:'Senkkopfschraubensatz', sub_tr:'DIN 7991 – ISO 10642', h:200, src:'https://images.unsplash.com/photo-1567789884554-0b844b597180?w=600&q=80' },
  { id:17, cat:'geomet',    title_tr:'Geomet® Otomotiv Parçaları',     title_en:'Geomet® Automotive Parts',  title_de:'Geomet® Automotive-Teile', sub_tr:'Egzoz Sistem Parçaları', h:260, src:'https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?w=600&q=80' },
  { id:18, cat:'nickel',    title_tr:'Nikel-Krom Dekoratif',            title_en:'Nickel-Chrome Decorative',   title_de:'Nickel-Chrom Dekorativ', sub_tr:'Parlak Nikel + Krom', h:220, src:'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&q=80' },
];

let currentFilter = 'all';
let filteredItems = [...galleryData];
let lbIndex = 0;

function buildGallery(filter) {
  currentFilter = filter;
  filteredItems = filter === 'all' ? galleryData : galleryData.filter(i => i.cat === filter);
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;
  const lk = currentLang;
  grid.innerHTML = filteredItems.map((item, idx) => `
    <div class="gallery-item" style="height:${item.h}px" onclick="openLightbox(${idx})">
      <img src="${item.src}" alt="${item['title_'+lk]||item.title_tr}" loading="lazy" style="width:100%;height:100%;object-fit:cover">
      <div class="gallery-overlay">
        <div class="gallery-item-title">${item['title_'+lk]||item.title_tr}</div>
        <div class="gallery-item-sub">${item.sub_tr}</div>
      </div>
      <div class="gallery-item-zoom">↗</div>
    </div>
  `).join('');
}

function buildHomeGalleryPreview() {
  const preview = document.getElementById('home-gallery-preview');
  if (!preview || preview.children.length > 0) return;
  galleryData.slice(0,4).forEach(item => {
    const d = document.createElement('div');
    d.style.cssText = 'position:relative;overflow:hidden;cursor:pointer;height:200px;';
    d.innerHTML = `<img src="${item.src}" alt="${item.title_tr}" style="width:100%;height:100%;object-fit:cover;transition:transform .4s;">
      <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(15,18,26,.85) 0%,transparent 50%);display:flex;flex-direction:column;justify-content:flex-end;padding:1rem;">
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:.85rem;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:#fff;">${item.title_tr}</div>
      </div>`;
    d.onclick = () => showPage('gallery');
    d.onmouseenter = e => e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
    d.onmouseleave = e => e.currentTarget.querySelector('img').style.transform = 'scale(1)';
    preview.appendChild(d);
  });
}

function openLightbox(idx) {
  lbIndex = idx;
  updateLightbox();
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
function lbStep(dir) {
  lbIndex = (lbIndex + dir + filteredItems.length) % filteredItems.length;
  updateLightbox();
}
function updateLightbox() {
  const item = filteredItems[lbIndex];
  const lk = currentLang;
  document.getElementById('lb-img').src = item.src;
  document.getElementById('lb-caption').textContent = (item['title_'+lk]||item.title_tr) + ' — ' + item.sub_tr;
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') lbStep(1);
  if (e.key === 'ArrowLeft') lbStep(-1);
});

// ═══════════════════════════════════════
// INIT — everything wired up after DOM ready
// ═══════════════════════════════════════
// ═══════════════════════════════════════
// PAGE ROUTING
// ═══════════════════════════════════════
const pages = ['home','about','services','gallery','quality','sustainability','career','contact'];
const navMap = { home:null, about:'nav-about', services:'nav-services', gallery:'nav-gallery', quality:'nav-quality', sustainability:'nav-sustainability', career:'nav-career', contact:'nav-contact' };
let currentPage = 'home';

function showPage(id) {
  closeMobileMenu();
  pages.forEach(p => {
    const el = document.getElementById('page-'+p);
    if (el) { el.classList.remove('active'); el.classList.remove('page-enter'); }
  });
  const target = document.getElementById('page-'+id);
  if (!target) return;
  target.classList.add('active');
  void target.offsetWidth;
  target.classList.add('page-enter');
  currentPage = id;
  stopAllMarsBoltAnimations(ANIM_PAGES.includes(id) ? id : null);
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  document.querySelectorAll('.mobile-menu-link').forEach(l => l.classList.remove('active'));
  if (navMap[id]) { const el = document.getElementById(navMap[id]); if (el) el.classList.add('active'); }
  const mobileLink = document.querySelector(`.mobile-menu-link[onclick="showPage('${id}')"]`);
  if (mobileLink) mobileLink.classList.add('active');
  if (window.location.hash !== '#'+id) history.replaceState(null, '', '#'+id);
  window.scrollTo({top:0, behavior:'smooth'});
  if (id === 'gallery') buildGallery(currentFilter);
  if (id === 'home') buildHomeGalleryPreview();
  if (ANIM_PAGES.includes(id)) setTimeout(() => startMarsBoltAnimation(id), 120);
  setTimeout(initReveal, 100);
}

// ═══════════════════════════════════════
// REVEAL
// ═══════════════════════════════════════
function initReveal() {
  const els = document.querySelectorAll('.page.active .reveal');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  els.forEach(el => { el.classList.remove('on'); obs.observe(el); });
}

export function runMarsPageEffects(id) {
  closeMobileMenu();
  stopAllMarsBoltAnimations(ANIM_PAGES.includes(id) ? id : null);
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  document.querySelectorAll('.mobile-menu-link').forEach(l => l.classList.remove('active'));
  if (navMap[id]) { const el = document.getElementById(navMap[id]); if (el) el.classList.add('active'); }
  if (id === 'gallery') buildGallery(currentFilter);
  if (id === 'home') buildHomeGalleryPreview();
  setTimeout(initReveal, 100);
}

// ═══════════════════════════════════════
// INIT — everything wired up after DOM ready
// ═══════════════════════════════════════
export function initMarsSite() {
  window.showPage = showPage;
  window.toggleMobileMenu = toggleMobileMenu;

  buildHomeGalleryPreview();
  initReveal();
}
