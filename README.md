# Portal Instituto Luz do Mariri — protótipo 1.0

Portal estático independente, em português, com dez áreas, três artigos completos e árvore interativa. HTML5, CSS3 e JavaScript sem bibliotecas, instalações, fontes remotas ou etapa de compilação. Ilustrações SVG originais e conceituais. A interface funciona localmente; compartilhar um link acessível exige hospedagem.

## Abrir e apresentar

1. Extraia o ZIP, mantendo todas as pastas.
2. Abra `index.html` no navegador. Não abra apenas o HTML de dentro do ZIP.
3. Para servir localmente: na pasta do projeto, execute `python3 -m http.server 8000` e acesse `http://localhost:8000`.
4. Use o menu, o passeio ilustrado, os detalhes expansíveis, a busca da biblioteca e a Árvore do Conhecimento. Em celular, use Menu.

A árvore tem cinco zonas clicáveis e uma lista equivalente acessível por teclado. A seção Flores leva às vivências; o link abaixo dá acesso às práticas. Artigos possuem URLs próprias em `pages/`. Compartilhar usa o mecanismo nativo quando disponível, com alternativa para cópia. Facebook usa o endereço hospedado; Instagram copia um resumo para publicação manual. Não há postagem automática.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub, por exemplo `portal-luz-do-mariri`.
2. Envie **o conteúdo da pasta** `portal-mariri` para a raiz do repositório. `index.html` deve ficar na raiz, junto a `css/`, `js/`, `assets/`, `pages/`, `content/` e `.nojekyll`.
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Selecione a branch **main** e a pasta **/(root)**. Clique em **Save**.
6. Aguarde o GitHub concluir a publicação e abra o endereço exibido em Pages, normalmente `https://SEU-USUARIO.github.io/portal-luz-do-mariri/`.
7. Confira início, os três artigos, menu mobile, árvore e compartilhamento no endereço final.

GitHub Pages pode tornar o protótipo público conforme o plano e a configuração. Antes da publicação institucional, valide textos e dados pendentes com a equipe. Os caminhos são relativos e funcionam em subpastas de projeto. Não é necessário modificar o site atual nem os sistemas da JS Jardinagem.

## Estrutura

- `index.html`: dez áreas, sem dependência de carregamento de dados.
- `css/style.css`: tokens, componentes, responsividade, impressão e movimento reduzido.
- `js/app.js`: menu, passeio, busca, leitura e compartilhamento.
- `assets/illustrations/`: ilustrações SVG locais editáveis.
- `pages/ayahuasca.html`, `feitio.html`, `silencio.html`: artigos completos.
- `pages/editorial.html`: diretrizes editoriais e privacidade.
- `content/editorial.json`: inventário editorial e campos para evolução; não alimenta automaticamente o HTML.
- `VALIDACAO.md`: verificações efetuadas e limites.

## Atualizar com segurança

Edite o HTML da seção ou do artigo correspondente e registre a alteração em `content/editorial.json`. O JSON é um inventário preparatório, não um CMS; não há backend ou painel administrativo. Para mudar cores, altere as variáveis no início do CSS. Não publique biografias, relatos, imagens, agenda ou produtos sem confirmação e autorização. Se alterar cabeçalho e rodapé, replique nas páginas HTML.

Contatos são provisórios: confirme endereço, coordenadas, WhatsApp, perfis sociais e horários. Só depois substitua os campos e crie links reais `https://wa.me/55...`, URLs oficiais e mapa com endereço verificado. O botão de pedido apenas copia texto localmente. Não envia dados.

As práticas são uma biblioteca, não oferta confirmada. O catálogo é conceitual, sem estoque, preços ou checkout. Agenda vazia, sem eventos fictícios. Vozes do Mariri não contém relatos simulados. Missão, história e valores oficiais aguardam revisão. As ilustrações não mostram a estrutura real nem retratam pessoas.

## Conteúdo e SEO

Títulos, descrições, idioma, viewport e Open Graph básico estão definidos. Após escolher o domínio, acrescente URLs canônicas, `og:url`, URL absoluta de imagem social e sitemap. Não há dados estruturados de organização com endereço fictício. Fontes estão ligadas nos artigos e nas fichas educativas. Realize revisão de saúde, cultural e institucional antes de lançamento oficial.

