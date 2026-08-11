import { useState } from 'react'
import Reveal from './Reveal.jsx'

const FAQS = [
  { q: 'Berapa lama proses top up-nya?', a: 'Rata-rata di bawah 5 detik untuk pembayaran yang sudah terkonfirmasi. Beberapa game dengan sistem tiket manual bisa sampai 15 menit di jam sibuk.' },
  { q: 'Kalau salah masukin ID gimana?', a: 'Buruan hubungi CS lewat halaman Bantuan sebelum status pesanan berubah jadi diproses. Kalau sudah terkirim ke ID yang salah, item ga bisa ditarik lagi.' },
  { q: 'Metode pembayaran apa aja yang didukung?', a: 'GoPay, DANA, OVO, ShopeePay, QRIS, dan Virtual Account dari bank-bank besar. Semua diproses otomatis 24 jam.' },
  { q: 'Apakah aman kasih ID & Server saya?', a: 'Aman. Kami cuma butuh ID dan Server buat ngirim item, bukan password. Kami ga pernah minta kata sandi akun game kamu.' },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  return (
    <section className="section" id="faq">
      <Reveal as="div" className="section-head">
        <h2>Pertanyaan yang sering ditanya</h2>
      </Reveal>
      <Reveal as="div" className="faq-list">
        {FAQS.map((f, i) => (
          <div className={`faq-item ${openIndex === i ? 'open' : ''}`} key={f.q}>
            <button className="faq-q" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
              {f.q}<span>+</span>
            </button>
            <div className="faq-a" style={{ maxHeight: openIndex === i ? '260px' : '0px' }}>
              <p>{f.a}</p>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
