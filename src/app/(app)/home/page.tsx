

import type { Metadata } from 'next'
import Link from 'next/link'
import {
  MegaphoneIcon, DocumentIcon, WalletIcon,
  AlertIcon, CalendarIcon, UserIcon,
  BellIcon, ChevronRightIcon, MapPinIcon,
} from '@/components/app/icons'
import { Pill } from '@/components/app/app-card'
import { MOCK_USER, PENGUMUMAN, IURAN, JADWAL } from '@/lib/mock-data'
import { formatRupiah } from '@/lib/format'
import type { ActionTile } from '@/lib/types'

export const metadata: Metadata = { title: 'Beranda' }

function firstName(fullName: string) {
  return fullName.split(' ').slice(1).join(' ') || fullName
}

const ACTION_TILES: ActionTile[] = [
  { href: '/payments',      label: 'Bayar\nIuran',    icon: WalletIcon,    bg: '#d8f3ea', fg: '#0f766e' },
  { href: '/documents',      label: 'Ajukan\nSurat',   icon: DocumentIcon,  bg: '#fde8d4', fg: '#c2410c' },
  { href: '/announcements', label: 'Pengu-\nmuman',    icon: MegaphoneIcon, bg: '#dbeafe', fg: '#1d4ed8' },
  { href: '/complaints',  label: 'Pengadu-\nan',     icon: AlertIcon,     bg: '#fce7f3', fg: '#be185d' },
  { href: '/schedules',     label: 'Jadwal\nKegiatan', icon: CalendarIcon,  bg: '#ede9fe', fg: '#6d28d9' },
  { href: '/account',       label: 'Data\nWarga',      icon: UserIcon,      bg: '#fef3c7', fg: '#a16207' },
]

function HeroCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-accent px-5 pt-4 pb-[78px] text-white">
      
      <div className="flex items-center justify-between">
        <div className="flex items-baseline gap-px">
          <span className="text-[22px] font-extrabold tracking-tighter">Warga</span>
          <span className="text-[22px] font-extrabold opacity-70">+</span>
        </div>
        <Link
          href="/notifikasi"
          aria-label="Notifikasi"
          className="relative grid h-[38px] w-[38px] place-items-center rounded-full text-white"
          style={{ background: 'rgba(255,255,255,0.18)' }}
        >
          <BellIcon size={18} />
          
          <span className="absolute top-2 right-[9px] h-[7px] w-[7px] rounded-full border-2 border-accent bg-[#fca5a5]" />
        </Link>
      </div>

      
      <div className="mt-[18px] flex items-end gap-2">
        <div className="min-w-0 flex-1">
          <h1 className="text-[30px] font-extrabold leading-none tracking-tighter">Beranda</h1>
          <p className="mt-1.5 text-[13px] opacity-90">
            Selamat pagi, <b>{firstName(MOCK_USER.name)}</b> 👋
          </p>
          <p className="mt-1 flex items-center gap-1 text-[11px] opacity-80">
            <MapPinIcon size={11} />
            RT {MOCK_USER.rt} / RW {MOCK_USER.rw} · {MOCK_USER.kelurahan}
          </p>
        </div>

        
        <svg width="96" height="74" viewBox="0 0 96 74" className="-mb-1 shrink-0" aria-hidden="true">
          <ellipse cx="48" cy="70" rx="46" ry="4" fill="rgba(0,0,0,0.12)" />
          <circle cx="14" cy="46" r="10" fill="#fff" opacity="0.9" />
          <rect x="12.5" y="52" width="3" height="12" fill="rgba(0,0,0,0.25)" />
          <polygon points="30,36 52,22 74,36 74,66 30,66" fill="#fff" />
          <polygon points="30,36 52,22 74,36" fill="rgba(0,0,0,0.18)" />
          <rect x="46" y="48" width="12" height="18" fill="var(--accent)" />
          <rect x="36" y="44" width="7" height="7" fill="var(--accent)" opacity="0.6" />
          <rect x="61" y="44" width="7" height="7" fill="var(--accent)" opacity="0.6" />
          <circle cx="86" cy="52" r="4" fill="#fff" />
          <path d="M82 66 Q86 56 90 66 Z" fill="#fff" />
        </svg>
      </div>
    </div>
  )
}

