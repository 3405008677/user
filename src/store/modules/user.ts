import type { Login } from '@/api/login/rule'
import loginApi from '@/api/login'
import { defineStore } from 'pinia'
import request from '@/utils/request'
import { getToken, setToken } from '@/utils/auth'
export default defineStore('user', {
  state: () => {
    return {
      userId: '',
      token: getToken(),
    }
  },
  actions: {
    async login(userinfo: Login) {
      const { username, password } = userinfo
      let { bean } = await loginApi.login({ username: username.trim(), password: password.trim() })
      this.token = bean.token
      this.userId = bean.id
      setToken(bean.token)
    },
  },
})
