/* 全局组件自动注册脚本
   规则: 存在name属性的组件且组件名以global开头的组件将会被脚本自动注册到全局
*/
import Vue from 'vue'

// 查找文件
const requirContext = require.context(
  // 指令目录
  './',
  // 不查找子目录
  true,
  // js文件
  /.vue$/
)

// 组件注册
requirContext.keys().forEach(fileName => {
  const config = requirContext(fileName).default

  // 普通组件安装
  if (config && config.name && config.name.startsWith('global')) {
    Vue.component(config.name, config)
  }
})
