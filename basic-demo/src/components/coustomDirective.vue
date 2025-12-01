<template>
  <div>
    <input v-focus placeholder="自动获取焦点的输入框" />
    <div class="draggable" v-draggable></div>
    <div class="dropable" v-droppable></div>
  </div>
</template>
<script lang="ts" setup>
import { vFocus } from '../directives/vFocus'
import { vDraggable, vDroppable } from '../directives/vDraggable'
</script>

<style>
.draggable {
  width: 100px;
  height: 100px;
  background-color: #42b983;
  margin-top: 20px;
  cursor: move;
}
.dropable {
  width: 200px;
  height: 200px;
  background-color: #35495e;
  margin-top: 20px;
}
</style>
