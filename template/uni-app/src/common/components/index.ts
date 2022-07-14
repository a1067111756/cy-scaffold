/* 自定义全局组件注册脚本
 *    a. 自动检测该目录下的.vue文件
 *    b. 需要注册的全局组件约定存在属性name: globalxxx
 * */

import type { App } from 'vue'

/* 全局组件自动注册文件 */
const install = (app: App): void => {
  // 查找文件
  const modules = import.meta.globEager('./**/*.vue')

  // 注册组件
  for (const fileName in modules) {
    const config = modules[fileName].default
    if (config.name && config.name.toLowerCase().startsWith('global')) {
      app.component(config.name, config)
    }
  }
}

export default install
