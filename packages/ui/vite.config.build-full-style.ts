import { resolve } from 'path'
import type { UserConfigExport } from 'vite'

export default (): UserConfigExport => {
  const input = resolve(__dirname, './src/styles/index.scss')
  const outDir = resolve(__dirname, 'dist/dist')
  return {
    build: {
      outDir,
      emptyOutDir: false,
      rollupOptions: {
        input,
        output: {
          assetFileNames: '[name].[ext]',
        },
      },
    },
  }
}
