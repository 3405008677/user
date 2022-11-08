// export {}

// declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    elIcon?: string
    needLogin?: boolean
    keepAlive?: boolean
  }
  interface RouteRule extends Record<string | number | symbol, unknown> {
    path: string
    name: string
    redirect?: string
    meta?: RouteMeta
    component?: any
    children?: RouteRule
  }
  interface MyRouter {
    menuId: string
    roleId: number
    parentId: string
    name: string
    type: number
    icon: string
    path: string
    sysMenus: Array<MyRouter>
  }
// }
