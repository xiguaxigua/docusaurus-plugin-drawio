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

## Select display page

if your drawio file has many pages and you want to select which display by default,
you can set `page` props

```jsx
import Drawio from '@theme/Drawio'
import simpleGraph from '!!raw-loader!./drawio-graph/simple.drawio';

<Drawio content={simpleGraph} page={1} />
```

## Customize viewer.js file cdn address
> default viewer.js cdn is `https://cdn.jsdelivr.net/npm/docusaurus-plugin-drawio/viewer.min.js`

```js
  plugins: [
    ['drawio', { lib: 'http://domain/path/viewer.js' }],
  ],
```

## Props

drawio supports many configurations, many of which I don't know what the meaning is, and I don't know the type of the corresponding value. If you know, welcome to submit a pull request

|  prop   |  meaning | type | 
|  ----  | ----  | ----  |
| page | page to be displayed  | number |
| toolbar | The toolbar can be configured through this property, for example: "zoom layers tags lightbox"  | string |
| pageId | page to be displayed  | string |
| zoom | set zoom ratio  | number |
| maxHeight | the max height of graph  | number |
| title | Sets an optional title for the toolbar (or a tooltip if no toolbar is visible). | string |
| forceCenter | I don't know the meaning of this configuration  | boolean |
| center | I don't know the meaning of this configuration  | boolean |
| responsive | I don't know the meaning of this configuration  | boolean |
| border | I don't know the meaning of this configuration  | any |
| move | I don't know the meaning of this configuration  | any |
| nav | I don't know the meaning of this configuration  | boolean |
| tooltips | I don't know the meaning of this configuration  | any |
| resize | I don't know the meaning of this configuration  | boolean |
| layers | Specifies a space-separated list of visible layers, for example "1 2 3"  | string |
| layerIds | I don't know the meaning of this configuration  | any |
| target | I don't know the meaning of this configuration  | any |
| highlight | I don't know the meaning of this configuration  | string |
| lightbox | I don't know the meaning of this configuration  | any |
| editable | I don't know the meaning of this configuration  | any |
| edit | I don't know the meaning of this configuration  | any |
| editFunc | I don't know the meaning of this configuration  | any |
| autoFit | I don't know the meaning of this configuration  | any |
| autoCrop | I don't know the meaning of this configuration  | any |
| autoOrigin | I don't know the meaning of this configuration  | any |
| allowZoomOut | I don't know the meaning of this configuration  | any |
| allowZoomIn | I don't know the meaning of this configuration  | any |
| checkVisibleState | I don't know the meaning of this configuration  | any |
| toolbarPosition | I don't know the meaning of this configuration  | any |
| toolbarNohide | I don't know the meaning of this configuration  | any |
| toolbarButtons | I don't know the meaning of this configuration  | any |


## Docs

https://xiguaxigua.com/docusaurus-plugin-drawio

## How to edit draw.io file

There are many way to edit such as https://app.diagrams.net/ or vscode plugin

## License

[MIT](./LICENSE)
