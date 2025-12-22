# vue3 源码解析

## 工程化结构

### 编译时

编译就是： 将 浏览器无法识别的代码转换成浏览器可以识别的代码

```jsx
const Header = <div>Header</div>
// 被编译为
import { jsx as _jsx } from 'react/jsx-runtime'
const header = () =>
  /*#__PURE__*/ _jsx('div', {
    children: 'Hello',
  })
```

```vue
<script></script>
<template></template>
<style></style>
```

在 vue 中，用于编译的文件是 compiler-sfc(single file component)
解析 script 标签后返回对象如下：(src-> compileScript.ts)

```js
return {
  ...scriptSetup,
  bindings: ctx.bindingMetadata,
  imports: ctx.userImports,
  content,
  map,
  scriptAst: scriptAst?.body,
  scriptSetupAst: scriptSetupAst?.body,
  deps: ctx.deps ? [...ctx.deps] : undefined,
}
```

解析 style 标签后返回对象如下：(src-> compileStyle.ts)

```js
return {
  code: code || ``,
  map: outMap && outMap.toJSON(),
  errors,
  rawResult: result,
  dependencies,
}
```

解析 template 标签后返回对象如下：(src-> compileTemplate.ts)

```js
return { code, ast, preamble, source, errors, tips, map }
```

### 数据响应式

用来实现 Vue3 数据的响应式 （MVVM： model-> view -> view -> model）

- 响应式数据原理
  - proxy + reflect
  - objectDefineProperty 对比
- 依赖收集、更新触发
  - track（收集依赖）
    - Set
    - WeakMap
    - Map
  - trigger （依赖收集后触发更新）
- 副作用收集
  - 副作用收集的设计

### 运行时

dom 操作，指令的处理、内置组件

### 总结

由于工程化的设计和组件化的开发模式，所以的组件都是通过 xxx.vue 的形式进行编写，
这个在 vue 中间，叫做单文件组件，但是这类文件是自定义的组件，没办法被 js 引擎识别，
因此我们需要编译器对组件进行编译，编译完成后给 js 引擎执行
在编译过程中，主要会用到一下几个库

- 编译时
  - compiler-sfc (主要是对 vue 里面的 template、script、style 进行编译，转换成对应对象的格式)
  - compiler-dom
  - compiler-core（主要是对代码进行分词、编译、生成 ast、然后转换 ast，最后生成代码）
- 数据响应式
  - reactivity
- 运行时
  - runtime-core
  - runtime-dom
- diff
