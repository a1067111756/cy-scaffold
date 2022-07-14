/* api分模块集中管理自动注册
   规则: 1. 读取modules文件夹下所有.js注册模块
        2. index.js导出项必须以export形式(因为一个文件可能会有多个导出项)
*/
import type { App } from 'vue'

const install = (app: App) => {
  // api集合
  const apiList: Record<string, any> = {}

  // 查找文件
  const modules = import.meta.globEager('./modules/*.ts')

  // api接口分模块注入
  // eslint-disable-next-line guard-for-in
  for (const fileName in modules) {
    const splitFileName = fileName.split('/')
    const apiKey: string = splitFileName[splitFileName.length - 1].slice(0, -3)
    const apiValue: object = modules[fileName]
    apiList[apiKey] = apiValue
  }

  // 将api集合挂载到$api属性
  app.config.globalProperties.$api = apiList
}

export default install
