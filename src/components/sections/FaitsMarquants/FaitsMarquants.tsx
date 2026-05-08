import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle'
import { faitsMarquants } from '@/data/faits-marquants'
import { formatDate } from '@/utils/format'
import type { TypeFait } from '@/types'

const typeLabels: Record<TypeFait, { label: string; couleur: string }> = {
  plaidoyer: { label: 'Plaidoyer institutionnel', couleur: '#0a2540' },
  terrain:   { label: 'Action de terrain',         couleur: '#00d4c8' },
  media:     { label: 'Médias',                    couleur: '#c8e600' },
  interne:   { label: 'Transformation interne',    couleur: '#6b21a8' },
}

export function FaitsMarquants() {
  const plaidoyer = faitsMarquants.filter((f) => f.type === 'plaidoyer')
  const terrain   = faitsMarquants.filter((f) => f.type === 'terrain')

  return (
    <section
      id="faits-marquants"
      aria-labelledby="faits-titre"
      className="section-py bg-[#0a2540]"
    >
      <div className="container-rapport">
        <SectionTitle
          id="faits-titre"
          titre="Faits marquants"
          sousTitre="Des moments concrets, des lieux identifiés, des personnes réelles."
          accent="lime"
          className="mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Colonne plaidoyer */}
          <div>
            <h3 className="text-sm font-black text-[#7aadd4] uppercase tracking-widest mb-8">
              Plaidoyer & représentation institutionnelle
            </h3>
            <ul className="space-y-8">
              {plaidoyer.map((fait) => (
                <li key={fait.id}>
                  <article className="flex gap-5">
                    {/* Image */}
                    {fait.photo && (
                      <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden bg-[#0d3055]">
                        <img
                          src={`/src/assets/images/${fait.photo}`}
                          alt=""
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.parentElement!.style.display = 'none'
                          }}
                        />
                      </div>
                    )}

                    <div className="flex-1">
                      <p className="text-xs font-bold text-[#7aadd4] mb-1 uppercase tracking-wider">
                        📍 {fait.lieu}
                      </p>
                      <h4 className="text-sm font-black text-white mb-2 leading-snug">
                        {fait.titre}
                      </h4>
                      <p className="text-xs text-[#b8d4ea] leading-relaxed">
                        {fait.description}
                      </p>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne terrain */}
          <div>
            <h3 className="text-sm font-black text-[#7aadd4] uppercase tracking-widest mb-8">
              Actions de terrain & mobilisation collective
            </h3>
            <ul className="space-y-8">
              {terrain.map((fait) => (
                <li key={fait.id}>
                  <article className="flex gap-5">
                    {/* Image */}
                    {fait.photo && (
                      <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden bg-[#0d3055]">
                        <img
                          src={`/src/assets/images/${fait.photo}`}
                          alt=""
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.parentElement!.style.display = 'none'
                          }}
                        />
                      </div>
                    )}

                    <div className="flex-1">
                      <p className="text-xs font-bold text-[#c8e600] mb-1 uppercase tracking-wider">
                        📍 {fait.lieu} — {formatDate(fait.date)}
                      </p>
                      <h4 className="text-sm font-black text-white mb-2 leading-snug">
                        {fait.titre}
                      </h4>
                      <p className="text-xs text-[#b8d4ea] leading-relaxed">
                        {fait.description}
                      </p>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}