import { useEffect, useRef, useState } from 'react'
import { ToastProvider } from './ToastContext.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import GamesSection from './components/GamesSection.jsx'
import WhySection from './components/WhySection.jsx'
import StepsSection from './components/StepsSection.jsx'
import PromoBand from './components/PromoBand.jsx'
import Testimonials from './components/Testimonials.jsx'
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer.jsx'
import OrderModal from './components/OrderModal.jsx'
import { GAMES } from './data/games.js'

function CursorGlow() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(pointer: coarse)').matches) return
    function onMove(e) {
      el.style.left = e.clientX + 'px'
      el.style.top = e.clientY + 'px'
      el.style.opacity = 1
    }
    function onLeave() {
      el.style.opacity = 0
    }
    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [])
  return <div ref={ref} className="cursor-glow" />
}

function AppInner() {
  const [selectedGame, setSelectedGame] = useState(null)

  useEffect(() => {
    document.body.style.overflow = selectedGame ? 'hidden' : ''
  }, [selectedGame])

  const marqueeItems = GAMES.map((g) => g.name.toUpperCase())

  return (
    <>
      <div className="grain" />
      <CursorGlow />
      <Navbar />
      <main id="top">
        <Hero />
        <Marquee items={marqueeItems} />
        <GamesSection onSelect={setSelectedGame} />
        <WhySection />
        <StepsSection />
        <PromoBand />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      {selectedGame && <OrderModal game={selectedGame} onClose={() => setSelectedGame(null)} />}
    </>
  )
}

export default function App() {
  return (
    <ToastProvider>
      <AppInner />
    </ToastProvider>
  )
}
