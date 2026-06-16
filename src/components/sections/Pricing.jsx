import { useMemo, useState } from 'react'
import { pricingConfig } from '../../data/portfolio'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'

export default function Pricing() {
  const [selectedTypes, setSelectedTypes] = useState(['product-design'])
  const [pages, setPages] = useState(10)
  const [enabledFeatures, setEnabledFeatures] = useState(['responsive'])

  const toggleType = (id) => {
    setSelectedTypes((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id],
    )
  }

  const toggleFeature = (id) => {
    setEnabledFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id],
    )
  }

  const total = useMemo(() => {
    const typeTotal = pricingConfig.projectTypes
      .filter((t) => selectedTypes.includes(t.id))
      .reduce((sum, t) => sum + t.price, 0)

    const featureTotal = pricingConfig.features
      .filter((f) => enabledFeatures.includes(f.id))
      .reduce((sum, f) => sum + f.price, 0)

    const pageTotal = pages * pricingConfig.pagePrice

    return pricingConfig.basePrice + typeTotal + featureTotal + pageTotal
  }, [selectedTypes, enabledFeatures, pages])

  return (
    <section id="pricing" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading title="Calculate your pricing 📊" />

        <div className="rounded-2xl bg-[var(--bg-card)] p-6 shadow-[var(--shadow-lg)] md:p-10">
          <div className="mb-8">
            <p className="mb-4 text-sm font-semibold text-[var(--text-h)]">Project Type</p>
            <div className="flex flex-wrap gap-4">
              {pricingConfig.projectTypes.map((type) => (
                <label
                  key={type.id}
                  className="flex cursor-pointer items-center gap-2 text-sm text-[var(--text)] transition-colors duration-300 hover:text-[var(--text-h)]"
                >
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(type.id)}
                    onChange={() => toggleType(type.id)}
                    className="h-4 w-4 rounded border-[var(--border)] accent-[var(--text-h)]"
                  />
                  {type.label}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-semibold text-[var(--text-h)]">Pages</p>
              <span className="text-sm font-medium text-[var(--text-h)]">{pages}</span>
            </div>
            <input
              type="range"
              min={1}
              max={50}
              value={pages}
              onChange={(e) => setPages(Number(e.target.value))}
              className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-neutral-200 accent-[var(--text-h)]"
              aria-label="Number of pages"
            />
            <div className="mt-1 flex justify-between text-xs text-[var(--text)]">
              <span>1</span>
              <span>50+</span>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
            <div>
              <p className="mb-4 text-sm font-semibold text-[var(--text-h)]">Features</p>
              <ul className="space-y-4">
                {pricingConfig.features.map((feature) => (
                  <li
                    key={feature.id}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-[var(--text)]">{feature.label}</span>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={enabledFeatures.includes(feature.id)}
                      onClick={() => toggleFeature(feature.id)}
                      className={`relative h-6 w-11 rounded-full transition-colors duration-300 ${
                        enabledFeatures.includes(feature.id)
                          ? 'bg-[var(--text-h)]'
                          : 'bg-neutral-200'
                      }`}
                    >
                      <span
                        className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-300 ${
                          enabledFeatures.includes(feature.id)
                            ? 'translate-x-5'
                            : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6">
              <p className="text-sm text-[var(--text)]">Estimated Costs</p>
              <p className="mt-2 text-4xl font-bold text-[var(--text-h)]">
                ${total.toFixed(2)}
              </p>

              <ul className="mt-6 space-y-2">
                {pricingConfig.included.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-[var(--text)]"
                  >
                    <svg
                      className="h-4 w-4 shrink-0 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <Button href="#contact" variant="primary" className="mt-6 w-full">
                Buy now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
