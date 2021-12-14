/* 测试页面 */
<template>
  <div class="page-test__container">
    <!-- 搜索栏 -->
    <Search></Search>

    <!-- 表格栏 -->
    <Table></Table>
  </div>
</template>

<script>
  import Table from './components/Table'
  import Search from './components/Search'

  export default {
    name: 'TestPage',
    components: { Search, Table }
  }
</script>

<style lang="scss" scoped>
  .page-test__container {
    padding: 20px;
  }
</style>
