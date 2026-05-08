import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle'
import { Avatar } from '@/components/ui/Avatar/Avatar'
import { bureau, tousLesMembres } from '@/data/gouvernance'
import type { College } from '@/types'

const collegeConfig: Record<College, { label: string; couleur: string; bordure: string }> = {
  'sourds-malentendants': {
    label: "Collège des associations de personnes sourdes, malentendantes, devenues sourdes ou sourdaveugles",
    couleur: '#0a2540',
    bordure: '#0a2540',
  },
  familles: {
    label: "Collège des associations de familles",
    couleur: '#166534',
    bordure: '#16a34a',
  },
  individuels: {
    label: "Collège des adhérents individuels",
    couleur: '#6b21a8',
    bordure: '#9333ea',
  },
  qualifies: {
    label: "Collège des personnes qualifiées",
    couleur: '#9a3412',
    bordure: '#ea580c',
  },
}

export function Gouvernance() {
  const membresActifs = bureau.filter((m) => m.actif)
  const membresPartis = bureau.filter((m) => !m.actif)

  return (
    <section
      id="gouvernance"
      aria-labelledby="gouvernance-titre"
      className="section-py section-alt"
    >
      <div className="container-rapport">
        <SectionTitle
          id="gouvernance-titre"
          titre="Une gouvernance active"
          sousTitre="Composition au 31 décembre 2025"
          accent="turquoise"
          className="mb-12"
        />

        {/* Bureau */}
        <div className="mb-16">
          <h3 className="text-xl font-black mb-8" style={{ color: 'var(--text-primary)' }}>
            Le Bureau
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {membresActifs.map((membre) => (
              <article key={membre.id} className="membre-card text-center">
                <Avatar
                  src={`/src/assets/images/${membre.photo}`}
                  alt={`Photo de ${membre.prenom} ${membre.nom}`}
                  initiales={membre.initiales}
                  couleurFallback={membre.couleurFallback}
                  size="lg"
                  className="mx-auto mb-3"
                />
                <p className="font-black text-sm leading-tight" style={{ color: 'var(--text-primary)' }}>
                  {membre.prenom} {membre.nom}
                </p>
                <p className="text-xs mt-1 leading-snug" style={{ color: 'var(--text-muted)' }}>
                  {membre.role}
                </p>
                {membre.association && (
                  <p className="text-xs font-semibold mt-1 text-[#00d4c8]">
                    {membre.association}
                  </p>
                )}
              </article>
            ))}
          </div>

          {membresPartis.length > 0 && (
            <div
              className="mt-8 p-4 rounded-lg"
              style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-muted)' }}
            >
              <p className="text-xs font-bold mb-2 uppercase tracking-wider">
                Membres ayant quitté leurs fonctions en cours d'année
              </p>
              {membresPartis.map((m) => (
                <p key={m.id} className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {m.prenom} {m.nom} — {m.role}
                  {m.dateDepart && (
                    <span style={{ color: 'var(--text-muted)' }}>
                      {" (jusqu'au "}
                      {new Date(m.dateDepart).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                      {")"}
                    </span>
                  )}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Collèges */}
        <div>
          <h3 className="text-xl font-black mb-8" style={{ color: 'var(--text-primary)' }}>
            {"Le Conseil d'administration"}
          </h3>
          <div className="space-y-8">
            {(Object.entries(collegeConfig) as [College, typeof collegeConfig[College]][]).map(([college, config]) => {
              const membres = tousLesMembres.filter((m) => m.college === college && m.actif)
              if (membres.length === 0) return null
              return (
                <div key={college}>
                  <h4
                    className="text-sm font-black uppercase tracking-wider mb-4 pb-2 border-b-2"
                    style={{ color: config.couleur, borderColor: config.bordure }}
                  >
                    {config.label}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {membres.map((membre) => (
                      <article
                        key={membre.id}
                        className="flex items-center gap-3 p-4 rounded-lg"
                        style={{
                          backgroundColor: 'var(--bg-primary)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        <Avatar
                          src={`/src/assets/images/${membre.photo}`}
                          alt={`Photo de ${membre.prenom} ${membre.nom}`}
                          initiales={membre.initiales}
                          couleurFallback={config.couleur}
                          size="md"
                        />
                        <div>
                          <p className="font-black text-sm" style={{ color: 'var(--text-primary)' }}>
                            {membre.prenom} {membre.nom}
                          </p>
                          {membre.association && (
                            <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                              {membre.association}
                            </p>
                          )}
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}