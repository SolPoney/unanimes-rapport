import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle'

const publics = [
  {
    id: 'sourds',
    emoji: '👂',
    titre: 'Personnes sourdes',
    description: "Nées sourdes ou le devenues, utilisant la LSF, la langue orale, la LPC ou un mode de communication mixte.",
    couleur: '#0a2540',
  },
  {
    id: 'malentendants',
    emoji: '🔊',
    titre: 'Personnes malentendantes',
    description: "Appareillées ou non, implantées ou non, avec des degrés de perte auditive variés et des parcours de vie différents.",
    couleur: '#00d4c8',
  },
  {
    id: 'sourdaveugles',
    emoji: '🤝',
    titre: 'Personnes sourdaveugles',
    description: "Représentées notamment par le RNSA (Réseau National des Sourdaveugles), membre d'UNANIMES depuis 2025.",
    couleur: '#c8e600',
  },
  {
    id: 'familles',
    emoji: '👨‍👩‍👧',
    titre: 'Familles',
    description: "Parents d'enfants sourds, proches, aidants — co-acteurs de l'inclusion, pleinement représentés au sein d'UNANIMES.",
    couleur: '#0d3055',
  },
]

const domaines = ['École', 'Emploi', 'Santé', 'Culture', 'Information', 'Téléphonie', 'Transports', 'Loisirs']

export function QuiSommesNous() {
  return (
    <section
      id="qui-sommes-nous"
      aria-labelledby="qui-titre"
      className="section-py section-alt"
    >
      <div className="container-rapport">
        <SectionTitle
          id="qui-titre"
          titre="Qui sommes-nous ?"
          sousTitre="Union des Associations Nationales pour l'Inclusion des Malentendants et des Sourds"
          accent="turquoise"
          className="mb-12"
        />

        {/* Notre diversité */}
        <div className="mb-16">
          <h3 className="text-2xl font-black mb-6" style={{ color: 'var(--text-primary)' }}>
            Notre diversité
          </h3>
          <p className="leading-relaxed mb-8 max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
            {"Plusieurs millions de personnes en France sont concernées par la surdité. Certaines sont nées sourdes, d'autres le sont devenues au cours de leur vie. Certaines communiquent en langue des signes française, d'autres oralement, d'autres encore utilisent la langue française parlée complétée. Toutes ont en commun de devoir faire face à des situations de handicap dues à l'environnement inadapté et au défaut d'accessibilité de notre société."}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {publics.map((item) => (
              <article
                key={item.id}
                className="card rounded-xl p-6 border-t-4"
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  borderTopColor: item.couleur,
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                <div className="text-3xl mb-3" aria-hidden="true">{item.emoji}</div>
                <h4 className="font-black mb-2" style={{ color: item.couleur === '#c8e600' ? 'var(--text-primary)' : item.couleur }}>
                  {item.titre}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Notre engagement */}
        <div className="mb-16">
          <h3 className="text-2xl font-black mb-6" style={{ color: 'var(--text-primary)' }}>
            Notre engagement
          </h3>
          <div className="bg-[#0a2540] rounded-xl p-8 text-white max-w-3xl">
            <p className="leading-relaxed mb-4">
              {"Les associations nationales choisissent de s'unir au sein d'UNANIMES pour fédérer leurs engagements au service de "}
              <strong className="text-[#c8e600]">
                {"l'émancipation et de l'épanouissement des personnes sourdes, malentendantes, sourdaveugles et de leurs familles"}
              </strong>.
            </p>
            <p className="leading-relaxed text-[#c5dff0]">
              {"Ainsi regroupées, les associations contribuent à la représentation collective de l'ensemble des publics concernés, dans le respect de la large diversité des choix, des parcours et des réponses."}
            </p>
          </div>
        </div>

        {/* Domaines */}
        <div className="mb-16">
          <h3 className="text-2xl font-black mb-6" style={{ color: 'var(--text-primary)' }}>
            {"Nos domaines d'action"}
          </h3>
          <p className="leading-relaxed mb-6 max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
            {"De l'annonce de la surdité aux parents jusqu'à l'accompagnement des personnes âgées, UNANIMES s'attache à identifier les obstacles rencontrés dans le parcours d'usager des services publics, de consommateur et de citoyen."}
          </p>
          <ul className="flex flex-wrap gap-3">
            {domaines.map((d) => (
              <li key={d}>
                <span
                  className="inline-block px-4 py-2 rounded-lg text-sm font-bold"
                  style={{ backgroundColor: 'var(--bg-brand)', color: '#ffffff' }}
                >
                  {d}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Citation */}
        <blockquote className="bg-[#0a2540] rounded-xl p-8 text-center">
          <p className="text-xl font-bold text-white leading-relaxed max-w-2xl mx-auto">
            {"\"La raison d'être d'UNANIMES est de "}
            <strong className="text-[#c8e600]">représenter la diversité</strong>
            {" des publics de personnes sourdes, malentendantes, sourdaveugles, sourdes avec handicap associé, et de leurs familles.\""}
          </p>
        </blockquote>
      </div>
    </section>
  )
}