import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import About from './components/About'
import Trainer from './components/Trainer'
import Facilities from './components/Facilities'
import Membership from './components/Membership'
import Equipment from './components/Equipment'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text)] font-body">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <About />
        <Trainer />
        <Facilities />
        <Membership />
        <Equipment />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  )
}
