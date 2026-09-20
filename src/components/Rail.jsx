import { useEffect, useRef, useState } from 'react'
import { identity, sections } from '../data/content'

function useActiveSection() {
  const [active, setActive] = useState(sections[0].id)

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean)
    if (!els.length) return

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0, 0.2, 0.6] },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return active
}

function useScrollProgress() {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    let raf
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setPct(max > 0 ? Math.min(1, window.scrollY / max) : 0)
    }
    raf = requestAnimationFrame(onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
  return pct
}

const easternTime = () =>
  new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'America/New_York',
  }).format(new Date())

function useClock() {
  const [t, setT] = useState(easternTime)
  useEffect(() => {
    const id = setInterval(() => setT(easternTime()), 20000)
    return () => clearInterval(id)
  }, [])
  return t
}

export default function Rail() {
  const active = useActiveSection()
  const pct = useScrollProgress()
  const clock = useClock()
  const [open, setOpen] = useState(false)
  const sheetRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      {/* desktop rail */}
      <div className="rail-progress" style={{ height: `${pct * 100}%` }} aria-hidden="true" />

      <nav className="rail" aria-label="Section index">
        <a
          href="#masthead"
          className="t-mono text-[0.8125rem] font-medium tracking-[0.06em] text-[var(--bone)] hover:text-[var(--signal)] transition-colors"
        >
          {identity.monogram}
          <span className="text-[var(--signal)]">/</span>
        </a>

        <div className="rail-index">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rail-tick"
              data-active={active === s.id}
              aria-current={active === s.id ? 'true' : undefined}
            >
              {s.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center gap-3">
          <span className="t-mono text-[0.6875rem] tracking-[0.08em] text-[var(--bone-mute)]">
            {String(Math.round(pct * 100)).padStart(2, '0')}
          </span>
          <span className="w-3 h-px bg-[var(--rule-hi)]" />
          <span
            className="t-mono text-[0.6875rem] tracking-[0.08em] text-[var(--bone-mute)] [writing-mode:vertical-rl]"
            title="Eastern Time"
          >
            {clock} ET
          </span>
        </div>
      </nav>

      {/* mobile bar */}
      <div className="topbar">
        <a href="#masthead" className="t-mono text-sm font-medium tracking-[0.06em]">
          {identity.monogram}
          <span className="text-[var(--signal)]">/</span>
        </a>
        <div className="flex items-center gap-4">
          <span className="t-mono text-[0.6875rem] tracking-[0.12em] uppercase text-[var(--bone-mute)]">
            {String(Math.round(pct * 100)).padStart(2, '0')}%
          </span>
          <button
            onClick={() => setOpen((v) => !v)}
            className="t-mono text-[0.75rem] tracking-[0.14em] uppercase text-[var(--bone)]"
            aria-expanded={open}
          >
            {open ? 'Close' : 'Index'}
          </button>
        </div>
      </div>

      {open && (
        <div className="sheet" ref={sheetRef}>
          {sections.map((s, i) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4 py-3.5 border-b border-[var(--rule)]"
              style={{ animation: `mast-in 0.4s var(--ease) ${i * 40}ms both` }}
            >
              <span className="t-mono text-[0.75rem] tracking-[0.14em] text-[var(--signal)]">
                {s.num}
              </span>
              <span className="t-display text-[1.75rem]">{s.label}</span>
            </a>
          ))}
          <a
            href={identity.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="act mt-7 self-start"
            onClick={() => setOpen(false)}
            data-variant="solid"
          >
            <span>Resume · PDF</span>
          </a>
        </div>
      )}
    </>
  )
}
