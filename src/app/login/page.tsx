

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

        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-background">
          <svg width="100%" viewBox="0 0 320 200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <rect width="320" height="200" fill="#f4f5f7" />

            <rect x="14" y="14" width="292" height="172" rx="16" fill="white" stroke="#eceef1" strokeWidth="1" />

            <rect x="28" y="28" width="264" height="40" rx="10" fill="#0f766e" />
            <circle cx="50" cy="48" r="10" fill="rgba(255,255,255,0.25)" />
            <text x="65" y="44" fontFamily="system-ui,sans-serif" fontSize="8" fontWeight="700" fill="white">Beranda</text>
            <text x="65" y="55" fontFamily="system-ui,sans-serif" fontSize="6" fill="rgba(255,255,255,0.8)">Selamat pagi, Bu Sari 👋</text>
            <rect x="238" y="37" width="42" height="22" rx="8" fill="rgba(255,255,255,0.2)" />
            <text x="259" y="51" fontFamily="system-ui,sans-serif" fontSize="7" fontWeight="700" fill="white" textAnchor="middle">Rp50k</text>

            <rect x="28" y="80" width="58" height="52" rx="10" fill="#d8f3ea" />
            <text x="57" y="104" fontFamily="system-ui,sans-serif" fontSize="14" textAnchor="middle">💰</text>
            <text x="57" y="120" fontFamily="system-ui,sans-serif" fontSize="6" fontWeight="700" fill="#134e4a" textAnchor="middle">Iuran</text>

            <rect x="94" y="80" width="58" height="52" rx="10" fill="#fde8d4" />
            <text x="123" y="104" fontFamily="system-ui,sans-serif" fontSize="14" textAnchor="middle">📄</text>
            <text x="123" y="120" fontFamily="system-ui,sans-serif" fontSize="6" fontWeight="700" fill="#9a3412" textAnchor="middle">Surat</text>

            <rect x="160" y="80" width="58" height="52" rx="10" fill="#dbeafe" />
            <text x="189" y="104" fontFamily="system-ui,sans-serif" fontSize="14" textAnchor="middle">📢</text>
            <text x="189" y="120" fontFamily="system-ui,sans-serif" fontSize="6" fontWeight="700" fill="#1e40af" textAnchor="middle">Info</text>

            <rect x="226" y="80" width="58" height="52" rx="10" fill="#fce7f3" />
            <text x="255" y="104" fontFamily="system-ui,sans-serif" fontSize="14" textAnchor="middle">🚨</text>
            <text x="255" y="120" fontFamily="system-ui,sans-serif" fontSize="6" fontWeight="700" fill="#9d174d" textAnchor="middle">Laporan</text>

            <rect x="28" y="146" width="264" height="26" rx="8" fill="#f4f5f7" />
            <circle cx="48" cy="159" r="7" fill="#0f766e" opacity="0.7" />
            <rect x="62" y="154" width="100" height="5" rx="2.5" fill="#8b93a4" opacity="0.4" />
            <rect x="62" y="163" width="70" height="4" rx="2" fill="#8b93a4" opacity="0.25" />
            <rect x="268" y="153" width="18" height="12" rx="4" fill="#dcfce7" />
            <text x="277" y="161" fontFamily="system-ui,sans-serif" fontSize="6" fontWeight="700" fill="#16a34a" textAnchor="middle">✓</text>
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
