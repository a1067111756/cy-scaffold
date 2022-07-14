<!--全局 - 组件 - 页面公用全局提示组件
 * 1. 由于小程序没有dom支持，无法动态添加全局组件。该组件做兼容支持，需要每个page页面都引入该组件
 * 在组件挂载时，将最新的实例绑定到uni.$u上以便通过js直接调用
 * 2. 后期考虑使用vite插件在编译时动态将组件引入到每个page页面来解决需要手动引入的问题
-->
<template>
  <view>
    <!-- toast -->
    <u-toast ref="uToastRef" />

    <!-- top-tips -->
    <u-top-tips ref="uTopTipRef" />

    <!-- alert-tips -->
    <AlertTipsWrapper ref="uAlertTipRef" />
  </view>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import AlertTipsWrapper from './alert-tips-wrapper.vue'

// ref
const uToastRef = ref(null)
const uTopTipRef = ref(null)
const uAlertTipRef = ref(null)

// 生命周期 - 挂载
onMounted(() => {
  const pages = getCurrentPages()
  const currentPages = pages[pages.length - 1]
  const currentPagesRoute = currentPages.route

  if (!uni.$u.globalRef) {
    uni.$u.globalRef = new Map()
  }

  uni.$u.globalRef.set(currentPagesRoute, {
    uToastRef: uToastRef.value,
    uTopTipRef: uTopTipRef.value,
    uAlertTipRef: uAlertTipRef.value
  })
})
</script>

<script lang="ts">
export default {
  name: 'global-page-tips'
}
</script>
