# 📋 Perencanaan Platform IASPIG UPI — Full-Stack Modular

> **Stack**: Laravel 11 (API) · Next.js 14 · PostgreSQL + PostGIS · Redis · Filament v3 · Docker  
> **Prinsip**: API-First · Module-based · Scalable · Versioned

---

## 🏗️ Arsitektur Sistem

```
┌──────────────────────────────────────────────────────────┐
│                        CLIENTS                           │
│   Next.js (Web)  │  React Native (Mobile - Fase 4)      │
└─────────────────────────┬────────────────────────────────┘
                          │ REST API /api/v1/
┌─────────────────────────▼────────────────────────────────┐
│              Laravel 11 — API Mode                       │
│   API Gateway · Auth Middleware · Rate Limiter           │
├──────────┬──────────┬──────────┬──────────┬─────────────┤
│  Auth    │  Member  │  GeoMap  │  JobBoard│  Event      │
│  Module  │  Module  │  Module  │  Module  │  Module     │
├──────────┴──────────┴──────────┴──────────┴─────────────┤
│  Forum · Mentoring · Repository · Notification · Admin   │
└──────────────────────────┬───────────────────────────────┘
                           │
┌──────────────────────────▼───────────────────────────────┐
│  PostgreSQL + PostGIS  │  Redis  │  Object Storage (R2)  │
└──────────────────────────────────────────────────────────┘
```

---

## 📦 Struktur Folder

### Backend — Laravel 11
```
iaspig-api/
├── app/
│   ├── Modules/
│   │   ├── Auth/
│   │   │   ├── Controllers/AuthController.php
│   │   │   ├── Controllers/VerificationController.php
│   │   │   ├── Models/User.php
│   │   │   ├── Services/AuthService.php
│   │   │   ├── Requests/LoginRequest.php
│   │   │   ├── Requests/RegisterRequest.php
│   │   │   └── routes.php
│   │   ├── Member/
│   │   │   ├── Controllers/MemberController.php
│   │   │   ├── Controllers/DirectoryController.php
│   │   │   ├── Models/AlumniProfile.php
│   │   │   ├── Services/MemberService.php
│   │   │   ├── Resources/MemberResource.php
│   │   │   └── routes.php
│   │   ├── GeoMap/
│   │   │   ├── Controllers/GeoMapController.php
│   │   │   ├── Models/AlumniLocation.php
│   │   │   ├── Services/GeoService.php
│   │   │   └── routes.php
│   │   ├── JobBoard/
│   │   │   ├── Controllers/JobController.php
│   │   │   ├── Controllers/ApplicationController.php
│   │   │   ├── Models/Job.php
│   │   │   ├── Models/JobApplication.php
│   │   │   ├── Services/JobService.php
│   │   │   └── routes.php
│   │   ├── Event/
│   │   │   ├── Controllers/EventController.php
│   │   │   ├── Controllers/RegistrationController.php
│   │   │   ├── Models/Event.php
│   │   │   ├── Models/EventRegistration.php
│   │   │   ├── Services/EventService.php
│   │   │   └── routes.php
│   │   ├── Forum/
│   │   │   ├── Controllers/ThreadController.php
│   │   │   ├── Controllers/ReplyController.php
│   │   │   ├── Models/ForumCategory.php
│   │   │   ├── Models/ForumThread.php
│   │   │   ├── Models/ForumReply.php
│   │   │   └── routes.php
│   │   ├── Mentoring/
│   │   │   ├── Controllers/MentorController.php
│   │   │   ├── Controllers/SessionController.php
│   │   │   ├── Models/Mentor.php
│   │   │   ├── Models/MentoringSession.php
│   │   │   └── routes.php
│   │   ├── Repository/
│   │   │   ├── Controllers/RepositoryController.php
│   │   │   ├── Models/AcademicWork.php
│   │   │   └── routes.php
│   │   └── Notification/
│   │       ├── Services/NotificationService.php
│   │       ├── Mail/
│   │       └── Notifications/
│   ├── Core/
│   │   ├── Http/Middleware/
│   │   ├── Services/FileUploadService.php
│   │   ├── Services/CacheService.php
│   │   └── Traits/ApiResponse.php
│   └── Admin/                    ← Filament v3
│       ├── Resources/
│       └── Pages/
├── database/migrations/
├── docker/
│   ├── nginx/
│   ├── php/
│   └── postgres/
└── docker-compose.yml
```

