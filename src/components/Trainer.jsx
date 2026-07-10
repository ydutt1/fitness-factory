import { motion } from 'framer-motion'
import { Instagram, Facebook, Youtube } from './SocialIcons'

const timeline = [
  { year: '1994', text: 'Started coaching at a local sports club.' },
  { year: '2003', text: 'Certified as a national-level strength & conditioning coach.' },
  { year: '2012', text: 'Founded Fitness Factory.' },
  { year: 'Today', text: 'Trained 1000+ members across all fitness levels.' },
]

export default function Trainer() {
  return (
    <section id="trainer" className="py-20 md:py-28 px-5 md:px-8 bg-[var(--color-surface)]/40">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Replace with real trainer photo: /public/images/trainer.jpg */}
          <img
            src="/images/trainer.jpg"
            alt="Ashish Rastogi, head trainer"
            loading="lazy"
            className="rounded-2xl w-full h-[480px] object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-[var(--color-accent)] font-semibold tracking-widest text-sm mb-3">
            MEET YOUR TRAINER
          </p>
          <h2 className="font-display text-3xl md:text-4xl mb-2 uppercase">
            Ashish Rastogi
          </h2>
          <p className="text-[var(--color-text-dim)] mb-6">
            30+ Years Experience · Strength & Conditioning Specialist
          </p>

          <p className="text-[var(--color-text-dim)] mb-8 leading-relaxed">
            "I've spent three decades in this gym, and the thing that never
            changes is this — consistency beats intensity every single time.
            I'm here to make sure you show up, do it right, and keep coming
            back."
          </p>

          <div className="space-y-4 mb-8">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-4"
              >
                <span className="font-display text-[var(--color-accent)] w-16 shrink-0">
                  {item.year}
                </span>
                <span className="text-[var(--color-text-dim)] border-l border-[var(--color-surface-2)] pl-4">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="text-[var(--color-text-dim)] hover:text-[var(--color-accent)] transition-colors">
              <Instagram size={22} />
            </a>
            <a href="#" aria-label="Facebook" className="text-[var(--color-text-dim)] hover:text-[var(--color-accent)] transition-colors">
              <Facebook size={22} />
            </a>
            <a href="#" aria-label="YouTube" className="text-[var(--color-text-dim)] hover:text-[var(--color-accent)] transition-colors">
              <Youtube size={22} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
