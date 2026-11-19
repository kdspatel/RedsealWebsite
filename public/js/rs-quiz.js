/* Optional enhancements for the quiz restyle: ring timer, big question number, score ring, keyboard keys. Read-only on quiz data. */
(function(){
  function $(id){return document.getElementById(id)}
  function secs(t){var m=/(\d+):(\d+)/.exec(t||'');return m?(+m[1])*60+(+m[2]):null}
  function init(){
    var timer=$('timerBox'),title=$('quizQuestionTitle'),opts=$('quizOptions'),pct=$('resultPercentage');
    if(!$('quizSection'))return;
    var total=0,last=0;
    function tick(){if(!timer)return;var s=secs(timer.textContent);if(s==null)return;if(s>last||!total)total=Math.max(s,total&&s<=last?total:s);if(s>last)total=s;last=s;timer.style.setProperty('--t',Math.max(0,Math.min(100,s/(total||s||1)*100)))}
    if(timer){tick();new MutationObserver(tick).observe(timer,{childList:true,characterData:true,subtree:true,attributes:true,attributeFilter:['class']})}
    function num(){if(!title)return;var m=/Question\s+(\d+)/i.exec(title.textContent);var card=title.closest('.card');if(m&&card)card.style.setProperty('--qn','"'+('0'+m[1]).slice(-2)+'"')}
    if(title){num();new MutationObserver(num).observe(title,{childList:true,characterData:true,subtree:true})}
    function keys(){if(!opts)return;[].forEach.call(opts.children,function(b,i){b.setAttribute('data-k',String.fromCharCode(65+i))})}
    if(opts){keys();new MutationObserver(keys).observe(opts,{childList:true})}
    function ring(){if(!pct)return;var v=parseFloat((pct.textContent||'').replace(/[^\d.]/g,''));if(isNaN(v))return;var holder=pct.closest('.stats');if(!holder)return;
      var r=document.getElementById('rqRing');if(!r){r=document.createElement('div');r.id='rqRing';r.className='rq-ring';r.innerHTML='<div><b></b><small>Your score</small></div>';holder.parentNode.insertBefore(r,holder)}
      r.querySelector('b').textContent=Math.round(v)+'%';r.classList.toggle('is-pass',v>=70);r.style.setProperty('--p',Math.max(0,Math.min(100,v)))}
    if(pct){ring();new MutationObserver(ring).observe(pct,{childList:true,characterData:true,subtree:true})}
    document.addEventListener('keydown',function(e){
      var q=$('quizSection');if(!q||q.classList.contains('hidden')||e.metaKey||e.ctrlKey||e.altKey)return;
      var t=e.target&&e.target.tagName;if(t==='INPUT'||t==='SELECT'||t==='TEXTAREA')return;
      var k=e.key.toLowerCase(),i=-1;if(/^[a-d]$/.test(k))i=k.charCodeAt(0)-97;else if(/^[1-4]$/.test(k))i=+k-1;
      if(i>=0&&opts&&opts.children[i]){opts.children[i].click();e.preventDefault();return}
      if(e.key==='ArrowRight'){var n=$('nextBtn');if(n&&!n.disabled){n.click();e.preventDefault()}}
      if(e.key==='ArrowLeft'){var p=$('prevBtn');if(p&&!p.disabled){p.click();e.preventDefault()}}
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
