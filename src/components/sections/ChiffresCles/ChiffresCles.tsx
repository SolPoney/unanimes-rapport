import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle'
import { StatCard } from '@/components/ui/StatCard/StatCard'
import { chiffresCles } from '@/data/chiffres-cles'

export function ChiffresCles() {
  return (
    <section
      id="chiffres-cles"
      aria-labelledby="chiffres-titre"
      className="section-py section-alt"
    >
      <div className="container-rapport">
        <SectionTitle
          id="chiffres-titre"
          titre="Chiffres clés 2025"
          sousTitre="Indicateurs de l'activité et de l'impact d'UNANIMES sur l'exercice."
          accent="turquoise"
          className="mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {chiffresCles.map((chiffre) => (
            <StatCard key={chiffre.id} chiffre={chiffre} />
          ))}
        </div>

        <p
          className="mt-8 text-sm italic text-center max-w-2xl mx-auto"
          style={{ color: 'var(--text-muted)' }}
        >
          L'ensemble de ces résultats a été obtenu par une équipe entièrement bénévole,
          sans salarié permanent. Ils témoignent de la capacité d'action d'UNANIMES
          dans un contexte de ressources contraintes.
        </p>
      </div>
    </section>
  )
}