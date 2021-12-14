/* 搜索栏Mixins */
export default {
  methods: {
    // 事件 - 搜索
    MIXINS_METHODS_ON_SEARCH () {
      this.$bus.emit('global:search-bar:search')
    },    

    // 事件 - 重置
    MIXINS_METHODS_ON_RESET () {
      this.$refs.search && this.$refs.search.resetFields()
      this.$bus.emit('global:search-bar:reset')
    }    
  }
}