import { useEffect, useState } from 'react'
import { useToast } from '../ToastContext.jsx'
import { useTransactions } from '../TransactionsContext.jsx'

const PAY_METHODS = ['GoPay', 'DANA', 'OVO', 'ShopeePay', 'QRIS', 'Virtual Account']

function formatIDR(n) {
  return 'Rp' + Math.round(n).toLocaleString('id-ID')
}

export default function OrderModal({ game, onClose, onViewHistory }) {
  const toast = useToast()
  const { addTransaction } = useTransactions()
  const [step, setStep] = useState('denom')
  const [userId, setUserId] = useState('')
  const [serverId, setServerId] = useState('')
  const [denomIndex, setDenomIndex] = useState(null)
  const [pay, setPay] = useState(null)
  const [promoCode, setPromoCode] = useState('')
  const [promoApplied, setPromoApplied] = useState(false)
  const [trxId, setTrxId] = useState('')

  useEffect(() => {
    if (!game) return
    setStep('denom')
    setUserId('')
    setServerId('')
    setDenomIndex(null)
    setPay(null)
    setPromoCode('')
    setPromoApplied(false)
  }, [game])

  if (!game) return null

  const denom = denomIndex !== null ? game.denoms[denomIndex] : null
  const price = denom ? denom.price : 0
  const discount = promoApplied ? Math.round(price * 0.1) : 0
  const total = price - discount

  const canGoPayment = userId.trim().length >= 4 && (!game.hasServer || serverId.trim().length >= 2) && denom
  const canPay = !!pay

  function applyPromo() {
    if (promoCode.trim().toUpperCase() === 'GACOR10') {
      setPromoApplied(true)
      toast('Kode GACOR10 berhasil dipakai, diskon 10% 🎉')
    } else {
      toast('Kode promo tidak valid')
    }
  }

  function payNow() {
    setStep('loading')
    setTimeout(() => {
      const newTrxId = 'GG' + Math.floor(100000000 + Math.random() * 899999999)
      setTrxId(newTrxId)
      addTransaction({
        id: newTrxId,
        date: new Date().toISOString(),
        gameId: game.id,
        gameName: game.short,
        icon: game.icon,
        tile: game.tile,
        qty: denom.qty,
        unit: game.unit,
        amount: total,
        method: pay,
        status: 'success',
        userId: game.hasServer ? `${userId} (${serverId})` : userId,
      })
      setStep('success')
    }, 1700)
  }

  function handleClose() {
    onClose()
  }

  return (
    <div className="modal-overlay open" onClick={(e) => e.target === e.currentTarget && handleClose()}>
      <div className="modal">
        <button className="modal-close" onClick={handleClose}>✕</button>

        {step === 'denom' && (
          <div>
            <div className="modal-head">
              <div className="modal-game-icon" style={{ '--tile': game.tile, background: game.tile }}>{game.icon}</div>
              <div>
                <h3>{game.short}</h3>
                <span className="modal-game-cat">{game.category}</span>
              </div>
            </div>

            <div className="modal-field">
              <label>User ID</label>
              <input
                type="text"
                placeholder="Contoh: 82910345"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </div>
            {game.hasServer && (
              <div className="modal-field">
                <label>Server ID</label>
                <input
                  type="text"
                  placeholder="Contoh: 2311"
                  value={serverId}
                  onChange={(e) => setServerId(e.target.value)}
                />
              </div>
            )}

            <label className="modal-label">Pilih nominal</label>
            <div className="denom-grid">
              {game.denoms.map((d, i) => (
                <button
                  key={i}
                  className={`denom-opt ${denomIndex === i ? 'selected' : ''}`}
                  onClick={() => setDenomIndex(i)}
                >
                  <span className="d-qty">{d.qty.toLocaleString('id-ID')} {game.unitIcon} {d.bonus ? '+Bonus' : ''}</span>
                  <span className="d-price">{formatIDR(d.price)}</span>
                </button>
              ))}
            </div>

            <button className="btn btn-primary btn-block" disabled={!canGoPayment} onClick={() => setStep('payment')}>
              Lanjut ke Pembayaran
            </button>
          </div>
        )}

        {step === 'payment' && (
          <div>
            <button className="back-link" onClick={() => setStep('denom')}>← Kembali</button>
            <h3>Pilih metode pembayaran</h3>
            <div className="pay-grid">
              {PAY_METHODS.map((m) => (
                <button
                  key={m}
                  className={`pay-opt ${pay === m ? 'selected' : ''}`}
                  onClick={() => setPay(m)}
                >
                  {m}
                </button>
              ))}
            </div>

            <div className="promo-input">
              <input
                type="text"
                placeholder="Kode promo (opsional)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                disabled={promoApplied}
              />
              <button onClick={applyPromo} disabled={promoApplied || !promoCode.trim()}>Pakai</button>
            </div>

            <div className="summary">
              <div className="summary-row">
                <span>{game.short} — {denom.qty.toLocaleString('id-ID')} {game.unit}</span>
                <span>{formatIDR(price)}</span>
              </div>
              {promoApplied && (
                <div className="summary-row">
                  <span>Diskon GACOR10</span>
                  <span>-{formatIDR(discount)}</span>
                </div>
              )}
              <div className="summary-row total">
                <span>Total</span>
                <span>{formatIDR(total)}</span>
              </div>
            </div>

            <button className="btn btn-primary btn-block" disabled={!canPay} onClick={payNow}>
              Bayar Sekarang
            </button>
          </div>
        )}

        {step === 'loading' && (
          <div className="modal-step-center">
            <div className="loading-spinner"></div>
            <p>Memproses pembayaran kamu...</p>
          </div>
        )}

        {step === 'success' && (
          <div className="modal-step-center">
            <div className="success-check">✓</div>
            <h3>Top up berhasil!</h3>
            <p>{denom.qty.toLocaleString('id-ID')} {game.unit} sudah dikirim ke akun <strong>{userId}</strong>.</p>
            <div className="success-id">ID Transaksi: {trxId}</div>
            {onViewHistory && (
              <button
                className="btn btn-primary btn-block"
                style={{ marginBottom: 10 }}
                onClick={() => {
                  handleClose()
                  onViewHistory()
                }}
              >
                Lihat Riwayat Transaksi
              </button>
            )}
            <button className="btn btn-outline btn-block" onClick={handleClose}>Tutup</button>
          </div>
        )}
      </div>
    </div>
  )
}
