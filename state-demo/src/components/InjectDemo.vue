<script lang="ts" setup>
import { inject } from 'vue'

const count = inject('count')
</script>

<template>
  <div>{{ count }}</div>
</template>
