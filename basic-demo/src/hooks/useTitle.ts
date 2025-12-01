import { watch } from 'vue'

export const useTitle = (initialTitle: string) => {
  console.log('inithjasdfgjhadg', initialTitle)
  watch(
    [initialTitle],
    ([newTitle]) => {
      if (newTitle) document.title = newTitle || 'Vue Demo'
    },
    { immediate: true }
  )
}
