import { useEffect, useRef, useState } from 'react'

export interface TypewriterOptions {
  /** Delay before typing starts, in ms. */
  startDelay?: number
  /** Time between each character, in ms. */
  speed?: number
}

/**
 * Types out `text` one character at a time.
 * Returns the currently typed substring and whether typing has finished.
 * Respects prefers-reduced-motion by showing the full text immediately.
 */
export function useTypewriter(text: string, options: TypewriterOptions = {}) {
  const { startDelay = 300, speed = 70 } = options
  const [typed, setTyped] = useState('')
  const [done, setDone] = useState(false)
  const timeouts = useRef<number[]>([])

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

    const pending = timeouts.current

    if (prefersReduced) {
      // Defer so we don't synchronously set state inside the effect body.
      const rafId = window.requestAnimationFrame(() => {
        setTyped(text)
        setDone(true)
      })
      return () => window.cancelAnimationFrame(rafId)
    }

    // Reset (deferred) then schedule one timeout per character.
    const rafId = window.requestAnimationFrame(() => {
      setTyped('')
      setDone(false)
    })

    for (let i = 1; i <= text.length; i++) {
      const id = window.setTimeout(() => {
        setTyped(text.slice(0, i))
        if (i === text.length) setDone(true)
      }, startDelay + i * speed)
      pending.push(id)
    }

    return () => {
      window.cancelAnimationFrame(rafId)
      pending.forEach((id) => window.clearTimeout(id))
      pending.length = 0
    }
  }, [text, startDelay, speed])

  return { typed, done }
}
