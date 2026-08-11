import Reveal from './Reveal.jsx'
import Marquee from './Marquee.jsx'
import { PAYMENT_METHODS } from '../data/paymentMethods.js'

export default function PaymentMethods() {
  return (
    <section className="section" id="pembayaran">
      <Reveal as="div" className="section-head">
        <h2>Semua metode pembayaran kamu <span className="highlight">ada di sini</span></h2>
        <p>Dari e-wallet, QRIS, virtual account, sampai bayar tunai di minimarket. Tinggal pilih yang paling gampang.</p>
      </Reveal>

      <div className="payment-grid">
        {PAYMENT_METHODS.map((m) => (
          <Reveal as="div" key={m.id} className="payment-chip">
            <div className="payment-icon" style={{ background: m.color }}>{m.icon}</div>
            <div>
              <span className="p-name">{m.name}</span>
              <span className="p-desc">{m.desc}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function PaymentMarquee() {
  const marqueeItems = PAYMENT_METHODS.map((m) => `${m.name} · ${m.desc}`)
  return <Marquee items={marqueeItems} tone="light" speed={22} compact />
}
