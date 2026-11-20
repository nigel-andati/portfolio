import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6'
import { identity, sections } from '../data/content'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot-social">
        <a href={identity.githubUrl} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
          <FaGithub aria-hidden="true" />
        </a>
        <a href={identity.linkedinUrl} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <FaLinkedin aria-hidden="true" />
        </a>
        <a href={`mailto:${identity.email}`} aria-label={`Email ${identity.email}`}>
          <FaEnvelope aria-hidden="true" />
        </a>
      </div>
      <ul className="foot-links">
        {sections.map((s) => (
          <li key={s.id}>
            <a href={`#${s.id}`}>{s.label}</a>
          </li>
        ))}
      </ul>
      <p className="foot-fine">
        © {new Date().getFullYear()} {identity.first} {identity.last} · {identity.site}
      </p>
    </footer>
  )
}
