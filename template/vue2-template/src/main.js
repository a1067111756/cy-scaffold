import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import '@/config/style.config.js'
import '@/config/plugin.config.js'
import '@/config/property.config.js'
import '@/config/directive.config.js'
import '@/config/component.config.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
