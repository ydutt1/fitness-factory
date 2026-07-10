import { motion } from 'framer-motion'
import { facilities } from '../data/facilities'

export default function Facilities() {
  return (
    <section id="facilities" className="py-20 md:py-28 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[var(--color-accent)] font-semibold tracking-widest text-sm mb-3">
            FACILITIES
          </p>
          <h2 className="font-display text-3xl md:text-4xl uppercase">
            Everything You Need To Train
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {facilities.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
              whileHover={{ y: -6 }}
              className="bg-[var(--color-surface)] rounded-xl p-5 md:p-6 flex flex-col gap-3 border border-[var(--color-surface-2)] hover:border-[var(--color-accent)]/40 transition-colors"
            >
              <f.icon className="text-[var(--color-accent)]" size={26} />
              <h3 className="font-semibold text-sm md:text-base">{f.title}</h3>
              <p className="text-[var(--color-text-dim)] text-xs md:text-sm leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
