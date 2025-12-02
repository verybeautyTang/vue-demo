<script setup lang="ts">
import { ref } from 'vue'
import Basic from './components/Basic.vue'
import Hooks from './components/Hooks.vue'
import ProviderDemo from './components/ProviderDemo.vue'
import VuexDemo from './components/VuexDemo.vue'
import PiniaDemo from './components/PiniaDemo.vue'
</script>

<template>
  <div>
    <PiniaDemo />
    <VuexDemo />
    <ProviderDemo />
    <Basic msg="nice to meet you" />
    <Hooks />
  </div>
</template>

<style scoped></style>
