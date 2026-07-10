import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Dumbbell } from 'lucide-react'
import { navLinks } from '../data/nav'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-surface-2)]' : 'bg-transparent'
        }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 h-16 md:h-20">
        <a href="#home" className="flex items-center gap-2 font-display text-lg tracking-tight">
          <Dumbbell className="text-[var(--color-accent)]" size={24} />
          FITNESS<span className="text-[var(--color-accent)]">FACTORY</span>
        </a>

        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-[var(--color-text-dim)]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/919412157363"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-block bg-[var(--color-accent)] text-black font-semibold px-5 py-2 rounded-full text-sm hover:bg-white transition-colors"
        >
          Contact Us
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="lg:hidden fixed top-0 right-0 h-screen w-3/4 max-w-sm bg-[var(--color-surface)] shadow-2xl flex flex-col p-8 pt-24 gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-[var(--color-text-dim)] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/919412157363"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 bg-[var(--color-accent)] text-black font-semibold px-5 py-3 rounded-full text-center"
            >
              Contact Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
