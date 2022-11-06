import { createApp } from 'vue'
import App from './App.vue'

async function bootstrap() {
  const app = createApp(App)
  // 配置 store
  // 配置 router

  app.mount('#app')
}

bootstrap()
