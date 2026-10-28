# Portal Luz do Mariri V6 — mini tutorial Wix

## 1. O que está no ZIP
Site estático completo: index.html, páginas educativas, CSS, JavaScript, ilustrações, configuração de links Wix, e fotos provisórias que já existiam na V5. **Suas fotografias oficiais de medicinas, terapias e rapés não estão incluídas** porque não foram enviadas como arquivos de imagem aqui; veja `assets/media/LEIA-IMAGENS.txt`.

## 2. Como atualizar o site
**Se o Wix estiver exibindo o GitHub Pages via HTML incorporado (iframe):** atualize todos os arquivos na raiz do repositório GitHub `portal-luz-do-mariri` e mantenha no Wix a URL publicada do GitHub. Não cole um ZIP dentro do elemento HTML. Faça commit, aguarde o Pages e atualize o navegador.

**Se você estiver reconstruindo páginas nativas no Wix:** use as seções HTML como referência visual, copie o conteúdo para os elementos nativos do Editor e instale os aplicativos Wix pelo painel. Um iframe HTML não controla diretamente Wix Stores, Wix Payments, Wix Forms ou Wix Bookings.

## 3. Conectar Instagram e Facebook
No arquivo `js/wix-config.js`, preencha `instagram` e `facebook` com os endereços completos e oficiais (https://...). O site ativará os botões. No Wix Editor, você também pode adicionar elementos de links sociais/Instagram Feed por Adicionar Elementos ou App Market e conectá-los aos perfis oficiais. Para mostrar publicações, use um componente nativo Wix fora do iframe.

## 4. Marketing, inscrições e formulários
No Editor Wix, adicione **Wix Forms** à página nativa `Novidades` ou `Contato`; defina campos, texto de consentimento, política de privacidade, destino das respostas e automações permitidas. Publique. Copie a URL publicada da página e cole em `novidades` no arquivo `js/wix-config.js`. **Não cole chaves privadas ou dados de clientes no JavaScript.** Para campanhas, configure as ferramentas de marketing/e-mail no painel Wix conforme o plano.

## 5. Loja e pagamentos
No Wix, instale/configure **Wix Stores** pelo App Market/painel; cadastre **apenas artesanato e produtos legalmente permitidos**, fotos, estoque, frete, políticas e tributos. Configure um provedor de pagamento disponível na sua conta/região e faça compra de teste antes de publicar. Publique a página da loja e cole sua URL em `loja` em `js/wix-config.js`. O carrinho demonstrativo do portal é separado do checkout nativo do Wix e **não envia itens automaticamente ao Wix Stores**. Para evitar confusão, direcione compras reais à loja nativa e mantenha o catálogo do portal como demonstração até sincronizar. Não inclua rapés, tabaco, ayahuasca, cannabis ou outros produtos regulados no checkout.

## 6. Agenda e agendamentos
Se desejar, instale **Wix Bookings** para atividades permitidas e com regras claras; configure serviços, horários, equipe e políticas. Publique a página nativa e cole o endereço em `agenda`. Não ative reservas de cerimônias que exijam avaliação individual sem um processo de triagem e consentimento apropriado.

## 7. Compartilhar conteúdo
A V6 tem botões para compartilhar o endereço atual por Facebook, WhatsApp ou menu nativo do dispositivo. Compartilhamento não publica automaticamente nas contas do Instituto. Para publicar posts no Instagram/Facebook use as ferramentas oficiais de agendamento/social do Wix ou das próprias redes, com autenticação da equipe.

## 8. O que editar antes de publicar
- Envie as fotos JPG reais para `assets/media/` com os nomes do arquivo `LEIA-IMAGENS.txt`.
- Atualize `js/wix-config.js` com URLs reais e já publicadas. Botões ficam desativados enquanto vazios.
- Confira a logo real, imagens do carrossel e imagens de rapés.
- Revise informações institucionais, responsáveis, agenda e política de privacidade.
- Teste em computador e celular; se usar iframe no Wix, ajuste sua altura para evitar barra de rolagem interna.

## 9. Estrutura do ZIP
`index.html` = portal; `pages/` = páginas completas; `css/` = estilos; `js/` = recursos; `assets/` = ilustrações e mídias; `content/` = dados editoriais; `tests/` = verificações existentes; `TUTORIAL_WIX_V6.md` = este guia.

**Limitação importante:** O código estático não consegue instalar aplicativos do Wix, habilitar pagamentos, disparar campanhas ou sincronizar produtos sozinho. Essas etapas são feitas e autorizadas no painel do Wix.
