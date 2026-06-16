import { stats } from '../../data/portfolio'

export default function Stats() {
  return (
    <section className="py-12 md:py-16" aria-label="Statistics">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 md:grid-cols-4 md:px-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="group text-center transition-transform duration-300 hover:-translate-y-1"
          >
            <p className="text-3xl font-bold text-[var(--text-h)] md:text-4xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-[var(--text)]">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
