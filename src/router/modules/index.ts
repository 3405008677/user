export default [
  {
    path: '/',
    name: '/',
    redirect: '/home',
    component: () => import('@/layouts/default/index.vue'),
    children: [
      {
        path: 'home',
        name: '/home',
        meta: {
          title: '首页',
          needLogin: true,
          keepAlive: false,
        },
        component: () => import('@/views/demo/home/home.vue'),
      },
      {
        path: 'edit',
        name: '/edit',
        meta: {
          title: '富文本',
          needLogin: true,
          keepAlive: false,
        },
        component: () => import('@/views/demo/edit/index.vue'),
      },
      {
        path: 'article/:data',
        name: '/article',
        meta: {
          title: '文章',
          needLogin: true,
          keepAlive: false,
        },
        component: () => import('@/views/demo/article/index.vue'),
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
