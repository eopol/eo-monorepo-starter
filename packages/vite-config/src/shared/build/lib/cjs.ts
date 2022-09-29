import { resolve } from 'path'
import { createExternal } from '../../rollup'
import type { ViteBuildParams } from '../../../types'
import type { BuildOptions } from 'vite'

export default (params: ViteBuildParams): BuildOptions => {
  const { ui, packageDir } = params
  const entry = resolve(__dirname, `${packageDir}/index.ts`)
  const outDir = resolve(__dirname, `${packageDir}/dist/lib`)
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
      formats: ['cjs'],
      fileName: (): string => {
        return 'index.cjs'
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
