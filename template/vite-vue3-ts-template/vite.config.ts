import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  // 服务器代理
  server: {
    port: 9000
  },  
  // 路径别名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src')
    }
  },
  // 插件
  plugins: [
    vue(),
    WindiCSS()
  ]
})
