import type { Metadata } from 'next'
import Link from 'next/link'
import { AppCard, Pill } from '@/components/app/app-card'
import { PageHeader } from '@/components/app/page-header'
import { PENGUMUMAN } from '@/lib/mock-data'

export const metadata: Metadata = { title: 'Pengumuman' }

const FILTERS = ['Semua', 'RT', 'RW', 'Kelurahan'] as const

export default function PengumumanPage() {
  return (
    <>
      <PageHeader
        title="Pengumuman"
        subtitle={`${PENGUMUMAN.length} info terbaru`}
      />

      
      <div className="sticky top-(--topbar-h) z-4 flex gap-2 overflow-x-auto border-b border-border bg-surface px-4 py-3">
        {FILTERS.map((f) => (
          <span
            key={f}
            className={
              f === 'Semua'
                ? 'cursor-pointer whitespace-nowrap rounded-full bg-accent px-3.5 py-[7px] text-xs font-semibold text-white'
                : 'cursor-pointer whitespace-nowrap rounded-full border border-border-strong px-3.5 py-[7px] text-xs font-semibold text-text-dim'
            }
          >
            {f}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-2.5 p-4">
        {PENGUMUMAN.map((p) => (
          <Link key={p.id} href={`/announcements/${p.id}`}>
            <AppCard pad={14}>
              <div className="mb-2 flex items-center gap-1.5">
                <Pill tone="accent">{p.kategori}</Pill>
                {p.isPinned && <Pill tone="warn">📌 Pinned</Pill>}
                <span className="ml-auto text-[11px] text-text-faint">{p.tanggal}</span>
              </div>
              <p className="mb-1 text-[15px] font-bold tracking-tight text-foreground">
                {p.judul}
              </p>
              <p className="text-[13px] leading-normal text-text-dim line-clamp-2">
                {p.isi}
              </p>
              <p className="mt-2.5 text-[11px] text-text-faint">{p.author}</p>
            </AppCard>
          </Link>
        ))}
      </div>
    </>
  )
}
