/* 用户认证相关 */
import request from '@/utils/request'

// 登录
export const login = () => request.post('/user/login')

// 获取用户信息
export const getUserInfo = () => request.get('/user/current')