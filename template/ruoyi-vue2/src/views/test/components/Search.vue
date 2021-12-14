/* 搜索组件 */
<template>
  <div class="component-search__container">
    <el-form ref="search" :model="searchValueVModel" :inline="true" label-width="68px">
      <el-form-item label="岗位编码" prop="postCode">
        <el-input
          v-model="searchValueVModel.postCode"
          placeholder="请输入岗位编码"
          clearable
          size="small"
          @keyup.enter.native="onSearch"
        />
      </el-form-item>
      <el-form-item label="岗位名称" prop="postName">
        <el-input
          v-model="searchValueVModel.postName"
          placeholder="请输入岗位名称"
          clearable
          size="small"
          @keyup.enter.native="onSearch"
        />
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-select v-model="searchValueVModel.status" placeholder="岗位状态" clearable size="small">
          <!-- <el-option
            v-for="dict in statusOptions"
            :key="dict.dictValue"
            :label="dict.dictLabel"
            :value="dict.dictValue"
          /> -->
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="onSearch">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import store from '../store'
import baseMixins from '@/mixins/baseMixins'

export default {
  mixins: [baseMixins],
  computed: {
    searchValueVModel: {
      get () {
        return store.state.searchValue
      },
      set (val) {
        return store.mutations.setSearchValue(val)
      }
    }
  },
  methods: {
    // 事件 - 搜索
    onSearch () {
      this.$bus.emit('global:comp-search:search')
    },

    // 事件 - 重置
    onReset () {
      this.$refs.search.resetFields()
      this.$bus.emit('global:comp-search:reset')
    }
  }
}
</script>
