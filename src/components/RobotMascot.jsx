export default function RobotMascot() {
  return (
    <svg viewBox="0 0 420 480" className="robot-scene" role="img" aria-label="Maskot robot GACOR.GG memegang tablet top up">
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0.15" y2="1">
          <stop offset="0%" stopColor="#BFEFFF" />
          <stop offset="55%" stopColor="#E4FBFF" />
          <stop offset="100%" stopColor="#F6FFF9" />
        </linearGradient>
        <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#EAF7FF" />
        </linearGradient>
        <linearGradient id="wingGradL" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9FF3D0" />
          <stop offset="100%" stopColor="#7FD8FF" />
        </linearGradient>
        <linearGradient id="wingGradR" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9FF3D0" />
          <stop offset="100%" stopColor="#7FD8FF" />
        </linearGradient>
        <linearGradient id="coinGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFE79A" />
          <stop offset="100%" stopColor="#FFB020" />
        </linearGradient>
        <linearGradient id="gemGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8FE8FF" />
          <stop offset="100%" stopColor="#3D8CFF" />
        </linearGradient>
        <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#232B3D" />
          <stop offset="100%" stopColor="#141924" />
        </linearGradient>
        <filter id="softBlur" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
        <filter id="wingBlur" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      {/* Background card */}
      <rect x="3" y="3" width="414" height="474" rx="34" fill="url(#skyGrad)" stroke="#14151A" strokeWidth="2.5" />

      {/* bokeh */}
      <circle className="bokeh bokeh-a" cx="70" cy="90" r="26" fill="#FFD65C" opacity="0.35" filter="url(#softBlur)" />
      <circle className="bokeh bokeh-b" cx="360" cy="130" r="20" fill="#FF7AA8" opacity="0.3" filter="url(#softBlur)" />
      <circle className="bokeh bokeh-c" cx="350" cy="360" r="30" fill="#8FE8FF" opacity="0.35" filter="url(#softBlur)" />
      <circle className="bokeh bokeh-a" cx="55" cy="380" r="18" fill="#B6FF6E" opacity="0.3" filter="url(#softBlur)" />

      {/* glowing geometric shapes */}
      <g className="spin-slow" style={{ transformOrigin: '355px 90px' }}>
        <polygon points="355,62 379,76 379,104 355,118 331,104 331,76" fill="none" stroke="#FF8AC0" strokeWidth="2.5" opacity="0.55" />
      </g>
      <g className="spin-slow-rev" style={{ transformOrigin: '48px 200px' }}>
        <polygon points="48,178 68,222 28,222" fill="none" stroke="#B6FF6E" strokeWidth="2.5" opacity="0.55" />
      </g>
      <circle cx="372" cy="230" r="16" fill="none" stroke="#8FB4FF" strokeWidth="2.5" opacity="0.5" />

      {/* skyline */}
      <g opacity="0.9">
        <rect x="18" y="392" width="34" height="70" rx="8" fill="#EAF7FF" stroke="#14151A" strokeWidth="2" />
        <rect x="58" y="410" width="26" height="52" rx="7" fill="#FFFFFF" stroke="#14151A" strokeWidth="2" />
        <rect x="338" y="398" width="30" height="64" rx="8" fill="#EAF7FF" stroke="#14151A" strokeWidth="2" />
        <rect x="372" y="418" width="24" height="44" rx="7" fill="#FFFFFF" stroke="#14151A" strokeWidth="2" />
        <circle cx="35" cy="410" r="3" fill="#B6FF6E" />
        <circle cx="35" cy="424" r="3" fill="#B6FF6E" />
        <circle cx="71" cy="426" r="3" fill="#7FD8FF" />
        <circle cx="353" cy="416" r="3" fill="#FFD65C" />
        <circle cx="353" cy="430" r="3" fill="#FFD65C" />
        <circle cx="384" cy="434" r="3" fill="#7FD8FF" />
      </g>

      {/* floating game icons */}
      <g className="float-a">
        <circle cx="82" cy="150" r="15" fill="url(#coinGrad)" stroke="#14151A" strokeWidth="2" />
        <text x="82" y="155" fontSize="14" textAnchor="middle" fontWeight="700" fill="#8A5A00">$</text>
      </g>
      <g className="float-b">
        <polygon points="345,190 361,202 355,222 335,222 329,202" fill="url(#gemGrad)" stroke="#14151A" strokeWidth="2" />
      </g>
      <g className="float-c">
        <circle cx="60" cy="270" r="12" fill="#FF3D7A" stroke="#14151A" strokeWidth="2" />
        <circle cx="60" cy="266" r="4.5" fill="#fff" />
      </g>

      {/* ground shadow */}
      <ellipse cx="210" cy="438" rx="88" ry="14" fill="#14151A" opacity="0.12" />

      {/* wings (glow layer) */}
      <g filter="url(#wingBlur)" opacity="0.8">
        <path d="M158 230 C110 218 78 244 70 288 C104 288 138 272 158 246 Z" fill="url(#wingGradL)" />
        <path d="M262 230 C310 218 342 244 350 288 C316 288 282 272 262 246 Z" fill="url(#wingGradR)" />
      </g>
      {/* wings (crisp layer) */}
      <path d="M158 232 C114 222 84 246 76 286 C108 284 140 268 158 244 Z" fill="url(#wingGradL)" stroke="#14151A" strokeWidth="2" opacity="0.95" />
      <path d="M262 232 C306 222 336 246 344 286 C312 284 280 268 262 244 Z" fill="url(#wingGradR)" stroke="#14151A" strokeWidth="2" opacity="0.95" />

      {/* legs */}
      <rect x="178" y="392" width="24" height="40" rx="10" fill="#EAF7FF" stroke="#14151A" strokeWidth="2.5" />
      <rect x="218" y="392" width="24" height="40" rx="10" fill="#EAF7FF" stroke="#14151A" strokeWidth="2.5" />
      <rect x="172" y="424" width="36" height="16" rx="8" fill="#7FD8FF" stroke="#14151A" strokeWidth="2.5" />
      <rect x="212" y="424" width="36" height="16" rx="8" fill="#7FD8FF" stroke="#14151A" strokeWidth="2.5" />

      {/* body */}
      <rect x="140" y="252" width="140" height="150" rx="34" fill="url(#bodyGrad)" stroke="#14151A" strokeWidth="2.5" />
      <rect x="168" y="284" width="84" height="60" rx="18" fill="#D9F3FF" stroke="#14151A" strokeWidth="2" />
      <circle cx="210" cy="314" r="20" fill="url(#gemGrad)" stroke="#14151A" strokeWidth="2.5" />
      <path d="M210 306 l7 8 l-7 8 l-7 -8 Z" fill="#fff" opacity="0.85" />
      <rect x="178" y="356" width="64" height="10" rx="5" fill="#B6FF6E" stroke="#14151A" strokeWidth="2" />

      {/* arms + tablet */}
      <rect x="104" y="278" width="46" height="22" rx="11" fill="#EAF7FF" stroke="#14151A" strokeWidth="2.5" />
      <rect x="270" y="278" width="46" height="22" rx="11" fill="#EAF7FF" stroke="#14151A" strokeWidth="2.5" />
      <g>
        <rect x="150" y="330" width="120" height="86" rx="14" fill="#FFFFFF" stroke="#14151A" strokeWidth="2.5" />
        <rect x="160" y="340" width="100" height="66" rx="9" fill="url(#screenGrad)" />
        <circle cx="188" cy="378" r="13" fill="url(#coinGrad)" stroke="#14151A" strokeWidth="1.5" />
        <circle cx="204" cy="386" r="13" fill="url(#coinGrad)" stroke="#14151A" strokeWidth="1.5" />
        <polygon points="238,358 250,368 245,384 231,384 226,368" fill="url(#gemGrad)" stroke="#14151A" strokeWidth="1.5" />
        <circle cx="248" cy="352" r="9" fill="#B6FF6E" stroke="#14151A" strokeWidth="1.5" />
        <text x="248" y="356" fontSize="12" textAnchor="middle" fontWeight="800" fill="#14151A">+</text>
      </g>

      {/* head */}
      <rect x="150" y="140" width="120" height="112" rx="30" fill="url(#bodyGrad)" stroke="#14151A" strokeWidth="2.5" />
      {/* headset */}
      <path d="M150 176 C150 118 270 118 270 176" fill="none" stroke="#14151A" strokeWidth="6" strokeLinecap="round" />
      <path d="M150 176 C150 122 270 122 270 176" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
      <circle cx="150" cy="186" r="15" fill="#8FF3C8" stroke="#14151A" strokeWidth="2.5" />
      <circle cx="270" cy="186" r="15" fill="#8FF3C8" stroke="#14151A" strokeWidth="2.5" />
      <circle cx="210" cy="128" r="8" fill="#B6FF6E" stroke="#14151A" strokeWidth="2.5" className="antenna-glow" />
      <line x1="210" y1="140" x2="210" y2="136" stroke="#14151A" strokeWidth="2.5" />

      {/* face screen */}
      <rect x="172" y="168" width="76" height="56" rx="16" fill="url(#screenGrad)" />
      <circle cx="194" cy="192" r="7" fill="#7FF7FF" className="eye-blink" />
      <circle cx="226" cy="192" r="7" fill="#7FF7FF" className="eye-blink" />
      <path d="M192 206 Q210 216 228 206" fill="none" stroke="#7FF7FF" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  )
}
