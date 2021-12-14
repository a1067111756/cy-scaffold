/* 搜索栏Mixins */
import baseMixins from './baseMixins'
import loadingMixins from './loadingMixins'

export default {
  mixins: [baseMixins, loadingMixins],
  data () {
    return {
      dataSource: [],
      pagination: {
        total: 0,
        pageNum: 1,
        pageSize: 10        
      }
    }
  },
  mounted () {
    this.loader()
    this.$bus.on('global:search-bar:search', this.loader)
    this.$bus.on('global:search-bar:reset', this.MIXINS_METHODS_ON_RESET)
  },
  beforeDestroy() {
    this.$bus.off('global:search-bar:search', this.loader)
    this.$bus.off('global:search-bar:reset', this.MIXINS_METHODS_ON_RESET)
  },
  methods: {
    // 事件 - 重置
    MIXINS_METHODS_ON_RESET () {
      // 重置分页
      this.pagination.pageNum = 1   
      this.pagination.pageSize = 10  
      
      // 重新请求数据
      this.loader() 
    },     
  }
}