import { SectionTitle } from '../common/SectionTitle.jsx'

export function About({ content, profile, skills, experience }) {
  return (
    <section className="section about-section" id="about">
      <div className="shell about-grid">
        <div>
          <SectionTitle eyebrow={content.eyebrow} title={content.title} accent={content.accent} />
          <div className="about-copy">
            {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="skill-list">
            {skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </div>

        <div className="experience-panel">
          <div className="about-stats">
            {profile.stats.map((stat) => (
              <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>
            ))}
          </div>
          <div className="experience-list">
            {experience.map((item) => (
              <article key={`${item.company}-${item.period}`}>
                <span><strong>{item.company}</strong><small>{item.role}</small></span>
                <time>{item.period}</time>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
