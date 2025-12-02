## 状态管理

### 基础状态管理

#### 内部状态

- ref
- reactive

```js
 defineProps 在使用时无需定义，因为它属于宏定义，在编译的时候会自动定义
```

如果在一个组件中，状态变得很多了，就要考虑两个问题
1、是不是组件是不是拆分的不够彻底，没有符合开放封闭原则
2、是否需要把状态提取出来称为 Composition API

### 利用 composition 传递状态

### 利用 provider、inject 传递状态

### 集中状态的库 vuex、pinia

#### vuex

- state 状态
- actions(支持异步)
- mutation 同步组件
- getters 获取数据
