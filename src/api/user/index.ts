// import { Login } from './rule'
import request from '@/utils/request'

/**
 * 获取指定用户信息
 * @params id 用户ID
 */
const getUserInfoApi = (params: { id: number }) => {
  return request.get('sys/user/info', params.id)
}
export default {
  getUserInfoApi,
}
