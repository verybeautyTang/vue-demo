<template>
  <!-- 这种场景一般都是用于 modal 组件中 -->
  <div>
    <Teleport to="body">
      <div v-if="isShow" tabindex="-1" v-focus class="modal">Hello 我是使用了 teleport的情况</div>
    </Teleport>
    <button @click="clickHandle">我是一个按钮</button>
  </div>
</template>

<script lang="ts" setup>
import { vFocus } from '../directives/vFocus'
import { ref } from 'vue'
const isShow = ref(false)
const clickHandle = () => {
  isShow.value = !isShow.value
}
</script>

<style scoped>
.modal {
  width: 100%;
  height: 100%;
  background-color: rgba(173, 216, 230, 0.133);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #000;
}
</style>
