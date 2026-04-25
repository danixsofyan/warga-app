import type { Metadata } from 'next'
import { PageHeader } from '@/components/app/page-header'
import { AppCard } from '@/components/app/app-card'

export const metadata: Metadata = { title: 'Buat Laporan' }

export default function BuatPengaduanPage() {
  return (
    <>
      <PageHeader title="Buat Laporan" showBack backHref="/complaints" />
      
      <div className="p-4">
        <AppCard pad={16}>
          <form className="flex flex-col gap-5">
            
            <div className="flex flex-col gap-1.5">
              <label htmlFor="kategori" className="text-xs font-bold uppercase tracking-widest text-text-dim">
                Kategori Laporan
              </label>
              <select
                id="kategori"
                name="kategori"
                className="h-12 rounded-xl border border-border bg-surface px-3 text-[15px] font-medium text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                defaultValue=""
              >
                <option value="" disabled>Pilih kategori...</option>
                <option value="Infrastruktur">Infrastruktur (Jalan, Lampu)</option>
                <option value="Keamanan">Keamanan & Ketertiban</option>
                <option value="Kebersihan">Kebersihan & Lingkungan</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </div>

            
            <div className="flex flex-col gap-1.5">
              <label htmlFor="judul" className="text-xs font-bold uppercase tracking-widest text-text-dim">
                Judul Singkat
              </label>
              <input
                id="judul"
                name="judul"
                type="text"
                placeholder="Contoh: Lampu jalan RT 01 padam"
                className="h-12 rounded-xl border border-border bg-surface px-3 text-[15px] font-medium text-foreground outline-none placeholder:text-text-faint focus:border-accent focus:ring-1 focus:ring-accent"
              />
            </div>

            
            <div className="flex flex-col gap-1.5">
              <label htmlFor="deskripsi" className="text-xs font-bold uppercase tracking-widest text-text-dim">
                Deskripsi Detail
              </label>
              <textarea
                id="deskripsi"
                name="deskripsi"
                rows={4}
                placeholder="Jelaskan detail permasalahan secara lengkap..."
                className="resize-none rounded-xl border border-border bg-surface p-3 text-[15px] font-medium text-foreground outline-none placeholder:text-text-faint focus:border-accent focus:ring-1 focus:ring-accent"
              />
            </div>

            
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-widest text-text-dim">
                Lampiran Foto (Opsional)
              </label>
              <div className="flex h-[100px] cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-surface-alt transition-colors hover:bg-surface">
                <span className="text-xl">📸</span>
                <span className="mt-1 text-xs font-medium text-text-dim">Ketuk untuk unggah foto</span>
              </div>
            </div>

            <div className="mt-2 border-t border-border pt-5">
              <button
                type="button"
                className="w-full rounded-xl bg-accent py-[14px] text-[15px] font-bold text-white transition-opacity active:opacity-80"
              >
                Kirim Laporan
              </button>
            </div>
          </form>
        </AppCard>
      </div>
    </>
  )
}
