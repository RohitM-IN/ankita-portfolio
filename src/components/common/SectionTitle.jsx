export function SectionTitle({ eyebrow, title, accent }) {
  return (
    <div className="section-title">
      <span className="eyebrow">{eyebrow}</span>
      <h2>
        {title} {accent && <em>{accent}</em>}
      </h2>
    </div>
  )
}
