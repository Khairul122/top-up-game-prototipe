function MobileLegendsArt({ uid }) {
  return (
    <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <defs>
        <linearGradient id={`ml-sky-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#241A4B" />
          <stop offset="100%" stopColor="#5B47E0" />
        </linearGradient>
        <linearGradient id={`ml-lane-${uid}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4EEB5D" />
          <stop offset="100%" stopColor="#5B47E0" />
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill={`url(#ml-sky-${uid})`} />
      <circle cx="264" cy="40" r="22" fill="#FFE79A" opacity="0.9" />
      <circle cx="60" cy="30" r="2" fill="#fff" opacity="0.7" />
      <circle cx="110" cy="55" r="1.6" fill="#fff" opacity="0.6" />
      <polygon points="0,200 40,120 90,200" fill="#180F3D" opacity="0.85" />
      <polygon points="230,200 280,110 320,200" fill="#180F3D" opacity="0.85" />
      <path d="M20 190 C 120 130 200 130 300 190" stroke={`url(#ml-lane-${uid})`} strokeWidth="6" fill="none" opacity="0.85" />
      <polygon points="160,150 176,166 160,182 144,166" fill="#4EEB5D" stroke="#0A0A0A" strokeWidth="2" />
    </svg>
  )
}

function ValorantArt({ uid }) {
  return (
    <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <defs>
        <linearGradient id={`va-bg-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0A0A0A" />
          <stop offset="100%" stopColor="#241417" />
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill={`url(#va-bg-${uid})`} />
      <polygon points="0,0 140,0 60,200 0,200" fill="#1B0F12" />
      <polygon points="320,0 200,0 280,200 320,200" fill="#1B0F12" />
      <line x1="160" y1="60" x2="160" y2="140" stroke="#FF4655" strokeWidth="3" opacity="0.9" />
      <line x1="120" y1="100" x2="200" y2="100" stroke="#FF4655" strokeWidth="3" opacity="0.9" />
      <circle cx="160" cy="100" r="26" fill="none" stroke="#FF4655" strokeWidth="2" opacity="0.6" />
      <polygon points="160,80 168,96 160,112 152,96" fill="#FF4655" />
    </svg>
  )
}

function PubgArt({ uid }) {
  return (
    <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <defs>
        <linearGradient id={`pm-sky-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F2E4BE" />
          <stop offset="100%" stopColor="#C7A15C" />
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill={`url(#pm-sky-${uid})`} />
      <circle cx="70" cy="46" r="26" fill="#FFF3D0" opacity="0.9" />
      <polygon points="0,200 90,150 180,200" fill="#8C7A45" opacity="0.7" />
      <polygon points="150,200 240,140 320,200" fill="#736636" opacity="0.7" />
      <path d="M230 40 L250 40 L268 70 L230 70 L212 70 Z" fill="#5B47E0" opacity="0.85" />
      <line x1="240" y1="70" x2="240" y2="100" stroke="#0A0A0A" strokeWidth="2" />
      <circle cx="240" cy="110" r="8" fill="#0A0A0A" />
    </svg>
  )
}

function GenshinArt({ uid }) {
  return (
    <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <defs>
        <linearGradient id={`gi-sky-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D6C6FF" />
          <stop offset="55%" stopColor="#FFD9EE" />
          <stop offset="100%" stopColor="#FFF0E0" />
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill={`url(#gi-sky-${uid})`} />
      <ellipse cx="80" cy="150" rx="60" ry="14" fill="#B79CFF" opacity="0.5" />
      <ellipse cx="80" cy="140" rx="46" ry="16" fill="#EFE4FF" stroke="#5B47E0" strokeWidth="2" opacity="0.9" />
      <ellipse cx="230" cy="110" rx="70" ry="16" fill="#B79CFF" opacity="0.5" />
      <ellipse cx="230" cy="100" rx="54" ry="18" fill="#EFE4FF" stroke="#5B47E0" strokeWidth="2" opacity="0.9" />
      <polygon points="230,70 238,86 230,102 222,86" fill="#4EEB5D" stroke="#0A0A0A" strokeWidth="1.5" />
      <polygon points="80,110 87,124 80,138 73,124" fill="#FF66B2" stroke="#0A0A0A" strokeWidth="1.5" />
    </svg>
  )
}

const ARTS = {
  ml: MobileLegendsArt,
  valorant: ValorantArt,
  pubg: PubgArt,
  genshin: GenshinArt,
}

export default function GameCoverArt({ id }) {
  const Art = ARTS[id] || MobileLegendsArt
  return <Art uid={id} />
}
