import { useState } from 'react'
import {
  FaArrowUpRightFromSquare,
  FaEnvelope,
  FaFilePdf,
  FaGithub,
  FaLinkedin,
  FaLocationDot,
} from 'react-icons/fa6'
import {
  awards,
  education,
  experience,
  identity,
  interests,
  projectCategories,
  research,
  sections,
  skills,
} from './data/content'
import Emph from './components/Emph'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Section from './components/Section'
import { useActiveSection } from './lib/useActiveSection'

const PAGE_SIZE = 3

const socials = [
  { label: 'GitHub', href: identity.githubUrl, Icon: FaGithub },
  { label: 'LinkedIn', href: identity.linkedinUrl, Icon: FaLinkedin },
  { label: `Email ${identity.email}`, href: `mailto:${identity.email}`, Icon: FaEnvelope },
  { label: 'Résumé (PDF)', href: identity.resume, Icon: FaFilePdf },
]

function ProjectCard({ project }) {
  return (
    <article className="card project">
      <div className="project-top">
        <div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-kicker">{project.kicker}</p>
        </div>
        {project.href && (
          <a
            href={project.href}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Live demo of ${project.title} (opens in a new tab)`}
          >
            <FaArrowUpRightFromSquare aria-hidden="true" /> Live demo
          </a>
        )}
      </div>
      <p className="project-line">
        <strong>Problem:</strong> {project.problem}
      </p>
      <p className="project-line">
        <strong>Built:</strong> {project.built}
      </p>
      <dl className="metrics">
        {project.metrics.map((m) => (
          <div key={m.label}>
            <dt>{m.label}</dt>
            <dd>
              <strong>{m.value}</strong> {m.unit}
            </dd>
          </div>
        ))}
      </dl>
      <p className="tags">
        <span className="sr-only">Technologies: </span>
        {project.stack.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </p>
    </article>
  )
}

function ProjectCategory({ category }) {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? category.items : category.items.slice(0, PAGE_SIZE)
  const hidden = category.items.length - visible.length

  return (
    <div className="category">
      <div className="category-head">
        <h3 className="category-title">{category.title}</h3>
        <span className="count" aria-label={`${category.items.length} projects`}>
          {category.items.length}
        </span>
      </div>
      <div className="cards">
        {visible.map((p) => (
          <ProjectCard key={p.index ?? p.title} project={p} />
        ))}
      </div>
      {category.items.length > PAGE_SIZE && (
        <button
          type="button"
          className="show-all"
          aria-expanded={expanded}
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? 'Show less ↑' : `Show all ${category.title} (${hidden} more) →`}
        </button>
      )}
    </div>
  )
}

export default function App() {
  const active = useActiveSection(sections.map((s) => s.id))

  return (
    <>
      <a href="#main" className="skip">
        Skip to content
      </a>
      <Navbar active={active} />
      <main id="main">
        {/* ---------- hero ---------- */}
        <div className="hero" id="top">
          <p className="hero-eyebrow">
            <span className="live-dot" aria-hidden="true" />
            {identity.status}
          </p>
          <h1 className="hero-name">
            {identity.first} {identity.last}
          </h1>
          <p className="hero-tagline">{identity.tagline}</p>
          <p className="hero-summary">{identity.summary}</p>
          <ul className="hero-social" aria-label="Social and contact links">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} aria-label={s.label} {...(s.href.endsWith('.pdf') || s.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                  <s.Icon aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-red">
              View projects
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
          </div>
        </div>

        <div className="column">
          {/* ---------- summary ---------- */}
          <Section id="summary" title="Summary" intro={identity.lede}>
            {identity.brief.map((para, i) => (
              <p className="body" key={i}>
                {para}
              </p>
            ))}
          </Section>

          {/* ---------- skills ---------- */}
          <Section
            id="skills"
            title="Skills & Technologies"
            intro={`${skills.reduce((n, g) => n + g.items.length, 0)} entries across ${skills.length} groups.`}
          >
            <div className="skill-groups">
              {skills.map((g) => (
                <div className="skill-group" key={g.label}>
                  <h3 className="skill-label">{g.label}</h3>
                  <ul className="tags" aria-label={`${g.label} skills`}>
                    {g.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          {/* ---------- education ---------- */}
          <Section id="education" title="Education">
            <article className="card edu">
              <h3 className="edu-school">{education.school}</h3>
              <p className="edu-degree">{education.degree}</p>
              <p className="edu-meta">
                <span>{education.grad}</span>
                <span aria-hidden="true"> · </span>
                <span>
                  <FaLocationDot aria-hidden="true" /> {education.location}
                </span>
              </p>
              <p className="body">Focus areas follow the work below: backend systems, low-latency simulation, and AI infrastructure.</p>
            </article>
          </Section>

          {/* ---------- projects ---------- */}
          <Section
            id="projects"
            title="Projects"
            intro="Grouped by category. Each entry states the problem, what was built, and the number that matters."
          >
            {projectCategories.map((c) => (
              <ProjectCategory key={c.id} category={c} />
            ))}
            <p className="note">
              More on{' '}
              <a href={identity.githubUrl} target="_blank" rel="noopener noreferrer">
                {identity.github} ↗
              </a>
            </p>
          </Section>

          {/* ---------- research ---------- */}
          <Section
            id="research"
            title="Research"
            intro="Independent, implementation-led investigation — code and measurements first. No peer-reviewed publications; these are open research threads, not claimed papers."
          >
            <div className="cards">
              {research.map((r) => (
                <article className="card" key={r.title}>
                  <p className="thread-area">{r.area}</p>
                  <h3 className="project-title">{r.title}</h3>
                  <p className="body">{r.body}</p>
                </article>
              ))}
            </div>
          </Section>

          {/* ---------- experience ---------- */}
          <Section id="experience" title="Experience" intro={`${experience.length} roles · 2024 — now`}>
            <ol className="jobs">
              {experience.map((job) => (
                <li className="card job" key={job.org}>
                  <div className="job-head">
                    <div>
                      <h3 className="job-org">{job.org}</h3>
                      <p className="job-role">{job.role}</p>
                    </div>
                    <p className="job-when">
                      <strong>{job.span}</strong>
                      <span>{job.location}</span>
                    </p>
                  </div>
                  <ul className="bullets">
                    {job.bullets.map((b, i) => (
                      <li key={i}>
                        <Emph text={b} />
                      </li>
                    ))}
                  </ul>
                  <p className="tags">
                    <span className="sr-only">Technologies: </span>
                    {job.stack.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </p>
                </li>
              ))}
            </ol>
          </Section>

          {/* ---------- awards ---------- */}
          <Section id="awards" title="Awards & Achievements">
            <ul className="award-list">
              {awards.map((a) => (
                <li key={a.name}>
                  <strong>{a.name}</strong>
                  <span>{a.note}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* ---------- interests ---------- */}
          <Section id="interests" title="Interests" intro="Engineering interests, each evidenced by shipped work above.">
            <ul className="interest-grid">
              {interests.map((t) => (
                <li className="card" key={t.name}>
                  <h3 className="project-title">{t.name}</h3>
                  <p className="body">{t.note}</p>
                </li>
              ))}
            </ul>
          </Section>

          {/* ---------- contact ---------- */}
          <Section
            id="contact"
            title="Contact"
            intro={`Based in ${education.location}. Open to software engineering internships and roles across AI/ML, backend and systems.`}
          >
            <div className="hero-actions">
              <a href={`mailto:${identity.email}`} className="btn btn-red">
                Email me
              </a>
              <a href={identity.linkedinUrl} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
              </a>
              <a href={identity.githubUrl} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
            </div>
            <ul className="contact-list">
              <li>
                <FaEnvelope aria-hidden="true" /> <a href={`mailto:${identity.email}`}>{identity.email}</a>
              </li>
              <li>
                <FaLocationDot aria-hidden="true" /> {education.location}
              </li>
              <li>
                <FaFilePdf aria-hidden="true" />{' '}
                <a href={identity.resume} target="_blank" rel="noopener noreferrer">
                  Résumé (PDF)
                </a>
              </li>
            </ul>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
