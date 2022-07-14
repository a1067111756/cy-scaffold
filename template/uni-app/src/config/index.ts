/* 全局 - 配置 - 配置中心 */
import type { App } from 'vue'
import storeConfig from '@/common/store'
import pluginConfig from '@/config/plugin.config'
import propertiesConfig from '@/config/propertie.config'
import componentConfig from '@/config/component.config'

// 配置注册
const install = (app: App) => {
  app
    // 注册全局store
    .use(storeConfig)
    // 注册全局属性
    .use(propertiesConfig)
    // 注册全局组件
    .use(componentConfig)
    // 注册全局插件
    .use(pluginConfig)
}

export default install
