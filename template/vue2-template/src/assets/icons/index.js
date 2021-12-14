import Vue from 'vue'
import UnifyIcon from '@/components/UnifyIcon/index.vue'// svg component

// register globally
Vue.component('vue-unify-icon', UnifyIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
