document.addEventListener('DOMContentLoaded', () => {
  const labels = document.getElementsByTagName('label')
  Array.from(labels).forEach((label) => {
    label.addEventListener('click', () => {
      const input = label.nextElementSibling

      if (input && input.tagName === 'INPUT') {
        input.focus()
      }
    })
  })
})
