/* 全局属性相关 */
import Vue from 'vue'

// 请求属性挂载 - 将axios对象挂在到$http
import request from '@/utils/request'
Vue.prototype.$axios = request

// api接口集中管理 - 将api集合对象挂在到$api
import '@/api/index'
