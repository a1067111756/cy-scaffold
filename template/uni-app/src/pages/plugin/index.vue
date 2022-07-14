<template>
  <global-page-wrapper>
    <view class="page-plugin__container">
      <!-- uview插件 -->
      <view class="ppc_demo-wrapper">
        <text>uview组件库</text>
        <u-rate :count="uviewParams.count" v-model="uviewParams.value"></u-rate>
      </view>

      <!-- mitt事件总线 -->
      <view class="ppc_demo-wrapper">
        <text>mitt事件总线</text>
        <u-button
          size="medium"
          type="primary"
          @click="$mittBus.emit('page:plugin-demo:test')"
        >
          发送事件
        </u-button>
      </view>

      <!-- ajax插件 -->
      <view class="ppc_demo-wrapper">
        <text>axios请求库</text>
        <u-button size="medium" type="primary" @click="ajaxTest">
          ajax请求
        </u-button>
      </view>

      <!-- iconfont图标 -->
      <view class="ppc_demo-wrapper">
        <text>iconfont图标</text>
        <view class="wd-flex wd-justify-center wd-items-center">
          <view class="wd-flex wd-flex-col wd-justify-center wd-items-center">
            <view
              class="iconfont icon-xiai wd-text-48r"
              style="color: red"
            ></view>
            <text>class引用</text>
          </view>
          <view
            class="wd-flex wd-flex-col wd-justify-center wd-items-center wd-ml-20r"
          >
            <view
              class="s-icon s-icon-gongjiaochechezhanzhantai"
              style="width: 48rpx; height: 48rpx"
            ></view>
            <text>symbol引用</text>
          </view>
        </view>
      </view>

      <!-- windi-css-uni -->
      <view class="ppc_demo-wrapper">
        <text>windi-css-uni样式库</text>
        <view class="wd-text-center">
          <view class="wd-text-28r">样式文本测试</view>
          <view class="wd-text-36r">只需要再节点上绑定class</view>
          <view class="wd-text-48r">就可以轻松改变文本样式</view>
        </view>
      </view>
    </view>
  </global-page-wrapper>
</template>

<script lang="ts" setup>
import { onLoad } from '@dcloudio/uni-app'
import { mittBus } from '@/common/plugins/mittPlugin'
import { useAppContext } from '@/hooks/appContextHook'
import { PAGE$PLUGIN_DEMO$TEST } from '@/service/constant/event'

// hooks
const appContext = useAppContext()

// uview
const uviewParams = {
  count: 4,
  value: 2
}

// mitt
const mittTest = () => {
  // uni.$u.uTips.show({
  //   type: 'success',
  //   title: '接收到mittBus事件'
  // })
	uni.$u.uAlert.show({
		type: 'success',
		title: '接收到mittBus事件'
	})
}

// ajax
const ajaxTest = () => {
  appContext.$api.example.test().then(() => {
    uni.$u.uAlert.show({
      type: 'success',
      title: '接收到ajax请求'
    })
  })
}

// 生命周期 - 挂载
onLoad(() => {
  mittBus.on(PAGE$PLUGIN_DEMO$TEST, mittTest)
})
</script>

<style lang="scss" scoped>
.page-plugin__container {
  padding: 80rpx;

  .ppc_demo-wrapper {
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
