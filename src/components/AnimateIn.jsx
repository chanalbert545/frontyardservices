import { useRef } from 'react'
import { useInView } from '../hooks/useInView'

export default function AnimateIn({
  children,
  className = '',
  delay = 0,
  as: Component = 'div',
  variant = 'up',
}) {
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <Component
      ref={ref}
      className={`motion motion--${variant} ${inView ? 'motion--visible' : ''} ${className}`.trim()}
      style={{ '--motion-delay': `${delay}ms` }}
    >
      {children}
    </Component>
  )
}
