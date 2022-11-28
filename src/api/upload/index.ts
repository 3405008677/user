import request from '@/utils/request'

/**
 * 上传图片
 * @params file 文件
 */
const fileUpload = (data: { file: File }) => {
  return request.post('/file/upload', data)
}
/**
 * 删除图片
 * @params fileName 文件名
 */
const fileDelete = (data: { fileName: string }) => {
  return request.post('/file/delete', data)
}
/**
 * 获取图片
 * @params fileName 文件名
 */
const fileGet = (data: { fileName: string }) => {
  return request.get('/file/get', data)
}
export default {
  fileUpload,
  fileDelete,
  fileGet,
}
