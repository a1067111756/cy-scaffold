/* 全局组件配置文件 */
import Vue from 'vue'

// 注册components中的global开头的全局组件
import '@/components/index.js'

// 注册统一图标组件
import VueUnifyIcon from '@/components/VueUnifyIcon'
Vue.component('vue-unify-icon', VueUnifyIcon)
