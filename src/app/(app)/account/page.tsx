import type { Metadata } from 'next'
import Link from 'next/link'
import { AppCard, Pill } from '@/components/app/app-card'
import { PageHeader } from '@/components/app/page-header'
import { ListRow, IconCell } from '@/components/app/list-row'
import { UserIcon, BellIcon, SettingsIcon, LogOutIcon, DocumentIcon, ChevronRightIcon, CheckCircleIcon } from '@/components/app/icons'
import { MOCK_USER } from '@/lib/mock-data'

export const metadata: Metadata = { title: 'Akun' }

const MENU_ITEMS = [
  { icon: UserIcon,     label: 'Profil Saya',  desc: 'Nama, NIK, alamat',   href: '/account/profile' },
  { icon: DocumentIcon, label: 'Data Keluarga', desc: 'Anggota KK',          href: '/account/family' },
  { icon: BellIcon,     label: 'Notifikasi',   desc: 'Pengaturan WA & push', href: '/account/notifications' },
  { icon: SettingsIcon, label: 'Preferensi',   desc: 'Bahasa, tampilan',     href: '/account/settings' },
] as const

export default function AkunPage() {
  return (
    <>
      <PageHeader title="Akun" />

      <div className="px-5 pb-5 pt-4">
        
        <AppCard className="mb-5 flex items-center gap-[14px] p-4">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-accent text-xl font-bold text-white">
            {MOCK_USER.initials}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-base font-bold tracking-[-0.01em] text-foreground">{MOCK_USER.name}</p>
            <p className="mt-0.5 text-xs text-text-dim">RT {MOCK_USER.rt} / RW {MOCK_USER.rw}</p>
            <div className="mt-1.5">
              <Pill tone="success"><CheckCircleIcon size={10} /> Terverifikasi</Pill>
            </div>
          </div>
        </AppCard>

        
        <AppCard pad={0} className="mb-4 overflow-hidden">
          {MENU_ITEMS.map((item, i) => (
            <Link key={item.label} href={item.href}>
              <ListRow isLast={i === MENU_ITEMS.length - 1}>
                <IconCell size={36}>
                  <item.icon size={18} />
                </IconCell>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  <p className="mt-px text-[11px] text-text-faint">{item.desc}</p>
                </div>
                <ChevronRightIcon size={16} className="text-text-faint" />
              </ListRow>
            </Link>
          ))}
        </AppCard>

        
        <Link
          href="/login"
          className="flex w-full items-center justify-center gap-2 rounded-[14px] border border-border py-[14px] text-sm font-semibold text-danger transition-colors hover:bg-danger-soft"
        >
          <LogOutIcon size={16} /> Keluar
        </Link>

        <p className="mt-4 text-center text-[11px] text-text-faint">
          Aplikasi Warga · v1.0.0
        </p>
      </div>
    </>
  )
}
