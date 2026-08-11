import { motion } from 'framer-motion'

export default function CTABanner({ onExploreCatalog }) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-[2rem] bg-ink px-8 py-14 text-center sm:px-16"
      >
        <div className="pointer-events-none absolute inset-0 -z-0">
          <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-primary/50 blur-3xl mix-blend-screen animate-blob" />
          <div className="absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-pink/40 blur-3xl mix-blend-screen animate-blob-slow" />
        </div>
        <div className="relative">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Ready to level up?</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-white/70 sm:text-base">
            Join 2.4M+ players who trust Synectra for instant, secure top-ups.
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onExploreCatalog}
            className="mt-8 rounded-full bg-lime px-8 py-3.5 text-sm font-bold text-ink"
          >
            Explore the catalog
          </motion.button>
        </div>
      </motion.div>
    </section>
  )
}
