import { useEffect, useRef, useState } from 'react'

const supportsIO = typeof IntersectionObserver !== 'undefined'

function readMotionPreference() {
  if (typeof window === 'undefined' || !window.matchMedia) return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/** Reveal-on-scroll. Returns [ref, inView]; fires once. */
export function useReveal(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(!supportsIO)

  useEffect(() => {
    const el = ref.current
    if (!el || !supportsIO) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: options.threshold ?? 0.12, rootMargin: options.rootMargin ?? '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [options.threshold, options.rootMargin])

  return [ref, inView]
}

/** Tracks the user's motion preference, live. */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(readMotionPreference)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const on = (e) => setReduced(e.matches)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])

  return reduced
}

/** Mechanical count-up for readouts. */
export function useCountUp(target, active, { duration = 1100, decimals = 0 } = {}) {
  const [value, setValue] = useState(0)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (!active) return
    let raf
    const start = performance.now()
    const tick = (now) => {
      const t = reduced ? 1 : Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(Number((target * eased).toFixed(decimals)))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, active, duration, decimals, reduced])

  return value
}
