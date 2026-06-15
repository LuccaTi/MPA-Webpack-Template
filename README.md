# MPA Webpack Template

Template base para projetos Front-End com Webpack no formato MPA.

O objetivo deste repositório é servir como ponto de partida reutilizável para novos projetos com múltiplas páginas, estrutura limpa, suporte a módulos JavaScript, processamento de CSS/HTML e layout responsivo no padrão Holy Grail.

## Descrição

Este projeto usa Webpack com configuração separada para desenvolvimento e produção, com:

- Quatro entradas JS independentes para as páginas `home`, `second`, `third` e `fourth`.
- Geração automática de quatro páginas HTML com `HtmlWebpackPlugin`.
- Carregamento eficaz do HTML com CSS utilizando `MiniCssExtractPlugin`.
- Suporte a importação de CSS, HTML e imagens.
- Servidor de desenvolvimento com reload e abertura automática do navegador.
- Build de produção com source map separado.
- Estrutura preparada para reaproveitar páginas, componentes e estilos compartilhados.

## Páginas Incluídas

- `index.html` gerado a partir de `src/pages/home/home.template.html`.
- `second.html` gerado a partir de `src/pages/second-page/second.template.html`.
- `third.html` gerado a partir de `src/pages/third-page/third.template.html`.
- `fourth.html` gerado a partir de `src/pages/fourth-page/fourth.template.html`.

## Tecnologias e Conceitos

- JavaScript modular com ES Modules
- Webpack 5 + webpack-cli + webpack-dev-server
- webpack-merge
- html-webpack-plugin
- css-loader + style-loader
- html-loader
- Asset Modules do Webpack para imagens
- HTML5 semântico
- CSS Grid + Flexbox
- Layout responsivo mobile first
- Estrutura MPA com múltiplos pontos de entrada

## Estrutura do Projeto

```text
MPA-Webpack-Template/
|- src/
|  |- core/
|  |  |- domain/
|  |  |  |- entity.js
|  |  |- storage/
|  |     |- entityStorage.js
|  |- pages/
|  |  |- home/
|  |  |  |- home.entry.js
|  |  |  |- home.template.html
|  |  |- second-page/
|  |  |  |- second.entry.js
|  |  |  |- second.template.html
|  |  |- third-page/
|  |  |  |- third.entry.js
|  |  |  |- third.template.html
|  |  |- fourth-page/
|  |     |- fourth.entry.js
|  |     |- fourth.template.html
|  |- shared/
|     |- styles/
|     |  |- global.css
|     |- utils/
|        |- domUtils.js
|- package.json
|- webpack.common.js
|- webpack.dev.js
|- webpack.prod.js
```

## Como Executar

### Pré-requisitos

- Node.js 18+ (recomendado)
- npm

### Passos

1. Instale as dependências:

```bash
npm install
```

2. Rode o servidor de desenvolvimento:

```bash
npm run start
```

3. Gere o build de produção em `dist/`:

```bash
npm run build
```

4. Abra as páginas no navegador:

```text
http://localhost:8080/
http://localhost:8080/second.html
http://localhost:8080/third.html
http://localhost:8080/fourth.html
```

## Scripts Disponíveis

- `npm run start`: inicia o webpack-dev-server com `webpack.dev.js` e abre o navegador.
- `npm run build`: gera o bundle de produção usando `webpack.prod.js`.

## Observações

- A configuração base compartilhada está em `webpack.common.js`.
- O ambiente de desenvolvimento está em `webpack.dev.js` com `mode: development` e `eval-source-map`.
- O ambiente de produção está em `webpack.prod.js` com `mode: production` e `source-map`.
- O bundle de saída é gerado em `dist/` com limpeza automática a cada build.
- O layout base segue o padrão Holy Grail com sidebar esquerda, conteúdo central e sidebar direita em telas maiores.





