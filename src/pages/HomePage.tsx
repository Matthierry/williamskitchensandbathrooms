import { FormEvent, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
  services,
  trustSignals
} from '../data/site'

const initialForm = {
  name: '',
  phone: '',
  email: '',
  service: '',
  area: '',
  message: ''
}

export function HomePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [formData, setFormData] = useState(initialForm)
  const navigate = useNavigate()

  const featuredProjects = useMemo(() => galleryItems.filter((item) => item.featured), [])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    navigate('/thank-you')
  }

  return (
    <div id="top" className="bg-brand-ink bg-grain">
      <Header />
      <main>
        <section className="section-shell pb-16 pt-12 sm:pt-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">Kitchen fitter in Runcorn</p>
              <h1 className="mt-3 text-4xl font-black leading-tight text-white sm:text-5xl">
                Premium kitchen installation with trusted local workmanship.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-silver sm:text-lg">
                Williams Kitchens & Bathrooms deliver high-quality kitchen renovations, kitchen fitting and bathroom
                installation across Runcorn, Widnes, Warrington and Cheshire. Family-run, experienced and focused on
                clean, reliable installations from start to finish.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={phoneNumberHref} className="cta-primary">Call Now</a>
                <a href="#contact" className="cta-secondary">Get a Free Quote</a>
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

        <section id="services" className="section-shell py-16">
          <SectionHeading
            eyebrow="Services"
            title="Kitchen-first services designed around your home"
            description="Our core work is kitchen installation and renovation, with bathrooms and supporting trades delivered to the same standard."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className={`card p-6 ${service.featured ? 'border-brand-blue/40' : ''}`}>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-silver">{service.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-white/90">
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell pb-16">
          <SectionHeading
            eyebrow="Why choose us"
            title="A reliable team for kitchens and bathrooms"
            description="We keep the process clear, practical and tidy so you always know what is happening and what comes next."
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
            title="Kitchen projects first, with room to grow your gallery"
            description="A selection of recent kitchen and bathroom installations, with kitchens featured first."
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
            title="Built to showcase genuine Google feedback"
            description="Replace placeholders with verified reviews, or swap this component for a Google reviews embed later."
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {reviews.map((review) => (
              <article key={review.name} className="card p-6">
                <p className="text-sm leading-relaxed text-brand-silver">“{review.quote}”</p>
                <p className="mt-4 text-sm font-semibold text-white">{review.name}</p>
                <p className="text-xs text-brand-slate">{review.area} • {review.sourceLabel}</p>
                {review.placeholder && <p className="mt-2 text-xs text-brand-red">Placeholder: replace with real review text.</p>}
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
            title="Local kitchen and bathroom installation across Cheshire"
            description="We’re based locally and regularly work throughout the following areas. If you’re nearby, get in touch for a quick quote."
          />
          <p className="card p-6 text-base leading-relaxed text-brand-silver">{areasCovered.join(', ')}.</p>
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
            title="Ready to plan your kitchen project?"
            description="Call now for the fastest response, or send a quote request and we’ll get back to you shortly."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="card p-6">
              <a href={phoneNumberHref} className="cta-primary w-full text-base">Call {phoneNumberDisplay}</a>
              <p className="mt-4 text-sm text-brand-silver">Serving {areasCovered.join(', ')} with trusted kitchen and bathroom fitting.</p>
            </div>

            <form className="card p-6" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-brand-silver">
                  Name
                  <input required className="mt-1 w-full rounded-lg border border-white/15 bg-black/20 px-3 py-2 text-white" value={formData.name} onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))} />
                </label>
                <label className="text-sm text-brand-silver">
                  Phone
                  <input required className="mt-1 w-full rounded-lg border border-white/15 bg-black/20 px-3 py-2 text-white" value={formData.phone} onChange={(event) => setFormData((prev) => ({ ...prev, phone: event.target.value }))} />
                </label>
                <label className="text-sm text-brand-silver">
                  Email
                  <input type="email" required className="mt-1 w-full rounded-lg border border-white/15 bg-black/20 px-3 py-2 text-white" value={formData.email} onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))} />
                </label>
                <label className="text-sm text-brand-silver">
                  Service
                  <input required className="mt-1 w-full rounded-lg border border-white/15 bg-black/20 px-3 py-2 text-white" value={formData.service} onChange={(event) => setFormData((prev) => ({ ...prev, service: event.target.value }))} placeholder="Kitchen installation" />
                </label>
              </div>
              <label className="mt-4 block text-sm text-brand-silver">
                Area
                <input required className="mt-1 w-full rounded-lg border border-white/15 bg-black/20 px-3 py-2 text-white" value={formData.area} onChange={(event) => setFormData((prev) => ({ ...prev, area: event.target.value }))} placeholder="Runcorn" />
              </label>
              <label className="mt-4 block text-sm text-brand-silver">
                Message
                <textarea required rows={4} className="mt-1 w-full rounded-lg border border-white/15 bg-black/20 px-3 py-2 text-white" value={formData.message} onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))} />
              </label>
              <p className="mt-3 text-xs text-brand-slate">
                GitHub Pages note: this form currently uses a frontend-only success flow. Connect Formspree or Netlify Forms later for live submissions.
              </p>
              <button type="submit" className="cta-primary mt-4 w-full">Send quote request</button>
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
          url: 'https://matthierry.github.io/williamskitchensandbathrooms/',
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
