import { resolve } from 'path'
import { createExternal } from '../../rollup'
import type { BuildOptions } from 'vite'
import type { ViteBuildParams } from '../../../types'

export default (params: ViteBuildParams): BuildOptions => {
  const { ui, packageDir } = params
  const entry = resolve(__dirname, `${packageDir}/index.ts`)
  const outDir = resolve(__dirname, `${packageDir}/dist/es`)
  const external = createExternal(ui)

  return {
    target: 'modules',
    minify: true, // 压缩
    chunkSizeWarningLimit: 2, // 超过 2kb 警告提示
    reportCompressedSize: false,
    emptyOutDir: false,
    outDir,
    lib: {
      entry,
      formats: ['es'],
      fileName: (): string => {
        return 'index.mjs'
      },
    },
    rollupOptions: {
      external,
      output: {
        preserveModules: true,
      },
    },
  }
}
