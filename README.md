# J.A.S.M.I.N — JSEA Asisten Selamat, Mudah, & Instan

Chatbot **Teh JASMIN** untuk menyusun JSEA (Job Safety & Environmental Analysis) berdasarkan *jenis pekerjaan* (bukan merek/model). Situs statis: jalan di GitHub Pages, tanpa server.

## Struktur folder
```
index.html            halaman utama
style.css             tampilan
app.js                mesin chatbot, pencocokan pekerjaan, maskot, konfigurasi (WA di baris atas)
export.js             Download PDF, Copy Tabel, Excel, CSV
jsea-database.js      database JSEA (dibuat otomatis, jangan diedit manual)
qshe-updates.json     isi kartu "QSHE Info & Update"
assets/               maskot Teh JASMIN (9 pose), avatar, favicon
tools/build-database.mjs   pembuat jsea-database.js dari file .md
sources/              file .md sumber database
```

## Aktifkan GitHub Pages
Repo → **Settings → Pages** → Source: *Deploy from a branch* → branch `main`, folder `/ (root)` → Save. Alamat: `https://rochiki.github.io/JASMIN/`.

## Ganti nomor WhatsApp
Buka `app.js`, ubah di blok `CONFIG` paling atas:
```js
WA_NUMBER: '628118572691',        // format 62..., tanpa + dan tanpa 0 di depan
WA_TEXT: 'Halo Teh JASMIN!',      // teks otomatis di WhatsApp
HOTLINE_LABEL: '0811-8572-691',   // tulisan di badge "Chat with Us"
```
Badge "Chat with Us", maskot Teh JASMIN, dan tombol "Hubungi Tim Safety" otomatis ikut berubah.

## Ganti foto / animasi Teh JASMIN
- Maskot pojok kanan bawah: 9 file `assets/jasmin-0-idle.webp` … `jasmin-8-tip.webp` (transparan, 400×355). Timpa dengan nama file yang sama.
- Avatar bulat di balasan bot: `assets/avatar.png` (160×160). Ikon tab: `assets/favicon.png`.

## Update kartu QSHE Info & Update
Repo → buka `qshe-updates.json` → ikon pensil (Edit) → ubah `judul`, `tag`, `teks` → **Commit changes**. Situs ter-update dalam ±1 menit.
Isi `rotasi` (daftar kalimat) agar kartu berganti teks tiap hari; kosongkan `[]` untuk teks tetap. `tema`: `krem`, `biru`, atau `peach`.

## Memperbarui database JSEA
1. Ganti/edit file `.md` di `sources/` (format sama dengan yang sekarang).
2. Jalankan `node tools/build-database.mjs` → `jsea-database.js` dibuat ulang dan diverifikasi (tidak boleh ada teks hilang).
3. Commit hasilnya.

## Suara Teh JASMIN (TTS)
Menu **ID | EN | 🔇** di bagian atas chat memilih bahasa suara. Teh JASMIN hanya membacakan **kalimat pertama** tiap balasan, memakai suara perempuan bawaan browser (Web Speech API, gratis, tanpa API key). Pilihan tersimpan di perangkat.
- Suara EN membacakan kalimat Inggris yang sudah disiapkan (`say.en` di `app.js`), bukan menerjemahkan isi tabel.
- Kualitas suara tergantung browser/perangkat: Chrome & Edge (Windows/Android) biasanya punya suara Indonesia perempuan. Bila tidak ada suara perempuan, dipakai suara bahasa itu yang tersedia.
- Suara baru berbunyi setelah pengguna berinteraksi (aturan browser), jadi sapaan pembuka saat halaman dibuka tidak dibacakan.

## Musik latar (BGM)
Musik latar **"Ukulele Song"** (`assets/bgm.mp3`, FreePD.com, domain publik **CC0 1.0** — bebas lisensi; kredit di `assets/CREDITS.txt`) berputar terus (loop). Tombol **🎵** di bagian atas chat menyalakan/mematikan; pilihan tersimpan. Volume otomatis mengecil saat Teh JASMIN berbicara.
- Browser melarang suara otomatis sebelum pengguna menyentuh halaman. Musik mulai pada klik/ketukan pertama; tombol 🎵 berdenyut sampai musik mulai.
- Ganti lagu: timpa `assets/bgm.mp3` dengan file MP3 lain (pastikan lisensinya jelas). Pilihan lagu CC0 lain ada di repo `Rochiki/ocioci` (file `bgm-*.mp3`).
- Bila `assets/bgm.mp3` dihapus, otomatis dipakai musik corporate sintesis bawaan browser (tanpa file, orisinil).

## Terjemahan Indonesia → English
- Tiap balasan bot punya tombol kecil **🌐 English**; di bawah tabel JSEA ada tombol **🌐 English / Indonesia**. Klik lagi untuk kembali ke Indonesia.
- Setelah diterjemahkan, tabel yang diunduh (PDF, Excel, CSV, Salin) ikut berbahasa Inggris.
- Mesin terjemahan: (1) **Chrome desktop terbaru (v138+)** memakai penerjemah bawaan di perangkat (gratis, tanpa API key; model diunduh sekali). (2) Bila tidak tersedia, dipakai **Mode Cerdas** (API key Gemini). (3) Bila keduanya tidak ada, muncul pemberitahuan; alternatifnya klik kanan halaman → *Terjemahkan ke Inggris*.
- Terjemahan mesin: istilah teknis dan `[PERLU VERIFIKASI]` dijaga, tetapi tetap perlu dibaca ulang sebelum dipakai resmi.

