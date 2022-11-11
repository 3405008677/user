import type { RouteRecordRaw } from 'vue-router'
import { Session } from './storage'

//storage basic info
const setUserInfo = (info: Object) => {
  return Session.set(import.meta.env.VITE_WEB_INFO || 'USER-INFO', info)
}
//gain storage basic info
const getUserInfo = () => {
  return Session.get(import.meta.env.VITE_WEB_INFO || 'USER-INFO') || {}
}

//storage token
const setToken = (token: string) => {
  return Session.set('TOKEN', token)
}

// gain token
const getToken = (): string => {
  return Session.get('TOKEN')
}

// storage admin routers
const setRouterList = (value: Array<RouteRecordRaw>) => {
  return Session.set('ROUTER-LIST', value)
}

// gain admin routers
const getRouterList = () => {
  return Session.get('ROUTER-LIST')
}

// storage routers name
const setRouterNameList = (value: Array<string> | string) => {
  // 扁平化 + 去重
  value = Array.from(new Set(getRouterNameList()).add(value)).flat() as unknown as string
  return Session.set('ROUTER-NAME-LIST', value)
}

// gain routers name
const getRouterNameList = () => {
  return Session.get('ROUTER-NAME-LIST')
}
// quit login
const removeToken = () => {
  return Session.remove('TOKEN')
}

export {
  setUserInfo,
  getUserInfo,
  setToken,
  getToken,
  setRouterList,
  getRouterList,
  setRouterNameList,
  getRouterNameList,
  removeToken,
}
