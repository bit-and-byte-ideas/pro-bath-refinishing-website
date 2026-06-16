// Inline stroke icons (Lucide-style, 24x24, consistent 1.8 stroke).
// Single icon family keeps visual language coherent across the site.

export type IconName =
  | 'phone'
  | 'message'
  | 'droplet'
  | 'sparkles'
  | 'wrench'
  | 'shield'
  | 'clock'
  | 'star'
  | 'check'
  | 'instagram'
  | 'menu'
  | 'close'
  | 'arrow-right'
  | 'pin'
  | 'gem'
  | 'leaf'
  | 'dollar'
  | 'chevron-left'
  | 'chevron-right'
  | 'roller'
  | 'badge'

const PATHS: Record<IconName, React.ReactNode> = {
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  ),
  message: (
    <>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
    </>
  ),
  droplet: <path d="M12 2.7s6 5.7 6 10.3a6 6 0 0 1-12 0c0-4.6 6-10.3 6-10.3Z" />,
  sparkles: (
    <>
      <path d="M12 3l1.9 4.9L19 9.8l-5.1 1.9L12 16.6l-1.9-4.9L5 9.8l5.1-1.9L12 3Z" />
      <path d="M19 14l.8 2.1L22 17l-2.2.9L19 20l-.8-2.1L16 17l2.2-.9L19 14Z" />
    </>
  ),
  wrench: (
    <path d="M14.7 6.3a4 4 0 0 0 4.9 4.9l-9 9a2.83 2.83 0 0 1-4-4l9-9Zm0 0L18 3l3 3-3.3 3.3" />
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8.3-7 9-4-0.7-7-4.5-7-9V6l7-3Z" />
      <path d="m9 11.5 2 2 4-4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  star: (
    <path d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 18l-5.8 3 1.1-6.5L2.6 9.9l6.5-.9L12 2.6Z" />
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  badge: (
    <>
      <path d="M12 2l2.4 1.8 3-.2 1 2.8 2.4 1.7-.8 2.9.8 2.9-2.4 1.7-1 2.8-3-.2L12 22l-2.4-1.8-3 .2-1-2.8L3.2 16l.8-2.9-.8-2.9 2.4-1.7 1-2.8 3 .2L12 2Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  'arrow-right': <path d="M5 12h14M13 6l6 6-6 6" />,
  pin: (
    <>
      <path d="M20 10c0 6-8 11-8 11s-8-5-8-11a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  gem: (
    <>
      <path d="M6 3h12l3 6-9 12L3 9l3-6Z" />
      <path d="M3 9h18M9 3 6 9l6 12 6-12-3-6M9 9l3-6 3 6" />
    </>
  ),
  leaf: (
    <>
      <path d="M11 20A7 7 0 0 1 4 13c0-6 7-9 16-9 0 9-3 16-9 16Z" />
      <path d="M5 19c4-3 8-5 11-9" />
    </>
  ),
  dollar: (
    <>
      <path d="M12 2v20" />
      <path d="M16.5 7.5C16.5 5.6 14.5 4 12 4S7.5 5.6 7.5 7.8 9.5 11 12 11s4.5 1 4.5 3.2S14.5 18 12 18s-4.5-1.6-4.5-3.5" />
    </>
  ),
  'chevron-left': <path d="m15 6-6 6 6 6" />,
  'chevron-right': <path d="m9 6 6 6-6 6" />,
  roller: (
    <>
      <rect x="3" y="4" width="14" height="6" rx="1.5" />
      <path d="M17 7h2.5a1.5 1.5 0 0 1 1.5 1.5V11a1.5 1.5 0 0 1-1.5 1.5H12a1.5 1.5 0 0 0-1.5 1.5V16" />
      <rect x="8.5" y="16" width="4" height="5" rx="1" />
    </>
  ),
}

interface IconProps {
  name: IconName
  className?: string
  title?: string
}

export function Icon({ name, className, title }: IconProps) {
  return (
    <svg
      className={`icon icon--${name} ${className ?? ''}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      {PATHS[name]}
    </svg>
  )
}
