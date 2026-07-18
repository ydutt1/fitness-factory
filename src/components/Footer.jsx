import { Dumbbell } from 'lucide-react'
import { Instagram, Facebook } from './SocialIcons'
import { navLinks } from '../data/nav'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-surface-2)] pt-14 pb-8 px-5 md:px-8">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        <div>
          <div className="flex items-center gap-2 font-display text-lg mb-3">
            <Dumbbell className="text-[var(--color-accent)]" size={22} />
            FITNESS<span className="text-[var(--color-accent)]">FACTORY</span>
          </div>
          <p className="text-[var(--color-text-dim)] text-sm leading-relaxed">
            A modern gym built for real, honest results.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="https://www.instagram.com/fitnesfactorygym/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[var(--color-text-dim)] hover:text-[var(--color-accent)] transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/FITNESSFACTORY" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[var(--color-text-dim)] hover:text-[var(--color-accent)] transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm tracking-wide">QUICK LINKS</h4>
          <ul className="space-y-2 text-sm text-[var(--color-text-dim)]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm tracking-wide">LOCATION</h4>
          <p className="text-[var(--color-text-dim)] text-sm leading-relaxed">
            G-17 Shivalik Nagar , Near Shiv Mandir
            <br /> Ranipur, Haridwar, Uttarakhand 249403
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm tracking-wide">OPENING HOURS</h4>
          <p className="text-[var(--color-text-dim)] text-sm leading-relaxed">
            Mon – Sat: 6:00 AM – 10:00 PM
            <br /> Sunday: Closed
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-[var(--color-surface-2)] pt-6 text-center text-xs text-[var(--color-text-dim)]">
        © {new Date().getFullYear()} Fitness Factory. All rights reserved.
      </div>
    </footer>
  )
}
