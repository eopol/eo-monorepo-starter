import { resolve } from 'path'
import React from '@vitejs/plugin-react'
import { UI_NAME } from '@eoms/constant'
import type { UserConfigExport } from 'vite'

export default (): UserConfigExport => {
  const entry = resolve(__dirname, './src/components/index.ts')
  const outDir = resolve(__dirname, 'dist/dist')
  return {
    plugins: [React()],
    build: {
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
        external: ['react', 'react-dom'],
        output: {
          format: 'umd',
          exports: 'named',
          globals: {
            react: 'React',
            'react-dom': 'ReactDom',
          },
        },
      },
    },
  }
}
