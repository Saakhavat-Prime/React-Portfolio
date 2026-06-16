const variants = {
  primary:
    'bg-[var(--text-h)] text-white hover:bg-neutral-800 hover:shadow-[var(--shadow)] hover:-translate-y-0.5',
  outline:
    'bg-white text-[var(--text-h)] border border-[var(--text-h)] hover:bg-neutral-50 hover:shadow-[var(--shadow)] hover:-translate-y-0.5',
  ghost: 'text-[var(--text-h)] hover:bg-neutral-100',
}

export default function Button({
  children,
  variant = 'primary',
  href,
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text-h)]'

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
