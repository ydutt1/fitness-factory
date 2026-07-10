import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-5 md:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Replace with a real gym interior photo: /public/images/about-gym.jpg */}
          <img
            src="/images/about-gym.jpg"
            alt="Fitness Factory gym floor"
            loading="lazy"
            className="rounded-2xl w-full h-[420px] object-cover"
          />
          <div className="absolute -bottom-6 -right-6 bg-[var(--color-accent)] text-black font-display px-6 py-4 rounded-2xl text-sm hidden sm:block">
            Since 2000
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-[var(--color-accent)] font-semibold tracking-widest text-sm mb-3">
            ABOUT US
          </p>
          <h2 className="font-display text-3xl md:text-4xl mb-6 uppercase leading-tight">
            Built On Discipline,
            <br /> Not Hype
          </h2>
          <p className="text-[var(--color-text-dim)] mb-4 leading-relaxed">
            Fitness Factory started as a single-room gym with a handful of members
            and a simple idea: help people get stronger, without the gimmicks. Over
            25 years later, that's still the whole mission.
          </p>
          <p className="text-[var(--color-text-dim)] mb-4 leading-relaxed">
            <span className="text-white font-semibold">Our mission</span> is to
            make serious training accessible, honest, and sustainable for every
            member who walks through our doors.
          </p>
          <p className="text-[var(--color-text-dim)] mb-8 leading-relaxed">
            <span className="text-white font-semibold">Our vision</span> is to be
            the gym people trust their whole fitness journey to — from their first
            rep to their personal best.
          </p>

          <ul className="grid grid-cols-2 gap-4 text-sm">
            {[
              'Certified trainers',
              'Clean, modern equipment',
              'Beginner friendly',
              'Real, personal guidance',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
