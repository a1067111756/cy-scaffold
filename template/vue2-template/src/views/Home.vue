<template>
  <div class="page-home__container">
    <vue-unify-icon type="iconfont" icon="icon-shezhi" :size="50" color="blue"></vue-unify-icon>
    <vue-unify-icon type="element" icon="el-icon-platform-eleme" :size="50" color="red"></vue-unify-icon>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
  .page-home__container {
    display: flex;
    align-items: center;
  }
</style>
