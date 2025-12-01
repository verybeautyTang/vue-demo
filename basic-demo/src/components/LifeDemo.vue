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
</script>
