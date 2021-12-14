/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import router, { routes } from './router'

Vue.config.productionTip = false

if (!window.__POWERED_BY_QIANKUN__) {
  new Vue({
    store,
    router,
    render: h => h(App)
  }).$mount('#app')
}

/* ------------------------------- 乾坤库相关配置 ------------------------------ */
// 注入PUBLIC_PATH
if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}

let qiankunRouter
let qiankunInstance

function render (props = {}) {
  const { container, activeRule } = props
  qiankunRouter = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? activeRule : '/',
    mode: 'history',
    routes
  })

  qiankunInstance = new Vue({
    store,
    router: qiankunRouter,
    render: (h) => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

// 钩子函数
export async function bootstrap () {
  console.log('[vue] vue app bootstraped')
}
export async function mount (props) {
  console.log('[vue] props from main framework', props)
  render(props)
}
export async function unmount () {
  qiankunInstance.$destroy()
  qiankunInstance.$el.innerHTML = ''
  qiankunInstance = null
  qiankunRouter = null
}
