export default function ProjectCard({ title, category, image, href, size = 'small' }) {
  return (
    <article
      className={`group overflow-hidden rounded-2xl bg-[var(--bg-card)] shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)] ${
        size === 'large' ? 'md:col-span-1' : ''
      }`}
    >
      <a href={href} className="block">
        <div className="overflow-hidden">
          <img
            src={image}
            alt={title}
            className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
              size === 'large' ? 'h-56 md:h-64' : 'h-44 md:h-48'
            }`}
            loading="lazy"
          />
        </div>
        <div className="p-5">
          <h3 className="font-bold text-[var(--text-h)]">{title}</h3>
          <p className="mt-1 text-sm text-[var(--text)]">{category}</p>
        </div>
      </a>
    </article>
  )
}
