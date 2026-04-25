

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  HomeIcon,
  MegaphoneIcon,
  DocumentIcon,
  WalletIcon,
  UserIcon,
} from '@/components/app/icons'

const NAV_ITEMS = [
  { href: '/home',     label: 'Beranda', Icon: HomeIcon },
  { href: '/announcements', label: 'Info',    Icon: MegaphoneIcon },
  { href: '/documents',     label: 'Surat',   Icon: DocumentIcon },
  { href: '/payments',      label: 'Iuran',   Icon: WalletIcon },
  { href: '/account',       label: 'Akun',    Icon: UserIcon },
] as const

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav
      className="fixed bottom-0 left-1/2 w-full max-w-[430px] -translate-x-1/2 border-t border-border bg-surface"
      aria-label="Navigasi utama"
    >
      <ul
        className="grid pb-[22px] pt-2"
        style={{ gridTemplateColumns: `repeat(${NAV_ITEMS.length}, 1fr)` }}
        role="list"
      >
        {NAV_ITEMS.map(({ href, label, Icon }) => {
          const isActive = pathname === href || pathname.startsWith(`${href}/`)
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'flex flex-col items-center gap-1 py-2 px-1 text-[11px] font-semibold transition-colors',
                  isActive ? 'text-accent' : 'text-text-faint',
                )}
              >
                <Icon
                  size={22}
                  className={isActive ? 'stroke-[2.2]' : 'stroke-[1.8]'}
                />
                <span>{label}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
