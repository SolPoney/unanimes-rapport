import { rapportConfig } from '@/data/rapport.config'

export function Hero() {
  const { annee, accroche, association } = rapportConfig

  return (
    <section
      id="hero"
      aria-labelledby="hero-titre"
      className="relative min-h-screen flex flex-col items-center justify-center text-white text-center px-6"
      style={{
        background: 'linear-gradient(135deg, #060f1c 0%, #0a2540 60%, #0d3055 100%)',
      }}
    >
      {/* Motif décoratif */}
      <div
        className="absolute inset-0 opacity-[0.04] print:hidden"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, #c8e600 0%, transparent 55%),
                            radial-gradient(circle at 80% 70%, #00d4c8 0%, transparent 55%)`,
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">

        {/* Nom complet — visible seulement à l'impression */}
        <p
          className="hidden print:block text-sm font-bold text-[#0a2540] mb-4 uppercase tracking-widest"
        >
          {association.nomComplet}
        </p>

        {/* Acronyme visible sur le web */}
        <p
          className="text-sm font-bold tracking-[0.3em] uppercase mb-6 print:hidden"
          style={{ color: '#00d4c8' }}
          aria-hidden="true"
        >
          {association.nomComplet}
        </p>

        {/* Titre principal */}
        <h1
          id="hero-titre"
          className="font-black tracking-tight mb-4"
          style={{
            fontSize: 'clamp(3.5rem, 10vw, 7rem)',
            color: '#c8e600',
            lineHeight: 1,
          }}
        >
          {association.nom}
        </h1>

        <div
          className="w-20 h-1 mx-auto mb-6 rounded-full"
          style={{ backgroundColor: '#00d4c8' }}
          aria-hidden="true"
        />

        <p className="text-xl font-semibold mb-2 tracking-wide" style={{ color: '#c5dff0' }}>
          Rapport d'activités
        </p>
        <p
          className="font-black mb-8"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#ffffff' }}
        >
          {annee}
        </p>

        <p className="text-xl font-bold mb-4" style={{ color: '#c8e600' }}>
          {accroche}
        </p>

        <p
          className="text-base leading-relaxed max-w-xl mx-auto mb-12 print:hidden"
          style={{ color: '#c5dff0' }}
        >
          En 2025, UNANIMES illustre ce qu'une fédération structurée sur le bénévolat
          peut accomplir au niveau national. Ces résultats témoignent du potentiel
          de l'association avec des moyens adaptés à ses ambitions.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center print:hidden">
          <a
            href="#edito"
            className="inline-flex items-center gap-2 bg-[#c8e600] text-[#0a2540] px-8 py-3 rounded-lg font-black text-base hover:bg-[#d4f000] transition-colors duration-200 no-underline"
          >
            Lire le rapport
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a
            href={association.adhesion}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-[#00d4c8] text-[#00d4c8] px-8 py-3 rounded-lg font-bold text-base hover:bg-[#00d4c8] hover:text-[#0a2540] transition-colors duration-200 no-underline"
          >
            Nous rejoindre
          </a>
        </div>
      </div>

      {/* Indicateur scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 print:hidden" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}