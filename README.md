# GACOR.GG — Prototipe Top Up Game (React)

Prototipe front-end untuk platform top up 5 game yang lagi naik daun: Mobile Legends: Bang Bang, Free Fire, Roblox, PUBG Mobile, dan Genshin Impact.

Ini murni prototipe tampilan (React + Vite, tanpa backend). Alur checkout, transaksi, dan pembayaran hanya simulasi di sisi client.

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
  components/   komponen UI (Navbar, Hero, GamesSection, OrderModal, dll)
  data/games.js data 5 game + denominasi harga
  hooks.js      hook custom (efek magnetic button)
  ToastContext.jsx  sistem notifikasi toast
  index.css     design system (warna, tipografi, animasi)
```
