import type { Metadata } from 'next'
import Link from 'next/link'
import { AppCard, Pill } from '@/components/app/app-card'
import { PageHeader } from '@/components/app/page-header'
import { SectionHeader } from '@/components/app/section-header'
import { ListRow, IconCell, MiniStat } from '@/components/app/list-row'
import { IURAN, KAS_SUMMARY, KAS_TRANSAKSI } from '@/lib/mock-data'
import { formatRupiah } from '@/lib/format'

export const metadata: Metadata = { title: 'Iuran & Kas' }

export default function IuranPage() {
  const tagihan = IURAN.find((i) => i.status === 'belum')

  return (
    <>
      <PageHeader title="Iuran & Kas" />

      
      <div className="sticky top-(--topbar-h) z-4 flex gap-2 border-b border-border bg-surface px-4 py-[10px]">
        <div className="flex-1 rounded-md bg-accent py-[9px] text-center text-[13px] font-semibold text-white">
          Tagihan Saya
        </div>
        <Link
          href="#kas"
          className="flex-1 rounded-md py-[9px] text-center text-[13px] font-semibold text-text-dim"
        >
          Kas RT/RW
        </Link>
      </div>

      <div className="p-4">
        
        {tagihan && (
          <AppCard pad={0} className="mb-[14px] overflow-hidden border-none bg-accent">
            <div className="p-[18px] text-white">
              <p className="text-xs font-semibold opacity-85">Total Tagihan Aktif</p>
              <p className="mt-1 text-[32px] font-extrabold tracking-[-0.02em]">
                {formatRupiah(tagihan.nominal)}
              </p>
              <p className="mt-1 text-xs opacity-85">
                Iuran {tagihan.bulan} · jatuh tempo {tagihan.jatuhTempo}
              </p>
              <Link
                href="/payments/pay"
                className="mt-[14px] block w-full rounded-xl bg-white py-[11px] text-center text-sm font-bold text-accent"
              >
                Bayar Sekarang
              </Link>
            </div>
          </AppCard>
        )}

        
        <SectionHeader title="Riwayat Pembayaran" />
        <AppCard pad={0} className="overflow-hidden">
          {IURAN.filter((i) => i.status === 'lunas').map((item, idx, arr) => (
            <ListRow key={item.bulan} isLast={idx === arr.length - 1}>
              <IconCell bg="var(--success-soft)" color="var(--success)" size={36} shape="circle">
                <span className="text-sm font-bold">✓</span>
              </IconCell>
              <div className="flex-1">
                <p className="text-[13px] font-bold text-foreground">{item.bulan}</p>
                <p className="text-[11px] text-text-faint">Dibayar {item.tanggalBayar}</p>
              </div>
              <p className="text-[13px] font-bold text-foreground">{formatRupiah(item.nominal)}</p>
            </ListRow>
          ))}
        </AppCard>

        
        <div id="kas" className="mt-6">
          <SectionHeader title="Kas RT Transparansi" />
        </div>

        <AppCard className="mb-[14px]">
          <div className="p-4">
            <p className="text-[11px] font-bold uppercase tracking-widest text-text-dim">
              Saldo Kas RT — {KAS_SUMMARY.periode}
            </p>
            <p className="mt-1.5 text-[30px] font-extrabold tracking-[-0.02em] text-foreground">
              {formatRupiah(KAS_SUMMARY.saldo)}
            </p>
            <div className="mt-3.5 flex gap-2.5">
              <MiniStat label="Pemasukan" value={formatRupiah(KAS_SUMMARY.pemasukan)} tone="success" />
              <MiniStat label="Pengeluaran" value={formatRupiah(KAS_SUMMARY.pengeluaran)} tone="danger" />
            </div>
          </div>
        </AppCard>

        
        <SectionHeader title="Transaksi Terbaru" />
        <AppCard pad={0} className="overflow-hidden">
          {KAS_TRANSAKSI.map((tx, idx, arr) => (
            <ListRow key={tx.id} isLast={idx === arr.length - 1}>
              <IconCell
                bg={tx.tipe === 'masuk' ? 'var(--success-soft)' : 'var(--danger-soft)'}
                color={tx.tipe === 'masuk' ? 'var(--success)' : 'var(--danger)'}
                size={36}
                shape="circle"
              >
                <span className="font-extrabold">{tx.tipe === 'masuk' ? '+' : '−'}</span>
              </IconCell>
              <div className="min-w-0 flex-1">
                <p className="text-[13px] font-bold text-foreground">{tx.kategori}</p>
                <p className="mt-0.5 truncate text-[11px] text-text-faint">{tx.desc}</p>
              </div>
              <div className="shrink-0 text-right">
                <p
                  className="text-[13px] font-bold"
                  style={{ color: tx.tipe === 'masuk' ? 'var(--success)' : 'var(--text)' }}
                >
                  {tx.tipe === 'masuk' ? '+' : '−'} {formatRupiah(tx.jumlah)}
                </p>
                <p className="text-[11px] text-text-faint">{tx.tanggal}</p>
              </div>
            </ListRow>
          ))}
        </AppCard>

        <div className="h-5" />
      </div>
    </>
  )
}
