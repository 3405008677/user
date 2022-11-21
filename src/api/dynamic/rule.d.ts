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
  imgList?: string[]
}
/**
 * 删除动态
 */
export interface DeteleDyn {
  dynId: number
}
/**
 * 点赞/取消点赞
 */
export interface Thumb {
  byUserid?: number
  dynId: number
}
