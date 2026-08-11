import { useEffect, useState } from 'react'
import Reveal from './Reveal.jsx'
import Counter from './Counter.jsx'
import RobotMascot from './RobotMascot.jsx'
import { useMagnetic } from '../hooks.js'

const WORDS = ['Mobile Legends', 'Free Fire', 'Roblox', 'PUBG Mobile', 'Genshin Impact']

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [fade, setFade] = useState(true)
  const ctaRef = useMagnetic(14)
  const ctaRef2 = useMagnetic(14)

  useEffect(() => {
    const id = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % WORDS.length)
        setFade(true)
      }, 260)
    }, 2200)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="eyebrow reveal in">
            <span className="dot-live"></span> 24.813 top up berhasil hari ini
          </div>
          <h1 className="reveal in">
            Top up{' '}
            <span className="rotator" style={{ opacity: fade ? 1 : 0, transition: 'opacity .26s' }}>
              {WORDS[wordIndex]}
            </span>
            <br />
            ngebut, gas terus.
          </h1>
          <p className="hero-sub reveal in">
            Isi ulang diamond, UC, Robux, sampai voucher game yang lagi rame dimainin.
            Tanpa akun ribet, tanpa nunggu lama. Masuk ID, pilih nominal, bayar, kelar.
          </p>
          <div className="hero-cta reveal in">
            <a ref={ctaRef} href="#games" className="btn btn-primary btn-lg">
              Mulai Top Up<span className="btn-arrow">→</span>
            </a>
            <a ref={ctaRef2} href="#promo" className="btn btn-outline btn-lg">
              Lihat Promo Hari Ini
            </a>
          </div>
          <div className="hero-stats reveal in">
            <div className="stat">
              <Counter target={2400000} />
              <span className="stat-label">Transaksi sukses</span>
            </div>
            <div className="stat">
              <Counter target={4.9} decimals={1} />
              <span className="stat-label">Rating pengguna</span>
            </div>
            <div className="stat">
              <Counter target={5} suffix=" dtk" />
              <span className="stat-label">Rata-rata proses</span>
            </div>
          </div>
        </div>

        <Reveal className="hero-visual">
          <div className="sticker-board robot-board">
            <RobotMascot />
            <div className="sticker sticker-1 float-a">🔥 Trending</div>
            <div className="sticker sticker-2 float-b">Proses Instan ⚡</div>
            <div className="sticker sticker-3 float-c">⭐ 4.9/5</div>
            <div className="sticker sticker-4 float-a">Harga Jujur</div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
