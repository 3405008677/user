import type { UserConfig, ConfigEnv } from 'vite'
import { loadEnv } from 'vite'
import { createProxy } from './build/vite/proxy'
import { wrapperEnv } from './build/utils'
import { createVitePlugins } from './build/vite/plugin'
import { resolve } from 'path'

/**
 * 返回 当前项目下的绝对路径
 * @param dir 路径-相对
 */
function pathResolve(dir: string) {
  // 栗子:path.resolve('/foo/bar','.','/tmp/file')
  // /foo/bar/temp/file
  return resolve(process.cwd(), '.', dir)
}

export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  // 加载 vite 的环境变量 env
  const env = loadEnv(mode, root)
  const viteEnv = wrapperEnv(env)

  const isBuild = command === 'build'
  return {
    base: viteEnv.VITE_PUBLIC_PATH, //公共路径
    root, //项目根目录
    resolve: {
      alias: [
        {
          find: /@\//,
          replacement: pathResolve('src') + '/',
          // '@/': pathResolve('src'),
        },
        {
          find: /#\//,
          replacement: pathResolve('types') + '/',
          // '#/': pathResolve('types'),
        },
      ],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/style/index.scss";',
        },
      },
    },
    server: {
      // https:true,
      host: true,
      port: viteEnv.VITE_PORT,
      proxy: createProxy(viteEnv.VITE_PROXY),
      //若端口占用，直接退出
      strictPort: false,
    },
    esbuild: {
      pure: viteEnv.VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : [],
    },
    build: {
      target: 'modules',
      //启用gzip压缩大小报告-关闭可能会提高大型项目构建性能
      reportCompressedSize: false,
      minify: 'esbuild', //混淆器
      sourcemap: false,
      //规定触发警告的 chunk 大小（以 kbs 为单位）
      chunkSizeWarningLimit: 2000,
    },
    plugins: createVitePlugins(viteEnv, isBuild),
  }
}
