import { leadership } from '../data/content'
import SectionHead from './SectionHead'
import { useReveal } from '../lib/hooks'

export default function Signals() {
  const [ref, inView] = useReveal({ threshold: 0.05 })

  return (
    <section id="signals" className="bay pt-24 lg:pt-32" ref={ref}>
      <SectionHead
        num="06"
        title="Off-Hours"
        meta="Fellowships · leadership · sport"
      />

      <div className="sig mt-10">
        {leadership.map((item, i) => (
          <div
            className="sig-cell rise"
            key={item.name}
            data-in={inView}
            style={{ '--d': `${i * 55}ms` }}
          >
            <span className="t-mono text-[0.6875rem] tracking-[0.14em] text-[var(--signal)] block mb-3">
              {String(i + 1).padStart(2, '0')}
            </span>
            <p className="sig-name">{item.name}</p>
            <p className="sig-note">{item.note}</p>
          </div>
        ))}
        <div className="sig-cell" aria-hidden="true">
          <span className="t-mono text-[0.6875rem] tracking-[0.14em] text-[var(--bone-mute)] block mb-3">
            ——
          </span>
          <p className="sig-note leading-relaxed">
            End of record
          </p>
        </div>
      </div>
    </section>
  )
}
