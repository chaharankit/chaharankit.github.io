import { Navbar } from './components/Navbar'
import { siteContent } from './data/siteContent'
import { useActiveSection } from './hooks/useActiveSection'
import { AboutSection } from './sections/AboutSection'
import { ContactSection } from './sections/ContactSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { HeroSection } from './sections/HeroSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { SkillsSection } from './sections/SkillsSection'

function App() {
  const defaultSection = siteContent.navigation[0]?.id ?? 'home'
  const activeSection = useActiveSection(
    siteContent.navigation.map((item) => item.id),
    defaultSection,
  )

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-brand-bg text-brand-text">
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_18%_8%,rgba(255,138,0,0.20),transparent_36%),radial-gradient(circle_at_80%_22%,rgba(0,210,200,0.18),transparent_30%),radial-gradient(circle_at_60%_78%,rgba(0,120,255,0.14),transparent_40%)]" />
      <Navbar items={siteContent.navigation} activeSection={activeSection} />

      <main className="pb-20">
        <HeroSection content={siteContent.hero} />
        <AboutSection content={siteContent.about} />
        <ExperienceSection content={siteContent.experience} />
        <ProjectsSection content={siteContent.projects} />
        <SkillsSection content={siteContent.skills} />
        <ContactSection content={siteContent.contact} />
      </main>

      <footer className="border-t border-brand-line/70 px-6 py-6 text-center text-sm text-brand-muted">
        Built with React, TypeScript, Tailwind, and Framer Motion.
      </footer>
    </div>
  )
}

export default App
