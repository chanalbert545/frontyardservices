import { useRef } from 'react'
import { useInView } from '../hooks/useInView'

export default function Stagger({ children, className = '', step = 90, as: Component = 'div' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.08 })

  return (
    <Component
      ref={ref}
      className={`motion-stagger ${inView ? 'motion-stagger--visible' : ''} ${className}`.trim()}
      style={{ '--stagger-step': `${step}ms` }}
    >
      {children}
    </Component>
  )
}
