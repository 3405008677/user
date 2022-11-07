export default [
  {
    path: "/",
    name: "/",
    redirect: "/home",
    component: () => import("@/layouts/default/index.vue"),
    children: [
      {
        path: "home",
        name: "/home",
        meta: {
          title: "首页",
          needLogin: false,
          keepAlive: false,
        },
        component: () => import("@/views/demo/home/home.vue"),
      },
    ],
  },

  {
    path: "/login",
    name: "login",
    meta: {
      title: "登录",
      needLogin: false,
      keepAlive: false,
    },
    component: () => import("@/views/sys/login.vue"),
  },
  {
    path: "/404",
    name: "notFound",
    meta: {
      title: "404 Not Found!",
      needLogin: false,
      keepAlive: false,
    },
    component: () => import("@/views/sys/404.vue"),
  },
  {
    path: "/401",
    name: "noPower",
    meta: {
      title: "无权访问",
      needLogin: false,
      keepAlive: false,
    },
    component: () => import("@/views/sys/401.vue"),
  },
];
