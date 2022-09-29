export type Ui = 'react' | 'vue'

type Mode = 'app' | 'lib'

export interface ViteParams {
  /** 使用的ui框架 */
  ui: Ui
  /** 打包应用或库项目 */
  mode: Mode
  /** 应用名称 */
  packageName: string
}

export type ViteBuildParams = Omit<ViteParams, 'packageName'> & {
  /** 应用所在路径 */
  packageDir: string
}