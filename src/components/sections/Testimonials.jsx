import { testimonial, trustedBrands } from '../../data/portfolio'
import SectionHeading from '../ui/SectionHeading'

export default function Testimonials() {
  return (
    <section className="bg-[var(--dark)] py-16 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="mb-8 text-center text-sm text-neutral-400">Trusted by Others</p>

        <div className="mb-16 flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {trustedBrands.map((brand) => (
            <div
              key={brand.name}
              title={brand.name}
              className={`flex h-12 w-12 items-center justify-center rounded-full text-[10px] font-bold uppercase tracking-wide text-white transition-transform duration-300 hover:scale-110 md:h-14 md:w-14 ${brand.color}`}
            >
              {brand.name.slice(0, 2)}
            </div>
          ))}
        </div>

        <SectionHeading
          title="Clients Feedbacks 😍"
          className="text-white"
        />

        <div className="grid items-center gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">
          <div className="mx-auto w-full max-w-[280px]">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="aspect-square w-full rounded-2xl object-cover grayscale"
              loading="lazy"
            />
          </div>

          <blockquote className="text-left">
            <svg
              className="mb-6 h-10 w-10 text-neutral-500"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.45l1.135 1.668c-3.312 1.803-4.463 4.798-4.742 7.323.75-.236 1.597-.434 2.522-.434 2.946 0 5.334 2.104 5.334 5.334 0 2.89-2.354 5.334-5.575 5.334-2.652 0-4.54-1.53-5.122-3.243zm12.025 0c-1.03-1.094-1.583-2.321-1.583-4.31 0-3.5 2.457-6.637 6.03-8.45l1.135 1.668c-3.312 1.803-4.463 4.798-4.742 7.323.75-.236 1.597-.434 2.522-.434 2.946 0 5.334 2.104 5.334 5.334 0 2.89-2.354 5.334-5.575 5.334-2.652 0-4.54-1.53-5.122-3.243z" />
            </svg>
            <p className="text-base leading-relaxed text-neutral-300 md:text-lg">
              {testimonial.quote}
            </p>
            <footer className="mt-8">
              <cite className="not-italic">
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="mt-1 text-sm text-neutral-400">{testimonial.role}</p>
              </cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
