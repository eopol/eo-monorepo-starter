import { resolve } from 'path'
import { UI_NAME } from '@eoms/constant'
import { createExternal, createOutputGlobals } from '../../rollup'
import type { ViteBuildParams } from '../../../types'
import type { BuildOptions } from 'vite'

export default (params: ViteBuildParams): BuildOptions => {
  const { ui, packageDir } = params
  const entry = resolve(__dirname, `${packageDir}/index.ts`)
  const outDir = resolve(__dirname, `${packageDir}/dist/dist`)
  const external = createExternal(ui)
  const globals = createOutputGlobals(ui)

  return {
    emptyOutDir: false,
    outDir,
    lib: {
      entry,
      name: UI_NAME,
      formats: ['umd'],
      fileName: (target): string => {
        return `index.${target}.js`
      },
    },
    rollupOptions: {
      external,
      output: {
        format: 'umd',
        exports: 'named',
        globals,
      },
    },
  }
}
