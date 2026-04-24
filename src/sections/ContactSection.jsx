import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

function ContactSection({ socialLinks, personalInfo }) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="grid gap-6 pt-6 lg:grid-cols-[1.05fr_1fr]">
      <div className="glass rounded-3xl p-6 sm:p-8">
        <SectionHeading
          eyebrow="Contact"
          title={personalInfo.contactTitle}
          description={personalInfo.contactDescription}
        />
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <label className="block">
            <span className="mb-2 block text-sm text-slate-300">Name</span>
            <input className="input-field" type="text" required placeholder="Your name" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm text-slate-300">Email</span>
            <input className="input-field" type="email" required placeholder="you@company.com" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm text-slate-300">Message</span>
            <textarea className="input-field min-h-30 resize-y" required placeholder="Tell me about your project..." />
          </label>
          <motion.button whileTap={{ scale: 0.98 }} type="submit" className="btn-primary w-full">
            Send Message
          </motion.button>
          {submitted && <p className="text-sm text-emerald-300">Message sent. I will get back to you shortly.</p>}
        </form>
      </div>
      <div className="glass rounded-3xl p-6 sm:p-8">
        <h3 className="text-xl font-semibold text-white">Connect</h3>
        <p className="mt-3 text-slate-300">You can also reach out using the details below.</p>
        <div className="mt-5 space-y-1 text-sm text-slate-300">
          <p>Phone: {personalInfo.phone}</p>
          <p>Location: {personalInfo.location}</p>
          <p>Languages: {personalInfo.languages}</p>
        </div>
        <ul className="mt-7 space-y-3">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition hover:border-cyan-300/50 hover:bg-white/[0.08]"
              >
                <span className="text-slate-200">{link.label}</span>
                <span className="text-cyan-300 transition group-hover:translate-x-1">→</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ContactSection
