import path from 'path'
import { readDefaultCodeTranslationMessages } from '@docusaurus/theme-translations'
import { Options } from './types/option-type'
import type { DocusaurusContext, Plugin } from '@docusaurus/types'

export default function drawio(
  context: DocusaurusContext,
  options: Options
): Plugin {
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
              src: 'https://cdn.jsdelivr.net/npm/docusaurus-plugin-drawio/viewer.min.js',
            },
          },
        ],
      }
    },
  }
}
