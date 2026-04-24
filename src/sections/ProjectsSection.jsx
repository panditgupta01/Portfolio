import { memo } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="pt-6">
      <SectionHeading
        eyebrow="Projects"
        title="Selected product experiences."
        description="A few builds where I drove design, architecture, and implementation with a focus on speed and impact."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.08 * index, duration: 0.5 }}
            whileHover={{ y: -7 }}
            className="glass group flex h-full flex-col overflow-hidden rounded-3xl"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
            </div>
            <div className="flex grow flex-col p-5">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{project.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center gap-4 text-sm">
                <a href={project.liveUrl} className="text-cyan-300 transition hover:text-cyan-200">
                  Live Demo
                </a>
                <a href={project.githubUrl} className="text-slate-200 transition hover:text-white">
                  GitHub
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default memo(ProjectsSection)
