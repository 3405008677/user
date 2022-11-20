import type { Router } from 'vue-router'

import { getRouterNameList, getToken, getRouterList } from '@/utils/auth'
import { userStore } from '@/store'
import { addRouterList } from '@/router'
import { withLoading } from '@/components/Loading'
import nProgress from 'nprogress'

// nprogres state
nProgress.configure({ showSpinner: false })

// loading
let loading: any

/**
 * beforeEach
 */
export function beforeEach(router: Router) {
  router.beforeEach((to, from, next) => {
    nProgress.start()
    loading = ElLoading.service({
      text: '拼命加载中...',
    })
    const token = getToken()
    if (token) {
      if (to.path === '/login') {
        ElNotification({
          title: '已经登录',
          message: '请先退出再登录！',
          type: 'error',
        })
        console.log(from)
        return next(from.path)
      }
      // 判断路由是否存在  不存在则进入
      return next()
    } else {
      // 判断路由是否存在
      if (!router.hasRoute(to.name!)) {
        ElNotification({
          title: '路由不存在',
          message: '别瞎点了，老实登录去吧！',
          type: 'error',
        })
        return next('login')
      }
      //如果当前路由需要不登录
      if (to.meta.needLogin === false) {
        return next()
      } else {
        ElNotification({
          title: 'token过期',
          message: '请重新登录',
          type: 'error',
        })
        return next({
          path: '/login',
          query: { redirect: to.fullPath },
        })
      }
    }
  })
}

/**
 * afterEach
 */
export function afterEach(router: Router) {
  router.afterEach((to, from) => {
    nProgress.done()
    loading.close()
  })
}

export function setupRouterGuard(router: Router) {
  beforeEach(router)
  afterEach(router)
}