### Frontend — Next.js 14
```
iaspig-web/
├── src/
│   ├── app/
│   │   ├── (public)/
│   │   │   ├── page.tsx              ← Landing Page (full-stack)
│   │   │   ├── tentang/page.tsx
│   │   │   ├── alumni/page.tsx       ← Direktori publik
│   │   │   ├── lowongan/page.tsx
│   │   │   └── kegiatan/page.tsx
│   │   ├── (auth)/
│   │   │   ├── login/page.tsx
│   │   │   └── daftar/page.tsx
│   │   └── (member)/                 ← Protected routes
│   │       ├── dashboard/page.tsx
│   │       ├── profil/page.tsx
│   │       ├── peta/page.tsx
│   │       ├── forum/page.tsx
│   │       └── mentoring/page.tsx
│   ├── components/
│   │   ├── ui/                       ← Atom: Button, Input, Badge, Card
│   │   ├── layout/                   ← Navbar, Footer, Sidebar
│   │   ├── map/                      ← Leaflet components
│   │   └── shared/                   ← StatCard, Avatar, AlertBanner
│   ├── features/
│   │   ├── landing/                  ← Hero, Stats, Testimonial, CTA
│   │   ├── auth/                     ← Login form, Register form
│   │   ├── members/                  ← Directory, Profile card
│   │   ├── geo-map/                  ← Map view, filters
│   │   ├── jobs/                     ← Job card, Apply modal
│   │   ├── events/                   ← Event card, Register modal
│   │   ├── forum/                    ← Thread list, Reply tree
│   │   └── mentoring/                ← Mentor list, Booking
│   ├── lib/
│   │   ├── api.ts                    ← Axios instance + interceptors
│   │   └── utils.ts
│   └── store/                        ← Zustand stores per fitur
```

---

## 🔌 Modul & Breakdown Fungsi

---

### 🔐 Modul 1: Auth

**Tujuan**: Manajemen identitas dan akses seluruh platform.

| Fungsi | Endpoint | Keterangan |
|---|---|---|
| Register | `POST /api/v1/auth/register` | Email, password, NIM, angkatan |
| Login | `POST /api/v1/auth/login` | Return Bearer token (Sanctum) |
| Logout | `POST /api/v1/auth/logout` | Revoke token |
| Verifikasi Email | `GET /api/v1/auth/verify/{token}` | Link dikirim via email |
| Forgot Password | `POST /api/v1/auth/forgot-password` | Kirim reset link |
| Reset Password | `POST /api/v1/auth/reset-password` | Token + password baru |
| Refresh Token | `POST /api/v1/auth/refresh` | Perpanjang sesi |

**Role sistem**:
- `super_admin` — akses penuh
- `admin` — manajemen konten
- `alumni` — member terverifikasi
- `guest` — belum terverifikasi

---

### 👤 Modul 2: Member (Keanggotaan Alumni)

**Tujuan**: Profil lengkap alumni dan direktori yang bisa dicari.

| Fungsi | Endpoint | Keterangan |
|---|---|---|
| Lihat profil saya | `GET /api/v1/members/me` | Data lengkap alumni |
| Update profil | `PATCH /api/v1/members/me` | Edit bio, pekerjaan, dll. |
| Upload foto | `POST /api/v1/members/me/photo` | Simpan ke Object Storage |
| Direktori alumni | `GET /api/v1/members` | Filter: angkatan, kota, bidang |
| Profil publik | `GET /api/v1/members/{id}` | Tampilan publik alumni |
| Verifikasi member | `POST /api/v1/admin/members/{id}/verify` | Admin only |
| Keahlian/Skill | `POST /api/v1/members/me/skills` | Tag keahlian GIS |

**Data profil alumni**:
```
NIM, Angkatan, Nama Lengkap, Foto, Bio
Status Kerja, Bidang Pekerjaan, Nama Instansi
Kota, Provinsi, Koordinat (lat/lng)
LinkedIn, Instagram, Website
Keahlian (array): AutoCAD, ArcGIS, QGIS, dll.
```

