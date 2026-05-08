import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle'
import { projets } from '@/data/projets'

export function FocusProjets() {
  return (
    <section
      id="focus-projets"
      aria-labelledby="projets-titre"
      className="section-py section-alt"
    >
      <div className="container-rapport">
        <SectionTitle
          id="projets-titre"
          titre="Focus projets structurants"
          sousTitre="Trois projets emblématiques de notre action en 2025."
          accent="turquoise"
          className="mb-12"
        />

        <div className="space-y-12">
          {projets.map((projet) => (
            <article
              key={projet.id}
              className="projet-card rounded-xl overflow-hidden"
              style={{
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--border-default)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <div className="flex flex-col lg:flex-row">
                {projet.photo && (
                  <div className="lg:w-72 flex-shrink-0">
                    <img
                      src={`/src/assets/images/${projet.photo}`}
                      alt=""
                      className="w-full h-48 lg:h-full object-cover"
                      loading="lazy"
                      onError={(e) => { e.currentTarget.parentElement!.style.display = 'none' }}
                    />
                  </div>
                )}
                <div className="flex-1 p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0a2540] text-white flex items-center justify-center font-black text-lg" aria-hidden="true">
                      {projet.numero}
                    </span>
                    <div>
                      <h3 className="text-xl font-black leading-tight" style={{ color: 'var(--text-primary)' }}>
                        {projet.titre}
                      </h3>
                      <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
                        {projet.periode}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-xs font-black text-[#00d4c8] uppercase tracking-wider mb-2">Contexte</h4>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{projet.contexte}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-[#00d4c8] uppercase tracking-wider mb-2">Actions menées</h4>
                      <ul className="space-y-2">
                        {projet.actions.map((action, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                            <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#c8e600]" aria-hidden="true" />
                            {action}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-[#00d4c8] uppercase tracking-wider mb-2">Résultats</h4>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>{projet.resultats}</p>
                      {projet.suite && (
                        <div className="rounded-lg p-3" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                          <p className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>→ 2026</p>
                          <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{projet.suite}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}