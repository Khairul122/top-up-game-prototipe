import { motion } from 'framer-motion'

const FEATURES = [
  {
    step: '01',
    title: 'Choose Game',
    desc: 'Pick from our curated catalog of the games everyone is actually playing right now.',
    accent: 'bg-primary',
    icon: '🎮',
  },
  {
    step: '02',
    title: 'Fill Up',
    desc: 'Enter your User ID and pick a nominal — from a quick top-up to a full restock.',
    accent: 'bg-pink',
    icon: '⚡',
  },
  {
    step: '03',
    title: 'Checkout',
    desc: 'Pay with QRIS, e-wallet, or virtual account. Items land in your account instantly.',
    accent: 'bg-lime',
    icon: '✓',
  },
]

export default function FeatureHighlights() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 max-w-lg">
        <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">Three steps, that's it</h2>
        <p className="mt-3 text-base text-ink-soft">No account creation, no waiting in a queue — from browsing to a full wallet in under a minute.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.step}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="rounded-[2rem] border border-border-soft bg-surface p-8 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className={`mb-6 grid h-12 w-12 place-items-center rounded-2xl ${f.accent} text-xl`}>
              {f.icon}
            </div>
            <span className="text-xs font-bold tracking-widest text-ink-soft">STEP {f.step}</span>
            <h3 className="mt-2 text-xl font-bold text-ink">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
