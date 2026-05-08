import { Avatar } from '@/components/ui/Avatar/Avatar'
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle'
import { rapportConfig } from '@/data/rapport.config'

export function Edito() {
  const { president } = rapportConfig.association

  return (
    <section
      id="edito"
      aria-labelledby="edito-titre"
      className="section-py section-light"
    >
      <div className="container-rapport">
        <SectionTitle
          id="edito-titre"
          titre="Édito du Président"
          accent="navy"
          className="mb-12"
        />

        <div className="flex flex-col md:flex-row gap-10 items-start max-w-4xl">

          {/* Photo */}
          <div className="flex-shrink-0 flex flex-col items-center gap-3">
            <Avatar
              src="images/equipe/thomas-soret.jpg"
              alt="Thomas Soret, Président d'UNANIMES"
              initiales="TS"
              couleurFallback="#0a2540"
              size="xl"
            />
            <div className="text-center">
              <p className="font-black text-sm" style={{ color: 'var(--text-primary)' }}>
                {president.prenom} {president.nom}
              </p>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                {president.titre}
              </p>
            </div>
          </div>

          {/* Texte complet — version originale */}
          <div className="flex-1 space-y-5">
            <p style={{ color: 'var(--text-secondary)' }}>
              <strong>Chères associations, chers adhérents individuels,</strong>
            </p>

            <p style={{ color: 'var(--text-secondary)' }} className="leading-relaxed">
              Ce rapport d'activités rend compte d'une période dense pour UNANIMES,
              marquée par une reconnaissance institutionnelle croissante et par l'engagement
              constant de ses membres et bénévoles, sans lesquels rien de ce qui a été accompli
              n'aurait été possible.
            </p>

            <p style={{ color: 'var(--text-secondary)' }} className="leading-relaxed">
              {"L'année écoulée témoigne d'une dynamique réelle. L'arrivée du Réseau national des sourdaveugles (RNSA) parmi nos membres, ainsi que l'intérêt manifesté par plusieurs autres associations, confirment l'attractivité d'UNANIMES. Cette confiance nous honore. Elle s'est traduite par un engagement soutenu, à l'extérieur comme en interne : représentation et plaidoyer auprès des institutions, renforcement de notre visibilité, évolution de nos statuts et de notre règlement intérieur, amélioration de nos modes de fonctionnement, recherche active de financements. Ce rapport en présente les principales étapes, sans prétendre à l'exhaustivité tant l'activité fut dense."}
            </p>

            <p style={{ color: 'var(--text-secondary)' }} className="leading-relaxed">
              {"L'année revêtait également une dimension symbolique forte avec le vingtième anniversaire de la loi de 2005. Si cet anniversaire a suscité de fortes attentes, les avancées obtenues n'ont pas été à la hauteur des enjeux portés par nos communautés, rappelant le chemin qu'il reste à parcourir vers une inclusion effective."}
            </p>

            <p style={{ color: 'var(--text-secondary)' }} className="leading-relaxed">
              {"Aujourd'hui, UNANIMES se situe à un moment charnière de son développement. Notre croissance et la multiplication des sollicitations traduisent une reconnaissance institutionnelle accrue. Elles révèlent également nos fragilités : ressources humaines limitées, capacités financières à consolider, organisation à structurer pour répondre avec efficacité et constance. Grandir impose de se renforcer."}
            </p>

            <blockquote
              className="border-l-4 border-[#c8e600] pl-6 py-4 my-6 rounded-r-lg"
              style={{ backgroundColor: 'var(--bg-secondary)' }}
            >
              <p className="text-lg italic font-semibold leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                "Nous sommes au service de plus de 7 millions de personnes concernées
                par la surdité, la malentendance et la surdicécité, sans compter leurs familles."
              </p>
            </blockquote>

            <p style={{ color: 'var(--text-secondary)' }} className="leading-relaxed">
              {"La transformation engagée n'a qu'une finalité : mieux servir. Elle se poursuivra avec méthode, en s'appuyant sur l'expertise, l'engagement et la diversité de nos membres. Car c'est collectivement que nous pourrons consolider nos fondations et porter plus loin notre action."}
            </p>

            <p style={{ color: 'var(--text-secondary)' }} className="leading-relaxed">
              {"La transformation organisationnelle engagée n'a qu'un seul objectif : mieux servir celles et ceux qui nous font confiance. Elle se fera avec lucidité et humilité, en s'appuyant sur l'expertise et l'engagement de l'ensemble de nos membres, associations comme adhérents individuels."}
            </p>

            <blockquote
              className="border-l-4 border-[#00d4c8] pl-6 py-4 my-6 rounded-r-lg"
              style={{ backgroundColor: 'var(--bg-secondary)' }}
            >
              <p className="text-lg italic font-semibold leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                {"Avancer étape après étape, sans perdre de vue l'essentiel : telle demeure notre ligne. Construire une société pleinement inclusive et accessible est notre mission."}
              </p>
            </blockquote>

            {/* Signature */}
            <div
              className="mt-8 pt-6 border-t"
              style={{ borderColor: 'var(--border-default)' }}
            >
              <p className="font-black" style={{ color: 'var(--text-primary)' }}>
                {president.prenom} {president.nom}
              </p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                {president.titre}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}