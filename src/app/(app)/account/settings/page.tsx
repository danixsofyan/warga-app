import type { Metadata } from 'next'
import { AppCard } from '@/components/app/app-card'
import { PageHeader } from '@/components/app/page-header'
import { SectionHeader } from '@/components/app/section-header'

export const metadata: Metadata = { title: 'Preferensi' }

const THEMES = ['Sistem', 'Terang', 'Gelap'] as const
const LANGUAGES = ['Indonesia', 'English'] as const
const FONT_SIZES = ['Kecil', 'Normal', 'Besar'] as const

interface OptionGroupProps {
  label: string
  options: readonly string[]
  activeIndex?: number
}

function OptionGroup({ label, options, activeIndex = 0 }: OptionGroupProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <p className="text-xs font-bold uppercase tracking-widest text-text-dim">{label}</p>
      <div className="flex overflow-hidden rounded-xl border border-border bg-surface-alt">
        {options.map((opt, i) => (
          <button
            key={opt}
            type="button"
            className="flex-1 py-[11px] text-[13px] font-semibold transition-colors"
            style={{
              background: i === activeIndex ? 'var(--accent)' : 'transparent',
              color: i === activeIndex ? 'white' : 'var(--text-dim)',
            }}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function SettingsPage() {
  return (
    <>
      <PageHeader title="Preferensi" showBack backHref="/account" />

      <div className="p-4 flex flex-col gap-[22px]">

        
        <div>
          <SectionHeader title="Tampilan" />
          <AppCard pad={16} className="flex flex-col gap-4">
            <OptionGroup label="Tema" options={THEMES} activeIndex={0} />
            <OptionGroup label="Ukuran Teks" options={FONT_SIZES} activeIndex={1} />
          </AppCard>
        </div>

        
        <div>
          <SectionHeader title="Bahasa" />
          <AppCard pad={16}>
            <OptionGroup label="Pilih Bahasa" options={LANGUAGES} activeIndex={0} />
          </AppCard>
        </div>

        
        <div>
          <SectionHeader title="Privasi & Keamanan" />
          <AppCard pad={0} className="overflow-hidden">
            {(['Kebijakan Privasi', 'Syarat & Ketentuan', 'Versi Aplikasi'] as const).map((item, i, arr) => (
              <div
                key={item}
                className={`flex items-center justify-between px-4 py-[14px] ${i < arr.length - 1 ? 'border-b border-border' : ''}`}
              >
                <p className="text-[13px] font-semibold text-foreground">{item}</p>
                {item === 'Versi Aplikasi' ? (
                  <span className="text-[12px] text-text-faint">v1.0.0</span>
                ) : (
                  <span className="text-[12px] text-accent font-semibold">Buka →</span>
                )}
              </div>
            ))}
          </AppCard>
        </div>

        <div className="h-2" />
      </div>
    </>
  )
}
