<template>
  <div id="app">
    <!-- 主应用视图 -->
    <router-view />

    <!-- vue子应用视图 -->
    <div id="mic-vue-app"></div>
    <!-- react子应用视图 -->
    <div id="mic-react-app"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
