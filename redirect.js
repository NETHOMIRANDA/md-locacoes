/* MD Locações - Redirecionador */
async function getTunnelUrl() {
  try {
    const resp = await fetch('url.json?t=' + Date.now());
    const data = await resp.json();
    return data.tunnel_url;
  } catch (e) {
    return null;
  }
}

async function redirect(page) {
  const tunnelUrl = await getTunnelUrl();
  if (tunnelUrl) {
    window.location.href = tunnelUrl + page;
  } else {
    document.getElementById('erro').style.display = 'block';
    document.getElementById('carregando').style.display = 'none';
  }
}
