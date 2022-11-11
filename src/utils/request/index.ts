import axios from './base'

type ParamsType = object | string | number | [] | boolean
class request {
  static get = (url: string, params?: ParamsType, headers?: object) => {
    return axios({
      url,
      method: 'GET',
      params,
      headers,
    })
  }
  static post = (url: string, data?: ParamsType, headers?: object) => {
    return axios({
      url,
      method: 'POST',
      data,
      headers,
    })
  }
  static put = (url: string, data?: ParamsType, headers?: object) => {
    return axios({
      url,
      method: 'GET',
      data,
    })
  }
  static delete = (url: string, params?: ParamsType, headers?: object) => {
    return axios({
      url,
      method: 'DELETE',
      params,
    })
  }
}

export default request
