import { SectionTitle } from '../common/SectionTitle.jsx'

export function Impact({ content, impact }) {
  return (
    <section className="section impact-section" id="impact">
      <div className="shell">
        <SectionTitle eyebrow={content.eyebrow} title={content.title} accent={content.accent} />
        <div className="impact-grid">
          {impact.stats.map((item) => (
            <article key={item.label}><strong>{item.value}</strong><p>{item.label}</p></article>
          ))}
        </div>
        <div className="awards">
          {impact.awards.map((award) => (
            <article key={award.title}>
              <span>{award.icon}</span>
              <div><strong>{award.title}</strong><small>{award.subtitle}</small></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
