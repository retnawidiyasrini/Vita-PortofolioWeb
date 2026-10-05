import { navItems, personal } from '../../data/portfolio'

const socialLinks = [
  { label: 'GitHub', href: personal.social.github },
  { label: 'LinkedIn', href: personal.social.linkedin },
  { label: 'Twitter', href: personal.social.twitter },
]

function Footer() {
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    const target = document.querySelector(href)
    if (target) {
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="relative border-t border-white/8 px-6 py-12 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="text-xl font-extrabold tracking-tight text-white"
            >
              Vita<span className="text-gradient">.dev</span>
            </a>
            <p className="mt-2 max-w-xs text-sm text-slate-400">
              {personal.role} based in {personal.location}.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social links */}
          <ul className="flex gap-3">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-xs font-semibold text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:text-white hover:glow-accent"
                >
                  {social.label.slice(0, 2)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {year} {personal.name}. All rights reserved.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300 transition-all duration-200 hover:text-white hover:glow-accent"
          >
            Back to top
            <span className="transition-transform duration-200 group-hover:-translate-y-0.5">
              ↑
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
