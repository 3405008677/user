interface UserInfo {
  [key: string]: any
}

export interface UserState {
  userId: number
  token: string
  userInfo: UserInfo
  routerList: Array<UserInfo>
}
