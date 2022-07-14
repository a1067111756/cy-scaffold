/* 全局属性相关注册
 *    全局挂载的属性，如出现eslint报错 && 实现模板上代码提示，请到shims-vue.d.ts中扩充@vue/runtime-core类型
 * */
import type { App } from 'vue'
import apiInstall from '@/service/api'
import propertiesInstall from '@/common/properties'

const install = (app: App) => {
  // 自定义全局属性挂载
  app.use(propertiesInstall)

  // api接口挂载到全局属性
  app.use(apiInstall)
}

export default install
