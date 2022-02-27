import { rollup } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import path from 'path'
import autoprefixer from 'autoprefixer'
import postcss from 'rollup-plugin-postcss'
import watch from 'node-watch'
import fs from 'fs'

const IS_BUILD_MODE = process.argv[2] === '--build'

const EXTERNAL = [
  'webpack',
  'path',
  '@docusaurus/theme-translations',
  '@docusaurus/types',
  '@docusaurus/BrowserOnly',
  'react',
]

async function bundle(input: string, target: string) {
  const bundle = await rollup({
    input,
    external: EXTERNAL,
    plugins: [
      typescript(),
      postcss({
        plugins: [autoprefixer],
      }),
    ],
  })

  await bundle.write({
    format: 'cjs',
    exports: 'default',
    file: target,
  })
}

// eslint-disable-next-line @typescript-eslint/no-extra-semi
async function build(target: string) {
  try {
    await bundle(
      path.resolve(__dirname, '../src/index.ts'),
      path.resolve(__dirname, `../${target}/index.js`)
    )
    await bundle(
      path.resolve(__dirname, '../src/drawio.tsx'),
      path.resolve(__dirname, `../${target}/theme/Drawio/index.js`)
    )
    fs.copyFile(
      path.resolve(__dirname, '../src/types/option-type.d.ts'),
      path.resolve(__dirname, `../${target}/option-type.d.ts`),
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      () => {}
    )
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

if (IS_BUILD_MODE) {
  build('docs/lib')
  build('lib')
} else {
  build('docs/lib')
  watch(path.resolve(__dirname, '../src'), { recursive: true }, () => {
    build('docs/lib')
  })
}
