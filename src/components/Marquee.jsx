export default function Marquee({ items }) {
  const loop = [...items, ...items]
  return (
    <div className="marquee">
      <div className="marquee-track">
        {loop.map((label, i) => (
          <span key={i}>{i !== 0 ? <>• {label}</> : label}</span>
        ))}
      </div>
    </div>
  )
}
