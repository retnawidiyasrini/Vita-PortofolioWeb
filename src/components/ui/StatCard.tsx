import { useCountUp } from '../../hooks/useCountUp'
import type { Stat } from '../../types'

interface StatCardProps {
  stat: Stat
  /** When true, the counter starts animating. */
  active: boolean
}

function StatCard({ stat, active }: StatCardProps) {
  const count = useCountUp(stat.value, active)

  return (
    <div className="glass group rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.03] hover:glow-accent">
      <div className="text-4xl font-extrabold text-white sm:text-5xl">
        <span className="text-gradient">{count}</span>
        {stat.suffix && <span className="text-gradient">{stat.suffix}</span>}
      </div>
      <p className="mt-2 text-sm font-medium text-slate-400">{stat.label}</p>
    </div>
  )
}

export default StatCard
