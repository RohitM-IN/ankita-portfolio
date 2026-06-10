import { Arrow } from '../common/Arrow.jsx'
import { ProjectImage } from '../common/ProjectImage.jsx'

export function Hero({ content, profile, currentRole, featuredProject, onOpenProject }) {
  return (
    <section className="hero shell" id="top">
      <div className="hero-copy">
        <div className="eyebrow hero-eyebrow"><span>👋</span>{profile.greeting}</div>
        <h1><span>{profile.firstName}</span><em>{profile.lastName}</em></h1>
        <p className="hero-bio">{profile.bio}</p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">{content.primaryCta} <span>↓</span></a>
          <a className="button button-outline" href="#contact">{content.secondaryCta} <Arrow /></a>
        </div>

        <div className="stat-row">
          {profile.stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-showcase">
        <button className="featured-card" type="button" onClick={() => onOpenProject(featuredProject)}>
          <ProjectImage src={featuredProject.cover} alt={featuredProject.title} />
          <span className="featured-overlay">
            <small>{content.featuredLabel} · {featuredProject.platform}</small>
            <strong>{featuredProject.title}</strong>
            <span>{featuredProject.description}</span>
          </span>
        </button>

        <div className="current-role">
          <div>
            <small>{content.currentRoleLabel}</small>
            <strong>{currentRole.company}</strong>
            <span>{currentRole.role} · {currentRole.period}</span>
          </div>
          <i aria-label="Currently employed" />
        </div>
      </div>
    </section>
  )
}
