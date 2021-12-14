<template>
  <div class="component-table__container">
    <!-- 顶部操作栏 -->
    <div class="ctc-top__tool">
      <el-row :gutter="10" class="mb8">
        <el-col :span="1.5">
          <el-button
            type="primary"
            plain
            icon="el-icon-plus"
            size="mini"
            @click="onAdd"
          >新增</el-button>
        </el-col>
      </el-row>
    </div>

    <!-- 表格栏 -->
    <el-table v-loading="status__.tableLoading" :data="data__.tableData">
      <el-table-column label="岗位编号" align="center" prop="postId" />
      <el-table-column label="岗位编码" align="center" prop="postCode" />
      <el-table-column label="岗位名称" align="center" prop="postName" />
      <el-table-column label="岗位排序" align="center" prop="postSort" />
      <el-table-column label="状态" align="center" prop="status" />
      <el-table-column label="创建时间" align="center" prop="createTime" width="180" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="onUpdate(scope.row)"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="onRemove(scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页栏 -->
    <pagination
      :total="config__.pagination.total"
      :page-size="config__.pagination.pageSize"
      :current-page="config__.pagination.pageNo"
      @size-change="onPaginationSizeChange"
      @current-change="onPaginationPageChange"
    />
  </div>
</template>

<script>
import store from '../store'
import baseMixins from '@/mixins/baseMixins'
import loadingMixins from '@/mixins/loadingMixins'

export default {
  mixins: [baseMixins, loadingMixins],
  data () {
    return {
      data__: {
        tableData: []
      },
      config__: {
        pagination: {
          total: 0,
          pageNo: 1,
          pageSize: 10
        }
      }
    }
  },
  computed: {
    searchValueVModel: {
      get () {
        return store.state.searchValue
      }
    }
  },
  methods: {
    // 事件 - 新增
    onAdd () {},
    // 事件 - 更新
    onUpdate () {},
    // 事件 - 删除
    onRemove () {},
    // 事件 - 页面记录数改变
    onPaginationSizeChange () {
    },
    // 事件 - 页面数改变
    onPaginationPageChange () {
    }
  }
}
</script>
