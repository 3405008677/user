import request from '@/utils/request'

/**
 * 登录
 * @params username 用户名
 * @params password 密码
 */
const login = (data: number) => {
  return request.post('/sys/login', data)
}

export default {
  login,
}
