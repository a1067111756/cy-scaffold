/* 全局 - 插件 - UI组件框架 */
import type { App } from 'vue'
import uView from 'vk-uview-ui'
import jsCallTipsInstall from './jsCallTips'

// 注册插件 - 将mittBus实例挂载到全局属性
const install = (app: App): void => {
  // 注册uview
  app.use(uView)

  // 注册js调用tips全局方法
  jsCallTipsInstall()
}

export default install
