const COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'Catalog', href: '#catalog' },
      { label: 'How it works', href: '#how-it-works' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help center', href: '#faq' },
      { label: 'Contact us', href: '#' },
      { label: 'Status', href: '#' },
    ],
  },
]

export default function Footer({ onViewHistory }) {
  return (
    <footer className="border-t border-border-soft bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-primary to-pink text-sm font-extrabold text-white">
                S
              </span>
              <span className="text-base font-extrabold text-ink">Synectra</span>
            </div>
            <p className="mt-4 max-w-[200px] text-sm text-ink-soft">
              Instant, secure top-ups for the games you actually play.
            </p>
            <button
              onClick={onViewHistory}
              className="mt-5 rounded-full border border-border px-4 py-2 text-xs font-bold text-ink transition-colors hover:border-primary hover:text-primary"
            >
              My Orders
            </button>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold uppercase tracking-wide text-ink-soft">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm font-medium text-ink transition-colors hover:text-primary">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border-soft pt-8 sm:flex-row">
          <p className="text-xs text-ink-soft">© 2026 Synectra — UI prototype, not a real payment service.</p>
          <div className="flex flex-wrap items-center gap-2">
            {['QRIS', 'GoPay', 'DANA', 'BCA VA'].map((p) => (
              <span key={p} className="rounded-full bg-bg px-3 py-1 text-[11px] font-semibold text-ink-soft">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
