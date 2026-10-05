import { projects } from '../../data/portfolio'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import FloatingDecor from '../ui/FloatingDecor'
import ProjectCard from '../ui/ProjectCard'

function Projects() {
  const [headerRef, headerVisible] = useScrollReveal<HTMLDivElement>()
  const [gridRef, gridVisible] = useScrollReveal<HTMLDivElement>({
    threshold: 0.15,
  })

  return (
    <section id="projects" className="relative px-6 py-24 sm:px-8 lg:py-32">
      <FloatingDecor variant="split" />
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
            Projects
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Featured <span className="text-gradient">work</span>
          </h2>
          <p className="mt-4 text-base text-slate-400">
            A selection of products blending modern web engineering with AI.
          </p>
        </div>

        {/* Project grid */}
        <div
          ref={gridRef}
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, i) => (
            <div
              key={project.name}
              className={`transition-all duration-700 ${
                gridVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 130}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
