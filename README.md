# Synectra — Premium Game Top-Up Platform (Prototype)

A front-end prototype for **Synectra**, built to match a supplied design system (Playful SaaS + Bento
Grid, purple/lime/pink palette) and build spec (view-swapping Landing/Transaction architecture).

Stack: **React + Vite + Tailwind CSS v4 + Framer Motion**. No backend — this is a UI prototype only.
Checkout is simulated client-side, and order history is backed by a JSON seed
(`src/data/transactions.json`) plus `localStorage`, not a real database.

## Design system

- **Colors:** Primary `#5B47E0` (purple), Accent 1 `#4EEB5D` (lime), Accent 2 `#FF66B2` (pink),
  Background `#FAFAFA`, Surface `#FFFFFF`, Text `#0A0A0A` / `#6B7280`. Defined as Tailwind v4
  `@theme` tokens in `src/index.css` (`bg-primary`, `text-ink`, `bg-lime`, etc.).
- **Shape:** Pill buttons/badges (`rounded-full`), `rounded-[2rem]` bento cards, `rounded-2xl`
  inputs and nominal/payment cards.
- **Depth:** Flat design, hairline borders, soft shadow only on hover — no hard drop shadows.
- **Motion:** Framer Motion for hover scale (1.02–1.05), staggered reveals, floating background
  blobs (`mix-blend-multiply`), and view/modal transitions.

## Architecture

Single page, view-swapped with React state (no router):

- **Landing view** — Hero, Game Catalog (bento grid: Mobile Legends, Valorant, PUBG Mobile, Genshin
  Impact), Feature Highlights (Choose Game → Fill Up → Checkout), KPI stats bar.
- **Transaction view** — triggered by clicking a catalog card. Sticky game sidebar + 3-step form
  (Account → Nominal → Payment) + sticky checkout box. "Buy Now" opens a loading modal (2s) then a
  success modal, and logs the order.
- **My Orders (history) view** — reachable from the navbar/footer/success modal. Lists orders from
  the JSON seed plus anything purchased this session, with search and status filters.

## Note on catalog imagery

The brief asked for real images "from Google." Hotlinking official game cover art carries
copyright/trademark risk (and Wikipedia's non-free cover images are restricted to their own
articles), so the catalog currently uses small original SVG illustrations per game instead. If you
have licensed screenshots or official press-kit art, drop them in `src/assets` and swap them into
`GameCoverArt.jsx` — that's the only file that needs to change.

## Running

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/       Navbar, Hero, GameCatalog, FeatureHighlights, KPIStats,
                     TransactionView, HistoryPage, Footer, GameCoverArt, Counter
  data/games.js      4 games + nominal denominations (with HOT/HEMAT badges)
  data/transactions.json  seed order history ("database" substitute)
  TransactionsContext.jsx  order history state (JSON seed + localStorage)
  index.css          Tailwind v4 entry + @theme design tokens + blob keyframes
```
