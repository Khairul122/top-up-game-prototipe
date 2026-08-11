import { motion } from 'framer-motion'

export default function Hero({ onExploreCatalog }) {
  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-primary/70 blur-3xl mix-blend-multiply animate-blob" />
        <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-pink/60 blur-3xl mix-blend-multiply animate-blob-slow [animation-delay:2s]" />
        <div className="absolute left-1/3 bottom-0 h-72 w-72 rounded-full bg-lime/60 blur-3xl mix-blend-multiply animate-blob [animation-delay:4s]" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold text-ink-soft shadow-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-lime" />
          Trusted by 2.4M+ gamers across Indonesia
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[40px] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-6xl"
        >
          Topup &amp; Get a New
          <br />
          <span className="bg-gradient-to-r from-primary via-pink to-primary bg-clip-text text-transparent">
            Experience in Gaming
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg"
        >
          Instant, secure top-ups for the games you actually play. No hidden fees, no waiting around —
          just gear up and get back in.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onExploreCatalog}
            className="rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_-8px_rgba(91,71,224,0.55)]"
          >
            Explore Catalog
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="#how-it-works"
            className="rounded-full border border-border bg-surface px-7 py-3.5 text-sm font-bold text-ink"
          >
            How it works
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
