// lucide-react removed brand/logo icons, so these are small hand-written
// SVG icons for Instagram, Facebook and YouTube used across the site.

export function Instagram({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" />
    </svg>
  )
}

export function Facebook({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M14 9h2.5V5.5H14C11.79 5.5 10 7.29 10 9.5V12H8v3.5h2V22h3.5v-6.5H16l.5-3.5h-3V9.8c0-.44.36-.8.8-.8Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Youtube({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2" y="5" width="20" height="14" rx="4" stroke="currentColor" strokeWidth="2" />
      <path d="M10.5 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor" />
    </svg>
  )
}
