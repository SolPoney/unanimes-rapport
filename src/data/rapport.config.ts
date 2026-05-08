// Config globale du rapport — toutes les constantes en un seul endroit

export const rapportConfig = {
  annee: 2025,
  titre: "Rapport d'activités",
  accroche: "L'année de la transformation",
  messageCentral:
    "En 2025, UNANIMES a prouvé qu'une fédération sans salarié peut peser nationalement — imaginez avec les bons moyens.",

  association: {
    nom: 'UNANIMES',
    nomComplet:
      "Union des Associations Nationales pour l'Inclusion des Malentendants et des Sourds",
    adresse: 'MVAC BP 111, 5 rue Perrée, 75003 Paris',
    email: 'info@unanimes.fr',
    site: 'https://unanimes.fr',
    rapport: 'https://unanimes.fr/rapport-2025',
    reseaux: {
      facebook:  'https://www.facebook.com/unanimesFR',
      instagram: 'https://www.instagram.com/unanimes_fr/',
      linkedin:  'https://fr.linkedin.com/company/unanimes',
    },
    adhesion:
      'https://www.helloasso.com/associations/unanimes/adhesions/adhesion-2026',
    president: {
      prenom: 'Thomas',
      nom: 'SORET',
      titre: "Président d'UNANIMES",
    },
  },

  publication: {
    date: '2026-05-07',
    version: '1.0',
  },
} as const