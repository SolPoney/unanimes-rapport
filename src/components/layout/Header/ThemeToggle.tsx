import { useTheme } from '@/components/layout/Header/ThemeContext'

export function ThemeToggle() {
  const { isDark, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      className="
        print-hidden
        relative w-14 h-7 rounded-full
        transition-colors duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-[#c8e600]
        focus:ring-offset-2 focus:ring-offset-[#0a2540]
      "
      style={{ backgroundColor: isDark ? '#c8e600' : '#1e3a52' }}
      aria-label={isDark ? 'Activer le mode clair' : 'Activer le mode sombre'}
      aria-pressed={isDark}
    >
      <span
        className="
          absolute top-0.5 left-0.5
          w-6 h-6 rounded-full
          flex items-center justify-center
          text-sm
          transition-transform duration-300 ease-in-out
        "
        style={{
          transform: isDark ? 'translateX(28px)' : 'translateX(0)',
          backgroundColor: isDark ? '#0a2540' : '#ffffff',
        }}
        aria-hidden="true"
      >
        {isDark ? '🌙' : '☀️'}
      </span>
    </button>
  )
}