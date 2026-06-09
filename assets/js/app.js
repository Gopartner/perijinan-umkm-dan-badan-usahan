const App = {
  state: {
    theme: 'light',
    page: 'dashboard',
    query: '',
    activeClientId: null,
    clients: [],
  },
}

const PERMIT_INFO = {
  selfDeclare: {
    title: 'Self Declare',
    desc: 'Perizinan berbasis pernyataan mandiri untuk usaha mikro (omzet < Rp300jt/thn). Gratis via OSS.',
    icon: '&#9679;',
  },
  reguler: {
    title: 'Reguler (Sertifikasi Halal)',
    desc: 'Sertifikasi halal reguler melalui LPH dan MUI untuk usaha kecil-menengah.',
    icon: '&#9679;',
  },
  fasilitasi: {
    title: 'Fasilitasi',
    desc: 'Program bantuan pemerintah untuk UMKM (BPUM, KUR, SEHATI, dll).',
    icon: '&#9679;',
  },
  p3h: {
    title: 'Pendamping Halal (P3H)',
    desc: 'Menjadi pendamping proses produk halal bersertifikat BPJPH.',
    icon: '&#9679;',
  },
}

const TUTORIALS = {
  selfDeclare: {
    title: 'Panduan Sertifikat Halal Self Declare',
    intro: 'Skema Self Declare adalah jalur sertifikasi halal GRATIS untuk usaha mikro dengan omzet maksimal Rp300 juta/tahun. Pelaku usaha cukup menyatakan kesesuaian produk secara mandiri melalui OSS.',
    syaratUmum: [
      'Omzet maksimal Rp300 juta/tahun (buktikan dengan laporan keuangan atau surat pernyataan)',
      'Produk tidak berisiko (tidak mengandung bahan berbahaya)',
      'Proses produksi sederhana',
      'Tidak memerlukan pengawasan khusus dari LPH',
    ],
    penting: 'WAJIB punya NIB (Nomor Induk Berusaha) dulu. Jika belum punya, ikuti langkah Self Declare di OSS untuk mendapatkan NIB terlebih dahulu.',
    steps: [
      {
        title: 'Siapkan Dokumen',
        detail: 'Kumpulkan semua dokumen berikut dalam bentuk scan/foto jelas (format JPG/PNG/PDF, max 2MB per file):',
        items: [
          'KTP (Kartu Tanda Penduduk) — pastikan masih berlaku',
          'KK (Kartu Keluarga) — semua halaman',
          'NPWP (jika sudah punya) — kalau belum, bisa diurus dulu di pajak.go.id',
          'Pas Foto ukuran 3x4 latar merah/putih (2 lembar)',
          'Surat Keterangan Domisili Usaha dari kelurahan (jika diperlukan)',
          'Dokumen pendukung usaha (foto produk, brosur, dll)',
        ],
        tips: ['Simpan semua file dengan nama rapi: KTP_nama, KK_nama, NPWP_nama', 'Gunakan aplikasi scanner HP atau CamScanner', 'Pastikan file tidak buram dan teks terbaca jelas'],
      },
      {
        title: 'Buka Website OSS',
        detail: 'Buka portal OSS (Online Single Submission) melalui browser (Chrome/Edge/Firefox):',
        link: { url: 'https://oss.go.id', label: 'oss.go.id' },
        items: [
          'Klik tombol "Daftar" atau "Register" di pojok kanan atas',
          'Pilih "Akun Pelaku Usaha" sebagai jenis pendaftaran',
          'Masukkan email aktif dan nomor HP untuk verifikasi',
          'Cek email untuk kode OTP dan link verifikasi',
        ],
        tips: ['Gunakan email yang sering dicek (Gmail disarankan)', 'Catat password akun OSS di tempat aman', 'Password minimal 8 karakter, kombinasi huruf dan angka'],
      },
      {
        title: 'Login & Isi Profil Usaha',
        detail: 'Setelah akun terverifikasi, login ke dashboard OSS:',
        items: [
          'Masukkan email dan password yang sudah didaftarkan',
          'Klik menu "Data Pelaku Usaha" untuk melengkapi profil',
          'Isi data diri: NIK, nama lengkap, alamat, tanggal lahir — pastikan sesuai KTP',
          'Isi data usaha: nama usaha, bidang usaha, alamat usaha',
          'Pilih skala usaha "Usaha Mikro"',
          'Tentukan jenis bidang usaha (makanan/minuman/jasa, dll)',
          'Lengkapi data kontak: nomor HP, email, media sosial (jika ada)',
        ],
        tips: ['Data yang diisi harus SAMA PERSIS dengan KTP dan dokumen resmi', 'Jika ada perbedaan data, proses bisa ditolak', 'Gunakan nama usaha yang sesuai dengan izin usaha yang dimiliki'],
        masalah: [
          { judul: 'Data tidak valid', solusi: 'Periksa kembali NIK dan pastikan sesuai data Dukcapil. Cek di dukcapil.go.id jika perlu' },
          { judul: 'Email sudah terdaftar', solusi: 'Gunakan fitur "Lupa Password" untuk mereset akun lama' },
        ],
      },
      {
        title: 'Ajukan Pernyataan Mandiri Halal',
        detail: 'Setelah profil lengkap, ajukan pernyataan mandiri untuk sertifikat halal:',
        items: [
          'Di dashboard OSS, cari menu "Perizinan Berusaha" atau "PB UMK"',
          'Pilih "Pernyataan Mandiri" sebagai jenis permohonan',
          'Pilih sub-jenis: "Sertifikat Halal Self Declare"',
          'Baca dan pahami pernyataan yang muncul — ini adalah pernyataan resmi Anda',
          'Centang semua persyaratan yang sudah dipenuhi',
          'Upload dokumen yang sudah disiapkan di langkah 1',
          'Klik "Ajukan" atau "Submit" untuk mengirim permohonan',
        ],
        tips: ['Baca pernyataan dengan teliti sebelum mencentang', 'Jangan asal centang — pastikan Anda benar-benar memenuhi syarat', 'Proses ini gratis, tidak ada biaya apapun'],
        masalah: [
          { judul: 'Menu Self Declare tidak muncul', solusi: 'Pastikan skala usaha Anda terdaftar sebagai "Usaha Mikro". Jika tidak, ubah di profil usaha terlebih dahulu' },
          { judul: 'Dokumen ditolak sistem', solusi: 'Periksa format file (harus JPG/PNG/PDF), ukuran max 2MB, dan pastikan file tidak rusak' },
        ],
      },
      {
        title: 'Cetak NIB & Sertifikat Halal',
        detail: 'Setelah disetujui (biasanya 1-3 hari kerja), Anda bisa mencetak:',
        items: [
          'NIB (Nomor Induk Berusaha) — izin dasar usaha',
          'Sertifikat Halal — bukti legal produk halal',
          'Login ke OSS, buka menu "Perizinan Saya" atau "My License"',
          'Klik tombol "Cetak" atau "Download" untuk mengunduh dokumen PDF',
          'Simpan file PDF dan cetak untuk ditempel di tempat usaha',
        ],
        tips: ['Cetak NIB dan Sertifikat Halal di kertas berpura (minimal 80 gram)', 'Laminate dokumen agar awet', 'Tempel di tempat yang mudah terlihat oleh pelanggan'],
        masalah: [
          { judul: 'Sertifikat belum terbit setelah 7 hari', solusi: 'Hubungi call center OSS di 1500-677 atau email ke helpdesk@oss.go.id. Siapkan NIB untuk referensi' },
          { judul: 'Data NIB tidak sesuai', solusi: 'Ajukan perbaikan data melalui menu "Perbaikan Data" di dashboard OSS' },
        ],
      },
    ],
  },
  reguler: {
    title: 'Panduan Sertifikat Halal Reguler',
    intro: 'Skema Reguler untuk usaha kecil-menengah dengan omzet di atas Rp300 juta/tahun. Wajib melalui LPH (Lembaga Pemeriksa Halal) dan Sidang Fatwa MUI. Biaya bervariasi tergantung LPH, mulai Rp1-5 juta.',
    syaratUmum: [
      'Omzet di atas Rp300 juta/tahun',
      'Produk dan proses produksi kompleks',
      'Wajib audit oleh LPH terafiliasi MUI',
      'Harus memiliki NIB terlebih dahulu',
    ],
    penting: 'Proses reguler lebih panjang (30-60 hari) tapi sertifikat diakui secara nasional dan internasional. Biaya tergantung jumlah produk dan kompleksitas audit.',
    steps: [
      {
        title: 'Daftar Akun SIHALAL',
        detail: 'Buat akun di portal SIHALAL (Sistem Informasi Halal) BPJPH:',
        link: { url: 'https://ptsp.halal.go.id', label: 'ptsp.halal.go.id' },
        items: [
          'Klik "Daftar" dan pilih "Pelaku Usaha" sebagai jenis akun',
          'Masukkan NIK, nama lengkap, email, dan nomor HP',
          'Upload scan KTP dan NPWP untuk verifikasi akun',
          'Cek email untuk aktivasi akun',
          'Login menggunakan email dan password yang sudah diaktivasi',
        ],
        tips: ['Pastikan data NIK sama persis dengan KTP', 'Gunakan email yang sama dengan yang didaftarkan di OSS untuk sinkronisasi data'],
        masalah: [
          { judul: 'Verifikasi akun ditolak', solusi: 'Fotokopi KTP dan NPWP harus jelas dan sesuai data. Upload ulang dengan kualitas gambar lebih baik' },
        ],
      },
      {
        title: 'Upload Dokumen Persyaratan',
        detail: 'Setelah login, upload dokumen yang diperlukan:',
        items: [
          'Fotokopi KTP (yang sudah dilegalisir)',
          'Fotokopi NPWP',
          'NIB (Nomor Induk Berusaha)',
          'Daftar Produk dan Bahan yang digunakan — detail, termasuk bahan baku, bahan tambahan, dan bahan penolong',
          'Surat Pernyataan Kebenaran Dokumen (bermeterai Rp10.000)',
        ],
        tips: ['Buat daftar produk dan bahan dengan format Excel/PDF yang rapi', 'Sertakan nama pemasok untuk setiap bahan', 'Jika ada sertifikat halal dari supplier, lampirkan untuk mempercepat proses'],
      },
      {
        title: 'Pilih LPH (Lembaga Pemeriksa Halal)',
        detail: 'Pilih LPH yang terafiliasi dengan MUI untuk melakukan audit:',
        items: [
          'Di dashboard SIHALAL, pilih menu "Pilih LPH"',
          'Akan muncul daftar LPH yang tersedia di wilayah Anda',
          'Bandingkan biaya, estimasi waktu, dan reputasi masing-masing LPH',
          'Pilih LPH dan klik "Konfirmasi"',
          'LPH akan menghubungi Anda untuk negosiasi jadwal audit dan biaya',
        ],
        tips: ['Pilih LPH yang sudah berpengalaman dengan jenis usaha Anda', 'Minta kuitansi/resmi untuk biaya audit sebagai bukti pengeluaran', 'Beberapa LPH menawarkan paket bundling (audit + pendampingan)'],
        masalah: [
          { judul: 'Tidak ada LPH di daerah Anda', solusi: 'Hubungi BPJPH provinsi untuk informasi LPH terdekat. Bisa juga menggunakan LPH dari provinsi tetangga dengan biaya transportasi tambahan' },
        ],
      },
      {
        title: 'Jadwalkan & Ikuti Audit LPH',
        detail: 'Auditor LPH akan melakukan pemeriksaan langsung ke tempat usaha Anda:',
        items: [
          'Koordinasikan jadwal audit dengan LPH (pilih hari di mana produksi sedang berjalan normal)',
          'Siapkan seluruh dokumen asli untuk diperiksa auditor',
          'Siapkan area produksi yang bersih dan tertib — auditor akan melihat langsung',
          'Auditor akan mewawancarai pemilik dan karyawan terkait proses produksi',
          'Audit biasanya memakan waktu 2-4 jam tergantung kompleksitas usaha',
          'Setelah audit, LPH akan mengirimkan laporan hasil audit ke MUI',
        ],
        tips: ['Bersihkan area produksi sebelum audit', 'Siapkan karyawan yang paham proses produksi untuk diwawancarai', 'Jangan ragu bertanya ke auditor jika ada yang kurang jelas', 'Catat temuan auditor untuk perbaikan ke depannya'],
        masalah: [
          { judul: 'Audit gagal / tidak lulus', solusi: 'Auditor akan memberikan catatan perbaikan. Perbaiki sesuai rekomendasi dan ajukan audit ulang. Tidak perlu membayar penuh, cukup biaya audit ulang (biasanya diskon)' },
          { judul: 'Audit ditunda', solusi: 'Hubungi LPH untuk menjadwalkan ulang. Usahakan tidak menunda lebih dari 2 minggu karena akan memperpanjang proses' },
        ],
      },
      {
        title: 'Sidang Fatwa MUI',
        detail: 'Setelah laporan audit diterima, Komisi Fatwa MUI akan bersidang:',
        items: [
          'Laporan audit dari LPH akan direview oleh tim Komisi Fatwa MUI',
          'Jika ada kekurangan, MUI akan meminta klarifikasi tambahan',
          'Sidang Fatwa biasanya dilakukan secara periodik (1-2 kali sebulan)',
          'Keputusan ditetapkan dalam Sidang Komisi Fatwa MUI',
          'Anda akan mendapat notifikasi hasil sidang melalui SIHALAL',
        ],
        tips: ['Proses sidang fatwa biasanya memakan waktu 1-3 minggu', 'Tidak perlu hadir dalam sidang — cukup tunggu hasilnya', 'Jika ditolak, MUI akan memberikan alasan dan saran perbaikan'],
      },
      {
        title: 'Terbit Sertifikat Halal',
        detail: 'Setelah sidang fatwa menyetujui, sertifikat halal resmi terbit:',
        items: [
          'Sertifikat Halal diterbitkan oleh BPJPH berdasarkan penetapan fatwa MUI',
          'Anda akan mendapat notifikasi melalui email dan dashboard SIHALAL',
          'Download Sertifikat Halal dalam format PDF dari dashboard',
          'Sertifikat berlaku selama 4 tahun (wajib diperpanjang sebelum habis)',
          'Catat nomor sertifikat dan masa berlaku untuk pengingat perpanjangan',
        ],
        tips: ['Segera unduh sertifikat setelah notifikasi diterima', 'Simpan file digital di cloud (Google Drive, Dropbox) sebagai backup', 'Pasang logo halal di kemasan produk sesuai ketentuan BPJPH', 'Catat masa berlaku 4 tahun dan set pengingat perpanjangan 6 bulan sebelumnya'],
        masalah: [
          { judul: 'Sertifikat tidak kunjung terbit setelah fatwa', solusi: 'Hubungi BPJPH di call center 1500-676 atau email ke info@bpjph.go.id' },
          { judul: 'Data produk salah di sertifikat', solusi: 'Ajukan revisi melalui SIHALAL dengan melampirkan bukti data yang benar' },
        ],
      },
    ],
  },
  fasilitasi: {
    title: 'Panduan Fasilitasi & Bantuan UMKM',
    intro: 'Program fasilitasi pemerintah membantu UMKM mendapatkan sertifikasi halal GRATIS (SEHATI) dan bantuan modal (BPUM, KUR). Pantau terus karena program dibuka secara periodik.',
    penting: 'Fasilitasi paling populer adalah SEHATI (Sertifikasi Halal Gratis) — daftar di SIHALAL dengan memilih "Fasilitasi" sebagai jalur pendaftaran. Biaya ditanggung pemerintah.',
    steps: [
      {
        title: 'SEHATI (Sertifikasi Halal Gratis)',
        detail: 'Program SEHATI dari BPJPH untuk pelaku UMKM mendapatkan sertifikat halal GRATIS. Biaya sepenuhnya ditanggung pemerintah.',
        link: { url: 'https://ptsp.halal.go.id', label: 'Daftar di SIHALAL' },
        items: [
          'Login ke SIHALAL (ptsp.halal.go.id)',
          'Pilih menu "Daftar Sertifikasi Halal"',
          'Pilih jalur "Fasilitasi" atau "SEHATI"',
          'Isi data diri dan usaha',
          'Upload dokumen yang diminta',
          'Submit pendaftaran dan tunggu verifikasi',
          'Jika diterima, Anda akan mendapat SK Penetapan sebagai penerima fasilitasi',
          'Proses selanjutnya sama seperti Self Declare atau Reguler (tergantung skema yang dipilih)',
        ],
        tips: ['SEHATI dibuka secara periodik (biasanya per triwulan)', 'Pantau Instagram @bpjph atau website bpjph.go.id untuk info pembukaan', 'Siapkan dokumen JAUH-JAUH hari sebelum pendaftaran dibuka', 'Momentum terbaik: awal tahun anggaran (Jan-Maret) biasanya banyak kuota'],
        masalah: [
          { judul: 'Kuota SEHATI sudah penuh', solusi: 'Tunggu pembukaan gelombang berikutnya. Biasanya ada 3-4 gelombang per tahun. Manfaatkan waktu untuk melengkapi dokumen' },
          { judul: 'Tidak masuk kriteria penerima', solusi: 'Pastikan omzet di bawah Rp300jt untuk Self Declare atau di atasnya untuk Reguler. Cek persyaratan detail di website BPJPH' },
        ],
      },
      {
        title: 'BPUM / BLT UMKM',
        detail: 'Bantuan Presiden untuk Pelaku Usaha Mikro (BPUM) — bantuan langsung tunai Rp1,2 juta untuk usaha mikro yang terdampak ekonomi.',
        items: [
          'Cek informasi pembukaan BPUM di website Kemenkop UKM atau Dinas Koperasi setempat',
          'Syarat: WNI, memiliki usaha mikro, bukan ASN/TNI/POLRI, belum pernah menerima',
          'Siapkan KTP, KK, dan Surat Keterangan Usaha (SKU) dari kelurahan',
          'Daftar melalui Dinas Koperasi dan UKM kabupaten/kota',
          'Atau daftar online melalui website resmi Kemenkop UKM (jika dibuka)',
          'Tunggu verifikasi dan penetapan penerima',
          'Dana ditransfer langsung ke rekening penerima',
        ],
        tips: ['BPUM tidak dibuka setiap saat — pantau info terbaru', 'Bergabung dengan grup WA UMKM di daerah Anda untuk info cepat', 'Pastikan data rekening bank benar agar dana tidak gagal transfer'],
      },
      {
        title: 'KUR (Kredit Usaha Rakyat)',
        detail: 'Kredit modal kerja/investasi dengan bunga rendah (6% efektif per tahun) untuk pelaku UMKM. Tidak butuh agunan untuk pinjaman sampai Rp50 juta.',
        link: { url: 'https://kur.ekon.go.id', label: 'kur.ekon.go.id' },
        items: [
          'Datang ke bank penyalur KUR (BRI, BNI, Mandiri, BTN, BSI) terdekat',
          'Bawa dokumen: KTP, KK, NPWP, NIB, Surat Keterangan Usaha',
          'Isi formulir permohonan KUR di bank',
          'Bank akan melakukan survei ke tempat usaha',
          'Jika disetujui, dana cair dalam 3-7 hari kerja',
          'Pinjaman max Rp50 juta tanpa agunan, Rp500 juta dengan agunan',
        ],
        tips: ['Jangan meminjam lebih dari kemampuan bayar — hitung dulu cicilan per bulan', 'Gunakan KUR untuk pengembangan usaha, bukan untuk konsumtif', 'Bandungkan bunga antar bank sebelum memutuskan'],
      },
    ],
  },
  p3h: {
    title: 'Panduan Menjadi Pendamping Halal (P3H)',
    intro: 'Pendamping Proses Produk Halal (P3H) adalah profesi yang membantu pelaku UMKM dalam proses sertifikasi halal. Dengan menjadi P3H, Anda bisa mendapatkan insentif Rp4-20 juta dari pemerintah.',
    syaratUmum: [
      'Pendidikan minimal SMA/sederajat',
      'Mengikuti Bimtek P3H yang diselenggarakan BPJPH',
      'Lulus ujian kompetensi P3H',
      'Terdaftar di BPJPH sebagai P3H aktif',
    ],
    penting: 'Insentif P3H: Rp4-20 juta per pendamping per tahun (tergantung jumlah UMKM yang didampingi). Semakin banyak UMKM yang berhasil disertifikasi, semakin besar insentifnya.',
    steps: [
      {
        title: 'Cari Informasi Bimtek P3H',
        detail: 'Bimtek (Bimbingan Teknis) P3H diselenggarakan oleh BPJPH bekerja sama dengan perguruan tinggi, ormas Islam, dan lembaga pendamping.',
        items: [
          'Pantau website resmi BPJPH (bpjph.go.id) untuk jadwal bimtek',
          'Hubungi Kementerian Agama provinsi/kabupaten untuk info bimtek terdekat',
          'Cari informasi di grup sosial media: Facebook "Pendamping Halal Indonesia", WhatsApp group',
          'Perguruan tinggi dan pondok pesantren sering menjadi tuan rumah bimtek',
          'Biaya bimtek bervariasi: ada yang gratis (fasilitasi pemerintah) hingga Rp500 ribu (swadana)',
        ],
        tips: ['Bimtek gratis biasanya terbatas kuotanya — daftar segera setelah diumumkan', 'Bimtek online lebih fleksibel, bimtek offline lebih interaktif', 'Pilih bimtek yang sudah terverifikasi BPJPH — tanyakan nomor registrasi kegiatan'],
        link: { url: 'https://bpjph.go.id', label: 'bpjph.go.id' },
      },
      {
        title: 'Ikuti Bimtek P3H',
        detail: 'Bimtek biasanya dilaksanakan 3-5 hari, mencakup materi:',
        items: [
          'Kebijakan Jaminan Produk Halal (JPH) di Indonesia',
          'Regulasi: UU No. 33/2014, PP No. 39/2021, PMA No. 26/2019',
          'Tata cara pendampingan self declare',
          'Penggunaan aplikasi SIHALAL untuk pendamping',
          'Teknik wawancara dan verifikasi kesesuaian produk',
          'Pengisian formulir dan dokumen pendampingan',
          'Simulasi pendampingan langsung',
        ],
        tips: ['Catat materi penting — akan diujikan di ujian kompetensi', 'Bertanyalah jika ada yang kurang jelas — ini kesempatan belajar langsung', 'Kenali sesama peserta untuk jaringan (networking) ke depannya'],
      },
      {
        title: 'Ikuti Ujian Kompetensi P3H',
        detail: 'Setelah bimtek, Anda harus mengikuti ujian kompetensi untuk mendapatkan sertifikat P3H:',
        items: [
          'Ujian dilaksanakan oleh Lembaga Sertifikasi Kompetensi (LSK) yang ditunjuk BPJPH',
          'Materi ujian: pengetahuan regulasi, proses pendampingan, etika pendamping, simulasi kasus',
          'Bentuk ujian: pilihan ganda + studi kasus + wawancara',
          'Nilai minimal kelulusan: 70 (skala 100)',
          'Jika tidak lulus, bisa mengulang di periode berikutnya (ada biaya pendaftaran ulang)',
        ],
        tips: ['Pelajari modul bimtek dengan baik sebelum ujian', 'Fokus pada alur pendampingan self declare — ini yang utama', 'Latihan studi kasus: bagaimana membantu UMKM yang dokumennya tidak lengkap', 'Tenang dan percaya diri saat ujian'],
        masalah: [
          { judul: 'Tidak lulus ujian', solusi: 'Jangan putus asa. Catat materi yang lemah, belajar lagi, dan ikut ujian ulang. Banyak P3H yang baru lulus di percobaan kedua' },
        ],
      },
      {
        title: 'Terbit SK P3H & Daftar BPJPH',
        detail: 'Setelah lulus ujian, Anda akan mendapat Surat Keterangan (SK) sebagai P3H:',
        items: [
          'SK diterbitkan oleh BPJPH melalui sistem SIHALAL',
          'Anda terdaftar resmi sebagai P3H di database BPJPH',
          'Anda akan mendapat akun pendamping di SIHALAL',
          'Login ke SIHALAL untuk melihat dashboard pendamping',
          'Lengkapi profil sebagai pendamping di SIHALAL',
          'Anda siap mulai mendampingi pelaku UMKM',
        ],
        tips: ['Segera lengkapi profil pendamping setelah SK terbit', 'Aktifkan notifikasi SIHALAL agar tidak ketinggalan info', 'Miliki kartu P3H fisik sebagai identitas saat ke lapangan'],
      },
      {
        title: 'Mulai Pendampingan & Dapat Insentif',
        detail: 'Sebagai P3H Anda mendampingi UMKM dan mendapat insentif:',
        items: [
          'Cari pelaku UMKM yang membutuhkan sertifikasi halal (self declare)',
          'Bantu UMKM menyiapkan dokumen yang diperlukan',
          'Daftarkan UMKM binaan Anda melalui akun pendamping di SIHALAL',
          'Lakukan pendampingan: verifikasi kesesuaian produk, wawancara, dokumentasi',
          'Setiap UMKM yang berhasil terbit sertifikatnya, Anda mendapat poin',
          'Insentif dihitung per UMKM yang berhasil didampingi: Rp100-500 ribu per UMKM',
          'Insentif total per tahun: Rp4-20 juta tergantung jumlah UMKM binaan',
          'Insentif dicairkan oleh BPJPH setiap triwulan melalui transfer bank',
        ],
        tips: ['Targetkan 20-40 UMKM per tahun untuk insentif maksimal', 'Bangun kerjasama dengan kelurahan, koperasi, atau komunitas UMKM', 'Dokumentasikan setiap proses pendampingan dengan baik', 'Jaga hubungan baik dengan UMKM binaan — mereka bisa menjadi sumber referral'],
        masalah: [
          { judul: 'Insentif telat cair', solusi: 'Hubungi BPJPH atau Dinas Koperasi setempat. Biasanya keterlambatan karena proses administrasi. Siapkan bukti pendampingan lengkap' },
          { judul: 'UMKM binaan tidak lolos', solusi: 'Bantu perbaiki kekurangan dan daftarkan lagi. Evaluasi apa yang kurang dari proses pendampingan Anda' },
        ],
      },
    ],
  },
}

