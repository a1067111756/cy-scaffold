/* hook - 全局 - vue上下文 */
import { getCurrentInstance } from 'vue'

export const useAppContext = () => {
  // @ts-ignore
  const { proxy } = getCurrentInstance()

  return proxy
}
