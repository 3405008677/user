/**
 * 所以动态
 * 用户动态
 */
export interface QueryDynList {
  pageNum: number
  pageSize: number
}
/**
 * 新增动态
 */
export interface Addend {
  title: string
  content: string
  coverImage?: string
  imgList?: string[]
}
/**
 * 删除动态
 */
export interface DeleteDyn {
  dynId: number
}
/**
 * 点赞/取消点赞
 */
export interface Thumb {
  byUserId: number
  dynId: number
}
