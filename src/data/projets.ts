import type { Projet } from '@/types'

export const projets: Projet[] = [
  {
    id: 'douarnenez',
    numero: 1,
    titre: 'Festival de Douarnenez — Accès inclusif au cinéma',
    periode: 'Août 2025',
    contexte:
      "Le Festival de Douarnenez est un événement cinématographique majeur en Bretagne. L'objectif était de permettre à des personnes sourdes et malentendantes de participer au festival dans des conditions optimales d'accessibilité.",
    actions: [
      "Intervention publique sur les enjeux d'accessibilité au cinéma",
      "Mise en lumière des initiatives existantes et des défis rencontrés",
      "Rencontres avec des professionnels du cinéma et des festivals",
      "Plaidoyer pour l'extension des séances accessibles",
    ],
    resultats:
      "Retours positifs de l'organisation du festival. Ouverture d'un dialogue concret sur l'accessibilité des grands événements cinématographiques. Invitation à renouveler la participation.",
    photo: 'evenements/douarnenez.jpg',
    suite: "Reconduction envisagée au Festival de Douarnenez en 2026 avec un dispositif renforcé.",
  },
  {
    id: 'goya',
    numero: 2,
    titre: "45ème anniversaire de GOYA à Mougins",
    periode: 'Octobre 2025',
    contexte:
      "Célébration du 45ème anniversaire de l'association GOYA, partenaire d'UNANIMES dans la région PACA. L'événement valorisait 45 ans d'engagement pour l'inclusion et l'accessibilité.",
    actions: [
      "Participation au gala anniversaire du 11 octobre",
      "Échange entre les présidents d'UNANIMES et de GOYA",
      "Partage des perspectives de coopération renforcée",
      "Renforcement des liens avec le tissu associatif régional",
    ],
    resultats:
      "Consolidation du partenariat avec GOYA et renforcement de la présence d'UNANIMES dans la région PACA. Identification de futures collaborations.",
    photo: 'evenements/goya.jpeg',
  },
  {
    id: 'brest',
    numero: 3,
    titre: "Week-end découverte à Brest avec l'ANPSA",
    periode: '10-13 septembre 2025',
    contexte:
      "Partenariat avec l'ANPSA pour une rencontre avec Phare d'Ouest et ses membres lors d'un séjour à Brest, permettant de tisser des liens de terrain avec les associations locales.",
    actions: [
      "Rencontre avec l'équipe de Phare d'Ouest et ses membres",
      "Visite du patrimoine maritime de Brest",
      "Échanges sur les réalités de terrain des associations membres",
      "Moments de convivialité et de construction collective",
    ],
    resultats:
      "Renforcement du lien entre UNANIMES et ses membres de terrain. Meilleure connaissance des réalités locales. Consolidation du partenariat avec l'ANPSA.",
    photo: 'evenements/brest.jpg',
    suite: "Développement de nouvelles actions de terrain en partenariat avec les associations membres en 2026.",
  },
]