import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue'

//  `defineStore()` 的返回值的命名是自由的
// 但最好含有 store 的名字，且以 `use` 开头，以 `Store` 结尾。
// (比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。

export const useCount = (count: number) => {
  return count
}

export const useIncrementCount = (count: number) => {
  return {
    increment: () => {
      console.log(count)
      count++
    },
  }
}

export const useDecrementCount = (count: number) => {
  return {
    decrement: () => {
      count--
    },
  }
}

export const useUserStore = defineStore('users', () => {
  // state
  const usersState = reactive({
    name: 'jasmine',
    age: 18,
    tall: 160,
    count: 0,
  })
  const count = ref(0)
  // getter
  const double = computed(() => usersState.tall * 2)

  // action
  const setName = (name: string) => {
    usersState.name = name
  }

  const setTall = (tall: number) => {
    usersState.tall = tall
  }

  const setAge = (age: number) => {
    usersState.age = age
  }
  const increment = useIncrementCount(count.value)

  const decrement = () => {
    count.value--
  }
  return {
    usersState,
    double,
    setName,
    count,
    setTall,
    setAge,
    increment,
    decrement,
  }
})
