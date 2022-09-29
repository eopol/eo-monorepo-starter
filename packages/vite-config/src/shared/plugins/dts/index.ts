import type { PluginOption } from 'vite'
import Dts from 'vite-plugin-dts'

export default (include: string[]): PluginOption => Dts({
  insertTypesEntry: true,
  cleanVueFileName: true,
  copyDtsFiles: true,
  include,
})
