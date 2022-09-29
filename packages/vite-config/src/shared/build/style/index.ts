import { resolve } from 'path'
import { readdirSync } from 'fs'
import type { BuildOptions } from 'vite'
import type { ViteBuildParams } from '../../../types'

export default (params: ViteBuildParams): BuildOptions => {
  const { packageDir } = params
  const entry = resolve(__dirname, `${packageDir}/src/style`)

  return {
    assetsDir: 'theme',
    rollupOptions: {
      input: readdirSync(entry).map((name) => {
        return `${entry}/${name}`
      }),
      output: {
        entryFileNames: 'theme/[name].js',
        chunkFileNames: 'theme/[name].js',
        assetFileNames: 'theme/[name].[ext]',
      },
    },
  }
}
