/* 显示原生html悬浮提示 */
import type {DirectiveBinding} from 'vue';

const install = {
  // 组件挂载时
  mounted (el: HTMLElement, binding: DirectiveBinding) {
    // 获取悬浮文本
    const content = binding.value || el.innerHTML

    // 绑定title属性
    el.setAttribute('title', content)
  },

  // 组件更新时
  updated (el: HTMLElement, binding: DirectiveBinding) {
    // 获取悬浮文本
    const content = binding.value || el.innerHTML

    // 绑定title属性
    el.setAttribute('title', content)
  }
}

export default install
