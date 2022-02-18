/* store样例 */
import type {ActionContext} from 'vuex';

// state声明
export interface IStateModel {
  count: number
}

// 状态
const state: IStateModel = {
  count: 0
}

// 突变
const mutations = {
  ADD_COUNT: (state: IStateModel) => {
    state.count++
  }
}

// 操作
const actions = {
  addCount: (context: ActionContext<IStateModel, any>) => {
    context.commit('ADD_COUNT')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
