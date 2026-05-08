import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle'
import { besoinsFinanciers2026, totalBesoin2026, messageBesoins } from '@/data/perspectives'
import { formatEuros } from '@/utils/format'

const priorites2026 = [
  "Recrutement de deux salariés pour assurer la coordination et le développement de l'association",
  "Ouverture d'un espace de travail partagé en Île-de-France",
  "Développement d'un espace associatif numérique (extranet membres, documents partagés, agenda, annuaire)",
  "Renforcement des actions de terrain et ouverture de nouveaux relais régionaux",
  "Consolidation des partenariats institutionnels et diversification des financements",
]

const moyenTerme = [
  {
    titre: "Structuration nationale",
    description: "Consolidation du réseau avec une présence dans toutes les régions de France.",
  },
  {
    titre: "Reconnaissance institutionnelle",
    description: "Renforcement du positionnement comme interlocuteur de référence sur les enjeux de surdité et d'accessibilité.",
  },
  {
    titre: "Essaimage des pratiques",
    description: "Diffusion des bonnes pratiques auprès des institutions et formation de référents accessibilité.",
  },
  {
    titre: "Dimension européenne",
    description: "Participation à des projets européens et échanges avec des associations étrangères du secteur.",
  },
]

export function Perspectives() {
  return (
    <section
      id="perspectives"
      aria-labelledby="perspectives-titre"
      className="section-py section-alt"
    >
      <div className="container-rapport">
        <SectionTitle
          id="perspectives-titre"
          titre="Perspectives 2026"
          sousTitre="La dynamique engagée appelle une structuration durable."
          accent="turquoise"
          className="mb-12"
        />

        {/* Besoins financiers */}
        <div className="mb-16">
          <h3 className="text-xl font-black mb-4" style={{ color: 'var(--text-primary)' }}>
            Besoins pour poursuivre le développement
          </h3>
          <p className="leading-relaxed mb-8 max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
            {messageBesoins}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {besoinsFinanciers2026.map((besoin) => (
              <article
                key={besoin.id}
                className="rounded-xl p-6"
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-default)',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="text-xs font-black px-2 py-1 rounded"
                    style={{
                      backgroundColor: besoin.priorite === 'critique' ? '#fee2e2' : '#fef3c7',
                      color: besoin.priorite === 'critique' ? '#991b1b' : '#92400e',
                    }}
                  >
                    {besoin.priorite === 'critique' ? 'Prioritaire' : 'Important'}
                  </span>
                </div>
                <h4 className="font-black mb-2 text-base leading-snug" style={{ color: 'var(--text-primary)' }}>
                  {besoin.label}
                </h4>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                  {besoin.description}
                </p>
                <p className="text-2xl font-black" style={{ color: 'var(--text-primary)' }}>
                  {formatEuros(besoin.montantAnnuel)}
                  <span className="text-sm font-normal" style={{ color: 'var(--text-muted)' }}> / an</span>
                </p>
              </article>
            ))}
          </div>

          {/* Total */}
          <div className="bg-[#0a2540] rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
            <p className="font-bold text-[#c5dff0] text-sm max-w-lg">
              Besoin total pour structurer UNANIMES à la hauteur de ses responsabilités nationales
            </p>
            <div className="text-right flex-shrink-0">
              <p className="text-4xl font-black text-[#c8e600]">{formatEuros(totalBesoin2026)}</p>
              <p className="text-sm text-[#c5dff0]">par an</p>
            </div>
          </div>
        </div>

        {/* Espace numérique associatif */}
        <div className="mb-16">
          <h3 className="text-xl font-black mb-6" style={{ color: 'var(--text-primary)' }}>
            Projet structurant : un espace associatif numérique
          </h3>
          <div className="bg-[#0a2540] rounded-xl p-8 text-white">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#c8e600] flex items-center justify-center" aria-hidden="true">
                <svg className="w-6 h-6 text-[#0a2540]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-black text-[#c8e600] mb-1">Extranet / Intranet membres</h4>
                <p className="text-sm text-[#c5dff0]">Plateforme collaborative dédiée aux membres et administrateurs</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '📁', titre: "Documents de travail", desc: "Centralisation et partage des documents statutaires, comptes-rendus, ressources de travail." },
                { icon: '📅', titre: "Agenda partagé", desc: "Calendrier commun des réunions, événements, représentations et échéances associatives." },
                { icon: '👥', titre: "Annuaire des membres", desc: "Répertoire des associations membres, adhérents individuels et personnes qualifiées." },
                { icon: '🔧', titre: "Réservation prestataires", desc: "Gestion des prestataires accessibilité : interprètes, vélotypistes, codeurs LfPC." },
                { icon: '📊', titre: "Tableau de bord", desc: "Vision globale des représentations en cours, projets actifs et actions de plaidoyer." },
                { icon: '🔒', titre: "Espace sécurisé", desc: "Accès différencié selon les profils : bureau, CA, membres associatifs, adhérents individuels." },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <span className="text-2xl mb-2 block" aria-hidden="true">{item.icon}</span>
                  <p className="font-black text-white text-sm mb-1">{item.titre}</p>
                  <p className="text-xs text-[#c5dff0] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-sm text-[#c5dff0] leading-relaxed">
                {"Cet outil numérique constitue un levier essentiel pour fluidifier le fonctionnement d'UNANIMES, renforcer la cohésion entre les membres et professionnaliser notre organisation — condition nécessaire à l'accroissement de notre impact national."}
              </p>
            </div>
          </div>
        </div>

        {/* Priorités 2026 */}
        <div className="mb-16">
          <h3 className="text-xl font-black mb-6" style={{ color: 'var(--text-primary)' }}>
            Priorités d'action 2026
          </h3>
          <ul className="space-y-3">
            {priorites2026.map((priorite, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full bg-[#c8e600] text-[#0a2540] flex items-center justify-center text-xs font-black mt-0.5"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {priorite}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Vision moyen terme */}
        <div>
          <h3 className="text-xl font-black mb-6" style={{ color: 'var(--text-primary)' }}>
            Vision 2027-2028
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {moyenTerme.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-5 rounded-xl"
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-default)',
                }}
              >
                <span className="flex-shrink-0 text-[#00d4c8] font-black text-xl" aria-hidden="true">→</span>
                <div>
                  <p className="font-black text-sm mb-1" style={{ color: 'var(--text-primary)' }}>{item.titre}</p>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}