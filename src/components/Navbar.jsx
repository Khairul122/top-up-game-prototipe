import { useEffect, useState } from 'react'

export default function Navbar({ onViewHistory }) {
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

  function goHistory() {
    setOpen(false)
    onViewHistory()
  }

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#top" className="brand">
          <span className="brand-mark">G.</span>
          <span className="brand-name">
            GACOR<em>.GG</em>
          </span>
        </a>
        <nav className="nav-links">
          <a href="#games">Katalog</a>
          <a href="#cara">Cara Top Up</a>
          <a href="#pembayaran">Pembayaran</a>
          <a href="#promo">Promo</a>
          <a href="#faq">Bantuan</a>
        </nav>
        <div className="nav-actions">
          <button className="btn btn-ghost" onClick={goHistory}>Riwayat Transaksi</button>
          <button className="hamburger" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
            <span style={open ? { transform: 'translateY(6.5px) rotate(45deg)' } : undefined}></span>
            <span style={open ? { opacity: 0 } : undefined}></span>
            <span style={open ? { transform: 'translateY(-6.5px) rotate(-45deg)' } : undefined}></span>
          </button>
        </div>
      </div>
      <div className={`nav-mobile ${open ? 'open' : ''}`}>
        <a href="#games" onClick={() => setOpen(false)}>Katalog</a>
        <a href="#cara" onClick={() => setOpen(false)}>Cara Top Up</a>
        <a href="#pembayaran" onClick={() => setOpen(false)}>Pembayaran</a>
        <a href="#promo" onClick={() => setOpen(false)}>Promo</a>
        <a href="#faq" onClick={() => setOpen(false)}>Bantuan</a>
        <button className="btn btn-primary" onClick={goHistory}>Riwayat Transaksi</button>
      </div>
    </header>
  )
}
