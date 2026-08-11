import { useEffect, useState } from 'react'
import Reveal from './Reveal.jsx'
import { useMagnetic } from '../hooks.js'
import { useToast } from '../ToastContext.jsx'

function getRemaining() {
  const now = new Date()
  const end = new Date(now)
  end.setHours(23, 59, 59, 999)
  const diff = Math.max(0, end - now)
  const h = Math.floor(diff / 3600000)
  const m = Math.floor((diff % 3600000) / 60000)
  const s = Math.floor((diff % 60000) / 1000)
  return { h, m, s }
}

function pad(n) {
  return n.toString().padStart(2, '0')
}

export default function PromoBand() {
  const [remaining, setRemaining] = useState(getRemaining())
  const btnRef = useMagnetic(10)
  const toast = useToast()

  useEffect(() => {
    const id = setInterval(() => setRemaining(getRemaining()), 1000)
    return () => clearInterval(id)
  }, [])

  function copyCode() {
    navigator.clipboard?.writeText('GACOR10').catch(() => {})
    toast('Kode GACOR10 disalin! Pakai pas checkout ya ✂️')
  }

  return (
    <section className="promo-band" id="promo">
      <Reveal as="div" className="promo-inner">
        <div className="promo-text">
          <span className="promo-tag">PROMO HARI INI</span>
          <h2>Cashback 10% buat top up pertama kamu</h2>
          <p>Pakai kode <strong>GACOR10</strong> pas checkout. Berlaku buat semua game, minimal transaksi Rp 20.000.</p>
          <button ref={btnRef} className="btn btn-primary" onClick={copyCode}>Salin Kode GACOR10</button>
        </div>
        <div className="promo-countdown">
          <span>Berakhir dalam</span>
          <div className="countdown">
            <div className="cd-box"><span>{pad(remaining.h)}</span><small>Jam</small></div>
            <div className="cd-box"><span>{pad(remaining.m)}</span><small>Menit</small></div>
            <div className="cd-box"><span>{pad(remaining.s)}</span><small>Detik</small></div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
