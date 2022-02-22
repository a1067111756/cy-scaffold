<template>
  <div class="page-404__container w-full h-full flex justify-center items-center">
    <div class="flex mr-[-120px]">
      <div class="mr-[-50px]">
        <el-button color="#008489" style="color: white" :icon="ArrowLeft" @click="$router.back()">返 回</el-button>
        <p class="text-60px opacity-85 font-bold mt-40px">Oops!</p>
        <p class="text-24px font-bold mt-30px">你没有权限去该页面</p>
        <p class="text-[#909399] mt-20px">Sorry, you don't have access to this page</p>
        <p class="text-14px font-bold mt-40px">你可以联系管理员, 开通权限</p>
        <ul class="text-14px">
          <li class="mt-15px">或者你可以去</li>
          <li class="text-[#008489] mt-15px hover:underline cursor-pointer">返回首页</li>
          <li class="text-[#008489] mt-15px hover:underline cursor-pointer">返回登录页</li>
        </ul>
      </div>

      <Vue3Lottie :animation-data="animate401" :height="500" :width="500" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ArrowLeft} from '@element-plus/icons-vue'
import animate401 from '@/assets/lottie/401.json'
</script>