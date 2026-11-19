/* Red Seal Practice: swaps emoji for clean line icons. Text-only change, never touches content words. */
(function(){
var P={
bolt:'M13 2 3 14h9l-1 8 10-12h-9l1-8z',
wrench:'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z',
flame:'M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z',
car:'M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2M9 17h6|c7,17,2|c17,17,2',
truck:'M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2M15 18H9M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14|c17,18,2|c7,18,2',
gear:'M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z|c12,12,3',
snow:'M2 12h20M12 2v20M4.9 4.9l14.2 14.2M19.1 4.9 4.9 19.1',
hat:'M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2zM10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5M4 15v-3a6 6 0 0 1 6-6M14 6a6 6 0 0 1 6 6v3',
drop:'M12 2.7l5.66 5.65a8 8 0 1 1-11.32 0z',
plug:'M12 22v-5M9 8V2M15 8V2M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8z',
home:'M3 10.5 12 3l9 7.5M5 9.5V21h14V9.5M10 21v-6h4v6',
knife:'M20 4C14 4 9 8 7 14l3 3c6-2 10-7 10-13zM7 14l-4 7 7-4',
bike:'M15 6h-4l-3 7M12 17.5 15 11l3 6.5M15 6h2|c5.5,17.5,3.5|c18.5,17.5,3.5',
roller:'M4 3h13a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM18 5h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-8v3M10 14h4v7h-4z',
brick:'M3 4h18v16H3zM3 9.3h18M3 14.7h18M9 4v5.3M15 9.3v5.4M9 14.7V20',
cabinet:'M4 3h16v18H4zM12 3v18M9 11v2M15 11v2',
saw:'M3 15 15 9l6 3-12 6zM6 16l1 1.5M9 14.5l1 1.5M12 13l1 1.5',
hammer:'M15 12l-8.5 8.5a2.12 2.12 0 0 1-3-3L12 9M17.64 15 22 10.64M20.91 11.7l-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91',
toolbox:'M3 7h18v13H3zM8 7V4h8v3M3 13h18',
chef:'M6 13.87A4 4 0 0 1 7.5 6.03 4 4 0 0 1 16.5 6 4 4 0 0 1 18 13.87V20H6zM6 17h12',
lock:'M5 11h14v10H5zM8 11V7a4 4 0 0 1 8 0v4',
mail:'M3 5h18v14H3zM3 7l9 6 9-6',
okc:'M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3',
warn:'M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01',
key:'M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.78 7.78 5.5 5.5 0 0 1 7.78-7.78zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4',
check:'M20 6 9 17l-5-5',
crown:'M2 20h20M3 7l4 5 5-7 5 7 4-5-2 11H5z',
bulb:'M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2z',
ruler:'M3 17 17 3l4 4L7 21zM7 13l2 2M10 10l2 2M13 7l2 2',
search:'m21 21-4.3-4.3|c11,11,8',
star:'M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3-6.2 3.3L8 14.2 3 9.3l6.9-1z',
sun:'M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4|c12,12,4',
building:'M4 21V3h10v18M14 9h6v12M8 7h2M8 11h2M8 15h2M2 21h20',
factory:'M2 21V9l7 4V9l7 4V4h4v17zM2 21h20',
flask:'M9 3h6M10 3v6L4 19a2 2 0 0 0 1.7 3h12.6A2 2 0 0 0 20 19l-6-10V3',
gauge:'M12 14l4-4M3.3 18a10 10 0 1 1 17.4 0',
shield:'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4'
};
var E={'⚡':'bolt','🔧':'wrench','🛠':'wrench','🔥':'flame','🚗':'car','🚜':'truck','⚙':'gear','❄':'snow','🏗':'hat','🚰':'drop','🔌':'plug','🏠':'home','🔪':'knife','🏍':'bike','🎨':'roller','🧱':'brick','🪟':'cabinet','🪚':'saw','🔨':'hammer','⚒':'hammer','🧰':'toolbox','🧁':'chef','🔒':'lock','📧':'mail','✉':'mail','✅':'okc','⚠':'warn','🔐':'key','✓':'check','♛':'crown','💡':'bulb','📐':'ruler','🔍':'search','⭐':'star','✨':'star','🌤':'sun','🏢':'building','🏭':'factory','🧪':'flask','📟':'gauge'};
var RX=new RegExp('('+Object.keys(E).map(function(k){return k}).join('|')+')️?','g');
function svg(n){var d=P[n]||P.toolbox,parts=d.split('|'),h='<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="'+parts[0]+'"/>';
 for(var i=1;i<parts.length;i++){var c=parts[i].slice(1).split(',');h+='<circle cx="'+c[0]+'" cy="'+c[1]+'" r="'+c[2]+'"/>'}
 return h+'</svg>'}
function wrap(n){var s=document.createElement('span');s.className='rs-ico rs-ico-'+n;s.innerHTML=svg(n);return s}
function fix(root){
 var w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:function(t){
  var p=t.parentNode;if(!p||/^(SCRIPT|STYLE|TEXTAREA|OPTION|TITLE|NOSCRIPT)$/.test(p.nodeName))return NodeFilter.FILTER_REJECT;
  RX.lastIndex=0;return RX.test(t.nodeValue)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),list=[],n;
 while((n=w.nextNode()))list.push(n);
 list.forEach(function(t){var s=t.nodeValue,f=document.createDocumentFragment(),last=0,m;RX.lastIndex=0;
  while((m=RX.exec(s))){if(m.index>last)f.appendChild(document.createTextNode(s.slice(last,m.index)));f.appendChild(wrap(E[m[1]]));last=m.index+m[0].length}
  if(last<s.length)f.appendChild(document.createTextNode(s.slice(last)));t.parentNode.replaceChild(f,t)})}
function go(){fix(document.body);
 try{new MutationObserver(function(ms){ms.forEach(function(m){m.addedNodes.forEach(function(a){if(a.nodeType===1)fix(a);else if(a.nodeType===3&&a.parentNode)fix(a.parentNode)})})}).observe(document.body,{childList:true,subtree:true})}catch(e){}}
if(document.body)go();else document.addEventListener('DOMContentLoaded',go);
})();
