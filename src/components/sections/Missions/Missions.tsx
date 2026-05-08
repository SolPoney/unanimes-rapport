import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle'

const missions = [
  {
    id: 'union',
    numero: '01',
    titre: 'Union',
    description: "Fédérer les associations nationales pour représenter collectivement l'ensemble des publics concernés par la surdité, dans toute leur diversité.",
    exemple: "En 2025 : arrivée du RNSA, 8 associations supplémentaires souhaitent nous rejoindre.",
    couleur: '#0a2540',
    bg: 'var(--navy-100, #deedf8)',
  },
  {
    id: 'representation',
    numero: '02',
    titre: 'Représentation',
    description: "Porter la voix des personnes sourdes, malentendantes et sourdaveugles auprès des pouvoirs publics, des institutions nationales et des acteurs économiques.",
    exemple: "En 2025 : ARCOM, Assemblée nationale, CNCPH, CNC — présence dans toutes les instances clés.",
    couleur: '#00d4c8',
    bg: 'var(--turquoise-200, #a8f6f2)',
  },
  {
    id: 'action',
    numero: '03',
    titre: 'Action',
    description: "Développer des solutions concrètes, accompagner les projets pour l'accessibilité et l'inclusion, et aller sur le terrain aux côtés des associations membres.",
    exemple: "En 2025 : Douarnenez, Brest, Mougins, Quimper — présence nationale inédite.",
    couleur: '#5a6500',
    bg: 'var(--lime-200, #edfaa0)',
  },
]

export function Missions() {
  return (
    <section
      id="missions"
      aria-labelledby="missions-titre"
      className="section-py section-light"
    >
      <div className="container-rapport">
        <SectionTitle
          id="missions-titre"
          titre="Nos missions"
          sousTitre="Trois axes, un seul objectif : une inclusion réelle et durable."
          accent="turquoise"
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missions.map((mission) => (
            <article
              key={mission.id}
              className="relative rounded-xl overflow-hidden transition-shadow duration-300"
              style={{
                border: '1px solid var(--border-default)',
                backgroundColor: 'var(--bg-primary)',
              }}
            >
              <div className="h-2 w-full" style={{ backgroundColor: mission.couleur }} aria-hidden="true" />
              <div className="p-8">
                <span
                  className="text-6xl font-black leading-none mb-4 block opacity-10"
                  style={{ color: mission.couleur }}
                  aria-hidden="true"
                >
                  {mission.numero}
                </span>
                <h3 className="text-2xl font-black mb-4" style={{ color: mission.couleur }}>
                  {mission.titre}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                  {mission.description}
                </p>
                <div
                  className="rounded-lg p-4 text-xs font-semibold leading-relaxed"
                  style={{ backgroundColor: mission.bg, color: '#0a2540' }}
                >
                  {mission.exemple}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}