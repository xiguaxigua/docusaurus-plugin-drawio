# docusaurus-plugin-drawio
> support to use draw.io in your website

![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/xiguaxigua/docusaurus-plugin-drawio/build/master)
![npm](https://img.shields.io/npm/v/docusaurus-plugin-drawio)
![npm](https://img.shields.io/npm/dw/docusaurus-plugin-drawio)
![GitHub top language](https://img.shields.io/github/languages/top/xiguaxigua/docusaurus-plugin-drawio)
![GitHub](https://img.shields.io/github/license/xiguaxigua/docusaurus-plugin-drawio)

## Install

```
npm i docusaurus-plugin-drawio
```

## Add plugin

```js
  plugins: [
    ['drawio', {}],
  ],
```

## Quick Start

in foo.mdx file

```jsx
import Drawio from '@theme/Drawio'
import simpleGraph from '!!raw-loader!./drawio-graph/simple.drawio';

<Drawio content={simpleGraph} />
```

you can edit drawio with https://app.diagrams.net/ or vscode plugin

## Customize viewer.js file cdn address
> default viewer.js cdn is `https://cdn.jsdelivr.net/npm/docusaurus-plugin-drawio/viewer.min.js`

```js
  plugins: [
    ['drawio', { lib: 'http://domain/path/viewer.js' }],
  ],
```

## Docs

https://xiguaxigua.com/docusaurus-plugin-drawio

## License

[MIT](./LICENSE)
