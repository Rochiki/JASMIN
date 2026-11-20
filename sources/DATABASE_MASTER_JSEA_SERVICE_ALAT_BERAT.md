# DATABASE MASTER JSEA — SERVICE UNIT ALAT BERAT

Cakupan: Excavator Hidrolis (kelas 11–14 ton dan kelas 20–21 ton), Articulated Dump Truck / Hauler (kelas 35–60 ton), pekerjaan mekanis, hidrolik, undercarriage, perjalanan dinas, dan parkir unit.
Sumber: OEM Manual (Operator's Manual & Service Manual ADT/Hauler), OEM Manual (Workshop Manual Excavator Hidrolis), best practice industri, dan lesson learned investigasi insiden.

Kode kategori: (S) Safety — (H) Occupational Health — (E) Environment.
Kode modul: GEN = Umum/Generik; EXC = Excavator Hidrolis; ADT = Articulated Dump Truck / Hauler.

---

# BAGIAN A — MODUL UMUM (GEN)

## JSEA-GEN-01

Proses / Pekerjaan: Persiapan dan Isolasi Energi Sebelum Inspeksi / Perawatan Unit (Zero Energy State)

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Menerima perintah kerja (WO), identifikasi unit, model, serial number, hour meter, dan riwayat kerusakan | • (S) Informasi kerusakan tidak lengkap / salah unit<br>• (S) Unit masih beroperasi / SIMOPS<br>• (H) Tekanan waktu, fatigue awal shift<br>• (E) Tidak Signifikan | • (S) Salah prosedur, terkena energi tersimpan yang tidak diketahui<br>• (S) Tertabrak unit lain yang masih beroperasi<br>• (H) Kelelahan, penurunan konsentrasi<br>• (E) Tidak Signifikan | **Administrative:** WO wajib mencantumkan model, SN, HM, gejala & dugaan penyebab sesuai OEM Manual; JSEA & TBM sebelum mulai; fatigue check / fit to work; koordinasi SIMOPS dengan pengawas area; Permit to Work bila di area operasi tambang.<br>**Engineering:** Peta area kerja & jalur akses ditetapkan.<br>**PPE:** APD dasar lengkap. | UU No. 1/1970 Ps. 3, 9; PP No. 50/2012 Lampiran I; Kepmen ESDM 1827 K/30/MEM/2018 Lampiran III (SMKP); Permenaker No. 5/2018; ISO 45001:2018 kl. 8.1.2; ICMM Critical Control Management; OEM Manual |
| 2 | Memarkir unit di permukaan rata, keras, dan bebas dari benda menggantung / lalu lintas unit | • (S) Permukaan miring, lunak, atau berlumpur<br>• (S) Unit bergerak / meluncur sendiri<br>• (S) Line of fire lalu lintas unit tambang<br>• (E) Ceceran oli dari unit yang bocor ke tanah | • (S) Unit terguling / meluncur, tertimpa, terjepit<br>• (S) Tertabrak unit lain saat parkir<br>• (E) Kontaminasi tanah oleh hidrokarbon | **Eliminasi:** Pindahkan unit ke lay down area / bengkel bila kondisi lahan tidak layak.<br>**Engineering:** Ganjal roda (chock block) pada minimal satu as; ground bearing capacity dicek; barikade & rambu area servis.<br>**Administrative:** Safe Parking Procedure; posisi lurus (straight ahead) untuk ADT; spotter saat maneuver; jarak aman dari tepi lereng/highwall.<br>**Environmental:** Drip tray / terpal di bawah titik bocor.<br>**PPE:** Rompi reflektif. | Kepmen ESDM 1827 K/30/MEM/2018 (pengelolaan lalu lintas tambang); Permenaker No. 8/2020; PP No. 22/2021; ISO 14001:2015 kl. 8.1; OEM Manual (Service Position / Preparation before Inspection and Maintenance) |
| 3 | Menurunkan attachment / bin ke tanah (drop implement) dan mengembalikan unit ke posisi servis | • (S) Attachment / bin tergantung karena energi hidrolik tersisa<br>• (S) Titik jepit antara attachment dan tanah<br>• (E) Ceceran oli hidrolik | • (S) Tertimpa attachment/bin turun sendiri — fatality<br>• (S) Anggota tubuh terjepit / remuk<br>• (E) Pencemaran tanah | **Eliminasi:** Semua attachment diturunkan menyentuh tanah; bin diturunkan penuh ke chassis sebelum kerja.<br>**Engineering:** Pemasangan bin prop / safety pin bila bin harus terangkat; pilot shut-off lever ke posisi LOCK.<br>**Administrative:** Larangan berada di bawah beban tergantung; Line of Fire assessment.<br>**PPE:** Sarung tangan, safety shoes. | Permenaker No. 8/2020; OSHA 29 CFR 1910.147; ISO 12100:2010; OEM Manual (Preparation before Inspection and Maintenance / Service Position) |
| 4 | Mendinginkan engine: putar idle rendah tanpa beban ±5 menit, lalu matikan engine dan cabut kunci | • (S) Komponen berputar (fan, propshaft, belt)<br>• (H) Permukaan panas engine, exhaust, turbo, radiator<br>• (H) Kebisingan & gas buang<br>• (E) Emisi gas buang | • (S) Terjerat / terpotong komponen berputar<br>• (H) Luka bakar termal<br>• (H) NIHL, keracunan CO<br>• (E) Emisi udara | **Engineering:** Guard fan & propshaft terpasang; ventilasi memadai bila di dalam ruangan.<br>**Administrative:** Waktu cooling down dipatuhi; kunci dicabut & dipegang teknisi pelaksana; larangan pakaian longgar & perhiasan.<br>**PPE:** Ear plug/muff, sarung tangan tahan panas. | Permenaker No. 5/2018 (NAB kebisingan & kimia); Permenaker No. 38/2016; OEM Manual (allow the machine to cool down) |
| 5 | Melakukan isolasi energi: OFF battery isolator switch, pasang lockout clamp + gembok pribadi, pasang danger tag "DO NOT OPERATE" | • (S) Energi listrik tersimpan (baterai, kapasitor ECU)<br>• (S) Start tak terduga oleh orang lain<br>• (H) Elektrolit asam baterai<br>• (E) Limbah B3 baterai bekas | • (S) Tersengat listrik, arc flash, korsleting<br>• (S) Unit hidup saat dikerjakan — fatality<br>• (H) Luka bakar kimia asam<br>• (E) Pencemaran B3 | **Critical Control — LOTO:** Isolator switch OFF; folding lockout scissor clamp pada lock-out point resmi (isolator, bin prop, articulation safety bar, cab tilt pump, over-centre bin lock); satu gembok satu orang; danger tag terpasang di kemudi / control lever.<br>**Administrative:** Group LOTO dengan lockbox bila banyak pekerja; verifikasi try-out (coba start) setelah isolasi.<br>**PPE:** Sarung tangan isolasi, pelindung wajah saat kerja baterai. | Permenaker No. 12/2015 (K3 Listrik); OSHA 29 CFR 1910.147; ISO 45001:2018 kl. 8.1.2; AS 4024; OEM Manual (Lock-Out Points) |
| 6 | Melepas seluruh tekanan sisa sistem: hidrolik, pneumatik, akumulator rem, sistem pendingin, dan bahan bakar | • (S) Energi tersimpan bertekanan tinggi<br>• (S) Semburan fluida bertekanan (injection injury)<br>• (H) Coolant panas menyembur<br>• (E) Tumpahan oli / coolant | • (S) Ledakan/lecutan hose, komponen terlempar<br>• (S) Fluid injection injury — amputasi<br>• (H) Luka bakar derajat 2–3<br>• (E) Pencemaran tanah & air | **Critical Control:** Prosedur pelepasan tekanan OEM dijalankan penuh sebelum satu pun fitting dibuka; akumulator rem didischarge (injak-lepas pedal rem minimal 20 kali sampai pedal keras/rata); tekanan pneumatik dibuang lewat drain valve reservoir; radiator cap hanya dibuka saat dingin dan dikendurkan bertahap ke stop pertama.<br>**Administrative:** Cek kebocoran memakai kertas/kayu — tidak pernah dengan tangan; hanya personel kompeten yang melepas tekanan hidrolik/BBM/AC.<br>**Environmental:** Wadah penampung & spill kit siap.<br>**PPE:** Face shield, sarung tangan tahan kimia, apron. | Permenaker No. 37/2016 (Bejana Tekan); Permenaker No. 38/2016; OEM Manual (Hydraulic System Depressurising Procedure / Hydraulic Circuit Pressure Release Procedure); ISO 12100:2010 |
| 7 | Verifikasi zero energy state dan serah terima area kerja ke tim pelaksana | • (S) Verifikasi dilewati / asumsi sudah aman<br>• (E) Tidak Signifikan | • (S) Energi sisa tidak terdeteksi — cedera fatal saat pembongkaran<br>• (E) Tidak Signifikan | **Critical Control:** Test-before-touch — coba operasikan control lever/starter untuk memastikan tidak ada respons; cek gauge tekanan menunjukkan nol.<br>**Administrative:** Checklist isolasi ditandatangani supervisor; Two-Man Rule; TBM ulang bila lingkup berubah.<br>**PPE:** APD dasar lengkap. | PP No. 50/2012; ISO 45001:2018; ICMM CCM Verification; OEM Manual |

Additional Safety Tips
- Cuci unit sampai bersih sebelum masuk workshop agar bahaya tersembunyi (retak, bocor, kabel terkelupas) terlihat dan kontaminasi tidak terbawa ke komponen presisi.
- Gembok LOTO adalah milik pribadi dan hanya boleh dibuka oleh pemasangnya; jangan pernah menitipkan kunci gembok.
- Semua tekanan pneumatik, hidrolik, dan bahan bakar dilepas bertahap, bukan sekaligus.

Point of Concern
- Sistem pengisian rem dapat menaikkan tekanan secara otomatis tanpa peringatan meskipun engine sudah mati — banyak selang masih bertekanan setelah unit dimatikan.
- Melepas propeller shaft di kedua sisi park brake membuat park brake tidak berfungsi sama sekali.
- Unit yang parkir di lereng tetap bisa meluncur walaupun park brake aktif jika satu as diangkat dengan dongkrak.

Common Mistakes
- Menganggap "engine sudah mati berarti aman" — hindari dengan wajib menjalankan prosedur pelepasan tekanan dan test-before-touch.
- Memasang tag tanpa gembok — hindari dengan aturan tag-plus-lock, tag saja tidak diakui sebagai isolasi.
- Mengganjal roda hanya pada as yang didongkrak — hindari dengan mengganjal roda pada minimal satu as lain yang menapak tanah.

Golden Rules
- Tidak ada pekerjaan pada unit sebelum energi diisolasi dan diverifikasi nol.
- Tidak seorang pun berada di bawah beban yang hanya ditahan silinder hidrolik.
- Satu orang satu gembok, tanpa pengecualian.

Critical Controls
- Battery isolator OFF + gembok pribadi + danger tag terpasang.
- Attachment/bin turun ke tanah atau ditopang penopang mekanis (bin prop / cab stay / stand).
- Akumulator rem terdischarge sampai pedal rata dan gauge nol.
- Chock block terpasang pada minimal satu as.
- Verifikasi test-before-touch terdokumentasi.

Required PPE
- Mandatory PPE: Safety helmet, safety glasses, safety shoes, coverall, sarung tangan kerja, rompi reflektif.
- Additional PPE: Face shield & sarung tangan tahan kimia (kerja tekanan/fluida), ear plug/muff, sarung tangan tahan panas.

Emergency Response
- Potensi Keadaan Darurat: Fluid injection injury, luka bakar termal/kimia, terjepit, start tak terduga.
- Respon Awal: Hentikan pekerjaan, amankan area, aktifkan emergency stop, hubungi ERT & pengawas; korban fluid injection langsung dirujuk ke rumah sakit sebagai kasus bedah darurat meskipun luka luar terlihat kecil.
- Peralatan Darurat yang Diperlukan: Kotak P3K, APAR, spill kit, eyewash station, alat komunikasi (radio/HT), nomor ERT & MEDEVAC.

Keterangan
Modul ini adalah prasyarat wajib bagi seluruh modul EXC dan ADT dalam database ini. Setiap modul perawatan berikutnya mengasumsikan JSEA-GEN-01 telah diselesaikan penuh.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

## JSEA-GEN-02

Proses / Pekerjaan: Pelepasan Tekanan Sirkuit Hidrolik dan Pembuangan Udara (Pressure Release & Air Bleeding)

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Memarkir unit pada posisi servis, attachment turun, engine mati, kunci dilepas | • (S) Unit bergerak sendiri<br>• (S) Attachment turun mendadak<br>• (E) Tidak Signifikan | • (S) Tertimpa / terjepit<br>• (E) Tidak Signifikan | **Administrative:** Ikuti JSEA-GEN-01 sepenuhnya; chock block terpasang.<br>**Engineering:** Pilot shut-off lever LOCK.<br>**PPE:** APD dasar. | OEM Manual (Preparation before Inspection and Maintenance); UU No. 1/1970 |
| 2 | Membuang udara / tekanan dari tangki oli hidrolik melalui air bleed valve | • (S) Semburan udara & kabut oli bertekanan<br>• (H) Kabut oli terhirup, kontak mata<br>• (E) Ceceran oli hidrolik | • (S) Mata terkena semburan, benda terlempar<br>• (H) Iritasi mata & saluran napas, dermatitis<br>• (E) Pencemaran tanah/lantai | **Engineering:** Buka air bleed valve secara perlahan dan bertahap; arahkan menjauh dari wajah.<br>**Administrative:** Larangan berdiri segaris dengan arah semburan (Line of Fire).<br>**Environmental:** Majun & drip tray di bawah valve; limbah masuk kategori B3.<br>**PPE:** Safety goggles, sarung tangan nitril. | Permenaker No. 5/2018; PP No. 22/2021 Lampiran IX; OEM Manual (Bleeding Air from Hydraulic Oil Tank); ISO 4406 |
| 3 | Melepas tekanan sisa sirkuit hidrolik excavator: pilot shut-off lever UNLOCK, engine stop switch ON, key switch ke START, operasikan control lever 4–5 kali | • (S) Gerakan attachment tak terduga saat lever dioperasikan<br>• (S) Starter berputar, arus tinggi<br>• (H) Posisi kerja di dalam kabin terbatas<br>• (E) Tidak Signifikan | • (S) Attachment bergerak menimpa orang di sekitar<br>• (S) Baterai drop / panas berlebih<br>• (H) Ketegangan otot<br>• (E) Tidak Signifikan | **Critical Control:** Pastikan tidak ada orang di radius swing/attachment sebelum lever dioperasikan; gunakan exclusion zone & spotter.<br>**Administrative:** Operasikan key switch hanya sebentar agar baterai tidak drop; kembalikan pilot shut-off lever ke LOCK dan engine stop switch OFF setelah selesai; komunikasi dua arah antara operator kabin dan teknisi.<br>**PPE:** APD dasar. | OEM Manual (Hydraulic Circuit Pressure Release Procedure); ISO 12100:2010; OSHA 29 CFR 1910.147 |
| 4 | Melepas tekanan sistem pada unit ADT: putar kemudi 3 kali kiri-kanan, injak-lepas pedal rem ≥20 kali, buang tekanan pneumatik lewat drain valve reservoir | • (S) Unit dapat sedikit berbelok karena tekanan silinder steering dilepas<br>• (S) Semburan udara & kondensat bertekanan<br>• (H) Kebisingan impulsif dari pembuangan udara<br>• (E) Kondensat berminyak dari air reservoir | • (S) Terjepit di area artikulasi saat unit bergerak<br>• (S) Benda/partikel terlempar oleh udara bertekanan<br>• (H) Gangguan pendengaran sesaat<br>• (E) Pencemaran tanah oleh kondensat | **Critical Control:** Articulation safety bar terpasang dan digembok sebelum siapa pun masuk area artikulasi.<br>**Engineering:** Arahkan drain valve ke bawah/menjauh; wadah penampung kondensat.<br>**Administrative:** Larangan berada di zona jepit artikulasi saat kemudi diputar; komunikasi dua arah.<br>**PPE:** Safety goggles, ear plug. | OEM Manual (Hydraulic System Depressurising Procedure); Permenaker No. 37/2016; Permenaker No. 5/2018 |
| 5 | Mendischarge akumulator sistem rem (metode pedal atau metode fly lead hose ke test port) | • (S) Energi gas nitrogen bertekanan sangat tinggi<br>• (S) Semburan oli hidrolik volume besar<br>• (H) Kontak kulit dengan oli<br>• (E) Tumpahan oli hidrolik dalam volume besar | • (S) Fitting terlempar, injection injury, ledakan akumulator<br>• (H) Dermatitis kontak<br>• (E) Pencemaran tanah/air permukaan | **Critical Control:** Discharge akumulator wajib sebelum pekerjaan apa pun pada sistem rem; verifikasi pedal rem terasa rata/keras dan gauge nol.<br>**Engineering:** Wadah penampung dengan kapasitas dihitung dari jumlah akumulator × volume per akumulator; fly lead hose kondisi baik & rating tekanan sesuai.<br>**Administrative:** Hanya personel kompeten & tersertifikasi; overhaul/recertification akumulator gas hanya oleh personel terampil.<br>**Environmental:** Spill kit, oli bekas ke TPS Limbah B3 berlogbook.<br>**PPE:** Face shield, sarung tangan tahan kimia, apron. | Permenaker No. 37/2016; ISO 12100-1&2:2010; PP No. 22/2021; Permen LHK No. 6/2021; OEM Manual (Brake Charge System / Methods to discharge brake system) |
| 6 | Membuang udara sistem hidrolik / bahan bakar / radiator setelah perbaikan | • (S) Semburan bahan bakar bertekanan<br>• (S) Coolant panas bertekanan<br>• (H) Uap solar terhirup<br>• (E) Ceceran solar & coolant | • (S) Kebakaran akibat solar mengenai permukaan panas<br>• (H) Luka bakar, iritasi saluran napas<br>• (E) Pencemaran tanah, limbah B3 | **Engineering:** Radiator cap dibuka hanya saat engine dingin, dikendurkan bertahap ke stop pertama; hindari sumber api.<br>**Administrative:** Hot work permit bila ada pekerjaan panas berdekatan; APAR di dekat area.<br>**Environmental:** Majun terkontaminasi & solar bekas ke TPS Limbah B3.<br>**PPE:** Sarung tangan tahan kimia, goggles. | OEM Manual (Bleeding Air from Fuel System / Inspect Cooling System); Permenakertrans No. 4/1980; NFPA 10; PP No. 22/2021 |

Additional Safety Tips
- Tekanan pada sirkuit hidrolik dapat tetap tinggi berjam-jam setelah engine mati; waktu tunggu bukan pengganti prosedur pelepasan tekanan.
- Gunakan kertas karton atau potongan kayu untuk mendeteksi lokasi kebocoran pinhole, jangan pernah menggunakan tangan.
- Beri label dan cap pada setiap hose/pipa yang dilepas agar pemasangan kembali tidak tertukar.

Point of Concern
- Pada excavator, prosedur pelepasan tekanan membuat starter berputar tanpa engine menyala; ini normal, tetapi baterai cepat drop bila key switch ditahan terlalu lama.
- Akumulator rem menyimpan energi meskipun seluruh sistem terlihat mati; ini penyebab umum cedera pada pekerjaan sistem rem.
- Melepas tekanan tangki hidrolik tidak sama dengan melepas tekanan sirkuit hidrolik — keduanya prosedur terpisah dan keduanya wajib.

Common Mistakes
- Langsung mengendurkan fitting hidrolik untuk "membuang tekanan" — hindari dengan menggunakan valve/port pelepas tekanan resmi sesuai OEM Manual.
- Mengendurkan katup grease/valve tekanan terlalu cepat — hindari dengan pengendoran bertahap maksimal 1–1,5 putaran dan menjaga tubuh keluar dari garis semburan.
- Melewatkan pembuangan tekanan pneumatik karena dianggap "hanya angin" — hindari dengan memasukkan pneumatik ke checklist isolasi energi.

Golden Rules
- Tidak ada fitting dibuka sebelum tekanan diverifikasi nol.
- Tidak ada anggota tubuh di garis semburan (Line of Fire) fluida bertekanan.
- Semua fluida yang keluar ditampung, tidak ada yang jatuh ke tanah.

Critical Controls
- Prosedur pelepasan tekanan OEM dijalankan dan diverifikasi (gauge nol / pedal rata / lever tanpa respons).
- Articulation safety bar terpasang untuk pekerjaan depressurising pada unit artikulasi.
- Exclusion zone attachment ditegakkan saat control lever dioperasikan.
- Wadah penampung dan spill kit tersedia sebelum pekerjaan dimulai.

Required PPE
- Mandatory PPE: Safety helmet, safety glasses, safety shoes, coverall, sarung tangan kerja.
- Additional PPE: Face shield, sarung tangan tahan kimia (nitril), apron, ear plug.

Emergency Response
- Potensi Keadaan Darurat: Fluid injection injury, semburan coolant panas, kebakaran solar, tumpahan oli skala besar.
- Respon Awal: Hentikan pekerjaan; untuk injection injury jangan tunggu gejala, langsung evakuasi medis; tumpahan segera dikontain dengan absorbent dan dilaporkan.
- Peralatan Darurat yang Diperlukan: Spill kit, APAR, eyewash, kotak P3K, alat komunikasi.

Keterangan
Volume oli yang keluar dari akumulator dapat mencapai beberapa liter per akumulator; hitung jumlah akumulator dikali volume per unit untuk menentukan kapasitas wadah penampung sebelum mulai.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

## JSEA-GEN-03

Proses / Pekerjaan: Pencucian Unit dan Contamination Control Sebelum Pembongkaran

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Memindahkan unit ke area pencucian berlantai kedap dengan oil catcher / water treatment | • (S) Manuver unit di area sempit & licin<br>• (E) Air limbah pencucian mengandung minyak & lumpur | • (S) Tertabrak / terjepit antara unit dan bangunan<br>• (E) Pencemaran badan air, pelanggaran baku mutu air limbah | **Engineering:** Area cuci berlantai kedap, dilengkapi oil trap/separator dan bak sedimentasi.<br>**Administrative:** Spotter saat manuver; batas kecepatan area workshop; izin pembuangan air limbah dipenuhi.<br>**Environmental:** Air limbah diolah, tidak dibuang langsung ke drainase.<br>**PPE:** Rompi reflektif. | PP No. 22/2021 (baku mutu air limbah); Permen LHK terkait persetujuan teknis air limbah; OEM Manual (Clean the Machine); ISO 14001:2015 |
| 2 | Mencuci unit dengan water jet / high pressure cleaner | • (S) Semburan air bertekanan tinggi<br>• (S) Permukaan licin, bekerja di ketinggian pada bodi unit<br>• (H) Kabut air & deterjen, kebisingan<br>• (E) Konsumsi air, limbah deterjen | • (S) Injection injury oleh water jet, terpeleset & jatuh dari ketinggian<br>• (H) Iritasi kulit/mata, dermatitis, NIHL<br>• (E) Pemakaian air berlebih, pencemaran | **Engineering:** Nozzle dengan trigger dead-man; tangga/platform akses berpagar untuk area tinggi; anti-slip.<br>**Administrative:** Larangan mengarahkan jet ke orang; larangan menyemprot langsung ke komponen listrik/ECU/konektor; pembatasan tekanan sesuai rekomendasi OEM.<br>**Environmental:** Deterjen biodegradable, kontrol volume air.<br>**PPE:** Raincoat, safety goggles/face shield, sepatu anti-slip, ear plug, sarung tangan. | Permenaker No. 9/2016 (bekerja pada ketinggian); Permenaker No. 5/2018; Permenaker No. 8/2010; ISO 14001:2015 |
| 3 | Membersihkan lumpur/kerikil yang menumpuk di undercarriage, sprocket, dan track link | • (S) Material padat terlempar saat dicongkel<br>• (S) Posisi kerja membungkuk / berlutut di bawah unit<br>• (H) Postur janggal, beban angkat manual<br>• (E) Limbah lumpur tercampur oli | • (S) Mata terkena serpihan, tangan terjepit<br>• (H) Musculoskeletal disorder<br>• (E) Limbah B3 bila terkontaminasi hidrokarbon | **Engineering:** Gunakan alat pencongkel bergagang panjang, bukan tangan.<br>**Administrative:** Unit dalam kondisi terisolasi (LOTO) sebelum masuk kolong; rotasi kerja untuk postur janggal; batasan angkat manual.<br>**Environmental:** Lumpur terkontaminasi ditangani sebagai limbah B3.<br>**PPE:** Safety goggles, sarung tangan, knee pad. | Permenaker No. 5/2018 (ergonomi); PP No. 22/2021; Permen LHK No. 6/2021; OEM Manual (remove gravel or mud before loosening) |
| 4 | Mengeringkan unit dan membersihkan permukaan komponen sebelum dibawa ke area pembongkaran | • (S) Sisa air pada komponen listrik<br>• (E) Tidak Signifikan | • (S) Korsleting, kegagalan ECU saat unit dinyalakan<br>• (E) Tidak Signifikan | **Engineering:** Keringkan dengan udara bertekanan rendah/bersih; lindungi konektor sebelum dicuci.<br>**Administrative:** Verifikasi kondisi konektor & ECU sebelum energize ulang.<br>**PPE:** Safety goggles saat menggunakan udara bertekanan. | Permenaker No. 12/2015; OEM Manual (Precautions for Disassembling) |
| 5 | Menutup ujung terbuka hose/pipa dengan cap dan memberi identification tag sebelum & selama pembongkaran | • (S) Salah pasang saat perakitan kembali<br>• (H) Tidak Signifikan<br>• (E) Ceceran oli dari ujung terbuka | • (S) Kegagalan sistem hidrolik pasca perbaikan — unit lepas kendali<br>• (E) Pencemaran & pemborosan oli | **Critical Control — Contamination Control:** Semua ujung hose/pipa/port di-cap segera setelah dilepas; identification tag pada setiap konektor.<br>**Engineering:** Area pembongkaran bersih & terpisah dari area pencucian; workbench bersih.<br>**Administrative:** Target kebersihan oli sesuai kode kebersihan yang dipersyaratkan; hitung dan catat jumlah tool sebelum dan sesudah perakitan agar tidak ada tool tertinggal di dalam unit.<br>**Environmental:** Drip tray di bawah titik pelepasan.<br>**PPE:** Sarung tangan nitril. | ISO 4406; OEM Manual (Precautions for Disassembling and Assembling); ISO 9001:2015 kl. 8.5; PP No. 22/2021 |

Additional Safety Tips
- Unit kotor yang masuk workshop adalah penyebab utama kontaminasi komponen presisi dan kegagalan dini pasca perbaikan.
- Kotoran dan karat pada dudukan seal harus dibersihkan dengan sikat kawat lalu dikeringkan dengan udara bertekanan sebelum seal baru dipasang.
- Jangan menyemprotkan water jet langsung ke seal, bearing, konektor listrik, atau label identifikasi unit.

Point of Concern
- Air limbah pencucian alat berat masuk kategori air limbah berminyak dan wajib melalui pengolahan sebelum dibuang.
- Majun, absorbent, dan lumpur yang terkontaminasi oli adalah limbah B3, bukan sampah domestik.
- Water jet bertekanan tinggi mampu menembus kulit dan menyebabkan injection injury seperti halnya oli hidrolik.

Common Mistakes
- Menggunakan tangan untuk mengarahkan atau menahan objek yang disemprot — hindari dengan penjepit/penahan mekanis.
- Membiarkan ujung hose terbuka "sebentar saja" — hindari dengan menyiapkan cap set lengkap sebelum pembongkaran dimulai.
- Membuang air cucian langsung ke saluran drainase — hindari dengan memastikan seluruh aliran masuk ke oil trap.

Golden Rules
- Unit masuk workshop dalam keadaan bersih.
- Setiap ujung terbuka ditutup dan diberi tanda.
- Tidak ada air limbah berminyak yang keluar tanpa pengolahan.

Critical Controls
- Oil trap/separator berfungsi dan terpelihara.
- Cap dan identification tag tersedia dan digunakan pada semua ujung terbuka.
- Isolasi energi unit tetap terpasang selama pembersihan undercarriage.
- Perhitungan tool sebelum dan sesudah pekerjaan.

Required PPE
- Mandatory PPE: Safety helmet, safety glasses, safety shoes anti-slip, coverall, sarung tangan.
- Additional PPE: Raincoat, face shield, ear plug, sarung tangan nitril, knee pad.

Emergency Response
- Potensi Keadaan Darurat: Injection injury water jet, terpeleset/jatuh, tumpahan oli ke drainase.
- Respon Awal: Hentikan penyemprotan, evakuasi korban, tutup aliran ke drainase dengan spill boom/absorbent, laporkan ke QSHE.
- Peralatan Darurat yang Diperlukan: Spill kit, absorbent boom, eyewash, kotak P3K.

Keterangan
Pencucian unit adalah tahapan wajib yang disyaratkan OEM sebelum unit dibawa masuk ke area pembongkaran, bukan kegiatan opsional.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

## JSEA-GEN-04

Proses / Pekerjaan: Pembongkaran dan Pemasangan Komponen Secara Umum, Termasuk Pengencangan Baut dan Sambungan Pipa

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Mempelajari prosedur pembongkaran, menyiapkan special tool, dan mencatat kondisi awal (model, SN, HM, alasan pembongkaran, kebocoran, part longgar) | • (S) Prosedur tidak dipahami, urutan salah<br>• (S) Special tool tidak tersedia sehingga dipaksakan alat improvisasi<br>• (E) Tidak Signifikan | • (S) Komponen jatuh/terlempar akibat urutan pembongkaran salah<br>• (S) Alat gagal, teknisi cedera<br>• (E) Tidak Signifikan | **Critical Control:** Special tool sesuai OEM Manual wajib digunakan; dilarang membuat alat pengganti tanpa engineering approval.<br>**Administrative:** Pre-job briefing membaca prosedur; checklist tool; catat pengukuran keausan & clearance.<br>**PPE:** APD dasar. | OEM Manual (Precautions for Disassembling and Assembling); Permenaker No. 38/2016; ISO 45001:2018 kl. 8.1 |
| 2 | Menyiapkan area kerja dan workbench yang bersih, rata, dan cukup luas | • (S) Housekeeping buruk, tersandung<br>• (S) Pencahayaan kurang<br>• (H) Postur kerja janggal karena ketinggian workbench tidak sesuai<br>• (E) Tidak Signifikan | • (S) Terpeleset/tersandung, komponen jatuh menimpa kaki<br>• (H) Musculoskeletal disorder, kelelahan mata<br>• (E) Tidak Signifikan | **Engineering:** Workbench dengan kapasitas beban sesuai; lampu kerja min. sesuai standar iluminasi; rak penyimpanan part.<br>**Administrative:** Program 5R/housekeeping; jalur akses bebas hambatan.<br>**PPE:** Safety shoes toe cap. | Permenaker No. 5/2018 (pencahayaan & ergonomi); OEM Manual (Prepare and Clean Tools and Disassembly Area) |
| 3 | Membuang oli hidrolik/gear oil dari komponen sebelum dibongkar dan menampungnya | • (S) Oli panas<br>• (H) Kontak kulit berulang dengan oli bekas<br>• (E) Oli bekas = limbah B3 | • (S) Luka bakar termal<br>• (H) Dermatitis, risiko karsinogenik oli bekas<br>• (E) Pencemaran tanah & air | **Engineering:** Wadah drain berkapasitas cukup, corong, pompa transfer.<br>**Administrative:** Tunggu unit dingin; larangan mencuci tangan dengan solar/oli.<br>**Environmental:** Oli bekas ke TPS Limbah B3 berizin dengan logbook & manifest; majun terkontaminasi dipisah.<br>**PPE:** Sarung tangan nitril, apron, goggles. | PP No. 22/2021 Lampiran IX; Permen LHK No. 6/2021; Permenaker No. 5/2018; OEM Manual |
| 4 | Melepas nut/bolt; bila komponen tidak lepas, mencari penyebab tanpa memaksa | • (S) Baut macet/karat, tool slip<br>• (S) Penggunaan palu — serpihan logam beterbangan<br>• (H) Getaran alat tangan (impact wrench)<br>• (E) Aerosol penetrant | • (S) Tangan terluka akibat tool slip, mata tertusuk serpihan logam<br>• (H) Hand-Arm Vibration Syndrome<br>• (E) Emisi VOC | **Critical Control:** Wajib safety goggles/face shield saat memukul dengan palu — serpihan logam dapat terlempar.<br>**Engineering:** Gunakan penetrant, pemanas terkontrol, atau puller; palu dan drift pin kondisi baik (kepala tidak jamur/mushroomed).<br>**Administrative:** Dilarang memaksa melepas komponen; identifikasi penyebab macet dahulu; batasi durasi paparan getaran; program inspeksi tools berkala.<br>**PPE:** Face shield + goggles, sarung tangan anti-impact. | OEM Manual (Metal fragments may fly off when a hammer is used); Permenaker No. 8/2010; Permenaker No. 5/2018; ANSI/ISEA Z87.1 |
| 5 | Menata, menandai (matching mark), dan menyimpan part hasil bongkaran | • (S) Part tajam & berat di lantai<br>• (H) Angkat-angkut manual berulang<br>• (E) Tidak Signifikan | • (S) Tersandung, tertimpa part<br>• (H) Cedera punggung<br>• (E) Tidak Signifikan | **Engineering:** Rak/pallet & trolley untuk part berat; bin kecil untuk baut-mur.<br>**Administrative:** Matching mark sebelum dilepas; batas angkat manual per orang dan two-man lift untuk beban besar.<br>**PPE:** Sarung tangan anti-potong. | Permenaker No. 5/2018; OEM Manual (Orderly arrange disassembled parts) |
| 6 | Merakit kembali: mengganti O-ring, back-up ring, oil seal, floating seal dengan yang baru; mengoleskan pelumas | • (S) Sliding surface tergores<br>• (H) Kontak grease/sealant dengan kulit<br>• (E) Kemasan sealant & seal bekas | • (S) Kebocoran & kegagalan komponen saat operasi<br>• (H) Iritasi kulit<br>• (E) Limbah B3 kemasan | **Critical Control:** O-ring, back-up ring, oil seal, dan floating seal wajib diganti baru setelah dibongkar; permukaan liquid gasket bersih dan kering.<br>**Engineering:** Gunakan tool khusus untuk memasang bearing, bushing, dan oil seal.<br>**Administrative:** Bersihkan anti-corrosive agent pada part baru; pasang sesuai matching mark.<br>**Environmental:** Kemasan bekas ke TPS Limbah B3.<br>**PPE:** Sarung tangan nitril. | OEM Manual (Precautions for Assembling / Precautions for Using Floating Seal); Permen LHK No. 6/2021 |
| 7 | Mengencangkan baut & sambungan pipa sesuai torsi spesifikasi dan urutan pengencangan | • (S) Torque wrench tidak terkalibrasi<br>• (S) Sambungan hidrolik bocor saat diberi tekanan<br>• (H) Postur & beban saat torsi besar<br>• (E) Ceceran oli dari sambungan bocor | • (S) Baut patah / sambungan lepas saat operasi — komponen terlepas, fatality<br>• (S) Semburan oli bertekanan<br>• (H) Cedera bahu/pinggang<br>• (E) Pencemaran | **Critical Control:** Torsi sesuai tabel OEM dan urutan silang; torque wrench terkalibrasi dengan sertifikat berlaku.<br>**Engineering:** Torque multiplier untuk torsi besar; hindari extension pipe pada kunci.<br>**Administrative:** Verifikasi torsi oleh orang kedua untuk sambungan kritis; leak test bertahap setelah perakitan dengan orang menjauh dari garis semburan.<br>**PPE:** Face shield saat leak test. | OEM Manual (Tightening Bolts and Nuts / Piping Joint); Permenaker No. 38/2016; ISO 9001:2015 kl. 7.1.5 (kalibrasi) |
| 8 | Menghitung ulang jumlah tool dan memastikan tidak ada yang tertinggal di dalam unit | • (S) Tool tertinggal di dalam assembly<br>• (E) Tidak Signifikan | • (S) Kerusakan katastropik & kecelakaan saat unit dioperasikan<br>• (E) Tidak Signifikan | **Critical Control:** Tool count in–out dicatat dan diverifikasi; shadow board.<br>**Administrative:** Foreign Object Damage (FOD) check sebelum penutupan cover; sign-off supervisor.<br>**PPE:** APD dasar. | OEM Manual (Keep a record of the number of tools used); ISO 9001:2015 |

Additional Safety Tips
- Palu dengan kepala jamur (mushroomed) adalah sumber utama serpihan logam beterbangan; singkirkan dari peredaran, jangan digerinda ulang tanpa prosedur.
- Catat dan simpan hasil pengukuran keausan dan clearance sebagai data untuk analisa kegagalan berikutnya.
- Beri identification tag pada connector, hose, dan pipa sebelum dilepas agar perakitan kembali tidak menebak-nebak.

Point of Concern
- Memaksa melepas komponen yang macet adalah pemicu klasik cedera tangan, mata, dan kerusakan komponen mahal.
- Penggunaan alat improvisasi sebagai pengganti special tool mengubah profil risiko pekerjaan secara total dan tidak dicakup oleh instruksi OEM.
- Torsi berlebih sama berbahayanya dengan torsi kurang; keduanya menyebabkan kegagalan sambungan.

Common Mistakes
- Memukul pin tanpa pelindung mata karena "hanya sebentar" — hindari dengan menjadikan face shield syarat mutlak setiap ada palu di tangan.
- Memakai kembali O-ring dan floating seal lama untuk menghemat waktu — hindari dengan menyiapkan seal kit lengkap sebelum pembongkaran.
- Mengandalkan perasaan tangan untuk torsi — hindari dengan torque wrench terkalibrasi dan verifikasi silang.

Golden Rules
- Tidak ada pukulan palu tanpa pelindung mata dan wajah.
- Tidak ada special tool, tidak ada pekerjaan.
- Semua tool yang masuk harus keluar dan terhitung.

Critical Controls
- Face shield/goggles saat pekerjaan pemukulan dan pelepasan pin.
- Special tool sesuai OEM tersedia dan laik.
- Torque wrench terkalibrasi dan tabel torsi tersedia di titik kerja.
- Seal kit baru tersedia sebelum pembongkaran.
- Tool count in–out terverifikasi.

Required PPE
- Mandatory PPE: Safety helmet, safety glasses, safety shoes, coverall, sarung tangan kerja.
- Additional PPE: Face shield, sarung tangan anti-impact/anti-potong, apron, sarung tangan nitril.

Emergency Response
- Potensi Keadaan Darurat: Mata tertusuk serpihan logam, tangan terjepit/terpukul, komponen jatuh.
- Respon Awal: Jangan mengucek atau mencabut benda asing dari mata; tutup mata dengan pelindung dan rujuk ke fasilitas medis; amankan area dari komponen jatuh.
- Peralatan Darurat yang Diperlukan: Kotak P3K, eyewash station, alat komunikasi, akses evakuasi medis.

Keterangan
Modul ini adalah dasar bagi seluruh modul pembongkaran komponen excavator (JSEA-EXC) dan ADT (JSEA-ADT) dalam database ini.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

## JSEA-GEN-05

Proses / Pekerjaan: Pengangkatan dan Penanganan Komponen Berat (Lifting & Rigging) di Workshop dan Lapangan

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Menentukan berat komponen dan memilih alat angkat serta alat bantu angkat yang sesuai | • (S) Berat komponen tidak diketahui / diperkirakan<br>• (S) Kapasitas alat angkat terlampaui<br>• (E) Tidak Signifikan | • (S) Sling putus, komponen jatuh menimpa pekerja — fatality<br>• (S) Crane/hoist terguling<br>• (E) Tidak Signifikan | **Critical Control:** Berat komponen diambil dari OEM Manual, bukan perkiraan. Contoh rujukan berat pada excavator kelas 20 ton: cab assembly ±420 kg; counterweight; engine ±490 kg; tangki bahan bakar ±160 kg; tangki hidrolik ±97 kg; pump device ±160–170 kg; control valve ±240 kg; swing device ±220 kg; swing bearing ±230 kg; travel device ±310 kg; front idler ±110 kg; track adjuster ±140 kg; boom cylinder ±170 kg; boom foot pin ±45 kg; track assembly ±1.260–1.420 kg. Berat bin pada ADT kelas 35–50 ton ±3.100–5.450 kg.<br>**Administrative:** Lifting plan untuk beban >kriteria perusahaan; SWL alat angkat ≥ beban × faktor keamanan.<br>**PPE:** APD dasar. | Permenaker No. 8/2020 (Pesawat Angkat dan Angkut); ASME B30.9; ASME B30.26; OEM Manual (data berat komponen) |
| 2 | Memeriksa kelaikan alat angkat & alat bantu angkat (hoist, crane, sling nylon, shackle, eyebolt) | • (S) Sling aus/terpotong, shackle deformasi, eyebolt tidak sesuai ulir<br>• (S) Sertifikat riksa uji kadaluarsa<br>• (H) Tidak Signifikan<br>• (E) Tidak Signifikan | • (S) Kegagalan alat bantu angkat saat beban terangkat — fatality<br>• (E) Tidak Signifikan | **Critical Control:** Riksa uji oleh PJK3 berizin, sertifikat berlaku, dan color coding periode inspeksi terpasang.<br>**Engineering:** Nylon sling untuk permukaan machined agar tidak merusak; eyebolt dengan ukuran & pitch ulir sesuai spesifikasi OEM.<br>**Administrative:** Pre-use inspection harian oleh rigger; tagging out alat yang tidak laik; register lifting gear.<br>**PPE:** Sarung tangan. | Permenaker No. 8/2020; Permenaker No. 33/2016 (pengawasan K3); ASME B30.9/B30.26; OEM Manual |
| 3 | Memasang rigging pada titik angkat resmi (hoisting position) dan mengatur sudut sling | • (S) Titik angkat tidak resmi / titik lemah<br>• (S) Sudut rigging melebihi batas, beban sling meningkat<br>• (S) Beban tidak seimbang, center of gravity meleset<br>• (E) Tidak Signifikan | • (S) Beban berayun / terguling saat diangkat, menimpa pekerja<br>• (E) Tidak Signifikan | **Critical Control:** Hanya titik angkat yang ditetapkan OEM yang boleh digunakan; sudut maksimum rigging tidak dilampaui; pusat rigging tepat di atas titik berat beban.<br>**Engineering:** Spreader bar bila diperlukan; softener pada sudut tajam; larangan mengikat soft sling langsung pada titik angkat tertentu bila dilarang OEM.<br>**Administrative:** Tag line untuk mengendalikan ayunan — tangan tidak menyentuh beban; rigger bersertifikat.<br>**PPE:** Sarung tangan, helm bertali dagu. | Permenaker No. 8/2020; ASME B30.9; OEM Manual (lifting points & maximum rigging angles) |
| 4 | Mengangkat dan memindahkan komponen | • (S) Beban tergantung di atas pekerja (Line of Fire)<br>• (S) Beban berayun / berputar<br>• (S) Benturan dengan struktur/unit lain (SIMOPS)<br>• (H) Kebisingan & komunikasi terganggu<br>• (E) Tidak Signifikan | • (S) Tertimpa beban jatuh — fatality<br>• (S) Terjepit antara beban dan struktur<br>• (H) Miskomunikasi menyebabkan kecelakaan<br>• (E) Tidak Signifikan | **Critical Control:** Exclusion zone / barricade di bawah dan sekitar beban; dilarang keras berada di bawah beban tergantung; angkat perlahan tanpa hentakan.<br>**Engineering:** Trial lift beberapa sentimeter untuk uji keseimbangan sebelum diangkat penuh.<br>**Administrative:** Satu signalman/rigger dengan aba-aba baku; komunikasi radio; SIMOPS control bila ada aktivitas lain; weather monitoring untuk lifting di luar ruangan (angin, petir, hujan).<br>**PPE:** Rompi reflektif untuk signalman. | Permenaker No. 8/2020; Kepmen ESDM 1827 K/30/MEM/2018; ASME B30.5; Safe Work Australia — Cranes COP; OEM Manual |
| 5 | Menurunkan dan menopang komponen pada stand / dudukan yang stabil | • (S) Stand tidak sesuai kapasitas atau tidak rata<br>• (S) Komponen menggelinding / terguling<br>• (E) Ceceran oli sisa dari komponen | • (S) Komponen jatuh dari stand menimpa pekerja<br>• (E) Pencemaran lantai/tanah | **Engineering:** Stand berkapasitas terverifikasi; pengganjal/cradle untuk komponen silindris; permukaan rata.<br>**Administrative:** Beban diturunkan pelan dan diletakkan lembut; sling tidak dilepas sebelum beban stabil dan tertopang penuh.<br>**Environmental:** Drip tray di bawah stand.<br>**PPE:** Safety shoes, sarung tangan. | Permenaker No. 8/2020; PP No. 22/2021; OEM Manual (place on a stand / support the machine) |
| 6 | Menopang unit yang diangkat sebagian (track frame, axle) dengan stand sebelum bekerja di bawahnya | • (S) Unit ditopang hanya oleh silinder hidrolik atau dongkrak<br>• (S) Unit meluncur dari dongkrak<br>• (E) Tidak Signifikan | • (S) Unit jatuh menimpa pekerja di kolong — fatality<br>• (E) Tidak Signifikan | **Critical Control:** Dilarang bekerja di bawah unit yang hanya ditopang dongkrak atau silinder hidrolik; wajib stand mekanis. Bila satu as diangkat, roda pada minimal satu as lain wajib diganjal karena unit tetap dapat meluncur meskipun park brake aktif.<br>**Engineering:** Stand berkapasitas sesuai berat unit; alas plat pada tanah lunak.<br>**Administrative:** Verifikasi kestabilan oleh orang kedua sebelum masuk kolong.<br>**PPE:** APD dasar. | Permenaker No. 8/2020; OEM Manual (Service Position / Machine Jacking Procedure); OSHA 29 CFR 1926.600 |

Additional Safety Tips
- Angkat percobaan (trial lift) beberapa sentimeter selalu dilakukan untuk memeriksa keseimbangan sebelum beban dinaikkan penuh.
- Gerakan beban yang lambat menghasilkan ayunan lebih kecil dan beban dinamis lebih rendah pada rigging.
- Pasang eyebolt hanya sampai duduk penuh pada ulir dan pastikan arah tarikan sesuai desain eyebolt.

Point of Concern
- Banyak komponen excavator berada di rentang 20–500 kg; berat yang tampak "bisa diangkat berdua" sering kali sudah melampaui batas angkat manual yang aman.
- Track assembly excavator kelas 20 ton beratnya lebih dari satu ton dan dapat terlepas mengayun saat dilepas dari sprocket.
- Track adjuster dapat terlempar oleh gaya pegas saat track dilepas — ini bahaya energi tersimpan, bukan sekadar bahaya beban.

Common Mistakes
- Menggunakan lubang atau tonjolan sembarang sebagai titik angkat — hindari dengan hanya memakai hoisting position dalam OEM Manual.
- Memegang atau mendorong beban tergantung dengan tangan — hindari dengan tag line.
- Melepas sling sebelum beban benar-benar duduk stabil — hindari dengan verifikasi kestabilan sebelum unhooking.

Golden Rules
- Tidak seorang pun berada di bawah beban tergantung.
- Tidak seorang pun bekerja di bawah unit yang hanya ditopang dongkrak atau silinder hidrolik.
- Berat beban diketahui dari manual sebelum diangkat.

Critical Controls
- Sertifikat riksa uji alat angkat & alat bantu angkat berlaku dan diverifikasi.
- Rigger/operator crane bersertifikat kompetensi (SIO) yang masih berlaku.
- Exclusion zone terpasang dan ditegakkan.
- Stand mekanis terpasang sebelum siapa pun masuk kolong unit.
- Berat komponen dikonfirmasi dari OEM Manual.

Required PPE
- Mandatory PPE: Safety helmet dengan tali dagu, safety glasses, safety shoes, coverall, sarung tangan kerja, rompi reflektif.
- Additional PPE: Sarung tangan anti-potong untuk penanganan sling kawat.

Emergency Response
- Potensi Keadaan Darurat: Beban jatuh, unit jatuh dari penopang, pekerja tertimpa/terjepit.
- Respon Awal: Hentikan seluruh pergerakan, jangan mencoba menahan beban, amankan area, aktifkan ERT dan evakuasi medis; jangan memindahkan korban tertimpa tanpa tenaga terlatih.
- Peralatan Darurat yang Diperlukan: Kotak P3K, spine board, alat komunikasi, alat angkat cadangan untuk penyelamatan, akses MEDEVAC.

Keterangan
Isu perizinan dan riksa uji alat bantu angkat (lifting gear) oleh PJK3 resmi merupakan prasyarat legal; alat tanpa riksa uji yang sah tidak boleh digunakan meskipun kondisi fisiknya terlihat baik.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

## JSEA-GEN-06

Proses / Pekerjaan: Perjalanan Dinas dan Mobilisasi Teknisi Field Service ke Site / Job Site

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Merencanakan perjalanan: rute, jarak, durasi, cuaca, kondisi jalan, dan titik istirahat | • (S) Rute berisiko (jalan hauling, jalan sempit, penyeberangan sungai)<br>• (S) Jadwal terlalu padat memaksa perjalanan malam<br>• (H) Fatigue akibat durasi mengemudi panjang<br>• (E) Emisi gas buang perjalanan | • (S) Kecelakaan lalu lintas — fatality<br>• (H) Microsleep, penurunan kewaspadaan<br>• (E) Jejak karbon perjalanan | **Eliminasi:** Pertimbangkan penyelesaian jarak jauh via remote support/telematics untuk mengurangi perjalanan.<br>**Administrative:** Journey Management Plan (rute, ETD/ETA, check-in point, contact person); batas maksimum jam mengemudi & wajib istirahat; larangan perjalanan malam di rute berisiko tinggi kecuali dengan persetujuan; weather monitoring sebelum berangkat.<br>**Engineering:** GPS tracking / telematics kendaraan.<br>**PPE:** — | UU No. 22/2009 tentang LLAJ; Kepmen ESDM 1827 K/30/MEM/2018 (pengelolaan lalu lintas); Permenaker No. 5/2018 (fatigue); ISO 39001; ISO 14064 |
| 2 | Memeriksa kelayakan kendaraan (P2H kendaraan) sebelum berangkat | • (S) Rem, ban, lampu, sabuk pengaman tidak laik<br>• (S) Kaca/spion kotor, blind spot<br>• (E) Kebocoran oli kendaraan | • (S) Kegagalan sistem saat perjalanan — kecelakaan<br>• (E) Ceceran oli di jalan | **Critical Control:** P2H kendaraan terdokumentasi dan ditandatangani; kendaraan dengan temuan kritis tidak boleh dioperasikan.<br>**Engineering:** Kelengkapan wajib: APAR, kotak P3K, rotary lamp/buggy whip untuk area tambang, safety cone, ganjal roda, dongkrak & ban serep, kamera mundur.<br>**Administrative:** Registrasi kendaraan & izin masuk site (mine permit) berlaku.<br>**PPE:** — | UU No. 22/2009; Kepmen ESDM 1827 K/30/MEM/2018; Permenakertrans No. 4/1980 (APAR); Permenaker No. 15/2008 (P3K) |
| 3 | Memeriksa kompetensi & kondisi pengemudi | • (S) SIM/SIMPER tidak sesuai kelas kendaraan atau kadaluarsa<br>• (H) Kondisi kesehatan, pengaruh obat, kurang tidur<br>• (E) Tidak Signifikan | • (S) Pengemudi tidak kompeten — kecelakaan<br>• (H) Microsleep, serangan penyakit saat mengemudi<br>• (E) Tidak Signifikan | **Critical Control:** SIM & SIMPER berlaku dan sesuai kelas; fit-to-work check (fatigue & alkohol) sebelum berangkat.<br>**Administrative:** Larangan mengemudi setelah shift panjang; defensive driving training berkala; MCU berkala untuk pengemudi.<br>**PPE:** — | UU No. 22/2009; Kepmen ESDM 1827 K/30/MEM/2018 (SIMPER); Permenaker No. 5/2018; ISO 39001 |
| 4 | Memuat tools, spare part, dan bahan kimia ke kendaraan | • (S) Muatan tidak diikat, bergeser saat pengereman<br>• (S) Beban melebihi kapasitas kendaraan<br>• (H) Angkat-angkut manual<br>• (E) Kebocoran kemasan oli/bahan kimia dalam kabin/bak | • (S) Muatan terlempar ke kabin, kendaraan tidak stabil<br>• (H) Cedera punggung<br>• (E) Tumpahan bahan kimia di kendaraan/jalan | **Engineering:** Cargo barrier/partisi antara kabin dan muatan; lashing point & tie-down strap; wadah sekunder untuk cairan.<br>**Administrative:** Load securing check; tidak melebihi GVW; MSDS/SDS bahan kimia dibawa; segregasi bahan tidak kompatibel.<br>**Environmental:** Spill kit di kendaraan.<br>**PPE:** Sarung tangan. | UU No. 22/2009 (muatan); PP No. 22/2021; Permenaker No. 5/2018; Permen Perhubungan terkait pengangkutan barang berbahaya |
| 5 | Melakukan perjalanan menuju site, termasuk memasuki area tambang / job site | • (S) Interaksi dengan alat berat & hauling truck (SIMOPS)<br>• (S) Blind spot alat berat, jalan sempit, tanjakan<br>• (S) Debu & jarak pandang rendah<br>• (H) Getaran seluruh tubuh, postur duduk lama<br>• (E) Debu jalan & emisi | • (S) Tertabrak/terlindas alat berat — fatality<br>• (S) Kendaraan keluar jalur / terguling<br>• (H) Whole body vibration, nyeri punggung<br>• (E) Polusi debu | **Critical Control:** Wajib lapor & mendapat izin masuk area; positive communication dengan operator alat berat sebelum mendekat; menjaga jarak aman dan tidak berada di blind spot; kecepatan sesuai batas site.<br>**Engineering:** Rotary lamp & buggy whip menyala; radio komunikasi pada kanal site.<br>**Administrative:** Traffic Management Plan; aturan mendahului; berhenti dan menepi bila jarak pandang buruk; sabuk pengaman wajib; istirahat tiap durasi tertentu.<br>**PPE:** Rompi reflektif saat turun dari kendaraan. | Kepmen ESDM 1827 K/30/MEM/2018; UU No. 22/2009; ICMM Vehicle Interaction; Safe Work Australia — Traffic Management |
| 6 | Tiba di lokasi, melapor, mengikuti induksi, dan memarkir kendaraan | • (S) Parkir di jalur hauling atau blind spot<br>• (S) Area kerja belum diketahui bahayanya<br>• (E) Ceceran oli di area parkir | • (S) Kendaraan tertabrak alat berat<br>• (S) Terpapar bahaya area yang belum dikenali<br>• (E) Pencemaran tanah | **Critical Control:** Parkir mundur (reverse park) di area parkir resmi, ganjal roda terpasang, kunci dicabut.<br>**Administrative:** Site induction & site-specific hazard briefing sebelum bekerja; lapor ke pengawas area; TBM bersama pemilik area.<br>**Environmental:** Drip tray bila kendaraan menetes.<br>**PPE:** APD sesuai persyaratan site. | Kepmen ESDM 1827 K/30/MEM/2018; PP No. 50/2012; OEM Manual (Whenever possible reverse park) |
| 7 | Perjalanan pulang dan penutupan journey | • (H) Fatigue akumulatif setelah bekerja penuh<br>• (S) Perjalanan malam / cuaca buruk<br>• (E) Tidak Signifikan | • (S) Kecelakaan tunggal akibat microsleep — fatality<br>• (H) Kelelahan kronis<br>• (E) Tidak Signifikan | **Critical Control:** Journey close-out / check-in wajib; larangan mengemudi bila total jam kerja + mengemudi melampaui batas — gunakan akomodasi/penginapan.<br>**Administrative:** Rotasi pengemudi; nomor darurat aktif; pelaporan kejadian nyaris celaka di perjalanan.<br>**PPE:** — | UU No. 22/2009; Permenaker No. 5/2018; ISO 39001 |

Additional Safety Tips
- Fatigue pada perjalanan pulang lebih berbahaya daripada perjalanan berangkat karena teknisi sudah bekerja penuh sebelumnya.
- Berhenti sepenuhnya dan menjalin kontak mata atau komunikasi radio dengan operator alat berat sebelum melintas di depannya.
- Simpan tools di bak atau kompartemen tertutup, bukan di lantai atau jok kabin.

Point of Concern
- Perjalanan dinas dan commute adalah salah satu penyumbang cedera fatal terbesar pada pekerjaan field service, sering kali lebih besar daripada pekerjaan teknis itu sendiri.
- Kendaraan ringan di jalan hauling berada dalam blind spot alat berat besar hampir sepanjang waktu.
- Izin masuk site dan induksi yang kadaluarsa membuat teknisi kehilangan perlindungan prosedural saat terjadi insiden.

Common Mistakes
- Menganggap perjalanan sebagai "waktu di luar pekerjaan" sehingga tidak dilakukan penilaian risiko — hindari dengan menjadikan Journey Management bagian dari WO.
- Mengejar target selesai dalam satu hari sehingga pulang larut malam — hindari dengan kebijakan wajib menginap bila melewati batas jam.
- Meletakkan tool box di kabin tanpa pengikat — hindari dengan cargo barrier dan tie-down.

Golden Rules
- Sabuk pengaman selalu terpakai, tanpa pengecualian.
- Tidak mengemudi dalam kondisi lelah atau di bawah pengaruh obat/alkohol.
- Tidak masuk area operasi tanpa izin, induksi, dan komunikasi dengan pengawas area.

Critical Controls
- Journey Management Plan disetujui dan check-in point dipenuhi.
- P2H kendaraan terdokumentasi dan bebas temuan kritis.
- SIM/SIMPER dan fit-to-work terverifikasi.
- Rotary lamp, buggy whip, dan radio komunikasi berfungsi di area tambang.
- Journey close-out dilaporkan.

Required PPE
- Mandatory PPE: Safety helmet, safety glasses, safety shoes, coverall, rompi reflektif (saat di luar kendaraan di area operasi).
- Additional PPE: Masker debu di area berdebu, jas hujan.

Emergency Response
- Potensi Keadaan Darurat: Kecelakaan lalu lintas, kendaraan mogok di jalan hauling, tumpahan bahan kimia dari muatan, cuaca ekstrem.
- Respon Awal: Amankan diri dan lokasi (segitiga pengaman/cone, rotary lamp), hubungi nomor darurat site dan perusahaan, jangan meninggalkan kendaraan di jalur hauling tanpa memberi tanda dan melapor.
- Peralatan Darurat yang Diperlukan: Kotak P3K, APAR, spill kit, segitiga pengaman/cone, ban serep & dongkrak, alat komunikasi, senter.

Keterangan
Modul ini berlaku untuk seluruh mobilisasi teknisi field service, termasuk perjalanan antar cabang, ke job site pelanggan, dan perjalanan lanjutan di dalam area tambang.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

## JSEA-GEN-07

Proses / Pekerjaan: Parkir Aman Unit, Naik-Turun Unit, dan Serah Terima Unit Setelah Pekerjaan

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Memilih lokasi parkir: permukaan keras, rata, bebas benda menggantung, jauh dari tepi lereng dan jalur lalu lintas | • (S) Permukaan miring/lunak<br>• (S) Tepi lereng, highwall, genangan air<br>• (S) Benda menggantung / kabel listrik di atas<br>• (E) Tanah tidak berperkerasan, potensi ceceran oli meresap | • (S) Unit meluncur/terguling, tertimbun longsoran<br>• (S) Kontak dengan jaringan listrik<br>• (E) Pencemaran tanah | **Eliminasi:** Gunakan area parkir resmi berperkerasan bila tersedia.<br>**Engineering:** Bund/tanggul pembatas dari tepi lereng; jarak aman minimum dari jaringan listrik udara.<br>**Administrative:** Safe Parking Procedure; larangan parkir di jalur hauling, tikungan, dan puncak tanjakan; parkir mundur agar akses keluar mudah.<br>**Environmental:** Drip tray pada unit yang menetes.<br>**PPE:** — | Kepmen ESDM 1827 K/30/MEM/2018; Permenaker No. 12/2015 (jarak aman listrik); PP No. 22/2021; OEM Manual (On Site Safety) |
| 2 | Memarkir unit: posisi lurus (straight ahead) untuk unit artikulasi, transmisi netral, park brake aktif | • (S) Unit bergerak saat ditinggalkan<br>• (S) Artikulasi tidak lurus menyebabkan unit tidak stabil<br>• (E) Tidak Signifikan | • (S) Unit meluncur menabrak orang/objek — fatality<br>• (E) Tidak Signifikan | **Critical Control:** Park brake aktif dan diverifikasi; transmisi netral; unit artikulasi diparkir lurus.<br>**Engineering:** Chock block terpasang pada roda.<br>**Administrative:** Verifikasi park brake berfungsi sebagai bagian P2H; larangan mengandalkan transmisi saja untuk menahan unit.<br>**PPE:** — | OEM Manual (Leaving Machine / Service Position); Permenaker No. 38/2016 |
| 3 | Menurunkan attachment / bin ke tanah atau chassis (drop implement) | • (S) Attachment tergantung dengan energi hidrolik tersisa<br>• (S) Bin dalam posisi terangkat<br>• (E) Ceceran oli dari silinder | • (S) Attachment/bin turun sendiri menimpa orang — fatality<br>• (E) Pencemaran tanah | **Critical Control:** Seluruh attachment diturunkan menyentuh tanah; bin diturunkan penuh ke chassis; unit tidak boleh dijalankan atau ditinggalkan dengan bin dalam posisi terangkat.<br>**Engineering:** Bin prop / bin lock hanya bila bin harus tetap terangkat, dan digembok.<br>**Administrative:** Verifikasi visual sebelum meninggalkan unit.<br>**PPE:** — | OEM Manual (Do not drive machine with the bin in the UP/TIP position); ISO 12100:2010 |
| 4 | Mematikan engine sesuai prosedur cooling down, mencabut kunci, dan mengunci kabin | • (S) Engine dimatikan mendadak dari putaran tinggi<br>• (S) Unit dioperasikan orang tidak berwenang<br>• (H) Permukaan panas<br>• (E) Emisi gas buang dari idling berlebihan | • (S) Kerusakan turbocharger, unit dioperasikan tanpa izin<br>• (H) Luka bakar<br>• (E) Pemborosan BBM & emisi | **Engineering:** Battery isolator switch OFF bila unit ditinggalkan lama.<br>**Administrative:** Prosedur idle turun bertahap sebelum shut down; larangan excessive engine idling; kunci disimpan di key box terkontrol; crime prevention (kunci kabin, lepas kunci).<br>**Environmental:** Kebijakan anti-idling untuk efisiensi bahan bakar.<br>**PPE:** Sarung tangan tahan panas. | OEM Manual (Shutting Down Engine / Excessive Engine Idling / Crime Prevention Tips); ISO 14001:2015 kl. 8.1 |
| 5 | Naik dan turun dari unit menggunakan tangga & handrail (three point contact) | • (S) Permukaan pijakan licin oleh oli/lumpur<br>• (S) Ketinggian akses unit besar<br>• (H) Beban lutut & pergelangan saat melompat<br>• (E) Tidak Signifikan | • (S) Terpeleset dan jatuh dari ketinggian — cedera serius<br>• (H) Cedera sendi kronis<br>• (E) Tidak Signifikan | **Critical Control:** Three point contact selalu diterapkan; menghadap ke unit saat naik dan turun; dilarang melompat turun dari unit.<br>**Engineering:** Anti-slip pada anak tangga; handrail utuh; penerangan area akses; akses hanya melalui sistem akses yang disediakan.<br>**Administrative:** Bersihkan lumpur/oli dari sepatu dan pijakan; tidak membawa barang di tangan saat naik/turun — gunakan tali angkat atau tas gendong.<br>**PPE:** Safety shoes anti-slip, sarung tangan. | Permenaker No. 9/2016; ISO 2867 (access systems); OEM Manual (Mounting and Dismounting Machine) |
| 6 | Membersihkan area kerja, mengembalikan tools, dan mengelola limbah | • (S) Tools & part tertinggal di sekitar/di dalam unit<br>• (E) Majun, filter bekas, oli bekas | • (S) Foreign object damage, tersandung<br>• (E) Pencemaran & pelanggaran pengelolaan limbah B3 | **Administrative:** Tool count in–out; FOD check; housekeeping 5R.<br>**Environmental:** Segregasi limbah B3 (oli bekas, filter, majun, kemasan) ke TPS Limbah B3 berizin dengan logbook & manifest.<br>**PPE:** Sarung tangan nitril. | PP No. 22/2021; Permen LHK No. 6/2021; ISO 14001:2015 |
| 7 | Melepas LOTO, uji fungsi, dan serah terima unit ke pengguna | • (S) LOTO dilepas saat orang masih bekerja<br>• (S) Unit dinyalakan dengan pekerjaan belum tuntas<br>• (H) Tidak Signifikan<br>• (E) Tidak Signifikan | • (S) Cedera pada pekerja lain saat unit dinyalakan — fatality<br>• (S) Kegagalan unit di lapangan setelah diserahkan<br>• (E) Tidak Signifikan | **Critical Control:** Pelepasan gembok hanya oleh pemasangnya, setelah verifikasi seluruh personel keluar dari zona bahaya dan seluruh guard/cover terpasang kembali.<br>**Administrative:** Uji fungsi (rem, steering, attachment, lampu, alarm mundur) sebelum serah terima; service report ditandatangani; catat pekerjaan pada service history; briefing temuan ke operator/pengguna.<br>**PPE:** APD dasar. | OSHA 29 CFR 1910.147; PP No. 50/2012; OEM Manual (Service History / Operational Check-Out Procedure) |

Additional Safety Tips
- Parkir mundur memudahkan pemeriksaan sebelum berangkat dan mengurangi manuver mundur di area ramai.
- Ganjal roda dipasang berpasangan pada sisi turunan roda, bukan sekadar diletakkan menempel.
- Bersihkan lumpur dari sepatu sebelum menaiki tangga unit; ini penyebab tersering terpeleset saat naik-turun.

Point of Concern
- Terpeleset saat naik-turun unit adalah salah satu penyebab cedera paling sering pada teknisi dan operator alat berat.
- Meninggalkan unit dengan attachment terangkat, meskipun sebentar, adalah pelanggaran aturan dasar dan pernah menjadi penyebab fatality di banyak site.
- Unit dapat bergerak sendiri karena kegagalan park brake atau propshaft; ganjal roda adalah kontrol independen yang tidak boleh diabaikan.

Common Mistakes
- Melompat dari anak tangga terakhir — hindari dengan aturan turun penuh menghadap unit sampai kaki menapak tanah.
- Membawa tool box atau part di tangan saat menaiki tangga — hindari dengan tali angkat atau menyerahkan ke rekan.
- Melepas gembok rekan yang sudah pulang — hindari dengan prosedur pelepasan gembok tertinggal yang melibatkan supervisor dan verifikasi fisik area.

Golden Rules
- Attachment turun ke tanah setiap kali unit ditinggalkan.
- Three point contact setiap kali naik dan turun unit.
- Gembok dilepas hanya oleh pemasangnya setelah area dinyatakan bebas.

Critical Controls
- Park brake aktif, transmisi netral, chock block terpasang.
- Attachment/bin turun penuh.
- Battery isolator OFF dan kunci dicabut untuk unit yang ditinggalkan.
- Tool count in–out dan FOD check sebelum serah terima.
- Uji fungsi sebelum unit dikembalikan ke operasi.

Required PPE
- Mandatory PPE: Safety helmet, safety glasses, safety shoes anti-slip, coverall, sarung tangan kerja.
- Additional PPE: Sarung tangan tahan panas, rompi reflektif di area lalu lintas unit.

Emergency Response
- Potensi Keadaan Darurat: Unit meluncur, pekerja jatuh dari unit, unit dinyalakan saat masih dikerjakan.
- Respon Awal: Aktifkan emergency stop, jauhkan orang dari lintasan unit, jangan mencoba menghentikan unit yang meluncur secara fisik, hubungi ERT.
- Peralatan Darurat yang Diperlukan: Kotak P3K, APAR, chock block cadangan, alat komunikasi.

Keterangan
Serah terima unit yang tidak lengkap (tanpa uji fungsi dan tanpa penjelasan temuan) memindahkan risiko sisa ke operator; hasil pekerjaan wajib dikomunikasikan.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

# BAGIAN B — EXCAVATOR HIDROLIS (EXC)

## JSEA-EXC-01

Proses / Pekerjaan: Pelepasan dan Pemasangan Front Attachment (Boom, Arm, Bucket)

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Memarkir unit di permukaan keras dan rata, silinder bucket & arm ditarik penuh, ujung arm diturunkan ke tanah | • (S) Permukaan lunak/miring, unit tidak stabil<br>• (S) Attachment bergerak turun tak terkendali<br>• (S) Titik jepit antara attachment dan tanah<br>• (E) Ceceran oli hidrolik dari seal bocor | • (S) Unit terguling, attachment jatuh menimpa pekerja — fatality<br>• (S) Tangan/kaki terjepit<br>• (E) Pencemaran tanah | **Eliminasi:** Kerjakan di workshop berlantai beton bila memungkinkan.<br>**Engineering:** Ground bearing capacity dicek; matras/plat baja pada tanah lunak.<br>**Administrative:** JSEA-GEN-01 diselesaikan lebih dulu; exclusion zone radius attachment; hanya operator kompeten yang mengoperasikan lever; komunikasi aba-aba baku antara operator dan teknisi.<br>**Environmental:** Drip tray.<br>**PPE:** APD dasar + rompi reflektif. | OEM Manual (Removal and Installation of Front Attachment); Permenaker No. 38/2016; Kepmen ESDM 1827 K/30/MEM/2018; ISO 12100:2010 |
| 2 | Membuang udara dari tangki oli hidrolik dan melepas tekanan sisa sirkuit hidrolik | • (S) Energi hidrolik tersimpan<br>• (S) Semburan oli/udara bertekanan<br>• (H) Kabut oli<br>• (E) Ceceran oli | • (S) Fluid injection injury, komponen terlempar<br>• (H) Iritasi mata & saluran napas<br>• (E) Pencemaran | **Critical Control:** Bleeding tangki hidrolik dan pelepasan tekanan sirkuit wajib dilakukan sebelum pekerjaan apa pun pada front attachment — ini instruksi eksplisit OEM, bukan opsi.<br>**Administrative:** Ikuti JSEA-GEN-02; verifikasi lever tidak lagi menghasilkan gerakan.<br>**PPE:** Face shield, sarung tangan nitril. | OEM Manual (Bleed air from the hydraulic oil tank / Release any pressure in the hydraulic circuit); Permenaker No. 37/2016 |
| 3 | Melepas hose pelumasan (lubrication hose) dari adapter pada boss sisi rod boom cylinder, 2 titik di kiri dan kanan | • (S) Bekerja pada ketinggian di sisi boom<br>• (S) Tool slip pada fitting<br>• (H) Kontak grease dengan kulit<br>• (E) Ceceran grease & oli | • (S) Jatuh dari ketinggian, tangan terluka<br>• (H) Dermatitis kontak<br>• (E) Pencemaran tanah | **Engineering:** Platform kerja/tangga berpagar; kunci pas ukuran tepat (bukan kunci inggris).<br>**Administrative:** Beri identification tag pada hose sebelum dilepas; cap ujung terbuka.<br>**Environmental:** Majun & drip tray; limbah ke TPS B3.<br>**PPE:** Sarung tangan nitril, safety glasses, body harness bila >1,8 m tanpa pagar. | Permenaker No. 9/2016; OEM Manual; PP No. 22/2021 |
| 4 | Menopang dan menahan boom cylinder dengan alat angkat, lalu melepas nut dan bolt dari pin rod end serta melepas stopper | • (S) Boom cylinder berbobot ±170 kg tergantung<br>• (S) Rigging gagal / titik angkat salah<br>• (S) Line of fire di bawah silinder<br>• (E) Tidak Signifikan | • (S) Silinder jatuh menimpa pekerja — fatality/serious injury<br>• (S) Terjepit antara silinder dan struktur boom<br>• (E) Tidak Signifikan | **Critical Control:** Silinder wajib ditahan penuh oleh alat angkat bersertifikat sebelum pin dilepas; dilarang berada di bawah atau di garis jatuh silinder.<br>**Engineering:** Nylon sling sesuai SWL; tag line untuk mengendalikan ayunan.<br>**Administrative:** Rigger bersertifikat; ikuti JSEA-GEN-05; trial lift sebelum pin dilepas.<br>**PPE:** Helm bertali dagu, sarung tangan anti-impact. | OEM Manual (Boom cylinder weight: ±170 kg / Hoist and hold boom cylinder); Permenaker No. 8/2020; ASME B30.9 |
| 5 | Memukul pin dengan bar dan palu sampai thrust plate dapat dilepas, kemudian melepas pin dan thrust plate | • (S) **Serpihan logam beterbangan saat palu digunakan**<br>• (S) Pin terlempar/meluncur keluar mendadak<br>• (S) Palu terpental, tangan penahan bar terpukul<br>• (H) Getaran & kebisingan impak<br>• (E) Tidak Signifikan | • (S) **Mata tertusuk serpihan logam — kebutaan**<br>• (S) Luka tusuk/robek pada tubuh oleh serpihan logam<br>• (S) Tangan remuk terpukul palu, kaki tertimpa pin<br>• (H) HAVS, NIHL<br>• (E) Tidak Signifikan | **Critical Control:** Face shield DAN safety goggles wajib dipakai bersamaan — OEM secara eksplisit memperingatkan serpihan logam dapat terlempar saat palu digunakan. Barikade/exclusion zone di sekeliling arah pin keluar; tidak ada orang di garis lintasan pin.<br>**Substitusi:** Gunakan hydraulic pin pusher / porta power sebagai pengganti palu bila tersedia — menghilangkan sumber serpihan.<br>**Engineering:** Palu dan drift pin kondisi baik, kepala tidak mushroomed, terbuat dari material yang sesuai; gunakan penjepit/holder bergagang panjang untuk menahan bar sehingga tangan keluar dari zona pukul (Two-Man Rule dengan pemegang bar memakai tool holder).<br>**Administrative:** Bila pin tidak dapat dilepas, jangan dipaksa — start engine dan operasikan boom control lever untuk menyetel lubang pin sambil menaik-turunkan front attachment, sesuai instruksi OEM; inspeksi tools sebelum pakai; larangan memukul dengan palu yang kepalanya sudah jamur.<br>**PPE:** Face shield + goggles, sarung tangan anti-impact, lengan panjang. | OEM Manual (**CAUTION: Metal fragments may fly off when a hammer is used. Wear necessary protection, such as goggles, helmets, etc**); ANSI/ISEA Z87.1; Permenaker No. 8/2010; Permenaker No. 5/2018 |
| 6 | Meletakkan ujung tube boom cylinder pada stand setinggi ±1 m, menyalakan engine, menarik silinder, dan mengikat rod ke tube dengan kawat agar tidak memanjang | • (S) Silinder terguling dari stand<br>• (S) Rod memanjang mendadak saat unit dinyalakan<br>• (S) Engine hidup saat teknisi berada dekat attachment<br>• (E) Emisi gas buang | • (S) Tertimpa/terjepit silinder<br>• (S) Terkena rod yang memanjang<br>• (H) Paparan gas buang<br>• (E) Emisi udara | **Critical Control:** Selama engine hidup, unit tidak boleh ditinggalkan tanpa pengawasan dan seluruh personel keluar dari zona gerak attachment; komunikasi positif operator–teknisi.<br>**Engineering:** Stand berkapasitas cukup dengan cradle; kawat pengikat rod dengan kekuatan memadai melalui lubang rod.<br>**Administrative:** Hanya satu orang yang memberi aba-aba; matikan engine segera setelah tahapan selesai; ventilasi bila di dalam ruangan.<br>**PPE:** APD dasar. | OEM Manual (Place the tube top of boom cylinder on a stand of 1 m height / pass wire through the rod hole); ISO 12100:2010; Permenaker No. 5/2018 |
| 7 | Melepas boom cylinder kiri dan kanan, lalu melepas hose bucket & arm cylinder dan menutup ujung pipa/hose yang terbuka | • (S) Sisa oli bertekanan dalam hose<br>• (H) Kontak oli dengan kulit<br>• (E) Tumpahan oli hidrolik | • (S) Semburan oli ke wajah<br>• (H) Dermatitis<br>• (E) Pencemaran tanah, kontaminasi sistem | **Critical Control — Contamination Control:** Semua ujung pipa & hose yang dilepas wajib di-cap segera; identification tag dipasang.<br>**Engineering:** Kunci pas ukuran sesuai (36 mm & 41 mm pada tipikal excavator kelas 20 ton); kendurkan fitting perlahan dengan wajah menjauh.<br>**Environmental:** Wadah penampung, spill kit, majun ke TPS B3.<br>**PPE:** Face shield, sarung tangan nitril. | OEM Manual (Cap the open ends of the removed pipes and hoses); ISO 4406; PP No. 22/2021 |
| 8 | Melepas boom foot pin (±45 kg) dan menurunkan front attachment assembly dengan alat angkat | • (S) Front attachment assembly berbobot beberapa ton<br>• (S) Boom foot pin berat jatuh saat dilepas<br>• (S) Attachment berayun/terguling saat lepas dari main frame<br>• (E) Tidak Signifikan | • (S) Tertimpa attachment — fatality<br>• (S) Kaki tertimpa pin<br>• (E) Tidak Signifikan | **Critical Control:** Attachment ditahan penuh oleh alat angkat berkapasitas sesuai sebelum boom foot pin dicabut; exclusion zone ditegakkan; berat assembly dikonfirmasi dari OEM Manual.<br>**Engineering:** Stand/cradle penerima attachment sudah disiapkan dan diposisikan sebelum pin dilepas; tali kendali (tag line).<br>**Administrative:** Lifting plan tertulis; rigger & signalman bersertifikat; ikuti JSEA-GEN-05.<br>**PPE:** Helm bertali dagu, safety shoes toe cap, sarung tangan. | OEM Manual (Boom foot pin weight ±45 kg / Front attachment assembly weight); Permenaker No. 8/2020 |
| 9 | Pemasangan kembali: memasang attachment, pin, thrust plate, stopper, hose, dan melakukan greasing serta uji fungsi | • (S) Pin tidak terkunci sempurna<br>• (S) Hose tertukar / terpasang salah<br>• (S) Uji fungsi dengan orang masih di area<br>• (E) Ceceran grease | • (S) Attachment lepas saat operasi — fatality<br>• (S) Gerakan attachment berlawanan dari yang diharapkan saat uji fungsi<br>• (E) Pencemaran | **Critical Control:** Verifikasi pin, stopper, bolt, dan torsi oleh orang kedua; uji fungsi hanya setelah area dinyatakan bersih dari personel.<br>**Administrative:** Pasang sesuai matching mark & identification tag; greasing seluruh pin; bleeding udara sistem hidrolik; uji fungsi bertahap dari gerakan lambat; tool count in–out.<br>**Environmental:** Grease berlebih dibersihkan dan dibuang sebagai limbah B3.<br>**PPE:** APD dasar. | OEM Manual (Installation); ISO 9001:2015 kl. 8.5; PP No. 50/2012 |

Additional Safety Tips
- Bila pin macet, jangan menambah tenaga pukulan; gunakan gerakan boom cylinder untuk menyelaraskan lubang pin seperti diinstruksikan OEM Manual.
- Gunakan pin pusher hidrolik atau porta power bila tersedia; menghilangkan pukulan palu berarti menghilangkan sumber serpihan logam.
- Ikat rod silinder ke tube dengan kawat sebelum silinder dipindahkan agar rod tidak memanjang sendiri saat diangkat.

Point of Concern
- Pelepasan pin dengan palu adalah salah satu tahapan dengan riwayat cedera nyata pada teknisi alat berat: serpihan logam dari pin, bar, atau kepala palu dapat menembus kulit dan mata bahkan dari jarak beberapa meter.
- Silinder boom yang tampak "masih tertahan pin lain" tetap dapat jatuh; setiap silinder wajib ditahan alat angkat secara independen.
- Sisa tekanan pada sirkuit boom dapat menahan pin dalam kondisi terjepit sehingga pin melesat keluar saat tekanan akhirnya lepas.

Common Mistakes
- Memakai kacamata safety saja tanpa face shield saat memukul pin — hindari dengan menetapkan kombinasi goggles + face shield sebagai syarat mutlak.
- Memegang drift bar dengan tangan telanjang — hindari dengan tool holder bergagang panjang atau penjepit.
- Melepas pin sebelum silinder ditahan alat angkat — hindari dengan urutan wajib: tahan dulu, baru lepas pin.

Golden Rules
- Tidak ada pukulan palu tanpa pelindung mata dan wajah lengkap.
- Tidak ada pin dilepas sebelum komponen ditahan penuh oleh alat angkat.
- Tidak seorang pun berada di garis lintasan pin atau di bawah attachment.

Critical Controls
- Bleeding tangki hidrolik + pelepasan tekanan sirkuit terverifikasi.
- Alat angkat bersertifikat menahan silinder/attachment sebelum pin dilepas.
- Face shield + goggles terpakai pada seluruh aktivitas pemukulan.
- Exclusion zone dan barikade terpasang pada garis lintasan pin dan area bawah attachment.
- Stand/cradle penerima attachment sudah siap sebelum pin terakhir dicabut.

Required PPE
- Mandatory PPE: Safety helmet bertali dagu, safety glasses, safety shoes toe cap, coverall lengan panjang, sarung tangan kerja.
- Additional PPE: Face shield, goggles, sarung tangan anti-impact, ear plug, body harness bila bekerja di ketinggian.

Emergency Response
- Potensi Keadaan Darurat: Serpihan logam menusuk mata/tubuh, tertimpa silinder atau attachment, fluid injection injury.
- Respon Awal: Untuk luka tusuk serpihan logam, jangan mencabut benda asing dan jangan mengucek mata — tutup dengan pelindung kaku dan evakuasi medis segera; untuk tertimpa, jangan mengangkat beban tanpa alat dan tenaga terlatih.
- Peralatan Darurat yang Diperlukan: Kotak P3K dengan eye shield, eyewash station, spine board, alat angkat cadangan, alat komunikasi, akses MEDEVAC.

Keterangan
Tahapan pelepasan pin dengan palu (No. 5) adalah tahapan berisiko cedera serius tertinggi dalam modul ini dan wajib diberi perhatian khusus saat Toolbox Meeting; peringatan serpihan logam ini muncul berulang di OEM Manual pada pekerjaan front attachment, swing bearing, front idler, dan track.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

## JSEA-EXC-02

Proses / Pekerjaan: Pelepasan dan Pemasangan Silinder Hidrolik (Boom, Arm, Bucket Cylinder)

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Memposisikan attachment sesuai silinder yang akan dilepas dan menopangnya dengan stand | • (S) Attachment tidak ditopang, hanya ditahan silinder yang akan dilepas<br>• (S) Stand tidak stabil<br>• (E) Tidak Signifikan | • (S) Attachment jatuh saat silinder dilepas — fatality<br>• (E) Tidak Signifikan | **Critical Control:** Attachment wajib ditopang stand mekanis berkapasitas sesuai sebelum silinder dilepas; dilarang mengandalkan silinder lain sebagai penopang.<br>**Engineering:** Stand baja dengan cradle; alas plat pada tanah.<br>**Administrative:** Verifikasi kestabilan oleh orang kedua.<br>**PPE:** APD dasar. | OEM Manual (Removal and Installation of Boom/Arm/Bucket Cylinder); Permenaker No. 8/2020 |
| 2 | Melepas tekanan sirkuit hidrolik dan membuang udara tangki hidrolik | • (S) Tekanan sisa dalam silinder & hose<br>• (E) Ceceran oli | • (S) Fluid injection injury, hose melecut<br>• (E) Pencemaran | **Critical Control:** Ikuti JSEA-GEN-02 secara penuh; verifikasi tekanan nol.<br>**PPE:** Face shield, sarung tangan nitril. | OEM Manual; Permenaker No. 37/2016 |
| 3 | Melepas hose silinder dan menutup ujung terbuka dengan cap | • (S) Oli menyembur dari port silinder<br>• (H) Kontak oli<br>• (E) Tumpahan oli, kontaminasi sistem | • (S) Semburan ke wajah/mata<br>• (H) Dermatitis<br>• (E) Pencemaran & kegagalan komponen akibat kontaminasi | **Engineering:** Kendurkan fitting perlahan, arahkan menjauh dari wajah; wadah penampung di bawah.<br>**Administrative:** Cap + identification tag segera setelah dilepas.<br>**Environmental:** Spill kit; oli bekas ke TPS B3.<br>**PPE:** Face shield, sarung tangan nitril, apron. | OEM Manual; ISO 4406; PP No. 22/2021 |
| 4 | Menahan silinder (±170 kg untuk boom cylinder kelas 20 ton) dengan alat angkat, melepas bolt/nut penahan pin, dan memukul pin keluar | • (S) Beban tergantung<br>• (S) **Serpihan logam beterbangan saat pemukulan pin**<br>• (S) Pin melesat keluar<br>• (H) Getaran & kebisingan impak | • (S) Silinder jatuh menimpa pekerja<br>• (S) **Cedera tusuk pada mata dan tubuh oleh serpihan logam**<br>• (H) HAVS, NIHL | **Critical Control:** Silinder ditahan penuh alat angkat sebelum pin dilepas; face shield + goggles wajib; exclusion zone pada garis lintasan pin.<br>**Substitusi:** Hydraulic pin pusher menggantikan palu bila tersedia.<br>**Engineering:** Drift pin & palu laik (kepala tidak mushroomed); tool holder bergagang panjang.<br>**Administrative:** Two-Man Rule; larangan memaksa; gunakan gerakan silinder untuk menyelaraskan lubang pin bila macet.<br>**PPE:** Face shield + goggles, sarung tangan anti-impact, ear plug. | OEM Manual (Metal fragments may fly off when a hammer is used / Boom cylinder weight); Permenaker No. 8/2010; ANSI/ISEA Z87.1 |
| 5 | Mengeluarkan silinder, meletakkannya pada stand, dan mengikat rod agar tidak memanjang | • (S) Silinder menggelinding dari stand<br>• (S) Rod memanjang sendiri karena sisa oli<br>• (E) Oli menetes dari port | • (S) Tertimpa/terjepit silinder<br>• (E) Pencemaran lantai | **Engineering:** Cradle/pengganjal untuk komponen silindris; kawat pengikat rod melalui lubang rod.<br>**Administrative:** Peletakan pelan, sling dilepas hanya setelah stabil.<br>**Environmental:** Drip tray di bawah stand.<br>**PPE:** Safety shoes, sarung tangan. | OEM Manual (secure the rod to the cylinder tube); Permenaker No. 8/2020 |
| 6 | Overhaul silinder: membuka cylinder head, mengeluarkan piston & rod, mengganti seal | • (S) Cylinder head terlempar oleh sisa tekanan<br>• (S) Rod & piston berat, permukaan licin oleh oli<br>• (H) Solvent pembersih, uap kimia<br>• (E) Oli bekas, seal bekas, limbah solvent | • (S) Komponen terlempar mengenai wajah, tangan terjepit<br>• (H) Iritasi kulit & saluran napas, dermatitis<br>• (E) Limbah B3 | **Engineering:** Gunakan special tool pembuka cylinder head, bukan improvisasi; hydraulic press dengan guard untuk pemasangan; ventilasi lokal (LEV) di area pembersihan.<br>**Administrative:** Pastikan tekanan silinder nol sebelum head dibuka; ganti seluruh seal, O-ring, dan back-up ring dengan yang baru; SDS solvent tersedia.<br>**Environmental:** Solvent bekas & seal bekas ke TPS B3; larangan mencuci part di atas tanah terbuka.<br>**PPE:** Face shield, sarung tangan tahan kimia, apron, respirator bila ventilasi terbatas. | OEM Manual (Disassembly / Assembly of Boom, Arm, Bucket Cylinder); Permenaker No. 5/2018; PP No. 22/2021; Permen LHK No. 6/2021 |
| 7 | Pemasangan kembali silinder, pengisian & bleeding udara, serta uji fungsi | • (S) Udara terjebak menyebabkan gerakan tersentak<br>• (S) Uji fungsi dengan personel di zona gerak<br>• (E) Ceceran oli saat pengisian | • (S) Attachment bergerak tak terduga saat uji fungsi<br>• (E) Pencemaran | **Critical Control:** Area bebas personel sebelum uji fungsi; komunikasi positif operator–teknisi.<br>**Administrative:** Bleeding udara sesuai OEM; uji fungsi bertahap tanpa beban dahulu; cek kebocoran dengan kertas/kayu; torsi sesuai spesifikasi.<br>**Environmental:** Majun & wadah penampung.<br>**PPE:** APD dasar. | OEM Manual (Bleeding Air from Hydraulic System); ISO 12100:2010 |

Additional Safety Tips
- Silinder yang sudah dilepas tetap menyimpan oli; letakkan dengan port menghadap ke atas dan pasang cap agar tidak menetes dan tidak terkontaminasi.
- Rod silinder adalah permukaan presisi berlapis krom; goresan sekecil apa pun menyebabkan kebocoran seal — gunakan nylon sling, bukan rantai atau wire rope.
- Selalu ganti O-ring, back-up ring, oil seal, dan floating seal dengan yang baru setelah dibongkar.

Point of Concern
- Cylinder head dapat terlempar dengan energi besar bila masih ada tekanan sisa atau bila rod ditekan saat head dilonggarkan.
- Kontaminasi partikel saat perakitan adalah penyebab utama kegagalan dini seal silinder — kebersihan area kerja adalah kontrol mutu sekaligus kontrol keselamatan.
- Bobot silinder pada excavator kelas 20 ton (±170 kg untuk boom cylinder) jauh melampaui batas angkat manual.

Common Mistakes
- Menggunakan obeng atau pahat untuk mencungkil seal langsung di alur — hindari dengan seal pick khusus agar alur tidak tergores.
- Menyalakan unit untuk "membantu mendorong pin keluar" tanpa memberitahu teknisi di area — hindari dengan aturan komunikasi positif dan aba-aba tunggal.
- Merakit silinder di lantai workshop yang berdebu — hindari dengan area perakitan bersih terpisah.

Golden Rules
- Attachment ditopang stand mekanis sebelum silinder dilepas.
- Tekanan diverifikasi nol sebelum head silinder dibuka.
- Seluruh seal diganti baru, tidak ada seal yang dipakai ulang.

Critical Controls
- Stand mekanis menopang attachment.
- Alat angkat menahan silinder sebelum pin dilepas.
- Face shield + goggles pada seluruh aktivitas pemukulan pin.
- Verifikasi tekanan nol sebelum pembongkaran silinder.
- Area bebas personel saat uji fungsi.

Required PPE
- Mandatory PPE: Safety helmet, safety glasses, safety shoes toe cap, coverall, sarung tangan kerja.
- Additional PPE: Face shield, goggles, sarung tangan anti-impact & tahan kimia, apron, ear plug, respirator bila menggunakan solvent di ruang tertutup.

Emergency Response
- Potensi Keadaan Darurat: Komponen terlempar, silinder jatuh, fluid injection injury, paparan solvent.
- Respon Awal: Hentikan pekerjaan, amankan area, bilas mata/kulit yang terpapar minimal 15 menit di eyewash/safety shower, rujuk medis untuk setiap dugaan injection injury.
- Peralatan Darurat yang Diperlukan: Eyewash & safety shower, kotak P3K, spill kit, APAR, alat komunikasi.

Keterangan
Modul ini sering dikerjakan bersamaan dengan JSEA-EXC-01; bila dilakukan berurutan, lakukan TBM ulang saat berpindah tahapan karena profil bahaya berubah dari beban tergantung ke bahaya tekanan dan kimia.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

## JSEA-EXC-03

Proses / Pekerjaan: Pelepasan dan Pemasangan Counterweight, Cab, dan Main Frame

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Menyiapkan unit pada posisi servis, isolasi energi, dan memastikan stabilitas unit sebelum counterweight dilepas | • (S) Perubahan titik berat unit setelah counterweight dilepas<br>• (S) Unit menjadi tidak seimbang / terguling ke depan<br>• (E) Tidak Signifikan | • (S) Unit terguling menimpa pekerja — fatality<br>• (E) Tidak Signifikan | **Critical Control:** Front attachment diturunkan penuh ke tanah sebelum counterweight dilepas untuk menjaga keseimbangan; permukaan keras dan rata.<br>**Administrative:** JSEA-GEN-01 dituntaskan; urutan pembongkaran sesuai OEM tidak boleh diubah.<br>**Engineering:** Stand penopang bila diperlukan.<br>**PPE:** APD dasar. | OEM Manual (Removal and Installation of Counterweight); Permenaker No. 38/2016; ISO 12100:2010 |
| 2 | Memasang rigging pada titik angkat counterweight dan menahan bebannya dengan crane/hoist | • (S) Counterweight berbobot besar (ratusan kg hingga beberapa ton tergantung kelas unit)<br>• (S) Titik angkat salah, rigging tidak seimbang<br>• (S) Beban tergantung di atas area kerja<br>• (E) Tidak Signifikan | • (S) Counterweight jatuh menimpa pekerja — fatality<br>• (S) Terjepit antara counterweight dan main frame<br>• (E) Tidak Signifikan | **Critical Control:** Berat dikonfirmasi dari OEM Manual; hanya eyebolt/hoisting position resmi yang digunakan; crane bersertifikat dengan SWL memadai; exclusion zone di bawah beban.<br>**Engineering:** Eyebolt dengan ukuran & pitch ulir sesuai spesifikasi, terpasang duduk penuh; tag line pengendali ayunan.<br>**Administrative:** Lifting plan; rigger & signalman bersertifikat; trial lift; ikuti JSEA-GEN-05.<br>**PPE:** Helm bertali dagu, sarung tangan, safety shoes toe cap. | Permenaker No. 8/2020; ASME B30.5 & B30.9; OEM Manual (Counterweight weight) |
| 3 | Melepas mounting bolt counterweight dan menurunkan counterweight ke stand/pallet | • (S) Beban bergerak saat bolt terakhir dilepas<br>• (S) Bolt macet/karat memerlukan tenaga besar<br>• (H) Postur kerja membungkuk<br>• (E) Tidak Signifikan | • (S) Beban berayun/jatuh, tangan terjepit<br>• (H) Cedera punggung<br>• (E) Tidak Signifikan | **Critical Control:** Beban ditahan penuh alat angkat sebelum bolt terakhir dilepas; tangan tidak berada di antara counterweight dan frame.<br>**Engineering:** Torque multiplier/impact wrench untuk bolt bertorsi tinggi; pallet penerima disiapkan lebih dulu.<br>**Administrative:** Aba-aba tunggal; larangan memandu beban dengan tangan.<br>**PPE:** Sarung tangan anti-impact. | OEM Manual; Permenaker No. 8/2020 |
| 4 | Melepas kursi operator (±42 kg) dan komponen interior kabin | • (S) Beban sedang di ruang sempit<br>• (H) Angkat manual dengan postur janggal di dalam kabin<br>• (E) Tidak Signifikan | • (S) Terjepit di ruang sempit, terjatuh dari pintu kabin<br>• (H) Cedera punggung & bahu<br>• (E) Tidak Signifikan | **Engineering:** Alat bantu angkat kecil/hoist portabel; platform akses di depan pintu kabin.<br>**Administrative:** Two-Man Lift untuk beban >batas angkat manual; kabin dikosongkan lebih dulu.<br>**PPE:** Sarung tangan, safety shoes. | OEM Manual (Seat weight ±42 kg); Permenaker No. 5/2018 (ergonomi) |
| 5 | Melepas dan mengangkat cab assembly (±420 kg pada excavator kelas 20 ton) | • (S) Beban besar dengan titik berat tinggi & bentuk tidak simetris<br>• (S) Kaca kabin pecah saat rigging<br>• (S) Kabel & harness masih terhubung<br>• (E) Serpihan kaca | • (S) Cab jatuh/berayun menimpa pekerja — fatality<br>• (S) Luka sayat pecahan kaca<br>• (E) Limbah kaca | **Critical Control:** Pastikan seluruh harness, hose, dan konektor terlepas dan tertandai sebelum pengangkatan; kabin dalam keadaan kosong; berat dikonfirmasi OEM Manual.<br>**Engineering:** Empat titik angkat resmi; spreader bar bila perlu; softener pada sudut.<br>**Administrative:** Lifting plan; exclusion zone; larangan siapa pun berada di dalam atau di bawah kabin saat diangkat; struktur ROPS/FOPS tidak boleh dimodifikasi, dilas, dibor, atau dipotong.<br>**PPE:** Helm bertali dagu, sarung tangan anti-potong. | OEM Manual (Removal and Installation of Cab / cab assembly weight ±420 kg); ISO 3471 (ROPS); ISO 3449 (FOPS); Permenaker No. 8/2020 |
| 6 | Melepas dan mengangkat main frame atau bracket assembly | • (S) Beban sangat besar<br>• (S) Struktur bergeser saat baut dilepas<br>• (E) Tidak Signifikan | • (S) Struktur jatuh — fatality<br>• (E) Tidak Signifikan | **Critical Control:** Berat main frame dikonfirmasi dari OEM Manual; ditahan penuh sebelum baut terakhir dilepas; matching mark dibuat agar perakitan presisi.<br>**Administrative:** Lifting plan; barikade area; hanya personel terlibat yang boleh berada di area.<br>**PPE:** APD lengkap. | OEM Manual (Removal and Installation of Main Frame / Main frame weight); Permenaker No. 8/2020 |
| 7 | Pemasangan kembali: memasang cab/counterweight, torsi bolt sesuai spesifikasi, menyambung harness, dan uji fungsi | • (S) Torsi bolt tidak sesuai<br>• (S) Harness terjepit/tergesek<br>• (E) Tidak Signifikan | • (S) Counterweight/cab lepas saat operasi — fatality<br>• (S) Korsleting & kebakaran akibat harness tergesek<br>• (E) Tidak Signifikan | **Critical Control:** Torque wrench terkalibrasi; urutan & nilai torsi sesuai OEM; verifikasi oleh orang kedua; routing harness dicek bebas gesekan dan panas.<br>**Administrative:** Tool count in–out; uji fungsi seluruh sistem kabin (kontrol, lampu, AC, alarm) sebelum serah terima.<br>**PPE:** APD dasar. | OEM Manual (Tightening Bolts and Nuts); Permenaker No. 12/2015; ISO 9001:2015 |

Additional Safety Tips
- Counterweight adalah penyeimbang unit; melepasnya tanpa menurunkan front attachment ke tanah dapat membuat unit terjungkit ke depan.
- Baut pengikat kabin pada beberapa desain tidak boleh dipakai ulang setelah dikendurkan; siapkan baut baru sebelum pekerjaan dimulai.
- Modifikasi, pengelasan, atau pengeboran pada struktur ROPS/FOPS membatalkan sertifikasi perlindungan dan dilarang.

Point of Concern
- Bobot cab assembly dan counterweight jauh di atas kapasitas alat angkat ringan; penggunaan forklift tanpa attachment yang sesuai adalah praktik berisiko tinggi.
- Harness dan hose yang tertinggal terhubung saat kabin diangkat dapat putus mendadak dan membuat beban berayun.
- Perubahan distribusi berat unit selama pembongkaran bertahap membuat kestabilan berubah setiap tahap; kestabilan wajib dinilai ulang.

Common Mistakes
- Melepas counterweight lebih dulu untuk "memudahkan akses" tanpa memperhatikan urutan OEM — hindari dengan mengikuti urutan pembongkaran manual tanpa perubahan.
- Menggunakan eyebolt seadanya yang ulirnya tidak duduk penuh — hindari dengan memakai eyebolt spesifikasi OEM dan memeriksa kedudukan ulir.
- Mengelas ulang dudukan atau bracket pada struktur pelindung operator — hindari dengan mengganti komponen bersertifikat.

Golden Rules
- Front attachment turun ke tanah sebelum counterweight dilepas.
- Tidak seorang pun berada di bawah atau di dalam kabin yang sedang diangkat.
- Struktur ROPS/FOPS tidak pernah dimodifikasi.

Critical Controls
- Berat komponen dikonfirmasi dari OEM Manual sebelum pengangkatan.
- Crane/hoist bersertifikat dengan SWL memadai dan rigger bersertifikat.
- Seluruh harness/hose terlepas dan tertandai sebelum pengangkatan kabin.
- Exclusion zone terpasang dan ditegakkan.
- Torsi baut terverifikasi oleh orang kedua saat pemasangan.

Required PPE
- Mandatory PPE: Safety helmet bertali dagu, safety glasses, safety shoes toe cap, coverall, sarung tangan kerja.
- Additional PPE: Sarung tangan anti-potong (penanganan kaca), sarung tangan anti-impact, rompi reflektif.

Emergency Response
- Potensi Keadaan Darurat: Beban jatuh, unit terguling, luka sayat pecahan kaca, terjepit.
- Respon Awal: Hentikan seluruh gerakan angkat, jangan menahan beban dengan tubuh, amankan area, aktifkan ERT, evakuasi medis.
- Peralatan Darurat yang Diperlukan: Kotak P3K, spine board, alat angkat cadangan, alat komunikasi, akses MEDEVAC.

Keterangan
Bila pekerjaan mencakup pelepasan main frame atau upperstructure, unit menjadi tidak stabil secara struktural; area kerja harus dibarikade penuh selama pekerjaan berlangsung dan tidak boleh ditinggalkan dalam kondisi setengah terbongkar tanpa penopang.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

## JSEA-EXC-04

Proses / Pekerjaan: Pelepasan dan Pemasangan Engine, Radiator, Oil Cooler, Muffler, Tangki Hidrolik, dan Tangki Bahan Bakar

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Mendinginkan unit dan menguras coolant dari sistem pendingin | • (H) Coolant panas bertekanan menyembur<br>• (H) Etilen glikol bersifat toksik<br>• (E) Coolant bekas = limbah B3 | • (H) Luka bakar derajat 2–3, keracunan bila tertelan<br>• (E) Pencemaran tanah & air | **Critical Control:** Radiator cap dibuka hanya saat engine cukup dingin untuk disentuh tangan telanjang, dikendurkan bertahap ke stop pertama untuk melepas tekanan sebelum dibuka penuh.<br>**Engineering:** Wadah penampung berkapasitas cukup (misal ±26 L pada excavator kelas 20 ton); selang drain.<br>**Environmental:** Coolant bekas ke TPS Limbah B3 dengan logbook; larangan membuang ke drainase.<br>**PPE:** Face shield, sarung tangan tahan panas & kimia, apron. | OEM Manual (Inspect Cooling System / Coolant amount); PP No. 22/2021; Permen LHK No. 6/2021; Permenaker No. 5/2018 |
| 2 | Melepas engine cover (±31 kg) dan muffler assembly (±25 kg) | • (S) Cover jatuh saat baut terakhir dilepas<br>• (H) Permukaan muffler & turbo masih panas<br>• (H) Angkat manual beban sedang<br>• (E) Tidak Signifikan | • (S) Tertimpa cover, jari terjepit<br>• (H) Luka bakar termal, cedera punggung<br>• (E) Tidak Signifikan | **Engineering:** Hoist portabel atau Two-Man Lift; penopang sementara cover.<br>**Administrative:** Waktu pendinginan dipatuhi sebelum menyentuh area exhaust; berat komponen diinformasikan saat TBM.<br>**PPE:** Sarung tangan tahan panas, safety shoes toe cap. | OEM Manual (Engine cover weight ±31 kg / muffler assembly weight ±25 kg); Permenaker No. 5/2018 |
| 3 | Melepas baterai (±28 kg) dan memutus koneksi kelistrikan | • (S) Korsleting antar terminal<br>• (S) Gas hidrogen dari baterai — mudah meledak<br>• (H) Elektrolit asam sulfat<br>• (E) Baterai bekas = limbah B3 | • (S) Arc flash, ledakan baterai<br>• (H) Luka bakar kimia pada mata & kulit<br>• (E) Pencemaran logam berat & asam | **Critical Control:** Lepas terminal negatif lebih dahulu, pasang terakhir; battery isolator OFF & digembok; dilarang ada api terbuka, percikan, atau merokok di sekitar baterai.<br>**Engineering:** Kunci dengan gagang terisolasi; ventilasi memadai; battery carrier/strap untuk mengangkat.<br>**Administrative:** Larangan meletakkan tool logam di atas baterai; Two-Man Lift.<br>**Environmental:** Baterai bekas ke TPS Limbah B3 berizin.<br>**PPE:** Face shield, sarung tangan tahan asam, apron. | OEM Manual (Prevent Battery Explosions and Acid Burns / Battery weight ±28 kg); Permenaker No. 12/2015; PP No. 22/2021 |
| 4 | Menguras bahan bakar dan melepas tangka bahan bakar (±160 kg) | • (S) Uap bahan bakar mudah terbakar di ruang tertutup tangki<br>• (S) Beban berat<br>• (H) Uap solar terhirup, kontak kulit<br>• (E) Tumpahan bahan bakar | • (S) Kebakaran/ledakan uap bahan bakar<br>• (H) Iritasi saluran napas, dermatitis<br>• (E) Pencemaran tanah & air tanah | **Critical Control:** Hot work dilarang total di sekitar tangki bahan bakar; sumber api dijauhkan; gas test bila ada pekerjaan panas di sekitarnya; APAR siap di titik kerja.<br>**Engineering:** Pompa transfer dengan bonding & grounding untuk mencegah listrik statis; wadah penampung tertutup berlabel.<br>**Administrative:** Permit to Work; ventilasi; larangan masuk ke dalam tangki tanpa prosedur ruang terbatas.<br>**Environmental:** Spill kit, bund/secondary containment.<br>**PPE:** Sarung tangan tahan kimia, goggles, coverall anti-statik. | OEM Manual (Removal and Installation of Fuel Tank / Fuel tank weight ±160 kg / Measures to Prevent Fires); Permenakertrans No. 4/1980; NFPA 30; PP No. 22/2021 |
| 5 | Menguras oli hidrolik dan melepas tangki hidrolik (±97 kg) | • (S) Beban berat, permukaan licin oli<br>• (H) Kontak oli berulang<br>• (E) Oli hidrolik volume besar | • (S) Tertimpa tangki, terpeleset<br>• (H) Dermatitis<br>• (E) Pencemaran tanah | **Engineering:** Alat angkat untuk tangki; wadah drain berkapasitas cukup; absorbent di lantai.<br>**Administrative:** Bleeding tekanan tangki lebih dulu; cap semua port; housekeeping tumpahan segera.<br>**Environmental:** Oli bekas ke TPS B3 dengan manifest.<br>**PPE:** Sarung tangan nitril, sepatu anti-slip, apron. | OEM Manual (Hydraulic oil tank weight ±97 kg); PP No. 22/2021; ISO 4406 |
| 6 | Melepas radiator, oil cooler (±26 kg), dan intercooler | • (S) Fin radiator tajam<br>• (S) Beban sedang di posisi tinggi<br>• (H) Debu & serpihan dari fin<br>• (E) Sisa coolant | • (S) Luka sayat pada tangan dan lengan<br>• (H) Iritasi saluran napas<br>• (E) Ceceran coolant | **Engineering:** Hoist portabel; pelindung fin saat penanganan.<br>**Administrative:** Pembersihan fin dengan udara bertekanan rendah dan arah dari dalam ke luar; larangan menggunakan kawat keras.<br>**PPE:** Sarung tangan anti-potong, safety glasses, masker debu. | OEM Manual (Replacement of Radiator, Oil Cooler, and Intercooler / Oil cooler weight ±26 kg); Permenaker No. 5/2018 |
| 7 | Melepas dan mengangkat engine assembly (±490 kg pada excavator kelas 20 ton) | • (S) Beban sangat berat dengan titik berat tidak simetris<br>• (S) Mounting engine masih terpasang sebagian<br>• (S) Sisa oli & bahan bakar menetes<br>• (E) Ceceran oli/BBM | • (S) Engine jatuh menimpa pekerja — fatality<br>• (S) Terjepit antara engine dan frame<br>• (E) Pencemaran | **Critical Control:** Berat dikonfirmasi OEM Manual; engine lifting bracket resmi digunakan; seluruh mounting, hose, harness, dan linkage dipastikan lepas sebelum diangkat; exclusion zone.<br>**Engineering:** Crane/gantry dengan SWL memadai; spreader bar; tag line.<br>**Administrative:** Lifting plan tertulis; trial lift; rigger & signalman bersertifikat.<br>**Environmental:** Drip tray besar di bawah lintasan angkat.<br>**PPE:** Helm bertali dagu, sarung tangan, safety shoes toe cap. | OEM Manual (Removal and Installation of Engine / Engine weight ±490 kg); Permenaker No. 8/2020; ASME B30.5 |
| 8 | Pemasangan kembali, pengisian fluida, bleeding sistem bahan bakar, dan uji nyala pertama | • (S) Kebocoran bahan bakar pada permukaan panas<br>• (S) Engine hidup dengan cover belum terpasang, komponen berputar terbuka<br>• (H) Gas buang di ruang tertutup<br>• (E) Emisi & ceceran | • (S) Kebakaran unit<br>• (S) Terjerat fan/belt<br>• (H) Keracunan CO<br>• (E) Pencemaran udara & tanah | **Critical Control:** Guard fan, belt, dan propshaft terpasang sebelum engine dinyalakan; larangan mendekat ke area komponen berputar saat engine hidup; leak check menyeluruh sebelum dan sesudah start.<br>**Engineering:** Exhaust extraction bila di dalam ruangan; APAR di titik kerja.<br>**Administrative:** Bleeding sistem bahan bakar sesuai OEM; larangan pakaian longgar & perhiasan; bersihkan tumpahan bahan bakar sebelum start.<br>**Environmental:** Majun terkontaminasi ke TPS B3.<br>**PPE:** Ear plug, safety glasses. | OEM Manual (Bleeding Air from Fuel System / Measures to Prevent Fires); Permenaker No. 5/2018; Permenakertrans No. 4/1980; NFPA 10 |

Additional Safety Tips
- Penumpukan material mudah terbakar di sekitar exhaust, turbocharger, dan heat shield harus dibersihkan berkala; ini penyebab kebakaran unit yang paling sering.
- Bahan bakar yang tumpah ke manifold panas dapat menyala tanpa sumber api lain; bersihkan tuntas sebelum menyalakan engine.
- Gunakan bonding cable saat memindahkan bahan bakar antar wadah untuk mencegah percikan listrik statis.

Point of Concern
- Coolant panas bertekanan dapat menyembur meski tutup dibuka perlahan bila engine belum benar-benar dingin; "hangat" tidak cukup, syaratnya dapat disentuh tangan telanjang.
- Gas hidrogen terkumpul di sekitar baterai dan dapat meledak oleh percikan sekecil apa pun dari tool logam.
- Uji nyala pertama setelah engine dipasang adalah momen dengan risiko kebakaran dan cedera komponen berputar tertinggi.

Common Mistakes
- Melepas terminal positif baterai lebih dulu — hindari dengan urutan baku negatif dilepas pertama dan dipasang terakhir.
- Mengganjal cover engine dengan tangan saat baut terakhir dilepas — hindari dengan penopang sementara atau hoist.
- Menyalakan engine dengan guard belum terpasang untuk "cek cepat" — hindari dengan aturan tidak ada start sebelum semua guard terpasang.

Golden Rules
- Tidak ada api terbuka atau pekerjaan panas di sekitar bahan bakar dan baterai.
- Tidak ada engine dinyalakan sebelum semua guard komponen berputar terpasang.
- Tutup radiator hanya dibuka pada engine dingin.

Critical Controls
- Verifikasi engine dingin sebelum membuka sistem pendingin.
- Battery isolator OFF, digembok, terminal negatif dilepas pertama.
- APAR tersedia di titik kerja selama pekerjaan bahan bakar dan uji nyala.
- Lifting plan dan alat angkat bersertifikat untuk engine dan tangki.
- Leak check dan guard check sebelum start pertama.

Required PPE
- Mandatory PPE: Safety helmet, safety glasses, safety shoes toe cap, coverall, sarung tangan kerja.
- Additional PPE: Face shield, sarung tangan tahan panas/asam/kimia, apron, masker debu, ear plug, coverall anti-statik untuk pekerjaan bahan bakar.

Emergency Response
- Potensi Keadaan Darurat: Kebakaran unit, ledakan baterai, luka bakar coolant, engine jatuh, tumpahan bahan bakar.
- Respon Awal: Padamkan dengan APAR jenis sesuai (kelas B untuk bahan bakar) hanya bila api masih kecil dan aman; evakuasi bila api membesar; bilas mata/kulit terkena asam atau coolant minimal 15 menit; kontain tumpahan bahan bakar segera.
- Peralatan Darurat yang Diperlukan: APAR kelas B & ABC, spill kit hidrokarbon, eyewash & safety shower, kotak P3K, alat komunikasi.

Keterangan
Pekerjaan pada tangki bahan bakar yang memerlukan masuk ke dalam tangki adalah pekerjaan ruang terbatas (confined space) dan memerlukan izin, gas test, serta pengawas terpisah — di luar cakupan modul ini.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

## JSEA-EXC-05

Proses / Pekerjaan: Pelepasan, Pembongkaran, dan Pemasangan Komponen Hidrolik Utama (Pump Device, Control Valve, Pilot Valve, Solenoid Valve, Signal Control Valve)

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Melepas tekanan sirkuit hidrolik dan tangki hidrolik, lalu menguras oli dari komponen yang akan dilepas | • (S) Tekanan sisa pada pump & control valve<br>• (H) Kontak oli hidrolik<br>• (E) Oli hidrolik volume besar | • (S) Fluid injection injury, fitting terlempar<br>• (H) Dermatitis<br>• (E) Pencemaran tanah | **Critical Control:** Prosedur pelepasan tekanan OEM dijalankan penuh dan diverifikasi; ujung terbuka langsung di-cap.<br>**Engineering:** Wadah drain; drip tray di bawah komponen.<br>**Administrative:** Ikuti JSEA-GEN-02; identification tag pada tiap hose.<br>**Environmental:** Spill kit; oli bekas ke TPS B3.<br>**PPE:** Face shield, sarung tangan nitril, apron. | OEM Manual (Hydraulic Circuit Pressure Release Procedure / Removal and Installation of Pump Device); Permenaker No. 37/2016; PP No. 22/2021 |
| 2 | Melepas dan mengangkat pump device (±160–170 kg) beserta coupling | • (S) Beban berat di posisi sempit dekat engine<br>• (S) Titik jepit antara pump dan engine bay<br>• (H) Postur janggal saat menjangkau<br>• (E) Ceceran oli | • (S) Pump jatuh menimpa kaki, tangan terjepit<br>• (H) Cedera bahu & punggung<br>• (E) Pencemaran | **Critical Control:** Berat dikonfirmasi OEM Manual; ditahan penuh alat angkat sebelum baut terakhir dilepas.<br>**Engineering:** Eyebolt/shackle pada lubang baut sesuai instruksi OEM; hoist portabel dengan akses ke engine bay.<br>**Administrative:** Larangan menahan beban dengan tangan; rotasi kerja untuk postur janggal.<br>**PPE:** Sarung tangan anti-impact, safety shoes toe cap. | OEM Manual (Pump device weight ±160–170 kg / Install shackles to the outer bolt holes); Permenaker No. 8/2020 |
| 3 | Melepas dan mengangkat control valve (±240 kg) dan housing assembly (±120–130 kg) | • (S) Beban sangat berat di ruang terbatas<br>• (S) Beban berayun saat dikeluarkan dari frame<br>• (E) Ceceran oli | • (S) Tertimpa/terjepit — serious injury<br>• (E) Pencemaran | **Critical Control:** Berat dikonfirmasi OEM Manual; exclusion zone; alat angkat dengan SWL memadai.<br>**Engineering:** Kunci pas ukuran sesuai (mis. 36 mm); tag line pengendali.<br>**Administrative:** Lifting plan; Two-Man Rule; larangan berada di bawah jalur angkat.<br>**PPE:** Helm bertali dagu, sarung tangan. | OEM Manual (Control valve weight ±240 kg / housing assembly weight); Permenaker No. 8/2020 |
| 4 | Membongkar pump device / control valve di workbench (spool, regulator, valve plate, pump casing ±42 kg) | • (S) Komponen presisi berat, spool dapat meluncur keluar<br>• (S) Pegas terkompresi di dalam valve terlempar<br>• (H) Solvent pembersih, kabut oli<br>• (E) Solvent bekas & oli bekas | • (S) Komponen terlempar mengenai wajah, jari terjepit<br>• (H) Iritasi kulit, saluran napas, mata<br>• (E) Limbah B3 | **Critical Control:** Waspadai energi pegas terkompresi — bongkar dengan menahan cover dan lepaskan tekanan pegas secara bertahap dan terkendali.<br>**Engineering:** Special tool sesuai OEM; workbench dengan tray penahan; ventilasi lokal di area pembersihan.<br>**Administrative:** Susun & tandai part sesuai urutan; catat pengukuran; larangan menggunakan udara bertekanan untuk membersihkan tubuh/pakaian.<br>**Environmental:** Solvent & oli bekas ke TPS B3.<br>**PPE:** Safety goggles, sarung tangan tahan kimia, apron. | OEM Manual (Disassembly of Pump Device / Control Valve / Pump casing weight ±42 kg); Permenaker No. 5/2018; PP No. 22/2021 |
| 5 | Membongkar dan merakit pilot valve, travel pilot valve, dan solenoid valve | • (S) Pegas kecil & komponen presisi terlempar<br>• (S) Sisa tegangan listrik pada solenoid<br>• (H) Postur kerja duduk lama & ketelitian tinggi<br>• (E) Limbah part kecil terkontaminasi oli | • (S) Cedera mata oleh komponen kecil terlempar<br>• (S) Sengatan listrik ringan<br>• (H) Kelelahan mata & leher<br>• (E) Limbah B3 | **Engineering:** Bongkar di dalam tray tertutup untuk menangkap komponen kecil; pencahayaan memadai & magnifier bila perlu.<br>**Administrative:** Isolasi kelistrikan diverifikasi sebelum melepas solenoid; jeda kerja untuk pekerjaan presisi berkepanjangan.<br>**PPE:** Safety goggles, sarung tangan nitril tipis. | OEM Manual (Disassembly/Assembly of Pilot Valves / Pilot Shut-Off Solenoid Valve); Permenaker No. 12/2015; Permenaker No. 5/2018 |
| 6 | Merakit kembali komponen dengan kontrol kontaminasi ketat dan memasang kembali ke unit | • (S) Partikel kontaminan masuk ke sistem<br>• (S) Salah pasang hose menyebabkan gerakan berlawanan<br>• (E) Tidak Signifikan | • (S) Kegagalan sistem hidrolik saat operasi — unit lepas kendali, fatality<br>• (E) Tidak Signifikan | **Critical Control — Contamination Control:** Perakitan di area bersih; seluruh seal & O-ring diganti baru; kebersihan oli sesuai kode kebersihan yang dipersyaratkan; hose dipasang sesuai identification tag.<br>**Administrative:** Verifikasi silang pemasangan hose oleh orang kedua; tool count in–out; FOD check sebelum penutupan.<br>**PPE:** Sarung tangan nitril bersih. | OEM Manual (Precautions for Assembling); ISO 4406; ISO 9001:2015 kl. 8.5 |
| 7 | Pengisian oli, bleeding udara, dan uji tekanan / performance test | • (S) Tekanan tinggi saat uji, hose uji bisa lepas<br>• (S) Gerakan attachment tak terduga saat pengujian<br>• (H) Kebisingan pump saat uji<br>• (E) Ceceran oli dari titik uji | • (S) Semburan oli bertekanan, attachment menabrak orang<br>• (H) NIHL<br>• (E) Pencemaran | **Critical Control:** Area bebas personel & barikade sebelum unit dinyalakan untuk uji; hose & gauge uji dengan rating tekanan sesuai dan kondisi laik.<br>**Administrative:** Setting tekanan hanya oleh personel kompeten; dilarang menaikkan setting relief valve melebihi spesifikasi pabrikan; kendurkan fitting hanya saat unit mati dan sistem sudah didepressurisasi.<br>**PPE:** Face shield, ear plug. | OEM Manual (Hydraulic Pressure Settings / Never set a pressure limiting valve higher than recommended); Permenaker No. 37/2016; ISO 12100:2010 |

Additional Safety Tips
- Komponen hidrolik presisi rusak oleh partikel yang tidak terlihat mata; bekerja di area bersih adalah bagian dari kontrol keselamatan, bukan sekadar kualitas.
- Beri matching mark sebelum membongkar valve agar orientasi spool dan plate tidak tertukar saat perakitan.
- Jangan pernah menyetel relief valve melebihi tekanan yang direkomendasikan pabrikan untuk "mengatasi" performa yang menurun.

Point of Concern
- Salah pasang hose pada control valve atau pilot valve membuat gerakan attachment berlawanan dari perintah lever — ini kondisi sangat berbahaya yang baru terdeteksi saat uji fungsi.
- Pegas terkompresi di dalam valve assembly adalah energi tersimpan yang sering terlupakan dalam penilaian risiko.
- Uji tekanan dilakukan dengan unit hidup dan sistem bertekanan penuh; ini adalah tahapan paling berbahaya dalam modul ini.

Common Mistakes
- Membongkar valve tanpa tray sehingga pegas dan detent ball hilang atau terlempar — hindari dengan bongkar di dalam tray tertutup.
- Melepas hose gauge saat sistem masih bertekanan — hindari dengan aturan matikan unit dan depressurisasi sebelum melepas alat uji.
- Menggunakan udara bertekanan tinggi untuk mengeringkan komponen ke arah tubuh — hindari dengan pembatasan tekanan dan arah semprot.

Golden Rules
- Tidak ada fitting hidrolik dibuka pada sistem bertekanan.
- Setting tekanan tidak pernah melebihi spesifikasi pabrikan.
- Area bebas personel sebelum uji fungsi dan uji tekanan.

Critical Controls
- Verifikasi tekanan nol sebelum pelepasan komponen.
- Alat angkat bersertifikat untuk pump device dan control valve.
- Kontrol kontaminasi (area bersih, cap, seal baru) diterapkan.
- Verifikasi silang pemasangan hose sesuai tag.
- Barikade dan area bebas personel saat uji tekanan.

Required PPE
- Mandatory PPE: Safety helmet, safety glasses, safety shoes toe cap, coverall, sarung tangan kerja.
- Additional PPE: Face shield, goggles, sarung tangan tahan kimia/nitril, apron, ear plug.

Emergency Response
- Potensi Keadaan Darurat: Fluid injection injury, komponen terlempar, attachment bergerak tak terduga, tumpahan oli.
- Respon Awal: Matikan unit dan aktifkan emergency stop; rujuk medis segera setiap dugaan injection injury tanpa menunggu gejala; kontain tumpahan.
- Peralatan Darurat yang Diperlukan: Kotak P3K, eyewash, spill kit, emergency stop mudah dijangkau, alat komunikasi.

Keterangan
Kegagalan komponen hidrolik utama pasca perbaikan berpotensi menyebabkan attachment turun atau bergerak sendiri saat unit beroperasi; verifikasi mutu perakitan adalah kontrol keselamatan untuk operator, bukan hanya urusan kualitas produk.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

## JSEA-EXC-06

Proses / Pekerjaan: Pelepasan dan Pemasangan Swing Device, Swing Motor, Swing Bearing, dan Center Joint

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Memposisikan unit, mengisolasi energi, dan memastikan upperstructure tidak dapat berputar | • (S) Upperstructure berputar tak terduga<br>• (S) Swing parking brake belum aktif<br>• (E) Tidak Signifikan | • (S) Terjepit antara upperstructure dan undercarriage — fatality<br>• (E) Tidak Signifikan | **Critical Control:** Isolasi energi lengkap (JSEA-GEN-01); pilot shut-off lever LOCK; verifikasi upperstructure tidak dapat berputar sebelum siapa pun masuk zona jepit swing.<br>**Engineering:** Barikade zona swing; pengganjal mekanis bila diperlukan.<br>**Administrative:** Exclusion zone radius swing; larangan berada di antara upperstructure dan track.<br>**PPE:** APD dasar. | OEM Manual (Preparation before Inspection and Maintenance / Swing Parking Brake); ISO 12100:2010; OSHA 29 CFR 1910.147 |
| 2 | Menguras oli reduction gear dan melepas hose swing device | • (H) Oli gear panas & berbau<br>• (E) Oli gear bekas | • (H) Luka bakar termal, dermatitis<br>• (E) Pencemaran tanah | **Engineering:** Wadah drain; tunggu oli dingin.<br>**Administrative:** Cap ujung hose; identification tag.<br>**Environmental:** Oli bekas ke TPS B3 dengan manifest.<br>**PPE:** Sarung tangan tahan panas & kimia, goggles. | OEM Manual; PP No. 22/2021; Permen LHK No. 6/2021 |
| 3 | Melepas dan mengangkat swing device (±220 kg) dan swing motor (±48 kg) | • (S) Beban berat di posisi tinggi pada upperstructure<br>• (S) Beban berayun saat diangkat keluar<br>• (H) Bekerja pada permukaan upperstructure yang tinggi<br>• (E) Ceceran oli | • (S) Tertimpa beban — serious injury<br>• (S) Jatuh dari ketinggian upperstructure<br>• (E) Pencemaran | **Critical Control:** Berat dikonfirmasi OEM Manual; ditahan penuh alat angkat sebelum baut terakhir; exclusion zone.<br>**Engineering:** Nylon sling; bolt pengaman (mis. M20) untuk mengamankan swing device sesuai instruksi OEM; platform kerja berpagar di atas upperstructure.<br>**Administrative:** Lifting plan; rigger bersertifikat; three point contact saat naik-turun.<br>**PPE:** Helm bertali dagu, body harness bila tanpa pagar. | OEM Manual (Swing device weight ±220 kg / Motor weight ±48 kg); Permenaker No. 8/2020; Permenaker No. 9/2016 |
| 4 | Membongkar swing device: ring gear (±23 kg), housing assembly (±58–64 kg), shaft assembly (±40 kg) | • (S) Komponen berat pada workbench<br>• (S) **Serpihan logam beterbangan saat pemukulan bearing/race**<br>• (S) Bearing race terlempar saat dipukul<br>• (H) Kebisingan impak, getaran | • (S) Tertimpa/terjepit komponen<br>• (S) **Mata tertusuk serpihan logam**<br>• (H) NIHL, HAVS | **Critical Control:** Face shield + goggles wajib pada seluruh aktivitas pemukulan — OEM secara eksplisit memperingatkan serpihan logam pada tahapan ini.<br>**Engineering:** Special tool (bearing puller, press) menggantikan pemukulan bila tersedia; hydraulic press dengan guard.<br>**Administrative:** Nylon sling untuk memindahkan housing; catat urutan & orientasi part; Two-Man Lift.<br>**PPE:** Face shield + goggles, ear plug, sarung tangan anti-impact. | OEM Manual (Disassembly of Swing Device / Metal fragments may fly off when a hammer is used / component weights); ANSI/ISEA Z87.1; Permenaker No. 5/2018 |
| 5 | Melepas dan memasang swing bearing (±230 kg) | • (S) Beban berat berbentuk cincin besar, sulit dikendalikan<br>• (S) Bearing terguling saat diletakkan<br>• (S) **Serpihan logam saat pemukulan**<br>• (E) Grease bekas | • (S) Tertimpa/terguling menimpa kaki — serious injury<br>• (S) Cedera mata oleh serpihan logam<br>• (E) Limbah B3 grease | **Critical Control:** Berat dikonfirmasi OEM Manual; sling minimal 3 titik untuk mendistribusikan beban cincin; letakkan pada pallet datar, jangan disandarkan berdiri.<br>**Engineering:** Special tool & guide bolt untuk penyelarasan saat pemasangan.<br>**Administrative:** Torsi baut swing bearing sesuai urutan silang & nilai OEM — sambungan ini kritikal karena menahan seluruh upperstructure; verifikasi oleh orang kedua.<br>**PPE:** Face shield + goggles, safety shoes toe cap, sarung tangan. | OEM Manual (Swing bearing weight ±230 kg / Removal and Installation of Swing Bearing); Permenaker No. 8/2020; ASME B30.9 |
| 6 | Melepas dan memasang center joint (±27 kg) beserta seal dan spindle | • (S) Bekerja di kolong unit<br>• (S) Oli menetes dari center joint<br>• (H) Postur telentang di kolong, debu<br>• (E) Ceceran oli | • (S) Tertimpa komponen dari atas, terjepit<br>• (H) Cedera leher & punggung, iritasi mata oleh tetesan<br>• (E) Pencemaran | **Critical Control:** Unit ditopang stand mekanis bila diangkat; isolasi energi terverifikasi sebelum masuk kolong.<br>**Engineering:** Creeper board; drip tray; pencahayaan portabel tahan benturan.<br>**Administrative:** Two-Man Rule dengan satu orang mengawasi dari luar kolong; larangan merusak alur seal.<br>**PPE:** Safety goggles, sarung tangan nitril, penutup kepala. | OEM Manual (Removal and Installation of Center Joint / Center joint weight ±27 kg); Permenaker No. 5/2018 |
| 7 | Pemasangan kembali, pengisian oli, greasing swing bearing, dan uji fungsi swing | • (S) Uji swing dengan personel di zona jepit<br>• (S) Baut swing bearing kurang torsi<br>• (E) Grease berlebih tercecer | • (S) Terjepit saat upperstructure berputar — fatality<br>• (S) Kegagalan swing bearing saat operasi<br>• (E) Pencemaran | **Critical Control:** Zona swing dibarikade dan dinyatakan bebas personel sebelum uji; torsi baut swing bearing diverifikasi dan didokumentasikan.<br>**Administrative:** Uji swing bertahap dari kecepatan rendah; greasing sesuai titik & jumlah yang ditentukan; tool count in–out.<br>**Environmental:** Grease berlebih dibersihkan, limbah ke TPS B3.<br>**PPE:** APD dasar, rompi reflektif. | OEM Manual; PP No. 50/2012; ISO 9001:2015 |

Additional Safety Tips
- Zona antara upperstructure dan undercarriage adalah zona jepit fatal; perlakukan seperti area artikulasi pada unit artikulasi.
- Swing bearing berbentuk cincin besar memiliki kecenderungan terguling; selalu letakkan mendatar di atas pallet, tidak pernah disandarkan.
- Simpan dan tandai posisi soft zone / titik referensi swing bearing saat pemasangan agar orientasi sesuai desain.

Point of Concern
- Baut swing bearing adalah sambungan struktural kritis yang menahan seluruh upperstructure; kegagalan torsi berpotensi menyebabkan kecelakaan katastropik.
- Peringatan serpihan logam muncul berulang pada tahapan swing bearing dan swing device di OEM Manual — bukan bahaya insidental.
- Bekerja di kolong unit untuk center joint menempatkan teknisi dalam posisi tidak bisa menghindar bila unit bergerak.

Common Mistakes
- Mengandalkan swing parking brake sebagai isolasi energi — hindari dengan isolasi energi penuh dan barikade fisik.
- Mengangkat swing bearing dengan dua titik sling — hindari dengan minimal tiga titik untuk mencegah beban miring dan terguling.
- Mengencangkan baut swing bearing dengan impact wrench tanpa verifikasi torsi akhir — hindari dengan pengencangan akhir memakai torque wrench terkalibrasi dan urutan silang.

Golden Rules
- Tidak seorang pun berada di zona jepit swing selama unit berenergi.
- Face shield dan goggles pada setiap aktivitas pemukulan.
- Torsi baut struktural selalu diverifikasi dan didokumentasikan.

Critical Controls
- Isolasi energi dan verifikasi upperstructure tidak dapat berputar.
- Barikade zona swing terpasang.
- Alat angkat bersertifikat dengan rigging minimal 3 titik untuk swing bearing.
- Face shield + goggles pada aktivitas pemukulan.
- Torsi baut swing bearing terverifikasi orang kedua dan terdokumentasi.

Required PPE
- Mandatory PPE: Safety helmet bertali dagu, safety glasses, safety shoes toe cap, coverall, sarung tangan kerja.
- Additional PPE: Face shield, goggles, ear plug, sarung tangan anti-impact & nitril, body harness bila bekerja di ketinggian upperstructure.

Emergency Response
- Potensi Keadaan Darurat: Terjepit zona swing, tertimpa swing bearing, serpihan logam ke mata, jatuh dari upperstructure.
- Respon Awal: Hentikan seluruh gerakan; untuk korban terjepit jangan memutar upperstructure tanpa penilaian tim penyelamat; tutup mata yang terkena serpihan tanpa mengucek dan evakuasi medis.
- Peralatan Darurat yang Diperlukan: Kotak P3K dengan eye shield, eyewash, spine board, alat komunikasi, akses MEDEVAC.

Keterangan
Modul ini kerap dikerjakan setelah upperstructure dipisahkan dari undercarriage; bila demikian, seluruh kontrol pada JSEA-EXC-03 tentang stabilitas struktur unit tetap berlaku.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

## JSEA-EXC-07

Proses / Pekerjaan: Pelepasan dan Pemasangan Travel Device, Travel Motor, Brake Valve, dan Sprocket

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Memposisikan unit, mengisolasi energi, dan mengangkat track frame dengan menopang unit menggunakan stand | • (S) Unit ditopang hanya oleh front attachment/silinder hidrolik<br>• (S) Unit meluncur atau turun mendadak<br>• (E) Tidak Signifikan | • (S) Unit jatuh menimpa pekerja di kolong — fatality<br>• (E) Tidak Signifikan | **Critical Control:** Wajib stand mekanis berkapasitas sesuai; dilarang bekerja di bawah unit yang hanya ditahan attachment atau dongkrak.<br>**Engineering:** Stand baja dengan alas plat; sudut boom–arm sesuai instruksi OEM (90°–110°) dengan bagian bawah bucket menapak tanah saat mengangkat track frame.<br>**Administrative:** Verifikasi kestabilan oleh orang kedua sebelum masuk kolong; ikuti JSEA-GEN-05.<br>**PPE:** APD dasar. | OEM Manual (Place stand under the track frame and support the machine); Permenaker No. 8/2020; OSHA 29 CFR 1926.600 |
| 2 | Menguras oli travel device dan melepas hose serta piping | • (H) Oli gear panas<br>• (E) Oli bekas | • (H) Luka bakar termal, dermatitis<br>• (E) Pencemaran tanah | **Engineering:** Wadah drain; tunggu dingin.<br>**Administrative:** Cap ujung terbuka & identification tag.<br>**Environmental:** Oli bekas ke TPS B3.<br>**PPE:** Sarung tangan tahan panas & kimia, goggles. | OEM Manual; PP No. 22/2021 |
| 3 | Melepas dan mengangkat travel device (±310 kg) dari track frame | • (S) Beban sangat berat pada posisi rendah & sempit<br>• (S) Beban bergeser saat baut terakhir dilepas<br>• (H) Postur kerja rendah/jongkok<br>• (E) Ceceran oli | • (S) Tertimpa/terjepit — fatality/serious injury<br>• (H) Cedera lutut & punggung<br>• (E) Pencemaran | **Critical Control:** Berat dikonfirmasi OEM Manual; ditahan penuh alat angkat sebelum baut terakhir; exclusion zone; dilarang menahan atau memandu beban dengan tangan.<br>**Engineering:** Nylon sling & eyebolt sesuai spesifikasi; trolley/pallet penerima disiapkan lebih dulu.<br>**Administrative:** Lifting plan; rigger bersertifikat; rotasi kerja postur rendah.<br>**PPE:** Helm bertali dagu, safety shoes toe cap, knee pad. | OEM Manual (Travel Device weight ±310 kg); Permenaker No. 8/2020 |
| 4 | Membongkar travel device: ring gear (±39 kg), sprocket (±46 kg), drum (±51 kg), sprocket+drum (±96 kg), travel motor (±91 kg), brake valve (±21 kg), housing (±50–67 kg) | • (S) Komponen berat pada workbench<br>• (S) **Serpihan logam beterbangan saat pemukulan / penggunaan chisel**<br>• (S) Bearing nut & race memerlukan tenaga besar<br>• (H) Kebisingan & getaran impak<br>• (E) Oli & grease bekas | • (S) Tertimpa/terjepit komponen<br>• (S) **Cedera tusuk pada mata dan tubuh**<br>• (H) NIHL, HAVS<br>• (E) Limbah B3 | **Critical Control:** Face shield + goggles wajib — OEM memperingatkan serpihan logam beterbangan pada tahapan penggunaan palu dan chisel di travel device.<br>**Engineering:** Bearing puller, hydraulic press dengan guard, dan special tool sesuai OEM; nylon sling untuk memindahkan housing.<br>**Administrative:** Berat tiap sub-komponen diinformasikan saat TBM; Two-Man Lift untuk >batas angkat manual; catat orientasi part.<br>**Environmental:** Oli & grease bekas ke TPS B3.<br>**PPE:** Face shield + goggles, ear plug, sarung tangan anti-impact. | OEM Manual (Disassembly of Travel Device / component weights / Metal fragments may fly off); ANSI/ISEA Z87.1; Permenaker No. 5/2018 |
| 5 | Membongkar dan merakit brake valve serta travel motor, termasuk penanganan floating seal | • (S) Pegas brake terkompresi<br>• (S) Floating seal & O-ring rusak menyebabkan kebocoran<br>• (H) Solvent pembersih<br>• (E) Solvent bekas | • (S) Komponen terlempar oleh energi pegas<br>• (S) Kegagalan brake travel saat operasi — unit meluncur<br>• (H) Iritasi kulit & saluran napas<br>• (E) Limbah B3 | **Critical Control:** Lepaskan energi pegas secara terkendali dengan special tool; ganti floating seal dengan baru — bila terpaksa dipakai ulang, pasangkan sebagai matched set dengan permukaan sliding saling berhadapan, olesi permukaan sliding, dan periksa scuffing, scoring, korosi, deformasi, serta keausan tidak merata.<br>**Engineering:** Bersihkan floating seal dan dudukan seal dengan solvent, sikat kawat untuk lumpur/karat, lalu keringkan dengan udara bertekanan.<br>**Administrative:** Verifikasi fungsi brake setelah perakitan sebelum unit dioperasikan.<br>**PPE:** Goggles, sarung tangan tahan kimia. | OEM Manual (Disassembly/Assembly of Brake Valve / Precautions for Using Floating Seal); Permenaker No. 38/2016 |
| 6 | Pemasangan kembali travel device, pengisian oli, dan uji fungsi travel | • (S) Unit bergerak saat uji travel dengan personel di sekitar<br>• (S) Track berputar, titik jepit sprocket–track<br>• (H) Kebisingan<br>• (E) Ceceran oli | • (S) Terlindas / terjepit track — fatality<br>• (H) NIHL<br>• (E) Pencemaran | **Critical Control:** Stand & ganjal dilepas hanya setelah semua orang keluar dari kolong; area bebas personel dan dibarikade sebelum uji travel; komunikasi positif operator–teknisi.<br>**Administrative:** Uji travel bertahap dari kecepatan rendah; verifikasi fungsi brake travel & parking brake; torsi baut sesuai OEM.<br>**PPE:** Rompi reflektif, ear plug. | OEM Manual; ISO 12100:2010; Kepmen ESDM 1827 K/30/MEM/2018 |

Additional Safety Tips
- Travel device adalah komponen terberat pada undercarriage excavator kelas 20 ton; rencanakan jalur angkat dan tempat peletakan sebelum baut pertama dilepas.
- Floating seal yang dipasang salah menyebabkan kebocoran atau kerusakan; ini penyebab kegagalan berulang yang sering diabaikan.
- Ukur dan catat keausan sprocket serta clearance bearing sebagai data prediktif untuk perencanaan komponen berikutnya.

Point of Concern
- Kegagalan brake valve travel dapat membuat unit meluncur pada kemiringan — pengujian fungsi rem setelah perbaikan adalah kontrol keselamatan wajib, bukan opsional.
- Penggunaan chisel dan palu untuk melepas cover pada travel device adalah sumber serpihan logam yang secara eksplisit diperingatkan OEM.
- Track yang berputar saat uji fungsi memiliki titik jepit di sprocket dan idler yang mematikan.

Common Mistakes
- Memakai ulang floating seal tanpa memeriksa permukaan sliding — hindari dengan pemeriksaan sesuai kriteria OEM atau langsung mengganti baru.
- Menopang unit hanya dengan front attachment saat melepas track frame — hindari dengan stand mekanis wajib.
- Menguji travel sambil masih ada rekan di sekitar undercarriage — hindari dengan barikade dan konfirmasi verbal area bebas.

Golden Rules
- Tidak ada pekerjaan di kolong tanpa stand mekanis.
- Tidak ada uji travel sebelum area dinyatakan bebas personel.
- Fungsi rem selalu diuji sebelum unit dikembalikan ke operasi.

Critical Controls
- Stand mekanis menopang unit, terverifikasi orang kedua.
- Alat angkat bersertifikat untuk travel device dan sub-komponennya.
- Face shield + goggles pada aktivitas pemukulan dan penggunaan chisel.
- Floating seal & O-ring diganti/diperiksa sesuai kriteria OEM.
- Barikade dan verifikasi area bebas sebelum uji travel.

Required PPE
- Mandatory PPE: Safety helmet bertali dagu, safety glasses, safety shoes toe cap, coverall, sarung tangan kerja.
- Additional PPE: Face shield, goggles, ear plug, sarung tangan anti-impact & tahan kimia, knee pad, rompi reflektif.

Emergency Response
- Potensi Keadaan Darurat: Unit jatuh dari penopang, tertimpa travel device, terlindas track, serpihan logam ke mata.
- Respon Awal: Hentikan gerakan, aktifkan emergency stop, jangan mencoba mengangkat unit atau komponen tanpa alat dan tenaga terlatih, aktifkan ERT.
- Peralatan Darurat yang Diperlukan: Kotak P3K dengan eye shield, eyewash, spine board, alat angkat cadangan, alat komunikasi, akses MEDEVAC.

Keterangan
Uji fungsi rem travel dan parking brake setelah pemasangan wajib dilakukan pada permukaan datar dan aman, bukan di area kerja produktif.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

## JSEA-EXC-08

Proses / Pekerjaan: Pekerjaan Track Adjuster, Front Idler, Upper Roller, dan Lower Roller (Penanganan Grease Bertekanan Tinggi)

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Memposisikan unit untuk inspeksi & perawatan, isolasi energi, dan membersihkan kerikil/lumpur yang terjepit antara sprocket dan track link | • (S) Material padat terjepit menahan tegangan track<br>• (S) Material terlempar saat dicongkel<br>• (H) Postur kerja rendah<br>• (E) Limbah lumpur terkontaminasi | • (S) Pelepasan tegangan mendadak, mata terkena serpihan<br>• (H) MSD<br>• (E) Limbah B3 | **Critical Control:** Kerikil dan lumpur yang menumpuk antara sprocket dan track link wajib dibersihkan sebelum katup grease dikendurkan — instruksi eksplisit OEM.<br>**Engineering:** Alat congkel bergagang panjang.<br>**Administrative:** Isolasi energi terverifikasi.<br>**PPE:** Goggles, sarung tangan. | OEM Manual (When gravel or mud is packed between sprockets and track links, remove them before loosening); Permenaker No. 5/2018 |
| 2 | **Mengendurkan katup (valve) pada track adjuster untuk membuang grease bertekanan tinggi** | • (S) **Tekanan di dalam silinder track adjuster sangat tinggi**<br>• (S) **Katup dapat terlempar keluar seperti proyektil**<br>• (S) **Semburan grease bertekanan tinggi**<br>• (H) Kontak grease dengan kulit & mata<br>• (E) Grease tercecer ke tanah | • (S) **Katup terlempar mengenai kepala/tubuh — fatality**<br>• (S) **Grease injection injury — amputasi jari/tangan**<br>• (S) Cedera mata berat<br>• (H) Dermatitis<br>• (E) Pencemaran tanah | **Critical Control:** Kendurkan katup **maksimal 1 sampai 1,5 putaran saja — dilarang lebih dari itu**; kendurkan **perlahan, tidak cepat**; jaga seluruh anggota tubuh dan wajah **menjauh dari garis katup**; **dilarang keras mengendurkan grease fitting** (nipple), hanya katup yang boleh dikendurkan.<br>**Engineering:** Kunci pas ukuran sesuai (mis. 24 mm) dengan gagang panjang agar tubuh menjauh; pelindung/deflektor arah semburan; posisi tubuh menyamping, tidak pernah segaris.<br>**Administrative:** Hanya teknisi terlatih & berpengalaman; exclusion zone di depan arah katup; Two-Man Rule dengan pengawas di luar garis semburan; briefing khusus tahapan ini setiap kali dikerjakan.<br>**Environmental:** Wadah penampung grease; spill kit.<br>**PPE:** **Face shield + goggles wajib**, sarung tangan tahan kimia, coverall lengan panjang, apron. | OEM Manual (**CAUTION: The pressure inside the track adjuster cylinder is high. Do not loosen valve quickly or too much as valve may fly out or high-pressure grease may gush out. Keep body parts and face away. Do not loosen grease fitting. Loosening valve by 1 to 1.5 turns is enough**); Permenaker No. 37/2016; Permenaker No. 8/2010; ISO 12100:2010 |
| 3 | Melepas front idler (±110 kg) dan track adjuster (±140 kg), atau assembly gabungan (±250 kg) | • (S) Beban berat<br>• (S) Energi pegas recoil spring masih tersimpan<br>• (S) Special tool berat (±32–53 kg) ikut terpasang<br>• (E) Ceceran grease | • (S) Tertimpa komponen, komponen terlempar oleh pegas<br>• (E) Pencemaran | **Critical Control:** Grease dipastikan sudah terbuang penuh sebelum assembly dilepas; berat komponen dikonfirmasi OEM Manual; ditahan alat angkat sebelum baut terakhir.<br>**Engineering:** Special tool OEM untuk menahan pegas; nylon sling.<br>**Administrative:** Lifting plan; exclusion zone pada arah gaya pegas.<br>**PPE:** Face shield, helm bertali dagu, safety shoes toe cap. | OEM Manual (Front idler weight ±110 kg / Track adjuster weight ±140 kg / Special tool weight); Permenaker No. 8/2020 |
| 4 | **Membongkar track adjuster: melepas yoke (±21 kg), spring assembly (±91–120 kg), dan cylinder (±20 kg)** | • (S) **Recoil spring terkompresi dengan energi sangat besar**<br>• (S) Pegas melesat bila special tool gagal atau dilepas terlalu cepat<br>• (S) **Serpihan logam bila ulir rod rusak**<br>• (H) Beban berat, postur | • (S) **Pegas melesat menimpa pekerja — fatality**<br>• (S) Serpihan logam menembus tubuh<br>• (H) Cedera punggung | **Critical Control:** Pembongkaran spring assembly **hanya boleh menggunakan special tool OEM (spring compressor)** yang laik dan tersertifikasi; pelepasan kompresi dilakukan **bertahap dan terkendali**; **dilarang berdiri segaris dengan arah gaya pegas**; barikade area di depan dan belakang assembly.<br>**Engineering:** Spring compressor terpasang dan diverifikasi sebelum baut penahan dilepas; cage/pelindung di sekeliling assembly bila tersedia.<br>**Administrative:** Hanya personel terlatih khusus; briefing energi tersimpan sebelum mulai; inspeksi ulir rod terhadap kerusakan sebelum pembongkaran.<br>**PPE:** Face shield + goggles, coverall lengan panjang, safety shoes toe cap. | OEM Manual (Disassembly of Track Adjuster / spring assembly weight / strong force is always applied to the thread part of the rod); Permenaker No. 38/2016; ISO 12100:2010 |
| 5 | Melepas track guard (±23 kg), lower roller (±35 kg), dan upper roller (±21 kg) | • (S) Beban sedang di posisi rendah<br>• (S) Roller menggelinding<br>• (S) Grease bertekanan pada katup adjuster harus dikendurkan lagi<br>• (H) Postur jongkok/telentang<br>• (E) Grease & oli bekas | • (S) Kaki tertimpa/terjepit roller<br>• (S) Semburan grease bertekanan<br>• (H) MSD<br>• (E) Limbah B3 | **Critical Control:** Kontrol pengendoran katup grease (tahapan No. 2) berlaku penuh setiap kali katup dikendurkan; grease dibuang hanya sampai clearance cukup untuk melepas roller.<br>**Engineering:** Roller dilepas dengan alat angkat/trolley; pengganjal agar tidak menggelinding.<br>**Administrative:** Two-Man Lift; rotasi postur.<br>**PPE:** Face shield, safety shoes toe cap, knee pad. | OEM Manual (Track guard weight ±23 kg / Lower roller weight ±35 kg / Loosen valve, drain grease until clearance is enough); Permenaker No. 5/2018 |
| 6 | Membongkar dan merakit idler serta lower roller, termasuk floating seal dan axle assembly | • (S) **Serpihan logam saat pemukulan bearing/race**<br>• (S) Komponen presisi berat (idler ±70–95 kg, axle ±25 kg)<br>• (H) Solvent, kebisingan<br>• (E) Oli & solvent bekas | • (S) Cedera mata & tubuh oleh serpihan logam, tertimpa komponen<br>• (H) Iritasi, NIHL<br>• (E) Limbah B3 | **Critical Control:** Face shield + goggles pada seluruh pemukulan — peringatan serpihan logam OEM berlaku pada tahapan idler.<br>**Engineering:** Hydraulic press dengan guard; special tool untuk floating seal.<br>**Administrative:** Prosedur floating seal (matched set, permukaan sliding diolesi, pemeriksaan scuffing/scoring/korosi/deformasi) diikuti.<br>**PPE:** Face shield + goggles, ear plug, sarung tangan anti-impact. | OEM Manual (Disassembly of Front Idler / Lower Roller / Precautions for Using Floating Seal / Metal fragments may fly off); ANSI/ISEA Z87.1 |
| 7 | Pemasangan kembali, pengisian grease track adjuster, penyetelan ketegangan track, dan uji fungsi | • (S) Pengisian grease bertekanan tinggi<br>• (S) Ketegangan track salah menyebabkan track lepas saat operasi<br>• (S) Track berputar saat uji<br>• (E) Ceceran grease | • (S) Semburan grease, track lepas saat unit beroperasi<br>• (S) Terjepit track berputar<br>• (E) Pencemaran | **Critical Control:** Ketegangan track disetel sesuai spesifikasi OEM dan diverifikasi; area bebas personel sebelum uji travel.<br>**Engineering:** Grease gun bertekanan sesuai; sambungan grease terkunci rapat.<br>**Administrative:** Verifikasi tidak ada kebocoran pada katup & fitting setelah pengisian; uji travel bertahap.<br>**Environmental:** Bersihkan grease berlebih, limbah ke TPS B3.<br>**PPE:** Face shield, goggles. | OEM Manual (Assembly of Track Adjuster); Permenaker No. 38/2016; PP No. 22/2021 |

Additional Safety Tips
- Grease di dalam silinder track adjuster berada pada tekanan yang setara sistem hidrolik bertekanan tinggi — perlakukan sebagai bejana bertekanan, bukan sekadar "nipple grease".
- Berdiri menyamping terhadap katup, bukan di depannya, dan gunakan kunci bergagang panjang agar kepala berada sejauh mungkin.
- Periksa ulir rod track adjuster terhadap kerusakan sebelum membongkar; ulir rusak berarti potensi serpihan logam terlempar oleh gaya pegas.

Point of Concern
- Katup track adjuster yang dikendurkan lebih dari 1,5 putaran dapat terlepas total dan terlempar dengan energi mematikan — ini penyebab kecelakaan fatal yang berulang di industri alat berat.
- Mengendurkan grease fitting (nipple), bukan katup, adalah kesalahan yang secara khusus dilarang OEM karena tidak dirancang untuk melepas tekanan.
- Recoil spring track adjuster menyimpan energi mekanik terbesar pada undercarriage; pembongkarannya tanpa spring compressor adalah pekerjaan berpotensi fatal.

Common Mistakes
- Mengendurkan katup dengan cepat agar grease keluar lebih lekas — hindari dengan pengendoran perlahan dan bertahap maksimal 1,5 putaran.
- Melepas grease fitting untuk membuang tekanan — hindari dengan pelatihan yang menegaskan hanya katup yang boleh dikendurkan.
- Membongkar recoil spring dengan alat improvisasi atau memanaskannya — hindari dengan mewajibkan spring compressor OEM dan menghentikan pekerjaan bila alat tidak tersedia.

Golden Rules
- Katup track adjuster dikendurkan maksimal 1,5 putaran, perlahan, dengan tubuh dan wajah menjauh.
- Grease fitting tidak pernah dikendurkan untuk melepas tekanan.
- Recoil spring hanya dibongkar dengan spring compressor OEM.

Critical Controls
- Pembersihan lumpur/kerikil sebelum pengendoran katup.
- Pembatasan 1–1,5 putaran pada pengendoran katup, dengan face shield terpakai.
- Exclusion zone pada garis semburan katup dan garis gaya pegas.
- Spring compressor OEM terpasang dan diverifikasi sebelum baut penahan dilepas.
- Berat komponen dikonfirmasi dan alat angkat bersertifikat digunakan.

Required PPE
- Mandatory PPE: Safety helmet bertali dagu, safety glasses, safety shoes toe cap, coverall lengan panjang, sarung tangan kerja.
- Additional PPE: **Face shield (wajib pada pengendoran katup grease dan pembongkaran spring)**, goggles, sarung tangan tahan kimia & anti-impact, apron, ear plug, knee pad.

Emergency Response
- Potensi Keadaan Darurat: Katup terlempar, grease injection injury, pegas melesat, tertimpa komponen undercarriage.
- Respon Awal: Hentikan pekerjaan dan jauhkan semua orang dari garis energi; **grease injection injury wajib dirujuk sebagai kasus bedah darurat meskipun luka luar tampak hanya seperti tusukan jarum** — jangan menunggu gejala membesar; hentikan pendarahan tanpa mencabut benda asing.
- Peralatan Darurat yang Diperlukan: Kotak P3K dengan eye shield, eyewash station, spill kit, alat komunikasi, akses MEDEVAC dengan informasi bahwa kasus adalah injeksi bertekanan tinggi.

Keterangan
Tahapan No. 2 dan No. 4 pada modul ini adalah dua tahapan dengan potensi fatality tertinggi di seluruh pekerjaan undercarriage; keduanya wajib dibahas khusus pada Toolbox Meeting dan diverifikasi sebagai Critical Control sebelum pekerjaan dimulai.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

## JSEA-EXC-09

Proses / Pekerjaan: Pelepasan dan Pemasangan Track (Track Link, Master Pin) serta Penggantian Bucket, Pin, Bushing, Side Cutter, dan Point

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Memposisikan unit untuk pelepasan track dan membuang grease track adjuster untuk mengendurkan track | • (S) **Tekanan grease tinggi pada katup track adjuster**<br>• (S) Track masih tegang<br>• (E) Grease tercecer | • (S) Katup terlempar, grease injection injury<br>• (E) Pencemaran tanah | **Critical Control:** Seluruh kontrol pada JSEA-EXC-08 tahapan No. 2 berlaku penuh — kendurkan katup maksimal 1–1,5 putaran, perlahan, tubuh dan wajah menjauh, jangan mengendurkan grease fitting.<br>**PPE:** Face shield + goggles wajib. | OEM Manual (Loosen valve, drain grease and loosen the track); Permenaker No. 37/2016 |
| 2 | Melepas snap ring dari master pin dan menentukan arah pelepasan master pin | • (S) Snap ring terlempar<br>• (S) Master pin hanya dapat dilepas ke satu arah<br>• (E) Tidak Signifikan | • (S) Cedera mata oleh snap ring<br>• (S) Kerusakan komponen & pin macet bila arah salah<br>• (E) Tidak Signifikan | **Engineering:** Snap ring plier yang sesuai; kain penahan untuk menangkap snap ring.<br>**Administrative:** Verifikasi arah pelepasan master pin sesuai OEM sebelum memukul; bila snap ring mengganggu master link, dorong master pin ke arah pemasangan untuk memberi celah.<br>**PPE:** Goggles. | OEM Manual (Master pin can be removed to only one direction. Check direction to remove) |
| 3 | **Melepas master pin dengan special tool dan palu** | • (S) **Serpihan logam beterbangan saat palu digunakan**<br>• (S) **Track adjuster dapat terlempar oleh gaya pegas saat track dilepas**<br>• (S) **Serpihan logam terlempar dari ulir rod yang rusak akibat gaya pegas**<br>• (S) Master pin melesat keluar<br>• (H) Kebisingan & getaran impak | • (S) **Track adjuster terlempar menimpa pekerja — fatality**<br>• (S) **Serpihan logam menembus mata/tubuh**<br>• (S) Kaki tertimpa master pin<br>• (H) NIHL, HAVS | **Critical Control:** **Dilarang berdiri searah dengan arah pelepasan track adjuster atau di area yang mungkin dilaluinya bila terlempar** — gaya kuat selalu bekerja pada bagian ulir rod, dan bila rod atau ulirnya rusak, serpihan logam dapat terlempar oleh gaya pegas. Face shield + goggles wajib. Barikade area di sisi arah gaya pegas dan arah lintasan master pin.<br>**Engineering:** Special tool pendorong master pin sesuai OEM; palu & drift laik (kepala tidak mushroomed).<br>**Administrative:** Periksa kondisi rod & ulir track adjuster sebelum melepas track; hentikan pekerjaan bila ulir rusak dan laporkan; Two-Man Rule dengan pengawas berada di luar garis bahaya; briefing khusus tahapan ini.<br>**PPE:** Face shield + goggles, coverall lengan panjang, sarung tangan anti-impact, ear plug, safety shoes toe cap. | OEM Manual (**CAUTION: The track adjuster may fly out due to the spring force when removing the track. Do not stand in the same direction to remove the track adjuster or where it may fly out... metal fragments may fly out due to the spring force** / **Metal fragments may fly off when a hammer is used**); ISO 12100:2010; ANSI/ISEA Z87.1 |
| 4 | Menyetel sudut boom–arm 90°–110°, menurunkan boom hingga bagian bawah bucket menapak tanah, mengangkat track frame, menopang dengan stand, lalu menarik keluar track | • (S) Unit terangkat sebagian, hanya ditahan attachment<br>• (S) **Track assembly berbobot ±1.260–1.420 kg**<br>• (S) Track mengayun/menggulung saat ditarik keluar<br>• (E) Tidak Signifikan | • (S) Unit jatuh menimpa pekerja — fatality<br>• (S) Tertimpa/terlindas track — fatality<br>• (E) Tidak Signifikan | **Critical Control:** Stand mekanis wajib dipasang di bawah track frame untuk menopang unit; dilarang berada di kolong atau di jalur track yang ditarik; berat track dikonfirmasi dari OEM Manual dan alat angkat dengan SWL memadai digunakan.<br>**Engineering:** Stand berkapasitas sesuai; alat angkat/forklift dengan attachment sesuai untuk menangani track.<br>**Administrative:** Operator mengoperasikan travel lever secara perlahan pada posisi mundur untuk memanjangkan track; komunikasi positif; exclusion zone.<br>**PPE:** Helm bertali dagu, safety shoes toe cap, rompi reflektif. | OEM Manual (Set the angle between boom and arm to 90°–110° / Place stand under the track frame / The track assembly weight); Permenaker No. 8/2020 |
| 5 | Memasang kembali track: memposisikan track di bawah unit, memasang ke claw sprocket, dan menggulung track dengan travel lever | • (S) Track berputar dengan sprocket — titik jepit mematikan<br>• (S) Unit dalam kondisi terangkat<br>• (S) Track terjatuh saat diposisikan<br>• (E) Tidak Signifikan | • (S) Tangan/kaki terjepit antara track dan sprocket — amputasi/fatality<br>• (S) Tertimpa track<br>• (E) Tidak Signifikan | **Critical Control:** **Dilarang keras menyentuh, memandu, atau memposisikan track dengan tangan saat travel lever dioperasikan**; gunakan alat bantu bergagang panjang; exclusion zone di sekeliling sprocket & idler.<br>**Engineering:** Alat angkat untuk memposisikan track; guide bar.<br>**Administrative:** Aba-aba tunggal dan komunikasi positif; operator berhenti total setiap kali teknisi mendekat; verifikasi arah pemasangan track sebelum digulung.<br>**PPE:** Sarung tangan, safety shoes toe cap, rompi reflektif. | OEM Manual (Slowly operate a travel control lever... wind the track while rotating travel device); ISO 12100:2010; Permenaker No. 38/2016 |
| 6 | Memasang master pin, snap ring, lalu mengisi grease track adjuster dan menyetel ketegangan track | • (S) Pemukulan master pin — serpihan logam<br>• (S) Pengisian grease bertekanan tinggi<br>• (S) Ketegangan track salah<br>• (E) Ceceran grease | • (S) Cedera mata, semburan grease<br>• (S) Track lepas saat unit beroperasi — kecelakaan di lapangan<br>• (E) Pencemaran | **Critical Control:** Face shield + goggles saat pemukulan; ketegangan track sesuai spesifikasi OEM dan diverifikasi.<br>**Administrative:** Cek kebocoran katup & fitting setelah pengisian; uji travel bertahap dengan area bebas personel.<br>**Environmental:** Bersihkan grease berlebih; limbah ke TPS B3.<br>**PPE:** Face shield, goggles, sarung tangan. | OEM Manual (Installation of Track); PP No. 22/2021 |
| 7 | Penggantian bucket, pin & bushing, side cutter, dan point (kuku bucket) | • (S) **Serpihan logam saat memukul pin bucket**<br>• (S) Bucket berat terguling/jatuh<br>• (S) Titik jepit antara bucket dan arm<br>• (H) Postur kerja rendah, beban angkat<br>• (E) Serpihan logam & part bekas | • (S) **Cedera mata & tusuk oleh serpihan logam**<br>• (S) Tertimpa bucket — fatality<br>• (S) Jari terjepit saat penyelarasan lubang pin<br>• (H) MSD<br>• (E) Limbah logam | **Critical Control:** Bucket ditopang/diganjal stabil sebelum pin dilepas; **dilarang menggunakan jari untuk memeriksa kelurusan lubang pin** — gunakan drift atau tapered bar; face shield + goggles wajib saat pemukulan.<br>**Substitusi:** Sistem quick coupler atau pin pusher hidrolik bila tersedia.<br>**Engineering:** Bucket diletakkan pada permukaan rata dengan pengganjal; alat angkat untuk bucket berat.<br>**Administrative:** Two-Man Rule; standar dimensi sambungan arm–bucket dan arm–boom diverifikasi terhadap batas keausan OEM; catat hasil pengukuran pin & bushing.<br>**PPE:** Face shield + goggles, sarung tangan anti-impact, safety shoes toe cap. | OEM Manual (Pin and Bushing / Side Cutter / Point / Standard Dimensions for Arm and Bucket Connection); ANSI/ISEA Z87.1; Permenaker No. 8/2010 |

Additional Safety Tips
- Periksa kondisi rod dan ulir track adjuster sebelum melepas track; ulir yang rusak mengubah pekerjaan rutin menjadi pekerjaan berpotensi fatal.
- Saat memasang track, biarkan alat bantu yang memandu, bukan tangan; jari yang masuk sesaat ke antara track dan sprocket tidak akan sempat ditarik.
- Ukur keausan pin dan bushing serta bandingkan dengan standar dimensi OEM sebelum memutuskan mengganti atau memakai ulang.

Point of Concern
- Peringatan OEM bahwa track adjuster dapat terlempar oleh gaya pegas adalah peringatan fatality, bukan peringatan kerusakan alat; posisi berdiri teknisi adalah kontrol penentu.
- Track assembly excavator kelas 20 ton berbobot lebih dari satu ton dan dapat menggulung atau terguling saat dilepas.
- Penyelarasan lubang pin bucket adalah penyebab klasik amputasi jari karena teknisi memeriksa kelurusan dengan jari.

Common Mistakes
- Berdiri di depan track adjuster saat master pin dipukul keluar — hindari dengan menetapkan dan membarikade zona terlarang sebelum pekerjaan dimulai.
- Memandu track dengan tangan saat operator menggerakkan travel lever — hindari dengan aturan tangan menjauh dan alat bantu bergagang panjang.
- Memeriksa kelurusan lubang pin dengan jari — hindari dengan drift/tapered bar dan aturan larangan mutlak.

Golden Rules
- Tidak berdiri di arah gaya pegas track adjuster.
- Tangan tidak pernah berada di antara track dan sprocket saat unit dapat bergerak.
- Jari tidak pernah digunakan untuk memeriksa kelurusan lubang pin.

Critical Controls
- Grease track adjuster dibuang sesuai prosedur (maks. 1,5 putaran, perlahan, face shield).
- Kondisi rod & ulir track adjuster diperiksa sebelum pelepasan track.
- Barikade zona gaya pegas dan lintasan master pin.
- Stand mekanis menopang unit saat track frame terangkat.
- Face shield + goggles pada seluruh aktivitas pemukulan pin.

Required PPE
- Mandatory PPE: Safety helmet bertali dagu, safety glasses, safety shoes toe cap, coverall lengan panjang, sarung tangan kerja.
- Additional PPE: Face shield, goggles, sarung tangan anti-impact, ear plug, rompi reflektif, knee pad.

Emergency Response
- Potensi Keadaan Darurat: Track adjuster terlempar, serpihan logam menembus tubuh/mata, terjepit track–sprocket, tertimpa track atau bucket.
- Respon Awal: Hentikan seluruh gerakan unit; untuk terjepit, jangan menggerakkan travel lever untuk "membebaskan" tanpa arahan tim penyelamat; jangan mencabut serpihan logam dari luka; evakuasi medis segera.
- Peralatan Darurat yang Diperlukan: Kotak P3K dengan eye shield & tourniquet, eyewash, spine board, alat angkat cadangan, alat komunikasi, akses MEDEVAC.

Keterangan
Penggantian point (kuku bucket) dan side cutter sering dianggap pekerjaan ringan dan dikerjakan tanpa JSEA; kenyataannya tahapan ini menyumbang cedera mata dan tangan dalam jumlah signifikan karena melibatkan pemukulan pin secara berulang.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

## JSEA-EXC-10

Proses / Pekerjaan: Pengecatan (Painting), Perbaikan Permukaan, dan Test Run / Operational Performance Test Pasca Perbaikan

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Menyiapkan permukaan: membersihkan, menggerinda, dan mengamplas area yang akan dicat | • (S) Percikan bunga api dari gerinda<br>• (S) Batu gerinda pecah<br>• (H) Debu logam & cat lama (potensi timbal/kromat) terhirup<br>• (H) Kebisingan & getaran<br>• (E) Debu & serpihan cat lama | • (S) Kebakaran bila ada bahan mudah terbakar di sekitar<br>• (S) Cedera mata & wajah oleh serpihan<br>• (H) Gangguan pernapasan, keracunan logam berat, NIHL, HAVS<br>• (E) Pencemaran udara & tanah | **Critical Control:** Hot Work Permit bila ada bahan mudah terbakar, tangki bahan bakar, atau sistem hidrolik di sekitar; APAR di titik kerja; fire watch selama dan setelah pekerjaan.<br>**Engineering:** Guard gerinda terpasang; LEV/dust extraction; sekat/blanket tahan api; batu gerinda sesuai RPM mesin dan belum kadaluarsa.<br>**Administrative:** Cat lama dilepas dengan cara yang benar dan tidak dibakar; larangan menghirup debu/asap.<br>**Environmental:** Debu & serpihan cat ditampung sebagai limbah B3.<br>**PPE:** Face shield + goggles, respirator dengan filter partikulat, ear plug, sarung tangan, apron kulit. | OEM Manual (Remove paint properly. Wear eye protection... Do not inhale dust or fumes); Permenakertrans No. 4/1980; NFPA 51B; Permenaker No. 5/2018; PP No. 22/2021 |
| 2 | Melindungi (masking) komponen yang tidak boleh terkena cat: rod silinder, seal, nameplate, decal keselamatan, sensor, dan konektor | • (S) Decal keselamatan tertutup cat<br>• (E) Limbah masking tape & plastik | • (S) Informasi bahaya hilang dari unit — operator kehilangan peringatan<br>• (E) Limbah non-B3/B3 | **Critical Control:** Seluruh safety decal & nameplate dilindungi; decal yang rusak atau hilang wajib diganti baru sebelum unit diserahkan.<br>**Administrative:** Checklist masking; foto kondisi decal sebelum & sesudah.<br>**Environmental:** Segregasi limbah masking.<br>**PPE:** Sarung tangan. | OEM Manual (Painting / Replace safety labels immediately if missing or damaged); ISO 9001:2015 |
| 3 | Melakukan pengecatan dengan spray gun | • (S) Uap pelarut mudah terbakar<br>• (S) Listrik statis dari spray<br>• (H) Uap isosianat/pelarut terhirup, kontak kulit & mata<br>• (E) Emisi VOC, overspray, limbah kaleng cat & thinner | • (S) Kebakaran/ledakan uap pelarut<br>• (H) Keracunan pelarut, asma akibat kerja, dermatitis<br>• (E) Pencemaran udara & tanah, limbah B3 | **Critical Control:** Pengecatan hanya di paint booth berventilasi atau area terbuka dengan ventilasi memadai; **dilarang ada sumber api, pengelasan, gerinda, atau merokok** di area pengecatan; peralatan listrik explosion-proof; bonding & grounding.<br>**Engineering:** Ventilasi buang mekanis; filter overspray.<br>**Administrative:** SDS cat & thinner tersedia dan dipahami; batas waktu paparan; larangan makan/minum di area.<br>**Environmental:** Sisa cat, thinner, filter, dan kaleng ke TPS Limbah B3 dengan manifest; larangan membuang thinner ke drainase.<br>**PPE:** Respirator dengan filter uap organik (atau supplied air untuk cat dua komponen), goggles, sarung tangan tahan pelarut, coverall sekali pakai. | Permenaker No. 5/2018 (NAB kimia); Permenaker No. 8/2010; PP No. 22/2021; Permen LHK No. 6/2021; NFPA 33 |
| 4 | Pengeringan cat dan pembersihan area | • (H) Uap pelarut masih menguap selama pengeringan<br>• (E) Emisi VOC berlanjut | • (H) Paparan lanjutan pada pekerja lain di sekitar<br>• (E) Pencemaran udara | **Engineering:** Ventilasi tetap berjalan selama pengeringan.<br>**Administrative:** Area dibarikade & diberi rambu selama pengeringan; larangan hot work di sekitar sampai cat kering sempurna.<br>**Environmental:** Majun & kuas bekas ke TPS B3.<br>**PPE:** Respirator bila memasuki area. | Permenaker No. 5/2018; PP No. 22/2021 |
| 5 | Persiapan test run: memastikan seluruh guard, cover, dan komponen terpasang, tool count in–out, serta pengisian seluruh fluida | • (S) Guard belum terpasang, tool tertinggal<br>• (S) Level fluida kurang<br>• (E) Tidak Signifikan | • (S) Terjerat komponen berputar, kerusakan katastropik oleh tool tertinggal<br>• (E) Tidak Signifikan | **Critical Control:** FOD check & tool count in–out terverifikasi; seluruh guard komponen berputar terpasang; level oli engine, hidrolik, gear, coolant, dan bahan bakar diperiksa.<br>**Administrative:** Checklist pre-start ditandatangani; leak check visual menyeluruh.<br>**PPE:** APD dasar. | OEM Manual (Keep a record of the number of tools used); PP No. 50/2012; ISO 9001:2015 |
| 6 | Melakukan test run dan operational performance test (fungsi engine, hidrolik, swing, travel, attachment, rem, monitor & fault code) | • (S) Unit bergerak dengan personel di sekitar<br>• (S) Gerakan attachment tak terduga akibat salah pasang hose<br>• (S) Kebocoran bertekanan muncul saat sistem dibebani<br>• (H) Kebisingan, getaran, gas buang<br>• (E) Emisi & potensi tumpahan | • (S) Tertabrak/tertimpa unit atau attachment — fatality<br>• (S) Semburan oli bertekanan<br>• (H) NIHL, WBV, keracunan CO<br>• (E) Pencemaran | **Critical Control:** Test run di area khusus yang dibarikade dan bebas personel; hanya operator kompeten di kabin; komunikasi positif dengan pengamat di luar zona bahaya; uji bertahap dari gerakan lambat tanpa beban.<br>**Engineering:** Ventilasi/exhaust extraction bila di dalam ruangan; APAR di titik uji.<br>**Administrative:** Urutan pengujian sesuai OEM; catat parameter (tekanan, temperatur, waktu siklus) dan bandingkan dengan standar; hentikan uji segera bila ada kebocoran, suara, atau getaran abnormal.<br>**PPE:** Ear plug, rompi reflektif. | OEM Manual (Operational Performance Test); Permenaker No. 5/2018; Kepmen ESDM 1827 K/30/MEM/2018; ISO 12100:2010 |
| 7 | Penyelesaian: pembersihan unit, pencatatan service history, dan serah terima | • (S) Temuan sisa tidak dikomunikasikan<br>• (E) Limbah sisa pekerjaan | • (S) Risiko sisa berpindah ke operator tanpa diketahui<br>• (E) Pencemaran bila limbah tidak dikelola | **Administrative:** Service report & service history diisi lengkap; temuan dan rekomendasi dijelaskan langsung ke operator/pengguna; decal keselamatan diverifikasi lengkap dan terbaca.<br>**Environmental:** Seluruh limbah B3 diserahkan ke TPS berizin dengan logbook & manifest.<br>**PPE:** APD dasar. | OEM Manual (Service History); PP No. 50/2012; PP No. 22/2021; ISO 9001:2015 |

Additional Safety Tips
- Jangan pernah melakukan pengelasan atau penggerindaan di area yang sama dengan pengecatan, bahkan pada waktu berbeda, tanpa memastikan uap pelarut sudah hilang.
- Decal keselamatan adalah bagian dari sistem pengendalian bahaya unit; decal yang hilang atau tertutup cat harus diganti sebelum unit dioperasikan.
- Catat parameter hasil test run sebagai baseline untuk pemantauan kondisi unit berikutnya.

Point of Concern
- Cat lama pada unit tua berpotensi mengandung logam berat; menggerindanya tanpa pengendalian debu menghasilkan paparan pernapasan yang serius.
- Cat dua komponen berbasis isosianat dapat memicu asma akibat kerja bahkan pada paparan rendah berulang; respirator filter biasa sering tidak memadai.
- Test run adalah pertama kalinya seluruh energi unit diaktifkan kembali setelah perbaikan; kesalahan perakitan akan muncul di sini dengan konsekuensi penuh.

Common Mistakes
- Menyalakan unit untuk test run dengan cover atau guard belum terpasang — hindari dengan checklist pre-start wajib bertanda tangan.
- Mengecat menutupi nameplate, decal, atau sight glass — hindari dengan checklist masking dan verifikasi foto.
- Melakukan test run di area lalu lalang workshop — hindari dengan area uji khusus yang dibarikade.

Golden Rules
- Tidak ada test run sebelum semua guard terpasang dan semua tool terhitung.
- Tidak ada api atau percikan di area pengecatan.
- Decal keselamatan selalu lengkap dan terbaca sebelum unit diserahkan.

Critical Controls
- Hot Work Permit & fire watch untuk penggerindaan di dekat sistem bahan bakar/hidrolik.
- Ventilasi dan respirator sesuai jenis bahan cat.
- FOD check & tool count in–out terverifikasi sebelum test run.
- Area test run dibarikade dan bebas personel.
- Leak check dan pemeriksaan level fluida sebelum start pertama.

Required PPE
- Mandatory PPE: Safety helmet, safety glasses, safety shoes, coverall, sarung tangan kerja.
- Additional PPE: Face shield, respirator filter partikulat (gerinda) dan filter uap organik atau supplied air (pengecatan), goggles, sarung tangan tahan pelarut, apron kulit, ear plug, coverall sekali pakai.

Emergency Response
- Potensi Keadaan Darurat: Kebakaran uap pelarut, paparan berlebih pelarut, unit bergerak tak terkendali saat test run, semburan oli bertekanan.
- Respon Awal: Hentikan pekerjaan dan matikan sumber; pindahkan korban paparan pelarut ke udara segar dan rujuk medis; untuk unit lepas kendali aktifkan emergency stop dan jauhkan semua orang; padamkan api kecil dengan APAR sesuai kelas, evakuasi bila membesar.
- Peralatan Darurat yang Diperlukan: APAR kelas ABC & B, eyewash & safety shower, kotak P3K, spill kit, emergency stop, alat komunikasi.

Keterangan
Modul ini menutup rangkaian pekerjaan workshop excavator; hasil test run dan parameter yang tercatat menjadi dasar pernyataan unit laik operasi.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

# BAGIAN C — ARTICULATED DUMP TRUCK / HAULER (ADT)

## JSEA-ADT-01

Proses / Pekerjaan: Daily Walk Round Check (P2H) Sebelum Mengoperasikan atau Menyervis Unit ADT

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Memastikan unit diparkir lurus di tanah keras dan rata, bin turun, park brake aktif, dan memeriksa apakah ada tag "DO NOT OPERATE" pada kemudi | • (S) Unit sedang dalam perbaikan namun akan dioperasikan<br>• (S) Unit tidak stabil<br>• (E) Tidak Signifikan | • (S) Mengoperasikan unit rusak — kecelakaan<br>• (S) Unit meluncur<br>• (E) Tidak Signifikan | **Critical Control:** Bila tag DO NOT OPERATE terpasang, unit dilarang dioperasikan tanpa pengecualian.<br>**Administrative:** P2H dilakukan setiap awal shift dan setiap pergantian operator dalam shift; unit dicuci bersih sebelum pemeriksaan agar temuan terlihat.<br>**Engineering:** Chock block terpasang selama pemeriksaan.<br>**PPE:** Rompi reflektif. | OEM Manual (Daily Walk Round Check Before Operating / Check that a DO NOT OPERATE tag is not attached); Kepmen ESDM 1827 K/30/MEM/2018; PP No. 50/2012 |
| 2 | Membuka bonnet dan memeriksa lifting strut, pivot, restraining strap, kebocoran oli, kondisi & ketegangan belt alternator, serta wiring harness | • (S) Bonnet turun sendiri karena strut lemah<br>• (S) Komponen berputar bila engine hidup<br>• (H) Permukaan panas engine<br>• (E) Ceceran oli dari kebocoran | • (S) Tertimpa bonnet, terjerat belt/fan<br>• (H) Luka bakar termal<br>• (E) Pencemaran tanah | **Critical Control:** Engine mati saat memeriksa area engine; bila pemeriksaan harus dengan engine hidup, unit tidak boleh ditinggalkan dan operator wajib mendampingi personel servis.<br>**Engineering:** Penopang bonnet diverifikasi berfungsi sebelum masuk ke bawahnya.<br>**Administrative:** Larangan pakaian longgar & perhiasan; laporkan temuan kebocoran.<br>**PPE:** Sarung tangan, safety glasses. | OEM Manual (Daily Walk Round Check items 1–8 / The operator should assist the service personnel whenever the engine must be running); Permenaker No. 38/2016 |
| 3 | Memeriksa cooling pack, fin oil cooler & radiator, air cleaner, level oli engine, level coolant, dan menguras fuel/water separator | • (S) Fin tajam<br>• (H) Coolant panas bila engine belum dingin<br>• (H) Solar kontak kulit<br>• (E) Ceceran solar dari fuel/water separator | • (S) Luka sayat<br>• (H) Luka bakar, dermatitis<br>• (E) Pencemaran tanah | **Engineering:** Wadah penampung di bawah drain separator.<br>**Administrative:** Tutup radiator hanya dibuka saat dingin dan dikendurkan bertahap; larangan membersihkan fin dengan kawat keras.<br>**Environmental:** Solar hasil drain ke wadah B3.<br>**PPE:** Sarung tangan anti-potong & tahan kimia, goggles. | OEM Manual (Daily Walk Round Check items 9–16 / Inspect Cooling System); PP No. 22/2021 |
| 4 | Memeriksa suspension strut (kebocoran), sandwich block, silinder steering, transfer case (level & mounting), level hidrolik, dan sistem pelumasan/auto greaser | • (S) Kebocoran bertekanan pada strut & silinder<br>• (S) Bekerja di bawah/di sekitar komponen berat<br>• (H) Kontak oli & grease<br>• (E) Ceceran oli hidrolik & grease | • (S) Fluid injection injury, komponen gagal saat operasi<br>• (H) Dermatitis<br>• (E) Pencemaran | **Critical Control:** Deteksi kebocoran menggunakan kertas atau kayu, **tidak pernah dengan tangan**.<br>**Administrative:** Setiap kebocoran dicatat & dilaporkan; unit dengan kebocoran pada sistem rem, steering, atau suspensi tidak boleh dioperasikan.<br>**Environmental:** Drip tray & spill kit.<br>**PPE:** Sarung tangan nitril, goggles. | OEM Manual (When checking for leaks, use a piece of paper or wood, do not use your hands / items 17–24); Permenaker No. 37/2016 |
| 5 | Memeriksa kampas & disc park brake, axle & komponennya (trailing arm, stabiliser link, sandwich block), serta drive shaft assembly | • (S) Bekerja di kolong unit<br>• (S) Unit bergerak saat pemeriksaan<br>• (H) Postur telentang, debu<br>• (E) Debu asbes/friksi dari kampas rem (bila material lama) | • (S) Terlindas/tertimpa — fatality<br>• (H) MSD, iritasi saluran napas<br>• (E) Limbah B3 debu friksi | **Critical Control:** Chock block terpasang & park brake aktif sebelum masuk kolong; kunci dicabut.<br>**Engineering:** Creeper board; pencahayaan portabel.<br>**Administrative:** Debu kampas rem tidak ditiup dengan udara bertekanan — gunakan metode basah atau vakum HEPA.<br>**Environmental:** Debu friksi dikelola sebagai limbah B3.<br>**PPE:** Masker/respirator partikulat, goggles, sarung tangan. | OEM Manual (items 25–27); Permenaker No. 5/2018; PP No. 22/2021 |
| 6 | Memeriksa roda, mur roda, komponen rim, kondisi ban (sobek/rusak), dan tekanan ban dalam kondisi dingin | • (S) **Rim retak / komponen multi-piece rusak**<br>• (S) Ban bertekanan tinggi<br>• (S) Mur roda kendur<br>• (E) Tidak Signifikan | • (S) **Ledakan ban/rim — fatality**<br>• (S) Roda lepas saat unit berjalan<br>• (E) Tidak Signifikan | **Critical Control:** Rim dengan retak, deformasi, korosi berat, atau ring bengkok/terpuntir **wajib diafkir dan dimusnahkan, tidak boleh diperbaiki**; pengelasan atau modifikasi rim dilarang keras.<br>**Engineering:** Tekanan diukur dengan gauge terkalibrasi; posisi operator saat mengukur/mengisi sesuai posisi aman yang direkomendasikan.<br>**Administrative:** Tekanan dingin sesuai decal & disesuaikan terhadap suhu lingkungan; mur roda diverifikasi torsinya setelah penggantian roda pada jam operasi awal dan diperiksa berkala.<br>**PPE:** Safety glasses, sarung tangan. | OEM Manual (Wheels and Wheel Components / Identify a Damaged Rim or Wheel / Welding or modifying rims is strictly prohibited / Fastening of Wheel Nuts); OSHA 29 CFR 1910.177; Permenaker No. 8/2020 |
| 7 | Memeriksa level bahan bakar & DEF/AdBlue, membersihkan material mudah terbakar di area panas, memeriksa kaca, spion, lampu, reflektor, kondisi kabin, dan sabuk pengaman | • (S) **Penumpukan material mudah terbakar di area exhaust, turbo, dan heat shield**<br>• (S) Visibilitas buruk, blind spot<br>• (S) Sabuk pengaman rusak<br>• (H) DEF kontak kulit/mata<br>• (E) Ceceran DEF | • (S) **Kebakaran unit — fatality**<br>• (S) Tertabrak/menabrak akibat blind spot<br>• (S) Cedera fatal saat unit terguling tanpa sabuk pengaman<br>• (H) Iritasi kulit & mata<br>• (E) Pencemaran | **Critical Control:** Material mudah terbakar di sekitar exhaust, turbocharger, antara kabin dan cooler/silencer, serta di atas heat shield **wajib dibersihkan secara berkala**; heat shield dilepas oleh personel servis bila perlu untuk pembersihan menyeluruh. Sabuk pengaman rusak = unit tidak laik operasi.<br>**Engineering:** Kaca, spion, dan kamera mundur bersih dan disetel; APAR di unit dalam kondisi terpelihara.<br>**Administrative:** Cek blind spot & crush area sebelum berjalan; larangan mengoperasikan unit dengan lampu/alarm mundur mati.<br>**Environmental:** DEF tumpah dibilas air, tidak dibiarkan mengkristal.<br>**PPE:** Sarung tangan, goggles saat menangani DEF. | OEM Manual (items 28–38 / The build-up of combustible material on and around high heat areas must be removed on a regular basis / Always wear the seat belt); Permenakertrans No. 4/1980; Kepmen ESDM 1827 K/30/MEM/2018 |
| 8 | Memastikan tidak ada hambatan di sekitar unit dan di dalam kabin (terutama sekitar pedal), lalu melaporkan seluruh temuan | • (S) Benda lepas di kabin mengganggu pedal<br>• (S) Orang atau objek di sekitar unit saat unit mulai bergerak<br>• (E) Tidak Signifikan | • (S) Pedal tertahan — kehilangan kendali rem<br>• (S) Menabrak orang di blind spot — fatality<br>• (E) Tidak Signifikan | **Critical Control:** Kabin bersih dari barang lepas; walk around 360° sebelum unit bergerak; klakson sebagai tanda sebelum berjalan.<br>**Administrative:** Bila ditemukan cacat, unit tidak dioperasikan — pasang tag DO NOT OPERATE, cabut kunci, dan laporkan ke personel servis.<br>**PPE:** Rompi reflektif. | OEM Manual (If any defects are found, do not operate the machine. Attach the DO NOT OPERATE tag and remove the machine key); PP No. 50/2012 |

Additional Safety Tips
- Pemeriksaan dimulai dari sisi kiri unit dan berjalan searah jarum jam mengelilingi unit agar tidak ada bagian yang terlewat.
- Decal servis di sisi kabin mencantumkan jadwal perawatan dan membantu menemukan titik-titik pemeriksaan.
- Cuci unit sebelum P2H; retak, kebocoran, dan komponen kendur hampir mustahil terlihat pada unit yang tertutup lumpur.

Point of Concern
- Penumpukan material mudah terbakar di area panas adalah penyebab kebakaran unit yang paling umum dan paling mudah dicegah.
- Rim multi-piece yang retak dapat gagal tanpa peringatan; komponen yang salah pasang antar tipe rim dapat menyebabkan kecelakaan fatal saat pengisian angin.
- Temuan P2H yang tidak dilaporkan membuat cacat berpindah ke shift berikutnya tanpa ada yang menanganinya.

Common Mistakes
- Menandatangani formulir P2H tanpa benar-benar berkeliling unit — hindari dengan verifikasi acak oleh pengawas dan foto temuan.
- Mengoperasikan unit dengan temuan minor yang "masih bisa jalan" — hindari dengan kriteria defect kritis yang jelas dan wewenang stop work.
- Mengukur tekanan ban saat panas lalu menurunkannya — hindari dengan aturan pengukuran pada kondisi dingin dan penyesuaian terhadap suhu lingkungan.

Golden Rules
- Unit dengan tag DO NOT OPERATE tidak pernah dioperasikan.
- Cacat pada sistem rem, steering, ban/rim, atau sabuk pengaman berarti unit berhenti beroperasi.
- Walk around 360° sebelum unit bergerak, setiap kali.

Critical Controls
- P2H terdokumentasi dan ditandatangani setiap awal shift dan pergantian operator.
- Pembersihan material mudah terbakar di area panas.
- Verifikasi kondisi rim, ban, tekanan, dan torsi mur roda.
- Sabuk pengaman berfungsi dan digunakan.
- Mekanisme pelaporan dan penanganan temuan yang berjalan.

Required PPE
- Mandatory PPE: Safety helmet, safety glasses, safety shoes, coverall, sarung tangan kerja, rompi reflektif.
- Additional PPE: Sarung tangan anti-potong & tahan kimia, respirator partikulat (area kampas rem), goggles.

Emergency Response
- Potensi Keadaan Darurat: Kebakaran unit, ledakan ban/rim, unit meluncur, terjatuh saat naik-turun unit.
- Respon Awal: Untuk kebakaran, bila situasi memungkinkan pindahkan unit dari area berbahaya, matikan engine, tinggalkan kabin, lalu padamkan dengan APAR dan hubungi tim pemadam; jangan mendekati ban yang terbakar atau panas berlebih karena berisiko meledak.
- Peralatan Darurat yang Diperlukan: APAR terpelihara di unit, kotak P3K, alat komunikasi/radio, chock block.

Keterangan
P2H bukan sekadar administrasi; daftar 38 item pemeriksaan pada OEM Manual adalah rangkaian kontrol yang menutup bahaya mulai dari kebakaran, kegagalan rem, hingga ledakan ban.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

## JSEA-ADT-02

Proses / Pekerjaan: Menghidupkan Engine, Mematikan Engine, dan Jump Start dengan Booster Battery

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Naik ke kabin melalui tangga & handrail, menyetel kursi dan kemudi, memasang sabuk pengaman | • (S) Terpeleset saat naik<br>• (H) Postur duduk tidak sesuai, getaran seluruh tubuh<br>• (E) Tidak Signifikan | • (S) Jatuh dari ketinggian akses<br>• (H) Nyeri punggung, paparan whole body vibration berlebih<br>• (E) Tidak Signifikan | **Critical Control:** Three point contact; sabuk pengaman wajib terpasang sebelum start.<br>**Engineering:** Kursi suspensi disetel sesuai berat badan operator untuk mengurangi paparan getaran; comfort ride diaktifkan bila tersedia.<br>**Administrative:** Penyetelan kursi & kemudi sebelum unit bergerak, tidak sambil berjalan; pemantauan durasi paparan getaran harian.<br>**PPE:** Safety shoes anti-slip. | OEM Manual (Mounting and Dismounting Machine / Use Seat Belt / Human Vibration); Permenaker No. 5/2018 (NAB getaran); ISO 2631; ISO 2867 |
| 2 | Memastikan transmisi netral, park brake aktif, area sekitar bebas orang, lalu menyalakan engine dari kursi operator | • (S) Unit bergerak saat start<br>• (S) Orang berada di area blind spot<br>• (H) Gas buang di area tertutup<br>• (E) Emisi gas buang | • (S) Unit bergerak menabrak/melindas — fatality<br>• (H) Keracunan CO<br>• (E) Pencemaran udara | **Critical Control:** **Start hanya dari kursi operator** — dilarang keras menyalakan unit dengan menghubung-singkat terminal starter atau sambil berdiri di tanah; engine tidak dapat distart bila transmisi tidak netral.<br>**Engineering:** Interlock transmisi netral; ventilasi memadai bila di dalam ruangan.<br>**Administrative:** Bunyikan klakson sebagai tanda sebelum start; pastikan area bebas.<br>**PPE:** — | OEM Manual (**Do not start the machine by shorting across starter terminals. Never start the machine while standing on the ground. Always start machine from operator's seat**); Permenaker No. 38/2016; Permenaker No. 5/2018 |
| 3 | Memeriksa Daily Service Information / peringatan servis pada display dan memanaskan engine | • (S) Peringatan servis diabaikan<br>• (H) Kebisingan kabin<br>• (E) Emisi & konsumsi BBM dari idling berlebihan | • (S) Unit dioperasikan melewati jadwal servis — kegagalan komponen<br>• (H) NIHL<br>• (E) Pemborosan BBM & emisi | **Administrative:** Peringatan servis dicatat dan ditindaklanjuti; larangan excessive engine idling — matikan engine bila berhenti lama; catat & laporkan fault code.<br>**Engineering:** Kabin tertutup untuk peredaman kebisingan.<br>**Environmental:** Kebijakan anti-idling.<br>**PPE:** — | OEM Manual (Check Daily Service Information / Excessive Engine Idling); ISO 14001:2015; Permenaker No. 5/2018 |
| 4 | Menggunakan booster battery untuk jump start bila baterai lemah | • (S) **Gas hidrogen dari baterai — mudah meledak**<br>• (S) Percikan saat menyambung kabel<br>• (S) Korsleting arus tinggi<br>• (H) **Elektrolit asam sulfat**<br>• (E) Baterai bekas = limbah B3 | • (S) **Ledakan baterai — cedera mata & luka bakar kimia berat**<br>• (S) Arc flash, kebakaran<br>• (H) Luka bakar asam pada mata & kulit<br>• (E) Pencemaran asam & logam berat | **Critical Control:** Hindari jump starting bila memungkinkan — gunakan pengisian baterai (charging) atau penggantian baterai sebagai metode yang lebih aman. Bila terpaksa: sambungkan kabel positif ke positif lebih dulu, dan **sambungan negatif terakhir dilakukan pada titik massa (ground) rangka yang jauh dari baterai, bukan pada terminal negatif baterai** — agar percikan terjadi jauh dari gas hidrogen. Pelepasan dilakukan dengan urutan terbalik.<br>**Engineering:** Kabel jumper berukuran memadai dengan isolasi utuh; ventilasi baik.<br>**Administrative:** Dilarang api terbuka, percikan, atau merokok; jangan menyandarkan tubuh di atas baterai saat menyambung; verifikasi tegangan sistem booster sama dengan unit.<br>**Environmental:** Baterai bekas ke TPS Limbah B3 berizin.<br>**PPE:** **Face shield + goggles wajib**, sarung tangan tahan asam, apron. | OEM Manual (Using Booster Batteries / Avoid Jump Starting / Prevent Battery Explosions and Acid Burns); Permenaker No. 12/2015; PP No. 22/2021 |
| 5 | Menguji fungsi rem, steering, emergency steering, lampu, klakson, dan alarm mundur sebelum unit bergerak | • (S) Sistem rem atau steering tidak berfungsi<br>• (S) Uji dilakukan di area dengan orang/objek di sekitar<br>• (E) Tidak Signifikan | • (S) Kehilangan kendali unit — fatality<br>• (E) Tidak Signifikan | **Critical Control:** Uji rem dan emergency steering dilakukan di area datar, luas, dan bebas; unit tidak dioperasikan bila salah satu gagal.<br>**Administrative:** Uji sesuai prosedur OEM; catat hasil; laporkan kegagalan dan pasang tag DO NOT OPERATE.<br>**PPE:** — | OEM Manual (Brake Test / Testing Emergency Steering); Kepmen ESDM 1827 K/30/MEM/2018; Permenaker No. 38/2016 |
| 6 | Mematikan engine: menurunkan bin, transmisi netral, park brake aktif, idle turun, lalu shut down dan cabut kunci | • (S) Engine dimatikan mendadak dari putaran tinggi<br>• (S) Unit ditinggalkan tanpa park brake<br>• (H) Permukaan panas<br>• (E) Emisi | • (S) Kerusakan turbo, unit meluncur setelah ditinggalkan<br>• (H) Luka bakar<br>• (E) Pencemaran udara | **Critical Control:** Bin diturunkan ke chassis, transmisi netral, park brake aktif, dan kunci dicabut sebelum meninggalkan kabin.<br>**Administrative:** Prosedur cooling down sebelum shut down; battery isolator OFF bila unit ditinggalkan lama; kunci kabin.<br>**PPE:** — | OEM Manual (Shutting Down Engine / Leaving Machine / Crime Prevention Tips); PP No. 50/2012 |

Additional Safety Tips
- Sambungan negatif terakhir pada jump start selalu dibuat di titik massa rangka yang jauh dari baterai agar percikan tidak terjadi di dekat gas hidrogen.
- Baterai yang beku atau tampak menggembung tidak boleh di-jump start; risiko ledakannya sangat tinggi.
- Uji emergency steering secara berkala sesuai jadwal, bukan hanya saat dicurigai bermasalah.

Point of Concern
- Menyalakan unit dengan menghubung-singkat terminal starter sambil berdiri di tanah adalah penyebab kecelakaan fatal klasik karena unit dapat langsung bergerak menggilas operator.
- Gas hidrogen tidak berbau dan terkumpul di ruang baterai; satu percikan cukup untuk memicu ledakan yang menyemburkan asam.
- Peringatan servis yang terus diabaikan mengakumulasi risiko kegagalan komponen kritis seperti rem dan steering.

Common Mistakes
- Menyambungkan kabel negatif jumper langsung ke terminal negatif baterai lemah — hindari dengan menyambungkan ke titik massa rangka yang jauh dari baterai.
- Menyalakan unit dari tanah menggunakan obeng pada solenoid starter — hindari dengan aturan mutlak start hanya dari kursi operator.
- Menyetel kursi atau spion sambil unit berjalan — hindari dengan menyelesaikan seluruh penyetelan sebelum unit bergerak.

Golden Rules
- Unit hanya dinyalakan dari kursi operator.
- Sabuk pengaman terpasang sebelum engine dinyalakan.
- Unit tidak pernah ditinggalkan tanpa bin turun, park brake aktif, dan kunci dicabut.

Critical Controls
- Interlock transmisi netral berfungsi.
- Sabuk pengaman berfungsi dan digunakan.
- Prosedur jump start dengan sambungan negatif di titik massa jauh dari baterai.
- Uji fungsi rem, steering, dan emergency steering sebelum unit beroperasi.
- Face shield & sarung tangan tahan asam saat pekerjaan baterai.

Required PPE
- Mandatory PPE: Safety helmet, safety glasses, safety shoes anti-slip, coverall, sarung tangan kerja, rompi reflektif.
- Additional PPE: Face shield, goggles, sarung tangan tahan asam, apron (pekerjaan baterai).

Emergency Response
- Potensi Keadaan Darurat: Ledakan baterai, luka bakar asam, unit bergerak saat start, kebakaran kelistrikan.
- Respon Awal: Bilas mata dan kulit yang terkena asam dengan air mengalir minimal 15 menit dan rujuk medis; putuskan isolator baterai pada kebakaran kelistrikan lalu padamkan dengan APAR kelas yang sesuai; jauhkan semua orang dari unit yang bergerak tak terkendali.
- Peralatan Darurat yang Diperlukan: Eyewash & safety shower, kotak P3K, APAR, alat komunikasi.

Keterangan
Jump start adalah pekerjaan berisiko tinggi yang sering dianggap rutin; OEM Manual secara eksplisit menyarankan menghindarinya bila ada alternatif lain.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

## JSEA-ADT-03

Proses / Pekerjaan: Pengoperasian Unit ADT — Berjalan di Haul Road, Operasi di Lereng, Pemuatan, dan Penumpahan (Tipping)

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Memeriksa aturan site: batas tinggi, lebar, berat, rute yang boleh dilalui, batas kecepatan, dan aturan K3 setempat | • (S) Rute tidak sesuai kapasitas unit<br>• (S) Jembatan/jalan tidak kuat menahan beban<br>• (S) Jaringan listrik udara & terowongan rendah<br>• (E) Kerusakan jalan & badan air | • (S) Unit terperosok/roboh bersama struktur jalan — fatality<br>• (S) Kontak dengan jaringan listrik<br>• (E) Erosi & sedimentasi | **Critical Control:** Verifikasi batas tinggi, lebar, dan berat sebelum beroperasi di rute baru; jarak aman terhadap jaringan listrik udara dipatuhi.<br>**Administrative:** Traffic Management Plan & peta rute; induksi rute; batas kecepatan site.<br>**Engineering:** Rambu, delineator, dan bund pada rute.<br>**PPE:** — | OEM Manual (On Site Safety / Always check height, width and weight restrictions); Kepmen ESDM 1827 K/30/MEM/2018; Permenaker No. 12/2015 |
| 2 | Menyetel spion & kamera mundur, memeriksa blind spot dan crush area sebelum unit berjalan | • (S) Blind spot di sekeliling unit besar<br>• (S) Pejalan kaki / kendaraan ringan di area manuver<br>• (E) Tidak Signifikan | • (S) Melindas pekerja atau kendaraan ringan — fatality<br>• (E) Tidak Signifikan | **Critical Control:** Walk around 360° dan pemeriksaan crush area (zona artikulasi) sebelum berjalan; kamera mundur & alarm mundur berfungsi.<br>**Engineering:** Spion & kamera bersih dan disetel; proximity detection bila tersedia.<br>**Administrative:** Positive communication dengan pejalan kaki & kendaraan ringan; aturan pemisahan pejalan kaki dari area operasi unit.<br>**PPE:** Rompi reflektif untuk semua orang di area operasi. | OEM Manual (Check that the mirrors and camera are correctly positioned / Check any blind spots, especially the crush area / Avoid Reversing Accidents); ICMM Vehicle Interaction |
| 3 | Berjalan di haul road: mengatur kecepatan sesuai kondisi jalan, muatan, dan jarak pandang; menjaga jarak antar unit | • (S) Kecepatan berlebih untuk kondisi jalan<br>• (S) Jarak antar unit terlalu dekat<br>• (S) Debu & hujan menurunkan jarak pandang<br>• (H) Getaran seluruh tubuh & kebisingan<br>• (E) Debu jalan, emisi | • (S) Tabrakan beruntun, unit keluar jalur — fatality<br>• (H) Whole body vibration, NIHL, fatigue<br>• (E) Pencemaran udara | **Critical Control:** **Jarak aman minimal 5 meter dari unit di depan, termasuk saat mengantre** — dilarang membuntuti (tailgating); kecepatan disesuaikan dengan kondisi jalan, muatan, dan visibilitas serta tidak melebihi batas site.<br>**Engineering:** Penyiraman jalan untuk pengendalian debu; suspensi & comfort ride berfungsi.<br>**Administrative:** Beri jalan kepada unit bermuatan; larangan menghalangi ramp; larangan berbelok tajam ke posisi full lock; pemantauan fatigue & rotasi operator.<br>**PPE:** — | OEM Manual (never "tailgate" — keep a distance of 5 metres / Adapt the machine speed to road conditions / Always give way to loaded vehicle / Never obstruct ramps / Avoid steering hard stops); Kepmen ESDM 1827 K/30/MEM/2018; Permenaker No. 5/2018 |
| 4 | Beroperasi di lereng: naik dan turun tanjakan, penggunaan retarder & engine brake, hill assist | • (S) Unit kehilangan traksi / meluncur di turunan<br>• (S) Transmisi "gear hunting" di tanjakan<br>• (S) Rem panas berlebih (brake fade) di turunan panjang<br>• (S) Batas gradien menurun pada ketinggian (altitude)<br>• (E) Tidak Signifikan | • (S) Unit lepas kendali di turunan — fatality<br>• (S) Unit terguling ke samping di lereng miring<br>• (E) Tidak Signifikan | **Critical Control:** Gunakan retarder dan engine brake sebagai pengendali kecepatan utama di turunan, bukan rem servis; pilih gigi rendah sebelum memasuki turunan, bukan setelah; jangan memindahkan transmisi ke netral saat menuruni lereng.<br>**Engineering:** Range hold / gear hold untuk mencegah gear hunting; IDL (inter axle diff lock) dan ATC digunakan sesuai kondisi traksi.<br>**Administrative:** Batasan gradien maksimum sesuai tabel OEM per model **dan disesuaikan terhadap ketinggian lokasi** (kemampuan gradien menurun pada altitude tinggi); larangan berbelok di lereng curam; kecepatan turun lereng dibatasi site.<br>**PPE:** Sabuk pengaman wajib. | OEM Manual (Operating on Slopes / Uphill & Downhill Operation / Gear Hunting / Retarders / Gradient Values at Altitude); Kepmen ESDM 1827 K/30/MEM/2018 |
| 5 | Proses pemuatan (loading) oleh excavator atau loader | • (S) Material jatuh dari bucket ke kabin<br>• (S) Unit pemuat berayun di atas kabin ADT<br>• (S) Overload melebihi kapasitas<br>• (H) Kebisingan & getaran benturan material<br>• (E) Tumpahan material di jalur | • (S) Tertimpa material — fatality<br>• (S) Unit tidak stabil & kegagalan komponen akibat overload<br>• (H) NIHL<br>• (E) Ceceran material di haul road | **Critical Control:** **Dilarang melintas atau berada di bawah bucket alat pemuat**; operator tetap di dalam kabin ber-ROPS/FOPS selama pemuatan; bila harus turun, amati pemuatan dari tempat aman yang telah ditentukan.<br>**Engineering:** Sistem On-Board Weighing (OBW) untuk mencegah overload; ROPS/FOPS utuh & tidak dimodifikasi.<br>**Administrative:** Positive communication dengan operator pemuat sebelum masuk & keluar posisi muat; batas muatan tidak dilampaui — overload memicu limp mode; jangan berkerumun di area pemuatan.<br>**PPE:** — | OEM Manual (Never attempt to go under the bucket of a loader, observe the loading in a safe place / Overloading Limp Mode / Loading The Machine); ISO 3471; ISO 3449 |
| 6 | Berjalan menuju area tipping dan memposisikan unit | • (S) Tepi tanggul (bund) tidak memadai<br>• (S) Tanah lunak/amblas di area dumping<br>• (S) Banyak unit tipping bersamaan<br>• (E) Tidak Signifikan | • (S) Unit terjun dari tepi disposal — fatality<br>• (S) Tabrakan antar unit di area tipping<br>• (E) Tidak Signifikan | **Critical Control:** Patuhi jarak dari tepi (edge) sesuai aturan site dan tanggul pengaman; ikuti arahan banksman/spotter; **jangan berkerumun dengan unit lain di area tipping — tunggu sampai aman dan bebas**.<br>**Engineering:** Bund/tanggul dengan tinggi sesuai standar; penerangan area dumping.<br>**Administrative:** Aturan antre & satu unit tipping pada satu waktu per titik; inspeksi kondisi area disposal secara berkala.<br>**PPE:** — | OEM Manual (Obey all site rules, ie, distance from edge, obey banksman / Do not crowd machines working at the tipping site); Kepmen ESDM 1827 K/30/MEM/2018 |
| 7 | Menaikkan bin dan menumpahkan muatan (tipping) | • (S) **Unit terguling saat bin terangkat**, terutama bila unit tidak lurus atau tanah tidak rata<br>• (S) Material menempel/membeku di bin menyebabkan beban tidak turun serentak<br>• (S) Benda menggantung / jaringan listrik di atas<br>• (E) Debu penumpahan | • (S) **Unit terguling ke samping — fatality**<br>• (S) Kontak bin dengan jaringan listrik<br>• (E) Pencemaran debu | **Critical Control:** **Kabin dan bin harus dalam satu garis lurus saat tipping** untuk mengurangi kemungkinan terguling; badan unit sedatar mungkin — bila tidak, posisi unit disesuaikan lebih dulu; pastikan tidak ada objek di atas yang mengganggu pergerakan bin.<br>**Engineering:** Reverse bin scrape protection; indikator posisi bin.<br>**Administrative:** Tipping pada tanah padat & rata; jangan menaikkan bin di lereng melintang; hentikan tipping bila unit terasa miring atau tidak stabil.<br>**PPE:** Sabuk pengaman tetap terpasang. | OEM Manual (To avoid the likelihood of turnover keep the ADT cab and body in a straight line, wherever possible, when tipping. Ensure the body is as horizontal as possible / Loading and Tipping); ISO 3471 |
| 8 | Menurunkan bin dan meninggalkan area tipping | • (S) **Unit berjalan dengan bin masih terangkat**<br>• (S) Bin menghantam struktur saat diturunkan<br>• (E) Tidak Signifikan | • (S) **Unit terguling atau bin menabrak struktur/jaringan listrik — fatality**<br>• (E) Tidak Signifikan | **Critical Control:** **Dilarang keras menjalankan unit dengan bin dalam posisi terangkat (UP/TIP)**; verifikasi bin sudah turun penuh ke chassis melalui indikator dan pemeriksaan visual sebelum bergerak.<br>**Engineering:** Interlock/alarm posisi bin bila tersedia.<br>**Administrative:** Kebiasaan verifikasi indikator bin sebagai bagian dari siklus kerja.<br>**PPE:** — | OEM Manual (**Do not drive machine with the bin in the UP/TIP position**); Kepmen ESDM 1827 K/30/MEM/2018 |
| 9 | Beroperasi dalam ruangan atau area tertutup, serta operasi malam/cuaca buruk | • (H) Gas buang terakumulasi<br>• (S) Jarak pandang rendah (kabut, hujan, debu, malam)<br>• (E) Emisi terkonsentrasi | • (H) Keracunan CO — fatality<br>• (S) Tabrakan akibat visibilitas rendah<br>• (E) Pencemaran udara ruang kerja | **Critical Control:** Ventilasi memadai wajib sebelum menyalakan engine di dalam ruangan; sistem HVAC kabin **tidak dirancang untuk menyaring gas beracun** dan tidak boleh diandalkan sebagai perlindungan.<br>**Engineering:** Exhaust extraction; lampu kerja & penerangan area memadai.<br>**Administrative:** Weather monitoring; hentikan operasi bila jarak pandang di bawah batas site; gunakan hanya elemen filter ventilasi yang disetujui.<br>**PPE:** — | OEM Manual (Operating Indoors / The design intent of the HVAC system on this machine is not to filter toxic gases / Beware of Toxic Fumes); Permenaker No. 5/2018 |

Additional Safety Tips
- Kemampuan menanjak dan menuruni lereng menurun seiring bertambahnya ketinggian lokasi; nilai gradien pada manual harus dibaca sesuai altitude area kerja.
- Parkir mundur setiap kali memungkinkan; ini memudahkan perawatan dan mengurangi manuver mundur berisiko.
- Trainer atau penumpang hanya boleh berada di unit yang dilengkapi trainer seat dan dengan persetujuan manajemen site.

Point of Concern
- Terguling saat tipping adalah salah satu mekanisme kecelakaan fatal paling khas pada ADT dan hampir selalu berkaitan dengan unit tidak lurus, tanah tidak rata, atau material menempel di bin.
- Menjalankan unit dengan bin terangkat, meski hanya beberapa meter untuk "membuang sisa", adalah pelanggaran yang berulang menyebabkan kecelakaan berat.
- Rem servis yang dipakai terus-menerus di turunan panjang akan mengalami penurunan daya pengereman; retarder adalah kontrol utamanya.

Common Mistakes
- Membuntuti unit di depan saat mengantre di area pemuatan — hindari dengan penegakan jarak minimal 5 meter termasuk dalam antrean.
- Menaikkan bin untuk melepas material yang menempel sambil unit bergerak perlahan — hindari dengan berhenti total dan menggunakan metode pembersihan bin yang aman.
- Memindahkan transmisi ke netral di turunan untuk menghemat bahan bakar — hindari dengan aturan gigi rendah dan retarder aktif.

Golden Rules
- Sabuk pengaman selalu terpasang saat mengoperasikan unit.
- Unit tidak pernah berjalan dengan bin terangkat.
- Tidak pernah berada atau melintas di bawah bucket alat pemuat.

Critical Controls
- Jarak aman minimal 5 meter antar unit ditegakkan.
- Posisi unit lurus dan tanah rata sebelum bin dinaikkan.
- Verifikasi bin turun penuh sebelum unit bergerak.
- Retarder/engine brake dan gigi rendah dipilih sebelum memasuki turunan.
- Batas muatan (OBW) tidak dilampaui.

Required PPE
- Mandatory PPE: Safety helmet, safety glasses, safety shoes, coverall, rompi reflektif (saat di luar kabin).
- Additional PPE: Masker debu di area berdebu, ear plug saat berada di luar kabin dekat unit beroperasi.

Emergency Response
- Potensi Keadaan Darurat: Unit terguling, unit lepas kendali di turunan, tabrakan antar unit, kebakaran unit, unit terjun dari tepi disposal.
- Respon Awal: Tetap di dalam kabin dengan sabuk pengaman terpasang bila unit terguling — jangan melompat keluar; setelah berhenti gunakan emergency exit bila pintu tidak dapat dibuka; aktifkan emergency stop; hubungi ERT via radio dan sebutkan lokasi presisi.
- Peralatan Darurat yang Diperlukan: APAR di unit, emergency exit (kaca pemecah/palu), radio komunikasi, kotak P3K, akses MEDEVAC.

Keterangan
Modul ini adalah modul operasional; namun teknisi field service yang melakukan uji jalan (test drive) setelah perbaikan tunduk pada seluruh kontrol dalam modul ini.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

## JSEA-ADT-04

Proses / Pekerjaan: Menaikkan / Menurunkan Bin, Pemasangan Bin Prop dan Over Centre Bin Lock, serta Pengangkatan Bin

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Memastikan bin kosong dan unit diparkir lurus pada tanah keras & rata sebelum bin dinaikkan untuk perawatan | • (S) **Bin masih berisi material saat prop dipasang**<br>• (S) Unit tidak stabil<br>• (S) Objek menggantung di atas jalur bin<br>• (E) Tumpahan sisa material | • (S) **Bin prop patah karena kelebihan beban — bin jatuh, fatality**<br>• (S) Bin menabrak objek di atas<br>• (E) Ceceran material | **Critical Control:** **Bin prop hanya dirancang untuk menahan bin kosong** — bin wajib kosong sepenuhnya sebelum prop dipasang; **transmisi wajib netral sebelum bin prop dipasang**; area di atas unit dipastikan bebas dari objek yang dapat mengganggu gerakan bin.<br>**Administrative:** Park brake aktif; posisi unit lurus; verifikasi kondisi bin kosong secara visual.<br>**PPE:** APD dasar, helm. | OEM Manual (**The bin prop is dimensioned for an empty bin, thus the bin must be empty before engaging the bin prop. Ensure that the transmission is in neutral before engaging the bin prop** / Ensure that the machine is parked on level ground and away from any overhead objects); ISO 12100:2010 |
| 2 | Menaikkan bin cukup tinggi, memutar bin prop ke atas hingga bertumpu pada travel stop | • (S) Bin bergerak saat teknisi berada di zona jepit<br>• (S) Prop berat & sulit diputar<br>• (H) Postur mengangkat & mendorong<br>• (E) Tidak Signifikan | • (S) Terjepit antara bin dan chassis — fatality<br>• (H) Cedera punggung & bahu<br>• (E) Tidak Signifikan | **Critical Control:** **Operator wajib berada di dalam kabin mengendalikan gerakan bin** selama prop dipasang; komunikasi positif dua arah antara operator dan pemasang prop; teknisi tidak boleh berada di jalur jatuh bin.<br>**Engineering:** Alat bantu bergagang panjang untuk memutar prop bila berat.<br>**Administrative:** Aba-aba baku; satu orang pemberi aba-aba.<br>**PPE:** Sarung tangan, helm. | OEM Manual (An operator is required to control bin motion from inside the cab / Engaging the Bin Prop); OSHA 29 CFR 1910.147 |
| 3 | Menurunkan bin perlahan hingga duduk pada bin prop dan memastikan prop terduduk aman di dalam locating ring | • (S) Prop meleset dari locating ring<br>• (S) Beban kejut pada prop akibat penurunan terlalu cepat<br>• (E) Tidak Signifikan | • (S) **Prop terlepas / patah — bin jatuh menimpa pekerja di bawahnya, fatality**<br>• (E) Tidak Signifikan | **Critical Control:** **Turunkan bin dengan putaran engine dibatasi dan kecepatan turun dikurangi** saat mendekati titik tumpu agar gaya kejut pada prop minimal; **verifikasi visual bahwa prop benar-benar duduk di dalam locating ring sebelum siapa pun berada di bawah bin**; operasikan bin naik-turun 3 kali untuk memastikan berat bin benar-benar bertumpu pada prop.<br>**Engineering:** Lock-out device dipasang pada bin prop dan digembok.<br>**Administrative:** Verifikasi oleh orang kedua; tag DO NOT OPERATE di kemudi.<br>**PPE:** Helm. | OEM Manual (**Always check to ensure that the bin prop is located securely within the locating ring on the bottom of the bin before allowing any personnel underneath the bin** / operate bin-up and bin-down 3 times to ensure that the weight of the bin is securely settled onto the bin prop / Bin Prop Lock-Out point); OSHA 29 CFR 1910.147 |
| 4 | Memasang Over Centre Bin Up Lock untuk bin pada posisi tip maksimum | • (S) Bin pada posisi tip penuh — pusat berat tinggi<br>• (S) Bekerja di ketinggian untuk memasang lock<br>• (E) Tidak Signifikan | • (S) Bin turun mendadak, unit tidak stabil<br>• (S) Jatuh dari ketinggian<br>• (E) Tidak Signifikan | **Critical Control:** Lock dipasang hanya pada posisi tip maksimum sesuai prosedur OEM dan digembok pada lock-out point; verifikasi lock terkunci sebelum bekerja di bawahnya.<br>**Engineering:** Platform/tangga akses; unit pada tanah rata & padat.<br>**Administrative:** Two-Man Rule dengan operator di kabin; angin kencang menjadi alasan menunda pekerjaan.<br>**PPE:** Body harness bila bekerja di ketinggian tanpa pagar. | OEM Manual (Activating the Over Centre Bin Up Lock / Over Centre Bin Lock, Lock-Out point); Permenaker No. 9/2016 |
| 5 | Bekerja di bawah bin yang tertahan prop / lock | • (S) **Bin hanya tertahan silinder hidrolik**<br>• (S) Gerakan tak sengaja pada kontrol bin<br>• (H) Postur kerja di bawah struktur<br>• (E) Ceceran oli | • (S) **Bin turun menimpa pekerja — fatality**<br>• (H) MSD<br>• (E) Pencemaran | **Critical Control:** **Dilarang keras bekerja pada sistem hidrolik atau berada di bawah bin bila bin hanya ditopang silinder hidrolik**; bin wajib bertumpu pada chassis atau pada bin prop/bin lock yang telah digembok.<br>**Administrative:** LOTO penuh (isolator, bin prop, cab tilt bila relevan); tag DO NOT OPERATE; verifikasi personel sebelum melepas prop.<br>**PPE:** Helm, safety glasses. | OEM Manual (**Always ensure that the bin is either resting on the chassis or on the bin pole... Never work on the hydraulic system if the bin is only supported by the hydraulic cylinders**); Permenaker No. 8/2020 |
| 6 | Menurunkan bin setelah pekerjaan: melepas lock-out, menaikkan bin, mengembalikan prop ke posisi simpan, menurunkan bin ke chassis | • (S) Prop mengayun saat dikembalikan<br>• (S) Bin turun saat teknisi masih di zona jepit<br>• (E) Tidak Signifikan | • (S) Terjepit / tertimpa prop atau bin — fatality<br>• (E) Tidak Signifikan | **Critical Control:** Semua personel keluar dari zona bin sebelum bin diturunkan; gembok dilepas hanya oleh pemasangnya; konfirmasi verbal area bebas.<br>**Administrative:** Urutan pembalikan prosedur diikuti; satu pemberi aba-aba.<br>**PPE:** Sarung tangan, helm. | OEM Manual (Disengaging the Bin Prop); OSHA 29 CFR 1910.147 |
| 7 | Prosedur penurunan bin setelah kegagalan engine / pompa hidrolik | • (S) Bin turun tak terkendali tanpa tenaga hidrolik<br>• (S) Energi potensial bin besar<br>• (E) Ceceran oli | • (S) Bin jatuh bebas menimpa pekerja/struktur — fatality<br>• (E) Pencemaran | **Critical Control:** Ikuti prosedur penurunan bin darurat sesuai OEM; area di bawah dan sekitar bin dibarikade dan dikosongkan total sebelum prosedur dimulai; hanya personel kompeten yang melaksanakan.<br>**Administrative:** Briefing khusus sebelum prosedur; komunikasi ke seluruh area.<br>**PPE:** APD lengkap. | OEM Manual (Bin Lowering Procedure After Engine/Pump Failure); ISO 12100:2010 |
| 8 | Mengangkat bin dengan alat angkat untuk pelepasan / penggantian | • (S) **Bin berbobot ±3.100–5.450 kg tergantung model**<br>• (S) Sudut rigging melebihi batas<br>• (S) Titik berat bin tidak di tengah rigging<br>• (E) Tidak Signifikan | • (S) Bin jatuh/berayun — fatality<br>• (E) Tidak Signifikan | **Critical Control:** Gunakan **sling empat elemen** yang dipasang **hanya pada titik angkat bin yang ditetapkan**; **jangan pernah melebihi sudut rigging maksimum** yang ditentukan; **dilarang memasang soft sling langsung pada titik angkat bin**; pusat rigging tepat di atas titik berat bin sesuai data COG pada OEM Manual.<br>**Engineering:** Alat angkat dengan SWL memadai; spreader bar bila perlu.<br>**Administrative:** Angkat bertahap tanpa hentakan — hentakan menimbulkan beban tinggi pada rigging dan struktur bin; gerakkan dan turunkan bin perlahan untuk meminimalkan ayunan dan kerusakan pada guide mounting plate & pivot boss.<br>**PPE:** Helm bertali dagu, sarung tangan. | OEM Manual (**Large Truck Bin Lifting** — four element sling, lifting points, maximum rigging angles, bin COG data, approximate bin mass); Permenaker No. 8/2020; ASME B30.9 |

Additional Safety Tips
- Bin prop dan over centre bin lock adalah penopang mekanis, bukan pengaman tambahan — keduanya harus digembok pada lock-out point resmi.
- Material yang menempel atau membeku di dalam bin menambah beban jauh melebihi asumsi desain prop; bersihkan bin sepenuhnya sebelum memasang prop.
- Operasikan bin naik-turun tiga kali setelah prop terpasang untuk memastikan berat bin benar-benar duduk pada prop.

Point of Concern
- Bin yang ditopang hanya oleh silinder hidrolik dapat turun karena kebocoran internal valve tanpa peringatan apa pun.
- Bin prop yang tidak duduk di dalam locating ring dapat meleset saat unit sedikit bergerak atau saat pekerjaan menimbulkan getaran.
- Bobot bin beberapa ton membuat setiap kesalahan rigging berakhir katastropik.

Common Mistakes
- Memasang bin prop pada bin yang masih menyisakan material — hindari dengan pemeriksaan visual bin kosong sebagai syarat mutlak.
- Menurunkan bin ke prop dengan putaran engine tinggi — hindari dengan membatasi putaran engine dan menurunkan bin secara lembut.
- Memasang soft sling langsung ke titik angkat bin — hindari dengan menggunakan konfigurasi sling empat elemen sesuai instruksi OEM.

Golden Rules
- Bin harus kosong sebelum bin prop dipasang.
- Tidak seorang pun berada di bawah bin yang hanya ditopang silinder hidrolik.
- Bin prop dan bin lock selalu digembok pada lock-out point.

Critical Controls
- Verifikasi bin kosong dan transmisi netral sebelum prop dipasang.
- Verifikasi visual prop duduk di dalam locating ring, dikonfirmasi orang kedua.
- Lock-out device dan gembok terpasang pada bin prop / bin lock.
- Operator berada di kabin mengendalikan bin selama pemasangan prop.
- Rigging empat titik pada lifting point resmi dengan sudut sesuai batas untuk pengangkatan bin.

Required PPE
- Mandatory PPE: Safety helmet bertali dagu, safety glasses, safety shoes toe cap, coverall, sarung tangan kerja.
- Additional PPE: Body harness bila bekerja di ketinggian, rompi reflektif.

Emergency Response
- Potensi Keadaan Darurat: Bin jatuh, pekerja terjepit di bawah bin, prop patah.
- Respon Awal: Hentikan seluruh gerakan; **jangan mencoba menaikkan bin untuk membebaskan korban tanpa memastikan sistem hidrolik berfungsi dan penopang baru terpasang**; aktifkan ERT dan tim penyelamat.
- Peralatan Darurat yang Diperlukan: Kotak P3K, spine board, alat angkat/penopang darurat, alat komunikasi, akses MEDEVAC.

Keterangan
Kegagalan bin prop adalah skenario fatality klasik pada ADT; ketiga syaratnya — bin kosong, transmisi netral, prop duduk di locating ring — harus diverifikasi satu per satu, bukan diasumsikan.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»


---

## JSEA-ADT-05

Proses / Pekerjaan: Pemasangan Articulation Safety Bar dan Bekerja di Area Artikulasi (Pinch Zone)

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Memarkir unit pada posisi lurus (straight ahead) di tanah rata dan memastikan area artikulasi bebas hambatan | • (S) Unit tidak lurus sehingga lubang safety bar tidak segaris<br>• (S) Hambatan di area artikulasi<br>• (E) Tidak Signifikan | • (S) Pemaksaan penyelarasan sambil orang berada di pinch zone<br>• (S) Cedera saat unit diartikulasikan<br>• (E) Tidak Signifikan | **Critical Control:** Jangan pernah mengartikulasikan unit sebelum memastikan area artikulasi bebas dari hambatan dan orang.<br>**Administrative:** Parkir lurus di tanah rata & padat; park brake aktif; area dibarikade.<br>**PPE:** Rompi reflektif, helm. | OEM Manual (Never articulate the machine before checking that the articulation area is clear of obstructions); ISO 12100:2010 |
| 2 | Menyiapkan dua orang: satu mengoperasikan steering dari kabin, satu memasang locking pin | • (S) Pemasang berada di dalam articulation pinch zone<br>• (S) Miskomunikasi antara operator dan pemasang<br>• (H) Tekanan waktu<br>• (E) Tidak Signifikan | • (S) Terjepit di zona artikulasi — fatality / amputasi<br>• (E) Tidak Signifikan | **Critical Control:** Dua orang wajib — pekerjaan ini tidak boleh dilakukan sendirian. Operator steering wajib sepenuhnya menyadari pergerakan orang di dalam pinch zone dan keduanya harus dapat berkomunikasi setiap saat.<br>**Engineering:** Komunikasi radio bila jarak pandang/suara tidak memadai.<br>**Administrative:** Aba-aba baku disepakati sebelum mulai; steering digerakkan hanya atas permintaan eksplisit; pemasang keluar dari pinch zone sebelum setiap gerakan steering.<br>**PPE:** Rompi reflektif, sarung tangan, helm. | OEM Manual (Two people are needed to engage the articulation safety bar / Ensure that any person operating the machine steering is fully aware of the movements of the person within the pinch zone and that they are able to communicate with one another); OSHA 29 CFR 1910.147 |
| 3 | Melipat naik locking pin retaining device dan melepas locking pin dari bracket penyimpanan | • (S) Pin berat jatuh<br>• (S) Retaining device menjepit jari<br>• (H) Postur menjangkau<br>• (E) Tidak Signifikan | • (S) Kaki tertimpa pin, jari terjepit<br>• (H) Cedera bahu<br>• (E) Tidak Signifikan | **Engineering:** Pin diikat tali pengaman agar tidak jatuh.<br>**Administrative:** Posisi berdiri stabil; hindari menjangkau melebihi jangkauan aman.<br>**PPE:** Sarung tangan, safety shoes toe cap. | OEM Manual (Engaging the Articulation Safety Bar); Permenaker No. 5/2018 |
| 4 | Mengayunkan safety bar ke posisi kerja dan menyelaraskan lubangnya dengan lubang male oscillation joint | • (S) Penyelarasan memerlukan pemutaran kemudi sementara orang berada di pinch zone<br>• (S) Jari dimasukkan ke lubang untuk memeriksa kelurusan<br>• (E) Tidak Signifikan | • (S) Amputasi jari / terjepit fatal saat unit berartikulasi<br>• (E) Tidak Signifikan | **Critical Control:** Dilarang mutlak memeriksa kelurusan lubang dengan jari — gunakan drift/tapered bar. Sebelum kemudi diputar, pemasang wajib mundur keluar dari pinch zone dan memberi konfirmasi verbal; kemudi diputar sedikit demi sedikit atas permintaan.<br>**Engineering:** Tapered alignment bar; penerangan memadai.<br>**Administrative:** Larangan menyelesaikan pekerjaan tanpa mundur setiap kali kemudi digerakkan.<br>**PPE:** Sarung tangan, helm. | OEM Manual (It may be necessary to adjust the articulation angle slightly by rotating the steering wheel); ISO 12100:2010 |
| 5 | Memasang locking pin, menurunkan retaining device, lalu memasang lock-out device dan gembok | • (S) Pin tidak terkunci sempurna<br>• (S) Lock-out tidak dipasang<br>• (E) Tidak Signifikan | • (S) Safety bar lepas saat pekerjaan berlangsung — unit berartikulasi, fatality<br>• (E) Tidak Signifikan | **Critical Control:** Retaining device dipastikan turun mengunci pin; folding lockout scissor clamp dipasang pada lock-out point articulation safety bar dan digembok dengan gembok pribadi.<br>**Administrative:** Verifikasi oleh orang kedua; tag DO NOT OPERATE di kemudi; matikan engine dan aktifkan park brake setelah safety bar terpasang.<br>**PPE:** — | OEM Manual (Articulation Safety Bar Lock-Out point / Attach a DO NOT OPERATE warning in full view of anyone entering the operator station); OSHA 29 CFR 1910.147 |
| 6 | Melakukan pekerjaan servis di area artikulasi (steering cylinder, oscillation joint, propshaft, hydraulic line) | • (S) Propshaft dapat berputar<br>• (S) Silinder steering bertekanan<br>• (H) Postur kerja sempit, kontak oli<br>• (E) Ceceran oli | • (S) Terjerat propshaft, fluid injection injury<br>• (H) MSD, dermatitis<br>• (E) Pencemaran | **Critical Control:** Articulation safety bar terpasang & digembok sepanjang pekerjaan; tekanan hidrolik dilepas sebelum membuka sambungan.<br>**Administrative:** Dilarang memakai pakaian longgar atau perhiasan yang dapat tersangkut propshaft; seluruh tool disimpan menjauh dari area propshaft.<br>**Environmental:** Drip tray & spill kit.<br>**PPE:** Coverall pas badan, sarung tangan nitril, goggles. | OEM Manual (Do not wear loose clothing which may be caught up in the prop shaft / ensure that the articulation safety bar has been installed and locked out); Permenaker No. 38/2016 |
| 7 | Melepas articulation safety bar setelah pekerjaan dan mengembalikan pin ke posisi simpan | • (S) Unit dapat berartikulasi segera setelah bar dilepas<br>• (S) Orang masih berada di pinch zone<br>• (E) Tidak Signifikan | • (S) Terjepit saat unit berartikulasi — fatality<br>• (E) Tidak Signifikan | **Critical Control:** Verifikasi seluruh personel keluar dari pinch zone dan seluruh tool telah diambil sebelum bar dilepas; gembok dilepas hanya oleh pemasangnya.<br>**Administrative:** Tool count in–out; pin dikembalikan dan dikunci pada posisi simpan.<br>**PPE:** Sarung tangan. | OEM Manual (Disengaging the Articulation Safety Bar); OSHA 29 CFR 1910.147 |

Additional Safety Tips
- Zona artikulasi adalah zona jepit dengan gaya sangat besar; tidak ada kesempatan kedua bila unit bergerak saat seseorang berada di dalamnya.
- Kesepakatan aba-aba dan konfirmasi verbal dibuat sebelum orang masuk pinch zone, bukan sambil berada di dalamnya.
- Locking pin articulation safety bar sering hilang; kembalikan dan kunci di posisi simpan setiap kali selesai.

Point of Concern
- Pekerjaan ini secara desain menuntut seseorang berada di dalam pinch zone; kontrolnya sepenuhnya bergantung pada komunikasi dan disiplin sehingga pengawasan langsung sangat penting.
- Miskomunikasi antara operator kabin dan pemasang pin adalah mekanisme kecelakaan utama; kebisingan area tambang memperbesar risiko ini.
- Propshaft yang berputar di area artikulasi dapat menyambar pakaian longgar dan menarik seluruh tubuh.

Common Mistakes
- Memasang articulation safety bar sendirian dengan menahan kemudi lalu berlari ke bawah unit — hindari dengan aturan mutlak dua orang.
- Memeriksa kelurusan lubang dengan jari — hindari dengan tapered bar dan larangan tegas.
- Tidak memasang gembok karena "hanya sebentar" — hindari dengan aturan lock-out wajib setiap kali safety bar terpasang.

Golden Rules
- Pemasangan articulation safety bar selalu dilakukan oleh dua orang dengan komunikasi aktif.
- Jari tidak pernah digunakan untuk memeriksa kelurusan lubang pin.
- Articulation safety bar selalu digembok selama pekerjaan di area artikulasi.

Critical Controls
- Dua orang dengan komunikasi dua arah yang berfungsi.
- Konfirmasi verbal keluar dari pinch zone sebelum setiap gerakan kemudi.
- Lock-out clamp + gembok pribadi pada articulation safety bar.
- Tag DO NOT OPERATE di kemudi, engine mati, park brake aktif.
- Verifikasi area & tool bersih sebelum safety bar dilepas.

Required PPE
- Mandatory PPE: Safety helmet, safety glasses, safety shoes toe cap, coverall pas badan (tidak longgar), sarung tangan kerja, rompi reflektif.
- Additional PPE: Sarung tangan nitril, goggles saat bekerja pada sistem hidrolik.

Emergency Response
- Potensi Keadaan Darurat: Terjepit di zona artikulasi, terjerat propshaft, fluid injection injury.
- Respon Awal: Matikan engine segera; jangan memutar kemudi untuk membebaskan korban tanpa arahan tim penyelamat; aktifkan ERT; siapkan penopang sebelum unit digerakkan.
- Peralatan Darurat yang Diperlukan: Kotak P3K dengan tourniquet, spine board, alat pembebas darurat, alat komunikasi, akses MEDEVAC.

Keterangan
Modul ini adalah prasyarat wajib untuk setiap pekerjaan di area artikulasi, termasuk pengecekan tekanan steering pada JSEA-ADT-07.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»


---

## JSEA-ADT-06

Proses / Pekerjaan: Tilting (Mengangkat) dan Menurunkan Kabin untuk Akses Servis

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Memarkir unit di tanah rata, bin turun, park brake aktif, mematikan engine | • (S) Unit tidak stabil saat kabin diangkat<br>• (S) Unit bergerak<br>• (E) Tidak Signifikan | • (S) Kabin terguling / unit bergerak saat kabin terangkat — fatality<br>• (E) Tidak Signifikan | **Critical Control:** Tanah rata & padat; park brake aktif; chock block terpasang.<br>**Administrative:** Ikuti JSEA-GEN-01; tag DO NOT OPERATE.<br>**PPE:** APD dasar. | OEM Manual (Tilting And Lowering Cab); ISO 12100:2010 |
| 2 | Membuka bonnet, menutup pintu kabin, mengosongkan kabin, mematikan battery isolator | • (S) Kabin berisi orang/barang saat diangkat<br>• (S) Barang berjatuhan<br>• (S) Kelistrikan masih aktif<br>• (E) Tidak Signifikan | • (S) Penopang kabin gagal karena beban melebihi desain — kabin jatuh, fatality<br>• (S) Tertimpa barang jatuh<br>• (E) Tidak Signifikan | **Critical Control:** Penopang kabin dirancang hanya untuk kabin KOSONG — pastikan bebas orang dan barang sebelum diangkat; pintu ditutup; battery isolator OFF & digembok.<br>**Administrative:** Verifikasi visual isi kabin; spion kanan pada posisi normal, spion kiri dilipat ke belakang.<br>**PPE:** Sarung tangan. | OEM Manual (Ensure that the cab is empty / The cab support is dimensioned to support an EMPTY cab); Permenaker No. 12/2015 |
| 3 | Melepas baut pengikat kabin sisi kiri dan membuangnya | • (S) Baut karat/macet<br>• (S) Baut lama dipakai ulang<br>• (E) Limbah logam | • (S) Tool slip, tangan terluka<br>• (S) Baut gagal saat unit beroperasi — kabin lepas, fatality<br>• (E) Limbah | **Critical Control:** Baut pengikat kabin tidak pernah dipakai ulang — selalu diganti baru; siapkan baut baru sebelum pekerjaan dimulai.<br>**Engineering:** Kunci ukuran tepat, torque multiplier bila perlu.<br>**Administrative:** Baut lama langsung disingkirkan.<br>**PPE:** Sarung tangan anti-impact, goggles. | OEM Manual (Never re-use cab mounting bolts. Always replace bolts after loosening); ISO 9001:2015 |
| 4 | Menempatkan directional valve pada "Cab Raise" dan memompa tuas tilt untuk mengangkat kabin | • (S) Kabin bergerak tak terduga<br>• (S) Tuas pompa terpental<br>• (H) Beban fisik memompa<br>• (E) Ceceran oli | • (S) Terjepit antara kabin dan chassis<br>• (H) Cedera bahu & punggung<br>• (E) Pencemaran | **Critical Control:** Tidak seorang pun di bawah atau di jalur ayun kabin; amati kabin naik dari sisi kiri unit sesuai instruksi OEM.<br>**Engineering:** Pompa & selang tilt laik.<br>**Administrative:** Pompa perlahan; hentikan bila ada tahanan tidak wajar.<br>**PPE:** Sarung tangan, helm. | OEM Manual (Place directional valve lever in Cab Raise position); Permenaker No. 5/2018 |
| 5 | Melanjutkan tilting hingga cab locking plate jatuh ke bawah cab foot support landing | • (S) Kabin hanya ditahan silinder hidrolik<br>• (S) Locking plate tidak jatuh sempurna<br>• (E) Tidak Signifikan | • (S) Kabin turun menimpa pekerja — fatality<br>• (E) Tidak Signifikan | **Critical Control:** Dilarang bekerja di bawah kabin terangkat kecuali bertumpu pada Cab Locking Plate / cab stay; jangan pernah bekerja pada sistem cab tilt bila kabin hanya ditopang silinder hidrolik; verifikasi visual locking plate menopang penuh.<br>**Engineering:** Lock-out device pada Cab Tilt Pump lock-out point, digembok selama kabin terangkat.<br>**Administrative:** Verifikasi orang kedua sebelum masuk ke bawah kabin.<br>**PPE:** Helm, safety glasses. | OEM Manual (Do not work under the raised cab unless the cab rests onto the Cab Locking Plate / Cab Tilt Pump Lock-Out Point); OSHA 29 CFR 1910.147 |
| 6 | Melakukan pekerjaan servis pada sistem hidrolik dan transmisi di bawah kabin | • (S) Komponen bertekanan & panas<br>• (S) Ruang sempit, jalan keluar terbatas<br>• (H) Postur janggal, kontak oli<br>• (E) Ceceran oli | • (S) Fluid injection injury, luka bakar<br>• (H) MSD, dermatitis<br>• (E) Pencemaran | **Critical Control:** Depressurising sistem hidrolik sesuai JSEA-ADT-07 sebelum membuka sambungan; kabin terkunci pada locking plate & digembok.<br>**Engineering:** Penerangan portabel; drip tray.<br>**Administrative:** Two-Man Rule dengan pengawas di luar.<br>**PPE:** Goggles, sarung tangan nitril, helm. | OEM Manual (Hydraulic System Depressurising Procedure); Permenaker No. 37/2016 |
| 7 | Menurunkan kabin, memasang baut pengunci baru dengan torsi spesifikasi | • (S) Kabin turun saat orang masih di bawah<br>• (S) Torsi baut tidak sesuai<br>• (E) Tidak Signifikan | • (S) Terjepit — fatality<br>• (S) Kabin lepas dari dudukan saat operasi — fatality<br>• (E) Tidak Signifikan | **Critical Control:** Verifikasi personel & tool keluar dari bawah kabin sebelum diturunkan; directional valve pada "Cab Lower"; baut baru ditorsi sesuai spesifikasi OEM (tipikal 410 N·m pada model besar) dengan torque wrench terkalibrasi, diverifikasi orang kedua.<br>**Administrative:** Nut retainer dudukan kabin dipastikan terpusat; tool count in–out.<br>**PPE:** Sarung tangan. | OEM Manual (Install and torque new locking bolts to 410 N.m / cab mount nut retainers are centralised); ISO 9001:2015 kl. 7.1.5 |

Additional Safety Tips
- Siapkan baut pengikat kabin baru sebelum memulai; tanpa baut baru pekerjaan tidak boleh dimulai karena kabin tidak dapat dipasang kembali dengan aman.
- Cab locking plate jatuh sendiri saat kabin cukup tinggi; jangan berasumsi sudah terpasang tanpa melihat langsung.
- Kosongkan kabin sepenuhnya termasuk tool box, jerigen, dan barang pribadi sebelum diangkat.

Point of Concern
- Penopang kabin dihitung hanya untuk kabin kosong; tambahan beban di dalam kabin dapat melebihi kapasitas desain.
- Kabin yang ditopang hanya silinder hidrolik dapat turun akibat kebocoran internal atau kegagalan hose tanpa peringatan.
- Baut pengikat kabin adalah sambungan struktural yang menahan struktur pelindung operator; pemakaian ulang baut yang sudah teregang mengurangi kekuatannya.

Common Mistakes
- Meninggalkan tool box atau barang di kabin saat diangkat — hindari dengan checklist pengosongan kabin.
- Memasang kembali baut lama karena baut baru belum datang — hindari dengan menghentikan pekerjaan sampai baut baru tersedia.
- Mengencangkan baut kabin dengan impact wrench tanpa torsi akhir terukur — hindari dengan torque wrench terkalibrasi dan verifikasi silang.

Golden Rules
- Kabin harus kosong sebelum diangkat.
- Tidak seorang pun bekerja di bawah kabin yang hanya ditopang silinder hidrolik.
- Baut pengikat kabin selalu diganti baru dan ditorsi sesuai spesifikasi.

Critical Controls
- Verifikasi kabin kosong dan battery isolator OFF & digembok.
- Cab locking plate / cab stay terpasang dan diverifikasi visual.
- Lock-out clamp + gembok pada cab tilt pump lock-out point.
- Baut pengikat kabin baru tersedia sebelum pekerjaan dimulai.
- Torsi baut kabin terverifikasi dengan torque wrench terkalibrasi.

Required PPE
- Mandatory PPE: Safety helmet, safety glasses, safety shoes toe cap, coverall, sarung tangan kerja.
- Additional PPE: Goggles, sarung tangan nitril & anti-impact, rompi reflektif.

Emergency Response
- Potensi Keadaan Darurat: Kabin turun menimpa pekerja, terjepit, fluid injection injury.
- Respon Awal: Hentikan seluruh gerakan; jangan mengoperasikan pompa tilt untuk membebaskan korban tanpa penopang tambahan terpasang; aktifkan ERT dan siapkan penopang mekanis sebelum pemindahan.
- Peralatan Darurat yang Diperlukan: Kotak P3K, spine board, penopang/dongkrak darurat, alat komunikasi, akses MEDEVAC.

Keterangan
Cab tilt pump lock-out point adalah satu dari lima lock-out point resmi pada unit ini; empat lainnya adalah battery isolator, articulation safety bar, bin prop, dan over centre bin lock.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

## JSEA-ADT-07

Proses / Pekerjaan: Depressurising Sistem Hidrolik & Pneumatik dan Discharge Akumulator Sistem Rem

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Mengidentifikasi seluruh sistem bertekanan pada unit sebelum bekerja: bin hoisting, suspensi, steering, cab tilting, dan brake charging | • (S) Sistem bertekanan tidak teridentifikasi<br>• (S) Sistem pengisian rem menaikkan tekanan otomatis tanpa peringatan<br>• (E) Tidak Signifikan | • (S) Sambungan dibuka dalam kondisi bertekanan — fluid injection injury, hose melecut<br>• (E) Tidak Signifikan | **Critical Control:** Lima sistem bertekanan wajib diidentifikasi dan didepressurisasi satu per satu; sadari bahwa **sistem pengisian rem dapat menaikkan tekanan secara otomatis tanpa peringatan** dan **banyak hose tetap bertekanan meskipun unit sudah dimatikan**.<br>**Administrative:** Checklist depressurising per sistem; hanya personel kompeten.<br>**PPE:** APD lengkap sistem hidrolik. | OEM Manual (Hydraulic System Depressurising Procedure / the brake charging system also automatically raises the system pressure... without warning! / Many hoses may still be under pressure even when the machine is switched off); Permenaker No. 37/2016 |
| 2 | Mendepressurisasi sistem bin hoisting: memastikan bin bertumpu pada chassis atau bin prop / bin lock | • (S) Bin hanya ditahan silinder hidrolik<br>• (S) Bin turun saat sambungan dibuka<br>• (E) Ceceran oli | • (S) Tertimpa bin — fatality<br>• (E) Pencemaran | **Critical Control:** Bin bertumpu penuh pada chassis atau pada bin prop/bin lock yang digembok; **dilarang bekerja pada sistem hidrolik bila bin hanya ditopang silinder**; bin yang turun penuh melepas tekanannya secara otomatis.<br>**Administrative:** Ikuti JSEA-ADT-04; bila bin harus terangkat, operasikan bin naik-turun 3 kali agar berat benar-benar duduk pada prop.<br>**PPE:** Helm, face shield. | OEM Manual (Bin Hoisting / Always ensure that the bin is either resting on the chassis or on the bin pole); ISO 12100:2010 |
| 3 | Mendepressurisasi sistem steering: memutar kemudi kiri-kanan 3 kali dengan unit mati sampai steering valve bottom out | • (S) Unit dapat sedikit berbelok karena tekanan silinder dilepas<br>• (S) Orang berada di zona artikulasi<br>• (E) Ceceran oli | • (S) Terjepit di zona artikulasi — fatality<br>• (E) Pencemaran | **Critical Control:** Articulation safety bar terpasang dan digembok sebelum siapa pun berada di area artikulasi; sadari unit **dapat berbelok sedikit** saat tekanan silinder dilepas.<br>**Administrative:** Beri peringatan verbal sebelum memutar kemudi; ikuti JSEA-ADT-05.<br>**PPE:** APD dasar. | OEM Manual (Steering System — turn the steering wheel both left and right... Be aware that the truck may steer a small amount due to pressure being released in the cylinders); OSHA 29 CFR 1910.147 |
| 4 | Mendepressurisasi sistem cab tilting dan suspensi | • (S) Kabin hanya ditopang silinder hidrolik<br>• (S) Suspensi bertekanan gas & oli<br>• (E) Ceceran oli | • (S) Kabin turun — fatality<br>• (S) Semburan oli bertekanan dari strut<br>• (E) Pencemaran | **Critical Control:** Kabin bertumpu pada mounting atau cab stay; **jangan pernah bekerja pada sistem cab tilt bila kabin hanya ditopang silinder hidrolik**; suspensi didepressurisasi sesuai prosedur OEM tersendiri.<br>**Administrative:** Ikuti JSEA-ADT-06 dan prosedur suspensi.<br>**PPE:** Face shield, sarung tangan tahan kimia. | OEM Manual (Cab Tilting System / Suspension — refer to suspension depressurising procedure); Permenaker No. 37/2016 |
| 5 | Mendischarge akumulator sistem rem — Metode 1 (direkomendasikan): unit mati, injak-lepas pedal rem seperti memompa sampai pedal terasa rata | • (S) Energi gas nitrogen bertekanan tinggi di akumulator<br>• (S) Sisa tekanan tidak terbuang sempurna<br>• (E) Tidak Signifikan | • (S) Sambungan rem dibuka dalam kondisi bertekanan — injection injury, komponen terlempar<br>• (E) Tidak Signifikan | **Critical Control:** **Sistem rem menggunakan akumulator penyimpan energi — akumulator wajib didischarge sebelum pekerjaan apa pun pada sistem rem**; pemompaan pedal dilanjutkan sampai pedal benar-benar rata dan tekanan turun ke nol; sebagai verifikasi tambahan, injak-lepas pedal minimal 20 kali.<br>**Administrative:** Verifikasi gauge menunjukkan nol; metode pedal adalah metode yang direkomendasikan OEM.<br>**PPE:** APD dasar. | OEM Manual (**The brake system makes use of accumulators that stores energy. Before any work can be done on the brake system the accumulators need to be discharged** / use the foot brake valve by pushing it in and out like a pump action until the pedal is completely flat / Relieve pressure in brake accumulators by applying and releasing the brake pedal at least 20 times); Permenaker No. 37/2016 |
| 6 | Mendischarge akumulator — Metode 2: menggunakan hydraulic fly lead hose pada test port di charge valve block, menampung oli yang keluar | • (S) Semburan oli bertekanan saat konektor dipasang<br>• (S) **Volume oli besar keluar dari akumulator**<br>• (H) Kontak oli<br>• (E) Tumpahan oli hidrolik volume besar | • (S) Fluid injection injury, konektor terlempar<br>• (H) Dermatitis<br>• (E) Pencemaran tanah & air | **Critical Control:** Ujung fly lead hose diarahkan ke dalam wadah penampung **sebelum** disambungkan ke test port, karena oli langsung mengalir saat konektor terpasang; kedua test port harus didischarge; setelah selesai, pedal rem tetap dipompa beberapa kali untuk memastikan tekanan nol.<br>**Engineering:** **Hitung kapasitas wadah: jumlah akumulator × volume oli per akumulator (tipikal 4,5 liter per akumulator)** — siapkan wadah sebelum mulai.<br>**Environmental:** Spill kit; oli ke TPS Limbah B3 dengan manifest.<br>**PPE:** Face shield, sarung tangan tahan kimia, apron. | OEM Manual (open the nose box on the LHS... use a hydraulic fly lead hose and ensure the one end is directed into a container / one accumulator stores 4.5 litres of oil. Thus count the number of accumulators and multiply it by 4.5); PP No. 22/2021; Permen LHK No. 6/2021 |
| 7 | Mendepressurisasi sistem pneumatik dan sistem pendingin, lalu verifikasi seluruh sistem nol | • (S) Semburan udara & kondensat bertekanan<br>• (H) Coolant panas bertekanan<br>• (H) Kebisingan impulsif<br>• (E) Kondensat berminyak & coolant | • (S) Partikel terlempar oleh udara bertekanan<br>• (H) Luka bakar derajat 2–3, gangguan pendengaran sesaat<br>• (E) Pencemaran | **Critical Control:** Tekanan udara dibuang dengan menahan drain valve pada air reservoir tetap terbuka; **tekanan sistem pendingin hanya boleh dilepas dengan menunggu coolant dingin sampai aman untuk membuka filler cap** — tidak boleh dipaksakan.<br>**Administrative:** Verifikasi akhir seluruh gauge nol dan pedal rem rata sebelum sambungan pertama dibuka; tekanan hidrolik, bahan bakar, dan AC hanya dilepas oleh personel kompeten.<br>**Environmental:** Wadah kondensat & coolant; keduanya limbah B3.<br>**PPE:** Goggles, ear plug, sarung tangan tahan panas. | OEM Manual (Relieve the air pressure by holding open the drain valve on the air reservoir / The cooling system pressure can only be safely relieved by allowing the engine coolant to cool down / The hydraulic, fuel and air conditioner system pressures must only be relieved by qualified personnel); Permenaker No. 5/2018 |
| 8 | Setelah pekerjaan: bleeding udara pada pilot hose rem dan caliper (bagian application dan cooling), lalu uji rem | • (S) Udara terjebak menurunkan daya pengereman<br>• (S) Uji rem dengan orang di sekitar unit<br>• (E) Ceceran oli saat bleeding | • (S) **Kegagalan rem saat unit beroperasi — fatality**<br>• (E) Pencemaran | **Critical Control:** Bleeding dilakukan pada seluruh titik sesuai urutan OEM (pilot hose, caliper application, caliper cooling); **uji rem wajib dilakukan dan lulus sebelum unit dikembalikan ke operasi**; uji di area datar, luas, dan bebas personel.<br>**Administrative:** Catat hasil uji rem; unit tidak diserahkan bila uji gagal; pemeriksaan tekanan pre-charge akumulator dan health inspection sesuai jadwal.<br>**PPE:** APD dasar. | OEM Manual (Brake Pilot Hose Air Bleeding / Brake Caliper Air Bleeding / Testing Brakes / Brake System Accumulator Health Inspection); Kepmen ESDM 1827 K/30/MEM/2018 |

Additional Safety Tips
- Hitung kebutuhan wadah penampung sebelum mulai: jumlah akumulator dikali volume oli per akumulator; wadah yang kekecilan menyebabkan tumpahan besar di tengah pekerjaan.
- Pedal rem yang terasa rata dan tidak melawan adalah indikator paling praktis bahwa akumulator sudah kosong.
- Setelah akumulator direcharge, jalankan unit dan operasikan sistem rem/suspensi beberapa kali agar piston akumulator bergerak, lalu cek ulang tekanan pre-charge; bila turun, akumulator harus diganti.

Point of Concern
- Sistem pengisian rem dapat menaikkan tekanan sendiri tanpa peringatan; ini alasan mengapa depressurising tidak boleh dilakukan setengah-setengah.
- Banyak hose tetap bertekanan meski unit sudah dimatikan; waktu tunggu bukan pengganti prosedur.
- Kegagalan bleeding rem tidak selalu terasa saat unit diuji pelan; uji rem sesuai prosedur adalah satu-satunya verifikasi yang sah.

Common Mistakes
- Mengendurkan fitting untuk "membuang tekanan" — hindari dengan menggunakan pedal rem dan test port resmi.
- Menyambungkan fly lead hose sebelum ujungnya diarahkan ke wadah — hindari dengan menyiapkan wadah dan mengarahkan selang lebih dulu.
- Menganggap sistem pneumatik tidak berbahaya karena "hanya angin" — hindari dengan memasukkan pneumatik ke checklist isolasi.

Golden Rules
- Akumulator rem selalu didischarge sebelum pekerjaan apa pun pada sistem rem.
- Tidak ada fitting dibuka sebelum seluruh sistem diverifikasi nol.
- Unit tidak dikembalikan ke operasi sebelum uji rem dinyatakan lulus.

Critical Controls
- Kelima sistem bertekanan didepressurisasi dan diverifikasi satu per satu.
- Bin dan kabin bertumpu pada penopang mekanis, bukan silinder hidrolik.
- Akumulator rem didischarge sampai pedal rata dan gauge nol.
- Wadah penampung berkapasitas cukup disiapkan sebelum discharge.
- Uji rem lulus dan terdokumentasi sebelum serah terima.

Required PPE
- Mandatory PPE: Safety helmet, safety glasses, safety shoes, coverall, sarung tangan kerja.
- Additional PPE: Face shield, sarung tangan tahan kimia & tahan panas, apron, goggles, ear plug.

Emergency Response
- Potensi Keadaan Darurat: Fluid injection injury, semburan coolant panas, tumpahan oli volume besar, kegagalan rem saat uji.
- Respon Awal: Hentikan pekerjaan; korban injection injury langsung dirujuk sebagai kasus bedah darurat meskipun luka luar tampak kecil; kontain tumpahan dengan absorbent sebelum menyebar ke drainase.
- Peralatan Darurat yang Diperlukan: Spill kit dengan kapasitas memadai, eyewash & safety shower, kotak P3K, APAR, alat komunikasi.

Keterangan
Modul ini adalah prasyarat wajib untuk JSEA-ADT-06 dan JSEA-ADT-08, serta untuk setiap pekerjaan pada sistem rem, suspensi, steering, dan bin hoisting.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

## JSEA-ADT-08

Proses / Pekerjaan: Pemeriksaan dan Pengisian Gas Nitrogen pada Akumulator Sistem Rem dan Suspensi

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Memastikan tekanan hidrolik telah dilepas dari sistem rem dan/atau suspensi sebelum tekanan gas akumulator diperiksa | • (S) Tekanan hidrolik masih ada saat akumulator diperiksa<br>• (S) Pembacaan tekanan gas salah<br>• (E) Tidak Signifikan | • (S) Semburan oli bertekanan, komponen terlempar<br>• (S) Kesimpulan salah — akumulator rusak tetap dipakai<br>• (E) Tidak Signifikan | **Critical Control:** **Tekanan hidrolik wajib dihilangkan dari sistem rem dan/atau suspensi sebelum tekanan gas akumulator diperiksa** — ikuti JSEA-ADT-07 secara penuh dan verifikasi gauge nol.<br>**Administrative:** Hanya personel kompeten & terlatih khusus akumulator; unit terisolasi (LOTO).<br>**PPE:** Face shield, sarung tangan. | OEM Manual (**Before checking accumulator gas pressures ensure that the hydraulic pressure has been removed from the brake and / or suspension system**); Permenaker No. 37/2016 (Bejana Tekan) |
| 2 | Menyiapkan gas dan peralatan: hanya menggunakan nitrogen kering, charge kit, adapter, dan gauge yang sesuai | • (S) **Penggunaan gas yang salah (udara bertekanan / oksigen)**<br>• (S) Regulator/gauge tidak sesuai rating<br>• (S) Tabung gas jatuh atau terguling<br>• (E) Emisi gas | • (S) **Ledakan akumulator akibat oksidasi atau gas mudah terbakar di bawah tekanan — fatality**<br>• (S) Tabung menjadi proyektil bila katup patah<br>• (E) Pelepasan gas | **Critical Control:** **Hanya gas nitrogen kering yang boleh digunakan; dilarang keras menggunakan gas apa pun yang dapat menyebabkan oksidasi di dalam akumulator atau yang mudah terbakar di bawah tekanan, termasuk udara bertekanan.**<br>**Engineering:** Tabung nitrogen diikat tegak pada trolley/rak; tutup katup terpasang saat dipindahkan; regulator & gauge terkalibrasi dengan rating sesuai.<br>**Administrative:** SDS nitrogen tersedia; area berventilasi karena nitrogen adalah asfiksian sederhana.<br>**PPE:** Face shield, sarung tangan, safety shoes. | OEM Manual (**Only use dry Nitrogen to charge accumulators. Do not use any type of gas that could cause oxidation inside the accumulator or that is combustible under pressure (e.g. compressed air)**); Permenaker No. 37/2016; Permenaker No. 5/2018 |
| 3 | Membuka valve protection bracket dan safety cap pada charge valve akumulator | • (S) **Memutar nut yang salah dapat melepaskan valve dari akumulator**<br>• (S) Gas bertekanan tinggi di balik valve<br>• (E) Tidak Signifikan | • (S) **Valve terlepas dan terlempar bersama semburan gas bertekanan — fatality**<br>• (E) Tidak Signifikan | **Critical Control:** Pada spesifikasi military valve, **hanya nut bagian luar yang boleh diputar — memutar nut bagian dalam yang lebih tebal akan melepaskan valve dari akumulator**; identifikasi tipe valve (threaded end / crimped end) sebelum menyentuh apa pun.<br>**Administrative:** Briefing tipe valve sebelum mulai; tubuh dan wajah menjauh dari arah valve.<br>**PPE:** Face shield + goggles wajib. | OEM Manual (**For the military valve spec ensure that only the outer nut on the valve is turned. Turning the thicker inner nut will remove the valve from the accumulator** / Procedure for Threaded End & Crimped End Accumulators); Permenaker No. 37/2016 |
| 4 | Menyambungkan charging adaptor, membuka aliran gas ke gauge, dan membaca tekanan pre-charge | • (S) Sambungan lepas di bawah tekanan<br>• (S) Semburan gas ke arah wajah<br>• (H) Kebisingan pelepasan gas<br>• (E) Pelepasan nitrogen ke udara | • (S) Selang/adaptor melecut, cedera mata<br>• (H) Gangguan pendengaran sesaat<br>• (E) Tidak signifikan secara toksik | **Critical Control:** Verifikasi seluruh sambungan kencang sebelum gas dialirkan; wajah dan tubuh tidak berada segaris dengan valve atau sambungan.<br>**Engineering:** Selang charging dengan rating tekanan sesuai dan kondisi laik; whip check pada sambungan bila tersedia.<br>**Administrative:** Bandingkan hasil bacaan dengan **tabel tekanan pre-charge spesifik per sistem dan per model** — nilai akumulator rem berbeda dari akumulator suspensi, dan berbeda pula antar kapasitas akumulator.<br>**PPE:** Face shield, ear plug, sarung tangan. | OEM Manual (Accumulator Charge Pressure — tabel tekanan per sistem & kapasitas / Rear Accumulator Charge Pressure); Permenaker No. 37/2016 |
| 5 | Menambahkan nitrogen sampai mencapai spesifikasi, menutup aliran, mengencangkan nut luar / menyegel valve, melepas adaptor, memasang kembali safety cap dan bracket | • (S) Pengisian melebihi spesifikasi<br>• (S) Valve tidak tersegel sempurna<br>• (E) Kebocoran gas | • (S) **Akumulator pecah akibat over-pressure — fatality**<br>• (S) Kehilangan pre-charge saat operasi — kegagalan rem/suspensi<br>• (E) Pelepasan gas | **Critical Control:** Tekanan tidak melebihi nilai spesifikasi beserta toleransinya; setelah pengisian, **safety cap dan valve protection bracket wajib dipasang kembali** sebagai pelindung mekanis valve.<br>**Administrative:** Catat tekanan akhir pada service report; uji kebocoran pada valve setelah pengisian.<br>**PPE:** Face shield, sarung tangan. | OEM Manual (Add compressed nitrogen if necessary until charge specification is reached / Replace safety cap / Replace valve protection bracket); Permenaker No. 37/2016 |
| 6 | Verifikasi kemampuan akumulator menahan pre-charge dan pengambilan keputusan ganti | • (S) Akumulator bocor tetap dipakai<br>• (E) Tidak Signifikan | • (S) **Kegagalan rem saat unit beroperasi di lereng — fatality**<br>• (E) Tidak Signifikan | **Critical Control:** Akumulator yang telah direcharge **wajib diverifikasi mampu mempertahankan tekanan**: nyalakan unit, operasikan sistem rem dan/atau suspensi beberapa kali agar piston bergerak dalam bore-nya, lepaskan kembali tekanan hidrolik, lalu ukur ulang pre-charge — **bila ada penurunan pre-charge, akumulator harus diganti**.<br>**Administrative:** Hasil verifikasi dicatat; overhaul atau re-sertifikasi akumulator gas hanya oleh personel terampil sesuai standar keselamatan mesin.<br>**PPE:** APD dasar. | OEM Manual (**if the accumulator is recharged it must be checked to ensure that it can maintain that charge... If any pre-charge has been lost, the accumulator needs to be replaced** / Overhaul or re-certification... shall be carried out only by skilled personnel / ISO 12100:2010-1&2); Permenaker No. 37/2016 |
| 7 | Kalibrasi suspensi setelah pekerjaan (bila akumulator suspensi dikerjakan) dan uji fungsi rem | • (S) Suspensi tidak terkalibrasi menyebabkan ketinggian unit tidak seimbang<br>• (S) Unit bergerak saat kalibrasi<br>• (E) Tidak Signifikan | • (S) Unit tidak stabil saat bermuatan — risiko terguling<br>• (S) Tertabrak saat unit bergerak<br>• (E) Tidak Signifikan | **Critical Control:** Kalibrasi dilakukan di area datar dan bebas personel; uji rem lulus sebelum unit dikembalikan ke operasi.<br>**Administrative:** Inspeksi visual height sensor sebelum kalibrasi; ikuti urutan menu service-mode sesuai OEM; catat hasil.<br>**PPE:** Rompi reflektif. | OEM Manual (Suspension Calibration Procedure / Comfort Ride Suspension Functionality Checks / Testing Brakes); Kepmen ESDM 1827 K/30/MEM/2018 |

Additional Safety Tips
- Tabung nitrogen selalu dalam posisi tegak dan terikat; katup yang patah pada tabung bertekanan tinggi membuat tabung menjadi proyektil yang menembus tembok.
- Nitrogen menggeser oksigen di ruang tertutup; pastikan ventilasi memadai saat bekerja di dalam bengkel tertutup.
- Catat tekanan pre-charge setiap akumulator sebagai data tren; penurunan bertahap adalah tanda akumulator mendekati akhir umur pakai.

Point of Concern
- Menggunakan udara bertekanan sebagai pengganti nitrogen adalah kesalahan fatal: oksigen bertekanan tinggi bersama oli hidrolik dapat memicu ledakan.
- Memutar nut bagian dalam pada military valve akan melepaskan seluruh valve beserta tekanan gas di dalamnya.
- Akumulator rem yang kehilangan pre-charge mengurangi jumlah pengereman cadangan saat engine mati — kondisi paling kritis justru terjadi saat unit bermasalah di turunan.

Common Mistakes
- Mengisi akumulator dengan udara kompresor bengkel karena nitrogen habis — hindari dengan kebijakan stop work bila nitrogen tidak tersedia.
- Memeriksa tekanan gas tanpa melepas tekanan hidrolik lebih dulu — hindari dengan checklist yang mengurutkan depressurising sebelum pengukuran.
- Menganggap akumulator selesai setelah diisi ulang — hindari dengan verifikasi kemampuan menahan pre-charge sebelum unit dilepas.

Golden Rules
- Hanya nitrogen kering yang masuk ke akumulator.
- Tekanan hidrolik dilepas sebelum tekanan gas diperiksa.
- Akumulator yang tidak mampu menahan pre-charge diganti, bukan diisi ulang berkali-kali.

Critical Controls
- Verifikasi tekanan hidrolik nol sebelum pekerjaan akumulator.
- Identifikasi tipe valve dan hanya memutar nut bagian luar pada military valve.
- Gas yang digunakan dipastikan nitrogen kering.
- Tekanan pengisian sesuai tabel spesifik sistem dan model.
- Verifikasi akumulator mampu mempertahankan pre-charge setelah pengisian.

Required PPE
- Mandatory PPE: Safety helmet, safety glasses, safety shoes toe cap, coverall, sarung tangan kerja.
- Additional PPE: Face shield, goggles, ear plug, sarung tangan tahan kimia.

Emergency Response
- Potensi Keadaan Darurat: Valve atau akumulator terlempar, ledakan akumulator, kebocoran nitrogen di ruang tertutup, kegagalan rem.
- Respon Awal: Hentikan aliran gas dan jauhkan semua orang; pada kebocoran nitrogen di ruang tertutup segera evakuasi dan ventilasi — gejala kekurangan oksigen muncul tanpa peringatan; korban terkena semburan gas atau serpihan dirujuk medis segera.
- Peralatan Darurat yang Diperlukan: Kotak P3K, eyewash, detektor oksigen untuk ruang tertutup, alat komunikasi, akses MEDEVAC.

Keterangan
Akumulator termasuk bejana bertekanan; kepatuhan terhadap ketentuan riksa uji dan kompetensi personel bukan pilihan melainkan kewajiban legal.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

## JSEA-ADT-09

Proses / Pekerjaan: Servis Ban dan Rim Multi-Piece — Pelepasan, Pemasangan, Pengisian Angin, dan Pengencangan Mur Roda

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Memastikan hanya personel terlatih yang melaksanakan, unit terisolasi, diganjal, dan ditopang | • (S) Pekerjaan dilakukan personel tidak kompeten<br>• (S) Unit meluncur dari dongkrak<br>• (E) Tidak Signifikan | • (S) **Kegagalan rim/ban — fatality**<br>• (S) Unit jatuh menimpa pekerja<br>• (E) Tidak Signifikan | **Critical Control:** **Pemasangan ban ke rim hanya boleh dilakukan oleh personel terlatih**; bila satu as diangkat dengan dongkrak, **roda pada minimal satu as lain wajib diganjal** karena unit tetap dapat meluncur meskipun park brake aktif; stand mekanis wajib.<br>**Administrative:** Sertifikat kompetensi personel ban; ikuti JSEA-GEN-01 & GEN-05.<br>**PPE:** APD dasar. | OEM Manual (**THIS PROCEDURE MUST BE DONE BY TRAINED PERSONNEL ONLY** / When servicing... one of the axles is raised off the ground using jacks, the wheels on at least one of the other axles must be chocked); OSHA 29 CFR 1910.177; Permenaker No. 8/2020 |
| 2 | **Mengempiskan ban sepenuhnya sebelum melepas komponen rim atau mur roda** | • (S) **Ban masih bertekanan saat komponen rim dilepas**<br>• (S) Energi udara bertekanan dalam volume besar<br>• (H) Kebisingan pelepasan udara<br>• (E) Tidak Signifikan | • (S) **Ring/komponen rim terlempar dengan energi mematikan — fatality**<br>• (H) Gangguan pendengaran<br>• (E) Tidak Signifikan | **Critical Control:** Ban dikempiskan sampai nol dan **inti valve dilepas** untuk memastikan tidak ada tekanan tersisa sebelum satu pun komponen rim atau mur roda dikendurkan; verifikasi dengan memasukkan kawat ke lubang valve.<br>**Administrative:** Larangan mengendurkan mur roda pada ban yang masih bertekanan; briefing khusus sebelum mulai.<br>**PPE:** Face shield, ear plug, sarung tangan. | OSHA 29 CFR 1910.177; OEM Manual (Wheels and Wheel Components); Permenaker No. 37/2016 |
| 3 | Membersihkan dan memeriksa kondisi rim, ring, disc, hub, stud, dan nut terhadap cacat | • (S) **Retak pada rim, disc, bolt hole, flange, atau gutter**<br>• (S) Ring bengkok, terpuntir, atau korosi berat<br>• (S) Komponen multi-piece tidak sepasang / salah tipe<br>• (E) Limbah logam & karat | • (S) **Kegagalan rim tanpa peringatan saat pengisian atau saat unit beroperasi — fatality**<br>• (E) Limbah | **Critical Control:** **Komponen yang retak, berubah bentuk, terpuntir, terkorosi berat, atau aus berlebih wajib diafkir dan dimusnahkan — tidak boleh dipakai ulang**; **perbaikan rim dengan pemanasan, pengelasan, penambahan atau pengurangan material dilarang mutlak**; **komponen ring dari ukuran rim tertentu belum tentu dapat dipertukarkan dengan tipe rim lain** — komponen tidak sepadan dapat menyebabkan kecelakaan serius tanpa peringatan.<br>**Engineering:** Pembersihan menyeluruh sebelum inspeksi agar cacat terlihat; sandblasting, ultrasonic atau magnetic particle inspection sesuai program.<br>**Administrative:** Rim diinspeksi & disertifikasi ulang oleh pabrikan roda secara berkala; inspeksi visual rim minimal setiap penggantian ban.<br>**PPE:** Goggles, sarung tangan anti-potong. | OEM Manual (**The repair of a damaged rim or disc by heating, by welding, by addition or removal of material is absolutely forbidden** / **Mismatched or wrong parts mounted on a multi piece rim can cause serious mounting or service accidents... without any prior warning** / Identify a Damaged Rim or Wheel / Welding or modifying rims is strictly prohibited); OSHA 29 CFR 1910.177 |
| 4 | Memasang ban ke rim, memastikan ukuran & diameter rim sesuai, dan memastikan seluruh contact surface bersih | • (S) Ukuran rim tidak sesuai ban<br>• (S) Ring tidak duduk sempurna<br>• (H) Beban angkat sangat berat<br>• (E) Tidak Signifikan | • (S) **Ring terlepas saat pengisian — fatality**<br>• (H) Cedera punggung<br>• (E) Tidak Signifikan | **Critical Control:** Verifikasi ukuran & diameter rim sesuai ban; seluruh permukaan kontak (hub, stud, nut, disc attachment face, dan seluruh contact surface ring pada rim multi-piece) dibersihkan dari kotoran, karat, dan goresan; tepi tajam dan burr dihaluskan lalu dilapisi cat pelindung agar ban tidak rusak.<br>**Engineering:** Tyre handler / alat angkat khusus — dilarang mengangkat manual.<br>**Administrative:** Verifikasi kedudukan ring oleh orang kedua sebelum pengisian.<br>**PPE:** Sarung tangan, safety shoes toe cap. | OEM Manual (Mounting of Tyre Onto Wheel Rim / Check all matching surfaces... removing dirt, rust, scratches); OSHA 29 CFR 1910.177 |
| 5 | **Mengisi angin ban di dalam safety cage** | • (S) **Ledakan ban / pelepasan udara mendadak**<br>• (S) Ring terlempar sebagai proyektil<br>• (H) Kebisingan impulsif<br>• (E) Tidak Signifikan | • (S) **Cedera fatal akibat pelepasan udara mendadak atau komponen terlempar**<br>• (H) Gangguan pendengaran<br>• (E) Tidak Signifikan | **Critical Control:** **Pengisian ban wajib diselesaikan di dalam safety cage yang dirancang dengan kekuatan memadai**; **operator berdiri pada posisi aman yang direkomendasikan — tidak pernah di depan atau segaris dengan sisi ban**; gunakan selang panjang dengan clip-on chuck dan katup kendali jarak jauh sehingga operator berada di luar zona bahaya.<br>**Engineering:** Udara bertekanan kering, terfilter, dan bebas air; tekanan sumber tidak melebihi batas gauge; gauge dengan skala sesuai.<br>**Administrative:** Barikade area pengisian; larangan siapa pun mendekat selama pengisian; **kehati-hatian ekstrem — pelepasan udara mendadak dapat menyebabkan cedera serius**.<br>**PPE:** Face shield, ear plug. | OEM Manual (**To complete the tyre inflation use a "safety cage" designed with suitable strength. Extreme care should be taken. The sudden release of the air contained in the tyre can cause serious injury** / Recommended Operator Position During Tyre Inflation / Schrader gauge instructions); OSHA 29 CFR 1910.177 |
| 6 | Menyetel tekanan sesuai spesifikasi: tekanan dingin sesuai decal, disesuaikan terhadap suhu lingkungan | • (S) Under-inflation atau over-inflation<br>• (S) Ban dari pabrikan/tipe berbeda dicampur pada satu unit<br>• (E) Tidak Signifikan | • (S) Kegagalan ban saat operasi, unit tidak stabil, umur ban pendek<br>• (E) Tidak Signifikan | **Critical Control:** Tekanan dingin dari decal digunakan sebagai dasar dan **disesuaikan bila suhu lingkungan melebihi 25 °C** sesuai persentase kenaikan yang ditetapkan OEM; **penambahan tekanan untuk mengakomodasi kelebihan muatan tidak diizinkan** karena membebani komponen pemikul beban; **ban dari pabrikan berbeda tidak boleh dikombinasikan pada satu unit** karena dimensi dan konstruksi berbeda memengaruhi drive train, handling, dan stabilitas.<br>**Administrative:** Setelah unit beroperasi, pemeriksaan berikutnya menggunakan tekanan panas pada suhu operasi; gauge terkalibrasi.<br>**PPE:** Face shield. | OEM Manual (Tyre Inflation Pressure, Hot vs. Cold / **Pressure amendments to allow for overloads are not permitted** / **Tyres of different manufacturers should never be combined on the same machine**); Kepmen ESDM 1827 K/30/MEM/2018 |
| 7 | Memasang roda ke unit dan mengencangkan mur roda | • (S) Torsi mur tidak sesuai atau urutan salah<br>• (S) Roda berat jatuh saat dipasang<br>• (H) Beban fisik<br>• (E) Tidak Signifikan | • (S) **Roda lepas saat unit berjalan — fatality**<br>• (S) Tertimpa roda<br>• (H) MSD<br>• (E) Tidak Signifikan | **Critical Control:** Mur dikencangkan dengan **torque spanner atau alat yang mampu mencapai nilai torsi spesifikasi OEM (tipikal 560 N·m wet torque pada model besar)** dengan **urutan pengencangan yang benar**; **wajib verifikasi ulang torsi setelah ±10 jam operasi dan pengencangan ulang bila perlu pada 50 jam** setelah penggantian roda.<br>**Engineering:** Tyre handler untuk memposisikan roda; torque multiplier.<br>**Administrative:** Pemeriksaan torsi mur secara berkala masuk program perawatan; area pengecatan tidak boleh mengenai countersink dudukan baut dan area kontak mur.<br>**PPE:** Sarung tangan anti-impact, safety shoes toe cap. | OEM Manual (**Fastening of Wheel Nuts — 560 Nm wet torque / Use the correct tightening sequence / verify the mounting torque after approximately 10 hours of operation and... after 50 hours** / Wheel Maintenance); Permenaker No. 8/2020 |

Additional Safety Tips
- Bersihkan seluruh permukaan komponen sebelum inspeksi; cacat pada rim hampir mustahil terlihat di balik lumpur dan karat.
- Gunakan selang pengisian yang panjang agar operator dapat berdiri jauh dari sisi ban selama pengisian.
- Jangan mengecat area dudukan mur dan countersink baut; lapisan cat di sana membuat torsi yang terbaca tidak mencerminkan gaya jepit sebenarnya.

Point of Concern
- Rim multi-piece adalah salah satu sumber kecelakaan fatal paling dikenal di industri alat berat; komponen dapat terlempar puluhan meter dengan energi setara peluru.
- Komponen ring dari ukuran rim yang sama belum tentu dapat dipertukarkan antar tipe rim; kombinasi yang salah gagal tanpa peringatan apa pun.
- Ban yang panas berlebih setelah pengereman panjang berisiko meledak; jangan mendekat sampai ban dingin.

Common Mistakes
- Mengendurkan mur roda sebelum ban dikempiskan penuh — hindari dengan urutan wajib: kempiskan, lepas inti valve, verifikasi, baru bongkar.
- Mengelas retak kecil pada rim agar bisa dipakai lagi — hindari dengan aturan afkir dan pemusnahan komponen cacat.
- Mengisi angin dengan berdiri di samping ban tanpa safety cage — hindari dengan safety cage dan katup kendali jarak jauh.

Golden Rules
- Ban dikempiskan penuh sebelum komponen rim atau mur roda disentuh.
- Pengisian angin selalu di dalam safety cage dengan operator di posisi aman.
- Rim yang cacat diafkir, tidak pernah diperbaiki dengan las atau panas.

Critical Controls
- Personel terlatih dan bersertifikat untuk pekerjaan ban/rim.
- Verifikasi ban kempis nol dan inti valve dilepas.
- Inspeksi rim & ring terhadap cacat, dengan kriteria afkir yang jelas.
- Safety cage dan posisi operator aman saat pengisian.
- Torsi mur roda sesuai spesifikasi dengan urutan benar, diverifikasi ulang pada 10 dan 50 jam operasi.

Required PPE
- Mandatory PPE: Safety helmet, safety glasses, safety shoes toe cap, coverall, sarung tangan kerja.
- Additional PPE: Face shield, ear plug, sarung tangan anti-potong & anti-impact.

Emergency Response
- Potensi Keadaan Darurat: Ledakan ban, komponen rim terlempar, roda lepas, unit jatuh dari dongkrak.
- Respon Awal: Jangan mendekati ban yang baru meledak atau yang panas berlebih; evakuasi area sejauh mungkin dari arah sisi ban; aktifkan ERT dan evakuasi medis; amankan unit sebelum penanganan lanjutan.
- Peralatan Darurat yang Diperlukan: Kotak P3K dengan tourniquet, spine board, alat komunikasi, akses MEDEVAC, barikade.

Keterangan
Rim direkomendasikan diperiksa dan disertifikasi ulang oleh pabrikan roda secara berkala; program ini melindungi pekerja sekaligus memperpanjang umur pakai rim.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

## JSEA-ADT-10

Proses / Pekerjaan: Pekerjaan Pengelasan, Pemotongan, dan Penggerindaan (Hot Work) pada Unit

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Menilai kelayakan pekerjaan las: jenis perbaikan, lokasi, dan kompetensi pelaksana | • (S) Pengelasan pada struktur kritis oleh personel tidak berkualifikasi<br>• (S) Pengelasan pada ROPS/FOPS atau rim<br>• (E) Tidak Signifikan | • (S) **Struktur gagal saat unit beroperasi — fatality**<br>• (S) Sertifikasi perlindungan operator batal<br>• (E) Tidak Signifikan | **Critical Control:** **Perbaikan struktural wajib dikerjakan juru las berkualifikasi**; **pengelasan atau modifikasi pada struktur ROPS/FOPS dan pada rim roda dilarang mutlak** — komponen diganti, bukan dilas.<br>**Administrative:** Permit to Work / Hot Work Permit; verifikasi sertifikat juru las (SIO/kualifikasi) masih berlaku; WPS untuk perbaikan struktural.<br>**PPE:** APD las lengkap. | OEM Manual (**Use a qualified welding technician for structural repairs** / Unauthorized Modifications of Machine Cab (ROPS and FOPS) / Welding or modifying rims is strictly prohibited); Permenaker No. 2/1982 (Kualifikasi Juru Las); ISO 3471; ISO 3449 |
| 2 | Mengisolasi sistem kelistrikan sebelum mengelas | • (S) Arus las mengalir melalui ECU, alternator, dan sensor<br>• (S) Baterai terhubung saat mengelas<br>• (E) Tidak Signifikan | • (S) Kerusakan ECU/kelistrikan, kebakaran, arc flash<br>• (E) Tidak Signifikan | **Critical Control:** **Matikan battery isolator switch dan lepaskan baterai sebelum mengelas** (atau lepas kabel positif baterai); **pisahkan konektor harness ke engine, alternator, dan mikroprosesor unit bila perlu**.<br>**Engineering:** Isolator digembok (LOTO).<br>**Administrative:** Catat konektor yang dilepas agar terpasang kembali dengan benar.<br>**PPE:** Sarung tangan isolasi saat menangani baterai. | OEM Manual (**Disable electrical power before welding. Turn off battery isolator switch... Separate harness connectors to engine, alternator and vehicle microprocessors if necessary** / Switch OFF the battery isolator switch and disconnect the batteries, when welding on the machine); Permenaker No. 12/2015 |
| 3 | Memasang titik massa (earth) pada posisi yang benar | • (S) Arus las melintasi bearing atau roda gigi<br>• (E) Tidak Signifikan | • (S) Kegagalan bearing/gear di kemudian hari — kerusakan katastropik saat operasi<br>• (E) Tidak Signifikan | **Critical Control:** **Dilarang mengambil massa melalui rakitan yang mengandung bearing atau gear**; bila perbaikan dekat bearing/gear, **titik massa ditempatkan sedekat mungkin dengan lokasi perbaikan** agar arus tidak melewati bearing atau gear.<br>**Administrative:** Verifikasi posisi klem massa sebelum busur pertama dinyalakan.<br>**PPE:** Sarung tangan las. | OEM Manual (**Do not earth through any assembly incorporating bearings or gears... ensure that the earth point is close to where the repair is being done and that the current does not have to pass through bearings or gears**); AWS D1.1 |
| 4 | Menyiapkan area kerja: menjauhkan bahan mudah terbakar, saluran fluida, dan bejana bertekanan | • (S) **Percikan mengenai selang hidrolik, tangki bahan bakar, atau ban**<br>• (S) Panas merambat ke saluran fluida bertekanan<br>• (S) Cat lama terbakar mengeluarkan asap beracun<br>• (E) Emisi asap & limbah | • (S) **Kebakaran/ledakan unit — fatality**<br>• (S) Saluran bertekanan pecah menyemburkan cairan mudah terbakar<br>• (H) Keracunan asap<br>• (E) Pencemaran udara | **Critical Control:** **Hindari mengelas atau memanaskan di dekat saluran atau bejana berisi fluida**; **jangan biarkan panas merambat keluar dari area kerja ke arah saluran bertekanan** — kegagalan saluran akibat panas menghasilkan semburan cairan mudah terbakar dan luka bakar berat; **cat dilepas dengan cara yang benar sebelum dilas, bukan dibakar**.<br>**Engineering:** Fire blanket/sekat tahan api; pelindung selang; APAR siap di titik kerja; ventilasi baik di area las.<br>**Administrative:** Hot Work Permit; gas test bila ada risiko uap; fire watch selama pekerjaan dan minimal 30 menit setelah selesai; identifikasi lokasi dan jenis APAR sebelum mulai.<br>**Environmental:** Sisa cat & terak las sebagai limbah B3.<br>**PPE:** Respirator bila asap terkonsentrasi. | OEM Manual (**Avoid welding near fluid lines or vessels. Do not let heat go beyond work area near fluid lines** / Flammable spray may result and cause severe burns if pressurised lines fail as a result of heating / Remove paint properly / Ensure that there is good ventilation in the welding area / A fire extinguisher should be kept handy); Permenakertrans No. 4/1980; NFPA 51B |
| 5 | Melaksanakan pengelasan, pemotongan, atau penggerindaan | • (S) Radiasi busur las (UV/IR)<br>• (S) Percikan & terak panas<br>• (S) Batu gerinda pecah<br>• (H) Fume las (logam berat, ozon), kebisingan, sengatan listrik<br>• (E) Fume & limbah elektroda | • (S) Kebakaran, luka bakar, cedera mata oleh serpihan<br>• (H) **Arc eye (photokeratitis), demam asap logam, gangguan pernapasan kronis, tersengat listrik**<br>• (E) Pencemaran udara & limbah B3 | **Critical Control:** Sekat/tabir las untuk melindungi pekerja sekitar dari radiasi busur; LEV (local exhaust ventilation) pada sumber fume; kabel las & holder dalam kondisi isolasi utuh.<br>**Engineering:** Guard gerinda terpasang; batu gerinda sesuai RPM dan belum kadaluarsa; mesin las dengan grounding baik.<br>**Administrative:** **Dilarang menghirup debu atau asap**; rotasi kerja; larangan mengelas di ruang terbatas tanpa izin & ventilasi paksa.<br>**PPE:** Helm las dengan shade sesuai, apron & sarung tangan kulit, sepatu las, respirator fume las, ear plug. | OEM Manual (**Wear eye protection and protective equipment when welding. Do not inhale dust or fumes**); Permenaker No. 5/2018; Permenaker No. 8/2010; ANSI Z49.1 |
| 6 | Penyelesaian: pendinginan, inspeksi hasil las, penyambungan kembali kelistrikan, dan pembersihan area | • (S) Logam masih panas<br>• (S) Cacat las tidak terdeteksi<br>• (S) Konektor tidak tersambung kembali<br>• (E) Terak, elektroda bekas, majun | • (H) Luka bakar kontak<br>• (S) **Retak berkembang saat unit dibebani — kegagalan struktur**<br>• (S) Sistem kelistrikan tidak berfungsi saat operasi<br>• (E) Limbah B3 | **Critical Control:** Inspeksi hasil las (visual, dan NDT untuk sambungan struktural); fire watch pasca pekerjaan; checklist penyambungan kembali seluruh konektor & baterai.<br>**Administrative:** Dokumentasikan perbaikan pada service history; uji fungsi kelistrikan & sistem terkait sebelum serah terima.<br>**Environmental:** Terak, elektroda bekas, dan majun ke TPS Limbah B3.<br>**PPE:** Sarung tangan tahan panas. | Permenaker No. 2/1982; PP No. 22/2021; ISO 9001:2015 kl. 8.5 |

Additional Safety Tips
- Tentukan jenis APAR yang sesuai, lokasinya, dan cara menggunakannya sebelum busur las pertama dinyalakan, bukan saat api sudah muncul.
- Peralatan pemadam yang tersimpan di unit wajib dipelihara agar tetap berfungsi; APAR kadaluarsa sama dengan tidak ada APAR.
- Simpan selang hidrolik fleksibel di tempat gelap, kering, jauh dari peralatan listrik, pada suhu di bawah 33 °C dengan ujung tertutup cap.

Point of Concern
- Panas yang merambat ke saluran hidrolik bertekanan dapat menyebabkan saluran pecah dan menyemburkan cairan mudah terbakar dalam bentuk kabut — mekanisme kebakaran yang berkembang sangat cepat.
- Arus las yang melewati bearing meninggalkan kerusakan mikro yang baru muncul sebagai kegagalan berbulan-bulan kemudian.
- Selang atau fitting yang rusak harus diganti, tidak boleh diperbaiki; penggantian selang bertekanan tinggi hanya oleh personel berkualifikasi dan hanya dengan komponen asli.

Common Mistakes
- Mengelas tanpa melepas baterai karena "hanya sebentar" — hindari dengan menjadikan isolasi kelistrikan syarat penerbitan Hot Work Permit.
- Menjepit klem massa di sembarang titik pada rangka — hindari dengan menempatkan massa sedekat mungkin ke titik pengelasan.
- Meninggalkan area segera setelah las selesai — hindari dengan fire watch minimal 30 menit setelah pekerjaan berakhir.

Golden Rules
- Struktur pelindung operator dan rim roda tidak pernah dilas atau dimodifikasi.
- Kelistrikan diisolasi dan baterai dilepas sebelum mengelas.
- Tidak ada hot work tanpa izin, APAR di titik kerja, dan fire watch.

Critical Controls
- Hot Work Permit diterbitkan dan berlaku.
- Juru las berkualifikasi untuk perbaikan struktural.
- Battery isolator OFF, baterai dilepas, konektor ECU/alternator dipisahkan bila perlu.
- Titik massa ditempatkan agar arus tidak melewati bearing/gear.
- APAR di titik kerja dan fire watch selama serta setelah pekerjaan.

Required PPE
- Mandatory PPE: Helm las dengan shade sesuai, safety glasses di balik helm, sepatu safety, coverall tahan api, sarung tangan kulit las.
- Additional PPE: Apron & pelindung lengan kulit, respirator fume las, ear plug, face shield saat menggerinda.

Emergency Response
- Potensi Keadaan Darurat: Kebakaran unit, ledakan uap bahan bakar, luka bakar, arc eye, tersengat listrik.
- Respon Awal: Bila muncul tanda api dan situasi memungkinkan — pindahkan unit dari area berbahaya, matikan engine, tinggalkan kabin, lalu padamkan api dan hubungi tim pemadam bila perlu; korban arc eye diistirahatkan dan dirujuk ke pemeriksaan mata; putuskan sumber listrik sebelum menyentuh korban sengatan.
- Peralatan Darurat yang Diperlukan: APAR kelas ABC & B, fire blanket, eyewash, kotak P3K, alat komunikasi.

Keterangan
Pekerjaan las di area yang tidak dapat dipindahkan dari unit (misalnya dekat tangki bahan bakar atau ban) harus dievaluasi ulang; bila risiko tidak dapat diturunkan, komponen dilepas dari unit dan dikerjakan di area las khusus.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

## JSEA-ADT-11

Proses / Pekerjaan: Penggantian Oli, Filter, Breather, Pelumasan (Greasing), dan Pengelolaan Limbah B3

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Menyiapkan unit pada posisi servis, mengisolasi energi, dan menyiapkan wadah penampung serta spill kit | • (S) Unit belum terisolasi<br>• (E) Ceceran oli sejak awal pekerjaan | • (S) Start tak terduga, unit bergerak<br>• (E) Pencemaran tanah/lantai | **Critical Control:** Ikuti JSEA-GEN-01; chock block terpasang.<br>**Engineering:** Drip tray, wadah berkapasitas cukup, corong, pompa transfer.<br>**Environmental:** Spill kit di titik kerja sebelum tutup drain pertama dibuka.<br>**PPE:** Sarung tangan nitril, goggles. | OEM Manual (Service Position); PP No. 22/2021; ISO 14001:2015 |
| 2 | Menguras dan mengganti oli engine, transmisi, transfer case, differential, final drive, wet disc brake, dan hidrolik | • (H) **Oli dan fluida dapat panas dan menyebabkan luka bakar**<br>• (H) Kontak kulit berulang dengan oli bekas<br>• (S) Posisi kerja di kolong unit<br>• (E) Oli bekas volume besar = limbah B3 | • (H) Luka bakar termal, dermatitis, risiko karsinogenik oli bekas<br>• (S) Tertimpa/terjepit di kolong<br>• (E) Pencemaran tanah & air tanah | **Critical Control:** Tunggu unit cukup dingin — **oli dan fluida saat penggantian dapat masih panas dan membakar**; unit ditopang dan diganjal sebelum masuk kolong.<br>**Engineering:** Selang drain terarah ke wadah; creeper board; penerangan portabel.<br>**Administrative:** Larangan mencuci tangan atau membersihkan part dengan solar/oli bekas; ganti coverall yang basah oli.<br>**Environmental:** Oli bekas ke TPS Limbah B3 berizin dengan logbook & manifest; larangan mencampur jenis limbah.<br>**PPE:** Sarung tangan nitril, apron, goggles, sarung tangan tahan panas. | OEM Manual (**When changing oil in the engine, fluid in the hydraulic system or transmission, remember that the oil and fluid may be hot and can cause burns**); Permenaker No. 5/2018; PP No. 22/2021 Lampiran IX; Permen LHK No. 6/2021 |
| 3 | Mengganti filter: oli engine, bahan bakar primer & sekunder, transmisi, transfer case, hidrolik return, brake charge tekanan tinggi, WDB return, air drier, filter AC, dan pre-filter screen | • (S) **Filter tekanan tinggi masih bertekanan saat dibuka**<br>• (S) Housing filter terlempar<br>• (H) Kontak bahan bakar & oli<br>• (E) Filter bekas jenuh oli = limbah B3 | • (S) Semburan bertekanan, injection injury<br>• (H) Dermatitis, iritasi<br>• (E) Pencemaran | **Critical Control:** Tekanan sistem dilepas sebelum membuka filter tekanan tinggi (brake charge filter, hidrolik tekanan tinggi) sesuai JSEA-ADT-07; kendurkan housing perlahan dengan wajah menjauh.<br>**Engineering:** Filter wrench sesuai; wadah di bawah housing.<br>**Administrative:** Gunakan hanya suku cadang asli; catat penggantian pada service history; jangan membakar filter bekas.<br>**Environmental:** Filter bekas ditiriskan lalu ke TPS Limbah B3.<br>**PPE:** Face shield, sarung tangan nitril. | OEM Manual (Replacing the Filter / Change the High Pressure Brake Charge Filter / Only original parts must be used); Permenaker No. 37/2016; Permen LHK No. 6/2021 |
| 4 | Memeriksa dan mengganti breather (tangki bahan bakar, DEF, transmisi, transfer case, reservoir hidrolik & WDB, axle) | • (S) Tekanan sisa di dalam reservoir<br>• (H) Uap bahan bakar/DEF<br>• (E) Ceceran fluida | • (S) Semburan saat breather dibuka<br>• (H) Iritasi saluran napas<br>• (E) Pencemaran | **Engineering:** Kendurkan breather perlahan untuk melepas tekanan sebelum dilepas penuh.<br>**Administrative:** Bersihkan area sekitar breather sebelum dibuka agar kotoran tidak masuk (contamination control).<br>**Environmental:** Breather bekas ke limbah sesuai klasifikasi.<br>**PPE:** Goggles, sarung tangan. | OEM Manual (Inspect Fuel Tank Breather Filter / Inspect and Clean Axle Breathers); ISO 4406 |
| 5 | Melakukan pelumasan: auto greaser (pengisian & penggantian filler filter), greasing manual, slip joint & propshaft cross, PTO propshaft, cab tilt cylinder, dan prosedur oscillation joint harian | • (S) **Propshaft dapat berputar — pakaian longgar tersangkut**<br>• (S) Grease bertekanan dari grease gun<br>• (H) Postur menjangkau titik grease, kontak grease<br>• (E) Ceceran grease | • (S) **Terjerat propshaft — fatality/amputasi**<br>• (S) Grease injection injury<br>• (H) MSD, dermatitis<br>• (E) Pencemaran tanah | **Critical Control:** Engine mati dan unit terisolasi saat greasing di area propshaft; **dilarang memakai pakaian longgar atau perhiasan**; seluruh tool disimpan menjauh dari area propshaft; jari tidak pernah menutupi ujung nozzle grease gun.<br>**Engineering:** Grease gun dengan selang fleksibel agar tangan menjauh dari titik jepit; nipple diperiksa tidak buntu.<br>**Administrative:** Ikuti daftar dan jumlah titik pelumasan sesuai OEM; prosedur oscillation joint dijalankan sesuai jadwal harian dan berkala.<br>**Environmental:** Grease berlebih dibersihkan; majun ke TPS B3.<br>**PPE:** Coverall pas badan, sarung tangan nitril, goggles. | OEM Manual (Auto Greasing System / Manual Greasing / Daily Oscillation Joint Procedure / Grease the PTO Propshaft / Do not wear loose clothing which may be caught up in the prop shaft); Permenaker No. 38/2016 |
| 6 | Pemeriksaan level akhir, uji kebocoran, pencatatan service history, dan penyerahan limbah B3 | • (S) Level fluida kurang/berlebih<br>• (S) Kebocoran pada sambungan yang baru dikerjakan<br>• (E) **Limbah B3 tidak dikelola sesuai ketentuan** | • (S) Kegagalan komponen saat operasi<br>• (E) **Pencemaran & sanksi administratif lingkungan** | **Critical Control:** Uji kebocoran dilakukan setelah sistem bertekanan kembali, dengan personel menjauh dari garis semburan; deteksi kebocoran dengan kertas/kayu, bukan tangan.<br>**Administrative:** Catat jenis & jumlah fluida serta nomor part filter pada service history; reset counter servis.<br>**Environmental:** Seluruh limbah B3 (oli bekas, filter, majun, kemasan, grease) diserahkan ke TPS Limbah B3 berizin, tercatat dalam logbook, dan diangkut pengangkut berizin dengan manifest; **penyimpanan tidak melampaui batas waktu yang diizinkan**.<br>**PPE:** Sarung tangan nitril. | PP No. 22/2021; Permen LHK No. 6/2021; ISO 14001:2015 kl. 8.1; OEM Manual (Service History) |

Additional Safety Tips
- Bersihkan area sekitar tutup pengisian dan breather sebelum dibuka; kotoran yang masuk saat penggantian oli adalah sumber kontaminasi paling sering.
- Gunakan hanya suku cadang asli saat mengganti komponen; filter tiruan dengan media berbeda dapat menyebabkan kegagalan sistem.
- Tandai wadah limbah B3 dengan simbol dan label sesuai jenisnya sejak awal agar tidak tercampur.

Point of Concern
- Oli bekas mengandung senyawa hasil pembakaran dan logam berat; kontak kulit berulang dalam jangka panjang berisiko terhadap kesehatan.
- Filter tekanan tinggi pada sistem rem dapat menyimpan tekanan meski unit sudah mati; membukanya tanpa depressurising berisiko injection injury.
- Pengelolaan limbah B3 yang tidak sesuai ketentuan berpotensi menimbulkan sanksi administratif dan pencemaran yang biaya pemulihannya jauh melampaui biaya pengelolaan yang benar.

Common Mistakes
- Menguras oli saat unit baru berhenti beroperasi agar cepat mengalir — hindari dengan menunggu suhu turun ke tingkat aman dan menggunakan APD tahan panas.
- Membuang majun berminyak ke tempat sampah umum — hindari dengan wadah limbah B3 terpisah berlabel di setiap titik kerja.
- Melakukan greasing propshaft dengan engine hidup agar shaft bisa diputar — hindari dengan memutar shaft secara manual pada unit yang sudah diisolasi.

Golden Rules
- Tidak ada pekerjaan pada sistem bertekanan sebelum tekanan dilepas.
- Tidak ada fluida bekas yang jatuh ke tanah atau masuk drainase.
- Pakaian longgar tidak pernah dipakai di dekat propshaft.

Critical Controls
- Isolasi energi dan penopang unit sebelum bekerja di kolong.
- Verifikasi suhu fluida aman sebelum penggantian.
- Depressurising sebelum membuka filter tekanan tinggi.
- Spill kit dan wadah penampung tersedia sebelum pekerjaan dimulai.
- Limbah B3 tercatat dalam logbook dan diserahkan dengan manifest.

Required PPE
- Mandatory PPE: Safety helmet, safety glasses, safety shoes, coverall pas badan, sarung tangan kerja.
- Additional PPE: Sarung tangan nitril & tahan panas, apron, goggles, face shield saat membuka filter bertekanan.

Emergency Response
- Potensi Keadaan Darurat: Luka bakar fluida panas, grease/fluid injection injury, terjerat propshaft, tumpahan oli ke drainase.
- Respon Awal: Dinginkan luka bakar dengan air mengalir dan jangan mengoleskan apa pun; injection injury dirujuk sebagai kasus bedah darurat meski luka kecil; tumpahan segera dikontain dengan absorbent sebelum mencapai saluran air dan dilaporkan ke QSHE.
- Peralatan Darurat yang Diperlukan: Spill kit & absorbent boom, eyewash & safety shower, kotak P3K, APAR, alat komunikasi.

Keterangan
Interval penggantian mengikuti jadwal perawatan OEM (harian/10 jam, 500, 1.000, 2.000, dan 4.000 jam); jadwal ini adalah batas maksimum dan dapat diperpendek pada kondisi operasi berat, berdebu, atau bersuhu ekstrem.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

## JSEA-ADT-12

Proses / Pekerjaan: Penanganan AdBlue / DEF, Bahan Bakar Diesel, Coolant, dan Refrigerant R134a

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Menangani dan menyimpan bahan bakar diesel: pengisian, pemindahan, dan penyimpanan | • (S) **Uap bahan bakar mudah terbakar**<br>• (S) Listrik statis saat pemindahan<br>• (H) Kontak kulit & uap terhirup<br>• (E) Tumpahan meresap ke tanah & air tanah | • (S) **Kebakaran/ledakan — fatality**<br>• (H) Dermatitis, iritasi saluran napas<br>• (E) Pencemaran tanah & air tanah | **Critical Control:** Dilarang api terbuka, percikan, dan merokok di area bahan bakar; bonding & grounding saat pemindahan antar wadah; engine dimatikan saat pengisian.<br>**Engineering:** Tangki penyimpanan dengan secondary containment (bund); nozzle dengan auto shut-off; APAR kelas B di titik pengisian.<br>**Administrative:** Penyimpanan sesuai ketentuan; SDS tersedia; larangan mengisi melebihi kapasitas.<br>**Environmental:** Spill kit hidrokarbon; tumpahan segera dikontain.<br>**PPE:** Sarung tangan tahan kimia, goggles, coverall anti-statik. | OEM Manual (Handling and Storing Diesel Fuel / Measures to Prevent Fires); Permenakertrans No. 4/1980; NFPA 30; PP No. 22/2021 |
| 2 | Menangani, mengangkut, dan menyimpan AdBlue / DEF | • (H) Kontak dengan kulit & mata, uap amonia<br>• (S) Kristalisasi menyebabkan permukaan licin<br>• (E) Tumpahan DEF ke tanah & saluran air | • (H) Iritasi kulit, mata, dan saluran napas<br>• (S) Terpeleset pada permukaan berkristal<br>• (E) Pencemaran nutrien pada badan air | **Critical Control:** Gunakan **hanya wadah dan peralatan khusus DEF** — DEF bersifat korosif terhadap sebagian logam dan sangat mudah terkontaminasi; **jangan pernah mencampur DEF dengan bahan bakar, oli, atau air keran**.<br>**Engineering:** Penyimpanan pada rentang suhu yang disyaratkan, terlindung dari sinar matahari langsung; wadah tertutup.<br>**Administrative:** Ikuti instruksi OEM untuk transportasi, penyimpanan, serta perawatan & perbaikan sistem DEF; SDS tersedia.<br>**Environmental:** Tumpahan dibilas dengan air bersih sebelum mengkristal; jangan dibiarkan masuk drainase.<br>**PPE:** Sarung tangan nitril, goggles. | OEM Manual (Handling AdBlue® / DEF / Transportation and Storage of AdBlue® / DEF / AdBlue® / DEF Instructions for Maintenance and Repair); PP No. 22/2021; Permenaker No. 5/2018 |
| 3 | Mengganti filter dan breather sistem DEF serta melakukan perbaikan pada sistem SCR | • (S) Sistem SCR bertekanan & panas<br>• (H) Kontak DEF & uap amonia dalam ruang sempit<br>• (E) Ceceran DEF | • (S) Semburan DEF bertekanan, luka bakar termal dari exhaust<br>• (H) Iritasi mata & saluran napas<br>• (E) Pencemaran | **Critical Control:** Tunggu sistem dingin; lepaskan tekanan sistem DEF sesuai prosedur OEM sebelum membuka sambungan.<br>**Engineering:** Ventilasi memadai; wadah penampung.<br>**Administrative:** Kebersihan ekstrem — kontaminasi sekecil apa pun merusak katalis SCR; gunakan hanya komponen asli.<br>**PPE:** Goggles, sarung tangan nitril, masker bila uap terasa menyengat. | OEM Manual (Change AdBlue / DEF Filter / Inspect AdBlue / DEF Tank Breather Filter); Permenaker No. 5/2018 |
| 4 | Menangani coolant: pemeriksaan campuran, penggantian, dan pengisian sistem pendingin | • (H) **Coolant panas bertekanan menyembur**<br>• (H) Etilen glikol bersifat toksik bila tertelan<br>• (E) Coolant bekas = limbah B3 | • (H) **Luka bakar derajat 2–3**, keracunan<br>• (E) Pencemaran tanah & air | **Critical Control:** **Filler cap hanya dibuka saat engine cukup dingin untuk disentuh tangan telanjang**, dikendurkan bertahap ke stop pertama untuk melepas tekanan sebelum dibuka penuh — **pelepasan fluida secara eksplosif dari sistem pendingin bertekanan dapat menyebabkan luka bakar serius**.<br>**Engineering:** Wadah penampung; refractometer untuk memeriksa campuran.<br>**Administrative:** Campuran coolant sesuai spesifikasi OEM; larangan menambahkan air biasa; wadah coolant tidak boleh menggunakan botol minuman.<br>**Environmental:** Coolant bekas ke TPS Limbah B3.<br>**PPE:** Face shield, sarung tangan tahan panas & kimia, apron. | OEM Manual (**Explosive release of fluids from the pressurised cooling system can cause serious burns. Shut off the engine and only remove the filler cap when the engine is cool enough to touch with bare hands. Slowly loosen the cap to the first stop** / Check the Coolant Mixture); PP No. 22/2021 |
| 5 | Menangani refrigerant R134a: pemeriksaan sistem AC, uji kebocoran, pengosongan (recovery), dan pengisian | • (S) **Refrigerant bertekanan, pembekuan cepat saat kontak**<br>• (H) Frostbite pada kulit & mata, asfiksian di ruang tertutup<br>• (H) Uap refrigerant terurai menjadi gas beracun bila kena api/permukaan sangat panas<br>• (E) **Pelepasan refrigerant ke atmosfer — gas rumah kaca** | • (S) Semburan bertekanan, komponen terlempar<br>• (H) **Frostbite, kerusakan mata permanen, kekurangan oksigen**<br>• (E) Pelanggaran ketentuan pengendalian bahan perusak ozon & GRK | **Critical Control:** **Refrigerant tidak boleh dilepas ke atmosfer** — wajib menggunakan mesin recovery/recycling oleh teknisi bersertifikat; dilarang mengelas, menggerinda, atau merokok di dekat sistem AC yang berisi refrigerant.<br>**Engineering:** Manifold gauge & selang sesuai R134a; ventilasi memadai — refrigerant lebih berat dari udara dan terkumpul di area rendah.<br>**Administrative:** Hanya teknisi AC bersertifikat; SDS refrigerant tersedia; uji kebocoran dengan detektor, bukan api.<br>**Environmental:** Refrigerant hasil recovery dikelola sesuai ketentuan; catat jumlah yang diambil dan diisi.<br>**PPE:** **Face shield + goggles wajib**, sarung tangan tahan dingin (cryogenic), coverall lengan panjang. | OEM Manual (Refrigerant R134A / R134A Air Conditioner System Test / Refrigerant Leak Test); Permen LHK tentang pengendalian Bahan Perusak Ozon; Permenaker No. 5/2018 |
| 6 | Pengisian ulang oli kompresor AC, penggantian komponen, dan uji fungsi sistem | • (S) Sistem AC bertekanan tinggi pada sisi discharge<br>• (S) Kompresor & clutch berputar saat uji<br>• (H) Kontak oli refrigerant<br>• (E) Pelepasan refrigerant saat pembongkaran | • (S) Semburan bertekanan, terjerat komponen berputar<br>• (H) Iritasi kulit<br>• (E) Pencemaran atmosfer | **Critical Control:** Sistem dikosongkan dengan mesin recovery sebelum komponen dibuka; guard komponen berputar terpasang sebelum uji.<br>**Administrative:** Uji tekanan sisi tinggi & rendah sesuai tabel OEM; area bebas personel saat uji.<br>**PPE:** Face shield, sarung tangan, ear plug. | OEM Manual (HVAC Oil Refill / Component Replacement / Air Compressor Clutch Test / Air High/Low Pressure Switch Test); Permenaker No. 38/2016 |

Additional Safety Tips
- DEF mengkristal saat mengering dan membuat permukaan menjadi licin serta sulit dibersihkan; bilas tumpahan segera dengan air bersih.
- Refrigerant cair yang mengenai mata dapat menyebabkan kerusakan permanen dalam hitungan detik; pelindung mata bukan opsional pada pekerjaan AC.
- Simpan coolant, DEF, dan bahan bakar dalam wadah berlabel jelas; jangan pernah menggunakan wadah bekas minuman.

Point of Concern
- Sistem SCR sangat sensitif terhadap kontaminasi; DEF yang tercampur bahan lain merusak katalis dan menimbulkan biaya perbaikan besar.
- Refrigerant terkumpul di area rendah seperti pit servis dan dapat menggeser oksigen tanpa gejala peringatan.
- Kebiasaan membuka tutup radiator "sedikit dulu untuk melihat" pada engine yang masih panas adalah penyebab luka bakar wajah yang berulang.

Common Mistakes
- Menggunakan corong atau wadah bekas oli untuk mengisi DEF — hindari dengan peralatan khusus DEF yang diberi label dan tidak dipertukarkan.
- Melepas refrigerant ke udara agar sistem cepat kosong — hindari dengan mesin recovery dan teknisi bersertifikat.
- Menambahkan air biasa ke sistem pendingin agar level naik — hindari dengan campuran coolant sesuai spesifikasi dan pemeriksaan dengan refractometer.

Golden Rules
- Tutup radiator hanya dibuka pada engine dingin, dikendurkan bertahap.
- Refrigerant tidak pernah dilepas ke atmosfer.
- Peralatan DEF tidak pernah dipakai untuk cairan lain.

Critical Controls
- Verifikasi engine dingin sebelum membuka sistem pendingin.
- Bonding, grounding, dan larangan sumber api pada pekerjaan bahan bakar.
- Peralatan khusus dan bersih untuk DEF.
- Mesin recovery refrigerant dan teknisi bersertifikat.
- Pelindung mata & wajah pada seluruh pekerjaan fluida bertekanan.

Required PPE
- Mandatory PPE: Safety helmet, safety glasses, safety shoes, coverall lengan panjang, sarung tangan kerja.
- Additional PPE: Face shield, goggles, sarung tangan tahan kimia/panas/dingin, apron, coverall anti-statik untuk bahan bakar, masker/respirator bila uap terkonsentrasi.

Emergency Response
- Potensi Keadaan Darurat: Kebakaran bahan bakar, luka bakar coolant, frostbite refrigerant, kekurangan oksigen di area rendah, tumpahan bahan kimia.
- Respon Awal: Bilas kulit/mata yang terpapar dengan air mengalir minimal 15 menit dan rujuk medis; **frostbite tidak boleh digosok atau dipanaskan langsung** — hangatkan perlahan dan rujuk medis; evakuasi dan ventilasi area bila ada dugaan akumulasi refrigerant; kontain tumpahan sebelum mencapai drainase.
- Peralatan Darurat yang Diperlukan: Eyewash & safety shower, APAR kelas B & ABC, spill kit, detektor oksigen untuk area rendah, kotak P3K, alat komunikasi.

Keterangan
Pekerjaan pada sistem AC dan sistem SCR menuntut kompetensi khusus; teknisi tanpa sertifikasi tidak boleh melaksanakan recovery maupun pengisian refrigerant.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

## JSEA-ADT-13

Proses / Pekerjaan: Recovery, Towing, dan Retrieval Unit Breakdown atau Terperosok

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Menilai situasi: kondisi unit, kemiringan, kestabilan tanah, lalu lintas sekitar, dan menentukan metode recovery | • (S) Metode recovery dipilih tanpa penilaian<br>• (S) Unit berada di lereng / dekat tepi<br>• (S) Lalu lintas unit lain di sekitar lokasi<br>• (E) Ceceran fluida dari unit rusak | • (S) Unit meluncur/terguling saat recovery — fatality<br>• (S) Tertabrak unit lain di lokasi recovery<br>• (E) Pencemaran tanah | **Critical Control:** **Karena bahaya menarik unit tanpa sistem pengereman yang efektif, unit yang tidak berfungsi sebaiknya diangkut dengan kendaraan derek/breakdown yang sesuai, bukan ditarik**; recovery hanya dilakukan setelah penilaian risiko tertulis di lokasi.<br>**Administrative:** Recovery plan disetujui pengawas; area dibarikade & lalu lintas dialihkan; komunikasi radio; supervisor recovery ditunjuk.<br>**Environmental:** Spill kit di lokasi.<br>**PPE:** Rompi reflektif, APD lengkap. | OEM Manual (**Because of the potential danger in towing a vehicle without an effective braking system it is recommended that the machine is transported on a suitable breakdown vehicle** / Towing and Retrieval General Safety Rules); Kepmen ESDM 1827 K/30/MEM/2018 |
| 2 | Membebaskan unit yang terperosok dengan teknik rocking out (maju-mundur bertahap) | • (S) Unit melompat maju/mundur tak terduga<br>• (S) Transmisi & torque converter panas berlebih<br>• (H) Getaran & hentakan pada operator<br>• (E) Kerusakan permukaan jalan | • (S) Menabrak orang/objek di sekitar; kerusakan drivetrain<br>• (H) Cedera leher/punggung<br>• (E) Erosi tanah | **Critical Control:** Area di depan dan belakang unit dikosongkan total sebelum rocking out; **gunakan gas ringan dan stabil, jangan pernah gas penuh**.<br>**Administrative:** Bila transmisi terlalu panas, pindahkan ke netral dan jalankan engine pada putaran menengah 2–3 menit sampai dingin; gunakan range hold agar transmisi tidak berpindah gigi naik-turun; hentikan bila unit tidak menunjukkan kemajuan.<br>**PPE:** Sabuk pengaman terpasang. | OEM Manual (Stuck Machine / Rocking Out — apply steady, light throttle (never full throttle) / If the transmission overheats, shift to N and operate the engine at 1 500 rpm until it cools); Permenaker No. 38/2016 |
| 3 | Mengganjal roda dan menghubungkan unit ke kendaraan penarik **sebelum** melepas rem atau drive shaft | • (S) **Unit meluncur bebas begitu rem dilepas atau drive shaft dilepas**<br>• (S) Kendaraan penarik tidak mampu menahan massa gabungan<br>• (E) Tidak Signifikan | • (S) **Unit meluncur menabrak/melindas — fatality**<br>• (E) Tidak Signifikan | **Critical Control:** **Ganjal roda dan sambungkan unit ke kendaraan penarik terlebih dahulu, baru lepaskan drive shaft atau park brake** — unit akan meluncur bebas setelahnya; **pastikan sistem rem kendaraan penarik mampu menahan massa gabungan kedua unit**.<br>**Engineering:** Towing bar/rigid tow, bukan tali lentur, bila memungkinkan; alat tarik bersertifikat dengan SWL memadai.<br>**Administrative:** Verifikasi ganjal & sambungan oleh orang kedua sebelum rem dilepas.<br>**PPE:** Rompi reflektif, sarung tangan. | OEM Manual (**Machine will roll freely when drive shafts are disconnected. To prevent injury or damage, chock wheels and connect machine to towing vehicle before disconnecting drive shafts** / Ensure the brake system of the towing machine is sufficient to hold the combined mass); Permenaker No. 8/2020 |
| 4 | **Melepas drive shaft: membebaskan torsi terlebih dahulu** | • (S) **Torsi tersimpan pada drive shaft**<br>• (S) Drive shaft berat jatuh<br>• (H) Postur kerja di kolong<br>• (E) Ceceran grease | • (S) **Drive shaft berputar mendadak saat dilepas — cedera serius pada pekerja**<br>• (S) Kaki tertimpa drive shaft<br>• (H) MSD<br>• (E) Pencemaran | **Critical Control:** **Torsi pada drive shaft antara transmisi dan transfer case wajib dibebaskan sebelum shaft dilepas** — angkat roda yang terkait dari permukaan tanah; roda akan berputar sendiri melepaskan torsi, dan setelah itu shaft aman dilepas; **drive shaft harus dilepas seluruhnya saat unit akan ditarik**.<br>**Engineering:** Penopang shaft; unit ditopang stand mekanis saat roda diangkat.<br>**Administrative:** **Melepas drive shaft di kedua sisi park brake membuat park brake tidak berfungsi sama sekali** — kompensasi dengan ganjal dan sambungan ke penarik.<br>**PPE:** Sarung tangan, safety shoes toe cap, goggles. | OEM Manual (**If there is torsion on the drive shaft, serious injury can occur to persons removing the drive shaft. Release torsion from the drive shaft between the transmission and the transfer case** / Removing the drive shafts on either side of the park brake renders the park brake inoperative); Permenaker No. 38/2016 |
| 5 | Melepas park brake secara mekanis bila diperlukan | • (S) **Unit meluncur bebas saat park brake dilepas**<br>• (S) Energi pegas pada mekanisme release<br>• (E) Tidak Signifikan | • (S) Unit meluncur — fatality<br>• (S) Komponen release terlempar<br>• (E) Tidak Signifikan | **Critical Control:** **Ganjal roda dan sambungkan unit ke kendaraan penarik sebelum park brake dilepas**; gunakan release stud, nut, dan washer resmi dari posisi penyimpanannya, sesuai prosedur OEM.<br>**Administrative:** Setelah park brake dilepas mekanis, **steering tetap tidak berfungsi**; artikulasi hanya dapat diperoleh dengan melepas hose suplai silinder steering.<br>**PPE:** Face shield, sarung tangan. | OEM Manual (**Machine will roll freely when park brake is released. To prevent injury or damage, chock wheels and connect machine to towing vehicle before releasing park brake** / Mechanically Release Park Brake); Permenaker No. 38/2016 |
| 6 | Menangani unit dengan steering tidak berfungsi: melepas hose suplai silinder steering dan menyumbatnya | • (S) Oli hidrolik bertekanan menyembur<br>• (S) Unit dapat berartikulasi tak terkendali saat ditarik<br>• (E) **Tumpahan oli hidrolik tidak terhindarkan** | • (S) Fluid injection injury; unit berbelok sendiri saat ditarik<br>• (E) Pencemaran tanah | **Critical Control:** Tekanan hidrolik dilepas sebelum hose dilepas; **hose dan port pada silinder steering wajib disumbat dengan rapat**; kedua T-piece silinder steering dihubungkan (looping) dengan hose yang sesuai agar artikulasi terkendali.<br>**Environmental:** **Sebagian tumpahan oli tidak dapat dihindari — bersihkan segera** dengan spill kit dan tampung sebisa mungkin.<br>**Administrative:** Articulation safety bar dipertimbangkan bila unit tidak perlu berartikulasi.<br>**PPE:** Face shield, sarung tangan nitril. | OEM Manual (Towing With Inoperable Steering / the hoses and ports on the steering cylinders must be securely plugged. Care should be taken for the minimum spillage of hydraulic oil / Some oil spillage will be unavoidable. Clean up any oil spillage as soon as possible); PP No. 22/2021 |
| 7 | Melakukan penarikan | • (S) **Tidak ada power steering dan tidak ada sistem pengereman pada unit yang ditarik**<br>• (S) Kecepatan berlebih<br>• (S) Tali/bar tarik putus dan melecut<br>• (E) Tidak Signifikan | • (S) **Unit yang ditarik menabrak kendaraan penarik atau keluar jalur — fatality**<br>• (S) Alat tarik melecut mengenai orang<br>• (E) Tidak Signifikan | **Critical Control:** **Kecepatan penarikan tidak boleh melebihi 2 km/jam**; **dengan engine mati, sistem hidrolik dan pneumatik tidak berfungsi — tidak ada power steering maupun pengereman**; tidak seorang pun berada di sisi alat tarik atau di antara kedua unit selama penarikan.<br>**Engineering:** Alat tarik bersertifikat dengan SWL memadai; damper/blanket pada tali tarik untuk meredam bila putus.<br>**Administrative:** Operator harus tetap berada di unit yang ditarik untuk mengemudikan bila steering masih berfungsi dan engine dapat hidup; **bila kerusakan pada transmisi, engine tidak boleh dihidupkan** karena engine terhubung langsung ke transmisi; rute penarikan direncanakan menghindari lereng.<br>**PPE:** Sabuk pengaman, rompi reflektif. | OEM Manual (**Road speed must not exceed 2 km/hr** / With the engine stopped the machine hydraulic and pneumatic systems are not operative. This means there is no powered steering or braking system / If the failure is in the transmission do not run the engine); Kepmen ESDM 1827 K/30/MEM/2018 |

Additional Safety Tips
- Rem yang dilepas dengan kontrol tangan park brake hanya boleh dilakukan setelah roda diganjal.
- Alat tarik yang putus di bawah tegangan melecut dengan energi mematikan; jangan pernah berdiri di zona lecutan.
- Selesaikan prosedur wheel torque setelah roda dipasang kembali bila roda sempat dilepas saat recovery.

Point of Concern
- Unit yang ditarik tanpa sistem pengereman efektif adalah beban tanpa kendali; inilah alasan OEM merekomendasikan pengangkutan dengan kendaraan derek daripada penarikan.
- Torsi tersimpan pada drive shaft sering tidak terlihat sampai baut terakhir dilepas dan shaft berputar mendadak.
- Melepas drive shaft di kedua sisi park brake menghilangkan seluruh kemampuan menahan unit — kondisi ini harus dikompensasi sebelum, bukan sesudah.

Common Mistakes
- Melepas park brake atau drive shaft sebelum unit tersambung ke penarik — hindari dengan urutan wajib: ganjal, sambung, baru lepas.
- Menarik unit dengan kecepatan mengikuti arus lalu lintas site — hindari dengan batas 2 km/jam dan pengawalan.
- Menghidupkan engine untuk membantu steering padahal kerusakan ada di transmisi — hindari dengan mendiagnosis jenis kerusakan sebelum menentukan metode.

Golden Rules
- Ganjal dan sambungkan sebelum melepas rem atau drive shaft.
- Kecepatan penarikan tidak melebihi 2 km/jam.
- Torsi drive shaft dibebaskan sebelum shaft dilepas.

Critical Controls
- Recovery plan dan penilaian risiko di lokasi sebelum mulai.
- Ganjal roda terpasang dan unit tersambung ke penarik sebelum rem/drive shaft dilepas.
- Kapasitas pengereman kendaraan penarik memadai untuk massa gabungan.
- Torsi drive shaft dibebaskan dengan mengangkat roda terkait.
- Batas kecepatan penarikan 2 km/jam ditegakkan.

Required PPE
- Mandatory PPE: Safety helmet, safety glasses, safety shoes toe cap, coverall, sarung tangan kerja, rompi reflektif.
- Additional PPE: Face shield, sarung tangan nitril untuk pekerjaan hidrolik.

Emergency Response
- Potensi Keadaan Darurat: Unit meluncur bebas, alat tarik putus, unit terguling saat recovery, tumpahan oli.
- Respon Awal: Jauhkan semua orang dari lintasan unit dan zona lecutan alat tarik; jangan mencoba menghentikan unit yang meluncur secara fisik; hentikan operasi dan nilai ulang bila kondisi berubah; kontain tumpahan.
- Peralatan Darurat yang Diperlukan: Chock block cadangan, spill kit, kotak P3K, radio komunikasi, barikade, akses MEDEVAC.

Keterangan
Recovery adalah pekerjaan non-rutin dengan kondisi yang selalu berbeda; JSEA ini wajib ditinjau ulang di lokasi sebelum pelaksanaan, bukan diterapkan langsung tanpa penyesuaian.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»

---

## JSEA-ADT-14

Proses / Pekerjaan: Transportasi Unit — Naik/Turun Trailer, Pengikatan (Tie-Down), Pengangkatan Unit, dan Prosedur Jacking

| No | Tahapan Pekerjaan | Bahaya & Aspek Lingkungan | Risiko & Dampak | Kontrol | Referensi |
|---|---|---|---|---|---|
| 1 | Merencanakan transportasi: memeriksa dimensi, massa, rute, batas tinggi/lebar/berat, dan perizinan | • (S) Dimensi & massa melebihi kapasitas trailer atau batas jalan<br>• (S) Rute melewati jembatan atau terowongan tidak memadai<br>• (E) Emisi & kerusakan jalan | • (S) Trailer terguling, jembatan gagal — fatality<br>• (S) Unit membentur struktur di atas jalan<br>• (E) Pencemaran & kerusakan infrastruktur | **Critical Control:** Massa dan dimensi unit diambil dari OEM Manual, bukan diperkirakan; kapasitas trailer, rute, dan izin dimensi/berat diverifikasi sebelum pemuatan.<br>**Administrative:** Journey Management; pengawalan bila diperlukan; koordinasi dengan pihak berwenang untuk muatan berdimensi lebih.<br>**PPE:** — | OEM Manual (Transporting / Machine Dimensions / Mass); UU No. 22/2009; Kepmen ESDM 1827 K/30/MEM/2018 |
| 2 | Menyiapkan trailer dan area pemuatan: permukaan rata & padat, trailer diganjal, ramp terpasang aman | • (S) Trailer bergerak saat unit naik<br>• (S) Ramp bergeser atau amblas<br>• (S) Permukaan licin<br>• (E) Tidak Signifikan | • (S) Unit terguling dari ramp — fatality<br>• (E) Tidak Signifikan | **Critical Control:** Trailer diganjal dan rem parkir aktif; ramp terkunci pada trailer, sudut ramp tidak melebihi kemampuan unit; permukaan pemuatan rata dan padat.<br>**Engineering:** Plat/matras pada tanah lunak; permukaan ramp anti-slip & bersih dari lumpur.<br>**Administrative:** Barikade area; spotter di posisi aman dan terlihat operator.<br>**PPE:** Rompi reflektif. | OEM Manual (Driving Machine Onto Transport Vehicle); Permenaker No. 8/2020 |
| 3 | Mengemudikan unit naik ke atas trailer | • (S) Unit tergelincir atau miring di ramp<br>• (S) Titik berat berpindah saat melewati puncak ramp<br>• (S) Spotter berada di zona bahaya<br>• (E) Tidak Signifikan | • (S) Unit terguling atau jatuh dari trailer — fatality<br>• (S) Spotter tertabrak/terlindas<br>• (E) Tidak Signifikan | **Critical Control:** Unit dijalankan lurus, perlahan, dan tanpa berbelok di atas ramp; spotter berdiri di sisi, tidak pernah di belakang atau di jalur unit; komunikasi positif.<br>**Administrative:** Operator kompeten; hentikan bila unit mulai miring; bin turun penuh dan attachment pada posisi transport.<br>**PPE:** Sabuk pengaman, rompi reflektif untuk spotter. | OEM Manual (Driving Machine Onto Transport Vehicle); Kepmen ESDM 1827 K/30/MEM/2018 |
| 4 | Mengamankan unit di atas trailer: park brake, ganjal, articulation safety bar, dan pengikatan (tie-down) | • (S) Unit bergeser atau berartikulasi selama perjalanan<br>• (S) Tie-down pada titik yang salah<br>• (S) Pengikat kendur akibat getaran perjalanan<br>• (E) Tidak Signifikan | • (S) **Unit lepas dari trailer di jalan — fatality bagi pengguna jalan lain**<br>• (E) Tidak Signifikan | **Critical Control:** Pengikatan hanya pada **titik tie-down resmi** sesuai panduan OEM; **articulation safety bar terpasang dan digembok selama transportasi**; park brake aktif, transmisi netral, ganjal roda terpasang di depan dan belakang; **pintu kabin terkunci**.<br>**Engineering:** Chain/strap bersertifikat dengan WLL memadai dan sudut pengikatan sesuai; pelindung pada sudut tajam.<br>**Administrative:** Pemeriksaan ulang kekencangan pengikat setelah beberapa kilometer pertama dan pada setiap pemberhentian.<br>**PPE:** Sarung tangan, safety shoes. | OEM Manual (Machine Tie-Down Guidelines / All doors must be locked); UU No. 22/2009; Permenaker No. 8/2020 |
| 5 | Mengangkat unit dengan crane (bila unit tidak dapat dijalankan naik) | • (S) Massa unit sangat besar<br>• (S) Titik angkat tidak resmi<br>• (S) Beban tergantung di atas area kerja<br>• (E) Tidak Signifikan | • (S) Unit jatuh saat diangkat — fatality<br>• (E) Tidak Signifikan | **Critical Control:** Hanya titik angkat resmi pada OEM Manual yang digunakan; massa unit dikonfirmasi; crane bersertifikat dengan SWL memadai; exclusion zone di bawah dan sekitar beban.<br>**Engineering:** Spreader bar; tag line; softener pada sudut.<br>**Administrative:** Lifting plan tertulis; rigger & operator crane bersertifikat; weather monitoring (angin) sebelum & selama pengangkatan; ikuti JSEA-GEN-05.<br>**PPE:** Helm bertali dagu, rompi reflektif. | OEM Manual (Lifting Machine); Permenaker No. 8/2020; ASME B30.5 |
| 6 | **Prosedur jacking unit** untuk penggantian roda atau akses servis | • (S) **Unit meluncur dari dongkrak meskipun park brake aktif**<br>• (S) Dongkrak amblas pada tanah lunak<br>• (S) Dongkrak melebihi beban atau miring<br>• (H) Komponen & fluida panas<br>• (E) Tidak Signifikan | • (S) **Unit jatuh menimpa pekerja — fatality**<br>• (H) Luka bakar<br>• (E) Tidak Signifikan | **Critical Control:** **Bila satu as diangkat dengan dongkrak, roda pada minimal satu as lain wajib diganjal — unit tetap berisiko meluncur dari dongkrak meskipun park brake aktif**; **stand mekanis wajib dipasang sebelum siapa pun bekerja di bawah unit**; **jangan bekerja pada unit yang masih panas**.<br>**Engineering:** Dongkrak berkapasitas sesuai dan diposisikan pada titik jacking resmi; **gunakan plat dasar yang lebih lebar di bawah dongkrak bila permukaan lunak**; stop block dipasang pada unit dengan suspensi depan yang dapat disetel ketinggiannya agar suspensi tidak turun.<br>**Administrative:** Verifikasi kestabilan oleh orang kedua sebelum masuk kolong; tunggu unit dingin.<br>**PPE:** Safety shoes toe cap, sarung tangan. | OEM Manual (**Machine Jacking Procedure** / When servicing the machine and one of the axles is raised off the ground using jacks, the wheels on at least one of the other axles must be chocked... there is a risk that the machine may roll off the jacks, even if the park brake is applied / use a wider base plate under the jack / Install the stop block... to prevent the front suspension from lowering / Beware of hot fluids and components); Permenaker No. 8/2020; OSHA 29 CFR 1926.600 |
| 7 | Menurunkan unit dari trailer dan mengembalikan ke kondisi operasi | • (S) Unit meluncur turun terlalu cepat<br>• (S) Pengikat dilepas sebelum area aman<br>• (S) Articulation safety bar masih terpasang saat unit dijalankan<br>• (E) Tidak Signifikan | • (S) Unit lepas kendali di ramp — fatality<br>• (S) Kerusakan sistem steering bila safety bar belum dilepas<br>• (E) Tidak Signifikan | **Critical Control:** Pengikat dilepas hanya setelah trailer diganjal dan area dibarikade; **articulation safety bar dilepas dan dikembalikan ke posisi simpan sebelum unit dijalankan** (ikuti JSEA-ADT-05); unit turun perlahan dan lurus.<br>**Administrative:** P2H ulang setelah transportasi sebelum unit dioperasikan; periksa kekencangan mur roda bila roda sempat dilepas.<br>**PPE:** Rompi reflektif, sabuk pengaman. | OEM Manual (Transporting / Disengaging the Articulation Safety Bar); Kepmen ESDM 1827 K/30/MEM/2018 |

Additional Safety Tips
- Kunci seluruh pintu kabin sebelum transportasi agar tidak terbuka dan rusak akibat angin selama perjalanan.
- Periksa ulang kekencangan pengikat setelah beberapa kilometer pertama; pengikat selalu mengendur akibat getaran awal perjalanan.
- Gunakan plat dasar yang lebih lebar di bawah dongkrak setiap kali permukaan tanah meragukan, bukan hanya saat sudah terlihat amblas.

Point of Concern
- Unit dapat meluncur dari dongkrak meskipun park brake aktif; ganjal pada as lain adalah kontrol independen yang tidak boleh dilewatkan.
- Unit yang lepas dari trailer di jalan umum membahayakan pengguna jalan lain dan berkonsekuensi hukum berat.
- Articulation safety bar yang lupa dilepas setelah transportasi dapat merusak sistem steering saat unit pertama kali dijalankan.

Common Mistakes
- Mengikat unit pada titik yang terlihat kuat tetapi bukan titik tie-down resmi — hindari dengan mengikuti panduan tie-down OEM.
- Bekerja di bawah unit yang hanya ditopang dongkrak — hindari dengan stand mekanis wajib dan verifikasi orang kedua.
- Menjalankan unit turun dari trailer sambil berbelok untuk menghemat waktu — hindari dengan aturan turun lurus dan perlahan.

Golden Rules
- Tidak seorang pun bekerja di bawah unit yang hanya ditopang dongkrak.
- Pengikatan hanya pada titik tie-down resmi.
- Articulation safety bar terpasang selama transportasi dan dilepas sebelum unit dijalankan.

Critical Controls
- Massa & dimensi unit dikonfirmasi dari OEM Manual; kapasitas trailer & izin rute terverifikasi.
- Trailer diganjal dan ramp terkunci sebelum pemuatan.
- Articulation safety bar, park brake, ganjal, dan tie-down pada titik resmi.
- Ganjal pada as lain saat jacking, ditambah stand mekanis sebelum masuk kolong.
- P2H ulang setelah transportasi sebelum unit dioperasikan.

Required PPE
- Mandatory PPE: Safety helmet, safety glasses, safety shoes toe cap, coverall, sarung tangan kerja, rompi reflektif.
- Additional PPE: Helm bertali dagu untuk pekerjaan pengangkatan, sarung tangan anti-potong untuk penanganan chain/strap.

Emergency Response
- Potensi Keadaan Darurat: Unit jatuh dari trailer atau ramp, unit jatuh dari dongkrak, beban jatuh saat pengangkatan crane.
- Respon Awal: Hentikan seluruh pergerakan; jangan mencoba menahan unit atau beban; amankan area dan hentikan lalu lintas di sekitar; aktifkan ERT dan siapkan alat angkat sebelum penanganan korban.
- Peralatan Darurat yang Diperlukan: Kotak P3K, spine board, chock block cadangan, alat angkat cadangan, barikade & rambu, alat komunikasi, akses MEDEVAC.

Keterangan
Modul ini menutup rangkaian JSEA Bagian C; prosedur jacking pada tahapan No. 6 juga berlaku untuk pekerjaan penggantian ban pada JSEA-ADT-09.

«Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.»
