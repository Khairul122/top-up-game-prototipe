import { useEffect, useRef } from 'react'

export function useMagnetic(strength = 16) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    function onMove(e) {
      const r = el.getBoundingClientRect()
      const x = e.clientX - r.left - r.width / 2
      const y = e.clientY - r.top - r.height / 2
      el.style.transform = `translate(${(x / r.width) * strength}px, ${(y / r.height) * strength}px)`
    }
    function onLeave() {
      el.style.transform = ''
    }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [strength])
  return ref
}
