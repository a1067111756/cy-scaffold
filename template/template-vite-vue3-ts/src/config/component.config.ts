/* 全局组件相关注册 */
import type { App } from 'vue'
import componentsInstall from '@/common/components'

const install = (app: App) => {
  // 自定义全局组件挂载
  app.use(componentsInstall)
}

export default install