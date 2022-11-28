export interface Recent {
  id: number
  image: string
  title: string
  time: string
  content: string
  thumb: number //点赞
  comment: number //评论
  isThumb?: number //0 没点赞也没踩  1点赞  2踩
  isCollect?: number // 0 没收藏 1 收藏了
  coverImage: string
  [key: string]: any
}
