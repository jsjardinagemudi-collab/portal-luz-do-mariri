# Validação do protótipo — 20/10/2026

## Concluído

- Sintaxe JavaScript verificada com `node --check js/app.js`.
- Cinco documentos HTML com um H1 por página e IDs sem duplicação.
- Dez áreas principais identificadas.
- 144 referências locais de imagens, páginas e âncoras conferidas, sem destino ausente.
- 18 arquivos SVG analisados como XML válido.
- Imagens HTML com texto alternativo e dimensões declaradas.
- Inventário editorial JSON válido com três artigos.
- 16 verificações da lógica de interação aprovadas em simulação de DOM: abrir/fechar menu, cinco ambientes, busca com e sem acentos, busca vazia e sem resultados, cópia de pedido, link, compartilhamento alternativo, resumo Instagram, URL Facebook e cálculo de leitura.
- Estrutura do ZIP verificada após geração.

## Limite de verificação

Não foi realizada inspeção visual nem interação em navegador real neste ambiente, pois o recurso compatível de pré-visualização não está disponível. A simulação de DOM testa lógica e estados, mas não comprova layout, renderização, contraste ou comportamento dos serviços externos. Nenhuma auditoria WCAG completa foi executada. A confirmação manual em desktop e celular deve preceder a apresentação final e a publicação.

## Roteiro de conferência manual

1. Abrir `index.html` em desktop e celular; verificar ausência de corte e rolagem horizontal.
2. Percorrer o menu e as cinco ligações da árvore por toque e teclado.
3. Alternar os cinco ambientes do passeio e abrir os detalhes das práticas e medicinas.
4. Buscar `silencio`, `feitio`, uma palavra inexistente e limpar o campo.
5. Abrir os três artigos e retornar à biblioteca.
6. Conferir cópia e compartilhamento no endereço hospedado; o navegador pode limitar clipboard e compartilhamento ao abrir arquivos locais.
7. Testar aumento de texto, zoom e preferência de movimento reduzido.
8. Validar os dados institucionais e os textos com o Pajé Rudá e os responsáveis.

## Reproduzir as verificações

Na raiz do projeto:

```sh
python3 tests/check_links.py
node --check js/app.js
node tests/check_interactions.cjs
```

Não requer instalação de dependências. Os testes não acessam serviços externos.
