/** Anchored content section with a red-kicker heading, like the reference. */
export default function Section({ id, kicker, title, intro, children }) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-title`} tabIndex={-1}>
      <p className="section-kicker">{kicker ?? title}</p>
      <h2 className="section-title" id={`${id}-title`}>
        {title}
      </h2>
      {intro && <p className="section-intro">{intro}</p>}
      {children}
    </section>
  )
}
