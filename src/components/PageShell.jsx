import { useEffect } from 'react'
import { identity } from '../data/content'
import Footer from './Footer'
import Nav from './Nav'

/** Chrome shared by every browsing page: nav, landmark, footer, document title. */
export default function PageShell({ path, title, children }) {
  useEffect(() => {
    const name = `${identity.first} ${identity.last}`
    document.title = title ? `${title} — ${name}` : `${name} — ${identity.tagline}`
  }, [title])

  return (
    <>
      <Nav path={path} />
      <main id="main">{children}</main>
      <Footer />
    </>
  )
}
