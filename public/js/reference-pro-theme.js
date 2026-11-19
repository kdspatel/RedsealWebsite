document.addEventListener('DOMContentLoaded',()=>{
  const path=location.pathname.replace(/\/$/,'')||'/';
  document.querySelectorAll('.nav-links a').forEach(a=>{
    const href=(a.getAttribute('href')||'').replace(/\/$/,'')||'/';
    if(href==='/'?path==='/':path===href||path.startsWith(href+'/')) a.classList.add('active');
  });
});


// Final consistency fixes: closed question ocean and visible trade labels.
document.addEventListener('DOMContentLoaded', () => {
  const ocean = document.getElementById('oceanSection');
  if (ocean && !ocean.dataset.userOpened) {
    ocean.classList.add('hidden');
    ocean.style.display = 'none';
  }
  const showOcean = document.getElementById('showOceanBtn');
  const hideOcean = document.getElementById('hideOceanBtn');
  if (showOcean && ocean) {
    showOcean.addEventListener('click', () => {
      ocean.dataset.userOpened = 'true';
      ocean.classList.remove('hidden');
      ocean.style.removeProperty('display');
    });
  }
  if (hideOcean && ocean) {
    hideOcean.addEventListener('click', () => {
      delete ocean.dataset.userOpened;
      ocean.classList.add('hidden');
      ocean.style.display = 'none';
    });
  }

  document.querySelectorAll('.popular-grid .trade-tile').forEach((tile) => {
    const label = tile.querySelector('span');
    if (label) {
      label.style.opacity = '1';
      label.style.visibility = 'visible';
    }
  });
});
