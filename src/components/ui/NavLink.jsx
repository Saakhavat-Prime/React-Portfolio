export default function NavLink({ href, label, isActive, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`text-sm font-medium transition-colors duration-300 ${
        isActive
          ? 'text-[var(--text-h)]'
          : 'text-[var(--text)] hover:text-[var(--text-h)]'
      }`}
    >
      {label}
    </a>
  )
}
