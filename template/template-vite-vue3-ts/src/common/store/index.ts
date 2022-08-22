/* 全局 - store - 注册入口 */
import type { App } from 'vue'
import extendPlugin from './extendPlugin'
import { createPinia } from 'pinia';

// store实例
export const store = createPinia();

const install = (app: App): void => {
  // 注册store
  app.use(store)

  // 扩展store功能
  app.use(extendPlugin)
}

export default install