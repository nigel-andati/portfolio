import { useEffect, useState } from 'react'

const EVENT = 'na:navigate'

export function navigate(to, { replace = false } = {}) {
  if (to === window.location.pathname + window.location.hash) return
  window.history[replace ? 'replaceState' : 'pushState']({}, '', to)
  window.dispatchEvent(new Event(EVENT))
}

/** Current pathname, kept in sync with pushState and the back button. */
export function usePath() {
  const [path, setPath] = useState(() => window.location.pathname)
  useEffect(() => {
    const sync = () => setPath(window.location.pathname)
    window.addEventListener('popstate', sync)
    window.addEventListener(EVENT, sync)
    return () => {
      window.removeEventListener('popstate', sync)
      window.removeEventListener(EVENT, sync)
    }
  }, [])
  return path
}
