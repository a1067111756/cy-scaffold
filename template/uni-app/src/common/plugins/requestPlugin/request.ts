import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import axios from 'axios'
import buildURL from 'axios/lib/helpers/buildURL'
import buildFullPath from 'axios/lib/core/buildFullPath'
import {
  AUTH_TOKEN_KEY,
  REQUEST_CONFIG,
  STATUS_CORRECT_CODE,
  INTERFACE_CORRECT_CODE,
  handleStatusCodeMessage,
  handleStatusCodeError,
  handleInterfaceCodeMessage,
  handleInterfaceCodeError,
  handleExceptionCodeMessage,
  handleExceptionCodeError
} from './config'

// 创建axios实例
const service: AxiosInstance = axios.create(REQUEST_CONFIG)

// request拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 携带token
    const token = uni.getStorageSync(AUTH_TOKEN_KEY)
    if (token) {
      config.headers!.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// response拦截器
service.interceptors.response.use(
  (response) => {
    // 响应状态报错统一处理
    if (response.status >= STATUS_CORRECT_CODE) {
      handleStatusCodeMessage(response)
      handleStatusCodeError(response)

      return Promise.reject(response.statusText)
    }

    // 接口错误码统一处理
    const { code, data, message } = response.data
    if (code !== INTERFACE_CORRECT_CODE) {
      handleInterfaceCodeMessage(response)
      handleInterfaceCodeError(response)

      return Promise.reject(message)
    }

    return data
  },
  // 异常报错统一处理
  (error) => {
    handleExceptionCodeMessage(error)
    handleExceptionCodeError(error)

    return Promise.reject(error)
  }
)

// 兼容微信小程序adapter
// #ifdef MP-WEIXIN
axios.defaults.adapter = function (config) {
  return new Promise((resolve, reject) => {
    uni.request({
      method: config.method!.toUpperCase() as any,
      url: buildURL(
        buildFullPath(config.baseURL, config.url),
        config.params,
        config.paramsSerializer
      ),
      header: config.headers,
      data: config.data,
      timeout: config.timeout,
      responseType: config.responseType,
      fail: function fail(error: any) {
        if (error.errMsg === 'request:fail timeout') {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject({
            config,
            code: 'ECONNABORTED',
            message: error.errMsg
          })
        }

        if (error.errMsg === 'request:fail ') {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject({
            config,
            code: 'ERR_NETWORK',
            message: error.errMsg
          })
        }

        // eslint-disable-next-line prefer-promise-reject-errors
        reject({
          config,
          code: error.errno,
          message: error.errMsg
        })
      },
      success: function success(response: any) {
        resolve({
          config,
          data: response.data,
          headers: response.header,
          status: response.statusCode,
          statusText: response.errMsg
        })
      }
    })
  })
}
// #endif

export default service
