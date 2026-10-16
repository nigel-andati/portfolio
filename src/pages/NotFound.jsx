import PageShell from '../components/PageShell'
import Link from '../components/Link'

export default function NotFound({ path }) {
  return (
    <PageShell path={path} title="Not found">
      <section className="hire">
        <h1 className="hire-title" tabIndex={-1}>
          Lost your way?
        </h1>
        <p className="hire-sub">That title isn&rsquo;t in the catalogue.</p>
        <Link to="/browse" className="btn" data-variant="play">
          Back to profiles
        </Link>
      </section>
    </PageShell>
  )
}
