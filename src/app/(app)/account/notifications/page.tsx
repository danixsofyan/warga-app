import type { Metadata } from 'next'
import { AppCard } from '@/components/app/app-card'
import { PageHeader } from '@/components/app/page-header'
import { SectionHeader } from '@/components/app/section-header'

export const metadata: Metadata = { title: 'Pengaturan Notifikasi' }

interface ToggleRowProps {
  label: string
  desc: string
  isLast?: boolean
  defaultChecked?: boolean
}

function ToggleRow({ label, desc, isLast = false, defaultChecked = true }: ToggleRowProps) {
  return (
    <div className={`flex items-center gap-3 px-4 py-[14px] ${!isLast ? 'border-b border-border' : ''}`}>
      <div className="min-w-0 flex-1">
        <p className="text-[13px] font-bold text-foreground">{label}</p>
        <p className="mt-0.5 text-[11px] text-text-dim">{desc}</p>
      </div>
      
      <div
        className="relative flex h-[26px] w-[46px] shrink-0 cursor-pointer items-center rounded-full transition-all"
        style={{ background: defaultChecked ? 'var(--accent)' : 'var(--border)' }}
      >
        <div
          className="h-[20px] w-[20px] rounded-full bg-white shadow-sm transition-all"
          style={{ marginLeft: defaultChecked ? '23px' : '3px' }}
        />
      </div>
    </div>
  )
}

export default function NotificationsPage() {
  return (
    <>
      <PageHeader title="Notifikasi" showBack backHref="/account" />

      <div className="p-4 flex flex-col gap-[22px]">

        
        <div>
          <SectionHeader title="WhatsApp" />
          <AppCard pad={0} className="overflow-hidden">
            <ToggleRow
              label="Tagihan Iuran"
              desc="Pengingat H-5 sebelum jatuh tempo"
              defaultChecked={true}
            />
            <ToggleRow
              label="Pengumuman RT/RW"
              desc="Info terbaru dari ketua RT/RW"
              defaultChecked={true}
            />
            <ToggleRow
              label="Status Pengaduan"
              desc="Update perubahan status laporan"
              defaultChecked={true}
            />
            <ToggleRow
              label="Jadwal Kegiatan"
              desc="Pengingat kegiatan RT/RW"
              defaultChecked={false}
              isLast
            />
          </AppCard>
        </div>

        
        <div>
          <SectionHeader title="Push Notification (Aplikasi)" />
          <AppCard pad={0} className="overflow-hidden">
            <ToggleRow
              label="Semua Notifikasi"
              desc="Tampilkan semua notif di perangkat"
              defaultChecked={true}
            />
            <ToggleRow
              label="Surat Disetujui"
              desc="Notif saat surat Anda selesai diproses"
              defaultChecked={true}
              isLast
            />
          </AppCard>
        </div>

        <p className="text-center text-[12px] text-text-faint">
          Pengaturan notifikasi akan aktif setelah fitur WhatsApp terintegrasi.
        </p>
      </div>
    </>
  )
}
