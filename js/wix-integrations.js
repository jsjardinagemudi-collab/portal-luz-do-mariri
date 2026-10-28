/* Integrações por links: funcionam no GitHub Pages e no HTML incorporado ao Wix.
   Aplicativos nativos devem ser instalados pelo Editor Wix, fora deste iframe. */
(() => {
  const config = window.MARIRI_WIX_CONFIG || {};
  document.querySelectorAll('[data-wix-link]').forEach(link => {
    const key = link.dataset.wixLink; const value = config[key];
    if (typeof value === 'string' && /^https:\/\//i.test(value)) {
      try { const url = new URL(value); link.href=url.href; link.target='_blank'; link.rel='noopener noreferrer'; link.removeAttribute('aria-disabled'); } catch {}
    } else { link.setAttribute('aria-disabled','true'); link.addEventListener('click', e => e.preventDefault()); }
  });
  const pageUrl = window.location.href.split('#')[0];
  const title = 'Conheça o Instituto Luz do Mariri';
  const fb=document.querySelector('#share-facebook'); if(fb) fb.href='https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(pageUrl);
  const wa=document.querySelector('#share-whatsapp'); if(wa) wa.href='https://wa.me/?text='+encodeURIComponent(title+': '+pageUrl);
  const btn=document.querySelector('#share-portal');
  if(btn)btn.addEventListener('click',async()=>{
    if(navigator.share){try{await navigator.share({title,url:pageUrl});return;}catch{}}
    if(navigator.clipboard && window.isSecureContext){try{await navigator.clipboard.writeText(pageUrl);btn.textContent='Link copiado ✓';setTimeout(()=>btn.textContent='Compartilhar ↗',2500);return;}catch{}}
    window.prompt('Copie o link para compartilhar:',pageUrl);
  });
})();
