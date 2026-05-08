import { useState, useEffect } from 'react'

export type Theme = 'light' | 'dark'

/**
 * Gère le thème clair/sombre
 * - Persiste dans localStorage
 * - Respecte la préférence système par défaut
 * - Applique la classe 'dark' sur <html>
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    // 1. Préférence sauvegardée
    const saved = localStorage.getItem('unanimes-theme') as Theme | null
    if (saved === 'light' || saved === 'dark') return saved

    // 2. Préférence système
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'

    // 3. Défaut : clair
    return 'light'
  })

  useEffect(() => {
    const root = document.documentElement

    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }

    localStorage.setItem('unanimes-theme', theme)
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))

  return { theme, toggle, isDark: theme === 'dark' }
}