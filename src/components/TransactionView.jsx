import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GameCoverImage from './GameCoverImage.jsx'
import { useTransactions } from '../TransactionsContext.jsx'

const PAY_METHODS = [
  { id: 'qris', name: 'QRIS', desc: 'Scan & pay with any e-wallet or bank app' },
  { id: 'gopay', name: 'GoPay', desc: 'Pay instantly from your GoPay balance' },
  { id: 'dana', name: 'DANA', desc: 'Pay instantly from your DANA balance' },
  { id: 'bca', name: 'BCA Virtual Account', desc: 'Transfer via BCA VA number' },
]

function formatIDR(n) {
  return 'Rp' + Math.round(n).toLocaleString('id-ID')
}

export default function TransactionView({ game, onBack, onViewHistory }) {
  const { addTransaction } = useTransactions()
  const [userId, setUserId] = useState('')
  const [zoneId, setZoneId] = useState('')
  const [denomIndex, setDenomIndex] = useState(null)
  const [payment, setPayment] = useState(null)
  const [showLoading, setShowLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [trxId, setTrxId] = useState('')

  const denom = denomIndex !== null ? game.denoms[denomIndex] : null
  const total = denom ? denom.price : 0
  const canBuy = userId.trim().length >= 3 && (!game.hasZone || zoneId.trim().length >= 1) && denom && payment

  function buyNow() {
    if (!canBuy) return
    setShowLoading(true)
    setTimeout(() => {
      const id = 'SYN' + Math.floor(100000000 + Math.random() * 899999999)
      setTrxId(id)
      addTransaction({
        id,
        date: new Date().toISOString(),
        gameId: game.id,
        gameName: game.short,
        icon: game.icon,
        tile: game.tile,
        qty: denom.qty,
        unit: game.unit,
        amount: total,
        method: PAY_METHODS.find((p) => p.id === payment)?.name || payment,
        status: 'success',
        userId: game.hasZone ? `${userId} (${zoneId})` : userId,
      })
      setShowLoading(false)
      setShowSuccess(true)
    }, 2000)
  }

  function resetAndClose() {
    setShowSuccess(false)
    onBack()
  }

  return (
    <div className="min-h-screen bg-bg">
      <div className="mx-auto max-w-6xl px-6 pt-8">
        <button
          onClick={onBack}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-ink shadow-sm transition-colors hover:border-primary hover:text-primary"
        >
          ← Back to Home
        </button>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 pb-24 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-8 overflow-hidden rounded-[2rem] border border-border-soft bg-surface shadow-sm">
            <div className="aspect-[4/3]">
              <GameCoverImage game={game} />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-ink">{game.short}</h2>
              <p className="mt-1 text-sm font-medium text-ink-soft">{game.category}</p>
              {game.verified && (
                <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-lime/15 px-3 py-1.5 text-xs font-bold text-ink">
                  <span className="grid h-4 w-4 place-items-center rounded-full bg-lime text-[10px] text-ink">✓</span>
                  Verified Partner
                </span>
              )}
              <div className="mt-5 space-y-2 border-t border-border-soft pt-4 text-xs text-ink-soft">
                <p>⭐ {game.rating.toFixed(1)} average rating</p>
                <p>⚡ Instant delivery, 24/7</p>
                <p>🔒 No password required — ID only</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 lg:col-span-8">
          <div className="rounded-[2rem] border border-border-soft bg-surface p-6 shadow-sm sm:p-8">
            <div className="mb-5 flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-xs font-bold text-white">1</span>
              <h3 className="text-lg font-bold text-ink">Account</h3>
            </div>
            <div className={`grid gap-4 ${game.hasZone ? 'sm:grid-cols-2' : 'grid-cols-1'}`}>
              <div>
                <label className="mb-1.5 block text-xs font-bold text-ink-soft">User ID</label>
                <input
                  type="text"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  placeholder="e.g. 82910345"
                  className="w-full rounded-2xl border border-border bg-bg px-4 py-3 text-sm text-ink outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/15"
                />
              </div>
              {game.hasZone && (
                <div>
                  <label className="mb-1.5 block text-xs font-bold text-ink-soft">Zone ID</label>
                  <input
                    type="text"
                    value={zoneId}
                    onChange={(e) => setZoneId(e.target.value)}
                    placeholder="e.g. 2311"
                    className="w-full rounded-2xl border border-border bg-bg px-4 py-3 text-sm text-ink outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/15"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="rounded-[2rem] border border-border-soft bg-surface p-6 shadow-sm sm:p-8">
            <div className="mb-5 flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-xs font-bold text-white">2</span>
              <h3 className="text-lg font-bold text-ink">Nominal</h3>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {game.denoms.map((d, i) => {
                const active = denomIndex === i
                return (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setDenomIndex(i)}
                    className={`relative rounded-2xl border p-4 text-left transition-colors ${
                      active ? 'border-primary bg-primary/5' : 'border-border bg-bg hover:border-primary/40'
                    }`}
                  >
                    {d.badge && (
                      <span
                        className={`absolute -top-2 right-3 rounded-full px-2 py-0.5 text-[10px] font-bold text-white ${
                          d.badge === 'HOT' ? 'bg-pink' : 'bg-lime text-ink'
                        }`}
                      >
                        {d.badge}
                      </span>
                    )}
                    <span className="block text-sm font-bold text-ink">
                      {d.qty.toLocaleString('id-ID')} {game.unit}
                    </span>
                    <span className="tabular mt-1 block text-xs font-semibold text-ink-soft">{formatIDR(d.price)}</span>
                  </motion.button>
                )
              })}
            </div>
          </div>

          <div className="rounded-[2rem] border border-border-soft bg-surface p-6 shadow-sm sm:p-8">
            <div className="mb-5 flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-xs font-bold text-white">3</span>
              <h3 className="text-lg font-bold text-ink">Payment method</h3>
            </div>
            <div className="space-y-3">
              {PAY_METHODS.map((p) => {
                const active = payment === p.id
                return (
                  <motion.button
                    key={p.id}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => setPayment(p.id)}
                    className={`flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-left transition-colors ${
                      active ? 'border-primary bg-primary/5' : 'border-border bg-bg hover:border-primary/40'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink text-[11px] font-extrabold text-white">
                        {p.name.slice(0, 2).toUpperCase()}
                      </span>
                      <div>
                        <span className="block text-sm font-bold text-ink">{p.name}</span>
                        <span className="block text-xs text-ink-soft">{p.desc}</span>
                      </div>
                    </div>
                    {active && <span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-xs text-white">✓</span>}
                  </motion.button>
                )
              })}
            </div>
          </div>

          <div className="sticky bottom-4 rounded-[2rem] border border-border-soft bg-surface p-6 shadow-md sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold text-ink-soft">Order summary</p>
                <p className="tabular mt-1 text-2xl font-extrabold text-ink">{formatIDR(total)}</p>
                {denom && (
                  <p className="mt-0.5 text-xs text-ink-soft">
                    {game.short} · {denom.qty.toLocaleString('id-ID')} {game.unit}
                  </p>
                )}
              </div>
              <motion.button
                whileHover={canBuy ? { scale: 1.03 } : {}}
                whileTap={canBuy ? { scale: 0.98 } : {}}
                disabled={!canBuy}
                onClick={buyNow}
                className="rounded-full bg-primary px-8 py-4 text-sm font-bold text-white shadow-[0_10px_30px_-8px_rgba(91,71,224,0.55)] disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
              >
                Buy Now
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-ink/40 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center gap-4 rounded-[2rem] bg-surface px-10 py-10 shadow-md"
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                className="h-10 w-10 rounded-full border-4 border-border border-t-primary"
              />
              <p className="text-sm font-semibold text-ink">Processing your payment…</p>
            </motion.div>
          </motion.div>
        )}

        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-ink/40 backdrop-blur-sm px-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              className="w-full max-w-sm rounded-[2rem] bg-surface p-8 text-center shadow-md"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.1 }}
                className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-lime text-2xl font-bold text-ink"
              >
                ✓
              </motion.div>
              <h3 className="text-lg font-bold text-ink">Top-up successful!</h3>
              <p className="mt-2 text-sm text-ink-soft">
                {denom?.qty.toLocaleString('id-ID')} {game.unit} has been delivered to your account.
              </p>
              <p className="tabular mt-4 rounded-2xl border border-dashed border-border bg-bg px-4 py-2.5 text-xs font-bold text-ink-soft">
                Order ID: {trxId}
              </p>
              <button
                onClick={() => {
                  setShowSuccess(false)
                  onViewHistory()
                }}
                className="mt-6 w-full rounded-full bg-primary px-6 py-3 text-sm font-bold text-white"
              >
                View My Orders
              </button>
              <button onClick={resetAndClose} className="mt-3 w-full rounded-full border border-border px-6 py-3 text-sm font-bold text-ink">
                Back to Home
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
