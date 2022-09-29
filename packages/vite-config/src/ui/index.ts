import { createDtsPlugin, createReactPlugin } from '../shared/plugins'
import {
  createCJSBuildOptions,
  createESBuildOptions,
  createUMDBuildOptions,
} from '../shared/build'
import type { UserConfigExport } from 'vite'
import type { ViteBuildParams } from '../types'

export const createUiViteCJSConfig = (
  params: ViteBuildParams
): UserConfigExport => {
  const { packageDir } = params
  const plugins = [createDtsPlugin([packageDir]), createReactPlugin()]
  const build = createCJSBuildOptions(params)

  return {
    mode: 'production',
    plugins,
    build,
  }
}

export const createUiViteESConfig = (
  params: ViteBuildParams
): UserConfigExport => {
  const { packageDir } = params
  const plugins = [createDtsPlugin([packageDir]), createReactPlugin()]
  const build = createESBuildOptions(params)

  return {
    mode: 'production',
    plugins,
    build,
  }
}

export const createUiViteUMDConfig = (
  params: ViteBuildParams
): UserConfigExport => {
  const { packageDir } = params
  const plugins = [createDtsPlugin([packageDir]), createReactPlugin()]
  const build = createUMDBuildOptions(params)

  return {
    mode: 'production',
    plugins,
    build,
  }
}
