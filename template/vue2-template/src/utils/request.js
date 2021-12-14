/* axios实例配置文件 */
import axios from 'axios'

// 创建axios实例
const service = axios.create({
  timeout: 10000, // 超时配置
  baseURL: 'http://192.168.0.135:8201', // 基础BaseUrl
  headers: { 'Content-Type': 'application/json;charset=utf-8' } // 请求头
})

// 请求拦截器
service.interceptors.request.use(config => {
  // token处理
  // 对某个url进行特别处理
  return config
}, error => {
  Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(res => {
  // 对返回请求进行预处理
  return res.data
},
error => {
  return Promise.reject(error)
})

export default service
