import { education, experience, identity, pages } from '../data/content'
import PageShell from '../components/PageShell'
import Row from '../components/Row'
import portrait from '../assets/portrait.jpg'

export default function About({ path }) {
  return (
    <PageShell path={path} title="Education & About">
      <article className="page doc">
        <div className="doc-grid">
          <div className="doc-portrait">
            <img src={portrait} alt={`Portrait of ${identity.first} ${identity.last}`} width="480" height="480" />
          </div>
          <div>
            <p className="bill-badge">
              <b>NA</b> Documentary
            </p>
            <h1 className="phead-title" tabIndex={-1}>
              Education &amp; About
            </h1>

            <dl className="doc-facts">
              {[
                ['School', education.school],
                ['Degree', education.degree],
                ['Graduation', education.grad],
                ['Based', education.location],
                ['Roles shipped', `${experience.length} engineering positions`],
                ['Focus', identity.discipline],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>

            <p className="doc-lede">{identity.lede}</p>
            {identity.brief.map((para, i) => (
              <p className="doc-body" key={i}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </article>
      <div className="rows">
        <Row title="Up Next" items={['leadership', 'experience', 'contact'].map((k) => pages[k])} />
      </div>
    </PageShell>
  )
}
