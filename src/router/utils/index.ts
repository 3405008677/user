import { setRouterNameList } from '@/utlis/auth'
import type { MyRouter, RouteMeta, RouteRule } from 'vue-router'

const _import = import.meta.glob('/src/views/demo/**/**.vue')

/**
 * alter URL also add params
 * @param url now router address
 * @param key params of key
 * @param keyVal params of value
 */
export const changeUrl = (url: string, key: string, keyVal: string) => {
  let pattern: string = key + '=([^&]*)',
    replaceText: string = key + '=' + keyVal
  if (url.match(pattern)) {
    let tmp: string = '/(' + key + '=)([^&]*)/gi'
    tmp = url.replace(eval(tmp), replaceText)
    return tmp
  } else {
    if (url.match('[?]')) {
      return url + '&' + replaceText
    } else {
      return url + '?' + replaceText
    }
  }
}

/**
 * formatting router list
 */
export const formattingRouter = (router: Array<MyRouter>, father: RouteRule) => {
  let temp: Array<RouteRule> = []
  let localRouter: Array<string> = []
  for (let i = 0; i < router.length; i++) {
    let v: RouteRule = { path: '', name: '' }
    let meta: RouteMeta = {}
    v.path = router[i].path
    if (Object.keys(father).length) {
      v.name = father.name + '/' + router[i].path
    } else {
      v.name = '/' + router[i].path
    }
    v.component = _import[`/src/views/demo${v.name}.vue`]
    meta.title = router[i].name
    meta.elIcon = router[i].icon
    meta.url = v.name
    meta.keepAlice = false
    v.meta = meta
    // 有children
    if (router[i].sysMenus != undefined && router[i].sysMenus.length) {
      v.redirect = v.name + '/' + router[i].sysMenus[0].path
      v.children = formattingRouter(router[i].sysMenus, v) as unknown as RouteRule
      v.component = undefined
    }
    // 针对一级路由
    if (router[i].parentId == '0') {
      v.path = router[i].path
    }
    // 针对home
    if (router[i].parentId == '0' && router[i].path == 'home') {
      meta.url = v.name + v.name
      v.component = _import[`/src/views/demo${v.name + v.name}.vue`]
    }
    localRouter.push(v.name)
    temp.push(v)
  }
  setRouterNameList(localRouter)
  return temp
}
