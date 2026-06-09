# Perizinan UMKM & Badan Usaha

Aplikasi SPA untuk pendataan dan monitoring perizinan UMKM serta badan usaha. Dibangun dengan HTML, CSS, dan JavaScript murni — siap di-deploy ke GitHub Pages tanpa build process.

## Fitur

- **Dashboard** — Progress keseluruhan, statistik per modul, deadline pengurusan
- **Self Declare** — Checklist persyaratan, simulasi pengisian, catatan kendala
- **Reguler** — Timeline alur LPH/MUI, monitoring status sertifikasi halal
- **Fasilitasi** — Daftar program bantuan pemerintah (BPUM, KUR, SEHATI), tracking pendaftaran
- **P3H (Pendamping Halal)** — Checklist persyaratan, alur sertifikasi, referensi regulasi
- **Dark mode** — Toggle tampilan gelap/terang
- **Search** — Pencarian materi antar modul
- **LocalStorage** — Progress dan catatan tersimpan otomatis di browser
- **Export PDF** — Cetak laporan progress

## Struktur Project

```
/
├── index.html
├── assets/
│   ├── css/style.css
│   ├── js/app.js
│   └── images/
├── modules/
│   ├── self-declare.html
│   ├── reguler.html
│   ├── fasilitasi.html
│   └── p3h.html
└── README.md
```

## Tech Stack

- HTML5
- CSS3 (CSS Variables, Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- LocalStorage API
- GitHub Pages

## Deploy

Push ke branch `Master`, GitHub Pages otomatis serve dari root.
