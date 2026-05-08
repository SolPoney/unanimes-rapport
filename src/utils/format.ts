/**
 * Formate un montant en euros français
 * formatEuros(1200000) → "1 200 000 €"
 */
export function formatEuros(montant: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(montant)
}

/**
 * Formate un nombre avec séparateur de milliers
 * formatNombre(7000000) → "7 000 000"
 */
export function formatNombre(n: number): string {
  return new Intl.NumberFormat('fr-FR').format(n)
}

/**
 * Formate une date ISO en date française longue
 * formatDate("2025-11-15") → "15 novembre 2025"
 */
export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(iso))
}

/**
 * Formate une date ISO en mois + année
 * formatMoisAnnee("2025-08-21") → "août 2025"
 */
export function formatMoisAnnee(iso: string): string {
  return new Intl.DateTimeFormat('fr-FR', {
    month: 'long',
    year: 'numeric',
  }).format(new Date(iso))
}

/**
 * Formate un pourcentage
 * formatPourcent(65) → "65 %"
 */
export function formatPourcent(n: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'percent',
    maximumFractionDigits: 0,
  }).format(n / 100)
}