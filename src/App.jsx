import { useMemo } from 'react'
import { motion, useScroll } from 'framer-motion'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ProjectsSection from './sections/ProjectsSection'
import ExperienceSection from './sections/ExperienceSection'
import ContactSection from './sections/ContactSection'
import Navbar from './components/Navbar'
import CursorGlow from './components/CursorGlow'
import { contactLinks, experienceItems, personalInfo, projects, skills } from './data/portfolioData'

function App() {
  const { scrollYProgress } = useScroll()
  const sections = useMemo(
    () => [
      { id: 'about', label: 'About' },
      { id: 'projects', label: 'Projects' },
      { id: 'experience', label: 'Experience' },
      { id: 'contact', label: 'Contact' },
    ],
    [],
  )

  return (
    <div className="relative min-h-screen overflow-x-clip bg-slate-950 text-slate-100">
      <motion.div
        className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-500"
        style={{ scaleX: scrollYProgress }}
      />
      <CursorGlow />
      <Navbar sections={sections} brand={personalInfo.shortName} />
      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-20 px-4 pb-14 pt-24 sm:px-6 lg:px-8">
        <HeroSection personalInfo={personalInfo} />
        <AboutSection skills={skills} personalInfo={personalInfo} />
        <ProjectsSection projects={projects} />
        <ExperienceSection experienceItems={experienceItems} />
        <ContactSection socialLinks={contactLinks} personalInfo={personalInfo} />
      </main>
    </div>
  )
}

export default App
