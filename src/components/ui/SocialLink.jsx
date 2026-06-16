export default function SocialLink({ href, label, icon, className = '' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`group inline-flex items-center gap-2 rounded-lg bg-[var(--social-bg)] px-3 py-2 text-sm text-[var(--text-h)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow)] ${className}`}
    >
      <svg
        className="h-[18px] w-[18px] transition-transform duration-300 group-hover:scale-110 dark:invert dark:brightness-200"
        aria-hidden="true"
      >
        <use href={`/icons.svg#${icon}`} />
      </svg>
      <span className="hidden sm:inline">{label}</span>
    </a>
  )
}
