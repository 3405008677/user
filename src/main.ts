import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");

async function bootstrap() {
  const app = createApp(App);
  // 配置 store
  // 配置 router
}