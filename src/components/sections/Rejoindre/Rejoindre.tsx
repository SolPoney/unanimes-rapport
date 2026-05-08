import { rapportConfig } from '@/data/rapport.config'

export function Rejoindre() {
  const { association } = rapportConfig

  return (
    <section
      id="rejoindre"
      aria-labelledby="rejoindre-titre"
      className="section-py bg-[#0a2540] text-white"
    >
      <div className="container-rapport text-center">
        <h2 id="rejoindre-titre" className="text-4xl font-black text-[#c8e600] mb-4">
          Rejoindre UNANIMES
        </h2>
        <p className="text-lg text-[#c5dff0] mb-16 max-w-xl mx-auto">
          {"Ensemble, construisons une société pleinement inclusive et accessible."}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">

          {/* Adhésion individuelle */}
          <article className="bg-white/10 border border-white/20 rounded-xl p-8 text-left">
            <div className="w-12 h-12 bg-[#c8e600] rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#0a2540]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-black text-white mb-3">Adhésion individuelle</h3>
            <p className="text-[#c5dff0] text-sm leading-relaxed mb-6">
              {"Vous êtes concerné·e par la surdité ou la malentendance et vous vous retrouvez dans la charte d'UNANIMES ? Rejoignez-nous en tant que membre individuel."}
            </p>
            <a
              href={association.adhesion}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#c8e600] text-[#0a2540] font-black px-6 py-3 rounded-lg hover:bg-[#d4f000] transition-colors duration-200 no-underline text-sm"
            >
              Adhérer en ligne
            </a>
          </article>

          {/* Adhésion association */}
          <article className="bg-white/10 border border-white/20 rounded-xl p-8 text-left">
            <div className="w-12 h-12 bg-[#00d4c8] rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#0a2540]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-black text-white mb-3">Adhésion association</h3>
            <p className="text-[#c5dff0] text-sm leading-relaxed mb-6">
              {"Vous administrez une association nationale et vous vous retrouvez dans la charte d'UNANIMES ? Votre association peut rejoindre l'un de nos collèges."}
            </p>
            <a
              href={`mailto:${association.email}?subject=Adhésion association`}
              className="inline-block bg-[#00d4c8] text-[#0a2540] font-black px-6 py-3 rounded-lg hover:bg-[#1de8dc] transition-colors duration-200 no-underline text-sm"
            >
              Nous contacter
            </a>
          </article>
        </div>

        {/* Soutenir financièrement */}
        <div className="mt-12 max-w-xl mx-auto p-6 bg-white/5 border border-white/10 rounded-xl">
          <h3 className="text-lg font-black text-[#c8e600] mb-2">
            Soutenir financièrement UNANIMES
          </h3>
          <p className="text-[#c5dff0] text-sm leading-relaxed mb-4">
            {"Financeurs institutionnels, fondations, mécènes — votre soutien contribue directement à la représentation de 7 millions de personnes concernées par la surdité."}
          </p>
          <a
            href={`mailto:${association.email}?subject=Mécénat et partenariat`}
            className="inline-block bg-white/10 border border-white/20 text-white font-bold px-6 py-2.5 rounded-lg hover:bg-white/20 transition-colors duration-200 no-underline text-sm"
          >
            Discutons-en
          </a>
        </div>
      </div>
    </section>
  )
}