import routes from './config/routes'
import { defineConfig } from 'umi'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  history: { type: 'browser' },
  routes: routes,
  fastRefresh: {},
})
