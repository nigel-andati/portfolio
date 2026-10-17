import { useEffect } from 'react'
import Logo from '../components/Logo'
import { navigate } from '../lib/router'

const reduced = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

/** Opening ident: the wordmark swells, then hands off to "Who's watching?". */
export default function Intro() {
  useEffect(() => {
    document.title = 'Nigel Andati — Software Engineer · AI/ML · Backend & Systems'
    const id = setTimeout(() => navigate('/browse', { replace: true }), reduced() ? 700 : 2600)
    return () => clearTimeout(id)
  }, [])

  const skip = () => navigate('/browse', { replace: true })

  return (
    <main className="intro" id="main" onClick={skip}>
      <h1 className="sr-only">Nigel Andati — Software Engineer, AI/ML, Backend &amp; Systems</h1>
      <Logo className="intro-logo" title={false} />
      <button type="button" className="intro-skip" onClick={skip}>
        Skip intro
      </button>
    </main>
  )
}