/* ===== Helpers ===== */

function saveState() {
  try { localStorage.setItem('appState', JSON.stringify(App.state)) } catch (e) {}
}

function loadState() {
  try {
    const saved = localStorage.getItem('appState')
    if (saved) {
      const parsed = JSON.parse(saved)
      parsed.clients.forEach((c, i) => {
        if (!c.permits.fasilitasi.registrations) {
          c.permits.fasilitasi.registrations = [
            { id: 'fs-r1', program: 'SEHATI', tglDaftar: '', status: 'Belum daftar', notes: '' },
            { id: 'fs-r2', program: 'BPUM', tglDaftar: '', status: 'Belum daftar', notes: '' },
            { id: 'fs-r3', program: 'KUR', tglDaftar: '', status: 'Belum daftar', notes: '' },
          ]
        }
        if (!c.permits.reguler.monitoring) {
          c.permits.reguler.monitoring = [
            { tahap: 'Pendaftaran', status: 'Belum', tgl: '-', catatan: '' },
            { tahap: 'Verifikasi', status: 'Belum', tgl: '-', catatan: '' },
            { tahap: 'Audit', status: 'Belum', tgl: '-', catatan: '' },
            { tahap: 'Fatwa', status: 'Belum', tgl: '-', catatan: '' },
          ]
        }
      })
      Object.assign(App.state, parsed)
    }
  } catch (e) {}
}

