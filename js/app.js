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
