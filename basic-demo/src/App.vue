<script setup lang="ts">
import CompositionDemo from './components/CompositionDemo.vue'
import SyncComponent from './components/SyncComponent.vue'
import WatchSyncEffect from './components/WatchSyncEffect.vue'
import WatchPostEffect from './components/WatchPostEffect.vue'
import WatchEffectDemo from './components/WatchEffectDemo.vue'
import WatchDemo from './components/WatchDemo.vue'
import UtilDemo from './components/UtilDemo.vue'
import LifeDemo from './components/LifeDemo.vue'
import TelePortDemo from './components/TelePortDemo.vue'
import coustomDirective from './components/CoustomDirective.vue'
import { ref } from 'vue'

const isShow = ref(true)
</script>

<template>
  <div>
    <CompositionDemo />
    <TelePortDemo />
    <coustomDirective />
    <SyncComponent v-if="Math.random() > 0.5" />
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
