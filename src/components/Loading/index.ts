const defaultOptions = {
  Lock: true,
  text: '正在拼命加载中···',
  background: 'rgb(0,0,0,0.1)',
}
/**
 *
 * @param fn is a function
 * @returns a Function
 */
export const withLoading = (fn?: Function, options?: Object) => {
  let loading: any
  const showLoading = (options: Object) => {
    loading = ElLoading.service(options)
  }
  const hideLoading = () => {
    if (loading) {
      loading.close()
    }
  }
  const _option = Object.assign(defaultOptions, options)
  const newFn = (...args: any) => {
    try {
      showLoading(_option)
      const result = fn ? fn(...args) : ''
      const isPromis = result instanceof Promise
      if (isPromis) {
        hideLoading()
        return result
      }
      return result
        .then((res: any) => {
          hideLoading()
          return res
        })
        .cath((err: any) => {
          hideLoading()
          return err
        })
    } catch (err) {
      hideLoading()
      throw err
    }
  }
  return newFn
}
