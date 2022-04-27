// eslint-disable-next-line
import type { ComponentCustomProperties } from 'vue'
import type { Store } from 'vuex'
import type { Router } from 'vue-router'
import type { Emitter } from 'mitt'

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<Record<string, never>, Record<string, never>, any>
  export default component
}

// 扩充vue运行时类型
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store,
    $router: Router,
    $mittBus: Emitter,
    $filters: {
      covNum (str: string): number
    }
  }
}
