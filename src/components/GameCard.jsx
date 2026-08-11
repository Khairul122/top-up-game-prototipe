import GameCoverArt from './GameCoverArt.jsx'

function formatIDR(n) {
  return 'Rp' + Math.round(n).toLocaleString('id-ID')
}

export default function GameCard({ game, onSelect }) {
  const minPrice = Math.min(...game.denoms.map((d) => d.price))
  return (
    <button className="game-card" onClick={() => onSelect(game)}>
      <div className="game-card-media">
        <GameCoverArt id={game.id} />
        <span className="badge">{game.badge}</span>
        <div className="game-mono" style={{ '--tile': game.tile, background: game.tile }}>{game.icon}</div>
      </div>
      <div className="game-card-body">
        <h4>{game.short}</h4>
        <span className="cat">{game.category}</span>
        <div className="game-card-footer">
          <span className="price-from">
            {formatIDR(minPrice)}
            <small>Mulai dari</small>
          </span>
          <span className="rating">⭐ {game.rating.toFixed(1)}</span>
        </div>
      </div>
    </button>
  )
}
