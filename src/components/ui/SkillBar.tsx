import type { Skill } from '../../types'

interface SkillBarProps {
  skill: Skill
  /** When true, the bar fills to its level. */
  active: boolean
  /** Stagger delay in ms for the fill transition. */
  delay?: number
}

function SkillBar({ skill, active, delay = 0 }: SkillBarProps) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="font-medium text-slate-200">{skill.name}</span>
        <span className="text-slate-400">{skill.level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/8">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] transition-[width] duration-1000 ease-out"
          style={{
            width: active ? `${skill.level}%` : '0%',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  )
}

export default SkillBar
