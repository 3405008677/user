import type { AppState } from './app'
import { defineStore } from 'pinia'
export default defineStore('app', {
  state: (): AppState => {
    return {
      isCardIcon: true, //是否显示信息卡片
    }
  },
  actions: {
    setCarIcon() {
      this.isCardIcon = !this.isCardIcon
    },
  },
})
