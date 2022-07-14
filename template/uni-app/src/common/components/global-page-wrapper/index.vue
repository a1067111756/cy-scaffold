<!--全局 - 组件 - 页面包装
 * 作为所有页面的基础包装层，建议每个页面都引入。其中会统一出来页面公共样式封装挂载页面公共组件
-->
<template>
  <view class="page-wrapper">
    <slot />

    <!-- 全局提示组件 -->
    <global-page-tips />
  </view>
</template>

<script lang="ts">
export default {
  name: 'global-page-wrapper'
}
</script>
