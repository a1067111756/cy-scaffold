<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted () {
    console.log(`版本号：${process.env.VERSION}`)
    console.log(`commitHash：${process.env.COMMITHASH}`)
    console.log(`分支：${process.env.BRANCH}`)
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
