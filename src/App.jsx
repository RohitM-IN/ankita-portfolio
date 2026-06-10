import { useEffect, useMemo, useState } from 'react'
import { usePortfolioData } from './usePortfolioData.js'

const Arrow = ({ direction = 'right' }) => <span aria-hidden="true">{direction === 'left' ? '←' : '→'}</span>

function Header({ navigation, availability }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lightMode, setLightMode] = useState(() => localStorage.getItem('theme') === 'light')

  useEffect(() => {
    document.documentElement.classList.toggle('light', lightMode)
    localStorage.setItem('theme', lightMode ? 'light' : 'dark')
  }, [lightMode])

  return (
    <header className="site-header">
      <a className="brand" href="#top">Ankita<span>.</span></a>
      <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
        ))}
      </nav>
      <div className="header-actions">
        <button className="theme-toggle" type="button" onClick={() => setLightMode((value) => !value)} aria-label={`Switch to ${lightMode ? 'dark' : 'light'} theme`}>
          <span>{lightMode ? '☾' : '☀'}</span>
        </button>
        <span className="availability"><i />{availability}</span>
        <button className={`menu-button ${menuOpen ? 'is-open' : ''}`} type="button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          <span /><span />
        </button>
      </div>
    </header>
  )
}

function Hero({ profile, currentRole, featuredProject, onOpenProject }) {
  return (
    <section className="hero shell" id="top">
      <div className="hero-copy">
        <div className="eyebrow hero-eyebrow"><span>👋</span>{profile.greeting}</div>
        <h1><span>{profile.firstName}</span><em>{profile.lastName}</em></h1>
        <p className="hero-bio">{profile.bio}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore my work <span>↓</span></a>
          <a className="button button-outline" href="#contact">Let&apos;s talk <Arrow /></a>
        </div>
        <div className="stat-row">
          {profile.stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
        </div>
      </div>
      <div className="hero-showcase">
        <button className="featured-card" type="button" onClick={() => onOpenProject(featuredProject)}>
          <img src={featuredProject.cover} alt={featuredProject.title} onError={(event) => { event.currentTarget.hidden = true }} />
          <span className="featured-overlay">
            <small>Latest work · {featuredProject.platform}</small>
            <strong>{featuredProject.title}</strong>
            <span>{featuredProject.description}</span>
          </span>
        </button>
        <div className="current-role">
          <div><small>Currently at</small><strong>{currentRole.company}</strong><span>{currentRole.role} · {currentRole.period}</span></div>
          <i aria-label="Currently employed" />
        </div>
      </div>
    </section>
  )
}

function SkillsTicker({ skills }) {
  const tickerSkills = [...skills, ...skills]
  return <div className="ticker" aria-label="Design skills"><div>{tickerSkills.map((skill, index) => <span key={`${skill}-${index}`}><i />{skill}</span>)}</div></div>
}

function SectionTitle({ eyebrow, title, italic }) {
  return <div className="section-title"><span className="eyebrow">{eyebrow}</span><h2>{title} {italic && <em>{italic}</em>}</h2></div>
}

function ProjectCard({ project, onOpen }) {
  return (
    <button className={`project-card ${project.wide ? 'is-wide' : ''}`} type="button" onClick={() => onOpen(project)}>
      <div className="project-image"><span className="image-fallback">{project.title}</span><img src={project.cover || project.images[0]} alt={project.title} loading="lazy" onError={(event) => { event.currentTarget.hidden = true }} /><span className="view-bubble"><Arrow /></span></div>
      <div className="project-body">
        <div className="tags">{project.tags.slice(0, 3).map((tag) => <span key={tag.label}>{tag.label}</span>)}</div>
        <h3>{project.title}</h3>
        <p>{project.description || project.subtitle}</p>
        <span className="text-link">View case study <Arrow /></span>
      </div>
    </button>
  )
}

function Projects({ projects, onOpen }) {
  const published = projects.filter((project) => project.status === 'published')
  const upcoming = projects.filter((project) => project.status === 'coming-soon')
  return (
    <section className="section shell" id="projects">
      <div className="title-row"><SectionTitle eyebrow="Selected work" title="Projects" italic="that matter" /><p>Design work grounded in real users, operational context, and measurable outcomes.</p></div>
      <div className="projects-grid">{published.map((project) => <ProjectCard key={project.id} project={project} onOpen={onOpen} />)}</div>
      <div className="upcoming-block">
        <div><span className="eyebrow">On the desk</span><h3>Case studies in progress</h3></div>
        <div className="upcoming-list">{upcoming.map((project) => <button type="button" key={project.id} onClick={() => onOpen(project)}><span>{project.title}</span><small>{project.platform} · {project.timeline}</small><Arrow /></button>)}</div>
      </div>
      <a className="button button-outline dribbble-link" href="https://dribbble.com/ankitatadse" target="_blank" rel="noreferrer">See more on Dribbble <Arrow /></a>
    </section>
  )
}

function About({ profile, skills, experience }) {
  return (
    <section className="section about-section" id="about"><div className="shell about-grid">
      <div><SectionTitle eyebrow="About me" title="Designer who thinks" italic="in data & design." /><div className="about-copy">{profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><div className="skill-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>
      <div className="experience-panel">
        <div className="about-stats">{profile.stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>
        <div className="experience-list">{experience.map((item) => <article key={`${item.company}-${item.period}`}><span><strong>{item.company}</strong><small>{item.role}</small></span><time>{item.period}</time></article>)}</div>
      </div>
    </div></section>
  )
}

function Process({ process }) {
  return <section className="section shell" id="process"><SectionTitle eyebrow="How I work" title="My" italic="process" /><div className="process-grid">{process.map((step) => <article key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}</div></section>
}

function Impact({ impact }) {
  return <section className="section impact-section" id="impact"><div className="shell"><SectionTitle eyebrow="By the numbers" title="Key" italic="impact" /><div className="impact-grid">{impact.stats.map((item) => <article key={item.label}><strong>{item.value}</strong><p>{item.label}</p></article>)}</div><div className="awards">{impact.awards.map((award) => <article key={award.title}><span>{award.icon}</span><div><strong>{award.title}</strong><small>{award.subtitle}</small></div></article>)}</div></div></section>
}

function FAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(0)
  return <section className="section shell faq-section" id="faq"><SectionTitle eyebrow="Common questions" title="Frequently asked" italic="questions" /><div className="faq-list">{items.map((item, index) => <article className={openIndex === index ? 'is-open' : ''} key={item.question}><button type="button" onClick={() => setOpenIndex(openIndex === index ? -1 : index)} aria-expanded={openIndex === index}><span>{item.question}</span><i>{openIndex === index ? '−' : '+'}</i></button><div><p>{item.answer}</p></div></article>)}</div></section>
}

function Contact({ contact, socials }) {
  const [sent, setSent] = useState(false)
  const submit = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = encodeURIComponent(form.get('topic') || 'Portfolio enquiry')
    const body = encodeURIComponent(`Name: ${form.get('name')}\nEmail: ${form.get('email')}\n\n${form.get('message')}`)
    setSent(true)
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
  }
  return <section className="section contact-section" id="contact"><div className="shell"><SectionTitle eyebrow="Get in touch" title="Let’s work" italic="together" /><p className="contact-intro">{contact.description}</p><div className="contact-grid"><div className="contact-details"><a href={`mailto:${contact.email}`}><span>↗</span>{contact.email}</a><a href={`tel:${contact.phoneLink}`}><span>↗</span>{contact.phone}</a><p><span>●</span>{contact.location}</p><div className="socials">{socials.map((social) => <a href={social.link} target="_blank" rel="noreferrer" key={social.name}>{social.name}</a>)}</div></div><form onSubmit={submit}><div className="form-row"><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@company.com" /></label></div><label>Subject<select name="topic" defaultValue=""><option value="" disabled>Select a topic</option>{contact.formTopics.map((topic) => <option key={topic}>{topic}</option>)}</select></label><label>Message<textarea required name="message" rows="5" placeholder="Tell me about your project or opportunity…" /></label><button className="button button-primary" type="submit">{sent ? 'Opening your email app…' : 'Send message'} <Arrow /></button></form></div></div></section>
}

function ProjectModal({ project, onClose }) {
  const [imageIndex, setImageIndex] = useState(0)
  const images = project?.images?.length ? project.images : project?.cover ? [project.cover] : []

  useEffect(() => {
    if (!project) return undefined
    setImageIndex(0)
    document.body.classList.add('modal-open')
    const handleKey = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') setImageIndex((value) => (value + 1) % Math.max(images.length, 1))
      if (event.key === 'ArrowLeft') setImageIndex((value) => (value - 1 + Math.max(images.length, 1)) % Math.max(images.length, 1))
    }
    window.addEventListener('keydown', handleKey)
    return () => { document.body.classList.remove('modal-open'); window.removeEventListener('keydown', handleKey) }
  }, [project, onClose, images.length])

  if (!project) return null
  return <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}><div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="modal-close" type="button" onClick={onClose} aria-label="Close project">×</button>{images.length > 0 ? <div className="modal-gallery"><span className="image-fallback">{project.title}</span><img src={images[imageIndex]} alt={`${project.title} screen ${imageIndex + 1}`} onError={(event) => { event.currentTarget.hidden = true }} />{images.length > 1 && <><button type="button" className="gallery-prev" onClick={() => setImageIndex((imageIndex - 1 + images.length) % images.length)}><Arrow direction="left" /></button><button type="button" className="gallery-next" onClick={() => setImageIndex((imageIndex + 1) % images.length)}><Arrow /></button><span>{imageIndex + 1} / {images.length}</span></>}</div> : <div className="coming-visual"><span>Case study</span><strong>Coming soon</strong></div>}<div className="modal-content"><div className="tags">{project.tags.map((tag) => <span key={tag.label}>{tag.label}</span>)}</div><h2 id="modal-title">{project.title}</h2><p className="modal-lead">{project.subtitle}</p><div className="project-meta"><span><small>Role</small>{project.role}</span><span><small>Timeline</small>{project.timeline}</span><span><small>Platform</small>{project.platform}</span></div>{project.overview && <ModalSection title="Overview"><p>{project.overview}</p></ModalSection>}<div className="problem-solution">{project.problem && <article><small>The problem</small><p>{project.problem}</p></article>}{project.solution && <article><small>The solution</small><p>{project.solution}</p></article>}</div>{project.outcomes?.length > 0 && <ModalSection title="Key outcomes"><div className="outcome-grid">{project.outcomes.map((outcome) => <article key={outcome.label}><strong>{outcome.n}</strong><span>{outcome.label}</span></article>)}</div></ModalSection>}{project.process?.length > 0 && <ModalSection title="Design process"><div className="modal-process">{project.process.map((step) => <article key={step.step}><span>{step.step}</span><strong>{step.title}</strong><p>{step.desc}</p></article>)}</div></ModalSection>}{project.tools?.length > 0 && <ModalSection title="Tools & methods"><div className="skill-list">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div></ModalSection>}</div></div></div>
}

