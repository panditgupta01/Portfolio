import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

function AboutSection({ skills, personalInfo }) {
  return (
    <section id="about" className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
      <div className="glass rounded-3xl p-6 sm:p-8">
        <SectionHeading
          eyebrow="About"
          title={personalInfo.aboutTitle}
          description={personalInfo.aboutDescription}
        />
        <p className="text-slate-300">
          {personalInfo.aboutStory}
        </p>
      </div>
      <div className="glass rounded-3xl p-6 sm:p-8">
        <h3 className="text-xl font-semibold text-white">Core Skills</h3>
        <div className="mt-6 space-y-5">
          {skills.map((skill, index) => (
            <div key={skill.name}>
              <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.7 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
