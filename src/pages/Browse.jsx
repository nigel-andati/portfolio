import { useEffect } from 'react'
import { identity, profiles } from '../data/content'
import Avatar from '../components/Avatar'
import Logo from '../components/Logo'
import Link from '../components/Link'
import { saveProfile } from '../lib/profile'

export default function Browse() {
  useEffect(() => {
    document.title = `Who's watching? — ${identity.first} ${identity.last}`
  }, [])

  return (
    <main className="who" id="main">
      <Logo className="who-logo" />
      <h1 className="who-title" tabIndex={-1}>
        Who&rsquo;s watching?
      </h1>
      <ul className="who-list">
        {profiles.map((p) => (
          <li key={p.id}>
            <Link to={`/profile/${p.id}`} className="who-profile" onClick={() => saveProfile(p.id)}>
              <Avatar color={p.color} />
              <span>{p.label}</span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="who-hint">
        Short on time? <Link to={identity.resume}>Open the résumé</Link> or pick <strong>Recruiter</strong> for the
        30-second version.
      </p>
    </main>
  )
}
