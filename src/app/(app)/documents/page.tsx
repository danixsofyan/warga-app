import type { Metadata } from 'next'
import Link from 'next/link'
import { AppCard, Pill } from '@/components/app/app-card'
import { PageHeader } from '@/components/app/page-header'
import { SectionHeader } from '@/components/app/section-header'
import { ListRow, IconCell } from '@/components/app/list-row'
import { CheckCircleIcon, ClockIcon, DocumentIcon, ChevronRightIcon } from '@/components/app/icons'
import { SURAT_TEMPLATES, RIWAYAT_SURAT } from '@/lib/mock-data'

export const metadata: Metadata = { title: 'Surat Digital' }

export default function SuratPage() {
  return (
    <>
      <PageHeader title="Surat Digital" />

      <div className="p-4">
        
        <SectionHeader title="Pengajuan aktif" />
        <AppCard pad={0} className="mb-[22px] overflow-hidden">
          {RIWAYAT_SURAT.slice(0, 2).map((r, i) => (
            <ListRow key={r.id} isLast={i === 1}>
              <IconCell bg="var(--accent-soft)" color="var(--accent-text)" size={38}>
                <DocumentIcon size={18} />
              </IconCell>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] font-bold tracking-[-0.005em] text-foreground">
                  {r.jenis}
                </p>
                <p className="mt-0.5 text-[11px] text-text-faint">
                  {r.id} · {r.tanggal}
                </p>
              </div>
              {r.status === 'disetujui' ? (
                <Pill tone="success"><CheckCircleIcon size={10} /> Selesai</Pill>
              ) : (
                <Pill tone="warn"><ClockIcon size={10} /> Diproses</Pill>
              )}
            </ListRow>
          ))}
        </AppCard>

        
        <SectionHeader title="Jenis Surat" />
        <div className="flex flex-col gap-2.5">
          {SURAT_TEMPLATES.map((s) => (
            <Link key={s.id} href={`/documents/${s.id}`}>
              <AppCard pad={14}>
                <div className="flex items-center gap-3">
                  <IconCell bg="var(--accent-soft)" color="var(--accent-text)" size={42} shape="rounded">
                    <DocumentIcon size={20} />
                  </IconCell>
                  <div className="min-w-0 flex-1">
                    <p className="text-[14px] font-bold tracking-[-0.005em] text-foreground">
                      {s.nama}
                    </p>
                    <p className="mt-0.5 text-xs text-text-dim">
                      {s.desc} · {s.eta}
                    </p>
                  </div>
                  <ChevronRightIcon size={18} className="text-text-faint" />
                </div>
              </AppCard>
            </Link>
          ))}
        </div>

        <div className="h-5" />
      </div>
    </>
  )
}
