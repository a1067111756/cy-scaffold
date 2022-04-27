import router from '@/common/router'
import localTango from 'local-tango'
import {ElNotification} from 'element-plus'
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

// token缓存key
const AUTH_TOKEN_KEY = 'token_key'

// 请求状态码表
const STATUS_CORRECT_CODE = 300
const STATUS_ERROR_MESSAGE = {
  400: '错误请求',
  401: '用户没有权限',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '页面未找到',
  405: '请求方法不被允许',
  406: '请求的格式不可得',
  410: '请求的资源不可用',
  500: '服务器发生错误',
  502: '网关错误',
  503: '服务不可用，服务器暂时无法响应请求',
  504: '网关超时'
};
const handleStatusCodeOpt = (status: number) => {
  switch (status) {
    // 无访问权限 - 401页面
    case 401:
    case 402:
    case 403:
      router.push('/401')
      break
    // 页面未找到 - 404页面
    case 404:
      router.push('/404')
      break
    // 服务器发生错误 - 500页面
    case 500:
    case 501:
    case 504:
      router.push('/500')
      break
    default:
      break
  }
}

// 接口响应码表
const INTERFACE_CORRECT_CODE = '00000'
const INTERFACE_ERROR_MESSAGE = {
}

// 创建axios实例
const service: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 10 * 1000
})

// request拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 携带token
    const token = localTango.getItemString(AUTH_TOKEN_KEY)
    if (token) {
      config.headers.Authorization = 'Bearer ' + token
    }

    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

// response拦截器
service.interceptors.response.use(
  (response) => {
    // 响应状态报错统一处理
    const { status, statusText, config } = response
    if (status >= STATUS_CORRECT_CODE) {
      const errorMsg = STATUS_ERROR_MESSAGE[status] || '请求发生错误!'
      ElNotification.error({
        title: errorMsg,
        dangerouslyUseHTMLString: true,
        message: `
          <p>status - ${status}</p>
          <p>msg - ${statusText}</p>
          <p>url - ${config.url}</p>
        `
      })
      handleStatusCodeOpt(status)

      return Promise.reject(errorMsg)
    }

    // 接口错误码统一处理
    const { code, data, message } = response.data
    if (code !== INTERFACE_CORRECT_CODE) {
      const errorMsg = INTERFACE_ERROR_MESSAGE[code] || '发生未知错误，请联系管理员!'
      ElNotification.error({
        title: errorMsg,
        dangerouslyUseHTMLString: true,
        message: `
          <p>code - ${status}</p>
          <p>msg - ${message}</p>
          <p>url - ${config.url}</p>
        `
      })
      return Promise.reject(message)
    } else {
      return data
    }
  },
  (error) => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)

export default service
