import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { registerMicroApps, start } from 'qiankun'

// 引入qiankun
const apps = [
  {
    name: 'mic-vue-app', // 应用的名字
    entry: '//localhost:9001', // 入口
    container: '#mic-vue-app', // 挂载容器名
    activeRule: '/vue-app', // 匹配路径
    props: {
      activeRule: '/vue-app',
      container: '#mic-vue-app'
    }
  },
  {
    name: 'mic-react-app',
    entry: '//localhost:9002',
    container: '#mic-react-app',
    activeRule: '/react-app',
    props: {
      activeRule: '/react-app',
      container: '#mic-react-app'
    }
  }
]
registerMicroApps(apps) // 注册应用
start({ prefetch: false }) // 取消预加载

createApp(App).use(router).mount('#app')
