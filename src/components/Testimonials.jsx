import Reveal from './Reveal.jsx'

const TESTIS = [
  { accent: 'var(--lime)', initial: 'R', name: 'Rafi, Push Rank Mythic', text: '"Beli diamond ML jam 2 pagi masih masuk kok, ga sampe semenit. Gila cepetnya."' },
  { accent: 'var(--pink)', initial: 'D', name: 'Dinda, Mabar tiap malam', text: '"Harganya paling masuk akal dibanding tempat lain yang udah aku coba. Fix langganan sini."' },
  { accent: 'var(--blue)', initial: 'B', name: 'Bagas, Chicken Dinner Hunter', text: '"UC PUBG-ku masuk pas lagi loading lobby. Ga perlu keluar game sama sekali."' },
  { accent: 'var(--purple)', initial: 'S', name: 'Sinta, Genshin Enjoyer', text: '"CS-nya bales cepet pas aku salah masukin server ID. Langsung dibantu, ga pake drama."' },
]

export default function Testimonials() {
  return (
    <section className="section">
      <Reveal as="div" className="section-head">
        <h2>Kata mereka yang udah gacor</h2>
        <p>Ribuan gamer udah ngerasain, sekarang giliran kamu.</p>
      </Reveal>
      <Reveal as="div" className="testi-track">
        {TESTIS.map((t) => (
          <div className="testi-card" key={t.name}>
            <div className="testi-stars">★★★★★</div>
            <p>{t.text}</p>
            <div className="testi-user">
              <span className="testi-avatar" style={{ '--accent': t.accent }}>{t.initial}</span>
              {t.name}
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
