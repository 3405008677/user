import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

import { createRouter, createWebHashHistory } from 'vue-router'
import staticRoutes from './modules/index'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: staticRoutes
})

// 配置路由
export function setupRouter(app: App<Element>) {
  app.use(router)
}
