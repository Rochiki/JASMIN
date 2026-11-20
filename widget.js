/* ==========================================================================
   J.A.S.M.I.N — widget.js
   Widget cuaca, jam, prakiraan, dan kualitas udara di sidebar.
   Sumber data: Open-Meteo (gratis, tanpa API key). Lokasi: cari nama kota atau tombol "lokasi saya".
   ========================================================================== */
(function () {
  'use strict';
  const J = window.JASMIN;
  const $ = (s) => document.querySelector(s);
  const store = J.store;
  const esc = J.esc;

  const DEFAULT_LOC = { name: 'Jakarta', admin: 'DKI Jakarta', lat: -6.2146, lon: 106.8451, tz: 'Asia/Jakarta' };
  let loc = store.get('jasmin.loc', DEFAULT_LOC);
  let tz = loc.tz || 'Asia/Jakarta';
  let timer = null;

  // kode cuaca WMO -> ikon + teks Indonesia
  const WMO = {
    0: ['☀️', 'Cerah'], 1: ['🌤️', 'Cerah berawan'], 2: ['⛅', 'Berawan sebagian'], 3: ['☁️', 'Berawan'],
    45: ['🌫️', 'Berkabut'], 48: ['🌫️', 'Kabut tebal'], 51: ['🌦️', 'Gerimis ringan'], 53: ['🌦️', 'Gerimis'], 55: ['🌧️', 'Gerimis lebat'],
    56: ['🌧️', 'Gerimis beku'], 57: ['🌧️', 'Gerimis beku lebat'], 61: ['🌧️', 'Hujan ringan'], 63: ['🌧️', 'Hujan sedang'], 65: ['🌧️', 'Hujan lebat'],
    66: ['🌧️', 'Hujan beku'], 67: ['🌧️', 'Hujan beku lebat'], 71: ['🌨️', 'Salju ringan'], 73: ['🌨️', 'Salju'], 75: ['🌨️', 'Salju lebat'], 77: ['🌨️', 'Butiran salju'],
    80: ['🌦️', 'Hujan lokal ringan'], 81: ['🌧️', 'Hujan lokal'], 82: ['⛈️', 'Hujan lokal deras'], 85: ['🌨️', 'Hujan salju'], 86: ['🌨️', 'Hujan salju lebat'],
    95: ['⛈️', 'Badai petir'], 96: ['⛈️', 'Badai petir + es'], 99: ['⛈️', 'Badai petir deras'],
  };
  const wmo = (c, night) => { const w = WMO[c] || ['🌡️', 'Cuaca']; return night && (c === 0 || c === 1) ? [c === 0 ? '🌙' : '☁️', c === 0 ? 'Cerah' : 'Cerah berawan'] : w; };

  // kategori US AQI (model Open-Meteo) + saran singkat
  const AQI = [
    [50, 'Baik', '#2e9e4f', 'Aman untuk aktivitas luar ruangan.'],
    [100, 'Sedang', '#d4a017', 'Kelompok sensitif sebaiknya kurangi aktivitas berat di luar.'],
    [150, 'Tidak sehat bagi kelompok sensitif', '#ea7a1a', 'Kurangi aktivitas berat di luar; pertimbangkan masker.'],
    [200, 'Tidak sehat', '#d93a2b', 'Batasi kerja berat di luar; pakai masker (N95/KN95).'],
    [300, 'Sangat tidak sehat', '#8e44ad', 'Hindari aktivitas luar; pakai masker, laporkan ke atasan/QSHE.'],
    [Infinity, 'Berbahaya', '#7b1e1e', 'Hentikan pekerjaan di luar ruangan; ikuti arahan QSHE.'],
  ];
  const aqiCat = (v) => AQI.find((x) => v <= x[0]);

  function zoneLabel() {
    const map = { 'Asia/Jakarta': 'WIB', 'Asia/Pontianak': 'WIB', 'Asia/Makassar': 'WITA', 'Asia/Jayapura': 'WIT' };
    if (map[tz]) return map[tz];
    try { return new Intl.DateTimeFormat('id-ID', { timeZone: tz, timeZoneName: 'short' }).formatToParts(new Date()).find((p) => p.type === 'timeZoneName').value; } catch { return ''; }
  }
  function tick() {
    const now = new Date();
    try {
      $('#wxTime').textContent = new Intl.DateTimeFormat('en-GB', { timeZone: tz, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }).format(now) + ' ' + zoneLabel();
      $('#wxDate').textContent = new Intl.DateTimeFormat('id-ID', { timeZone: tz, weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' }).format(now);
    } catch { $('#wxTime').textContent = now.toLocaleTimeString('en-GB'); }
  }

  const q = (o) => Object.entries(o).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&');
  async function getJSON(url) { const r = await fetch(url); if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); }

  async function load() {
    $('#wxPlaceName').textContent = loc.name;
    $('#wxUpd').textContent = 'memuat…';
    const [fc, aq] = await Promise.allSettled([
      getJSON('https://api.open-meteo.com/v1/forecast?' + q({ latitude: loc.lat, longitude: loc.lon, current: 'temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,is_day', daily: 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max', timezone: 'auto', forecast_days: 4 })),
      getJSON('https://air-quality-api.open-meteo.com/v1/air-quality?' + q({ latitude: loc.lat, longitude: loc.lon, current: 'us_aqi,pm2_5,pm10', timezone: 'auto' })),
    ]);
    if (fc.status === 'fulfilled') {
      const d = fc.value; if (d.timezone) { tz = d.timezone; loc.tz = tz; store.set('jasmin.loc', loc); }
      const c = d.current, night = c.is_day === 0, [ic, tx] = wmo(c.weather_code, night);
      $('#wxIcon').textContent = ic; $('#wxTemp').textContent = Math.round(c.temperature_2m) + '°C'; $('#wxDesc').textContent = tx;
      $('#wxMeta').innerHTML = `<span title="Terasa seperti">🌡️ ${Math.round(c.apparent_temperature)}°</span><span title="Kelembapan">💧 ${Math.round(c.relative_humidity_2m)}%</span><span title="Angin">💨 ${Math.round(c.wind_speed_10m)} km/j</span>`;
      const days = d.daily, nm = new Intl.DateTimeFormat('id-ID', { weekday: 'short', timeZone: tz });
      $('#wxFc').innerHTML = days.time.map((t, i) => {
        const [e, txt] = wmo(days.weather_code[i], false); const lab = i === 0 ? 'Hari ini' : i === 1 ? 'Besok' : nm.format(new Date(t + 'T12:00:00'));
        const rain = days.precipitation_probability_max[i];
        return `<div class="wx-day" title="${esc(txt)}"><small>${esc(lab)}</small><span>${e}</span><b>${Math.round(days.temperature_2m_max[i])}°<i>/${Math.round(days.temperature_2m_min[i])}°</i></b><em>${rain == null ? '' : '☔ ' + rain + '%'}</em></div>`;
      }).join('');
      $('#wxUpd').textContent = 'diperbarui ' + new Intl.DateTimeFormat('en-GB', { timeZone: tz, hour: '2-digit', minute: '2-digit' }).format(new Date());
    } else {
      $('#wxDesc').textContent = 'Cuaca tidak tersedia (offline?)'; $('#wxTemp').textContent = '--°'; $('#wxFc').innerHTML = ''; $('#wxMeta').innerHTML = '';
      $('#wxUpd').textContent = 'ketuk lokasi untuk coba lagi';
    }
    const box = $('#wxAqi');
    if (aq.status === 'fulfilled' && aq.value.current && aq.value.current.us_aqi != null) {
      const v = Math.round(aq.value.current.us_aqi), cat = aqiCat(v), pm = aq.value.current.pm2_5;
      box.hidden = false;
      box.innerHTML = `<div class="aqi-row"><span class="aqi-badge" style="background:${cat[2]}">${v}</span><div><b>Kualitas udara: ${esc(cat[1])}</b><small>PM2.5 ${pm != null ? Math.round(pm) : '—'} µg/m³ · US AQI (perkiraan model)</small></div></div><div class="aqi-bar"><i style="left:${Math.min(100, v / 3)}%"></i></div><p>${esc(cat[3])}</p>`;
    } else { box.hidden = true; }
  }

  function setLoc(l) {
    loc = { name: l.name, admin: l.admin || '', lat: l.lat, lon: l.lon, tz: l.tz || tz };
    tz = loc.tz; store.set('jasmin.loc', loc);
    $('#wxForm').hidden = true; $('#wxPlace').setAttribute('aria-expanded', 'false'); $('#wxSuggest').innerHTML = '';
    tick(); load();
  }

  /* ---- cari lokasi ---- */
  let deb = null, last = [];
  async function suggest(text) {
    const box = $('#wxSuggest');
    if (text.trim().length < 2) { box.innerHTML = ''; last = []; return; }
    try {
      const d = await getJSON('https://geocoding-api.open-meteo.com/v1/search?' + q({ name: text.trim(), count: 6, language: 'id', format: 'json' }));
      last = (d.results || []).map((r) => ({ name: r.name, admin: [r.admin1, r.country].filter(Boolean).join(', '), lat: r.latitude, lon: r.longitude, tz: r.timezone }));
      box.innerHTML = last.length ? last.map((r, i) => `<li role="option" data-i="${i}"><b>${esc(r.name)}</b><small>${esc(r.admin)}</small></li>`).join('') : '<li class="none">Lokasi tidak ditemukan</li>';
    } catch { box.innerHTML = '<li class="none">Pencarian gagal (periksa koneksi)</li>'; }
  }
  $('#wxQuery').addEventListener('input', (e) => { clearTimeout(deb); deb = setTimeout(() => suggest(e.target.value), 280); });
  $('#wxSuggest').addEventListener('click', (e) => { const li = e.target.closest('li[data-i]'); if (li) setLoc(last[+li.dataset.i]); });
  $('#wxForm').addEventListener('submit', async (e) => { e.preventDefault(); if (!last.length) await suggest($('#wxQuery').value); if (last[0]) setLoc(last[0]); });
  $('#wxPlace').addEventListener('click', () => {
    const f = $('#wxForm'); f.hidden = !f.hidden; $('#wxPlace').setAttribute('aria-expanded', String(!f.hidden));
    if (!f.hidden) { $('#wxQuery').value = ''; $('#wxQuery').focus(); } else { load(); }
  });
  $('#wxGeo').addEventListener('click', () => {
    if (!navigator.geolocation) { J.toast('Browser tidak mendukung lokasi otomatis. Cari nama kota saja ya.'); return; }
    J.toast('Mengambil lokasi…');
    navigator.geolocation.getCurrentPosition(async (p) => {
      const lat = +p.coords.latitude.toFixed(4), lon = +p.coords.longitude.toFixed(4); let name = 'Lokasi saya', admin = '';
      try { const r = await getJSON('https://api.bigdatacloud.net/data/reverse-geocode-client?' + q({ latitude: lat, longitude: lon, localityLanguage: 'id' })); name = r.city || r.locality || r.principalSubdivision || name; admin = r.principalSubdivision || ''; } catch { /* tetap pakai koordinat */ }
      setLoc({ name, admin, lat, lon });
    }, () => J.toast('Izin lokasi ditolak. Cari nama kota secara manual ya.'), { enableHighAccuracy: false, timeout: 12000, maximumAge: 600000 });
  });

  tick(); timer = setInterval(tick, 1000);
  load();
  setInterval(load, 15 * 60 * 1000);                       // segarkan tiap 15 menit
  document.addEventListener('visibilitychange', () => { if (!document.hidden) { tick(); load(); } });
  window.JASMIN.Weather = { load, setLoc, get loc() { return loc; } };
})();
