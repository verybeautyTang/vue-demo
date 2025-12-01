<template>
  <div>
    <h1>Watch Demo</h1>
    <p>Current count: {{ count }}</p>
    <button @click="count++">Increment</button>
    <button @click="count--">Decrement</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue'

const count = ref(0)

watchEffect(() => {
  console.log(`Count changed from ${count.value}`)
})
</script>