---

### 🗺️ Modul 3: GeoMap (Peta Sebaran Alumni)

**Tujuan**: Visualisasi interaktif lokasi alumni — fitur unggulan SPIG!

| Fungsi | Endpoint | Keterangan |
|---|---|---|
| Semua titik alumni | `GET /api/v1/geo/alumni` | Output GeoJSON |
| Query bounding box | `GET /api/v1/geo/alumni/bbox` | Efisien untuk zoom map |
| Statistik per provinsi | `GET /api/v1/geo/stats` | Choropleth data |
| Update lokasi saya | `PUT /api/v1/geo/me` | Alumni update sendiri |
| Toggle visibilitas | `PATCH /api/v1/geo/me/visibility` | Sembunyikan/tampilkan |

**Fitur peta (Frontend)**:
- Marker clustering (banyak titik tidak lag)
- Filter: angkatan, bidang, provinsi
- Popup klik → foto + nama + pekerjaan + link profil
- Heatmap density alumni per wilayah
- Choropleth peta provinsi

**Database (PostGIS)**:
```sql
alumni_locations (
  id, user_id,
  geom GEOMETRY(Point, 4326),
  city, province, country,
  is_public BOOLEAN
)
-- Spatial index wajib:
CREATE INDEX idx_alumni_geom ON alumni_locations USING GIST(geom);
```

---

### 💼 Modul 4: Job Board (Bursa Kerja)

**Tujuan**: Koneksi antara alumni pencari kerja dan perusahaan/instansi.

| Fungsi | Endpoint | Keterangan |
|---|---|---|
| List lowongan | `GET /api/v1/jobs` | Filter: lokasi, tipe, bidang |
| Detail lowongan | `GET /api/v1/jobs/{id}` | — |
| Buat lowongan | `POST /api/v1/jobs` | Alumni/admin |
| Edit lowongan | `PUT /api/v1/jobs/{id}` | Owner only |
| Tutup lowongan | `PATCH /api/v1/jobs/{id}/close` | Owner / admin |
| Lamar kerja | `POST /api/v1/jobs/{id}/apply` | Upload CV (PDF) |
| Lihat pelamar | `GET /api/v1/jobs/{id}/applicants` | Owner only |
| Update status lamaran | `PATCH /api/v1/applications/{id}` | Shortlist/reject/accepted |

**Data lowongan**:
```
Judul, Perusahaan, Logo, Lokasi, Tipe (full-time/part-time/freelance/remote)
Deskripsi, Kualifikasi, Gaji (opsional), Deadline, Bidang GIS
```

---

### 📅 Modul 5: Event & Kegiatan

**Tujuan**: Manajemen kegiatan IASPIG dari publikasi hingga pendaftaran.

| Fungsi | Endpoint | Keterangan |
|---|---|---|
| List event | `GET /api/v1/events` | Filter: tipe, tanggal |
| Detail event | `GET /api/v1/events/{id}` | — |
| Buat event | `POST /api/v1/events` | Admin only |
| Edit event | `PUT /api/v1/events/{id}` | Admin only |
| Daftar event | `POST /api/v1/events/{id}/register` | Alumni |
| Batalkan pendaftaran | `DELETE /api/v1/events/{id}/register` | Alumni |
| Peserta event | `GET /api/v1/events/{id}/participants` | Admin only |
| Recap/galeri | `POST /api/v1/events/{id}/gallery` | Admin upload foto |

**Tipe event**: Webinar, Workshop, Reuni, Talkshow, Fieldtrip

---

### 💬 Modul 6: Forum Diskusi

**Tujuan**: Ruang diskusi antar alumni per topik dan angkatan.

| Fungsi | Endpoint | Keterangan |
|---|---|---|
| List kategori | `GET /api/v1/forum/categories` | — |
| List thread | `GET /api/v1/forum/threads` | Filter per kategori |
| Detail thread | `GET /api/v1/forum/threads/{id}` | Termasuk replies |
| Buat thread | `POST /api/v1/forum/threads` | Alumni terverifikasi |
| Balas thread | `POST /api/v1/forum/threads/{id}/replies` | Nested replies |
| Edit/hapus | `PUT/DELETE /api/v1/forum/threads/{id}` | Owner + admin |
| Pin thread | `PATCH /api/v1/forum/threads/{id}/pin` | Admin only |
| Laporkan konten | `POST /api/v1/forum/reports` | Moderasi |

