<template>
  <div>
    <div>{{ age }} ---- {{ count.value }}</div>
    <div>{{ msg }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

defineProps({
  msg: String,
})
const age = ref(1)
const count = reactive({
  value: 2,
})
</script>
