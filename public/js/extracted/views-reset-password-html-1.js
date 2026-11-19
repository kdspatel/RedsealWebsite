const params = new URLSearchParams(window.location.search);
  document.getElementById('tokenInput').value = params.get('token') || '';
