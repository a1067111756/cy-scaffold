<template>
  <u-alert-tips v-bind="config" class="alert-tips" @close="close" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const defaultConfig = {
  title: undefined,
  description: undefined,
  closeAble: false,
  type: 'warning',
  closeText: undefined,
  showIcon: false,
  show: false,
  icon: undefined,
  iconStyle: undefined,
  titleStyle: undefined,
  descStyle: undefined,
  duration: 3000
}

// 配置项
const config = ref({ ...defaultConfig })

// 方法 - 关闭
const close = () => {
  config.value = { ...defaultConfig }
  config.value.show = false
}

// 方法 - 显示
const show = (params: any) => {
  Object.keys(params).forEach((key) => {
    config.value[key] = params[key]
  })

  config.value.show = true

  // 延时关闭
  config.value.duration !== 0 &&
    setTimeout(() => close(), config.value.duration)
}

defineExpose({
  show,
  close
})
</script>

<style lang="scss" scoped>
.alert-tips {
  position: fixed;
  top: 0;
	/* #ifdef H5 */
	top: 88rpx;
	/* #endif */
  left: 40rpx;
  right: 40rpx;
  z-index: 999;
}
</style>
