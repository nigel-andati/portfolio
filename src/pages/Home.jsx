import { useEffect } from 'react'
import { FaCircleInfo, FaPlay } from 'react-icons/fa6'
import { education, identity, pages, projects } from '../data/content'
import PageShell from '../components/PageShell'
import Row from '../components/Row'
import Link from '../components/Link'
import { saveProfile } from '../lib/profile'
import portrait from '../assets/portrait.jpg'

const builds = projects.map((p) => ({
  to: `/projects/${p.index}`,
  title: p.title,
  kicker: p.kicker,
  meta: `${p.metrics[0].value} ${p.metrics[0].unit}`,
  art: p.art,
}))

export default function Home({ path, profile }) {
  useEffect(() => saveProfile(profile.id), [profile.id])

  return (
    <PageShell path={path}>
      <section className="bill" aria-labelledby="bill-title">
        <div className="bill-art" aria-hidden="true">
          <img src={portrait} alt="" />
        </div>
        <div className="bill-copy">
          <p className="bill-badge">
            <b>NA</b> Series
          </p>
          <h1 className="bill-title" id="bill-title" tabIndex={-1}>
            {identity.first} {identity.last}
          </h1>
          <p className="bill-tagline">{identity.tagline}</p>
          <p className="bill-now">
            <span className="bill-now-tag">Now</span>
            {identity.status.replace('Currently shipping', 'Shipping')}
          </p>
          <p className="bill-summary">{identity.summary}</p>
          <div className="bill-actions">
            <Link to={profile.primary.to} className="btn" data-variant="play">
              <FaPlay aria-hidden="true" /> {profile.primary.label}
            </Link>
            <Link to={profile.secondary.to} className="btn" data-variant="info">
              <FaCircleInfo aria-hidden="true" /> {profile.secondary.label}
            </Link>
          </div>
        </div>
        <p className="bill-rating" aria-label={`${education.school}, ${education.grad}`}>
          Duke &rsquo;28
        </p>
      </section>

      <div className="rows">
        {profile.rows.map((r) =>
          r.top ? (
            <Row key={r.title} title={r.title} items={builds} ranked />
          ) : (
            <Row key={r.title} title={r.title} items={r.items.map((k) => pages[k])} progress={r.progress} />
          ),
        )}
      </div>
    </PageShell>
  )
}
