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
    ],
  },
]
