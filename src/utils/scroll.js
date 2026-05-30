export function scrollElementToCenter(element) {
  if (!element) return

  const rect = element.getBoundingClientRect()
  const scrollTop = window.scrollY + rect.top - window.innerHeight / 2 + rect.height / 2

  window.scrollTo({
    top: Math.max(0, scrollTop),
    behavior: 'smooth',
  })
}

export function scrollToId(id) {
  const el = document.getElementById(id)
  scrollElementToCenter(el)
}
