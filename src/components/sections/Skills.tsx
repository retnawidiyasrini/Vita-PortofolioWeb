import { skillCategories } from '../../data/portfolio'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import FloatingDecor from '../ui/FloatingDecor'
import SkillBar from '../ui/SkillBar'

function Skills() {
  const [headerRef, headerVisible] = useScrollReveal<HTMLDivElement>()
  const [gridRef, gridVisible] = useScrollReveal<HTMLDivElement>({
    threshold: 0.2,
  })

  return (
    <section id="skills" className="relative px-6 py-24 sm:px-8 lg:py-32">
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
            Skills
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Technologies I <span className="text-gradient">work with</span>
          </h2>
          <p className="mt-4 text-base text-slate-400">
            A modern stack spanning frontend, backend, data, and AI.
          </p>
        </div>

        {/* Category cards */}
        <div
          ref={gridRef}
          className="mt-14 grid gap-6 sm:grid-cols-2"
        >
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`glass group rounded-3xl p-7 transition-all duration-700 hover:-translate-y-1.5 hover:scale-[1.02] hover:glow-accent ${
                gridVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${catIndex * 120}ms` }}
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-tr from-[var(--color-accent)] to-[var(--color-accent-2)] text-sm font-bold text-white">
                  {category.title.charAt(0)}
                </span>
                <h3 className="text-lg font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-col gap-4">
                {category.skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    active={gridVisible}
                    delay={catIndex * 120 + i * 90}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
