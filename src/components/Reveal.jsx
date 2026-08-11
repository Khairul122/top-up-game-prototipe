import { useEffect, useRef, useState } from 'react'

export default function Reveal({ children, className = '', as: Tag = 'div', ...props }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`reveal ${inView ? 'in' : ''} ${className}`} {...props}>
      {children}
    </Tag>
  )
}
