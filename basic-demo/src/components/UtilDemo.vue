<template>
  <div>
    <h1>Util Demo</h1>
    <p>Current count: {{ count }}</p>
    <p>Current count: {{ age.value }}</p>
    <!-- <button @click="increment">{{ age.value }}</button> -->
    <!-- <button @click="decrement">Decrement</button> -->
  </div>
</template>
<script lang="ts" setup>
import { isReactive, isRef, reactive, ref } from 'vue'

const count = ref(0)
const age = reactive({ value: 20 })

console.log(isRef(count)) // true
console.log(isRef(age)) // false
console.log(isRef(age.value)) // false

console.log(isReactive(age)) // true
console.log(isReactive(count)) // false
console.log(isReactive(count.value)) // false
</script>
