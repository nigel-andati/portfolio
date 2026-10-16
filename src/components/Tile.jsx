import Link from './Link'
import Poster from './Poster'

/** One title in a row: poster, then the facts underneath (never hover-only). */
export default function Tile({ item, progress, rank }) {
  const external = !item.to.startsWith('/') || item.to.endsWith('.pdf')
  return (
    <Link to={item.to} className="tile" data-rank={rank ? 'true' : undefined}>
      {rank && (
        <span className="tile-rank" aria-hidden="true">
          {rank}
        </span>
      )}
      <span className="tile-frame">
        <Poster art={item.art} title={item.title} kicker={item.kicker} shape={rank ? 'tall' : 'wide'} />
        {progress != null && (
          <span className="tile-progress" aria-hidden="true">
            <span style={{ width: `${progress}%` }} />
          </span>
        )}
      </span>
      <span className="tile-info">
        <span className="tile-title">
          {rank && <span className="sr-only">#{rank} </span>}
          {item.title}
          {external && <span className="tile-ext" aria-label=" (opens in a new tab)">↗</span>}
        </span>
        <span className="tile-meta">{item.meta}</span>
      </span>
    </Link>
  )
}
