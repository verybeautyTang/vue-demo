<template>
  <div>
    nice to meet you my body

    <div>{{ store.state.counterStore.count }}</div>
    <div>{{ store.state.nameStore.name }}</div>
    <button @click="store.commit('updateName', Math.random())">ADD ME</button>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
const store = useStore()
console.log(store.state)
</script>
