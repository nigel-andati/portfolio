import { useEffect, useId, useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { identity, sections } from '../data/content'

/** Sticky top bar: brand left, anchor links right, hamburger on small screens. */
export default function Navbar({ active }) {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  const menuId = useId()

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open ])

  return (
    <header className="topbar" data-solid={solid}>
      <a href="#top" className="brand" aria-label="Nigel Andati — back to top">
        <span className="brand-mark" aria-hidden="true">
          NA
        </span>
        <span className="brand-name">Nigel Andati</span>
      </a>

      <nav aria-label="Primary" className="topbar-links">
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`} aria-current={active === s.id ? 'true' : undefined}>
            {s.label}
          </a>
        ))}
      </nav>

      <div className="topbar-end">
        <a href={identity.resume} className="btn btn-red btn-sm" target="_blank" rel="noopener noreferrer">
          Résumé
        </a>
        <button
          type="button"
          className="topbar-toggle"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FaXmark aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav aria-label="Sections" className="topbar-menu" id={menuId}>
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-current={active === s.id ? 'true' : undefined}
              onClick={() => setOpen(false)}
            >
              {s.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
