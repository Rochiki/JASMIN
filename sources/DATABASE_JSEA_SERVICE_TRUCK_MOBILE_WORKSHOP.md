# DATABASE JSEA — SERVICE TRUCK, MOBILE WORKSHOP, DAN ROADSIDE SERVICE

Cakupan: perawatan dan perbaikan truck berat / tractor head (engine diesel common rail, transmisi manual 12 percepatan, rem udara dengan spring brake, kabin tilting elektrik, fifth wheel), operasional mobile workshop yang bergerak keluar dari bengkel, serta layanan perbaikan di jalan untuk unit yang mogok.
Sumber: OEM Manual (Service Manual truck berat), best practice industri, dan lesson learned investigasi insiden.

Kode kategori: (S) Safety — (H) Occupational Health — (E) Environment.
Kode modul: TRK = Service Truck / Tractor Head; MWS = Mobile Workshop; RSA = Roadside Assistance / Perbaikan di Jalan.

Catatan hubungan dengan database lain: modul umum (isolasi energi, rigging, limbah B3, perjalanan dinas) mengacu pada Database Master JSEA Service Unit Alat Berat, kode JSEA-GEN. Modul di sini memuat bahaya yang khas pada truck jalan raya dan pekerjaan di luar bengkel.

---

# BAGIAN A — SERVICE TRUCK / TRACTOR HEAD (TRK)

## JSEA-TRK-01

Proses / Pekerjaan: Persiapan, Isolasi Energi, dan Penempatan Truck pada Posisi Servis

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Menerima unit, mencatat VIN, model engine, dan keluhan; memasang pelindung unit sebelum pekerjaan | • (S) Informasi kerusakan tidak lengkap<br>• (S) Salah identifikasi varian axle/transmisi<br>• (E) Tidak Signifikan | • (S) Salah prosedur, terkena energi yang tidak diketahui<br>• (S) Salah spesifikasi torsi & part<br>• (E) Tidak Signifikan | **Administrative:** Verifikasi VIN pada rangka kanan di atas axle depan dan nameplate pada pilar pintu kanan; catat model engine & rated power; WO memuat gejala & dugaan penyebab.<br>**Engineering:** Pasang **grille cover, protective plate, dan fender cover** sebelum pekerjaan dimulai untuk mencegah kerusakan & cedera.<br>**PPE:** **Wajib coverall kerja, safety shoes, dan safety helmet** sesuai ketentuan OEM. | OEM Manual (Vehicle Identification / Attentions for operation — Must wear utility uniform and safety shoes and safety hats / Install grille, protective plate and flap before maintenance operation); UU No. 1/1970; Permenaker No. 8/2010 |
| 2 | Memarkir truck di lantai rata, mengaktifkan rem parkir, memasukkan gigi mundur, dan mengganjal roda | • (S) Truck meluncur saat dikerjakan<br>• (S) Lantai miring atau tidak rata<br>• (E) Ceceran oli dari unit bocor | • (S) Truck meluncur menabrak/melindas — fatality<br>• (E) Pencemaran lantai/tanah | **Critical Control:** **Kendaraan diparkir di jalan/lantai rata, rem parkir ditarik penuh, tuas transmisi dimasukkan ke posisi mundur, dan roda diganjal dengan chock block**; ganjal dipasang pada posisi diagonal terhadap titik yang akan didongkrak.<br>**Engineering:** Drip tray di bawah titik bocor.<br>**Administrative:** Barikade & rambu area servis.<br>**PPE:** Rompi reflektif di area lalu lintas kendaraan. | OEM Manual (**The vehicle shall be parked on flat road, and parking brake shall be tightened. Shift level shall be shifted to the position of reverse. Be sure to block wheel at the diagonal of the position needed to be jacked by chock block**); Permenaker No. 38/2016 |
| 3 | Mematikan engine, menunggu pendinginan, dan mematikan power master switch | • (S) Komponen berputar (fan, belt, propshaft)<br>• (S) **Engine dapat menyala/kendaraan bergerak sendiri**<br>• (H) Permukaan panas engine, exhaust, turbo<br>• (E) Emisi gas buang | • (S) Terjerat komponen berputar — fatality<br>• (S) Kendaraan bergerak sendiri saat engine hidup<br>• (H) Luka bakar termal<br>• (E) Emisi udara | **Critical Control:** **Matikan engine dan putuskan sumber daya sebelum bekerja di bawah atau di sekitar kendaraan, terutama di ruang engine**; power master switch OFF dan digembok; kunci dicabut.<br>**Administrative:** **Bila engine harus tetap hidup, beri perhatian khusus pada bagian bergerak, berputar, bocor, panas, dan bertegangan**; **pasang penanda jelas pada atau di dekat kemudi bahwa kendaraan sedang diperiksa/diperbaiki**.<br>**Engineering:** Guard komponen berputar terpasang; ventilasi bengkel diperiksa bila engine dijalankan.<br>**PPE:** Sarung tangan tahan panas, ear plug. | OEM Manual (**Stop the engine and cut off the power supply before the operations beneath or surrounding the vehicle** / place a clear marking on or near the steering wheel to indicate that the vehicle is under checking or repair / When maintenance is made under operation of engine, the ventilation situation of the workshop must be checked); OSHA 29 CFR 1910.147 |
| 4 | Melepas kabel negatif baterai sebelum bekerja pada kelistrikan | • (S) Korsleting & arc flash<br>• (S) Gas hidrogen dari baterai<br>• (H) Elektrolit asam<br>• (E) Baterai bekas = limbah B3 | • (S) Kebakaran kelistrikan, ledakan baterai<br>• (H) Luka bakar kimia pada mata & kulit<br>• (E) Pencemaran logam berat & asam | **Critical Control:** **Sebelum bekerja pada perangkat kelistrikan, kabel negatif wajib dilepas dari terminal baterai**; terminal negatif dilepas pertama dan dipasang terakhir.<br>**Engineering:** Kunci bergagang terisolasi; larangan meletakkan tool logam di atas baterai.<br>**Environmental:** Baterai bekas ke TPS Limbah B3 berizin.<br>**PPE:** Face shield, sarung tangan tahan asam, apron. | OEM Manual (**Before work on electric appliance, negative cable shall be taken down from binding post of battery**); Permenaker No. 12/2015; PP No. 22/2021 |
| 5 | Melepas tekanan udara sistem rem dan tekanan sistem lain sebelum pembongkaran | • (S) **Energi udara bertekanan tersimpan**<br>• (S) **Push rod & tuas brake chamber bergerak sendiri saat tekanan turun**<br>• (S) Tekanan sisa pada regenerasi air drier<br>• (E) Kondensat berminyak | • (S) **Terjepit oleh push rod/tuas yang bergerak — cedera serius**<br>• (S) Selang melecut, partikel terlempar<br>• (E) Pencemaran | **Critical Control:** **Pastikan tekanan sistem turun ke 0 bar dan udara sisa terbuang penuh sebelum melepas atau memperbaiki komponen apa pun**; **tabung regenerasi air drier dapat menyimpan tekanan sisa meskipun tekanan air reservoir sudah dilepas**; **saat membuang udara, jauhkan diri dari push rod dan tuas brake chamber karena bagian ini bergerak mengikuti turunnya tekanan**.<br>**Administrative:** Ikuti JSEA-TRK-03 untuk urutan lengkap; **wajib memakai safety goggles pada setiap pekerjaan yang berkaitan dengan sistem udara bertekanan**.<br>**PPE:** Safety goggles, ear plug. | OEM Manual (**Before removing or repairing any product, please ensure that the air pressure related to this system drops to 0 bar... the regeneration barrel of the air drier probably contains residual pressure, even if the pressure is already relieved from the air reservoir** / keep away from the push rods and levers of brake air chambers / **Always wear the safety goggles during any operations related to the air pressure system**); Permenaker No. 37/2016 |
| 6 | Menata part hasil bongkaran, menyiapkan special tool, dan memastikan kerja tim yang aman | • (S) Part tertukar/terkontaminasi<br>• (S) Pekerja lain tidak menyadari aktivitas rekannya<br>• (H) Angkat manual part berat<br>• (E) Tidak Signifikan | • (S) Salah pasang saat perakitan; cedera akibat gerakan tak terkoordinasi<br>• (H) Cedera punggung<br>• (E) Tidak Signifikan | **Administrative:** **Part yang dilepas ditata berurutan agar tidak tertukar dan tidak terkontaminasi**; **part sekali pakai — washer, O-ring, dan locknut — wajib diganti baru sesuai manual**; **bila dua orang atau lebih bekerja bersama, masing-masing wajib memperhatikan keselamatan yang lain**.<br>**Engineering:** Rak tool, tray part, trolley untuk part berat.<br>**PPE:** Sarung tangan, safety shoes. | OEM Manual (The removed parts shall be placed as per order to avoid confusion or contaminating parts / The disposable parts, such as washer, O-ring and locknut, shall be replaced / **When two or more persons work together, they must take others security into consideration**); Permenaker No. 5/2018 |

Additional Safety Tips
- Periksa ulir baut, stud, dan sekrup sebelum dipakai; bila lebih dari tiga ulir rusak, komponen wajib diganti.
- Part yang dilapisi sealant dari pabrik (precoating) wajib dibersihkan dari sealant lama, dikeringkan dengan udara bertekanan, lalu dilapisi sealant yang ditentukan sebelum dipasang ulang.
- Saat mengganti sekring, gunakan hanya nilai arus yang sesuai; sekring dengan nilai lebih besar maupun lebih kecil dilarang.

Point of Concern
- Truck jalan raya dapat bergerak sendiri hanya karena rem parkir kendur atau ganjal tidak terpasang; tidak ada penahan mekanis lain seperti pada alat berat.
- Tekanan sisa di tabung regenerasi air drier adalah energi tersimpan yang paling sering terlupakan pada sistem rem udara.
- Push rod brake chamber bergerak sendiri saat tekanan dibuang; tangan yang berada di jalurnya akan terjepit tanpa peringatan.

Common Mistakes
- Menganggap rem parkir cukup untuk menahan unit — hindari dengan kombinasi rem parkir, gigi mundur, dan ganjal roda diagonal.
- Bekerja pada kelistrikan tanpa melepas kabel negatif baterai — hindari dengan menjadikan pelepasan terminal negatif langkah pertama.
- Membuang tekanan udara sambil memegang atau berada di dekat brake chamber — hindari dengan menjauh dari push rod selama pembuangan.

Golden Rules
- Engine mati dan sumber daya diputus sebelum bekerja di bawah atau di sekitar kendaraan.
- Tekanan udara diverifikasi nol sebelum komponen sistem rem dibuka.
- Rem parkir, gigi mundur, dan ganjal roda selalu tiga-tiganya.

Critical Controls
- Rem parkir aktif, gigi mundur, ganjal roda diagonal terpasang.
- Power master switch OFF & digembok, kunci dicabut, penanda di kemudi.
- Kabel negatif baterai dilepas sebelum pekerjaan kelistrikan.
- Tekanan udara 0 bar terverifikasi termasuk tabung regenerasi air drier.
- Safety goggles terpakai pada seluruh pekerjaan sistem udara bertekanan.

Required PPE
- Mandatory PPE: Safety helmet, safety glasses, safety shoes, coverall kerja, sarung tangan kerja.
- Additional PPE: Safety goggles (sistem udara), face shield & sarung tangan tahan asam (baterai), sarung tangan tahan panas, ear plug, rompi reflektif.

Emergency Response
- Potensi Keadaan Darurat: Kendaraan meluncur, terjepit push rod, ledakan baterai, luka bakar termal, terjerat komponen berputar.
- Respon Awal: Hentikan pekerjaan dan amankan area; jangan mencoba menahan kendaraan yang meluncur; bilas mata/kulit terkena elektrolit minimal 15 menit; aktifkan ERT.
- Peralatan Darurat yang Diperlukan: Kotak P3K, eyewash & safety shower, APAR, chock block cadangan, alat komunikasi.

Keterangan
Modul ini adalah prasyarat wajib bagi seluruh modul TRK berikutnya, dan tetap berlaku ketika pekerjaan dilakukan di luar bengkel oleh mobile workshop atau tim roadside service.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

## JSEA-TRK-02

Proses / Pekerjaan: Tilting Kabin Elektrik dan Bekerja di Bawah Kabin yang Terangkat

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Memarkir truck di lantai rata, mengganjal roda, dan memastikan area di atas serta di depan kabin bebas | • (S) Lantai miring membuat kabin tidak seimbang saat terangkat<br>• (S) Objek menggantung di jalur ayun kabin<br>• (E) Tidak Signifikan | • (S) Kabin terguling melewati titik seimbang — fatality<br>• (S) Kabin membentur struktur di atasnya<br>• (E) Tidak Signifikan | **Critical Control:** Lantai rata dan padat; rem parkir aktif; ganjal roda terpasang; ruang di depan kabin bebas sejauh jangkauan ayun penuh.<br>**Administrative:** Ikuti JSEA-TRK-01; barikade area depan kabin.<br>**PPE:** Helm, safety shoes. | OEM Manual (Tilt the cab (electric) / Maintenance Guide); ISO 12100:2010 |
| 2 | Mengosongkan kabin dari orang dan barang, menutup pintu, dan mengamankan barang lepas di dalam kabin | • (S) **Barang di dalam kabin berjatuhan saat kabin dimiringkan**<br>• (S) Orang masih berada di dalam kabin<br>• (E) Tidak Signifikan | • (S) Tertimpa barang jatuh dari kabin<br>• (S) Terjatuh dari kabin yang miring — cedera serius<br>• (E) Tidak Signifikan | **Critical Control:** Kabin dikosongkan penuh dari orang dan barang; **dilarang ada orang di dalam kabin saat kabin dimiringkan**; pintu ditutup dan dikunci.<br>**Administrative:** Checklist pengosongan kabin (tool box, jerigen, dokumen, barang pribadi, botol minum).<br>**PPE:** Sarung tangan. | OEM Manual (Preparations — Tilt the cab); Permenaker No. 9/2016 |
| 3 | Mengoperasikan tilting kabin secara elektrik dan mengamati proses pengangkatan dari posisi aman | • (S) **Anggota tubuh terjepit atau memar saat kabin miring**<br>• (S) Kabin bergerak lebih cepat setelah melewati titik seimbang<br>• (H) Postur menjangkau tombol/tuas<br>• (E) Ceceran oli dari pompa tilt | • (S) **Tangan/kaki terjepit antara kabin dan rangka — cedera serius**<br>• (S) Kabin terhempas melewati titik seimbang<br>• (E) Pencemaran lantai | **Critical Control:** **Saat kabin miring, anggota tubuh berisiko terjepit atau memar** — tidak seorang pun berada di jalur ayun kabin atau di antara kabin dan rangka selama pengangkatan; operator tilting berdiri di posisi aman dari samping.<br>**Engineering:** Sistem tilting elektrik & hidrolik dalam kondisi laik; hose tidak bocor.<br>**Administrative:** Angkat perlahan; hentikan bila ada tahanan tidak wajar atau bunyi abnormal.<br>**PPE:** Sarung tangan, helm, safety glasses. | OEM Manual (**When the cab tilts, the limbs are at risk of being crushed or bruised**); ISO 12100:2010 |
| 4 | **Memastikan kabin terangkat sempurna dan terkunci pada penopang mekanis sebelum siapa pun masuk ke bawahnya** | • (S) **Kabin hanya ditahan silinder hidrolik**<br>• (S) Penopang/pengunci tidak terpasang sempurna<br>• (E) Tidak Signifikan | • (S) **Kabin turun menimpa pekerja — fatality**<br>• (E) Tidak Signifikan | **Critical Control:** **Kegagalan mengangkat kabin dengan benar berisiko kematian** — verifikasi visual bahwa kabin telah melewati posisi terkunci dan bertumpu pada penopang mekanis/safety strut, bukan pada silinder hidrolik; verifikasi oleh orang kedua sebelum masuk kolong.<br>**Engineering:** Penopang tambahan (safety stay/prop) bila tersedia; lock-out pada saklar/pompa tilt agar tidak dioperasikan orang lain.<br>**Administrative:** Tag "DO NOT OPERATE" di kemudi dan di saklar tilt.<br>**PPE:** Helm, safety glasses. | OEM Manual (**Failing to properly raise the cab has the risk of death**); OSHA 29 CFR 1910.147 |
| 5 | Melakukan pekerjaan servis pada engine, transmisi, dan sistem di bawah kabin | • (S) Komponen panas & bertekanan<br>• (S) Ruang kerja sempit dengan jalan keluar terbatas<br>• (H) Postur janggal, kontak oli & bahan bakar<br>• (E) Ceceran oli, bahan bakar, coolant | • (S) Luka bakar, fluid injection injury<br>• (H) MSD, dermatitis<br>• (E) Pencemaran | **Critical Control:** Tekanan sistem (udara, bahan bakar, hidrolik steering, pendingin) dilepas sesuai modul terkait sebelum sambungan dibuka; kabin tetap terkunci pada penopang.<br>**Engineering:** Penerangan portabel tahan benturan; drip tray; matras kerja.<br>**Administrative:** Two-Man Rule dengan satu orang mengawasi dari luar; rotasi postur.<br>**PPE:** Goggles, sarung tangan nitril, helm. | OEM Manual (Preparations — Relieve the air pressure of brake system / Drain the hydraulic oil from steering gear / Discharge the coolant); Permenaker No. 5/2018 |
| 6 | Menurunkan kabin dan mengunci kembali | • (S) **Tubuh terjepit atau tertekan saat kabin diturunkan**<br>• (S) Kabin tidak terkunci sempurna setelah turun<br>• (E) Tidak Signifikan | • (S) **Cedera akibat terjepit saat penurunan**<br>• (S) **Kabin terbuka saat kendaraan berjalan — fatality**<br>• (E) Tidak Signifikan | **Critical Control:** **Bila tubuh terjepit atau tertekan saat kabin diturunkan, terdapat risiko cedera** — verifikasi seluruh personel dan tool keluar dari bawah kabin sebelum diturunkan, dengan konfirmasi verbal; setelah kabin turun, **verifikasi kunci kabin terkunci penuh dan lampu peringatan cab lock padam** sebelum kendaraan dijalankan.<br>**Administrative:** Tool count in–out; uji fungsi indikator cab lock; bila indikator menyala terus atau tidak menyala, unit tidak dijalankan sampai diperiksa.<br>**PPE:** Sarung tangan. | OEM Manual (**If the body is stuck or extruded when lowering the cab, it has a risk of injury** / Cab lock warning indicator); ISO 12100:2010 |

Additional Safety Tips
- Kabin melewati titik seimbang saat dimiringkan; setelah titik itu berat kabin bekerja mempercepat gerakan, jadi jangan berada di jalurnya.
- Lampu peringatan cab lock yang menyala terus atau tidak menyala sama sekali adalah gejala kerusakan saklar pengunci, bukan sekadar gangguan indikator.
- Beri tanda pada saklar tilt selama pekerjaan berlangsung agar tidak dioperasikan orang lain secara tidak sengaja.

Point of Concern
- Manual OEM secara eksplisit menyebut kegagalan mengangkat kabin dengan benar berisiko kematian; ini bukan risiko cedera ringan.
- Sistem tilting elektrik dapat dioperasikan orang lain dari kabin atau dari luar tanpa melihat kondisi di bawah kabin.
- Kabin yang tidak terkunci sempurna dapat terangkat saat kendaraan mengerem mendadak di jalan.

Common Mistakes
- Meninggalkan barang di kabin karena "kabin cuma diangkat sebentar" — hindari dengan checklist pengosongan kabin.
- Masuk ke bawah kabin sebelum memverifikasi penopang mekanis — hindari dengan verifikasi visual dan konfirmasi orang kedua.
- Menjalankan kendaraan tanpa memeriksa indikator cab lock setelah kabin diturunkan — hindari dengan menjadikan pemeriksaan indikator langkah penutup wajib.

Golden Rules
- Kabin dikosongkan penuh sebelum dimiringkan.
- Tidak seorang pun berada di bawah kabin yang hanya ditopang silinder hidrolik.
- Indikator cab lock diverifikasi normal sebelum kendaraan dijalankan.

Critical Controls
- Lantai rata, rem parkir aktif, ganjal roda terpasang.
- Kabin kosong dari orang dan barang.
- Penopang mekanis kabin terpasang dan diverifikasi visual oleh orang kedua.
- Tag DO NOT OPERATE pada kemudi dan saklar tilt.
- Verifikasi kunci kabin dan indikator cab lock setelah penurunan.

Required PPE
- Mandatory PPE: Safety helmet, safety glasses, safety shoes, coverall, sarung tangan kerja.
- Additional PPE: Goggles, sarung tangan nitril, ear plug.

Emergency Response
- Potensi Keadaan Darurat: Kabin turun menimpa pekerja, terjepit saat tilting, kabin terguling melewati titik seimbang.
- Respon Awal: Hentikan seluruh gerakan; **jangan mengoperasikan sistem tilting untuk membebaskan korban tanpa penopang tambahan terpasang**; aktifkan ERT dan siapkan penopang mekanis sebelum pemindahan korban.
- Peralatan Darurat yang Diperlukan: Kotak P3K, spine board, penopang/dongkrak darurat, alat komunikasi, akses evakuasi medis.

Keterangan
Hampir seluruh pekerjaan besar pada engine, transmisi, dan sistem bahan bakar truck ini diawali dengan tilting kabin; modul ini menjadi prasyarat bagi JSEA-TRK-04, TRK-05, dan TRK-07.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

## JSEA-TRK-03

