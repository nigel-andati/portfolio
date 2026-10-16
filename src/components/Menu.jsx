import { useEffect, useId, useRef, useState } from 'react'

/** Disclosure button + popover list. Closes on Escape, outside click, or choosing an item. */
export default function Menu({ label, button, children, align = 'left', className = '' }) {
  const [open, setOpen] = useState(false)
  const root = useRef(null)
  const id = useId()

  useEffect(() => {
    if (!open) return
    const onDown = (e) => !root.current?.contains(e.target) && setOpen(false)
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        root.current?.querySelector('button')?.focus()
      }
    }
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className={`menu ${className}`} ref={root}>
      <button
        type="button"
        className="menu-btn"
        aria-expanded={open}
        aria-controls={id}
        aria-label={label}
        onClick={() => setOpen((v) => !v)}
      >
        {button}
      </button>
      {open && (
        <div className="menu-pop" data-align={align} id={id} onClick={(e) => e.target.closest('a') && setOpen(false)}>
          {children}
        </div>
      )}
    </div>
  )
}
