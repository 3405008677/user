export interface PropsType {
  title: string
  icon: string
  to?: RouteLocationRaw
  children?: Array<PropsType> | []
}
