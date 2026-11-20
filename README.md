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

## Mode Cerdas (opsional)
Tombol ⚙ di sidebar. Isi API key Gemini sendiri; tersimpan hanya di browser perangkat itu. Dipakai untuk tanya-jawab bebas saja; tabel JSEA selalu diambil dari database.

## Catatan penting
- GitHub Pages **bersifat publik**, termasuk bila repo private (kecuali paket Enterprise). Folder `sources/` ikut publik; boleh dihapus setelah database dibuat, karena `jsea-database.js` sudah memuat seluruh isinya.
- Kolom **PIC** diturunkan dari jenis langkah (database tidak punya kolom PIC). Tinjau sebelum dipakai resmi.
- Hal yang tidak ada di database ditandai `[PERLU VERIFIKASI]`; tidak ada angka yang dikarang.
