import { identity, education, ticker } from '../data/content'

const spec = [
  { k: 'Discipline', v: identity.discipline.replace(/ · /g, '\n') },
  { k: 'Reading for', v: `${education.degree}\n${education.school} · ${education.grad}` },
  { k: 'Based', v: `${education.location}\nUTC−05:00` },
]

export default function Masthead() {
  return (
    <section id="masthead" className="pt-[3.25rem] lg:pt-0">
      <div className="bay flex flex-col justify-between lg:min-h-[92vh] pt-10 lg:pt-20 pb-12 lg:pb-16">
        <div className="flex items-baseline justify-between gap-4">
          <span className="t-label">{identity.monogram} — Portfolio · MMXXVI</span>
          <span className="t-label">{identity.site}</span>
        </div>

        <div className="py-14 lg:py-10">
          <h1 className="t-display mast-name">
            <span>{identity.first}</span>
            <span className="mast-outline">{identity.last}</span>
          </h1>

          <p
            className="t-editorial t-editorial-i mast-lede"
            style={{ animation: 'mast-in 1s var(--ease) 0.5s both' }}
          >
            Software engineer. I care most about the layer where correctness gets expensive.
          </p>
        </div>

        <div style={{ animation: 'mast-in 0.9s var(--ease) 0.7s both' }}>
          <div className="spec-row mb-8">
            {spec.map((s) => (
              <div className="spec-cell" key={s.k}>
                <span className="spec-cell-k">{s.k}</span>
                <span className="spec-cell-v whitespace-pre-line">{s.v}</span>
              </div>
            ))}
            <div className="spec-cell">
              <span className="spec-cell-k">Now</span>
              <span className="spec-cell-v">
                <span className="pip" />
                {identity.status}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <a
              href={identity.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="act"
              data-variant="solid"
            >
              <span>Resume · PDF</span>
            </a>
            <a href={identity.githubUrl} target="_blank" rel="noopener noreferrer" className="act">
              <span>GitHub</span>
            </a>
            <a href={identity.linkedinUrl} target="_blank" rel="noopener noreferrer" className="act">
              <span>LinkedIn</span>
            </a>
            <a href={`mailto:${identity.email}`} className="act">
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>

      <div className="ticker">
        <div className="ticker-track">
          {[0, 1].map((dup) => (
            <div className="flex" key={dup} aria-hidden={dup === 1}>
              {ticker.map((t) => (
                <span className="ticker-item" key={`${dup}-${t}`}>
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
