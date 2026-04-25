

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PageHeader } from '@/components/app/page-header'
import { AppCard, Pill } from '@/components/app/app-card'
import { ClockIcon, CheckCircleIcon } from '@/components/app/icons'
import { SURAT_TEMPLATES, MOCK_USER } from '@/lib/mock-data'

interface Props {
  params: Promise<{ templateId: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { templateId } = await params
  const tmpl = SURAT_TEMPLATES.find((t) => t.id === templateId)
  return { title: tmpl ? `Ajukan ${tmpl.nama}` : 'Pengajuan Surat' }
}

export default async function SuratFormPage({ params }: Props) {
  const { templateId } = await params
  const tmpl = SURAT_TEMPLATES.find((t) => t.id === templateId)

  if (!tmpl) notFound()

  return (
    <>
      <PageHeader title={tmpl.nama} showBack backHref="/documents" />

      <div className="p-4 flex flex-col gap-4">
        
        <AppCard pad={16}>
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0 flex-1">
              <p className="font-bold text-[15px] text-foreground">{tmpl.nama}</p>
              <p className="mt-0.5 text-xs text-text-dim">{tmpl.desc}</p>
            </div>
            <Pill tone="default">
              <ClockIcon size={10} /> {tmpl.eta}
            </Pill>
          </div>
        </AppCard>

        
        <div className="flex items-center gap-2">
          {['Data Diri', 'Keperluan', 'Konfirmasi'].map((step, i) => (
            <div key={step} className="flex flex-1 items-center">
              <div className="flex flex-col items-center gap-1 flex-1">
                <div
                  className="grid h-6 w-6 place-items-center rounded-full text-[11px] font-bold text-white"
                  style={{ background: i === 0 ? 'var(--accent)' : 'var(--border)' }}
                >
                  {i + 1}
                </div>
                <span className={`text-[10px] font-semibold whitespace-nowrap ${i === 0 ? 'text-accent' : 'text-text-faint'}`}>
                  {step}
                </span>
              </div>
              {i < 2 && (
                <div className="mb-4 h-0.5 flex-1 mx-1" style={{ background: 'var(--border)' }} />
              )}
            </div>
          ))}
        </div>

        
        <AppCard pad={16}>
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-widest text-text-dim">
                Nama Lengkap
              </label>
              <input
                type="text"
                defaultValue={MOCK_USER.name}
                readOnly
                className="h-12 rounded-xl border border-border bg-surface-alt px-3 text-[15px] font-medium text-foreground outline-none"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-widest text-text-dim">
                Alamat
              </label>
              <input
                type="text"
                defaultValue={MOCK_USER.alamat}
                readOnly
                className="h-12 rounded-xl border border-border bg-surface-alt px-3 text-[15px] font-medium text-foreground outline-none"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="keperluan" className="text-xs font-bold uppercase tracking-widest text-text-dim">
                Keperluan / Tujuan
              </label>
              <textarea
                id="keperluan"
                name="keperluan"
                rows={3}
                placeholder="Jelaskan keperluan pengajuan surat ini..."
                className="resize-none rounded-xl border border-border bg-surface p-3 text-[15px] font-medium text-foreground outline-none placeholder:text-text-faint focus:border-accent focus:ring-1 focus:ring-accent"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="ditujukan" className="text-xs font-bold uppercase tracking-widest text-text-dim">
                Ditujukan Kepada
              </label>
              <input
                id="ditujukan"
                name="ditujukan"
                type="text"
                placeholder="Contoh: Kepala Dinas Catatan Sipil"
                className="h-12 rounded-xl border border-border bg-surface px-3 text-[15px] font-medium text-foreground outline-none placeholder:text-text-faint focus:border-accent focus:ring-1 focus:ring-accent"
              />
            </div>

            <div className="flex items-start gap-2.5 rounded-xl bg-accent-soft p-3.5">
              <CheckCircleIcon size={16} className="mt-0.5 shrink-0 text-accent-text" />
              <p className="text-[12px] leading-relaxed text-accent-text">
                Data diri Anda (NIK, KK) diambil secara otomatis dari profil. Pastikan data Anda sudah terbarui di menu <b>Profil</b>.
              </p>
            </div>

            <div className="mt-2">
              <button
                type="button"
                className="w-full rounded-xl bg-accent py-[14px] text-[15px] font-bold text-white transition-opacity active:opacity-80"
              >
                Ajukan Surat
              </button>
            </div>
          </form>
        </AppCard>
      </div>
    </>
  )
}
