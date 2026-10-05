import type { Project } from '../../types'

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const hasLiveDemo = project.liveUrl && project.liveUrl !== '#'

  return (
    <article className="glass group flex flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:glow-accent">
      {/* Placeholder cover */}
      <div
        className="relative h-44 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, ${project.gradient[0]}, ${project.gradient[1]})`,
        }}
      >
        {/* subtle grid + glow overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
        <div className="absolute inset-0 grid place-items-center">
          <span className="text-5xl font-extrabold text-white/90 drop-shadow-lg transition-transform duration-500 group-hover:scale-110">
            {project.name
              .split(' ')
              .map((w) => w.charAt(0))
              .join('')
              .slice(0, 3)}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-white">{project.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        {/* Tech badges */}
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
            >
              {tech}
            </li>
          ))}
        </ul>

        {/* Links */}
        <div className="mt-6 flex items-center gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:bg-white/10"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-4 w-4 fill-current"
            >
              <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.57.1.78-.25.78-.55v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.66.79.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
            </svg>
            GitHub
          </a>
          {hasLiveDemo ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              Live Demo
              <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <span
              className="inline-flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-white/5 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-500"
              title="Demo coming soon"
            >
              Live Demo
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
