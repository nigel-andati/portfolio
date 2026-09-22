import { identity, education } from '../data/content'
import SectionHead from './SectionHead'
import { useReveal } from '../lib/hooks'
import portrait from '../assets/portrait.jpg'

export default function Brief() {
  const [ref, inView] = useReveal()

  return (
    <section id="brief" className="bay pt-20 lg:pt-28" ref={ref}>
      <SectionHead num="02" title="Brief" meta="Durham, NC" />

      <div className="grid lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] gap-10 lg:gap-16 pt-12 lg:pt-16">
        <div>
          <p
            className="t-editorial text-[1.75rem] md:text-[2.5rem] leading-[1.24] text-[var(--bone)] max-w-[26ch] rise"
            data-in={inView}
          >
            {identity.lede}
          </p>

          <div className="grid gap-6 mt-10 max-w-[64ch]">
            {identity.brief.map((para, i) => (
              <p
                key={i}
                className="t-body rise"
                data-in={inView}
                style={{ '--d': `${160 + i * 110}ms` }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* ID plate + marginalia */}
        <aside className="lg:pt-2">
          <div className="max-w-[20rem] rise" data-in={inView} style={{ '--d': '220ms' }}>
            <div className="plate">
              <img src={portrait} alt={`${identity.first} ${identity.last}`} loading="lazy" />
              <div className="plate-meta">
                <span>{identity.monogram} · 001</span>
                <span>{education.location}</span>
              </div>
            </div>

            <dl className="mt-7 border-t border-[var(--rule)]">
              {[
                ['Institution', education.school],
                ['Degree', education.degree],
                ['Conferral', education.grad],
                ['Roles shipped', '04 engineering positions'],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-baseline justify-between gap-4 py-2.5 border-b border-[var(--rule)]"
                >
                  <dt className="t-mono text-[0.6875rem] tracking-[0.14em] uppercase text-[var(--bone-mute)]">
                    {k}
                  </dt>
                  <dd className="t-mono text-[0.875rem] text-[var(--bone)] text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </div>
    </section>
  )
}
