import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export default function Contact() {

  return (
    <section id="contact" className="py-20 md:py-28 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[var(--color-accent)] font-semibold tracking-widest text-sm mb-3">
            CONTACT
          </p>
          <h2 className="font-display text-3xl md:text-4xl uppercase">
            Let's Get You Started
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="bg-[var(--color-surface)] rounded-2xl p-6 space-y-4 border border-[var(--color-surface-2)]">
              <a href="tel:+919412157363" className="flex items-center gap-4 hover:text-[var(--color-accent)] transition-colors">
                <Phone size={20} className="text-[var(--color-accent)]" />
                <span>+91 94121 57363</span>
              </a>
              <a
                href="https://wa.me/919412157363"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-[var(--color-accent)] transition-colors"
              >
                <MessageCircle size={20} className="text-[var(--color-accent)]" />
                <span>WhatsApp: +91 94121 57363</span>
              </a>
              <a href="mailto:info@fitnessfactory.com" className="flex items-center gap-4 hover:text-[var(--color-accent)] transition-colors">
                <Mail size={20} className="text-[var(--color-accent)]" />
                <span>info@fitnessfactory.com</span>
              </a>
              <div className="flex items-center gap-4">
                <MapPin size={20} className="text-[var(--color-accent)]" />
                <span className="text-[var(--color-text-dim)]">Your Gym Address, City, State</span>
              </div>
              <div className="flex items-center gap-4">
                <Clock size={20} className="text-[var(--color-accent)]" />
                <span className="text-[var(--color-text-dim)]">5 am - 10 am and 3:30 pm - 10pm</span>
              </div>
            </div>

            {/* Replace with your gym's actual Google Maps embed URL */}
            <div className="rounded-2xl overflow-hidden h-64 border border-[var(--color-surface-2)]">
              <iframe
                title="Fitness Factory location"
                src="https://www.google.com/maps?q=gym&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-medium border border-[var(--color-surface-2)] hover:bg-white/10 transition-colors px-5 py-2.5 rounded-full"
            >
              Get Directions
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[var(--color-surface)] rounded-2xl p-6 md:p-8 space-y-8 border border-[var(--color-surface-2)] flex flex-col items-center justify-center text-center"
          >
            <h3 className="font-display text-2xl uppercase">Ready to Start?</h3>
            <p className="text-[var(--color-text-dim)] uppercase tracking-widest text-sm">Founded. Fitness Factory year 2000</p>
            <a
              href="https://wa.me/919412157363"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[var(--color-accent)] text-black font-semibold py-4 rounded-full hover:bg-white transition-colors text-lg flex items-center justify-center gap-2 mt-4"
            >
              <MessageCircle size={24} />
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
