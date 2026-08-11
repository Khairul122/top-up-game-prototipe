import { useToast } from '../ToastContext.jsx'

export default function Footer() {
  const toast = useToast()
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <span className="brand-mark">G.</span>
          <span className="brand-name">GACOR<em>.GG</em></span>
          <p>Platform top up game buat gamer yang ga suka nunggu.</p>
        </div>
        <div className="footer-cols">
          <div>
            <h5>Produk</h5>
            <a href="#games">Top Up Game</a>
            <a href="#promo">Promo</a>
            <a href="#cara">Cara Top Up</a>
          </div>
          <div>
            <h5>Bantuan</h5>
            <a href="#faq">FAQ</a>
            <a onClick={() => toast('Fitur cek transaksi ada di versi lengkap 👀')}>Cek Transaksi</a>
            <a onClick={() => toast('Live chat CS ada di versi lengkap 💬')}>Hubungi CS</a>
          </div>
          <div>
            <h5>Metode Bayar</h5>
            <div className="pay-badges">
              <span>GoPay</span><span>DANA</span><span>OVO</span><span>ShopeePay</span><span>QRIS</span><span>VA</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 GACOR.GG — Prototipe tampilan (React), bukan layanan transaksi sungguhan.</span>
      </div>
    </footer>
  )
}
