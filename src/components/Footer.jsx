import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6'
import { identity, navPages, pages } from '../data/content'
import Link from './Link'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot-social">
        <Link to={identity.githubUrl} aria-label="GitHub">
          <FaGithub />
        </Link>
        <Link to={identity.linkedinUrl} aria-label="LinkedIn">
          <FaLinkedin />
        </Link>
        <Link to={`mailto:${identity.email}`} aria-label="Email">
          <FaEnvelope />
        </Link>
      </div>
      <ul className="foot-links">
        {[...navPages, 'leadership', 'resume'].map((k) => (
          <li key={k}>
            <Link to={pages[k].to}>{pages[k].nav ?? pages[k].title}</Link>
          </li>
        ))}
        <li>
          <Link to="/browse">Switch profiles</Link>
        </li>
      </ul>
      <p className="foot-fine">
        © {new Date().getFullYear()} {identity.first} {identity.last} · {identity.site}. A personal portfolio styled after a streaming service; not affiliated with Netflix.
      </p>
    </footer>
  )
}
