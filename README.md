# GACOR.GG — Prototipe Top Up Game (React)

Prototipe front-end untuk platform top up 5 game yang lagi naik daun: Mobile Legends: Bang Bang, Free Fire, Roblox, PUBG Mobile, dan Genshin Impact.

Ini murni prototipe tampilan (React + Vite, tanpa backend sungguhan). Alur checkout dan pembayaran disimulasikan di sisi client, dan riwayat transaksi disimpan sebagai data JSON (`src/data/transactions.json`) + localStorage — bukan database sungguhan.

## Fitur

- Landing page lengkap: hero dengan maskot robot, running text game & metode pembayaran (loop tanpa putus), katalog game bergambar (cover art custom per game), kenapa pilih kami, cara top up, metode pembayaran, promo dengan countdown, testimoni, FAQ.
- Katalog game dengan cover art ilustrasi custom, pencarian, dan filter kategori.
- Alur checkout penuh: pilih nominal → pilih metode bayar → bayar → riwayat transaksi tersimpan otomatis.
- Halaman Riwayat Transaksi terpisah (bukan modal) dengan ringkasan, pencarian, dan filter status — datanya dari `src/data/transactions.json` sebagai seed, lalu transaksi baru ditambahkan dan disimpan di localStorage browser.
- Tema modern (bukan neo-brutalism): kartu rounded, soft shadow, aksen gradient violet-biru, tetap light theme.

## Menjalankan

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`.

## Build produksi

```bash
npm run build
npm run preview
```

## Struktur

```
src/
  components/         komponen UI (Navbar, Hero, GamesSection, PaymentMethods, HistoryPage, OrderModal, dll)
  data/games.js        data 5 game + denominasi harga
  data/paymentMethods.js  data metode pembayaran
  data/transactions.json  seed riwayat transaksi (dipakai sebagai "database" JSON)
  TransactionsContext.jsx  state riwayat transaksi (seed JSON + localStorage)
  hooks.js             hook custom (efek magnetic button)
  ToastContext.jsx      sistem notifikasi toast
  index.css             design system (warna, tipografi, animasi)
```
