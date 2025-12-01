# vue-demo

vue learn

### reactive

属于 ref 的基础 api，区别在于 ref 的数值会在模板中自动解构，不用.value

### computed

计算数据，一般用在已有状态派生出新的场景

### 副作用

我们要关注，副作用的执行时机，我们要跟` onBeforeUpdate`进行对比

- watchEffect
- watchPostEffect
- watchSyncEffect

以上三种方案，都可以通过 watch 去实现
通过修改 watch 的 option 去实现
deep?: boolean;
once?: boolean;
immediate?: boolean
flush?: 'pre' | 'sync' | 'post'

### 工具函数

#### isRef

判断一个数据是不是 ref 的响应式数据

#### isReactive

判断一个数据不是 reactive 的响应式数据

#### isProxy

判断一个数据是不是代理数据

#### unref

#### toRef

#### toRefs

#### toValue

####

一般异步组件都包裹在 suspense 里面去写
