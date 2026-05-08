import { cn } from '@/utils/cn'

interface SectionTitleProps {
  titre: string
  sousTitre?: string
  accent?: 'turquoise' | 'lime' | 'navy' | 'white'
  align?: 'left' | 'center'
  id?: string
  className?: string
}

const accents = {
  turquoise: { text: '#00d4c8', bar: '#00d4c8' },
  lime:      { text: '#c8e600', bar: '#c8e600' },
  navy:      { text: '#0a2540', bar: '#0a2540' },
  white:     { text: '#ffffff', bar: '#ffffff' },
}

export function SectionTitle({
  titre,
  sousTitre,
  accent = 'turquoise',
  align = 'left',
  id,
  className,
}: SectionTitleProps) {
  const colors = accents[accent]

  return (
    <header className={cn(align === 'center' && 'text-center', className)}>
      <h2
        id={id}
        className="font-black tracking-tight"
        style={{ color: colors.text }}
      >
        {titre}
      </h2>

      {sousTitre && (
        <p className="mt-3 text-lg max-w-2xl" style={{ color: '#4b5563' }}>
          {sousTitre}
        </p>
      )}

      {/* Trait signature UNANIMES */}
      <div
        className={cn('mt-4 h-1 w-16 rounded-full', align === 'center' && 'mx-auto')}
        style={{ backgroundColor: colors.bar }}
        aria-hidden="true"
      />
    </header>
  )
}