**Kategori default**:
- Diskusi Umum · Lowongan & Karir · Teknis GIS
- Angkatan (per tahun) · Proyek & Kolaborasi

---

### 🎓 Modul 7: Mentoring

**Tujuan**: Koneksi mentor (alumni senior) dengan mentee (junior/mahasiswa).

| Fungsi | Endpoint | Keterangan |
|---|---|---|
| List mentor | `GET /api/v1/mentors` | Filter: bidang, ketersediaan |
| Profil mentor | `GET /api/v1/mentors/{id}` | — |
| Daftar jadi mentor | `POST /api/v1/mentors` | Alumni submit |
| Minta sesi | `POST /api/v1/mentors/{id}/sessions` | Mentee booking |
| Konfirmasi sesi | `PATCH /api/v1/sessions/{id}/confirm` | Mentor konfirmasi |
| List sesi saya | `GET /api/v1/sessions` | Mentor & mentee |
| Review setelah sesi | `POST /api/v1/sessions/{id}/review` | Mentee |

**Data mentor**: Bidang keahlian, Pengalaman, Ketersediaan (hari/jam), Max mentee, Bio singkat

---

### 📚 Modul 8: Repository Karya Ilmiah

**Tujuan**: Arsip digital skripsi, penelitian, dan karya alumni.

| Fungsi | Endpoint | Keterangan |
|---|---|---|
| List karya | `GET /api/v1/repository` | Filter: tahun, topik |
| Detail karya | `GET /api/v1/repository/{id}` | — |
| Upload karya | `POST /api/v1/repository` | Alumni upload PDF |
| Edit karya | `PUT /api/v1/repository/{id}` | Owner only |
| Download | `GET /api/v1/repository/{id}/download` | Track download count |
| Approve karya | `PATCH /api/v1/admin/repository/{id}/approve` | Admin moderasi |

**Metadata karya**: Judul, Penulis, Tahun, Abstrak, Topik, Dosen Pembimbing, File PDF, DOI (opsional)

---

### 🔔 Modul 9: Notifikasi

**Tujuan**: Komunikasi otomatis ke alumni via berbagai channel.

| Jenis | Trigger | Channel |
|---|---|---|
| Verifikasi email | Saat register | Email |
| Reset password | Saat request | Email |
| Lamaran diterima | Status berubah | Email + In-app |
| Event reminder | H-1 event | Email |
| Thread dibalas | Ada reply baru | In-app |
| Sesi mentoring dikonfirmasi | Mentor konfirmasi | Email + In-app |
| Lowongan baru | Sesuai preferensi | Email (digest) |
| Newsletter mingguan | Setiap Senin | Email |

**Implementasi**: Laravel Notification + Queue (Redis) + Laravel Reverb (in-app realtime)

---

### 👨‍💼 Modul 10: Admin Panel (Filament v3)

**Tujuan**: Backoffice lengkap untuk pengurus IASPIG.

| Fitur | Fungsi |
|---|---|
| **Dashboard** | Statistik real-time: total alumni, event, lowongan, forum |
| **Manajemen Member** | Verifikasi, suspend, edit data, export CSV/Excel |
| **Manajemen Konten** | Artikel/berita CRUD dengan rich-text editor |
| **Moderasi Forum** | Hapus thread, ban user, pin post |
| **Manajemen Event** | CRUD event, lihat peserta, export daftar hadir |
| **Moderasi Job Board** | Approve/reject lowongan |
| **Moderasi Repository** | Approve karya ilmiah |
| **Pengaturan Site** | Hero text, logo, kontak, media sosial |
| **Analytics** | Grafik pertumbuhan alumni, engagement, peta aktivitas |

---

## 🗃️ Database Schema Lengkap

