import { identity } from '../data/content'

/** Wordmark set on a shallow arc, the way a streaming logo bows. */
export default function Logo({ className = '', title = true }) {
  const text = `${identity.first} ${identity.last}`.toUpperCase()
  return (
    <svg className={`logo ${className}`} viewBox="0 0 520 96" role={title ? 'img' : undefined} aria-label={title ? `${identity.first} ${identity.last}` : undefined} aria-hidden={title ? undefined : true}>
      <path id="logo-arc" d="M 6 84 Q 260 58 514 84" fill="none" />
      <text>
        <textPath href="#logo-arc" startOffset="50%" textAnchor="middle">
          {text}
        </textPath>
      </text>
    </svg>
  )
}
