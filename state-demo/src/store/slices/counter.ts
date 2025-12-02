// 创建一个新的 store 实例
export const counterStore = {
  state() {
    return {
      count: 0,
    }
  },
  mutations: {
    incrementCount(state) {
      state.count++
    },
  },
}
