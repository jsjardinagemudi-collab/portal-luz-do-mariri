/* Progressive enhancement: all content and navigation exist in HTML. */
'use strict';
document.documentElement.classList.add('js');
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
let toastTimer;
function announce(message) { const el = $('#status'); if (!el) return; el.textContent = message; el.classList.add('visible'); clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('visible'), 6500); }
async function copyText(text) {
  try { if (!navigator.clipboard || !window.isSecureContext) throw new Error('fallback'); await navigator.clipboard.writeText(text); return true; }
  catch { const area = document.createElement('textarea'); area.value = text; area.style.position = 'fixed'; area.style.opacity = '0'; document.body.append(area); const focus = document.activeElement; area.select(); let ok = false; try { ok = document.execCommand('copy'); } catch {} area.remove(); focus?.focus(); return ok; }
}
const menu = $('#menu');
$('.menu-toggle')?.addEventListener('click', (event) => { const open = menu.classList.toggle('open'); event.currentTarget.setAttribute('aria-expanded', String(open)); });
menu?.addEventListener('click', (event) => { if (event.target.closest('a')) { menu.classList.remove('open'); $('.menu-toggle')?.setAttribute('aria-expanded', 'false'); } });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && menu?.classList.contains('open')) { menu.classList.remove('open'); $('.menu-toggle').setAttribute('aria-expanded','false'); $('.menu-toggle').focus(); } });
const spaces = {
 cerimonia: ['Espaços de cerimônia','Uma aproximação ilustrada dos ambientes de encontro espiritual. Estrutura, capacidade e acessibilidade serão confirmadas pela equipe.','temple'],
 salao: ['Salão','Um ambiente conceitual para encontros e práticas coletivas. Características reais, usos e acessibilidade dependem de validação.','temple'],
 horta: ['Horta','Uma aproximação ao cultivo e ao cuidado com a terra. Espécies, atividades e condições de visita serão apresentadas pela equipe.','leaf'],
 meditacao: ['Áreas de meditação','Uma ilustração de presença e contemplação. Espaços disponíveis e orientação das práticas serão confirmados.','silence'],
 natureza: ['Natureza','A paisagem como convite ao cuidado. Esta imagem é artística e não representa a vegetação ou os percursos reais do Instituto.','forest']
};
$$('[data-space]').forEach(button => button.addEventListener('click', () => {
 const [title,description,image] = spaces[button.dataset.space];
 $$('[data-space]').forEach(item => item.setAttribute('aria-pressed',String(item === button)));
 $('#tour-image').src = `assets/illustrations/${image}.svg`; $('#tour-image').alt = `Ilustração conceitual: ${title}`;
 const heading = document.createElement('h4'); heading.textContent = title; const text = document.createElement('p'); text.textContent = description; $('#tour-description').replaceChildren(heading,text);
}));
const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
$('#article-search')?.addEventListener('input', event => { const term = normalize(event.target.value.trim()); let count=0; $$('[data-search]').forEach(card => { card.hidden = !normalize(card.dataset.search + ' ' + card.textContent).includes(term); if (!card.hidden) count++; }); $('#search-count').textContent = count ? `${count} artigo${count===1?'':'s'} encontrado${count===1?'':'s'}` : 'Nenhum artigo encontrado. Tente ayahuasca, feitio ou silêncio.'; });
$('#copy-request')?.addEventListener('click', async () => { const ok=await copyText($('#request-text').value); announce(ok ? 'Pedido copiado. Envie manualmente pelo canal oficial quando confirmado.' : 'Não foi possível copiar. Selecione o texto do pedido abaixo.'); });
const articleUrl = () => window.location.href.split('#')[0];
$$('[data-copy]').forEach(button => button.addEventListener('click',async () => announce(await copyText(articleUrl()) ? 'Link copiado.' : 'Copie o endereço na barra do navegador.')));
$$('[data-share]').forEach(button => button.addEventListener('click',async () => { if(navigator.share && location.protocol.startsWith('http')) { try { await navigator.share({title:document.title,url:articleUrl()}); } catch(error) { if(error.name!=='AbortError') announce('Compartilhamento indisponível. Use Copiar link.'); } } else announce(await copyText(articleUrl()) ? 'Link copiado para compartilhar.' : 'Copie o endereço na barra do navegador.'); }));
$$('[data-instagram]').forEach(button => button.addEventListener('click',async () => { const text=`${$('h1').textContent}\n\n${$('.lead').textContent}\n\nLeia na Biblioteca de Saberes do Luz do Mariri.\n${articleUrl()}\n\n#LuzDoMariri #BibliotecaDeSaberes`; announce(await copyText(text) ? 'Resumo copiado. Publique manualmente no Instagram.' : 'Cópia indisponível. Selecione o título e a introdução do artigo.'); }));
$$('[data-facebook]').forEach(link => { if(location.protocol.startsWith('http')) { link.href='https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(articleUrl()); link.target='_blank'; link.rel='noopener noreferrer'; } else { link.removeAttribute('href'); link.setAttribute('role','note'); link.textContent='Facebook: disponível após hospedagem'; } });
const reading=$('[data-reading]'); if(reading) reading.textContent=Math.max(1,Math.ceil($('.article-copy').textContent.trim().split(/\s+/).length/200))+' min de leitura';
if ('IntersectionObserver' in window) { const observer=new IntersectionObserver(entries=>{ entries.forEach(entry=>{if(entry.isIntersecting){ $$('#menu a').forEach(link=>link.classList.toggle('active',link.hash==='#'+entry.target.id));}});},{rootMargin:'-20% 0px -65% 0px'}); $$('main>section[id]').forEach(section=>observer.observe(section)); }

// Loja demonstrativa de itens não controlados. Os valores são ilustrativos.
const shopProducts=[['Camiseta Luz do Mariri',79.90,'craft'],['Curipé artesanal',55,'craft'],['Tepi artesanal',69,'craft'],['Colar artesanal',39,'crystal'],['Pulseira xamânica',29,'crystal'],['Pedras e cristais',24,'crystal'],['Óleo aromático',35,'aroma'],['Aromas e essências',28,'aroma'],['Vestuário Luz do Mariri',119,'craft'],['Produtos culturais',42,'leaf']];
const cart={};const money=n=>n.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});const grid=$('#shop-grid');
if(grid){shopProducts.forEach(([name,price,icon],i)=>{const card=document.createElement('article');card.className='shop-card';card.innerHTML=`<img src="assets/illustrations/${icon}.svg" alt="Ilustração demonstrativa de ${name}"><h3>${name}</h3><p class="price">${money(price)}</p><p class="fine">Valor ilustrativo</p><button type="button" data-add="${i}">Adicionar +</button>`;grid.append(card)});grid.addEventListener('click',e=>{const b=e.target.closest('[data-add]');if(!b)return;const i=+b.dataset.add;cart[i]=(cart[i]||0)+1;renderCart()});$('#cart-items').addEventListener('click',e=>{const b=e.target.closest('[data-change]');if(!b)return;const i=+b.dataset.index;cart[i]=Math.max(0,(cart[i]||0)+(b.dataset.change==='plus'?1:-1));if(!cart[i])delete cart[i];renderCart()});$('#send-cart').addEventListener('click',()=>{const lines=Object.entries(cart).map(([i,q])=>`${q}x ${shopProducts[i][0]} — ${money(shopProducts[i][1]*q)}`);const total=Object.entries(cart).reduce((sum,[i,q])=>sum+shopProducts[i][1]*q,0);const msg=`Olá! Vim pelo Portal Luz do Mariri e gostaria de consultar disponibilidade e valores dos itens artesanais abaixo:\n\n${lines.join('\n')}\n\nTotal demonstrativo: ${money(total)}\n\nPor favor, confirme os preços e a disponibilidade.`;window.open('https://wa.me/5534992142960?text='+encodeURIComponent(msg),'_blank','noopener,noreferrer')});renderCart()}
function renderCart(){const area=$('#cart-items');if(!area)return;area.replaceChildren();let count=0,total=0;Object.entries(cart).forEach(([i,q])=>{count+=q;total+=shopProducts[i][1]*q;const row=document.createElement('div');row.className='cart-line';const label=document.createElement('span');label.textContent=`${shopProducts[i][0]} · ${q} × ${money(shopProducts[i][1])}`;row.append(label);for(const [op,text] of [['minus','−'],['plus','+']]){const b=document.createElement('button');b.type='button';b.dataset.change=op;b.dataset.index=i;b.textContent=text;b.setAttribute('aria-label',(op==='plus'?'Adicionar':'Remover')+' '+shopProducts[i][0]);row.append(b)}area.append(row)});if(!count)area.textContent='Adicione itens para começar.';$('#cart-count').textContent=`${count} ${count===1?'item':'itens'}`;$('#cart-total').textContent=money(total);$('#send-cart').disabled=!count}

// Fallback acessível para imagens ainda não publicadas no GitHub Pages.
document.querySelectorAll('img[data-fallback]').forEach((img) => {
  img.addEventListener('error', () => {
    const fallback = img.dataset.fallback;
    if (fallback && img.getAttribute('src') !== fallback) img.src = fallback;
  });
});
