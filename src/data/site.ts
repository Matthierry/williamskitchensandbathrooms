import type { FaqItem, GalleryItem, ReviewItem, Service } from '../types'

const assetBase = import.meta.env.BASE_URL

export const phoneNumberDisplay = '07850 468326'
export const phoneNumberHref = 'tel:+447850468326'

export const navLinks = [
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'areas', label: 'Areas' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' }
]

export const trustSignals = [
  '4.9 Google rating',
  '21 Google reviews',
  '15+ years experience',
  'Free quotes',
  'Local trusted service'
]

export const areasCovered = ['Runcorn', 'Widnes', 'Warrington', 'Northwich', 'Liverpool', 'Cheshire']

export const services: Service[] = [
  {
    title: 'Kitchen Installation',
    featured: true,
    description:
      'Complete kitchen fitting service including removal, preparation, fitting, finishing and final checks.',
    bullets: ['Cabinet installation', 'Appliance integration', 'Precision finishing']
  },
  {
    title: 'Kitchen Renovations',
    featured: true,
    description:
      'Upgrade your existing kitchen with modern layouts, replacement units, improved storage and premium finishes.',
    bullets: ['Design-to-install support', 'Layout improvements', 'Kitchen-first planning']
  },
  {
    title: 'Bathroom Installation',
    description:
      'Stylish and practical bathroom installations with careful planning and dependable workmanship.',
    bullets: ['Showers and suites', 'Wall and floor tiling', 'Bathroom refits']
  },
  {
    title: 'Worktops, Sinks & Tiling',
    description: 'Refresh your space with replacement worktops, sinks, splashbacks and precise tiling work.',
    bullets: ['Worktop replacement', 'Sink and tap fitting', 'Feature tiling']
  },
  {
    title: 'Full Project Management',
    description:
      'One reliable team from first quote through to final handover, including plumbing and electrics where required.',
    bullets: ['Start-to-finish coordination', 'Trusted trade network', 'Clear communication']
  }
]

export const galleryItems: GalleryItem[] = [
  {
    title: 'Feature Kitchen - Anthracite & Quartz',
    category: 'Kitchen',
    image: `${assetBase}images/portfolio/kitchen-1.jpg`,
    alt: 'Dark modern fitted kitchen with white island and pendant lighting',
    featured: true
  },
  {
    title: 'Family Kitchen - Classic Grey',
    category: 'Kitchen',
    image: `${assetBase}images/portfolio/kitchen-2.jpg`,
    alt: 'Grey shaker kitchen with white worktops and breakfast bar',
    featured: true
  },
  {
    title: 'Contemporary Kitchen - Timber Worktops',
    category: 'Kitchen',
    image: `${assetBase}images/portfolio/kitchen-3.jpg`,
    alt: 'Contemporary fitted kitchen with timber worktops and grey units'
  },
  {
    title: 'Compact Kitchen Renovation',
    category: 'Kitchen',
    image: `${assetBase}images/portfolio/kitchen-4.jpg`,
    alt: 'Compact kitchen renovation with peninsula breakfast bar'
  },
  {
    title: 'Open Plan Kitchen Installation',
    category: 'Kitchen',
    image: `${assetBase}images/portfolio/kitchen-5.jpg`,
    alt: 'Open plan kitchen with island seating and glossy cabinetry'
  },
  {
    title: 'Kitchen Installation - Feature Finishes',
    category: 'Kitchen',
    image: `${assetBase}images/portfolio/kitchen-6.jpg`,
    alt: 'Kitchen installation with integrated appliances and premium finishes'
  },
  {
    title: 'Bathroom Renovation - Modern Suite',
    category: 'Bathroom',
    image: `${assetBase}images/portfolio/bathroom-1.jpg`,
    alt: 'Modern bathroom suite with contemporary fixtures and tiling'
  },
  {
    title: 'Bathroom Installation - Clean Contemporary',
    category: 'Bathroom',
    image: `${assetBase}images/portfolio/bathroom-2.jpg`,
    alt: 'Newly installed bathroom with clean contemporary design'
  }
]

export const reviews: ReviewItem[] = [
  {
    name: 'Google Review Placeholder 1',
    area: 'Runcorn',
    quote:
      'Replace this placeholder with a genuine Google review that mentions your kitchen fitting quality and communication.',
    sourceLabel: 'Google Reviews',
    placeholder: true
  },
  {
    name: 'Google Review Placeholder 2',
    area: 'Widnes',
    quote:
      'Add a real review here to highlight reliability, cleanliness and finish quality for local customers.',
    sourceLabel: 'Google Reviews',
    placeholder: true
  },
  {
    name: 'Google Review Placeholder 3',
    area: 'Warrington',
    quote:
      'Use genuine customer wording and keep this section updated as new completed projects come in.',
    sourceLabel: 'Google Reviews',
    placeholder: true
  }
]

export const faqs: FaqItem[] = [
  {
    question: 'Do you provide free kitchen installation quotes in Runcorn?',
    answer:
      'Yes. We provide free, no-obligation quotes across Runcorn and surrounding areas. We can advise on practical layouts, finishes and installation timescales.'
  },
  {
    question: 'Which areas do you cover?',
    answer:
      'We regularly cover Runcorn, Widnes, Warrington, Northwich, Liverpool and wider Cheshire for kitchen and bathroom projects.'
  },
  {
    question: 'How long does a typical kitchen installation take?',
    answer:
      'Every project is different, but many kitchen installations are completed over one to two weeks depending on size, preparation work and specification.'
  },
  {
    question: 'Can you manage plumbing and electrics as part of the job?',
    answer:
      'Yes. We can coordinate associated trades, including plumbing and electrics where required, to keep your installation moving smoothly.'
  },
  {
    question: 'Do you only do kitchens?',
    answer:
      'Kitchens are our core focus, but we also complete bathroom installations and renovation work for customers who want the same trusted standard.'
  }
]
