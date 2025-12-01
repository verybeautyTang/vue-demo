<template>
  <div>
    <input v-focus placeholder="自动获取焦点的输入框" />
    <div class="draggable" v-draggable></div>
  </div>
</template>
<script lang="ts" setup>
import { vFocus } from '../directives/vFocus'
import { vDraggable } from '../directives/vDraggable'
</script>

<style>
.draggable {
  width: 100px;
  height: 100px;
  background-color: #42b983;
  margin-top: 20px;
  cursor: move;
}
</style>
