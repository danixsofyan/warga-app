

import { cn } from '@/lib/utils'

interface ListRowProps {
  isLast?: boolean
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

export function ListRow({ isLast = false, className, children, onClick }: ListRowProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 px-4 py-[14px] transition-colors',
        !isLast && 'border-b border-border',
        onClick && 'cursor-pointer hover:bg-surface-alt',
        className,
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

type IconCellShape = 'rounded' | 'circle'

interface IconCellProps {
  children: React.ReactNode
  
  bg?: string
  
  color?: string
  size?: number
  shape?: IconCellShape
}

export function IconCell({
  children,
  bg,
  color,
  size = 36,
  shape = 'rounded',
}: IconCellProps) {
  return (
    <div
      className={cn(
        'grid shrink-0 place-items-center',
        shape === 'circle' ? 'rounded-full' : 'rounded-md',
        !bg && 'bg-surface-alt',
        !color && 'text-text-dim',
      )}
      style={{
        width: size,
        height: size,
        ...(bg ? { background: bg } : {}),
        ...(color ? { color } : {}),
      }}
    >
      {children}
    </div>
  )
}

interface MiniStatProps {
  label: string
  value: string
  tone: 'success' | 'danger'
}

const MINI_STAT_CLASSES = {
  success: { wrap: 'bg-success-soft', text: 'text-success' },
  danger:  { wrap: 'bg-danger-soft',  text: 'text-danger'  },
} as const

export function MiniStat({ label, value, tone }: MiniStatProps) {
  const { wrap, text } = MINI_STAT_CLASSES[tone]
  return (
    <div className={cn('flex-1 rounded-xl p-3', wrap)}>
      <p className={cn('text-[11px] font-bold uppercase tracking-widest', text)}>
        {label}
      </p>
      <p className="mt-0.5 text-sm font-bold text-foreground">{value}</p>
    </div>
  )
}
