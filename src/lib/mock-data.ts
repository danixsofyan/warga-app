

import type {
  User,
  Pengumuman,
  SuratTemplate,
  RiwayatSurat,
  Iuran,
  KasSummary,
  KasTransaksi,
  Pengaduan,
  Jadwal,
} from '@/lib/types'

export const MOCK_USER: User = {
  name: 'Bu Sari Dewi',
  initials: 'SD',
  alamat: 'Jl. Melati No. 12, RT 05/RW 02',
  kelurahan: 'Sukasari, Bandung Barat',
  rt: '05',
  rw: '02',
}

export const PENGUMUMAN: Pengumuman[] = [
  { id: '1', kategori: 'RT', judul: 'Kerja bakti hari Minggu, 3 Mei', isi: 'Dimulai pukul 07.00 di lapangan RT. Mohon membawa alat kebersihan masing-masing.', tanggal: '2 hari lalu', isPinned: true, author: 'Pak Budi (Ketua RT)' },
  { id: '2', kategori: 'RW', judul: 'Pembagian vaksin untuk lansia', isi: 'Puskesmas akan datang tanggal 5 Mei pukul 08.00-11.00 di balai RW.', tanggal: '3 hari lalu', isPinned: false, author: 'Bu Rina (Sekretaris RW)' },
  { id: '3', kategori: 'Kelurahan', judul: 'Pemadaman listrik terjadwal', isi: 'PLN akan memadamkan aliran listrik Senin, 4 Mei pukul 09.00-14.00 untuk pemeliharaan.', tanggal: '5 hari lalu', isPinned: false, author: 'Admin Kelurahan' },
  { id: '4', kategori: 'RT', judul: 'Rapat bulanan warga', isi: 'Hadir ya warga sekalian, kita bahas rencana kegiatan 17 Agustus.', tanggal: '1 minggu lalu', isPinned: false, author: 'Pak Budi (Ketua RT)' },
]

export const SURAT_TEMPLATES: SuratTemplate[] = [
  { id: 'domisili', nama: 'Surat Keterangan Domisili', desc: 'Keterangan tempat tinggal', eta: '1-2 hari' },
  { id: 'pengantar', nama: 'Surat Pengantar', desc: 'Untuk keperluan ke kelurahan', eta: '1 hari' },
  { id: 'tidak-mampu', nama: 'Surat Keterangan Tidak Mampu', desc: 'Untuk bantuan sosial', eta: '2-3 hari' },
  { id: 'usaha', nama: 'Surat Keterangan Usaha', desc: 'Untuk UMKM & izin usaha', eta: '2 hari' },
  { id: 'kematian', nama: 'Surat Keterangan Kematian', desc: 'Pengantar ke dukcapil', eta: 'Hari yang sama' },
  { id: 'nikah', nama: 'Surat Pengantar Nikah', desc: 'Pengantar ke KUA', eta: '1-2 hari' },
]

export const RIWAYAT_SURAT: RiwayatSurat[] = [
  { id: 'SR-2025-042', jenis: 'Surat Keterangan Domisili', tanggal: '20 Apr 2025', status: 'disetujui' },
  { id: 'SR-2025-028', jenis: 'Surat Pengantar', tanggal: '5 Apr 2025', status: 'disetujui' },
  { id: 'SR-2025-019', jenis: 'Surat Keterangan Usaha', tanggal: '22 Mar 2025', status: 'diproses' },
]

export const IURAN: Iuran[] = [
  { bulan: 'April 2025', nominal: 50000, jatuhTempo: '25 April 2025', status: 'belum' },
  { bulan: 'Maret 2025', nominal: 50000, jatuhTempo: '25 Maret 2025', status: 'lunas', tanggalBayar: '22 Mar 2025' },
  { bulan: 'Februari 2025', nominal: 50000, jatuhTempo: '25 Feb 2025', status: 'lunas', tanggalBayar: '20 Feb 2025' },
  { bulan: 'Januari 2025', nominal: 50000, jatuhTempo: '25 Jan 2025', status: 'lunas', tanggalBayar: '18 Jan 2025' },
]

export const KAS_SUMMARY: KasSummary = {
  saldo: 4275000,
  pemasukan: 2150000,
  pengeluaran: 1380000,
  periode: 'April 2025',
}

export const KAS_TRANSAKSI: KasTransaksi[] = [
  { id: '1', tipe: 'masuk', kategori: 'Iuran Warga', jumlah: 1950000, tanggal: '15 Apr', desc: '39 KK × Rp 50.000' },
  { id: '2', tipe: 'keluar', kategori: 'Kerja Bakti', jumlah: 320000, tanggal: '13 Apr', desc: 'Konsumsi & alat kebersihan' },
  { id: '3', tipe: 'keluar', kategori: 'Perbaikan', jumlah: 850000, tanggal: '8 Apr', desc: 'Lampu jalan RT 05' },
  { id: '4', tipe: 'masuk', kategori: 'Donasi', jumlah: 200000, tanggal: '5 Apr', desc: 'Pak Hasan' },
  { id: '5', tipe: 'keluar', kategori: 'Konsumsi Rapat', jumlah: 210000, tanggal: '3 Apr', desc: 'Snack rapat bulanan' },
]

export const PENGADUAN: Pengaduan[] = [
  { id: 'PGD-017', judul: 'Lampu jalan mati di Jl. Melati', tanggal: '18 Apr 2025', status: 'selesai', kategori: 'Infrastruktur', deskripsi: 'Lampu jalan di depan rumah no. 14-20 sudah padam selama 5 hari. Mohon segera diperbaiki karena membahayakan warga yang melintas malam hari.' },
  { id: 'PGD-012', judul: 'Tumpukan sampah di gang belakang', tanggal: '10 Apr 2025', status: 'diproses', kategori: 'Kebersihan', deskripsi: 'Terdapat tumpukan sampah yang cukup besar di gang belakang RT, bau tidak sedap mulai mengganggu. Sudah berlangsung sekitar 3 hari karena petugas kebersihan tidak masuk.' },
]

export const JADWAL: Jadwal[] = [
  { id: '1', judul: 'Kerja Bakti RT', tanggal: '3 Mei 2025', jam: '07.00 - 10.00', tempat: 'Lapangan RT', rsvp: null },
  { id: '2', judul: 'Posyandu Balita', tanggal: '5 Mei 2025', jam: '08.00 - 11.00', tempat: 'Balai RW', rsvp: 'hadir' },
  { id: '3', judul: 'Rapat Bulanan Warga', tanggal: '12 Mei 2025', jam: '19.30 - selesai', tempat: 'Rumah Pak RT', rsvp: null },
]
