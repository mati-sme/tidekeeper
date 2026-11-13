// Tidekeeper entry: game loop, input, run lifecycle, story flow, save/offline.
import * as C from './core.js';
import { Scene3D } from './render.js';
import { Sfx } from './sfx.js';
import { createUI } from './ui.js';
const $ = s => document.querySelector(s);
const G = window.__tk = { g: C.load() || C.newGame(), mode: 'hub', run: null, world: 0, paused: false, keys: {}, sfx: new Sfx() };
G.world = G.g.world || 0; if (!C.worldOpen(G.g, G.world)) G.world = 0;
const scene = G.scene = new Scene3D($('#c3d'));
const ui = G.ui = createUI(G);
G.save = () => C.save(G.g);
G.applySettings = () => { const s = G.g.settings; G.sfx.set(s.vol, s.music); if (scene.quality !== s.quality) scene.setQuality(s.quality); G.save(); };
G.toggleMute = () => { G.sfx.muted = !G.sfx.muted; G.sfx.apply(); $('#btn-mute').textContent = G.sfx.muted ? '🔇' : '🔊'; ui.toast(G.sfx.muted ? '🔇' : '🔊', G.sfx.muted ? 'Sound off' : 'Sound on'); };
G.replaceSave = g => { G.g = g; G.world = 0; G.save(); ui.render(true); };
G.hardReset = () => { localStorage.removeItem(C.SAVE_KEY); G.g = C.newGame(); G.world = 0; location.reload(); };
G.checkAchs = () => { for (const a of C.checkAchs(G.g)) ui.toast('🏅', `Achievement: ${a.name}`, `${a.desc} · +3% power`, 'gold'); };
G.launch = w => { if (G.mode !== 'hub' || ui.topModal() || ui.inDialog()) return; if (!C.worldOpen(G.g, w)) return; G.sfx.unlock(); G.sfx.launch(); G.world = w; G.run = C.newRun(G.g, w); G.mode = 'run'; G.paused = false; G.sfx.mood = w;
  $('#app').className = 'run'; $('#tip').classList.remove('show'); if (G.g.n.runs === 0) setTimeout(() => ui.toast('🎮', 'Steer with WASD or the arrow keys', 'Your harpoons aim and fire on their own. Dodge the Gloom!'), 600); };
function endRun() { const run = G.run, res = C.finishRun(G.g, run); G.mode = 'summary'; G.sfx.end(); G.save();
  for (const f of run.newFriends) ui.toast('💖', `${f.name} the ${f.kind} is free!`, 'A new Friend joins the Ark', 'gold');
  G.checkAchs(); const toHub = () => { G.mode = 'hub'; G.run = null; $('#app').className = 'hub'; ui.render(true); storyPing(); };
  ui.summary(run, res, () => { toHub(); G.launch(G.world); }, toHub); }
G.pause = () => { if (G.mode !== 'run' || G.paused) return; G.paused = true; ui.modal({ title: '⏸ Paused', body: '<div class="muted">Take a breather. The Gloom will wait.</div>', buttons: [{ label: '⚙️ Settings', keep: true, onClick: () => ui.settings() }, { label: '🏁 Surface now', cls: 'btn-coral', onClick: () => { G.paused = false; G.run.over = true; G.run.reason = 'quit'; } }, { label: '▶ Resume', cls: 'btn-primary', key: 'Enter', onClick: () => { G.paused = false; } }], onClose: () => { G.paused = false; } }); };
G.claimChapter = () => { const g = G.g, before = g.chapter; if (!C.claimProject(g)) return; G.sfx.chapter(); G.save();
  ui.toast('✨', `Chapter ${before + 1} complete!`, C.CHAPTERS[before].proj + ' restored', 'gold');
  for (const [f, ch] of Object.entries(C.FEATURE_CH)) if (ch === g.chapter) ui.toast('🔓', 'New: ' + { lab: "Luma's Lab", tide: 'Ebb Tide', exp: 'Voyages', daily: 'Daily contracts', crew: 'Crew training', gear: "Tusk's Forge", rip: 'Riptide', moon: 'Moonrise' }[f], 'Check the menu on the left', 'good');
  C.WORLDS.forEach((w, i) => { if (C.worldOpenCh(i) === g.chapter && i > 0) ui.toast(w.icon, `New sea: ${w.name}`, w.desc, 'good'); });
  G.checkAchs(); ui.render(); if (g.finished) { ui.modal({ title: '🌕 The Moon Lantern shines!', sub: 'You finished the story of Tidekeeper.', body: '<div class="muted">The sea is bright again and every friend is home. Keep diving in endless mode: chase records, Mythic gear, every achievement and deeper Moonrises.</div>', buttons: [{ label: 'Hooray!', cls: 'btn-primary', key: 'Enter' }] }); return; }
  ui.say(C.CHAPTERS[g.chapter].lines); };
