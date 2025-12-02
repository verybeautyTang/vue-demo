import { createStore } from 'vuex'
import { counterStore } from './slices/counter'
import { nameStore } from './slices/name'

// 创建一个新的 store 实例
export const store = createStore({
  modules: {
    counterStore,
    nameStore,
  },
})
