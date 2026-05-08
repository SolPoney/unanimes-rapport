import type { Temoignage } from '@/types'

// À remplir quand les témoignages sont collectés et consentements signés
// Ne jamais afficher un témoignage avec consentementObtenu: false

export const temoignages: Temoignage[] = [
  {
    id: 'temoin-1',
    prenom: 'Prénom',
    situation: 'Personne sourde, adhérente individuelle',
    profil: 'personne-sourde',
    citation:
      "Témoignage à collecter. La citation doit faire entre 50 et 80 mots.",
    photo: undefined,
    consentementObtenu: false,
  },
  {
    id: 'temoin-2',
    prenom: 'Prénom',
    situation: "Responsable d'une association membre",
    profil: 'responsable-association',
    citation:
      "Témoignage à collecter. La citation doit faire entre 50 et 80 mots.",
    photo: undefined,
    consentementObtenu: false,
  },
  {
    id: 'temoin-3',
    prenom: 'Prénom',
    situation: "Parent d'un enfant sourd",
    profil: 'parent',
    citation:
      "Témoignage à collecter. La citation doit faire entre 50 et 80 mots.",
    photo: undefined,
    consentementObtenu: false,
  },
]