import { useState } from 'react'
import { navLinks, phoneNumberDisplay, phoneNumberHref } from '../data/site'
import { Logo } from './Logo'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-ink/95 backdrop-blur">
      <div className="section-shell flex h-16 items-center justify-between gap-3">
        <Logo />
        <button
          className="rounded-lg border border-white/20 px-3 py-2 text-sm md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          Menu
        </button>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="text-sm text-brand-silver hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <a href={phoneNumberHref} className="cta-primary hidden md:inline-flex" aria-label="Call Williams Kitchens and Bathrooms now">
          Call {phoneNumberDisplay}
        </a>
      </div>

      {open && (
        <nav id="mobile-nav" className="section-shell space-y-2 border-t border-white/10 pb-4 pt-3 md:hidden" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="block rounded-lg px-2 py-2 text-sm text-brand-silver hover:bg-white/5 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href={phoneNumberHref} className="cta-primary mt-2 w-full">
            Call {phoneNumberDisplay}
          </a>
        </nav>
      )}
    </header>
  )
}
