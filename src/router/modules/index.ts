export default [
  {
    path: '/',
    name: '/',
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: '/home',
        meta: {
          title: '首页',
          needLogin: false,
          keepAlive: false,
        },
        component: () => import('@/views/demo/home/home.vue'),
      },
    ],
  },
]
