// Optimal-player pacing sim: perfect steering, instant greedy buys, 2s between dives, timers always busy,
// prestige as soon as it pays. Uses the real game core (same dive code). Real-time gates are honoured.
import * as C from '../src/core.js';
const HOURS_MAX = +(process.argv[2] || 120), CAMP = +(process.argv[3] || 2), VERBOSE = process.argv.includes('-v');
let seed = 12345; C.setRng(() => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296));
let T = 0; const T0 = Date.UTC(2026, 10, 14, 6); C.clock.now = () => T0 + T * 1000;
const g = C.newGame(); g.seenIntro = true; let log = [], lastCh = 0, chStart = 0, runs = 0, gateWait = 0;
const h = s => (s / 3600).toFixed(2) + 'h';
function bot(run) { // dodge blobs/bullets, grab critters/chests, rush when clear
  let best = run.x, bs = -1e9; for (let x = -10.5; x <= 10.5; x += 0.75) { let s = -Math.abs(x - run.x) * 0.15;
    for (const b of run.blobs) { const rel = b.d - run.d; if (rel < -1 || rel > 16) continue; const dx = Math.abs(b.x - x);
      if (b.kind === 'critter' || b.kind === 'chest') { if (dx < 2) s += 6 / (1 + rel * 0.2); } else if (dx < b.r + 1.6) s -= 10 / (1 + rel * 0.4); }
    for (const u of run.bullets) { const rel = u.d - run.d; if (rel < -1 || rel > 8) continue; const tt = Math.max(0, rel) / Math.max(1, -u.vd + 1), px = u.x + u.vx * Math.min(tt, 1); if (Math.abs(px - x) < 1.6) s -= 8 / (1 + rel * 0.3); }
    if (s > bs) { bs = s; best = x; } }
  const near = run.blobs.some(b => b.kind !== 'critter' && b.d - run.d < 30 && b.d > run.d - 1);
  return { x: Math.max(-1, Math.min(1, (best - run.x) * 1.2)), y: near ? 0 : 1, od: !!run.boss || run.blobs.length > 8, beam: !!run.boss };
}
const score = u => 1; // greedy-cheapest within each currency
function reserve(g) { const ci = g.chapter; if (ci >= C.CHAPTERS.length) return {}; const pc = C.projCost(g, ci); const c = C.CHAPTERS[ci]; const r = {}; if (g.chState === 'goal') r[pc.mat] = pc.n; if (c.g[0] === 'mat') r[C.WORLDS[c.w].mat] = (r[C.WORLDS[c.w].mat] || 0) + c.g[1]; if (g.chState === 'build' && ci + 1 < C.CHAPTERS.length) { const n = C.projCost(g, ci + 1); r[n.mat] = (r[n.mat] || 0) + n.n; } return r; }
function hub() {
  for (const e of C.tickTimers(g)) {} C.claimProject(g);
  if (g.chState === 'goal') C.startProject(g); C.claimProject(g);
  for (let i = g.exps.length - 1; i >= 0; i--) C.claimExp(g, i);
  C.ensureDaily(g); g.daily?.list.forEach((c, i) => C.claimDaily(g, i));
  // prestige decisions
  const c = C.CHAPTERS[g.chapter], goal = g.chState === 'goal' && !C.goalDone(g) ? c?.g[0] : null;
  const stuck = g._stuck >= 3;
  const mg = C.moonGain(g); if (C.has(g, 'moon') && mg >= 1 && (goal === 'moon' || mg >= Math.max(2, 0.6 * (g.moonstones + spentM())) && g._sinceRip >= 3)) { C.doMoon(g); g._sinceRip = 0; g._sinceTide = 0; log.push(`  ${h(T)} Moonrise +${C.fmt(mg)}`); }
  const tg = C.tridentGain(g); if (C.has(g, 'rip') && tg >= 1 && (goal === 'rip' || tg >= Math.max(2, 0.6 * (g.tridents + spentT())) && g._sinceTide >= 0 && g._ripTides >= 3)) { C.doRip(g); g._sinceRip++; g._ripTides = 0; g._sinceTide = 0; if (VERBOSE) log.push(`  ${h(T)} Riptide +${C.fmt(tg)}`); }
  const pg = C.pearlGain(g), P0 = C.tideP(g); if (C.has(g, 'tide') && pg >= 1 && g._sinceTide >= 2 && (goal === 'tide' || pg >= 0.5 * (g.pearls + spentP()) || (stuck && pg >= 0.1 * (g.pearls + spentP())))) { C.doTide(g); g._sinceTide = 0; g._ripTides++; g._stuck = 0; if (VERBOSE) log.push(`  ${h(T)} Ebb +${C.fmt(pg)} P=${P0 | 0}`); }
  // trees: buy cheapest repeatedly
  for (const [tree, L, key, cur] of [['pearl', C.PEARL_TREE, 'ptree', 'pearls'], ['trident', C.TRIDENT_TREE, 'ttree', 'tridents'], ['moon', C.MOON_TREE, 'mtree', 'moonstones']]) for (let k = 0; k < 200; k++) { let b = null, bc = 1e300; for (const n of L) { const l = g[key][n.id] | 0; if (l >= n.max || (n.req && !g[key][n.req])) continue; const cc = C.treeCost(n, l); if (cc < bc) { bc = cc; b = n; } } if (!b || bc > g[cur] || !C.buyTree(g, tree, b.id)) break; }
  if (g.ptree.p_pal && !g.companion) g.companion = 'dolphin';
  // research & expeditions
  for (const r of [...C.RESEARCH].sort((a, b) => C.resTime(g, a, g.research[a.id] | 0) - C.resTime(g, b, g.research[b.id] | 0))) C.startResearch(g, r.id);
  while (C.has(g, 'exp') && g.exps.length < C.expSlots(g)) C.startExp(g, C.topWorld(g), 10);
  // gear
  while (g.boxes.length) C.openBox(g);
  for (const s of Object.keys(C.GEAR_SLOTS)) { const best = g.gear.filter(x => x.slot === s).sort((a, b) => C.gearPower(g, b) - C.gearPower(g, a))[0]; if (best) C.equip(g, best.id); }
  for (const it of [...g.gear]) C.salvage(g, it.id);
  for (let k = 0; k < 50; k++) { let did = false; for (const id of Object.values(g.equip)) did = C.gearUp(g, id) || did; if (!did) break; }
  const R = reserve(g); if (C.has(g, 'gear')) for (let k = 0; k < 4; k++) { const cc = C.craftCost(g, C.topWorld(g)); if (g.mats[cc.mat] - (R[cc.mat] || 0) < cc.matN * 3 || !C.craft(g, Object.keys(C.GEAR_SLOTS)[k])) break; }
  // crew
  for (let k = 0; k < 100; k++) { let b = null, bc = 1e9; for (const m in g.crew) { if (!C.crewOpen(g, m)) continue; const cc = C.crewCost(g.crew[m]); if (cc < bc && g.crew[m] < 40) { bc = cc; b = m; } } if (!b || !C.trainCrew(g, b)) break; }
  // workshop: cheapest-first per currency, keeping reserves
  for (let k = 0; k < 2000; k++) { let b = null, bf = 1e300; for (const u of C.UPGRADES) { if (!C.upgAvail(g, u) || (g.upg[u.id] | 0) >= u.max) continue; const cc = C.upgCost(u, g.upg[u.id] | 0), have = C.curOf(g, u.cur) - (R[u.cur] || 0); if (cc > have) continue; const f = cc / Math.max(1e-9, have); if (f < bf) { bf = f; b = u; } } if (!b) break; C.buyUpg(g, b.id); }
  C.checkAchs(g);
}
const spentP = () => C.PEARL_TREE.reduce((a, n) => { let s = 0; for (let l = 0; l < (g.ptree[n.id] | 0); l++) s += C.treeCost(n, l); return a + s; }, 0);
const spentT = () => C.TRIDENT_TREE.reduce((a, n) => { let s = 0; for (let l = 0; l < (g.ttree[n.id] | 0); l++) s += C.treeCost(n, l); return a + s; }, 0);
const spentM = () => C.MOON_TREE.reduce((a, n) => { let s = 0; for (let l = 0; l < (g.mtree[n.id] | 0); l++) s += C.treeCost(n, l); return a + s; }, 0);
function viable(w) { const S = C.stats(g); return C.worldOpen(g, w) && C.blobHp(w, 0) <= S.dmg * S.rate * 2; }
function pickWorld() { const c = C.CHAPTERS[g.chapter]; let gw = -1; if (c && g.chState === 'goal' && (c.g[0] === 'dist' || c.g[0] === 'boss')) gw = c.g[2]; if (c && g.chState === 'goal' && c.g[0] === 'mat') gw = c.w;
  let bw = 0, br = -1; for (let w = 0; w < 7; w++) if (viable(w)) { const r = C.gP(w, g.best[w]); if (r >= br) { bw = w; br = r; } }
  if (gw >= 0 && viable(gw)) return gw; return bw; }
