import { personal } from '../../data/portfolio'
import { useTypewriter } from '../../hooks/useTypewriter'

const PREFIX = "Hi, I'm "

function Hero() {
  const fullText = `${PREFIX}${personal.name}`
  const { typed, done } = useTypewriter(fullText, { startDelay: 400, speed: 75 })

  // Split the typed output into the plain prefix and the gradient name part.
  const typedPrefix = typed.slice(0, Math.min(typed.length, PREFIX.length))
  const typedName = typed.length > PREFIX.length ? typed.slice(PREFIX.length) : ''

  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = document.querySelector('#projects')
    if (target) {
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-svh items-center overflow-hidden px-6 pt-28 pb-16 sm:px-8"
    >
      {/* Animated glowing gradient blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-blob absolute left-[8%] top-[14%] h-72 w-72 rounded-full bg-[var(--color-accent)]/30 blur-3xl sm:h-96 sm:w-96" />
        <div className="animate-blob absolute right-[6%] top-[22%] h-72 w-72 rounded-full bg-[var(--color-accent-2)]/20 blur-3xl [animation-delay:-6s] sm:h-96 sm:w-96" />
        <div className="animate-pulse-glow absolute bottom-[6%] left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[var(--color-accent)]/20 blur-3xl" />
        {/* subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* ---- Intro (text) ---- */}
        <div className="text-center lg:text-left">
          <span
            className="glass animate-fade-up inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-slate-200 opacity-0 [animation-delay:0ms]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            Available for opportunities
          </span>

          <h1
            className="animate-fade-up mt-6 min-h-[1.2em] text-4xl font-extrabold leading-tight tracking-tight text-white opacity-0 [animation-delay:120ms] sm:text-5xl lg:text-6xl"
            aria-label={fullText}
          >
            <span aria-hidden="true">
              {typedPrefix}
              <span className="text-gradient">{typedName}</span>
              <span
                className={`ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.12em] rounded-full bg-[var(--color-accent-2)] ${
                  done ? 'animate-pulse' : ''
                }`}
              />
            </span>
          </h1>

          <p
            className="animate-fade-up mt-4 text-xl font-semibold text-slate-200 opacity-0 [animation-delay:240ms] sm:text-2xl"
          >
            {personal.role}
          </p>

          <p
            className="animate-fade-up mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400 opacity-0 [animation-delay:360ms] sm:text-lg lg:mx-0"
          >
            {personal.tagline}
          </p>

          <div
            className="animate-fade-up mt-9 flex flex-col items-center justify-center gap-4 opacity-0 [animation-delay:480ms] sm:flex-row lg:justify-start"
          >
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-violet-500/25 transition-transform duration-200 hover:scale-105 sm:w-auto"
            >
              Lihat Project
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="/resume.pdf"
              download
              className="glass inline-flex w-full items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-white/10 sm:w-auto"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* ---- Profile photo placeholder ---- */}
        <div className="animate-fade-up flex justify-center opacity-0 [animation-delay:360ms]">
          <div className="animate-float relative">
            {/* glowing ring */}
            <div className="animate-pulse-glow absolute -inset-4 rounded-full bg-gradient-to-tr from-[var(--color-accent)] to-[var(--color-accent-2)] opacity-40 blur-2xl" />
            <div className="glass glow-accent relative grid h-60 w-60 place-items-center overflow-hidden rounded-full border-2 border-white/10 sm:h-72 sm:w-72 lg:h-80 lg:w-80">
              {/* Replace this placeholder with an <img src={...} /> of the profile photo */}
              <span className="bg-gradient-to-tr from-[var(--color-accent)] to-[var(--color-accent-2)] bg-clip-text text-7xl font-extrabold text-transparent">
                VA
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="animate-float-slow absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-500">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border-2 border-slate-600 p-1">
          <span className="h-2 w-1 rounded-full bg-slate-400" />
        </div>
      </div>
    </section>
  )
}

export default Hero
