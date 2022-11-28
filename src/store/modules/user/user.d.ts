interface UserInfo {
  [key: string]: any
}

export interface UserState {
  token: string
  userInfo: UserInfo
  routerList: Array<UserInfo>
}
