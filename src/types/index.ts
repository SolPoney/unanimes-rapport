// ─────────────────────────────────────────────────────────────
// UNANIMES — Types TypeScript centralisés
// Toute modification de structure de données passe par ici
// ─────────────────────────────────────────────────────────────

// ── Navigation ───────────────────────────────────────────────
export interface SommaireItem {
  id: string
  label: string
  numero: number
}

// ── Chiffres clés ────────────────────────────────────────────
export interface ChiffreCle {
  id: string
  valeur: number
  suffix?: string
  prefix?: string
  label: string
  description?: string
  variation?: string       // ex: "+18% vs 2024"
  couleurAccent: string    // couleur hex directe
}

// ── Gouvernance ──────────────────────────────────────────────
export type College =
  | 'sourds-malentendants'
  | 'familles'
  | 'individuels'
  | 'qualifies'

export interface MembreCA {
  id: string
  prenom: string
  nom: string
  role: string
  college: College
  association?: string     // association représentée (si collège asso)
  photo?: string           // chemin relatif depuis src/assets/
  initiales: string        // fallback si pas de photo — ex: "TS"
  couleurFallback: string  // couleur hex du fallback
  actif: boolean
  dateDepart?: string      // ISO — si parti en cours d'année
}

export interface StatsCA {
  ageMoyen: number | null
  tauxAssiduite: number | null   // en %
  tauxFemmes: number | null      // en %
  tauxRenouvellement: number | null // en %
  dateComposition: string        // ex: "31 décembre 2025"
}

// ── Médias ───────────────────────────────────────────────────
export type TypeMedia =
  | 'presse-ecrite'
  | 'radio'
  | 'television'
  | 'web'
  | 'tribune'
  | 'communique'
  | 'video'

export interface ArticleMedia {
  id: string
  titre: string
  description: string
  support: string          // ex: "Télérama", "France Inter"
  type: TypeMedia
  date: string             // ISO 8601
  url?: string
}

// ── Financier ────────────────────────────────────────────────
export interface LigneFinanciere {
  id: string
  label: string
  montant: number
  pourcentage: number
  couleur: string          // hex
}

export interface BilanFinancier {
  exercice: number
  detteInitiale: number        // 33 000 € à l'arrivée de l'équipe
  detteSoldeeAnnee: number     // 10 000 € soldés en 2025
  produits: LigneFinanciere[]
  charges: LigneFinanciere[]
  totalProduits: number
  totalCharges: number
  resultat: number             // positif = bénéfice
}

// ── Faits marquants ──────────────────────────────────────────
export type TypeFait =
  | 'plaidoyer'       // représentation institutionnelle
  | 'terrain'         // actions de terrain
  | 'media'           // passage dans les médias
  | 'interne'         // transformation interne

export interface FaitMarquant {
  id: string
  titre: string
  description: string
  lieu: string
  date: string         // ISO 8601
  type: TypeFait
  photo?: string       // chemin relatif
  lien?: string        // URL externe si applicable
}

// ── Projets structurants ─────────────────────────────────────
export interface Projet {
  id: string
  numero: number
  titre: string
  periode: string      // ex: "Août 2025"
  contexte: string
  actions: string[]    // liste des actions menées
  resultats: string
  photo?: string
  suite?: string       // perspective pour 2026
}

// ── Témoignages ──────────────────────────────────────────────
export type ProfilTemoin =
  | 'personne-sourde'
  | 'personne-malentendante'
  | 'personne-sourdaveugle'
  | 'parent'
  | 'responsable-association'
  | 'benevole'

export interface Temoignage {
  id: string
  prenom: string
  situation: string          // ex: "Présidente d'une association membre"
  profil: ProfilTemoin
  citation: string           // 50-80 mots max
  photo?: string
  consentementObtenu: boolean  // ne jamais afficher si false
}

// ── Perspectives & besoins 2026 ──────────────────────────────
export interface BesoinFinancier {
  id: string
  label: string
  montantAnnuel: number
  description: string
  priorite: 'critique' | 'important' | 'souhaitable'
}

// ── Config globale ───────────────────────────────────────────
export interface ReseauxSociaux {
  twitter: string
  facebook: string
  instagram: string
  linkedin: string
}

export interface President {
  prenom: string
  nom: string
  titre: string
}