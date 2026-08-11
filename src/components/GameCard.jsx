export default function GameCard({ game, onSelect }) {
  return (
    <button className="game-card" onClick={() => onSelect(game)}>
      <span className="badge">{game.badge}</span>
      <div className="game-mono" style={{ '--tile': game.tile }}>{game.icon}</div>
      <h4>{game.short}</h4>
      <span className="cat">{game.category}</span>
      <div className="rating">⭐ {game.rating.toFixed(1)}</div>
    </button>
  )
}
