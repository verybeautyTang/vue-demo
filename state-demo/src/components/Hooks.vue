<template>
  <div>
    <h2>{{ count }}</h2>
    <button @click="add">AddMe</button>
    <button @click="update(11)">UpdateMe</button>
  </div>
</template>

<script lang="ts" setup>
import { useCounter } from '../hooks/useCounter'

const { count, add, update } = useCounter()
</script>
