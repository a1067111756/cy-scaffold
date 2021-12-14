/* 页面内共享数据 */
import Vue from 'vue'

export const state = Vue.observable({
  searchValue: { // 搜索栏参数
    status: undefined,
    postCode: undefined,
    postName: undefined
  } 
})

export const mutations = {
  setSearchValue (val) {
    state.searchValue = val
  }
}

export default {
  state,
  mutations
}