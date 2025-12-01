<template>
  <div>
    <h1>Watch Demo</h1>
    <p>Current count: {{ count }}</p>
    <button @click="count++">Increment</button>
    <button @click="count--">Decrement</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

const count = ref(0)

watch(
  count,
  (newValue, oldValue) => {
    console.log(`Count changed from ${oldValue} to ${newValue}`)
  },
  { immediate: true, flush: 'post' }
)
</script>
