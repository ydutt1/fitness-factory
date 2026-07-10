import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { stats } from '../data/stats'

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 px-5 md:px-8 border-y border-[var(--color-surface-2)]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex flex-col items-center text-center gap-2"
          >
            <stat.icon className="text-[var(--color-accent)] mb-1" size={28} />
            <p className="font-display text-3xl md:text-4xl">
              {typeof CountUp === 'function' ? <CountUp end={stat.value} duration={2} enableScrollSpy scrollSpyOnce /> : <CountUp.default end={stat.value} duration={2} enableScrollSpy scrollSpyOnce />}
              {stat.suffix}
            </p>
            <p className="text-[var(--color-text-dim)] text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
