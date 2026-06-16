import { useState } from 'react'
import { navLinks, siteConfig } from '../../data/portfolio'
import useScrollSpy from '../../hooks/useScrollSpy'
import NavLink from '../ui/NavLink'
import Button from '../ui/Button'
import MobileNav from './MobileNav'

const sectionIds = ['home', 'services', 'portfolio', 'about', 'pricing', 'contact']

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useScrollSpy(sectionIds)

  return (
    <header className="sticky top-0 z-50 bg-[var(--bg)]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8">
        <a
          href="#home"
          className="flex items-center gap-2 font-bold text-[var(--text-h)] transition-opacity duration-300 hover:opacity-70"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded bg-[var(--text-h)]">
            <span className="h-2 w-2 rounded-sm bg-white" />
          </span>
          {siteConfig.brand}
        </a>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => {
            const id = link.href.replace('#', '')
            return (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={activeId === id}
              />
            )
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href={siteConfig.cvUrl} variant="outline">
            Download CV
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-h)] transition-all duration-300 hover:bg-white hover:shadow-[var(--shadow)] lg:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5M3.75 15h16.5" />
            )}
          </svg>
        </button>
      </div>

      <MobileNav
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        activeId={activeId}
      />
    </header>
  )
}
