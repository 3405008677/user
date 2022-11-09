import { Login } from './rule'
import request from '@/utils/request'

/**
 * 登录
 * @params username 用户名
 * @params password 密码
 */
const login = (params: Login) => {
  return request.post('/sys/login', params)
}

export default {
  login,
}
