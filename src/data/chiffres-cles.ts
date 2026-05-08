import type { ChiffreCle } from '@/types'

export const chiffresCles: ChiffreCle[] = [
  {
    id: 'associations-membres',
    valeur: 8,
    label: 'Associations membres',
    description: "dont le RNSA (sourdaveugles), membre depuis 2025",
    couleurAccent: '#00d4c8',
  },
  {
    id: 'associations-interessees',
    valeur: 8,
    label: 'Associations ont manifesté leur intérêt',
    description: "pour rejoindre UNANIMES en 2025",
    couleurAccent: '#c8e600',
  },
  {
    id: 'audience-reseaux',
    valeur: 133,
    suffix: '%',
    label: "Progression de l'audience sur les réseaux sociaux",
    variation: 'vs 2024',
    couleurAccent: '#00d4c8',
  },
  {
    id: 'dette-soldee',
    valeur: 0,
    suffix: '€',
    label: 'Dette résiduelle',
    description: "33 000 € remboursés depuis la prise de fonction de l'équipe actuelle",
    couleurAccent: '#c8e600',
  },
  {
    id: 'personnes-representees',
    valeur: 7000000,
    suffix: '+',
    label: 'Personnes représentées',
    description: 'Sourdes, malentendantes, sourdaveugles et leurs familles',
    couleurAccent: '#0a2540',
  },
  {
    id: 'produits-exercice',
    valeur: 27210,
    suffix: '€',
    label: "Produits de l'exercice 2025",
    description: "Excédent : 13 032 €",
    couleurAccent: '#166534',
  },
]