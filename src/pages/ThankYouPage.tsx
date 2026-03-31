import { Link } from 'react-router-dom'
import { phoneNumberDisplay, phoneNumberHref } from '../data/site'

export function ThankYouPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-brand-ink px-4">
      <div className="card max-w-xl p-8 text-center">
        <h1 className="text-3xl font-bold text-white">Thank you for your enquiry</h1>
        <p className="mt-4 text-brand-silver">We have received your details. For the fastest response, please call us directly.</p>
        <a href={phoneNumberHref} className="cta-primary mt-6 w-full">Call {phoneNumberDisplay}</a>
        <Link to="/" className="cta-secondary mt-3 w-full">Return to homepage</Link>
      </div>
    </main>
  )
}
