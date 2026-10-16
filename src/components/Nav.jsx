import { useEffect, useState } from 'react'
import { FaBars, FaCaretDown } from 'react-icons/fa6'
import { identity, navPages, pages, profiles } from '../data/content'
import Link from './Link'
import { getProfile } from '../lib/profile'
import Avatar from './Avatar'
import Logo from './Logo'
import Menu from './Menu'

export default function Nav({ path }) {
  const [solid, setSolid] = useState(false)
  const profile = getProfile()
  const home = `/profile/${profile.id}`

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [{ to: home, nav: 'Home' }, ...navPages.map((k) => pages[k])]
  const isCurrent = (to) => (to === home ? path.startsWith('/profile/') : path.startsWith(to))

  return (
    <header className="nav" data-solid={solid}>
      <Link to={home} className="nav-logo" aria-label={`${identity.first} ${identity.last} — home`}>
        <Logo title={false} />
      </Link>

      <nav aria-label="Primary" className="nav-links">
        {links.map((l) => (
          <Link key={l.to} to={l.to} aria-current={isCurrent(l.to) ? 'page' : undefined}>
            {l.nav}
          </Link>
        ))}
      </nav>

      <Menu label="Browse sections" className="nav-browse" button={
          <>
            <FaBars aria-hidden="true" className="nav-bars" />
            <span className="nav-browse-label">Browse</span>
            <FaCaretDown aria-hidden="true" className="nav-browse-caret" />
          </>
        }>
        <nav aria-label="Sections">
          {links.map((l) => (
            <Link key={l.to} to={l.to} aria-current={isCurrent(l.to) ? 'page' : undefined}>
              {l.nav}
            </Link>
          ))}
        </nav>
      </Menu>

      <div className="nav-end">
        <Link to={identity.resume} className="nav-cv">
          Résumé
        </Link>
        <Menu
          label={`Profile: ${profile.label}. Switch profile`}
          align="right"
          button={
            <>
              <Avatar color={profile.color} className="nav-avatar" />
              <FaCaretDown aria-hidden="true" className="nav-caret" />
            </>
          }
        >
          {profiles.map((p) => (
            <Link key={p.id} to={`/profile/${p.id}`} className="menu-profile" aria-current={p.id === profile.id ? 'true' : undefined}>
              <Avatar color={p.color} />
              {p.label}
            </Link>
          ))}
          <hr />
          <Link to="/browse">Switch profiles</Link>
          <Link to={identity.githubUrl}>GitHub ↗</Link>
          <Link to={identity.linkedinUrl}>LinkedIn ↗</Link>
        </Menu>
      </div>
    </header>
  )
}
