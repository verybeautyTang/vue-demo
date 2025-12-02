<script lang="ts" setup>
import { ref, provide } from 'vue'
import InjectDemo from './InjectDemo.vue'

const count = ref(0)

provide('count', count)
</script>

<template>
  <div>
    <InjectDemo />
    <button @click="count++">AddMe</button>
  </div>
</template>
