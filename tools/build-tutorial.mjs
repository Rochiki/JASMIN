#!/usr/bin/env node
/**
 * build-tutorial.mjs
 * Mengubah sources/tutorial/TUTORIAL_TANGGAP_DARURAT.md menjadi tutorial-darurat.js
 * (tutorial langkah-demi-langkah, BUKAN tabel JSEA). Jalankan dari root repo:
 *     node tools/build-tutorial.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = fs.readFileSync(path.join(ROOT, 'sources/tutorial/TUTORIAL_TANGGAP_DARURAT.md'), 'utf8').replace(/\r/g, '');
const fix = (s) => s.replace(/JSEA-DRT-(\d+)/g, (_, n) => `Tutorial ${n}`);
const strip = (s) => s.replace(/\*\*/g, '').trim();
const LABEL = { 'Critical Control': 'wajib', Administrative: 'lakukan', Environmental: 'lingkungan', PPE: 'apd' };
const BLK = { 'Additional Safety Tips': 'tips', 'Point of Concern': 'perhatian', 'Common Mistakes': 'jangan', 'Golden Rules': 'aturan', 'Critical Controls': 'siap', 'Required PPE': 'ppe', 'Emergency Response': 'emergency', Keterangan: 'catatan' };

const chunks = src.split(/\n(?=## JSEA-DRT-\d+)/).filter((c) => c.startsWith('## JSEA-DRT-'));
const out = chunks.map((c) => {
  const lines = c.split('\n');
  const id = lines[0].match(/DRT-(\d+)/)[1];
  const title = fix(lines.find((l) => l.startsWith('Proses / Pekerjaan:')).replace('Proses / Pekerjaan:', '').trim());
  const rows = lines.filter((l) => l.startsWith('|')).slice(2);
  const refs = new Set();
  const steps = rows.map((r) => {
    const x = r.split('|').slice(1, -1).map((s) => s.trim());
    if (x.length !== 6) throw new Error('Kolom != 6 pada Tutorial ' + id);
    const items = x[4].split('<br>').map((p) => {
      const m = p.trim().match(/^\*\*([^:*]+):\*\*\s*(.*)$/s);
      if (!m) return null;
      const k = LABEL[m[1].trim()] || 'lakukan';
      return { k, t: fix(m[2].trim()) };
    }).filter(Boolean).filter((i) => !(i.k === 'apd' && /Tidak diperlukan APD tambahan/.test(i.t)));
    x[5].split(';').map((s) => s.trim()).filter(Boolean).forEach((s) => refs.add(s));
    return { n: Number(x[0]), do: fix(x[1]), items };
  });
  const blocks = {}; let cur = null;
  for (const l of lines.slice(lines.lastIndexOf(rows[rows.length - 1]) + 1)) {
    const t = l.trim();
    if (!t || t === '---' || t.startsWith('«')) continue;
    if (BLK[t]) { cur = BLK[t]; blocks[cur] = []; continue; }
    if (cur) blocks[cur].push(fix(t.startsWith('- ') ? t.slice(2).trim() : t));
  }
  const pick = (arr, re) => { const l = (arr || []).find((v) => re.test(v)); return l ? l.replace(re, '').trim() : ''; };
  return {
    id, title, steps,
    aturan: blocks.aturan || [], siap: blocks.siap || [], jangan: blocks.jangan || [].concat(), tips: blocks.tips || [], perhatian: blocks.perhatian || [],
    apd: { wajib: pick(blocks.ppe, /^Mandatory PPE:\s*/), tambahan: pick(blocks.ppe, /^Additional PPE:\s*/) },
    darurat: { potensi: pick(blocks.emergency, /^Potensi Keadaan Darurat:\s*/), respon: pick(blocks.emergency, /^Respon Awal:\s*/), alat: pick(blocks.emergency, /^Peralatan Darurat yang Diperlukan:\s*/) },
    catatan: (blocks.catatan || []).join(' '),
    dasar: [...refs],
  };
});
const text = JSON.stringify(out);
// verifikasi: tiap langkah tampil utuh
let miss = 0; for (const t of out) for (const s of t.steps) if (!text.includes(JSON.stringify(s.do).slice(1, -1))) miss++;
fs.writeFileSync(path.join(ROOT, 'tutorial-darurat.js'), `/* DIHASILKAN oleh tools/build-tutorial.mjs — jangan edit manual */\nwindow.JASMIN_TUTOR = ${text};\n`);
console.log(`Tutorial: ${out.length}, langkah: ${out.reduce((a, t) => a + t.steps.length, 0)}, hilang: ${miss}`);
