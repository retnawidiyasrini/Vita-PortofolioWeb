interface Blob {
  className: string
  color: string
  anim: string
  delay?: string
}

interface FloatingDecorProps {
  /** Choose a preset arrangement so sections don't all look identical. */
  variant?: 'left' | 'right' | 'split'
}

const PRESETS: Record<NonNullable<FloatingDecorProps['variant']>, Blob[]> = {
  left: [
    {
      className: 'float-decor left-[-6%] top-[12%] h-64 w-64',
      color: 'var(--color-accent)',
      anim: 'animate-drift',
    },
    {
      className: 'float-decor left-[10%] bottom-[8%] h-40 w-40',
      color: 'var(--color-accent-2)',
      anim: 'animate-drift-slow',
      delay: '-6s',
    },
  ],
  right: [
    {
      className: 'float-decor right-[-6%] top-[18%] h-64 w-64',
      color: 'var(--color-accent-2)',
      anim: 'animate-drift',
    },
    {
      className: 'float-decor right-[12%] bottom-[10%] h-44 w-44',
      color: 'var(--color-accent)',
      anim: 'animate-drift-slow',
      delay: '-8s',
    },
  ],
  split: [
    {
      className: 'float-decor left-[-4%] top-[20%] h-52 w-52',
      color: 'var(--color-accent)',
      anim: 'animate-drift',
    },
    {
      className: 'float-decor right-[-4%] bottom-[14%] h-56 w-56',
      color: 'var(--color-accent-2)',
      anim: 'animate-drift-slow',
      delay: '-5s',
    },
  ],
}

/**
 * Soft, blurred blobs that drift slowly behind a section's content.
 * Purely decorative; hidden from assistive tech and non-interactive.
 */
function FloatingDecor({ variant = 'split' }: FloatingDecorProps) {
  const blobs = PRESETS[variant]
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {blobs.map((blob, i) => (
        <span
          key={i}
          className={`${blob.className} ${blob.anim}`}
          style={{
            backgroundColor: blob.color,
            opacity: 0.18,
            animationDelay: blob.delay,
          }}
        />
      ))}
    </div>
  )
}

export default FloatingDecor
