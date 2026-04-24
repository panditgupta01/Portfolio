import { motion } from 'framer-motion'

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="mb-10 max-w-2xl"
    >
      <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-slate-300">{description}</p>
    </motion.div>
  )
}

export default SectionHeading
