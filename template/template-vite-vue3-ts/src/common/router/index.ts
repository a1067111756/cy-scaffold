import { createRouter, createWebHistory } from 'vue-router'

// 路由编排
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/401',
    name: '401',
    component: () => import('@/views/exception/401.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/exception/404.vue')
  },
  {
    path: '/500',
    name: '500',
    component: () => import('@/views/exception/500.vue')
  }
]

// 路由配置
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
