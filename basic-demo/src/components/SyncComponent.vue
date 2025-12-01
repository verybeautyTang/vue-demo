<template>
  <Suspense>
    <template #default>
      <!-- 默认的东西放在这里面 -->
      <AsyncComp />
    </template>
    <template #fallback>
      <!-- 没有加载完就走 fallback 逻辑 -->
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<script lang="ts" setup>
// 异步引入
// 动态导入的方式 import('./xxx.vue')
// const AsyncComp = defineAsyncComponent(() => import('./AsyncComp.vue'))

import { defineAsyncComponent } from 'vue'

const AsyncComp = defineAsyncComponent(() => import('./AsyncChild.vue'))
</script>

<style></style>
