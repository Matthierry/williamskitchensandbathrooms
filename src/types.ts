export type Service = {
  title: string
  description: string
  bullets: string[]
  featured?: boolean
}

export type GalleryItem = {
  title: string
  category: 'Kitchen' | 'Bathroom'
  image: string
  alt: string
  featured?: boolean
}

export type ReviewItem = {
  name: string
  area: string
  quote: string
  sourceLabel: string
  placeholder?: boolean
}

export type FaqItem = {
  question: string
  answer: string
}