function ModalSection({ title, children }) { return <section className="modal-section"><h3>{title}</h3>{children}</section> }

function App() {
  const { data, error } = usePortfolioData()
  const [selectedProject, setSelectedProject] = useState(null)
  const featuredProject = useMemo(() => data?.projects.find((project) => project.featured), [data])

  if (error) return <main className="status-screen"><h1>Portfolio unavailable</h1><p>{error.message}</p><button onClick={() => window.location.reload()}>Try again</button></main>
  if (!data) return <main className="status-screen"><span className="loader" /><p>Loading portfolio…</p></main>

  return <>
    <Header navigation={data.navigation} availability={data.profile.availability} />
    <main>
      <Hero profile={data.profile} currentRole={data.currentRole} featuredProject={featuredProject} onOpenProject={setSelectedProject} />
      <SkillsTicker skills={data.skills} />
      <Projects projects={data.projects} onOpen={setSelectedProject} />
      <About profile={data.profile} skills={data.skills} experience={data.experience} />
      <Process process={data.process} />
      <Impact impact={data.impact} />
      <FAQ items={data.faq} />
      <Contact contact={data.contact} socials={data.socials} />
    </main>
    <footer className="site-footer shell"><span>{data.site.copyright}</span><a href="#top">Back to top ↑</a></footer>
    <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
  </>
}

export default App
