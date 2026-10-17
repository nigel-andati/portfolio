/** Title block for inner pages: series badge, H1, one-line description. */
export default function PageHead({ title, children, badge = 'Series' }) {
  return (
    <header className="phead">
      <p className="bill-badge">
        <b>NA</b> {badge}
      </p>
      <h1 className="phead-title" tabIndex={-1}>
        {title}
      </h1>
      {children && <div className="phead-sub">{children}</div>}
    </header>
  )
}
