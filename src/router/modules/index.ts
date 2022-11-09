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
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
      needLogin: false,
      keepAlive: false,
    },
    component: () => import('@/views/sys/login/index.vue'),
  },
]
