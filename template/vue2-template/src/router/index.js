import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "page-about" */ '@/views/Home.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'hash'
})

export default router
