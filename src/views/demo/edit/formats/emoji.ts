import Quill from 'quill'

const ImageBlot = Quill.import('formats/image')

// 扩展Quill 内置的image 格式
class EmojiBlot extends ImageBlot {
  static blotName = 'emoji' //自定义Blot的名字(必须全局唯一)
  static tagName = 'img' //自定义内容的标签名
  //   创建自定义内容的DOM节点
  static create(value: any): any {
    const node = super.create(value)
    node.setAttribute('src', ImageBlot.sanitize(value.url))
    if (value.width !== undefined) {
      node.setAttribute('width', value.width)
    }
    if (value.height !== undefined) {
      node.setAttribute('height', value.height)
    }
    return node
  }
  // 返回options数据
  static value(node: any): any {
    return {
      url: node.getAttribute('src'),
      width: node.getAttribute('width'),
      height: node.getAttribute('height'),
    }
  }
}
export default EmojiBlot;