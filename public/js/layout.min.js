// Red Seal Practice shared site shell. Uses isolated class names so page CSS cannot override it.
function shouldShowLoader(){return !sessionStorage.getItem('rsp7-page-warm');}
function injectLoaderCSS(){}
function showPageLoader(){
  if(!shouldShowLoader()||document.getElementById('rsp7-loader'))return;
  const loader=document.createElement('div');loader.id='rsp7-loader';loader.innerHTML='<div class="rsp7-loader-card"><div class="rsp7-loader-brand"><span class="rsp7-loader-mark">✓</span><span>Preparing your study page…</span></div><div class="rsp7-skeleton"></div><div class="rsp7-skeleton"></div><div class="rsp7-skeleton"></div></div>';
  document.documentElement.appendChild(loader);
}
function hidePageLoader(){const loader=document.getElementById('rsp7-loader');if(loader){loader.classList.add('rsp7-done');setTimeout(()=>loader.remove(),350)}sessionStorage.setItem('rsp7-page-warm','1');document.getElementById('page-loader')?.remove();}
showPageLoader();

async function getLoginStatus(){
  try{
    const response=await fetch('/api/session',{credentials:'include'});
    return await response.json();
  }catch(_){return{loggedIn:false};}
}

function ensureSharedStyles(){
  // Keep the proven V5 navbar/footer shell, then layer V6 polish and V7 UX on top.
  // V7 must never replace the shared shell styles.
  const styles=[
    ['platform-v5','/css/platform-v5-site-shell.css?v=5.1.0&release=20260724-mobile-fix'],
    ['platform-v6','/css/platform-v6-polish.css?v=6.1.0&release=20260724-mobile-fix'],
    ['platform-v7','/css/platform-v7-ux.css?v=7.1.0&release=20260724-mobile-fix'],
    ['platform-v9','/css/platform-v9-professional.css?v=9.0.0&release=20260724-mobile-fix'],
    ['platform-v13','/css/platform-v13-mobile-repair.css?v=13.0.0&release=20260724-mobile-fix'],
    ['platform-v17','/css/platform-v17-visibility-fixes.css?v=17.0.0&release=20260724-mobile-fix'],
    ['platform-v18','/css/platform-v18-critical-ui.css?v=18.0.0&release=20260724-mobile-fix'],
    ['platform-v19','/css/platform-v19-contrast-repair.css?v=19.0.0&release=20260724-mobile-fix']
  ];
  styles.forEach(([key,href])=>{
    let link=document.querySelector(`link[data-rsp-style="${key}"]`);
    if(!link){
      link=document.createElement('link');
      link.rel='stylesheet';
      link.href=href;
      link.dataset.rspStyle=key;
      document.head.appendChild(link);
    }else if(link.getAttribute('href')!==href){
      link.setAttribute('href',href);
    }
  });
}

