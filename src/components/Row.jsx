import { useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import Tile from './Tile'

// Decorative "continue watching" fill levels.
const progressFor = (i) => [72, 38, 86, 54, 25][i % 5]

/** A shelf of tiles that scrolls sideways, with paging arrows on wide screens. */
export default function Row({ title, items, progress = false, ranked = false }) {
  const track = useRef(null)
  const page = (dir) => {
    const el = track.current
    el?.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: 'smooth' })
  }

  return (
    <section className="row" aria-label={title}>
      <h2 className="row-title">{title}</h2>
      <div className="row-viewport">
        <button type="button" className="row-arrow" data-dir="prev" onClick={() => page(-1)} aria-label={`Scroll ${title} left`}>
          <FaChevronLeft />
        </button>
        <ul className="row-track" data-ranked={ranked || undefined} ref={track}>
          {items.map((item, i) => (
            <li key={item.to + item.title}>
              <Tile item={item} progress={progress ? progressFor(i) : null} rank={ranked ? i + 1 : null} />
            </li>
          ))}
        </ul>
        <button type="button" className="row-arrow" data-dir="next" onClick={() => page(1)} aria-label={`Scroll ${title} right`}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  )
}
