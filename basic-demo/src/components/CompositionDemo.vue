<template>
  <!-- UI 和状态完全解耦，视图完全不用关心状态的细节，自己管自己的 -->
  <div>
    <h2>Composition API 计数器示例</h2>
    <p>当前计数：{{ count }}</p>
    <button @click="decrement">减少</button>
    <button @click="increment">增加</button>
  </div>
</template>

<script lang="ts" setup>
import { useCounter } from '../hooks/useCounter'
const { count, increment, decrement } = useCounter(1)
</script>
