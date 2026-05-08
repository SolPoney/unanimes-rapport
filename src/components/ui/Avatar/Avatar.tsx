import { useState } from 'react'
import { cn } from '@/utils/cn'

interface AvatarProps {
  src?: string
  alt: string
  initiales: string
  couleurFallback?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const sizes = {
  sm: 'w-12 h-12 text-sm',
  md: 'w-16 h-16 text-base',
  lg: 'w-24 h-24 text-xl',
  xl: 'w-32 h-32 text-2xl',
}

export function Avatar({
  src,
  alt,
  initiales,
  couleurFallback = '#0a2540',
  size = 'md',
  className,
}: AvatarProps) {
  const [error, setError] = useState(false)

  return (
    <div
      className={cn(
        'relative rounded-full overflow-hidden flex-shrink-0',
        sizes[size],
        className
      )}
    >
      {src && !error ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          onError={() => setError(true)}
        />
      ) : (
        <div
          className="w-full h-full flex items-center justify-center text-white font-bold"
          style={{ backgroundColor: couleurFallback }}
          aria-hidden="true"
        >
          {initiales}
        </div>
      )}
    </div>
  )
}