/* Category pages (Practice / Mock / Level): puts the questions of the chosen trade into the free / paid quiz design.
   Data comes from static files made by  node scripts/build-practice-data.js  (public/data/practice/...) - no server code involved. */
(function(){
  var q=new URLSearchParams(location.search),trade=q.get('trade');
  if(!trade)return;
  var source=q.get('source')||'practice',level=q.get('level')||'1';
  var kind=/quiz-demo-paid/.test(location.pathname)?'paid':'free';
  var OLD='Architectural Sheet Metal Worker',data=null;
  var file=source+'/'+encodeURIComponent(trade)+(source==='level'?'-'+encodeURIComponent(level):'')+'.json';
  try{var x=new XMLHttpRequest();x.open('GET','/data/practice/'+file,false);x.send();if(x.status===200)data=JSON.parse(x.responseText)}catch(e){}
  if(!data||!data.questions||!data.questions.length)return;
  window.rqCat={title:data.title,questions:data.questions,count:data.questions.length,total:data.total};
  document.addEventListener('DOMContentLoaded',function(){
    var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),n,list=[];
    while(n=w.nextNode()){if(n.nodeValue.indexOf(OLD)>-1)list.push(n)}
    list.forEach(function(t){t.nodeValue=t.nodeValue.split(OLD).join(data.title)});
    document.title=document.title.split(OLD).join(data.title);
    var c=window.rqCat.count;
    var pill=document.getElementById('totalQuestionsPill');if(pill)pill.textContent='Questions: '+(kind==='paid'?data.total:c);
    document.querySelectorAll('.hero-badge').forEach(function(b){b.textContent=b.textContent.replace(/^5 /,(kind==='paid'?data.total:c)+' ')});
  });
  /* The Pay button opens the site's real pricing / Stripe page (the real paid quiz opens there after payment). */
  var t=encodeURIComponent(trade);
  var url=source==='mock'?'/mock-test/pricing?trade='+t:(source==='level'?'/level-test/pricing?trade='+t+'&level='+encodeURIComponent(level):'/pricing?trade='+t);
  document.addEventListener('click',function(e){
    if(e.target.closest('#rqCoPay')){e.preventDefault();e.stopImmediatePropagation();(window.top||window).location.href=url;}
  },true);
})();
