/* 全局属性相关注册
*    全局挂载的属性，如出现eslint报错 && 实现模板上代码提示，请到shims-vue.d.ts中扩充@vue/runtime-core类型
* */
import type { App } from 'vue'
import router from '@/common/router'
import propertiesInstall from '@/common/properties'

const install = (app: App) => {
  // router对象全局挂载 - 便于在模板中直接引用，不需要导入
  app.config.globalProperties.$router = router

  // 自定义全局属性挂载
  app.use(propertiesInstall)
}

export default install