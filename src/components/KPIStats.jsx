import { motion } from 'framer-motion'
import Counter from './Counter.jsx'

const STATS = [
  { target: 99.9, decimals: 1, suffix: '%', label: 'Happy players' },
  { target: 2.4, decimals: 1, suffix: 'M+', label: 'Top-ups delivered' },
  { target: 5, suffix: 's', label: 'Average processing time' },
  { target: 4.9, decimals: 1, suffix: '/5', label: 'Average rating' },
]

export default function KPIStats() {
  return (
    <section id="stats" className="border-y border-border-soft bg-surface">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-14 sm:grid-cols-4">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="text-center sm:text-left"
          >
            <Counter
              target={s.target}
              decimals={s.decimals}
              suffix={s.suffix}
              className="tabular block text-3xl font-extrabold text-ink sm:text-4xl"
            />
            <p className="mt-1 text-xs font-medium text-ink-soft sm:text-sm">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
