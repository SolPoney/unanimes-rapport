import { useState, useEffect } from 'react'

/**
 * Respecte la préférence prefers-reduced-motion de l'utilisateur
 * Toutes les animations doivent être conditionnées à ce hook
 *
 * Usage :
 *   const reduced = useReducedMotion()
 *   <motion.div animate={reduced ? {} : { opacity: 1 }} />
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return reduced
}