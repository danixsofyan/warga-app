import type { Metadata } from 'next'
import { AppCard } from '@/components/app/app-card'
import { PageHeader } from '@/components/app/page-header'
import { ClockIcon, MapPinIcon } from '@/components/app/icons'
import { JADWAL } from '@/lib/mock-data'
import type { RsvpStatus } from '@/lib/types'

export const metadata: Metadata = { title: 'Jadwal' }

function rsvpBtnClass(active: boolean) {
  return [
    'flex flex-1 items-center justify-center gap-1.5 rounded-md py-[9px] text-[13px] font-semibold transition-colors',
    active
      ? 'border border-accent bg-accent text-white'
      : 'border border-border bg-surface text-foreground',
  ].join(' ')
}

export default function JadwalPage() {
  return (
    <>
      <PageHeader title="Jadwal Kegiatan" />

      <div className="flex flex-col gap-3 p-4">
        {JADWAL.map((j) => {
          const [day, month] = j.tanggal.split(' ')
          const rsvp: RsvpStatus = j.rsvp

          return (
            <AppCard key={j.id} pad={16}>
              <div className="flex gap-[14px]">
                
                <div className="h-fit w-14 shrink-0 rounded-xl bg-accent-soft py-2 text-center text-accent-text">
                  <div className="text-[10px] font-bold uppercase tracking-widest">{month}</div>
                  <div className="mt-0.5 text-[24px] font-extrabold leading-none">{day}</div>
                </div>

                
                <div className="min-w-0 flex-1">
                  <p className="text-[15px] font-bold tracking-[-0.01em] text-foreground">{j.judul}</p>
                  <p className="mt-1 flex items-center gap-[5px] text-xs text-text-dim">
                    <ClockIcon size={12} /> {j.jam}
                  </p>
                  <p className="mt-0.5 flex items-center gap-[5px] text-xs text-text-dim">
                    <MapPinIcon size={12} /> {j.tempat}
                  </p>
                </div>
              </div>

              
              <div className="mt-3.5 flex gap-2 border-t border-border pt-3.5">
                <button className={rsvpBtnClass(rsvp === 'hadir')}>
                  {rsvp === 'hadir' && '✓ '}Hadir
                </button>
                <button className={rsvpBtnClass(rsvp === 'tidak')}>
                  Tidak hadir
                </button>
              </div>
            </AppCard>
          )
        })}
      </div>
    </>
  )
}
