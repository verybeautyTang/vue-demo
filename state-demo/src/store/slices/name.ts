// 创建一个新的 store 实例
export const nameStore = {
  state() {
    return {
      name: 'jasmine',
    }
  },
  mutations: {
    updateName(state, name) {
      state.name = name
    },
  },
}
