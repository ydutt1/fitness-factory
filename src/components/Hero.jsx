import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[640px] w-full flex items-center justify-center overflow-hidden"
    >
      {/* Replace this image with a real hero photo/video: /public/images/hero-bg.jpg */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[var(--color-bg)]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[var(--color-accent)] font-semibold tracking-[0.3em] text-sm mb-4"
        >
          FITNESS FACTORY
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl leading-tight uppercase"
        >
          Transform Your Body.
          <br />
          Transform Your Life.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-[var(--color-text-dim)] text-base md:text-lg max-w-xl mx-auto"
        >
          Real equipment. Real trainers. A no-nonsense gym built for people who
          actually want results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="bg-[var(--color-accent)] text-black font-semibold px-8 py-3 rounded-full hover:bg-white transition-colors"
          >
            Join Now
          </a>
          <a
            href="#membership"
            className="border border-[var(--color-surface-2)] text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
          >
            View Membership
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-[var(--color-text-dim)]"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  )
}
