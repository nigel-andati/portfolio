import { useEffect, useRef } from 'react'
import { projects } from './data/content'
import { usePath } from './lib/router'
import { findProfile } from './lib/profile'
import About from './pages/About'
import Browse from './pages/Browse'
import Contact from './pages/Contact'
import Experience from './pages/Experience'
import Home from './pages/Home'
import Intro from './pages/Intro'
import Leadership from './pages/Leadership'
import NotFound from './pages/NotFound'
import ProjectDetail from './pages/ProjectDetail'
import Projects from './pages/Projects'
import Skills from './pages/Skills'

const simple = {
  '/': Intro,
  '/browse': Browse,
  '/experience': Experience,
  '/projects': Projects,
  '/skills': Skills,
  '/about': About,
  '/leadership': Leadership,
  '/contact': Contact,
}

function route(path) {
  const clean = path.replace(/\/+$/, '') || '/'
  if (simple[clean]) return [simple[clean], {}]

  const prof = clean.match(/^\/profile\/([\w-]+)$/)
  if (prof && findProfile(prof[1])) return [Home, { profile: findProfile(prof[1]) }]

  const proj = clean.match(/^\/projects\/(\d{3})$/)
  const project = proj && projects.find((p) => p.index === proj[1])
  if (project) return [ProjectDetail, { project }]

  return [NotFound, {}]
}

export default function App() {
  const path = usePath()
  const first = useRef(true)
  const [Page, props] = route(path)

  // After client-side navigation: start at the top and move focus to the new page's heading.
  useEffect(() => {
    if (first.current) {
      first.current = false
      return
    }
    window.scrollTo(0, 0)
    document.querySelector('main h1')?.focus({ preventScroll: true })
  }, [path])

  return (
    <>
      <a href="#main" className="skip">
        Skip to content
      </a>
      <Page key={path} path={path} {...props} />
    </>
  )
}
