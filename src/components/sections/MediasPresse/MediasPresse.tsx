import { useState } from 'react'
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle'
import { articlesMedias, statsMedias } from '@/data/medias'
import { formatDate } from '@/utils/format'
import type { TypeMedia } from '@/types'

const filtres: { label: string; valeur: TypeMedia | 'tous' }[] = [
  { label: 'Tout voir', valeur: 'tous' },
  { label: 'Presse écrite', valeur: 'presse-ecrite' },
  { label: 'Tribunes', valeur: 'tribune' },
  { label: 'Web', valeur: 'web' },
  { label: 'Vidéo', valeur: 'video' },
  { label: 'Radio', valeur: 'radio' },
  { label: 'Télévision', valeur: 'television' },
]

const typeStyles: Record<TypeMedia, { label: string; bg: string; text: string }> = {
  'presse-ecrite': { label: 'Presse', bg: '#deedf8', text: '#0a2540' },
  radio:           { label: 'Radio', bg: '#d4faf8', text: '#0a2540' },
  television:      { label: 'TV', bg: '#f6fcd0', text: '#0a2540' },
  web:             { label: 'Web', bg: '#e5e7eb', text: '#374151' },
  tribune:         { label: 'Tribune', bg: '#f3e8ff', text: '#6b21a8' },
  communique:      { label: 'Communiqué', bg: '#fef3c7', text: '#92400e' },
  video:           { label: 'Vidéo', bg: '#fee2e2', text: '#991b1b' },
}

const compteurs = [
  { valeur: statsMedias.articlesPresse,    label: 'Articles de presse' },
  { valeur: statsMedias.tribunesInterviews, label: 'Tribunes & interviews' },
  { valeur: statsMedias.communiques,       label: 'Communiqués diffusés' },
  { valeur: statsMedias.passagesTVRadio,   label: 'Passages TV/Radio' },
]

export function MediasPresse() {
  const [filtre, setFiltre] = useState<TypeMedia | 'tous'>('tous')

  const articlesFiltres = filtre === 'tous'
    ? articlesMedias
    : articlesMedias.filter((a) => a.type === filtre)

  return (
    <section
      id="medias-presse"
      aria-labelledby="medias-titre"
      className="section-py section-light"
    >
      <div className="container-rapport">
        <SectionTitle
          id="medias-titre"
          titre="Médias & Communication"
          sousTitre="Notre présence dans les médias et nos prises de position publiques."
          accent="turquoise"
          className="mb-12"
        />

        {/* Compteurs médias */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {compteurs.map((c) => (
            <div
              key={c.label}
              className="rounded-xl p-6 text-center"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-default)',
              }}
            >
              <p className="text-3xl font-black text-[#00d4c8] mb-1">
                {c.valeur > 0 ? c.valeur : '—'}
              </p>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                {c.label}
              </p>
            </div>
          ))}
        </div>

        {/* Filtres */}
        <div
          className="flex flex-wrap gap-2 mb-8 media-filters print-hidden"
          role="group"
          aria-label="Filtrer par type de média"
        >
          {filtres.map((f) => (
            <button
              key={f.valeur}
              onClick={() => setFiltre(f.valeur)}
              className="px-4 py-2 rounded-full text-sm font-bold transition-colors duration-200"
              style={{
                backgroundColor: filtre === f.valeur ? '#0a2540' : 'var(--bg-tertiary)',
                color: filtre === f.valeur ? '#ffffff' : 'var(--text-secondary)',
              }}
              aria-pressed={filtre === f.valeur}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Articles */}
        {articlesFiltres.length === 0 ? (
          <p className="text-center py-12" style={{ color: 'var(--text-muted)' }}>
            Aucun article dans cette catégorie.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articlesFiltres.map((article) => {
              const style = typeStyles[article.type]
              return (
                <article
                  key={article.id}
                  className="media-card rounded-xl p-6 transition-shadow duration-200"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--border-default)',
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="text-xs font-bold px-2 py-1 rounded"
                      style={{ backgroundColor: style.bg, color: style.text }}
                    >
                      {style.label}
                    </span>
                    <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      {formatDate(article.date)}
                    </span>
                  </div>
                  <h3 className="font-black mb-2 leading-snug text-base" style={{ color: 'var(--text-primary)' }}>
                    {article.titre}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>
                      {article.support}
                    </span>
                    {article.url && article.url !== '#' && (
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-[#00d4c8] hover:text-[#0a2540] transition-colors no-underline flex items-center gap-1"
                        aria-label={`Lire "${article.titre}" sur ${article.support} (ouvre dans un nouvel onglet)`}
                      >
                        Lire
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        )}

        <p className="mt-8 text-sm italic text-center" style={{ color: 'var(--text-muted)' }}>
          {"Liste non exhaustive — d'autres passages médias sont disponibles sur demande."}
        </p>
      </div>
    </section>
  )
}