import type { FaqItem, GalleryItem, ReviewItem, Service, SupplierLogo } from '../types'

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

export const supplierLogos: SupplierLogo[] = [
  {
    name: 'B&Q',
    image: `${assetBase}images/branding/bq-logo.jpg`,
    alt: 'B&Q kitchen supplier logo'
  },
  {
    name: 'Wren',
    image: `${assetBase}images/branding/wren-logo.jpg`,
    alt: 'Wren Kitchens supplier logo'
  },
  {
    name: 'Howdens',
    image: `${assetBase}images/branding/howdens-logo.jpg`,
    alt: 'Howdens kitchen supplier logo'
  },
  {
    name: 'Wickes',
    image: `${assetBase}images/branding/wickes-logo.jpg`,
    alt: 'Wickes kitchen supplier logo'
  },
  {
    name: 'Magnet',
    image: `${assetBase}images/branding/magnet-logo.jpg`,
    alt: 'Magnet kitchen supplier logo'
  }
]

export const areasCovered = [
  'Runcorn',
  'Widnes',
  'Frodsham',
  'Helsby',
  'Warrington',
  'St Helens',
  'Prescot',
  'Ellesmere Port',
  'Northwich',
  'Great Sankey',
  'Liverpool',
  'Weaverham',
  'Chester',
  'Tarporley'
]

export const services: Service[] = [
  {
    title: 'Kitchen Installation',
    featured: true,
    description:
      'Complete installation service for a smooth, stress-free finish, including preparation, fitting and final checks.',
    bullets: ['Cabinet and appliance installation', 'Planned timelines and tidy working', 'High-quality finishing details']
  },
  {
    title: 'Kitchen Renovations',
    featured: true,
    description:
      'Transform older spaces into practical, modern rooms with better flow, smarter storage and long-lasting materials.',
    bullets: ['Design-to-install guidance', 'Layout and storage improvements', 'Fitted kitchens in Frodsham and nearby']
  },
  {
    title: 'Bathroom Installation',
    description:
      'Create a bathroom that feels comfortable, modern and built to last, with careful planning at every stage.',
    bullets: ['Showers, suites and bathroom refits', 'Wall and floor tiling', 'Bathroom renovation in Helsby and surrounding areas']
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
    bullets: ['Start-to-finish coordination', 'Trusted local trade network', 'Clear updates and dependable scheduling']
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
    name: 'John',
    area: '',
    quote:
      'Bought new kitchen from Wren. Jason and Alan carefully removed old kitchen (because we sold it) and fitted new one. They are honest, reliable, hard-working guys who are happy to help any way they can. Nothing is too much trouble and their work is of the highest standard. Great job, highly recommended.',
    sourceLabel: 'Google review'
  },
  {
    name: 'Andrea',
    area: '',
    quote:
      "Just had my kitchen fitted by Jason and Alan, and couldn't be happier with the kitchen and the service received. They are trustworthy, punctual, arriving exactly when they say they will, the workmanship and quality of finish cannot be faulted, and nothing was too much trouble.",
    sourceLabel: 'Google review'
  },
  {
    name: 'Louise',
    area: '',
    quote:
      "Alan and Jason just fitted our en suite shower room. Can't recommend them highly enough. Outstanding workmanship, completed within the timescale predicted. Great communication and problem solving skills. Overall just fantastic.",
    sourceLabel: 'Google review'
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
      'We regularly cover Runcorn, Widnes, Frodsham, Helsby, Warrington, St Helens, Prescot, Ellesmere Port, Northwich, Great Sankey, Liverpool, Weaverham, Chester and Tarporley for kitchen and bathroom projects.'
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
