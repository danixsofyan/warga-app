import type { Metadata } from 'next'
import { AppCard } from '@/components/app/app-card'
import { PageHeader } from '@/components/app/page-header'
import { ListRow, IconCell } from '@/components/app/list-row'
import { SectionHeader } from '@/components/app/section-header'
import { CheckCircleIcon, UserIcon, MapPinIcon } from '@/components/app/icons'
import { MOCK_USER } from '@/lib/mock-data'

export const metadata: Metadata = { title: 'Profil Saya' }

const DETAIL_ITEMS = [
  { label: 'Nama Lengkap', value: MOCK_USER.name },
  { label: 'NIK', value: '3204050101900001' },
  { label: 'No. KK', value: '3204050101000001' },
  { label: 'Tanggal Lahir', value: '1 Januari 1990' },
  { label: 'Jenis Kelamin', value: 'Perempuan' },
  { label: 'Agama', value: 'Islam' },
  { label: 'Status', value: 'Menikah' },
  { label: 'Pekerjaan', value: 'Pegawai Swasta' },
] as const

const ALAMAT_ITEMS = [
  { label: 'Alamat', value: MOCK_USER.alamat },
  { label: 'RT / RW', value: `RT ${MOCK_USER.rt} / RW ${MOCK_USER.rw}` },
  { label: 'Kelurahan', value: 'Sukasari' },
  { label: 'Kecamatan', value: 'Bandung Barat' },
  { label: 'Kota', value: 'Kota Bandung' },
  { label: 'Provinsi', value: 'Jawa Barat' },
] as const

export default function ProfilePage() {
  return (
    <>
      <PageHeader title="Profil Saya" showBack backHref="/account" />

      <div className="p-4 flex flex-col gap-[22px]">
        
        <AppCard className="flex flex-col items-center gap-3 py-6 px-4">
          <div className="grid h-20 w-20 place-items-center rounded-full bg-accent text-3xl font-bold text-white">
            {MOCK_USER.initials}
          </div>
          <div className="text-center">
            <p className="text-[18px] font-extrabold tracking-tight text-foreground">{MOCK_USER.name}</p>
            <p className="mt-0.5 flex items-center justify-center gap-1 text-xs text-text-dim">
              <MapPinIcon size={11} /> RT {MOCK_USER.rt} / RW {MOCK_USER.rw} · {MOCK_USER.kelurahan}
            </p>
          </div>
          <div className="flex items-center gap-1 rounded-full bg-success-soft px-3.5 py-1.5 text-[11px] font-bold text-success">
            <CheckCircleIcon size={12} /> Data Terverifikasi
          </div>
        </AppCard>

        
        <div>
          <SectionHeader title="Data Diri" />
          <AppCard pad={0} className="overflow-hidden">
            {DETAIL_ITEMS.map((item, i) => (
              <div
                key={item.label}
                className={`flex items-center justify-between px-4 py-3 ${i < DETAIL_ITEMS.length - 1 ? 'border-b border-border' : ''}`}
              >
                <span className="text-[12px] font-semibold text-text-dim">{item.label}</span>
                <span className="text-[13px] font-bold text-foreground">{item.value}</span>
              </div>
            ))}
          </AppCard>
        </div>

        
        <div>
          <SectionHeader title="Alamat Domisili" />
          <AppCard pad={0} className="overflow-hidden">
            {ALAMAT_ITEMS.map((item, i) => (
              <div
                key={item.label}
                className={`flex items-center justify-between px-4 py-3 ${i < ALAMAT_ITEMS.length - 1 ? 'border-b border-border' : ''}`}
              >
                <span className="text-[12px] font-semibold text-text-dim">{item.label}</span>
                <span className="max-w-[55%] text-right text-[13px] font-bold text-foreground">{item.value}</span>
              </div>
            ))}
          </AppCard>
        </div>

        
        <div className="flex items-start gap-2.5 rounded-xl bg-accent-soft p-3.5">
          <UserIcon size={16} className="mt-0.5 shrink-0 text-accent-text" />
          <p className="text-[12px] leading-relaxed text-accent-text">
            Perubahan data diri dilakukan langsung ke <b>kantor RT</b> dengan membawa fotokopi KTP dan KK. Pengurus akan memperbarui data dalam sistem.
          </p>
        </div>

        <div className="h-2" />
      </div>
    </>
  )
}
