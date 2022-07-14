/* 用户认证相关 */
import { request } from '@/common/plugins/requestPlugin'

// 登录
export const test = () =>
  request.get(
    'https://www.fastmock.site/mock/04fa2fe654ab85a986df8f514bb62179/fengxiu/example/test'
  )
