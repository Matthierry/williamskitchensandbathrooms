import { phoneNumberDisplay, phoneNumberHref } from '../data/site'

export function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-brand-blue/30 bg-brand-charcoal/95 p-3 backdrop-blur md:hidden">
      <a href={phoneNumberHref} className="cta-primary w-full">
        Call Now: {phoneNumberDisplay}
      </a>
    </div>
  )
}
