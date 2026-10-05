import { useEffect, useRef, useState } from 'react'

export interface ScrollRevealOptions {
  /** Fraction of the element visible before it triggers (0–1). */
  threshold?: number
  /** Keep the element visible once revealed (default true). */
  once?: boolean
  /** Margin around the root, e.g. "0px 0px -10% 0px". */
  rootMargin?: string
}

/**
 * Reveals an element when it scrolls into view.
 * Returns a tuple `[ref, isVisible]`: attach the ref to the element and use
 * `isVisible` to toggle the reveal animation.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {},
): [React.RefObject<T | null>, boolean] {
  const { threshold = 0.15, once = true, rootMargin = '0px 0px -8% 0px' } =
    options
  const ref = useRef<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Fallback: no IntersectionObserver support — reveal on the next tick
    // (deferred so we don't synchronously set state inside the effect body).
    if (typeof IntersectionObserver === 'undefined') {
      const id = requestAnimationFrame(() => setIsVisible(true))
      return () => cancelAnimationFrame(id)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, once, rootMargin])

  return [ref, isVisible]
}
