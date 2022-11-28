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
      token: getToken(),
      userInfo: getUserInfo(),
      routerList: [{}],
    } as UserState
  },
  actions: {
    // 登录
    async login(userinfo: Login) {
      const { username, password } = userinfo
      let { bean } = await loginApi.login({ username: username.trim(), password: password.trim() })
      this.token = bean.token
      setToken(bean.token)
      this.getInfo(bean.id)
    },
    // 退出
    async logout() {
      this.token = ''
      Session.clear()
      resetRouter()
    },
    // 获取用户信息
    async getInfo(userId: number) {
      let { bean } = await userApi.getUserInfoApi({ id: userId })
      this.userInfo = bean
      setUserInfo(bean)
    },
  },
})
