/* ==========================================================================
   J.A.S.M.I.N — app.js
   Teh JASMIN: asisten JSEA statis (GitHub Pages), tanpa server.
   ========================================================================== */

/* ---------- KONFIGURASI (ubah di sini) ---------- */
const CONFIG = {
  WA_NUMBER: '628118572691',            // nomor Hotline QSHE, format internasional tanpa + / 0 di depan
  WA_TEXT: 'Halo Teh JASMIN!',          // teks otomatis saat WhatsApp terbuka
  HOTLINE_LABEL: '0811-8572-691',       // tampilan nomor di badge "Chat with Us"
  UPDATES_URL: 'qshe-updates.json',     // sumber kartu "QSHE Info & Update"
  BOT_NAME: 'Teh JASMIN',
  AVATAR: 'assets/avatar.png',          // avatar bulat pada balasan bot
  GEMINI_MODEL: 'gemini-2.5-flash',     // dipakai hanya bila Mode Cerdas diaktifkan
};
const WA_URL = `https://wa.me/${CONFIG.WA_NUMBER}?text=${encodeURIComponent(CONFIG.WA_TEXT)}`;

(function () {
  'use strict';

  const DB = window.JSEA_DB;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduceMotion = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* abaikan */ } },
    del(k) { try { localStorage.removeItem(k); } catch { /* abaikan */ } },
  };

  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const rich = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
  const plain = (s) => String(s ?? '').replace(/\*\*/g, '');
  const cap = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);

  /* ======================================================================
     1. MASKOT — 9 pose dari animasi Teh JASMIN
     ====================================================================== */
  const Mascot = (() => {
    const el = $('#mascot');
    const frames = {};
    $$('.f', el).forEach((img) => (frames[img.dataset.pose] = img));
    const speech = $('.speech', el);
    let current = 'idle', revert = null, hold = false, speechTimer = null;

    function show(name) {
      if (!frames[name] || name === current) return;
      frames[current] && frames[current].classList.remove('show');
      frames[name].classList.add('show');
      current = name;
    }
    function play(name, ms = 2400) {
      clearTimeout(revert);
      show(name);
      if (name !== 'idle') revert = setTimeout(() => { if (!hold) show('idle'); }, ms);
    }
    function think(on) {           // pose "berpikir" selama menyiapkan jawaban
      hold = on;
      if (on) { clearTimeout(revert); show('think'); } else show('idle');
    }
    function say(html, ms = 7000) {
      if (!speech) return;
      speech.innerHTML = html + '<i class="spark">✦</i>';
      speech.classList.remove('hide');
      clearTimeout(speechTimer);
      speechTimer = setTimeout(() => speech.classList.add('hide'), ms);
    }
    // gerakan kecil acak saat diam, supaya karakter terasa hidup
    if (!reduceMotion) {
      const ambient = ['wave', 'present', 'tip', 'thumbs'];
      (function loop() {
        setTimeout(() => {
          if (!document.hidden && !hold && current === 'idle') play(ambient[Math.floor(Math.random() * ambient.length)], 1900);
          loop();
        }, 9000 + Math.random() * 7000);
      })();
    }
    el.href = WA_URL;
    return { play, think, say, show };
  })();

  /* ======================================================================
     2. PENGOLAHAN TEKS (bahasa pekerja, slang, sinonim)
     ====================================================================== */
  const SLANG = {
    gmn: 'bagaimana', gimana: 'bagaimana', gmna: 'bagaimana', bgmn: 'bagaimana', ga: 'tidak', gak: 'tidak', nggak: 'tidak', ngga: 'tidak', engga: 'tidak', enggak: 'tidak', tdk: 'tidak',
    yg: 'yang', dgn: 'dengan', utk: 'untuk', buat: 'buat', bikin: 'buat', bikinin: 'buat', buatin: 'buat', buatkan: 'buat', bikinkan: 'buat',
    copot: 'lepas', nyopot: 'lepas', cabut: 'lepas', ngelas: 'las', nglas: 'las', ngganti: 'ganti', nyervis: 'servis', service: 'servis', servise: 'servis',
    sama: 'dengan', klo: 'kalau', kalo: 'kalau', dr: 'dari', krn: 'karena', sblm: 'sebelum', sdh: 'sudah', udh: 'sudah', blm: 'belum', jgn: 'jangan', tlg: 'tolong', tolongin: 'tolong',
    hidraulik: 'hidrolik', hydraulic: 'hidrolik', hidrolis: 'hidrolik', cylinder: 'silinder', silender: 'silinder', ekskavator: 'excavator', eskavator: 'excavator', exavator: 'excavator', ekscavator: 'excavator',
    oil: 'oli', tire: 'ban', tyre: 'ban', aki: 'baterai', accu: 'baterai', battery: 'baterai', apd: 'apd', ppe: 'apd', p2h: 'p2h', loto: 'loto',
  };
  const STOP = new Set(('yang dan di ke dari untuk dengan pada atau ini itu saya aku kamu anda kita mau ingin tolong dong ya sih deh nih lah kah mohon bisa apakah apa adalah ada akan agar supaya buat dalam oleh juga sudah belum sebuah para bagaimana cara gimana minta bantu bantuan jsea pekerjaan kerja analisa analisis tabel form teh jasmin bikin buatkan membuat membuatkan tentang soal mengenai tuliskan berikan beri tampilkan lihat tunjukkan').split(' '));

  const SYN_GROUPS = [
    ['lepas', 'bongkar', 'copot', 'cabut', 'removal', 'remove', 'dismantle', 'disassembly', 'bongkar'],
    ['pasang', 'install', 'installation', 'rakit', 'assembly', 'assemble', 'merakit', 'pemasangan'],
    ['ganti', 'replace', 'replacement', 'tukar', 'penggantian', 'swap'],
    ['oli', 'pelumas', 'lubricant', 'grease', 'gemuk', 'pelumasan', 'greasing'],
    ['hidrolik', 'hose', 'selang', 'pressure', 'tekanan'],
    ['silinder', 'boom', 'arm', 'bucket'],
    ['ban', 'roda', 'rim', 'velg', 'wheel', 'mur roda'],
    ['las', 'welding', 'weld', 'pengelasan', 'gerinda', 'grinding', 'hot work', 'potong', 'cutting'],
    ['baterai', 'jump start', 'booster', 'starter', 'kelistrikan', 'listrik'],
    ['parkir', 'parking', 'park', 'memarkir', 'naik turun', 'serah terima'],
    ['perjalanan', 'dinas', 'mobilisasi', 'trip', 'berangkat', 'demobilisasi'],
    ['towing', 'derek', 'tarik', 'recovery', 'evakuasi', 'retrieval', 'terperosok', 'stuck'],
    ['angkat', 'lifting', 'rigging', 'crane', 'sling', 'hoist', 'pengangkatan', 'berat'],
    ['kabin', 'cab', 'cabin', 'tilting', 'tilt'],
    ['rem', 'brake', 'akumulator', 'accumulator', 'nitrogen'],
    ['solar', 'bbm', 'fuel', 'diesel', 'bahan bakar', 'adblue', 'def', 'urea', 'refrigerant', 'coolant'],
    ['limbah', 'waste', 'b3', 'sampah', 'tumpahan', 'spill'],
    ['isolasi', 'lockout', 'loto', 'zero energy', 'energi', 'lock', 'gembok', 'tagout'],
    ['inspeksi', 'p2h', 'walk round', 'pemeriksaan', 'cek', 'periksa', 'check'],
    ['cuci', 'pencucian', 'washing', 'contamination', 'kontaminasi'],
    ['track', 'undercarriage', 'idler', 'roller', 'sprocket', 'rantai'],
    ['cat', 'painting', 'pengecatan', 'test run', 'performance test'],
    ['mogok', 'breakdown', 'roadside', 'darurat jalan'],
  ];
  const SYN = new Map();
  SYN_GROUPS.forEach((g) => g.forEach((w) => { const s = SYN.get(w) || new Set(); g.forEach((x) => x !== w && s.add(x)); SYN.set(w, s); }));

  const normalize = (s) => String(s || '').toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '')
    .replace(/[–—]/g, ' ').replace(/[^a-z0-9\s/+.-]/g, ' ').replace(/[./-]+(?=\s|$)/g, ' ').replace(/\s+/g, ' ').trim();

  function tokenize(s) {
    return normalize(s).split(/[\s/]+/).map((w) => SLANG[w] || w).filter((w) => w && (w.length > 1 || /\d/.test(w)));
  }
  // varian akar kata (stemmer ringan bahasa Indonesia; menghasilkan beberapa kandidat)
  function variants(w) {
    const out = new Set([w]);
    if (w.length <= 3 || /^\d/.test(w)) return out;
    let b = w.replace(/(nya|lah|kah)$/, '');
    out.add(b);
    const sfx = (x) => { out.add(x); const y = x.replace(/(kan|an|i)$/, ''); if (y.length >= 4) out.add(y); };
    sfx(b);
    const pre = [[/^(meng|peng)/, ['', 'k']], [/^(meny|peny)/, ['s']], [/^(mem|pem)/, ['', 'p']], [/^(men|pen)/, ['', 't']], [/^(me|pe)/, ['']], [/^(ber|ter|per|di|ke|se)/, ['']]];
    for (const [re, add] of pre) {
      const m = b.match(re);
      if (m) {
        const rest = b.slice(m[0].length);
        if (rest.length >= 4) add.forEach((a) => sfx(a + rest));
        break;
      }
    }
    return out;
  }

  /* ---- deteksi merek / model -> istilah generik (Aturan Main Revisi) ---- */
  const BRAND_RULES = [
    [/\b(hitachi|zaxis|zx\s?-?\d{2,4}[a-z0-9-]*|ex\s?-?\d{3,4}[a-z0-9-]*|pc\s?-?\d{2,3}[a-z0-9-]*|komatsu\s?pc[a-z0-9-]*|kobelco|sk\s?-?\d{2,3}[a-z0-9-]*|doosan|dx\s?-?\d{2,3}[a-z0-9-]*|sumitomo|sh\s?-?\d{3}[a-z0-9-]*|sany|sy\s?-?\d{2,3}[a-z0-9-]*|volvo\s?ec\s?-?\d+[a-z]*)\b/gi, 'excavator'],
    [/\b(volvo\s?a\s?-?\d{2}[a-z]*|a\s?-?\d{2}[gf]\b|bell\s?b\s?-?\d+[a-z]*|terex|moxy|hm\s?-?\d{3}[a-z0-9-]*|eh\s?-?\d{3,4}[a-z0-9-]*|hd\s?-?\d{3}[a-z0-9-]*)\b/gi, 'adt hauler'],
    [/\b(foton|hino|fuso|isuzu|scania|actros|mercedes|man\s?tg[a-z]*|hilux|ranger|triton|dobel kabin)\b/gi, 'truck'],
  ];
  function genericize(text) {
    let t = text; const hits = [];
    for (const [re, gen] of BRAND_RULES) {
      t = t.replace(re, (m) => { hits.push(m); return ' ' + gen + ' '; });
    }
    return { text: t, brand: hits.length > 0 };
  }

  /* ---- indeks pencarian ---- */
  const jobs = DB ? DB.jobs : [];
  const byCode = new Map(jobs.map((j) => [j.code.toLowerCase(), j]));
  const modMap = new Map((DB ? DB.modules : []).map((m) => [m.code, m]));
  const INDEX = new Map();   // varian -> Map(docIdx -> bobot)
  const docLen = [];
  function addTerm(v, d, w) { let m = INDEX.get(v); if (!m) INDEX.set(v, (m = new Map())); m.set(d, (m.get(d) || 0) + w); }
  jobs.forEach((j, d) => {
    const fields = [[j.title, 4], [(modMap.get(j.module) || {}).name + ' ' + (modMap.get(j.module) || {}).hint, 1], [j.steps.map((s) => plain(s.step)).join(' '), 1.5], [j.pointOfConcern.join(' ') + ' ' + j.goldenRules.join(' ') + ' ' + j.keterangan, 0.5]];
    let n = 0;
    for (const [txt, w] of fields) for (const tk of tokenize(txt)) { variants(tk).forEach((v) => addTerm(v, d, w)); n++; }
    docLen[d] = n;
  });
  const N = jobs.length || 1;
  const idf = (v) => { const m = INDEX.get(v); return Math.log(1 + N / (1 + (m ? m.size : 0))); };

  const MOD_WORDS = [
    ['EXC', /\b(excavator|exc|bucket|boom|arm|swing|undercarriage|track|idler|sprocket|counterweight|attachment|silinder)\b/],
    ['ADT', /\b(adt|hauler|articulated|dump truck|dumptruck|bin|articulation|haul road|tipping|akumulator)\b/],
    ['TRK', /\b(tractor head|trailer|fifth wheel|sadel|truck jalan raya|service truck|rem udara|common rail|tilting kabin|dpf|scr)\b/],
    ['MWS', /\b(mobile workshop|bengkel keliling|mws|genset|kompresor)\b/],
    ['RSA', /\b(roadside|rsa|mogok|breakdown|jalan hauling|jalan umum|panggilan darurat)\b/],
    ['GEN', /\b(umum|generik|dasar|isolasi energi|zero energy|loto|lifting|rigging|perjalanan dinas|parkir)\b/],
  ];

  function search(query) {
    let toks = tokenize(query).filter((t) => !STOP.has(t));
    const UNITW = new Set(['adt', 'excavator', 'exc', 'hauler', 'truck', 'mws']);   // dipakai untuk boost modul, bukan kata isi
    const content = toks.filter((t) => !UNITW.has(t));
    if (content.length) toks = content;
    const scores = new Float64Array(jobs.length);
    const used = new Set();
    let matched = 0;
    toks.forEach((tk) => {
      const before = used.size; let hit = false;
      const group = [[tk, 1]];
      (SYN.get(tk) || []).forEach((s) => group.push([s, 0.55]));
      group.forEach(([w, wt]) => {
        const best = new Map();
        tokenize(w).forEach((x) => variants(x).forEach((v) => {
          const m = INDEX.get(v); if (!m) return;
          const f = idf(v) * wt;
          m.forEach((tf, d) => { const sc = f * (1 + Math.log(1 + tf)); if (sc > (best.get(d) || 0)) best.set(d, sc); });
        }));
        best.forEach((sc, d) => { scores[d] += sc; used.add(d); hit = true; });
      });
      if (hit) matched++;
    });
    const nq = normalize(query);
    MOD_WORDS.forEach(([code, re]) => { if (re.test(nq)) jobs.forEach((j, d) => { if (j.module === code && scores[d] > 0) scores[d] *= 1.6; }); });
    // frasa judul persis
    jobs.forEach((j, d) => { const t = normalize(j.title); if (nq.length > 5 && t.includes(nq)) scores[d] += 6; });
    const ranked = jobs.map((j, d) => ({ job: j, score: scores[d] / Math.sqrt(1 + toks.length * 0.0) })).filter((r) => r.score > 0).sort((a, b) => b.score - a.score);
    return { ranked, toks, qn: toks.length, coverage: toks.length ? matched / toks.length : 0 };
  }

  /* ======================================================================
     3. MODEL FORM JSEA (dipakai tampilan, PDF, Excel, salin)
     ====================================================================== */
  const NOENV = DB ? DB.meta.noEnvText : 'Tidak ada dampak lingkungan signifikan yang teridentifikasi pada langkah ini.';
  const NOVERIFY = DB ? DB.meta.noVerifyText : 'Tidak ada informasi kritis yang memerlukan verifikasi tambahan berdasarkan sumber yang tersedia.';
  const DISCLAIMER = DB ? DB.meta.disclaimer : '';
  const PV = '[PERLU VERIFIKASI]';
  const PV_RE = /((?:sesuai|ikuti|mengacu(?:\s+pada)?|merujuk(?:\s+pada)?|rujuk)\s+(?:spesifikasi(?:\s+OEM)?|OEM\s+Manual|manual|torsi|torque|kapasitas|SWL)\b)/i;

  const ctlKind = (label) => {
    const l = label.toLowerCase();
    if (l.startsWith('critical')) return 'crit';
    if (l.startsWith('elimin')) return 'elim';
    if (l.startsWith('substit')) return 'sub';
    if (l.startsWith('engineer')) return 'eng';
    if (l.startsWith('admin')) return 'adm';
    if (l.startsWith('environ')) return 'env';
    if (l.startsWith('ppe')) return 'ppe';
    return '';
  };
  const isNoSig = (t) => /^tidak\s+signifikan\.?$/i.test(t.trim());
  const splitList = (s) => (s || '').split(/,\s*(?![^()]*\))/).map((x) => x.replace(/\.\s*$/, '').trim()).filter(Boolean);
  const todayLong = () => new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date());
  const todayISO = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; };

  function buildForm(job, opts = {}) {
    const saved = store.get('jasmin.meta', {});
    const rows = job.steps.map((s) => {
      const hazard = s.hazards.map((h) => ({ k: 'b', tag: h.cat, text: h.text }));
      if (s.risks.length) { hazard.push({ k: 'sub', text: 'Risiko & Dampak' }); s.risks.forEach((r) => hazard.push({ k: 'b', tag: r.cat, text: r.text })); }
      const aspects = s.envAspects.filter((t) => !isNoSig(t)), impacts = s.envImpacts.filter((t) => !isNoSig(t));
      const env = [];
      if (!aspects.length && !impacts.length) env.push({ k: 'noenv', text: NOENV });
      else {
        aspects.forEach((t) => env.push({ k: 'b', tag: 'E', text: t }));
        if (impacts.length) { if (aspects.length) env.push({ k: 'sub', text: 'Dampak' }); impacts.forEach((t) => env.push({ k: 'b', tag: 'E', text: t })); }
      }
      const controls = s.controls.filter((c) => c.text.trim() && !/^[—–-]+\.?$/.test(c.text.trim())).map((c) => {
        const m = c.text.match(PV_RE);
        return { label: c.label, kind: ctlKind(c.label), text: c.text, pv: !!m };
      });
      return { no: s.no, step: plain(s.step), hazard, env, controls, pic: s.pic, refs: s.refs };
    });

    // CRITICAL INFORMATION TO VERIFY — hanya dari teks database yang menunda nilai/prosedur ke manual
    const critical = [];
    const part = (DB.parts || []).find((p) => p.title === job.part);
    if (part && part.note) critical.push({ k: 'scope', text: plain(part.note) });
    if (job.module === 'EXC' || job.module === 'ADT') critical.push({ k: 'prereq', text: 'Prasyarat wajib sesuai database: selesaikan JSEA-GEN-01 (Persiapan dan Isolasi Energi / Zero Energy State) sebelum pekerjaan ini dimulai.' });
    if (opts.brand) critical.push({ k: 'brand', text: 'Anda menyebut merek/model unit. JSEA ini disusun per jenis pekerjaan; prosedur, torsi, tekanan, dan nilai spesifik unit tersebut ' + PV + ' langsung ke OEM Manual unit yang dikerjakan.' });
    rows.forEach((r) => r.controls.forEach((c) => {
      if (!c.pv) return;
      const sent = c.text.split(/(?<=[.;])\s+/).find((x) => PV_RE.test(x)) || c.text;
      critical.push({ k: 'pv', text: `Langkah ${r.no}: “${sent.replace(/[.;]\s*$/, '').slice(0, 190)}” — nilai/prosedur spesifik tidak tertulis di database. ${PV}` });
    }));

    const apd = [];
    const ppe = job.requiredPPE;
    splitList(ppe.mandatory.replace(/^APD dasar lengkap\.?$/i, '')).forEach((t) => apd.push({ g: 'wajib', text: cap(t) }));
    splitList(ppe.additional).forEach((t) => apd.push({ g: 'tambahan', text: cap(t) }));

    return {
      id: job.id, code: job.code, job,
      meta: {
        no: job.id, nama: job.title, tanggal: opts.tanggal || todayISO(),
        lokasi: saved.lokasi || '', dept: saved.dept || '', disetujui: saved.disetujui || '', dianalisa: saved.dianalisa || '',
      },
      apd, rows, critical, disclaimer: job.disclaimer || DISCLAIMER,
      support: {
        'Additional Safety Tips': job.additionalSafetyTips, 'Point of Concern': job.pointOfConcern, 'Common Mistakes': job.commonMistakes,
        'Golden Rules': job.goldenRules, 'Critical Controls': job.criticalControls,
      },
      ppe, emergency: job.emergencyResponse, keterangan: job.keterangan,
    };
  }

  // teks polos per sel (PDF / Excel / Salin)
  const withPV = (c) => c.pv ? c.text.replace(PV_RE, (m) => `${m} ${PV}`) : c.text;
  function cellText(row, which) {
    const L = [];
    if (which === 'step') return row.step;
    if (which === 'hazard' || which === 'env') {
      (which === 'hazard' ? row.hazard : row.env).forEach((x) => {
        if (x.k === 'sub') L.push(x.text + ':'); else if (x.k === 'noenv') L.push(x.text);
        else L.push('• ' + (x.tag ? `(${x.tag}) ` : '') + x.text);
      });
      return L.join('\n');
    }
    if (which === 'ctl') return row.controls.map((c) => `${c.label ? c.label + ': ' : ''}${withPV(c)}`).join('\n');
    if (which === 'pic') return row.pic;
    return '';
  }

  /* ---- render HTML ---- */
  const cellHTML = (arr) => {
    let h = '', open = false;
    const closeUl = () => { if (open) { h += '</ul>'; open = false; } };
    arr.forEach((x) => {
      if (x.k === 'sub') { closeUl(); h += `<div class="sublbl">${esc(x.text)}</div>`; }
      else if (x.k === 'noenv') { closeUl(); h += `<span class="noenv">${esc(x.text)}</span>`; }
      else { if (!open) { h += '<ul>'; open = true; } h += `<li>${x.tag ? `<span class="tg ${x.tag}">${x.tag}</span>` : ''}${rich(x.text)}</li>`; }
    });
    closeUl(); return h;
  };
  const ctlHTML = (controls) => controls.map((c) => {
    let t = rich(c.text);
    if (c.pv) t = t.replace(PV_RE.test(c.text) ? new RegExp(esc(c.text.match(PV_RE)[1]).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')) : /$^/, (m) => `${m} <span class="pv">${PV}</span>`);
    return `<div class="ctl k-${c.kind || 'x'}">${c.label ? `<span class="ctl-l">${esc(c.label)}</span>` : ''}${t}</div>`;
  }).join('');

  function formHTML(f) {
    const m = f.meta;
    const val = (v, ph) => (v ? `<div class="v">${esc(v)}</div>` : `<div class="v blank">${ph}</div>`);
    const dateTxt = (() => { try { return new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(m.tanggal + 'T00:00:00')); } catch { return m.tanggal; } })();
    const apdWajib = f.apd.filter((a) => a.g === 'wajib'), apdTam = f.apd.filter((a) => a.g === 'tambahan');
    const apdHTML = (arr) => arr.map((a) => `<span>${esc(a.text)}</span>`).join('');
    const rowsHTML = f.rows.map((r) => `<tr>
      <td class="c-no" data-label="No">${r.no}</td>
      <td class="c-step" data-label="Langkah Kerja">${rich(r.step)}</td>
      <td class="c-haz" data-label="Hazard (Bahaya)">${cellHTML(r.hazard)}</td>
      <td class="c-env" data-label="Dampak Lingkungan">${cellHTML(r.env)}</td>
      <td class="c-ctl" data-label="Pencegahan / Pengendalian">${ctlHTML(r.controls)}</td>
      <td class="c-pic" data-label="PIC">${esc(r.pic)}</td></tr>`).join('');
    const sup = Object.entries(f.support).filter(([, v]) => v.length).map(([k, v]) => `<h5>${esc(k)}</h5><ul>${v.map((x) => `<li>${rich(x)}</li>`).join('')}</ul>`).join('');
    const e = f.emergency;
    const emerg = (e.potential || e.firstResponse || e.equipment) ? `<h5>Emergency Response</h5><ul>${e.potential ? `<li><b>Potensi keadaan darurat:</b> ${rich(e.potential)}</li>` : ''}${e.firstResponse ? `<li><b>Respon awal:</b> ${rich(e.firstResponse)}</li>` : ''}${e.equipment ? `<li><b>Peralatan darurat:</b> ${rich(e.equipment)}</li>` : ''}</ul>` : '';
    const refs = f.rows.map((r) => `<li><span class="rn">Langkah ${r.no}:</span> ${r.refs.map(esc).join('; ')}</li>`).join('');
    const crit = f.critical.length
      ? `<ul>${f.critical.map((c) => `<li>${c.k === 'scope' ? '<b>Catatan lingkup:</b> ' : ''}${esc(c.text).replace(esc(PV), `<span class="pv">${PV}</span>`).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')}</li>`).join('')}</ul>`
      : `<p>${esc(NOVERIFY)}</p>`;
    return `<div class="jsea" data-code="${esc(f.code)}">
      <div class="jsea-title"><b>JSEA</b><span>(JOB SAFETY ENVIRONMENT ANALYSIS)</span></div>
      <div class="jmeta">
        <div class="span3"><label>Nama Pekerjaan:</label>${val(m.nama, '')}</div>
        <div class="span1"><label>No. JSEA:</label>${val(m.no, '')}<label style="margin-top:4px">Tanggal:</label>${val(dateTxt, '')}</div>
        <div><label>Lokasi:</label>${val(m.lokasi, '…………')}</div>
        <div><label>Departemen/ Divisi:</label>${val(m.dept, '…………')}</div>
        <div><label>Disetujui Oleh:</label>${val(m.disetujui, '…………')}<small style="font-style:italic;color:#666">(Sec. Head / Dept. Head / Team Leader)</small></div>
        <div><label>Dianalisa Oleh:</label>${val(m.dianalisa, '…………')}<small style="font-style:italic;color:#666">(QSHE Dept.)</small></div>
        <div class="span4"><label>APD yang harus dipakai</label>
          <div class="apd-chips">${apdHTML(apdWajib)}</div>
          ${apdTam.length ? `<div class="sublbl">Tambahan sesuai kondisi kerja</div><div class="apd-chips">${apdHTML(apdTam)}</div>` : ''}</div>
      </div>
      <div class="table-scroll"><table class="jtable"><thead><tr>
        <th class="c-no">NO</th><th class="c-step">SEQUENCE OF BASIC JOB STEPS<small>(Uraian/Langkah Kerja)</small></th>
        <th class="c-haz">HAZARD<small>(Bahaya)</small></th><th class="c-env">ENVIRONMENT IMPACT ANALYSIS<small>(Analisa Dampak Lingkungan)</small></th>
        <th class="c-ctl">PREVENTION/ CONTROLLING<small>(Pencegahan / Pengendalian)</small></th><th class="c-pic">PIC</th></tr></thead>
        <tbody>${rowsHTML}</tbody></table></div>
      <div class="jblock critical"><h4>CRITICAL INFORMATION TO VERIFY</h4>${crit}</div>
      <details class="more"><summary>Informasi pendukung pekerjaan ini</summary><div class="more-body">${sup}
        <h5>Required PPE</h5><ul>${f.ppe.mandatory ? `<li><b>Wajib:</b> ${rich(f.ppe.mandatory)}</li>` : ''}${f.ppe.additional ? `<li><b>Tambahan:</b> ${rich(f.ppe.additional)}</li>` : ''}</ul>
        ${emerg}${f.keterangan ? `<h5>Keterangan</h5><p>${rich(f.keterangan)}</p>` : ''}</div></details>
      <details class="more"><summary>Dasar regulasi &amp; referensi per langkah</summary><div class="more-body"><ul class="refs">${refs}</ul></div></details>
      <p class="disc">${esc(f.disclaimer)}</p>
      <div class="jactions">
        <button class="btn primary" type="button" data-act="pdf">📄 Download as PDF</button>
        <button class="btn" type="button" data-act="copy">📋 Copy Tabel (Siap Paste ke Excel)</button>
        <button class="btn" type="button" data-act="xlsx">📊 Download Excel (.xlsx)</button>
        <button class="btn" type="button" data-act="csv">⬇ CSV</button>
        <button class="btn" type="button" data-act="catalog">🗂 Katalog</button>
      </div></div>`;
  }

  /* ======================================================================
     4. CHAT UI
     ====================================================================== */
  const msgs = $('#messages');
  const forms = new Map();   // msgId -> form model
  let msgSeq = 0;

  function addMsg(role, html, opts = {}) {
    const id = 'm' + (++msgSeq);
    const row = document.createElement('div');
    row.className = `msg ${role}` + (opts.wide ? ' wide-row' : '');
    row.id = id;
    const av = role === 'bot' ? `<div class="av"><img src="${CONFIG.AVATAR}" alt="${CONFIG.BOT_NAME}" width="40" height="40"></div>` : '<div class="av" style="border:0;background:none"><svg viewBox="0 0 40 40" width="40" height="40"><use href="#s-user"/></svg></div>';
    row.innerHTML = role === 'bot' ? `${av}<div class="bubble${opts.wide ? ' wide' : ''}">${html}</div>` : `<div class="bubble">${html}</div>${av}`;
    msgs.appendChild(row);
    if (opts.wide) msgs.scrollTop = Math.max(0, row.offsetTop - 12); else msgs.scrollTop = msgs.scrollHeight;
    return row;
  }
  const userSays = (t) => addMsg('user', esc(t));
  function typing() {
    const r = addMsg('bot', '<span class="typing"><i></i><i></i><i></i></span>');
    return r;
  }
  async function botReply(build, pose = 'present', ms = 520) {
    Mascot.think(true);
    const t = typing();
    const t0 = Date.now();
    let res;
    try { res = await build(); } catch (e) { console.error(e); res = { html: 'Maaf, ada kendala saat menyiapkan jawaban. Coba lagi ya, atau hubungi QSHE lewat tombol WhatsApp.', pose: 'alert' }; }
    const wait = Math.max(0, ms - (Date.now() - t0)); if (wait) await sleep(reduceMotion ? 0 : wait);
    t.remove();
    Mascot.think(false);
    const row = addMsg('bot', res.html, { wide: res.wide });
    if (res.form) forms.set(row.id, res.form);
    Mascot.play(res.pose || pose, res.poseMs || 2600);
    return row;
  }

  const waBtn = (label = '💬 Hubungi Tim QSHE via WhatsApp') => `<a class="opt wa" href="${WA_URL}" target="_blank" rel="noopener noreferrer">${label}</a>`;
  const optBtn = (label, attrs) => `<button class="opt" type="button" ${attrs}>${label}</button>`;
  const jobItem = (j, label = 'Buat JSEA ›') => `<button class="opt-item" type="button" data-act="jsea" data-code="${esc(j.code)}"><span class="code">${esc(j.code)}</span><span class="tt">${esc(j.title)}</span><span class="go">${label}</span></button>`;

  const MOD_ASK = [
    ['EXC', 'Excavator Hidrolis'], ['ADT', 'Articulated Dump Truck / Hauler'], ['TRK', 'Service Truck / Tractor Head'], ['MWS', 'Mobile Workshop'], ['RSA', 'Roadside / Unit Mogok'], ['GEN', 'Umum (isolasi energi, lifting, perjalanan, parkir)'],
  ];
  const modules = () => (DB ? DB.modules : []);

  /* ---- jawaban ---- */
  function greetHTML() {
    return `<p>Halo! Selamat datang di <b>J.A.S.M.I.N</b> (JSEA Asisten Selamat, Mudah, &amp; Instan). Saya Teh JASMIN, asisten digital Anda. Ada yang bisa saya bantu hari ini?</p>
      <p style="font-size:13.5px">Coba ketik pekerjaannya, misalnya <i>“lepas silinder boom”</i>, <i>“parkir aman ADT”</i>, atau <i>“tekanan sisa hidrolik”</i>. Database saya memuat <b>${DB.meta.totalJobs} pekerjaan</b> (${DB.meta.totalSteps} langkah kerja).</p>`;
  }
  function helpHTML() {
    return `<p>Siap, ini yang bisa Teh JASMIN bantu:</p><ul>
      <li><b>Buat JSEA</b> per jenis pekerjaan (bukan per merek/model), lengkap tabel 6 kolom sesuai Form JSEA.</li>
      <li><b>Unduh</b> hasilnya sebagai <b>PDF</b> siap cetak, <b>Excel</b>, atau salin langsung ke Excel.</li>
      <li>Jawab pertanyaan keselamatan dari database: aturan <i>zero energy state</i>, kesalahan umum, APD, tanggap darurat.</li></ul>
      <p>Kalau informasi tidak ada di database, saya tandai <span class="pv">${PV}</span> dan tidak mengarang angka.</p>
      <div class="opts">${optBtn('Buat JSEA Baru', 'data-act="ask" data-q="Buat JSEA Baru"')}${optBtn('Katalog Pekerjaan', 'data-act="catalog"')}${waBtn('💬 Hubungi Tim QSHE')}</div>`;
  }
  function unitChooser() {
    return `<p>Siap! Pekerjaan untuk jenis unit apa yang mau dibuatkan JSEA-nya?</p>
      <div class="opts">${MOD_ASK.filter(([c]) => modMap.has(c)).map(([c, n]) => optBtn(n, `data-act="module" data-mod="${c}"`)).join('')}</div>
      <p style="font-size:13px;margin-top:8px">Atau langsung ketik pekerjaannya, mis. <i>“penggantian ban dan roda”</i>.</p>`;
  }
  function moduleList(code) {
    const m = modMap.get(code); if (!m) return { html: 'Modul itu belum ada di database.' };
    const js = m.jobs.map((id) => jobs.find((j) => j.id === id));
    return { pose: 'present', html: `<p>Ini daftar pekerjaan <b>${esc(m.name)}</b> (${js.length} pekerjaan). Pilih salah satu untuk langsung dibuatkan JSEA-nya:</p><div class="opt-list">${js.map((j) => jobItem(j)).join('')}</div>` };
  }

  function jseaReply(job, ctx = {}) {
    const f = buildForm(job, { brand: ctx.brand });
    const lead = ctx.approx ? `Pekerjaan yang paling mendekati di database adalah <b>${esc(job.title)}</b> — ini JSEA-nya, cek dulu apakah sesuai ya.` : `Siap! Ini JSEA untuk <b>${esc(job.title)}</b> — baca tiap langkahnya bersama tim sebelum mulai kerja ya.`;
    return { html: `<p>${lead}</p>${formHTML(f)}`, wide: true, form: f, pose: 'present', poseMs: 3200 };
  }

  function candidatesReply(list, intro) {
    return { pose: 'think', html: `<p>${intro}</p><div class="opt-list">${list.map((r) => jobItem(r.job)).join('')}</div><p style="font-size:13px;margin-top:8px">Bukan yang ini? Tulis ulang dengan nama komponen dan aktivitasnya, atau buka katalog.</p><div class="opts">${optBtn('Buka Katalog', 'data-act="catalog"')}</div>` };
  }
  function notFoundReply(q) {
    return { pose: 'think', html: `<p>Hmm, saya belum menemukan pekerjaan itu di database. Saya tidak mau menebak-nebak untuk urusan keselamatan.</p>
      <p>Coba kata kunci lain (nama komponen + aktivitas, mis. <i>“lepas silinder bucket”</i>) atau lihat katalog. Kalau pekerjaannya memang belum ada, <b>tunda dulu</b> dan konsultasikan dengan atasan atau tim QSHE.</p>
      <div class="opts">${optBtn('Buka Katalog', 'data-act="catalog"')}${waBtn()}</div>` };
  }

  function emergencyReply(job) {
    const g = jobs.find((j) => j.code === 'GEN-01');
    const src = (job && job.emergencyResponse.firstResponse) ? job : g;
    const e = src.emergencyResponse;
    return { pose: 'alert', poseMs: 6000, html: `<div class="warnbox">⚠️ Bila ada korban atau situasi darurat sekarang: utamakan keselamatan jiwa, jangan menunda untuk bertanya ke chat.</div>
      <p><b>Respon awal (dari database):</b> ${rich(e.firstResponse)}</p>
      ${e.equipment ? `<p><b>Peralatan darurat:</b> ${rich(e.equipment)}</p>` : ''}
      <p>Segera hubungi ERT/pengawas dan Hotline QSHE.</p><div class="opts">${waBtn('🚨 Hubungi Hotline QSHE')}</div>` };
  }

  const KIND_RULES = [
    [/\b(kesalahan|salah|keliru|mistake)\b/, 'commonMistakes', 'Kesalahan umum'],
    [/\b(waspada|hati|perhatian|concern|bahaya tersembunyi|awas)\b/, 'pointOfConcern', 'Hal yang perlu diwaspadai'],
    [/\b(tips|saran)\b/, 'additionalSafetyTips', 'Tips keselamatan tambahan'],
    [/\b(kontrol kritis|critical control|pengendalian kritis)\b/, 'criticalControls', 'Kontrol kritis'],
    [/\b(aturan|golden|prinsip|wajib|larangan|rules?)\b/, 'goldenRules', 'Aturan emas'],
  ];
  function conceptReply(job, qn) {
    const parts = [];
    let matched = false;
    for (const [re, key, label] of KIND_RULES) if (re.test(qn)) { matched = true; if (job[key].length) parts.push([label, job[key]]); }
    if (/\b(apd|ppe|pelindung diri)\b/.test(qn)) { matched = true; parts.push(['APD yang dibutuhkan', [job.requiredPPE.mandatory && 'Wajib: ' + job.requiredPPE.mandatory, job.requiredPPE.additional && 'Tambahan: ' + job.requiredPPE.additional].filter(Boolean)]); }
    if (/\b(darurat|emergency|p3k|pertolongan)\b/.test(qn)) { matched = true; const e = job.emergencyResponse; parts.push(['Tanggap darurat', [e.potential && 'Potensi: ' + e.potential, e.firstResponse && 'Respon awal: ' + e.firstResponse, e.equipment && 'Peralatan: ' + e.equipment].filter(Boolean)]); }
    if (!matched || !parts.length) { if (job.goldenRules.length) parts.push(['Aturan emas', job.goldenRules]); if (job.criticalControls.length) parts.push(['Kontrol kritis', job.criticalControls]); if (job.pointOfConcern.length) parts.push(['Hal yang perlu diwaspadai', job.pointOfConcern]); }
    const body = parts.map(([l, arr]) => `<p><b>${esc(l)}</b></p><ul>${arr.map((x) => `<li>${rich(x)}</li>`).join('')}</ul>`).join('');
    return { pose: 'tip', poseMs: 3200, html: `<p>Ini yang tertulis di database untuk <b>${esc(job.title)}</b> (${esc(job.code)}):</p>${body}
      <div class="opts">${optBtn('Lihat JSEA lengkapnya', `data-act="jsea" data-code="${esc(job.code)}"`)}${waBtn('💬 Tanya Tim QSHE')}</div>` };
  }

  /* ---- penentu maksud ---- */
  const RE = {
    greet: /^(halo|hallo|hai|hi|hello|hey|selamat (pagi|siang|sore|malam)|assalamualaikum|permisi|pagi|siang|sore|malam)\b/,
    thanks: /\b(terima kasih|makasih|thanks|thank you|thx|trims)\b/,
    help: /\b(bantuan k3|butuh bantuan|bisa apa|siapa (kamu|anda|teh)|cara pakai|fitur|help|menu bantuan|apa saja)\b/,
    contact: /\b(hubungi|kontak|telepon|telpon|whatsapp|wa|hotline|tim safety|tim qshe|nomor)\b/,
    catalog: /\b(katalog|semua jsea|semua pekerjaan|list pekerjaan|daftar semua)\b/,
    listMod: /\b(daftar|list|apa saja)\b.*\b(pekerjaan|jsea)\b|\b(daftar|list)\b/,
    newJsea: /\b(buat|susun|rancang|mulai)\b.*\b(jsea|analisa)\b.*\b(baru)\b|^\s*(buat )?jsea baru\s*$/,
    emergency: /\b(kecelakaan|terluka|cedera|terjepit|tertimpa|terbakar|kebakaran|meledak|ledakan|pingsan|korban|tersengat|tersembur|fluid injection|injection injury|keracunan)\b/,
    emergencyNow: /\b(ada|terjadi|barusan|baru saja|sekarang|lagi|tolong|korban|sedang)\b/,
    concept: /\b(aturan|apa itu|jelaskan|pengertian|tips|saran|kesalahan|waspada|golden|kontrol kritis|critical control|apd|ppe|darurat|emergency|p3k)\b/,
    wantJsea: /\b(jsea|buat|susun|tabel|analisa|analisis|form)\b/,
    code: /\b(?:jsea[- ]?)?(gen|exc|adt|trk|mws|rsa)[- ]?(\d{1,2})\b/,
  };

  async function respond(raw) {
    const gen = genericize(raw);
    const q = gen.text;
    const qn = normalize(q).split(' ').map((w) => SLANG[w] || w).join(' ');
    if (!DB) return { html: 'Database JSEA belum termuat. Muat ulang halaman ya.' };

    if (RE.emergency.test(qn) && RE.emergencyNow.test(qn)) return emergencyReply(search(q).ranked[0] && search(q).ranked[0].job);
    const code = qn.match(RE.code);
    if (code) { const j = byCode.get(`${code[1]}-${String(code[2]).padStart(2, '0')}`); if (j) return jseaReply(j, { brand: gen.brand }); }
    if (RE.thanks.test(qn) && qn.split(' ').length < 8) return { pose: 'heart', poseMs: 3200, html: '<p>Sama-sama! Kerja aman itu kerja bareng. Kalau ada pekerjaan lain yang butuh JSEA, Teh JASMIN siap bantu kapan saja. 🧡</p>' };
    if (RE.greet.test(qn) && qn.split(' ').length <= 4) return { pose: 'wave', poseMs: 3000, html: greetHTML() };
    if (RE.newJsea.test(qn)) return { pose: 'present', html: unitChooser() };
    if (RE.help.test(qn) && !RE.wantJsea.test(qn)) return { pose: 'present', html: helpHTML() };
    if (RE.catalog.test(qn)) { openCatalog(); return { pose: 'present', html: '<p>Katalog pekerjaan JSEA sudah saya buka. Pilih pekerjaannya, nanti langsung saya buatkan tabelnya.</p>' }; }

    // daftar per modul
    if (RE.listMod.test(qn)) {
      for (const [mc, re] of MOD_WORDS) if (mc !== 'GEN' && re.test(qn) && modMap.has(mc)) return moduleList(mc);
      if (/\b(mobile workshop|truck|roadside)\b/.test(qn)) {
        const parts = ['TRK', 'MWS', 'RSA'].filter((c) => modMap.has(c));
        return { pose: 'present', html: `<p>Untuk <b>Service Truck, Mobile Workshop, dan Roadside</b>, pilih kelompok pekerjaannya:</p><div class="opts">${parts.map((c) => optBtn(modMap.get(c).name, `data-act="module" data-mod="${c}"`)).join('')}</div>` };
      }
      if (/\b(umum|generik|gen)\b/.test(qn)) return moduleList('GEN');
    }
    if (/^(telepon|hubungi|kontak)/.test(qn) || (RE.contact.test(qn) && !RE.wantJsea.test(qn) && qn.split(' ').length < 7)) return { pose: 'thumbs', html: `<p>Untuk bantuan langsung, tim QSHE siap di WhatsApp Hotline. Kalau kondisi di lapangan tidak aman, hentikan pekerjaan dulu.</p><div class="opts">${waBtn()}</div>` };

    // pencarian pekerjaan
    const sr = search(q);
    const top = sr.ranked[0], second = sr.ranked[1];
    const ctx = { brand: gen.brand };

    const isConcept = RE.concept.test(qn) && !(/\b(buat|susun)\b/.test(qn) && /\bjsea\b/.test(qn));
    if (isConcept && top && top.score > 1.2) {
      const llm = await maybeLLM(raw, sr.ranked.slice(0, 2).map((r) => r.job));
      if (llm) return llm;
      return conceptReply(top.job, qn);
    }
    if (!top || sr.coverage < 0.5 || top.score < 1.6) {
      const llm = await maybeLLM(raw, sr.ranked.slice(0, 2).map((r) => r.job));
      if (llm) return llm;
      if (top && sr.coverage >= 0.5 && top.score >= 0.9) return candidatesReply(sr.ranked.slice(0, 3), 'Saya belum yakin pekerjaan yang dimaksud. Apakah salah satu dari ini?');
      return notFoundReply(raw);
    }
    const ratio = second ? top.score / second.score : 9;
    const strong = top.score >= 4 && ratio >= 1.18;
    if (strong || (RE.wantJsea.test(qn) && ratio >= 1.3 && top.score >= 2.5)) return jseaReply(top.job, ctx);
    if (ratio >= 1.45 && top.score >= 2.5) return jseaReply(top.job, { ...ctx, approx: top.score < 4 });
    return candidatesReply(sr.ranked.slice(0, 4), 'Ada beberapa pekerjaan yang mirip. Mana yang Anda maksud?');
  }

  /* ---- Mode Cerdas (opsional, Gemini) ---- */
  const settings = () => store.get('jasmin.llm', { enabled: false, key: '', model: CONFIG.GEMINI_MODEL });
  const jobToText = (j) => `## ${j.id} — ${j.title}\n` + j.steps.map((s) => `Langkah ${s.no}: ${plain(s.step)}\n Bahaya: ${s.hazards.map((h) => h.text).join('; ')}\n Risiko: ${s.risks.map((h) => h.text).join('; ')}\n Dampak lingkungan: ${s.envAspects.concat(s.envImpacts).join('; ')}\n Kontrol: ${s.controls.map((c) => c.label + ': ' + c.text).join(' | ')}`).join('\n') + `\nAturan emas: ${j.goldenRules.join('; ')}\nKontrol kritis: ${j.criticalControls.join('; ')}\nPoint of concern: ${j.pointOfConcern.join('; ')}\nKesalahan umum: ${j.commonMistakes.join('; ')}\nAPD: ${j.requiredPPE.mandatory} / ${j.requiredPPE.additional}\nDarurat: ${JSON.stringify(j.emergencyResponse)}`;
  async function maybeLLM(question, ctxJobs) {
    const s = settings();
    if (!s.enabled || !s.key || !ctxJobs.length) return null;
    try {
      const sys = `Anda adalah "Teh JASMIN", asisten JSEA (Job Safety and Environmental Analysis) yang ramah, suportif, namun tegas dan presisi soal K3L. Jawab dalam Bahasa Indonesia, singkat dan praktis untuk teknisi/foreman/supervisor.
ATURAN: (1) Gunakan HANYA informasi pada KONTEKS. (2) Jangan menyebut merek, produsen, model, atau nomor seri; gunakan istilah generik. (3) Jangan mengarang torsi, tekanan, suhu, berat, kapasitas, interval, atau spesifikasi; jika tidak ada di konteks tulis ${PV}. (4) Jika konteks tidak menjawab, katakan tidak ada di database dan sarankan menghubungi QSHE Department. (5) Prioritaskan hierarchy of controls, bukan hanya APD. (6) Jangan membuat tabel JSEA; arahkan pengguna memakai tombol pembuat JSEA.`;
      const body = { systemInstruction: { parts: [{ text: sys }] }, contents: [{ role: 'user', parts: [{ text: `KONTEKS:\n${ctxJobs.map(jobToText).join('\n\n')}\n\nPERTANYAAN: ${question}` }] }], generationConfig: { temperature: 0.2, maxOutputTokens: 900 } };
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(s.model || CONFIG.GEMINI_MODEL)}:generateContent`, { method: 'POST', headers: { 'Content-Type': 'application/json', 'x-goog-api-key': s.key }, body: JSON.stringify(body) });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const data = await res.json();
      const txt = data.candidates && data.candidates[0] && data.candidates[0].content.parts.map((p) => p.text).join('');
      if (!txt) return null;
      const html = esc(txt).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').split(/\n{2,}/).map((p) => `<p>${p.replace(/\n/g, '<br>')}</p>`).join('');
      return { pose: 'tip', html: html + `<p style="font-size:12px;opacity:.75">Dijawab oleh Mode Cerdas berdasarkan database JSEA.</p><div class="opts">${ctxJobs.slice(0, 2).map((j) => optBtn(`JSEA ${esc(j.code)}`, `data-act="jsea" data-code="${esc(j.code)}"`)).join('')}${waBtn('💬 Tanya Tim QSHE')}</div>` };
    } catch (e) { console.warn('Mode Cerdas gagal:', e); return null; }
  }

  /* ======================================================================
     5. INTERAKSI
     ====================================================================== */
  async function ask(text, echo = true) {
    text = text.trim(); if (!text) return;
    if (echo) userSays(text);
    await botReply(() => respond(text));
  }
  async function showJSEA(code, echoTitle = true) {
    const j = byCode.get(String(code).toLowerCase()); if (!j) return;
    if (echoTitle) userSays(`JSEA ${j.code}: ${j.title}`);
    await botReply(async () => jseaReply(j), 'present', 650);
  }

  msgs.addEventListener('click', (e) => {
    const b = e.target.closest('[data-act]'); if (!b) return;
    const act = b.dataset.act;
    if (act === 'jsea') showJSEA(b.dataset.code);
    else if (act === 'ask') ask(b.dataset.q);
    else if (act === 'catalog') openCatalog();
    else if (act === 'module') { userSays(modMap.get(b.dataset.mod).name); botReply(async () => moduleList(b.dataset.mod)); }
    else if (['pdf', 'copy', 'xlsx', 'csv'].includes(act)) {
      const row = b.closest('.msg'); const f = row && forms.get(row.id);
      if (f && window.JASMIN_EXPORT) window.JASMIN_EXPORT[act](f, b); else toast('Fitur ekspor belum siap, coba lagi sebentar.');
    } else if (act === 'catalog') openCatalog();
  });

  $('#composer').addEventListener('submit', (e) => { e.preventDefault(); const i = $('#input'); const v = i.value; i.value = ''; ask(v); });

  /* ---- chips cepat ---- */
  const CHIPS = [
    ['Buat JSEA Baru', 'Buat JSEA Baru'], ['Daftar Pekerjaan Excavator', 'Daftar Pekerjaan Excavator'], ['Daftar Pekerjaan ADT', 'Daftar Pekerjaan ADT'],
    ['Truck & Mobile Workshop', 'Daftar Pekerjaan Truck dan Mobile Workshop'], ['Aturan Zero Energy State', 'Aturan Zero Energy State'],
  ];
  $('#chips').innerHTML = CHIPS.map(([l, q]) => `<button class="chip" type="button" data-q="${esc(q)}">${esc(l)}</button>`).join('') + `<a class="chip wa" href="${WA_URL}" target="_blank" rel="noopener noreferrer">Hubungi Tim Safety</a>`;
  $('#chips').addEventListener('click', (e) => { const c = e.target.closest('.chip[data-q]'); if (c) ask(c.dataset.q); });

  /* ---- toast ---- */
  let toastT;
  function toast(t) { const el = $('#toast'); el.textContent = t; el.hidden = false; clearTimeout(toastT); toastT = setTimeout(() => (el.hidden = true), 3200); }

  /* ---- modal ---- */
  function openModal(id) { const m = $(id); m.hidden = false; const f = $('input,button.btn-primary', m); setTimeout(() => f && f.focus(), 30); }
  function closeModals() { $$('.modal').forEach((m) => (m.hidden = true)); }
  document.addEventListener('click', (e) => { if (e.target.matches('[data-close]') || e.target.classList.contains('modal')) closeModals(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeModals(); $('#app').classList.remove('info-open'); } });

  /* ---- katalog ---- */
  function renderCatalog(filter = '') {
    const f = normalize(filter);
    let html = '';
    modules().forEach((m) => {
      const js = m.jobs.map((id) => jobs.find((j) => j.id === id)).filter((j) => !f || normalize(j.title + ' ' + j.code + ' ' + m.name).includes(f) || (f.split(' ').every((w) => normalize(j.title + ' ' + j.code).includes(w))));
      if (!js.length) return;
      html += `<section class="cat-group"><h4>${esc(m.name)} <small>${js.length} pekerjaan</small></h4><div class="opt-list">${js.map((j) => `<button class="opt-item" type="button" data-cat="${esc(j.code)}"><span class="code">${esc(j.code)}</span><span class="tt">${esc(j.title)}<br><small style="font-weight:600;color:#6b6458">${j.steps.length} langkah kerja</small></span><span class="go">Buat JSEA ›</span></button>`).join('')}</div></section>`;
    });
    $('#catList').innerHTML = html || '<p class="cat-empty">Tidak ada pekerjaan yang cocok. Coba kata kunci lain.</p>';
  }
  function openCatalog() { renderCatalog(''); $('#catSearch').value = ''; openModal('#modalCatalog'); }
  $('#catSearch').addEventListener('input', (e) => renderCatalog(e.target.value));
  $('#catList').addEventListener('click', (e) => { const b = e.target.closest('[data-cat]'); if (!b) return; closeModals(); showJSEA(b.dataset.cat); });
  $('#btnCatalog').addEventListener('click', () => { $('#app').classList.remove('info-open'); openCatalog(); });
  $('#btnCatalog2').addEventListener('click', openCatalog);

  /* ---- pengaturan Mode Cerdas ---- */
  $('#btnSettings').addEventListener('click', () => {
    const s = settings(); const f = $('#settingsForm');
    f.enabled.checked = !!s.enabled; f.key.value = s.key || ''; f.model.value = s.model || CONFIG.GEMINI_MODEL;
    $('#app').classList.remove('info-open'); openModal('#modalSettings');
  });
  $('#settingsForm').addEventListener('submit', (e) => {
    e.preventDefault(); const f = e.target;
    store.set('jasmin.llm', { enabled: f.enabled.checked && !!f.key.value.trim(), key: f.key.value.trim(), model: f.model.value.trim() || CONFIG.GEMINI_MODEL });
    closeModals(); toast(f.enabled.checked && f.key.value.trim() ? 'Mode Cerdas aktif' : 'Mode Cerdas nonaktif');
  });
  $('#settingsClear').addEventListener('click', () => { store.del('jasmin.llm'); $('#settingsForm').reset(); toast('Kunci dihapus dari perangkat ini'); });

  /* ---- sidebar mobile ---- */
  $('#btnMenu').addEventListener('click', () => { const a = $('#app'); const o = a.classList.toggle('info-open'); $('#btnMenu').setAttribute('aria-expanded', o); });
  $('#app').addEventListener('click', (e) => { if (e.target === $('#app')) $('#app').classList.remove('info-open'); });

  /* ======================================================================
     6. QSHE INFO & UPDATE (qshe-updates.json)
     ====================================================================== */
  const FALLBACK_UPDATES = { kartu: [
    { id: 'safety-moment', judul: 'Safety Moment', ikon: '🦺', tag: 'Update: Nov 2026', teks: 'Wajib inspeksi harian APD sebelum masuk area galian.', rotasi: [], tema: 'krem' },
    { id: 'info-cuaca', judul: 'Info Cuaca & Area', ikon: '🌧️', tag: '', teks: 'Waspada jalan licin di Zona B saat hujan ringan.', rotasi: [], tema: 'biru' },
    { id: 'pengingat-jsea', judul: 'Pengingat JSEA', ikon: '📋', tag: '', teks: 'Pastikan JSEA ditandatangani pengawas sebelum shift dimulai.', rotasi: [], tema: 'peach' },
  ] };
  async function loadUpdates() {
    let data = FALLBACK_UPDATES;
    try {
      const r = await fetch(CONFIG.UPDATES_URL + '?v=' + Date.now(), { cache: 'no-store' });
      if (r.ok) data = await r.json();
    } catch { /* file:// atau offline -> pakai bawaan */ }
    const dayIdx = Math.floor(Date.now() / 86400000);
    const cards = (data.kartu || []).map((c) => {
      const text = Array.isArray(c.rotasi) && c.rotasi.length ? c.rotasi[dayIdx % c.rotasi.length] : c.teks;
      const tema = { krem: 't-krem', biru: 't-biru', peach: 't-peach' }[c.tema] || 't-krem';
      return `<article class="icard ${tema}"><h3><span aria-hidden="true">${esc(c.ikon || '')}</span>${esc(c.judul)}${c.tag ? `<span class="tag">${esc(c.tag)}</span>` : ''}</h3><p>${esc(text)}</p></article>`;
    }).join('');
    $('#infoCards').innerHTML = cards || '<p style="color:#fff;font-size:13px">Belum ada pengumuman.</p>';
  }

  /* ======================================================================
     7. INISIALISASI
     ====================================================================== */
  $('#waBadge').href = WA_URL;
  $('#waHotline').textContent = 'Hotline: ' + CONFIG.HOTLINE_LABEL;
  loadUpdates();

  if (!DB) {
    addMsg('bot', '<p>Database JSEA belum termuat (<code>jsea-database.js</code>). Muat ulang halaman, atau periksa file di repo.</p>');
  } else {
    setTimeout(() => {
      Mascot.play('wave', 2600);
      addMsg('bot', greetHTML());
    }, 250);
    setTimeout(() => $('.speech') && $('.speech').classList.add('hide'), 9000);
  }

  /* ---- API untuk export.js ---- */
  window.JASMIN = { CONFIG, WA_URL, DB, buildForm, cellText, todayISO, todayLong, toast, Mascot, store, esc, plain, PV, NOENV, respond, search, genericize };
})();
