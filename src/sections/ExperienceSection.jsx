import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

function ExperienceSection({ experienceItems }) {
  return (
    <section id="experience" className="pt-6">
      <SectionHeading
        eyebrow="Experience"
        title="Built through outcomes, not years."
        description="A timeline of product teams where I improved speed, quality, and design maturity."
      />
      <div className="relative ml-2 border-l border-white/10 pl-7 sm:ml-4 sm:pl-10">
        {experienceItems.map((item, index) => (
          <motion.article
            key={`${item.company}-${item.period}`}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1, duration: 0.55 }}
            className="relative mb-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm"
          >
            <span className="absolute -left-[2.05rem] top-6 h-3 w-3 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 sm:-left-[2.57rem]" />
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">{item.period}</p>
            <h3 className="mt-2 text-xl font-semibold text-white">{item.role}</h3>
            <p className="mt-1 text-sm text-slate-400">{item.company}</p>
            <p className="mt-4 text-slate-300">{item.highlights}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
