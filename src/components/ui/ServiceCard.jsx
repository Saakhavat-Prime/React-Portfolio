export default function ServiceCard({ initials, title, description, color }) {
  return (
    <article className="group rounded-2xl bg-[var(--bg-card)] p-6 shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)] md:p-8">
      <div
        className={`mb-5 flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold ${color}`}
      >
        {initials}
      </div>
      <h3 className="mb-3 text-lg font-bold text-[var(--text-h)]">{title}</h3>
      <p className="text-sm leading-relaxed text-[var(--text)]">{description}</p>
    </article>
  )
}