## Mode Cerdas (opsional)
Tombol ⚙ di sidebar. Isi API key Gemini sendiri; tersimpan hanya di browser perangkat itu. Dipakai untuk tanya-jawab bebas saja; tabel JSEA selalu diambil dari database.

## Catatan penting
- GitHub Pages **bersifat publik**, termasuk bila repo private (kecuali paket Enterprise). Folder `sources/` ikut publik; boleh dihapus setelah database dibuat, karena `jsea-database.js` sudah memuat seluruh isinya.
- Kolom **PIC** diturunkan dari jenis langkah (database tidak punya kolom PIC). Tinjau sebelum dipakai resmi.
- Hal yang tidak ada di database ditandai `[PERLU VERIFIKASI]`; tidak ada angka yang dikarang.

## Widget cuaca, jam & kualitas udara
Di bagian paling atas sidebar (`widget.js`). Data dari **Open-Meteo** (gratis, tanpa API key; *bukan* Google, karena Google Weather/Air Quality API butuh API key + billing).
- Klik nama lokasi untuk mencari kota, atau tombol 🎯 untuk lokasi saat ini (butuh izin browser). Pilihan disimpan di browser.
- Jam berjalan mengikuti zona waktu lokasi (WIB/WITA/WIT). Muncul suhu, terasa seperti, kelembapan, angin, prakiraan 4 hari, dan kualitas udara (US AQI + PM2.5 + saran singkat). Diperbarui tiap 15 menit.
- Lokasi bawaan: Jakarta (ubah `DEFAULT_LOC` di `widget.js`).

## Kartu "Ingat Parkir, Ingat AMAN"
Ada di `qshe-updates.json` (kartu dengan daftar `aman`: huruf, judul, poin). Pakai `|` pada judul untuk pindah baris, `**tebal**`, `*miring*`. Ubah isi cukup dengan mengedit JSON.

## Suara (diperbarui)
- Pemilihan suara otomatis memprioritaskan suara "Natural"/"Online" (mis. Microsoft Aria/Jenny di Edge) dan menghindari suara Google US English yang robotik.
- Ikon ⚙ → *Suara Teh JASMIN*: pilih suara English/Indonesia sendiri dan klik "Coba suara".
- Opsional: **suara AI Gemini** (Aoede, Leda, Zephyr, dst.) memakai API key Mode Cerdas. Jika gagal, otomatis kembali ke suara browser.

## Tutorial Tanggap Darurat

21 tutorial langkah-demi-langkah (bukan tabel JSEA): kartu aturan utama, langkah berurutan dengan penanda WAJIB / LAKUKAN / LINGKUNGAN / APD, daftar "Jangan lakukan", tips lapangan, alat yang disiapkan, dan dasar acuan. Muncul saat pengguna mengetik situasi darurat (mis. "ada kebakaran di workshop", "gempa", "tutorial darurat") atau lewat tombol 🚨 Tutorial Darurat.

- Sumber: `sources/tutorial/TUTORIAL_TANGGAP_DARURAT.md`; jalankan `node tools/build-tutorial.mjs` untuk membuat `tutorial-darurat.js`.
- Isi bersifat umum: kode warna, nomor telepon, titik kumpul, dan personel disesuaikan per lokasi (Tutorial 21). Rujukan bertanda "perlu verifikasi" dicek dulu sebelum dipakai resmi.

## Buat JRM (Journey Risk Management)

Menu **🧭 Buat JRM** (sidebar, atau ketik "buat jrm" di chat) menggantikan form JRM manual.

- Titik berangkat/tujuan: tempel link Google Maps (versi panjang), koordinat, nama tempat, atau tombol "Lokasi saya".
- Otomatis: rute dan jarak (OSRM), waktu tempuh yang disesuaikan jenis jalan/kendaraan/muatan, jadwal istirahat (minimal 15 menit tiap 3 jam mengemudi, atau bergantian pengemudi dengan mengganti DID Tag VT), cuaca dan AQI per titik (Open-Meteo), permukaan jalan dari data ketinggian, peringatan gelap/menginap, usulan tingkat risiko (skor transparan, bisa diubah).
- Tanpa kotak approval (persetujuan atasan dilakukan online). Unduh PDF atau Word; tanpa nama perusahaan dan logo.
- Data diri hanya disimpan di perangkat bila dicentang (`localStorage jasmin.jrm.profile`), dapat dihapus.
- File: `jrm-core.js` (logika + pembuat PDF/DOCX), `jrm.js` (UI). Pustaka jsPDF dan docx dimuat dari CDN saat dibutuhkan.
- Batas: link pendek maps.app.goo.gl tidak bisa dibaca browser; waktu tempuh adalah estimasi; batas mengemudi harian 8 jam perlu verifikasi.
