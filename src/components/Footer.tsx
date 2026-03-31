import { Link } from 'react-router-dom'
import { areasCovered, navLinks, phoneNumberDisplay, phoneNumberHref } from '../data/site'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30 pb-24 pt-12 md:pb-12">
      <div className="section-shell grid gap-10 md:grid-cols-3">
        <div>
          <h2 className="text-lg font-semibold">Williams Kitchens & Bathrooms</h2>
          <p className="mt-3 text-sm text-brand-silver">Trusted local kitchen and bathroom installation specialists.</p>
          <a href={phoneNumberHref} className="mt-4 inline-block text-sm font-semibold text-brand-blue hover:text-blue-400">
            {phoneNumberDisplay}
          </a>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-silver">Quick links</h3>
          <ul className="mt-3 space-y-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`/#${link.id}`} className="text-sm text-white/80 hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link to="/privacy-policy" className="text-sm text-white/80 hover:text-white">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-silver">Areas covered</h3>
          <p className="mt-3 text-sm text-white/80">{areasCovered.join(' • ')}</p>
        </div>
      </div>
    </footer>
  )
}
