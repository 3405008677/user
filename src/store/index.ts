import type { App } from 'vue'
import { createPinia } from 'pinia'

import app from './modules/app'
import user from './modules/user'

const pinia = createPinia()
export function setupStore(app: App<Element>) {
  app.use(pinia)
}

const appStore = app(pinia),
  userStore = user(pinia)

export { appStore, userStore }
