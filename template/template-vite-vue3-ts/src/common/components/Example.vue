/* 测试全局组件 */
<template>
  <p>{{msg}}</p>
</template>

<script lang="ts">
  export default {
    name: 'GlobalExample'
  }
</script>

<script lang="ts" setup>
import {ref} from 'vue';

const msg = ref('欢迎使用模板')
</script>