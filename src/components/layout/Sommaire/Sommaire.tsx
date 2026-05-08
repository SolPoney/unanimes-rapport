import { useState, useEffect, useRef, useCallback } from 'react'
import { cn } from '@/utils/cn'
import { useActiveSection } from '@/hooks/useActiveSection'
import { sommaire } from '@/data/navigation'

export function Sommaire() {
  const [ouvert, setOuvert] = useState(false)
  const panelRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  const ids = sommaire.map((item) => item.id)
  const activeId = useActiveSection(ids)

  const fermer = useCallback(() => {
    setOuvert(false)
    // Retour du focus sur le bouton toggle — RGAA
    setTimeout(() => toggleRef.current?.focus(), 50)
  }, [])

  // Fermer avec Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && ouvert) fermer()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [ouvert, fermer])

  // Bloquer le scroll
  useEffect(() => {
    document.body.style.overflow = ouvert ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [ouvert])

  // Focus trap — RGAA obligatoire
  useEffect(() => {
    if (!ouvert || !panelRef.current) return

    const focusables = panelRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
    const first = focusables[0]
    const last = focusables[focusables.length - 1]

    // Focus initial
    first?.focus()

    const trap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last?.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first?.focus()
        }
      }
    }

    document.addEventListener('keydown', trap)
    return () => document.removeEventListener('keydown', trap)
  }, [ouvert])

  return (
    <>
      {/* Bouton toggle */}
      <button
        id="sommaire-toggle"
        ref={toggleRef}
        onClick={() => setOuvert(!ouvert)}
        className="
          print-hidden
          fixed bottom-6 right-6 z-[200]
          w-14 h-14 rounded-full
          bg-[#0a2540] text-white
          shadow-[0_12px_40px_-4px_rgb(10_37_64_/_0.4)]
          hover:bg-[#0d3055] transition-colors duration-200
          flex items-center justify-center
          focus:outline-none focus:ring-2 focus:ring-[#c8e600] focus:ring-offset-2
        "
        aria-label={ouvert ? 'Fermer le sommaire' : 'Ouvrir le sommaire'}
        aria-expanded={ouvert}
        aria-controls="sommaire-panel"
        aria-haspopup="dialog"
      >
        {ouvert ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Overlay */}
      {ouvert && (
        <div
          className="print-hidden fixed inset-0 bg-black/50 z-[250]"
          onClick={fermer}
          aria-hidden="true"
        />
      )}

      {/* Panneau sommaire */}
      <nav
        id="sommaire-panel"
        ref={panelRef}
        className={cn(
          'print-hidden fixed top-0 right-0 h-full w-80 z-[300]',
          'bg-[#0a2540] overflow-y-auto',
          'transform transition-transform duration-300 ease-in-out',
          ouvert ? 'translate-x-0' : 'translate-x-full'
        )}
        aria-label="Sommaire du rapport"
        aria-modal="true"
        role="dialog"
        aria-hidden={!ouvert}
        tabIndex={-1}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-black text-white" id="sommaire-titre">
              Sommaire
            </h2>
            <button
              onClick={fermer}
              className="text-white hover:text-[#c8e600] transition-colors focus:outline-none focus:ring-2 focus:ring-[#c8e600] rounded p-1"
              aria-label="Fermer le sommaire"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <ol className="space-y-1" role="list" aria-labelledby="sommaire-titre">
            {sommaire.map((item) => {
              const isActive = activeId === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={fermer}
                    className={cn(
                      'flex items-center gap-3 px-3 py-2.5 rounded-lg',
                      'text-sm font-semibold no-underline',
                      'transition-colors duration-150',
                      isActive
                        ? 'bg-[#c8e600] text-[#0a2540]'
                        : 'text-[#c5dff0] hover:bg-white/10 hover:text-white'
                    )}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    <span
                      className={cn(
                        'flex-shrink-0 w-6 h-6 rounded-full text-xs font-black',
                        'flex items-center justify-center',
                        isActive ? 'bg-[#0a2540] text-[#c8e600]' : 'bg-white/20 text-white'
                      )}
                      aria-hidden="true"
                    >
                      {item.numero}
                    </span>
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ol>
        </div>
      </nav>
    </>
  )
}