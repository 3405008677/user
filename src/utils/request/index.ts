import axios from 'axios'
import { getToken } from '../auth'

const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_REL,
  timeout: 5000,
  headers: {},
})

// request interceptor

// request.interceptors.request.use(
//   (config) => {
//     // request befour judge
//     const userToken: string = getToken()
//     if (userToken) config.headers['Authorization'] = `Bearer ${userToken}`
//     return config
//   },
//   (err) => {
//     return Promise.reject(err)
//   },
// )

// response interceptor
// request.interceptors.response.use(
//   (response) => {
//     const { data } = response
//     if (data.code === 200) return data
//     ElNotification({
//       title: '错误！',
//       message: data.msg,
//       type: 'error',
//     })
//   },
//   (err) => {
//     ElNotification({
//       title: '错误！',
//       message: err,
//       type: 'error',
//     })
//     return Promise.reject(err)
//   },
// )

// request.get = (url: string, params: object, headers: object) => {
//   return request({
//     url,
//     method: 'GEt',
//     params,
//     headers,
//   })
// }

export default request
