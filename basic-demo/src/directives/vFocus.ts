// 自定义指令，实际上是一个函数
//  为一个 input 框添加自动聚焦功能
export const vFocus = {
  // 生命周期函数
  mounted(el: HTMLInputElement) {
    el.focus()
  },
}
