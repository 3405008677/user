import { createApp } from 'vue'
import App from './App.vue'

import { setupRouter } from '@/router'

async function bootstrap() {
  const app = createApp(App)
  // 配置 store
  // 配置 router
  setupRouter(app)

  app.mount('#app')
}

bootstrap()