G.confirmPrestige = kind => { const g = G.g, info = { tide: ['🌊 Ebb Tide?', `You gain <b>${C.fmt(C.pearlGain(g))} 🦪 Pearls</b>.`, 'Shells, Workshop Shell upgrades and this Tide\'s best depths reset.', C.doTide, '🦪'], rip: ['🌀 Riptide?', `You gain <b>${C.fmt(C.tridentGain(g))} 🔱 Tridents</b>.`, 'Pearls, the Pearl tree, material upgrades and materials also reset.', C.doRip, '🔱'], moon: ['🌕 Moonrise?', `You gain <b>${C.fmt(C.moonGain(g))} 🌙 Moonstones</b>.`, 'Tridents and the Trident tree also reset, plus everything a Riptide resets.', C.doMoon, '🌙'] }[kind];
  ui.modal({ title: info[0], sub: info[1], body: `<div class="muted">${info[2]}</div><div style="margin-top:10px" class="good small">Always kept: story, Lab research, gear, crew, friends, achievements and voyages.</div>`, buttons: [{ label: 'Not yet' }, { label: 'Do it!', cls: kind === 'moon' ? 'btn-violet' : 'btn-teal', key: 'Enter', onClick: () => { const n = info[3](g); if (n) { G.sfx.prestige(); scene.shake = 0.6; ui.toast(info[4], `+${C.fmt(n)}`, 'You feel the tide\'s power', 'gold'); G.world = Math.min(G.world, C.topWorld(g)); G.save(); G.checkAchs(); ui.render(); } } }] }); };
function storyPing() { const g = G.g; if (g.finished) return; if (g.chState === 'goal' && C.goalDone(g) && !G._pinged?.[g.chapter]) { (G._pinged ??= {})[g.chapter] = 1; ui.toast('🎯', 'Mission complete!', 'Start the restoration in the mission panel', 'good'); } }
// ---------- input ----------
addEventListener('keydown', e => { const k = e.code; G.keys[k] = true; if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT' && e.target.type !== 'range') return; G.sfx.unlock();
  if (!$('#title').classList.contains('hide')) { if (k === 'Space' || k === 'Enter') { e.preventDefault(); startGame(); } return; }
  if (ui.inDialog()) { if (k === 'Space' || k === 'Enter' || k === 'Escape') { e.preventDefault(); ui.dlgNext(); } return; }
  const top = ui.topModal(); if (top) { e.preventDefault(); const b = top.buttons.find(b => (b.key === ' ' && k === 'Space') || (b.key === 'Enter' && (k === 'Enter' || (k === 'Space' && !top.buttons.some(x => x.key === ' ')))) || (b.key === 'Esc' && k === 'Escape')); if (b) b.el.click(); else if (k === 'Escape' && top.dismiss) top.close(); return; }
  if (G.mode === 'run') { if (k === 'KeyP' || k === 'Escape') G.pause(); if (k === 'Space') e.preventDefault(); return; }
  if (G.mode !== 'hub') return;
  if (k === 'Space') { e.preventDefault(); G.launch(G.world); } else if (/^Digit[1-9]$/.test(k)) ui.setTab(['dive', 'story', 'shop', 'lab', 'exp', 'forge', 'crew', 'tides', 'log'][+k.slice(5) - 1]);
  else if (k === 'KeyM') G.toggleMute(); else if (k === 'KeyO') ui.settings(); });
