import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToId } from '../utils/scroll'

export default function ScrollToHashCenter() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#', '')
    const timer = setTimeout(() => scrollToId(id), 100)
    return () => clearTimeout(timer)
  }, [pathname, hash])

  return null
}
