import type { Addend, DeleteDyn, Thumb, QueryDynList } from './rule'
import request from '@/utils/request'
/**
 * 所有动态
 * @params pageNum 当前页数
 * @params pageSize 每页数量
 */
const thumbDetail = (params: QueryDynList) => {
  return request.get('/dynamic/DynDetail', params)
}

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
 * @params imgList 图片
 */
const append = (data: Addend) => {
  return request.post('/dynamic/append', data)
}
/**
 * 删除动态
 * @params bynId 被点赞的动态id
 */
const deleteDyn = (params: DeleteDyn) => {
  return request.delete('/dynamic/deleteDyn', params)
}
/**
 * 点赞/取消点赞
 * @params byUserId 被点赞的用户id
 * @params bynId 被点赞的动态id
 */
const thumb = (data: Thumb) => {
  return request.post('/dynamic/thumb', data)
}
/**
 * 踩
 * @params dynId 被点赞的用户id
 */
const trample = (data: DeleteDyn) => {
  return request.post('/dynamic/trample', data)
}
/**
 * 收藏
 * @params dynId 收藏的用户id
 */
const collect = (params: DeleteDyn) => {
  return request.get('/dynamic/collect', params)
}
/**
 * 分享
 * @params address 分享的地址
 */
const share = (params: { address: string }) => {
  return request.get('/dynamic/share', params)
}

/**
 * 查询所有动态话题
 */
const topic = () => {
  return request.get('/dynamic/topic')
}
export default {
  thumbDetail,
  queryDynList,
  append,
  deleteDyn,
  thumb,
  trample,
  collect,
  share,
  topic,
}
