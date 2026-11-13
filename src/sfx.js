// Synthesized sound + a gentle generative ocean soundtrack (WebAudio only, no files).
export class Sfx {
  constructor() { this.ctx = null; this.vol = 0.7; this.music = 0.5; this.muted = false; this.mood = 0; }
  unlock() { if (this.ctx) { this.ctx.resume?.(); return; } try { const C = this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.master = C.createGain(); this.master.connect(C.destination); this.sfxBus = C.createGain(); this.sfxBus.connect(this.master); this.musBus = C.createGain(); this.musBus.connect(this.master);
    const len = C.sampleRate * 2.5, buf = C.createBuffer(2, len, C.sampleRate); for (let ch = 0; ch < 2; ch++) { const d = buf.getChannelData(ch); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3); }
    this.verb = C.createConvolver(); this.verb.buffer = buf; const vg = C.createGain(); vg.gain.value = 0.5; this.verb.connect(vg); vg.connect(this.master);
    this.apply(); this.startMusic(); } catch {} }
  apply() { if (!this.ctx) return; this.master.gain.value = this.muted ? 0 : 1; this.sfxBus.gain.value = this.vol * 0.5; this.musBus.gain.value = this.music * 0.22; }
  set(vol, music) { this.vol = vol; this.music = music; this.apply(); }
  tone(f, dur = 0.12, type = 'sine', v = 0.3, slide = 0, delay = 0, bus) { if (!this.ctx) return; const C = this.ctx, t = C.currentTime + delay, o = C.createOscillator(), g = C.createGain();
    o.type = type; o.frequency.setValueAtTime(f, t); if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(30, f * slide), t + dur);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(v, t + 0.012); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(bus || this.sfxBus); if (!bus) g.connect(this.verb); o.start(t); o.stop(t + dur + 0.05); }
  noise(dur = 0.3, v = 0.2, freq = 800) { if (!this.ctx) return; const C = this.ctx, len = C.sampleRate * dur, b = C.createBuffer(1, len, C.sampleRate), d = b.getChannelData(0); for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    const s = C.createBufferSource(), f = C.createBiquadFilter(), g = C.createGain(); s.buffer = b; f.type = 'bandpass'; f.frequency.value = freq; g.gain.setValueAtTime(v, C.currentTime); g.gain.exponentialRampToValueAtTime(0.001, C.currentTime + dur); s.connect(f); f.connect(g); g.connect(this.sfxBus); s.start(); }
  ui() { this.tone(1200, 0.05, 'sine', 0.07); }
  hover() { this.tone(1800, 0.03, 'sine', 0.025); }
  buy() { this.tone(660, 0.08, 'triangle', 0.16); this.tone(990, 0.12, 'triangle', 0.14, 0, 0.05); }
  deny() { this.tone(200, 0.12, 'square', 0.05, 0.7); }
  pop(k = 0) { this.tone(500 + Math.random() * 300 + k * 60, 0.09, 'sine', 0.12, 1.8); }
  hit() { this.tone(1400 + Math.random() * 400, 0.03, 'triangle', 0.025); }
  hurt() { this.noise(0.25, 0.25, 300); this.tone(140, 0.2, 'sawtooth', 0.08, 0.6); }
  bomb() { this.noise(0.4, 0.3, 500); this.tone(220, 0.3, 'sine', 0.15, 0.5); }
  critter() { [880, 1108, 1318, 1760].forEach((f, i) => this.tone(f, 0.15, 'sine', 0.1, 0, i * 0.05)); }
  launch() { this.noise(0.8, 0.15, 400); [392, 523, 659].forEach((f, i) => this.tone(f, 0.3, 'triangle', 0.1, 0, i * 0.08)); }
  boss() { this.tone(110, 1.2, 'sawtooth', 0.08, 0.7); this.tone(82, 1.2, 'triangle', 0.1, 0.8, 0.2); }
  freed() { [523, 659, 784, 1047, 1319, 1568].forEach((f, i) => this.tone(f, 0.5, 'sine', 0.14, 0, i * 0.08)); }
  end() { [784, 659, 523, 659, 784, 1047].forEach((f, i) => this.tone(f, 0.22, 'triangle', 0.1, 0, i * 0.07)); }
  chapter() { [392, 523, 659, 784, 1047].forEach((f, i) => this.tone(f, 0.6, 'sine', 0.14, 0, i * 0.1)); }
  prestige() { this.noise(1.5, 0.2, 300); [262, 392, 523, 784, 1047, 1568].forEach((f, i) => this.tone(f, 0.9, 'triangle', 0.12, 0, 0.2 + i * 0.1)); }
  blip() { this.tone(900, 0.04, 'square', 0.03); }
  od() { this.tone(300, 0.5, 'sawtooth', 0.08, 3); }
  beam() { this.tone(1500, 1.2, 'sine', 0.12, 0.3); this.noise(1, 0.15, 1500); }
  startMusic() { const C = this.ctx; const prog = [[0, 4, 7, 11], [5, 9, 12, 16], [-3, 0, 4, 7], [2, 5, 9, 12]]; let step = 0;
    const play = () => { if (!this.ctx) return; const base = [220, 196, 174.6, 233, 207.6, 185, 164.8][this.mood] || 220, ch = prog[Math.floor(step / 8) % 4], t = C.currentTime;
      if (step % 8 === 0) ch.forEach((n, i) => { const o = C.createOscillator(), g = C.createGain(), f = C.createBiquadFilter(); o.type = 'sawtooth'; o.frequency.value = base * Math.pow(2, n / 12) / 2; o.detune.value = (i - 1.5) * 6;
        f.type = 'lowpass'; f.frequency.value = 700; g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.05, t + 1.5); g.gain.exponentialRampToValueAtTime(0.0001, t + 7.5); o.connect(f); f.connect(g); g.connect(this.musBus); g.connect(this.verb); o.start(t); o.stop(t + 8); });
      if (Math.random() < 0.6) { const n = ch[Math.floor(Math.random() * 4)] + 12 * (1 + Math.floor(Math.random() * 2)); this.tone(base * Math.pow(2, n / 12), 1.4, 'sine', 0.06, 0, 0, this.musBus); }
      step++; setTimeout(play, 1000); };
    play(); }
}
