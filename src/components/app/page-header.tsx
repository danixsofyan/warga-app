

'use client'

import { useRouter } from 'next/navigation'
import { ChevronLeftIcon } from '@/components/app/icons'

interface PageHeaderProps {
  title: string
  subtitle?: string
  showBack?: boolean
  backHref?: string
  action?: React.ReactNode
}

export function PageHeader({ title, subtitle, showBack = false, backHref, action }: PageHeaderProps) {
  const router = useRouter()

  const handleBack = () => {
    if (backHref) router.push(backHref)
    else router.back()
  }

  return (
    <header className="sticky top-0 z-10 flex items-center gap-[10px] border-b border-border bg-surface px-[18px] py-[14px]">
      {showBack && (
        <button
          onClick={handleBack}
          aria-label="Kembali"
          className="-ml-1.5 grid h-[38px] w-[38px] shrink-0 place-items-center rounded-xl border-0 bg-transparent text-foreground"
        >
          <ChevronLeftIcon size={22} />
        </button>
      )}

      <div className="min-w-0 flex-1">
        <h1
          className="truncate text-[17px] font-bold leading-tight tracking-[-0.01em]"
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-px truncate text-xs text-text-dim">
            {subtitle}
          </p>
        )}
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </header>
  )
}
