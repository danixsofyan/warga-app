# Warga+ — Aplikasi Digital RT/RW

Platform digital untuk komunikasi, administrasi, dan pengelolaan keuangan RT/RW/Kelurahan. Dirancang sebagai _mobile-first web app_ dengan tampilan _native-like_ untuk warga Indonesia.

---

## Tech Stack

| Layer           | Teknologi                                         |
| --------------- | ------------------------------------------------- |
| Framework       | [Next.js 16.2.4](https://nextjs.org) (App Router) |
| Language        | TypeScript 5                                      |
| Styling         | Tailwind CSS v4                                   |
| UI Components   | Shadcn UI + Custom Primitives                     |
| Database ORM    | [Drizzle ORM](https://orm.drizzle.team)           |
| Database        | PostgreSQL via [Supabase](https://supabase.com)   |
| Auth            | [NextAuth.js v5](https://authjs.dev)              |
| Font            | Plus Jakarta Sans (Google Fonts)                  |
| Package Manager | pnpm                                              |

---

## Struktur Halaman

```
/                     → Redirect ke /home
/login                → Halaman masuk (WhatsApp / Google)
/home                 → Beranda — dashboard utama warga
/announcements        → Daftar & detail pengumuman RT/RW
/documents            → Pengajuan surat digital
/payments             → Iuran bulanan & transparansi kas RT
/complaints           → Pengaduan warga
/schedules            → Jadwal kegiatan RT/RW
/account              → Profil & pengaturan
  /account/profile    → Data diri & domisili
  /account/family     → Data Kartu Keluarga
  /account/notifications → Pengaturan notifikasi WA & push
  /account/settings   → Preferensi tampilan & bahasa
```

---

## Struktur Proyek

```
src/
├── app/
│   ├── (app)/              # Route grup halaman terautentikasi
│   │   ├── layout.tsx      # Layout dengan BottomNav
│   │   ├── home/
│   │   ├── announcements/
│   │   ├── documents/
│   │   ├── payments/
│   │   ├── complaints/
│   │   ├── schedules/
│   │   └── account/
│   ├── login/
│   ├── layout.tsx          # Root layout (font, metadata)
│   ├── page.tsx            # Root redirect
│   └── globals.css         # Design tokens & Tailwind theme
├── components/
│   ├── app/                # Custom primitives (AppCard, BottomNav, dll)
│   └── ui/                 # Shadcn UI components
└── lib/
    ├── types.ts            # Centralized TypeScript interfaces
    ├── mock-data.ts        # Data palsu (diganti DB di fase berikutnya)
    ├── format.ts           # Utility formatting (formatRupiah, dll)
    ├── db.ts               # Drizzle DB client
    └── auth.ts             # NextAuth config
```

---

## Menjalankan Lokal

```bash
# Install dependencies
pnpm install

# Salin environment variables
cp .env.example .env.local
# Isi nilai DB_URL, NEXTAUTH_SECRET, GOOGLE_CLIENT_ID, dst.

# Jalankan dev server
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

---

## Environment Variables

Buat file `.env.local` di root folder `warga-app/` dengan isi:

```env
DATABASE_URL=postgresql://...
NEXTAUTH_SECRET=...
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

---

## Scripts

| Command      | Keterangan                  |
| ------------ | --------------------------- |
| `pnpm dev`   | Jalankan development server |
| `pnpm build` | Build untuk produksi        |
| `pnpm start` | Jalankan production build   |
| `pnpm lint`  | Jalankan ESLint             |

---
