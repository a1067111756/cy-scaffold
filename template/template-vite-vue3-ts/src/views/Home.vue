<template>
  <div class="page-home__container">
    <div class="flex flex-col items-center">
      <img alt="Vue logo" src="@/assets/logo.png" />
      <div>
        <span v-title>count: {{ $store.getters.count }}</span>
        <button class="ml-20px" @click="onAddClick">点击+1</button>
      </div>

      <global-example class="mt-20px" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import {useStore} from 'vuex'
  import {request} from '@/common/plugins/requestPlugin'

  // store
  const store = useStore()

  // 事件 - 点击+1
  const onAddClick = () => {
    store.dispatch('example/addCount')
    vconsole.log('test', `你点击了增加按钮：${store.getters.count}`)
    request.get('https://www.fastmock.site/mock/0370a6398e401668cbe97c67d017cfde/unifyAccess/auth/captcha')
  }
</script>

<style lang="scss" scoped>
  .page-home__container {
    @apply w-full h-full;
  }
</style>
