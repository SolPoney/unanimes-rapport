import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle'
import { rapportConfig } from '@/data/rapport.config'

const categories = [
  {
    id: 'financiers',
    titre: 'Documents financiers',
    items: [
      "Comptes annuels détaillés 2025",
      "Rapport du commissaire aux comptes",
      "Budget prévisionnel 2026",
      "Liste des subventions et financements reçus",
    ],
  },
  {
    id: 'statutaires',
    titre: 'Documents statutaires et réglementaires',
    items: [
      "Statuts de l'association",
      "Règlement intérieur",
      "Procès-verbaux des assemblées générales",
      "Récépissé de déclaration en Préfecture",
    ],
  },
  {
    id: 'activite',
    titre: "Rapports d'activité détaillés",
    items: [
      "Bilan quantitatif des actions 2025",
      "Enquêtes de satisfaction des bénéficiaires",
      "Témoignages et retours d'expérience",
      "Liste complète des événements organisés",
    ],
  },
  {
    id: 'partenariats',
    titre: 'Partenariats et conventions',
    items: [
      "Liste exhaustive des partenaires 2025",
      "Conventions de partenariat signées",
      "Cartographie du réseau national",
      "Lettres de soutien et recommandations",
    ],
  },
  {
    id: 'communication',
    titre: 'Communication et médias',
    items: [
      "Revue de presse 2025",
      "Statistiques réseaux sociaux détaillées",
      "Newsletter et communications aux adhérents",
      "Supports de communication (plaquettes, affiches)",
    ],
  },
]

export function Annexes() {
  const { association } = rapportConfig

  return (
    <section
      id="annexes"
      aria-labelledby="annexes-titre"
      className="section-py section-alt"
    >
      <div className="container-rapport">
        <SectionTitle
          id="annexes-titre"
          titre="Annexes"
          sousTitre="Documents disponibles sur demande auprès du siège de l'association."
          accent="turquoise"
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {categories.map((cat) => (
            <article
              key={cat.id}
              className="rounded-xl p-6"
              style={{
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--border-default)',
              }}
            >
              <h3 className="font-black mb-4 text-base" style={{ color: 'var(--text-primary)' }}>
                {cat.titre}
              </h3>
              <ul className="space-y-2">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <span className="flex-shrink-0 mt-0.5 text-[#00d4c8]" aria-hidden="true">📄</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="bg-[#0a2540] rounded-xl p-8 text-white">
          <h3 className="text-lg font-black text-[#c8e600] mb-3">
            Pour obtenir les documents annexes
          </h3>
          <p className="text-[#c5dff0] text-sm leading-relaxed mb-6">
            {"L'ensemble des documents annexes est disponible sur demande auprès du siège de l'association."}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 text-sm">
            <div>
              <p className="text-[#7aadd4] text-xs uppercase font-bold mb-1">Email</p>
              <a
                href={`mailto:${association.email}`}
                className="text-[#00d4c8] font-bold hover:text-[#c8e600] transition-colors no-underline"
              >
                {association.email}
              </a>
            </div>
            <div>
              <p className="text-[#7aadd4] text-xs uppercase font-bold mb-1">Adresse</p>
              <p className="text-white">{association.adresse}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}