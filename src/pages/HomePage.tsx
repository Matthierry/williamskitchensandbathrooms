import { useMemo, useState } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { MobileCallBar } from '../components/MobileCallBar'
import { SectionHeading } from '../components/SectionHeading'
import {
  areasCovered,
  faqs,
  galleryItems,
  phoneNumberDisplay,
  phoneNumberHref,
  reviews,
  trustSignals
} from '../data/site'

export function HomePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const featuredProjects = useMemo(() => galleryItems.filter((item) => item.featured), [])

  return (
    <div id="top" className="bg-brand-ink bg-grain">
      <Header />
      <main>
        <section className="section-shell pb-16 pt-12 sm:pt-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">Kitchen and bathroom specialists in Runcorn & Widnes</p>
              <h1 className="mt-3 text-4xl font-black leading-tight text-white sm:text-5xl">
                Fitted kitchens and bathrooms with local, reliable workmanship.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-silver sm:text-lg">
                From fitted kitchens in Runcorn to bathroom renovations in Widnes and kitchen installation in Warrington,
                every project is completed with care, clear communication and tidy finishes.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={phoneNumberHref} className="cta-primary">Call Now</a>
                <a href="#contact" className="cta-secondary">Request a free quote</a>
              </div>
              <p className="mt-4 text-sm text-brand-silver">Free quotes • 15+ years experience • Local trusted service</p>
            </div>

            <div className="card overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}images/portfolio/kitchen-1.jpg`}
                alt="Modern dark fitted kitchen installed by Williams Kitchens and Bathrooms"
                className="h-full min-h-[280px] w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/5 py-6">
          <div className="section-shell flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {trustSignals.map((signal) => (
              <span key={signal} className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs font-medium text-brand-silver sm:text-sm">
                {signal}
              </span>
            ))}
          </div>
        </section>

        <section className="section-shell pb-16 pt-12 sm:pt-16">
          <SectionHeading
            eyebrow="Why choose us"
            title="A trusted local team from quote to completion"
            description="You get honest advice, reliable workmanship and a professional finish you can enjoy for years."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Experienced fitters',
              'Reliable local service',
              'Quality workmanship',
              'Kitchen-first expertise',
              'Free quotes',
              'Start-to-finish installation'
            ].map((item) => (
              <div key={item} className="card p-5 text-sm font-medium text-white">{item}</div>
            ))}
          </div>
        </section>

        <section id="portfolio" className="section-shell pb-16">
          <SectionHeading
            eyebrow="Recent work"
            title="A selection of our kitchen and bathroom installations"
            description="Work to be proud of"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <button
                key={item.title}
                className="group card overflow-hidden text-left"
                onClick={() => setSelectedImage(item.image)}
                aria-label={`Open image: ${item.title}`}
              >
                <img src={item.image} alt={item.alt} className="h-56 w-full object-cover transition duration-300 group-hover:scale-105" loading="lazy" />
                <div className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-blue">{item.category}</p>
                  <h3 className="mt-2 text-base font-semibold text-white">{item.title}</h3>
                </div>
              </button>
            ))}
          </div>

          {!!featuredProjects.length && (
            <p className="mt-5 text-sm text-brand-slate">
              Featured kitchens: {featuredProjects.map((project) => project.title).join(' • ')}
            </p>
          )}
        </section>

        <section id="reviews" className="section-shell pb-16">
          <SectionHeading
            eyebrow="Reviews"
            title="Built around genuine customer feedback"
            description="Recent feedback from local kitchen and bathroom installations."
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {reviews.map((review) => (
              <article key={review.name} className="card p-6">
                <p className="text-sm leading-relaxed text-brand-silver">“{review.quote}”</p>
                <p className="mt-4 text-sm font-semibold text-white">{review.name}</p>
                <p className="text-xs text-brand-slate">{review.area ? `${review.area} • ${review.sourceLabel}` : review.sourceLabel}</p>
              </article>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <a className="cta-secondary" href="https://www.google.com/search?q=Williams+Kitchens+Bathrooms+Runcorn" target="_blank" rel="noreferrer">
              View Google Profile
            </a>
            <a className="cta-secondary" href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook Page (optional)
            </a>
          </div>
        </section>

        <section id="areas" className="section-shell pb-16">
          <SectionHeading
            eyebrow="Areas we cover"
            title="Areas We Cover"
            description="We provide kitchen and bathroom services across the local area, including:"
          />
          <ul className="card grid gap-2 p-6 text-base leading-relaxed text-brand-silver sm:grid-cols-2 lg:grid-cols-3">
            {areasCovered.map((area) => (
              <li key={area}>• {area}</li>
            ))}
          </ul>
        </section>

        <section id="faq" className="section-shell pb-16">
          <SectionHeading eyebrow="FAQ" title="Common questions before booking" />
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="card p-5">
                <summary className="cursor-pointer list-none text-base font-semibold text-white">{faq.question}</summary>
                <p className="mt-3 text-sm leading-relaxed text-brand-silver">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contact" className="section-shell pb-16">
          <SectionHeading
            eyebrow="Free quote"
            title="Ready to start your kitchen or bathroom project?"
            description="Get a quote today, contact us for advice, or book a consultation at a time that suits you."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="card p-6">
              <a href={phoneNumberHref} className="cta-primary w-full text-base">Contact us: {phoneNumberDisplay}</a>
              <p className="mt-4 text-sm text-brand-silver">Serving local homeowners with trusted kitchens and bathrooms across Runcorn, Widnes, Frodsham, Helsby, Warrington, St Helens, Prescot, Ellesmere Port, Northwich, Chester, Liverpool & Tarporley.</p>
            </div>

            {/* Replace YOUR_EMAIL_HERE with your real email address. First FormSubmit submission may require email activation/confirmation. */}
            <form
              className="card p-6"
              action="https://formsubmit.co/scenickitchens@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_subject" value="New website enquiry" />
              <input type="hidden" name="_next" value="https://williamskitchensandbathrooms.com/thanks.html" />
              <input type="hidden" name="_captcha" value="true" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_cc" value="statmatt14@gmail.com" />
              <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
              <div className="grid gap-4 sm:grid-cols-2">
                <label htmlFor="contact-name" className="text-sm text-brand-silver">
                  Name
                  <input id="contact-name" name="name" type="text" required className="mt-1 w-full rounded-lg border border-white/15 bg-black/20 px-3 py-2 text-white" />
                </label>
                <label htmlFor="contact-phone" className="text-sm text-brand-silver">
                  Phone
                  <input id="contact-phone" name="phone" type="tel" required className="mt-1 w-full rounded-lg border border-white/15 bg-black/20 px-3 py-2 text-white" />
                </label>
                <label htmlFor="contact-email" className="text-sm text-brand-silver">
                  Email
                  <input id="contact-email" name="email" type="email" required className="mt-1 w-full rounded-lg border border-white/15 bg-black/20 px-3 py-2 text-white" />
                </label>
                <label htmlFor="contact-service" className="text-sm text-brand-silver">
                  Service
                  <input id="contact-service" name="service" type="text" required className="mt-1 w-full rounded-lg border border-white/15 bg-black/20 px-3 py-2 text-white" placeholder="Kitchen installation" />
                </label>
              </div>
              <label htmlFor="contact-area" className="mt-4 block text-sm text-brand-silver">
                Area
                <input id="contact-area" name="area" type="text" required className="mt-1 w-full rounded-lg border border-white/15 bg-black/20 px-3 py-2 text-white" placeholder="Runcorn" />
              </label>
              <label htmlFor="contact-message" className="mt-4 block text-sm text-brand-silver">
                Message
                <textarea id="contact-message" name="message" required rows={4} className="mt-1 w-full rounded-lg border border-white/15 bg-black/20 px-3 py-2 text-white" />
              </label>
              <button type="submit" className="cta-primary mt-4 w-full">Book a consultation</button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
      <MobileCallBar />

      {selectedImage && (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-black/85 p-4" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Selected project" className="max-h-[90vh] w-auto rounded-lg border border-white/20" />
        </div>
      )}

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Williams Kitchens & Bathrooms',
          telephone: '+44 7850 468326',
          areaServed: areasCovered,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Runcorn',
            addressRegion: 'Cheshire',
            addressCountry: 'GB'
          },
          url: 'https://williamskitchensandbathrooms.com/',
          sameAs: ['https://facebook.com']
        })}
      </script>

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer
            }
          }))
        })}
      </script>
    </div>
  )
}
