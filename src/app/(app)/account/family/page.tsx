import type { Metadata } from 'next'
import { AppCard } from '@/components/app/app-card'
import { PageHeader } from '@/components/app/page-header'
import { SectionHeader } from '@/components/app/section-header'
import { UserIcon } from '@/components/app/icons'

export const metadata: Metadata = { title: 'Data Keluarga' }

const KEPALA_KK = {
  nama: 'Budi Santoso',
  nik: '3204050101850001',
  status: 'Kepala Keluarga',
  noKK: '3204050101000001',
}

const ANGGOTA_KK = [
  { nama: 'Sari Dewi', nik: '3204050101900001', status: 'Istri', jk: 'P' },
  { nama: 'Andi Santoso', nik: '3204050115120001', status: 'Anak', jk: 'L' },
  { nama: 'Putri Santoso', nik: '3204050120150001', status: 'Anak', jk: 'P' },
] as const

function initials(nama: string) {
  return nama.split(' ').slice(0, 2).map((n) => n[0]).join('')
}

function avatarBg(jk: string) {
  return jk === 'L' ? 'var(--accent)' : '#be185d'
}

export default function FamilyPage() {
  return (
    <>
      <PageHeader title="Data Keluarga" showBack backHref="/account" />

      <div className="p-4 flex flex-col gap-[22px]">
        
        <AppCard pad={16}>
          <p className="text-[11px] font-bold uppercase tracking-widest text-text-dim mb-2">
            Nomor Kartu Keluarga
          </p>
          <p className="text-[22px] font-extrabold tracking-wider text-foreground">
            {KEPALA_KK.noKK}
          </p>
          <div className="mt-3 flex items-center gap-2 border-t border-border pt-3">
            <div
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-bold text-white"
              style={{ background: 'var(--accent)' }}
            >
              {initials(KEPALA_KK.nama)}
            </div>
            <div>
              <p className="text-[13px] font-bold text-foreground">{KEPALA_KK.nama}</p>
              <p className="text-[11px] text-text-dim">{KEPALA_KK.status} · NIK {KEPALA_KK.nik.slice(-8)}</p>
            </div>
          </div>
        </AppCard>

        
        <div>
          <SectionHeader title={`Anggota KK (${ANGGOTA_KK.length} orang)`} />
          <AppCard pad={0} className="overflow-hidden">
            {ANGGOTA_KK.map((a, i) => (
              <div
                key={a.nik}
                className={`flex items-center gap-3 px-4 py-[14px] ${i < ANGGOTA_KK.length - 1 ? 'border-b border-border' : ''}`}
              >
                <div
                  className="grid h-[38px] w-[38px] shrink-0 place-items-center rounded-full text-sm font-bold text-white"
                  style={{ background: avatarBg(a.jk) }}
                >
                  {initials(a.nama)}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] font-bold text-foreground">{a.nama}</p>
                  <p className="text-[11px] text-text-dim">{a.status} · NIK {a.nik.slice(-8)}</p>
                </div>
                <span className="text-[11px] font-semibold text-text-faint">{a.jk === 'L' ? 'Laki-laki' : 'Perempuan'}</span>
              </div>
            ))}
          </AppCard>
        </div>

        
        <div className="flex items-start gap-2.5 rounded-xl bg-warn-soft p-3.5">
          <UserIcon size={16} className="mt-0.5 shrink-0 text-warn" />
          <p className="text-[12px] leading-relaxed text-warn">
            Penambahan atau perubahan data anggota KK dilakukan langsung ke kantor kelurahan dengan membawa dokumen yang diperlukan.
          </p>
        </div>
      </div>
    </>
  )
}
