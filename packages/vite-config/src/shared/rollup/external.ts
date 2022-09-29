import type { Ui } from '../../types'

export const UI_EXTERNALS: Record<Ui, string[]> = {
  react: ['react', 'react-dom'],
  vue: ['vue'],
}

export function createExternal(ui: Ui) {
  return UI_EXTERNALS[ui]
}