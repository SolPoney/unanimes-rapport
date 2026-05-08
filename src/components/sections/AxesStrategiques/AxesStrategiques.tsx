import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle'

const objectifs = [
  {
    id: 'representation',
    titre: 'Renforcer la représentation institutionnelle',
    description:
      "Consolider la présence d'UNANIMES dans les instances nationales et développer le plaidoyer auprès des pouvoirs publics sur les enjeux d'accessibilité et d'inclusion.",
  },
  {
    id: 'reseau',
    titre: 'Élargir le réseau de membres',
    description:
      "Accueillir de nouvelles associations membres et adhérents individuels, renforcer la représentativité d'UNANIMES et la diversité des publics représentés.",
  },
  {
    id: 'visibilite',
    titre: 'Développer la visibilité médiatique',
    description:
      "Renforcer la présence d'UNANIMES dans les médias nationaux et spécialisés, développer les réseaux sociaux et porter les messages de l'association auprès du grand public.",
  },
  {
    id: 'structuration',
    titre: "Structurer et consolider l'organisation",
    description:
      "Faire évoluer les statuts et le règlement intérieur, améliorer les modes de fonctionnement et rechercher les financements nécessaires au développement de l'association.",
  },
]

const actionsRealisees = [
  {
    id: 'terrain',
    titre: 'Déplacements et actions de terrain',
    items: [
      'Présence au Festival de cinéma de Douarnenez (21 août)',
      "Participation au gala des 45 ans de l'association GOYA à Mougins (11 octobre)",
      "Rencontre avec Phare d'Ouest à Brest avec l'ANPSA (10-13 septembre)",
      'Participation à la répétition du Teatr Piba à Quimper (5 novembre)',
    ],
  },
  {
    id: 'communication',
    titre: 'Communication et présence médiatique',
    items: [
      "Progression de l'audience sur les réseaux sociaux : +133% vs 2024",
      'Articles dans la presse nationale et spécialisée (Télérama, Handicap.fr, Les Échos)',
      'Passages en radio, télévision et médias en ligne',
      'Participation à des colloques et événements professionnels',
    ],
  },
  {
    id: 'partenariats',
    titre: 'Partenariats et instances',
    items: [
      "Représentation au Comité consultatif de l'ARCOM",
      "Auditions à l'Assemblée nationale",
      'Participation active au CNCPH',
      "Collaboration avec le CNC sur l'accessibilité des salles",
    ],
  },
]

const impactsQualitatifs = [
  "Renforcement de la légitimité d'UNANIMES comme interlocuteur représentatif auprès des institutions",
  "Développement de la visibilité médiatique de l'association et des enjeux qu'elle porte",
  'Consolidation des liens de terrain avec les associations membres',
  'Évolution positive des pratiques dans les institutions partenaires',
]

export function AxesStrategiques() {
  return (
    <section
      id="axes-strategiques"
      aria-labelledby="axes-titre"
      className="section-py section-light"
    >
      <div className="container-rapport">
        <SectionTitle
          id="axes-titre"
          titre="Axes stratégiques et actions menées"
          sousTitre="Les orientations de l'exercice 2025 et leur mise en œuvre."
          accent="turquoise"
          className="mb-12"
        />

        {/* Objectifs */}
        <div className="mb-16">
          <h3
            className="text-xl font-black mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            Objectifs de l'année
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {objectifs.map((obj, i) => (
              <article
                key={obj.id}
                className="rounded-xl p-6"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-default)',
                }}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0a2540] text-white flex items-center justify-center text-sm font-black"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>

                  <div>
                    <h4
                      className="font-black mb-2"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {obj.titre}
                    </h4>

                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {obj.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Actions réalisées */}
        <div className="mb-16">
          <h3
            className="text-xl font-black mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            Actions réalisées
          </h3>

          <div className="space-y-6">
            {actionsRealisees.map((bloc) => (
              <div
                key={bloc.id}
                className="rounded-xl p-6"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-default)',
                }}
              >
                <h4 className="font-black mb-4 text-[#00d4c8]">
                  {bloc.titre}
                </h4>

                <ul className="space-y-2">
                  {bloc.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <span
                        className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#c8e600]"
                        aria-hidden="true"
                      />

                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Résultats observables */}
        <div className="mb-16">
          <h3
            className="text-xl font-black mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            Résultats et effets observables
          </h3>

          {/* Chiffres clés */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {[
              { valeur: 'À préciser', label: 'Bénéficiaires directs' },
              { valeur: 'À préciser', label: 'Taux de satisfaction' },
              { valeur: 'À préciser', label: 'Nouveaux adhérents' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl p-6 text-center bg-[#0a2540]"
              >
                <p className="text-3xl font-black text-[#c8e600] mb-2">
                  {stat.valeur}
                </p>

                <p className="text-sm text-[#c5dff0]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Impacts qualitatifs */}
          <div
            className="rounded-xl p-6"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-default)',
            }}
          >
            <h4
              className="font-black mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Impacts qualitatifs
            </h4>

            <ul className="space-y-3">
              {impactsQualitatifs.map((impact, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <span
                    className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00d4c8]"
                    aria-hidden="true"
                  />

                  {impact}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}