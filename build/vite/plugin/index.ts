import { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vueJsx from '@vitejs/plugin-vue-jsx'
import VitePluginCertificate from 'vite-plugin-mkcert'

// import legacy from '@vitejs/plugin-legacy'
//

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // have to
    vue(),
    // have to
    // vueJsx(),
    //
    VitePluginCertificate({
      // set china mirror image
      source: 'coding'
    })
  ]

  return vitePlugins
}
