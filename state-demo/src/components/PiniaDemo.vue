<template>
  <div>
    nice to meet you my body

    <div>{{ store.count }}</div>
    <!-- <div>{{ store.state.nameStore.name }}</div> -->
    <button @click="store.increment">ADD ME</button>
    <button @click="store.decrement">CLICK ME</button>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '../store-pinia/users'
const store = useUserStore()
console.log(store)
</script>
