import createViteConfig from '@eoms/vite-config'
import { name } from './package.json'
import type { UserConfigExport } from 'vite'

export default async (): Promise<UserConfigExport> => {
  let packageName = name
  if(name.startsWith("@") || name.includes('/')) {
    packageName = name.split('/')[1]
  }
  const { uiViteESConfig } = await createViteConfig({
    ui: "react",
    mode: "lib",
    packageName
  })
  return uiViteESConfig!
}
