/**
 * RGAA — Obligatoire
 * Premier élément de la page, visible uniquement au focus clavier
 * Permet aux utilisateurs clavier de sauter la navigation
 */
export function SkipLink() {
  return (
    <a
      href="#contenu-principal"
      className="
        fixed top-4 left-4 z-[999]
        bg-[#0a2540] text-white
        px-4 py-2 rounded font-bold text-sm
        -translate-y-40 focus:translate-y-0
        transition-transform duration-200
        focus:outline-none focus:ring-2
        focus:ring-[#c8e600] focus:ring-offset-2
      "
    >
      Aller au contenu principal
    </a>
  )
}