import { useEffect, useState } from 'react'

export function useInView(ref, { threshold = 0.12, rootMargin = '0px 0px -6% 0px', triggerOnce = true } = {}) {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (triggerOnce) observer.disconnect()
        } else if (!triggerOnce) {
          setInView(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, threshold, rootMargin, triggerOnce])

  return inView
}