async function loadLayout(){
  ensureSharedStyles();
  const {loggedIn,user}=await getLoginStatus();

  const authMarkup=loggedIn
    ? `<div class="rspx-user"><button class="rspx-user-button" type="button" aria-expanded="false"><span aria-hidden="true">⌖</span><span>${user?.province||'My Account'}</span><span aria-hidden="true">⌄</span></button><div class="rspx-user-menu"><a href="/account">Dashboard</a><button type="button" class="rspx-province-change">Change province</button><a href="/exam-journey-support">Journey support</a><a href="/logout">Log out</a></div></div>`
    : `<a class="rspx-login" href="/login">Log In</a><a class="rspx-signup" href="/signup">Sign Up</a>`;

  const navbar=`
    <div class="rspx-notice"><span>Independent study platform — not the official Red Seal Program or a Government of Canada website.</span><a href="/terms-and-conditions">Learn more</a></div>
    <header class="rspx-header">
      <div class="rspx-header-inner">
        <a class="rspx-logo" href="/" aria-label="Red Seal Practice home"><svg class="rspx-logo-svg" viewBox="0 0 34 38" aria-hidden="true"><path d="M17 2l13 5v10c0 9-6 15-13 19C10 32 4 26 4 17V7z" fill="#B3171F"/><path d="M11 18.5l4.5 4.5 8-9" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg><span class="rspx-logo-copy"><strong>Red Seal Practice</strong><small>Your Path. Your Trade. Your Future.</small></span></a>
        <button class="rspx-menu-button" type="button" aria-expanded="false" aria-controls="rspxMainNav" aria-label="Open menu"><span></span><span></span><span></span></button>
        <div class="rspx-overlay" aria-hidden="true"></div>
        <nav class="rspx-nav" id="rspxMainNav" aria-label="Main navigation">
          <a href="/">Home</a>
          <div class="rspx-dropdown"><button type="button" class="rspx-dropdown-button" aria-expanded="false">Trades <span class="rspx-chevron" aria-hidden="true"><svg viewBox="0 0 16 16"><path d="m4 6 4 4 4-4"/></svg></span></button><div class="rspx-dropdown-menu"><a href="/trades">Browse All Trades</a><a href="/find-my-trade">Find My Trade</a><a href="/practice-tests">Free Practice Tests</a><a href="/mock-tests">Mock Tests</a><a href="/level-tests">Level Quizzes</a></div></div>
          <a href="/find-my-trade">Find My Trade</a>
          <a href="/practice-tests">Practice Tests</a>
          <a href="/mock-tests">Mock Tests</a>
          <a href="/level-tests">Level Quizzes</a>
          <a href="/blog">Articles</a>
          <a href="/pricing">Pricing</a>
          <div class="rspx-dropdown"><button type="button" class="rspx-dropdown-button" aria-expanded="false">More <span class="rspx-chevron" aria-hidden="true"><svg viewBox="0 0 16 16"><path d="m4 6 4 4 4-4"/></svg></span></button><div class="rspx-dropdown-menu rspx-dropdown-menu-right"><a href="/exam-journey-support">Your Red Seal Journey</a><a href="/provinces">Province Contacts</a><a href="/community">Reviews &amp; Questions</a><a href="/faq">FAQ</a><a href="/contact">Contact</a></div></div>
          <div class="rspx-auth">${authMarkup}</div>
        </nav>
      </div>
    </header>`;

  const footer=`
    <footer class="rspx-footer"><div class="rspx-footer-inner">
      <div class="rspx-footer-intro"><a class="rspx-footer-logo" href="/"><svg class="rspx-logo-svg" viewBox="0 0 34 38" aria-hidden="true"><path d="M17 2l13 5v10c0 9-6 15-13 19C10 32 4 26 4 17V7z" fill="#B3171F"/><path d="M11 18.5l4.5 4.5 8-9" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Red Seal Practice</span></a><p>Independent study support for Canadian skilled-trade learners. Practise exam-style questions and understand your next step with confidence.</p><a class="rspx-footer-cta" href="/exam-journey-support">Get journey help</a></div>
      <div class="rspx-footer-column"><h3>Practice</h3><a href="/trades">Browse trades</a><a href="/practice-tests">Free practice tests</a><a href="/mock-tests">Mock tests</a><a href="/level-tests">Level quizzes</a><a href="/find-my-trade">Find my trade</a></div>
      <div class="rspx-footer-column"><h3>Your Journey</h3><a href="/exam-journey-support">Where to start</a><a href="/provinces">Province contacts</a><a href="/community">Reviews &amp; questions</a><a href="/faq">FAQ</a></div>
      <div class="rspx-footer-column"><h3>Company</h3><a href="/blog">Articles</a><a href="/pricing">Pricing</a><a href="/contact">Contact</a><a href="/terms-and-conditions">Terms &amp; disclaimer</a></div>
      <div class="rspx-footer-bottom"><span>© 2026 Red Seal Practice. All rights reserved.</span><span>Not affiliated with the Red Seal Program, Government of Canada, or provincial/territorial authorities.</span></div>
    </div></footer>`;

  const navbarEl=document.getElementById('site-navbar');
  const footerEl=document.getElementById('site-footer');
  if(navbarEl)navbarEl.innerHTML=navbar;
  if(footerEl)footerEl.innerHTML=footer;
  if(!navbarEl)return;
  const syncShellHeight=()=>document.documentElement.style.setProperty('--rspx-shell-height',`${Math.ceil(navbarEl.getBoundingClientRect().height)}px`);
  syncShellHeight();
  requestAnimationFrame(syncShellHeight);
  window.addEventListener('resize',syncShellHeight,{passive:true});

  const header=navbarEl.querySelector('.rspx-header');
  const menuButton=navbarEl.querySelector('.rspx-menu-button');
  const overlay=navbarEl.querySelector('.rspx-overlay');
  const closeMenu=()=>{header?.classList.remove('rspx-open');document.body.classList.remove('rspx-menu-open');menuButton?.setAttribute('aria-expanded','false');};
  menuButton?.addEventListener('click',()=>{const open=header.classList.toggle('rspx-open');document.body.classList.toggle('rspx-menu-open',open);menuButton.setAttribute('aria-expanded',String(open));});
  overlay?.addEventListener('click',closeMenu);

  navbarEl.querySelectorAll('.rspx-dropdown-button').forEach(button=>button.addEventListener('click',event=>{event.stopPropagation();const parent=button.closest('.rspx-dropdown');navbarEl.querySelectorAll('.rspx-dropdown.rspx-expanded').forEach(item=>{if(item!==parent)item.classList.remove('rspx-expanded');});const open=parent.classList.toggle('rspx-expanded');button.setAttribute('aria-expanded',String(open));}));

  const current=location.pathname.replace(/\/$/,'')||'/';
  navbarEl.querySelectorAll('.rspx-nav>a,.rspx-dropdown-menu a').forEach(link=>{const path=new URL(link.href,location.origin).pathname.replace(/\/$/,'')||'/';if((path==='/'&&current==='/')||(path!=='/'&&(current===path||current.startsWith(path+'/'))))link.classList.add('rspx-active');});

  const userMenu=navbarEl.querySelector('.rspx-user');
  const userButton=navbarEl.querySelector('.rspx-user-button');
  userButton?.addEventListener('click',event=>{event.stopPropagation();const open=userMenu.classList.toggle('rspx-expanded');userButton.setAttribute('aria-expanded',String(open));});

  navbarEl.querySelector('.rspx-province-change')?.addEventListener('click',event=>{event.stopPropagation();const provinces=['Alberta','British Columbia','Manitoba','New Brunswick','Newfoundland and Labrador','Northwest Territories','Nova Scotia','Nunavut','Ontario','Prince Edward Island','Quebec','Saskatchewan','Yukon'];document.querySelector('.v12-province-modal')?.remove();const modal=document.createElement('div');modal.className='v12-province-modal';modal.innerHTML=`<div class="v12-province-dialog" role="dialog" aria-modal="true" aria-labelledby="v12ProvinceTitle"><h2 id="v12ProvinceTitle">Choose your province or territory</h2><p>We use this to show the most relevant journey guidance and official contacts.</p><select aria-label="Province or territory">${provinces.map(item=>`<option${item===(user?.province||'British Columbia')?' selected':''}>${item}</option>`).join('')}</select><div class="v12-province-actions"><button type="button" class="cancel">Cancel</button><button type="button" class="save">Save province</button></div></div>`;document.body.appendChild(modal);const close=()=>modal.remove();modal.querySelector('.cancel').addEventListener('click',close);modal.addEventListener('click',e=>{if(e.target===modal)close()});modal.querySelector('.save').addEventListener('click',async()=>{const chosen=modal.querySelector('select').value;const response=await fetch('/api/profile/province',{method:'POST',credentials:'include',headers:{'Content-Type':'application/json'},body:JSON.stringify({province:chosen})});if(response.ok)location.reload();else alert('Could not update your province. Please try again.');});});

  navbarEl.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
  document.addEventListener('click',()=>{navbarEl.querySelectorAll('.rspx-expanded').forEach(item=>item.classList.remove('rspx-expanded'));});
  document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
  window.addEventListener('resize',()=>{if(innerWidth>1100)closeMenu();});


  // Add useful breadcrumbs to public content pages.
  const addBreadcrumbs=()=>{
    if(document.querySelector('.rsp7-breadcrumb-wrap')||location.pathname==='/'||location.pathname==='/account')return;
    const labels={trades:'Trades','find-my-trade':'Find My Trade','practice-tests':'Practice Tests','mock-tests':'Mock Tests','level-tests':'Level Quizzes',blog:'Articles',pricing:'Pricing',faq:'FAQ',provinces:'Province Contacts','exam-journey-support':'Your Red Seal Journey',community:'Reviews & Questions',contact:'Contact','study-guide':'Study Guide','exam-preparation':'Exam Preparation','mock-test':'Mock Test','passing-score':'Passing Score','red-seal-certification':'Certification'};
    const parts=location.pathname.split('/').filter(Boolean);if(!parts.length)return;
    const wrap=document.createElement('div');wrap.className='rsp7-breadcrumb-wrap';
    let built='';const items=['<a href="/">Home</a>'];parts.forEach((part,i)=>{built+='/'+part;let text=labels[part]||part.replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase());if(i===parts.length-1)items.push(`<span class="rsp7-breadcrumb-current" aria-current="page">${text}</span>`);else items.push(`<a href="${built}">${text}</a>`)});
    wrap.innerHTML=`<nav class="rsp7-breadcrumb" aria-label="Breadcrumb">${items.join('<span class="rsp7-breadcrumb-sep" aria-hidden="true">›</span>')}</nav>`;
    const target=document.querySelector('main,.page-wrap');if(target)target.before(wrap);else navbarEl.after(wrap);
  };
  addBreadcrumbs();

  // Soft reveal animations, only when motion is allowed.
  if(!matchMedia('(prefers-reduced-motion: reduce)').matches){
    const revealTargets=document.querySelectorAll('main section,main article,.card,.phase-card,.rspx-trade-card,.finder-side-card');
    revealTargets.forEach((el,i)=>{if(i<80)el.classList.add('rsp7-reveal')});
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('rsp7-visible');observer.unobserve(entry.target)}}),{rootMargin:'0px 0px -8% 0px',threshold:.06});
    revealTargets.forEach(el=>observer.observe(el));
  }

  // First-login onboarding is client-side and never changes purchase/auth logic.
  if(loggedIn&&!localStorage.getItem('rsp7-onboarding-complete')&&location.pathname!=='/signup'){
    const modal=document.createElement('div');modal.className='rsp7-onboarding-backdrop';modal.setAttribute('role','dialog');modal.setAttribute('aria-modal','true');modal.setAttribute('aria-labelledby','rsp7WelcomeTitle');
    modal.innerHTML=`<div class="rsp7-onboarding"><div class="rsp7-onboarding-top"><h2 id="rsp7WelcomeTitle">Welcome to Red Seal Practice</h2><p>Let’s personalize your starting point in less than a minute.</p></div><div class="rsp7-onboarding-body"><div class="rsp7-onboarding-steps"><div class="rsp7-onboarding-step active">1 · Your goal</div><div class="rsp7-onboarding-step">2 · Your trade</div><div class="rsp7-onboarding-step">3 · Start studying</div></div><div id="rsp7OnboardingContent"><h3>What would you like help with first?</h3><div class="rsp7-onboarding-options"><button class="rsp7-onboarding-option" data-goal="practice"><strong>Start practising</strong><small>Try free exam-style questions.</small></button><button class="rsp7-onboarding-option" data-goal="trade"><strong>Choose my trade</strong><small>Get matched to trades that fit your interests.</small></button><button class="rsp7-onboarding-option" data-goal="journey"><strong>Understand my journey</strong><small>Registration, province, approval and exam steps.</small></button><button class="rsp7-onboarding-option" data-goal="dashboard"><strong>View my dashboard</strong><small>See purchases, scores and weak topics.</small></button></div></div><div class="rsp7-onboarding-actions"><button class="rsp7-onboarding-skip" type="button">Skip for now</button><button class="rsp7-onboarding-next" type="button" disabled>Continue →</button></div></div></div>`;
    document.body.appendChild(modal);let goal='';const next=modal.querySelector('.rsp7-onboarding-next');modal.querySelectorAll('[data-goal]').forEach(btn=>btn.addEventListener('click',()=>{modal.querySelectorAll('[data-goal]').forEach(x=>x.classList.remove('selected'));btn.classList.add('selected');goal=btn.dataset.goal;next.disabled=false}));
    const finish=(path)=>{localStorage.setItem('rsp7-onboarding-complete','1');modal.remove();if(path)location.href=path};
    modal.querySelector('.rsp7-onboarding-skip').addEventListener('click',()=>finish(''));
    next.addEventListener('click',()=>finish({practice:'/practice-tests',trade:'/find-my-trade',journey:'/exam-journey-support',dashboard:'/account'}[goal]||'/account'));
  }


  // Repair contrast on legacy call-to-action elements after all page styles have loaded.
  const repairContrast=()=>{
    document.querySelectorAll('a,button').forEach(el=>{
      if(el.closest('#site-navbar')||el.closest('#site-footer'))return;
      const cs=getComputedStyle(el);
      const bg=(cs.backgroundImage||'')+' '+(cs.backgroundColor||'');
      const looksDark=/(linear-gradient|radial-gradient)/i.test(bg)&&/(#0[0-9a-f]{5}|#1[0-9a-f]{5}|#2[0-9a-f]{5}|rgb\((?:0|1?\d?\d|2[0-4]\d),\s*(?:0|1?\d?\d|2[0-4]\d),\s*(?:0|1?\d?\d|2[0-4]\d)\))/i.test(bg);
      const namedPrimary=/(primary|buy|submit|next|cta|signup|dashboard-btn|action)/i.test(el.className||'');
      if((looksDark||namedPrimary)&&!/(email|warning|yellow|orange|secondary|outline)/i.test(el.className||''))el.classList.add('rspx-force-contrast');
    });
  };
  repairContrast();
  setTimeout(repairContrast,350);

  // Surface every existing trade-level landing page and its matching quiz purchase route.
  const rspLevelPages={'architectural-sheet-metal-worker':[1,2,3],'automotive-technician':[1,2,3],'baker':[1,2],'bricklayer':[1,2],'cabinet-maker':[1,2,3],'carpentry':[1,2,3],'concrete-finisher':[1],'construction-electrician':[1,2,3],'drywall-finisher-plasterer':[1],'electrician-industrial':[1,2,3],'gasfitter-a':[1],'gasfitter-b':[1],'heavy-duty-equipment-technician':[1,2,3],'industrial-mechanic-millwright':[1,2,3],'meatcutter':[1],'motorcycle-technician':[1,2,3],'painter-and-decorator':[1,2],'plumber':[1,2,3],'refrigeration-air-conditioning':[1,2,3],'roofer':[1,2],'welder':[1,2]};
  document.querySelectorAll('.level-trade-card[data-trade]').forEach(card=>{
    const trade=card.dataset.trade;
    const available=rspLevelPages[trade]||[];
    if(!available.length||card.querySelector('.rsp9-level-pathways'))return;
    const title=card.querySelector('h3')?.textContent?.trim()||'This trade';
    const pathway=document.createElement('div');
    pathway.className='rsp9-level-pathways';
    pathway.innerHTML=`<div class="rsp9-level-heading"><strong>Exam level pathways</strong><span>${available.length} level${available.length===1?'':'s'} available</span></div><div class="rsp9-level-links">${available.map(level=>`<a href="/trades/${trade}/level-${level}-exam-questions"><span>Level ${level}</span><small>Exam guide</small></a>`).join('')}</div><a class="rsp9-buy-level" href="/level-tests?trade=${encodeURIComponent(trade)}"><span>Buy a level quiz for $20</span><small>Choose ${title} and your exact exam level →</small></a>`;
    card.appendChild(pathway);
  });

  // Professional FAQ accordion with keyboard support.
  document.querySelectorAll('body.faq-page .faq-item>h3').forEach((title,index)=>{
    const item=title.parentElement;
    title.setAttribute('role','button');
    title.setAttribute('tabindex','0');
    title.setAttribute('aria-expanded',index===0?'true':'false');
    if(index===0)item.classList.add('is-open');
    const toggle=()=>{const open=!item.classList.contains('is-open');const list=item.closest('.faq-list');if(open&&list){list.querySelectorAll('.faq-item.is-open').forEach(other=>{if(other!==item){other.classList.remove('is-open');other.querySelector(':scope > h3')?.setAttribute('aria-expanded','false');}});}item.classList.toggle('is-open',open);title.setAttribute('aria-expanded',String(open));};
    title.addEventListener('click',toggle);
    title.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();toggle();}});
  });
}

document.addEventListener('DOMContentLoaded',loadLayout);
window.addEventListener('load',hidePageLoader);
