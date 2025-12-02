<script setup lang="ts">
import { ref } from 'vue'
import Basic from './components/Basic.vue'
import Hooks from './components/Hooks.vue'
import ProviderDemo from './components/ProviderDemo.vue'
</script>

<template>
  <div>
    <ProviderDemo />
    <Basic msg="nice to meet you" />
    <Hooks />
  </div>
</template>

<style scoped></style>