addEventListener('keyup', e => { G.keys[e.code] = false; });
addEventListener('blur', () => { G.keys = {}; });
document.addEventListener('pointerdown', () => G.sfx.unlock(), { once: true });
function input() { const K = G.keys; return { x: (K.KeyD || K.ArrowRight ? 1 : 0) - (K.KeyA || K.ArrowLeft ? 1 : 0), y: (K.KeyW || K.ArrowUp ? 1 : 0) - (K.KeyS || K.ArrowDown ? 1 : 0), od: !!K.Space, beam: !!K.KeyE }; }
// ---------- loop ----------
let last = performance.now(), acc = 0, tickT = 0, saveT = 0, lastHull = 0;
function frame(now) { requestAnimationFrame(frame); const dt = Math.min(0.05, (now - last) / 1000); last = now;
  if (G.mode === 'run' && !G.paused && !ui.topModal()) { const run = G.run; acc += dt; const fxStart = run.fx.length; lastHull = run.hull;
    while (acc >= 1 / 60) { C.stepRun(G.g, run, 1 / 60, input()); acc -= 1 / 60; if (run.over) break; }
    for (const f of run.fx) { if (f.t === 'pop') G.sfx.pop(f.big ? 2 : 0); else if (f.t === 'hurt') G.sfx.hurt(); else if (f.t === 'bomb') G.sfx.bomb(); else if (f.t === 'critter') { G.sfx.critter(); ui.toast('🐠', 'Critter rescued!'); } else if (f.t === 'boss') G.sfx.boss(); else if (f.t === 'bossdown') G.sfx.freed(); else if (f.t === 'od') G.sfx.od(); else if (f.t === 'beam') G.sfx.beam(); else if (f.t === 'hit' && Math.random() < 0.3) G.sfx.hit(); }
    if (!G.g.settings.shake) scene.shake = 0;
    ui.hud(run); if (run.over) { scene.render(dt, G.g, run); endRun(); return; } }
  scene.render(dt, G.g, G.mode === 'run' || G.mode === 'summary' ? G.run : null); if (!G.g.settings.shake) scene.shake = 0;
  tickT += dt; if (tickT > 0.25) { tickT = 0; for (const e of C.tickTimers(G.g)) { if (e.type === 'research') { const r = C.RESEARCH.find(r => r.id === e.id); ui.toast(r.icon, `${r.name} finished!`, `Now level ${G.g.research[e.id]}`, 'good'); G.save(); if (G.mode === 'hub') ui.render(); } else if (e.type === 'project' && !G._projPing) { G._projPing = G.g.projEnd; ui.toast('🔨', 'Restoration ready!', 'Finish it in the mission panel', 'good'); if (G.mode === 'hub') ui.refreshRail(); } }
    if (G._projPing && G._projPing !== G.g.projEnd) G._projPing = 0; if (G.mode === 'hub') { ui.tick(); scene.setArkProgress(G.g.finished ? 48 : G.g.chapter); scene.setWorld(G.world); } }
  saveT += dt; if (saveT > 10) { saveT = 0; G.save(); if (G.mode === 'hub') ui.refreshRail(); } }
// ---------- boot ----------
function startGame() { $('#title').classList.add('hide'); G.sfx.unlock(); G.g.seenIntro = true; G.save(); ui.say(C.CHAPTERS[0].lines); }
G.applySettings(); ui.render(true); scene.setArkProgress(G.g.chapter);
if (!G.g.seenIntro) { $('#title').classList.remove('hide'); $('#btn-start').onclick = startGame; }
else { const off = C.offline(G.g), ev = C.tickTimers(G.g), ready = G.g.exps.filter(e => C.clock.now() >= e.end).length;
  if (off && off.secs > 120) { const done = ev.filter(e => e.type === 'research').map(e => C.RESEARCH.find(r => r.id === e.id).name);
    ui.modal({ title: '🌙 Welcome back!', sub: `You were away for ${C.fmtTime(off.secs)}.`, body: `<div class="loot"><div class="li hl"><b>🐚 ${C.fmt(off.shell)}</b><span class="small muted">Tidal drift Shells</span></div>${done.length ? `<div class="li"><b>🧪 ${done.length}</b><span class="small muted">Research finished</span></div>` : ''}${ready ? `<div class="li"><b>⛵ ${ready}</b><span class="small muted">Voyages back home</span></div>` : ''}${G.g.chState === 'build' && C.clock.now() >= G.g.projEnd ? '<div class="li hl"><b>🔨 Ready</b><span class="small muted">Restoration finished</span></div>' : ''}</div>`, buttons: [{ label: "Let's go!", cls: 'btn-primary', key: 'Enter' }] }); }
  G.save(); ui.render(true); }
addEventListener('beforeunload', () => G.save()); document.addEventListener('visibilitychange', () => { if (document.hidden) G.save(); });
requestAnimationFrame(frame);
