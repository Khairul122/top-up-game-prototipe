import { useMemo, useState } from 'react'
import Reveal from './Reveal.jsx'
import GameCard from './GameCard.jsx'
import { CATEGORIES, GAMES } from '../data/games.js'

export default function GamesSection({ onSelect }) {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('Semua')

  const filtered = useMemo(() => {
    return GAMES.filter((g) => {
      const matchCat = filter === 'Semua' || g.category === filter
      const matchQuery = g.name.toLowerCase().includes(query.trim().toLowerCase())
      return matchCat && matchQuery
    })
  }, [query, filter])

  return (
    <section className="section" id="games">
      <Reveal as="div" className="section-head">
        <h2>Lagi naik daun <span className="highlight">🔥</span></h2>
        <p>5 game yang paling sering di-top up minggu ini. Klik buat langsung isi.</p>
      </Reveal>

      <Reveal as="div" className="games-toolbar">
        <div className="search-box">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Cari game favoritmu..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="filter-pills">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              className={`pill ${filter === c ? 'active' : ''}`}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="games-grid">
        {filtered.map((g) => (
          <GameCard key={g.id} game={g} onSelect={onSelect} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="no-result">Ga ketemu tuh gamenya. Coba kata kunci lain ya 👀</p>
      )}
    </section>
  )
}
