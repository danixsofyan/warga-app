

export interface User {
  name: string
  initials: string
  alamat: string
  kelurahan: string
  rt: string
  rw: string
}

export type KategoriPengumuman = 'RT' | 'RW' | 'Kelurahan'

export interface Pengumuman {
  id: string
  kategori: KategoriPengumuman
  judul: string
  isi: string
  tanggal: string
  isPinned: boolean
  author: string
}

export interface SuratTemplate {
  id: string
  nama: string
  desc: string
  eta: string
}

export type StatusSurat = 'disetujui' | 'diproses' | 'ditolak'

export interface RiwayatSurat {
  id: string
  jenis: string
  tanggal: string
  status: StatusSurat
}

export type StatusIuran = 'belum' | 'lunas'

export interface Iuran {
  bulan: string
  nominal: number
  jatuhTempo: string
  status: StatusIuran
  tanggalBayar?: string
}

export interface KasSummary {
  saldo: number
  pemasukan: number
  pengeluaran: number
  periode: string
}

export type TipeTransaksi = 'masuk' | 'keluar'

export interface KasTransaksi {
  id: string
  tipe: TipeTransaksi
  kategori: string
  jumlah: number
  tanggal: string
  desc: string
}

export type StatusPengaduan = 'masuk' | 'diproses' | 'selesai'

export interface Pengaduan {
  id: string
  judul: string
  tanggal: string
  status: StatusPengaduan
  kategori: string
  deskripsi: string
}

export type RsvpStatus = 'hadir' | 'tidak' | null

export interface Jadwal {
  id: string
  judul: string
  tanggal: string
  jam: string
  tempat: string
  rsvp: RsvpStatus
}

export type Tone = 'default' | 'accent' | 'success' | 'warn' | 'danger'

export interface ActionTile {
  href: string
  label: string
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>
  bg: string
  fg: string
}
