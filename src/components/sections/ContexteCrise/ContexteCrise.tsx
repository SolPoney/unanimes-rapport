import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle'

const contrastes = [
  {
    id: 'secteur',
    label: 'Le secteur associatif handicap',
    situation: 'En difficulté',
    description: "Des associations historiques fragilisées, des financements publics qui se raréfient, des bénévoles dont l'engagement s'épuise.",
    couleur: '#dc2626',
    icon: '↘',
  },
  {
    id: 'unanimes',
    label: 'UNANIMES en 2025',
    situation: 'En développement',
    description: "Huit nouvelles associations ont manifesté leur intérêt pour rejoindre UNANIMES. La visibilité médiatique, la dette soldée et la reconnaissance institutionnelle accrue témoignent d'une dynamique réelle.",
    couleur: '#16a34a',
    icon: '↗',
  },
]

export function ContexteCrise() {
  return (
    <section
      id="contexte-crise"
      aria-labelledby="contexte-titre"
      className="section-py bg-[#0a2540]"
    >
      <div className="container-rapport">
        <SectionTitle
          id="contexte-titre"
          titre="Contexte & enjeux"
          sousTitre="Le secteur associatif du handicap traverse une période difficile. UNANIMES s'inscrit dans une trajectoire opposée."
          accent="lime"
          className="mb-12"
        />

        {/* Le contraste */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {contrastes.map((item) => (
            <article
              key={item.id}
              className="bg-white/5 border border-white/10 rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-3xl font-black"
                  style={{ color: item.couleur }}
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider" style={{ color: '#c5dff0' }}>
                    {item.label}
                  </p>
                  <p className="text-lg font-black" style={{ color: item.couleur }}>
                    {item.situation}
                  </p>
                </div>
              </div>
              <p className="leading-relaxed text-sm" style={{ color: '#d4e8f5' }}>
                {item.description}
              </p>
            </article>
          ))}
        </div>

        {/* Arc narratif de la dette */}
        <div className="mb-16">
          <h3 className="text-2xl font-black text-white mb-8">
            Redressement financier : bilan de mandat
          </h3>

          <div className="flex flex-col md:flex-row items-center max-w-3xl">

            <div className="flex-1 text-center p-6">
              <div className="text-4xl font-black text-[#dc2626] mb-2">33 000 €</div>
              <p className="text-sm font-bold text-white mb-1">À la prise de fonction</p>
              <p className="text-xs" style={{ color: '#c5dff0' }}>Dette héritée</p>
            </div>

            <div className="text-[#c8e600] text-2xl font-black px-4 rotate-90 md:rotate-0" aria-hidden="true">→</div>

            <div className="flex-1 text-center p-6">
              <div className="text-4xl font-black text-[#d97706] mb-2">Effort collectif</div>
              <p className="text-sm font-bold text-white mb-1">Sur plusieurs exercices</p>
              <p className="text-xs" style={{ color: '#c5dff0' }}>Rigueur budgétaire maintenue</p>
            </div>

            <div className="text-[#c8e600] text-2xl font-black px-4 rotate-90 md:rotate-0" aria-hidden="true">→</div>

            <div className="flex-1 text-center p-6 bg-[#c8e600] rounded-xl">
              <div className="text-4xl font-black text-[#0a2540] mb-2">0 €</div>
              <p className="text-sm font-black text-[#0a2540] mb-1">Exercice 2025</p>
              <p className="text-xs text-[#0d3055]">Dette intégralement remboursée.</p>
            </div>
          </div>
        </div>

        {/* Message aux financeurs */}
        <div className="bg-white/5 border-l-4 border-[#c8e600] rounded-r-xl p-8 max-w-3xl">
          <p className="text-lg font-bold text-white leading-relaxed mb-3">
            Ces résultats ont été obtenus sans aucun salarié permanent
            et dans un contexte de ressources contraintes.
          </p>
          <p className="text-xl font-black text-[#c8e600] leading-relaxed">
            Ils illustrent le potentiel d'UNANIMES avec des moyens
            proportionnés à ses responsabilités nationales.
          </p>
        </div>
      </div>
    </section>
  )
}