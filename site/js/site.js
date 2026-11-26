(function(){
  const css = getComputedStyle(document.documentElement);
  const tok = n => css.getPropertyValue(n).trim();
  const tints = ['#f9a513','#fbb317','#a7b3b5','#d9c7a3','#7f9396','#e8dcc4','#c48a1f','#f8f7f9'];
  const initials = ['MO','JS','LH','ST','OO','RB','KG','IS','GB','SI','AM','PT','CW','DN','EF','HV','NB','RK','TL','YA','BW','JM','LP','FC','AD','QE','VR','MZ','SH','KO','WD','EP','GL','CN','RT','UB','HJ'];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Swarm avatars (17 Nov): Inner Hive founders at the centre, example heroes around them
  const coreImgs = ["img/avatars/core-1.jpg", "img/avatars/core-2.jpg", "img/avatars/core-3.jpg", "img/avatars/core-4.jpg", "img/avatars/core-5.jpg", "img/avatars/core-6.jpg", "img/avatars/core-7.jpg"].map(src => { const im = new Image(); im.src = src; return im; });
  const fillImgs = ["img/avatars/member-1.jpg", "img/avatars/member-2.jpg", "img/avatars/member-3.jpg", "img/avatars/member-4.jpg", "img/avatars/member-5.jpg", "img/avatars/member-6.jpg", "img/avatars/member-7.jpg", "img/avatars/member-8.jpg", "img/avatars/member-9.jpg", "img/avatars/member-10.jpg", "img/avatars/member-11.jpg"].map(src => { const im = new Image(); im.src = src; return im; });
  const avatarFor = (i, proj) => { if (proj) { if (i===0) return null; if (i<=6) return {img:coreImgs[i],core:true}; if (i===7) return {img:coreImgs[0],core:true}; return {img:fillImgs[((i-8)*4)%fillImgs.length],core:false}; } if (i<=6) return {img:coreImgs[i],core:true}; return {img:fillImgs[((i-7)*4)%fillImgs.length],core:false}; };

  // ---------- Swarm ----------
  function hexTargets(rings){
    const pts=[[0,0]];
    const dirs=[[1,0],[0.5,0.866],[-0.5,0.866],[-1,0],[-0.5,-0.866],[0.5,-0.866]];
    for(let r=1;r<=rings;r++){
      let x=dirs[4][0]*r, y=dirs[4][1]*r;
      for(let s=0;s<6;s++){ for(let k=0;k<r;k++){ pts.push([x,y]); x+=dirs[s][0]; y+=dirs[s][1]; } }
    }
    return pts;
  }
  function swarm(canvas, opts){
    const ctx=canvas.getContext('2d');
    const T=hexTargets(3); // 37 seats
    const agents=T.map((t,i)=>{
      const a=Math.random()*Math.PI*2;
      return {t, i, a, hs:1, delay:Math.random()*0.9, ph:Math.random()*6.28, label:initials[i%initials.length], col:tints[i%tints.length], center: opts.centerProject && i===0,
        av: avatarFor(i, !!opts.centerProject)};
    });
    let W=0,H=0,dpr=1,start=null,AX=0,AY=0,AW=0,AH=0;
    const anchor=opts.anchor;
    function size(){
      const r=canvas.getBoundingClientRect(); dpr=Math.min(2,devicePixelRatio||1);
      W=r.width; H=r.height;
      if(anchor){const a=anchor.getBoundingClientRect(); AX=a.left-r.left; AY=a.top-r.top; AW=a.width; AH=a.height;} else {AX=0;AY=0;AW=W;AH=H;} canvas.width=W*dpr; canvas.height=H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0);
      draw(reduce?99:((performance.now()-(start||performance.now()))/1000));
    }
    const ease=x=>1-Math.pow(1-x,3);
    function draw(time){
      ctx.clearRect(0,0,W,H);
      const unit=Math.min(AW,AH)/8.2, cx=AX+AW/2, cy=AY+AH/2-8, rad=unit*0.42;
      // soft glow where the hive gathers (replaces the old panel background)
      const g=ctx.createRadialGradient(cx,cy,0,cx,cy,unit*6); g.addColorStop(0,'rgba(249,165,19,0.10)'); g.addColorStop(1,'rgba(249,165,19,0)');
      ctx.fillStyle=g; ctx.fillRect(0,0,W,H);
      ctx.font=`700 ${Math.max(10,rad*0.62)}px "Onest", system-ui, sans-serif`;
      ctx.textAlign='center'; ctx.textBaseline='middle';
      // faint comb behind
      ctx.strokeStyle='rgba(249,165,19,0.10)'; ctx.lineWidth=1;
      for(const ag of agents){
        const tx=cx+ag.t[0]*unit, ty=cy+ag.t[1]*unit;
        const sx=cx+Math.cos(ag.a)*Math.max(W,H), sy=cy+Math.sin(ag.a)*Math.max(W,H);
        let p=Math.min(1,Math.max(0,(time-ag.delay)/1.8)); p=ease(p);
        const settle=Math.min(1,Math.max(0,time-2.6));
        const bob=settle*Math.sin(time*1.2+ag.ph)*unit*0.05;
        const x=sx+(tx-sx)*p + bob, y=sy+(ty-sy)*p + Math.cos(time*1.1+ag.ph)*settle*unit*0.05;
        // link lines once settled
        if(p>0.98 && ag.i>0){ ctx.globalAlpha=0.5*settle; ctx.beginPath(); ctx.moveTo(x,y); ctx.lineTo(cx,cy); ctx.stroke(); ctx.globalAlpha=1; }
        ag.x=x; ag.y=y; ag.p=p;
      }
      // V2: hovered avatar grows; ease each agent's scale toward its target and draw the hovered one last
      let needMore=false;
      for(const ag of agents){ const goal=(hover===ag)?2.1:1; ag.hs+= (goal-ag.hs)*(reduce?1:0.2); if(Math.abs(goal-ag.hs)>0.01) needMore=true; else ag.hs=goal; }
      const order=agents.slice().sort((a,b)=>a.hs-b.hs);
      for(const ag of order){
        if(ag.p<=0) continue;
        if(ag.center){
          const r=rad*1.35; ctx.beginPath();
          for(let k=0;k<6;k++){const an=Math.PI/6+k*Math.PI/3; ctx.lineTo(ag.x+Math.cos(an)*r, ag.y+Math.sin(an)*r);} ctx.closePath();
          ctx.fillStyle=tok('--pollen'); ctx.fill();
          ctx.fillStyle=tok('--pollen-ink'); ctx.font=`800 ${rad*0.5}px "Onest", system-ui`; ctx.fillText('YOU',ag.x,ag.y);
          ctx.font=`700 ${Math.max(10,rad*0.62)}px "Onest", system-ui, sans-serif`;
          continue;
        }
        if(ag.av && ag.av.img.complete && ag.av.img.naturalWidth){
          const r=rad*(ag.av.core?1.18:1.1)*ag.hs;
          ctx.save(); ctx.beginPath(); ctx.arc(ag.x,ag.y,r,0,Math.PI*2); ctx.clip();
          ctx.drawImage(ag.av.img,ag.x-r,ag.y-r,r*2,r*2); ctx.restore();
          ctx.beginPath(); ctx.arc(ag.x,ag.y,r,0,Math.PI*2);
          if(ag.av.core){ ctx.lineWidth=2.5; ctx.strokeStyle=tok('--pollen'); } else { ctx.lineWidth=1.25; ctx.strokeStyle='rgba(248,247,249,0.3)'; }
          ctx.stroke();
          continue;
        }
        ctx.beginPath(); ctx.arc(ag.x,ag.y,rad*ag.hs,0,Math.PI*2); ctx.fillStyle=ag.col; ctx.fill();
        ctx.lineWidth=2; ctx.strokeStyle=tok('--comb'); ctx.stroke();
        ctx.fillStyle=tok('--ink'); ctx.fillText(ag.label,ag.x,ag.y+1);
      }
      return needMore;
    }
    let hover=null;
    function pick(px,py){
      const r=canvas.getBoundingClientRect(); const x=px-r.left, y=py-r.top;
      const rr=Math.min(AW,AH)/8.2*0.42*1.25; let best=null, bd=Infinity;
      for(const ag of agents){ if(ag.center || !ag.p || ag.p<0.98) continue; const d=Math.hypot(ag.x-x,ag.y-y); if(d<rr && d<bd){bd=d;best=ag;} }
      return best;
    }
    function setHover(h){ if(h===hover) return; hover=h; kick(); }
    function kick(){ if(reduce){ draw(99); return; } if(!raf && canvas.offsetParent){ raf=requestAnimationFrame(loop); } }
    // Avatars now load as separate files: redraw once each one arrives
    [...coreImgs,...fillImgs].forEach(im=>{ if(!im.complete) im.addEventListener('load',kick,{once:true}); });
    const host=canvas.parentElement;
    if(opts.hover){
    host.addEventListener('pointermove',e=>{ if(e.pointerType==='touch') return; setHover(pick(e.clientX,e.clientY)); });
    host.addEventListener('pointerleave',()=>setHover(null));
    host.addEventListener('pointerdown',e=>{ if(e.pointerType!=='touch') return; const h=pick(e.clientX,e.clientY); setHover(h===hover?null:h); });
    }
    function loop(now){ if(start===null) start=now; const busy=draw((now-start)/1000); if(visible || busy) raf=requestAnimationFrame(loop); else raf=null; }
    let raf=null, visible=false;
    const ro=new ResizeObserver(size); ro.observe(canvas); if(anchor) ro.observe(anchor);
    const io=new IntersectionObserver(es=>{ visible=es[0].isIntersecting && canvas.offsetParent!==null; if(visible && !reduce && !raf){ raf=requestAnimationFrame(loop);} if(!visible && raf){cancelAnimationFrame(raf); raf=null;} });
    io.observe(canvas);
    return { replay(){ start=null; size(); if(!reduce && !raf && canvas.offsetParent){ visible=true; raf=requestAnimationFrame(loop);} } };
  }
  const s1=swarm(document.getElementById('swarm'),{hover:true,anchor:document.querySelector('[data-page="home"] .swarm-panel')});
  const s2=swarm(document.getElementById('swarm2'),{centerProject:true,anchor:document.querySelector('[data-page="project"] .swarm-panel')});

  // ---------- Ribbon ----------
  
  const ribbonImgs=[]; for(let k=0;k<Math.max(coreImgs.length,fillImgs.length);k++){ if(coreImgs[k]) ribbonImgs.push(['face',coreImgs[k].src]); if(fillImgs[k]) ribbonImgs.push(['face ex',fillImgs[k].src]); }
  const avs=ribbonImgs.map(([c,src])=>`<span class="av ${c}" style="background-image:url(${src})"></span>`).join('');
  document.querySelectorAll('.ribbon .track').forEach(t=>{ t.innerHTML=avs+avs; });

  // ---------- Case studies (fictitious placeholders) ----------
  const cases=[
    {t:'Contract backlog cleared for a regional housing association',type:'Non-creative',scale:'Medium',area:'Legal',
     s:'A housing association with 4,000 homes was renewing every supplier contract in one year.',
     p:'Their in-house lawyer had 140 contracts waiting and no budget for a law firm.',
     so:'A contracts lawyer and a legal-ops consultant triaged the pile, built templates for the common cases and handled the complex ones. Twelve weeks.',
     o:'All 140 contracts renewed on time, at about a third of the quoted law-firm cost.',
     l:'Templates first: they turned most of the backlog into routine work.',
     roles:'Contracts lawyer · Legal ops · Project lead'},
    {t:'Sales pipeline rebuilt after a B2B software firm lost its sales lead',type:'Non-creative',scale:'Small',area:'Sales',
     s:'A 30-person software company lost its only senior seller mid-quarter.',
     p:'The pipeline lived in one person\'s head and the board wanted a forecast in a month.',
     so:'A sales consultant and a CRM specialist rebuilt the pipeline from email history, ran 25 customer calls and coached a junior hire. Six weeks.',
     o:'£420k of pipeline recovered and a forecast the board signed off.',
     l:'The handover document mattered more than the CRM.',
     roles:'Sales lead · CRM specialist'},
    {t:'National appeal campaign for a children\'s charity',type:'Creative',scale:'Large',area:'Brand',
     s:'A national charity needed its biggest appeal in a decade, across TV, social and events.',
     p:'Its agency roster was too slow and too expensive for a six-month window.',
     so:'Nine members across strategy, film, copy, design and events worked as one studio, led by a single member. Six months.',
     o:'Appeal target beaten by 18%, delivered for less than one agency\'s retainer.',
     l:'One lead and one weekly rhythm kept nine independents moving as a team.',
     roles:'Strategist · Director · Copywriter · Designers · Events'},
    {t:'Customer onboarding redesigned for a logistics SME',type:'Non-creative',scale:'Medium',area:'Operations',
     s:'A parcel-logistics firm was winning new accounts faster than it could set them up.',
     p:'New customers waited three weeks to ship, and some walked away.',
     so:'An operations consultant mapped the process, a developer automated two manual steps and a trainer coached the team. Eight weeks.',
     o:'Set-up time cut from 21 days to 5.',
     l:'Shadow the team for a week before changing anything.',
     roles:'Operations · Automation · Training'},
    {t:'Funding bid and financial model for a community energy co-op',type:'Non-creative',scale:'Small',area:'Finance',
     s:'A volunteer-run energy co-op had one shot at a £250k capital grant.',
     p:'Nobody on the board could build the financial model the funder required.',
     so:'A finance specialist built the model and a bid writer shaped the case, working evenings around the volunteers. Three weeks.',
     o:'Grant awarded in full at the first attempt.',
     l:'A model the volunteers could update themselves was worth as much as the bid.',
     roles:'Finance · Bid writer'},
    {t:'Podcast series for a professional body',type:'Creative',scale:'Small',area:'Media',
     s:'A professional body wanted to reach younger members who ignored its journal.',
     p:'It had no audio experience and a tight budget.',
     so:'A producer, a presenter and a designer created a format, recorded eight episodes and trained staff to carry it on. Ten weeks.',
     o:'Eight episodes, 12,000 listens in the first quarter.',
     l:'Train the client to run it after you leave.',
     roles:'Producer · Presenter · Designer'}
  ];
  function card(c,short){
    return `<article class="case${short?' short':''}" data-type="${c.type}" data-scale="${c.scale}">
      <div class="tags"><span class="ex">Illustrative example</span><span>${c.type}</span><span>${c.scale}</span><span>${c.area}</span></div>
      <h3>${c.t}</h3>
      <dl>
        <div><dt>Situation</dt><dd>${c.s}</dd></div>
        <div class="keep"><dt>Problem</dt><dd>${c.p}</dd></div>
        <div><dt>Solution</dt><dd>${c.so}</dd></div>
        <div class="keep"><dt>Outcome</dt><dd class="outcome">${c.o}</dd></div>
        <div><dt>Learnings</dt><dd>${c.l}</dd></div>
      </dl>
      <div class="roles">${c.roles}</div>
    </article>`;
  }
  document.getElementById('homeCases').innerHTML=[cases[2],cases[0],cases[1]].map(c=>card(c,true)).join('');
  document.getElementById('projCases').innerHTML=[cases[0],cases[3],cases[4]].map(c=>card(c,true)).join('');
  const all=document.getElementById('allCases'); all.innerHTML=cases.map(c=>card(c,false)).join('');
  document.querySelectorAll('.chip').forEach(b=>b.addEventListener('click',()=>{
    document.querySelectorAll('.chip').forEach(x=>x.setAttribute('aria-pressed',x===b));
    const f=b.dataset.f;
    all.querySelectorAll('.case').forEach(el=>{ el.hidden = !(f==='all'||el.dataset.type===f||el.dataset.scale===f); });
  }));

  // ---------- Journeys ----------
  const steps=[
    ['Idea','A member spots a need','A member hears a charity is struggling to renew its supplier contracts.'],
    ['Opportunity','It\'s shared in the hive','They raise it in the weekly conversation. Two members have done similar work.'],
    ['Collaboration','A team forms','A lead is agreed, roles are invited and accepted, and a fixed scope is drafted.'],
    ['Project','The work is delivered','The team delivers, the client pays one invoice, and everyone joins the retrospective.']
  ];
  const projSteps=[
    ['Brief','You tell us what\'s stuck','Five minutes on the form below, or a call with Mike.'],
    ['Match','We gather the team','Within a week you meet two or three members who fit the work.'],
    ['Scope','We fix it','One lead, one fixed price, one clear plan.'],
    ['Deliver','The team gets it done','You deal with the lead throughout. Then an honest retrospective.']
  ];
  const j=(arr,ex,grow)=>arr.map((s,i)=>`<div class="step"><div class="hex"${grow?' tabindex="0"':''}>${i+1}</div><small>Step ${i+1}</small><h3>${s[0]}</h3><p class="muted">${s[1]}.</p>${ex?`<p class="ex">${s[2]}</p>`:''}</div>`).join('');
  document.getElementById('homeJourney').innerHTML=j(steps,false,true);
  document.getElementById('howJourney').innerHTML=j(steps,true,true);
  document.getElementById('projJourney').innerHTML=j(projSteps,true);

  // ---------- Router ----------
  const pages=[...document.querySelectorAll('[data-page]')];
  const navLinks=[...document.querySelectorAll('nav.main a')];
  const nav=document.getElementById('mainNav'), menuBtn=document.getElementById('menuBtn');
  function route(){
    let h=(location.hash||'#home').slice(1);
    let anchor=null;
    if(h==='brief'){anchor='brief';h='project';}
    if(h==='onboard'){anchor='onboard';h='join';}
    if(!pages.some(p=>p.dataset.page===h)) h='home';
    pages.forEach(p=>p.classList.toggle('on',p.dataset.page===h));
    navLinks.forEach(a=>{ if(a.getAttribute('href')==='#'+h) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current'); });
    nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded','false');
    if(anchor){ document.getElementById(anchor).scrollIntoView({behavior:reduce?'auto':'smooth'}); }
    else window.scrollTo(0,0);
    document.querySelector('section.cta').hidden=(h==='how');
    if(h==='home') s1.replay(); if(h==='project') s2.replay();
  }
  addEventListener('hashchange',route); route();
  menuBtn.addEventListener('click',()=>{ const o=nav.classList.toggle('open'); menuBtn.setAttribute('aria-expanded',o); });

  // ---------- Forms ----------
  // V3: mock onboarding calendar (next five working days, four slots each)
  (function(){
    const box=document.getElementById('slots'), book=document.getElementById('slotBook'), done=document.getElementById('slotDone');
    const times=['09:30','11:00','14:00','16:30']; let d=new Date(); d.setHours(12,0,0,0); let days=[];
    while(days.length<5){ d=new Date(d.getTime()+864e5); if(d.getDay()%6) days.push(new Date(d)); }
    const fmt=x=>x.toLocaleDateString('en-GB',{weekday:'short',day:'numeric',month:'short'});
    box.innerHTML=days.map((x,i)=>`<div class="day"><b>${fmt(x)}</b>${times.map((t,k)=>(i+k)%3===2?`<span class="slot gone">${t}</span>`:`<button type="button" class="slot" data-v="${fmt(x)} at ${t}" aria-pressed="false">${t}</button>`).join('')}</div>`).join('');
    let pick=null;
    box.addEventListener('click',e=>{ const b=e.target.closest('button.slot'); if(!b) return; box.querySelectorAll('button.slot').forEach(x=>x.setAttribute('aria-pressed',x===b)); pick=b.dataset.v; book.disabled=false; });
    book.addEventListener('click',()=>{ if(!pick) return; box.hidden=true; book.hidden=true; done.hidden=false; done.innerHTML=`<b style="color:var(--paper)">You're booked in for ${pick}.</b> Your Discord invite follows. (Prototype: nothing has been booked.)`; });
  })();
  function wire(formId,errId,doneId){
    const f=document.getElementById(formId);
    f.addEventListener('submit',e=>{
      e.preventDefault();
      const bad=[...f.querySelectorAll('[required]')].filter(i=>!i.value.trim() || (i.type==='email' && !/^\S+@\S+\.\S+$/.test(i.value)));
      document.getElementById(errId).hidden = bad.length===0;
      if(bad.length){ bad[0].focus(); return; }
      f.hidden=true; const d=document.getElementById(doneId); d.hidden=false; d.scrollIntoView({block:'center'});
    });
  }
  wire('projForm','projErr','projDone'); wire('joinForm','joinErr','joinDone');

  // ---------- Graphic novel lightbox ----------
  const gnBox=document.getElementById('gnBox'), gnOpen=document.getElementById('gnOpen'), gnClose=document.getElementById('gnClose');
  if(gnBox){
    const shut=()=>{gnBox.hidden=true;document.body.style.overflow='';gnOpen.focus();};
    gnOpen.addEventListener('click',()=>{gnBox.hidden=false;document.body.style.overflow='hidden';gnBox.scrollTop=0;gnClose.focus();});
    gnClose.addEventListener('click',shut);
    gnBox.addEventListener('click',e=>{ if(e.target===gnBox) shut(); });
    addEventListener('keydown',e=>{ if(e.key==='Escape' && !gnBox.hidden) shut(); });
  }
  // ---------- Review notes ----------
  const rb=document.getElementById('reviewBtn');
  rb.addEventListener('click',()=>{ const on=document.body.classList.toggle('review'); rb.setAttribute('aria-pressed',on); rb.textContent=on?'Hide review notes':'Show review notes'; });
})();