```sql
-- DOMAIN: Auth & Member
users                 { id, email, password, role, email_verified_at }
alumni_profiles       { id, user_id, nim, angkatan, nama, foto, bio,
                        status_kerja, bidang, instansi, kota, provinsi,
                        linkedin, instagram, is_verified }
alumni_skills         { id, user_id, skill_name }

-- DOMAIN: GeoMap (PostGIS)
alumni_locations      { id, user_id, geom GEOMETRY(Point,4326),
                        city, province, country, is_public }

-- DOMAIN: Job Board
jobs                  { id, posted_by, title, company, logo_url, location,
                        type, description, requirements, salary_range,
                        deadline, is_active, gis_related }
job_applications      { id, job_id, user_id, status, cv_url, note, applied_at }

-- DOMAIN: Event
events                { id, title, type, description, date_start, date_end,
                        location, quota, banner_url, is_online, meet_link }
event_registrations   { id, event_id, user_id, status, registered_at }
event_gallery         { id, event_id, image_url, caption }

-- DOMAIN: Forum
forum_categories      { id, name, slug, icon, description }
forum_threads         { id, category_id, author_id, title, body,
                        is_pinned, is_locked, views, created_at }
forum_replies         { id, thread_id, author_id, parent_id, body, created_at }
forum_reports         { id, reportable_type, reportable_id, reporter_id, reason }

-- DOMAIN: Mentoring
mentors               { id, user_id, bio, expertise, availability,
                        max_mentee, is_active, rating_avg }
mentoring_sessions    { id, mentor_id, mentee_id, topic, scheduled_at,
                        duration_minutes, status, meet_link, notes }
mentoring_reviews     { id, session_id, reviewer_id, rating, review }

-- DOMAIN: Repository
academic_works        { id, author_id, title, abstract, year, topic,
                        supervisor, file_url, download_count,
                        is_approved, doi }

-- DOMAIN: Content (CMS sederhana)
articles              { id, author_id, title, slug, body, banner_url,
                        category, is_published, published_at }
site_settings         { key, value }                         ← key-value store

-- DOMAIN: Notification
notifications         { id, user_id, type, data JSON, read_at }
```

---

## 🌐 Landing Page — Seksi & Data Source

Landing page **dinamis** — data diambil dari API, bukan hardcoded.

| Seksi | Sumber Data | Endpoint |
|---|---|---|
| **Hero** | `site_settings` (teks, CTA) | `GET /api/v1/settings/hero` |
| **Statistik** | Aggregasi DB | `GET /api/v1/stats/public` |
| **Program Unggulan** | `site_settings` | `GET /api/v1/settings/programs` |
| **Event Terdekat** | Tabel `events` | `GET /api/v1/events?upcoming=3` |
| **Peta Sebaran** | `alumni_locations` | `GET /api/v1/geo/alumni` |
| **Lowongan Terbaru** | Tabel `jobs` | `GET /api/v1/jobs?limit=4` |
| **Artikel Terbaru** | Tabel `articles` | `GET /api/v1/articles?limit=3` |
| **Testimoni** | `site_settings` | `GET /api/v1/settings/testimonials` |
| **Mitra/Instansi** | `site_settings` | `GET /api/v1/settings/partners` |

---

## ⚙️ DevOps & Infrastruktur

### 💻 Environment Lokal (Windows)

