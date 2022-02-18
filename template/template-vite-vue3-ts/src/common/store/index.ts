import { createStore } from 'vuex'
import getters from './getter'
import example from './modules/example'

const store = createStore({
  getters,
  modules: {
    example
  }
})

export default store
