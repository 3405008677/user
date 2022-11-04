import { PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [vue()];
}
