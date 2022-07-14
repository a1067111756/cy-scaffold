/* 自定义全局属性注册脚本
 *    a. 自动检测modules目录下的脚本文件
 *    b. 脚本文件必须export default一个对象
 *    c. 脚本会自动注册一个以 $-fileName 的全局属性提供外部调用, 注意文件名尽量不要和vue内部属性冲突, 否则会被忽略
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
  // eslint-disable-next-line guard-for-in
  for (const fileName in modules) {
    const config = modules[fileName].default
    const registerName = `$${getFileNameFromPath(fileName)}`
    if (config && !app.config.globalProperties[registerName]) {
      app.config.globalProperties[registerName] = config
    }
  }
}

export default install
