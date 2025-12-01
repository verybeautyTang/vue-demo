<template>
  <div>
    <div>我是生命周期函数{{ count }}</div>
    <button @click="count++">点我+1</button>
  </div>
</template>

<script lang="ts" setup>
import {
  onMounted,
  onBeforeMount,
  onUpdated,
  onActivated,
  onDeactivated,
  onBeforeUnmount,
  onUnmounted,
  onBeforeUpdate,
  onRenderTracked,
  onRenderTriggered,
  onErrorCaptured,
  ref,
} from 'vue'

const count = ref(0)
onMounted(() => {
  console.log('onMounted组件挂载完成')
})

onBeforeMount(() => {
  console.log('onBeforeMount组件即将挂载')
})

onBeforeUpdate(() => {
  console.log('onBeforeUpdate组件即将更新')
})

onUpdated(() => {
  console.log('onUpdated组件更新完成')
})

onActivated(() => {
  console.log('onActivated组件被激活')
})

onDeactivated(() => {
  console.log('onDeactivated组件被停用')
})
onBeforeUnmount(() => {
  console.log('onBeforeUnmount组件即将卸载')
})
onUnmounted(() => {
  console.log('onUnmounted组件卸载完成')
})

onRenderTracked((e) => {
  console.log('onRenderTracked', e)
})

onRenderTriggered((e) => {
  console.log('onRenderTriggered', e)
})

// 异常捕获，处理错误边界的逻辑
onErrorCaptured((err, instance, info) => {
  console.log('onErrorCaptured', err, instance, info)
  return false
})
// 上面进行了错误的捕获，所以这里是不会白屏处理的
// throw new Error('if you~')
</script>
