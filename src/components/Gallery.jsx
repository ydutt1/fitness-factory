import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

// Replace with real gallery photos in /public/images/gallery/
// Add/remove entries here — the grid adapts automatically.
const images = [
  { src: '/images/gallery/1.jpg', tall: true },
  { src: '/images/gallery/2.jpg' },
  { src: '/images/gallery/3.jpg' },
  { src: '/images/gallery/4.jpg' },
  { src: '/images/gallery/5.jpg', tall: true },
  { src: '/images/gallery/6.jpg' },
  { src: '/images/gallery/7.jpg' },
  { src: '/images/gallery/8.jpg' },
]

export default function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <section id="gallery" className="py-20 md:py-28 px-5 md:px-8 bg-[var(--color-surface)]/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[var(--color-accent)] font-semibold tracking-widest text-sm mb-3">
            GALLERY
          </p>
          <h2 className="font-display text-3xl md:text-4xl uppercase">
            Inside The Factory
          </h2>
        </div>

        <div className="columns-2 md:columns-4 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.button
              key={img.src}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
              onClick={() => setActive(img.src)}
              className={`block w-full rounded-xl overflow-hidden break-inside-avoid ${img.tall ? 'h-80' : 'h-48'}`}
            >
              <img
                src={img.src}
                alt="Fitness Factory gallery"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-6"
          >
            <button
              aria-label="Close"
              className="absolute top-6 right-6 text-white"
              onClick={() => setActive(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={active}
              alt="Enlarged gallery"
              className="max-h-[85vh] max-w-full rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
