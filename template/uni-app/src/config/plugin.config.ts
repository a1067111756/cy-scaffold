/* 全局 - 配置 - 插件注册 */
import type { App } from 'vue'
import pluginInstall from '@/common/plugins'

const install = (app: App) => {
  // 挂载自定义插件 - 已设置easycom自动引入
  app.use(pluginInstall)
}

export default install
