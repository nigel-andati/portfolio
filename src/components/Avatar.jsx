const tones = {
  blue: ['#1fa3d6', '#0b6d97'],
  red: ['#e5313b', '#9e0d16'],
  yellow: ['#ffc21a', '#e07b00'],
}

/** Square smiley avatar, one colour per profile. */
export default function Avatar({ color = 'blue', className = '' }) {
  const [a, b] = tones[color] ?? tones.blue
  const id = `av-${color}`
  return (
    <svg className={`avatar ${className}`} viewBox="0 0 100 100" aria-hidden="true">
      <defs>
        <radialGradient id={id} cx="35%" cy="30%" r="85%">
          <stop offset="0" stopColor={a} />
          <stop offset="1" stopColor={b} />
        </radialGradient>
      </defs>
      <rect width="100" height="100" rx="6" fill={`url(#${id})`} />
      <circle cx="33" cy="40" r="7" fill="#111" />
      <circle cx="67" cy="40" r="7" fill="#111" />
      <circle cx="35.5" cy="37.5" r="2" fill="#fff" />
      <circle cx="69.5" cy="37.5" r="2" fill="#fff" />
      <path d="M28 60 Q50 76 72 60" stroke="#111" strokeWidth="5" strokeLinecap="round" fill="none" />
    </svg>
  )
}
