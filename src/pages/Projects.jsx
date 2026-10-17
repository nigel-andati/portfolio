import { identity, projects } from '../data/content'
import PageHead from '../components/PageHead'
import PageShell from '../components/PageShell'
import Poster from '../components/Poster'
import Link from '../components/Link'

export default function Projects({ path }) {
  return (
    <PageShell path={path} title="Projects">
      <div className="page">
        <PageHead title="Projects" badge="Films">
          <p>Systems, agents and retrieval — each with the number that matters.</p>
        </PageHead>

        <ul className="films">
          {projects.map((p, i) => (
            <li key={p.index}>
              <Link to={`/projects/${p.index}`} className="film">
                <span className="film-rank" aria-hidden="true">
                  {i + 1}
                </span>
                <Poster art={p.art} title={p.title} kicker={p.kicker} badge="Film" />
                <span className="film-info">
                  <h2 className="film-title">{p.title}</h2>
                  <span className="film-kicker">{p.kicker}</span>
                  <span className="film-metrics">
                    {p.metrics.map((m) => (
                      <span key={m.label}>
                        <strong>{m.value}</strong> {m.unit}
                      </span>
                    ))}
                  </span>
                  <span className="genres">
                    {p.stack.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </span>
                  <span className="film-more">Details ›</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="page-note">
          More on <Link to={identity.githubUrl}>{identity.github} ↗</Link>
        </p>
      </div>
    </PageShell>
  )
}
