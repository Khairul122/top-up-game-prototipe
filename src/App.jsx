import { useEffect, useRef, useState } from 'react'
import { ToastProvider } from './ToastContext.jsx'
import { TransactionsProvider } from './TransactionsContext.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import GamesSection from './components/GamesSection.jsx'
import WhySection from './components/WhySection.jsx'
import StepsSection from './components/StepsSection.jsx'
import PaymentMethods, { PaymentMarquee } from './components/PaymentMethods.jsx'
import PromoBand from './components/PromoBand.jsx'
import Testimonials from './components/Testimonials.jsx'
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer.jsx'
import OrderModal from './components/OrderModal.jsx'
import HistoryPage from './components/HistoryPage.jsx'
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
  const [page, setPage] = useState('home')

  useEffect(() => {
    document.body.style.overflow = selectedGame ? 'hidden' : ''
  }, [selectedGame])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [page])

  const marqueeItems = GAMES.map((g) => g.name.toUpperCase())

  function goHistory() {
    setSelectedGame(null)
    setPage('history')
  }

  function goHome() {
    setPage('home')
  }

  if (page === 'history') {
    return (
      <>
        <div className="grain" />
        <HistoryPage onBack={goHome} />
        <Footer onViewHistory={goHistory} />
      </>
    )
  }

  return (
    <>
      <div className="grain" />
      <CursorGlow />
      <Navbar onViewHistory={goHistory} />
      <main id="top">
        <Hero />
        <Marquee items={marqueeItems} />
        <GamesSection onSelect={setSelectedGame} />
        <WhySection />
        <StepsSection />
        <PaymentMethods />
        <PaymentMarquee />
        <PromoBand />
        <Testimonials />
        <FAQ />
      </main>
      <Footer onViewHistory={goHistory} />
      {selectedGame && (
        <OrderModal game={selectedGame} onClose={() => setSelectedGame(null)} onViewHistory={goHistory} />
      )}
    </>
  )
}

export default function App() {
  return (
    <ToastProvider>
      <TransactionsProvider>
        <AppInner />
      </TransactionsProvider>
    </ToastProvider>
  )
}
