import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path = require('path')

export default defineConfig({
  resolve: {
    alias: {
      '@': path.join(__dirname, './lib')
    }
  },
  plugins: [
    vue()
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, './lib/index.js'),
      name: 'venus3d-map-provider',
      formats: ['es', 'umd', 'cjs']
    },
    rollupOptions: {
      external: ['vue', 'cesium'],
      output: {
        globals: {
          'vue': 'Vue',
          'cesium': 'Cesium'
        }
      }
    }
  }
})
