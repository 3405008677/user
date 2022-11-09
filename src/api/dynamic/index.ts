import type { Addend, DeteleDyn, Thumb, QueryDynList } from './rule'
import request from '@/utils/request'
/**
 * 用户动态
 * @params pageNum 当前页数
 * @params pageSize 每页数量
 */
const queryDynList = (params: QueryDynList) => {
  return request.get('/dynamic/queryDynList', params)
}

/**
 * 新增动态
 * @params title 标题
 * @params content 内容
 */
const append = (data: Addend) => {
  return request.post('/dynamic/append', data)
}
/**
 * 删除动态
 * @params bynId 被点赞的动态id
 */
const deteleDyn = (params: DeteleDyn) => {
  return request.delete('/dynamic/deteleDyn', params)
}
/**
 * 点赞/取消点赞
 * @params byUserId 被点赞的用户id
 * @params bynId 被点赞的动态id
 */
const thumb = (data: Thumb) => {
  return request.post('/dynamic/thumb', data)
}

export { append, deteleDyn, thumb }
