(async function(){
  const grid=document.getElementById('singleLevelExamGrid');
  const search=document.getElementById('levelTradeSearch');
  const count=document.getElementById('levelExamCount');
  try{
    const response=await fetch('/api/level-tests');
    const data=await response.json();
    const grouped=new Map();
    (data.exams||[]).forEach(exam=>{
      if(!grouped.has(exam.trade)) grouped.set(exam.trade,{trade:exam.trade,title:exam.tradeTitle,levels:[],trainingLevel:null,infoUrl:null});
      grouped.get(exam.trade).levels.push(exam.level);
    });
    (data.trainingRequiredLevels||[]).forEach(item=>{
      if(!grouped.has(item.trade)) grouped.set(item.trade,{trade:item.trade,title:item.tradeTitle,levels:[],trainingLevel:null,infoUrl:null});
      const trade=grouped.get(item.trade);
      trade.trainingLevel=Number(item.trainingLevel);
      trade.infoUrl=item.infoUrl;
    });
    const trades=[...grouped.values()].map(t=>({...t,levels:[...new Set(t.levels)].sort((a,b)=>a-b)}));
    function render(){
      const term=(search.value||'').trim().toLowerCase();
      const visible=trades.filter(t=>`${t.title} ${t.trade} level ${t.trainingLevel||''}`.toLowerCase().includes(term));
      count.textContent=`${visible.length} trade${visible.length===1?'':'s'} shown · ${visible.reduce((sum,t)=>sum+t.levels.length,0)} purchasable challenge-level quizzes`;
      if (!visible.length) {
        grid.innerHTML='<div class="trade-empty-state"><strong>No matching level exam found</strong><a href="mailto:support@redsealpractice.ca?subject=Please%20add%20my%20trade">Email us to request this trade</a>.</div>';
        return;
      }
      grid.innerHTML=visible.map(t=>`<article class="sl-trade-card"><h2>${t.title}</h2><p class="sl-muted">Choose an available challenge-level practice quiz. Each $20 purchase unlocks Quiz 1 for 30 days.</p><div class="sl-level-list">${t.levels.map(level=>`<a class="sl-level-link" href="/practice-category.html?area=level&trade=${encodeURIComponent(t.trade)}&level=${level}"><span>Level ${level} challenge exam guide<small>Overview, study topics and practice access</small></span><strong>Explore level →</strong></a>`).join('')}${t.trainingLevel?`<a class="sl-level-link sl-training-link" href="${t.infoUrl}"><span>Level ${t.trainingLevel} technical training<small>Classroom or technical-training information; no challenge quiz is sold</small></span><strong>Read requirements →</strong></a>`:''}</div><div class="premium-access-strip"><strong>Want the complete trade package?</strong><p>Unlock all available practice quizzes, full-exam practice, explanations, progress tracking and mistake review.</p><div class="premium-price-line"><span class="premium-price-main">$99 CAD</span><span class="premium-price-note">first trade · additional trades $40 CAD</span></div><div class="premium-access-actions"><a class="premium-primary" href="/pricing?trade=${encodeURIComponent(t.trade)}">Buy Full Trade Access</a></div></div></article>`).join('');
    }
    search.addEventListener('input',render); render();
  }catch(err){grid.innerHTML='<p>Could not load level exams.</p>';console.error(err)}
})();
