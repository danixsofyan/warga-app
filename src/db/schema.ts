import {
  pgTable,
  text,
  integer,
  boolean,
  timestamp,
  varchar,
  pgEnum,
} from 'drizzle-orm/pg-core'
import { createId } from '@paralleldrive/cuid2'

export const suratStatusEnum = pgEnum('surat_status', [
  'menunggu',
  'diproses',
  'disetujui',
  'ditolak',
])

export const iuranStatusEnum = pgEnum('iuran_status', ['belum', 'lunas'])

export const pengaduanStatusEnum = pgEnum('pengaduan_status', [
  'masuk',
  'diproses',
  'selesai',
])

export const kategoriPengaduanEnum = pgEnum('kategori_pengaduan', [
  'Infrastruktur',
  'Kebersihan',
  'Keamanan',
  'Lainnya',
])

export const kategoriPengumumanEnum = pgEnum('kategori_pengumuman', [
  'RT',
  'RW',
  'Kelurahan',
])

export const kasTransaksiTipeEnum = pgEnum('kas_transaksi_tipe', [
  'masuk',
  'keluar',
])

export const users = pgTable('users', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => createId()),
  name: varchar('name', { length: 255 }),
  email: varchar('email', { length: 255 }).unique(),
  emailVerified: timestamp('email_verified'),
  image: text('image'),
  
  nik: varchar('nik', { length: 16 }).unique(),
  alamat: text('alamat'),
  rt: varchar('rt', { length: 5 }),
  rw: varchar('rw', { length: 5 }),
  kelurahan: varchar('kelurahan', { length: 100 }),
  noHp: varchar('no_hp', { length: 15 }),
  isVerified: boolean('is_verified').default(false),
  role: varchar('role', { length: 20 }).default('warga'), 
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
})

export const accounts = pgTable('accounts', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => createId()),
  userId: text('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  type: text('type').notNull(),
  provider: text('provider').notNull(),
  providerAccountId: text('provider_account_id').notNull(),
  refreshToken: text('refresh_token'),
  accessToken: text('access_token'),
  expiresAt: integer('expires_at'),
  tokenType: text('token_type'),
  scope: text('scope'),
  idToken: text('id_token'),
  sessionState: text('session_state'),
})

export const sessions = pgTable('sessions', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => createId()),
  sessionToken: text('session_token').unique().notNull(),
  userId: text('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  expires: timestamp('expires').notNull(),
})

export const pengumuman = pgTable('pengumuman', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => createId()),
  judul: varchar('judul', { length: 300 }).notNull(),
  isi: text('isi').notNull(),
  kategori: kategoriPengumumanEnum('kategori').notNull().default('RT'),
  isPinned: boolean('is_pinned').default(false),
  authorId: text('author_id').references(() => users.id),
  authorName: varchar('author_name', { length: 255 }),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
})

export const suratRequests = pgTable('surat_requests', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => createId()),
  nomorSurat: varchar('nomor_surat', { length: 30 }).unique(),
  jenis: varchar('jenis', { length: 100 }).notNull(),
  keperluan: text('keperluan').notNull(),
  catatan: text('catatan'),
  status: suratStatusEnum('status').default('menunggu'),
  userId: text('user_id').references(() => users.id),
  approvedById: text('approved_by_id').references(() => users.id),
  approvedAt: timestamp('approved_at'),
  dokumenUrl: text('dokumen_url'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
})

export const iuran = pgTable('iuran', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => createId()),
  userId: text('user_id').references(() => users.id),
  bulan: varchar('bulan', { length: 20 }).notNull(), 
  nominal: integer('nominal').notNull().default(50000),
  status: iuranStatusEnum('status').default('belum'),
  jatuhTempo: timestamp('jatuh_tempo'),
  tanggalBayar: timestamp('tanggal_bayar'),
  buktiBayarUrl: text('bukti_bayar_url'),
  verifiedById: text('verified_by_id').references(() => users.id),
  createdAt: timestamp('created_at').defaultNow(),
})

export const kasTransaksi = pgTable('kas_transaksi', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => createId()),
  tipe: kasTransaksiTipeEnum('tipe').notNull(),
  kategori: varchar('kategori', { length: 100 }).notNull(),
  jumlah: integer('jumlah').notNull(),
  deskripsi: text('deskripsi'),
  tanggal: timestamp('tanggal').defaultNow(),
  createdById: text('created_by_id').references(() => users.id),
  createdAt: timestamp('created_at').defaultNow(),
})

export const pengaduan = pgTable('pengaduan', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => createId()),
  nomorPengaduan: varchar('nomor_pengaduan', { length: 20 }).unique(),
  judul: varchar('judul', { length: 300 }).notNull(),
  deskripsi: text('deskripsi'),
  kategori: kategoriPengaduanEnum('kategori').notNull().default('Lainnya'),
  status: pengaduanStatusEnum('status').default('masuk'),
  lokasi: text('lokasi'),
  fotoUrl: text('foto_url'),
  userId: text('user_id').references(() => users.id),
  handledById: text('handled_by_id').references(() => users.id),
  resolvedAt: timestamp('resolved_at'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
})

export const jadwal = pgTable('jadwal', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => createId()),
  judul: varchar('judul', { length: 300 }).notNull(),
  tanggal: timestamp('tanggal').notNull(),
  jamMulai: varchar('jam_mulai', { length: 10 }),
  jamSelesai: varchar('jam_selesai', { length: 10 }),
  tempat: varchar('tempat', { length: 255 }),
  deskripsi: text('deskripsi'),
  createdById: text('created_by_id').references(() => users.id),
  createdAt: timestamp('created_at').defaultNow(),
})

export const jadwalRsvp = pgTable('jadwal_rsvp', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => createId()),
  jadwalId: text('jadwal_id').references(() => jadwal.id, { onDelete: 'cascade' }),
  userId: text('user_id').references(() => users.id),
  status: varchar('status', { length: 10 }).default('hadir'), 
  createdAt: timestamp('created_at').defaultNow(),
})

export type User = typeof users.$inferSelect
export type InsertUser = typeof users.$inferInsert
export type Pengumuman = typeof pengumuman.$inferSelect
export type SuratRequest = typeof suratRequests.$inferSelect
export type Iuran = typeof iuran.$inferSelect
export type KasTransaksi = typeof kasTransaksi.$inferSelect
export type Pengaduan = typeof pengaduan.$inferSelect
export type Jadwal = typeof jadwal.$inferSelect
