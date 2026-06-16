import { footerLinks, socialLinks } from '../../data/portfolio'
import SocialIcon from '../ui/SocialIcon'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 md:flex-row md:px-8">
        <div className="flex gap-3">
          {socialLinks.map((link) => (
            <SocialIcon key={link.label} {...link} />
          ))}
        </div>

        <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--text)] transition-colors duration-300 hover:text-[var(--text-h)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