Notícias, campanhas, vídeos, eventos e relatos podem ser criados a partir dos modelos de artigo, com autoria, autorização e revisão. Para um painel posterior, preserve os slugs e use o inventário para migrar a um CMS. Autenticação, banco de dados, formulários e agendamento precisarão de implementação própria e política de privacidade adequada.

## Privacidade e acessibilidade

Sem analytics, cookies próprios ou envio de formulários. Serviços de hospedagem e redes sociais têm políticas próprias. Links externos só são acessados por ação do visitante. Conteúdo legível sem JavaScript; apenas busca e seleção de ambientes dependem dele. Há link de salto, foco visível, navegação por teclado, alternativas textuais da árvore, estado de menu, anúncios de status e suporte a movimento reduzido. Validação automática não equivale a auditoria WCAG completa.

## Recursos visuais

Ilustrações vetoriais criadas especificamente para o protótipo. Podem ser editadas no projeto. Tipografia usa fontes do sistema; Georgia para títulos. Nenhuma fotografia de pessoa real foi utilizada.


## Versão 2.0 — atualização
- Inclui loja demonstrativa com carrinho e pedido de itens artesanais por WhatsApp. Preços são ilustrativos.
- Para inserir as imagens oficiais, substitua `assets/media/logo-mariri.jpg`, `assets/media/cerimonia.jpg` e `assets/media/Wakatanka.jpeg` mantendo os nomes e extensões. Arquivos atuais são marcadores provisórios, não as fotos reais.
- Hero usa fotografia genérica remota do Unsplash; substitua por foto autorizada do Instituto antes da publicação definitiva.
- Confira o WhatsApp, o endereço, o mapa e o calendário com a equipe.
- Não inclui comércio de ayahuasca, rapé ou substâncias regulamentadas.
- Novas páginas em `pages/` e atualizações de `css/style.css` e `js/app.js`.


## Atualização V3 — teste das cinco fotos das medicinas

Coloque os arquivos **ayahuasca.jpg**, **rape.jpg**, **sananga.jpg**, **cannabis.jpg** e **jurema.jpg** na pasta `assets/media/` do GitHub. As fotos não estão incluídas neste ZIP porque foram enviadas diretamente ao GitHub, e não como arquivos nesta conversa. Caso estejam ausentes, o site exibirá uma ilustração substituta.

Para o cartaz oficial da cerimônia, coloque `wakatanka.jpg` em `assets/media/`; enquanto estiver ausente, o site usa o `Wakatanka.jpeg` provisório já presente no projeto. Para a marca, use `logo.jpg` em `assets/media/`, com retorno à imagem anterior caso falte.

**Atenção:** se você excluir todos os arquivos do repositório antes de enviar este ZIP, as cinco fotos já publicadas serão perdidas. Preserve-as ou envie-as novamente. A publicação em GitHub Pages pode levar alguns minutos; force atualização com Ctrl+F5.


## Versão 4 — atualização editorial e visual
- Homepage redesenhada com mensagem de acolhimento, seis cartões de intenções, seis caminhos de navegação e FAQ, inspirada na organização de conteúdo do site Wix de referência, sem copiar seus materiais.
- Mantidas as seções e funções da versão 3 (biblioteca, cerimônias, Caminhos e carrinho).
- Fotografias das cinco medicinas devem ser enviadas para `assets/media/` com nomes `ayahuasca.jpg`, `rape.jpg`, `sananga.jpg`, `cannabis.jpg`, `jurema.jpg`. O CSS limita suas dimensões e recorta com `object-fit: cover`.
- A arte da Wakatanka presente neste pacote tem o caminho `assets/media/Wakatanka.jpeg`. A logo de referência presente no pacote usa `assets/media/logo-mariri.jpg`. Substitua os arquivos provisórios pelas artes oficiais, respeitando nomes e extensões.
- Antes de publicar, confirme textos, imagens, agenda e dados com a equipe. Os preços da loja são ilustrativos.
