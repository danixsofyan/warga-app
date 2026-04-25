

import type { Metadata } from 'next'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { GoogleIcon, WhatsAppIcon } from '@/components/app/icons'

export const metadata: Metadata = {
  title: 'Masuk — Aplikasi Warga RT/RW',
}

export default function LoginPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-white px-6">
      
      <div className="pt-16">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-lg font-extrabold text-primary-foreground">
            W
          </div>
          <div>
            <p className="text-base font-extrabold leading-none tracking-tight">
              Warga
            </p>
            <p className="text-xs text-muted-foreground">Aplikasi RT/RW</p>
          </div>
        </div>
      </div>

      
      <div className="mt-12 flex-1">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight">
          Selamat datang di lingkungan digital Anda.
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Pengumuman, surat, iuran, dan laporan — semua dalam satu tempat.
        </p>

        
        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-linear-to-br from-primary/5 to-muted">
          <svg width="100%" viewBox="0 0 320 160" aria-hidden="true">
            <defs>
              <pattern
                id="dots"
                x="0"
                y="0"
                width="12"
                height="12"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" opacity="0.12" />
              </pattern>
            </defs>
            <rect width="320" height="160" fill="url(#dots)" className="text-primary" />
            <rect x="40" y="32" width="240" height="96" rx="14" fill="white" stroke="#eceef1" />
            <circle cx="72" cy="64" r="14" fill="#0f766e" opacity="0.7" />
            <rect x="96" y="57" width="130" height="6" rx="3" fill="#8b93a4" opacity="0.35" />
            <rect x="96" y="68" width="90" height="5" rx="2.5" fill="#8b93a4" opacity="0.2" />
            <rect x="56" y="90" width="200" height="5" rx="2.5" fill="#8b93a4" opacity="0.2" />
            <rect x="56" y="102" width="160" height="5" rx="2.5" fill="#8b93a4" opacity="0.2" />
          </svg>
        </div>
      </div>

      
      <div className="mt-8 flex flex-col gap-3 pb-12">
        
        <Link
          href="/home"
          className={cn(
            buttonVariants({ size: 'lg' }),
            'h-14 w-full gap-2 rounded-2xl bg-[#25D366] text-white hover:bg-[#22c55e]'
          )}
        >
          <WhatsAppIcon size={20} />
          Lanjut dengan WhatsApp
        </Link>

        
        <Link
          href="/home"
          className={cn(
            buttonVariants({ variant: 'outline', size: 'lg' }),
            'h-14 w-full gap-2 rounded-2xl'
          )}
        >
          <GoogleIcon size={20} />
          Lanjut dengan Google
        </Link>

        <p className="mt-2 text-center text-[11px] text-muted-foreground">
          Dengan melanjutkan, Anda menyetujui{' '}
          <Link href="/syarat" className="underline hover:text-foreground">
            Syarat Layanan
          </Link>{' '}
          dan{' '}
          <Link href="/privasi" className="underline hover:text-foreground">
            Kebijakan Privasi
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
