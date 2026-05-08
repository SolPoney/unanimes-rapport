import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle'
import { Avatar } from '@/components/ui/Avatar/Avatar'
import { temoignages } from '@/data/temoignages'

const profilLabels: Record<string, string> = {
  'personne-sourde':           'Personne sourde',
  'personne-malentendante':    'Personne malentendante',
  'personne-sourdaveugle':     'Personne sourdaveugle',
  'parent':                    "Parent d'enfant sourd",
  'responsable-association':   "Responsable d'association membre",
  'benevole':                  'Bénévole',
}

export function Temoignages() {
  const temoignagesVisibles = temoignages.filter((t) => t.consentementObtenu)

  // Si aucun témoignage validé, on affiche un placeholder discret
  if (temoignagesVisibles.length === 0) {
    return (
      <section
        id="temoignages"
        aria-labelledby="temoignages-titre"
        className="section-py bg-[#0a2540]"
      >
        <div className="container-rapport">
          <SectionTitle
            id="temoignages-titre"
            titre="Témoignages"
            sousTitre="La parole à celles et ceux que nous représentons."
            accent="lime"
            className="mb-12"
          />
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center max-w-xl mx-auto">
            <p className="text-[#7aadd4] text-sm">
              Les témoignages sont en cours de collecte.
              Ils seront publiés dès réception des consentements signés.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="temoignages"
      aria-labelledby="temoignages-titre"
      className="section-py bg-[#0a2540]"
    >
      <div className="container-rapport">
        <SectionTitle
          id="temoignages-titre"
          titre="Témoignages"
          sousTitre="La parole à celles et ceux que nous représentons."
          accent="lime"
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {temoignagesVisibles.map((temoignage) => (
            <article
              key={temoignage.id}
              className="temoignage-card bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col"
            >
              {/* Citation */}
              <blockquote className="flex-1 mb-6">
                <span
                  className="block text-5xl font-black text-[#c8e600] leading-none mb-4"
                  aria-hidden="true"
                >
                  "
                </span>
                <p className="text-[#e5e7eb] leading-relaxed italic text-sm">
                  {temoignage.citation}
                </p>
              </blockquote>

              {/* Auteur */}
              <footer className="flex items-center gap-4 pt-6 border-t border-white/10">
                <Avatar
                  src={temoignage.photo}
                  alt={`Photo de ${temoignage.prenom}`}
                  initiales={temoignage.prenom.charAt(0)}
                  couleurFallback="#0d3055"
                  size="md"
                />
                <div>
                  <p className="font-black text-white text-sm">
                    {temoignage.prenom}
                  </p>
                  <p className="text-xs text-[#7aadd4]">
                    {temoignage.situation}
                  </p>
                  <p className="text-xs text-[#c8e600] font-semibold mt-0.5">
                    {profilLabels[temoignage.profil]}
                  </p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}