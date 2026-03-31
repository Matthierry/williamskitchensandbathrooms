const assetBase = import.meta.env.BASE_URL

export function Logo() {
  return (
    <a href="#top" className="inline-flex items-center" aria-label="Williams Kitchens & Bathrooms home">
      <img
        src={`${assetBase}images/branding/logo.png`}
        alt="Williams Kitchens & Bathrooms"
        className="h-12 w-auto sm:h-14"
        loading="eager"
      />
    </a>
  )
}
