import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('pointermove', handleMove, { passive: true })
    return () => window.removeEventListener('pointermove', handleMove)
  }, [])

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-0 hidden h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl md:block"
      animate={{
        x: position.x - 140,
        y: position.y - 140,
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 120, mass: 0.2 }}
    />
  )
}

export default CursorGlow
