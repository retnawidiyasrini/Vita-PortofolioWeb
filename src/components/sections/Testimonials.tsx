import { testimonials } from '../../data/portfolio'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import FloatingDecor from '../ui/FloatingDecor'

function initials(name: string) {
  return name
    .split(' ')
    .map((w) => w.charAt(0))
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function Testimonials() {
  const [headerRef, headerVisible] = useScrollReveal<HTMLDivElement>()
  const [gridRef, gridVisible] = useScrollReveal<HTMLDivElement>({
    threshold: 0.15,
  })

  return (
    <section
      id="testimonials"
      className="relative px-6 py-24 sm:px-8 lg:py-32"
    >
      <FloatingDecor variant="right" />
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div
          ref={headerRef}
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            headerVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-6 opacity-0'
          }`}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-2)]">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            What people <span className="text-gradient">say</span>
          </h2>
        </div>

        {/* Cards */}
        <div
          ref={gridRef}
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className={`glass group relative flex flex-col rounded-3xl p-7 transition-all duration-700 hover:-translate-y-2 hover:scale-[1.02] hover:glow-accent ${
                gridVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 130}ms` }}
            >
              {/* decorative quote mark */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-6 top-4 select-none text-6xl font-serif leading-none text-white/10 transition-colors duration-300 group-hover:text-[var(--color-accent)]/25"
              >
                &rdquo;
              </span>

              <blockquote className="flex-1 text-sm leading-relaxed text-slate-300">
                {t.quote}
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/8 pt-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-tr from-[var(--color-accent)] to-[var(--color-accent-2)] text-sm font-bold text-white">
                  {initials(t.name)}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">
                    {t.name}
                  </span>
                  <span className="block text-xs text-slate-400">
                    {t.title}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
