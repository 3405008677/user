/**
 * window.localStorage
 * @method set
 * @method get
 * @method remove
 * @method clear
 */
export const Local = {
  set(key: string, val: any) {
    window.localStorage.setItem(key, JSON.stringify(val))
  },
  get(key: string) {
    return JSON.parse(window.localStorage.getItem(key) as string)
  },
  remove(key: string) {
    window.localStorage.removeItem(key)
  },
  clear() {
    window.localStorage.clear()
  },
}
/**
 * window.sessionStorage
 * @method set
 * @method get
 * @method remove
 * @method clear
 */
export const Session = {
  set(key: string, val: any) {
    window.sessionStorage.setItem(key, JSON.stringify(val))
  },
  get(key: string) {
    return JSON.parse(window.sessionStorage.getItem(key) as string)
  },
  remove(key: string) {
    window.sessionStorage.removeItem(key)
  },
  clear() {
    window.sessionStorage.clear()
  },
}
