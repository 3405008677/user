export function getDateYear() {
  let time = new Date()
  return time.getFullYear()
}
export function convertFile(base64: string): File | Blob {
  let fileArray: any = base64.split(',')
  // 过滤出文件类型
  let fileType: string = fileArray[0].match(/:(.*?);/)[1]
  // atob 是对经过 base-64 编码的字符串进行解码
  let bstr = atob(fileArray[1])
  let n: number = bstr.length
  //Uint8Array 数组类型表示一个 8 位无符号整型数组
  let u8arr = new Uint8Array(n)
  while (n--) {
    // 返回字符串n个字符的 Unicode 编码
    u8arr[n] = bstr.charCodeAt(n)
  } // return new Blob([u8arr], { type: fileType })
  return new File([u8arr], '文件名', { type: fileType })
}
