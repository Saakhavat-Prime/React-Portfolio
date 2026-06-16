export default function SectionHeading({ title, className = '' }) {
  return (
    <h2
      className={`mb-10 text-center text-2xl font-bold text-[var(--text-h)] md:mb-14 md:text-3xl ${className}`}
    >
      {title}
    </h2>
  )
}
