(async function(){
  const params=new URLSearchParams(location.search); const trade=params.get('trade'); const level=params.get('level');
  if(!trade||!level){location.href='/level-tests';return}
  document.getElementById('slTrade').value=trade; document.getElementById('slLevel').value=level;
  try{
    const r=await fetch(`/api/level-test-pricing?trade=${encodeURIComponent(trade)}&level=${encodeURIComponent(level)}`); const d=await r.json();
    if(!r.ok) throw new Error(d.error||'Could not load pricing');
    document.getElementById('slPricingTitle').textContent=`${d.tradeTitle} Level ${d.level} — Quiz 1`;
    document.getElementById('slPricingDescription').textContent=`Your $20 purchase unlocks Level ${d.level}, Quiz 1 for ${d.tradeTitle} with unlimited retakes for ${d.validDays} days. Upgrade to premium for additional level quizzes, complete Red Seal-style exam practice, detailed explanations, and progress tracking.`;
    if(d.alreadyOwned){const b=document.getElementById('slBuyButton');b.type='button';b.textContent='Open Purchased Quiz 1';b.onclick=()=>location.href=d.examUrl;}
  }catch(err){document.getElementById('slPricingDescription').textContent=err.message}
})();
