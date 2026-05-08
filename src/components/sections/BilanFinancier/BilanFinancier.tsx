import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle'
import { bilanFinancier, bilanSimplifie } from '@/data/financier'
import { formatEuros } from '@/utils/format'

export function BilanFinancier() {
  const { produits, charges, totalProduits, totalCharges, resultat } = bilanFinancier

  return (
    <section
      id="bilan-financier"
      aria-labelledby="financier-titre"
      className="section-py section-light"
    >
      <div className="container-rapport">
        <SectionTitle
          id="financier-titre"
          titre="Bilan financier 2025"
          sousTitre="Compte de résultat — exercice du 01/01/2025 au 31/12/2025"
          accent="turquoise"
          className="mb-12"
        />

        {/* Arc narratif dette */}
        <div className="bg-[#0a2540] rounded-xl p-8 mb-12 text-white">
          <h3 className="text-lg font-black text-[#c8e600] mb-3">
            Un signal fort de rigueur collective
          </h3>
          <p className="text-[#c5dff0] leading-relaxed">
            {"À l'arrivée de l'équipe actuelle, UNANIMES portait "}
            <strong className="text-white">33 000 € de dette</strong>.
            {" Grâce à un effort collectif soutenu sur plusieurs années, l'intégralité de cette dette a été remboursée. En 2025, les derniers "}
            <strong className="text-[#c8e600]">10 000 € ont été soldés</strong>
            {". L'exercice se clôture avec un excédent de "}
            <strong className="text-[#c8e600]">{formatEuros(resultat)}</strong>.
          </p>
        </div>

        {/* Tableaux produits / charges */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {[
            { titre: 'Produits', lignes: produits, total: totalProduits },
            { titre: 'Charges', lignes: charges, total: totalCharges },
          ].map((bloc) => (
            <div key={bloc.titre} className="rounded-xl overflow-hidden" style={{ border: '1px solid var(--border-default)' }}>
              <div className="bg-[#0a2540] px-6 py-4 flex items-center justify-between">
                <h3 className="text-white font-black">{bloc.titre}</h3>
                <span className="text-[#c8e600] font-black text-sm">{formatEuros(bloc.total)}</span>
              </div>
              <table className="w-full" aria-label={`Tableau des ${bloc.titre.toLowerCase()} 2025`}>
                <thead className="sr-only"><tr><th>Libellé</th><th>Montant</th></tr></thead>
                <tbody className="divide-y" style={{ borderColor: 'var(--border-subtle)' }}>
                  {bloc.lignes.map((ligne) => (
                    <tr key={ligne.id}>
                      <td className="px-6 py-3">
                        <div className="flex items-center gap-3">
                          <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: ligne.couleur }} aria-hidden="true" />
                          <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{ligne.label}</span>
                        </div>
                      </td>
                      <td className="px-6 py-3 text-right whitespace-nowrap">
                        <span className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{formatEuros(ligne.montant)}</span>
                        <span className="text-xs ml-1" style={{ color: 'var(--text-muted)' }}>{ligne.pourcentage}%</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr style={{ borderTop: '2px solid #0a2540', backgroundColor: 'var(--bg-secondary)' }}>
                    <td className="px-6 py-3 font-black text-sm" style={{ color: 'var(--text-primary)' }}>Total {bloc.titre}</td>
                    <td className="px-6 py-3 text-right font-black text-sm" style={{ color: 'var(--text-primary)' }}>{formatEuros(bloc.total)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          ))}
        </div>

        {/* Graphique barres charges */}
        <div className="rounded-xl p-8 mb-8" style={{ backgroundColor: 'var(--bg-secondary)' }}>
          <h3 className="font-black mb-6 text-base" style={{ color: 'var(--text-primary)' }}>
            Répartition des charges
          </h3>
          <div className="space-y-3">
            {charges.map((ligne) => (
              <div key={ligne.id}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>{ligne.label}</span>
                  <span className="text-xs font-black" style={{ color: ligne.couleur }}>{ligne.pourcentage}%</span>
                </div>
                <div className="h-2.5 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--border-default)' }}>
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${ligne.pourcentage}%`, backgroundColor: ligne.couleur }}
                    role="progressbar"
                    aria-valuenow={ligne.pourcentage}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${ligne.label} : ${ligne.pourcentage}%`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trésorerie */}
        <div className="rounded-xl p-8 mb-8" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-default)' }}>
          <h3 className="font-black mb-6 text-base" style={{ color: 'var(--text-primary)' }}>
            Situation de trésorerie au 31/12/2025
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-2xl font-black" style={{ color: 'var(--text-primary)' }}>{formatEuros(bilanSimplifie.tresorerie.livretA)}</p>
              <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>Livret A Crédit Mutuel</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-black" style={{ color: 'var(--text-primary)' }}>{formatEuros(bilanSimplifie.tresorerie.creditMutuel)}</p>
              <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>Compte courant</p>
            </div>
            <div className="text-center bg-[#0a2540] rounded-lg p-4">
              <p className="text-2xl font-black text-[#c8e600]">{formatEuros(bilanSimplifie.tresorerie.total)}</p>
              <p className="text-xs text-[#c5dff0] mt-1">Trésorerie totale</p>
            </div>
          </div>
        </div>

        {/* Valorisation du bénévolat */}
        <div className="bg-[#0a2540] rounded-xl p-8 mb-8 text-white">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#c8e600] flex items-center justify-center flex-shrink-0" aria-hidden="true">
              <svg className="w-6 h-6 text-[#0a2540]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-black text-white">Valorisation du bénévolat</h3>
              <p className="text-sm text-[#c5dff0]">Reconnaissance de l'engagement citoyen</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[
              { valeur: '—', label: 'Bénévoles actifs' },
              { valeur: '—', label: "Heures de bénévolat" },
              { valeur: '—', label: 'Valeur estimée' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                <p className="text-2xl font-black text-[#c8e600] mb-1">{stat.valeur}</p>
                <p className="text-xs text-[#c5dff0]">{stat.label}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-[#c5dff0] leading-relaxed mb-4">
            Le bénévolat représente une ressource essentielle pour UNANIMES. Au-delà des aspects financiers,
            l'engagement de nos bénévoles témoigne de la vitalité de notre mouvement associatif et de
            l'attachement de chacun à notre cause commune.
          </p>

          <div className="bg-white/10 rounded-lg p-4 border-l-4 border-[#c8e600]">
            <p className="text-xs text-white leading-relaxed">
              <strong>Méthodologie :</strong> La valorisation du bénévolat est calculée sur la base du taux
              horaire SMIC, conformément aux recommandations du Haut Conseil à la vie associative. Cette
              valorisation comptable ne fait pas l'objet d'une inscription au bilan mais reflète la
              contribution réelle des bénévoles à la mission de l'association.
            </p>
          </div>
        </div>

        {/* Résultat */}
        <div
          className="rounded-xl p-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ border: '2px solid #16a34a', backgroundColor: 'var(--bg-primary)' }}
        >
          <div>
            <h3 className="text-xl font-black mb-1" style={{ color: 'var(--text-primary)' }}>
              {"Résultat de l'exercice 2025"}
            </h3>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Excédent — renforcement des fonds propres de l'association.
            </p>
            <p className="text-xs mt-2" style={{ color: 'var(--text-muted)' }}>
              Total bilan : {formatEuros(bilanSimplifie.totalActif)}
            </p>
          </div>
          <div
            className="text-5xl font-black text-[#16a34a] flex-shrink-0"
            aria-label={`Excédent de ${formatEuros(resultat)}`}
          >
            +{formatEuros(resultat)}
          </div>
        </div>

        <p className="mt-6 text-xs text-center" style={{ color: 'var(--text-muted)' }}>
          Compte de résultat généré le 27/03/2026. Toutes les écritures sont libellées en euros.
          Les documents comptables complets sont disponibles sur demande.
        </p>
      </div>
    </section>
  )
}