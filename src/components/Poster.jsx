/**
 * Generated key art: a duotone field, an oversized glyph and a title lockup.
 * No photography needed, and every poster stays on-palette.
 */
export default function Poster({ art, title, kicker, shape = 'wide', showTitle = true, badge }) {
  return (
    <div className="poster" data-scheme={art.scheme} data-shape={shape} aria-hidden="true">
      <span className="poster-glyph">{art.glyph}</span>
      <span className="poster-badge">
        <b>NA</b>
        {badge ?? (shape === 'tall' ? 'Film' : 'Series')}
      </span>
      {showTitle && (
        <span className="poster-lockup">
          <span className="poster-title">{title}</span>
          {kicker && <span className="poster-kicker">{kicker}</span>}
        </span>
      )}
    </div>
  )
}
