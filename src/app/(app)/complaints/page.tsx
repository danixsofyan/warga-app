import type { Metadata } from 'next'
import Link from 'next/link'
import { AppCard, Pill } from '@/components/app/app-card'
import { PageHeader } from '@/components/app/page-header'
import { CheckCircleIcon, ClockIcon, PlusIcon } from '@/components/app/icons'
import { PENGADUAN } from '@/lib/mock-data'

export const metadata: Metadata = { title: 'Pengaduan' }

export default function PengaduanPage() {
  return (
    <>
      <PageHeader
        title="Pengaduan Saya"
        action={
          <Link
            href="/complaints/buat"
            aria-label="Buat laporan baru"
            className="grid h-[38px] w-[38px] place-items-center rounded-xl text-foreground"
          >
            <PlusIcon size={22} />
          </Link>
        }
      />

      <div className="p-4">
        <div className="flex flex-col gap-2.5">
          {PENGADUAN.map((p) => (
            <Link key={p.id} href={`/complaints/${p.id}`}>
              <AppCard pad={14}>
                
                <div className="mb-2 flex items-center gap-1.5">
                  <Pill>{p.kategori}</Pill>
                  {p.status === 'selesai' ? (
                    <Pill tone="success"><CheckCircleIcon size={10} /> Selesai</Pill>
                  ) : (
                    <Pill tone="warn"><ClockIcon size={10} /> Diproses</Pill>
                  )}
                  <span className="ml-auto font-mono text-[11px] text-text-faint">{p.id}</span>
                </div>

                <p className="text-[14px] font-bold tracking-[-0.005em] text-foreground">{p.judul}</p>
                <p className="mt-1 text-[11px] text-text-faint">Dilaporkan {p.tanggal}</p>

                
                <div className="mt-3 flex items-center border-t border-border pt-3">
                  {(['Masuk', 'Diproses', 'Selesai'] as const).map((step, i, arr) => {
                    const activeIdx = p.status === 'selesai' ? 2 : 1
                    const isDone = i <= activeIdx
                    return (
                      <div key={step} className="flex flex-1 items-center">
                        <div className="flex flex-col items-center gap-1">
                          <div
                            className="grid h-4 w-4 place-items-center rounded-full text-[9px] font-bold text-white"
                            style={{ background: isDone ? 'var(--accent)' : 'var(--border)' }}
                          >
                            {isDone && '✓'}
                          </div>
                          <span className={`text-[10px] font-semibold ${isDone ? 'text-foreground' : 'text-text-faint'}`}>
                            {step}
                          </span>
                        </div>
                        {i < arr.length - 1 && (
                          <div
                            className="mb-3.5 mx-1.5 h-0.5 flex-1"
                            style={{ background: i < activeIdx ? 'var(--accent)' : 'var(--border)' }}
                          />
                        )}
                      </div>
                    )
                  })}
                </div>
              </AppCard>
            </Link>
          ))}
        </div>

        
        <Link
          href="/complaints/buat"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-[14px] bg-accent-soft py-3 text-sm font-semibold text-accent-text"
        >
          <PlusIcon size={18} />
          Buat Laporan Baru
        </Link>
      </div>
    </>
  )
}
