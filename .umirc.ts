import routes from './config/routes'
import { defineConfig } from 'umi'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // dva: {
  //   immer: true,
  //   hmr: false,
  // },

  // history: { type: 'hash' },
  history: { type: 'browser' },
  routes: routes,
  fastRefresh: {},
  proxy: {
    '/api': {
      // target: 'http://localhost:9001',
      target: 'https://pvp.qq.com',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
})
