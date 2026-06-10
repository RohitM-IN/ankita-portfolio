import { Arrow } from '../common/Arrow.jsx'
import { ProjectImage } from '../common/ProjectImage.jsx'
import { TagList } from '../common/TagList.jsx'

export function ProjectCard({ project, onOpen }) {
  const cover = project.cover || project.images[0]

  return (
    <button
      className={`project-card ${project.wide ? 'is-wide' : ''}`}
      type="button"
      onClick={() => onOpen(project)}
    >
      <div className="project-image">
        <ProjectImage src={cover} alt={project.title} loading="lazy" />
        <span className="view-bubble"><Arrow /></span>
      </div>
      <div className="project-body">
        <TagList tags={project.tags} limit={3} />
        <h3>{project.title}</h3>
        <p>{project.description || project.subtitle}</p>
        <span className="text-link">View case study <Arrow /></span>
      </div>
    </button>
  )
}
