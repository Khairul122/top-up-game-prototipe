import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQS = [
  {
    q: 'How long does a top-up take?',
    a: 'Most orders complete in under 5 seconds once payment is confirmed. A few games with manual ticketing can take up to 15 minutes during peak hours.',
  },
  {
    q: 'What happens if I enter the wrong User ID?',
    a: 'Contact support through My Orders as soon as possible, before the order status changes to processed. Once items are delivered to the wrong ID, they can\'t be reversed.',
  },
  {
    q: 'Which payment methods are supported?',
    a: 'QRIS, GoPay, DANA, and BCA Virtual Account today, with more banks and e-wallets on the way. Everything is processed automatically, 24/7.',
  },
  {
    q: 'Is it safe to share my User ID and Zone ID?',
    a: 'Yes. We only ever ask for the ID needed to deliver your items — never your password. We will never ask for your account credentials.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">Frequently asked</h2>
        <p className="mt-3 text-base text-ink-soft">Still curious about something? This should cover it.</p>
      </div>

      <div className="space-y-3">
        {FAQS.map((item, i) => {
          const open = openIndex === i
          return (
            <div key={item.q} className="overflow-hidden rounded-[1.5rem] border border-border-soft bg-surface shadow-sm">
              <button
                onClick={() => setOpenIndex(open ? -1 : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-sm font-bold text-ink sm:text-base">{item.q}</span>
                <motion.span
                  animate={{ rotate: open ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="ml-4 shrink-0 text-xl font-light text-primary"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm leading-relaxed text-ink-soft">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}
