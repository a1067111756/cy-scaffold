import { createRouter, createWebHistory } from 'vue-router'

// 路由编排
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  }
]

// 路由配置
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
