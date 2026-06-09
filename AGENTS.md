# AGENTS.md — Perizinan UMKM & Badan Usaha

## Role

Kamu adalah AI assistant untuk project **Perizinan UMKM & Badan Usaha**. Tugasmu membantu pengembangan, pemeliharaan, dan pemahaman terhadap SPA ini. Kamu harus memahami seluruh arsitektur, konvensi kode, dan aturan keamanan project.

## Project Overview

Aplikasi **single-page application (SPA)** berbasis HTML/CSS/JS murni untuk mendata dan memonitoring perizinan UMKM serta badan usaha. Tidak menggunakan framework atau build tool. Hosting di **GitHub Pages**.

Target pengguna: Pendamping UMKM yang mengelola data klien dan proses perizinan (Self Declare, Sertifikasi Halal Reguler, Fasilitasi Pemerintah, Pendamping Halal/P3H).

## Tech Stack

- **HTML5** — Semantic markup, SPA shell
- **CSS3** — CSS Variables untuk theming (light/dark), Flexbox/Grid layout, print styles
- **Vanilla JS (ES6+)** — Hash routing, DOM manipulation, localStorage, template literals
- **localStorage** — Persistensi state (progress checklist, catatan, theme)
- **GitHub Pages** — Hosting statis, deploy dari branch `Master` root `/`

## Structure

```
/
├── index.html                 ← SPA utama (sidebar + content container)
├── assets/
│   ├── css/style.css          ← Semua styling (light/dark, responsive, print)
│   ├── js/app.js              ← Semua logika JS (routing, state, render, search)
│   └── images/                ← Folder aset gambar
├── modules/
│   ├── self-declare.html      ← Standalone fallback (redirect ke SPA)
│   ├── reguler.html           ← Standalone fallback
│   ├── fasilitasi.html        ← Standalone fallback
│   └── p3h.html               ← Standalone fallback
├── .umkm-data                 ← Data klien sensitif (tidak di-commit — ada di .gitignore)
├── .gitignore
├── AGENTS.md
└── README.md                  ← README publik (tidak mengandung data sensitif)
```

## Architecture

### State Management

Semua state aplikasi disimpan dalam satu objek `App.state` di `app.js`:

```js
App.state = {
  theme: 'light' | 'dark',
  page: 'dashboard' | 'self-declare' | 'reguler' | 'fasilitasi' | 'p3h',
  query: '',                     // Search query
  selfDeclare: { checklist, simulation, notes },
  reguler: { checklist, alur, monitoring, notes },
  fasilitasi: { checklist, programs, trackings, notes },
  p3h: { checklist, alur, regulasi, notes },
}
```

- Setiap perubahan state langsung disimpan ke `localStorage` via `saveState()`
- State di-load kembali saat inisialisasi via `loadState()`

### Routing

Hash-based routing:
- `#dashboard` → Dashboard
- `#self-declare` → Self Declare
- `#reguler` → Reguler
- `#fasilitasi` → Fasilitasi
- `#p3h` → Pendamping Halal

### Rendering

Setiap halaman memiliki fungsi render sendiri:
- `renderDashboard()` — Stats grid, progress bars, deadlines
- `renderSelfDeclare()` — Checklist, simulasi form, notes
- `renderReguler()` — Checklist, timeline, monitoring table
- `renderFasilitasi()` — Checklist, program table, tracking
- `renderP3H()` — Checklist, timeline, regulasi table

### Event Binding

Fungsi `bindEvents(page)` dipanggil setiap navigasi untuk memasang event listener pada elemen dinamis.

## Features

1. **Dashboard** — Progress keseluruhan, statistik per modul, deadline
2. **Self Declare** — Checklist persyaratan, simulasi omzet/karyawan/modal, catatan
3. **Reguler** — Timeline LPH→Audit→Fatwa→Sertifikat, monitoring status tahapan
4. **Fasilitasi** — Program bantuan (BPUM, KUR, SEHATI), tracking pendaftaran
5. **P3H** — Persyaratan pendamping, alur Bimtek→Ujian→SK→Pendampingan, referensi regulasi
6. **Dark Mode** — Toggle di sidebar, state persisted
7. **Search** — Cari materi dari semua modul, klik hasil → navigasi ke halaman
8. **localStorage** — Semua checklist, catatan, theme tersimpan otomatis
9. **Export PDF** — `window.print()` dengan print styles
10. **Responsive** — Sidebar collapse di mobile, grid adaptif

## Security Rules

### .umkm-data — SENSITIVE

File `.umkm-data` berisi data pribadi dan akun klien (NIK, password, alamat, dll). **WAJIB**:
- JANGAN pernah mengcommit, push, atau menyebarkan file ini
- File ini ada di `.gitignore` — jangan diubah
- Hanya direferensikan secara lokal oleh developer

### README.md Publik

README.md sudah dibersihkan dari data sensitif. Jangan menambahkan data klien ke README atau file publik mana pun.

## CSS Theming

Menggunakan CSS Variables dengan attribute `data-theme` di `<html>`:
- `data-theme="light"` → Default
- `data-theme="dark"` → Dark mode

Variabel utama: `--bg`, `--card-bg`, `--text`, `--border`, `--accent`, dll.

## Responsive Breakpoints

- `768px` — Sidebar collapse ke atas, grid 2→1 kolom
- `480px` — Stats grid 2→1 kolom

## Print Styles

- Sidebar disembunyikan
- Shadow dihilangkan
- `break-inside: avoid` pada card

## Conventions

- **Tidak ada komentar di kode** — Kecuali untuk AGENTS.md atau dokumentasi terpisah
- **Nama fungsi** camelCase, **ID/class** kebab-case
- **String** menggunakan template literal dengan backtick
- **State mutation** langsung ke `App.state.*` lalu `saveState()`
- **Routing** via hash — jangan gunakan anchor `<a href="...html">`, gunakan `<a href="#page">`
- **File baru** — Hindari membuat file baru jika bisa ditangani di file yang sudah ada
