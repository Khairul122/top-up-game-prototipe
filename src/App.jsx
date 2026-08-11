import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { TransactionsProvider } from './TransactionsContext.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import FeatureHighlights from './components/FeatureHighlights.jsx'
import GameCatalog from './components/GameCatalog.jsx'
import KPIStats from './components/KPIStats.jsx'
import Footer from './components/Footer.jsx'
import TransactionView from './components/TransactionView.jsx'
import HistoryPage from './components/HistoryPage.jsx'

function LandingView({ onSelectGame, onViewHistory }) {
  return (
    <>
      <Navbar onGoHome={() => {}} onViewHistory={onViewHistory} />
      <main>
        <Hero onExploreCatalog={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })} />
        <GameCatalog onSelectGame={onSelectGame} />
        <FeatureHighlights />
        <KPIStats />
      </main>
      <Footer onViewHistory={onViewHistory} />
    </>
  )
}

function AppInner() {
  const [currentView, setCurrentView] = useState('landing')
  const [selectedGame, setSelectedGame] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentView])

  function goHome() {
    setSelectedGame(null)
    setCurrentView('landing')
  }

  function goHistory() {
    setCurrentView('history')
  }

  function selectGame(game) {
    setSelectedGame(game)
    setCurrentView('transaction')
  }

  return (
    <div className="min-h-screen bg-bg">
      <AnimatePresence mode="wait">
        {currentView === 'landing' && (
          <motion.div key="landing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
            <LandingView onSelectGame={selectGame} onViewHistory={goHistory} />
          </motion.div>
        )}
        {currentView === 'transaction' && selectedGame && (
          <motion.div key="transaction" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
            <TransactionView game={selectedGame} onBack={goHome} onViewHistory={goHistory} />
          </motion.div>
        )}
        {currentView === 'history' && (
          <motion.div key="history" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
            <HistoryPage onBack={goHome} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function App() {
  return (
    <TransactionsProvider>
      <AppInner />
    </TransactionsProvider>
  )
}
