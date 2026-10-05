import { bio, highlights, personal, stats } from '../../data/portfolio'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import FloatingDecor from '../ui/FloatingDecor'
import StatCard from '../ui/StatCard'

function About() {
  const [headerRef, headerVisible] = useScrollReveal<HTMLDivElement>()
  const [contentRef, contentVisible] = useScrollReveal<HTMLDivElement>()
  const [statsRef, statsVisible] = useScrollReveal<HTMLDivElement>({
    threshold: 0.3,
  })

  return (
    <section id="about" className="relative px-6 py-24 sm:px-8 lg:py-32">
      <FloatingDecor variant="left" />
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            headerVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-6 opacity-0'
          }`}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-2)]">
            About me
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Turning ideas into <span className="text-gradient">intelligent</span>{' '}
            products
          </h2>
        </div>

        {/* Bio + highlights */}
        <div
          ref={contentRef}
          className={`mt-14 grid gap-10 transition-all delay-150 duration-700 lg:grid-cols-2 ${
            contentVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="glass rounded-3xl p-8">
            <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
              {bio}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
              <span>
                <span className="text-slate-500">Location:</span>{' '}
                {personal.location}
              </span>
              <span>
                <span className="text-slate-500">Role:</span> {personal.role}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="glass group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:glow-accent"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-tr from-[var(--color-accent)] to-[var(--color-accent-2)] text-white">
                    <span className="h-2.5 w-2.5 rounded-full bg-white" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Animated statistics */}
        <div
          ref={statsRef}
          className={`mt-16 grid grid-cols-2 gap-4 transition-all duration-700 sm:gap-6 lg:grid-cols-4 ${
            statsVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} active={statsVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
