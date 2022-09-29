import { getPackage } from '@eoms/workspace'
import {
  createUiViteCJSConfig,
  createUiViteESConfig,
  createUiViteUMDConfig,
} from './src/ui'
import type { ViteParams } from './src/types'

export * from './src/types'

export default async function createViteConfig(params: ViteParams) {
  const { ui, mode, packageName } = params
  const packageInfo = await getPackage(packageName)
  if (mode === 'lib') {
    const uiViteESConfig = packageInfo
      ? createUiViteESConfig({ ui, mode, packageDir: packageInfo.dir })
      : {}
    const uiViteCJSConfig = packageInfo
      ? createUiViteCJSConfig({ ui, mode, packageDir: packageInfo.dir })
      : {}
    const uiViteUMDConfig = packageInfo
      ? createUiViteUMDConfig({ ui, mode, packageDir: packageInfo.dir })
      : {}
    return {
      uiViteCJSConfig,
      uiViteESConfig,
      uiViteUMDConfig,
    }
  } else {
    return {}
  }
}
