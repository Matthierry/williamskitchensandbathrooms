type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue">{eyebrow}</p>}
      <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-brand-silver">{description}</p>}
    </div>
  )
}
