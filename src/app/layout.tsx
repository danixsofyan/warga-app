import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Aplikasi Warga RT/RW',
    template: '%s | Warga +',
  },
  description:
    'Platform digital untuk komunikasi, administrasi, dan pengelolaan keuangan RT/RW/Kelurahan.',
  keywords: ['RT', 'RW', 'kelurahan', 'warga', 'surat', 'iuran', 'pengumuman'],
  openGraph: {
    title: 'Aplikasi Warga RT/RW',
    description: 'Platform digital untuk lingkungan Anda',
    locale: 'id_ID',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f766e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={plusJakartaSans.variable}>
      <body>
        <div id="app-root">{children}</div>
      </body>
    </html>
  )
}
