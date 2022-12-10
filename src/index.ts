import path from 'path'
import { Options } from './types/option-type'
import type { DocusaurusContext, Plugin } from '@docusaurus/types'

export default function drawio(_: DocusaurusContext, options: Options): Plugin {
  return {
    name: 'docusaurus-plugin-drawio',

    getThemePath() {
      return path.resolve(__dirname, './theme')
    },

    async contentLoaded({ actions }) {
      const { setGlobalData } = actions
      setGlobalData(options)
    },

    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: 'script',
            attributes: {
              src:
                options.lib ||
                'https://cdn.jsdelivr.net/npm/docusaurus-plugin-drawio/viewer.min.js',
            },
          },
        ],
      }
    },
  }
}
