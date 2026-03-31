import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-brand-ink">
      <Header />
      <main className="section-shell py-16">
        <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
        <p className="mt-4 text-sm text-brand-silver">Last updated: 31 March 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-brand-silver">
          <section>
            <h2 className="text-lg font-semibold text-white">Who we are</h2>
            <p>Williams Kitchens & Bathrooms is a local home improvement business providing kitchen and bathroom installation services.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-white">Information we collect</h2>
            <p>When you contact us, we may collect your name, phone number, email address, area and project details.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-white">How we use your data</h2>
            <p>We use your information only to respond to enquiries, provide quotes and deliver services you request.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-white">Retention and security</h2>
            <p>We keep personal information only as long as needed for customer service and legal obligations.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-white">Your rights</h2>
            <p>You can request access, correction or deletion of personal data by contacting us directly.</p>
          </section>
        </div>

        <Link to="/" className="cta-secondary mt-10">Back to homepage</Link>
      </main>
      <Footer />
    </div>
  )
}
