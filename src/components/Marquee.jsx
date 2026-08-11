export default function Marquee({ items, speed = 26, tone = 'dark', compact = false }) {
  const loop = [...items, ...items]
  return (
    <div className={`marquee marquee-${tone}`} style={compact ? { marginTop: 0 } : undefined}>
      <div className="marquee-track" style={{ animationDuration: `${speed}s` }}>
        {loop.map((label, i) => (
          <span className="marquee-item" key={i}>
            <span className="marquee-dot" aria-hidden="true" />
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}
