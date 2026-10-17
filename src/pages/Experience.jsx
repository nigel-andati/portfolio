import { experience, pages, seasons } from '../data/content'
import Emph from '../components/Emph'
import PageHead from '../components/PageHead'
import PageShell from '../components/PageShell'
import Poster from '../components/Poster'
import Row from '../components/Row'

const initials = (org) =>
  org
    .split(/\s+/)
    .filter((w) => /^[A-Z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join('')

const schemes = ['crimson', 'teal', 'ember', 'royal']

export default function Experience({ path }) {
  let episode = 0
  return (
    <PageShell path={path} title="Professional">
      <div className="page">
        <PageHead title="Professional">
          <p>
            <span className="pill">{experience.length} roles</span>
            <span className="pill">2024 — now</span>
            <span className="pill">Backend · Full-stack · AI products</span>
          </p>
        </PageHead>

        {seasons.map(([year, jobs]) => (
          <section className="season" key={year} aria-labelledby={`season-${year}`}>
            <h2 className="season-title" id={`season-${year}`}>
              Season {year}
              <span>
                {jobs.length} {jobs.length === 1 ? 'episode' : 'episodes'}
              </span>
            </h2>
            <ol className="eps">
              {jobs.map((job) => {
                const n = ++episode
                return (
                  <li className="ep" key={job.org}>
                    <span className="ep-num" aria-hidden="true">
                      {n}
                    </span>
                    <div className="ep-thumb">
                      <Poster art={{ scheme: schemes[(n - 1) % schemes.length], glyph: initials(job.org) }} title={job.org} showTitle={false} />
                    </div>
                    <div className="ep-body">
                      <div className="ep-top">
                        <div>
                          <h3 className="ep-org">{job.org}</h3>
                          <p className="ep-role">{job.role}</p>
                        </div>
                        <p className="ep-when">
                          <strong>{job.span}</strong>
                          <span>{job.location}</span>
                        </p>
                      </div>
                      <ul className="ep-bullets">
                        {job.bullets.map((b, i) => (
                          <li key={i}>
                            <Emph text={b} />
                          </li>
                        ))}
                      </ul>
                      <p className="genres">
                        <span className="sr-only">Technologies: </span>
                        {job.stack.map((s) => (
                          <span key={s}>{s}</span>
                        ))}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ol>
          </section>
        ))}
      </div>
      <div className="rows">
        <Row title="Up Next" items={['projects', 'skills', 'resume'].map((k) => pages[k])} />
      </div>
    </PageShell>
  )
}
