import { useMemo, useState } from 'react'
import { ErrorScreen, LoadingScreen } from './components/common/StatusScreen.jsx'
import { Footer } from './components/layout/Footer.jsx'
import { Header } from './components/layout/Header.jsx'
import { ProjectModal } from './components/projects/ProjectModal.jsx'
import { Projects } from './components/projects/Projects.jsx'
import { About } from './components/sections/About.jsx'
import { Contact } from './components/sections/Contact.jsx'
import { FAQ } from './components/sections/FAQ.jsx'
import { Hero } from './components/sections/Hero.jsx'
import { Impact } from './components/sections/Impact.jsx'
import { Process } from './components/sections/Process.jsx'
import { SkillsTicker } from './components/sections/SkillsTicker.jsx'
import { useDocumentTitle } from './hooks/useDocumentTitle.js'
import { usePortfolioData } from './hooks/usePortfolioData.js'

function App() {
  const { data, error, retry, status } = usePortfolioData()
  const [selectedProject, setSelectedProject] = useState(null)
  useDocumentTitle(data?.site.title)
  const featuredProject = useMemo(
    () => data?.projects.find(({ featured }) => featured) ?? data?.projects[0],
    [data],
  )
  const dribbbleUrl = useMemo(
    () => data?.socials.find(({ name }) => name === 'Dribbble')?.link,
    [data],
  )

  if (status === 'loading') return <LoadingScreen />
  if (status === 'error') return <ErrorScreen message={error.message} onRetry={retry} />

  return (
    <>
      <Header
        brand={data.site.brand}
        navigation={data.navigation}
        availability={data.profile.availability}
      />
      <main>
        <Hero
          content={data.sections.hero}
          profile={data.profile}
          currentRole={data.currentRole}
          featuredProject={featuredProject}
          onOpenProject={setSelectedProject}
        />
        <SkillsTicker skills={data.skills} />
        <Projects
          content={data.sections.projects}
          projects={data.projects}
          dribbbleUrl={dribbbleUrl}
          onOpen={setSelectedProject}
        />
        <About
          content={data.sections.about}
          profile={data.profile}
          skills={data.skills}
          experience={data.experience}
        />
        <Process content={data.sections.process} process={data.process} />
        <Impact content={data.sections.impact} impact={data.impact} />
        <FAQ content={data.sections.faq} items={data.faq} />
        <Contact
          content={data.sections.contact}
          contact={data.contact}
          socials={data.socials}
        />
      </main>
      <Footer copyright={data.site.copyright} backToTop={data.sections.footer.backToTop} />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  )
}

export default App
