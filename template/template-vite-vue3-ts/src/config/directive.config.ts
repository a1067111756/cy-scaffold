/* 全局指令相关注册 */
import type { App } from 'vue'
import directivesInstall from '@/common/directives'

const install = (app: App) => {
  // 自定义全局指令挂载
  app.use(directivesInstall)
}

export default install