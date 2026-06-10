import { useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Arrow } from '../common/Arrow.jsx'
import { ProjectImage } from '../common/ProjectImage.jsx'
import { TagList } from '../common/TagList.jsx'

function ModalSection({ title, children }) {
  return <section className="modal-section"><h3>{title}</h3>{children}</section>
}

export function ProjectModal({ project, onClose }) {
  const [imageIndex, setImageIndex] = useState(0)
  const closeButtonRef = useRef(null)
  const images = useMemo(() => {
    if (!project) return []
    if (project.images?.length) return project.images
    return project.cover ? [project.cover] : []
  }, [project])

  useEffect(() => {
    if (!project) return undefined

    const previousActiveElement = document.activeElement
    setImageIndex(0)
    document.body.classList.add('modal-open')
    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (images.length < 2) return
      if (event.key === 'ArrowRight') setImageIndex((index) => (index + 1) % images.length)
      if (event.key === 'ArrowLeft') setImageIndex((index) => (index - 1 + images.length) % images.length)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', handleKeyDown)
      previousActiveElement?.focus()
    }
  }, [images.length, onClose, project])

  if (!project) return null

  const showPreviousImage = () => setImageIndex((imageIndex - 1 + images.length) % images.length)
  const showNextImage = () => setImageIndex((imageIndex + 1) % images.length)

  return createPortal(
    <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button ref={closeButtonRef} className="modal-close" type="button" onClick={onClose} aria-label="Close project">
          ×
        </button>

        {images.length > 0 ? (
          <div className="modal-gallery">
            <ProjectImage key={images[imageIndex]} src={images[imageIndex]} alt={`${project.title} screen ${imageIndex + 1}`} />
            {images.length > 1 && (
              <>
                <button type="button" className="gallery-prev" onClick={showPreviousImage} aria-label="Previous image">
                  <Arrow direction="left" />
                </button>
                <button type="button" className="gallery-next" onClick={showNextImage} aria-label="Next image">
                  <Arrow />
                </button>
                <span>{imageIndex + 1} / {images.length}</span>
              </>
            )}
          </div>
        ) : (
          <div className="coming-visual"><span>Case study</span><strong>Coming soon</strong></div>
        )}

        <div className="modal-content">
          <TagList tags={project.tags} />
          <h2 id="modal-title">{project.title}</h2>
          <p className="modal-lead">{project.subtitle}</p>

          <div className="project-meta">
            <span><small>Role</small>{project.role}</span>
            <span><small>Timeline</small>{project.timeline}</span>
            <span><small>Platform</small>{project.platform}</span>
          </div>

          {project.overview && <ModalSection title="Overview"><p>{project.overview}</p></ModalSection>}

          {(project.problem || project.solution) && (
            <div className="problem-solution">
              {project.problem && <article><small>The problem</small><p>{project.problem}</p></article>}
              {project.solution && <article><small>The solution</small><p>{project.solution}</p></article>}
            </div>
          )}

          {project.outcomes?.length > 0 && (
            <ModalSection title="Key outcomes">
              <div className="outcome-grid">
                {project.outcomes.map((outcome) => (
                  <article key={outcome.label}><strong>{outcome.n}</strong><span>{outcome.label}</span></article>
                ))}
              </div>
            </ModalSection>
          )}

          {project.process?.length > 0 && (
            <ModalSection title="Design process">
              <div className="modal-process">
                {project.process.map((step) => (
                  <article key={step.step}><span>{step.step}</span><strong>{step.title}</strong><p>{step.desc}</p></article>
                ))}
              </div>
            </ModalSection>
          )}

          {project.tools?.length > 0 && (
            <ModalSection title="Tools & methods">
              <div className="skill-list">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
            </ModalSection>
          )}
        </div>
      </div>
    </div>,
    document.body,
  )
}
