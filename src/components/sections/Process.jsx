import { SectionTitle } from '../common/SectionTitle.jsx'

export function Process({ content, process }) {
  return (
    <section className="section shell" id="process">
      <SectionTitle eyebrow={content.eyebrow} title={content.title} accent={content.accent} />
      <div className="process-grid">
        {process.map((step) => (
          <article key={step.number}>
            <span>{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
