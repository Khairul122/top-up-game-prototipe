import Reveal from './Reveal.jsx'

const STEPS = [
  { num: '01', title: 'Pilih game', desc: 'Cari & klik game yang mau di-top up dari daftar di atas.' },
  { num: '02', title: 'Isi ID akun', desc: 'Masukkan User ID (dan Server ID kalau ada) dengan teliti.' },
  { num: '03', title: 'Pilih nominal & bayar', desc: 'Pilih jumlah item, pilih metode bayar favoritmu, konfirmasi.' },
  { num: '04', title: 'Gas main', desc: 'Item otomatis masuk ke akun. Balik ke game, gaskeun push rank.' },
]

export default function StepsSection() {
  return (
    <section className="section" id="cara">
      <Reveal as="div" className="section-head">
        <h2>Cara top up, gampang banget</h2>
        <p>Empat langkah, kelar sebelum kopimu dingin.</p>
      </Reveal>
      <div className="steps">
        {STEPS.map((s) => (
          <Reveal as="div" key={s.num} className="step">
            <span className="step-num">{s.num}</span>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
