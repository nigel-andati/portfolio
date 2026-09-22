import { projects } from '../data/content'
import SectionHead from './SectionHead'
import { useReveal, useCountUp } from '../lib/hooks'

function Meter({ metric, active, delay }) {
  const decimals = metric.decimals ?? (Number.isInteger(metric.value) ? 0 : 2)
  const shown = useCountUp(metric.value, active, { decimals, duration: 1200 })

  return (
    <div className="meter">
      <div className="meter-top">
        <span className="meter-label">{metric.label}</span>
        <span className="t-mono text-[0.6875rem] tracking-[0.1em] uppercase text-[var(--bone-mute)]">
          {metric.invert ? 'lower is better' : 'measured'}
        </span>
      </div>
      <div className="mt-2">
        <span className="meter-value">
          {decimals === 0 ? Math.round(shown).toLocaleString('en-US') : shown.toFixed(decimals)}
          {metric.suffix}
        </span>
        <span className="meter-unit">{metric.unit}</span>
      </div>
      <div
        className="meter-bar"
        data-in={active}
        style={{ '--fill': `${metric.fill * 100}%`, '--d': `${delay}ms` }}
      >
        <span />
      </div>
    </div>
  )
}

function Dossier({ project, offset }) {
  const [ref, inView] = useReveal({ threshold: 0.08 })

  const Title = project.href ? 'a' : 'span'
  const titleProps = project.href
    ? { href: project.href, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <article className="dos" data-offset={offset} ref={ref}>
      <div className="dos-grid">
        <div>
          <div
            className="flex items-baseline gap-4 rise"
            data-in={inView}
          >
            <span className="dos-index">{project.index}</span>
            <span className="flex-1 h-px bg-[var(--rule)]" />
            {project.href && (
              <span className="t-mono text-[0.6875rem] tracking-[0.12em] uppercase text-[var(--bone-mute)]">
                Live ↗
              </span>
            )}
          </div>

          <h3 className="t-display dos-title mt-5 wipe" data-in={inView}>
            <Title {...titleProps}>{project.title}</Title>
          </h3>

          <p className="dos-kicker rise" data-in={inView} style={{ '--d': '120ms' }}>
            {project.kicker}
          </p>

          <p
            className="t-body max-w-[62ch] mt-7 rise"
            data-in={inView}
            style={{ '--d': '200ms' }}
          >
            {project.body}
          </p>

          <div className="chiprow mt-7 rise" data-in={inView} style={{ '--d': '260ms' }}>
            {project.stack.map((s) => (
              <span className="chip" key={s}>
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:pt-14">
          {project.metrics.map((m, i) => (
            <Meter key={m.label} metric={m} active={inView} delay={240 + i * 140} />
          ))}
        </div>
      </div>
    </article>
  )
}

export default function Work() {
  return (
    <section id="dossier" className="bay pt-24 lg:pt-32">
      <SectionHead
        num="04"
        title="Selected Work"
        meta={`${String(projects.length).padStart(2, '0')} builds`}
      />
      <div>
        {projects.map((p, i) => (
          <Dossier key={p.index} project={p} offset={i % 2 === 1} />
        ))}
      </div>
    </section>
  )
}
