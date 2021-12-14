<template>
  <div class="page-home__container">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>
      <router-link to="/vue-app">vue子应用</router-link> |
      <router-link to="/react-app">react子应用</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
  .page-home__container {
    padding-top: 100px;
  }
</style>
