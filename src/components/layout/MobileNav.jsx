import { navLinks, siteConfig } from '../../data/portfolio'
import NavLink from '../ui/NavLink'
import Button from '../ui/Button'

export default function MobileNav({ isOpen, onClose, activeId }) {
  return (
    <div
      className={`overflow-hidden border-t border-[var(--border)] bg-[var(--bg)] transition-all duration-300 ease-out lg:hidden ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}
      aria-hidden={!isOpen}
    >
      <nav className="flex flex-col gap-3 px-5 py-4" aria-label="Mobile navigation">
        {navLinks.map((link) => {
          const id = link.href.replace('#', '')
          return (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              isActive={activeId === id}
              onClick={onClose}
            />
          )
        })}
        <div className="pt-2">
          <Button
            href={siteConfig.cvUrl}
            variant="outline"
            className="w-full"
            onClick={onClose}
          >
            Download CV
          </Button>
        </div>
      </nav>
    </div>
  )
}
