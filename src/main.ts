import { createApp } from 'vue'
import App from './App.vue'

import { router, setupRouter } from '@/router'
import { setupRouterGuard } from './router/guard'
import { setupStore } from '@/store'
async function bootstrap() {
  const app = createApp(App)
  // 配置 store
  setupStore(app)
  // 配置 router
  setupRouter(app)
  setupRouterGuard(router)
  app.mount('#app')
}

bootstrap()
