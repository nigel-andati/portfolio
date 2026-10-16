import { leadership, pages } from '../data/content'
import PageHead from '../components/PageHead'
import PageShell from '../components/PageShell'
import Poster from '../components/Poster'
import Row from '../components/Row'

const schemes = ['gold', 'crimson', 'teal', 'royal', 'ember', 'violet', 'slate']

export default function Leadership({ path }) {
  return (
    <PageShell path={path} title="Leadership">
      <div className="page">
        <PageHead title="Leadership">
          <p>Fellowships, community roles and sport.</p>
        </PageHead>
        <ul className="lead-grid">
          {leadership.map((l, i) => (
            <li className="lead" key={l.name}>
              <Poster art={{ scheme: schemes[i % schemes.length], glyph: String(i + 1).padStart(2, '0') }} title={l.name} showTitle={false} />
              <h2 className="lead-name">{l.name}</h2>
              <p className="lead-note">{l.note}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="rows">
        <Row title="Up Next" items={['about', 'contact'].map((k) => pages[k])} />
      </div>
    </PageShell>
  )
}
