#### 完整地导航解析流程

1. 导航被激活
2. 调用失活组件的`beforeRouteLeave`守卫
3. 调用全局的`beforeEach`守卫
4. 调用重组组件的`beforeRouteUpdate`守卫
5. 调用路由配置中的`beforeEnter`
6. 解析异步路由组件
7. 调用被激活组件的`beforeRouteBefore`守卫
8. 调用全局的`beforeResolve`守卫
9. 导航被确认
10. 调用全局的`afterEach`钩子
11. 触发 DOM 更新
12. 调用`beforeRouteEnter`守卫传递给`next`的回调函数，访问组件实例

### 多类型历史记录栈

- createWebHashHistory
- createWebHistory
- createMemoryHistory

#### createWebHashHistory

路由记录是依赖于 hash

- 跳转时， href = '/#/xxxx'
- 路由器前进后退操作：window.addEventListener('hashchange')

#### createWebHistory

路由记录是依赖于浏览器原生记录

- 跳转时，history.pushState、popState、go、forward、back
  （浏览器前进后退会触发的监听）
  实际上监听的：window.addEventListener('popstate')

#### createMemoryHistory

路由记录在内存中，在内存中定义了一个栈来存储历史记录

- 跳转逻辑自定义
- 监听，不需要，因为我们没有需要与外部路由状态同步的逻辑
