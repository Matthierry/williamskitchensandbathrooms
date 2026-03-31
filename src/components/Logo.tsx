export function Logo() {
  return (
    <a href="#top" className="inline-flex items-center gap-2" aria-label="Williams Kitchens & Bathrooms home">
      <span className="text-lg font-black tracking-wide text-brand-silver sm:text-xl">WILLIAMS</span>
      <span className="hidden text-xs text-white/80 sm:block">Kitchens & Bathrooms</span>
      <span className="ml-2 hidden h-1 w-10 rounded-full bg-brand-red sm:block" aria-hidden="true" />
      <span className="h-1 w-10 rounded-full bg-brand-blue" aria-hidden="true" />
    </a>
  )
}
