/* 自定义全局指令注册脚本
*    a. 自动检测modules目录下的脚本文件
*    b. 脚本文件必须export default一个对象
*    c. 脚本会自动注册一个以 v-fileName 的全局指令提供外部调用
*    d. 一个脚本文件只导出一个指令
* */
import type { App } from 'vue'

const getFileNameFromPath = (filePath: string) => {
  const splitName = filePath.split('/')
  return splitName[splitName.length - 1].slice(0, -3)
}

const install = (app: App): void => {
  // 查找文件
  const modules = import.meta.globEager('./**/*.ts')

  // 注册脚本
  for (const fileName in modules) {
    const config = modules[fileName].default
    const registerName = getFileNameFromPath(fileName)
    if (config) {
      app.directive(registerName, config)
    }
  }
}

export default install