Proses / Pekerjaan: Pekerjaan pada Sistem Rem Udara, Spring Brake (Rem Parkir), Air Reservoir, dan Air Drier

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Memarkir di lantai rata, menarik rem tangan, dan **mengganjal roda sebelum tekanan dilepas** | • (S) **Kendaraan meluncur setelah tekanan dilepas sepenuhnya**<br>• (E) Tidak Signifikan | • (S) **Kendaraan meluncur menabrak/melindas — fatality**<br>• (E) Tidak Signifikan | **Critical Control:** **Parkir di lantai rata, tarik rem tangan, dan selalu ganjal roda dengan balok untuk mencegah kendaraan menggelinding akibat tekanan yang dilepas sepenuhnya**.<br>**Administrative:** Ganjal dipasang sebelum, bukan sesudah, pembuangan tekanan.<br>**PPE:** Rompi reflektif. | OEM Manual (**Park the vehicle on a level ground, pull up the handbrake, and always block the wheels by woods, in order to prevent the rolling of vehicle due to fully relieved pressure**); Permenaker No. 38/2016 |
| 2 | Membuang tekanan udara dari air reservoir dan seluruh sirkuit terkait | • (S) **Semburan udara & kondensat bertekanan 0,7–0,8 MPa**<br>• (S) **Push rod dan tuas brake chamber bergerak saat tekanan turun**<br>• (H) Kebisingan impulsif<br>• (E) Kondensat berminyak | • (S) **Terjepit push rod/tuas — cedera serius**<br>• (S) Partikel terlempar ke mata<br>• (H) Gangguan pendengaran<br>• (E) Pencemaran tanah | **Critical Control:** **Jauhkan diri dari push rod dan tuas brake chamber saat membuang tekanan — bagian ini bergerak mengikuti turunnya tekanan**; **dilarang mengintip ke arah pipa udara bertekanan atau mengarahkan pipa udara ke arah siapa pun**; **safety goggles wajib pada setiap pekerjaan sistem udara**.<br>**Engineering:** Drain valve diarahkan ke bawah/menjauh; wadah kondensat.<br>**Administrative:** Verifikasi gauge menunjukkan 0 bar sebelum melanjutkan.<br>**PPE:** Safety goggles, ear plug, sarung tangan. | OEM Manual (**Never peep at any compressed air pipe or point any compressed air pipe towards any person** / keep away from the push rods and levers of brake air chambers); Permenaker No. 37/2016; Permenaker No. 5/2018 |
| 3 | **Membuang tekanan sisa pada tabung regenerasi air drier** | • (S) **Tekanan sisa tetap ada meskipun air reservoir sudah kosong**<br>• (E) Kondensat & sisa oli | • (S) **Semburan bertekanan mendadak saat komponen dibuka — cedera mata & luka**<br>• (E) Pencemaran | **Critical Control:** **Tabung regenerasi air drier kemungkinan masih menyimpan tekanan sisa walaupun tekanan air reservoir sudah dilepas** — buang tekanan tabung regenerasi secara terpisah dan verifikasi nol sebelum membongkar.<br>**Administrative:** Masukkan air drier ke dalam checklist isolasi energi sebagai titik tersendiri, bukan bagian dari reservoir.<br>**PPE:** Safety goggles, face shield. | OEM Manual (**the regeneration barrel of the air drier probably contains residual pressure, even if the pressure is already relieved from the air reservoir**); Permenaker No. 37/2016 |
| 4 | **Bekerja pada spring brake chamber (rem parkir tipe pegas)** | • (S) **Energi pegas terkompresi sangat besar di dalam brake chamber**<br>• (S) Pegas melesat saat clamp band dibuka<br>• (S) Serpihan logam dari clamp band<br>• (E) Tidak Signifikan | • (S) **Pegas melesat menimpa pekerja — fatality**<br>• (S) Cedera tusuk & patah tulang<br>• (E) Tidak Signifikan | **Critical Control:** **Terdapat risiko terjepit atau memar saat mengoperasikan pegas atau badan pegas yang sedang terbebani** — spring brake chamber **dilarang dibongkar di lapangan**; unit diganti sebagai assembly, bukan dibuka. Bila caging diperlukan, gunakan **release bolt/caging tool resmi** untuk mengunci pegas terlebih dahulu, dan **jangan pernah membuka clamp band pada chamber yang pegasnya belum di-caging**.<br>**Engineering:** Caging tool sesuai tipe chamber; barikade pada arah gaya pegas.<br>**Administrative:** Hanya personel terlatih; chamber bekas dibuang tanpa dibongkar.<br>**PPE:** Face shield + goggles, sarung tangan, coverall lengan panjang. | OEM Manual (**There is crushed or bruised risk when operating the spring or spring body that has been loaded** / Type of parking brake: Spring brake); Permenaker No. 38/2016; ISO 12100:2010 |
| 5 | Melepas, memeriksa, dan memasang komponen: brake valve, relay valve, four circuit protection valve, air reservoir, hose, dan pipa | • (S) **Menyambung/melepas hose atau pipa bertekanan tinggi — hose mengayun liar akibat kebocoran**<br>• (S) Tekanan berlebih pada pipa yang deformasi<br>• (H) Kontak kondensat berminyak<br>• (E) Ceceran kondensat | • (S) **Hose melecut mengenai wajah/tubuh — cedera serius**<br>• (S) Kegagalan sistem rem saat operasi<br>• (H) Dermatitis<br>• (E) Pencemaran | **Critical Control:** **Dilarang mutlak menyambung atau melepas hose maupun pipa bertekanan tinggi, karena hose akan mengayun sendiri akibat kebocoran udara**; **dilarang melampaui tekanan udara yang direkomendasikan pabrikan kendaraan**.<br>**Engineering:** **Periksa seluruh pipa terhadap tekukan, penyok, aus, kekeringan berlebih, atau panas berlebih — pipa yang deformasi dapat menyebabkan tekanan berlebih pada saluran dan peralatan terkait**; komponen pengganti wajib sama ukuran, tipe, dan kekuatannya dengan aslinya.<br>**Administrative:** **Komponen dengan ujung kabel terkelupas, rusak, atau berkarat wajib diganti seluruhnya — dilarang memperbaiki dengan permesinan atau pengelasan** kecuali disetujui pabrikan.<br>**PPE:** Safety goggles, sarung tangan. | OEM Manual (**It's absolutely prohibited to connect or disconnect any high pressure hose or pipeline, otherwise the hose will swing automatically due to air leakage** / **It's absolutely prohibited to exceed the air pressure recommended by the vehicle manufacturer** / do not attempt to repair any product by machining or welding); Permenaker No. 37/2016 |
| 6 | Mengisi kembali sistem, memeriksa kebocoran, dan menguji fungsi rem servis serta rem parkir | • (S) Kebocoran pada sambungan baru<br>• (S) **Kegagalan rem saat unit dijalankan**<br>• (S) Uji rem dengan orang di sekitar<br>• (E) Tidak Signifikan | • (S) **Kehilangan pengereman di jalan — fatality**<br>• (S) Tertabrak saat uji<br>• (E) Tidak Signifikan | **Critical Control:** Uji kebocoran dengan air sabun (bukan tangan) pada seluruh sambungan; **uji fungsi rem servis dan rem parkir wajib lulus sebelum kendaraan dikembalikan ke operasi**; uji dilakukan di area datar, luas, dan bebas personel.<br>**Administrative:** Catat hasil uji; **saat pengujian pada brake test rig, anggota tubuh berisiko terjepit atau tertekan oleh bagian yang berputar** — jaga jarak dan pasang pelindung.<br>**PPE:** Rompi reflektif. | OEM Manual (**When a test is carried out on a brake test rig, the limbs may be clamped or extruded by the rotating parts, which has the risk of death**); Kepmen ESDM 1827 K/30/MEM/2018; UU No. 22/2009 |

Additional Safety Tips
- Buang kondensat air reservoir secara rutin; air yang terakumulasi menurunkan kinerja rem dan mempercepat korosi tabung.
- Ganti seluruh O-ring, seal, dan gasket dengan yang baru setelah dibongkar; komponen karet bekas dilarang dipakai ulang.
- Gunakan komponen pengganti dengan ukuran, tipe, dan kekuatan yang sama dan dirancang untuk aplikasi serta sistem yang sama.

Point of Concern
- Spring brake chamber menyimpan energi pegas yang cukup untuk membunuh; inilah alasan chamber diganti sebagai assembly dan tidak dibongkar di bengkel umum.
- Hose udara bertekanan yang dilepas dalam kondisi masih bertekanan akan melecut tanpa arah yang dapat diprediksi.
- Pipa yang penyok atau tertekuk menaikkan tekanan lokal dan dapat merusak komponen di hilirnya, bukan sekadar menghambat aliran.

Common Mistakes
- Membuka clamp band spring brake chamber untuk mengganti diafragma — hindari dengan mengganti chamber sebagai assembly.
- Menganggap sistem sudah aman setelah gauge reservoir menunjukkan nol — hindari dengan membuang tekanan tabung regenerasi air drier secara terpisah.
- Menaikkan tekanan kerja untuk mengatasi rem yang terasa kurang pakem — hindari dengan diagnosis penyebab dan mempertahankan tekanan sesuai spesifikasi pabrikan.

Golden Rules
- Ganjal roda terpasang sebelum tekanan dibuang.
- Spring brake chamber tidak pernah dibongkar tanpa caging tool resmi.
- Hose dan pipa bertekanan tidak pernah dilepas atau disambung dalam kondisi bertekanan.

Critical Controls
- Rem tangan aktif dan ganjal roda terpasang sebelum pembuangan tekanan.
- Tekanan 0 bar terverifikasi pada reservoir dan tabung regenerasi air drier.
- Personel menjauh dari push rod dan tuas brake chamber selama pembuangan tekanan.
- Spring brake chamber diganti sebagai assembly, tidak dibongkar.
- Uji fungsi rem servis dan rem parkir lulus sebelum serah terima.

Required PPE
- Mandatory PPE: Safety helmet, **safety goggles (wajib untuk seluruh pekerjaan sistem udara)**, safety shoes, coverall, sarung tangan kerja.
- Additional PPE: Face shield, ear plug, sarung tangan nitril.

Emergency Response
- Potensi Keadaan Darurat: Pegas brake chamber melesat, hose melecut, kendaraan meluncur, kegagalan rem saat uji.
- Respon Awal: Hentikan pekerjaan dan jauhkan semua orang dari garis energi; jangan mencoba menahan hose yang melecut; kendaraan yang meluncur tidak boleh dihentikan secara fisik; aktifkan ERT.
- Peralatan Darurat yang Diperlukan: Kotak P3K, eyewash, chock block cadangan, alat komunikasi, akses evakuasi medis.

Keterangan
Sistem rem udara adalah sistem keselamatan utama kendaraan; setiap pekerjaan padanya wajib ditutup dengan uji fungsi terdokumentasi, tidak cukup dengan pemeriksaan visual.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

## JSEA-TRK-04

Proses / Pekerjaan: Pekerjaan pada Sistem Bahan Bakar Common Rail Tekanan Tinggi (Pompa, Rail, Injektor, Pipa Tekanan Tinggi)

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Mematikan engine, menunggu tekanan rail turun, dan mengisolasi kelistrikan sistem injeksi | • (S) **Rail masih bertekanan sangat tinggi setelah engine mati**<br>• (S) Komponen elektrik injeksi bertegangan<br>• (E) Tidak Signifikan | • (S) **Semburan bahan bakar tekanan tinggi menembus kulit — fluid injection injury, amputasi**<br>• (S) Sengatan listrik pada rangkaian injektor<br>• (E) Tidak Signifikan | **Critical Control:** **Dilarang mutlak melepas pipa bahan bakar tekanan tinggi saat engine sedang berjalan**; tunggu tekanan rail turun sesuai waktu yang ditentukan manual sebelum membuka sambungan; power master switch OFF dan kabel negatif baterai dilepas sebelum menyentuh komponen elektrik sistem common rail.<br>**Administrative:** Hanya teknisi terlatih sistem common rail; larangan mengoperasikan engine dengan sambungan tekanan tinggi terbuka.<br>**PPE:** Face shield + goggles, sarung tangan tahan kimia. | OEM Manual (**When the engine is running, do not disconnect any high-pressure fuel pipe** / electrical components of the high-pressure common rail fuel injection system); Permenaker No. 37/2016 |
| 2 | Melepas pipa bahan bakar tekanan rendah dan menampung bahan bakar yang keluar | • (S) Uap bahan bakar mudah terbakar<br>• (H) Kontak kulit & uap terhirup<br>• (E) Tumpahan bahan bakar | • (S) **Kebakaran/ledakan uap bahan bakar**<br>• (H) **Keracunan bila terhirup atau tertelan; cedera pada kulit dan mata**<br>• (E) Pencemaran tanah & air tanah | **Critical Control:** **Saat melepas pipa bahan bakar tekanan rendah, wajib menggunakan wadah penampung yang sesuai** untuk menahan bahan bakar yang mengalir; dilarang api terbuka, percikan, dan merokok; APAR kelas B di titik kerja.<br>**Engineering:** Wadah tertutup berlabel; majun & absorbent siap.<br>**Environmental:** Bahan bakar tertampung dan majun terkontaminasi ke TPS Limbah B3.<br>**PPE:** Sarung tangan tahan kimia, goggles, coverall. | OEM Manual (**when disconnecting the low-pressure fuel pipe, make sure to use an appropriate container. Hold fuel flowing out** / **The fuel has a risk of explosion if ignited. If inhaled or swallowed, there is a risk of poisoning. Skin and eye contact with fuel is at risk of injury**); Permenakertrans No. 4/1980; NFPA 30 |
| 3 | Melepas dan memasang pompa bahan bakar tekanan tinggi, common rail, relief valve, dan injektor | • (S) **Sisa bahan bakar bertekanan terperangkap dalam pipa**<br>• (S) Kontaminasi partikel masuk ke sistem presisi<br>• (H) Kabut bahan bakar<br>• (E) Ceceran bahan bakar | • (S) Semburan saat sambungan dibuka; kegagalan engine pasca perbaikan<br>• (H) Iritasi saluran napas<br>• (E) Pencemaran | **Critical Control:** **Saat pipa masuk dan pipa balik pompa tekanan tinggi dilepas, sisa bahan bakar dapat tertinggal di dalam pipa — buka dengan hati-hati** dan arahkan menjauh dari wajah.<br>**Engineering:** Kontrol kontaminasi ketat — semua ujung terbuka langsung di-cap; area kerja bersih.<br>**Administrative:** **Pipa tekanan tinggi tidak boleh dilepas-pasang berulang kali**; gunakan pipa baru sesuai ketentuan manual; torsi sambungan sesuai spesifikasi.<br>**PPE:** Face shield, sarung tangan nitril. | OEM Manual (**When the oil inlet pipe of high pressure oil pump and the high-pressure oil pump oil return pipe are removed, the remaining oil in the oil pipe can be remained, so be careful when disassembling** / Frequent removal of high-pressure fuel pipes); ISO 4406 |
| 4 | Membuang udara dari saluran bahan bakar tekanan tinggi dengan mengendurkan pipa per silinder | • (S) **Bahan bakar menyembur dari sambungan yang dikendurkan saat engine diputar**<br>• (S) Starter berputar, engine dapat menyala<br>• (H) Kabut bahan bakar terhirup<br>• (E) Ceceran bahan bakar ke engine panas | • (S) **Kebakaran engine akibat bahan bakar mengenai permukaan panas**<br>• (S) Fluid injection injury<br>• (H) Iritasi<br>• (E) Pencemaran | **Critical Control:** Kendurkan pipa hanya sebatas yang diperlukan, arahkan aliran ke wadah/majun, dan **jaga wajah serta tangan keluar dari garis semburan**; APAR kelas B siap; bersihkan tumpahan sebelum engine dijalankan penuh.<br>**Administrative:** Prosedur bleeding sesuai urutan manual; kencangkan kembali pipa setiap silinder sebelum berpindah; durasi pemutaran starter dibatasi agar starter tidak panas berlebih.<br>**PPE:** Face shield, sarung tangan tahan kimia. | OEM Manual (Remove air from the high-pressure fuel line / Screw off the high-pressure fuel pipe of a cylinder... Tighten the high-pressure fuel pipe of this cylinder / The duration of starting the starter cannot be too long); Permenakertrans No. 4/1980 |
| 5 | Mengukur tekanan common rail, memeriksa relief valve, dan melakukan diagnosa sistem injeksi | • (S) Sistem bertekanan penuh saat pengukuran<br>• (S) **Engine hidup dengan kabin terangkat / cover terbuka**<br>• (H) Gas buang, kebisingan<br>• (E) Emisi | • (S) Semburan bertekanan; terjerat komponen berputar; **kendaraan bergerak sendiri**<br>• (H) Keracunan CO, NIHL<br>• (E) Pencemaran udara | **Critical Control:** **Saat engine hidup, kendaraan dapat bergerak sendiri dan menyebabkan kecelakaan; bekerja di dekat engine yang sedang distart atau berjalan berisiko tergores dan terbakar** — pastikan rem parkir aktif, gigi netral, ganjal roda terpasang, dan tidak ada orang di depan/belakang kendaraan.<br>**Engineering:** Exhaust extraction bila di dalam ruangan; guard terpasang.<br>**Administrative:** Alat ukur dengan rating tekanan sesuai; **peralatan diagnosa di dalam kendaraan berisiko menyebabkan kecelakaan bila kendaraan bergerak** — jangan mengoperasikan alat diagnosa sambil kendaraan berjalan tanpa pengemudi terpisah.<br>**PPE:** Ear plug, safety glasses. | OEM Manual (**When the engine is running, the vehicle may start on its own and cause in an accident. During the engine starting or running, working nearby may have the risk of scratching and burning** / **When a vehicle is in motion, the diagnostic equipment in the vehicle has the risk of causing in accidents and injuries**); Permenaker No. 5/2018 |
| 6 | Menutup sistem, memeriksa kebocoran, dan uji jalan singkat | • (S) Kebocoran bahan bakar pada sambungan baru<br>• (S) Kebocoran mengenai permukaan panas<br>• (E) Ceceran bahan bakar | • (S) **Kebakaran unit saat beroperasi**<br>• (E) Pencemaran | **Critical Control:** Pemeriksaan kebocoran menyeluruh pada kondisi bertekanan sebelum unit diserahkan, menggunakan kertas/majun bukan tangan; **seluruh tumpahan bahan bakar dibersihkan tuntas sebelum engine dijalankan**.<br>**Administrative:** Torsi sambungan pipa tekanan tinggi sesuai spesifikasi dengan torque wrench; catat pada service history.<br>**Environmental:** Majun terkontaminasi ke TPS Limbah B3.<br>**PPE:** Sarung tangan, goggles. | OEM Manual (Torque requirements — High-pressure fuel tank joint nut); NFPA 30; PP No. 22/2021 |

Additional Safety Tips
- Bahan bakar bertekanan sangat tinggi dapat menembus kulit tanpa luka luar yang jelas; setiap dugaan injection injury adalah kasus bedah darurat.
- Kebersihan adalah kontrol keselamatan pada sistem common rail; partikel sekecil apa pun merusak injektor dan pompa yang harganya sangat mahal.
- Jangan memakai ulang pipa tekanan tinggi yang sudah beberapa kali dilepas-pasang; ujung konisnya mengalami deformasi dan akan bocor.

Point of Concern
- Rail menyimpan tekanan sangat tinggi bahkan setelah engine dimatikan; waktu tunggu adalah bagian dari prosedur, bukan formalitas.
- Bahan bakar yang menetes ke manifold atau turbocharger panas dapat menyala tanpa sumber api lain.
- Engine yang dijalankan dengan kabin terangkat menempatkan teknisi sangat dekat dengan komponen berputar dan panas.

Common Mistakes
- Melepas pipa tekanan tinggi saat engine berjalan untuk mencari silinder yang bermasalah — hindari dengan metode diagnosa elektronik dan larangan mutlak.
- Menampung bahan bakar dengan ember terbuka di dekat sumber panas — hindari dengan wadah tertutup dan area bebas sumber api.
- Menyalakan engine sebelum tumpahan bahan bakar dibersihkan — hindari dengan pembersihan tuntas sebagai syarat sebelum start.

Golden Rules
- Pipa bahan bakar tekanan tinggi tidak pernah dilepas saat engine berjalan.
- Tidak ada api, percikan, atau rokok di area kerja sistem bahan bakar.
- Tumpahan bahan bakar dibersihkan tuntas sebelum engine dinyalakan.

Critical Controls
- Engine mati, tekanan rail turun, kelistrikan diisolasi sebelum membuka sambungan.
- Wadah penampung sesuai dan APAR kelas B di titik kerja.
- Rem parkir, gigi netral, dan ganjal roda saat engine dijalankan untuk pengujian.
- Kontrol kontaminasi (cap semua ujung terbuka, area bersih).
- Pemeriksaan kebocoran pada kondisi bertekanan sebelum serah terima.

Required PPE
- Mandatory PPE: Safety helmet, safety glasses, safety shoes, coverall, sarung tangan kerja.
- Additional PPE: **Face shield + goggles**, sarung tangan tahan kimia, apron, ear plug, respirator bila kabut bahan bakar pekat.

Emergency Response
- Potensi Keadaan Darurat: Fluid injection injury bahan bakar, kebakaran engine, keracunan uap bahan bakar, kendaraan bergerak sendiri.
- Respon Awal: **Korban semburan bahan bakar bertekanan langsung dirujuk ke rumah sakit sebagai kasus bedah darurat meskipun luka luar tampak kecil**; padamkan api kecil dengan APAR kelas B dan evakuasi bila membesar; pindahkan korban paparan uap ke udara segar.
- Peralatan Darurat yang Diperlukan: APAR kelas B & ABC, eyewash & safety shower, spill kit hidrokarbon, kotak P3K, alat komunikasi.

Keterangan
Modul ini didahului oleh JSEA-TRK-02 bila pekerjaan memerlukan tilting kabin, dan oleh JSEA-TRK-03 bila tekanan sistem rem perlu dilepas lebih dulu.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

## JSEA-TRK-05

