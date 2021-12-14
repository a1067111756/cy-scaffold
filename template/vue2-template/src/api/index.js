/* api分模块集中管理自动注册
   规则: 1. 读取modules文件夹下所有.js注册模块
        2. index.js导出项必须以export形式(因为一个文件可能会有多个导出项)
*/
import Vue from 'vue'

// api集合
const apiList = {}

// 查找文件
const requirContext = require.context(
  // 指令目录
  './modules',
  // 不查找子目录
  true,
  // js文件
  /.js$/
)

// api接口分模块注入
requirContext.keys().forEach(fileName => {
  const keyName = fileName.slice(2, -3)
  const config = requirContext(fileName)
  apiList[keyName] = config
})

// 将api集合挂载到$api属性
!Vue.prototype.$api && (Vue.prototype.$api = apiList)
