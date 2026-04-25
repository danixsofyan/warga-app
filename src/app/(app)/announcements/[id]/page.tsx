import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Pill } from '@/components/app/app-card'
import { PageHeader } from '@/components/app/page-header'
import { CalendarIcon } from '@/components/app/icons'
import { PENGUMUMAN } from '@/lib/mock-data'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const item = PENGUMUMAN.find((p) => p.id === id)
  return {
    title: item?.judul ?? 'Pengumuman',
  }
}

export default async function PengumumanDetailPage({ params }: Props) {
  const { id } = await params
  const item = PENGUMUMAN.find((p) => p.id === id)

  if (!item) notFound()

  return (
    <>
      <PageHeader
        title="Detail Info"
        showBack
        backHref="/announcements"
      />

      <article className="p-4">
        
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Pill tone="accent">{item.kategori}</Pill>
          {item.isPinned && <Pill tone="warn">📌 Dipin</Pill>}
          <span className="ml-auto flex items-center gap-1 text-[11px] text-text-faint">
            <CalendarIcon size={12} /> {item.tanggal}
          </span>
        </div>

        
        <h1 className="text-[22px] font-extrabold leading-snug tracking-tight text-foreground">
          {item.judul}
        </h1>

        
        <p className="mt-1 text-xs text-text-dim">
          Oleh: <span className="font-bold text-foreground">{item.author}</span>
        </p>

        
        <div className="my-[18px] border-t border-border" />

        
        <div className="whitespace-pre-line text-sm leading-relaxed text-text-dim">
          {item.isi}
        </div>
      </article>
    </>
  )
}
