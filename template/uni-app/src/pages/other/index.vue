<template>
  <global-page-wrapper>
    <view class="page-other__container">
      <!-- 全局store -->
      <view class="poc_demo-wrapper">
        <text>全局存储</text>
        <text>{{ $store.example.count }}</text>
        <u-button
          size="mini"
          type="primary"
          class="wd-mt-20r"
          @click="storeTest"
        >
          点击+1
        </u-button>
      </view>

      <!-- 全局属性 -->
      <view class="poc_demo-wrapper">
        <text>全局属性/方法：</text>
        <text>格式化保留两位精度：{{ $filters.toFixed(3.1415926) }}</text>
      </view>
    </view>
  </global-page-wrapper>
</template>

<script lang="ts" setup>
import { useAppContext } from '@/hooks/appContextHook'

// hooks
const appContext = useAppContext()

// store测试
const storeTest = () => {
  appContext.$store.example.setCount(appContext.$store.example.count + 1)
}
</script>

<style lang="scss" scoped>
.page-other__container {
  padding: 80rpx;

  .poc_demo-wrapper {
    background-color: #fafafa;
    border: 1px dashed #dddddd;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 6rpx;
    min-height: 250rpx;
    margin-bottom: 40rpx;

    text:nth-child(1) {
      font-size: 32rpx;
      font-weight: bold;
      margin-bottom: 30rpx;
    }
  }
}
</style>
