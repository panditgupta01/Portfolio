import { motion } from 'framer-motion'

function HeroSection({ personalInfo }) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 px-6 py-16 sm:px-10">
      <div className="absolute -right-16 -top-12 h-44 w-44 rounded-full bg-fuchsia-500/30 blur-3xl" />
      <div className="absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="relative text-xs uppercase tracking-[0.26em] text-cyan-300"
          >
            {personalInfo.role}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="relative mt-4 max-w-4xl text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl"
          >
            {personalInfo.fullName}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.65 }}
            className="relative mt-5 max-w-2xl text-slate-300"
          >
            {personalInfo.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="btn-primary">
              View Work
            </a>
            <a href="#contact" className="btn-secondary">
              Contact
            </a>
          </motion.div>
        </div>
        <motion.img
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          src="/profile-picture-enlarged.png"
          alt={`${personalInfo.fullName} profile`}
          className="mx-auto h-72 w-56 rounded-3xl border border-white/15 object-cover shadow-2xl shadow-cyan-900/30 sm:h-80 sm:w-64 lg:h-[26rem] lg:w-80"
        />
      </div>
    </section>
  )
}

export default HeroSection
