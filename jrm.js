/* ==========================================================================
   J.A.S.M.I.N — jrm.js
   Menu "Buat JRM" (Journey Risk Management) yang terisi otomatis:
   link Google Maps / nama tempat / lokasi GPS -> rute, jarak, waktu tempuh,
   jadwal istirahat, cuaca, kualitas udara, ketinggian, dan usulan risiko.
   Unduh sebagai PDF atau Word. Tanpa kotak approval (persetujuan online).
   ========================================================================== */
(function () {
  'use strict';
  const C = window.JRM_CORE, J = window.JASMIN;
  if (!C || !J) return;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = J.esc;
  const LS = 'jasmin.jrm.profile';
  const LIBS = {
    jspdf: 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
    autotable: 'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js',
    docx: 'https://cdn.jsdelivr.net/npm/docx@9.8.1/dist/index.iife.js',
  };
  const pend = {};
  const loadLib = (k) => pend[k] || (pend[k] = new Promise((res, rej) => { const s = document.createElement('script'); s.src = LIBS[k]; s.onload = res; s.onerror = () => { delete pend[k]; rej(new Error('Pustaka ' + k + ' gagal dimuat. Periksa koneksi internet.')); }; document.head.appendChild(s); }));

  const todayISO = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; };
  const nowHM = () => { const d = new Date(); return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`; };
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const fetchJSON = async (url, ms = 15000) => { const c = new AbortController(); const t = setTimeout(() => c.abort(), ms); try { const r = await fetch(url, { signal: c.signal }); if (!r.ok) throw new Error('HTTP ' + r.status); return await r.json(); } finally { clearTimeout(t); } };

  /* ---------- state ---------- */
  const S = {
    dateISO: todayISO(), departTime: nowHM(), partner: 'sendiri', jalur: ['darat'], kendaraan: ['lv4wd'], jenisJalan: ['aspal'], kondisi: 'baik', lebar: '2', permukaan: 'datar', barang: ['sparepart'],
    roundTrip: true, aktivitas: [{ nama: '', menit: '' }], istirahat: [{ nama: 'Makan siang dan ibadah', menit: 60 }], intervalJam: 3, restMenit: 15, permukaanManual: false, pesanEdited: false, riskManual: null,
  };
  let A = {}, origin = null, dest = null, busyCalc = 0, calcTimer = null, built = false;
  const cache = { route: new Map(), elev: new Map(), wx: new Map(), rev: new Map() };

  /* ---------- layanan data (gratis, tanpa kunci) ---------- */
  const revLabel = (j) => { const a = (j && j.address) || {}; const p = [a.village || a.suburb || a.hamlet || a.neighbourhood || a.town || a.city_district, a.county || a.city || a.municipality || a.regency, a.state].filter(Boolean); return p.length ? [...new Set(p)].join(', ') : (j && j.display_name ? j.display_name.split(',').slice(0, 3).join(',') : ''); };
  let lastNom = 0;
  async function nominatim(url) { const w = Math.max(0, 1100 - (Date.now() - lastNom)); if (w) await sleep(w); lastNom = Date.now(); return fetchJSON(url); }
  async function reverse(lat, lng) {
    const k = lat.toFixed(3) + ',' + lng.toFixed(3); if (cache.rev.has(k)) return cache.rev.get(k);
    let l = ''; try { l = revLabel(await nominatim(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&zoom=14&accept-language=id&lat=${lat}&lon=${lng}`)); } catch (e) { /* abaikan */ }
    l = l || `${lat.toFixed(4)}, ${lng.toFixed(4)}`; cache.rev.set(k, l); return l;
  }
  async function geocode(q) {
    const j = await nominatim(`https://nominatim.openstreetmap.org/search?format=jsonv2&limit=5&countrycodes=id&addressdetails=1&accept-language=id&q=${encodeURIComponent(q)}`);
    return (j || []).map((x) => ({ lat: +x.lat, lng: +x.lon, label: revLabel(x) || x.display_name.split(',').slice(0, 3).join(','), full: x.display_name }));
  }
  async function getRoute(o, d) {
    const k = [o.lat, o.lng, d.lat, d.lng].map((v) => v.toFixed(4)).join(',');
    if (cache.route.has(k)) return cache.route.get(k);
    let r;
    try {
      const j = await fetchJSON(`https://router.project-osrm.org/route/v1/driving/${o.lng},${o.lat};${d.lng},${d.lat}?overview=full&geometries=geojson`, 20000);
      const rt = j.routes && j.routes[0]; if (!rt) throw new Error('no route');
      r = { coords: rt.geometry.coordinates.map((c) => [c[1], c[0]]), distKm: rt.distance / 1000, minRaw: rt.duration / 60, rough: false };
    } catch (e) {
      const km = C.hav([o.lat, o.lng], [d.lat, d.lng]) * 1.3;
      r = { coords: [[o.lat, o.lng], [d.lat, d.lng]], distKm: km, minRaw: (km / 45) * 60, rough: true };
    }
    cache.route.set(k, r); return r;
  }
  async function getElev(coords, key) {
    if (cache.elev.has(key)) return cache.elev.get(key);
    const cum = C.cumulative(coords), tot = cum[cum.length - 1], n = 24, pts = [];
    for (let i = 0; i < n; i++) pts.push(C.pointAtKm(coords, cum, (tot * i) / (n - 1)));
    let out = null;
    try {
      const j = await fetchJSON(`https://api.open-meteo.com/v1/elevation?latitude=${pts.map((p) => p[0].toFixed(4)).join(',')}&longitude=${pts.map((p) => p[1].toFixed(4)).join(',')}`);
      const e = j.elevation; let gain = 0; for (let i = 1; i < e.length; i++) if (e[i] > e[i - 1]) gain += e[i] - e[i - 1];
      out = { gain, max: Math.max(...e), perKm: gain / Math.max(1, tot) };
    } catch (e) { out = null; }
    cache.elev.set(key, out); return out;
  }
  async function getWx(lat, lng, dateISO) {
    const k = `${lat.toFixed(2)},${lng.toFixed(2)},${dateISO}`; if (cache.wx.has(k)) return cache.wx.get(k);
    const d2 = new Date(dateISO + 'T00:00:00'); d2.setDate(d2.getDate() + 2); const end = `${d2.getFullYear()}-${String(d2.getMonth() + 1).padStart(2, '0')}-${String(d2.getDate()).padStart(2, '0')}`;
    let wx = null;
    try {
      const [f, aq] = await Promise.all([
        fetchJSON(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=temperature_2m,precipitation_probability,precipitation,weather_code,wind_speed_10m,visibility&daily=sunrise,sunset&timezone=auto&start_date=${dateISO}&end_date=${end}`),
        fetchJSON(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lng}&hourly=us_aqi&timezone=auto&start_date=${dateISO}&end_date=${end}`).catch(() => null),
      ]);
      wx = f; if (aq && aq.hourly) { const m = new Map(aq.hourly.time.map((t, i) => [t, aq.hourly.us_aqi[i]])); wx.hourly.us_aqi = wx.hourly.time.map((t) => (m.has(t) ? m.get(t) : null)); }
    } catch (e) { wx = null; }
    cache.wx.set(k, wx); return wx;
  }

  /* ---------- profil tersimpan di perangkat ---------- */

  /* ---------- HTML form ---------- */
  const chips = (name, list, multi) => `<div class="jchips" data-name="${name}" data-multi="${multi ? 1 : 0}">${C.OPTS[list].map(([k, l]) => `<label class="jchip"><input type="${multi ? 'checkbox' : 'radio'}" name="j-${name}" value="${k}"><span>${esc(l)}</span></label>`).join('')}</div>`;
  const fld = (id, label, extra = '', type = 'text', ph = '') => `<label class="jf"><span>${label}</span><input id="j-${id}" type="${type}" placeholder="${esc(ph)}" ${extra}></label>`;
  function formHTML() {
    return `
    <p class="jrm-intro">Isi seperlunya. Sisanya dihitung otomatis: jarak, waktu tempuh, jadwal istirahat, cuaca, kualitas udara, dan usulan tingkat risiko. Persetujuan atasan dilakukan secara online, jadi tidak ada kotak tanda tangan.</p>
    <section class="jcard"><h4>1. Kendaraan dan partner</h4>
      <div class="jf"><span>Kendaraan yang digunakan</span>${chips('kendaraan', 'kendaraan', true)}</div>
      <div class="jgrid">${fld('plat', 'Plat nomor', 'autocapitalize="characters" maxlength="12"', 'text', 'mis. B 1234 XYZ')}<div class="jf"><span>Partner</span>${chips('partner', 'partner', false)}</div></div>
      <div class="jf"><span>Hasil inspeksi kendaraan</span><div class="jchips" data-name="inspeksi" data-multi="0"><label class="jchip"><input type="radio" name="j-inspeksi" value="aman"><span>Aman</span></label><label class="jchip"><input type="radio" name="j-inspeksi" value="tidak"><span>Tidak aman</span></label></div></div>
      <label class="jf" id="j-inspWrap" hidden><span>Catatan temuan (wajib bila tidak aman)</span><textarea id="j-inspeksiCatatan" rows="2" placeholder="mis. rem terasa kurang pakem, ban depan kiri aus"></textarea></label>
      <div class="jf"><span>Fungsi VT Device</span><div class="jchips" data-name="vt" data-multi="0"><label class="jchip"><input type="radio" name="j-vt" value="aman"><span>Aman</span></label><label class="jchip"><input type="radio" name="j-vt" value="tidak"><span>Tidak aman</span></label></div></div>
      <label class="jf" id="j-vtWrap" hidden><span>Catatan VT Device (wajib bila tidak aman)</span><textarea id="j-vtCatatan" rows="2" placeholder="mis. lampu indikator mati, tidak ada sinyal GPS, DID Tag tidak terbaca"></textarea></label>
      <p class="jsmall" id="j-usia"></p></section>

    <section class="jcard"><h4>2. Rute (cukup tempel link Google Maps)</h4><div class="jgrid">
      ${fld('tanggal', 'Tanggal perjalanan', '', 'date')}<div class="jf"><span>Waktu berangkat</span><div class="jloc"><input id="j-berangkat" type="time"><button type="button" class="jbtn" id="j-now">Sekarang</button></div></div>
      <div class="jf jwide"><span>Titik berangkat</span><div class="jloc"><input id="j-asal" type="text" placeholder="Tempel link Google Maps, koordinat, atau ketik nama tempat"><button type="button" class="jbtn" id="j-gps" title="Pakai lokasi saya">📍 Lokasi saya</button><button type="button" class="jbtn" id="j-cari-asal">Cari</button></div><div class="jsug" id="j-sug-asal"></div><div class="jres" id="j-res-asal"></div></div>
      <div class="jf jwide"><span>Titik tujuan</span><div class="jloc"><input id="j-tujuan" type="text" placeholder="Tempel link Google Maps, koordinat, atau ketik nama tempat"><button type="button" class="jbtn" id="j-cari-tujuan">Cari</button></div><div class="jsug" id="j-sug-tujuan"></div><div class="jres" id="j-res-tujuan"></div></div>
      <label class="jchk jwide"><input type="checkbox" id="j-roundTrip"> Pulang-pergi (kembali ke titik berangkat)</label>
    </div><p class="jsmall">Jarak (km), waktu tempuh, dan waktu tiba dihitung otomatis dari titik berangkat dan tujuan; tidak perlu diisi manual. Tips: di Google Maps tekan Bagikan lalu salin link. Link pendek (maps.app.goo.gl) tidak bisa dibaca browser; buka dulu link-nya lalu salin alamat dari bilah alamat, atau cukup ketik nama tempatnya.</p></section>

    <section class="jcard"><h4>3. Transportasi</h4>
      <div class="jf"><span>Jalur yang dilalui (boleh lebih dari satu)</span>${chips('jalur', 'jalur', true)}</div>
      <div class="jf"><span>Jenis jalan yang dilalui</span>${chips('jenisJalan', 'jenisJalan', true)}</div>
      <div class="jf"><span>Kondisi jalan</span>${chips('kondisi', 'kondisi', false)}</div>
      <div class="jf"><span>Lebar jalan</span>${chips('lebar', 'lebar', false)}</div>
      <div class="jf"><span>Permukaan jalan <em class="jauto" id="j-permAuto"></em></span>${chips('permukaan', 'permukaan', false)}</div>
      <div class="jf"><span>Barang yang diangkut</span>${chips('barang', 'barang', true)}</div>
      ${fld('barangRinci', 'Rincian barang (mis. toolbox, oil pail 5 pcs)', '')}
    </section>

    <section class="jcard"><h4>4. Estimasi pekerjaan dan rencana istirahat</h4>
      <div class="jf"><span>Aktivitas dan lama penyelesaian (jam)</span><div id="j-akt"></div><button type="button" class="jbtn" id="j-addAkt">+ Tambah aktivitas</button></div>
      <div class="jf"><span>Rencana istirahat di lokasi kerja (makan, ibadah, dll.; menit)</span><div id="j-ist"></div><button type="button" class="jbtn" id="j-addIst">+ Tambah istirahat</button></div>
      <div class="jf"><span>Istirahat selama perjalanan</span><div class="jgrid"><label class="jf"><span>Setiap (jam)</span><input id="j-intervalJam" type="number" min="1" max="3" step="0.5"></label><label class="jf"><span>Lama (menit)</span><input id="j-restMenit" type="number" min="15" max="120" step="5"></label></div><p class="jsmall">Sesuai prosedur: minimal 15 menit setiap 3 jam mengemudi, atau bergantian pengemudi dengan mengganti DID Tag VT. Titik istirahat ditentukan otomatis pada rute; nilai tidak bisa di bawah batas prosedur.</p></div>
      <div class="jstatus" id="j-total"></div></section>

    <section class="jcard" id="j-auto"><h4>5. Hasil hitung otomatis <button type="button" class="jbtn" id="j-calc">⚡ Hitung ulang</button></h4><div id="j-status" class="jstatus">Isi titik berangkat dan tujuan; hasil muncul otomatis.</div><div id="j-out"></div></section>

    <section class="jcard"><h4>6. Pesan keselamatan dan catatan</h4>
      <label class="jf"><span>Pesan keselamatan (terisi otomatis dari kondisi perjalanan, boleh diubah)</span><textarea id="j-pesan" rows="8"></textarea></label>
      <label class="jf"><span>Catatan tambahan</span><textarea id="j-catatan" rows="2"></textarea></label>
    </section>
    <div class="jact"><button type="button" class="btn primary" id="j-pdf">📄 Unduh PDF</button><button type="button" class="btn" id="j-docx">📝 Unduh Word (.docx)</button><button type="button" class="btn" id="j-wa">💬 Kirim ringkasan ke WhatsApp</button><button type="button" class="btn" id="j-reset">↺ Kosongkan</button></div>`;
  }

  /* ---------- sinkron state <-> form ---------- */
  const val = (id) => { const e = $('#j-' + id); return e ? e.value : ''; };
  function setVal(id, v) { const e = $('#j-' + id); if (e && v != null) e.value = v; }
  function fillForm() {
    ['plat', 'inspeksiCatatan', 'vtCatatan', 'barangRinci', 'catatan'].forEach((k) => setVal(k, S[k] || ''));
    setVal('tanggal', S.dateISO); setVal('berangkat', S.departTime); $('#j-roundTrip').checked = !!S.roundTrip;
    ['partner', 'inspeksi', 'vt', 'kondisi', 'lebar', 'permukaan'].forEach((n) => $$(`input[name="j-${n}"]`).forEach((i) => { i.checked = i.value === S[n]; }));
    ['jalur', 'kendaraan', 'jenisJalan', 'barang'].forEach((n) => $$(`input[name="j-${n}"]`).forEach((i) => { i.checked = (S[n] || []).includes(i.value); }));
    setVal('intervalJam', S.intervalJam); setVal('restMenit', S.restMenit); renderAkt(); updateUsia();
  }
  function readForm() {
    ['plat', 'inspeksiCatatan', 'vtCatatan', 'barangRinci', 'catatan'].forEach((k) => { S[k] = val(k).trim(); });
    S.dateISO = val('tanggal') || todayISO(); S.departTime = val('berangkat') || '07:00'; S.roundTrip = $('#j-roundTrip').checked; S.plat = S.plat.toUpperCase();
    ['partner', 'inspeksi', 'vt', 'kondisi', 'lebar', 'permukaan'].forEach((n) => { const c = $(`input[name="j-${n}"]:checked`); S[n] = c ? c.value : ''; });
    ['jalur', 'kendaraan', 'jenisJalan', 'barang'].forEach((n) => { S[n] = $$(`input[name="j-${n}"]:checked`).map((i) => i.value); });
    const rows = (sel, unit) => $$(sel + ' .jakt').map((r) => ({ nama: $('.an', r).value.trim(), menit: $('.am', r).value.trim() ? Math.round(parseFloat($('.am', r).value.replace(',', '.')) * unit) : '' }));
    S.aktivitas = rows('#j-akt', 60); S.istirahat = rows('#j-ist', 1);
    S.intervalJam = Math.min(3, Math.max(1, parseFloat(val('intervalJam').replace(',', '.')) || 3)); S.restMenit = Math.min(120, Math.max(15, parseInt(val('restMenit'), 10) || 15));
  }
  function updateUsia() { readForm(); const w = $('#j-inspWrap'); if (w) w.hidden = S.inspeksi !== 'tidak'; const vw = $('#j-vtWrap'); if (vw) vw.hidden = S.vt !== 'tidak'; const ie = $('#j-usia'); if (ie) { ie.textContent = [S.inspeksi === 'tidak' && '⚠ Kendaraan tidak aman: jangan berangkat sebelum diperbaiki atau diganti.', S.vt === 'tidak' && '⚠ VT Device tidak aman: laporkan dan perbaiki sebelum berangkat.'].filter(Boolean).join(' '); ie.className = 'jsmall jwarn'; } const t = (S.aktivitas.concat(S.istirahat)).reduce((n, x) => n + (+x.menit || 0), 0); const e = $('#j-total'); if (e) e.textContent = t ? `Total waktu di lokasi (pekerjaan + istirahat): ${C.minToHM(t)}` : ''; }
  function renderList(sel, key, unit, ph, uph) {
    const box = $(sel); box.innerHTML = '';
    (S[key].length ? S[key] : [{ nama: '', menit: '' }]).forEach((a, i) => {
      const r = document.createElement('div'); r.className = 'jakt';
      r.innerHTML = `<span class="no">${i + 1}</span><input class="an" type="text" placeholder="${ph}" value="${esc(a.nama)}"><input class="am" type="number" min="0" step="${unit === 60 ? 0.25 : 5}" placeholder="${uph}" value="${a.menit ? +(a.menit / unit).toFixed(2) : ''}"><button type="button" class="jbtn x" title="Hapus">×</button>`;
      $('.x', r).onclick = () => { readForm(); S[key].splice(i, 1); if (!S[key].length) S[key] = [{ nama: '', menit: '' }]; renderAkt(); updateUsia(); schedule(); };
      box.appendChild(r);
    });
  }
  function renderAkt() { renderList('#j-akt', 'aktivitas', 60, 'mis. Inspeksi mesin', 'jam'); renderList('#j-ist', 'istirahat', 1, 'mis. Makan siang', 'menit'); }
  /* ---------- titik lokasi ---------- */
  const mapsDir = (o, d) => `https://www.google.com/maps/dir/?api=1&origin=${o.lat.toFixed(6)},${o.lng.toFixed(6)}&destination=${d.lat.toFixed(6)},${d.lng.toFixed(6)}&travelmode=driving`;
  function showPoint(which, p) {
    const el = $('#j-res-' + which);
    el.innerHTML = p ? `<span class="ok">✔</span> ${esc(p.label)} <small>(${p.lat.toFixed(4)}, ${p.lng.toFixed(4)})</small> <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/?api=1&query=${p.lat},${p.lng}">Lihat di Google Maps</a>` : '';
    if (p && which === 'tujuan' && !S.alamatPelanggan && !$('#j-alamatPelanggan').value) $('#j-alamatPelanggan').placeholder = p.label;
  }
  async function resolveInput(which) {
    const inp = $('#j-' + which), sug = $('#j-sug-' + which), res = $('#j-res-' + which); sug.innerHTML = '';
    const p = C.parseLocation(inp.value);
    if (p.kind === 'empty') { (which === 'asal' ? (origin = null) : (dest = null)); showPoint(which, null); return; }
    if (p.kind === 'short') { res.innerHTML = '<span class="bad">Link pendek tidak bisa dibaca dari browser.</span> Buka link tersebut di browser, salin alamat lengkap dari bilah alamat, lalu tempel di sini; atau ketik nama tempatnya.'; return; }
    res.textContent = 'Mencari lokasi…';
    try {
      if (p.kind === 'coord') {
        const label = p.name || await reverse(p.lat, p.lng); setPoint(which, { lat: p.lat, lng: p.lng, label });
      } else {
        const list = await geocode(p.query);
        if (!list.length) { res.innerHTML = '<span class="bad">Tempat tidak ditemukan.</span> Coba nama kota/kecamatan, atau tempel link Google Maps.'; return; }
        if (list.length === 1) setPoint(which, list[0]);
        else { res.textContent = 'Pilih lokasi yang dimaksud:'; sug.innerHTML = list.map((x, i) => `<button type="button" class="jsug-i" data-i="${i}">${esc(x.full)}</button>`).join(''); $$('.jsug-i', sug).forEach((b) => { b.onclick = () => { sug.innerHTML = ''; setPoint(which, list[+b.dataset.i]); }; }); }
      }
    } catch (e) { res.innerHTML = '<span class="bad">Gagal mencari lokasi.</span> Periksa internet, atau tempel koordinat (mis. -6.2, 106.8).'; }
  }
  function setPoint(which, p) { if (which === 'asal') origin = p; else dest = p; showPoint(which, p); schedule(0); }

  /* ---------- perhitungan otomatis ---------- */
  const schedule = (ms = 800) => { clearTimeout(calcTimer); calcTimer = setTimeout(calc, ms); };
  const setStatus = (t, cls = '') => { const e = $('#j-status'); e.textContent = t; e.className = 'jstatus ' + cls; };
  async function calc() {
    readForm(); updateUsia();
    if (!origin || !dest) { $('#j-out').innerHTML = ''; A = {}; return; }
    const my = ++busyCalc; setStatus('⏳ Menghitung rute, cuaca, dan jadwal…');
    try {
      const rk = [origin.lat, origin.lng, dest.lat, dest.lng].map((v) => v.toFixed(4)).join(',');
      const rt = await getRoute(origin, dest); if (my !== busyCalc) return;
      const elev = await getElev(rt.coords, rk); if (my !== busyCalc) return;
      if (elev && !S.permukaanManual) { const g = elev.perKm; S.permukaan = (elev.max > 1200 || g > 18) ? 'gunung' : g > 7 ? 'berbukit' : 'datar'; $$('input[name="j-permukaan"]').forEach((i) => { i.checked = i.value === S.permukaan; }); $('#j-permAuto').textContent = `(otomatis dari ketinggian: naik total ±${Math.round(elev.gain)} m, tertinggi ±${Math.round(elev.max)} m)`; }
      const tf = C.timeFactor(S);
      const wxO = await getWx(origin.lat, origin.lng, S.dateISO); if (my !== busyCalc) return;
      const sun = wxO && wxO.daily && wxO.daily.sunrise ? { rise: wxO.daily.sunrise[0].slice(11, 16), set: wxO.daily.sunset[0].slice(11, 16) } : { rise: '06:00', set: '18:00' };
      const actMin = S.aktivitas.concat(S.istirahat).reduce((n, x) => n + (+x.menit || 0), 0);
      const plan = C.planTrip({ dateISO: S.dateISO, departTime: S.departTime, driveMin: rt.minRaw * tf.factor, intervalMin: S.intervalJam * 60, restMin: S.restMenit, roundTrip: S.roundTrip, activityMin: actMin, sunrise: sun.rise, sunset: sun.set });
      const cum = C.cumulative(rt.coords);
      const bpts = plan.breaks.map((b) => C.pointAtKm(rt.coords, cum, cum[cum.length - 1] * b.frac));
      const ovPt = plan.overnight ? C.pointAtKm(rt.coords, cum, cum[cum.length - 1] * plan.overnight.frac) : null;
      // titik cuaca: berangkat, istirahat, tujuan
      const pts = [{ label: 'Berangkat: ' + short(origin.label), p: [origin.lat, origin.lng], at: plan.dep }].concat(plan.breaks.map((b, i) => ({ label: `Istirahat ${b.k}`, p: bpts[i], at: b.at }))).concat([{ label: 'Tujuan: ' + short(dest.label), p: [dest.lat, dest.lng], at: plan.arrive }]);
      const weather = await Promise.all(pts.map(async (x) => { const w = await getWx(x.p[0], x.p[1], dayISO(x.at)); return { label: x.label, timeText: C.hhmm(x.at), d: C.pickHour(w, x.at) }; })); if (my !== busyCalc) return;
      A = { route: rt, coords: rt.coords, distKm: rt.distKm, elev, plan, weather, originLabel: origin.label, destLabel: dest.label, timeWhy: tf.why, factor: tf.factor, sun, mapsUrl: mapsDir(origin, dest), bpts, ovPt, breakLabels: [], breakWx: weather.slice(1, 1 + plan.breaks.length).map((w) => (w.d ? C.wxText(w.d) : 'prakiraan belum tersedia')) };
      A.risk = C.scoreRisk(S, A); A.risk.final = S.riskManual || A.risk.level; refreshSafety();
      render(); setStatus(rt.rough ? '⚠ Rute jalan tidak tersedia; jarak & waktu adalah perkiraan kasar (garis lurus ×1,3).' : '✔ Selesai dihitung. Periksa hasilnya, sesuaikan bila perlu.', rt.rough ? 'warn' : 'ok');
      // nama lokasi istirahat (berurutan, patuh batas layanan)
      const labs = []; for (let i = 0; i < bpts.length; i++) { labs.push(await reverse(bpts[i][0], bpts[i][1])); if (my !== busyCalc) return; A.breakLabels = labs.slice(); renderSchedule(); }
      if (ovPt) { A.overnightLabel = await reverse(ovPt[0], ovPt[1]); if (my !== busyCalc) return; renderSchedule(); }
    } catch (e) { console.error(e); setStatus('Gagal menghitung: ' + (e.message || 'kesalahan jaringan') + '. Coba lagi.', 'bad'); }
  }
  const short = (l) => String(l || '').split(',').slice(0, 2).join(',').trim();
  const dayISO = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  function refreshSafety() {
    if (S.pesanEdited) return;
    const ctl = (A.risk ? A.risk.factors.map((f) => f.ctl).filter(Boolean) : []);
    const lines = [...new Set(C.STD_SAFETY.concat(ctl))];
    if (A.plan && A.plan.latestDepart) lines.unshift(`Berangkat paling lambat pukul ${A.plan.latestDepart} agar tiba sebelum gelap.`);
    $('#j-pesan').value = lines.map((x) => '- ' + x).join('\n');
  }

  /* ---------- tampilan hasil ---------- */
  function routeSVG() {
    if (!A.coords || A.coords.length < 2) return '';
    const W = 640, H = 240, pr = C.projectRoute(C.thin(A.coords, 300), W, H, 16);
    const d = pr.pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
    const mk = (pt, cls, t) => { const q = pr.project(pt[0], pt[1]); return `<circle cx="${q[0].toFixed(1)}" cy="${q[1].toFixed(1)}" r="6" class="${cls}"/>${t ? `<text x="${(q[0] + 9).toFixed(1)}" y="${(q[1] + 4).toFixed(1)}">${t}</text>` : ''}`; };
    return `<svg viewBox="0 0 ${W} ${H}" class="jmap" role="img" aria-label="Sketsa rute"><path d="${d}" class="jline"/>${(A.bpts || []).map((p, i) => mk(p, 'jbrk', i + 1)).join('')}${A.ovPt ? mk(A.ovPt, 'jovn', '🛏') : ''}${mk(A.coords[0], 'jstart', 'A')}${mk(A.coords[A.coords.length - 1], 'jend', 'B')}</svg>`;
  }
  function render() {
    const p = A.plan, r = A.risk; if (!p) return;
    const hardStop = [S.kondisi === 'tutup' && 'Jalan ditandai tidak dapat dilalui.', S.inspeksi === 'tidak' && 'Kendaraan dinyatakan tidak aman.', S.vt === 'tidak' && 'VT Device tidak berfungsi dengan aman.'].filter(Boolean);
    $('#j-out').innerHTML = `
      ${hardStop.length ? `<div class="jalert">⛔ Perjalanan tidak boleh dilakukan: ${hardStop.join(' ')} Pilih rute lain atau tunda.</div>` : ''}
      <div class="jstats">
        <div><b>${A.distKm.toFixed(0)} km</b><span>jarak${S.roundTrip ? ' sekali jalan' : ''}</span></div>
        <div><b>${C.minToHM(p.D)}</b><span>mengemudi</span></div>
        <div><b>${C.hhmm(p.dep)} → ${C.hhmm(p.arrive)}</b><span>berangkat → tiba</span></div>
        <div><b>${p.nBreaks}×</b><span>istirahat ${p.rest} mnt</span></div>
      </div>
      ${p.warn.map((w) => `<div class="jalert">⚠ ${esc(w)}</div>`).join('')}
      ${p.latestDepart ? `<div class="jalert">💡 Berangkat paling lambat pukul <b>${p.latestDepart}</b> agar tiba sebelum gelap.</div>` : ''}
      ${p.overnight ? `<div class="jalert">🛏 Disarankan menginap sekitar pukul ${p.overnight.atClock} (setelah ±${C.minToHM(p.overnight.drivenMin)} mengemudi).</div>` : ''}
      ${routeSVG()}<div class="jsmall">A = berangkat, B = tujuan, angka = titik istirahat. Sketsa tanpa peta dasar; <a target="_blank" rel="noopener noreferrer" href="${A.mapsUrl}">buka rute di Google Maps</a>.</div>
      <div id="j-sched"></div>
      <h5>Cuaca &amp; kualitas udara</h5>${wxTable()}
      <details class="jdet"><summary>Cara waktu tempuh dihitung</summary><p>Waktu dari data rute ${C.minToHM(A.route.minRaw)} × faktor ${String(A.factor.toFixed(2)).replace('.', ',')} = ${C.minToHM(p.D)}. Faktor: ${esc(A.timeWhy.join('; '))}. Aturan istirahat: minimal ${p.rest} menit setiap ${p.interval / 60} jam mengemudi, atau bergantian pengemudi dengan mengganti DID Tag VT. Ubah isian transportasi bila faktanya berbeda; jalan khusus (hauling, logging) sering tidak ada di peta umum sehingga angka ini perlu dikoreksi.</p></details>
      <h5>Penilaian risiko: <span class="jrisk ${r.final}">${r.final === 'tinggi' ? 'RISIKO BAHAYA TINGGI' : 'RISIKO BAHAYA RENDAH'}</span> <small>(skor ${r.score}; usulan otomatis: ${r.level === 'tinggi' ? 'tinggi' : 'rendah'})</small></h5>
      <ul class="jfac">${r.factors.length ? r.factors.map((f) => `<li><b>+${f.pts}</b> ${esc(f.text)}</li>`).join('') : '<li>Tidak ada faktor risiko menonjol terdeteksi.</li>'}</ul>
      <div class="jf"><span>Tetapkan risiko (atasan dapat mengubah saat persetujuan online)</span><div class="jchips"><label class="jchip"><input type="radio" name="j-risk" value="rendah" ${r.final === 'rendah' ? 'checked' : ''}><span>Rendah</span></label><label class="jchip"><input type="radio" name="j-risk" value="tinggi" ${r.final === 'tinggi' ? 'checked' : ''}><span>Tinggi</span></label></div></div>
      <div class="jsmall">Skala: skor ≥5 = tinggi (usulan; perlu verifikasi dengan kriteria risiko perusahaan).</div>`;
    $$('input[name="j-risk"]').forEach((i) => i.addEventListener('change', () => { S.riskManual = i.value; A.risk.final = i.value; render(); }));
    renderSchedule();
  }
  function renderSchedule() {
    const box = $('#j-sched'); if (!box || !A.plan) return; const p = A.plan;
    const wx = (i) => (A.breakWx && A.breakWx[i]) || '-';
    const rows = [[`Berangkat`, C.hhmm(p.dep), esc(short(origin.label)), '-']].concat(p.breaks.map((b, i) => [`Istirahat ke-${b.k}`, C.hhmm(b.at), esc((A.breakLabels && A.breakLabels[i]) || '… mencari nama lokasi'), esc(wx(i))]));
    if (p.overnight) rows.push(['Menginap (saran)', p.overnight.atClock, esc(A.overnightLabel || '… mencari nama lokasi'), '-']);
    rows.push(['Tiba (estimasi)', C.hhmm(p.arrive), esc(short(dest.label)), '-']);
    if (p.ret) rows.push(['Kembali (estimasi)', `${C.hhmm(p.ret.depart)} → ${C.hhmm(p.ret.arrive)}`, 'ke titik berangkat', '-']);
    box.innerHTML = `<h5>Jadwal perjalanan</h5><div class="jtw"><table class="jt"><thead><tr><th>Kegiatan</th><th>Pukul</th><th>Lokasi</th><th>Cuaca</th></tr></thead><tbody>${rows.map((r) => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td></tr>`).join('')}</tbody></table></div>`;
  }
  function wxTable() {
    const rows = (A.weather || []).map((w) => `<tr><td>${esc(w.label)}</td><td>${w.timeText}</td><td>${w.d ? esc(C.wxText(w.d)) : 'prakiraan belum tersedia untuk tanggal ini'}</td><td>${w.d && w.d.aqi != null ? w.d.aqi + ' (' + C.aqiCat(w.d.aqi) + ')' : '-'}</td></tr>`).join('');
    return `<div class="jtw"><table class="jt"><thead><tr><th>Titik</th><th>Pukul</th><th>Kondisi</th><th>AQI</th></tr></thead><tbody>${rows}</tbody></table></div>`;
  }

  /* ---------- model & unduhan ---------- */
  function model() {
    readForm();
    const miss = []; if (!S.plat) miss.push('plat nomor'); if (!S.inspeksi) miss.push('hasil inspeksi kendaraan'); if (!S.vt) miss.push('fungsi VT Device'); if (S.vt === 'tidak' && !S.vtCatatan) miss.push('catatan VT Device'); if (S.inspeksi === 'tidak' && !S.inspeksiCatatan) miss.push('catatan inspeksi'); if (!origin) miss.push('titik berangkat'); if (!dest) miss.push('titik tujuan');
    if (miss.length) { J.toast('Lengkapi dulu: ' + miss.join(', ') + '.'); return null; }
    if (!A.plan) { J.toast('Hasil otomatis belum siap. Tunggu sebentar atau tekan Hitung ulang.'); return null; }
    A.risk.final = S.riskManual || A.risk.final;
    const m = C.buildModel(Object.assign({}, S, { pesan: $('#j-pesan').value, tujuan: short(dest.label) }), Object.assign({}, A, { safetyAuto: C.STD_SAFETY }));
    return m;
  }
  function dl(blob, name) { const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1500); }
  async function busy(btn, fn) { const t = btn.textContent; btn.disabled = true; btn.textContent = '⏳ Menyiapkan…'; try { await fn(); } catch (e) { console.error(e); J.toast(e.message || 'Gagal membuat file.'); } finally { btn.disabled = false; btn.textContent = t; } }
  async function doPDF(btn) { const m = model(); if (!m) return; await busy(btn, async () => { await loadLib('jspdf'); await loadLib('autotable'); const doc = C.makePDF(window.jspdf.jsPDF, m); doc.save(m.fileName + '.pdf'); J.toast('PDF JRM berhasil diunduh.'); J.Mascot.play('cheer', 3000); }); }
  function routePngBytes(coords) {
    return new Promise((res) => {
      try {
        const cv = document.createElement('canvas'); cv.width = 1120; cv.height = 560; const g = cv.getContext('2d');
        g.fillStyle = '#F8FAFC'; g.fillRect(0, 0, 1120, 560); g.strokeStyle = '#999'; g.strokeRect(0.5, 0.5, 1119, 559);
        const pr = C.projectRoute(C.thin(coords, 400), 1120, 560, 30); g.strokeStyle = '#F26A0E'; g.lineWidth = 6; g.lineJoin = 'round'; g.beginPath(); pr.pts.forEach((p, i) => (i ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1]))); g.stroke();
        const dot = (p, c) => { g.fillStyle = c; g.beginPath(); g.arc(p[0], p[1], 12, 0, 7); g.fill(); }; dot(pr.pts[0], '#228B22'); dot(pr.pts[pr.pts.length - 1], '#C81E1E');
        cv.toBlob((b) => b.arrayBuffer().then((ab) => res(new Uint8Array(ab))), 'image/png');
      } catch (e) { res(null); }
    });
  }
  async function doDOCX(btn) { const m = model(); if (!m) return; await busy(btn, async () => { await loadLib('docx'); const D = window.docx; const png = m.route.length > 1 ? await routePngBytes(m.route) : null; const blob = await D.Packer.toBlob(C.makeDocx(D, m, png)); dl(blob, m.fileName + '.docx'); J.toast('Word JRM berhasil diunduh.'); J.Mascot.play('cheer', 3000); }); }
  function doWA() {
    const m = model(); if (!m) return;
    const p = A.plan; const t = `*JRM – ${S.plat}*\n${C.dayName(C.mkDate(S.dateISO, '00:00'))}\n${short(origin.label)} → ${short(dest.label)} (${A.distKm.toFixed(0)} km${S.roundTrip ? ', pulang-pergi' : ''})\nBerangkat ${C.hhmm(p.dep)}, tiba ±${C.hhmm(p.arrive)}, istirahat ${p.nBreaks}x\nRisiko: ${A.risk.final.toUpperCase()}\nRute: ${A.mapsUrl}`;
    window.open('https://wa.me/?text=' + encodeURIComponent(t), '_blank', 'noopener');
  }

  /* ---------- modal ---------- */
  function build() {
    if (built) return; built = true;
    const m = document.createElement('div'); m.className = 'modal'; m.id = 'modalJrm'; m.hidden = true;
    m.innerHTML = `<div class="modal-box wide jrm-box" role="dialog" aria-modal="true" aria-labelledby="jrmTitle"><header><h3 id="jrmTitle">🧭 Buat JRM (Journey Risk Management)</h3><button class="x" data-close aria-label="Tutup">×</button></header><div class="modal-body jrm-body">${formHTML()}</div></div>`;
    document.body.appendChild(m);
    try { localStorage.removeItem(LS); } catch (e) { /* bersihkan data lama */ } fillForm();
    const body = $('.jrm-body', m);
    body.addEventListener('change', (e) => {
      const t = e.target;
      if (t.name === 'j-permukaan') S.permukaanManual = true;
      if (t.name === 'j-risk') return;
      readForm(); updateUsia(); schedule();
    });
    body.addEventListener('input', (e) => { if (e.target.id === 'j-pesan') S.pesanEdited = true; if (e.target.closest('#j-akt') || e.target.closest('#j-ist') || ['j-berangkat', 'j-intervalJam', 'j-restMenit'].includes(e.target.id)) { updateUsia(); schedule(1200); } });
    ['asal', 'tujuan'].forEach((w) => { $('#j-' + w).addEventListener('change', () => resolveInput(w)); $('#j-' + w).addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); resolveInput(w); } }); $('#j-cari-' + w).onclick = () => resolveInput(w); });
    $('#j-gps').onclick = () => { if (!navigator.geolocation) return J.toast('Perangkat tidak mendukung lokasi.'); $('#j-res-asal').textContent = 'Mengambil lokasi…'; navigator.geolocation.getCurrentPosition(async (pos) => { const la = pos.coords.latitude, ln = pos.coords.longitude; const label = await reverse(la, ln); $('#j-asal').value = `${la.toFixed(5)}, ${ln.toFixed(5)}`; setPoint('asal', { lat: la, lng: ln, label }); }, () => { $('#j-res-asal').innerHTML = '<span class="bad">Lokasi tidak diizinkan.</span> Aktifkan izin lokasi atau ketik titik berangkat.'; }, { enableHighAccuracy: true, timeout: 15000 }); };
    $('#j-addAkt').onclick = () => { readForm(); S.aktivitas.push({ nama: '', menit: '' }); renderAkt(); };
    $('#j-addIst').onclick = () => { readForm(); S.istirahat.push({ nama: '', menit: '' }); renderAkt(); };
    $('#j-now').onclick = () => { const d = new Date(); $('#j-berangkat').value = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`; $('#j-tanggal').value = todayISO(); schedule(0); };
    $('#j-calc').onclick = () => { cache.wx.clear(); calc(); };
    $('#j-pdf').onclick = (e) => doPDF(e.currentTarget); $('#j-docx').onclick = (e) => doDOCX(e.currentTarget); $('#j-wa').onclick = doWA;
    $('#j-reset').onclick = () => { if (!confirm('Kosongkan semua isian JRM?')) return; Object.assign(S, { aktivitas: [{ nama: '', menit: '' }], istirahat: [{ nama: 'Makan siang dan ibadah', menit: 60 }], intervalJam: 3, restMenit: 15, plat: '', inspeksi: '', inspeksiCatatan: '', vt: '', vtCatatan: '', riskManual: null, pesanEdited: false, permukaanManual: false, plat: '', inspeksi: '', inspeksiCatatan: '', vt: '', vtCatatan: '', barangRinci: '', catatan: '' }); origin = dest = null; A = {}; ['asal', 'tujuan'].forEach((w) => { $('#j-' + w).value = ''; showPoint(w, null); }); $('#j-pesan').value = ''; $('#j-out').innerHTML = ''; fillForm(); };
  }
  function open() { build(); fillForm(); const m = $('#modalJrm'); m.hidden = false; const f = $('#j-plat'); setTimeout(() => f && !f.value && f.focus(), 40); J.Mascot.play('present', 2600); }
  window.JASMIN_JRM = { open };
  document.addEventListener('click', (e) => { const b = e.target.closest('#btnJrm'); if (b) { const app = document.getElementById('app'); app && app.classList.remove('info-open'); open(); } });
})();
