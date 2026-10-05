import { useEffect, useState } from 'react'
import { navItems, personal } from '../../data/portfolio'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeHref, setActiveHref] = useState(navItems[0]?.href ?? '')

  // Shrink/strengthen the bar once the page scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the nav item for the section currently in view.
  useEffect(() => {
    const ids = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null)
    if (ids.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveHref(`#${visible.target.id}`)
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    ids.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    const target = document.querySelector(href)
    if (target) {
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveHref(href)
      setMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 sm:px-7 ${
          scrolled ? 'glass glow-accent' : 'bg-transparent'
        }`}
      >
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="text-lg font-extrabold tracking-tight text-white"
        >
          Vita<span className="text-gradient">.dev</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeHref === item.href
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}
                {activeHref === item.href && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)]" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${personal.email}`}
          className="hidden rounded-lg bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-transform duration-200 hover:scale-105 md:inline-flex"
        >
          Hire me
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 md:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 block h-0.5 w-5 rounded bg-current transition-all duration-300 ${
                menuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 rounded bg-current transition-all duration-300 ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-5 rounded bg-current transition-all duration-300 ${
                menuOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`mx-auto max-w-6xl overflow-hidden px-4 transition-all duration-300 md:hidden ${
          menuOpen ? 'mt-2 max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="glass glow-accent flex flex-col gap-1 rounded-2xl p-3">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  activeHref === item.href
                    ? 'bg-white/10 text-white'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${personal.email}`}
              className="mt-1 block rounded-lg bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Hire me
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
