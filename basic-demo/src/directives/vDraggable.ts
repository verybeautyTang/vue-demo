const vDraggable = {
  mounted(el: HTMLElement) {
    ;(el.draggable = true),
      (el.id = el.id || `draggable-${Math.random().toString(36).substr(2, 9)}`)
    el.addEventListener('dragstart', (e: DragEvent) => {
      e.dataTransfer?.setData('text/plain', el.id)
    })
  },
}

const vDroppable = {
  mounted(el: HTMLElement) {
    el.addEventListener('dragover', (e: DragEvent) => {
      e.preventDefault()
    })
    el.addEventListener('drop', (e: DragEvent) => {
      e.preventDefault()
      const id = e.dataTransfer?.getData('text/plain')
      const draggableElement = document.getElementById(id!)
      if (draggableElement) {
        el.appendChild(draggableElement)
      }
    })
  },
}

export { vDraggable, vDroppable }
