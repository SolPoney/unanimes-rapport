import type { BilanFinancier } from '@/types'

// Chiffres officiels — Compte de résultat 2025
// Document généré le 27/03/2026

export const bilanFinancier: BilanFinancier = {
  exercice: 2025,
  detteInitiale: 33000,
  detteSoldeeAnnee: 10000,

  produits: [
    {
      id: 'dons-manuels',
      label: 'Dons manuels',
      montant: 8085,
      pourcentage: 30,
      couleur: '#0a2540',
    },
    {
      id: 'crowsilence',
      label: 'CROWSILENCE',
      montant: 5225,
      pourcentage: 19,
      couleur: '#00d4c8',
    },
    {
      id: 'expertise',
      label: 'Expertise',
      montant: 4100,
      pourcentage: 15,
      couleur: '#c8e600',
    },
    {
      id: 'subventions',
      label: 'Subventions reçues',
      montant: 4500,
      pourcentage: 17,
      couleur: '#0d3055',
    },
    {
      id: 'produits-financiers',
      label: 'Produits financiers (Livret A)',
      montant: 1241,
      pourcentage: 5,
      couleur: '#6b21a8',
    },
    {
      id: 'produits-exceptionnels',
      label: 'Produits exceptionnels',
      montant: 2000,
      pourcentage: 7,
      couleur: '#166534',
    },
    {
      id: 'cotisations',
      label: 'Cotisations (adhérents + associations)',
      montant: 2056,
      pourcentage: 8,
      couleur: '#9a3412',
    },
  ],

  charges: [
    {
      id: 'honoraires-interpretation',
      label: "Honoraires interprètes, vélotypie, LfPC",
      montant: 5814,
      pourcentage: 41,
      couleur: '#0a2540',
    },
    {
      id: 'voyages-deplacements',
      label: 'Voyages et déplacements',
      montant: 2302,
      pourcentage: 16,
      couleur: '#00d4c8',
    },
    {
      id: 'location-logiciels',
      label: 'Location logiciels',
      montant: 2151,
      pourcentage: 15,
      couleur: '#c8e600',
    },
    {
      id: 'cotisations-statutaires',
      label: 'Cotisations vie statutaire',
      montant: 1755,
      pourcentage: 12,
      couleur: '#0d3055',
    },
    {
      id: 'achats-prestations',
      label: "Achats d'études et prestations",
      montant: 495,
      pourcentage: 3,
      couleur: '#6b21a8',
    },
    {
      id: 'assurance',
      label: 'Assurance multirisques',
      montant: 493,
      pourcentage: 3,
      couleur: '#166534',
    },
    {
      id: 'autres-charges',
      label: 'Autres charges (fournitures, bancaires, postaux…)',
      montant: 1168,
      pourcentage: 8,
      couleur: '#9a3412',
    },
  ],

  totalProduits: 27210,
  totalCharges:  14178,
  resultat:      13032,
}

// Bilan simplifié — pour information
export const bilanSimplifie = {
  totalActif:  52644.58,
  totalPassif: 52644.58,
  tresorerie: {
    creditMutuel:  3250.17,
    livretA:       46318.15,
    helloAsso:     130.00,
    total:         49698.32,
  },
  fondsStatutaires: 4926.99,
  detteAgefiph: 24082.20, // dette résiduelle AGEFIPH au passif
}