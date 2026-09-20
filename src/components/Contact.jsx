import { identity } from '../data/content'
import SectionHead from './SectionHead'
import { useReveal } from '../lib/hooks'

const rows = [
  { k: 'Email', v: identity.email, href: `mailto:${identity.email}` },
  { k: 'GitHub', v: identity.github, href: identity.githubUrl },
  { k: 'LinkedIn', v: identity.linkedin, href: identity.linkedinUrl },
  { k: 'Résumé', v: 'Nigel_Andati_Resume.pdf', href: identity.resume },
]

export default function Contact() {
  const [ref, inView] = useReveal({ threshold: 0.08 })

  return (
    <footer id="contact" className="bay pt-24 lg:pt-32 pb-14" ref={ref}>
      <SectionHead num="07" title="Contact" meta="Durham, NC · UTC−05:00" />

      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-10 lg:gap-16 pt-12">
        <div>
          <p
            className="t-editorial text-[1.875rem] md:text-[2.625rem] leading-[1.22] text-[var(--bone)] max-w-[22ch] rise"
            data-in={inView}
          >
            If you are building something where the hard part is the hard part, write to me.
          </p>
          <a
            href={`mailto:${identity.email}`}
            className="act mt-9 rise"
            data-variant="solid"
            data-in={inView}
            style={{ '--d': '160ms' }}
          >
            <span>Start a conversation</span>
          </a>
        </div>

        <div className="rise" data-in={inView} style={{ '--d': '120ms' }}>
          {rows.map((r) => (
            <a
              key={r.k}
              href={r.href}
              target={r.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="cx-row"
            >
              <span className="cx-k">{r.k}</span>
              <span className="cx-v">{r.v}</span>
              <span className="cx-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-20 lg:mt-28 overflow-hidden">
        <p className="t-display sign-off select-none" aria-hidden="true">
          {identity.first} {identity.last}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-10 pt-5 border-t border-[var(--rule)]">
        <span className="t-mono text-[0.6875rem] tracking-[0.12em] uppercase text-[var(--bone-mute)]">
          © {new Date().getFullYear()} {identity.first} {identity.last} · {identity.site}
        </span>
        <span className="t-mono text-[0.6875rem] tracking-[0.12em] uppercase text-[var(--bone-mute)]">
          Set in Archivo, IBM Plex Mono & Instrument Serif
        </span>
      </div>
    </footer>
  )
}
