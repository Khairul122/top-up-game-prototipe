function MobileLegendsArt({ uid }) {
  return (
    <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`ml-sky-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#241A4B" />
          <stop offset="100%" stopColor="#4B2E9E" />
        </linearGradient>
        <linearGradient id={`ml-lane-${uid}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFD65C" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill={`url(#ml-sky-${uid})`} />
      <circle cx="264" cy="40" r="22" fill="#FFE79A" opacity="0.9" />
      <circle cx="60" cy="30" r="2" fill="#fff" opacity="0.7" />
      <circle cx="110" cy="55" r="1.6" fill="#fff" opacity="0.6" />
      <circle cx="200" cy="20" r="1.6" fill="#fff" opacity="0.6" />
      <polygon points="0,200 40,120 90,200" fill="#1B1240" opacity="0.8" />
      <polygon points="230,200 280,110 320,200" fill="#1B1240" opacity="0.8" />
      <path d="M20 190 C 120 130 200 130 300 190" stroke={`url(#ml-lane-${uid})`} strokeWidth="6" fill="none" opacity="0.85" />
      <polygon points="160,150 176,166 160,182 144,166" fill="#8FE8FF" stroke="#141924" strokeWidth="2" />
      <rect x="34" y="150" width="14" height="40" fill="#2A2158" stroke="#141924" strokeWidth="2" />
      <rect x="272" y="140" width="14" height="50" fill="#2A2158" stroke="#141924" strokeWidth="2" />
    </svg>
  )
}

function FreeFireArt({ uid }) {
  return (
    <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`ff-sky-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFB020" />
          <stop offset="60%" stopColor="#FF6A3D" />
          <stop offset="100%" stopColor="#D6304A" />
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill={`url(#ff-sky-${uid})`} />
      <circle cx="160" cy="70" r="46" fill="#FFE79A" opacity="0.55" />
      <circle cx="160" cy="150" r="110" fill="none" stroke="#FFFFFF" strokeWidth="3" opacity="0.5" />
      <circle cx="160" cy="150" r="80" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.35" strokeDasharray="6 6" />
      <polygon points="0,200 60,110 130,200" fill="#7A1E2B" opacity="0.75" />
      <polygon points="180,200 250,120 320,200" fill="#7A1E2B" opacity="0.75" />
      <path d="M150 60 L170 60 L190 92 L150 92 L130 92 Z" fill="#FFFFFF" opacity="0.9" />
      <line x1="160" y1="92" x2="160" y2="118" stroke="#141924" strokeWidth="2" />
      <circle cx="160" cy="128" r="9" fill="#141924" />
    </svg>
  )
}

function RobloxArt({ uid }) {
  return (
    <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`rb-sky-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#BFE9FF" />
          <stop offset="100%" stopColor="#EAF7FF" />
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill={`url(#rb-sky-${uid})`} />
      <circle cx="270" cy="36" r="18" fill="#FFF6D6" opacity="0.9" />
      <rect x="30" y="120" width="46" height="46" rx="8" fill="#FF3D7A" stroke="#141924" strokeWidth="3" transform="rotate(-8 53 143)" />
      <rect x="100" y="90" width="58" height="58" rx="10" fill="#3D8CFF" stroke="#141924" strokeWidth="3" transform="rotate(6 129 119)" />
      <rect x="180" y="120" width="44" height="44" rx="8" fill="#B6FF3D" stroke="#141924" strokeWidth="3" transform="rotate(-4 202 142)" />
      <rect x="230" y="80" width="52" height="52" rx="9" fill="#FFB020" stroke="#141924" strokeWidth="3" transform="rotate(10 256 106)" />
      <rect x="0" y="176" width="320" height="24" fill="#DFF3FF" />
    </svg>
  )
}

function PubgArt({ uid }) {
  return (
    <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`pm-sky-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EAD9A8" />
          <stop offset="100%" stopColor="#C7A15C" />
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill={`url(#pm-sky-${uid})`} />
      <circle cx="70" cy="46" r="26" fill="#FFF3D0" opacity="0.9" />
      <polygon points="0,200 90,150 180,200" fill="#8C7A45" opacity="0.7" />
      <polygon points="150,200 240,140 320,200" fill="#736636" opacity="0.7" />
      <path d="M230 40 L250 40 L268 70 L230 70 L212 70 Z" fill="#556B2F" opacity="0.9" />
      <line x1="240" y1="70" x2="240" y2="100" stroke="#141924" strokeWidth="2" />
      <circle cx="240" cy="110" r="8" fill="#141924" />
      <rect x="20" y="170" width="30" height="8" fill="#556B2F" opacity="0.6" />
      <rect x="60" y="178" width="40" height="6" fill="#556B2F" opacity="0.5" />
    </svg>
  )
}

function GenshinArt({ uid }) {
  return (
    <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`gi-sky-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D6C6FF" />
          <stop offset="55%" stopColor="#FFD9EE" />
          <stop offset="100%" stopColor="#FFF0E0" />
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill={`url(#gi-sky-${uid})`} />
      <ellipse cx="80" cy="150" rx="60" ry="14" fill="#B79CFF" opacity="0.5" />
      <ellipse cx="80" cy="140" rx="46" ry="16" fill="#EFE4FF" stroke="#8C3DFF" strokeWidth="2" opacity="0.9" />
      <ellipse cx="230" cy="110" rx="70" ry="16" fill="#B79CFF" opacity="0.5" />
      <ellipse cx="230" cy="100" rx="54" ry="18" fill="#EFE4FF" stroke="#8C3DFF" strokeWidth="2" opacity="0.9" />
      <polygon points="230,70 238,86 230,102 222,86" fill="#8FE8FF" stroke="#141924" strokeWidth="1.5" />
      <polygon points="80,110 87,124 80,138 73,124" fill="#FF9AD1" stroke="#141924" strokeWidth="1.5" />
      <circle cx="270" cy="36" r="3" fill="#fff" />
      <circle cx="40" cy="46" r="2.4" fill="#fff" />
      <circle cx="150" cy="30" r="2" fill="#fff" />
    </svg>
  )
}

const ARTS = {
  ml: MobileLegendsArt,
  ff: FreeFireArt,
  rb: RobloxArt,
  pm: PubgArt,
  gi: GenshinArt,
}

export default function GameCoverArt({ id }) {
  const Art = ARTS[id] || MobileLegendsArt
  return <Art uid={id} />
}
