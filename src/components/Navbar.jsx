import { memo } from 'react'
import { motion } from 'framer-motion'

function Navbar({ sections, brand }) {
  return (
    <header className="fixed inset-x-0 top-4 z-40 mx-auto w-[min(94%,56rem)]">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="glass flex items-center justify-between rounded-2xl px-4 py-3 sm:px-6"
      >
        <a href="#" className="text-sm font-semibold tracking-[0.18em] text-cyan-300">
          {brand}
        </a>
        <ul className="flex items-center gap-4 sm:gap-6">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-xs font-medium text-slate-300 transition hover:text-white sm:text-sm"
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>
    </header>
  )
}

export default memo(Navbar)
