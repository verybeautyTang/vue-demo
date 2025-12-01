<script setup lang="ts">
import WatchSyncEffect from './components/WatchSyncEffect.vue'
import WatchPostEffect from './components/WatchPostEffect.vue'
import WatchEffectDemo from './components/WatchEffectDemo.vue'
import WatchDemo from './components/WatchDemo.vue'
import UtilDemo from './components/UtilDemo.vue'
import LifeDemo from './components/LifeDemo.vue'
import { ref } from 'vue'

const isShow = ref(true)
</script>

<template>
  <div>
    <keep-alive>
      <LifeDemo v-if="isShow" />
    </keep-alive>

    <button @click="isShow = !isShow">toogle</button>
    <UtilDemo />
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
