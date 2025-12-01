<template>
  <div>
    <h1>WatchPostEffect Demo</h1>
    <p>Current count: {{ count }}</p>
    <button @click="count++">Increment</button>
    <button @click="count--">Decrement</button>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeUpdate, onUpdated, ref, watchPostEffect } from 'vue'

const count = ref(0)

// 在onBeforeUpdate更新处理之后才去处理副作用
watchPostEffect(() => {
  console.log(`Count watchPostEffect from ${count.value}`)
})

onBeforeUpdate(() => {
  console.log(`Component about to update, current count: ${count.value}`)
})

onUpdated(() => {
  console.log(`Component updated, current count: ${count.value}`)
})
</script>
