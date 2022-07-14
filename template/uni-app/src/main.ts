/* 入口函数 */
import { createSSRApp } from 'vue'
import App from './App.vue'
import configInstall from '@/config/index'

export function createApp() {
  const app = createSSRApp(App)
  app.use(configInstall)

  return {
    app
  }
}
