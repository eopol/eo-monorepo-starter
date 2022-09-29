import type { Ui } from '../../../types'

export const UI_GLOBALS: Record<Ui, Record<string, any>> = {
  react: {
    react: 'react',
    'react-dom': 'react-dom',
  },
  vue: {
    vue: 'Vue',
  },
}

export function createOutputGlobals(ui: Ui) {
  return UI_GLOBALS[ui]
}
