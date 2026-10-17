/** Renders `**fragment**` markers in content strings as highlighted metrics. */
export default function Emph({ text }) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 ? (
      <strong className="metric" key={i}>
        {part}
      </strong>
    ) : (
      part
    ),
  )
}
