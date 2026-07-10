import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../data/faq'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-20 md:py-28 px-5 md:px-8 bg-[var(--color-surface)]/40">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[var(--color-accent)] font-semibold tracking-widest text-sm mb-3">
            FAQ
          </p>
          <h2 className="font-display text-3xl md:text-4xl uppercase">
            Common Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={item.q}
                className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-surface-2)] overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left px-5 py-4 font-medium"
                  aria-expanded={isOpen}
                >
                  {item.q}
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown size={18} className="text-[var(--color-accent)]" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="px-5 pb-4 text-[var(--color-text-dim)] text-sm leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
