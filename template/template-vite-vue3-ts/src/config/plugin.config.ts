/* 全局插件相关注册 */
import type { App } from 'vue'
import Vue3Lottie from 'vue3-lottie'
import pluginInstall from '@/common/plugins'

const install = (app: App) => {
  // 注册vue3-lottie
  app.use(Vue3Lottie)

  // 挂载自定义插件
  app.use(pluginInstall)
}

export default install
