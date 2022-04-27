import { defineConfig } from 'vite'
import * as path from 'path';
import dts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'
import libInjectCss from './libInjectCss'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@/package': path.join(__dirname, 'package/'),
      '@/types': path.join(__dirname, 'types/')
    }
  },
  plugins: [
    vue(),
    libInjectCss(),
    dts({ outputDir: './dist/types' }),
    visualizer()
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, './package/index.ts'),
      name: 'ViteLib',
      formats: ['es', 'umd', 'cjs'],
      fileName: (format) => `bundle.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          'vue': 'Vue'
        }
      }
    }
  }
})
