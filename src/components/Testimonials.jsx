import { motion } from 'framer-motion'

const TESTIMONIALS = [
  {
    initial: 'R',
    accent: '#5B47E0',
    name: 'Rafi',
    role: 'Mythic push, Mobile Legends',
    quote: '"Bought diamonds at 2am and it still landed in under a minute. Genuinely the fastest top-up I\'ve used."',
  },
  {
    initial: 'D',
    accent: '#FF66B2',
    name: 'Dinda',
    role: 'Daily Valorant player',
    quote: '"Prices are honest and the checkout flow is so clean — no weird upsells, no hidden fees."',
  },
  {
    initial: 'B',
    accent: '#4EEB5D',
    name: 'Bagas',
    role: 'Chicken dinner hunter, PUBG',
    quote: '"UC landed while I was still in the lobby loading screen. Didn\'t even have to alt-tab."',
  },
  {
    initial: 'S',
    accent: '#5B47E0',
    name: 'Sinta',
    role: 'Genshin Impact enjoyer',
    quote: '"Support fixed my typo\'d UID in minutes, no drama. That\'s why I keep coming back."',
  },
]

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 max-w-lg">
        <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">Loved by the grind</h2>
        <p className="mt-3 text-base text-ink-soft">A few words from players who top up here every week.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="rounded-[1.75rem] border border-border-soft bg-surface p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="mb-4 text-amber-400">★★★★★</div>
            <p className="text-sm leading-relaxed text-ink">{t.quote}</p>
            <div className="mt-5 flex items-center gap-3 border-t border-border-soft pt-4">
              <span
                className="grid h-9 w-9 place-items-center rounded-full text-xs font-bold text-white"
                style={{ background: t.accent }}
              >
                {t.initial}
              </span>
              <div>
                <p className="text-sm font-bold text-ink">{t.name}</p>
                <p className="text-xs text-ink-soft">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
