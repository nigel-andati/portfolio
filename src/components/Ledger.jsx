import { experience } from '../data/content'
import SectionHead from './SectionHead'
import { useReveal } from '../lib/hooks'

export default function Ledger() {
  const [ref, inView] = useReveal({ threshold: 0.05 })

  return (
    <section id="ledger" className="bay pt-24 lg:pt-32" ref={ref}>
      <SectionHead num="03" title="Experience" meta={`${String(experience.length).padStart(2, '0')} records`} />

      <div className="pt-2">
        {experience.map((job, i) => (
          <article
            className="led-row rise"
            key={job.org}
            data-in={inView}
            style={{ '--d': `${i * 90}ms` }}
          >
            <div className="led-idx">{String(experience.length - i).padStart(2, '0')}</div>

            <div>
              <h3 className="led-org">{job.org}</h3>
              <p className="led-role">{job.role}</p>
              <div className="chiprow lg:hidden">
                {job.stack.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <ul className="led-bullets">
                {job.bullets.map((b, bi) => (
                  <li key={bi}>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="chiprow hidden lg:flex">
                {job.stack.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="led-meta">
              <strong>{job.span}</strong>
              <span>{job.location}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
