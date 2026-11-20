#!/usr/bin/env node
/**
 * build-database.mjs
 * Mengubah file Markdown database JSEA (folder /sources) menjadi jsea-database.js
 * tanpa memotong/meringkas isi. Jalankan dari root repo:
 *
 *     node tools/build-database.mjs
 *
 * Setelah database .md diperbarui, cukup jalankan ulang perintah di atas
 * lalu commit jsea-database.js. Skrip ini juga memverifikasi bahwa setiap
 * potongan teks pada file .md muncul kembali di hasil (lihat verify()).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SOURCES = [
  { file: 'sources/DATABASE_MASTER_JSEA_SERVICE_ALAT_BERAT.md', label: 'Database Master JSEA — Service Unit Alat Berat' },
  { file: 'sources/DATABASE_JSEA_SERVICE_TRUCK_MOBILE_WORKSHOP.md', label: 'Database JSEA — Service Truck, Mobile Workshop, dan Roadside Service' },
  { file: 'sources/DATABASE_JSEA_TANGGAP_DARURAT.md', label: 'Database JSEA — Tanggap Darurat (Praktis Lapangan)' },
];

const MODULES = {
  GEN: { name: 'Umum / Generik', hint: 'Isolasi energi, pelepasan tekanan, lifting, perjalanan dinas, parkir' },
  EXC: { name: 'Excavator Hidrolis', hint: 'Attachment, silinder, engine, hidrolik, swing, travel, track' },
  ADT: { name: 'Articulated Dump Truck / Hauler', hint: 'P2H, bin, kabin, akumulator, ban, hot work, recovery' },
  TRK: { name: 'Service Truck / Tractor Head', hint: 'Rem udara, common rail, kabin tilting, fifth wheel' },
  MWS: { name: 'Mobile Workshop', hint: 'Persiapan, mobilisasi, set-up lapangan, demobilisasi' },
  RSA: { name: 'Roadside Assistance', hint: 'Unit mogok di jalan hauling / jalan umum' },
  DRT: { name: 'Tanggap Darurat', hint: 'Kebakaran, tumpahan B3, cedera berat, gempa, banjir, evakuasi, pelaporan' },
};

const BLOCKS = {
  'Additional Safety Tips': 'additionalSafetyTips',
  'Point of Concern': 'pointOfConcern',
  'Common Mistakes': 'commonMistakes',
  'Golden Rules': 'goldenRules',
  'Critical Controls': 'criticalControls',
  'Required PPE': 'requiredPPE',
  'Emergency Response': 'emergencyResponse',
  Keterangan: 'keterangan',
};

/* ---------- PIC (jabatan/fungsi) ----------
 * Database sumber TIDAK memiliki kolom PIC, sedangkan Form JSEA mewajibkannya.
 * PIC di bawah diturunkan dengan aturan kata kunci pada uraian langkah dan
 * ditandai meta.picDerived = true. Tinjau/ubah aturan ini bila perlu.
 */
const PIC_RULES = [
  [/^(menerima perintah|memverifikasi|verifikasi|menilai|melakukan briefing|briefing|melaporkan|menyerahkan|serah terima|menentukan|memutuskan|mengevaluasi|menyetujui|menetapkan)/i, 'Foreman / Supervisor'],
  [/isolasi energi|lockout|lock-out|loto|gembok|zero energy/i, 'Authorized Person / Technician'],
  [/pengelasan|mengelas|welding|hot work|menggerinda|penggerindaan|memotong logam|las /i, 'Welder / Technician'],
  [/pengangkatan|mengangkat|alat angkat|crane|sling|rigging|hoist|lifting|menurunkan (front attachment|komponen)/i, 'Rigger / Mechanic'],
  [/baterai|jump start|booster|kelistrikan|wiring|kabel|alternator|starter/i, 'Technician / Electrician'],
  [/memarkir|parkir|menghidupkan engine|mematikan engine|berjalan|mengemudi|perjalanan|mobilisasi|demobilisasi|towing|menarik unit|recovery|tipping|menaikkan|naik[- ]turun|memuat unit/i, 'Operator / Driver'],
  [/limbah|tumpahan|spill|pencucian|membersihkan|merapikan area|housekeeping|kebersihan/i, 'Technician / Helper'],
];
const PIC_DEFAULT = 'Technician / Mechanic';
/* Modul Tanggap Darurat (DRT): PIC menurut peran tim darurat, bukan teknisi. */
const DRT_PIC_RULES = [
  [/^(chief of emergency|coe |menetapkan keadaan darurat|menilai|memutuskan)/i, 'Chief of Emergency (COE)'],
  [/^(warden|menyisir)/i, 'Warden'],
  [/apar|pemadam|memadamkan|hidran|menyemprot/i, 'Regu Pemadam'],
  [/rjp|p3k|korban|pertolongan|first aid|cedera|oralit|gigitan|aed/i, 'First Aider / Petugas P3K'],
  [/security|polisi|kerusuhan|ancaman|perampokan|blokade|massa/i, 'Security'],
  [/tumpahan|spill|absorben|limbah/i, 'Tim Tumpahan B3'],
  [/listrik|gas |pompa|utilitas|panel|memeriksa kelayakan|inspeksi|menguji/i, 'Petugas Utilitas / Maintenance'],
  [/melapor|laporan|komunikasi|radio|kontak|nomor darurat|menghubungi|mengumumkan/i, 'Tim Komunikasi'],
  [/mengemudi|kendaraan|unit |menepi|berhenti|perjalanan/i, 'Operator / Driver'],
];
const DRT_PIC_DEFAULT = 'Semua personel di lokasi';
function derivePIC(step, mod) {
  const s = step.replace(/\*\*/g, '');
  if (mod === 'DRT') {
    for (const [re, pic] of DRT_PIC_RULES) if (re.test(s)) return pic;
    return DRT_PIC_DEFAULT;
  }
  for (const [re, pic] of PIC_RULES) if (re.test(s)) return pic;
  return PIC_DEFAULT;
}

