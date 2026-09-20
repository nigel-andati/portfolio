export default function SectionHead({ num, title, meta }) {
  return (
    <div className="sec-head">
      <span className="sec-head-num">§ {num}</span>
      <h2 className="sec-head-title">{title}</h2>
      {meta && <span className="sec-head-meta">{meta}</span>}
    </div>
  )
}
