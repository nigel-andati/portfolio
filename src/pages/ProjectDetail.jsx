import { FaArrowLeft, FaGithub, FaPlay } from 'react-icons/fa6'
import { identity, projects } from '../data/content'
import PageShell from '../components/PageShell'
import Poster from '../components/Poster'
import Row from '../components/Row'
import Link from '../components/Link'

export default function ProjectDetail({ path, project }) {
  const others = projects
    .filter((p) => p !== project)
    .map((p) => ({ to: `/projects/${p.index}`, title: p.title, kicker: p.kicker, meta: `${p.metrics[0].value} ${p.metrics[0].unit}`, art: p.art }))

  return (
    <PageShell path={path} title={project.title}>
      <article className="page title-page">
        <Link to="/projects" className="back">
          <FaArrowLeft aria-hidden="true" /> All projects
        </Link>

        <div className="title-grid">
          <div className="title-art">
            <Poster art={project.art} title={project.title} kicker={project.kicker} badge="Film" />
          </div>
          <div>
            <p className="bill-badge">
              <b>NA</b> Film · {project.index}
            </p>
            <h1 className="title-name" tabIndex={-1}>
              {project.title}
            </h1>
            <p className="title-kicker">{project.kicker}</p>

            <dl className="title-metrics">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <dt>{m.label}</dt>
                  <dd>
                    <strong>{m.value}</strong> {m.unit}
                  </dd>
                </div>
              ))}
            </dl>

            <dl className="title-facts">
              <div>
                <dt>The problem</dt>
                <dd>{project.problem}</dd>
              </div>
              <div>
                <dt>What I built</dt>
                <dd>{project.built}</dd>
              </div>
              <div>
                <dt>Stack</dt>
                <dd className="genres">
                  {project.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </dd>
              </div>
            </dl>

            <div className="bill-actions">
              {project.href && (
                <Link to={project.href} className="btn" data-variant="play">
                  <FaPlay aria-hidden="true" /> Live demo
                </Link>
              )}
              <Link to={identity.githubUrl} className="btn" data-variant={project.href ? 'info' : 'play'}>
                <FaGithub aria-hidden="true" /> GitHub
              </Link>
            </div>
          </div>
        </div>
      </article>
      <div className="rows">
        <Row title="More Like This" items={others} />
      </div>
    </PageShell>
  )
}
