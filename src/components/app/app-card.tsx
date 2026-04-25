

import { cn } from '@/lib/utils'

interface AppCardProps extends React.ComponentProps<'div'> {
  
  elevated?: boolean
  
  pad?: number
}

export function AppCard({ className, elevated = false, pad, style, ...props }: AppCardProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl bg-surface border border-border',
        elevated && 'shadow-[0_4px_20px_rgba(15,23,42,.06)]',
        className,
      )}
      style={pad !== undefined ? { padding: pad, ...style } : style}
      {...props}
    />
  )
}

export type PillTone = 'default' | 'accent' | 'success' | 'warn' | 'danger'

interface PillProps {
  children: React.ReactNode
  tone?: PillTone
  size?: 'sm' | 'md'
}

const TONE_CLASSES: Record<PillTone, string> = {
  default: 'bg-surface-alt text-text-dim border border-border',
  accent:  'bg-accent-soft text-accent-text border-transparent',
  success: 'bg-success-soft text-success border-transparent',
  warn:    'bg-warn-soft text-warn border-transparent',
  danger:  'bg-danger-soft text-danger border-transparent',
}

export function Pill({ children, tone = 'default', size = 'sm' }: PillProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 whitespace-nowrap rounded-full border font-semibold',
        size === 'md' ? 'px-[10px] py-[5px] text-xs' : 'px-[9px] py-[3px] text-[11px]',
        TONE_CLASSES[tone],
      )}
    >
      {children}
    </span>
  )
}
