import { useEffect, useRef, useState } from 'react'

const canTrack = () => {
  if (typeof window === 'undefined' || !window.matchMedia) return false
  return (
    window.matchMedia('(pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/**
 * Instrument crosshair: two hairlines and a coordinate readout that track the
 * pointer. Fine pointers only — never on touch, never with reduced motion.
 */
export default function Crosshair() {
  const vRef = useRef(null)
  const hRef = useRef(null)
  const rRef = useRef(null)
  const wrapRef = useRef(null)
  const pos = useRef({ x: -100, y: -100, dirty: false })
  const [enabled] = useState(canTrack)

  useEffect(() => {
    if (!enabled) return

    let raf
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY, dirty: true }
      if (wrapRef.current) wrapRef.current.dataset.on = 'true'
    }
    const onLeave = () => {
      if (wrapRef.current) wrapRef.current.dataset.on = 'false'
    }

    const tick = () => {
      if (pos.current.dirty) {
        pos.current.dirty = false
        const { x, y } = pos.current
        if (vRef.current) vRef.current.style.transform = `translate3d(${x}px,0,0)`
        if (hRef.current) hRef.current.style.transform = `translate3d(0,${y}px,0)`
        if (rRef.current) {
          const flipX = x > window.innerWidth - 130
          const flipY = y > window.innerHeight - 44
          rRef.current.style.transform = `translate3d(${x + (flipX ? -118 : 12)}px,${
            y + (flipY ? -26 : 12)
          }px,0)`
          rRef.current.textContent = `X ${String(Math.round(x)).padStart(4, '0')}  Y ${String(
            Math.round(y),
          ).padStart(4, '0')}`
        }
      }
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div className="crosshair" ref={wrapRef} data-on="false" aria-hidden="true">
      <div className="crosshair-v" ref={vRef} />
      <div className="crosshair-h" ref={hRef} />
      <div className="crosshair-read" ref={rRef} />
    </div>
  )
}
