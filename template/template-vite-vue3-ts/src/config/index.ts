// 配置中心
import type { App } from 'vue'
import store from '@/common/store'
import router from '@/common/router'
import pluginConfig from '@/config/plugin.config'
import propertiesConfig from '@/config/propertie.config'
import directiveConfig from '@/config/directive.config'
import componentConfig from '@/config/component.config'

// 全局样式引入
import '@/config/style.config'

// 配置注册
const install = (app: App) => {
  app
    // 注册全局store
    .use(store)
    // 注册路由
    .use(router)
    // 注册全局属性
    .use(propertiesConfig)
    // 注册全局指令
    .use(directiveConfig)
    // 注册全局组件
    .use(componentConfig)
    // 注册全局插件
    .use(pluginConfig)

}

export default install