/* ---------- parsing helpers ---------- */
const splitBr = (cell) => cell.split(/<br\s*\/?>/i).map((s) => s.trim()).filter(Boolean);
const stripBullet = (s) => s.replace(/^[••\-]\s*/, '').trim();

function parseTagged(cell) {
  // "• (S) teks" -> {cat:'S', text:'teks'}
  return splitBr(cell).map((raw) => {
    const t = stripBullet(raw);
    const m = t.match(/^\(([SHE])\)\s*(.*)$/s);
    return m ? { cat: m[1], text: m[2].trim() } : { cat: '', text: t };
  });
}
function parseControls(cell) {
  const out = [];
  for (const raw of splitBr(cell)) {
    const m = raw.match(/^\*\*(.+?):\*\*\s*(.*)$/s);
    if (m) out.push({ label: m[1].trim(), text: m[2].trim() });
    else if (out.length) out[out.length - 1].text += ' ' + raw; // lanjutan baris
    else out.push({ label: '', text: raw });
  }
  return out;
}
const splitRefs = (s) => s.split(';').map((x) => x.trim()).filter(Boolean);

function parseJob(lines, sourceIdx, part) {
  const idLine = lines[0].replace(/^##\s*/, '').trim(); // JSEA-GEN-01
  const idm = idLine.match(/^JSEA-([A-Z]+)-(\d+)$/);
  if (!idm) throw new Error('ID tidak dikenali: ' + idLine);
  const titleLine = lines.find((l) => /^Proses\s*\/\s*Pekerjaan:/i.test(l));
  if (!titleLine) throw new Error('Judul tidak ditemukan: ' + idLine);
  const title = titleLine.replace(/^Proses\s*\/\s*Pekerjaan:\s*/i, '').trim();

  const table = lines.filter((l) => l.startsWith('|'));
  const steps = table.slice(2).map((row) => {
    const c = row.split('|').slice(1, -1).map((s) => s.trim());
    if (c.length !== 6) throw new Error(`Kolom != 6 pada ${idLine}: ${row.slice(0, 60)}`);
    const tagged = parseTagged(c[2]);
    const risks = parseTagged(c[3]);
    return {
      no: Number(c[0]),
      step: c[1],
      hazards: tagged.filter((x) => x.cat !== 'E'),
      envAspects: tagged.filter((x) => x.cat === 'E').map((x) => x.text),
      risks: risks.filter((x) => x.cat !== 'E'),
      envImpacts: risks.filter((x) => x.cat === 'E').map((x) => x.text),
      controls: parseControls(c[4]),
      refs: splitRefs(c[5]),
      pic: derivePIC(c[1], idm[1]),
    };
  });

  // blok pendukung setelah tabel
  const blocks = {};
  let cur = null;
  let disclaimer = '';
  const tableEnd = lines.lastIndexOf(table[table.length - 1]);
  for (const line of lines.slice(tableEnd + 1)) {
    const t = line.trim();
    if (!t || t === '---') continue;
    if (BLOCKS[t]) { cur = BLOCKS[t]; blocks[cur] = []; continue; }
    if (t.startsWith('«') ) { disclaimer = t.replace(/^«/, '').replace(/»$/, '').trim(); cur = null; continue; }
    if (cur) blocks[cur].push(t.startsWith('- ') ? t.slice(2).trim() : t);
  }
  for (const k of Object.values(BLOCKS)) if (!blocks[k]) blocks[k] = [];

  const ppe = { mandatory: '', additional: '' };
  const extra = [];
  for (const l of blocks.requiredPPE) {
    const m = l.match(/^(Mandatory PPE|Additional PPE):\s*(.*)$/s);
    if (m) ppe[m[1].startsWith('Mandatory') ? 'mandatory' : 'additional'] = m[2].trim();
    else extra.push(l);
  }
  if (extra.length) ppe.other = extra;

  const emergency = { potential: '', firstResponse: '', equipment: '' };
  const eextra = [];
  for (const l of blocks.emergencyResponse) {
    const m = l.match(/^(Potensi Keadaan Darurat|Respon Awal|Peralatan Darurat yang Diperlukan):\s*(.*)$/s);
    if (!m) { eextra.push(l); continue; }
    const key = m[1].startsWith('Potensi') ? 'potential' : m[1].startsWith('Respon') ? 'firstResponse' : 'equipment';
    emergency[key] = m[2].trim();
  }
  if (eextra.length) emergency.other = eextra;

  return {
    id: idLine,
    code: `${idm[1]}-${idm[2]}`,
    module: idm[1],
    part,
    source: sourceIdx,
    title,
    steps,
    additionalSafetyTips: blocks.additionalSafetyTips,
    pointOfConcern: blocks.pointOfConcern,
    commonMistakes: blocks.commonMistakes,
    goldenRules: blocks.goldenRules,
    criticalControls: blocks.criticalControls,
    requiredPPE: ppe,
    emergencyResponse: emergency,
    keterangan: blocks.keterangan.join('\n'),
    disclaimer,
  };
}

function parseFile(def, sourceIdx) {
  const text = fs.readFileSync(path.join(ROOT, def.file), 'utf8').replace(/\r\n/g, '\n');
  const lines = text.split('\n');
  const intro = lines.slice(0, lines.findIndex((l) => /^---\s*$/.test(l))).join('\n').trim();
  // bagian (# BAGIAN ...) dan modul (## JSEA-...)
  const marks = [];
  lines.forEach((l, i) => {
    if (/^# BAGIAN /.test(l)) marks.push({ type: 'part', i, text: l.replace(/^#\s*/, '').trim() });
    if (/^## JSEA-/.test(l)) marks.push({ type: 'job', i });
  });
  const jobs = [];
  const parts = [];
  let part = '';
  marks.forEach((m, k) => {
    if (m.type === 'part') {
      part = m.text;
      const nxt = marks[k + 1];
      const note = lines.slice(m.i + 1, nxt ? nxt.i : lines.length).map((l) => l.trim()).filter((l) => l && l !== '---').join('\n');
      parts.push({ title: m.text, note });
      return;
    }
    const next = marks.slice(k + 1).find(() => true);
    const end = next ? next.i : lines.length;
    jobs.push(parseJob(lines.slice(m.i, end), sourceIdx, part));
  });
  return { intro, jobs, parts, sourceText: text };
}

/* ---------- verifikasi: tidak ada teks yang hilang ---------- */
const norm = (s) => s.replace(/\*\*/g, '').replace(/[••]/g, ' ').replace(/<br\s*\/?>/gi, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
function verify(sourceText, dbBlob) {
  const blob = norm(dbBlob.replace(/\\n/g, ' ').replace(/\\"/g, '"'));
  const headings = new Set(Object.keys(BLOCKS).map((x) => x.toLowerCase()));
  const missing = [];
  let checked = 0;
  for (const raw of sourceText.split('\n')) {
    const line = raw.trim();
    if (!line || line === '---' || line.startsWith('#') || /^\|[-| ]+\|$/.test(line)) continue;
    if (/^\| No \|/.test(line)) continue;
    let pieces;
    if (line.startsWith('|')) {
      const cells = line.split('|').slice(1, -1);
      pieces = cells.flatMap((c, i) => (i === 5 ? c.split(';') : c.split(/<br\s*\/?>/i)));
    } else pieces = [line.replace(/^Proses\s*\/\s*Pekerjaan:\s*/i, '')];
    for (const p of pieces) {
      let t = p.trim().replace(/^[-•\u2022]\s*/, '').replace(/^\((S|H|E)\)\s*/, '').replace(/^\*\*(.+?):\*\*\s*/, '').replace(/^[«]|[»]$/g, '');
      t = t.replace(/^(Mandatory PPE|Additional PPE|Potensi Keadaan Darurat|Respon Awal|Peralatan Darurat yang Diperlukan):\s*/i, '');
      t = norm(t);
      if (t.length < 4 || headings.has(t)) continue;
      checked++;
      if (!blob.includes(t)) missing.push(t.slice(0, 90));
    }
  }
  return { checked, missing };
}

/* ---------- main ---------- */
const jobs = [];
let intros = [];
const sourceTexts = [];
const parts = [];
let totalChecked = 0, totalMissing = [];
SOURCES.forEach((def, idx) => {
  const { intro, jobs: js, parts: ps, sourceText } = parseFile(def, idx);
  parts.push(...ps);
  sourceTexts.push(sourceText);
  intros.push(intro);
  jobs.push(...js);
});

const order = ['GEN', 'EXC', 'ADT', 'TRK', 'MWS', 'RSA', 'DRT'];
const modules = order.filter((c) => jobs.some((j) => j.module === c)).map((code) => ({
  code,
  ...MODULES[code],
  jobs: jobs.filter((j) => j.module === code).map((j) => j.id),
}));

const DB = {
  meta: {
    generatedAt: new Date().toISOString(),
    sources: SOURCES.map((s, i) => ({ index: i, file: path.basename(s.file), label: s.label, intro: intros[i] })),
    totalJobs: jobs.length,
    totalSteps: jobs.reduce((n, j) => n + j.steps.length, 0),
    picDerived: true,
    picNote: 'Database sumber tidak memiliki kolom PIC; nilai PIC diturunkan otomatis dari uraian langkah (lihat PIC_RULES di tools/build-database.mjs).',
    noEnvText: 'Tidak ada dampak lingkungan signifikan yang teridentifikasi pada langkah ini.',
    noVerifyText: 'Tidak ada informasi kritis yang memerlukan verifikasi tambahan berdasarkan sumber yang tersedia.',
    disclaimer: 'Catatan: AI ini memberikan rekomendasi berdasarkan dokumen, regulasi, standar, dan referensi yang tersedia. Selalu lakukan verifikasi terhadap kondisi aktual di lapangan serta mengacu pada prosedur kerja, manual peralatan, dan regulasi yang berlaku. Apabila terdapat keraguan atau kondisi yang tidak aman, hentikan pekerjaan dan konsultasikan dengan atasan atau tim QSHE sebelum pekerjaan dilanjutkan.',
  },
  modules,
  parts,
  jobs,
};

// disclaimer wajib harus identik dengan yang ada di database
const dbDisc = new Set(jobs.map((j) => j.disclaimer));
if (dbDisc.size !== 1 || ![...dbDisc][0].startsWith('Catatan: AI ini memberikan rekomendasi')) {
  console.warn('PERINGATAN: disclaimer pada database tidak seragam:', [...dbDisc].map((d) => d.slice(0, 50)));
} else {
  DB.meta.disclaimer = [...dbDisc][0];
}

const dbBlob = JSON.stringify(DB.jobs ? DB : DB) + JSON.stringify(jobs);
for (const t of sourceTexts) { const v = verify(t, dbBlob); totalChecked += v.checked; totalMissing = totalMissing.concat(v.missing); }

const out =
  '/* jsea-database.js — DIHASILKAN OTOMATIS oleh tools/build-database.mjs dari folder /sources.\n' +
  ' * Jangan edit manual; ubah file .md lalu jalankan: node tools/build-database.mjs */\n' +
  'window.JSEA_DB = ' +
  JSON.stringify({ ...DB, jobs: '__JOBS__' }).replace('"__JOBS__"', '[\n' + jobs.map((j) => JSON.stringify(j)).join(',\n') + '\n]') +
  ';\n';
fs.writeFileSync(path.join(ROOT, 'jsea-database.js'), out);

console.log(`Modul: ${modules.map((m) => `${m.code}=${m.jobs.length}`).join(', ')}`);
console.log(`Total pekerjaan: ${DB.meta.totalJobs}, total langkah: ${DB.meta.totalSteps}`);
console.log(`Verifikasi: ${totalChecked} potongan teks diperiksa, hilang: ${totalMissing.length}`);
if (totalMissing.length) { console.log(totalMissing.slice(0, 15)); process.exitCode = 1; }
console.log(`Ukuran jsea-database.js: ${(out.length / 1024).toFixed(0)} KB`);
