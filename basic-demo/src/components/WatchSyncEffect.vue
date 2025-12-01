<template>
  <div>
    <h1>Watch Demo</h1>
    <p>Current count: {{ count }}</p>
    <button @click="count++">Increment</button>
    <button @click="count--">Decrement</button>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeUpdate, onUpdated, ref, watchSyncEffect } from 'vue'

const count = ref(0)

onBeforeUpdate(() => {
  console.log(`Component about to update, current count: ${count.value}`)
})

onUpdated(() => {
  console.log(`Component updated, current count: ${count.value}`)
})
// 同步执行副作用，执行时机的问题，在onBeforeUpdate之前执行
watchSyncEffect(() => {
  console.log(`Count changed from ${count.value}`)
})
</script>
