import { motion } from 'framer-motion'
import { equipment } from '../data/equipment'

export default function Equipment() {
  return (
    <section className="py-20 md:py-28 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[var(--color-accent)] font-semibold tracking-widest text-sm mb-3">
            EQUIPMENT
          </p>
          <h2 className="font-display text-3xl md:text-4xl uppercase">
            Train Every Muscle Group
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {equipment.map((eq, i) => (
            <motion.div
              key={eq.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
              className="relative rounded-2xl overflow-hidden h-56 md:h-64 group"
            >
              <img
                src={eq.image}
                alt={`${eq.category} equipment`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <span className="absolute bottom-4 left-4 font-display text-lg uppercase">
                {eq.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
