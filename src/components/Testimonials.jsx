import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Star } from 'lucide-react'
import { testimonials } from '../data/testimonials'
import 'swiper/css'
import 'swiper/css/pagination'

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 md:py-28 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[var(--color-accent)] font-semibold tracking-widest text-sm mb-3">
            REVIEWS
          </p>
          <h2 className="font-display text-3xl md:text-4xl uppercase mb-4">
            What Our Members Say
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex text-[var(--color-accent)]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="text-[var(--color-text-dim)] text-sm">4.8 average on Google</span>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="pb-12"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name}>
              <div className="bg-[var(--color-surface)] rounded-2xl p-6 h-full border border-[var(--color-surface-2)]">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={t.photo}
                    alt={t.name}
                    loading="lazy"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <div className="flex text-[var(--color-accent)]">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-[var(--color-text-dim)] text-sm leading-relaxed">
                  {t.review}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-4">
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-[var(--color-surface-2)] hover:bg-white/10 transition-colors text-sm font-medium px-6 py-3 rounded-full"
          >
            View Google Reviews
          </a>
        </div>
      </div>
    </section>
  )
}
