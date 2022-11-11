import type { UserState } from './user'
import type { Login } from '@/api/login/rule'
import loginApi from '@/api/login'
import userApi from '@/api/user'
import { defineStore } from 'pinia'
import { getToken, getUserInfo, setToken, setUserInfo } from '@/utils/auth'
import { Session } from '@/utils/storage'
import { resetRouter } from '@/router/index'
export default defineStore('user', {
  state: (): UserState => {
    return {
      userId: 0,
      token: getToken(),
      userInfo: getUserInfo(),
      routerList: [{}],
    } as UserState
  },
  actions: {
    async login(userinfo: Login) {
      const { username, password } = userinfo
      let { bean } = await loginApi.login({ username: username.trim(), password: password.trim() })
      this.token = bean.token
      this.userId = bean.id
      setToken(bean.token)
      this.getInfo()
    },
    async logout() {
      this.token = ''
      Session.clear()
      resetRouter()
    },
    async getInfo() {
      let { bean } = await userApi.getUserInfoApi({ id: this.userId })
      this.userInfo = bean
      setUserInfo(bean)
    },
  },
})
