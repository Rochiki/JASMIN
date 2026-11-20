/* ==========================================================================
   J.A.S.M.I.N — export.js
   Download as PDF (A4 landscape, meniru Form JSEA), Copy ke Excel, XLSX, CSV.
   Pustaka dimuat dari CDN hanya saat dibutuhkan.
   ========================================================================== */
(function () {
  'use strict';
  const J = window.JASMIN;
  const $ = (s, r = document) => r.querySelector(s);

  const LIBS = {
    jspdf: 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
    autotable: 'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js',
    xlsx: 'https://cdn.jsdelivr.net/npm/xlsx-js-style@1.2.0/dist/xlsx.bundle.js',
  };
  const pending = {};
  function loadScript(key) {
    if (pending[key]) return pending[key];
    pending[key] = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = LIBS[key]; s.async = true; s.onload = resolve;
      s.onerror = () => { delete pending[key]; reject(new Error('Gagal memuat pustaka ' + key + '. Periksa koneksi internet.')); };
      document.head.appendChild(s);
    });
    return pending[key];
  }

  const HEAD = ['NO', 'SEQUENCE OF BASIC JOB STEPS (Uraian/Langkah Kerja)', 'HAZARD (Bahaya)', 'ENVIRONMENT IMPACT ANALYSIS (Analisa Dampak Lingkungan)', 'PREVENTION/CONTROLLING (Pencegahan/Pengendalian)', 'PIC'];
  const rowsOf = (f) => f.rows.map((r) => [r.no, r.step, J.cellText(r, 'hazard'), J.cellText(r, 'env'), J.cellText(r, 'ctl'), r.pic]);
  const critLines = (f) => (f.critical.length ? f.critical.map((c) => '• ' + (c.k === 'scope' ? 'Catatan lingkup: ' : '') + J.plain(c.text)) : [f.noverify || J.NOVERIFY || '']);
  const dateID = (iso) => { try { return new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(iso + 'T00:00:00')); } catch { return iso; } };
  const safeName = (s) => String(s).normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[^A-Za-z0-9]+/g, '_').replace(/^_+|_+$/g, '').slice(0, 70) || 'Pekerjaan';
  const fileBase = (f, meta) => `JSEA_${safeName(meta.nama || f.meta.nama)}_${meta.tanggal || J.todayISO()}`;
  // pdf standar (Helvetica/WinAnsi) tidak memuat beberapa simbol
  const pdfSafe = (s) => String(s).replace(/≥/g, '>=').replace(/≤/g, '<=').replace(/℃/g, '°C').replace(/→/g, '->').replace(/[ -​ ]/g, ' ').replace(/[^\x09\x0A\x20-\x7E¡-ÿ–—‘’“”•…]/g, '?');

  function download(blob, name) {
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name;
    document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
  }
  const busy = async (btn, fn) => {
    const old = btn && btn.textContent; if (btn) { btn.disabled = true; btn.textContent = '⏳ Menyiapkan…'; }
    try { await fn(); } catch (e) { console.error(e); J.toast(e.message || 'Terjadi kendala saat mengekspor'); J.Mascot.play('think', 2500); }
    finally { if (btn) { btn.disabled = false; btn.textContent = old; } }
  };
  const done = (msg) => { J.toast(msg); J.Mascot.play('cheer', 3200); };

  /* ------------------------------------------------------------------
     Modal data form JSEA (sebelum PDF)
     ------------------------------------------------------------------ */
  function askMeta(f) {
    return new Promise((resolve) => {
      const modal = $('#modalMeta'), form = $('#metaForm');
      const m = f.meta;
      form.no.value = m.no; form.tanggal.value = m.tanggal || J.todayISO(); form.nama.value = m.nama;
      form.lokasi.value = m.lokasi || ''; form.dept.value = m.dept || '';
      form.dianalisa.value = m.dianalisa || ''; form.disetujui.value = m.disetujui || '';
      const list = $('#apdList'); list.innerHTML = '';
      const addApd = (text, checked = true) => {
        const l = document.createElement('label');
        const c = document.createElement('input'); c.type = 'checkbox'; c.checked = checked; c.value = text;
        l.append(c, document.createTextNode(' ' + text)); list.appendChild(l);
      };
      f.apd.forEach((a) => addApd(a.text));
      const extra = $('#apdExtra');
      $('#apdAddBtn').onclick = () => { const v = extra.value.trim(); if (v) { addApd(v); extra.value = ''; } };
      extra.onkeydown = (e) => { if (e.key === 'Enter') { e.preventDefault(); $('#apdAddBtn').click(); } };

      const collect = (blank) => {
        const v = Object.fromEntries(new FormData(form).entries());
        const apd = Array.from(list.querySelectorAll('input:checked')).map((i) => i.value);
        if (blank) { v.lokasi = ''; v.dept = ''; v.dianalisa = ''; v.disetujui = ''; }
        return { ...v, apd };
      };
      const finish = (val) => { modal.hidden = true; form.onsubmit = null; $('#metaBlank').onclick = null; resolve(val); };
      form.onsubmit = (e) => {
        e.preventDefault(); const v = collect(false);
        J.store.set('jasmin.meta', { lokasi: v.lokasi, dept: v.dept, dianalisa: v.dianalisa, disetujui: v.disetujui });
        finish(v);
      };
      $('#metaBlank').onclick = () => finish(collect(true));
      const closer = () => { if (modal.hidden) return; finish(null); };
      modal.querySelectorAll('[data-close]').forEach((b) => (b.onclick = closer));
      modal.hidden = false; setTimeout(() => form.nama.focus(), 30);
    });
  }

  /* ------------------------------------------------------------------
     PDF — A4 landscape, tata letak mengikuti Form_JSEA.pdf
     ------------------------------------------------------------------ */
  async function makePDF(f, btn) {
    const meta = await askMeta(f); if (!meta) return;
    await busy(btn, async () => {
      await loadScript('jspdf'); await loadScript('autotable');
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF({ orientation: 'landscape', unit: 'pt', format: 'a4' });
      const PW = doc.internal.pageSize.getWidth(), PH = doc.internal.pageSize.getHeight();   // 841.89 x 595.28
      const ML = 24, MR = 24, X0 = ML, W = PW - ML - MR, Y0 = 20;
      const ORANGE = [242, 106, 14], BLACK = [0, 0, 0];
      const T = pdfSafe;

      // ---- tata letak kotak APD (dihitung sekali) ----
      const apdItems = meta.apd.map(T);
      const cols = 4, colW = (W - 10) / cols, apdFont = 7;
      doc.setFont('helvetica', 'normal').setFontSize(apdFont);
      const apdLines = apdItems.map((t) => doc.splitTextToSize(t, colW - 14).slice(0, 2));
      const apdRows = [];
      for (let i = 0; i < apdItems.length; i += cols) {
        const chunk = apdLines.slice(i, i + cols);
        apdRows.push(Math.max(...chunk.map((l) => l.length)) * 8.2 + 2.5);
      }
      const apdH = 13 + (apdRows.length ? apdRows.reduce((a, b) => a + b, 0) + 3 : 18);
      const H_TITLE = 34, H_NAME = 30, H_LOC = 46;
      const headerH = H_TITLE + H_NAME + H_LOC + apdH;
      const headerBottom = Y0 + headerH;

      function cellText(txt, x, y, w, opts = {}) {
        doc.setFont('helvetica', opts.bold ? 'bold' : 'normal').setFontSize(opts.size || 7.6).setTextColor(0);
        const lines = doc.splitTextToSize(T(txt), w - 6);
        doc.text(lines, x + 3, y, { baseline: 'top' });
      }
      function drawHeader() {
        doc.setDrawColor(...BLACK).setLineWidth(1.1);
        doc.rect(X0, Y0, W, headerH);                                   // bingkai luar
        doc.setLineWidth(0.6);
        // judul
        doc.setTextColor(...ORANGE).setFont('helvetica', 'bold').setFontSize(11);
        doc.text('JSEA', X0 + W / 2, Y0 + 12, { align: 'center', baseline: 'middle' });
        doc.setFontSize(8.2); doc.text('(JOB SAFETY ENVIRONMENT ANALYSIS)', X0 + W / 2, Y0 + 24, { align: 'center', baseline: 'middle' });
        let y = Y0 + H_TITLE; doc.line(X0, y, X0 + W, y);
        // baris Nama Pekerjaan | No. JSEA / Tanggal
        const wR = 170, xR = X0 + W - wR;
        doc.line(xR, y, xR, y + H_NAME); doc.line(xR, y + H_NAME / 2, X0 + W, y + H_NAME / 2);
        cellText('Nama Pekerjaan: ' + meta.nama, X0, y + 3, W - wR, { bold: false, size: 8 });
        cellText('No. JSEA: ' + (meta.no || ''), xR, y + 3, wR, { size: 7.6, bold: true });
        cellText('Tanggal: ' + (meta.tanggal ? dateID(meta.tanggal) : ''), xR, y + H_NAME / 2 + 3, wR, { size: 7.6, bold: true });
        y += H_NAME; doc.line(X0, y, X0 + W, y);
        // baris Lokasi | Dept | Disetujui | Dianalisa
        const cw = [W * 0.235, W * 0.31, W * 0.255, W * 0.2];
        let x = X0;
        const labels = [['Lokasi:', meta.lokasi, ''], ['Departemen/ Divisi:', meta.dept, ''], ['Disetujui Oleh:', meta.disetujui, '(Sec. Head / Dept. Head / Team Leader)'], ['Dianalisa Oleh:', meta.dianalisa, '(QSHE Dept.)']];
        labels.forEach(([lab, val, sub], i) => {
          if (i) doc.line(x, y, x, y + H_LOC);
          cellText(lab, x, y + 3, cw[i], { bold: true, size: 7.6 });
          if (val) cellText(val, x, y + 14, cw[i], { size: 7.8 });
          if (sub) { doc.setFont('helvetica', 'italic').setFontSize(6.6).setTextColor(0); doc.text(sub, x + cw[i] / 2, y + H_LOC - 4, { align: 'center', baseline: 'bottom' }); }
          x += cw[i];
        });
        y += H_LOC; doc.line(X0, y, X0 + W, y);
        // APD
        cellText('APD yang harus dipakai', X0, y + 3, W, { bold: true, size: 7.6 });
        let ay = y + 14, idx = 0;
        apdRows.forEach((rh) => {
          for (let c = 0; c < cols && idx < apdItems.length; c++, idx++) {
            const bx = X0 + 6 + c * colW;
            doc.setDrawColor(0).setLineWidth(0.5).rect(bx, ay + 0.8, 6, 6);                 // kotak centang
            doc.setLineWidth(0.9).line(bx + 1.2, ay + 4.2, bx + 2.8, ay + 5.8).line(bx + 2.8, ay + 5.8, bx + 5.2, ay + 1.9);
            doc.setLineWidth(0.6);
            doc.setFont('helvetica', 'normal').setFontSize(apdFont).setTextColor(0).text(apdLines[idx], bx + 9.5, ay + 1, { baseline: 'top' });
          }
          ay += rh;
        });
        doc.setLineWidth(0.6);
      }

      // ---- tabel utama ----
      const colStyles = { 0: { cellWidth: 24, halign: 'center' }, 1: { cellWidth: 132 }, 2: { cellWidth: 172 }, 3: { cellWidth: 138 }, 4: { cellWidth: 250 }, 5: { cellWidth: W - 24 - 132 - 172 - 138 - 250, halign: 'center' } };
      const common = {
        margin: { top: headerBottom + 4, left: ML, right: MR, bottom: 54 },
        theme: 'grid', rowPageBreak: 'avoid', showHead: 'everyPage',
        styles: { font: 'helvetica', fontSize: 6.9, cellPadding: 3, lineColor: BLACK, lineWidth: 0.5, textColor: 0, valign: 'top', overflow: 'linebreak' },
        headStyles: { fillColor: [217, 217, 217], textColor: 0, fontStyle: 'bold', halign: 'center', valign: 'middle', fontSize: 7.2, lineWidth: 0.8 },
        didDrawPage: drawHeader,
      };
      doc.autoTable({ ...common, startY: headerBottom + 4, head: [HEAD], body: rowsOf(f).map((r) => r.map((c) => (typeof c === 'number' ? c : T(c)))), columnStyles: colStyles });

      // ---- Critical Information to Verify ----
      doc.autoTable({
        ...common, startY: doc.lastAutoTable.finalY + 8, theme: 'grid',
        head: [['CRITICAL INFORMATION TO VERIFY']], body: critLines(f).map((t) => [T(t)]),
        headStyles: { ...common.headStyles, halign: 'left', fillColor: [255, 226, 122] },
        styles: { ...common.styles, fontSize: 7.2 }, columnStyles: { 0: { cellWidth: W } },
      });

      // ---- kolom tanda tangan ----
      const sw = W / 3;
      doc.autoTable({
        ...common, startY: doc.lastAutoTable.finalY + 10,
        head: [['Dianalisa Oleh (QSHE Dept.)', 'Disetujui Oleh (Sec. Head / Dept. Head / Team Leader)', 'Diketahui / Pelaksana Pekerjaan']],
        body: [[{ content: '\n\n\n\n' + T(meta.dianalisa ? '( ' + meta.dianalisa + ' )' : '(                                        )'), styles: { halign: 'center', minCellHeight: 56 } },
          { content: '\n\n\n\n' + T(meta.disetujui ? '( ' + meta.disetujui + ' )' : '(                                        )'), styles: { halign: 'center' } },
          { content: '\n\n\n\n(                                        )', styles: { halign: 'center' } }]],
        columnStyles: { 0: { cellWidth: sw }, 1: { cellWidth: sw }, 2: { cellWidth: W - 2 * sw } },
      });

      // ---- footer di setiap halaman: disclaimer + nomor halaman ----
      const total = doc.getNumberOfPages();
      for (let p = 1; p <= total; p++) {
        doc.setPage(p);
        doc.setDrawColor(150).setLineWidth(0.4).line(X0, PH - 46, X0 + W, PH - 46);
        doc.setFont('helvetica', 'italic').setFontSize(6.1).setTextColor(70);
        doc.text(doc.splitTextToSize(T(f.disclaimer), W), X0, PH - 43, { baseline: 'top' });
        doc.setFont('helvetica', 'normal').setFontSize(6.6).setTextColor(90);
        doc.text(T(`${f.id}  |  Dihasilkan oleh J.A.S.M.I.N (Teh JASMIN) - ${J.todayLong()}`), X0, PH - 14);
        doc.text(`Halaman ${p} dari ${total}`, X0 + W, PH - 14, { align: 'right' });
      }
      doc.save(fileBase(f, meta) + '.pdf');
      done('PDF berhasil diunduh ✔');
    });
  }

  /* ------------------------------------------------------------------
     Copy tabel (siap paste ke Excel)
     ------------------------------------------------------------------ */
  async function copyTable(f, btn) {
    const rows = rowsOf(f);
    const q = (c) => '"' + String(c).replace(/"/g, '""') + '"';
    const tsv = [HEAD, ...rows].map((r) => r.map((c) => (typeof c === 'number' ? c : q(c))).join('\t')).join('\r\n');
    const hx = (s) => J.esc(s).replace(/\n/g, '<br>');
    const html = '<table border="1" style="border-collapse:collapse"><thead><tr>' + HEAD.map((h) => `<th style="background:#d9d9d9">${J.esc(h)}</th>`).join('') + '</tr></thead><tbody>' +
      rows.map((r) => '<tr>' + r.map((c) => `<td style="vertical-align:top">${hx(c)}</td>`).join('') + '</tr>').join('') + '</tbody></table>';
    let ok = false;
    try {
      if (navigator.clipboard && window.ClipboardItem) {
        await navigator.clipboard.write([new ClipboardItem({ 'text/html': new Blob([html], { type: 'text/html' }), 'text/plain': new Blob([tsv], { type: 'text/plain' }) })]); ok = true;
      } else if (navigator.clipboard) { await navigator.clipboard.writeText(tsv); ok = true; }
    } catch (e) { /* fallback di bawah */ }
    if (!ok) {
      const ta = document.createElement('textarea'); ta.value = tsv; ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select();
      try { ok = document.execCommand('copy'); } catch { ok = false; } ta.remove();
    }
    if (ok) { J.toast('Tabel tersalin — tinggal Paste (Ctrl+V) di Excel ✔'); J.Mascot.play('thumbs', 2800); }
    else J.toast('Browser menolak menyalin. Gunakan tombol Download Excel.');
  }

  /* ------------------------------------------------------------------
     Excel (.xlsx) dan CSV
     ------------------------------------------------------------------ */
  async function makeXLSX(f, btn) {
    await busy(btn, async () => {
      await loadScript('xlsx');
      const XLSX = window.XLSX; const m = f.meta;
      const aoa = [];
      const push = (...r) => aoa.push(r);
      push('JSEA (JOB SAFETY ENVIRONMENT ANALYSIS)');
      push('Nama Pekerjaan:', m.nama, '', '', 'No. JSEA:', m.no);
      push('Lokasi:', m.lokasi || '', 'Departemen/ Divisi:', m.dept || '', 'Tanggal:', dateID(m.tanggal));
      push('Disetujui Oleh:', m.disetujui || '', '(Sec. Head / Dept. Head / Team Leader)', '', 'Dianalisa Oleh (QSHE Dept.):', m.dianalisa || '');
      push('APD yang harus dipakai:', f.apd.map((a) => a.text).join('; '));
      push();
      const headRow = aoa.length; aoa.push(HEAD);
      rowsOf(f).forEach((r) => aoa.push(r));
      push();
      const critRow = aoa.length; push('CRITICAL INFORMATION TO VERIFY');
      critLines(f).forEach((t) => push(t));
      push(); const discRow = aoa.length; push(f.disclaimer);
      const ws = XLSX.utils.aoa_to_sheet(aoa);
      const widths = [6, 38, 54, 44, 78, 20];
      ws['!cols'] = widths.map((w) => ({ wch: w }));
      const thin = { style: 'thin', color: { rgb: '000000' } }; const border = { top: thin, bottom: thin, left: thin, right: thin };
      const range = XLSX.utils.decode_range(ws['!ref']);
      const merges = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 5 } }, { s: { r: 1, c: 1 }, e: { r: 1, c: 3 } }, { s: { r: 4, c: 1 }, e: { r: 4, c: 5 } }, { s: { r: critRow, c: 0 }, e: { r: critRow, c: 5 } }, { s: { r: discRow, c: 0 }, e: { r: discRow, c: 5 } }];
      for (let r = critRow + 1; r < discRow - 1; r++) merges.push({ s: { r, c: 0 }, e: { r, c: 5 } });
      ws['!merges'] = merges;
      const lines = (txt, wch) => String(txt ?? '').split('\n').reduce((n, l) => n + Math.max(1, Math.ceil(l.length / (wch * 1.05))), 0);
      ws['!rows'] = [];
      for (let r = range.s.r; r <= range.e.r; r++) {
        for (let c = range.s.c; c <= range.e.c; c++) {
          const ref = XLSX.utils.encode_cell({ r, c }); const cell = ws[ref] || (ws[ref] = { t: 's', v: '' });
          const isTable = r >= headRow && r < headRow + 1 + f.rows.length;
          cell.s = { alignment: { wrapText: true, vertical: 'top', horizontal: (c === 0 && isTable) || r === 0 ? 'center' : 'left' }, font: { name: 'Calibri', sz: 10, bold: r === 0 || r === headRow || r === critRow || (r < 5 && c % 2 === 0 && r > 0) } };
          if (r === 0) cell.s.font = { name: 'Calibri', sz: 14, bold: true, color: { rgb: 'F26A0E' } };
          if (isTable || (r >= 1 && r <= 4)) cell.s.border = border;
          if (r === headRow) { cell.s.fill = { fgColor: { rgb: 'D9D9D9' } }; cell.s.alignment = { wrapText: true, vertical: 'center', horizontal: 'center' }; }
          if (r === critRow) cell.s.fill = { fgColor: { rgb: 'FFE27A' } };
        }
        const isTableBody = r > headRow && r < headRow + 1 + f.rows.length;
        if (isTableBody) {
          const row = aoa[r]; const h = Math.max(...row.map((v, i) => lines(v, widths[i]))) * 13 + 6; ws['!rows'][r] = { hpt: Math.min(409, h) };
        } else if (r >= critRow && r <= discRow) ws['!rows'][r] = { hpt: Math.min(120, lines(aoa[r][0], 150) * 13 + 4) };
      }
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'JSEA');
      // lembar referensi & pendukung
      const sup = [['Langkah', 'Dasar regulasi & referensi']]; f.rows.forEach((r) => sup.push([r.no, r.refs.join('; ')]));
      sup.push([], ['Informasi pendukung']);
      Object.entries(f.support).forEach(([k, v]) => { if (v.length) { sup.push([k]); v.forEach((x) => sup.push(['', J.plain(x)])); } });
      sup.push(['Required PPE'], ['', 'Wajib: ' + f.ppe.mandatory], ['', 'Tambahan: ' + f.ppe.additional]);
      const ws2 = XLSX.utils.aoa_to_sheet(sup); ws2['!cols'] = [{ wch: 22 }, { wch: 130 }];
      XLSX.utils.book_append_sheet(wb, ws2, 'Referensi & Pendukung');
      const out = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
      download(new Blob([out], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }), fileBase(f, f.meta) + '.xlsx');
      done('Excel berhasil diunduh ✔');
    });
  }

  function makeCSV(f) {
    // Excel berbahasa Indonesia memakai titik-koma sebagai pemisah; baris "sep=;" menjamin kolom terbaca benar
    const q = (c) => '"' + String(c).replace(/"/g, '""') + '"';
    const lines = ['sep=;', HEAD.map(q).join(';'), ...rowsOf(f).map((r) => r.map((c) => (typeof c === 'number' ? c : q(c))).join(';'))];
    download(new Blob(['﻿' + lines.join('\r\n')], { type: 'text/csv;charset=utf-8' }), fileBase(f, f.meta) + '.csv');
    done('CSV berhasil diunduh ✔');
  }

  window.JASMIN_EXPORT = { pdf: makePDF, copy: copyTable, xlsx: makeXLSX, csv: (f) => makeCSV(f) };
})();
