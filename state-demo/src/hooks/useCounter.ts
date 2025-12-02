import { ref } from 'vue'

export const useCounter = (init?: number) => {
  const count = ref(init ?? 0)

  const add = () => {
    count.value++
  }

  const update = (num: number) => {
    count.value = num
  }

  return {
    count,
    add,
    update,
  }
}
