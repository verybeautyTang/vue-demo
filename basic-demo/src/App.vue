<script setup lang="ts">
import WatchSyncEffect from './components/WatchSyncEffect.vue'
import WatchPostEffect from './components/WatchPostEffect.vue'
import WatchEffectDemo from './components/WatchEffectDemo.vue'
import WatchDemo from './components/WatchDemo.vue'
</script>

<template>
  <div>
    <WatchSyncEffect />
    <WatchPostEffect />
    <WatchEffectDemo />
    <WatchDemo />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
