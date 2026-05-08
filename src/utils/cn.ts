import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Fusionne les classes Tailwind sans conflits
 *
 * Exemples :
 *   cn('px-4 py-2', 'px-6')              → 'py-2 px-6'
 *   cn('text-sm', isLarge && 'text-lg')  → 'text-lg' si isLarge
 *   cn('bg-blue-500', className)          → merge propre
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}