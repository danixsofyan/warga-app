import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Pill } from '@/components/app/app-card'
import { PageHeader } from '@/components/app/page-header'
import { CheckCircleIcon, ClockIcon } from '@/components/app/icons'
import { PENGADUAN } from '@/lib/mock-data'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const item = PENGADUAN.find((p) => p.id === id)
  return { title: item?.judul ?? 'Detail Laporan' }
}

export default async function PengaduanDetailPage({ params }: Props) {
  const { id } = await params
  const item = PENGADUAN.find((p) => p.id === id)

  if (!item) notFound()

  return (
    <>
      <PageHeader title="Detail Laporan" showBack backHref="/complaints" />

      <article className="p-4">
        
        <div className="mb-3 flex items-center gap-2">
          <Pill tone="default">{item.kategori}</Pill>
          {item.status === 'selesai' ? (
            <Pill tone="success"><CheckCircleIcon size={10} /> Selesai</Pill>
          ) : (
            <Pill tone="warn"><ClockIcon size={10} /> Diproses</Pill>
          )}
          <span className="ml-auto font-mono text-[11px] text-text-faint">{item.id}</span>
        </div>

        <h1 className="text-[20px] font-extrabold leading-snug tracking-tight text-foreground">
          {item.judul}
        </h1>
        <p className="mt-1 text-[11px] text-text-faint">
          Dilaporkan pada {item.tanggal}
        </p>

        
        <div className="my-5 border-t border-border" />

        <div className="mb-2 text-xs font-bold uppercase tracking-widest text-text-dim">
          Isi Laporan
        </div>
        <p className="whitespace-pre-line text-sm leading-relaxed text-foreground">
          {item.deskripsi}
        </p>

        
        <div className="mt-8 rounded-xl border border-border bg-surface p-4">
          <div className="mb-3 text-xs font-bold uppercase tracking-widest text-text-dim">
            Tanggapan Pengurus
          </div>
          {item.status === 'selesai' ? (
            <p className="text-sm leading-relaxed text-success">
              Laporan telah ditindaklanjuti dan diselesaikan oleh pengurus RT. Terima kasih atas laporannya.
            </p>
          ) : (
            <p className="text-sm leading-relaxed text-warn">
              Laporan Anda sedang dalam tahap peninjauan. Pengurus akan segera memproses laporan ini.
            </p>
          )}
        </div>
      </article>
    </>
  )
}
