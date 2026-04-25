import type { Metadata } from 'next'
import { PageHeader } from '@/components/app/page-header'
import { AppCard } from '@/components/app/app-card'
import { DocumentIcon } from '@/components/app/icons'

export const metadata: Metadata = { title: 'Upload Bukti Pembayaran' }

export default function PembayaranIuranPage() {
  return (
    <>
      <PageHeader title="Bayar Iuran" showBack backHref="/payments" />
      
      <div className="p-4">
        
        <AppCard pad={16} className="mb-4 bg-accent text-white border-none">
          <p className="text-xs font-semibold opacity-85">Tagihan Iuran April 2025</p>
          <p className="mt-1 text-[32px] font-extrabold tracking-[-0.02em]">
            Rp 50.000
          </p>
          <div className="mt-3 flex items-center justify-between border-t border-white/20 pt-3 text-xs">
            <span className="opacity-85">Jatuh Tempo</span>
            <span className="font-bold">25 Apr 2025</span>
          </div>
        </AppCard>

        
        <AppCard pad={16} className="mb-4">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-text-dim">
            Transfer ke Rekening RT
          </p>
          <div className="flex items-center justify-between rounded-xl bg-surface-alt p-3">
            <div>
              <p className="text-[13px] font-bold text-foreground">BCA - 1234567890</p>
              <p className="mt-0.5 text-[11px] text-text-dim">a.n. Pengurus RT 01</p>
            </div>
            <button className="rounded-lg bg-surface px-3 py-1.5 text-xs font-bold text-accent shadow-sm ring-1 ring-border">
              Salin
            </button>
          </div>
        </AppCard>

        
        <AppCard pad={16}>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-widest text-text-dim">
                Upload Bukti Transfer
              </label>
              <div className="flex h-[120px] cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-surface-alt transition-colors hover:bg-surface">
                <DocumentIcon size={28} className="text-text-faint mb-2" />
                <span className="text-[13px] font-bold text-foreground">Ketuk untuk pilih foto</span>
                <span className="mt-0.5 text-[11px] text-text-faint">Format JPG, PNG (Maks. 2MB)</span>
              </div>
            </div>

            <div className="mt-2">
              <button
                type="button"
                className="w-full rounded-xl bg-accent py-[14px] text-[15px] font-bold text-white transition-opacity active:opacity-80"
              >
                Konfirmasi Pembayaran
              </button>
            </div>
          </form>
        </AppCard>
      </div>
    </>
  )
}
