import { pages, skills } from '../data/content'
import PageHead from '../components/PageHead'
import PageShell from '../components/PageShell'
import Row from '../components/Row'

export default function Skills({ path }) {
  return (
    <PageShell path={path} title="Skills">
      <div className="page">
        <PageHead title="Skills">
          <p>{pages.skills.meta}, grouped by genre.</p>
        </PageHead>

        <div className="genre-list">
          {skills.map((g) => (
            <section className="genre" key={g.label} aria-labelledby={`g-${g.label}`}>
              <h2 id={`g-${g.label}`} className="genre-title">
                {g.label}
              </h2>
              <ul className="genre-items">
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
      <div className="rows">
        <Row title="See Them in Action" items={['projects', 'experience'].map((k) => pages[k])} />
      </div>
    </PageShell>
  )
}
