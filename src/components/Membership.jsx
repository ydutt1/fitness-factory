import { motion } from 'framer-motion'
import { Check, Phone } from 'lucide-react'
import { plans } from '../data/membership'

export default function Membership() {
  return (
    <section id="membership" className="py-20 md:py-28 px-5 md:px-8 bg-[var(--color-surface)]/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[var(--color-accent)] font-semibold tracking-widest text-sm mb-3">
            MEMBERSHIP
          </p>
          <h2 className="font-display text-3xl md:text-4xl uppercase">
            Pick Your Plan
          </h2>
          {/* Prices below are placeholders — update in src/data/membership.js */}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className={`relative rounded-2xl p-7 flex flex-col border ${plan.recommended
                  ? 'bg-[var(--color-accent)] text-black border-transparent'
                  : 'bg-[var(--color-surface)] border-[var(--color-surface-2)]'
                }`}
            >
              {plan.recommended && (
                <span className="absolute -top-3 right-6 bg-black text-[var(--color-accent)] text-xs font-semibold px-3 py-1 rounded-full">
                  MOST POPULAR
                </span>
              )}
              <h3 className="font-display text-xl mb-1">{plan.name}</h3>
              <p className="mb-6">
                <span className="text-3xl font-display">₹{plan.price}</span>
                <span className={`text-sm ${plan.recommended ? 'text-black/70' : 'text-[var(--color-text-dim)]'}`}>
                  {' '}{plan.duration}
                </span>
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check size={16} className="mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-2">
                <a
                  href="https://wa.me/919412157363"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-center font-semibold py-2.5 rounded-full transition-colors ${plan.recommended
                      ? 'bg-black text-white hover:bg-white hover:text-black'
                      : 'bg-[var(--color-accent)] text-black hover:bg-white'
                    }`}
                >
                  Contact Us
                </a>
                <a
                  href="tel:+919412157363"
                  className={`text-center font-medium py-2.5 rounded-full border flex items-center justify-center gap-2 text-sm ${plan.recommended ? 'border-black/30' : 'border-[var(--color-surface-2)] text-[var(--color-text-dim)]'
                    }`}
                >
                  <Phone size={14} /> Call Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