| Komponen | Tools | Keterangan |
|---|---|---|
| **PHP** | XAMPP (PHP 8.2+) | Pastikan extension `pgsql` & `pdo_pgsql` aktif |
| **Database** | PostgreSQL + PostGIS | Install terpisah, bukan bawaan XAMPP |
| **Web Server** | Apache (XAMPP) | Atau gunakan `php artisan serve` |
| **Cache/Queue** | Redis (Windows port) | Pakai [Memurai](https://www.memurai.com/) atau WSL2 |
| **Email Test** | [Mailtrap.io](https://mailtrap.io) | Free tier, cukup untuk dev |
| **Node.js** | Node.js LTS | Untuk menjalankan Next.js frontend |

**Catatan XAMPP + PostgreSQL**:
```
1. Aktifkan extension di php.ini XAMPP:
   extension=pgsql
   extension=pdo_pgsql

2. Install PostGIS di PostgreSQL:
   CREATE EXTENSION postgis;

3. Buat database:
   CREATE DATABASE iaspig;
   \c iaspig
   CREATE EXTENSION postgis;
```

**Jalankan project lokal**:
```bash
# Terminal 1 — Laravel API
cd iaspig-api
php artisan serve --port=8000
php artisan queue:work   # background jobs

# Terminal 2 — Next.js Frontend
cd iaspig-web
npm run dev              # jalan di port 3000
```

---

### 🌐 Environment Production (VPS + aaPanel)

**Stack di aaPanel**:
| Komponen | Setup di aaPanel |
|---|---|
| **Web Server** | Nginx (via aaPanel One-Click) |
| **PHP** | PHP 8.2 FPM (via aaPanel PHP Manager) |
| **Database** | PostgreSQL (install via aaPanel App Store) |
| **SSL** | Let's Encrypt (via aaPanel, gratis & auto-renew) |
| **Node.js** | PM2 + Node.js (via aaPanel) |
| **Redis** | Redis (via aaPanel App Store) |

**Konfigurasi Nginx untuk Laravel (aaPanel)**:
```nginx
server {
    listen 80;
    server_name api.iaspig.id;
    root /www/wwwroot/iaspig-api/public;

    index index.php;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        fastcgi_pass unix:/tmp/php-cgi-82.sock;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }
}
```

**Next.js di aaPanel (via PM2)**:
```bash
npm run build
pm2 start npm --name "iaspig-web" -- start
```

**Deployment flow (manual)**:
```
Lokal → git push → GitHub
                      ↓
            SSH ke VPS aaPanel
            git pull origin main
            php artisan migrate --force
            php artisan config:cache
            php artisan queue:restart
            npm run build (frontend)
            pm2 restart iaspig-web
```

---

### 📁 Struktur Domain (Rekomendasi)
```
iaspig.id              → Next.js (Frontend)
api.iaspig.id          → Laravel API
admin.iaspig.id        → Filament Admin Panel
```

---

### 📊 Monitoring
- **Laravel Telescope** — debug & query profiling (dev only)
- **aaPanel Monitor** — CPU, RAM, disk usage
- **Uptime Robot** — notif jika server down (free)
- **Sentry** — error tracking production (free tier)

---

## 🗓️ Roadmap Pengembangan

```
FASE 1 — Foundation (Minggu 1–4)
├── Setup repo monorepo / dua repo terpisah
├── Docker Compose (dev environment)
├── Database migration + seeder
├── Module: Auth (register, login, verify email)
├── Module: Member (profil CRUD)
├── Module: GeoMap (peta dasar)
└── Landing Page (full-stack, semua seksi aktif)

FASE 2 — Core Features (Minggu 5–10)
├── Module: Job Board (posting + apply)
├── Module: Event (CRUD + registrasi)
├── Module: Notification (email + in-app)
├── Admin Panel — Filament (member, konten, event)
└── UI polish + mobile responsive

FASE 3 — Community (Minggu 11–16)
├── Module: Forum Diskusi
├── Module: Mentoring
├── Module: Repository Karya Ilmiah
├── Admin: moderasi forum + repository
└── Newsletter otomatis

FASE 4 — Enhancement (Bulan 5+)
├── Advanced GIS (heatmap, clustering, choropleth)
├── Mobile App (React Native, reuse API)
├── SSO UPI (opsional)
└── Analitik dashboard alumni
```

---

## ✅ Checklist Scalability & Modularity

### Scalability
- [x] Stateless API → horizontal scaling mudah
- [x] Redis queue → background job tidak blokir request
- [x] PostGIS GIST index → query peta cepat di 10K+ data
- [x] API versioning `/api/v1/` → aman untuk breaking change
- [x] Object storage terpisah → tidak membebani app server
- [x] Docker → environment reproducible di staging & production

### Modularity
- [x] Setiap modul punya folder, route, dan service sendiri
- [x] Modul bisa dinonaktifkan via `config/modules.php` flag
- [x] Frontend feature-based → komponen tidak tightly coupled
- [x] Database schema per domain → tidak ada cross-domain FK langsung
- [x] Shared Core layer → tidak ada duplikasi utility
- [x] Admin panel terpisah (Filament) → tidak campur dengan API

---

*Dokumen ini adalah acuan utama pengembangan platform IASPIG UPI. Perbarui setiap akhir sprint.*
