import { Arrow } from '../common/Arrow.jsx'
import { SectionTitle } from '../common/SectionTitle.jsx'
import { ProjectCard } from './ProjectCard.jsx'

export function Projects({ content, projects, dribbbleUrl, onOpen }) {
  const publishedProjects = projects.filter(({ status }) => status === 'published')
  const upcomingProjects = projects.filter(({ status }) => status === 'coming-soon')

  return (
    <section className="section shell" id="projects">
      <div className="title-row">
        <SectionTitle eyebrow={content.eyebrow} title={content.title} accent={content.accent} />
        <p>{content.description}</p>
      </div>

      <div className="projects-grid">
        {publishedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={onOpen} />
        ))}
      </div>

      {upcomingProjects.length > 0 && (
        <div className="upcoming-block">
          <div><span className="eyebrow">{content.upcomingEyebrow}</span><h3>{content.upcomingTitle}</h3></div>
          <div className="upcoming-list">
            {upcomingProjects.map((project) => (
              <button type="button" key={project.id} onClick={() => onOpen(project)}>
                <span>{project.title}</span>
                <small>{project.platform} · {project.timeline}</small>
                <Arrow />
              </button>
            ))}
          </div>
        </div>
      )}

      {dribbbleUrl && (
        <a className="button button-outline dribbble-link" href={dribbbleUrl} target="_blank" rel="noreferrer">
          {content.externalCta} <Arrow />
        </a>
      )}
    </section>
  )
}
