

import Link from 'next/link'

interface SectionHeaderProps {
  title: string
  moreHref?: string
  moreLabel?: string
}

export function SectionHeader({ title, moreHref, moreLabel = 'Lihat semua' }: SectionHeaderProps) {
  return (
    <div className="mb-2.5 flex items-baseline justify-between px-0.5">
      <h3 className="text-sm font-bold tracking-tight text-foreground">{title}</h3>
      {moreHref && (
        <Link href={moreHref} className="text-xs font-semibold text-accent">
          {moreLabel}
        </Link>
      )}
    </div>
  )
}
