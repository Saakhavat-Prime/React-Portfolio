import { useState } from 'react'
import { aboutTabs,  } from '../../data/portfolio'
import profileImg2 from "../../assets/profile2.png";
import Button from '../ui/Button'

export default function About() {
  const [activeTab, setActiveTab] = useState(aboutTabs[0].id)
  const activeContent = aboutTabs.find((tab) => tab.id === activeTab)

  return (
    <section id="about" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <img
            src={profileImg2}
            alt="Janice Quinn working on laptop"
            className="w-full "
            loading="lazy"
          />
        </div>

        <div className="order-1 lg:order-2">
          <div
            className="mb-6 flex flex-wrap gap-6 border-b border-[var(--border)]"
            role="tablist"
            aria-label="About sections"
          >
            {aboutTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`relative pb-3 text-sm font-medium transition-colors duration-300 ${
                  activeTab === tab.id
                    ? 'text-[var(--text-h)]'
                    : 'text-[var(--text)] hover:text-[var(--text-h)]'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute inset-x-0 -bottom-px h-0.5 bg-[var(--text-h)]" />
                )}
              </button>
            ))}
          </div>

          <div
            role="tabpanel"
            id={`panel-${activeTab}`}
            aria-labelledby={`tab-${activeTab}`}
            className="text-sm leading-relaxed text-[var(--text)] md:text-base"
          >
            {activeContent?.content}
          </div>

          <div className="mt-8">
            <Button href="#contact" variant="primary">
              Hire me
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
