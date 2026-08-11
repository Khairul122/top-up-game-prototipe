import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar({ onGoHome, onViewHistory }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#catalog', label: 'Catalog' },
    { href: '#how-it-works', label: 'How it works' },
    { href: '#stats', label: 'Stats' },
  ]

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled ? 'bg-surface/90 backdrop-blur-md border-b border-border-soft' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button onClick={onGoHome} className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-primary to-pink text-sm font-extrabold text-white">
            S
          </span>
          <span className="text-lg font-extrabold tracking-tight text-ink">Synectra</span>
        </button>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-ink-soft md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={onViewHistory}
            className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
          >
            My Orders
          </button>
        </div>

        <button
          className="grid h-9 w-9 place-items-center rounded-full border border-border md:hidden"
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
        >
          <div className="flex flex-col gap-1">
            <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 5 : 0 }} className="h-0.5 w-4 bg-ink" />
            <motion.span animate={{ opacity: open ? 0 : 1 }} className="h-0.5 w-4 bg-ink" />
            <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -5 : 0 }} className="h-0.5 w-4 bg-ink" />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border-soft bg-surface md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-5 text-sm font-semibold text-ink-soft">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-ink">
                  {l.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setOpen(false)
                  onViewHistory()
                }}
                className="rounded-full bg-ink px-4 py-2.5 text-center text-white"
              >
                My Orders
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
