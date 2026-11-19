const http=require('http'), fs=require('fs'),path=require('path');
const ROOT=__dirname, PORT=Number(process.env.PORT||4173);
const KEEP=['carpentry','plumber','baker'];
const titles={carpentry:'Carpenter',plumber:'Plumber',baker:'Baker'};
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'application/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.ico':'image/x-icon','.woff2':'font/woff2','.woff':'font/woff'};
const home=`<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><title>Red Seal designer preview</title><style>body{font:16px system-ui;background:#f5f7fa;color:#18253a;margin:0;padding:35px;max-width:1050px}a{color:#1452a3}.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:16px}.card{background:white;border:1px solid #dbe2ec;border-radius:14px;padding:20px}.card a{display:block;padding:7px 0}.note{background:#fff4d8;padding:12px;border-radius:9px}</style></head><body><h1>Red Seal Practice — original design preview</h1><p>Original uploaded website HTML, styles, assets and quiz UI. Only three trades are listed here.</p><p class="note">Local freelancer-only preview. No login, database, real payment or purchase is required. Quiz content is capped at ten questions for UI demonstrations.</p><div class="cards">${KEEP.map(k=>`<section class="card"><h2>${titles[k]}</h2><a href="/quiz/${k}">Trade dashboard</a><a href="/free/${k}">Free practice</a><a href="/trades/${k}">Trade information</a><a href="/private/${k}.html">Original private dashboard</a><a href="/designer/trade/${k}">All ${titles[k]} pages</a></section>`).join('')}</div><p><a href="/">Original homepage</a> · <a href="/practice-tests">Original practice tests page</a> · <a href="/pricing">Original pricing design</a> · <a href="/account">Original account design</a></p></body></html>`;
function esc(s){return s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;')}
function listing(k){const base=path.join(ROOT,'private');const out=[];function scan(d){if(!fs.existsSync(d))return;for(const e of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,e.name);if(e.isDirectory())scan(p);else if(e.name.endsWith('.html'))out.push('/'+path.relative(ROOT,p).replaceAll(path.sep,'/'))}}scan(path.join(base,'levels',k));scan(path.join(base,'mock-tests',k==='carpentry'?'carpenter':k));scan(path.join(base,'modules',k==='carpentry'?'carpenter':k));return `<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1"><title>${titles[k]} pages</title><style>body{font:16px system-ui;max-width:850px;margin:30px auto;padding:15px}li{padding:6px}a{color:#1452a3}</style><h1>${titles[k]} — original pages</h1><p><a href="/designer">Back to three trades</a></p><ul>${out.map(p=>`<li><a href="${p}">${esc(p)}</a></li>`).join('')}</ul>`}
// Injected script only supplies navigation filtering and ten-question runtime cap;
// original HTML/CSS and existing quiz logic remain in use.
const inject=`<script src="/designer-preview.js"></script>`;
const previewJS=`(function(){
 const keep=['carpentry','plumber','baker'];
 function allowed(url){try{const p=new URL(url,location.origin).pathname.toLowerCase();if(p.startsWith('/designer'))return true;const known=['architectural-sheet-metal-worker','automotive-technician','bricklayer','cabinet-maker','concrete-finisher','construction-electrician','drywall-finisher-plasterer','electrician-industrial','gasfitter-a','gasfitter-b','heavy-duty-equipment-technician','heavy-dut-equipment-technician','industrial-mechanic-millwright','meatcutter','motorcycle-technician','painter-and-decorator','refrigeration-air-conditioning','roofer','welder','cook','transport-trailer-technician','truck-and-transport-mechanic'];return !known.some(x=>p.includes(x));}catch{return true}}
 function clean(){document.querySelectorAll('a[href]').forEach(a=>{if(!allowed(a.href))a.closest('li')?.remove()||a.remove()});document.querySelectorAll('select option').forEach(o=>{if(!allowed(o.value)&&o.value.startsWith('/'))o.remove()});}
 function wrap(fn){return function(config){if(config&&Array.isArray(config.questions)){config={...config,questions:config.questions.slice(0,10)};}return fn.apply(this,[config])}}
 let fn;Object.defineProperty(window,'createPremiumQuizApp',{configurable:true,get(){return fn},set(v){fn=typeof v==='function'?wrap(v):v}});
 document.addEventListener('DOMContentLoaded',()=>{clean();new MutationObserver(clean).observe(document.body,{childList:true,subtree:true});const b=document.createElement('a');b.href='/designer';b.textContent='DESIGN PREVIEW · 3 TRADES';b.style.cssText='position:fixed;bottom:12px;left:12px;z-index:2147483647;background:#123f70;color:white;padding:9px 14px;border-radius:9px;font:600 12px system-ui;text-decoration:none;box-shadow:0 3px 12px #0003';document.body.appendChild(b)});
})();`;
function send(res,code,body,type='text/html; charset=utf-8'){res.writeHead(code,{'Content-Type':type,'Cache-Control':'no-store'});res.end(body)}
http.createServer((req,res)=>{let pathname;try{pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname)}catch{return send(res,400,'Bad request')};if(pathname==='/designer')return send(res,200,home);if(pathname==='/designer-preview.js')return send(res,200,previewJS,'application/javascript; charset=utf-8');if(pathname.startsWith('/designer/trade/')){const k=pathname.split('/').pop();return KEEP.includes(k)?send(res,200,listing(k)):send(res,404,'Not found')}
 if(pathname==='/')pathname='/views/home.html';
 else if(pathname==='/home')pathname='/views/home.html';
 else if(pathname==='/account')pathname='/views/account.html';
 else if(pathname==='/pricing')pathname='/views/pricing.html';
 else if(pathname==='/practice-tests')pathname='/views/practice-tests.html';
 else if(pathname==='/trades')pathname='/views/practice-tests.html';
 else if(pathname==='/level-exams')pathname='/views/level-exams.html';
 else if(pathname==='/mock-tests')pathname='/views/mock-tests.html';
 else if(pathname==='/login')pathname='/views/login.html';
 else if(pathname==='/signup')pathname='/views/signup.html';
 else if(pathname==='/free/'+pathname.split('/').pop() && KEEP.includes(pathname.split('/').pop()))pathname='/public/free-'+pathname.split('/').pop()+'.html';
 else if(/^\/quiz\/(carpentry|plumber|baker)$/.test(pathname))pathname='/private/'+pathname.split('/').pop()+'.html';
 else if(/^\/trades\/(carpentry|plumber|baker)$/.test(pathname))pathname='/public/trades/'+pathname.split('/').pop()+'.html';
 else if(pathname.startsWith('/js/')||pathname.startsWith('/css/')||pathname.startsWith('/images/'))pathname='/public'+pathname;
 else if(pathname.startsWith('/level-exams/'))pathname='/public'+pathname+'.html';
 const parts=pathname.split('/').filter(Boolean);if(parts.some(x=>x==='..'||x.startsWith('.')))return send(res,403,'Forbidden');
 const f=path.resolve(ROOT,'.'+pathname);if(!f.startsWith(ROOT+path.sep))return send(res,403,'Forbidden');
 fs.readFile(f,(err,buf)=>{if(err)return send(res,404,`<h2>Page not found</h2><p>${esc(pathname)}</p><a href="/designer">Back to preview</a>`);const ext=path.extname(f).toLowerCase();if(ext==='.html'){let html=buf.toString('utf8');html=html.replace(/<head([^>]*)>/i,`<head$1>${inject}`);return send(res,200,html)}return send(res,200,buf,mime[ext]||'application/octet-stream')});
}).listen(PORT,'0.0.0.0',()=>console.log('Original website designer preview: http://localhost:'+PORT+'/designer'));
