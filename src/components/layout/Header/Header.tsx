import { useScrollProgress } from '@/hooks/useScrollProgress'
import { ThemeToggle } from '@/components/layout/Header/ThemeToggle'

export function Header() {
  const progress = useScrollProgress()

  return (
    <header
      className="print-hidden fixed top-0 left-0 right-0 z-[200] bg-[#0a2540]"
      role="banner"
    >
      <div
        className="h-1 bg-[#c8e600] transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Progression de lecture : ${progress}%`}
      />

      <div className="container-rapport flex items-center justify-between py-3">
        <a
          href="#hero"
          className="flex items-center gap-3 no-underline group"
          aria-label="UNANIMES — Retour en haut du rapport"
        >
          <span className="text-xl font-black tracking-tight text-white group-hover:text-[#c8e600] transition-colors duration-200">
            UNANIMES
          </span>
          <span className="hidden md:block text-xs text-[#c5dff0] font-medium">
            Rapport d'activités 2025
          </span>
        </a>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <button
            onClick={() => window.print()}
            className="
              print-hidden flex items-center gap-2
              bg-[#c8e600] text-[#0a2540]
              px-4 py-1.5 rounded font-bold text-sm
              hover:bg-[#d4f000] transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-[#c8e600]
              focus:ring-offset-2 focus:ring-offset-[#0a2540]
            "
            aria-label="Imprimer ou enregistrer en PDF"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            <span className="hidden sm:inline">Imprimer</span>
          </button>
        </div>
      </div>
    </header>
  )
}