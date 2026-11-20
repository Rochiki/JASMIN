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
  if (DB && DB.jobs) { /* tutorial darurat bukan JSEA: buang sisa data lama dari cache */ DB.jobs = DB.jobs.filter((j) => j.module !== 'DRT'); if (DB.modules) DB.modules = DB.modules.filter((m) => m.code !== 'DRT'); }
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
    // saat diam, Teh JASMIN bergantian memakai SEMUA 8 gerakan lain (kantong acak: tiap putaran semua tampil sekali)
    const ALL = ['wave', 'present', 'think', 'cheer', 'alert', 'thumbs', 'heart', 'tip'];
    let bag = [];
    const nextPose = () => { if (!bag.length) { bag = ALL.slice().sort(() => Math.random() - 0.5); if (bag[0] === lastAmbient) bag.push(bag.shift()); } return (lastAmbient = bag.shift()); };
    let lastAmbient = '';
    if (!reduceMotion) {
      (function loop() {
        setTimeout(() => {
          if (!document.hidden && !hold && current === 'idle') play(nextPose(), 2100);
          loop();
        }, 3200 + Math.random() * 2600);
      })();
    }
    el.href = WA_URL;
    return { play, think, say, show };
  })();


  /* ======================================================================
     1b. SUARA (TTS) — suara perempuan, ID / EN, hanya kalimat pertama
     ====================================================================== */
  const Voice = (() => {
    const synth = window.speechSynthesis;
    const supported = !!synth && 'SpeechSynthesisUtterance' in window;
    let lang = store.get('jasmin.voice', 'id');
    let voices = [];
    const menu = $('#voiceMenu');
    const FEMALE = /(female|woman|perempuan|wanita|gadis|damayanti|ardi?ana|google bahasa indonesia|google indonesia|microsoft (zira|jenny|aria|hazel|susan|libby|sonia|natasha|clara|emma|michelle)|samantha|karen|moira|tessa|serena|victoria|allison|ava|joanna|siri|google us english|google uk english female)/i;
    const MALE = /(\bmale\b|\bman\b|pria|laki|andika|david|mark|george|daniel|james|guy|ryan|richard|alex|fred|rishi|google uk english male)/i;
    function load() { voices = supported ? synth.getVoices() : []; }
    if (supported) { load(); synth.onvoiceschanged = load; }
    const prefKey = (l) => 'jasmin.voiceName.' + l;
    const matchLang = (v, l) => { const x = (v.lang || '').toLowerCase().replace('_', '-'); return (l === 'id' ? ['id'] : ['en']).some((p) => x === p || x.startsWith(p + '-')); };
    const NATURAL = /(natural|neural)/i, PREMIUM = /(online|premium|enhanced|siri)/i;
    const GOODEN = /(aria|jenny|sonia|libby|ava\b|emma|michelle|ana\b|samantha|karen|moira|tessa|serena|zoe|allison|nicky|stephanie|catherine|google uk english female)/i;
    function score(v) {
      const n = v.name; let s = 0;
      if (NATURAL.test(n)) s += 60; if (PREMIUM.test(n)) s += 35; if (GOODEN.test(n)) s += 25; if (FEMALE.test(n)) s += 10;
      if (MALE.test(n)) s -= 80; if (/google us english/i.test(n)) s -= 15;      // suara bawaan Chrome ini terdengar paling robotik
      return s;
    }
    function listVoices(l) { return voices.filter((v) => matchLang(v, l)).sort((x, y) => score(y) - score(x)); }
    function pick(l) {
      const cand = listVoices(l);
      const chosen = store.get(prefKey(l), '');
      return (chosen && cand.find((v) => v.name === chosen)) || cand[0] || null;
    }
    const isNatural = (v) => !!v && (NATURAL.test(v.name) || PREMIUM.test(v.name));
    function firstSentence(t) {
      t = String(t || '').replace(/\s+/g, ' ').trim();
      const parts = t.match(/[^.!?]+[.!?]*/g) || [t];
      let s = parts[0].trim();
      if (s.replace(/[^\p{L}]/gu, '').length < 12 && parts[1]) s += ' ' + parts[1].trim();   // sapaan pendek ("Halo!") digabung dengan kalimat berikutnya
      s = s.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu, '').replace(/[«»*_`#]/g, '').trim();
      return s.length > 160 ? s.slice(0, 160).replace(/\s+\S*$/, '') + '.' : s;
    }
    let gSrc = null, gCtx = null;
    function stop() { if (supported) synth.cancel(); if (gSrc) { try { gSrc.onended = null; gSrc.stop(); } catch { /* sudah berhenti */ } gSrc = null; Bgm.duck(false); } }
    const ttsPrefs = () => store.get('jasmin.tts', { gemini: false, voice: 'Aoede', model: 'gemini-2.5-flash-preview-tts' });
    // Suara AI Gemini (opsional; butuh API key Mode Cerdas). Gagal -> otomatis kembali ke suara browser.
    async function geminiSpeak(text) {
      const k = settings(), p = ttsPrefs();
      const style = lang === 'en' ? 'Say in a warm, friendly, cheerful female voice: ' : 'Ucapkan dengan suara perempuan yang ramah, hangat, dan ceria: ';
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(p.model || 'gemini-2.5-flash-preview-tts')}:generateContent`, {
        method: 'POST', headers: { 'Content-Type': 'application/json', 'x-goog-api-key': k.key },
        body: JSON.stringify({ contents: [{ parts: [{ text: style + text }] }], generationConfig: { responseModalities: ['AUDIO'], speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: p.voice || 'Aoede' } } } } }),
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const data = await res.json();
      const b64 = data.candidates[0].content.parts.find((x) => x.inlineData).inlineData.data;
      const bin = atob(b64), len = bin.length >> 1, pcm = new Int16Array(len);
      for (let i = 0; i < len; i++) { const lo = bin.charCodeAt(2 * i), hi = bin.charCodeAt(2 * i + 1); pcm[i] = (hi << 8) | lo; }
      gCtx = gCtx || new (window.AudioContext || window.webkitAudioContext)();
      await gCtx.resume();
      const buf = gCtx.createBuffer(1, len, 24000); const ch = buf.getChannelData(0);
      for (let i = 0; i < len; i++) ch[i] = pcm[i] / 32768;
      const src = gCtx.createBufferSource(); src.buffer = buf; src.connect(gCtx.destination);
      gSrc = src; Bgm.duck(true); src.onended = () => { gSrc = null; Bgm.duck(false); }; src.start();
    }
    function speak(say) {
      if (lang === 'off' || !say) return;
      const text = firstSentence(typeof say === 'string' ? say : say[lang]);
      if (!text) return;
      stop();
      const sv = settings();
      if (ttsPrefs().gemini && sv.enabled && sv.key) {
        geminiSpeak(text).catch((e) => { console.warn('Suara Gemini gagal, pakai suara browser', e); speakBrowser(text); });
        return;
      }
      speakBrowser(text);
    }
    function speakBrowser(text) {
      if (!supported) return;
      const u = new SpeechSynthesisUtterance(text);
      const v = pick(lang);
      u.lang = lang === 'id' ? 'id-ID' : 'en-US';
      if (v) { u.voice = v; u.lang = v.lang; }
      u.pitch = isNatural(v) ? 1.0 : 1.06; u.rate = lang === 'en' ? 0.97 : 1.0; u.volume = 1;
      u.onstart = () => Bgm.duck(true);
      u.onend = u.onerror = () => Bgm.duck(false);
      synth.speak(u);
    }
    function set(l) {
      lang = l; store.set('jasmin.voice', l);
      $$('button', menu).forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.v === l)));
      if (l === 'off') stop();
      else speak(l === 'id' ? 'Halo! Suara Bahasa Indonesia aktif.' : 'Hello! English voice is on.');
    }
    $$('button', menu).forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.v === lang)));
    menu.addEventListener('click', (e) => { const b = e.target.closest('button[data-v]'); if (b) set(b.dataset.v); });
    if (!supported) { menu.title = 'Browser ini tidak mendukung suara'; menu.style.opacity = '.5'; }
    return { speak, stop, listVoices, prefKey, ttsPrefs, reload: load, get lang() { return lang; }, get lang2() { return lang; }, firstSentence };
  })();



  /* ======================================================================
     1d. MUSIK LATAR (BGM) — corporate, loop terus, dibuat langsung oleh browser (Web Audio)
         Musik sintesis orisinil: bebas lisensi, tanpa file audio. Bila ada assets/bgm.mp3, file itu dipakai.
     ====================================================================== */
  const Bgm = (() => {
    const btn = $('#bgmBtn');
    let on = store.get('jasmin.bgm', true), ctx = null, out = null, duckG = null, timer = null, started = false;
    let nextBar = 0, barIdx = 0, noiseBuf = null, fileEl = null, useFile = null, ducked = false;
    const BPM = 92, BEAT = 60 / BPM, BAR = BEAT * 4;
    const mtof = (m) => 440 * Math.pow(2, (m - 69) / 12);
    // Cmaj7 -> G/B -> Am7 -> Fmaj7 (progresi I-V-vi-IV yang hangat & "korporat")
    const PAD = [[60, 64, 67, 71], [59, 62, 67, 74], [57, 60, 64, 67], [57, 60, 65, 69]];
    const BASS = [48, 47, 45, 41];
    const ARP = [0, 2, 1, 3, 2, 3, 1, 2];

    function paint() {
      btn.setAttribute('aria-pressed', String(on));
      btn.title = on ? 'Musik latar: aktif (klik untuk mematikan)' : 'Musik latar: mati (klik untuk menyalakan)';
      btn.classList.toggle('wait', on && !started);
    }
    function env(g, t, a, peak, hold, rel) {
      g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(peak, t + a);
      g.gain.setValueAtTime(peak, t + a + hold); g.gain.exponentialRampToValueAtTime(0.0001, t + a + hold + rel);
    }
    function build() {
      const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return false;
      ctx = new AC();
      const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -18; comp.ratio.value = 3;
      duckG = ctx.createGain(); duckG.gain.value = 0.0001;
      out = ctx.createGain(); out.gain.value = 0.55;
      out.connect(comp); comp.connect(duckG); duckG.connect(ctx.destination);
      // gema lembut (delay + low-pass) untuk suasana "luas"
      const dl = ctx.createDelay(1); dl.delayTime.value = BEAT * 0.75;
      const fb = ctx.createGain(); fb.gain.value = 0.34;
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 2400;
      const wet = ctx.createGain(); wet.gain.value = 0.5;
      dl.connect(lp); lp.connect(fb); fb.connect(dl); lp.connect(wet); wet.connect(out);
      ctx.__send = dl;
      const n = ctx.sampleRate * 0.25; noiseBuf = ctx.createBuffer(1, n, ctx.sampleRate);
      const d = noiseBuf.getChannelData(0); for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
      const an = ctx.createAnalyser(); an.fftSize = 512; comp.connect(an); ctx.__an = an;
      return true;
    }
    function bar(t, i) {
      const chord = PAD[i % 4], bass = BASS[i % 4];
      // pad: dua osilator tipis per nada, naik pelan & lepas pelan
      const padF = ctx.createBiquadFilter(); padF.type = 'lowpass'; padF.frequency.value = 1400; padF.connect(out);
      chord.forEach((m) => [['sine', -5], ['triangle', 6]].forEach(([type, cents]) => {
        const o = ctx.createOscillator(), g = ctx.createGain(); o.type = type; o.frequency.value = mtof(m); o.detune.value = cents;
        env(g, t, 0.7, 0.03, BAR - 0.5, 1.1); o.connect(g); g.connect(padF); o.start(t); o.stop(t + BAR + 1.4);
      }));
      // bass: nada akar pada ketukan 1 & 3
      [0, 2].forEach((b) => {
        const tt = t + b * BEAT, o = ctx.createOscillator(), g = ctx.createGain(); o.type = 'sine'; o.frequency.value = mtof(bass);
        env(g, tt, 0.015, 0.2, BEAT * 1.1, 0.35); o.connect(g); g.connect(out); o.start(tt); o.stop(tt + BEAT * 1.9);
      });
      // kick lembut ketukan 1 & 3
      [0, 2].forEach((b) => {
        const tt = t + b * BEAT, o = ctx.createOscillator(), g = ctx.createGain(); o.type = 'sine';
        o.frequency.setValueAtTime(110, tt); o.frequency.exponentialRampToValueAtTime(42, tt + 0.14);
        g.gain.setValueAtTime(0.0001, tt); g.gain.linearRampToValueAtTime(0.22, tt + 0.005); g.gain.exponentialRampToValueAtTime(0.0001, tt + 0.22);
        o.connect(g); g.connect(out); o.start(tt); o.stop(tt + 0.25);
      });
      // hi-hat tipis pada ketukan "and"
      for (let k = 0; k < 8; k++) {
        if (k % 2 === 0) continue;
        const tt = t + k * BEAT / 2, s = ctx.createBufferSource(), hp = ctx.createBiquadFilter(), g = ctx.createGain();
        s.buffer = noiseBuf; hp.type = 'highpass'; hp.frequency.value = 7000;
        g.gain.setValueAtTime(0.0001, tt); g.gain.linearRampToValueAtTime(0.05, tt + 0.003); g.gain.exponentialRampToValueAtTime(0.0001, tt + 0.07);
        s.connect(hp); hp.connect(g); g.connect(out); s.start(tt); s.stop(tt + 0.1);
      }
      // arpeggio pluk (ceria tapi tidak mengganggu)
      ARP.forEach((idx, k) => {
        const tt = t + k * BEAT / 2, o = ctx.createOscillator(), g = ctx.createGain(); o.type = 'triangle'; o.frequency.value = mtof(chord[idx] + 12);
        g.gain.setValueAtTime(0.0001, tt); g.gain.linearRampToValueAtTime(0.085, tt + 0.006); g.gain.exponentialRampToValueAtTime(0.0001, tt + 0.5);
        o.connect(g); g.connect(out); g.connect(ctx.__send); o.start(tt); o.stop(tt + 0.55);
      });
    }
    function tick() { while (nextBar < ctx.currentTime + 0.7) { bar(nextBar, barIdx++); nextBar += BAR; } }
    function fade(to, sec) {
      const t = ctx.currentTime; duckG.gain.cancelScheduledValues(t); duckG.gain.setValueAtTime(Math.max(0.0001, duckG.gain.value), t);
      duckG.gain.linearRampToValueAtTime(Math.max(0.0001, to), t + sec);
    }
    async function checkFile() {
      if (useFile !== null) return useFile;
      try { const r = await fetch('assets/bgm.mp3', { method: 'HEAD', cache: 'no-store' }); useFile = r.ok && /audio|octet/.test(r.headers.get('content-type') || 'audio'); } catch { useFile = false; }
      return useFile;
    }
    async function start() {
      if (!on || started) return;
      if (await checkFile()) {
        fileEl = fileEl || Object.assign(new Audio('assets/bgm.mp3'), { loop: true, volume: 0.22 });
        try { await fileEl.play(); started = true; paint(); } catch { /* menunggu interaksi berikutnya */ }
        return;
      }
      if (!ctx && !build()) return;
      try { await ctx.resume(); } catch { return; }
      if (ctx.state !== 'running') return;
      started = true; nextBar = ctx.currentTime + 0.1; barIdx = 0; tick(); timer = setInterval(tick, 150);
      fade(1, 2.5); paint();
    }
    function stop() {
      if (fileEl) fileEl.pause();
      if (ctx && started) { fade(0.0001, 0.5); setTimeout(() => { if (!on) { clearInterval(timer); timer = null; ctx.suspend(); started = false; paint(); } }, 600); }
      else started = false;
    }
    function set(v) { on = v; store.set('jasmin.bgm', v); paint(); if (v) { if (ctx && ctx.state === 'suspended' && !timer) started = false; start(); } else stop(); }
    function duck(d) {
      ducked = d;
      if (fileEl) fileEl.volume = d ? 0.07 : 0.22;
      if (ctx && started && on) fade(d ? 0.28 : 1, d ? 0.25 : 0.8);
    }
    // browser baru mengizinkan suara setelah interaksi pertama: musik otomatis mulai saat itu
    const kick = () => { if (!started && on) start(); if (started) { ['pointerdown', 'keydown', 'touchstart', 'click'].forEach((ev) => document.removeEventListener(ev, kick, true)); } };
    ['pointerdown', 'keydown', 'touchstart', 'click'].forEach((ev) => document.addEventListener(ev, kick, true));
    document.addEventListener('visibilitychange', () => { if (!document.hidden && on && ctx && ctx.state === 'suspended' && started) ctx.resume(); });
    btn.addEventListener('click', (e) => { e.stopPropagation(); set(!on); });
    paint();
    if (on) start();     // berhasil langsung bila browser mengizinkan autoplay
    return { set, duck, start, get on() { return on; }, get started() { return started; }, get ctx() { return ctx; } };
  })();

  /* ======================================================================
     1c. TERJEMAHAN ID -> EN (Chrome Translator on-device, atau Gemini bila Mode Cerdas aktif)
     ====================================================================== */
  const NOENV_EN = 'No significant environmental impact was identified for this step.';
  const NOVERIFY_EN = 'No critical information requires additional verification based on the available sources.';
  const DISCLAIMER_EN = 'Note: This AI provides recommendations based on the documents, regulations, standards, and references available. Always verify against actual field conditions and refer to work procedures, equipment manuals, and applicable regulations. If there is any doubt or an unsafe condition, stop the work and consult your supervisor or the QSHE team before continuing.';
  const trCache = new Map();
  let trEngine = null;
  const PVTOK = /\[PERLU VERIFIKASI\]/g;

  async function getEngine() {
    if (trEngine) return trEngine;
    if ('Translator' in self) {
      try {
        const opt = { sourceLanguage: 'id', targetLanguage: 'en' };
        const av = await Translator.availability(opt);
        if (av !== 'unavailable') {
          if (av !== 'available') toast('Mengunduh model terjemahan (sekali saja)…');
          const tr = await Translator.create(opt);
          trEngine = { name: 'chrome', run: async (list) => { const out = []; for (const s of list) out.push(await tr.translate(s)); return out; } };
          return trEngine;
        }
      } catch (e) { console.warn('Translator API gagal', e); }
    }
    const s = settings();
    if (s.enabled && s.key) {
      trEngine = { name: 'gemini', run: geminiTranslate };
      return trEngine;
    }
    throw new Error('Terjemahan butuh Chrome terbaru (desktop, versi 138+) atau Mode Cerdas (⚙ → API key Gemini). Alternatif: klik kanan halaman → Terjemahkan ke Inggris.');
  }
  async function geminiTranslate(list) {
    const s = settings(); const out = [];
    for (let i = 0; i < list.length; i += 40) {
      const chunk = list.slice(i, i + 40);
      const body = { systemInstruction: { parts: [{ text: 'Translate each Indonesian string in the JSON array to natural, precise English for an occupational safety (JSEA) document. Keep numbers, units, abbreviations (LOTO, PPE, ADT), and the token [PV] unchanged. Do not add or remove information. Return ONLY a JSON array of strings with the same length and order.' }] }, contents: [{ role: 'user', parts: [{ text: JSON.stringify(chunk) }] }], generationConfig: { temperature: 0, responseMimeType: 'application/json' } };
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(s.model || CONFIG.GEMINI_MODEL)}:generateContent`, { method: 'POST', headers: { 'Content-Type': 'application/json', 'x-goog-api-key': s.key }, body: JSON.stringify(body) });
      if (!res.ok) throw new Error('Terjemahan Gemini gagal (HTTP ' + res.status + ')');
      const data = await res.json();
      const arr = JSON.parse(data.candidates[0].content.parts.map((p) => p.text).join(''));
      if (!Array.isArray(arr) || arr.length !== chunk.length) throw new Error('Format terjemahan tidak sesuai');
      out.push(...arr.map(String));
    }
    return out;
  }
  // terjemahkan daftar string (dengan cache); mengembalikan Map asli -> Inggris
  async function translateStrings(strs) {
    const todo = strs.filter((s) => !trCache.has(s));
    if (todo.length) {
      const eng = await getEngine();
      const res = await eng.run(todo.map((s) => s.replace(PVTOK, '[PV]')));
      todo.forEach((s, i) => trCache.set(s, String(res[i] ?? s).replace(/\[\s*PV\s*\]/gi, '[PERLU VERIFIKASI]')));
    }
    return trCache;
  }
  async function translateForm(f) {
    const set = new Set(); const add = (s) => { if (s && /[A-Za-z]/.test(s)) set.add(s); };
    add(f.meta.nama);
    f.rows.forEach((r) => { add(r.step); r.hazard.forEach((x) => add(x.text)); r.env.forEach((x) => x.k !== 'noenv' && add(x.text)); r.controls.forEach((c) => { add(c.text); add(c.label); }); add(r.pic); });
    f.critical.forEach((c) => add(c.text)); f.apd.forEach((x) => add(x.text));
    Object.values(f.support).forEach((v) => v.forEach(add));
    add(f.ppe.mandatory); add(f.ppe.additional); add(f.emergency.potential); add(f.emergency.firstResponse); add(f.emergency.equipment); add(f.keterangan);
    const M = await translateStrings([...set]);
    const T = (s) => (s && M.has(s) ? M.get(s) : s);
    return {
      ...f, en: true, orig: f.orig || f, noverify: NOVERIFY_EN, disclaimer: DISCLAIMER_EN,
      meta: { ...f.meta, nama: T(f.meta.nama) },
      apd: f.apd.map((x) => ({ ...x, text: T(x.text) })),
      critical: f.critical.map((c) => ({ ...c, text: T(c.text) })),
      support: Object.fromEntries(Object.entries(f.support).map(([k, v]) => [k, v.map(T)])),
      ppe: { ...f.ppe, mandatory: T(f.ppe.mandatory), additional: T(f.ppe.additional) },
      emergency: { ...f.emergency, potential: T(f.emergency.potential), firstResponse: T(f.emergency.firstResponse), equipment: T(f.emergency.equipment) },
      keterangan: T(f.keterangan),
      rows: f.rows.map((r) => ({
        ...r, step: T(r.step), pic: T(r.pic),
        hazard: r.hazard.map((x) => ({ ...x, text: T(x.text) })),
        env: r.env.map((x) => (x.k === 'noenv' ? { ...x, text: NOENV_EN } : { ...x, text: T(x.text) })),
        controls: r.controls.map((c) => ({ ...c, label: T(c.label), text: c.pv ? T(c.text) + ' ' + PV : T(c.text), pv: false })),
      })),
    };
  }
  // pesan non-JSEA: terjemahkan node teks di dalam gelembung
  async function translateBubble(bubble) {
    const nodes = []; const w = document.createTreeWalker(bubble, NodeFilter.SHOW_TEXT);
    while (w.nextNode()) { const n = w.currentNode; if (n.nodeValue.trim().length > 1 && /[A-Za-z]/.test(n.nodeValue) && !n.parentElement.closest('.tr-msg,.code')) nodes.push(n); }
    const M = await translateStrings([...new Set(nodes.map((n) => n.nodeValue))]);
    nodes.forEach((n) => { if (n.__orig === undefined) n.__orig = n.nodeValue; if (M.has(n.__orig)) n.nodeValue = M.get(n.__orig); });
    bubble.dataset.lang = 'en';
  }
  function untranslateBubble(bubble) {
    const w = document.createTreeWalker(bubble, NodeFilter.SHOW_TEXT);
    while (w.nextNode()) { const n = w.currentNode; if (n.__orig !== undefined) n.nodeValue = n.__orig; }
    bubble.dataset.lang = 'id';
  }
  async function toggleTranslate(btn) {
    const row = btn.closest('.msg'); if (!row) return;
    const old = btn.textContent; btn.disabled = true; btn.textContent = '⏳ …';
    try {
      const jsea = row.querySelector('.jsea');
      if (jsea) {
        const cur = forms.get(row.id);
        const next = cur.en ? cur.orig : await translateForm(cur);
        forms.set(row.id, next);
        jsea.outerHTML = formHTML(next);
        row.dataset.lang = next.en ? 'en' : 'id';
        Mascot.play('thumbs', 2200);
      } else {
        const bubble = $('.bubble', row);
        if (bubble.dataset.lang === 'en') untranslateBubble(bubble); else await translateBubble(bubble);
        const nb = $('.tr-msg', row); if (nb) nb.textContent = bubble.dataset.lang === 'en' ? '🌐 Indonesia' : '🌐 English';
      }
    } catch (e) { toast(e.message || 'Terjemahan gagal'); Mascot.play('think', 2500); }
    finally { const b = row.querySelector('[data-act="translate"],.tr-msg'); if (btn.isConnected) { btn.disabled = false; if (btn.textContent === '⏳ …') btn.textContent = old; } }
  }

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
      apd, rows, critical, noverify: NOVERIFY, disclaimer: job.disclaimer || DISCLAIMER,
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
    const m = f.meta; const t = (a, b) => (f.en ? b : a);
    const val = (v, ph) => (v ? `<div class="v">${esc(v)}</div>` : `<div class="v blank">${ph}</div>`);
    const dateTxt = (() => { try { return new Intl.DateTimeFormat(f.en ? 'en-GB' : 'id-ID', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(m.tanggal + 'T00:00:00')); } catch { return m.tanggal; } })();
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
    const emerg = (e.potential || e.firstResponse || e.equipment) ? `<h5>Emergency Response</h5><ul>${e.potential ? `<li><b>${t('Potensi keadaan darurat', 'Potential emergency')}:</b> ${rich(e.potential)}</li>` : ''}${e.firstResponse ? `<li><b>${t('Respon awal', 'First response')}:</b> ${rich(e.firstResponse)}</li>` : ''}${e.equipment ? `<li><b>${t('Peralatan darurat', 'Emergency equipment')}:</b> ${rich(e.equipment)}</li>` : ''}</ul>` : '';
    const refs = f.rows.map((r) => `<li><span class="rn">${t('Langkah', 'Step')} ${r.no}:</span> ${r.refs.map(esc).join('; ')}</li>`).join('');
    const crit = f.critical.length
      ? `<ul>${f.critical.map((c) => `<li>${c.k === 'scope' ? `<b>${t('Catatan lingkup', 'Scope note')}:</b> ` : ''}${esc(c.text).replace(esc(PV), `<span class="pv">${PV}</span>`).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')}</li>`).join('')}</ul>`
      : `<p>${esc(f.en ? NOVERIFY_EN : NOVERIFY)}</p>`;
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
          ${apdTam.length ? `<div class="sublbl">${t('Tambahan sesuai kondisi kerja', 'Additional, depending on work conditions')}</div><div class="apd-chips">${apdHTML(apdTam)}</div>` : ''}</div>
      </div>
      <div class="table-scroll"><table class="jtable"><thead><tr>
        <th class="c-no">NO</th><th class="c-step">SEQUENCE OF BASIC JOB STEPS<small>(Uraian/Langkah Kerja)</small></th>
        <th class="c-haz">HAZARD<small>(Bahaya)</small></th><th class="c-env">ENVIRONMENT IMPACT ANALYSIS<small>(Analisa Dampak Lingkungan)</small></th>
        <th class="c-ctl">PREVENTION/ CONTROLLING<small>(Pencegahan / Pengendalian)</small></th><th class="c-pic">PIC</th></tr></thead>
        <tbody>${rowsHTML}</tbody></table></div>
      <div class="jblock critical"><h4>CRITICAL INFORMATION TO VERIFY</h4>${crit}</div>
      <details class="more"><summary>${t('Informasi pendukung pekerjaan ini', 'Supporting information for this job')}</summary><div class="more-body">${sup}
        <h5>Required PPE</h5><ul>${f.ppe.mandatory ? `<li><b>${t('Wajib', 'Mandatory')}:</b> ${rich(f.ppe.mandatory)}</li>` : ''}${f.ppe.additional ? `<li><b>${t('Tambahan', 'Additional')}:</b> ${rich(f.ppe.additional)}</li>` : ''}</ul>
        ${emerg}${f.keterangan ? `<h5>${t('Keterangan', 'Remarks')}</h5><p>${rich(f.keterangan)}</p>` : ''}</div></details>
      <details class="more"><summary>${t('Dasar regulasi &amp; referensi per langkah', 'Regulations &amp; references per step')}</summary><div class="more-body"><ul class="refs">${refs}</ul></div></details>
      <p class="disc">${esc(f.disclaimer)}</p>
      <div class="jactions">
        <button class="btn primary" type="button" data-act="pdf">📄 Download as PDF</button>
        <button class="btn" type="button" data-act="copy">📋 Copy Tabel (Siap Paste ke Excel)</button>
        <button class="btn" type="button" data-act="xlsx">📊 Download Excel (.xlsx)</button>
        <button class="btn" type="button" data-act="csv">⬇ CSV</button>
        <button class="btn" type="button" data-act="translate">${f.en ? '🌐 Indonesia' : '🌐 English'}</button>
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
    if (role === 'bot' && opts.tr) { const b = document.createElement('button'); b.type = 'button'; b.className = 'tr-msg'; b.dataset.act = 'translate'; b.textContent = '🌐 English'; $('.bubble', row).appendChild(b); }
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
    const row = addMsg('bot', res.html, { wide: res.wide, tr: !res.form });
    if (res.form) forms.set(row.id, res.form);
    Mascot.play(res.pose || pose, res.poseMs || 2600);
    Voice.speak(res.say || autoSay(res, row));
    return row;
  }

  // kalimat pertama otomatis dari balasan; versi Inggris generik bila tidak disediakan
  function autoSay(res, row) {
    const p = row.querySelector('.bubble p, .bubble li, .bubble');
    return { id: p ? p.textContent : '', en: 'Here is the answer. Please read the details on the screen.' };
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
      <li><b>Tutorial Tanggap Darurat</b> langkah demi langkah (kebakaran, tumpahan, RJP, gempa, banjir, evakuasi, dll.). Ketik <i>“kebakaran”</i> atau <i>“tutorial darurat”</i>.</li>
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
    return { html: `<p>${lead}</p>${formHTML(f)}`, wide: true, form: f, pose: 'cheer', poseMs: 3200, say: { id: ctx.approx ? 'Ini pekerjaan yang paling mendekati, cek dulu apakah sesuai ya.' : 'Siap! Ini JSEA-nya, baca tiap langkah bersama tim sebelum mulai kerja ya.', en: ctx.approx ? 'This is the closest job I found. Please check that it matches.' : 'Here is your JSEA. Please review each step with your team before starting work.' } };
  }

  function candidatesReply(list, intro) {
    return { pose: 'think', say: { id: 'Ada beberapa pekerjaan yang mirip. Mana yang Anda maksud?', en: 'There are a few similar jobs. Which one do you mean?' }, html: `<p>${intro}</p><div class="opt-list">${list.map((r) => jobItem(r.job)).join('')}</div><p style="font-size:13px;margin-top:8px">Bukan yang ini? Tulis ulang dengan nama komponen dan aktivitasnya, atau buka katalog.</p><div class="opts">${optBtn('Buka Katalog', 'data-act="catalog"')}</div>` };
  }
  function notFoundReply(q) {
    return { pose: 'think', say: { id: 'Saya belum menemukan pekerjaan itu di database.', en: 'I could not find that job in the database.' }, html: `<p>Hmm, saya belum menemukan pekerjaan itu di database. Saya tidak mau menebak-nebak untuk urusan keselamatan.</p>
      <p>Coba kata kunci lain (nama komponen + aktivitas, mis. <i>“lepas silinder bucket”</i>) atau lihat katalog. Kalau pekerjaannya memang belum ada, <b>tunda dulu</b> dan konsultasikan dengan atasan atau tim QSHE.</p>
      <div class="opts">${optBtn('Buka Katalog', 'data-act="catalog"')}${waBtn()}</div>` };
  }


  /* ---- Tutorial Tanggap Darurat (langkah-demi-langkah, bukan JSEA) ---- */
  const TUT = () => window.JASMIN_TUTOR || [];
  const TUT_KW = {
    '01': 'darurat alarm lapor melapor format level status', '02': 'kebakaran api bangunan kantor workshop gudang apar asap', '03': 'kebakaran terbakar unit alat berat kendaraan engine',
    '04': 'ledakan meledak tabung gas akumulator ban rim bertekanan', '05': 'tumpahan oli bahan bakar kimia b3 bocor tumpah spill', '06': 'cedera berat henti napas jantung rjp pertolongan pingsan tidak sadar p3k pendarahan',
    '07': 'terjepit tertimpa unit bergerak sendiri rollaway menggelinding', '08': 'kecelakaan lalu lintas terguling tabrakan kendaraan jalan', '09': 'hilang kontak man down terpencil tidak ada kabar',
    10: 'sengatan listrik tersengat tersetrum busur api', 11: 'ketinggian ruang terbatas rescue jatuh penyelamatan', 12: 'medis jantung stroke kejang heat stroke gigitan ular sakit',
    13: 'gempa tsunami bumi', 14: 'banjir angin kencang petir pohon tumbang cuaca ekstrem', 15: 'kebakaran lahan karhutla kabut asap hutan', 16: 'keamanan kerusuhan demo blokade bom ancaman perampokan begal pembegalan',
    17: 'keracunan makanan massal katering', 18: 'evakuasi titik kumpul warden penghitungan personel', 19: 'inspeksi kesiapan alat darurat apar hidran alarm eyewash spill kit p3k',
    20: 'pasca darurat tkp pelaporan pemulihan investigasi', 21: 'kartu kontak darurat orientasi lokasi kerja baru nomor telepon',
  };
  const TUT_RE = {
    strong: /\b(tutorial|panduan darurat|tanggap darurat|darurat|emergency|kebakaran|terbakar|apar|gempa|tsunami|banjir|petir|evakuasi|rjp|henti jantung|henti napas|ledakan|meledak|sengatan listrik|tersengat listrik|tersetrum|keracunan|bom|kerusuhan|kabut asap|karhutla|gigitan ular|digigit ular|man down|hilang kontak|begal|perampokan|terguling|titik kumpul|pertolongan pertama)\b/,
    weak: /\b(tumpahan|tumpah|bocor|terjepit|tertimpa|api|kecelakaan|korban|pingsan|kejang|tenggelam|jatuh dari)\b/,
    now: /\b(ada|terjadi|barusan|baru saja|sekarang|lagi|tolong|sedang|cara|bagaimana|gimana|apa yang harus|harus apa)\b/,
    not: /\b(jsea|susun|form|tabel|langkah kerja|buat jsea|katalog)\b/,
  };
  const tutIndex = () => TUT().map((t) => {
    const kw = normalize(TUT_KW[t.id] || TUT_KW[Number(t.id)] || '').split(' ');
    const title = new Set(tokenize(t.title));
    const body = new Set(tokenize(t.steps.map((s) => s.do).join(' ')));
    return { t, kw: new Set(kw), title, body };
  });
  function tutSearch(q) {
    const toks = tokenize(q).filter((w) => !STOP.has(w) && w.length > 2);
    return tutIndex().map((x) => {
      let s = 0; toks.forEach((w) => { if (x.kw.has(w)) s += 3; else if (x.title.has(w)) s += 2.5; else if (x.body.has(w)) s += 0.6; });
      return { t: x.t, s };
    }).filter((r) => r.s > 0).sort((a, b) => b.s - a.s);
  }
  const tutWanted = (qn) => TUT().length && !TUT_RE.not.test(qn) && (TUT_RE.strong.test(qn) || (TUT_RE.weak.test(qn) && TUT_RE.now.test(qn)));
  const tutItem = (t) => `<button class="opt-item" type="button" data-act="tutor" data-id="${esc(t.id)}"><span class="code">${esc(t.id)}</span><span class="tt">${esc(t.title)}</span><span class="go">Buka ›</span></button>`;
  function tutorListReply(note) {
    return { pose: 'present', say: { id: 'Pilih tutorial tanggap darurat yang Anda perlukan.', en: 'Choose the emergency tutorial you need.' }, html: `<p>${note || 'Berikut <b>Tutorial Tanggap Darurat</b>. Pilih situasinya, langkahnya langsung tampil.'}</p><div class="opt-list">${TUT().map(tutItem).join('')}</div>` };
  }
  const TK = { wajib: ['WAJIB', 'k-wajib'], lakukan: ['LAKUKAN', 'k-do'], lingkungan: ['LINGKUNGAN', 'k-env'], apd: ['APD', 'k-ppe'] };
  function tutorReply(t) {
    const li = (arr) => arr.map((x) => `<li>${rich(x)}</li>`).join('');
    const steps = t.steps.map((s) => `<li class="tut-step"><div class="tut-do">${rich(s.do)}</div>${s.items.map((i) => `<div class="tut-it ${TK[i.k][1]}"><i>${TK[i.k][0]}</i><span>${rich(i.t)}</span></div>`).join('')}</li>`).join('');
    const sec = (cls, h, arr) => arr && arr.length ? `<div class="tut-box ${cls}"><b>${h}</b><ul>${li(arr)}</ul></div>` : '';
    const d = t.darurat, ap = t.apd;
    const prep = [d.alat && `<b>Alat yang disiapkan:</b> ${d.alat}`, ap.wajib && `<b>APD:</b> ${ap.wajib}${ap.tambahan && ap.tambahan !== 'Tidak ada.' && ap.tambahan !== 'Tidak ada' ? '; tambahan: ' + ap.tambahan : ''}`, d.potensi && `<b>Yang bisa terjadi:</b> ${d.potensi}`, d.respon && `<b>Ringkasnya:</b> ${d.respon}`].filter(Boolean);
    return { pose: 'alert', say: { id: `Tutorial ${t.title}. Ikuti langkahnya berurutan.`, en: 'Emergency tutorial. Follow the steps in order.' }, wide: true, html: `<div class="tut">
      <div class="tut-h"><span class="tut-badge">TUTORIAL ${esc(t.id)}</span><b>${esc(t.title)}</b></div>
      ${sec('tut-gold', 'Pegang aturan ini', t.aturan)}
      <ol class="tut-steps">${steps}</ol>
      ${sec('tut-no', 'Jangan lakukan', t.jangan)}
      ${sec('tut-tips', 'Tips lapangan', t.tips.concat(t.perhatian))}
      ${sec('tut-ready', 'Siapkan sebelum kejadian', t.siap)}
      ${prep.length ? `<div class="tut-box tut-prep"><ul>${prep.map((x) => `<li>${x}</li>`).join('')}</ul></div>` : ''}
      ${t.catatan ? `<p class="tut-note">${esc(t.catatan)}</p>` : ''}
      ${t.dasar.length ? `<p class="tut-ref">Dasar acuan: ${esc(t.dasar.join('; '))}</p>` : ''}
      <p class="tut-note">Isi bersifat umum. Sesuaikan nomor telepon, titik kumpul, dan personel dengan lokasi Anda. Di lokasi pelanggan, ikuti sistem darurat lokasi tersebut. Bila ragu atau tidak aman, hentikan pekerjaan dan hubungi atasan atau tim QSHE.</p>
      <div class="opts">${optBtn('Tutorial darurat lainnya', 'data-act="tutlist"')}${waBtn('💬 Hubungi Tim QSHE')}</div></div>` };
  }
  function tutorRoute(qn, q) {
    const r = tutSearch(q);
    const top = r[0], sec = r[1];
    if (!top || top.s < 2.5) return tutorListReply();
    if (sec && sec.s >= top.s * 0.8) return { pose: 'think', say: { id: 'Ada beberapa tutorial yang mirip. Mana yang Anda maksud?', en: 'A few tutorials match. Which one do you mean?' }, html: `<p>Ada beberapa tutorial yang mirip. Mana yang Anda maksud?</p><div class="opt-list">${r.slice(0, 3).map((x) => tutItem(x.t)).join('')}</div><div class="opts">${optBtn('Semua tutorial darurat', 'data-act="tutlist"')}</div>` };
    return tutorReply(top.t);
  }

  function emergencyReply(job) {
    const g = jobs.find((j) => j.code === 'GEN-01');
    const src = (job && job.emergencyResponse.firstResponse) ? job : g;
    const e = src.emergencyResponse;
    return { pose: 'alert', poseMs: 6000, say: { id: 'Utamakan keselamatan jiwa. Hentikan pekerjaan dan hubungi hotline QSHE sekarang.', en: 'Life safety comes first. Stop work and call the QSHE hotline now.' }, html: `<div class="warnbox">⚠️ Bila ada korban atau situasi darurat sekarang: utamakan keselamatan jiwa, jangan menunda untuk bertanya ke chat.</div>
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
    return { pose: 'tip', poseMs: 3200, say: { id: 'Ini yang tertulis di database untuk pekerjaan tersebut.', en: 'Here is what the database says about this job.' }, html: `<p>Ini yang tertulis di database untuk <b>${esc(job.title)}</b> (${esc(job.code)}):</p>${body}
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

    if (/\b(tutorial|panduan|daftar|semua|menu)\b.*\b(darurat|emergency)\b|^(darurat|emergency|tanggap darurat)$/.test(qn) && TUT().length) return tutorListReply();
    if (tutWanted(qn)) return tutorRoute(qn, q);
    if (RE.emergency.test(qn) && RE.emergencyNow.test(qn)) return emergencyReply(search(q).ranked[0] && search(q).ranked[0].job);
    const code = qn.match(RE.code);
    if (code) { const j = byCode.get(`${code[1]}-${String(code[2]).padStart(2, '0')}`); if (j) return jseaReply(j, { brand: gen.brand }); }
    if (RE.thanks.test(qn) && qn.split(' ').length < 8) return { pose: 'heart', poseMs: 3200, say: { id: 'Sama-sama! Kerja aman itu kerja bareng.', en: 'You are welcome! Safe work is teamwork.' }, html: '<p>Sama-sama! Kerja aman itu kerja bareng. Kalau ada pekerjaan lain yang butuh JSEA, Teh JASMIN siap bantu kapan saja. 🧡</p>' };
    if (RE.greet.test(qn) && qn.split(' ').length <= 4) return { pose: 'wave', poseMs: 3000, say: { id: 'Halo! Saya Teh JASMIN, asisten JSEA Anda.', en: 'Hello! I am Teh JASMIN, your JSEA assistant.' }, html: greetHTML() };
    if (RE.newJsea.test(qn)) return { pose: 'present', say: { id: 'Siap! Pekerjaan untuk jenis unit apa?', en: 'Sure! Which type of equipment is the job for?' }, html: unitChooser() };
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
    Voice.stop();
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
    else if (act === 'tutor') { const t = TUT().find((x) => x.id === b.dataset.id); if (t) { userSays('Tutorial ' + t.title); botReply(async () => tutorReply(t), 'alert', 500); } }
    else if (act === 'tutlist') openTutor();
    else if (act === 'ask') ask(b.dataset.q);
    else if (act === 'translate') toggleTranslate(b);
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

  /* ---- daftar tutorial darurat (terpisah dari katalog JSEA) ---- */
  function renderTutList(filter = '') {
    const f = normalize(filter);
    const rs = f ? tutSearch(f).map((r) => r.t) : TUT();
    $('#tutList').innerHTML = rs.length ? `<div class="opt-list">${rs.map((t) => `<button class="opt-item" type="button" data-tut="${esc(t.id)}"><span class="code">${esc(t.id)}</span><span class="tt">${esc(t.title)}</span><span class="go">Buka ›</span></button>`).join('')}</div>` : '<p style="padding:8px">Belum ada yang cocok. Coba kata lain, mis. “kebakaran”, “gempa”, “RJP”.</p>';
  }
  function openTutor() { renderTutList(''); $('#tutSearch').value = ''; $('#app').classList.remove('info-open'); openModal('#modalTutor'); }
  $('#tutSearch').addEventListener('input', (e) => renderTutList(e.target.value));
  $('#tutList').addEventListener('click', (e) => { const b = e.target.closest('[data-tut]'); if (!b) return; const t = TUT().find((x) => x.id === b.dataset.tut); if (!t) return; closeModals(); userSays('Tutorial ' + t.title); botReply(async () => tutorReply(t), 'alert', 500); });
  $('#btnTutor').addEventListener('click', openTutor);

  /* ---- pengaturan Mode Cerdas ---- */
  function fillVoiceSelect(sel, l) {
    const cur = store.get(Voice.prefKey(l), '');
    sel.innerHTML = '<option value="">Otomatis (terbaik yang tersedia)</option>' + Voice.listVoices(l).map((v) => `<option value="${esc(v.name)}"${v.name === cur ? ' selected' : ''}>${esc(v.name)}</option>`).join('');
  }
  $('#btnSettings').addEventListener('click', () => {
    const s = settings(); const f = $('#settingsForm'); const t = Voice.ttsPrefs();
    f.enabled.checked = !!s.enabled; f.key.value = s.key || ''; f.model.value = s.model || CONFIG.GEMINI_MODEL;
    Voice.reload(); fillVoiceSelect(f.voiceEn, 'en'); fillVoiceSelect(f.voiceId, 'id');
    f.geminiTts.checked = !!t.gemini; f.geminiVoice.value = t.voice || 'Aoede'; f.ttsModel.value = t.model || 'gemini-2.5-flash-preview-tts';
    $('#app').classList.remove('info-open'); openModal('#modalSettings');
  });
  $('#voiceTest').addEventListener('click', () => {
    const f = $('#settingsForm');
    store.set(Voice.prefKey('en'), f.voiceEn.value); store.set(Voice.prefKey('id'), f.voiceId.value);
    store.set('jasmin.tts', { gemini: f.geminiTts.checked, voice: f.geminiVoice.value, model: f.ttsModel.value.trim() || 'gemini-2.5-flash-preview-tts' });
    const was = Voice.lang; const say = Voice.lang === 'id' ? 'Halo! Saya Teh JASMIN. Begini suara saya.' : 'Hello! I am Teh JASMIN. This is how I sound.';
    Voice.speak(was === 'off' ? { id: say, en: 'Hello! I am Teh JASMIN. This is how I sound.' } : say);
    if (was === 'off') toast('Suara sedang dimatikan (menu 🔇). Pilih ID atau EN dulu.');
  });
  $('#settingsForm').addEventListener('submit', (e) => {
    e.preventDefault(); const f = e.target;
    store.set('jasmin.llm', { enabled: f.enabled.checked && !!f.key.value.trim(), key: f.key.value.trim(), model: f.model.value.trim() || CONFIG.GEMINI_MODEL });
    store.set(Voice.prefKey('en'), f.voiceEn.value); store.set(Voice.prefKey('id'), f.voiceId.value);
    store.set('jasmin.tts', { gemini: f.geminiTts.checked, voice: f.geminiVoice.value, model: f.ttsModel.value.trim() || 'gemini-2.5-flash-preview-tts' });
    closeModals(); toast('Pengaturan disimpan' + (f.geminiTts.checked && !f.key.value.trim() ? ' (suara Gemini butuh API key)' : ''));
  });
  $('#settingsClear').addEventListener('click', () => { store.del('jasmin.llm'); $('#settingsForm').reset(); toast('Kunci dihapus dari perangkat ini'); });

  /* ---- sidebar mobile ---- */
  $('#btnMenu').addEventListener('click', () => { const a = $('#app'); const o = a.classList.toggle('info-open'); $('#btnMenu').setAttribute('aria-expanded', o); });
  $('#app').addEventListener('click', (e) => { if (e.target === $('#app')) $('#app').classList.remove('info-open'); });

  /* ======================================================================
     6. QSHE INFO & UPDATE (qshe-updates.json)
     ====================================================================== */
  const FALLBACK_UPDATES = { kartu: [
    { id: 'safety-moment', judul: 'Safety Moment', ikon: '🦺', tag: 'Update: Nov 2026', teks: 'Memasuki musim hujan, waspada jalanan licin! Kurangi kecepatan, jaga jarak aman kendaraan!', rotasi: [], tema: 'krem' },
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
      if (Array.isArray(c.aman) && c.aman.length) {
        const cols = c.aman.map((k) => `<div class="aman-col"><div class="aman-hd"><span class="aman-l">${esc(k.huruf)}</span><b>${esc(k.judul).replace('|', '<br>')}</b></div><ul>${(k.poin || []).map((x) => `<li>${rich(x).replace(/\*(.+?)\*/g, '<em>$1</em>')}</li>`).join('')}</ul></div>`).join('');
        return `<article class="icard t-aman"><h3><span aria-hidden="true">${esc(c.ikon || '')}</span>${esc(c.judul)}${c.tag ? `<span class="tag">${esc(c.tag)}</span>` : ''}</h3>${c.subjudul ? `<div class="aman-sub">${esc(c.subjudul)}</div>` : ''}<div class="aman-grid">${cols}</div></article>`;
      }
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
  window.JASMIN = { Bgm, NOVERIFY, Voice, CONFIG, WA_URL, DB, buildForm, cellText, todayISO, todayLong, toast, Mascot, store, esc, plain, PV, NOENV, respond, search, genericize };
})();
