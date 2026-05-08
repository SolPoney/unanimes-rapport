import { useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { useCountUp } from 'react-countup'
import { cn } from '@/utils/cn'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import type { ChiffreCle } from '@/types'

interface StatCardProps {
  chiffre: ChiffreCle
  className?: string
}

function AnimatedNumber({ valeur }: { valeur: number }) {
  const countUpRef = useRef<HTMLSpanElement>(null)
  useCountUp({
    ref: countUpRef,
    start: 0,
    end: valeur,
    duration: 2,
    separator: ' ',
    enableScrollSpy: true,
    scrollSpyOnce: true,
  })
  return <span ref={countUpRef}>0</span>
}

export function StatCard({ chiffre, className }: StatCardProps) {
  const reduced = useReducedMotion()
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  const valeurFormatee = new Intl.NumberFormat('fr-FR').format(chiffre.valeur)
  const afficherAnimation = !reduced && chiffre.valeur > 0

  return (
    <article
      ref={ref}
      className={cn('stat-card rounded-xl p-6 border-t-4', className)}
      style={{
        borderTopColor: chiffre.couleurAccent,
        backgroundColor: 'var(--bg-primary)',
        boxShadow: 'var(--shadow-md)',
      }}
      aria-label={`${chiffre.label} : ${chiffre.prefix ?? ''}${valeurFormatee}${chiffre.suffix ?? ''}`}
    >
      <div
        className="text-5xl font-black mb-2 leading-none"
        style={{ color: chiffre.couleurAccent }}
        aria-hidden="true"
      >
        {chiffre.prefix}
        {afficherAnimation && inView ? (
          <AnimatedNumber valeur={chiffre.valeur} />
        ) : (
          valeurFormatee
        )}
        {chiffre.suffix}
      </div>

      <h3 className="text-sm font-bold mb-1 leading-snug" style={{ color: 'var(--text-primary)' }}>
        {chiffre.label}
      </h3>

      {chiffre.description && (
        <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          {chiffre.description}
        </p>
      )}

      {chiffre.variation && (
        <p className="text-xs font-semibold mt-2" style={{ color: '#00d4c8' }}>
          {chiffre.variation}
        </p>
      )}
    </article>
  )
}