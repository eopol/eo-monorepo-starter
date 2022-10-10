import { resolve } from 'path'
import React from '@vitejs/plugin-react'
import Dts from 'vite-plugin-dts'
import type { UserConfigExport } from 'vite'

export default (): UserConfigExport => {
  const componentDir = './src/components'
  const entry = resolve(__dirname, './src/components/index.ts')
  const outDir = resolve(__dirname, 'dist/lib')
  return {
    mode: 'production',
    plugins: [
      React(),
      Dts({
        insertTypesEntry: true,
        copyDtsFiles: true,
        entryRoot: componentDir,
        include: [componentDir],
      }),
    ],
    build: {
      target: 'modules',
      minify: true,
      chunkSizeWarningLimit: 2,
      reportCompressedSize: false,
      emptyOutDir: false,
      outDir,
      lib: {
        entry,
        formats: ['cjs'],
        fileName: (): string => {
          return 'index.cjs'
        },
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          preserveModules: true,
          preserveModulesRoot: componentDir,
          sourcemap: true,
        },
      },
    },
  }
}
