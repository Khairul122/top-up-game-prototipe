import Reveal from './Reveal.jsx'

const ITEMS = [
  { icon: '⚡', accent: 'var(--lime)', title: 'Proses kilat', desc: 'Rata-rata pesanan masuk otomatis ke akun kamu dalam hitungan detik, bukan jam.' },
  { icon: '🔒', accent: 'var(--pink)', title: 'Aman terjamin', desc: 'Cukup masukin ID & Server, ga perlu share password akun ke siapa pun. Titik.' },
  { icon: '💸', accent: 'var(--blue)', title: 'Harga jujur', desc: 'Ga ada biaya tersembunyi. Harga yang kamu lihat, itu yang kamu bayar.' },
]

export default function WhySection() {
  return (
    <section className="section why">
      <div className="why-grid">
        {ITEMS.map((it) => (
          <Reveal as="div" key={it.title} className="why-card card-tilt">
            <div className="why-icon" style={{ '--accent': it.accent }}>{it.icon}</div>
            <h3>{it.title}</h3>
            <p>{it.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
