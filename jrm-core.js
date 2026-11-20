/* ==========================================================================
   J.A.S.M.I.N — jrm-core.js
   Logika murni Journey Risk Management (JRM): baca link Google Maps, jadwal
   perjalanan & istirahat, penilaian risiko, model dokumen, serta pembuat
   file PDF dan Word. Tidak menyentuh DOM (dapat diuji di Node).
   ========================================================================== */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.JRM_CORE = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  /* ---------- pilihan isian (mengikuti Form JRM lama) ---------- */
  const OPTS = {
    partner: [['sendiri', 'Sendiri'], ['berdua', 'Berdua'], ['lebih', 'Lebih dari 2 orang']],
    jalur: [['darat', 'Darat'], ['laut', 'Laut'], ['sungai', 'Sungai'], ['udara', 'Udara'], ['lain', 'Lainnya']],
    kendaraan: [['lv4wd', 'LV 4WD'], ['lv2wd', 'LV 2WD'], ['truk', 'Truk'], ['mpv', 'MPV'], ['motor', 'Sepeda motor'], ['lain', 'Lainnya']],
    jenisJalan: [['tanah', 'Tanah'], ['aspal', 'Aspal'], ['logging', 'Logging'], ['berbatu', 'Berbatu'], ['gambut', 'Gambut'], ['lain', 'Lainnya']],
    kondisi: [['baik', 'Baik / terawat'], ['rusak', 'Rusak / tidak terawat'], ['tutup', 'Tidak dapat dilalui']],
    lebar: [['1', '1 mobil (± 3 m) atau kurang'], ['2', '2 mobil (± 6 m)'], ['3', 'Lebih dari 6 m']],
    permukaan: [['datar', 'Datar'], ['berbukit', 'Berbukit'], ['gunung', 'Gunung']],
    barang: [['sparepart', 'Sparepart'], ['mesin', 'Mesin / unit'], ['lain', 'Lainnya']],
  };
  const labelOf = (group, key) => { const o = OPTS[group].find((x) => x[0] === key); return o ? o[1] : key; };

  /* ---------- geometri ---------- */
  const rad = (d) => (d * Math.PI) / 180;
  function hav(a, b) {
    const dLat = rad(b[0] - a[0]), dLng = rad(b[1] - a[1]);
    const x = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a[0])) * Math.cos(rad(b[0])) * Math.sin(dLng / 2) ** 2;
    return 6371 * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
  }
  function cumulative(coords) {
    const c = [0];
    for (let i = 1; i < coords.length; i++) c.push(c[i - 1] + hav(coords[i - 1], coords[i]));
    return c;
  }
  function pointAtKm(coords, cum, km) {
    if (!coords.length) return null;
    const total = cum[cum.length - 1];
    if (km <= 0) return coords[0];
    if (km >= total) return coords[coords.length - 1];
    let lo = 0, hi = cum.length - 1;
    while (hi - lo > 1) { const m = (lo + hi) >> 1; if (cum[m] <= km) lo = m; else hi = m; }
    const t = (km - cum[lo]) / Math.max(1e-9, cum[hi] - cum[lo]);
    return [coords[lo][0] + (coords[hi][0] - coords[lo][0]) * t, coords[lo][1] + (coords[hi][1] - coords[lo][1]) * t];
  }
  // proyeksi sederhana (equirectangular) untuk sketsa rute
  function projectRoute(coords, w, h, pad = 12) {
    if (!coords || coords.length < 2) return { pts: [], scale: 1 };
    const lat0 = coords.reduce((s, c) => s + c[0], 0) / coords.length;
    const kx = Math.cos(rad(lat0));
    const xs = coords.map((c) => c[1] * kx), ys = coords.map((c) => -c[0]);
    const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys);
    const sx = (w - 2 * pad) / Math.max(1e-9, maxX - minX), sy = (h - 2 * pad) / Math.max(1e-9, maxY - minY);
    const s = Math.min(sx, sy);
    const ox = pad + ((w - 2 * pad) - (maxX - minX) * s) / 2, oy = pad + ((h - 2 * pad) - (maxY - minY) * s) / 2;
    return { pts: coords.map((c, i) => [ox + (xs[i] - minX) * s, oy + (ys[i] - minY) * s]), project: (lat, lng) => [ox + (lng * kx - minX) * s, oy + (-lat - minY) * s] };
  }
  function thin(coords, max = 400) {
    if (coords.length <= max) return coords;
    const step = (coords.length - 1) / (max - 1), out = [];
    for (let i = 0; i < max; i++) out.push(coords[Math.round(i * step)]);
    return out;
  }

  /* ---------- membaca isian lokasi: link Google Maps / koordinat / nama ---------- */
  function parseLocation(raw) {
    const s = String(raw || '').trim();
    if (!s) return { kind: 'empty' };
    const num = '(-?\\d{1,3}(?:\\.\\d+)?)';
    const valid = (la, ln) => Math.abs(la) <= 90 && Math.abs(ln) <= 180;
    let m = s.match(new RegExp('^' + num + '\\s*[,;\\s]\\s*' + num + '$'));
    if (m && valid(+m[1], +m[2])) return { kind: 'coord', lat: +m[1], lng: +m[2] };
    if (/^https?:\/\//i.test(s) || /^(www\.)?(google\.[a-z.]+\/maps|maps\.app\.goo\.gl|goo\.gl\/maps|g\.co\/kgs)/i.test(s)) {
      if (/maps\.app\.goo\.gl|goo\.gl\/maps|g\.co\/kgs/i.test(s)) return { kind: 'short', url: s };
      let dec = s; try { dec = decodeURIComponent(s); } catch (e) { /* biarkan */ }
      let name = '';
      const pn = dec.match(/\/maps\/(?:place|search)\/([^/@?]+)/i);
      if (pn) name = pn[1].replace(/\+/g, ' ').trim();
      const pin = dec.match(new RegExp('!3d' + num + '!4d' + num));
      if (pin && valid(+pin[1], +pin[2])) return { kind: 'coord', lat: +pin[1], lng: +pin[2], name };
      const at = dec.match(new RegExp('@' + num + ',' + num));
      if (at && valid(+at[1], +at[2])) return { kind: 'coord', lat: +at[1], lng: +at[2], name };
      const q = dec.match(new RegExp('[?&](?:q|query|ll|destination|origin|daddr|saddr)=' + num + '[,+ ]+' + num));
      if (q && valid(+q[1], +q[2])) return { kind: 'coord', lat: +q[1], lng: +q[2], name };
      const qn = dec.match(/[?&](?:q|query|destination|origin|daddr|saddr)=([^&]+)/i);
      if (qn) return { kind: 'query', query: qn[1].replace(/\+/g, ' ').trim() };
      if (name) return { kind: 'query', query: name };
      return { kind: 'short', url: s };
    }
    return { kind: 'query', query: s };
  }

  /* ---------- waktu ---------- */
  const p2 = (n) => String(n).padStart(2, '0');
  const hhmm = (d) => `${p2(d.getHours())}.${p2(d.getMinutes())}`;
  const minToHM = (m) => { m = Math.round(m); const h = Math.floor(m / 60), r = m % 60; return h ? (r ? `${h} jam ${r} menit` : `${h} jam`) : `${r} menit`; };
  const parseHM = (s, fallback) => { const m = String(s || '').match(/^(\d{1,2})[.:](\d{2})/); return m ? +m[1] * 60 + +m[2] : fallback; };
  const mkDate = (iso, hm) => { const [y, mo, d] = String(iso).split('-').map(Number); const t = parseHM(hm, 420); return new Date(y, mo - 1, d, Math.floor(t / 60), t % 60, 0); };
  const addMin = (d, m) => new Date(d.getTime() + m * 60000);
  const dayName = (d) => d.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  const daysBetween = (a, b) => Math.round((new Date(b.getFullYear(), b.getMonth(), b.getDate()) - new Date(a.getFullYear(), a.getMonth(), a.getDate())) / 86400000);

  /* ---------- faktor kecepatan: jalan, kendaraan, permukaan ---------- */
  function timeFactor(s) {
    let f = 1.1; const why = ['penyangga lalu lintas dan kondisi umum ×1,1'];
    const road = Math.max(...(s.jenisJalan || []).map((k) => ({ tanah: 1.3, logging: 1.5, berbatu: 1.5, gambut: 1.6 }[k] || 1)), 1);
    if (road > 1) { f *= road; why.push(`jenis jalan non-aspal ×${String(road).replace('.', ',')}`); }
    if (s.kondisi === 'rusak') { f *= 1.25; why.push('jalan rusak ×1,25'); }
    if (s.permukaan === 'berbukit') { f *= 1.1; why.push('berbukit ×1,1'); }
    if (s.permukaan === 'gunung') { f *= 1.25; why.push('pegunungan ×1,25'); }
    if ((s.kendaraan || []).includes('truk')) { f *= 1.25; why.push('truk ×1,25'); }
    if (s.barang && s.barang.includes('mesin')) { f *= 1.1; why.push('membawa mesin/unit ×1,1'); }
    f = Math.min(f, 2.8);
    return { factor: f, why };
  }

  /* ---------- jadwal istirahat, tiba, menginap ---------- */
  function planTrip(p) {
    const interval = p.intervalMin || 180, rest = p.restMin || 15, maxDrive = p.maxDriveMin || 480;
    const dep = mkDate(p.dateISO, p.departTime);
    const D = Math.max(1, Math.round(p.driveMin));
    const sunrise = parseHM(p.sunrise, 360), sunset = parseHM(p.sunset, 1080);
    const nBreaks = Math.max(0, Math.ceil(D / interval) - 1);
    const clockAtDriven = (x) => addMin(dep, x + Math.max(0, Math.ceil(x / interval) - 1) * rest);
    const breaks = [];
    for (let k = 1; k <= nBreaks; k++) breaks.push({ k, at: clockAtDriven(k * interval), drivenMin: k * interval, frac: (k * interval) / D });
    const arrive = addMin(dep, D + nBreaks * rest);
    const mins = (d) => d.getHours() * 60 + d.getMinutes();
    const warn = [];
    const departsDark = mins(dep) < sunrise - 15;
    const arrivesDark = mins(arrive) > sunset || daysBetween(dep, arrive) > 0;
    if (departsDark) warn.push(`Berangkat ${hhmm(dep)} masih gelap (matahari terbit ±${p2(Math.floor(sunrise / 60))}.${p2(sunrise % 60)}).`);
    if (arrivesDark) warn.push(`Perkiraan tiba ${hhmm(arrive)}, setelah matahari terbenam (±${p2(Math.floor(sunset / 60))}.${p2(sunset % 60)}).`);
    const over = D > maxDrive;
    if (over) warn.push(`Waktu mengemudi ${minToHM(D)} melebihi batas harian ${minToHM(maxDrive)}.`);
    let overnight = null, latestDepart = null;
    if (arrivesDark || over) {
      const stopAt = Math.min(sunset - 30, mins(dep) + maxDrive + Math.floor(maxDrive / interval) * rest);
      // menit mengemudi yang sempat dicapai sebelum stopAt
      let driven = 0, clock = mins(dep);
      while (driven < D && clock < stopAt) {
        const seg = Math.min(interval, D - driven, stopAt - clock);
        driven += seg; clock += seg;
        if (driven % interval === 0 && driven < D && clock < stopAt) clock += rest;
        if (seg <= 0) break;
      }
      overnight = { drivenMin: Math.min(driven, D), frac: Math.min(driven, D) / D, atClock: p2(Math.floor(Math.min(clock, 1439) / 60)) + '.' + p2(Math.min(clock, 1439) % 60) };
      if (!over) latestDepart = Math.max(0, sunset - 30 - (D + nBreaks * rest));
      if (driven < 30) overnight = null;
    }
    let ret = null;
    if (p.roundTrip) {
      const rdep = addMin(arrive, Math.max(0, p.activityMin || 0));
      const rarr = addMin(rdep, D + nBreaks * rest);
      ret = { depart: rdep, arrive: rarr, dark: mins(rarr) > sunset || daysBetween(rdep, rarr) > 0 };
      if (ret.dark) warn.push(`Perkiraan kembali ${hhmm(rarr)} melewati matahari terbenam; rencanakan menginap atau selesaikan pekerjaan lebih awal.`);
    }
    return { dep, arrive, D, breaks, overnight, latestDepart: (latestDepart === null || latestDepart <= 0) ? null : (p2(Math.floor(latestDepart / 60)) + '.' + p2(latestDepart % 60)), warn, ret, sunrise, sunset, nBreaks, interval, rest };
  }

  /* ---------- cuaca ---------- */
  const WMO = (c) => ({ 0: 'Cerah', 1: 'Cerah berawan', 2: 'Berawan sebagian', 3: 'Berawan', 45: 'Berkabut', 48: 'Kabut tebal', 51: 'Gerimis ringan', 53: 'Gerimis', 55: 'Gerimis lebat', 61: 'Hujan ringan', 63: 'Hujan sedang', 65: 'Hujan lebat', 80: 'Hujan lokal ringan', 81: 'Hujan lokal', 82: 'Hujan lokal lebat', 95: 'Badai petir', 96: 'Badai petir + es', 99: 'Badai petir + es lebat' }[c] || (c >= 51 && c <= 67 ? 'Hujan' : c >= 80 && c <= 86 ? 'Hujan lokal' : c >= 95 ? 'Badai petir' : 'Berawan'));
  const aqiCat = (a) => (a == null ? '' : a <= 50 ? 'Baik' : a <= 100 ? 'Sedang' : a <= 150 ? 'Tidak sehat bagi kelompok sensitif' : a <= 200 ? 'Tidak sehat' : a <= 300 ? 'Sangat tidak sehat' : 'Berbahaya');
  function pickHour(wx, date) {
    if (!wx || !wx.hourly || !wx.hourly.time) return null;
    const key = `${date.getFullYear()}-${p2(date.getMonth() + 1)}-${p2(date.getDate())}T${p2(date.getHours() + (date.getMinutes() >= 30 ? 1 : 0))}:00`;
    let i = wx.hourly.time.indexOf(key);
    if (i < 0) return null;
    const h = wx.hourly;
    const g = (k) => (h[k] ? h[k][i] : null);
    return { temp: g('temperature_2m'), pop: g('precipitation_probability'), precip: g('precipitation'), code: g('weather_code'), wind: g('wind_speed_10m'), vis: g('visibility'), aqi: g('us_aqi') };
  }

  /* ---------- penilaian risiko (transparan, dapat diubah atasan) ---------- */
  function scoreRisk(s, a) {
    const f = []; const add = (pts, text, ctl) => f.push({ pts, text, ctl });
    const km = a.distKm || 0, plan = a.plan;
    if (km > 300) add(2, `Jarak jauh (${Math.round(km)} km sekali jalan)`, 'Rencanakan rute dan titik istirahat; laporkan posisi tiap istirahat.');
    else if (km > 150) add(1, `Jarak menengah (${Math.round(km)} km)`, 'Laporkan posisi saat berangkat, istirahat, dan tiba.');
    if (plan && plan.D > 360) add(2, `Mengemudi lebih dari 6 jam (${minToHM(plan.D)})`, 'Pertimbangkan pengemudi pendamping atau menginap; jangan memaksa menyelesaikan dalam sehari.');
    else if (plan && plan.D > 240) add(1, `Mengemudi lebih dari 4 jam (${minToHM(plan.D)})`, 'Patuhi prosedur: istirahat minimal 15 menit setiap 3 jam mengemudi, atau bergantian pengemudi (ganti DID Tag VT).');
    if (plan && (plan.warn.some((w) => /gelap|terbenam/.test(w)))) add(2, 'Berangkat atau tiba di waktu gelap', 'Hindari mengemudi malam; geser jam berangkat atau menginap sebelum matahari terbenam.');
    if ((s.jenisJalan || []).some((k) => ['logging', 'berbatu', 'gambut'].includes(k))) add(2, 'Jalan logging/berbatu/gambut', 'Kurangi kecepatan, jaga jarak lebih jauh, cek ban dan suspensi, bawa alat tarik/recovery.');
    else if ((s.jenisJalan || []).includes('tanah')) add(1, 'Jalan tanah', 'Waspadai licin saat hujan; kurangi kecepatan; tidak melintas genangan yang tidak diketahui kedalamannya.');
    if (s.kondisi === 'rusak') add(2, 'Jalan rusak / tidak terawat', 'Kurangi kecepatan dan hindari lubang; laporkan titik rusak ke atasan.');
    if (s.kondisi === 'tutup') add(5, 'Jalan tidak dapat dilalui', 'Perjalanan tidak boleh dilakukan; cari rute alternatif dan laporkan ke atasan.');
    if (s.lebar === '1') add(1, 'Jalan sempit (satu mobil)', 'Siapkan titik berpapasan; klakson di tikungan buta; dahulukan unit lebih besar.');
    if (s.permukaan === 'berbukit') add(1, 'Medan berbukit', 'Gunakan gigi rendah di turunan; jangan menuruni dengan netral.');
    if (s.permukaan === 'gunung') add(2, 'Medan pegunungan', 'Gunakan engine brake, periksa rem sebelum berangkat, hindari kabut dan hujan lebat.');
    if ((s.barang || []).includes('mesin')) add(1, 'Membawa mesin / unit berat', 'Ikat dengan tali/ratchet yang layak, jangan sentuhkan ke kaca kabin, periksa ikatan tiap istirahat.');
    if (s.partner === 'sendiri' && km > 150) add(1, 'Mengemudi sendirian pada jarak jauh', 'Aktifkan lapor posisi berkala; beri tahu atasan jam tiba.');
    if ((s.jalur || []).some((k) => ['laut', 'sungai', 'udara'].includes(k))) add(1, 'Perjalanan melibatkan moda laut/sungai/udara', 'Pakai jaket pelampung/ikuti prosedur moda; pastikan jadwal dan cuaca layak.');
    if (s.vt === 'tidak') add(3, 'Fungsi VT Device tidak aman' + (s.vtCatatan ? ' (' + s.vtCatatan + ')' : ''), 'Laporkan ke atasan/penanggung jawab VT dan perbaiki sebelum berangkat; perjalanan tanpa VT berfungsi tidak dianjurkan.');
    if (s.inspeksi === 'tidak') add(5, 'Hasil inspeksi kendaraan: tidak aman' + (s.inspeksiCatatan ? ' (' + s.inspeksiCatatan + ')' : ''), 'Jangan berangkat sebelum temuan diperbaiki dan kendaraan dinyatakan layak; gunakan kendaraan pengganti.');
    (a.weather || []).forEach((w) => {
      if (!w || !w.d) return;
      if (w.d.precip >= 5 || (w.d.pop >= 80 && w.d.precip >= 2)) add(2, `Hujan lebat di ${w.label}`, 'Kurangi kecepatan, nyalakan lampu, tunda perjalanan bila jarak pandang buruk.');
      else if (w.d.precip >= 1 || w.d.pop >= 60) add(1, `Berpotensi hujan di ${w.label}`, 'Jalan lebih licin; perpanjang jarak aman.');
      if (w.d.code >= 95) add(2, `Badai petir di ${w.label}`, 'Berhenti di tempat aman bukan di bawah pohon/tiang; tunggu reda.');
      if (w.d.vis != null && w.d.vis < 1000) add(2, `Jarak pandang rendah (<1 km) di ${w.label}`, 'Berhenti di tempat aman bila jarak pandang <50 m; jangan melanjutkan perlahan di badan jalan.');
      if (w.d.aqi > 150) add(2, `Kualitas udara tidak sehat di ${w.label} (AQI ${w.d.aqi})`, 'Pakai masker N95/KN95; hindari kegiatan fisik berat di luar; waspadai kabut asap.');
      else if (w.d.aqi > 100) add(1, `Kualitas udara kurang baik di ${w.label} (AQI ${w.d.aqi})`, 'Siapkan masker; batasi aktivitas di luar kendaraan.');
      if (w.d.wind >= 40) add(1, `Angin kencang di ${w.label} (${Math.round(w.d.wind)} km/j)`, 'Waspadai pohon tumbang dan kendaraan tinggi/bermuatan.');
    });
    // gabungkan duplikat teks yang sama dari beberapa titik
    const seen = new Set(); const uniq = f.filter((x) => (seen.has(x.text) ? false : seen.add(x.text)));
    const score = uniq.reduce((n, x) => n + x.pts, 0);
    return { score, level: score >= 5 || uniq.some((x) => x.pts >= 5) ? 'tinggi' : 'rendah', factors: uniq };
  }

  const STD_SAFETY = [
    'Lakukan pemeriksaan kendaraan sebelum berangkat (P2H): ban, rem, lampu, klakson, wiper, bahan bakar, dan APAR.',
    'Gunakan sabuk pengaman; dilarang memakai ponsel saat mengemudi; patuhi batas kecepatan.',
    'Istirahat minimal 15 menit setiap 3 jam mengemudi, atau bergantian pengemudi dengan mengganti DID Tag VT; berhenti dan tidur sejenak bila mengantuk.',
    'Laporkan posisi ke atasan saat berangkat, setiap istirahat, dan setibanya di tujuan.',
    'Barang dan perkakas diikat kuat; jangan menumpuk di dekat kaca kabin.',
    'Bila terjadi gangguan atau kecelakaan: hentikan kendaraan di tempat aman, nyalakan hazard, pasang segitiga pengaman, hubungi atasan dan nomor darurat 112.',
  ];

  /* ---------- model dokumen ---------- */
  const mark = (arr, key, list) => OPTS[list].map(([k, l]) => `${(arr || []).includes(k) ? '[x]' : '[ ]'} ${l}`).join('   ');
  const one = (val, list) => OPTS[list].map(([k, l]) => `${val === k ? '[x]' : '[ ]'} ${l}`).join('   ');
  function buildModel(s, a) {
    const plan = a.plan, risk = a.risk;
    const fmtD = (d) => (d ? dayName(d) : '');
    const mapsUrl = a.mapsUrl || '';
    const info = [
      ['Tanggal', s.dateISO ? dayName(mkDate(s.dateISO, '00.00')) : '-'], ['Tujuan', a.destLabel || s.tujuan || '-'],
      ['Kendaraan yang digunakan', mark(s.kendaraan, 'k', 'kendaraan') + (s.kendaraanLain ? `   (${s.kendaraanLain})` : '')], ['Plat nomor', s.plat || '-'],
      ['Partner', one(s.partner, 'partner')], ['Hasil inspeksi kendaraan', (s.inspeksi === 'aman' ? '[x] Aman   [ ] Tidak aman' : s.inspeksi === 'tidak' ? '[ ] Aman   [x] Tidak aman' : '[ ] Aman   [ ] Tidak aman') + (s.inspeksi === 'tidak' ? `   Catatan: ${s.inspeksiCatatan || '-'}` : '')],
      ['Fungsi VT Device', (s.vt === 'aman' ? '[x] Aman   [ ] Tidak aman' : s.vt === 'tidak' ? '[ ] Aman   [x] Tidak aman' : '[ ] Aman   [ ] Tidak aman') + (s.vt === 'tidak' ? `   Catatan: ${s.vtCatatan || '-'}` : '')], ['', ''],
    ];
    const transport = [
      ['Jalur yang dilalui', mark(s.jalur, 'jalur', 'jalur')],
      ['Jenis jalan yang dilalui', mark(s.jenisJalan, 'j', 'jenisJalan')], ['Kondisi jalan', one(s.kondisi, 'kondisi')],
      ['Lebar jalan', one(s.lebar, 'lebar')], ['Permukaan jalan', one(s.permukaan, 'permukaan') + (a.elev ? `   (usulan otomatis: naik total ±${Math.round(a.elev.gain)} m, tertinggi ±${Math.round(a.elev.max)} m)` : '')],
      ['Barang yang diangkut', mark(s.barang, 'b', 'barang') + (s.barangRinci ? `   ${s.barangRinci}` : '')],
    ];
    const total = (a.distKm || 0) * (s.roundTrip ? 2 : 1);
    const detail = [
      ['Titik berangkat', a.originLabel || '-'], ['Titik tujuan', a.destLabel || '-'],
      ['Jarak tempuh', a.distKm ? `${a.distKm.toFixed(1).replace('.', ',')} km sekali jalan${s.roundTrip ? ` (pulang-pergi ±${total.toFixed(1).replace('.', ',')} km)` : ''}` : '-'],
      ['Risiko perjalanan', risk ? (risk.final === 'tinggi' ? '[ ] Risiko bahaya rendah   [x] Risiko bahaya tinggi' : '[x] Risiko bahaya rendah   [ ] Risiko bahaya tinggi') : '-'],
      ['Waktu tempuh', plan ? `${minToHM(plan.D)} mengemudi (+ ${plan.nBreaks} x ${plan.rest} menit istirahat, setiap ${plan.interval / 60} jam mengemudi; atau bergantian pengemudi dengan mengganti DID Tag VT)` : '-'],
      ['Waktu berangkat', plan ? `Pukul ${hhmm(plan.dep)}` : '-'], ['Waktu tiba (estimasi)', plan ? `Pukul ${hhmm(plan.arrive)}` : '-'],
    ];
    if (plan && plan.ret) detail.push(['Perkiraan kembali', `Berangkat ${hhmm(plan.ret.depart)}, tiba ${hhmm(plan.ret.arrive)}`]);
    const rests = [];
    if (plan) {
      plan.breaks.forEach((b, i) => rests.push([`Istirahat ke-${b.k}`, `Pukul ${hhmm(b.at)}`, (a.breakLabels && a.breakLabels[i]) || '-', (a.breakWx && a.breakWx[i]) || '-']));
      if (plan.overnight) rests.push(['Rencana menginap (saran)', `Pukul ${plan.overnight.atClock}`, (a.overnightLabel) || '-', '-']);
      if (!rests.length) rests.push(['Istirahat', '-', 'Perjalanan singkat, tidak diperlukan istirahat terjadwal', '-']);
    }
    const wx = (a.weather || []).filter((w) => w && w.d).map((w) => [w.label, w.timeText, wxText(w.d), w.d.aqi != null ? `${w.d.aqi} (${aqiCat(w.d.aqi)})` : '-']);
    const A1 = (s.aktivitas || []).filter((x) => x.nama), R1 = (s.istirahat || []).filter((x) => x.nama);
    const acts = A1.map((x, i) => [String(i + 1), x.nama, x.menit ? minToHM(+x.menit) : '-']).concat(R1.map((x, i) => [String(A1.length + i + 1), 'Istirahat: ' + x.nama, x.menit ? minToHM(+x.menit) : '-']));
    const actTotal = A1.concat(R1).reduce((n, x) => n + (+x.menit || 0), 0);
    const safety = (s.pesan && s.pesan.trim() ? s.pesan.split('\n').map((x) => x.replace(/^[-•\s]+/, '').trim()).filter(Boolean) : (a.safetyAuto || []));
    return {
      title: 'JOURNEY RISK MANAGEMENT (JRM)', createdAt: new Date(), info, transport, detail, rests, wx, acts, actTotal,
      risk: risk ? { level: risk.final, auto: risk.level, score: risk.score, factors: risk.factors } : null,
      safety, warn: plan ? plan.warn : [], latestDepart: plan && plan.latestDepart, mapsUrl, route: a.coords || [], timeFactorWhy: a.timeWhy || [],
      catatan: s.catatan || '', fileName: `JRM_${safe(s.plat) || 'perjalanan'}_${s.dateISO || ''}`,
    };
  }
  function wxText(d) {
    const p = [WMO(d.code)];
    if (d.temp != null) p.push(`${Math.round(d.temp)}°C`);
    if (d.pop != null) p.push(`peluang hujan ${d.pop}%`);
    if (d.precip) p.push(`${String(d.precip).replace('.', ',')} mm`);
    if (d.wind != null) p.push(`angin ${Math.round(d.wind)} km/j`);
    if (d.vis != null) p.push(`jarak pandang ${d.vis >= 10000 ? '>10' : (d.vis / 1000).toFixed(1).replace('.', ',')} km`);
    return p.join(', ');
  }
  function safe(s) { return String(s || '').normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[^A-Za-z0-9]+/g, '_').replace(/^_+|_+$/g, '').slice(0, 40); }
  const pdfSafe = (s) => String(s == null ? '' : s).replace(/≥/g, '>=').replace(/≤/g, '<=').replace(/→/g, '->').replace(/[​-‍﻿]/g, '').replace(/[“”]/g, '"').replace(/[‘’]/g, "'");

  /* ---------- PDF (jsPDF + autoTable) ---------- */
  function makePDF(jsPDF, m) {
    const doc = new jsPDF({ unit: 'mm', format: 'a4' });
    const W = 210, M = 12;
    const orange = [242, 106, 14], navy = [30, 41, 59];
    doc.setFillColor(...orange); doc.rect(0, 0, W, 4, 'F');
    doc.setFont('helvetica', 'bold'); doc.setFontSize(16); doc.setTextColor(...navy);
    doc.text(m.title, W / 2, 14, { align: 'center' });
    doc.setFont('helvetica', 'normal'); doc.setFontSize(8.5); doc.setTextColor(90);
    doc.text(pdfSafe('Dibuat otomatis oleh J.A.S.M.I.N pada ' + m.createdAt.toLocaleString('id-ID')), W / 2, 19, { align: 'center' });
    let y = 23;
    const section = (t) => { if (y > 258) { doc.addPage(); y = 14; } doc.autoTable({ startY: y, head: [[t]], body: [], theme: 'plain', margin: { left: M, right: M }, headStyles: { fillColor: orange, textColor: 255, fontStyle: 'bold', fontSize: 9.5, cellPadding: 1.6 } }); y = doc.lastAutoTable.finalY; };
    const kv = (rows, cols2) => {
      const body = cols2 ? [] : rows.map((r) => [pdfSafe(r[0]), pdfSafe(r[1])]);
      if (cols2) for (let i = 0; i < rows.length; i += 2) body.push([pdfSafe(rows[i][0]), pdfSafe(rows[i][1]), rows[i + 1] ? pdfSafe(rows[i + 1][0]) : '', rows[i + 1] ? pdfSafe(rows[i + 1][1]) : '']);
      doc.autoTable({ startY: y, body, theme: 'grid', margin: { left: M, right: M }, styles: { fontSize: 8.5, cellPadding: 1.5, lineColor: [150, 150, 150], lineWidth: 0.2, textColor: 30 }, columnStyles: cols2 ? { 0: { fontStyle: 'bold', cellWidth: 34, fillColor: [250, 240, 230] }, 2: { fontStyle: 'bold', cellWidth: 34, fillColor: [250, 240, 230] } } : { 0: { fontStyle: 'bold', cellWidth: 50, fillColor: [250, 240, 230] } } });
      y = doc.lastAutoTable.finalY;
    };
    const grid = (head, rows, widths) => {
      doc.autoTable({ startY: y, head: [head.map(pdfSafe)], body: rows.map((r) => r.map(pdfSafe)), theme: 'grid', margin: { left: M, right: M }, styles: { fontSize: 8.3, cellPadding: 1.4, lineColor: [150, 150, 150], lineWidth: 0.2, textColor: 30 }, headStyles: { fillColor: [230, 230, 230], textColor: 30, fontStyle: 'bold' }, columnStyles: widths || {} });
      y = doc.lastAutoTable.finalY;
    };
    section('INFORMASI UMUM'); kv(m.info, true);
    section('TRANSPORTASI'); kv(m.transport);
    section('INFORMASI DETAIL'); kv(m.detail);
    if (m.warn.length || m.latestDepart) { const t = m.warn.map((w) => '! ' + w).concat(m.latestDepart ? ['Saran: berangkat paling lambat pukul ' + m.latestDepart + ' agar tiba sebelum gelap.'] : []); doc.autoTable({ startY: y, body: t.map((x) => [pdfSafe(x)]), theme: 'plain', margin: { left: M, right: M }, styles: { fontSize: 8.3, textColor: [160, 40, 20], cellPadding: 1 } }); y = doc.lastAutoTable.finalY; }
    section('PERKIRAAN WAKTU ISTIRAHAT, LOKASI, DAN CUACA'); grid(['Kegiatan', 'Waktu', 'Lokasi', 'Cuaca'], m.rests, { 0: { cellWidth: 34 }, 1: { cellWidth: 24 } });
    if (m.wx.length) { section('CUACA DAN KUALITAS UDARA DI SEPANJANG RUTE'); grid(['Titik', 'Waktu', 'Kondisi', 'AQI'], m.wx, { 0: { cellWidth: 40 }, 1: { cellWidth: 22 }, 3: { cellWidth: 34 } }); }
    section('AKTIVITAS, RENCANA ISTIRAHAT DAN ESTIMASI WAKTU PENGERJAAN'); grid(['No', 'Aktivitas', 'Estimasi'], m.acts.length ? m.acts : [['-', '(tidak diisi)', '-']], { 0: { cellWidth: 10 }, 2: { cellWidth: 32 } });
    if (m.acts.length) { doc.setFontSize(8.5); doc.setTextColor(60); doc.text(pdfSafe('Total estimasi di lokasi (pekerjaan + istirahat): ' + minToHM(m.actTotal)), M, y + 4); y += 6; }
    if (m.risk) { section(`PENILAIAN RISIKO PERJALANAN: ${m.risk.level === 'tinggi' ? 'RISIKO BAHAYA TINGGI' : 'RISIKO BAHAYA RENDAH'}`); grid(['Faktor risiko', 'Poin'], m.risk.factors.length ? m.risk.factors.map((f) => [f.text, String(f.pts)]) : [['Tidak ada faktor risiko menonjol terdeteksi', '0']], { 1: { cellWidth: 16 } }); }
    section('PESAN KESELAMATAN'); doc.autoTable({ startY: y, body: m.safety.map((x) => [pdfSafe('- ' + x)]), theme: 'plain', margin: { left: M, right: M }, styles: { fontSize: 8.5, cellPadding: 0.9, textColor: 30 } }); y = doc.lastAutoTable.finalY;
    if (m.catatan) { section('CATATAN'); doc.autoTable({ startY: y, body: [[pdfSafe(m.catatan)]], theme: 'plain', margin: { left: M, right: M }, styles: { fontSize: 8.5 } }); y = doc.lastAutoTable.finalY; }
    if (m.route && m.route.length > 1) {
      const H = 62; if (y + H + 18 > 285) { doc.addPage(); y = 14; }
      section('SKETSA RUTE'); const bx = M, by = y + 2, bw = W - 2 * M;
      doc.setDrawColor(150); doc.setFillColor(248, 250, 252); doc.rect(bx, by, bw, H, 'FD');
      const pr = projectRoute(thin(m.route, 300), bw, H, 8);
      doc.setDrawColor(...orange); doc.setLineWidth(0.9);
      for (let i = 1; i < pr.pts.length; i++) doc.line(bx + pr.pts[i - 1][0], by + pr.pts[i - 1][1], bx + pr.pts[i][0], by + pr.pts[i][1]);
      doc.setFillColor(34, 139, 34); doc.circle(bx + pr.pts[0][0], by + pr.pts[0][1], 1.8, 'F');
      doc.setFillColor(200, 30, 30); doc.circle(bx + pr.pts[pr.pts.length - 1][0], by + pr.pts[pr.pts.length - 1][1], 1.8, 'F');
      doc.setFontSize(7.5); doc.setTextColor(60); doc.text('Hijau = berangkat, merah = tujuan (sketsa tanpa peta dasar; lihat tautan peta)', bx + 2, by + H - 2);
      y = by + H + 2;
    }
    if (m.mapsUrl) { doc.setFontSize(8.5); doc.setTextColor(20, 80, 200); doc.textWithLink('Buka rute di Google Maps', M, y + 5, { url: m.mapsUrl }); y += 8; }
    doc.setFontSize(7.5); doc.setTextColor(110);
    doc.text(pdfSafe('Persetujuan atasan dilakukan secara online. Estimasi bersifat perkiraan: sesuaikan dengan kondisi aktual di lapangan.'), M, 291);
    return doc;
  }

  /* ---------- Word (.docx) memakai pustaka "docx" ---------- */
  function makeDocx(D, m, routePng) {
    const { Document, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, ShadingType, AlignmentType, ExternalHyperlink, ImageRun, BorderStyle } = D;
    const thin = { style: BorderStyle.SINGLE, size: 4, color: '999999' };
    const borders = { top: thin, bottom: thin, left: thin, right: thin };
    const para = (t, o = {}) => new Paragraph({ spacing: { after: 40 }, alignment: o.align, children: [new TextRun({ text: String(t == null ? '' : t), bold: !!o.bold, size: o.size || 19, color: o.color })] });
    const cell = (t, o = {}) => new TableCell({ borders, width: { size: o.w || 25, type: WidthType.PERCENTAGE }, shading: o.fill ? { type: ShadingType.CLEAR, fill: o.fill, color: 'auto' } : undefined, margins: { top: 40, bottom: 40, left: 80, right: 80 }, children: String(t == null ? '' : t).split('\n').map((x) => para(x, { bold: o.bold, size: o.size || 18, color: o.color })) });
    const bar = (t) => new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, rows: [new TableRow({ children: [new TableCell({ borders, shading: { type: ShadingType.CLEAR, fill: 'F26A0E', color: 'auto' }, children: [para(t, { bold: true, color: 'FFFFFF', size: 20 })] })] })] });
    const gap = () => new Paragraph({ spacing: { after: 80 }, children: [] });
    const kv2 = (rows) => { const out = []; for (let i = 0; i < rows.length; i += 2) out.push(new TableRow({ children: [cell(rows[i][0], { w: 17, bold: true, fill: 'FAF0E6' }), cell(rows[i][1], { w: 33 }), cell(rows[i + 1] ? rows[i + 1][0] : '', { w: 17, bold: true, fill: rows[i + 1] ? 'FAF0E6' : undefined }), cell(rows[i + 1] ? rows[i + 1][1] : '', { w: 33 })] })); return new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, rows: out }); };
    const kv1 = (rows) => new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, rows: rows.map((r) => new TableRow({ children: [cell(r[0], { w: 28, bold: true, fill: 'FAF0E6' }), cell(r[1], { w: 72 })] })) });
    const grid = (head, rows, widths) => new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, rows: [new TableRow({ tableHeader: true, children: head.map((h, i) => cell(h, { w: widths[i], bold: true, fill: 'E6E6E6' })) })].concat(rows.map((r) => new TableRow({ children: r.map((c, i) => cell(c, { w: widths[i] })) }))) });
    const ch = [];
    ch.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 40 }, children: [new TextRun({ text: m.title, bold: true, size: 32, color: '1E2939' })] }));
    ch.push(para('Dibuat otomatis oleh J.A.S.M.I.N pada ' + m.createdAt.toLocaleString('id-ID'), { align: AlignmentType.CENTER, size: 16, color: '666666' }));
    ch.push(gap(), bar('INFORMASI UMUM'), kv2(m.info), gap(), bar('TRANSPORTASI'), kv1(m.transport), gap(), bar('INFORMASI DETAIL'), kv1(m.detail));
    if (m.warn.length || m.latestDepart) { ch.push(gap()); m.warn.forEach((w) => ch.push(para('! ' + w, { color: 'A02814', size: 18 }))); if (m.latestDepart) ch.push(para('Saran: berangkat paling lambat pukul ' + m.latestDepart + ' agar tiba sebelum gelap.', { color: 'A02814', size: 18 })); }
    ch.push(gap(), bar('PERKIRAAN WAKTU ISTIRAHAT, LOKASI, DAN CUACA'), grid(['Kegiatan', 'Waktu', 'Lokasi', 'Cuaca'], m.rests, [20, 14, 36, 30]));
    if (m.wx.length) ch.push(gap(), bar('CUACA DAN KUALITAS UDARA DI SEPANJANG RUTE'), grid(['Titik', 'Waktu', 'Kondisi', 'AQI'], m.wx, [24, 12, 44, 20]));
    ch.push(gap(), bar('AKTIVITAS, RENCANA ISTIRAHAT DAN ESTIMASI WAKTU PENGERJAAN'), grid(['No', 'Aktivitas', 'Estimasi'], m.acts.length ? m.acts : [['-', '(tidak diisi)', '-']], [8, 72, 20]));
    if (m.acts.length) ch.push(para('Total estimasi di lokasi (pekerjaan + istirahat): ' + minToHM(m.actTotal), { size: 17 }));
    if (m.risk) ch.push(gap(), bar(`PENILAIAN RISIKO PERJALANAN: ${m.risk.level === 'tinggi' ? 'RISIKO BAHAYA TINGGI' : 'RISIKO BAHAYA RENDAH'}`), grid(['Faktor risiko', 'Poin'], m.risk.factors.length ? m.risk.factors.map((f) => [f.text, String(f.pts)]) : [['Tidak ada faktor risiko menonjol terdeteksi', '0']], [88, 12]));
    ch.push(gap(), bar('PESAN KESELAMATAN')); m.safety.forEach((x) => ch.push(para('• ' + x, { size: 18 })));
    if (m.catatan) ch.push(gap(), bar('CATATAN'), para(m.catatan, { size: 18 }));
    if (routePng) ch.push(gap(), bar('SKETSA RUTE'), new Paragraph({ alignment: AlignmentType.CENTER, children: [new ImageRun({ type: 'png', data: routePng, transformation: { width: 560, height: 280 } })] }), para('Hijau = berangkat, merah = tujuan (sketsa tanpa peta dasar).', { size: 15, color: '666666' }));
    if (m.mapsUrl) ch.push(new Paragraph({ spacing: { before: 80 }, children: [new ExternalHyperlink({ link: m.mapsUrl, children: [new TextRun({ text: 'Buka rute di Google Maps', style: 'Hyperlink', color: '1450C8', underline: {} })] })] }));
    ch.push(gap(), para('Persetujuan atasan dilakukan secara online. Estimasi bersifat perkiraan: sesuaikan dengan kondisi aktual di lapangan.', { size: 15, color: '666666' }));
    return new Document({ creator: 'J.A.S.M.I.N', title: m.title, styles: { default: { document: { run: { font: 'Calibri', size: 19 } } } }, sections: [{ properties: { page: { margin: { top: 700, bottom: 700, left: 850, right: 850 } } }, children: ch }] });
  }

  return { OPTS, labelOf, hav, cumulative, pointAtKm, projectRoute, thin, parseLocation, mkDate, hhmm, parseHM, minToHM, timeFactor, planTrip, WMO, aqiCat, pickHour, scoreRisk, STD_SAFETY, buildModel, wxText, makePDF, makeDocx, safe, dayName };
});
