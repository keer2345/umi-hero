export default [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      {
        path: '/',
        component: '@/pages/index',
      },
      {
        path: '/users',
        component: '@/pages/users',
      },
      {
        path: '/hero',
        component: '@/pages/hero',
      },
      {
        path: '/item',
        component: '@/pages/item',
      },
      {
        path: '/summoner',
        component: '@/pages/summoner',
      },
    ],
  },
]
