<script setup lang="ts">
import { ref } from 'vue'

const isShow = ref(true)
</script>

<template>
  <div>
    <router-view></router-view>
    你好，我有一个秘密要告诉你
  </div>
</template>

<style scoped></style>
