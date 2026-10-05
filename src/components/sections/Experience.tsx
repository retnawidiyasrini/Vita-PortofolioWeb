import { experiences } from '../../data/portfolio'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import FloatingDecor from '../ui/FloatingDecor'

function Experience() {
  const [headerRef, headerVisible] = useScrollReveal<HTMLDivElement>()
  const [listRef, listVisible] = useScrollReveal<HTMLDivElement>({
    threshold: 0.15,
  })

  return (
    <section id="experience" className="relative px-6 py-24 sm:px-8 lg:py-32">
      <FloatingDecor variant="left" />
      <div className="mx-auto max-w-4xl">
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
            Experience
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Professional <span className="text-gradient">journey</span>
          </h2>
        </div>

        {/* Timeline */}
        <div ref={listRef} className="relative mt-16 pl-8 sm:pl-0">
          {/* vertical line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-accent-2)] to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <ol className="space-y-10">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0
              return (
                <li
                  key={`${exp.company}-${exp.duration}`}
                  className={`relative transition-all duration-700 sm:grid sm:grid-cols-2 sm:gap-8 ${
                    listVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  {/* dot */}
                  <span className="absolute left-[-23px] top-2 grid h-6 w-6 place-items-center sm:left-1/2 sm:-translate-x-1/2">
                    <span className="animate-pulse-glow absolute h-6 w-6 rounded-full bg-[var(--color-accent)]/40 blur-sm" />
                    <span className="relative h-3 w-3 rounded-full bg-gradient-to-tr from-[var(--color-accent)] to-[var(--color-accent-2)] ring-4 ring-[var(--color-bg)]" />
                  </span>

                  {/* card — alternate sides on desktop */}
                  <div
                    className={
                      isLeft
                        ? 'sm:col-start-1 sm:text-right'
                        : 'sm:col-start-2'
                    }
                  >
                    <div className="glass group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:glow-accent">
                      <span className="inline-block rounded-full bg-[var(--color-accent)]/15 px-3 py-1 text-xs font-semibold text-[var(--color-accent-2)]">
                        {exp.duration}
                      </span>
                      <h3 className="mt-3 text-lg font-bold text-white">
                        {exp.role}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-slate-400">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Experience
