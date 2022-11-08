import { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// element
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// import VitePluginCertificate from 'vite-plugin-mkcert'

// import legacy from '@vitejs/plugin-legacy'
//

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // have to
    vue(),
    // have to
    vueJsx(),
    //
    // VitePluginCertificate({
    //   // set china mirror image
    //   source: 'coding'
    // })
  ]
  vitePlugins.push(
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: './types/autoImport.d.d.ts',
      resolvers: [ElementPlusResolver()],
    }),
  )
  vitePlugins.push(
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  )

  return vitePlugins
}
