import { h, render } from 'vue'
import confirmComponent from './index.vue'

export const confirm = (
  title,
  content,
  cancelText='取消',
  confirmText='确定'
) => {
  return new Promise((resolve, reject) => {
    if(title && !content) {
      content = title
      title = ''
    }
    // 关闭弹层事件
    const close = () => {
      render(null, document.body)
    }
    // 取消按钮事件
    const cancelHandler = () => {
      reject()
    }
    // 确定按钮事件
    const confirmHandler = () => {
      resolve()
    }
    // 创建 vnode
    const vnode = h(confirmComponent, {
      title,
      content,
      cancelText,
      confirmText,
      confirmHandler,
      cancelHandler,
      close
    })
    // render vnode到document.body
    render(vnode, document.body)
  })
}