const deaths = {}, rl = [0, 0, 0, 0]; let stall = 0, lastBuyT = 0, stalls = 0, nothingRuns = 0; g._sinceTide = 0; g._sinceRip = 0; g._ripTides = 0; g._stuck = 0;
while (!g.finished && T < HOURS_MAX * 3600) {
  const before = JSON.stringify(g.upg) + JSON.stringify(g.ptree) + JSON.stringify(g.research) + g.chapter + g.gear.length + JSON.stringify(g.crew);
  hub();
  const after = JSON.stringify(g.upg) + JSON.stringify(g.ptree) + JSON.stringify(g.research) + g.chapter + g.gear.length + JSON.stringify(g.crew);
  if (before === after && runs > 0) nothingRuns++;
  if (g.chapter !== lastCh) { log.push(`ch${String(lastCh + 1).padStart(2)} ${C.CHAPTERS[lastCh].t.padEnd(24)} done at ${h(T).padStart(7)}  (+${((T - chStart) / 60).toFixed(0)}m, gate ${(C.projTime(lastCh) / 60).toFixed(0)}m) runs=${runs} tides=${g.n.tides} rips=${g.n.rips} moons=${g.n.moons}`); lastCh = g.chapter; chStart = T; }
  if (g.finished) break;
  const w = pickWorld(), run = C.newRun(g, w); while (!run.over) C.stepRun(g, run, 1 / 20, bot(run));
  const pb = C.tideP(g); C.finishRun(g, run); g._stuck = C.tideP(g) > pb ? 0 : g._stuck + 1; runs++; g._sinceTide++; deaths[run.reason] = (deaths[run.reason] || 0) + 1; rl[run.t < 10 ? 0 : run.t < 30 ? 1 : run.t < 90 ? 2 : 3]++; T += run.t + CAMP;
  if (VERBOSE && runs % 200 === 0) log.push(`    run ${runs} T=${h(T)} w${w} d=${run.maxD.toFixed(0)} t=${run.t.toFixed(0)}s ch=${g.chapter} ${g.chState}`);
}
log.push(`${g.finished ? 'STORY COMPLETE' : 'NOT FINISHED'} at ${h(T)} after ${runs} dives (camp ${CAMP}s/dive). Dives with nothing new bought afterwards: ${(nothingRuns / runs * 100).toFixed(1)}%`);
log.push('run endings: ' + JSON.stringify(deaths) + ' lengths <10s/10-30/30-90/90+: ' + rl.join('/'));
log.push(`tides=${g.n.tides} rips=${g.n.rips} moons=${g.n.moons} friends=${C.friendCount(g)} crew=${C.crewTotal(g)} achs=${C.achCount(g)}/${C.ACHS.length} maxRar=${g.n.maxRar} best=${g.bestEver.map(x => x.toFixed(0)).join('/')}`);
const gates = C.CHAPTERS.reduce((a, _, i) => a + C.projTime(i), 0); log.push(`sum of Ark gates: ${h(gates)}`);
console.log(log.join('\n'));
if (process.argv.includes('-d')) { const U = g.upg; console.log(JSON.stringify(U)); console.log('R', JSON.stringify(g.research), 'P', JSON.stringify(g.ptree), 'T', JSON.stringify(g.ttree), 'M', JSON.stringify(g.mtree)); const S = C.stats(g); console.log('dmg', S.dmg.toExponential(2), 'shell', S.shell.toExponential(2), 'hull', S.hull.toExponential(2), 'bomb', S.bomb.toExponential(2), 'rate', S.rate, 'multi', S.multi, 'oxy', S.oxy, 'speed', S.speed, 'start', S.start, 'best', g.best.map(x=>x|0).join('/')); }
if (process.argv.includes('-d')) { for (const w of [0,3,6]) { const d = g.best[w]; console.log('w', w, 'd', d|0, 'hp', C.blobHp(w, d).toExponential(2), 'contact', C.contactDmg(w, d).toExponential(2)); } }
