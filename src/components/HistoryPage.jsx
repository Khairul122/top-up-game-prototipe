import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { useTransactions } from '../TransactionsContext.jsx'

const STATUS_META = {
  success: { label: 'Success', cls: 'bg-lime/15 text-ink' },
  pending: { label: 'Pending', cls: 'bg-yellow-100 text-yellow-800' },
  failed: { label: 'Failed', cls: 'bg-pink/15 text-pink' },
}

const STATUS_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'success', label: 'Success' },
  { id: 'pending', label: 'Pending' },
  { id: 'failed', label: 'Failed' },
]

function formatIDR(n) {
  return 'Rp' + Math.round(n).toLocaleString('id-ID')
}

function formatDate(iso) {
  const d = new Date(iso)
  const datePart = d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
  const timePart = d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
  return `${datePart}, ${timePart}`
}

export default function HistoryPage({ onBack }) {
  const { transactions } = useTransactions()
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('all')

  const filtered = useMemo(() => {
    return transactions.filter((tx) => {
      const matchStatus = status === 'all' || tx.status === status
      const q = query.trim().toLowerCase()
      const matchQuery = !q || tx.gameName.toLowerCase().includes(q) || tx.id.toLowerCase().includes(q)
      return matchStatus && matchQuery
    })
  }, [transactions, query, status])

  const totalTrx = transactions.length
  const successCount = transactions.filter((tx) => tx.status === 'success').length
  const totalSpent = transactions.filter((tx) => tx.status === 'success').reduce((sum, tx) => sum + tx.amount, 0)

  return (
    <div className="min-h-screen bg-bg">
      <header className="sticky top-0 z-30 border-b border-border-soft bg-surface/90 px-6 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-ink shadow-sm transition-colors hover:border-primary hover:text-primary"
          >
            ← Back to Home
          </button>
          <button onClick={onBack} className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-primary to-pink text-sm font-extrabold text-white">S</span>
            <span className="text-base font-extrabold text-ink">Synectra</span>
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-3xl font-extrabold tracking-tight text-ink">My Orders</h1>
        <p className="mt-2 max-w-xl text-sm text-ink-soft">
          Every top-up you've made. This demo has no real backend — data lives in a JSON seed plus your
          browser's localStorage.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-[1.5rem] border border-border-soft bg-surface p-5 shadow-sm">
            <span className="text-xs font-semibold text-ink-soft">Total orders</span>
            <p className="tabular mt-1 text-2xl font-extrabold text-ink">{totalTrx}</p>
          </div>
          <div className="rounded-[1.5rem] border border-border-soft bg-surface p-5 shadow-sm">
            <span className="text-xs font-semibold text-ink-soft">Successful</span>
            <p className="tabular mt-1 text-2xl font-extrabold text-ink">{successCount}</p>
          </div>
          <div className="rounded-[1.5rem] border border-border-soft bg-surface p-5 shadow-sm">
            <span className="text-xs font-semibold text-ink-soft">Total spent</span>
            <p className="tabular mt-1 text-2xl font-extrabold text-ink">{formatIDR(totalSpent)}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search game or order ID..."
            className="w-full max-w-xs rounded-full border border-border bg-surface px-5 py-2.5 text-sm text-ink shadow-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/15"
          />
          <div className="flex flex-wrap gap-2">
            {STATUS_FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setStatus(f.id)}
                className={`rounded-full border px-4 py-2 text-xs font-bold transition-colors ${
                  status === f.id ? 'border-ink bg-ink text-white' : 'border-border bg-surface text-ink-soft hover:border-primary'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="mt-16 rounded-[2rem] border border-dashed border-border py-16 text-center text-ink-soft">
            <div className="mb-3 text-3xl">🧾</div>
            <p className="text-sm">No orders match that filter yet.</p>
          </div>
        ) : (
          <div className="mt-6 space-y-3">
            {filtered.map((tx, i) => {
              const meta = STATUS_META[tx.status] || STATUS_META.success
              return (
                <motion.div
                  key={tx.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="flex flex-wrap items-center gap-4 rounded-[1.5rem] border border-border-soft bg-surface p-5 shadow-sm"
                >
                  <span
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-xs font-extrabold text-white"
                    style={{ background: tx.tile }}
                  >
                    {tx.icon}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold text-ink">{tx.gameName}</p>
                    <p className="text-xs text-ink-soft">
                      {tx.qty.toLocaleString('id-ID')} {tx.unit} · {tx.method} · {formatDate(tx.date)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="tabular text-sm font-bold text-ink">{formatIDR(tx.amount)}</p>
                    <p className="text-[11px] text-ink-soft">{tx.id}</p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-[11px] font-bold ${meta.cls}`}>{meta.label}</span>
                </motion.div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
