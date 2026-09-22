import { skills } from '../data/content'
import SectionHead from './SectionHead'
import { useReveal } from '../lib/hooks'

const total = skills.reduce((n, g) => n + g.items.length, 0)

export default function Matrix() {
  const [ref, inView] = useReveal({ threshold: 0.05 })

  return (
    <section id="matrix" className="bay pt-24 lg:pt-32" ref={ref}>
      <SectionHead num="05" title="Stack" meta={`${total} entries · 07 groups`} />

      <div className="pt-4">
        {skills.map((group, i) => (
          <div
            className="mx-row rise"
            key={group.label}
            data-in={inView}
            style={{ '--d': `${i * 60}ms` }}
          >
            <span className="mx-key">{group.label}</span>
            <div className="mx-items">
              {group.items.map((item) => (
                <span className="mx-item" key={item}>
                  {item}
                </span>
              ))}
            </div>
            <span className="mx-count">{String(group.items.length).padStart(2, '0')}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
