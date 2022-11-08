import request from '@/utils/request'
const append = (data: any) => {
  return request.post('/dynamic/append', data)
}

export const dynamic = {
  append,
}
