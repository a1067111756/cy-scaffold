<template>
  <div id="app">
    <!-- 主应用视图 -->
    <router-view/>

    <!-- vue子应用视图 -->
    <div id="mic-vue-app"></div>
    <!-- react子应用视图 -->
    <div id="mic-react-app"></div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
