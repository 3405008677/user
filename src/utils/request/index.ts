import axios from './base'

class request {
  static get = (url: string, params?: object, headers?: object) => {
    return axios({
      url,
      method: 'GET',
      params,
      headers,
    })
  }
  static post = (url: string, data?: object, headers?: object) => {
    return axios({
      url,
      method: 'POST',
      data,
      headers,
    })
  }
  static put = (url: string, data?: object, headers?: object) => {
    return axios({
      url,
      method: 'GET',
      data,
    })
  }
  static delete = (url: string, params?: object, headers?: object) => {
    return axios({
      url,
      method: 'DELETE',
      params,
    })
  }
  asd(){
    console.log(1);
    
  }
}

export default request
