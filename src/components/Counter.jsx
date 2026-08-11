import { useEffect, useRef, useState } from 'react'

export default function Counter({ target, decimals = 0, duration = 1600, suffix = '' }) {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)
  const [val, setVal] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          obs.unobserve(el)
        }
      },
      { threshold: 0.4 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    let raf
    const start = performance.now()
    function tick(now) {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(target * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [started, target, duration])

  const display = decimals > 0 ? val.toFixed(decimals) : Math.floor(val).toLocaleString('id-ID')

  return (
    <span ref={ref} className="stat-num">
      {display}
      {suffix}
    </span>
  )
}