Proses / Pekerjaan: Pekerjaan pada Engine, Sistem Pendingin, Sistem Gas Buang, DPF/SCR, dan Larutan Urea (AdBlue/DEF)

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Menunggu engine dingin dan membuang tekanan sistem pendingin sebelum membuka tutup coolant | • (H) **Sistem pendingin bertekanan tinggi saat engine hangat**<br>• (H) Coolant panas menyembur<br>• (H) Coolant bersifat toksik bila tertelan<br>• (E) Coolant bekas = limbah B3 | • (H) **Luka bakar berat pada wajah dan tubuh**<br>• (H) **Keracunan: sakit kepala, pusing, nyeri perut, henti napas, kehilangan kesadaran, muntah, kejang**<br>• (E) Pencemaran tanah & air | **Critical Control:** **Tunggu suhu coolant turun di bawah 90 °C**; **buka tutup coolant secara perlahan — untuk tutup konvensional putar sampai slot penahan pertama, untuk tutup berulir putar sekitar setengah putaran untuk melepas tekanan** sebelum dibuka penuh.<br>**Administrative:** **Dilarang mengisi coolant ke dalam botol minuman**; wadah berlabel jelas.<br>**Environmental:** Coolant bekas ke TPS Limbah B3.<br>**PPE:** **Sarung tangan pelindung, pakaian pelindung, dan pelindung mata wajib**. | OEM Manual (**Wait for the temperature of coolant lower than 90℃. Open the coolant cap slowly; rotate it to the first locating slot... rotate about 1/2 circle and release the pressure. Wear protective gloves, protective clothing and protective eyewear. Do not inject coolant into the beverage bottle**); PP No. 22/2021; Permenaker No. 5/2018 |
| 2 | Menguras dan mengganti oli engine serta filter | • (H) **Oli panas menyebabkan luka bakar**<br>• (H) Kontak kulit berulang dengan oli bekas<br>• (E) Oli bekas = limbah B3 | • (H) Luka bakar, dermatitis, risiko jangka panjang<br>• (E) Pencemaran tanah & air | **Administrative:** **Hindari kontak dengan oli engine sebisa mungkin; cuci kulit dengan sabun dan air; segera ganti pakaian yang terkontaminasi**.<br>**Engineering:** Wadah drain berkapasitas cukup; pompa transfer.<br>**Environmental:** Oli bekas & filter ke TPS Limbah B3 dengan logbook dan manifest.<br>**PPE:** Sarung tangan nitril, apron, goggles. | OEM Manual (Avoid contacting with engine oil as much as possible, wash the skin with soap and water. Replace soiled clothing as soon as possible); PP No. 22/2021; Permen LHK No. 6/2021 |
| 3 | Bekerja pada sistem gas buang, turbocharger, dan komponen terkait | • (H) **Permukaan sangat panas**<br>• (H) **Bagian gas maupun padat dari gas buang berisiko asfiksia dan keracunan**<br>• (H) Kontak kulit dengan partikel padat gas buang<br>• (E) Emisi gas buang | • (H) **Luka bakar, asfiksia, keracunan**<br>• (E) Pencemaran udara | **Critical Control:** Tunggu sistem gas buang dingin sebelum disentuh; **ventilasi wajib memadai — bila engine harus dijalankan di dalam bengkel, kondisi ventilasi wajib diperiksa lebih dulu**; exhaust extraction terpasang.<br>**Administrative:** Larangan menjalankan engine di ruang tertutup tanpa penyedot gas buang.<br>**PPE:** Sarung tangan tahan panas, respirator partikulat bila menangani jelaga. | OEM Manual (**There is a risk of burns, asphyxiation and poisoning when operating exhaust systems and related components** / the ventilation situation of the workshop must be checked); Permenaker No. 5/2018 |
| 4 | **Bekerja pada katalis SCR / DPF, termasuk pembersihan dengan udara bertekanan (blasting)** | • (S) **Katalis SCR bertekanan berpotensi meledak**<br>• (S) **Ledakan udara menghasilkan kebisingan sangat keras**<br>• (H) **Partikel melayang, serat, dan serpihan logam dari proses blasting**<br>• (H) Inhalasi partikel karbon & serat<br>• (E) Debu jelaga & serat | • (S) **Ledakan katalis — cedera serius**<br>• (H) **Cedera kulit & mata oleh serpihan; kerusakan pendengaran; asfiksia akibat inhalasi partikel karbon dan serat**<br>• (E) Pencemaran udara | **Critical Control:** **Tekanan pada katalis SCR berpotensi menyebabkan ledakan** — buang tekanan dan pastikan sistem dingin sebelum dibuka; **pembersihan dengan udara bertekanan hanya di area terkendali dengan penyedot debu**, tidak di area terbuka bengkel.<br>**Engineering:** Booth/enclosure dengan LEV; peredam kebisingan.<br>**Administrative:** Batasi jumlah personel di area; larangan mengarahkan udara bertekanan ke tubuh.<br>**PPE:** **Face shield + goggles, respirator partikulat (minimal P2/P3), ear muff**, sarung tangan, coverall lengan panjang. | OEM Manual (**Contact selective catalytic reduction (SCR) catalytic converters produce suspended particles and fibers and metal fragments produced during the blast have the risk of skin and eye injuries. The loud noise from the air explosion has the risk of hearing damage. Inhalation of carbon particles and fibers has a risk of asphyxiation. Pressure on selective catalytic reduction (SCR) catalytic converters has the potential to cause in an explosion**); Permenaker No. 5/2018; Permenaker No. 8/2010 |
| 5 | Menangani larutan urea (AdBlue/DEF) dan saluran urea | • (H) **Kabut urea panas dan saluran larutan urea berisiko luka bakar**<br>• (H) **Cedera kulit dan mata saat menangani larutan urea konsentrasi 35%**<br>• (H) Keracunan bila tertelan<br>• (E) Tumpahan urea ke tanah & saluran air | • (H) **Luka bakar, iritasi kulit & mata, keracunan**<br>• (E) Pencemaran nutrien pada badan air | **Critical Control:** Tunggu sistem dingin dan lepaskan tekanan saluran urea sebelum membuka sambungan; gunakan **hanya wadah dan peralatan khusus urea**; jangan mencampur urea dengan bahan bakar, oli, atau air keran.<br>**Engineering:** Ventilasi memadai; wadah penampung.<br>**Environmental:** Tumpahan dibilas air bersih sebelum mengkristal; jangan dibiarkan masuk drainase.<br>**PPE:** Goggles, sarung tangan nitril, apron. | OEM Manual (**There is a risk of burns and scalds upon the operation in the urea mist urea solution pipeline and the associated components. There is a risk of injury to the skin and eyes when dealing with urea (urea solution with a concentration of 35%). Swallowing urea solution has the risk of poisoning**); PP No. 22/2021 |
| 6 | Menjalankan engine untuk pengujian dan regenerasi | • (S) **Kendaraan dapat bergerak sendiri saat engine hidup**<br>• (S) **Tubuh tertarik ke dalam bagian yang berputar dapat menyebabkan kematian**<br>• (H) **Suhu gas buang sangat tinggi saat regenerasi**<br>• (E) Emisi | • (S) **Kematian akibat terjerat komponen berputar**<br>• (S) Kendaraan menabrak orang/objek<br>• (H) Luka bakar; kebakaran material di bawah kendaraan<br>• (E) Pencemaran udara | **Critical Control:** **Bila tubuh tertarik ke dalam bagian kendaraan yang berputar, dapat menyebabkan kematian** — semua guard terpasang, pakaian tidak longgar, tanpa perhiasan, rambut panjang diikat; rem parkir aktif, gigi netral, ganjal roda terpasang; area depan & belakang kendaraan bebas.<br>**Engineering:** Regenerasi dilakukan di area terbuka atau dengan exhaust extraction, jauh dari material mudah terbakar.<br>**Administrative:** Barikade; larangan mendekati knalpot selama regenerasi; APAR siap.<br>**PPE:** Ear plug, sarung tangan tahan panas. | OEM Manual (**If the body is dragged into the rotating parts of the vehicle, it can cause in personnel death** / When high-temperature, rotating, moving or vibrating part is operated, see to it that don't be burnt or injured); Permenaker No. 38/2016 |
| 7 | Pemeriksaan akhir kebocoran, level fluida, dan pengelolaan limbah | • (S) Kebocoran coolant/oli/urea pada sambungan baru<br>• (E) Limbah B3 dari pekerjaan | • (S) Kegagalan komponen saat operasi, kebakaran<br>• (E) Pencemaran & pelanggaran pengelolaan limbah | **Administrative:** Uji kebocoran pada kondisi kerja; catat pada service history; level fluida sesuai spesifikasi.<br>**Environmental:** Seluruh limbah B3 (oli, coolant, filter, urea, majun) disegregasi dan diserahkan ke TPS Limbah B3 berizin dengan logbook & manifest.<br>**PPE:** Sarung tangan nitril. | PP No. 22/2021; Permen LHK No. 6/2021; ISO 14001:2015 |

Additional Safety Tips
- Suhu coolant di bawah 90 °C adalah ambang yang ditetapkan manual, tetapi sentuhan tangan telanjang tetap menjadi verifikasi praktis sebelum tutup dibuka.
- Bersihkan penumpukan material mudah terbakar di sekitar knalpot dan turbocharger secara berkala; regenerasi DPF menaikkan suhu area itu jauh di atas normal.
- Simpan urea pada rentang suhu yang disyaratkan dan terlindung dari sinar matahari langsung agar tidak terdegradasi.

Point of Concern
- Katalis SCR yang bertekanan berpotensi meledak; ini bahaya yang jarang disadari karena komponen terlihat pasif.
- Pembersihan DPF/SCR dengan udara bertekanan menghasilkan serat dan serpihan logam melayang yang berbahaya bagi mata dan saluran napas.
- Menjalankan engine di dalam bengkel tanpa penyedot gas buang menghasilkan akumulasi CO yang mematikan tanpa gejala peringatan yang jelas.

Common Mistakes
- Membuka tutup radiator saat engine masih hangat "sedikit dulu untuk melihat" — hindari dengan menunggu di bawah 90 °C dan membuka bertahap ke slot pertama.
- Membersihkan DPF dengan kompresor di area terbuka bengkel — hindari dengan booth berpenyedot debu dan respirator.
- Menuang coolant atau urea ke botol minuman bekas — hindari dengan wadah khusus berlabel.

Golden Rules
- Tutup coolant hanya dibuka pada suhu di bawah 90 °C dan secara bertahap.
- Tidak ada engine dijalankan di ruang tertutup tanpa ventilasi/penyedot gas buang.
- Semua guard terpasang dan pakaian tidak longgar sebelum engine dinyalakan.

Critical Controls
- Verifikasi suhu coolant dan pelepasan tekanan bertahap.
- Ventilasi/exhaust extraction saat engine dijalankan.
- Pengendalian debu dan respirator pada pekerjaan DPF/SCR.
- Peralatan khusus dan APD kimia untuk urea.
- Rem parkir, gigi netral, ganjal roda, dan area bebas saat engine dijalankan.

Required PPE
- Mandatory PPE: Safety helmet, safety glasses, safety shoes, coverall, sarung tangan kerja.
- Additional PPE: Pelindung mata & pakaian pelindung (coolant), sarung tangan tahan panas, respirator partikulat P2/P3 (DPF/SCR), ear muff, goggles & sarung tangan nitril (urea), apron.

Emergency Response
- Potensi Keadaan Darurat: Luka bakar coolant, keracunan coolant/urea, ledakan katalis SCR, keracunan CO, terjerat komponen berputar, kebakaran.
- Respon Awal: **Bilas area terdampak dengan air dingin dalam jumlah banyak dan balut dengan perban steril**; **bila korban tertelan coolant, minumkan air dan segera bawa ke dokter**; **bila coolant masuk mata, bilas segera dengan air mengalir dan segera ke dokter**; pindahkan korban paparan gas buang ke udara segar.
- Peralatan Darurat yang Diperlukan: Eyewash & safety shower, kotak P3K dengan perban steril, APAR, detektor CO untuk area tertutup, alat komunikasi.

Keterangan
Prosedur pertolongan pertama untuk coolant dan oli dalam modul ini dikutip langsung dari manual OEM; pastikan tim P3K di bengkel mengetahui bahwa coolant yang tertelan memerlukan penanganan dokter, bukan hanya observasi.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

## JSEA-TRK-06

Proses / Pekerjaan: Jacking dan Penopangan Kendaraan, Penggantian Ban dan Roda Truck

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Memastikan kendaraan dalam kondisi tanpa muatan sebelum didongkrak | • (S) **Kendaraan didongkrak dalam kondisi bermuatan**<br>• (S) Beban melampaui kapasitas dongkrak<br>• (E) Tidak Signifikan | • (S) **Dongkrak gagal, kendaraan jatuh menimpa pekerja — fatality**<br>• (E) Tidak Signifikan | **Critical Control:** **Prinsip: kendaraan wajib didongkrak dalam kondisi tanpa muatan; operasi ini tidak boleh dilakukan dalam kondisi bermuatan**.<br>**Administrative:** Verifikasi kondisi muatan sebelum mulai; bila bermuatan, muatan diturunkan atau dipindahkan lebih dulu.<br>**PPE:** APD dasar. | OEM Manual (**Principle: the vehicle must be jacked under no load condition; this operation must not be carried out under load condition**); Permenaker No. 8/2020 |
| 2 | Memperhitungkan perubahan titik berat bila komponen berat sudah dilepas | • (S) **Titik berat kendaraan berubah setelah komponen berat seperti engine atau transmisi dilepas**<br>• (E) Tidak Signifikan | • (S) **Kendaraan terguling saat didongkrak — fatality**<br>• (E) Tidak Signifikan | **Critical Control:** **Setelah komponen berat dilepas, pasang pemberat penyeimbang untuk mencegah kendaraan terguling, atau gunakan dongkrak untuk menopang kendaraan pada posisi yang ditentukan**.<br>**Administrative:** Nilai ulang kestabilan setiap kali komponen besar dilepas, bukan sekali di awal.<br>**PPE:** APD dasar. | OEM Manual (**The center of gravity of entire car will deviate after remove heavier parts, such as engine, and transmission. Be sure to place balancing weight to prevent vehicle from capsizing**); ISO 12100:2010 |
| 3 | Memarkir di lantai rata, menarik rem parkir, memasukkan gigi mundur, dan mengganjal roda diagonal | • (S) Kendaraan meluncur atau bergeser saat didongkrak<br>• (E) Tidak Signifikan | • (S) Kendaraan turun dari dongkrak — fatality<br>• (E) Tidak Signifikan | **Critical Control:** Kendaraan diparkir di jalan rata, rem parkir ditarik, tuas transmisi ke posisi mundur, dan **roda diganjal pada posisi diagonal terhadap titik yang akan didongkrak**.<br>**Engineering:** Chock block dengan bentuk & material yang sesuai.<br>**Administrative:** Verifikasi ganjal oleh orang kedua.<br>**PPE:** Rompi reflektif. | OEM Manual (Be sure to block wheel at the diagonal of the position needed to be jacked by chock block); Permenaker No. 38/2016 |
| 4 | **Mendongkrak kendaraan hanya pada titik jacking yang ditentukan** | • (S) **Mendongkrak pada titik yang salah**<br>• (S) **Mendongkrak seluruh kendaraan sekaligus**<br>• (S) Dongkrak amblas pada permukaan lunak<br>• (E) Tidak Signifikan | • (S) **Kerusakan kendaraan bahkan membahayakan keselamatan personel**<br>• (S) Kendaraan jatuh — fatality<br>• (E) Tidak Signifikan | **Critical Control:** **Dilarang mendongkrak seluruh kendaraan sekaligus, karena dapat merusak kendaraan bahkan membahayakan keselamatan personel; kendaraan wajib didongkrak pada posisi jacking yang ditetapkan**; **gunakan dongkrak yang dilengkapi rubber block**.<br>**Engineering:** Plat dasar lebih lebar pada permukaan lunak; dongkrak berkapasitas sesuai dan tersertifikasi.<br>**Administrative:** **Dilarang menggunakan tommy bar untuk mengangkat ban** karena merusak roda dan ban.<br>**PPE:** Safety shoes toe cap, sarung tangan. | OEM Manual (**Be sure not to jack up complete vehicle, in order to avoid damaging the vehicle, even endangering personnel safety. Be sure to jack up vehicle at stated jacking position** / The vehicle shall be jacked by jack that has rubber block / Be sure not to use tommy bar to raise tyre); Permenaker No. 8/2020 |
| 5 | **Memasang safety support platform sebelum siapa pun bekerja di bawah kendaraan** | • (S) **Kendaraan hanya ditopang dongkrak hidrolik**<br>• (S) Penopang tidak berkapasitas atau tidak stabil<br>• (E) Tidak Signifikan | • (S) **Kendaraan jatuh menimpa pekerja di kolong — fatality**<br>• (E) Tidak Signifikan | **Critical Control:** **Setelah kendaraan didongkrak, kendaraan wajib ditopang dengan safety support platform yang dilengkapi rubber block**; **saat kendaraan didongkrak, dudukan/penopang darurat wajib dipasang di dekat titik tumpu**; **saat kendaraan diangkat, wajib menggunakan peralatan pengaman**.<br>**Administrative:** Verifikasi kestabilan oleh orang kedua sebelum masuk kolong; goyang uji ringan sebelum masuk.<br>**PPE:** Helm, safety glasses. | OEM Manual (**After vehicle is jacked by jack, the vehicle may be supported by safety platform with rubber block** / **When vehicle is jacked up, emergency seat must be set near the supporting point. When vehicle is lifted up, it must adopt security equipment**); OSHA 29 CFR 1926.600 |
| 6 | Melepas roda, memeriksa kondisi ban dan rim, memasang kembali, dan mengencangkan mur roda | • (S) **Ban bertekanan tinggi**<br>• (S) Rim retak atau komponen rusak<br>• (S) Roda berat jatuh saat dilepas<br>• (H) Beban angkat sangat berat<br>• (E) Ban bekas & limbah | • (S) **Ledakan ban — fatality**<br>• (S) **Roda lepas saat kendaraan berjalan — fatality**<br>• (H) Cedera punggung, kaki tertimpa<br>• (E) Limbah ban | **Critical Control:** Ban dikempiskan penuh sebelum komponen rim atau mur roda dikendurkan; rim retak, deformasi, atau korosi berat diafkir — **dilarang diperbaiki dengan las atau pemanasan**; pengisian angin dilakukan di safety cage dengan operator pada posisi aman.<br>**Engineering:** Tyre handler/trolley untuk memindahkan roda; torque wrench untuk pengencangan akhir.<br>**Administrative:** Torsi mur roda sesuai spesifikasi OEM dengan urutan silang; **verifikasi ulang torsi setelah beberapa jam operasi awal**; tekanan ban diperiksa dalam kondisi dingin.<br>**PPE:** Face shield, sarung tangan anti-impact, safety shoes toe cap. | OEM Manual (Wheel and Tire — Service data & Torque requirements); OSHA 29 CFR 1910.177; Permenaker No. 8/2020 |
| 7 | Menurunkan kendaraan, melepas penopang, dan verifikasi akhir | • (S) Kendaraan turun saat orang masih di kolong<br>• (S) Mur roda kurang torsi<br>• (E) Tidak Signifikan | • (S) Terjepit — fatality<br>• (S) Roda lepas di jalan — fatality<br>• (E) Tidak Signifikan | **Critical Control:** Verifikasi seluruh personel dan tool keluar dari kolong sebelum kendaraan diturunkan; torsi mur roda diverifikasi dengan torque wrench dan dicatat.<br>**Administrative:** Tool count in–out; uji jalan singkat lalu periksa ulang torsi; ganjal dilepas terakhir.<br>**PPE:** Sarung tangan, rompi reflektif. | OEM Manual (Torque requirements); ISO 9001:2015 kl. 7.1.5 |

Additional Safety Tips
- Dongkrak dengan rubber block mencegah kerusakan pada titik tumpu sekaligus mengurangi risiko selip.
- Bila komponen berat sudah dilepas, jangan mengandalkan perkiraan; pasang pemberat penyeimbang atau tambah titik tumpu sesuai manual.
- Periksa ulir stud roda; ulir yang rusak lebih dari tiga alur wajib diganti, bukan dipaksa dipakai.

Point of Concern
- Manual secara khusus melarang mendongkrak seluruh kendaraan sekaligus; praktik ini merusak rangka dan mengurangi kestabilan tumpuan.
- Titik berat truck berubah drastis setelah engine atau transmisi dilepas, dan ini sering tidak diperhitungkan ulang saat kendaraan didongkrak kembali.
- Roda truck berbobot puluhan hingga ratusan kilogram; penanganan manual tanpa alat bantu adalah sumber cedera punggung dan kaki yang berulang.

Common Mistakes
- Menggunakan tommy bar untuk mengungkit ban — hindari dengan dongkrak pada titik jacking yang benar.
- Bekerja di kolong dengan kendaraan hanya di atas dongkrak — hindari dengan safety support platform wajib.
- Mengencangkan mur roda dengan impact wrench tanpa torsi akhir terukur — hindari dengan torque wrench dan verifikasi ulang setelah operasi awal.

Golden Rules
- Kendaraan didongkrak hanya dalam kondisi tanpa muatan dan hanya pada titik jacking yang ditetapkan.
- Tidak seorang pun bekerja di bawah kendaraan yang hanya ditopang dongkrak.
- Ban dikempiskan penuh sebelum mur roda atau komponen rim disentuh.

Critical Controls
- Verifikasi kendaraan tanpa muatan sebelum jacking.
- Rem parkir, gigi mundur, ganjal roda diagonal.
- Jacking hanya pada titik yang ditetapkan, dengan dongkrak ber-rubber block.
- Safety support platform terpasang sebelum masuk kolong.
- Torsi mur roda terverifikasi dan diperiksa ulang setelah operasi awal.

Required PPE
- Mandatory PPE: Safety helmet, safety glasses, safety shoes toe cap, coverall, sarung tangan kerja.
- Additional PPE: Face shield (pekerjaan ban), sarung tangan anti-impact, rompi reflektif.

Emergency Response
- Potensi Keadaan Darurat: Kendaraan jatuh dari dongkrak, ledakan ban, roda jatuh menimpa pekerja.
- Respon Awal: Hentikan pekerjaan dan jangan mencoba menahan kendaraan; jangan mendekati ban yang baru meledak atau panas berlebih; aktifkan ERT dan siapkan alat angkat sebelum pemindahan korban.
- Peralatan Darurat yang Diperlukan: Kotak P3K, spine board, dongkrak & penopang cadangan, alat komunikasi, akses evakuasi medis.

Keterangan
Modul ini berlaku baik di bengkel maupun saat penggantian ban di lapangan oleh mobile workshop; bila dilakukan di pinggir jalan, seluruh kontrol pada JSEA-RSA-02 tentang pengamanan lokasi berlaku bersamaan.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

## JSEA-TRK-07

Proses / Pekerjaan: Pekerjaan pada Propeller Shaft, Axle, Kopling, Transmisi, dan Sistem Kemudi

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Menyiapkan unit: parkir rata, isolasi energi, ganjal roda depan dan belakang sebelum melepas axle | • (S) Kendaraan bergerak saat driveline dilepas<br>• (S) **Kendaraan meluncur bebas setelah propshaft dilepas**<br>• (E) Tidak Signifikan | • (S) **Kendaraan meluncur menabrak/melindas — fatality**<br>• (E) Tidak Signifikan | **Critical Control:** **Saat melepas rear axle assembly, ganjal roda depan dan belakang dengan balok kayu**; ingat bahwa melepas propshaft menghilangkan penahanan driveline sehingga rem parkir tipe transmisi tidak lagi berfungsi.<br>**Administrative:** Ikuti JSEA-TRK-01 dan TRK-06; verifikasi ganjal oleh orang kedua.<br>**PPE:** Rompi reflektif, safety shoes. | OEM Manual (**While removing the rear axle assembly, block the front and rear wheels by triangular woods**); Permenaker No. 38/2016 |
| 2 | Menguras oli gear axle dan transmisi sebelum pembongkaran | • (H) Oli gear panas & berbau<br>• (H) Kontak kulit berulang<br>• (E) Oli bekas volume besar = limbah B3 | • (H) Luka bakar, dermatitis<br>• (E) Pencemaran tanah | **Critical Control:** **Kuras seluruh oli gear sebelum pembongkaran dan perbaikan rear axle assembly**; tunggu suhu turun.<br>**Engineering:** Wadah drain berkapasitas cukup; pompa transfer.<br>**Environmental:** Oli bekas ke TPS Limbah B3 dengan logbook & manifest.<br>**PPE:** Sarung tangan nitril & tahan panas, goggles, apron. | OEM Manual (**Fully drain the gear oil before breakdown and repair of rear axle assembly**); PP No. 22/2021 |
| 3 | Melepas dan memasang propeller shaft dengan alat bantu angkat | • (S) **Torsi tersimpan pada propeller shaft**<br>• (S) Propshaft berat jatuh saat baut terakhir dilepas<br>• (S) **Tubuh tertarik ke bagian berputar bila engine dijalankan**<br>• (H) Postur kerja telentang di kolong | • (S) **Shaft berputar mendadak atau jatuh menimpa pekerja**<br>• (S) **Kematian bila tubuh tertarik ke komponen berputar**<br>• (H) MSD | **Critical Control:** **Bila tubuh tertarik ke dalam bagian kendaraan yang berputar, dapat menyebabkan kematian** — engine mati dan power master switch OFF sebelum bekerja pada driveline; bebaskan torsi shaft sebelum baut terakhir dilepas.<br>**Engineering:** **Letakkan drive shaft assembly di atas hydraulic car (troli hidrolik) dan angkat sejajar dengan flange output gearbox dan flange input intermediate axle**; penopang shaft saat baut dilepas.<br>**Administrative:** **Pastikan tanda arah maju menghadap ke depan dan tanda pemasangan sejajar** saat perakitan; torsi baut sesuai spesifikasi.<br>**PPE:** Sarung tangan, safety shoes toe cap, goggles. | OEM Manual (**Put drive shaft assembly on hydraulic car and lift the assembly to be flush with output flange of gear-box and input flange of intermediate axis... Torque: 178~218 N•m. Ensure forward mark is forward, and installation marks are flush** / If the body is dragged into the rotating parts of the vehicle, it can cause in personnel death); Permenaker No. 8/2020 |
| 4 | Melepas dan memasang assembly axle, wheel hub, knuckle, dan komponen berat lainnya | • (S) **Komponen berat terjepit dan menekan tangan/kaki**<br>• (S) Beban jatuh saat pengangkatan<br>• (H) Angkat manual berlebih<br>• (E) Ceceran oli & grease | • (S) **Terjepit dan tertekan hingga patah tulang tangan dan kaki pada kasus serius**<br>• (H) Cedera punggung<br>• (E) Pencemaran | **Critical Control:** **Penanganan komponen dapat menjepit dan menekan, bahkan menyebabkan patah tulang tangan dan kaki pada kondisi serius** — gunakan alat angkat/troli untuk seluruh komponen di atas batas angkat manual; tangan tidak berada di antara komponen dan dudukan.<br>**Engineering:** Hydraulic car/transmission jack; special tool sesuai manual.<br>**Administrative:** **Seluruh part karet — O-ring, oil seal, gasket — wajib diafkir setelah dilepas dan dilarang dipakai ulang**; periksa part dengan alat ukur khusus terhadap tabel kriteria perawatan.<br>**PPE:** Sarung tangan anti-impact, safety shoes toe cap. | OEM Manual (**Handling parts will be clamped and extruded, will also cause in hand and foot fractures when seriousness** / All rubber parts, such as O-ring, oil seal, and gasket, shall be scrapped once being removed and are prohibited for reuse); Permenaker No. 5/2018 |
| 5 | Membongkar dan menyetel kopling serta mekanisme pengatur tekanan kopling | • (S) **Anggota tubuh terjepit atau tertekan saat mengoperasikan pressure clutch regulator**<br>• (S) Pegas kopling terkompresi<br>• (H) Debu kampas kopling<br>• (E) Debu friksi = limbah B3 | • (S) **Tangan terjepit; komponen terlempar oleh energi pegas**<br>• (H) Iritasi saluran napas<br>• (E) Limbah B3 | **Critical Control:** **Terdapat risiko terjepit atau tertekan pada anggota tubuh selama pengoperasian pressure clutch regulator** — jaga tangan keluar dari zona jepit; lepaskan energi pegas secara terkendali dengan special tool.<br>**Engineering:** Special tool kopling; **debu kampas tidak ditiup dengan udara bertekanan** — gunakan metode basah atau vakum HEPA.<br>**Administrative:** Penyetelan sesuai nilai spesifikasi manual.<br>**PPE:** Respirator partikulat, goggles, sarung tangan. | OEM Manual (**There is a crushed or squeezed risk to the limb during the operation of the pressure clutch regulator** / Clutch — Service data); Permenaker No. 5/2018; PP No. 22/2021 |
| 6 | Bekerja pada sistem kemudi: gear box kemudi, poros kemudi, dan pompa power steering | • (S) **Berada dalam rentang ayun poros kemudi berisiko terjepit**<br>• (S) **Oli power steering bertekanan tinggi**<br>• (H) Keracunan bila oli kemudi tertelan<br>• (E) Ceceran oli hidrolik | • (S) **Terjepit oleh poros kemudi yang berayun**<br>• (S) **Cedera akibat semburan oli kemudi bertekanan tinggi**<br>• (H) Keracunan<br>• (E) Pencemaran | **Critical Control:** **Berdiri dalam rentang ayun poros kemudi dapat menyebabkan risiko terjepit** — tidak seorang pun berada di area ayun saat kemudi digerakkan; komunikasi positif antara orang di kabin dan yang di bawah.<br>**Engineering:** **Kuras oli hidrolik dari steering gear** sebelum membuka sambungan; wadah penampung.<br>**Administrative:** **Oli kemudi bertekanan tinggi dapat menyebabkan cedera; tertelan dapat menyebabkan keracunan** — deteksi kebocoran dengan kertas, bukan tangan.<br>**PPE:** Face shield, sarung tangan nitril. | OEM Manual (**Staying in the swing range of the steering shaft can cause in the crushed risk** / **High pressure steering engine oil may cause injury. Ingestion of steering engine oil may cause in poisoning** / Drain the hydraulic oil from steering gear); Permenaker No. 37/2016 |
| 7 | Merakit kembali, mengencangkan sesuai torsi, dan menguji fungsi driveline serta kemudi | • (S) Torsi sambungan driveline tidak sesuai<br>• (S) **Uji jalan dengan komponen belum sempurna**<br>• (E) Tidak Signifikan | • (S) **Propshaft lepas saat kendaraan berjalan — fatality**<br>• (S) Kehilangan kendali kemudi di jalan<br>• (E) Tidak Signifikan | **Critical Control:** **Wajib menggunakan kunci torsi** dan mengikuti seluruh spesifikasi torsi pengencangan; verifikasi tanda pemasangan sejajar; uji fungsi kemudi dan driveline di area bebas sebelum uji jalan.<br>**Administrative:** **Periksa ulir baut, stud, dan sekrup sebelum digunakan — bila lebih dari tiga ulir rusak, wajib diganti**; tool count in–out; catat pada service history.<br>**PPE:** APD dasar, rompi reflektif. | OEM Manual (**Carefully observe all specifications about fastening torque of bolt. Tension wrench must be used** / check the thread of bolt, stud and screw... if more than three threads are damaged, it must be replaced); ISO 9001:2015 kl. 7.1.5 |

Additional Safety Tips
- Gunakan troli hidrolik untuk memposisikan propeller shaft agar sejajar dengan flange; menahan dengan tangan menimbulkan risiko terjepit dan cedera punggung.
- Tanda arah maju dan tanda pemasangan pada propshaft bukan formalitas; pemasangan terbalik menimbulkan getaran dan kegagalan dini.
- Ganti seluruh komponen karet setelah dibongkar; ini instruksi eksplisit manual, bukan rekomendasi.

Point of Concern
- Propeller shaft yang berputar adalah salah satu penyebab kematian klasik di bengkel truck ketika engine dijalankan dengan orang berada di kolong.
- Poros kemudi memiliki rentang ayun yang mematikan bagi tangan yang berada di dalamnya saat kemudi diputar dari kabin.
- Melepas propshaft menghilangkan efek penahanan driveline; kendaraan dapat meluncur bebas meskipun terlihat "terkunci".

Common Mistakes
- Menjalankan engine untuk memutar shaft agar baut mudah dijangkau — hindari dengan memutar shaft secara manual pada unit yang sudah diisolasi.
- Memutar kemudi dari kabin tanpa memberi tahu rekan yang berada di area poros kemudi — hindari dengan komunikasi positif dan aba-aba tunggal.
- Memakai ulang oil seal dan O-ring untuk menghemat waktu — hindari dengan menyiapkan seal kit lengkap sebelum pembongkaran.

Golden Rules
- Engine mati dan daya diputus sebelum bekerja pada driveline.
- Tidak seorang pun berada di rentang ayun poros kemudi saat kemudi digerakkan.
- Torsi seluruh sambungan driveline diverifikasi dengan kunci torsi.

Critical Controls
- Ganjal roda depan dan belakang sebelum axle atau propshaft dilepas.
- Isolasi energi terverifikasi sebelum masuk kolong.
- Alat bantu angkat/troli untuk propshaft dan komponen berat.
- Komunikasi positif untuk pekerjaan sistem kemudi.
- Torsi sambungan driveline terverifikasi dan didokumentasikan.

Required PPE
- Mandatory PPE: Safety helmet, safety glasses, safety shoes toe cap, coverall pas badan, sarung tangan kerja.
- Additional PPE: Face shield, goggles, respirator partikulat (kampas kopling), sarung tangan anti-impact & nitril.

Emergency Response
- Potensi Keadaan Darurat: Terjerat propshaft, terjepit komponen berat, semburan oli kemudi bertekanan, kendaraan meluncur.
- Respon Awal: Matikan engine dan putus daya segera; jangan menggerakkan kemudi atau menyalakan engine untuk membebaskan korban tanpa arahan tim penyelamat; korban semburan oli bertekanan dirujuk sebagai kasus bedah darurat.
- Peralatan Darurat yang Diperlukan: Kotak P3K dengan tourniquet, spine board, alat angkat cadangan, alat komunikasi, akses evakuasi medis.

Keterangan
Bila pekerjaan pada driveline dilakukan bersamaan dengan pelepasan komponen berat lain, kestabilan kendaraan wajib dinilai ulang sesuai JSEA-TRK-06 tahapan No. 2.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

## JSEA-TRK-08

Proses / Pekerjaan: Pekerjaan pada Sistem Kelistrikan, Baterai, Pengelasan pada Kendaraan, dan Sistem AC / Refrigerant

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Mengisolasi kelistrikan: power master switch OFF dan melepas kabel negatif baterai | • (S) Korsleting & arc flash<br>• (S) **Kontak dengan komponen kendaraan bertegangan tinggi mengancam jiwa**<br>• (E) Tidak Signifikan | • (S) **Sengatan listrik fatal, kebakaran kelistrikan**<br>• (E) Tidak Signifikan | **Critical Control:** **Kontak dengan komponen kendaraan yang terhubung jaringan listrik bertegangan tinggi mengancam jiwa** — isolasi total sebelum bekerja; **kabel negatif dilepas dari terminal baterai sebelum bekerja pada perangkat kelistrikan**.<br>**Engineering:** Kunci bergagang terisolasi; multimeter untuk verifikasi tegangan nol.<br>**Administrative:** LOTO pada power master switch; **saat mengganti sekring, gunakan hanya nilai arus yang sesuai — sekring dengan nilai lebih besar maupun lebih kecil dilarang**.<br>**PPE:** Sarung tangan isolasi, face shield. | OEM Manual (**Contact with the vehicle components with high voltage power grid is life-threatening** / Before work on electric appliance, negative cable shall be taken down / When replacing fuse, ensure rated value of current intensity of new fuse is correct); Permenaker No. 12/2015 |
| 2 | Menangani baterai: pemeriksaan, pengisian, penggantian, dan penanganan baterai rusak | • (S) **Gas baterai berisiko meledak**<br>• (S) Kerusakan akibat korsleting<br>• (H) **Elektrolit korosif terhadap mata, kulit, dan selaput lendir**<br>• (E) Baterai bekas = limbah B3 | • (S) **Ledakan baterai — cedera mata & luka bakar berat**<br>• (H) **Keracunan bila elektrolit tertelan; luka bakar akibat perubahan suhu**<br>• (E) Pencemaran asam & logam berat | **Critical Control:** **Gas baterai berisiko meledak** — dilarang api terbuka, percikan, atau merokok di sekitar baterai; ventilasi memadai; terminal negatif dilepas pertama dan dipasang terakhir; **bahkan baterai lead-acid yang rusak pun dapat menyebabkan cedera saat ditangani**, demikian pula **gel pada baterai lead gel yang rusak**.<br>**Engineering:** Battery carrier untuk mengangkat; larangan meletakkan tool logam di atas baterai.<br>**Environmental:** Baterai bekas ke TPS Limbah B3 berizin.<br>**PPE:** **Face shield + goggles, sarung tangan tahan asam, apron**. | OEM Manual (**The gas is at risk of explosion. Ingestion of the battery electrolyte is at risk of poisoning and burns. The battery electrolyte can damage the skin and eyes. Even if the damaged lead-acid batteries are handled, they may also cause injury** / When handling the damaged lead gel batteries, there is a risk of injury if exposed to the gel); PP No. 22/2021 |
| 3 | Melakukan pengelasan pada kendaraan | • (S) **Tegangan tinggi pada las busur dapat mematikan**<br>• (S) **Risiko ledakan di area dengan bahaya mudah terbakar tinggi**<br>• (S) Percikan terak las & radiasi UV<br>• (H) **Keracunan akibat inhalasi gas las**<br>• (E) Fume & limbah elektroda | • (S) **Sengatan listrik fatal, kebakaran/ledakan**<br>• (H) **Cedera akibat percikan terak dan ultraviolet; keracunan fume**<br>• (E) Pencemaran udara | **Critical Control:** **Tegangan tinggi yang digunakan pada las busur dapat mematikan; risiko ledakan timbul di area dengan bahaya mudah terbakar tinggi** — Hot Work Permit, jauhkan bahan bakar/baterai/ban, APAR di titik kerja, fire watch.<br>**Engineering:** Isolasi kelistrikan & baterai dilepas sebelum mengelas; titik massa dekat lokasi las dan **tidak melewati bearing atau gear**; tabir las; LEV.<br>**Administrative:** Juru las berkualifikasi; **komponen rusak atau berkarat diganti seluruhnya — dilarang memperbaiki dengan permesinan atau pengelasan** kecuali disetujui pabrikan.<br>**PPE:** Helm las shade sesuai, apron & sarung tangan kulit, respirator fume, ear plug. | OEM Manual (**The high voltage used in arc welding can be fatal. The risk of explosion will be caused in the area where there is a high risk of flammability. When welding, the welding slag splash and ultraviolet has injury risk. The risk of poisoning is caused by inhalation of welding gases**); Permenaker No. 2/1982; NFPA 51B |
| 4 | Bekerja pada sistem AC: uji kebocoran, recovery, dan pengisian refrigerant | • (S) **Pengelasan atau brazing pada sistem AC tertutup dapat menyebabkan ledakan**<br>• (S) **Kerusakan pada rakitan refrigerant menimbulkan risiko cedera**<br>• (H) **Kontak refrigerant cair mencederai kulit dan mata; inhalasi uap superheated berisiko keracunan**<br>• (E) Pelepasan refrigerant ke atmosfer | • (S) **Ledakan sistem AC**<br>• (H) **Frostbite, cedera mata permanen, keracunan**<br>• (E) Pelanggaran pengendalian bahan perusak ozon & emisi GRK | **Critical Control:** **Dilarang mengelas atau brazing pada sistem AC yang masih tertutup dan berisi refrigerant — dapat menyebabkan ledakan**; refrigerant wajib di-recovery dengan mesin recovery oleh teknisi bersertifikat, **tidak dilepas ke atmosfer**.<br>**Engineering:** Manifold gauge sesuai jenis refrigerant; ventilasi — refrigerant lebih berat dari udara dan terkumpul di area rendah.<br>**Administrative:** Uji kebocoran dengan detektor, bukan api; catat jumlah recovery & pengisian.<br>**PPE:** **Face shield + goggles, sarung tangan tahan dingin**, coverall lengan panjang. | OEM Manual (**Welding or brazing on a closed air conditioning system may cause in an explosion. The risk of poisoning is caused by inhalation of superheated steam. Contact with liquid refrigerant has the risk of skin and eye injury** / The risk of injury will be caused when the refrigerant assembly is damaged); Permen LHK tentang Bahan Perusak Ozon |
| 5 | Menangani solvent, perekat, preservative, dan bahan kimia bengkel lainnya | • (S) **Uap solvent dan gas berisiko meledak**<br>• (H) **Keracunan akibat inhalasi uap perekat; cedera kulit & mata oleh perekat dan preservative**<br>• (H) **Luka bakar kulit & mata saat bekerja dengan shrink tube; keracunan akibat inhalasi asap**<br>• (E) Limbah kimia B3 | • (S) **Ledakan uap solvent**<br>• (H) Keracunan, iritasi, luka bakar kimia<br>• (E) Pencemaran | **Critical Control:** **Uap solvent dan gas berisiko meledak dan meracuni** — ventilasi memadai, jauhkan sumber api, SDS tersedia dan dipahami.<br>**Engineering:** LEV di area penggunaan bahan kimia; wadah tertutup.<br>**Administrative:** Larangan makan/minum di area; batasi durasi paparan.<br>**Environmental:** Kemasan & sisa bahan ke TPS Limbah B3.<br>**PPE:** Respirator uap organik, goggles, sarung tangan tahan kimia. | OEM Manual (**Solvent steam and gases are at risk of explosion and poisoning** / The risk of poisoning may be caused by inhalation of a binder steam or a binder / There is the risk of burns to the skin and eyes when working on a shrink tube); Permenaker No. 5/2018 |
| 6 | Menyambung kembali kelistrikan, uji fungsi, dan penutupan | • (S) Konektor tidak tersambung / salah pasang<br>• (S) Harness tergesek atau terjepit<br>• (E) Limbah kabel & komponen | • (S) **Korsleting dan kebakaran saat kendaraan beroperasi**<br>• (E) Limbah | **Critical Control:** **Komponen dengan ujung kabel terkelupas dan seluruh bagian rusak atau berkarat wajib diganti seluruhnya**; routing harness diperiksa bebas gesekan dan panas.<br>**Administrative:** Checklist penyambungan seluruh konektor; uji fungsi seluruh sistem kelistrikan (lampu, klakson, wiper, indikator, AC) sebelum serah terima; catat pada service history.<br>**PPE:** APD dasar. | OEM Manual (All parts with peeling wire ends and all damaged or rusted parts must be completely replaced); Permenaker No. 12/2015 |

Additional Safety Tips
- Nilai sekring adalah pengaman rangkaian; menaikkan nilainya untuk "agar tidak putus terus" menghilangkan proteksi dan menyebabkan kebakaran.
- Refrigerant terkumpul di lubang servis dan area rendah; pastikan ventilasi sebelum bekerja di pit.
- Jangan mengelas pada kendaraan sebelum baterai dilepas dan konektor modul elektronik dipisahkan.

Point of Concern
- Manual menyebut kontak dengan komponen bertegangan tinggi sebagai ancaman jiwa, bukan sekadar risiko cedera.
- Sistem AC yang masih berisi refrigerant dan dikenai panas las dapat meledak; ini kecelakaan yang berulang terjadi di bengkel.
- Gel dari baterai lead gel yang rusak juga berbahaya, tidak hanya elektrolit cair pada baterai konvensional.

Common Mistakes
- Mengelas bracket di dekat kondensor AC tanpa mengosongkan sistem — hindari dengan recovery refrigerant lebih dulu.
- Melepas terminal positif baterai lebih dulu — hindari dengan urutan baku negatif dilepas pertama, dipasang terakhir.
- Mengganti sekring dengan nilai lebih besar agar tidak putus — hindari dengan mendiagnosis penyebab beban lebih.

Golden Rules
- Kabel negatif baterai dilepas sebelum pekerjaan kelistrikan dan pengelasan.
- Sistem AC dikosongkan dengan mesin recovery sebelum ada panas atau pembongkaran.
- Nilai sekring tidak pernah diubah dari spesifikasi.

Critical Controls
- Power master switch OFF, digembok, dan kabel negatif baterai dilepas.
- Hot Work Permit, APAR, dan fire watch untuk pengelasan.
- Recovery refrigerant oleh teknisi bersertifikat sebelum pekerjaan panas atau pembongkaran AC.
- Ventilasi memadai dan SDS tersedia untuk bahan kimia.
- Uji fungsi seluruh sistem kelistrikan sebelum serah terima.

Required PPE
- Mandatory PPE: Safety helmet, safety glasses, safety shoes, coverall, sarung tangan kerja.
- Additional PPE: Face shield + goggles, sarung tangan tahan asam/kimia/dingin, apron, helm las & sarung tangan kulit, respirator fume dan uap organik, ear plug.

Emergency Response
- Potensi Keadaan Darurat: Ledakan baterai, sengatan listrik, kebakaran kelistrikan, ledakan sistem AC, frostbite refrigerant, keracunan uap kimia.
- Respon Awal: Putuskan sumber listrik sebelum menyentuh korban sengatan; bilas mata/kulit terkena elektrolit atau bahan kimia minimal 15 menit; **frostbite tidak digosok atau dipanaskan langsung** — hangatkan perlahan dan rujuk medis; pindahkan korban paparan uap ke udara segar.
- Peralatan Darurat yang Diperlukan: APAR kelas ABC & C, eyewash & safety shower, kotak P3K, detektor oksigen untuk area rendah, alat komunikasi.

Keterangan
Pekerjaan AC dan pengelasan pada kendaraan menuntut kompetensi bersertifikat; teknisi umum tidak boleh melakukan recovery refrigerant maupun perbaikan struktural dengan pengelasan.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

## JSEA-TRK-09

Proses / Pekerjaan: Perawatan Fifth Wheel (Sadel) serta Penyambungan dan Pelepasan Trailer

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Memeriksa kondisi fifth wheel: plat sadel, jaw/kunci, tuas pelepas, pin pengunci, dan baut pengikat | • (S) Keausan atau retak pada mekanisme pengunci<br>• (S) Baut pengikat kendur<br>• (H) Postur membungkuk di belakang kabin<br>• (E) Grease berlebih tercecer | • (S) **Trailer terlepas saat kendaraan berjalan — fatality bagi pengguna jalan lain**<br>• (H) MSD<br>• (E) Pencemaran | **Critical Control:** Pemeriksaan visual & fungsional mekanisme pengunci setiap perawatan berkala; **torsi baut pengikat depan dan belakang fifth wheel sesuai spesifikasi OEM (240 N·m)** dengan kunci torsi, diverifikasi dan dicatat.<br>**Engineering:** Platform/pijakan aman untuk mengakses area sadel.<br>**Administrative:** Komponen aus di luar batas diganti, tidak dilas atau direparasi.<br>**PPE:** Sarung tangan, safety glasses. | OEM Manual (**Fifth Wheel — Front fixing bolt 240 N·m / Rear fixing bolt 240 N·m** / Torque wrench); Permenaker No. 8/2020; UU No. 22/2009 |
| 2 | Melumasi plat sadel dan mekanisme dengan lithium base grease | • (S) Permukaan sadel sangat licin setelah dilumasi<br>• (H) Kontak grease dengan kulit<br>• (E) Grease berlebih jatuh ke tanah | • (S) **Terpeleset dan jatuh dari belakang kabin**<br>• (H) Dermatitis<br>• (E) Pencemaran tanah | **Critical Control:** **Gunakan lithium base grease sesuai ketentuan OEM**; jangan menginjak plat sadel yang sudah dilumasi.<br>**Engineering:** Pijakan anti-slip; three point contact saat naik ke belakang kabin.<br>**Environmental:** Grease berlebih dibersihkan; drip tray; majun ke TPS Limbah B3.<br>**PPE:** Sarung tangan nitril, safety shoes anti-slip. | OEM Manual (Fifth wheel — Auxiliary material: Lubricating grease, Lithium base grease); Permenaker No. 9/2016; PP No. 22/2021 |
| 3 | Menyambung trailer (coupling): memundurkan tractor head ke king pin | • (S) **Berada di antara tractor head dan trailer saat unit mundur**<br>• (S) Blind spot saat mundur<br>• (S) Trailer bergerak karena rem trailer tidak aktif<br>• (E) Tidak Signifikan | • (S) **Terjepit antara tractor head dan trailer — fatality**<br>• (S) Trailer meluncur menabrak<br>• (E) Tidak Signifikan | **Critical Control:** **Dilarang mutlak berada di antara tractor head dan trailer saat kendaraan bergerak**; **rem parkir trailer diaktifkan dan roda trailer diganjal sebelum coupling dimulai**; landing gear trailer pada ketinggian yang benar.<br>**Engineering:** Kamera mundur & spion disetel; alarm mundur berfungsi.<br>**Administrative:** Spotter berdiri di sisi, terlihat pengemudi, tidak pernah di belakang atau di antara unit; komunikasi positif dan aba-aba tunggal.<br>**PPE:** Rompi reflektif. | Kepmen ESDM 1827 K/30/MEM/2018; UU No. 22/2009; ISO 12100:2010 |
| 4 | **Memverifikasi penguncian king pin sebelum trailer ditarik (tug test)** | • (S) **King pin tidak terkunci sempurna (false coupling / high hitch)**<br>• (S) Tuas pelepas belum kembali ke posisi terkunci<br>• (E) Tidak Signifikan | • (S) **Trailer terlepas dari sadel saat berjalan — fatality**<br>• (E) Tidak Signifikan | **Critical Control:** **Verifikasi tiga lapis wajib: (1) pemeriksaan visual bahwa jaw mengunci king pin dan tuas pelepas kembali ke posisi terkunci, (2) pemeriksaan celah antara plat sadel dan plat trailer tidak ada, (3) tug test — tarik perlahan dengan rem trailer aktif untuk memastikan sambungan tidak lepas**.<br>**Administrative:** Ketiganya dilakukan setiap kali coupling, tanpa pengecualian; tidak ada yang boleh berada di sekitar unit saat tug test.<br>**PPE:** Rompi reflektif. | UU No. 22/2009; Kepmen ESDM 1827 K/30/MEM/2018; Safe Work Australia — Heavy Vehicle Coupling |
| 5 | Menyambungkan selang udara (susie coil) dan kabel listrik trailer | • (S) **Selang udara bertekanan melecut**<br>• (S) Selang atau kabel tersangkut saat unit bermanuver<br>• (H) Postur menjangkau di ketinggian<br>• (E) Tidak Signifikan | • (S) Selang melecut mengenai wajah; kegagalan rem trailer<br>• (H) Cedera bahu, terpeleset<br>• (E) Tidak Signifikan | **Critical Control:** Tekanan dibuang sebelum melepas kopling selang; **dilarang menyambung atau melepas selang bertekanan tinggi karena selang akan mengayun sendiri akibat kebocoran udara**; verifikasi selang emergency dan service tersambung pada jalur yang benar.<br>**Engineering:** Gantungan selang agar tidak menjuntai ke propshaft; kondisi selang & konektor diperiksa.<br>**Administrative:** Uji fungsi rem trailer setelah penyambungan.<br>**PPE:** Safety goggles, sarung tangan. | OEM Manual (It's absolutely prohibited to connect or disconnect any high pressure hose or pipeline); Permenaker No. 37/2016; UU No. 22/2009 |
| 6 | Melepas trailer (uncoupling): menurunkan landing gear, melepas selang & kabel, membuka kunci sadel | • (S) **Landing gear ambles atau tidak diturunkan penuh**<br>• (S) **Trailer jatuh dari sadel saat tractor head maju**<br>• (S) Trailer meluncur setelah dilepas<br>• (E) Tidak Signifikan | • (S) **Trailer jatuh menimpa pekerja — fatality**<br>• (S) Trailer meluncur menabrak<br>• (E) Tidak Signifikan | **Critical Control:** **Landing gear diturunkan penuh dan bertumpu pada permukaan padat sebelum kunci sadel dibuka**; **roda trailer diganjal dan rem parkir trailer aktif**; permukaan tanah dinilai mampu menahan beban landing gear.<br>**Engineering:** Plat dasar di bawah landing gear pada tanah lunak.<br>**Administrative:** Urutan baku: ganjal & rem trailer → landing gear turun → selang & kabel dilepas → kunci sadel dibuka → tractor head maju perlahan; tidak ada orang di antara unit.<br>**PPE:** Sarung tangan, rompi reflektif, safety shoes toe cap. | UU No. 22/2009; Permenaker No. 8/2020; Safe Work Australia — Heavy Vehicle Coupling |
| 7 | Pemeriksaan akhir dan pencatatan | • (S) Temuan keausan tidak dilaporkan<br>• (E) Limbah grease & majun | • (S) Kegagalan sadel di kemudian hari<br>• (E) Pencemaran | **Administrative:** Catat kondisi & hasil pengukuran keausan pada service history; temuan di luar batas dilaporkan dan unit tidak dioperasikan sampai diperbaiki.<br>**Environmental:** Majun & grease bekas ke TPS Limbah B3.<br>**PPE:** Sarung tangan nitril. | ISO 9001:2015 kl. 8.5; PP No. 22/2021 |

Additional Safety Tips
- Tug test bukan pengganti pemeriksaan visual; keduanya wajib karena masing-masing menangkap kegagalan yang berbeda.
- Periksa tidak ada celah antara plat sadel dan plat trailer — celah adalah tanda king pin duduk di atas jaw, bukan terkunci di dalamnya.
- Jangan pernah berdiri di antara tractor head dan trailer, bahkan saat kedua unit terlihat diam.

Point of Concern
- False coupling (high hitch) terlihat normal dari kabin dan baru terdeteksi saat trailer terlepas di jalan; inilah alasan verifikasi tiga lapis.
- Landing gear yang ambles di tanah lunak menyebabkan trailer bermuatan jatuh saat tractor head maju.
- Plat sadel yang baru dilumasi sangat licin; banyak cedera terpeleset terjadi tepat setelah greasing.

Common Mistakes
- Melewatkan tug test karena "sudah terdengar bunyi klik" — hindari dengan menjadikan tug test langkah wajib yang tidak dapat dilewati.
- Membuka kunci sadel sebelum landing gear menapak penuh — hindari dengan urutan baku uncoupling.
- Melepas selang udara trailer dalam kondisi masih bertekanan — hindari dengan membuang tekanan lebih dulu.

Golden Rules
- Tidak seorang pun berada di antara tractor head dan trailer.
- Verifikasi visual, pemeriksaan celah, dan tug test dilakukan setiap kali coupling.
- Landing gear menapak penuh sebelum kunci sadel dibuka.

Critical Controls
- Rem parkir trailer aktif dan roda trailer diganjal sebelum coupling/uncoupling.
- Verifikasi tiga lapis penguncian king pin.
- Torsi baut pengikat fifth wheel sesuai spesifikasi dan tercatat.
- Landing gear turun penuh pada permukaan padat sebelum sadel dibuka.
- Uji fungsi rem trailer setelah penyambungan selang.

Required PPE
- Mandatory PPE: Safety helmet, safety glasses, safety shoes toe cap, coverall, sarung tangan kerja, rompi reflektif.
- Additional PPE: Safety goggles (pekerjaan selang udara), sarung tangan nitril (greasing).

Emergency Response
- Potensi Keadaan Darurat: Terjepit antara tractor head dan trailer, trailer terlepas atau jatuh dari sadel, selang udara melecut.
- Respon Awal: Hentikan seluruh gerakan; **jangan memajukan atau memundurkan tractor head untuk membebaskan korban tanpa arahan tim penyelamat**; amankan trailer dengan ganjal sebelum penanganan; aktifkan ERT.
- Peralatan Darurat yang Diperlukan: Kotak P3K, spine board, chock block cadangan, dongkrak/penopang darurat, alat komunikasi.

Keterangan
Modul ini menutup Bagian A. Bila coupling/uncoupling dilakukan di pinggir jalan atau di area tambang, seluruh kontrol pengamanan lokasi pada JSEA-RSA-02 berlaku bersamaan.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

# BAGIAN B — MOBILE WORKSHOP (MWS)

## JSEA-MWS-01

Proses / Pekerjaan: Persiapan dan Pemuatan Mobile Workshop Sebelum Berangkat ke Lokasi

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Menerima permintaan pekerjaan, menetapkan lingkup, dan menyusun rencana kerja lapangan | • (S) Lingkup tidak jelas sehingga bahaya tidak teridentifikasi<br>• (S) Kondisi lokasi belum diketahui<br>• (H) Tekanan waktu penyelesaian<br>• (E) Tidak Signifikan | • (S) Tim tiba tanpa kontrol yang sesuai lalu berimprovisasi — cedera<br>• (H) Fatigue, keputusan tergesa<br>• (E) Tidak Signifikan | **Critical Control:** JSEA lapangan disusun sebelum berangkat; **pekerjaan di luar lingkup rencana tidak dikerjakan di lapangan tanpa JSEA baru**.<br>**Administrative:** Konfirmasi kondisi lokasi ke pemilik area (permukaan, akses, sumber listrik, area parkir, aturan site); tetapkan supervisor lapangan.<br>**PPE:** — | PP No. 50/2012 Lampiran I; ISO 45001:2018 kl. 8.1.2; Kepmen ESDM 1827 K/30/MEM/2018 |
| 2 | Memeriksa kelaikan kendaraan mobile workshop (P2H) termasuk kompartemen dan peralatan terpasang | • (S) Kendaraan atau peralatan terpasang tidak laik<br>• (S) Pintu kompartemen terbuka saat berjalan<br>• (E) Kebocoran oli/bahan bakar | • (S) Kegagalan di perjalanan; barang terlempar ke jalan<br>• (E) Ceceran di jalan | **Critical Control:** P2H terdokumentasi; **seluruh pintu dan laci kompartemen terkunci sebelum berangkat**; temuan kritis berarti kendaraan tidak berangkat.<br>**Engineering:** Kelengkapan wajib: APAR sesuai jenis muatan, kotak P3K, spill kit, rotary lamp, safety cone & rambu portabel, ganjal roda, dongkrak & ban serep, senter, radio/HT.<br>**Administrative:** Sertifikat riksa uji peralatan terpasang (crane/hoist, kompresor, genset) berlaku.<br>**PPE:** — | UU No. 22/2009; Permenaker No. 8/2020; Permenakertrans No. 4/1980; Permenaker No. 15/2008 |
| 3 | Memuat tools, special tool, alat ukur, dan alat angkat | • (S) **Muatan tidak diikat dan bergeser saat pengereman**<br>• (S) Beban tidak terdistribusi merata<br>• (H) Angkat-angkut manual berulang<br>• (E) Tidak Signifikan | • (S) **Muatan terlempar ke kabin atau ke jalan; kendaraan tidak stabil**<br>• (H) Cedera punggung & bahu<br>• (E) Tidak Signifikan | **Critical Control:** Seluruh muatan diikat atau dalam kompartemen tertutup; **GVW tidak dilampaui dan distribusi beban seimbang**.<br>**Engineering:** Rak & bin berpengunci; lashing strap; cargo barrier antara kabin dan muatan.<br>**Administrative:** Checklist muat; tool count sebelum berangkat sebagai baseline.<br>**PPE:** Sarung tangan, safety shoes toe cap. | UU No. 22/2009 (muatan); Permenaker No. 5/2018 |
| 4 | Memuat bahan kimia, oli, bahan bakar, gas bertekanan, dan sparepart | • (S) **Tabung gas menjadi proyektil bila katup patah**<br>• (S) Bahan mudah terbakar dalam kendaraan<br>• (H) Uap bahan kimia di ruang tertutup<br>• (E) Tumpahan di kendaraan atau di jalan | • (S) **Ledakan/kebakaran kendaraan; tabung terlempar**<br>• (H) Keracunan, iritasi<br>• (E) Pencemaran sepanjang rute | **Critical Control:** **Tabung gas diikat tegak pada rak khusus dengan tutup katup terpasang**; bahan mudah terbakar di kompartemen berventilasi terpisah dari sumber panas; **oksigen dan asetilen tidak disimpan berdampingan**.<br>**Engineering:** Secondary containment untuk cairan; label & simbol B3.<br>**Administrative:** SDS dibawa; jumlah bahan dibatasi sesuai kebutuhan.<br>**PPE:** Sarung tangan tahan kimia. | PP No. 22/2021; Permen LHK No. 6/2021; Permenaker No. 37/2016; NFPA 55 |
| 5 | Memeriksa kesiapan personel: kompetensi, izin, fit to work, dan APD | • (S) Personel tidak kompeten untuk lingkup pekerjaan<br>• (S) Izin/SIMPER kadaluarsa<br>• (H) Fatigue sebelum berangkat<br>• (E) Tidak Signifikan | • (S) Pekerjaan dikerjakan di luar kompetensi — cedera<br>• (H) Microsleep di perjalanan<br>• (E) Tidak Signifikan | **Critical Control:** Verifikasi SIM, SIMPER, dan sertifikat kompetensi (rigger, juru las, teknisi AC, operator crane) sesuai lingkup; fit-to-work check sebelum berangkat.<br>**Administrative:** Minimal dua orang untuk pekerjaan lapangan (Two-Man Rule); nomor darurat & kontak site tercatat.<br>**PPE:** APD lengkap per personel diperiksa kondisinya. | Kepmen ESDM 1827 K/30/MEM/2018; Permenaker No. 8/2010; Permenaker No. 5/2018 |
| 6 | Melakukan Toolbox Meeting sebelum berangkat | • (S) Bahaya perjalanan & lokasi tidak dikomunikasikan<br>• (E) Tidak Signifikan | • (S) Tim tidak siap menghadapi bahaya di lokasi<br>• (E) Tidak Signifikan | **Administrative:** TBM membahas rute, bahaya lokasi, lingkup, pembagian peran, titik kumpul darurat, dan **wewenang stop work yang dinyatakan eksplisit dan berlaku untuk setiap anggota tim**; ditandatangani seluruh peserta.<br>**PPE:** — | PP No. 50/2012; ISO 45001:2018 kl. 5.4 |

Additional Safety Tips
- Muat barang berat di bagian bawah dan dekat sumbu kendaraan agar titik berat tetap rendah.
- Bawa hanya bahan kimia sejumlah yang diperlukan; kelebihan stok menambah risiko tanpa manfaat.
- Baseline tool count sebelum berangkat memudahkan verifikasi tool tidak tertinggal di unit pelanggan.

Point of Concern
- Mobile workshop membawa bengkel ke lokasi, tetapi tidak membawa infrastruktur pengamannya — lantai rata, penerangan tetap, exhaust extraction, dan safety cage tidak ikut.
- Tabung gas yang tidak terikat adalah salah satu muatan paling berbahaya di kendaraan servis.
- Pekerjaan di luar rencana yang "sekalian dikerjakan" saat sudah di lokasi adalah sumber utama kecelakaan pada tim lapangan.

Common Mistakes
- Meletakkan tool box di lantai kompartemen tanpa pengikat — hindari dengan rak berpengunci dan lashing.
- Membawa jerigen bahan bakar terbuka di dalam kabin — hindari dengan wadah tertutup berlabel di kompartemen berventilasi.
- Berangkat tanpa mengetahui kondisi permukaan dan akses lokasi — hindari dengan konfirmasi ke pemilik area saat perencanaan.

Golden Rules
- Tidak berangkat tanpa JSEA lapangan dan TBM.
- Tabung gas selalu tegak, terikat, dan bertutup katup.
- Pekerjaan di luar lingkup rencana tidak dikerjakan tanpa JSEA baru.

Critical Controls
- P2H kendaraan dan sertifikat riksa uji peralatan terpasang berlaku.
- Muatan terikat, kompartemen terkunci, GVW tidak terlampaui.
- Tabung gas terikat tegak, segregasi oksigen dan asetilen.
- Kompetensi & izin personel terverifikasi sesuai lingkup.
- TBM dilaksanakan dengan wewenang stop work dinyatakan.

Required PPE
- Mandatory PPE: Safety helmet, safety glasses, safety shoes, coverall, sarung tangan kerja, rompi reflektif.
- Additional PPE: Sesuai lingkup — face shield, sarung tangan tahan kimia, respirator, ear plug, body harness.

Emergency Response
- Potensi Keadaan Darurat: Kebakaran di kompartemen, tumpahan bahan kimia saat pemuatan, cedera angkat-angkut.
- Respon Awal: Padamkan api kecil dengan APAR sesuai kelas dan evakuasi bila membesar; kontain tumpahan dengan spill kit; hentikan pemuatan dan laporkan.
- Peralatan Darurat yang Diperlukan: APAR kelas ABC & B, spill kit, kotak P3K, eyewash portabel, alat komunikasi.

Keterangan
Modul ini melengkapi, bukan menggantikan, modul perjalanan dinas pada Database Master JSEA Service Unit Alat Berat (JSEA-GEN-06).

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

## JSEA-MWS-02

Proses / Pekerjaan: Perjalanan dan Mobilisasi Mobile Workshop Menuju Lokasi Kerja

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Berangkat dengan Journey Management: rute, ETD/ETA, titik check-in, dan pemantauan cuaca | • (S) Rute berisiko (jalan hauling, jalan sempit, penyeberangan)<br>• (S) Perjalanan malam atau cuaca buruk<br>• (H) Fatigue akibat durasi mengemudi<br>• (E) Emisi perjalanan | • (S) Kecelakaan lalu lintas — fatality<br>• (H) Microsleep<br>• (E) Jejak karbon | **Critical Control:** Journey Management Plan disetujui; check-in pada titik yang ditetapkan; **perjalanan ditunda bila cuaca atau jarak pandang di bawah batas**.<br>**Administrative:** Batas jam mengemudi & istirahat wajib; rotasi pengemudi; kendaraan tidak berangkat bila muatan belum terverifikasi.<br>**Engineering:** GPS/telematics aktif.<br>**PPE:** — | UU No. 22/2009; Kepmen ESDM 1827 K/30/MEM/2018; ISO 39001 |
| 2 | Memasuki area tambang / job site dan berinteraksi dengan alat berat serta unit hauling | • (S) **Blind spot alat berat & hauler**<br>• (S) Jalan hauling sempit, tanjakan, tikungan<br>• (S) Debu menurunkan jarak pandang<br>• (E) Debu jalan | • (S) **Tertabrak/terlindas unit hauling — fatality**<br>• (H) Paparan debu<br>• (E) Pencemaran udara | **Critical Control:** **Positive communication dengan operator unit besar sebelum mendekat**; berhenti total dan menjalin kontak sebelum melintas di depan unit; **menjaga jarak aman dan tidak berada di blind spot**; kecepatan sesuai batas site.<br>**Engineering:** Rotary lamp & buggy whip menyala; radio pada kanal site aktif.<br>**Administrative:** Traffic Management Plan site dipatuhi; beri jalan kepada unit bermuatan; larangan menghalangi ramp.<br>**PPE:** Rompi reflektif saat turun dari kendaraan. | Kepmen ESDM 1827 K/30/MEM/2018; ICMM Vehicle Interaction; Safe Work Australia — Traffic Management |
| 3 | Memarkir mobile workshop di lokasi kerja | • (S) **Parkir di jalur hauling, tikungan, atau blind spot**<br>• (S) Permukaan lunak atau miring<br>• (S) Kendaraan meluncur<br>• (E) Ceceran oli di area parkir | • (S) **Mobile workshop tertabrak unit hauling — fatality**<br>• (S) Kendaraan meluncur menabrak<br>• (E) Pencemaran tanah | **Critical Control:** **Parkir mundur di luar jalur lalu lintas unit, pada permukaan rata dan padat**; rem parkir aktif, gigi masuk, **ganjal roda terpasang**; rotary lamp tetap menyala selama berhenti.<br>**Engineering:** Safety cone & rambu portabel mengelilingi kendaraan; jarak aman dari tepi lereng.<br>**Administrative:** Lapor posisi ke pengawas area & radio site; jangan parkir di puncak tanjakan atau tikungan.<br>**PPE:** Rompi reflektif. | Kepmen ESDM 1827 K/30/MEM/2018; UU No. 22/2009 |
| 4 | Melapor ke pengawas area, mengikuti induksi, dan menerima informasi bahaya lokal | • (S) Bahaya lokal tidak diketahui (peledakan, longsor, SIMOPS)<br>• (S) Izin kerja belum terbit<br>• (E) Tidak Signifikan | • (S) Tim bekerja di area berbahaya tanpa mengetahuinya — fatality<br>• (E) Tidak Signifikan | **Critical Control:** Lapor dan mendapat izin kerja sebelum aktivitas dimulai; **konfirmasi jadwal peledakan, aktivitas SIMOPS, dan area terlarang**; verifikasi frekuensi radio darurat site.<br>**Administrative:** Site induction berlaku; TBM bersama pemilik area sebelum bekerja.<br>**PPE:** APD sesuai persyaratan site. | Kepmen ESDM 1827 K/30/MEM/2018; PP No. 50/2012 |
| 5 | Menurunkan peralatan dari kendaraan di lokasi | • (S) Barang jatuh saat pintu kompartemen dibuka<br>• (S) Beban berat diturunkan tanpa alat bantu<br>• (H) Angkat manual dengan pijakan tidak rata<br>• (E) Tidak Signifikan | • (S) Tertimpa peralatan; terpeleset saat turun<br>• (H) Cedera punggung<br>• (E) Tidak Signifikan | **Engineering:** Ramp/tangga akses; troli atau hoist untuk beban berat; pijakan anti-slip.<br>**Administrative:** Buka kompartemen dengan berdiri di samping, bukan di depan pintu; Two-Man Lift untuk beban di atas batas angkat manual.<br>**PPE:** Sarung tangan, safety shoes toe cap. | Permenaker No. 5/2018; Permenaker No. 8/2020 |
| 6 | Menilai ulang kondisi lokasi terhadap rencana dan memutuskan lanjut atau tunda | • (S) Kondisi aktual berbeda dari asumsi perencanaan<br>• (S) Tekanan menyelesaikan pekerjaan meski kondisi tidak aman<br>• (E) Tidak Signifikan | • (S) Pekerjaan dipaksakan pada kondisi tidak aman — cedera<br>• (E) Tidak Signifikan | **Critical Control:** **JSEA ditinjau ulang di lokasi sebelum pekerjaan dimulai**; bila kondisi tidak memenuhi kontrol yang direncanakan, pekerjaan ditunda — **wewenang stop work berlaku untuk setiap anggota tim**.<br>**Administrative:** Keputusan tunda dilaporkan ke atasan dan pemilik area, bukan diputuskan sendiri di bawah tekanan pelanggan.<br>**PPE:** — | PP No. 50/2012; ISO 45001:2018 kl. 5.4 |

Additional Safety Tips
- Kendaraan ringan hampir selalu berada di blind spot unit hauling; asumsikan operator tidak melihat Anda sampai ada konfirmasi.
- Rotary lamp tetap menyala saat kendaraan berhenti di area operasi, bukan hanya saat bergerak.
- Konfirmasi jadwal peledakan sebelum bekerja; pekerjaan yang melewati jam peledakan harus direncanakan ulang.

Point of Concern
- Perjalanan dan parkir di jalan hauling menyumbang risiko fatal yang lebih besar daripada pekerjaan teknis yang akan dikerjakan.
- Tekanan dari pelanggan agar unit cepat selesai adalah faktor yang paling sering melemahkan keputusan menunda pekerjaan.
- Kompartemen mobile workshop yang dibuka di sisi jalur lalu lintas menempatkan teknisi langsung di jalur unit lewat.

Common Mistakes
- Parkir menempel di badan jalan hauling agar dekat dengan unit yang diperbaiki — hindari dengan memindahkan unit ke area aman atau memasang pengalihan lalu lintas resmi.
- Melintas di depan alat berat dengan asumsi operator melihat — hindari dengan berhenti dan komunikasi positif.
- Melanjutkan pekerjaan meski kondisi lokasi berbeda dari rencana — hindari dengan tinjau ulang JSEA di lokasi dan wewenang stop work.

Golden Rules
- Tidak mendekati unit besar tanpa komunikasi positif dengan operatornya.
- Tidak parkir di jalur lalu lintas unit hauling.
- Setiap anggota tim berwenang menghentikan pekerjaan.

Critical Controls
- Journey Management Plan dan check-in dipenuhi.
- Rotary lamp, buggy whip, dan radio site aktif.
- Parkir mundur di luar jalur lalu lintas dengan ganjal roda dan rambu.
- Izin kerja dan informasi bahaya lokal diterima sebelum mulai.
- Tinjau ulang JSEA di lokasi sebelum pekerjaan dimulai.

Required PPE
- Mandatory PPE: Safety helmet, safety glasses, safety shoes, coverall, sarung tangan kerja, rompi reflektif.
- Additional PPE: Masker debu di area berdebu, jas hujan, ear plug.

Emergency Response
- Potensi Keadaan Darurat: Tertabrak unit hauling, kendaraan mogok di jalur hauling, cuaca ekstrem, cedera saat menurunkan peralatan.
- Respon Awal: Amankan diri dan lokasi dengan cone dan rotary lamp; **laporkan segera via radio site bila kendaraan berhenti di jalur hauling dan minta pengalihan lalu lintas** — jangan meninggalkan kendaraan tanpa tanda dan tanpa melapor.
- Peralatan Darurat yang Diperlukan: Radio/HT dengan kanal darurat site, safety cone & rambu, APAR, kotak P3K, spill kit, senter.

Keterangan
Modul ini berlaku untuk setiap mobilisasi mobile workshop, baik ke workshop pelanggan, job site, maupun ke lokasi kendaraan mogok di jalan hauling.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

## JSEA-MWS-03

Proses / Pekerjaan: Set-Up Area Kerja Lapangan dan Penggunaan Peralatan Bertenaga Mobile Workshop (Genset, Kompresor, Mesin Las, Alat Angkat)

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Menetapkan dan membarikade area kerja di lapangan | • (S) Lalu lintas unit melintas area kerja<br>• (S) Orang lain memasuki area tanpa sadar<br>• (S) Permukaan tidak rata / lunak<br>• (E) Tidak Signifikan | • (S) **Tertabrak unit yang melintas — fatality**<br>• (S) Peralatan terguling di permukaan tidak rata<br>• (E) Tidak Signifikan | **Critical Control:** **Exclusion zone dibarikade penuh dengan cone dan rambu, bukan sekadar ditandai**; koordinasi pengalihan lalu lintas dengan pengawas area bila berada di dekat jalur unit.<br>**Engineering:** Alas plat/matras pada tanah lunak; penerangan area bila pekerjaan malam.<br>**Administrative:** Titik masuk-keluar area ditetapkan; papan informasi pekerjaan & kontak penanggung jawab.<br>**PPE:** Rompi reflektif. | Kepmen ESDM 1827 K/30/MEM/2018; PP No. 50/2012; Permenaker No. 5/2018 |
| 2 | Mengoperasikan genset dan menyalurkan listrik ke peralatan | • (S) **Sengatan listrik dari instalasi sementara**<br>• (S) Kabel tergilas, terendam, atau terkelupas<br>• (H) **Gas buang genset di area tertutup/terhalang**<br>• (H) Kebisingan genset<br>• (E) Emisi, ceceran bahan bakar genset | • (S) **Sengatan listrik fatal, kebakaran**<br>• (H) **Keracunan CO**, NIHL<br>• (E) Pencemaran udara & tanah | **Critical Control:** **Genset dipasang di area terbuka dengan gas buang mengarah menjauh dari pekerja dan tidak di dalam ruang tertutup**; **instalasi listrik sementara wajib menggunakan RCD/ELCB dan pembumian (grounding)**.<br>**Engineering:** Kabel dengan isolasi utuh, digantung atau dilindungi cable protector; panel dengan penutup; pengisian bahan bakar genset hanya saat mesin mati dan dingin.<br>**Administrative:** Pemeriksaan visual kabel sebelum digunakan; larangan sambungan kabel telanjang.<br>**PPE:** Sarung tangan isolasi, ear plug. | Permenaker No. 12/2015 (K3 Listrik); Permenaker No. 5/2018; PUIL |
| 3 | Mengoperasikan kompresor dan peralatan pneumatik portabel | • (S) **Selang udara bertekanan melecut bila sambungan lepas**<br>• (S) Udara bertekanan diarahkan ke tubuh<br>• (H) Kebisingan kompresor & air tool<br>• (H) Getaran alat tangan<br>• (E) Kondensat berminyak | • (S) **Selang melecut mengenai wajah; partikel terlempar ke mata**<br>• (H) NIHL, HAVS<br>• (E) Pencemaran tanah | **Critical Control:** **Dilarang mengarahkan udara bertekanan ke arah siapa pun atau ke tubuh sendiri**; **whip check / safety clip terpasang pada setiap sambungan selang udara**; tekanan tidak melebihi rating peralatan.<br>**Engineering:** Sambungan quick coupler dengan pengunci; drain kondensat ke wadah.<br>**Administrative:** Batasi durasi paparan getaran; buang tekanan sebelum melepas selang.<br>**PPE:** Safety goggles, ear plug, sarung tangan anti-getaran. | Permenaker No. 37/2016; Permenaker No. 5/2018; OSHA 29 CFR 1910.242 |
| 4 | Mengoperasikan mesin las portabel dan gerinda di lapangan | • (S) **Percikan mengenai bahan mudah terbakar di lapangan (rumput kering, ceceran BBM, ban)**<br>• (S) Radiasi busur mengenai orang di sekitar<br>• (S) Sengatan listrik las di area basah<br>• (H) Fume las, kebisingan<br>• (E) Fume, terak, limbah elektroda | • (S) **Kebakaran lahan atau kebakaran unit — fatality**<br>• (H) Arc eye, keracunan fume<br>• (E) Pencemaran udara & tanah | **Critical Control:** **Hot Work Permit wajib untuk pekerjaan panas di lapangan**; area dibersihkan dari bahan mudah terbakar dalam radius aman; **fire watch selama pekerjaan dan minimal 30 menit setelah selesai**; APAR di titik kerja.<br>**Engineering:** Fire blanket/sekat; tabir las; genset las dengan pembumian; hindari mengelas di area basah/tergenang.<br>**Administrative:** Isolasi kelistrikan & lepas baterai unit sebelum mengelas; titik massa dekat lokasi las; juru las berkualifikasi.<br>**PPE:** Helm las shade sesuai, apron & sarung tangan kulit, respirator fume, ear plug. | Permenaker No. 2/1982; Permenakertrans No. 4/1980; NFPA 51B; Permenaker No. 12/2015 |
| 5 | Menggunakan alat angkat mobile workshop (crane/hiab, hoist, tripod) di lapangan | • (S) **Alat angkat dioperasikan di permukaan tidak rata / lunak**<br>• (S) Outrigger tidak dipasang atau amblas<br>• (S) Beban tergantung di atas pekerja<br>• (S) Beban melebihi SWL pada radius tertentu<br>• (E) Tidak Signifikan | • (S) **Kendaraan/crane terguling; beban jatuh — fatality**<br>• (E) Tidak Signifikan | **Critical Control:** **Outrigger dipasang penuh dengan plat dasar pada permukaan padat sebelum pengangkatan**; **SWL sesuai radius kerja tidak dilampaui** — kapasitas menurun seiring bertambahnya radius; **tidak seorang pun berada di bawah beban tergantung**.<br>**Engineering:** Sertifikat riksa uji crane & alat bantu angkat berlaku; tag line untuk mengendalikan ayunan.<br>**Administrative:** Operator & rigger bersertifikat (SIO); lifting plan untuk beban di atas kriteria; **weather monitoring — hentikan pengangkatan saat angin kencang, hujan deras, atau petir**.<br>**PPE:** Helm bertali dagu, sarung tangan, rompi reflektif. | Permenaker No. 8/2020; ASME B30.5 & B30.9; Kepmen ESDM 1827 K/30/MEM/2018 |
| 6 | Bekerja pada ketinggian di lapangan (atas kabin, bak, atau platform kendaraan) | • (S) Permukaan licin oleh oli/lumpur<br>• (S) Tidak ada pagar pengaman seperti di bengkel<br>• (H) Postur menjangkau<br>• (E) Tidak Signifikan | • (S) **Jatuh dari ketinggian — cedera serius/fatality**<br>• (H) MSD<br>• (E) Tidak Signifikan | **Critical Control:** **Bekerja di ketinggian tanpa pagar wajib menggunakan body harness dengan anchor point yang terverifikasi**; three point contact saat naik-turun.<br>**Engineering:** Tangga/platform portabel bersertifikat; permukaan pijak dibersihkan dari oli & lumpur.<br>**Administrative:** Larangan bekerja di ketinggian sendirian; hentikan bila angin kencang.<br>**PPE:** Body harness dengan double lanyard, safety shoes anti-slip, helm bertali dagu. | Permenaker No. 9/2016; ISO 2867 |
| 7 | Menjaga housekeeping dan pengelolaan tumpahan selama pekerjaan berlangsung | • (S) Tools & part berserakan di area kerja<br>• (H) Permukaan licin oleh ceceran oli<br>• (E) **Tumpahan langsung ke tanah karena tidak ada lantai kedap** | • (S) Tersandung, terpeleset<br>• (E) **Pencemaran tanah di lokasi pelanggan** | **Critical Control:** **Drip tray dan terpal kedap dipasang di bawah titik kerja sebelum sambungan dibuka** — di lapangan tidak ada oil trap seperti di bengkel.<br>**Environmental:** Spill kit di titik kerja; tumpahan segera dikontain; tanah terkontaminasi diangkat dan dibawa sebagai limbah B3.<br>**Administrative:** Housekeeping berkala; tool count berjalan.<br>**PPE:** Sarung tangan nitril. | PP No. 22/2021; Permen LHK No. 6/2021; ISO 14001:2015 |

Additional Safety Tips
- Kapasitas crane pada mobile workshop menurun drastis seiring bertambahnya radius; baca tabel beban, jangan mengandalkan perkiraan.
- Gas buang genset dapat terperangkap di antara kendaraan, dinding, atau lereng meski terlihat berada di area terbuka.
- Bawa cable protector; kabel yang tergilas unit adalah penyebab sengatan listrik dan kebakaran yang sering terjadi di lapangan.

Point of Concern
- Pekerjaan panas di lapangan tidak memiliki lantai beton dan dinding tahan api seperti di bengkel; percikan las dapat menyulut rumput kering atau ceceran bahan bakar.
- Instalasi listrik sementara di lapangan sering dibuat seadanya; tanpa RCD dan pembumian, satu kabel terkelupas cukup untuk fatality.
- Permukaan lapangan yang tampak keras dapat amblas di bawah outrigger setelah beban diangkat, terutama setelah hujan.

Common Mistakes
- Mengangkat beban tanpa memasang outrigger penuh karena "bebannya ringan" — hindari dengan aturan outrigger penuh untuk setiap pengangkatan.
- Menyambung kabel genset dengan lilitan isolasi — hindari dengan konektor standar dan panel berpenutup.
- Mengelas tanpa membersihkan area dari bahan mudah terbakar — hindari dengan Hot Work Permit yang mensyaratkan pembersihan area dan fire watch.

Golden Rules
- Tidak ada pekerjaan panas di lapangan tanpa izin, APAR, dan fire watch.
- Outrigger terpasang penuh sebelum beban diangkat.
- Tidak seorang pun berada di bawah beban tergantung.

Critical Controls
- Exclusion zone dibarikade dan koordinasi lalu lintas dengan pengawas area.
- RCD/ELCB dan pembumian pada instalasi listrik sementara.
- Hot Work Permit, APAR, dan fire watch untuk las & gerinda.
- Outrigger penuh, SWL sesuai radius, operator & rigger bersertifikat.
- Drip tray dan spill kit terpasang sebelum sambungan dibuka.

Required PPE
- Mandatory PPE: Safety helmet, safety glasses, safety shoes, coverall, sarung tangan kerja, rompi reflektif.
- Additional PPE: Helm las & sarung tangan kulit, respirator fume, safety goggles, ear plug, sarung tangan isolasi, body harness, sarung tangan nitril.

Emergency Response
- Potensi Keadaan Darurat: Kebakaran lahan/unit, sengatan listrik, crane terguling, jatuh dari ketinggian, selang udara melecut, tumpahan ke tanah.
- Respon Awal: Putuskan sumber listrik sebelum menyentuh korban sengatan; padamkan api kecil dengan APAR dan evakuasi bila membesar — **laporkan kebakaran lahan segera ke pengawas area karena dapat menyebar cepat**; kontain tumpahan sebelum meresap.
- Peralatan Darurat yang Diperlukan: APAR kelas ABC & B, fire blanket, spill kit, kotak P3K, eyewash portabel, alat rescue ketinggian, radio/HT.

Keterangan
Seluruh kontrol pada modul TRK terkait tetap berlaku saat pekerjaan tersebut dikerjakan di lapangan; modul ini menambahkan kontrol yang hilang karena pekerjaan tidak lagi berada di dalam bengkel.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

## JSEA-MWS-04

Proses / Pekerjaan: Penyelesaian Pekerjaan, Pengelolaan Limbah B3 Lapangan, Demobilisasi, dan Serah Terima Unit

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Menutup pekerjaan teknis: memasang kembali guard, cover, dan melakukan tool count in–out | • (S) **Tool atau part tertinggal di dalam unit**<br>• (S) Guard belum terpasang<br>• (E) Tidak Signifikan | • (S) **Kerusakan katastropik dan kecelakaan saat unit dioperasikan**<br>• (S) Terjerat komponen berputar<br>• (E) Tidak Signifikan | **Critical Control:** **Tool count in–out dibandingkan dengan baseline sebelum berangkat**; FOD check sebelum cover ditutup; seluruh guard komponen berputar terpasang sebelum unit dinyalakan.<br>**Administrative:** Verifikasi oleh orang kedua; shadow board/tool bag dengan posisi tetap.<br>**PPE:** APD dasar. | ISO 9001:2015 kl. 8.5; PP No. 50/2012 |
| 2 | Melakukan uji fungsi dan pengujian sistem keselamatan sebelum unit dikembalikan | • (S) **Kegagalan rem, kemudi, atau kelistrikan tidak terdeteksi**<br>• (S) Uji dilakukan dengan orang di sekitar unit<br>• (E) Emisi saat uji | • (S) **Kegagalan sistem keselamatan di jalan — fatality**<br>• (S) Tertabrak saat uji<br>• (E) Pencemaran udara | **Critical Control:** **Uji fungsi rem servis, rem parkir, kemudi, lampu, klakson, dan indikator wajib lulus sebelum unit dikembalikan ke operasi**; uji dilakukan di area datar, luas, dan bebas personel.<br>**Administrative:** Hasil uji dicatat dan ditandatangani; unit yang gagal uji tidak diserahkan — pasang tag DO NOT OPERATE.<br>**PPE:** Rompi reflektif. | Kepmen ESDM 1827 K/30/MEM/2018; UU No. 22/2009 |
| 3 | Mengumpulkan, memilah, dan mengemas limbah B3 hasil pekerjaan lapangan | • (H) Kontak dengan oli, coolant, dan bahan kimia bekas<br>• (E) **Limbah B3 tertinggal di lokasi pelanggan atau dibuang sembarangan**<br>• (E) Tanah terkontaminasi di titik kerja | • (H) Dermatitis, iritasi<br>• (E) **Pencemaran tanah & air, pelanggaran ketentuan pengelolaan limbah B3, sanksi administratif** | **Critical Control:** **Seluruh limbah B3 hasil pekerjaan (oli bekas, coolant, filter, majun, kemasan, tanah terkontaminasi) wajib dibawa kembali oleh mobile workshop — dilarang ditinggal di lokasi atau dibuang di lokasi pelanggan**.<br>**Engineering:** Wadah limbah tertutup berlabel & bersimbol di kendaraan; wadah terpisah per jenis limbah; wadah diikat selama perjalanan.<br>**Administrative:** Catat jenis & perkiraan jumlah limbah yang dibawa; serahkan ke TPS Limbah B3 berizin dengan logbook & manifest setibanya.<br>**PPE:** Sarung tangan nitril, goggles. | PP No. 22/2021; Permen LHK No. 6/2021; ISO 14001:2015 kl. 8.1 |
| 4 | Membersihkan area kerja dan memulihkan kondisi lokasi seperti semula | • (S) Sisa material tajam tertinggal di area<br>• (E) **Ceceran oli meresap ke tanah di lokasi**<br>• (E) Sampah non-B3 tertinggal | • (S) Cedera pada pekerja lain di lokasi<br>• (E) Pencemaran dan keluhan pemilik area | **Critical Control:** Tanah yang terkontaminasi tumpahan diangkat dan dibawa sebagai limbah B3; area diperiksa bersama perwakilan pemilik area sebelum ditinggalkan.<br>**Environmental:** Absorbent bekas dikemas; area dipulihkan.<br>**Administrative:** Foto kondisi area sebelum dan sesudah sebagai bukti.<br>**PPE:** Sarung tangan. | PP No. 22/2021; ISO 14001:2015 |
| 5 | Memuat kembali peralatan, mengamankan muatan, dan memeriksa kelengkapan | • (S) Muatan tidak terikat untuk perjalanan pulang<br>• (S) Peralatan tertinggal di lokasi<br>• (H) Angkat-angkut saat sudah lelah<br>• (E) Tidak Signifikan | • (S) Muatan terlempar di jalan; peralatan hilang<br>• (H) Cedera punggung karena kelelahan<br>• (E) Tidak Signifikan | **Critical Control:** Muatan diikat dan kompartemen dikunci sebelum berangkat pulang; **tabung gas kembali diikat tegak dengan tutup katup terpasang**.<br>**Administrative:** Checklist muat pulang dibandingkan dengan checklist berangkat; istirahat sebelum perjalanan pulang bila pekerjaan berat.<br>**PPE:** Sarung tangan, safety shoes toe cap. | UU No. 22/2009; Permenaker No. 5/2018 |
| 6 | Serah terima unit dan penjelasan temuan kepada pemilik/operator | • (S) **Risiko sisa tidak dikomunikasikan**<br>• (S) Pekerjaan sementara dianggap perbaikan permanen<br>• (E) Tidak Signifikan | • (S) **Unit dioperasikan dengan kerusakan yang belum tuntas — kecelakaan**<br>• (E) Tidak Signifikan | **Critical Control:** **Perbaikan sementara wajib dinyatakan secara tertulis sebagai sementara, dengan batas penggunaan yang jelas dan rekomendasi tindak lanjut**; temuan yang belum diperbaiki dijelaskan langsung ke operator dan penanggung jawab unit.<br>**Administrative:** Service report ditandatangani kedua pihak; salinan diserahkan; temuan dicatat pada service history.<br>**PPE:** — | PP No. 50/2012; ISO 9001:2015 kl. 8.5; UU No. 22/2009 |
| 7 | Perjalanan pulang dan penutupan journey | • (H) **Fatigue akumulatif setelah bekerja penuh di lapangan**<br>• (S) Perjalanan malam atau cuaca buruk<br>• (E) Tidak Signifikan | • (S) **Kecelakaan tunggal akibat microsleep — fatality**<br>• (H) Kelelahan kronis<br>• (E) Tidak Signifikan | **Critical Control:** **Journey close-out wajib dilaporkan**; **bila total jam kerja ditambah waktu mengemudi melampaui batas, tim menginap — bukan memaksakan pulang**.<br>**Administrative:** Rotasi pengemudi; larangan mengejar target pulang di hari yang sama; laporkan kejadian nyaris celaka di perjalanan.<br>**PPE:** — | UU No. 22/2009; Permenaker No. 5/2018; ISO 39001 |

Additional Safety Tips
- Bandingkan tool count pulang dengan baseline berangkat; selisih satu alat berarti ada yang tertinggal di unit atau di lokasi.
- Foto kondisi area sebelum dan sesudah melindungi tim dari klaim pencemaran yang tidak berdasar sekaligus membuktikan pemulihan dilakukan.
- Tulis batas penggunaan perbaikan sementara secara spesifik — misalnya hanya untuk perjalanan ke bengkel terdekat — bukan sekadar "sementara".

Point of Concern
- Limbah B3 yang ditinggal di lokasi pelanggan menjadi tanggung jawab hukum yang dapat berbalik ke perusahaan pelaksana pekerjaan.
- Perjalanan pulang setelah pekerjaan lapangan yang panjang adalah momen paling rawan fatigue dalam seluruh rangkaian pekerjaan.
- Perbaikan sementara yang tidak dinyatakan tertulis sering dianggap perbaikan permanen oleh operator, lalu unit dipakai penuh sampai gagal.

Common Mistakes
- Meninggalkan drum oli bekas di lokasi dengan janji diambil kemudian — hindari dengan membawa pulang seluruh limbah pada perjalanan yang sama.
- Menyerahkan unit tanpa menjelaskan temuan yang belum diperbaiki — hindari dengan service report bertanda tangan dan penjelasan lisan ke operator.
- Memaksakan pulang malam agar tidak menginap — hindari dengan kebijakan batas jam yang tegas dan anggaran akomodasi.

Golden Rules
- Seluruh limbah B3 dibawa pulang, tidak ada yang ditinggal.
- Unit tidak diserahkan sebelum uji fungsi sistem keselamatan lulus.
- Tidak mengemudi pulang dalam kondisi lelah.

Critical Controls
- Tool count in–out dibandingkan baseline dan FOD check.
- Uji fungsi rem, kemudi, dan kelistrikan lulus dan terdokumentasi.
- Seluruh limbah B3 terkemas, terangkut, dan diserahkan dengan manifest.
- Perbaikan sementara dinyatakan tertulis dengan batas penggunaan.
- Journey close-out dan kepatuhan batas jam kerja + mengemudi.

Required PPE
- Mandatory PPE: Safety helmet, safety glasses, safety shoes, coverall, sarung tangan kerja, rompi reflektif.
- Additional PPE: Sarung tangan nitril, goggles saat menangani limbah cair.

Emergency Response
- Potensi Keadaan Darurat: Tumpahan limbah saat pemuatan atau perjalanan, kecelakaan di perjalanan pulang, kegagalan unit setelah diserahkan.
- Respon Awal: Kontain tumpahan dengan spill kit dan laporkan; **bila unit yang telah diserahkan mengalami kegagalan, hentikan penggunaan unit dan tarik kembali sebelum menganalisis penyebab**.
- Peralatan Darurat yang Diperlukan: Spill kit, APAR, kotak P3K, segitiga pengaman & cone, alat komunikasi.

Keterangan
Modul ini menutup Bagian B. Kualitas penutupan pekerjaan menentukan apakah risiko benar-benar hilang atau hanya berpindah ke operator unit.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

# BAGIAN C — ROADSIDE ASSISTANCE / PERBAIKAN UNIT MOGOK DI JALAN (RSA)

Catatan lingkup: Bagian ini disusun untuk dua skenario yang kontrolnya berbeda dan tidak boleh dipertukarkan — **Skenario 1 (utama): unit mogok di jalan hauling / jalan tambang**, di mana kewenangan pengaturan lalu lintas ada pada pengawas tambang dan bahaya utamanya adalah unit hauling bermuatan; **Skenario 2: unit mogok di jalan umum**, di mana kewenangan ada pada kepolisian/penyelenggara jalan dan bahaya utamanya adalah kendaraan umum berkecepatan tinggi.

## JSEA-RSA-01

Proses / Pekerjaan: Penerimaan Panggilan Darurat Unit Mogok, Penilaian Awal, dan Keberangkatan Tim

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Menerima laporan unit mogok dan menggali informasi lokasi serta kondisi | • (S) **Lokasi tidak presisi sehingga tim tidak tahu tingkat bahayanya**<br>• (S) Kondisi unit dan penyebab mogok belum diketahui<br>• (E) Kebocoran fluida dari unit mogok | • (S) Tim datang tanpa kontrol yang sesuai — cedera<br>• (E) Pencemaran di lokasi mogok | **Critical Control:** Wajib dicatat sebelum tim berangkat: **posisi presisi (KM/patok/segmen hauling), jenis jalan (hauling atau umum), posisi unit terhadap jalur (di badan jalan / bahu / sudah menepi), kondisi muatan (bermuatan atau kosong), kemiringan lokasi, jarak pandang, dan apakah ada kebocoran atau kebakaran**.<br>**Administrative:** Formulir penerimaan panggilan darurat baku; konfirmasi kontak pengemudi & pengawas area.<br>**PPE:** — | PP No. 50/2012; Kepmen ESDM 1827 K/30/MEM/2018 |
| 2 | Menginstruksikan tindakan pengamanan awal kepada pengemudi unit mogok | • (S) **Unit berhenti di jalur aktif tanpa tanda**<br>• (S) Pengemudi berdiri di badan jalan<br>• (S) Unit meluncur karena rem kehilangan tekanan<br>• (E) Tidak Signifikan | • (S) **Unit ditabrak dari belakang; pengemudi tertabrak — fatality**<br>• (S) Unit meluncur<br>• (E) Tidak Signifikan | **Critical Control:** Instruksikan segera: **nyalakan lampu hazard dan rotary lamp, aktifkan rem parkir, ganjal roda, pasang segitiga/cone sesuai jenis jalan, dan pengemudi menunggu di tempat aman di luar badan jalan — bukan di dalam kabin di jalur aktif dan bukan berdiri di badan jalan**.<br>**Administrative — jalan hauling:** pengemudi wajib **melapor ke pengawas tambang via radio dan meminta pengalihan/penghentian lalu lintas** pada segmen tersebut.<br>**Administrative — jalan umum:** hubungi kepolisian/pengelola jalan bila unit menghalangi lajur.<br>**PPE:** Instruksikan pengemudi memakai rompi reflektif. | UU No. 22/2009; Kepmen ESDM 1827 K/30/MEM/2018 |
| 3 | Menilai apakah pekerjaan dapat dilakukan di lokasi atau unit harus dievakuasi lebih dulu | • (S) **Lokasi tidak layak untuk dikerjakan (tanjakan, tikungan buta, tepi lereng, jalur sempit)**<br>• (S) Tekanan agar unit cepat diperbaiki di tempat<br>• (E) Tidak Signifikan | • (S) **Tim bekerja di lokasi yang tidak dapat diamankan — fatality**<br>• (E) Tidak Signifikan | **Critical Control:** **Bila lokasi tidak dapat diamankan — tikungan buta, puncak tanjakan, jalur sempit tanpa bahu, dekat tepi lereng, atau jarak pandang rendah — unit dievakuasi/ditarik ke lokasi aman lebih dulu, perbaikan tidak dilakukan di tempat**.<br>**Administrative:** Keputusan diambil bersama pengawas area, bukan sepihak oleh tim atau pelanggan; opsi evakuasi disiapkan sejak awal.<br>**PPE:** — | Kepmen ESDM 1827 K/30/MEM/2018; PP No. 50/2012; ISO 45001:2018 kl. 8.1.2 |
| 4 | Menyiapkan tim, peralatan, dan sparepart sesuai dugaan kerusakan | • (S) Peralatan tidak sesuai sehingga tim berimprovisasi di lokasi<br>• (S) Tim berangkat sendirian<br>• (H) Panggilan darurat di luar jam kerja — fatigue<br>• (E) Tidak Signifikan | • (S) Improvisasi alat di lokasi berbahaya — cedera<br>• (H) Microsleep di perjalanan<br>• (E) Tidak Signifikan | **Critical Control:** **Minimal dua orang untuk setiap panggilan roadside — dilarang berangkat sendirian**; fit-to-work check meskipun panggilan bersifat darurat.<br>**Engineering:** Kelengkapan wajib tambahan untuk roadside: cone & rambu portabel dalam jumlah cukup, lampu kerja portabel, rotary lamp, ganjal roda, spill kit, APAR, radio/HT.<br>**Administrative:** Ikuti JSEA-MWS-01; **urgensi tidak menghapus kewajiban P2H kendaraan dan JSEA**.<br>**PPE:** Rompi reflektif kelas tinggi untuk seluruh anggota tim. | Permenaker No. 5/2018; Kepmen ESDM 1827 K/30/MEM/2018; PP No. 50/2012 |
| 5 | Berangkat dengan Journey Management dan komunikasi berkelanjutan | • (S) Perjalanan tergesa karena tekanan waktu<br>• (S) Perjalanan malam / cuaca buruk<br>• (H) Fatigue<br>• (E) Emisi | • (S) **Kecelakaan dalam perjalanan menuju lokasi**<br>• (H) Penurunan kewaspadaan<br>• (E) Pencemaran udara | **Critical Control:** **Kecepatan dan aturan lalu lintas tetap berlaku penuh — urgensi bukan alasan mempercepat**; Journey Management dan check-in tetap dijalankan.<br>**Administrative:** Komunikasi berkala dengan pengemudi unit mogok untuk memantau perubahan kondisi; hentikan perjalanan bila cuaca membahayakan.<br>**PPE:** — | UU No. 22/2009; ISO 39001; Kepmen ESDM 1827 K/30/MEM/2018 |

Additional Safety Tips
- Tanyakan apakah unit bermuatan; unit bermuatan di tanjakan memiliki risiko meluncur yang jauh lebih besar dan mengubah seluruh rencana pengamanan.
- Minta pengemudi mengirim foto lokasi bila memungkinkan; satu foto menghemat banyak dugaan tentang kondisi jalan dan posisi unit.
- Catat nomor radio dan frekuensi pengawas area sebelum berangkat, bukan setelah tiba.

Point of Concern
- Panggilan darurat menciptakan tekanan untuk memangkas persiapan; justru pada kondisi inilah kontrol paling dibutuhkan.
- Pengemudi yang menunggu di dalam kabin unit mogok di jalur hauling berada di posisi paling berbahaya, karena unit hauling bermuatan tidak dapat berhenti mendadak.
- Keputusan memperbaiki di tempat atau mengevakuasi lebih dulu adalah keputusan keselamatan, bukan keputusan efisiensi.

Common Mistakes
- Berangkat hanya dengan informasi "unit mogok di KM sekian" — hindari dengan formulir penerimaan panggilan yang mewajibkan detail kondisi.
- Mengirim satu teknisi karena kerusakan dianggap ringan — hindari dengan aturan minimal dua orang untuk semua panggilan roadside.
- Memacu kendaraan agar cepat tiba — hindari dengan penegasan bahwa batas kecepatan berlaku penuh dalam kondisi apa pun.

Golden Rules
- Tidak ada panggilan roadside dikerjakan sendirian.
- Lokasi yang tidak dapat diamankan berarti unit dievakuasi lebih dulu, bukan diperbaiki di tempat.
- Urgensi tidak pernah menghapus persiapan dan batas kecepatan.

Critical Controls
- Informasi lokasi dan kondisi lengkap sebelum tim berangkat.
- Pengamanan awal oleh pengemudi diinstruksikan dan dikonfirmasi.
- Pelaporan ke pengawas tambang (jalan hauling) atau kepolisian (jalan umum).
- Minimal dua orang, fit-to-work, dan P2H kendaraan tetap dilakukan.
- Keputusan perbaiki-di-tempat vs evakuasi diambil bersama pengawas area.

Required PPE
- Mandatory PPE: Safety helmet, safety glasses, safety shoes, coverall, sarung tangan kerja, **rompi reflektif kelas tinggi**.
- Additional PPE: Sesuai dugaan pekerjaan — face shield, safety goggles, sarung tangan tahan kimia.

Emergency Response
- Potensi Keadaan Darurat: Unit mogok ditabrak, pengemudi tertabrak saat menunggu, kebakaran unit, kecelakaan tim dalam perjalanan.
- Respon Awal: Instruksikan pengemudi menjauh dari badan jalan dan dari unit bila ada tanda kebakaran; **hubungi ERT site atau layanan darurat sesuai jenis jalan** dan sebutkan posisi presisi.
- Peralatan Darurat yang Diperlukan: Radio/HT dengan kanal darurat, nomor ERT site & layanan darurat umum, APAR, kotak P3K, cone & rambu.

Keterangan
Modul ini adalah gerbang bagi seluruh rangkaian RSA; keputusan yang diambil pada tahapan No. 3 menentukan apakah JSEA-RSA-03 (perbaikan di lokasi) atau JSEA-RSA-04 (evakuasi) yang akan dijalankan.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

## JSEA-RSA-02

Proses / Pekerjaan: Pengamanan Lokasi Kendaraan Mogok — Jalan Hauling dan Jalan Umum

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Mendekati lokasi dan menilai kondisi sebelum keluar dari kendaraan | • (S) **Lalu lintas aktif di sekitar unit mogok**<br>• (S) Jarak pandang terbatas karena tikungan, tanjakan, debu, atau gelap<br>• (S) Kebocoran fluida atau tanda kebakaran<br>• (E) Ceceran fluida di badan jalan | • (S) **Tertabrak saat turun dari kendaraan — fatality**<br>• (S) Terpapar kebakaran/tumpahan<br>• (E) Pencemaran, jalan licin | **Critical Control:** **Jangan keluar dari kendaraan sebelum lalu lintas dikendalikan**; berhenti di posisi aman, nyalakan rotary lamp, dan nilai kondisi dari dalam kendaraan lebih dulu.<br>**Administrative — jalan hauling:** hubungi pengawas tambang via radio dan **pastikan penghentian atau pengalihan lalu lintas segmen sudah berlaku sebelum tim turun**.<br>**Administrative — jalan umum:** nilai arus dan kecepatan kendaraan; tunggu bantuan kepolisian bila unit menghalangi lajur cepat.<br>**PPE:** Rompi reflektif dipakai sebelum membuka pintu. | Kepmen ESDM 1827 K/30/MEM/2018; UU No. 22/2009; ICMM Vehicle Interaction |
| 2 | Memposisikan mobile workshop sebagai pelindung (blocking vehicle) | • (S) **Tim bekerja tanpa pelindung fisik dari lalu lintas**<br>• (S) Mobile workshop sendiri tertabrak<br>• (E) Tidak Signifikan | • (S) **Tim tertabrak kendaraan/unit yang lewat — fatality**<br>• (E) Tidak Signifikan | **Critical Control:** **Mobile workshop diparkir di belakang unit mogok sebagai penghalang fisik, dengan rotary lamp menyala dan roda diganjal**, memberi jarak aman antara area kerja dan arah datangnya lalu lintas; **tidak seorang pun bekerja atau berdiri di sisi kendaraan yang menghadap lalu lintas**.<br>**Engineering:** Rotary lamp, lampu hazard, dan lampu kerja menyala.<br>**Administrative:** Posisi kendaraan ditetapkan sebelum peralatan diturunkan.<br>**PPE:** Rompi reflektif. | Kepmen ESDM 1827 K/30/MEM/2018; UU No. 22/2009; Safe Work Australia — Traffic Management |
| 3 | **Memasang rambu, cone, dan pembatas sesuai jenis jalan dan kecepatan** | • (S) **Peringatan terpasang terlalu dekat sehingga pengemudi tidak sempat bereaksi**<br>• (S) Rambu tertiup atau tergeser<br>• (E) Tidak Signifikan | • (S) **Kendaraan menabrak area kerja — fatality massal**<br>• (E) Tidak Signifikan | **Critical Control — jalan hauling:** **jarak peringatan disesuaikan dengan jarak pengereman unit hauling bermuatan yang jauh lebih panjang daripada kendaraan biasa**, dan mengikuti ketentuan traffic management site; koordinasikan penempatan dengan pengawas tambang; gunakan flagman bila disyaratkan.<br>**Critical Control — jalan umum:** rambu peringatan dan cone ditempatkan bertahap dari arah datangnya kendaraan dengan jarak sesuai kecepatan jalan; **pada jalan berkecepatan tinggi jarak diperpanjang**.<br>**Engineering:** Cone bereflektor & pemberat; rambu portabel; lampu suar tambahan pada malam hari.<br>**Administrative:** Periksa berkala rambu tidak bergeser selama pekerjaan.<br>**PPE:** Rompi reflektif kelas tinggi. | UU No. 22/2009; Kepmen ESDM 1827 K/30/MEM/2018; Safe Work Australia — Traffic Management |
| 4 | Mengamankan unit mogok itu sendiri sebelum dikerjakan | • (S) **Unit meluncur karena tekanan rem habis atau berada di kemiringan**<br>• (S) Unit bermuatan dengan titik berat tinggi<br>• (S) Muatan tidak stabil<br>• (E) Kebocoran fluida | • (S) **Unit meluncur menimpa tim — fatality**<br>• (E) Pencemaran | **Critical Control:** **Ganjal roda dipasang pada kedua arah, terutama bila unit berada di kemiringan** — jangan mengandalkan rem parkir pada unit yang sistem udaranya bermasalah; verifikasi kestabilan muatan sebelum bekerja di sekitar atau di bawah unit.<br>**Engineering:** Ganjal berkapasitas sesuai berat unit; alas plat pada tanah lunak.<br>**Administrative:** Ikuti JSEA-TRK-01 & TRK-03; bila unit bermuatan di tanjakan, pertimbangkan evakuasi lebih dulu.<br>**PPE:** Rompi reflektif, safety shoes. | OEM Manual (Park the vehicle on a level ground, pull up the handbrake, and always block the wheels); Permenaker No. 38/2016 |
| 5 | Menetapkan area kerja, jalur evakuasi, dan titik aman bagi personel | • (S) Tim terjebak antara unit dan lalu lintas<br>• (S) Tidak ada jalur menghindar bila kendaraan hilang kendali<br>• (E) Tidak Signifikan | • (S) **Tim tidak dapat menghindar saat terjadi keadaan darurat — fatality**<br>• (E) Tidak Signifikan | **Critical Control:** **Tetapkan dan komunikasikan jalur evakuasi serta titik aman menjauh dari badan jalan sebelum pekerjaan dimulai**; personel yang tidak bekerja menunggu di titik aman, bukan di sekitar unit.<br>**Administrative:** Satu orang ditugaskan mengawasi lalu lintas (spotter) dan berwenang menghentikan pekerjaan seketika; kode peringatan disepakati.<br>**PPE:** Rompi reflektif, senter/lampu isyarat pada malam hari. | Kepmen ESDM 1827 K/30/MEM/2018; PP No. 50/2012 |
| 6 | Bekerja pada malam hari atau kondisi jarak pandang rendah | • (S) **Tim tidak terlihat oleh pengemudi**<br>• (S) Penerangan silau mengganggu pengemudi lewat<br>• (H) Fatigue kerja malam<br>• (E) Tidak Signifikan | • (S) **Tertabrak karena tidak terlihat — fatality**<br>• (H) Penurunan kewaspadaan<br>• (E) Tidak Signifikan | **Critical Control:** **Rompi reflektif kelas tinggi wajib untuk seluruh personel**; lampu kerja diarahkan ke area kerja dan **tidak menyilaukan pengemudi yang mendekat**; lampu suar/rotary tambahan pada rambu terjauh.<br>**Administrative:** Pertimbangkan menunda pekerjaan non-mendesak sampai terang bila lokasi berisiko tinggi; batasi durasi kerja malam.<br>**PPE:** Rompi reflektif kelas tinggi, head lamp. | UU No. 22/2009; Permenaker No. 5/2018; Kepmen ESDM 1827 K/30/MEM/2018 |
| 7 | Membongkar pengamanan setelah pekerjaan selesai | • (S) **Rambu dibongkar sebelum tim benar-benar keluar dari badan jalan**<br>• (S) Cone tertinggal di jalur<br>• (E) Sisa material di jalan | • (S) **Tertabrak saat membongkar rambu; kecelakaan akibat cone tertinggal**<br>• (E) Bahaya bagi pengguna jalan lain | **Critical Control:** **Rambu dan cone dibongkar terakhir, dimulai dari yang terdekat unit menuju yang terjauh, setelah seluruh personel dan peralatan berada di luar badan jalan**; verifikasi jalan bersih dari cone, tool, dan material.<br>**Administrative:** Hitung jumlah cone/rambu yang dipasang dan yang diambil kembali; laporkan pembukaan kembali jalur ke pengawas area atau kepolisian.<br>**PPE:** Rompi reflektif. | UU No. 22/2009; Kepmen ESDM 1827 K/30/MEM/2018 |

Additional Safety Tips
- Unit hauling bermuatan memerlukan jarak pengereman yang jauh lebih panjang daripada kendaraan biasa; jarak rambu yang cukup di jalan umum belum tentu cukup di jalan hauling.
- Berdiri di sisi unit yang membelakangi arah datang lalu lintas, dan selalu tahu ke mana harus menghindar.
- Hitung cone saat dipasang; menghitung ulang saat dibongkar memastikan tidak ada yang tertinggal di jalur.

Point of Concern
- Fatality pada pekerjaan roadside umumnya bukan karena pekerjaan teknisnya, melainkan karena tertabrak kendaraan atau unit yang lewat.
- Debu di jalan hauling dapat menghilangkan jarak pandang secara mendadak meskipun rambu sudah terpasang benar.
- Saat pekerjaan hampir selesai, kewaspadaan menurun dan tim mulai bergerak bebas di badan jalan — ini titik rawan kedua setelah kedatangan.

Common Mistakes
- Turun dari kendaraan sebelum lalu lintas dikendalikan — hindari dengan aturan menilai kondisi dari dalam kendaraan lebih dulu.
- Memasang cone hanya di sekitar unit — hindari dengan penempatan bertahap sesuai jarak pengereman kendaraan yang mendekat.
- Membongkar rambu sambil tim masih merapikan peralatan di badan jalan — hindari dengan urutan pembongkaran yang tegas.

Golden Rules
- Tidak keluar dari kendaraan sebelum lalu lintas dikendalikan.
- Tidak bekerja di sisi kendaraan yang menghadap arah datangnya lalu lintas.
- Rambu dipasang pertama dan dibongkar terakhir.

Critical Controls
- Penghentian/pengalihan lalu lintas dikonfirmasi berlaku sebelum tim turun (jalan hauling).
- Mobile workshop diposisikan sebagai penghalang fisik dengan rotary lamp menyala.
- Rambu & cone ditempatkan sesuai jarak pengereman kendaraan/unit yang mendekat.
- Ganjal roda dua arah pada unit mogok.
- Spotter lalu lintas ditugaskan dengan wewenang menghentikan pekerjaan seketika.

Required PPE
- Mandatory PPE: Safety helmet, safety glasses, safety shoes, coverall, sarung tangan kerja, **rompi reflektif kelas tinggi**.
- Additional PPE: Head lamp & senter untuk kerja malam, masker debu di jalan hauling berdebu.

Emergency Response
- Potensi Keadaan Darurat: Tim tertabrak, unit mogok ditabrak, unit meluncur, kebakaran unit di badan jalan.
- Respon Awal: **Spotter memberi kode peringatan dan seluruh tim menjauh ke titik aman yang telah ditetapkan — meninggalkan peralatan bila perlu**; hubungi ERT site atau layanan darurat dengan posisi presisi; jangan kembali ke badan jalan sampai dinyatakan aman.
- Peralatan Darurat yang Diperlukan: Radio/HT kanal darurat, APAR, kotak P3K, cone & rambu cadangan, lampu suar, senter.

Keterangan
Modul ini adalah modul paling kritis dalam Bagian C. Seluruh pekerjaan teknis pada JSEA-RSA-03 hanya boleh dimulai setelah seluruh Critical Control pada modul ini terpasang dan diverifikasi.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

## JSEA-RSA-03

Proses / Pekerjaan: Diagnosa dan Perbaikan Unit Mogok di Lokasi — Kelistrikan/Starting, Bahan Bakar, Sistem Rem Udara, Pendingin, dan Ban

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Melakukan diagnosa awal: membaca fault code, memeriksa indikator, dan menentukan penyebab mogok | • (S) **Kendaraan dapat bergerak sendiri saat engine dinyalakan untuk diagnosa**<br>• (S) Alat diagnosa dioperasikan saat kendaraan bergerak<br>• (H) Gas buang di area sempit<br>• (E) Emisi | • (S) **Kendaraan bergerak menabrak tim — fatality**<br>• (H) Keracunan CO<br>• (E) Pencemaran udara | **Critical Control:** **Saat engine hidup, kendaraan dapat bergerak sendiri dan menyebabkan kecelakaan** — rem parkir aktif, gigi netral, ganjal roda terpasang, dan tidak ada personel di depan/belakang kendaraan sebelum engine dinyalakan; **alat diagnosa di dalam kendaraan berisiko menyebabkan kecelakaan bila kendaraan bergerak** — dilarang mengoperasikan alat diagnosa sambil kendaraan berjalan tanpa pengemudi terpisah.<br>**Administrative:** Catat fault code sebelum menghapusnya; diagnosa dulu, bongkar kemudian.<br>**PPE:** Rompi reflektif. | OEM Manual (**When the engine is running, the vehicle may start on its own and cause in an accident** / **When a vehicle is in motion, the diagnostic equipment in the vehicle has the risk of causing in accidents and injuries**); Permenaker No. 5/2018 |
| 2 | Perbaikan kelistrikan / starting: memeriksa baterai, terminal, dan melakukan jump start bila perlu | • (S) **Gas baterai berisiko meledak**<br>• (S) Korsleting arus tinggi<br>• (H) **Elektrolit korosif terhadap mata, kulit, dan selaput lendir**<br>• (E) Baterai bekas = limbah B3 | • (S) **Ledakan baterai — cedera mata & luka bakar berat**<br>• (H) Luka bakar kimia, keracunan bila tertelan<br>• (E) Pencemaran | **Critical Control:** **Dilarang menyalakan kendaraan dengan menghubung-singkat terminal starter dan dilarang menyalakan sambil berdiri di tanah — engine hanya distart dari kursi pengemudi**; pada jump start, sambungan negatif terakhir dibuat **di titik massa rangka yang jauh dari baterai**, bukan di terminal negatif; dilarang api terbuka atau merokok.<br>**Engineering:** Kabel jumper berukuran memadai dengan isolasi utuh; verifikasi tegangan sistem sama.<br>**Environmental:** Baterai bekas dibawa pulang sebagai limbah B3.<br>**PPE:** **Face shield + goggles, sarung tangan tahan asam**. | OEM Manual (Before work on electric appliance, negative cable shall be taken down / **The gas is at risk of explosion. The battery electrolyte can damage the skin and eyes**); Permenaker No. 12/2015; PP No. 22/2021 |
| 3 | Perbaikan sistem bahan bakar: mengganti filter, membuang udara, atau menangani kehabisan bahan bakar | • (S) **Uap bahan bakar mudah terbakar di area terbuka dengan sumber panas engine**<br>• (S) Sisa tekanan pada saluran<br>• (H) Kontak & inhalasi<br>• (E) **Tumpahan bahan bakar langsung ke tanah/badan jalan** | • (S) **Kebakaran unit di badan jalan — fatality**<br>• (H) Keracunan, iritasi<br>• (E) **Pencemaran tanah; jalan menjadi licin** | **Critical Control:** **Dilarang melepas pipa bahan bakar tekanan tinggi saat engine berjalan**; saat melepas pipa tekanan rendah **wajib menggunakan wadah penampung yang sesuai**; APAR kelas B di titik kerja; **seluruh tumpahan dibersihkan sebelum engine dinyalakan**.<br>**Engineering:** Drip tray & terpal kedap; corong; wadah tertutup.<br>**Environmental:** Spill kit; tanah/absorbent terkontaminasi dibawa pulang sebagai limbah B3.<br>**PPE:** Face shield, sarung tangan tahan kimia, goggles. | OEM Manual (When the engine is running, do not disconnect any high-pressure fuel pipe / make sure to use an appropriate container); Permenakertrans No. 4/1980; PP No. 22/2021 |
| 4 | Perbaikan sistem rem udara di lokasi: kebocoran, air drier, valve, atau brake chamber | • (S) **Unit meluncur saat tekanan dilepas**<br>• (S) **Push rod & tuas brake chamber bergerak saat tekanan turun**<br>• (S) **Energi pegas pada spring brake chamber**<br>• (S) Tekanan sisa pada tabung regenerasi air drier<br>• (E) Kondensat berminyak | • (S) **Unit meluncur di badan jalan — fatality**<br>• (S) **Terjepit push rod; pegas melesat**<br>• (E) Pencemaran | **Critical Control:** **Ganjal roda dua arah terpasang sebelum tekanan dilepas** — di lokasi mogok unit sering berada di kemiringan; **jauhkan diri dari push rod dan tuas brake chamber saat membuang tekanan**; **spring brake chamber tidak dibongkar di lokasi — diganti sebagai assembly**; buang tekanan tabung regenerasi air drier secara terpisah.<br>**Administrative:** Ikuti JSEA-TRK-03 sepenuhnya; **safety goggles wajib untuk seluruh pekerjaan sistem udara**.<br>**PPE:** Safety goggles, face shield, ear plug. | OEM Manual (keep away from the push rods and levers of brake air chambers / the regeneration barrel of the air drier probably contains residual pressure / Always wear the safety goggles during any operations related to the air pressure system); Permenaker No. 37/2016 |
| 5 | Perbaikan sistem pendingin dan overheat di lokasi | • (H) **Sistem pendingin bertekanan tinggi saat engine hangat**<br>• (H) Coolant panas menyembur<br>• (E) Coolant tumpah ke tanah | • (H) **Luka bakar berat pada wajah dan tubuh; keracunan bila tertelan**<br>• (E) Pencemaran | **Critical Control:** **Tunggu suhu coolant turun di bawah 90 °C; buka tutup secara perlahan sampai slot penahan pertama (atau setengah putaran untuk tutup berulir) untuk melepas tekanan** sebelum dibuka penuh — tekanan waktu di lokasi tidak boleh memangkas langkah ini.<br>**Engineering:** Wadah penampung; drip tray.<br>**Environmental:** Coolant bekas dibawa pulang sebagai limbah B3.<br>**PPE:** **Sarung tangan pelindung, pakaian pelindung, dan pelindung mata**. | OEM Manual (Wait for the temperature of coolant lower than 90℃. Open the coolant cap slowly... rotate it to the first locating slot); PP No. 22/2021 |
| 6 | Penggantian ban di lokasi | • (S) **Ban bertekanan tinggi; rim multi-piece**<br>• (S) **Unit didongkrak di badan jalan atau permukaan tidak rata**<br>• (S) Roda berat<br>• (H) Angkat manual<br>• (E) Tidak Signifikan | • (S) **Ledakan ban — fatality**<br>• (S) **Unit jatuh dari dongkrak — fatality**<br>• (H) Cedera punggung<br>• (E) Tidak Signifikan | **Critical Control:** **Kendaraan didongkrak hanya pada titik jacking yang ditetapkan, dalam kondisi tanpa muatan bila memungkinkan, di permukaan rata dan padat**; **roda pada as lain diganjal**; **safety support platform/stand terpasang sebelum siapa pun bekerja di bawah unit**; ban dikempiskan penuh sebelum mur roda dikendurkan.<br>**Engineering:** Plat dasar lebih lebar di bawah dongkrak pada permukaan lunak; **pengisian angin di lokasi dilakukan dengan operator berada di posisi aman, tidak segaris dengan sisi ban**.<br>**Administrative:** **Bila permukaan tidak layak untuk jacking, unit dipindahkan lebih dulu — jangan dipaksakan**; torsi mur roda diperiksa ulang setelah unit berjalan.<br>**PPE:** Face shield, sarung tangan anti-impact, safety shoes toe cap. | OEM Manual (**the vehicle must be jacked under no load condition** / **Be sure to jack up vehicle at stated jacking position** / the vehicle may be supported by safety platform); OSHA 29 CFR 1910.177; Permenaker No. 8/2020 |
| 7 | Uji fungsi setelah perbaikan sebelum unit dilepas berjalan | • (S) **Perbaikan belum tuntas namun unit dinyatakan siap**<br>• (S) Uji dilakukan di badan jalan aktif<br>• (E) Tidak Signifikan | • (S) **Kegagalan sistem beberapa kilometer kemudian — kecelakaan**<br>• (E) Tidak Signifikan | **Critical Control:** **Uji fungsi rem servis, rem parkir, kemudi, dan kelistrikan wajib lulus sebelum unit dilepas berjalan**; uji dilakukan setelah unit dipindahkan ke area aman, bukan di badan jalan aktif.<br>**Administrative:** Bila hasil uji meragukan, unit dievakuasi — bukan dijalankan dengan harapan sampai tujuan; hasil uji dicatat.<br>**PPE:** Rompi reflektif. | Kepmen ESDM 1827 K/30/MEM/2018; UU No. 22/2009; PP No. 50/2012 |

Additional Safety Tips
- Diagnosa dulu, bongkar kemudian; membongkar berdasarkan dugaan di pinggir jalan memperpanjang waktu paparan tim terhadap lalu lintas.
- Waktu paparan adalah bahaya tersendiri di roadside — pekerjaan yang memakan waktu lama lebih aman dipindahkan ke lokasi aman.
- Bawa ganjal roda yang cukup; unit mogok sering berada di kemiringan dan ganjal bawaan unit sering tidak memadai.

Point of Concern
- Semua bahaya teknis pada modul TRK tetap ada di roadside, tetapi tanpa lantai rata, penerangan tetap, safety cage, dan alat angkat bengkel.
- Tekanan agar unit cepat jalan mendorong tim memangkas langkah seperti menunggu coolant dingin atau memasang stand penopang.
- Penggantian ban di badan jalan menggabungkan dua bahaya fatal sekaligus: lalu lintas dan energi ban bertekanan.

Common Mistakes
- Membuka tutup radiator segera setelah unit overheat agar cepat selesai — hindari dengan menunggu di bawah 90 °C dan membuka bertahap.
- Mendongkrak unit di bahu jalan yang miring atau lunak — hindari dengan memindahkan unit atau menolak melakukan jacking di lokasi tersebut.
- Menyatakan unit siap jalan tanpa uji fungsi rem — hindari dengan uji fungsi wajib dan opsi evakuasi bila hasilnya meragukan.

Golden Rules
- Engine hanya distart dari kursi pengemudi, dengan ganjal dan rem parkir aktif.
- Tidak bekerja di bawah unit yang hanya ditopang dongkrak.
- Unit tidak dilepas berjalan sebelum uji fungsi rem dan kemudi lulus.

Critical Controls
- Seluruh Critical Control JSEA-RSA-02 terpasang sebelum pekerjaan teknis dimulai.
- Ganjal roda dua arah sebelum tekanan udara dilepas.
- Safety support platform terpasang sebelum bekerja di bawah unit.
- APAR kelas B dan wadah penampung untuk pekerjaan bahan bakar.
- Uji fungsi rem, kemudi, dan kelistrikan lulus sebelum unit dilepas.

Required PPE
- Mandatory PPE: Safety helmet, safety glasses, safety shoes toe cap, coverall, sarung tangan kerja, **rompi reflektif kelas tinggi**.
- Additional PPE: **Safety goggles (sistem udara)**, face shield, sarung tangan tahan asam & tahan kimia, pakaian & pelindung mata untuk coolant, head lamp.

Emergency Response
- Potensi Keadaan Darurat: Tertabrak, unit meluncur, ledakan baterai atau ban, kebakaran bahan bakar, luka bakar coolant.
- Respon Awal: Jauhkan tim ke titik aman dan hentikan pekerjaan; **bilas area terdampak coolant atau elektrolit dengan air dingin dalam jumlah banyak dan balut dengan perban steril, lalu rujuk medis**; padamkan api kecil dengan APAR kelas B dan evakuasi bila membesar.
- Peralatan Darurat yang Diperlukan: APAR kelas B & ABC, eyewash portabel, kotak P3K dengan perban steril, spill kit, radio/HT kanal darurat.

Keterangan
Modul ini mengasumsikan JSEA-RSA-02 telah dijalankan penuh. Bila selama pekerjaan kondisi lalu lintas atau cuaca berubah, pekerjaan dihentikan dan situasi dinilai ulang.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

## JSEA-RSA-04

Proses / Pekerjaan: Keputusan Evakuasi, Penarikan (Towing) Unit Mogok, dan Penutupan Pekerjaan Roadside

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Memutuskan antara memperbaiki di tempat, perbaikan sementara, atau evakuasi | • (S) **Unit dijalankan dengan perbaikan sementara melebihi batas kemampuannya**<br>• (S) Tekanan pelanggan agar unit tetap jalan<br>• (E) Tidak Signifikan | • (S) **Kegagalan sistem di jalan setelah beberapa kilometer — fatality**<br>• (E) Tidak Signifikan | **Critical Control:** **Kerusakan pada sistem rem, kemudi, ban/rim, atau struktur berarti unit tidak dijalankan sendiri — unit dievakuasi**; perbaikan sementara hanya untuk kerusakan yang tidak menyangkut sistem keselamatan, dan **batas penggunaannya dinyatakan tertulis**.<br>**Administrative:** Keputusan diambil bersama pengawas area dan didokumentasikan; wewenang stop work berlaku penuh.<br>**PPE:** — | Kepmen ESDM 1827 K/30/MEM/2018; UU No. 22/2009; PP No. 50/2012 |
| 2 | Menyiapkan penarikan: memilih metode, alat tarik, dan kendaraan penarik | • (S) **Kapasitas kendaraan penarik tidak memadai untuk massa gabungan**<br>• (S) Alat tarik tidak bersertifikat atau tidak sesuai SWL<br>• (E) Tidak Signifikan | • (S) **Alat tarik putus dan melecut; kendaraan penarik kehilangan kendali — fatality**<br>• (E) Tidak Signifikan | **Critical Control:** **Kapasitas pengereman kendaraan penarik wajib mampu menahan massa gabungan kedua unit**; alat tarik bersertifikat dengan SWL memadai; **towing bar kaku lebih diutamakan daripada tali lentur** bila unit tidak memiliki pengereman.<br>**Engineering:** Damper/blanket pada tali tarik untuk meredam bila putus; titik tarik resmi pada rangka digunakan.<br>**Administrative:** Bila unit tidak memiliki sistem pengereman yang efektif, **pengangkutan dengan kendaraan derek lebih diutamakan daripada penarikan**.<br>**PPE:** Sarung tangan, rompi reflektif, helm. | Permenaker No. 8/2020; UU No. 22/2009; ASME B30.9 |
| 3 | Mengamankan unit sebelum melepas rem parkir atau memutus driveline | • (S) **Unit meluncur bebas begitu rem dilepas atau propshaft dilepas**<br>• (S) Energi pegas pada spring brake saat di-caging<br>• (E) Tidak Signifikan | • (S) **Unit meluncur menabrak/melindas — fatality**<br>• (S) Pegas melesat<br>• (E) Tidak Signifikan | **Critical Control:** **Ganjal roda dan sambungkan unit ke kendaraan penarik terlebih dahulu, baru lepaskan rem parkir atau propeller shaft** — unit akan meluncur bebas setelahnya; **caging spring brake hanya dengan release bolt/caging tool resmi**, dengan barikade pada arah gaya pegas.<br>**Administrative:** Verifikasi ganjal & sambungan oleh orang kedua sebelum rem dilepas; **melepas propshaft menghilangkan penahanan driveline**.<br>**PPE:** Face shield, sarung tangan, safety shoes toe cap. | OEM Manual (There is crushed or bruised risk when operating the spring or spring body that has been loaded); Permenaker No. 38/2016 |
| 4 | Melaksanakan penarikan / evakuasi | • (S) **Tanpa engine hidup, tidak ada power steering dan pengereman pada unit yang ditarik**<br>• (S) Kecepatan berlebih<br>• (S) Orang berada di antara kedua unit atau di zona lecutan<br>• (E) Tidak Signifikan | • (S) **Unit yang ditarik menabrak kendaraan penarik atau keluar jalur — fatality**<br>• (E) Tidak Signifikan | **Critical Control:** **Kecepatan penarikan sangat dibatasi dan mengikuti ketentuan site/jalan — tidak mengikuti arus lalu lintas**; **tidak seorang pun berada di antara kedua unit atau di sisi alat tarik selama penarikan**; pengemudi tetap berada di unit yang ditarik untuk mengemudikan bila memungkinkan.<br>**Administrative — jalan hauling:** pengawalan dan pengaturan lalu lintas oleh pengawas tambang; rotary lamp kedua unit menyala.<br>**Administrative — jalan umum:** koordinasi dengan kepolisian; rute menghindari tanjakan & turunan curam.<br>**PPE:** Sabuk pengaman, rompi reflektif. | UU No. 22/2009; Kepmen ESDM 1827 K/30/MEM/2018; Permenaker No. 8/2020 |
| 5 | Membongkar pengamanan lokasi dan membersihkan area | • (S) **Rambu dibongkar sebelum tim keluar dari badan jalan**<br>• (S) Material atau cone tertinggal di jalur<br>• (E) **Ceceran fluida dan absorbent tertinggal di badan jalan** | • (S) **Tertabrak saat membongkar; kecelakaan pengguna jalan lain**<br>• (E) Pencemaran & jalan licin | **Critical Control:** Rambu & cone dibongkar terakhir, dari yang terdekat unit ke yang terjauh, setelah seluruh personel dan peralatan keluar dari badan jalan; hitung ulang jumlah cone/rambu.<br>**Environmental:** **Seluruh ceceran, absorbent bekas, part bekas, dan tanah terkontaminasi dibawa pulang sebagai limbah B3 — dilarang ditinggal di lokasi**.<br>**Administrative:** Laporkan pembukaan kembali jalur ke pengawas area atau kepolisian.<br>**PPE:** Rompi reflektif, sarung tangan nitril. | UU No. 22/2009; PP No. 22/2021; Permen LHK No. 6/2021 |
| 6 | Serah terima unit dan pelaporan | • (S) **Status unit dan batas perbaikan sementara tidak dikomunikasikan**<br>• (E) Tidak Signifikan | • (S) **Unit dioperasikan penuh padahal hanya diperbaiki sementara — kecelakaan**<br>• (E) Tidak Signifikan | **Critical Control:** **Status unit dinyatakan tertulis: laik operasi penuh, laik terbatas dengan batasan spesifik, atau tidak laik operasi**; unit tidak laik diberi tag DO NOT OPERATE dan kunci diserahkan ke penanggung jawab.<br>**Administrative:** Service report ditandatangani kedua pihak; laporkan kejadian & temuan ke QSHE untuk analisa penyebab dan pencegahan berulang.<br>**PPE:** — | PP No. 50/2012; ISO 9001:2015 kl. 8.5; UU No. 22/2009 |
| 7 | Demobilisasi tim dan perjalanan pulang | • (H) **Fatigue akumulatif, terutama pada panggilan malam atau di luar jam kerja**<br>• (S) Perjalanan pulang dalam kondisi lelah<br>• (E) Tidak Signifikan | • (S) **Kecelakaan tunggal akibat microsleep — fatality**<br>• (H) Kelelahan kronis<br>• (E) Tidak Signifikan | **Critical Control:** **Bila total jam kerja ditambah waktu mengemudi melampaui batas, tim beristirahat atau menginap — bukan memaksakan pulang**; journey close-out dilaporkan.<br>**Administrative:** Rotasi pengemudi; pencatatan jam kerja panggilan darurat untuk pemantauan fatigue; evaluasi beban panggilan malam pada tim yang sama.<br>**PPE:** — | UU No. 22/2009; Permenaker No. 5/2018; ISO 39001 |

Additional Safety Tips
- Evakuasi yang memakan waktu lebih lama sering kali lebih aman daripada perbaikan cepat di lokasi yang tidak dapat diamankan.
- Alat tarik yang putus di bawah tegangan melecut dengan energi mematikan; tidak ada alasan untuk berdiri di zona itu.
- Catat jam mulai dan selesai panggilan darurat; data ini yang membuktikan beban fatigue tim saat evaluasi.

Point of Concern
- Unit yang ditarik tanpa pengereman efektif adalah beban tanpa kendali; inilah alasan pengangkutan dengan derek lebih diutamakan.
- Perbaikan sementara pada sistem rem tidak pernah dapat diterima; sistem rem adalah sistem keselamatan utama kendaraan.
- Panggilan roadside sering terjadi di luar jam kerja normal, sehingga fatigue tim sudah tinggi sejak awal pekerjaan.

Common Mistakes
- Melepas rem parkir atau propshaft sebelum unit tersambung ke penarik — hindari dengan urutan wajib ganjal, sambung, baru lepas.
- Menarik unit dengan kecepatan mengikuti arus lalu lintas — hindari dengan batas kecepatan penarikan dan pengawalan.
- Menyerahkan unit tanpa menyatakan status laik operasinya — hindari dengan pernyataan status tertulis pada service report.

Golden Rules
- Kerusakan sistem rem, kemudi, ban/rim, atau struktur berarti unit dievakuasi, bukan dijalankan.
- Ganjal dan sambungkan sebelum melepas rem atau driveline.
- Tidak seorang pun berada di antara kedua unit atau di zona lecutan alat tarik.

Critical Controls
- Keputusan evakuasi vs perbaikan diambil bersama pengawas area dan didokumentasikan.
- Kapasitas pengereman kendaraan penarik memadai untuk massa gabungan.
- Ganjal roda dan sambungan ke penarik terpasang sebelum rem/driveline dilepas.
- Pembongkaran rambu dilakukan terakhir setelah tim keluar dari badan jalan.
- Status laik operasi unit dinyatakan tertulis pada serah terima.

Required PPE
- Mandatory PPE: Safety helmet, safety glasses, safety shoes toe cap, coverall, sarung tangan kerja, **rompi reflektif kelas tinggi**.
- Additional PPE: Face shield (pekerjaan spring brake & sistem udara), sarung tangan nitril, head lamp untuk kerja malam.

Emergency Response
- Potensi Keadaan Darurat: Unit meluncur bebas, alat tarik putus, unit yang ditarik keluar jalur, tim tertabrak saat pembongkaran rambu.
- Respon Awal: Jauhkan semua orang dari lintasan unit dan zona lecutan; **jangan mencoba menghentikan unit yang meluncur secara fisik**; hentikan konvoi penarikan dan nilai ulang bila kondisi berubah; hubungi ERT site atau layanan darurat dengan posisi presisi.
- Peralatan Darurat yang Diperlukan: Chock block cadangan, radio/HT kanal darurat, APAR, kotak P3K, cone & rambu, spill kit.

Keterangan
Modul ini menutup Bagian C dan seluruh database. Setiap panggilan roadside sebaiknya ditutup dengan evaluasi singkat: apakah lokasi dapat diamankan, apakah waktu paparan tim wajar, dan apakah keputusan perbaiki-atau-evakuasi sudah tepat — hasilnya menjadi masukan untuk panggilan berikutnya.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»
