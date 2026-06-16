export default function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-md border border-[var(--accent-border)] bg-[var(--accent-bg)] px-2.5 py-1 font-mono text-xs text-[var(--accent)] transition-colors duration-300 hover:bg-[var(--accent)] hover:text-white ${className}`}
    >
      {children}
    </span>
  )
}
