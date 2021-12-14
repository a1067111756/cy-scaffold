/* 用户认证相关 */
import request from '@/utils/request.js'

// 登录
export const login = () => request.get('/login')

// 注册
export const register = () => request.get('/register')
