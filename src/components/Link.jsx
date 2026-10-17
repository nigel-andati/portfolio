import { navigate } from '../lib/router'

const isModified = (e) => e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0

/** In-app link: client-side navigation for internal paths, a normal <a> otherwise. */
export default function Link({ to, onClick, ...rest }) {
  const external = /^(https?:|mailto:)/.test(to) || to.endsWith('.pdf')
  if (external) {
    const newTab = !to.startsWith('mailto:')
    return (
      <a
        href={to}
        onClick={onClick}
        {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      />
    )
  }
  return (
    <a
      href={to}
      onClick={(e) => {
        onClick?.(e)
        if (e.defaultPrevented || isModified(e)) return
        e.preventDefault()
        navigate(to)
      }}
      {...rest}
    />
  )
}
