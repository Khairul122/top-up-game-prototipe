import { motion } from 'framer-motion'
import GameCoverImage from './GameCoverImage.jsx'
import { GAMES } from '../data/games.js'

function formatIDR(n) {
  return 'Rp' + Math.round(n).toLocaleString('id-ID')
}

export default function GameCatalog({ onSelectGame }) {
  return (
    <section id="catalog" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 max-w-lg">
        <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">Game catalog</h2>
        <p className="mt-3 text-base text-ink-soft">The titles everyone's grinding right now. Pick one to start your top-up.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {GAMES.map((game, i) => {
          const minPrice = Math.min(...game.denoms.map((d) => d.price))
          return (
            <motion.button
              key={game.id}
              onClick={() => onSelectGame(game)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group overflow-hidden rounded-[2rem] border border-border-soft bg-surface text-left shadow-sm transition-shadow hover:shadow-md ${
                game.span === 2 ? 'sm:col-span-2' : 'sm:col-span-1'
              }`}
            >
              <div className="relative aspect-[16/9] overflow-hidden sm:aspect-[16/8]">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} className="h-full w-full">
                  <GameCoverImage game={game} />
                </motion.div>
                {game.verified && (
                  <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-ink/80 px-3 py-1 text-[11px] font-bold text-white backdrop-blur">
                    <span className="text-lime">✓</span> Verified
                  </span>
                )}
                <div
                  className="absolute left-4 -bottom-5 grid h-11 w-11 place-items-center rounded-xl border-4 border-surface text-xs font-extrabold text-white shadow-sm"
                  style={{ background: game.tile }}
                >
                  {game.icon}
                </div>
              </div>
              <div className="px-5 pb-5 pt-8">
                <h3 className="text-lg font-bold text-ink">{game.short}</h3>
                <p className="text-xs font-medium text-ink-soft">{game.category}</p>
                <div className="mt-4 flex items-center justify-between border-t border-border-soft pt-3">
                  <div className="tabular text-sm font-bold text-primary">
                    {formatIDR(minPrice)}
                    <span className="ml-1 text-[11px] font-medium text-ink-soft">starting</span>
                  </div>
                  <span className="flex items-center gap-1 text-xs font-bold text-ink">⭐ {game.rating.toFixed(1)}</span>
                </div>
              </div>
            </motion.button>
          )
        })}
      </div>
    </section>
  )
}