function ActionsCard() {
  return (
    
    <div
      className="relative z-10 mt-[-62px] rounded-3xl border border-border bg-surface px-[14px] pt-5 pb-[18px]"
      style={{ boxShadow: '0 4px 20px rgba(15,23,42,.06)' }}
    >
      <div className="grid grid-cols-3 gap-x-[14px] gap-y-[18px]">
        {ACTION_TILES.map(({ href, label, icon: Icon, bg, fg }) => (
          <Link
            key={href}
            href={href}
            className="flex flex-col items-center gap-2 p-1 text-center"
          >
            <div
              className="grid h-[54px] w-[54px] place-items-center rounded-2xl"
              style={{ background: bg, color: fg }}
            >
              <Icon size={24} />
            </div>
            <span className="whitespace-pre-line text-[11px] font-semibold leading-tight text-foreground">
              {label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

function TagihanBanner() {
  const tagihan = IURAN.find((i) => i.status === 'belum')
  if (!tagihan) return null

  return (
    <Link
      href="/payments"
      className="mt-4 flex items-center gap-3 rounded-2xl border border-accent-soft bg-accent-soft px-4 py-[14px]"
    >
      <div className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-xl bg-accent text-white">
        <WalletIcon size={20} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-semibold text-accent-text opacity-85">
          Iuran {tagihan.bulan} · jatuh tempo 25 Apr
        </p>
        <p className="mt-0.5 text-[18px] font-extrabold tracking-tight text-accent-text">
          {formatRupiah(tagihan.nominal)}
        </p>
      </div>
      <ChevronRightIcon size={18} className="text-accent-text opacity-70" />
    </Link>
  )
}

function PengumumanPreview() {
  const p = PENGUMUMAN[0]
  if (!p) return null

  return (
    <div className="mt-[22px]">
      <div className="mb-[10px] flex items-baseline justify-between">
        <div className="flex items-center gap-2 text-foreground">
          <BellIcon size={16} />
          <h2 className="text-base font-extrabold tracking-tight">Pengumuman Terbaru</h2>
        </div>
        <Link href="/announcements" className="text-xs font-semibold text-accent">
          Lihat semua
        </Link>
      </div>

      <Link href={`/announcements/${p.id}`}>
        <div className="rounded-2xl border border-border bg-surface px-4 pt-4 pb-[18px]">
          <div className="flex items-start justify-between gap-2.5">
            <p className="flex-1 text-[17px] font-extrabold leading-tight tracking-tight text-foreground">
              {p.judul}
            </p>
            <span className="shrink-0 flex items-center gap-1 rounded-full bg-warn-soft px-[10px] py-1.5 text-[11px] font-bold text-warn">
              <CalendarIcon size={11} /> {p.tanggal}
            </span>
          </div>
          <div className="mt-2.5">
            <Pill tone="accent">{p.kategori}</Pill>
          </div>
          <p className="mt-3 text-[13px] leading-relaxed text-text-dim line-clamp-3">
            {p.isi}
          </p>
        </div>
      </Link>
    </div>
  )
}

function JadwalPreview() {
  const j = JADWAL[0]
  if (!j) return null
  const [day, month] = j.tanggal.split(' ')

  return (
    <Link
      href="/schedules"
      className="mt-3 flex items-center gap-3 rounded-2xl border border-border bg-surface p-[14px]"
    >
      
      <div className="w-12 shrink-0 rounded-xl bg-accent-soft py-1.5 text-center text-accent-text">
        <div className="text-[9px] font-bold uppercase tracking-wider">{month}</div>
        <div className="mt-0.5 text-xl font-extrabold leading-none">{day}</div>
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-semibold text-text-faint">JADWAL TERDEKAT</p>
        <p className="mt-0.5 text-sm font-bold tracking-tight text-foreground">{j.judul}</p>
        <p className="mt-0.5 text-[11px] text-text-dim">{j.jam} · {j.tempat}</p>
      </div>

      <ChevronRightIcon size={16} className="text-text-faint" />
    </Link>
  )
}

export default function BerandaPage() {
  return (
    <div className="px-[14px] pb-4 pt-2">
      <HeroCard />
      <ActionsCard />
      <TagihanBanner />
      <PengumumanPreview />
      <JadwalPreview />
      <div className="h-3" />
    </div>
  )
}
