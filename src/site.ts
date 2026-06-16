// Single source of truth for site content.
// Sourced from probathrefinishing.com (business details, services, gallery).

import type { IconName } from './icons'

export const business = {
  name: 'Pro Bath Refinishing',
  tagline:
    'Repair & upgrade your existing countertops, bathtub, and fiberglass or tile showers to better than new — in one day.',
  phoneDisplay: '(619) 781-6348',
  phoneHref: 'tel:+16197816348',
  smsHref: 'sms:+16197816348',
  email: 'info@probathrefinishing.com',
  emailHref: 'mailto:info@probathrefinishing.com',
  serviceArea: 'San Diego County, CA',
  license: 'CA Lic# 1058846',
  yearsExperience: '25+',
  instagram: '@pro_bath_refinishing',
  instagramHref: 'https://www.instagram.com/pro_bath_refinishing/',
} as const

export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Finishes', href: '#finishes' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Why Us', href: '#why' },
  { label: 'Contact', href: '#contact' },
]

export interface Service {
  icon: IconName
  title: string
  description: string
  points: string[]
}

export const services: Service[] = [
  {
    icon: 'droplet',
    title: 'Bathtub & Shower Refinishing',
    description:
      'Complete reglazing and repair for fiberglass, acrylic, and cast-iron tubs and tile showers.',
    points: ['Like-new gloss finish', 'Dozens of color options', 'Ready to use in 24 hours'],
  },
  {
    icon: 'gem',
    title: 'Imitation Stone Coatings',
    description:
      'Transform kitchen counters, vanity tops, and shower walls with durable stone-look coatings.',
    points: ['Granite & quartz looks', 'Seamless over old tile', 'A fraction of replacement cost'],
  },
  {
    icon: 'wrench',
    title: 'Repairs & Restoration',
    description:
      'Structural support, chip and crack patches, and damage restoration that disappears into the finish.',
    points: ['Plumber cut-out repairs', 'Crack & hole patching', 'Reinforced soft spots'],
  },
  {
    icon: 'sparkles',
    title: 'Sand & Polishing',
    description:
      'Bring back the shine on existing surfaces with professional sanding and polishing for an ultra-smooth feel.',
    points: ['Removes etching & dullness', 'Ultra-smooth finish', 'Restores original luster'],
  },
  {
    icon: 'badge',
    title: 'Free Estimates',
    description:
      'Not sure where to start? Text us a few photos and get a fast, no-obligation quote — usually same day.',
    points: ['Text photos for a quote', 'No-obligation pricing', 'Honest recommendations'],
  },
]

export interface ProcessStep {
  num: string
  icon: IconName
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    num: '01',
    icon: 'message',
    title: 'Text a Photo',
    description:
      'Send a few pictures of your tub, shower, or counter by text or call. We reply with a fast, free estimate.',
  },
  {
    num: '02',
    icon: 'wrench',
    title: 'Prep & Repair',
    description:
      'We mask off the area, clean and etch the surface, then repair any chips, cracks, or soft spots.',
  },
  {
    num: '03',
    icon: 'roller',
    title: 'Refinish & Coat',
    description:
      'Multiple coats of premium finish or stone coating are sprayed on for a flawless, factory-smooth result.',
  },
  {
    num: '04',
    icon: 'clock',
    title: 'Ready in 24 Hours',
    description:
      'Most projects are done in a single day and ready to use the next — no demolition, no week-long mess.',
  },
]

export interface Finish {
  name: string
  swatch: string // CSS color/gradient approximation
  image: string
}

// Named stone-coating colors shown in our real project photos.
export const finishes: Finish[] = [
  { name: 'Slate Gray', swatch: '#9aa0a6', image: '/gallery/project-01.jpg' },
  { name: 'Oyster Bay', swatch: '#e7e1d3', image: '/gallery/project-02.jpg' },
  { name: 'Granite', swatch: '#cfc7b6', image: '/gallery/project-03.jpg' },
  { name: 'Fieldstone', swatch: '#8f8f86', image: '/gallery/project-07.jpg' },
  { name: 'Midnight Quartz', swatch: '#2b2f38', image: '/gallery/project-11.jpg' },
  { name: 'Sunburst', swatch: '#f5b301', image: '/gallery/project-10.jpg' },
]

export interface GalleryItem {
  src: string
  alt: string
  span?: 'tall' | 'wide'
}

export const gallery: GalleryItem[] = [
  { src: '/gallery/project-06.jpg', alt: 'Refinished white bathtub with restored gloss against blue tile' },
  { src: '/gallery/project-09.jpg', alt: 'Modern fireplace surround and bench finished in light stone coating', span: 'wide' },
  { src: '/gallery/project-08.jpg', alt: 'Freshly reglazed bright white bathtub' },
  { src: '/gallery/project-11.jpg', alt: 'Kitchen counter refinished in dark speckled stone coating' },
  { src: '/gallery/project-10.jpg', alt: 'Glossy yellow refinished kitchen bar countertop' },
  { src: '/gallery/project-04.jpg', alt: 'Before and after of a blue-tile water feature refinish', span: 'tall' },
  { src: '/gallery/project-02.jpg', alt: 'Tile countertop coated in Oyster Bay stone finish' },
  { src: '/gallery/project-12.jpg', alt: 'Reglazed white kitchen sink with high-gloss finish' },
  { src: '/gallery/project-05.jpg', alt: 'Before and after of a plumber cut-out shower wall repair' },
  { src: '/gallery/project-03.jpg', alt: 'Countertop coated in Granite-look stone finish' },
  { src: '/gallery/project-01.jpg', alt: 'Vanity sink coated in Slate Gray stone finish' },
  { src: '/gallery/project-07.jpg', alt: 'Kitchen counter coated in Fieldstone stone finish' },
]

export interface Benefit {
  icon: IconName
  title: string
  description: string
}

export const benefits: Benefit[] = [
  {
    icon: 'dollar',
    title: 'Save up to 75%',
    description:
      'Refinishing costs a fraction of tearing out and replacing — keep your budget for what matters.',
  },
  {
    icon: 'clock',
    title: 'Done in One Day',
    description: 'No demolition or week-long remodel. Most jobs are finished and usable within 24 hours.',
  },
  {
    icon: 'leaf',
    title: 'Less Waste',
    description: 'Restoring your existing fixtures keeps tons of tubs, tile, and counters out of the landfill.',
  },
  {
    icon: 'shield',
    title: 'Built to Last',
    description: 'Premium coatings and proper prep mean a durable, easy-to-clean finish that holds up for years.',
  },
]

export interface Stat {
  value: string
  label: string
}

export const stats: Stat[] = [
  { value: '25+', label: 'Years in business' },
  { value: '1 Day', label: 'Typical turnaround' },
  { value: '24 hr', label: 'Ready to use' },
  { value: '100%', label: 'Licensed & insured' },
]
