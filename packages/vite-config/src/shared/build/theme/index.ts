import { resolve } from 'path'
import type { BuildOptions } from 'vite'
import type { ViteBuildParams } from '../../../types'

export default (params: ViteBuildParams): BuildOptions => {
  const { packageDir } = params
  const entry = resolve(__dirname, `${packageDir}/src/style/index.scss`)
  const outDir = resolve(__dirname, `${packageDir}/dist/dist`)

  return {
    outDir,
    emptyOutDir: false,
    rollupOptions: {
      input: entry,
      output: {
        assetFileNames: '[name].[ext]',
      },
    },
  }
}
