import { FaChevronRight, FaEnvelope, FaFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa6'
import { education, identity } from '../data/content'
import PageShell from '../components/PageShell'
import Link from '../components/Link'

const channels = [
  { icon: FaEnvelope, label: 'Email', value: identity.email, to: `mailto:${identity.email}` },
  { icon: FaLinkedin, label: 'LinkedIn', value: identity.linkedin, to: identity.linkedinUrl },
  { icon: FaGithub, label: 'GitHub', value: identity.github, to: identity.githubUrl },
  { icon: FaFilePdf, label: 'Résumé', value: 'Nigel_Andati_Resume.pdf', to: identity.resume },
]

export default function Contact({ path }) {
  return (
    <PageShell path={path} title="Hire Me">
      <section className="hire">
        <h1 className="hire-title" tabIndex={-1}>
          Ready to hire? Let&rsquo;s talk.
        </h1>
        <p className="hire-sub">
          Software engineering internships and roles across AI/ML, backend and systems. Based in {education.location}.
        </p>
        <Link to={`mailto:${identity.email}`} className="btn hire-cta" data-variant="red">
          Email me <FaChevronRight aria-hidden="true" />
        </Link>
      </section>

      <div className="page">
        <ul className="channels">
          {channels.map((c) => (
            <li key={c.label}>
              <Link to={c.to} className="channel">
                <c.icon aria-hidden="true" className="channel-icon" />
                <span className="channel-label">{c.label}</span>
                <span className="channel-value">{c.value}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  )
}
