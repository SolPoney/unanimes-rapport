import { useState, useEffect } from 'react'

/**
 * Retourne la progression de lecture de 0 à 100
 * Utilisé pour la barre de progression en haut de page
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY
      const height =
        document.documentElement.scrollHeight - window.innerHeight
      setProgress(height > 0 ? Math.round((scrollTop / height) * 100) : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return progress
}