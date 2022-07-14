/* 自定义全局插件注册脚本
*    a. 自动检测当前目录下的注册脚本文件
*    b. 注册脚本文件，约定必须以index.ts为文件名， 约定必须export default一个默认注册方法，
*       脚本注册时候会回调此注册方法，注册内容与形式由插件内部自己决定
* */
import type { App } from 'vue'

const install = (app: App): void => {
  // 查找文件
  const modules = import.meta.globEager('./**/*.ts')

  // 注册脚本
  for (const fileName in modules) {
    if (fileName.slice(fileName.lastIndexOf('/') + 1) === 'index.ts') {
      const config = modules[fileName].default
      if (config && Object.prototype.toString.call(config) === '[object Function]') {
        app.use(config)
      }
    }
  }
}

export default install