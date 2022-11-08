import type { Router } from 'vue-router'

import { getRouterNameList, getToken, getRouterList } from '@/utils/auth'
import { userStore } from '@/store'
import { addRouterList } from '@/router'
import { withLoading } from '@/components/Loading'
import nProgress from 'nprogress'

// nprogres state
nProgress.configure({ showSpinner: false })

// loading
let loading = withLoading()

/**
 * befoutEach
 */
export function befoutEach(router: Router) {
  router.beforeEach((to, from, next) => {
    nProgress.start()
  })
}
