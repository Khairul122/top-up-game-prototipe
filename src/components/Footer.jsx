export default function Footer({ onViewHistory }) {
  return (
    <footer className="border-t border-border-soft bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-primary to-pink text-sm font-extrabold text-white">
            S
          </span>
          <span className="text-base font-extrabold text-ink">Synectra</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-ink-soft">
          <a href="#catalog" className="hover:text-ink">Catalog</a>
          <a href="#how-it-works" className="hover:text-ink">How it works</a>
          <button onClick={onViewHistory} className="hover:text-ink">My Orders</button>
        </div>

        <p className="text-xs text-ink-soft">© 2026 Synectra — UI prototype, not a real payment service.</p>
      </div>
    </footer>
  )
}
