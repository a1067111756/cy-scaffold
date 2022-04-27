import type { App, Plugin } from 'vue'

// 用于局部导入
export * from './Example'

// 用于全局注册
const install = (app: App) => {
  // 查找文件
  const modules = import.meta.globEager('./**/index.ts')

  // 自动调用index.ts脚本下的注册方法
  for (const fileName in modules) {
    const config = modules[fileName].default
    if (config && Object.prototype.toString.call(config) === '[object Function]') {
      app.use(config)
    }
  }
}
export default install as Plugin
