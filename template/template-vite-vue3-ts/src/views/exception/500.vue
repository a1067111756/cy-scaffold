<template>
  <div class="page-404__container w-full h-full flex flex-col justify-center items-center">
    <Vue3Lottie :animation-data="animate500" :height="400" :width="400" class="-mt-1/12" />

    <div class="flex flex-col text-center mb-40px z-1">
      <p class="text-32px font-bold">500, 服务器出错</p>
      <p class="text-[#909399] mt-20px">Sorry, the server is reporting a error</p>
    </div>

    <el-button type="primary" :icon="ArrowLeft" @click="$router.back()">返 回</el-button>
  </div>
</template>

<script lang="ts" setup>
import {ArrowLeft} from '@element-plus/icons-vue'
import animate500 from '@/assets/lottie/500.json'
</script>