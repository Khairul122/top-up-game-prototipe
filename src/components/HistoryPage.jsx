import { useMemo, useState } from 'react'
import { useTransactions } from '../TransactionsContext.jsx'

const STATUS_META = {
  success: { label: 'Berhasil', cls: 'success' },
  pending: { label: 'Diproses', cls: 'pending' },
  failed: { label: 'Gagal', cls: 'failed' },
}

const STATUS_FILTERS = [
  { id: 'all', label: 'Semua' },
  { id: 'success', label: 'Berhasil' },
  { id: 'pending', label: 'Diproses' },
  { id: 'failed', label: 'Gagal' },
]

function formatIDR(n) {
  return 'Rp' + Math.round(n).toLocaleString('id-ID')
}

function formatDate(iso) {
  const d = new Date(iso)
  const datePart = d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
  const timePart = d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
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
      const matchQuery =
        !q || tx.gameName.toLowerCase().includes(q) || tx.id.toLowerCase().includes(q)
      return matchStatus && matchQuery
    })
  }, [transactions, query, status])

  const totalTrx = transactions.length
  const totalSpent = transactions
    .filter((tx) => tx.status === 'success')
    .reduce((sum, tx) => sum + tx.amount, 0)
  const successCount = transactions.filter((tx) => tx.status === 'success').length

  return (
    <>
      <header className="simple-header">
        <button className="back-btn" onClick={onBack}>← Kembali ke Beranda</button>
        <button className="brand" onClick={onBack} style={{ background: 'none', border: 'none' }}>
          <span className="brand-mark">G.</span>
          <span className="brand-name">GACOR<em>.GG</em></span>
        </button>
      </header>

      <div className="history-page">
        <h1 className="history-title">Riwayat Transaksi</h1>
        <p className="history-sub">
          Semua top up yang pernah kamu lakukan. Data demo ini disimpan di browser kamu (localStorage),
          bukan di server sungguhan — cocok buat prototipe tanpa backend.
        </p>

        <div className="history-summary">
          <div className="summary-card">
            <span className="s-label">Total transaksi</span>
            <span className="s-value">{totalTrx}</span>
          </div>
          <div className="summary-card">
            <span className="s-label">Transaksi berhasil</span>
            <span className="s-value">{successCount}</span>
          </div>
          <div className="summary-card">
            <span className="s-label">Total belanja</span>
            <span className="s-value">{formatIDR(totalSpent)}</span>
          </div>
        </div>

        <div className="history-toolbar">
          <div className="search-box">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Cari nama game atau ID transaksi..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="status-pills">
            {STATUS_FILTERS.map((f) => (
              <button
                key={f.id}
                className={`pill ${status === f.id ? 'active' : ''}`}
                onClick={() => setStatus(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="history-empty">
            <div className="he-icon">🧾</div>
            <p>Belum ada transaksi yang cocok. Coba top up dulu atau ubah filter kamu.</p>
          </div>
        ) : (
          <div className="history-list">
            {filtered.map((tx) => {
              const meta = STATUS_META[tx.status] || STATUS_META.success
              return (
                <div className="history-item" key={tx.id}>
                  <div className="hi-icon" style={{ background: tx.tile }}>{tx.icon}</div>
                  <div className="hi-main">
                    <div className="hi-title">{tx.gameName}</div>
                    <div className="hi-meta">
                      {tx.qty.toLocaleString('id-ID')} {tx.unit} · {tx.method} · {formatDate(tx.date)}
                    </div>
                  </div>
                  <div>
                    <div className="hi-amount">{formatIDR(tx.amount)}</div>
                    <div className="hi-id">{tx.id}</div>
                  </div>
                  <span className={`status-badge ${meta.cls}`}>{meta.label}</span>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}