function getProgress(steps) {
  if (!steps || steps.length === 0) return 0
  return Math.round((steps.filter(s => s.done).length / steps.length) * 100)
}

function getDocProgress(docs) {
  if (!docs || docs.length === 0) return 0
  return Math.round((docs.filter(d => d.collected).length / docs.length) * 100)
}

function getStatusBadge(status) {
  const map = {
    not_started: '<span class="tag tag-danger">Belum dimulai</span>',
    in_progress: '<span class="tag tag-warning">Proses</span>',
    submitted: '<span class="tag tag-warning">Sudah diajukan</span>',
    completed: '<span class="tag tag-success">Selesai</span>',
  }
  return map[status] || '<span class="tag tag-danger">Belum</span>'
}

function client() {
  return App.state.clients.find(c => c.id === App.state.activeClientId)
}

function getStepStatusClass(step, steps) {
  const idx = steps.indexOf(step)
  const allPrevDone = steps.slice(0, idx).every(s => s.done)
  if (step.done) return 'done'
  if (allPrevDone) return 'active'
  return 'pending'
}

/* ===== Client Selector ===== */

function renderClientSelector() {
  const c = client()
  return `
    <div class="client-bar">
      <select id="clientSelect" class="client-select">
        <option value="">-- Pilih klien --</option>
        ${App.state.clients.map(cl => `
          <option value="${cl.id}" ${cl.id === App.state.activeClientId ? 'selected' : ''}>
            ${cl.businessName || cl.name}
          </option>
        `).join('')}
      </select>
      <button id="addClientBtn" class="btn btn-sm" title="Tambah klien">+ Klien Baru</button>
      ${c ? `<button id="editClientBtn" class="btn btn-sm btn-outline" title="Edit data klien">&#9998;</button>` : ''}
    </div>
  `
}

function renderClientDetail(c) {
  if (!c) return '<p style="color:var(--text-secondary);">Pilih klien terlebih dahulu.</p>'
  return `
    <div class="card client-info-card">
      <div style="display:flex;justify-content:space-between;align-items:start;">
        <div>
          <h3 style="margin-bottom:0.25rem;">${c.businessName}</h3>
          <p style="color:var(--text-secondary);font-size:0.85rem;">${c.name} &middot; ${c.nik}</p>
          <p style="color:var(--text-secondary);font-size:0.85rem;">${c.address}</p>
        </div>
        <div style="text-align:right;font-size:0.85rem;">
          <div>NIB: <strong>${c.permits.selfDeclare.nib || '-'}</strong></div>
          <div style="color:var(--text-secondary);">${c.phone}</div>
        </div>
      </div>
    </div>
  `
}

/* ===== Tutorial Renderer ===== */

function renderTutorial(moduleKey) {
  const t = TUTORIALS[moduleKey]
  if (!t) return ''
  return `
    <div class="card tutorial-card">
      <h3 class="tutorial-title">${t.title}</h3>
      <p class="tutorial-intro">${t.intro}</p>

      ${t.syaratUmum ? `
        <div class="tutorial-section">
          <h4>&#9679; Syarat Umum</h4>
          <ul class="tutorial-list">
            ${t.syaratUmum.map(s => `<li>${s}</li>`).join('')}
          </ul>
        </div>
      ` : ''}

      ${t.penting ? `
        <div class="tutorial-section tutorial-penting">
          <strong>&#9888; PENTING:</strong> ${t.penting}
        </div>
      ` : ''}

      <div class="tutorial-section">
        <h4>&#9679; Panduan Langkah demi Langkah</h4>
      </div>

      ${t.steps.map((step, idx) => `
        <div class="tutorial-step">
          <div class="tutorial-step-header" onclick="toggleTutorial(this)">
            <span class="tutorial-step-num">${idx + 1}</span>
            <span class="tutorial-step-title">${step.title}</span>
            <span class="tutorial-toggle">&#9660;</span>
          </div>
          <div class="tutorial-step-body">
            <p>${step.detail}</p>
            ${step.link ? `
              <p style="margin:0.5rem 0;">
                <a href="${step.link.url}" target="_blank" rel="noopener" class="tutorial-link">
                  &#8594; ${step.link.label}
                </a>
              </p>
            ` : ''}
            <ul class="tutorial-list">
              ${step.items.map(i => `<li>${i}</li>`).join('')}
            </ul>
            ${step.tips ? `
              <div class="tutorial-tips">
                <strong>&#128161; Tips:</strong>
                <ul>
                  ${step.tips.map(t => `<li>${t}</li>`).join('')}
                </ul>
              </div>
            ` : ''}
            ${step.masalah ? `
              <div class="tutorial-masalah">
                <strong>&#9888; Masalah & Solusi:</strong>
                ${step.masalah.map(m => `
                  <div class="masalah-item">
                    <div class="masalah-judul">&#9679; ${m.judul}</div>
                    <div class="masalah-solusi">${m.solusi}</div>
                  </div>
                `).join('')}
              </div>
            ` : ''}
          </div>
        </div>
      `).join('')}
    </div>`
}

function toggleTutorial(header) {
  const body = header.nextElementSibling
  const toggle = header.querySelector('.tutorial-toggle')
  if (body.style.display === 'none' || body.style.display === '') {
    body.style.display = 'block'
    toggle.innerHTML = '&#9660;'
  } else {
    body.style.display = 'none'
    toggle.innerHTML = '&#9654;'
  }
}

/* ===== View Renderers ===== */

function renderDashboard() {
  const activeClient = client()
  return `
    <div class="view active" id="view-dashboard">
      <div class="view-header">
        <h1>Dashboard</h1>
        <p>Kelola klien dan pantau progress perizinan UMKM</p>
      </div>
      ${renderClientSelector()}

      ${!activeClient ? renderNoClient() : ''}

      ${activeClient ? renderClientDetail(activeClient) : ''}

      ${activeClient ? `
        <div class="stats-grid">
          ${['selfDeclare','reguler','fasilitasi','p3h'].map(key => {
            const info = PERMIT_INFO[key]
            const p = activeClient.permits[key]
            const prog = getProgress(p.steps)
            return `
              <div class="stat-card ${prog === 100 ? 'success' : prog > 0 ? 'warning' : 'danger'}" style="cursor:pointer;" onclick="navigate('${key}')">
                <div class="stat-number">${prog}%</div>
                <div class="stat-label">${info.title}</div>
                <div class="progress-bar"><div class="fill" style="width:${prog}%"></div></div>
                <div style="margin-top:0.5rem;">${getStatusBadge(p.status)}</div>
              </div>
            `
          }).join('')}
        </div>
      ` : ''}

      ${activeClient ? `
        <div class="card">
          <h3>Semua Klien</h3>
          ${renderClientTable()}
        </div>
      ` : ''}
    </div>`
}

function renderClientTable() {
  if (App.state.clients.length === 0) return '<p style="color:var(--text-secondary);">Belum ada klien. Tambahkan klien baru untuk mulai.</p>'
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Nama</th><th>Usaha</th><th>Self Declare</th><th>Reguler</th><th>Fasilitasi</th><th>P3H</th></tr></thead>
        <tbody>
          ${App.state.clients.map(c => `
            <tr style="cursor:pointer;" onclick="selectClient('${c.id}');navigate('dashboard')">
              <td><strong>${c.name}</strong></td>
              <td>${c.businessName}</td>
              <td>${getStatusBadge(c.permits.selfDeclare.status)}</td>
              <td>${getStatusBadge(c.permits.reguler.status)}</td>
              <td>${getStatusBadge(c.permits.fasilitasi.status)}</td>
              <td>${getStatusBadge(c.permits.p3h.status)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `
}

function renderNoClient() {
  return `
    <div class="card" style="text-align:center;padding:2rem;">
      <p style="color:var(--text-secondary);margin-bottom:1rem;">Pilih klien yang sudah ada atau tambah klien baru</p>
      ${App.state.clients.length > 0 ? `
        <div style="display:flex;flex-wrap:wrap;gap:0.5rem;justify-content:center;">
          ${App.state.clients.map(c => `
            <button class="btn" onclick="selectClient('${c.id}');navigate('dashboard')">${c.businessName || c.name}</button>
          `).join('')}
        </div>
      ` : '<p style="color:var(--text-secondary);">Belum ada klien.</p>'}
    </div>
  `
}

/* ===== Self Declare ===== */

function renderSelfDeclare() {
  if (!client()) return renderNoClientPage('self-declare')
  const c = client()
  const p = c.permits.selfDeclare
  const prog = getProgress(p.steps)
  const docProg = getDocProgress(p.documents)
  return `
    <div class="view active" id="view-self-declare">
      <div class="view-header">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div>
            <h1>Self Declare</h1>
            <p>${c.businessName} &middot; ${PERMIT_INFO.selfDeclare.desc}</p>
          </div>
          <div style="text-align:right;font-size:0.85rem;">
            ${getStatusBadge(p.status)}
          </div>
        </div>
      </div>

      ${renderTutorial('selfDeclare')}

      <div class="card">
        <div style="display:flex;justify-content:space-between;">
          <h3>Progress Tahapan</h3>
          <span style="font-size:0.9rem;font-weight:600;">${p.steps.filter(s=>s.done).length}/${p.steps.length}</span>
        </div>
        <div class="progress-bar"><div class="fill" style="width:${prog}%"></div></div>
      </div>

      <div class="card">
        <h3>NIB (Nomor Induk Berusaha)</h3>
        <div style="display:flex;gap:0.5rem;">
          <input type="text" id="sdNib" value="${p.nib}" placeholder="Masukkan NIB..." style="flex:1;">
        </div>
      </div>

      <div class="card">
        <h3>Tracking Langkah</h3>
        <p style="color:var(--text-secondary);font-size:0.85rem;margin-bottom:0.75rem;">Centang setiap langkah yang sudah selesai, isi tanggal dan catatan.</p>
        <div class="timeline">
          ${p.steps.map((step, i, arr) => {
            const cls = getStepStatusClass(step, arr)
            return `
              <div class="timeline-item ${cls}">
                <div class="step-label">${step.label}</div>
                <div class="step-desc">${step.desc}</div>
                <div style="display:flex;justify-content:space-between;align-items:center;margin-top:0.25rem;">
                  <div class="step-status">
                    ${cls === 'done' ? '&#10003; Selesai' : cls === 'active' ? '&#9679; Proses' : '&#9672; Tunggu'}
                  </div>
                  <div style="display:flex;gap:0.5rem;align-items:center;">
                    <input type="checkbox" id="sd-step-${step.id}" ${step.done ? 'checked' : ''} data-step="${step.id}" data-module="selfDeclare" style="accent-color:var(--success);">
                    <input type="date" id="sd-date-${step.id}" value="${step.date}" data-step="${step.id}" data-module="selfDeclare" style="width:140px;font-size:0.8rem;padding:0.2rem 0.4rem;">
                  </div>
                </div>
                <textarea id="sd-note-${step.id}" rows="2" placeholder="Catatan..." data-step="${step.id}" data-module="selfDeclare" style="font-size:0.8rem;margin-top:0.25rem;">${step.notes}</textarea>
              </div>
            `
          }).join('')}
        </div>
      </div>

      <div class="card">
        <div style="display:flex;justify-content:space-between;">
          <h3>Dokumen</h3>
          <span style="font-size:0.9rem;font-weight:600;">${p.documents.filter(d=>d.collected).length}/${p.documents.length}</span>
        </div>
        <div class="progress-bar"><div class="fill" style="width:${docProg}%"></div></div>
        <ul class="checklist" style="margin-top:0.75rem;">
          ${p.documents.map(doc => `
            <li class="${doc.collected ? 'checked' : ''}" data-doc="${doc.id}" data-module="selfDeclare">
              <input type="checkbox" ${doc.collected ? 'checked' : ''}>
              <span class="checklist-text">${doc.name}</span>
              <input type="text" value="${doc.notes}" placeholder="Ket." style="margin-left:auto;width:200px;font-size:0.8rem;padding:0.2rem 0.4rem;">
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="card">
        <h3>Catatan</h3>
        <textarea id="sdNotes" rows="4">${p.notes}</textarea>
      </div>
    </div>`
}

/* ===== Reguler ===== */

function renderReguler() {
  if (!client()) return renderNoClientPage('reguler')
  const c = client()
  const p = c.permits.reguler
  const prog = getProgress(p.steps)
  const docProg = getDocProgress(p.documents)
  return `
    <div class="view active" id="view-reguler">
      <div class="view-header">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div>
            <h1>Reguler (Sertifikasi Halal)</h1>
            <p>${c.businessName} &middot; ${PERMIT_INFO.reguler.desc}</p>
          </div>
          <div>${getStatusBadge(p.status)}</div>
        </div>
      </div>

      ${renderTutorial('reguler')}

      <div class="card">
        <div style="display:flex;justify-content:space-between;">
          <h3>Progress Tahapan</h3>
          <span style="font-size:0.9rem;font-weight:600;">${p.steps.filter(s=>s.done).length}/${p.steps.length}</span>
        </div>
        <div class="progress-bar"><div class="fill" style="width:${prog}%"></div></div>
      </div>

      <div class="card">
        <h3>Tracking Langkah</h3>
        <p style="color:var(--text-secondary);font-size:0.85rem;margin-bottom:0.75rem;">Centang setiap langkah yang sudah selesai, isi tanggal dan catatan.</p>
        <div class="timeline">
          ${p.steps.map((step, i, arr) => {
            const cls = getStepStatusClass(step, arr)
            return `
              <div class="timeline-item ${cls}">
                <div class="step-label">${step.label}</div>
                <div class="step-desc">${step.desc}</div>
                <div style="display:flex;justify-content:space-between;align-items:center;margin-top:0.25rem;">
                  <div class="step-status">
                    ${cls === 'done' ? '&#10003; Selesai' : cls === 'active' ? '&#9679; Proses' : '&#9672; Tunggu'}
                  </div>
                  <div style="display:flex;gap:0.5rem;align-items:center;">
                    <input type="checkbox" id="rg-step-${step.id}" ${step.done ? 'checked' : ''} data-step="${step.id}" data-module="reguler">
                    <input type="date" id="rg-date-${step.id}" value="${step.date}" data-step="${step.id}" data-module="reguler" style="width:140px;font-size:0.8rem;padding:0.2rem 0.4rem;">
                  </div>
                </div>
                <textarea id="rg-note-${step.id}" rows="2" placeholder="Catatan..." data-step="${step.id}" data-module="reguler" style="font-size:0.8rem;margin-top:0.25rem;">${step.notes}</textarea>
              </div>
            `
          }).join('')}
        </div>
      </div>

      <div class="card">
        <div style="display:flex;justify-content:space-between;">
          <h3>Dokumen</h3>
          <span style="font-size:0.9rem;font-weight:600;">${p.documents.filter(d=>d.collected).length}/${p.documents.length}</span>
        </div>
        <div class="progress-bar"><div class="fill" style="width:${docProg}%"></div></div>
        <ul class="checklist" style="margin-top:0.75rem;">
          ${p.documents.map(doc => `
            <li class="${doc.collected ? 'checked' : ''}" data-doc="${doc.id}" data-module="reguler">
              <input type="checkbox" ${doc.collected ? 'checked' : ''}>
              <span class="checklist-text">${doc.name}</span>
              <input type="text" value="${doc.notes}" placeholder="Ket." style="margin-left:auto;width:200px;font-size:0.8rem;padding:0.2rem 0.4rem;">
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="card">
        <h3>Monitoring Status</h3>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Tahap</th><th>Status</th><th>Tanggal</th><th>Catatan</th></tr></thead>
            <tbody>
              ${p.monitoring.map((m, i) => `
                <tr>
                  <td>${m.tahap}</td>
                  <td>
                    <select data-mon-idx="${i}" data-module="reguler" class="mon-status" style="width:100%;">
                      <option value="Belum" ${m.status === 'Belum' ? 'selected' : ''}>Belum</option>
                      <option value="Proses" ${m.status === 'Proses' ? 'selected' : ''}>Proses</option>
                      <option value="Selesai" ${m.status === 'Selesai' ? 'selected' : ''}>Selesai</option>
                    </select>
                  </td>
                  <td><input type="date" value="${m.tgl !== '-' ? m.tgl : ''}" data-mon-idx="${i}" data-module="reguler" class="mon-date" style="width:100%;font-size:0.8rem;"></td>
                  <td><input type="text" value="${m.catatan}" data-mon-idx="${i}" data-module="reguler" class="mon-notes" style="width:100%;font-size:0.8rem;"></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <div class="card">
        <h3>Catatan</h3>
        <textarea id="rgNotes" rows="4">${p.notes}</textarea>
      </div>
    </div>`
}

/* ===== Fasilitasi ===== */

function renderFasilitasi() {
  if (!client()) return renderNoClientPage('fasilitasi')
  const c = client()
  const p = c.permits.fasilitasi
  const prog = getProgress(p.steps)
  return `
    <div class="view active" id="view-fasilitasi">
      <div class="view-header">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div>
            <h1>Fasilitasi</h1>
            <p>${c.businessName} &middot; ${PERMIT_INFO.fasilitasi.desc}</p>
          </div>
          <div>${getStatusBadge(p.status)}</div>
        </div>
      </div>

      ${renderTutorial('fasilitasi')}

      <div class="card">
        <div style="display:flex;justify-content:space-between;">
          <h3>Progress Tahapan</h3>
          <span style="font-size:0.9rem;font-weight:600;">${p.steps.filter(s=>s.done).length}/${p.steps.length}</span>
        </div>
        <div class="progress-bar"><div class="fill" style="width:${prog}%"></div></div>
      </div>

      <div class="card">
        <h3>Tracking Langkah</h3>
        <p style="color:var(--text-secondary);font-size:0.85rem;margin-bottom:0.75rem;">Centang setiap langkah yang sudah selesai.</p>
        <div class="timeline">
          ${p.steps.map((step, i, arr) => {
            const cls = getStepStatusClass(step, arr)
            return `
              <div class="timeline-item ${cls}">
                <div class="step-label">${step.label}</div>
                <div class="step-desc">${step.desc}</div>
                <div style="display:flex;justify-content:space-between;align-items:center;margin-top:0.25rem;">
                  <div class="step-status">${cls === 'done' ? '&#10003; Selesai' : cls === 'active' ? '&#9679; Proses' : '&#9672; Tunggu'}</div>
                  <div style="display:flex;gap:0.5rem;align-items:center;">
                    <input type="checkbox" id="fs-step-${step.id}" ${step.done ? 'checked' : ''} data-step="${step.id}" data-module="fasilitasi">
                    <input type="date" id="fs-date-${step.id}" value="${step.date}" data-step="${step.id}" data-module="fasilitasi" style="width:140px;font-size:0.8rem;padding:0.2rem 0.4rem;">
                  </div>
                </div>
                <textarea id="fs-note-${step.id}" rows="2" placeholder="Catatan..." data-step="${step.id}" data-module="fasilitasi" style="font-size:0.8rem;margin-top:0.25rem;">${step.notes}</textarea>
              </div>
            `
          }).join('')}
        </div>
      </div>

      <div class="card">
        <h3>Tracking Program</h3>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Program</th><th>Tgl Daftar</th><th>Status</th><th>Catatan</th></tr></thead>
            <tbody>
              ${p.registrations.map((reg, i) => `
                <tr>
                  <td>${reg.program}</td>
                  <td><input type="date" value="${reg.tglDaftar}" data-reg="${i}" class="fs-reg-date" style="width:100%;font-size:0.8rem;"></td>
                  <td>
                    <select data-reg="${i}" class="fs-reg-status" style="width:100%;">
                      <option value="Belum daftar" ${reg.status === 'Belum daftar' ? 'selected' : ''}>Belum daftar</option>
                      <option value="Proses daftar" ${reg.status === 'Proses daftar' ? 'selected' : ''}>Proses daftar</option>
                      <option value="Sudah daftar" ${reg.status === 'Sudah daftar' ? 'selected' : ''}>Sudah daftar</option>
                      <option value="Diterima" ${reg.status === 'Diterima' ? 'selected' : ''}>Diterima</option>
                      <option value="Ditolak" ${reg.status === 'Ditolak' ? 'selected' : ''}>Ditolak</option>
                    </select>
                  </td>
                  <td><input type="text" value="${reg.notes}" data-reg="${i}" class="fs-reg-notes" style="width:100%;font-size:0.8rem;"></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <div class="card">
        <h3>Program Bantuan Tersedia</h3>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Program</th><th>Sumber</th><th>Status</th></tr></thead>
            <tbody>
              <tr><td>BPUM (BLT UMKM)</td><td>Kemenkop UKM</td><td><span class="tag tag-warning">Cek berkala</span></td></tr>
              <tr><td>KUR (Kredit Usaha Rakyat)</td><td>Perbankan</td><td><span class="tag tag-success">Tersedia</span></td></tr>
              <tr><td>SEHATI (Sertifikasi Halal Gratis)</td><td>BPJPH</td><td><span class="tag tag-success">Tersedia</span></td></tr>
              <tr><td>Pelatihan UMKM</td><td>Dinas Koperasi</td><td><span class="tag tag-warning">Pendaftaran</span></td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="card">
        <h3>Catatan</h3>
        <textarea id="fsNotes" rows="4">${p.notes}</textarea>
      </div>
    </div>`
}

/* ===== P3H ===== */

function renderP3H() {
  if (!client()) return renderNoClientPage('p3h')
  const c = client()
  const p = c.permits.p3h
  const prog = getProgress(p.steps)
  const docProg = getDocProgress(p.documents)
  return `
    <div class="view active" id="view-p3h">
      <div class="view-header">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div>
            <h1>Pendamping Halal (P3H)</h1>
            <p>${c.businessName} &middot; ${PERMIT_INFO.p3h.desc}</p>
          </div>
          <div>${getStatusBadge(p.status)}</div>
        </div>
      </div>

      ${renderTutorial('p3h')}

      <div class="card">
        <div style="display:flex;justify-content:space-between;">
          <h3>Progress Tahapan</h3>
          <span style="font-size:0.9rem;font-weight:600;">${p.steps.filter(s=>s.done).length}/${p.steps.length}</span>
        </div>
        <div class="progress-bar"><div class="fill" style="width:${prog}%"></div></div>
      </div>

      <div class="card">
        <h3>Tracking Langkah</h3>
        <p style="color:var(--text-secondary);font-size:0.85rem;margin-bottom:0.75rem;">Centang setiap langkah yang sudah selesai.</p>
        <div class="timeline">
          ${p.steps.map((step, i, arr) => {
            const cls = getStepStatusClass(step, arr)
            return `
              <div class="timeline-item ${cls}">
                <div class="step-label">${step.label}</div>
                <div class="step-desc">${step.desc}</div>
                <div style="display:flex;justify-content:space-between;align-items:center;margin-top:0.25rem;">
                  <div class="step-status">${cls === 'done' ? '&#10003; Selesai' : cls === 'active' ? '&#9679; Proses' : '&#9672; Tunggu'}</div>
                  <div style="display:flex;gap:0.5rem;align-items:center;">
                    <input type="checkbox" id="p3-step-${step.id}" ${step.done ? 'checked' : ''} data-step="${step.id}" data-module="p3h">
                    <input type="date" id="p3-date-${step.id}" value="${step.date}" data-step="${step.id}" data-module="p3h" style="width:140px;font-size:0.8rem;padding:0.2rem 0.4rem;">
                  </div>
                </div>
                <textarea id="p3-note-${step.id}" rows="2" placeholder="Catatan..." data-step="${step.id}" data-module="p3h" style="font-size:0.8rem;margin-top:0.25rem;">${step.notes}</textarea>
              </div>
            `
          }).join('')}
        </div>
      </div>

      <div class="card">
        <div style="display:flex;justify-content:space-between;">
          <h3>Dokumen</h3>
          <span style="font-size:0.9rem;font-weight:600;">${p.documents.filter(d=>d.collected).length}/${p.documents.length}</span>
        </div>
        <div class="progress-bar"><div class="fill" style="width:${docProg}%"></div></div>
        <ul class="checklist" style="margin-top:0.75rem;">
          ${p.documents.map(doc => `
            <li class="${doc.collected ? 'checked' : ''}" data-doc="${doc.id}" data-module="p3h">
              <input type="checkbox" ${doc.collected ? 'checked' : ''}>
              <span class="checklist-text">${doc.name}</span>
              <input type="text" value="${doc.notes}" placeholder="Ket." style="margin-left:auto;width:200px;font-size:0.8rem;padding:0.2rem 0.4rem;">
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="card">
        <h3>Referensi Regulasi</h3>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Peraturan</th><th>Tentang</th></tr></thead>
            <tbody>
              <tr><td>UU No. 33/2014</td><td>Jaminan Produk Halal</td></tr>
              <tr><td>PP No. 39/2021</td><td>Penyelenggaraan JPH</td></tr>
              <tr><td>PMA No. 26/2019</td><td>Sertifikasi Halal</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="card">
        <h3>Catatan</h3>
        <textarea id="p3Notes" rows="4">${p.notes}</textarea>
      </div>
    </div>`
}

function renderNoClientPage(returnPage) {
  return `
    <div class="view active">
      <div class="view-header">
        <h1>Pilih Klien</h1>
        <p>Pilih klien terlebih dahulu untuk mengelola perizinan</p>
      </div>
      <div class="card" style="text-align:center;padding:2rem;">
        ${App.state.clients.length > 0 ? `
          <p style="color:var(--text-secondary);margin-bottom:1rem;">Pilih klien:</p>
          <div style="display:flex;flex-wrap:wrap;gap:0.5rem;justify-content:center;">
            ${App.state.clients.map(c => `
              <button class="btn" onclick="selectClient('${c.id}');navigate('${returnPage}')">${c.businessName || c.name}</button>
            `).join('')}
          </div>
        ` : '<p style="color:var(--text-secondary);">Belum ada klien. Tambahkan dari Dashboard.</p>'}
        <div style="margin-top:1rem;">
          <a href="#dashboard" class="btn btn-outline">&#8592; Kembali ke Dashboard</a>
        </div>
      </div>
    </div>`
}

/* ===== Navigation ===== */

const routes = {
  dashboard: { title: 'Dashboard', render: renderDashboard },
  'self-declare': { title: 'Self Declare', render: renderSelfDeclare },
  reguler: { title: 'Reguler', render: renderReguler },
  fasilitasi: { title: 'Fasilitasi', render: renderFasilitasi },
  p3h: { title: 'Pendamping Halal', render: renderP3H },
}

function selectClient(id) {
  App.state.activeClientId = id
  saveState()
}

function navigate(page) {
  App.state.page = page
  saveState()
  const route = routes[page] || routes.dashboard
  document.getElementById('viewContainer').innerHTML = route.render()
  document.title = route.title + ' - Perizinan UMKM'

  document.querySelectorAll('#sidebarNav a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page)
  })

  bindEvents(page)
}

/* ===== Event Binding ===== */

function bindEvents(page) {
  const c = client()

  document.getElementById('clientSelect')?.addEventListener('change', e => {
    selectClient(e.target.value)
    navigate(App.state.page)
  })

  document.getElementById('addClientBtn')?.addEventListener('click', () => {
    const id = 'c' + Date.now()
    const defaultPermits = {
      selfDeclare: {
        status: 'not_started', nib: '',
        steps: [
          { id: 'sd-s1', label: 'Siapkan Dokumen', desc: 'KTP, KK, NPWP, domisili', done: false, date: '', notes: '' },
          { id: 'sd-s2', label: 'Daftar Akun OSS', desc: 'Buat akun di oss.go.id', done: false, date: '', notes: '' },
          { id: 'sd-s3', label: 'Isi Data Diri & Usaha', desc: 'Lengkapi profil di OSS', done: false, date: '', notes: '' },
          { id: 'sd-s4', label: 'Submit Pernyataan Mandiri', desc: 'Klik pernyataan mandiri di OSS', done: false, date: '', notes: '' },
          { id: 'sd-s5', label: 'Cetak NIB', desc: 'Unduh dan cetak NIB', done: false, date: '', notes: '' },
        ],
        documents: [
          { id: 'sd-d1', name: 'KTP', collected: false, notes: '' },
          { id: 'sd-d2', name: 'Kartu Keluarga', collected: false, notes: '' },
          { id: 'sd-d3', name: 'NPWP', collected: false, notes: '' },
          { id: 'sd-d4', name: 'Pas Foto 3x4', collected: false, notes: '' },
          { id: 'sd-d5', name: 'Surat Domisili Usaha', collected: false, notes: '' },
        ],
        notes: '',
      },
      reguler: {
        status: 'not_started', nib: '',
        steps: [
          { id: 'rg-s1', label: 'Daftar Akun SIHALAL', desc: 'Buat akun di ptsp.halal.go.id', done: false, date: '', notes: '' },
          { id: 'rg-s2', label: 'Upload Dokumen', desc: 'Scan KTP, NPWP, NIB, dll', done: false, date: '', notes: '' },
          { id: 'rg-s3', label: 'Pilih LPH', desc: 'Pilih LPH terafiliasi MUI', done: false, date: '', notes: '' },
          { id: 'rg-s4', label: 'Jadwal Audit', desc: 'Tunggu jadwal dari LPH', done: false, date: '', notes: '' },
          { id: 'rg-s5', label: 'Audit LPH', desc: 'Audit langsung ke tempat usaha', done: false, date: '', notes: '' },
          { id: 'rg-s6', label: 'Sidang Fatwa MUI', desc: 'Komisi Fatwa MUI menetapkan', done: false, date: '', notes: '' },
          { id: 'rg-s7', label: 'Terbit Sertifikat Halal', desc: 'Unduh sertifikat dari SIHALAL', done: false, date: '', notes: '' },
        ],
        documents: [
          { id: 'rg-d1', name: 'Fotokopi KTP', collected: false, notes: '' },
          { id: 'rg-d2', name: 'Fotokopi NPWP', collected: false, notes: '' },
          { id: 'rg-d3', name: 'NIB', collected: false, notes: '' },
          { id: 'rg-d4', name: 'Daftar Produk & Bahan', collected: false, notes: '' },
          { id: 'rg-d5', name: 'Surat Pernyataan', collected: false, notes: '' },
        ],
        monitoring: [
          { tahap: 'Pendaftaran', status: 'Belum', tgl: '-', catatan: '' },
          { tahap: 'Verifikasi', status: 'Belum', tgl: '-', catatan: '' },
          { tahap: 'Audit', status: 'Belum', tgl: '-', catatan: '' },
          { tahap: 'Fatwa', status: 'Belum', tgl: '-', catatan: '' },
        ],
        notes: '',
      },
      fasilitasi: {
        status: 'not_started',
        steps: [
          { id: 'fs-s1', label: 'Cari Program', desc: 'Cek program di OSS/disnaker', done: false, date: '', notes: '' },
          { id: 'fs-s2', label: 'Siapkan Berkas', desc: 'Siapkan syarat administrasi', done: false, date: '', notes: '' },
          { id: 'fs-s3', label: 'Daftar Program', desc: 'Submit pendaftaran online/offline', done: false, date: '', notes: '' },
          { id: 'fs-s4', label: 'Follow Up', desc: 'Pantau status pendaftaran', done: false, date: '', notes: '' },
        ],
        registrations: [
          { id: 'fs-r1', program: 'SEHATI (Sertifikasi Halal Gratis)', tglDaftar: '', status: 'Belum daftar', notes: '' },
          { id: 'fs-r2', program: 'BPUM (BLT UMKM)', tglDaftar: '', status: 'Belum daftar', notes: '' },
          { id: 'fs-r3', program: 'KUR (Kredit Usaha Rakyat)', tglDaftar: '', status: 'Belum daftar', notes: '' },
        ],
        notes: '',
      },
      p3h: {
        status: 'not_started',
        steps: [
          { id: 'p3-s1', label: 'Daftar Bimtek', desc: 'Cari info bimtek P3H terdekat', done: false, date: '', notes: '' },
          { id: 'p3-s2', label: 'Ikuti Bimtek', desc: 'Pelatihan pendamping halal', done: false, date: '', notes: '' },
          { id: 'p3-s3', label: 'Ujian Kompetensi', desc: 'Ikuti ujian sertifikasi P3H', done: false, date: '', notes: '' },
          { id: 'p3-s4', label: 'Terbit SK P3H', desc: 'SK dari BPJPH', done: false, date: '', notes: '' },
          { id: 'p3-s5', label: 'Mulai Pendampingan', desc: 'Pendampingan ke pelaku UMKM', done: false, date: '', notes: '' },
        ],
        documents: [
          { id: 'p3-d1', name: 'Ijazah Pendidikan', collected: false, notes: '' },
          { id: 'p3-d2', name: 'KTP', collected: false, notes: '' },
          { id: 'p3-d3', name: 'Pas Foto', collected: false, notes: '' },
          { id: 'p3-d4', name: 'CV', collected: false, notes: '' },
        ],
        notes: '',
      },
    }
    const newClient = {
      id,
      name: 'Klien Baru',
      nik: '',
      birthPlace: '',
      birthDate: '',
      address: '',
      rtRw: '',
      postalCode: '',
      phone: '',
      businessName: 'Usaha Baru',
      businessType: '',
      permits: JSON.parse(JSON.stringify(defaultPermits)),
    }
    App.state.clients.push(newClient)
    selectClient(id)
    saveState()
    navigate('dashboard')
  })

  document.getElementById('editClientBtn')?.addEventListener('click', () => {
    if (!c) return
    const name = prompt('Nama:', c.name)
    if (name && name !== c.name) { c.name = name; saveState(); navigate('dashboard') }
  })

  if (c) {
    bindPermitSteps(c, 'selfDeclare', 'sd')
    bindPermitSteps(c, 'reguler', 'rg')
    bindPermitSteps(c, 'fasilitasi', 'fs')
    bindPermitSteps(c, 'p3h', 'p3')

    bindChecklist(c, 'selfDeclare')
    bindChecklist(c, 'reguler')
    bindChecklist(c, 'p3h')

    document.getElementById('sdNib')?.addEventListener('change', e => {
      c.permits.selfDeclare.nib = e.target.value
      saveState()
    })

    document.querySelectorAll('.mon-status')?.forEach(sel => {
      sel.addEventListener('change', e => {
        const i = parseInt(e.target.dataset.monIdx)
        c.permits.reguler.monitoring[i].status = e.target.value
        saveState()
      })
    })
    document.querySelectorAll('.mon-date')?.forEach(inp => {
      inp.addEventListener('change', e => {
        const i = parseInt(e.target.dataset.monIdx)
        c.permits.reguler.monitoring[i].tgl = e.target.value || '-'
        saveState()
      })
    })
    document.querySelectorAll('.mon-notes')?.forEach(inp => {
      inp.addEventListener('input', e => {
        const i = parseInt(e.target.dataset.monIdx)
        c.permits.reguler.monitoring[i].catatan = e.target.value
        saveState()
      })
    })

    document.querySelectorAll('.fs-reg-status')?.forEach(sel => {
      sel.addEventListener('change', e => {
        const i = parseInt(e.target.dataset.reg)
        c.permits.fasilitasi.registrations[i].status = e.target.value
        saveState()
      })
    })
    document.querySelectorAll('.fs-reg-date')?.forEach(inp => {
      inp.addEventListener('change', e => {
        const i = parseInt(e.target.dataset.reg)
        c.permits.fasilitasi.registrations[i].tglDaftar = e.target.value
        saveState()
      })
    })
    document.querySelectorAll('.fs-reg-notes')?.forEach(inp => {
      inp.addEventListener('input', e => {
        const i = parseInt(e.target.dataset.reg)
        c.permits.fasilitasi.registrations[i].notes = e.target.value
        saveState()
      })
    })

    const sdNotes = document.getElementById('sdNotes')
    if (sdNotes) sdNotes.addEventListener('input', e => { c.permits.selfDeclare.notes = e.target.value; saveState() })
    const rgNotes = document.getElementById('rgNotes')
    if (rgNotes) rgNotes.addEventListener('input', e => { c.permits.reguler.notes = e.target.value; saveState() })
    const fsNotes = document.getElementById('fsNotes')
    if (fsNotes) fsNotes.addEventListener('input', e => { c.permits.fasilitasi.notes = e.target.value; saveState() })
    const p3Notes = document.getElementById('p3Notes')
    if (p3Notes) p3Notes.addEventListener('input', e => { c.permits.p3h.notes = e.target.value; saveState() })
  }
}

function bindPermitSteps(c, moduleKey, prefix) {
  const p = c.permits[moduleKey]
  p.steps.forEach((step) => {
    const cb = document.getElementById(`${prefix}-step-${step.id}`)
    const dateInput = document.getElementById(`${prefix}-date-${step.id}`)
    const noteInput = document.getElementById(`${prefix}-note-${step.id}`)
    if (cb) cb.addEventListener('change', e => {
      step.done = e.target.checked
      const allDone = p.steps.every(s => s.done)
      const anyDone = p.steps.some(s => s.done)
      p.status = allDone ? 'completed' : anyDone ? 'in_progress' : 'not_started'
      saveState()
    })
    if (dateInput) dateInput.addEventListener('change', e => { step.date = e.target.value; saveState() })
    if (noteInput) noteInput.addEventListener('input', e => { step.notes = e.target.value; saveState() })
  })
}

function bindChecklist(c, moduleKey) {
  const p = c.permits[moduleKey]
  if (!p.documents) return
  const ul = document.querySelector(`.checklist[data-module="${moduleKey}"]`)
  if (!ul) return
  ul.querySelectorAll('li').forEach(li => {
    const cb = li.querySelector('input[type="checkbox"]')
    const notesInput = li.querySelector('input[type="text"]')
    const docId = li.dataset.doc
    const doc = p.documents.find(d => d.id === docId)
    if (cb) cb.addEventListener('change', e => {
      if (doc) { doc.collected = e.target.checked; li.classList.toggle('checked', e.target.checked); saveState() }
    })
    if (notesInput) notesInput.addEventListener('input', e => {
      if (doc) { doc.notes = e.target.value; saveState() }
    })
  })
}

/* ===== Search ===== */

function buildSearchIndex() {
  const idx = []
  idx.push({ title: 'Dashboard', text: 'Kelola klien, progress perizinan UMKM', page: 'dashboard' })
  idx.push({ title: 'Self Declare', text: 'NIB, pernyataan mandiri, OSS, KTP, KK, NPWP', page: 'self-declare' })
  idx.push({ title: 'Reguler Sertifikasi Halal', text: 'SIHALAL, LPH, audit halal, fatwa MUI, sertifikat halal', page: 'reguler' })
  idx.push({ title: 'Fasilitasi', text: 'BPUM, KUR, SEHATI, program pemerintah, bantuan UMKM', page: 'fasilitasi' })
  idx.push({ title: 'Pendamping Halal P3H', text: 'Bimtek, ujian kompetensi, BPJPH, SK pendamping', page: 'p3h' })
  App.state.clients.forEach(c => {
    idx.push({ title: 'Klien: ' + c.name, text: c.businessName + ' - ' + c.nik, page: 'dashboard' })
  })
  return idx
}

function performSearch(query) {
  if (!query.trim()) return ''
  const q = query.toLowerCase()
  const results = buildSearchIndex().filter(item =>
    item.title.toLowerCase().includes(q) || item.text.toLowerCase().includes(q)
  )
  if (results.length === 0) return '<p style="color:var(--text-secondary);padding:1rem;">Tidak ditemukan hasil.</p>'
  return results.map(r => `
    <div class="search-result" data-page="${r.page}">
      <h4>${highlight(r.title, query)}</h4>
      <p>${highlight(r.text, query)}</p>
    </div>
  `).join('')
}

function highlight(text, query) {
  const re = new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi')
  return text.replace(re, '<span class="search-highlight">$1</span>')
}

/* ===== Theme ===== */

function toggleTheme() {
  App.state.theme = App.state.theme === 'light' ? 'dark' : 'light'
  applyTheme()
  saveState()
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', App.state.theme)
  document.getElementById('themeToggle').innerHTML = App.state.theme === 'light' ? '&#9790;' : '&#9728;'
}

/* ===== Export ===== */

function exportPDF() { window.print() }

/* ===== Init ===== */

function init() {
  loadState()
  applyTheme()

  document.getElementById('themeToggle').addEventListener('click', toggleTheme)
  document.getElementById('exportBtn').addEventListener('click', exportPDF)

  const searchInput = document.getElementById('searchInput')
  searchInput.addEventListener('input', (e) => {
    App.state.query = e.target.value
    const results = performSearch(e.target.value)
    if (e.target.value.trim()) {
      document.getElementById('viewContainer').innerHTML = `
        <div class="view active">
          <div class="view-header">
            <h1>Pencarian: "${e.target.value}"</h1>
          </div>
          ${results}
        </div>`
      document.querySelectorAll('.search-result').forEach(el => {
        el.addEventListener('click', () => {
          searchInput.value = ''
          navigate(el.dataset.page)
        })
      })
    } else {
      navigate(App.state.page)
    }
  })

  document.querySelectorAll('#sidebarNav a').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault()
      searchInput.value = ''
      const page = a.dataset.page
      navigate(page)
      window.location.hash = '#' + page
    })
  })

  function hashChange() {
    const hash = window.location.hash.replace('#', '') || 'dashboard'
    searchInput.value = ''
    if (routes[hash]) navigate(hash)
  }

  window.addEventListener('hashchange', hashChange)

  const initialPage = window.location.hash.replace('#', '') || 'dashboard'
  navigate(routes[initialPage] ? initialPage : 'dashboard')
}

document.addEventListener('DOMContentLoaded', init)
