/* 全局插件相关注册 */
import type { App } from 'vue'
import pluginInstall from '@/common/plugins'

const install = (app: App) => {
  // element-plus


  // 挂载自定义插件
  app.use(pluginInstall)
}

export default install
