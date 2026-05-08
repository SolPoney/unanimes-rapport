import type { ArticleMedia } from '@/types'

export const articlesMedias: ArticleMedia[] = [
  {
    id: 'telerama-2025',
    titre: "Le cinéma accessible pour tous, maintenant",
    description:
      "Appel pour que les salles de cinéma s'adaptent enfin au handicap. UNANIMES mobilisée pour l'accessibilité culturelle.",
    support: 'Télérama',
    type: 'presse-ecrite',
    date: '2025-11-15',
    url: 'https://www.telerama.fr/cinema/le-cinema-accessible-pour-tous-maintenant-un-appel-pour-que-les-salles-s-adaptent-enfin-au-handicap-7025825.php',
  },
  {
    id: 'handicap-fr-2025',
    titre: "Au cinéma, les spectateurs malentendants veulent leur place",
    description:
      "Les personnes malentendantes revendiquent un accès équitable aux salles de cinéma et aux œuvres culturelles.",
    support: 'Handicap.fr',
    type: 'web',
    date: '2025-01-01',
    url: 'https://informations.handicap.fr/a-au-cinema-les-spectateurs-malentendants-veulent-leur-place-38051.php',
  },
  {
    id: 'youtube-emission',
    titre: "Émission UNANIMES — Accessibilité & Inclusion",
    description:
      "Découvrez nos actions et notre mobilisation pour l'accessibilité des personnes sourdes et malentendantes.",
    support: 'YouTube',
    type: 'video',
    date: '2025-01-01',
    url: 'https://www.youtube.com/watch?v=-Sq1pnnMTLI',
  },
  {
    id: 'les-echos-tribune',
    titre: "L'accessibilité numérique, un impératif démocratique",
    description:
      "Contribution collective des associations membres sur l'urgence de rendre les services numériques accessibles à toutes les personnes en situation de handicap.",
    support: 'Les Échos',
    type: 'tribune',
    date: '2025-07-12',
    url: '#',
  },
]

// Compteurs médias — à mettre à jour avec les vraies valeurs
export const statsMedias = {
  articlesPresse: 0,    // ← à compléter
  tribunesInterviews: 0, // ← à compléter
  communiques: 0,        // ← à compléter
  passagesTVRadio: 0,    // ← à compléter
}