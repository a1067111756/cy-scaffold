import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
