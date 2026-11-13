// Tidekeeper core: state, stats, the dive simulation (shared by the game and the headless sim), timers, prestige, save.
import { WORLDS, FRIENDS, CREW, UPGRADES, RESEARCH, PEARL_TREE, TRIDENT_TREE, MOON_TREE, RARITY, GEAR_SLOTS, AFFIXES, RELICS, EXP_TIMES, CHAPTERS, projTime, FEATURE_CH, CREW_CH, BOSS_EVERY, FINAL_BOSS_AT } from './data.js';
export * from './data.js';
export const clock = { now: () => Date.now() };
export const SAVE_KEY = 'tidekeeper-save-v1';
const MATS = WORLDS.map(w => w.mat);
let rng = Math.random; export const setRng = f => { rng = f; };

export function newGame() {
  const m = {}; MATS.forEach(k => m[k] = 0);
  return { v: 1, created: clock.now(), seenIntro: false, chapter: 0, chState: 'goal', projEnd: 0, finished: false,
    shell: 0, mats: { ...m }, upg: {}, research: {}, labQ: [], pearls: 0, ptree: {}, tridents: 0, ttree: {}, moonstones: 0, mtree: {},
    tideShells: 0, ripPearls: 0, moonTri: 0, best: WORLDS.map(() => 0), bestEver: WORLDS.map(() => 0), bossMax: WORLDS.map(() => 0),
    friends: FRIENDS.map(() => false), crew: { marlo: 0, pebble: 0, luma: 0, wren: 0, tusk: 0, nyx: 0, orla: 0 }, critters: 0, scrap: 0,
    gear: [], equip: {}, gearId: 1, boxes: [], relics: [], exps: [], daily: null, achs: {}, companion: null, world: 0,
    n: { tides: 0, rips: 0, moons: 0, runs: 0, kills: 0, bosses: 0, critters: 0, dailies: 0, exps: 0, maxRar: -1, crafted: 0 },
    rate: WORLDS.map(() => 0), lastSave: clock.now(), settings: { vol: 0.7, music: 0.5, quality: 'high', shake: true, tips: true } };
}
const lv = (o, k) => o[k] | 0;
export const has = (g, f) => g.chapter >= FEATURE_CH[f] || g.finished;
const OPEN_CH = WORLDS.map((_, w) => w === 0 ? 0 : CHAPTERS.findIndex(c => c.g[2] === w));
export const worldOpenCh = w => OPEN_CH[w];
export const worldOpen = (g, w) => w === 0 || g.finished || g.chapter >= OPEN_CH[w];
export const crewOpen = (g, k) => g.finished || g.chapter >= CREW_CH[k];
export const friendCount = g => g.friends.filter(Boolean).length;
export const crewTotal = g => Object.values(g.crew).reduce((a, b) => a + b, 0);
export const achCount = g => Object.keys(g.achs).length;

// ---------- Stats ----------
export function gearPower(g, it) { return (1 + it.r * 0.8) * (1 + 0.6 * it.tier) * (1 + 0.12 * it.lvl) * (1 + CREW.tusk.per * g.crew.tusk); }
export function stats(g) {
  const U = g.upg, R = g.research, P = g.ptree, T = g.ttree, M = g.mtree, C = g.crew;
  const fr = { shell: 1, dmg: 1, mat: 1, rate: 1, hull: 1, crit: 0 };
  g.friends.forEach((f, i) => { if (!f) return; const s = FRIENDS[i].stat; if (s === 'crit') fr.crit += 0.01; else fr[s] += s === 'rate' ? 0.04 : 0.08; });
  const ach = Math.pow(1.03, achCount(g)), relic = k => g.relics.includes(k) ? 1 : 0;
  const ge = { dmg: 1, hull: 1, oxy: 0, shell: 1, crit: 0, mat: 0, boss: 0, rate: 0, speed: 0 };
  for (const s in g.equip) { const it = g.gear.find(x => x.id === g.equip[s]); if (!it) continue; const p = gearPower(g, it);
    if (s === 'harpoon') ge.dmg *= 1 + 0.3 * p; if (s === 'hull') ge.hull *= 1 + 0.4 * p; if (s === 'engine') ge.oxy += 0.8 * p; if (s === 'charm') ge.shell *= 1 + 0.3 * p;
    if (it.aff) ge[it.aff.k] += it.aff.v / 100; }
  const orla = 1 + CREW.orla.per * C.orla;
  const K = Math.pow(1.2, lv(R, 'r_dmg')) * Math.pow(1.3, lv(P, 'p_dmg')) * Math.pow(1.5, lv(T, 't_dmg')) * Math.pow(1.8, lv(M, 'm_all')) * ach * orla;
  const dmg = Math.pow(1.1, lv(U, 'dmg')) * Math.pow(1.15, lv(U, 'reef')) * Math.pow(1.15, lv(U, 'gears')) * Math.pow(1.12, lv(U, 'lance')) * Math.pow(1.1, lv(U, 'forge')) * Math.pow(1.1, lv(U, 'glowl')) * Math.pow(1.15, lv(U, 'lunar'))
    * Math.pow(1.2, lv(R, 'r_dmg')) * Math.pow(1.3, lv(P, 'p_dmg')) * Math.pow(1.5, lv(T, 't_dmg')) * Math.pow(1.8, lv(M, 'm_all')) * fr.dmg * ach * orla * ge.dmg * (relic(0) ? 2 : 1);
  const shell = Math.pow(1.06, lv(U, 'shell')) * Math.pow(1.1, lv(U, 'kcoil')) * Math.pow(1.12, lv(U, 'glowl')) * Math.pow(1.15, lv(U, 'lunar')) * Math.pow(1.2, lv(R, 'r_shell')) * Math.pow(1.3, lv(P, 'p_shell'))
    * Math.pow(1.5, lv(T, 't_mat')) * Math.pow(1.8, lv(M, 'm_all')) * fr.shell * ach * orla * ge.shell * (1 + CREW.marlo.per * C.marlo) * (relic(2) ? 2 : 1);
  const mat = Math.pow(1.1, lv(U, 'kcoil')) * Math.pow(1.2, lv(R, 'r_mat')) * Math.pow(1.25, lv(P, 'p_mat')) * Math.pow(1.5, lv(T, 't_mat')) * fr.mat * (1 + ge.mat) * (relic(6) ? 2 : 1);
  const rate = 2.5 * (1 + 0.06 * lv(U, 'rate')) * fr.rate * (1 + ge.rate);
  const hull = 150 * K * Math.pow(1.15, lv(U, 'hull')) * Math.pow(1.08, lv(U, 'gears')) * fr.hull * ge.hull * (g.companion === 'turtle' ? 1.5 : 1);
  const oxy = 40 + 3 * lv(U, 'oxy') + 4 * lv(R, 'r_oxy') + 3 * lv(P, 'p_oxy') + CREW.pebble.per * C.pebble + ge.oxy + (relic(5) ? 10 : 0);
  const crit = Math.min(0.75, 0.05 + 0.02 * lv(U, 'crit') + fr.crit + ge.crit), critMul = 3 + 0.04 * lv(U, 'lance') + 0.3 * lv(R, 'r_crit') + CREW.nyx.per * C.nyx;
  const boss = Math.pow(1.2, lv(U, 'forge')) * Math.pow(1.3, lv(R, 'r_boss')) * (1 + ge.boss);
  const start = Math.min(0.9, 0.04 * lv(U, 'start') + 0.03 * lv(R, 'r_start') + 0.04 * lv(P, 'p_start') + 0.05 * lv(M, 'm_start') + (relic(1) ? 0.05 : 0));
  const pal = Math.pow(1.3, lv(P, 'p_palp'));
  return { dmg, shell, mat, rate, hull, oxy, crit, critMul, boss, start, pal, speed: 10 * (1 + 0.04 * lv(U, 'speed')) * (1 + ge.speed),
    multi: 1 + lv(U, 'multi'), bomb: lv(U, 'bomb') ? dmg * 4 * Math.pow(1.08, lv(U, 'bomb') - 1) * (relic(3) ? 3 : 1) : 0,
    od: lv(T, 't_od') ? { dur: 6 + lv(T, 't_odp'), cd: Math.max(8, 25 - lv(T, 't_odp')) } : null,
    beam: lv(M, 'm_beam') ? { pow: 30 * Math.pow(1.5, lv(M, 'm_beamp')), cd: 30 } : null };
}
// Difficulty is a function of global depth P = 1000*world + metres. Gentle early slope, steep later.
export const gP = (w, d) => 1000 * w + 75 * w * (w - 1) + d;
const H = P => 0.016 * P - 7.5 * (1 - Math.exp(-P / 600));
export const blobHp = (w, d) => 1.6 * Math.exp(H(gP(w, d)));
export const blobRew = (w, d) => 2 * Math.exp(0.0035 * gP(w, d));
export const matAmt = d => Math.pow(1.0028, d);
export const contactDmg = (w, d) => 4 * Math.pow(blobHp(w, d) / 1.6, 0.8);

// ---------- Costs ----------
export const upgCost = (u, l) => u.base * Math.pow(u.g, l);
export const curOf = (g, cur) => cur === 'shell' ? g.shell : g.mats[cur];
const spend = (g, cur, n) => { if (cur === 'shell') g.shell -= n; else g.mats[cur] -= n; };
export function upgAvail(g, u) { if (u.ch && g.chapter < u.ch && !g.finished) return false; if (u.cur !== 'shell') return worldOpen(g, MATS.indexOf(u.cur)); return true; }
export function buyUpg(g, id) { const u = UPGRADES.find(x => x.id === id), l = lv(g.upg, id); if (!upgAvail(g, u) || l >= u.max) return false; const c = upgCost(u, l); if (curOf(g, u.cur) < c) return false; spend(g, u.cur, c); g.upg[id] = l + 1; return true; }
export const treeCost = (n, l) => Math.ceil(n.base * Math.pow(n.g, l));
const TREES = { pearl: [PEARL_TREE, 'ptree', 'pearls'], trident: [TRIDENT_TREE, 'ttree', 'tridents'], moon: [MOON_TREE, 'mtree', 'moonstones'] };
export function buyTree(g, tree, id) { const [L, key, cur] = TREES[tree], n = L.find(x => x.id === id), l = lv(g[key], id); if (l >= n.max || (n.req && !g[key][n.req])) return false; const c = treeCost(n, l); if (g[cur] < c) return false; g[cur] -= c; g[key][id] = l + 1; return true; }

// ---------- Research (real time, offline) ----------
export const resTime = (g, r, l) => r.t * Math.pow(r.tg, l) * Math.max(0.5, 1 - CREW.luma.per * g.crew.luma);
export const resCost = (r, l) => r.c * Math.pow(r.cg, l);
export const labSlots = g => 1 + lv(g.ttree, 't_lab');
export function startResearch(g, id) { const r = RESEARCH.find(x => x.id === id), l = lv(g.research, id) + g.labQ.filter(q => q.id === id).length;
  if (!has(g, 'lab') || g.labQ.length >= labSlots(g) || l >= r.max || g.labQ.some(q => q.id === id) || (r.ch && g.chapter < r.ch)) return false; const c = resCost(r, l); if (g.shell < c) return false;
  g.shell -= c; const now = clock.now(); g.labQ.push({ id, start: now, end: now + resTime(g, r, l) * 1000 }); return true; }

// ---------- Expeditions ----------
export const expSlots = g => 1 + lv(g.ttree, 't_exp');
export function expHaul(g, w, m) { const S = stats(g), d = g.bestEver[w] * 0.75, k = Math.pow(m, 0.92) * (1 + 0.2 * lv(g.research, 'r_exp')) * (1 + CREW.wren.per * g.crew.wren) * (1 + 0.02 * friendCount(g));
  return { shell: blobRew(w, d) * S.shell * k * 14, mat: matAmt(d) * S.mat * k * 1.2, w, critters: Math.floor(m / 15 + 1), scrap: Math.round(m * 0.8 * (1 + w * 0.3)), box: m >= 60 ? Math.floor(m / 120) + 1 : 0 }; }
export function startExp(g, w, m) { if (!has(g, 'exp') || g.exps.length >= expSlots(g) || !worldOpen(g, w)) return false; const now = clock.now(); g.exps.push({ w, m, start: now, end: now + m * 60000 }); return true; }

// ---------- Gear ----------
export function rollGear(g, tier, minR = 0, slot) { let tot = 0; const ws = RARITY.map((r, i) => i < minR ? 0 : r.w * (i >= 3 ? 1 + 0.1 * g.crew.tusk : 1)); ws.forEach(w => tot += w);
  let x = rng() * tot, r = 0; for (; r < 5; r++) { x -= ws[r]; if (x <= 0) break; }
  const slots = Object.keys(GEAR_SLOTS); slot ??= slots[Math.floor(rng() * 4)]; const ak = Object.keys(AFFIXES), k = ak[Math.floor(rng() * ak.length)];
  const it = { id: g.gearId++, slot, r, tier, lvl: 0, aff: r >= 1 ? { k, v: Math.round((r + 1) * (1 + tier * 0.5) * (k === 'crit' ? 0.6 : 2.5)) } : null };
  g.n.maxRar = Math.max(g.n.maxRar, r); g.gear.push(it); return it; }
export const gearName = it => `${RARITY[it.r].name} ${GEAR_SLOTS[it.slot].names[it.tier]}`;
export const salvageVal = it => Math.round(4 * (it.r + 1) * (it.r + 1) * (it.tier + 1) * (1 + it.lvl * 0.3));
export const gearUpCost = it => Math.round(6 * (it.r + 1) * (it.tier + 1) * Math.pow(1.45, it.lvl));
export const gearMaxLvl = it => 5 + 3 * it.r;
export const craftCost = (g, tier) => ({ scrap: Math.round(30 * Math.pow(tier + 1, 1.6)), mat: WORLDS[tier].mat, matN: Math.round(80 * Math.pow(2.2, tier)) });
export function craft(g, slot) { const tier = topWorld(g), c = craftCost(g, tier); if (!has(g, 'gear') || g.scrap < c.scrap || g.mats[c.mat] < c.matN) return null; g.scrap -= c.scrap; g.mats[c.mat] -= c.matN; g.n.crafted++; return rollGear(g, tier, 1, slot); }
export function salvage(g, id) { const i = g.gear.findIndex(x => x.id === id); if (i < 0 || Object.values(g.equip).includes(id)) return false; g.scrap += salvageVal(g.gear[i]); g.gear.splice(i, 1); return true; }
export function gearUp(g, id) { const it = g.gear.find(x => x.id === id); if (!it || it.lvl >= gearMaxLvl(it)) return false; const c = gearUpCost(it); if (g.scrap < c) return false; g.scrap -= c; it.lvl++; return true; }
export function equip(g, id) { const it = g.gear.find(x => x.id === id); if (it) g.equip[it.slot] = id; }
export function openBox(g) { const b = g.boxes.shift(); if (b === undefined) return null; return rollGear(g, b); }
export const topWorld = g => { let t = 0; WORLDS.forEach((w, i) => { if (worldOpen(g, i)) t = i; }); return t; };

// ---------- Crew ----------
export const crewCost = l => Math.ceil(2 * Math.pow(1.27, l));
export function trainCrew(g, k) { if (!crewOpen(g, k) || !has(g, 'crew') || g.crew[k] >= 40) return false; const c = crewCost(g.crew[k]); if (g.critters < c) return false; g.critters -= c; g.crew[k]++; return true; }

// ---------- Story ----------
export function goalProgress(g, c = CHAPTERS[g.chapter]) { if (!c) return [1, 1]; const [t, v, w] = c.g;
  switch (t) { case 'dist': return [g.bestEver[w], v]; case 'boss': return [g.bossMax[w] >= v ? 1 : 0, 1]; case 'mat': return [g.mats[WORLDS[c.w].mat], v];
    case 'tide': return [g.n.tides, v]; case 'rip': return [g.n.rips, v]; case 'moon': return [g.n.moons, v]; case 'exp': return [g.n.exps, v];
    case 'gear': return [g.n.maxRar >= v ? 1 : 0, 1]; case 'crew': return [crewTotal(g), v]; case 'friends': return [friendCount(g), v]; }
  return [0, 1]; }
export function goalText(c) { const [t, v, w] = c.g, W = WORLDS[w ?? c.w];
  switch (t) { case 'dist': return `Reach ${v}m in ${W.name}`; case 'boss': return v === FINAL_BOSS_AT ? `Calm the Gloom Heart at ${v}m` : `Free the Guardian at ${v}m in ${W.name}`; case 'mat': return `Hold ${v} ${WORLDS[c.w].matName}`;
    case 'tide': return `Perform ${v} Ebb Tide`; case 'rip': return `Perform ${v} Riptide`; case 'moon': return `Perform ${v} Moonrise${v > 1 ? 's' : ''}`; case 'exp': return 'Complete a voyage';
    case 'gear': return `Own a ${RARITY[v].name} or better item`; case 'crew': return `Reach ${v} total crew levels`; case 'friends': return `Free ${v} Friends`; } return ''; }
export const goalDone = g => { const [a, b] = goalProgress(g); return a >= b; };
export function projCost(g, i = g.chapter) { const c = CHAPTERS[i]; const w = c.g[0] === 'mat' ? c.w : Math.min(c.w, topWorld(g)); return { mat: WORLDS[w].mat, n: c.g[0] === 'mat' ? 0 : Math.round([40, 120, 260, 500, 900, 1500, 2400][w] * (1 + (i % 6) * 0.4)) }; }
export function startProject(g) { if (g.finished || g.chState !== 'goal' || !goalDone(g)) return false; const c = projCost(g); if (g.mats[c.mat] < c.n) return false; g.mats[c.mat] -= c.n; g.chState = 'build'; g.projEnd = clock.now() + projTime(g.chapter) * 1000; return true; }
export function claimProject(g) { if (g.chState !== 'build' || clock.now() < g.projEnd) return false; g.chState = 'goal'; if (g.chapter >= CHAPTERS.length - 1) { g.finished = true; g.chapter = CHAPTERS.length; } else g.chapter++; return true; }

// ---------- Prestige ----------
export const tideP = g => Math.max(...g.best.map((b, w) => b > 0 ? gP(w, b) : 0));
export const pearlGain = g => Math.floor(Math.exp(0.005 * (tideP(g) - 400)) * Math.pow(1.4, lv(g.ttree, 't_pearl')) * (g.relics.includes(4) ? 1.5 : 1));
export const tridentGain = g => Math.floor(Math.pow(g.ripPearls, 0.4) / 4 * Math.pow(1.5, lv(g.mtree, 'm_tri')) * (g.relics.includes(7) ? 1.5 : 1));
export const moonGain = g => Math.floor(Math.pow(g.moonTri, 0.5) / 5);
function resetTide(g) { const keep = 0.1 * lv(g.ptree, 'p_keep'); const auto = lv(g.ttree, 't_auto');
  UPGRADES.filter(u => u.cur === 'shell').forEach(u => { g.upg[u.id] = Math.floor(lv(g.upg, u.id) * keep); });
  g.shell = 0; g.tideShells = 0; g.best = WORLDS.map(() => 0); if (auto) autoBuy(g, 200); }
export function doTide(g) { const p = pearlGain(g); if (!has(g, 'tide') || p < 1) return 0; g.pearls += p; g.ripPearls += p; g.n.tides++; resetTide(g); return p; }
function resetRip(g) { g.pearls = 0; g.ptree = {}; g.ripPearls = 0; UPGRADES.filter(u => u.cur !== 'shell').forEach(u => { g.upg[u.id] = 0; }); MATS.forEach(k => g.mats[k] = 0); resetTide(g); }
export function doRip(g) { const t = tridentGain(g); if (!has(g, 'rip') || t < 1) return 0; g.tridents += t; g.moonTri += t; g.n.rips++; resetRip(g); return t; }
export function doMoon(g) { const m = moonGain(g); if (!has(g, 'moon') || m < 1) return 0; g.moonstones += m; g.n.moons++; g.tridents = 0; g.ttree = {}; g.moonTri = 0; resetRip(g); return m; }
export function autoBuy(g, n = 50) { for (let i = 0; i < n; i++) { let best = null, bc = Infinity; for (const u of UPGRADES) { if (u.cur !== 'shell' || !upgAvail(g, u) || lv(g.upg, u.id) >= u.max) continue; const c = upgCost(u, lv(g.upg, u.id)); if (c < bc) { bc = c; best = u; } } if (!best || bc > g.shell) break; buyUpg(g, best.id); } }

// ---------- Daily contracts ----------
export const dayKey = t => { const d = new Date(t); return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`; };
export function ensureDaily(g) { if (!has(g, 'daily')) return; const k = dayKey(clock.now()); if (g.daily?.day === k) return; let s = 0; for (const ch of k) s = (s * 31 + ch.charCodeAt(0)) >>> 0; const r = () => ((s = (s * 1103515245 + 12345) >>> 0) / 4294967296);
  const types = [['kills', 'Clean up {n} Gloom', 400], ['runs', 'Complete {n} dives', 12], ['bosses', 'Free {n} Guardians', 4], ['critters', 'Rescue {n} critters', 8], ['crits', 'Land {n} critical hits', 600]];
  const pick = types.sort(() => r() - 0.5).slice(0, 3); const rews = [{ critters: 15 }, { scrap: 120 }, { box: 1 }];
  g.daily = { day: k, list: pick.map(([type, txt, n], i) => ({ type, txt: txt.replace('{n}', n), n, p: 0, done: false, claimed: false, rew: rews[i] })) }; }
export function dailyTick(g, type, n = 1) { if (!g.daily) return; for (const c of g.daily.list) if (c.type === type && !c.done) { c.p = Math.min(c.n, c.p + n); if (c.p >= c.n) c.done = true; } }
export function claimDaily(g, i) { const c = g.daily?.list[i]; if (!c || !c.done || c.claimed) return false; c.claimed = true; g.n.dailies++; if (c.rew.critters) g.critters += c.rew.critters; if (c.rew.scrap) g.scrap += c.rew.scrap; if (c.rew.box) g.boxes.push(topWorld(g)); return true; }

// ---------- Achievements ----------
export const ACHS = [];
{ const A = (id, name, desc, f) => ACHS.push({ id, name, desc, f });
  WORLDS.forEach((w, i) => [500, 1500, 2500].forEach(d => A(`d${i}_${d}`, `${w.name} ${d}m`, `Reach ${d}m in ${w.name}`, g => g.bestEver[i] >= d)));
  [[1e3, 'Tidy Diver'], [1e4, 'Gloom Buster'], [1e5, 'Sea Sweeper'], [1e6, 'Ocean Hero']].forEach(([n, nm]) => A(`k${n}`, nm, `Clean up ${n.toLocaleString()} Gloom`, g => g.n.kills >= n));
  [10, 50, 250, 1000].forEach(n => A(`r${n}`, `${n} Dives`, `Complete ${n} dives`, g => g.n.runs >= n));
  [10, 50, 200, 600].forEach(n => A(`b${n}`, `Guardian Friend ${n}`, `Free Guardians ${n} times`, g => g.n.bosses >= n));
  [1, 5, 25, 100].forEach(n => A(`t${n}`, `Ebb x${n}`, `Perform ${n} Ebb Tides`, g => g.n.tides >= n));
  [1, 5, 15].forEach(n => A(`rp${n}`, `Riptide x${n}`, `Perform ${n} Riptides`, g => g.n.rips >= n));
  [1, 3, 8].forEach(n => A(`m${n}`, `Moonrise x${n}`, `Perform ${n} Moonrises`, g => g.n.moons >= n));
  [1, 2, 3, 4, 5].forEach(r => A(`g${r}`, `${RARITY[r].name} Find`, `Own a ${RARITY[r].name} item`, g => g.n.maxRar >= r));
  [10, 50, 150, 250].forEach(n => A(`c${n}`, `Crew ${n}`, `Reach ${n} total crew levels`, g => crewTotal(g) >= n));
  [12, 24, 36, 48].forEach(n => A(`ch${n}`, `Chapter ${n}`, `Finish ${n} story chapters`, g => g.chapter >= n || g.finished));
  [1, 10, 40].forEach(n => A(`dy${n}`, `Contractor ${n}`, `Complete ${n} daily contracts`, g => g.n.dailies >= n));
  [20, 200, 1500].forEach(n => A(`cr${n}`, `Critter Pal ${n}`, `Rescue ${n} critters`, g => g.n.critters >= n));
  [5, 25, 100].forEach(n => A(`ex${n}`, `Explorer ${n}`, `Finish ${n} expeditions`, g => g.n.exps >= n));
  [7, 14, 21].forEach(n => A(`f${n}`, `Friends ${n}`, `Free ${n} Friends`, g => friendCount(g) >= n)); }
export function checkAchs(g) { const out = []; for (const a of ACHS) if (!g.achs[a.id] && a.f(g)) { g.achs[a.id] = clock.now(); out.push(a); } return out; }

// ---------- Timers (also applied offline) ----------
export function tickTimers(g) { const now = clock.now(), ev = [];
  for (let i = g.labQ.length - 1; i >= 0; i--) { const q = g.labQ[i]; if (now >= q.end) { g.research[q.id] = lv(g.research, q.id) + 1; g.labQ.splice(i, 1); ev.push({ type: 'research', id: q.id }); } }
  if (g.chState === 'build' && now >= g.projEnd) ev.push({ type: 'project' });
  return ev; }
export function claimExp(g, i) { const e = g.exps[i]; if (!e || clock.now() < e.end) return null; const h = expHaul(g, e.w, e.m); g.exps.splice(i, 1);
  g.shell += h.shell; g.tideShells += h.shell; g.mats[WORLDS[e.w].mat] += h.mat; g.critters += h.critters; g.n.critters += h.critters; g.scrap += h.scrap; for (let k = 0; k < h.box; k++) g.boxes.push(e.w); g.n.exps++; return h; }
export function offline(g) { const now = clock.now(), secs = Math.min(12 * 3600, Math.max(0, (now - g.lastSave) / 1000)); g.lastSave = now; if (secs < 60) return null;
  const w = g.world, r = g.rate[w] || 0, sh = r * secs * (0.15 + 0.1 * lv(g.research, 'r_drift')); g.shell += sh; g.tideShells += sh; return { secs, shell: sh }; }

// ---------- The dive ----------
let eid = 1;
export function newRun(g, w) {
  const S = stats(g), best = g.best[w]; let d0 = Math.floor(best * S.start / 50) * 50; while (d0 > 0 && blobHp(w, d0) > S.dmg * S.rate * 1.5) d0 -= 50; d0 = Math.max(0, d0);
  const run = { w, S, d: d0, d0, t: 0, tmax: S.oxy, hull: S.hull, x: 0, vx: 0, blobs: [], shots: [], bullets: [], fx: [], spawnD: d0 + 12, boss: null,
    nextBoss: Math.floor(d0 / BOSS_EVERY + 1) * BOSS_EVERY, cd: 0, bombCd: 2, palCd: 1, palShot: 0, shield: 0, shell: 0, mats: 0, kills: 0, crits: 0, bossKills: 0, critters: 0,
    newFriends: [], boxes: 0, relic: null, over: false, od: { t: 0, cd: 0 }, beam: { t: 0, cd: 0 }, maxD: d0, slowT: 0 };
  if (w === 6 && g.bossMax[6] >= FINAL_BOSS_AT && run.nextBoss > FINAL_BOSS_AT) {}
  return run;
}
function spawnBlob(run, g) { const r = rng(), d = run.spawnD, w = run.w; let kind = 'blob';
  if (r < 0.018) kind = 'critter'; else if (r < 0.022 && has(g, 'gear')) kind = 'chest'; else if (r < 0.045) kind = 'gold';
  const hp = blobHp(w, d) * (kind === 'chest' ? 8 : kind === 'gold' ? 1.5 : 1) * (0.8 + rng() * 0.5), big = rng() < 0.12;
  run.blobs.push({ id: eid++, kind, x: (rng() * 2 - 1) * 10.5, d, hp: big ? hp * 3 : hp, max: big ? hp * 3 : hp, r: kind === 'critter' ? 0.7 : big ? 1.6 : 0.95 + rng() * 0.3, big, wob: rng() * 6.28 }); }
function bossName(w, D) { const f = FRIENDS.find(f => f.world === w && f.at === D); return f; }
function damage(run, g, b, dmg) { b.hp -= dmg; if (b.hp <= 0 && !b.dead) { b.dead = true; kill(run, g, b); } }
function kill(run, g, b) { const S = run.S, w = run.w;
  if (b === run.boss) { const D = b.D, f = bossName(w, D), first = g.bossMax[w] < D; run.boss = null; run.bossKills++; g.bossMax[w] = Math.max(g.bossMax[w], D); run.nextBoss = D + BOSS_EVERY;
    const sh = blobRew(w, D) * S.shell * 60 * (first ? 3 : 1); run.shell += sh; run.mats += matAmt(D) * S.mat * 25; run.critters += first ? 3 : 0;
    if (f && !g.friends[f.i]) { g.friends[f.i] = true; run.newFriends.push(f); }
    if (has(g, 'gear') && (first || rng() < 0.3)) { run.boxes++; g.boxes.push(w); }
    const rl = lv(g.mtree, 'm_relic'); if (rl && rng() < 0.04 * rl) { const free = RELICS.map((_, i) => i).filter(i => !g.relics.includes(i)); if (free.length) { const k = free[Math.floor(rng() * free.length)]; g.relics.push(k); run.relic = k; } }
    run.fx.push({ t: 'bossdown', x: b.x, d: b.d, friend: f?.i ?? -1 }); return; }
  if (b.kind === 'critter') return;
  run.kills++; const sh = blobRew(w, b.d) * S.shell * (b.kind === 'gold' ? 8 : 1) * (b.big ? 3 : 1); run.shell += sh;
  if (rng() < 0.18 || b.big) run.mats += matAmt(b.d) * S.mat * (b.big ? 2 : 1);
  if (b.kind === 'chest') { if (has(g, 'gear')) { run.boxes++; g.boxes.push(w); } else run.shell += sh * 30; }
  run.fx.push({ t: 'pop', x: b.x, d: b.d, kind: b.kind, big: b.big });
}
const WIDTH = 11;
export function stepRun(g, run, dt, inp) {
  if (run.over) return; const S = run.S; run.t += dt;
  // movement
  const ax = inp.x || 0; run.vx += (ax * 26 - run.vx * 6) * dt; run.x = Math.max(-WIDTH, Math.min(WIDTH, run.x + run.vx * dt));
  const fwd = inp.y || 0; let v = S.speed * (1 + 0.55 * fwd);
  if (run.boss) v = 0; else if (run.d + v * dt >= run.nextBoss && !(run.w === 6 && run.nextBoss > FINAL_BOSS_AT && g.bossMax[6] < FINAL_BOSS_AT)) { run.d = run.nextBoss; spawnBoss(run, g); v = 0; }
  run.d += v * dt; run.maxD = Math.max(run.maxD, run.d);
  while (run.spawnD < run.d + 75 && !run.boss) { run.spawnD += 2.8 + rng() * 4.5; if (run.spawnD < run.nextBoss - 6) spawnBlob(run, g); }
  // abilities
  run.od.cd -= dt; run.od.t -= dt; run.beam.cd -= dt; run.beam.t -= dt;
  if (inp.od && S.od && run.od.cd <= 0) { run.od.t = S.od.dur; run.od.cd = S.od.cd; run.fx.push({ t: 'od' }); }
  if (inp.beam && S.beam && run.beam.cd <= 0) { run.beam.cd = S.beam.cd; run.beam.t = 1.2; const pw = S.dmg * S.rate * S.beam.pow;
    for (const b of run.blobs) if (Math.abs(b.x - run.x) < 3 && b.d > run.d && b.kind !== 'critter') damage(run, g, b, pw); if (run.boss) damage(run, g, run.boss, pw * S.boss); run.fx.push({ t: 'beam', x: run.x }); }
  // firing
  const rate = S.rate * (run.od.t > 0 ? 3 : 1); run.cd -= dt;
  const target = () => { let best = run.boss && run.boss.d - run.d < 34 ? run.boss : null, bd = 1e9; if (best) return best; for (const b of run.blobs) { if (b.kind === 'critter' || b.dead) continue; const rel = b.d - run.d; if (rel < -1 || rel > 32) continue; const dd = rel * rel + (b.x - run.x) * (b.x - run.x) * 0.5; if (dd < bd) { bd = dd; best = b; } } return best; };
  while (run.cd <= 0) { run.cd += 1 / rate; const tg = target(); if (!tg) { run.cd = Math.max(run.cd, 0.05); break; }
    for (let k = 0; k < S.multi; k++) run.shots.push({ x: run.x + (k - (S.multi - 1) / 2) * 0.5, d: run.d + 1, tg, pal: false }); }
  if (g.companion === 'dolphin') { run.palCd -= dt; while (run.palCd <= 0) { run.palCd += 1 / (S.rate * 0.6); const tg = target(); if (!tg) { run.palCd = 0.2; break; } run.shots.push({ x: run.x - 2.2, d: run.d, tg, pal: true }); } }
  if (S.bomb || g.companion === 'puffer') { run.bombCd -= dt; if (run.bombCd <= 0) { run.bombCd = g.companion === 'puffer' && !S.bomb ? 3 : 4; const tg = target(); if (tg) { const pw = (S.bomb || S.dmg * 3) * (g.companion === 'puffer' ? 1 + 0.5 * S.pal : 1);
    for (const b of run.blobs) if (!b.dead && b.kind !== 'critter' && Math.hypot(b.x - tg.x, b.d - tg.d) < 6) damage(run, g, b, pw); if (run.boss && tg === run.boss) damage(run, g, run.boss, pw * S.boss); run.fx.push({ t: 'bomb', x: tg.x, d: tg.d }); } } }
  // shots
  for (let i = run.shots.length - 1; i >= 0; i--) { const s = run.shots[i], tg = s.tg; if (tg.dead) { run.shots.splice(i, 1); continue; }
    const dx = tg.x - s.x, dd = tg.d - s.d, L = Math.hypot(dx, dd), step = 70 * dt;
    if (L <= step + tg.r * 0.6) { let dm = S.dmg * (s.pal ? 0.5 * S.pal : 1); const crit = rng() < S.crit; if (crit) { dm *= S.critMul; run.crits++; } if (tg === run.boss) dm *= S.boss; damage(run, g, tg, dm); run.shots.splice(i, 1); run.fx.push({ t: 'hit', x: s.x + dx, d: s.d + dd, crit }); continue; }
    s.x += dx / L * step; s.d += dd / L * step; }
  // blobs
  const cdm = contactDmg(run.w, run.d) / (g.companion === 'turtle' ? 1.3 : 1);
  for (let i = run.blobs.length - 1; i >= 0; i--) { const b = run.blobs[i]; if (b.dead) { run.blobs.splice(i, 1); continue; }
    const rel = b.d - run.d; if (b.kind !== 'critter' && b.kind !== 'chest') { b.d -= 1.6 * dt; if (rel < 22) b.x += Math.sign(run.x - b.x) * Math.min(Math.abs(run.x - b.x), 0.6 * dt); }
    if (Math.abs(rel) < b.r + 0.9 && Math.abs(b.x - run.x) < b.r + 1.1) { b.dead = true; run.blobs.splice(i, 1);
      if (b.kind === 'critter') { run.critters++; run.fx.push({ t: 'critter', x: b.x, d: b.d }); } else if (b.kind === 'chest') { kill(run, g, b); } else { hurt(run, g, cdm * (b.big ? 2 : 1)); run.fx.push({ t: 'bonk', x: b.x, d: b.d }); } continue; }
    if (rel < -5) run.blobs.splice(i, 1); }
  // boss
  const B = run.boss; if (B) { B.t += dt; B.x = Math.sin(B.t * 0.5) * 5; B.d = Math.max(run.d + 16, B.d - 4 * dt);
    B.ring -= dt; B.aim -= dt; const bd = cdm * 0.55;
    if (B.ring <= 0) { B.ring = Math.max(1.4, 2.6 - B.phase * 0.4); const n = 12 + B.phase * 4, off = B.t; for (let k = 0; k < n; k++) { const a = off + k / n * 6.283; run.bullets.push({ x: B.x, d: B.d, vx: Math.cos(a) * 7, vd: Math.sin(a) * 7 - 2, dmg: bd }); } }
    if (B.aim <= 0) { B.aim = 1.7; for (let k = -1; k <= 1; k++) { const dx = run.x - B.x, dd = run.d - B.d, L = Math.hypot(dx, dd); const a = Math.atan2(dd, dx) + k * 0.18; run.bullets.push({ x: B.x, d: B.d, vx: Math.cos(a) * 11, vd: Math.sin(a) * 11, dmg: bd }); } }
    B.phase = B.hp < B.max * 0.33 ? 2 : B.hp < B.max * 0.66 ? 1 : 0; }
  for (let i = run.bullets.length - 1; i >= 0; i--) { const u = run.bullets[i]; u.x += u.vx * dt; u.d += u.vd * dt; const rel = u.d - run.d;
    if (Math.abs(rel) < 0.9 && Math.abs(u.x - run.x) < 1.0) { hurt(run, g, u.dmg); run.bullets.splice(i, 1); continue; }
    if (rel < -6 || rel > 40 || Math.abs(u.x) > 16) run.bullets.splice(i, 1); }
  if (run.t >= run.tmax) end(run, 'oxygen'); else if (run.hull <= 0) end(run, 'hull');
}
function hurt(run, g, n) { if (g.companion === 'turtle' && run.shield <= 0) { run.shield = 5; run.fx.push({ t: 'shield' }); return; } run.hull -= n; run.fx.push({ t: 'hurt', n }); }
function spawnBoss(run, g) { const D = run.nextBoss, f = bossName(run.w, D), final = run.w === 6 && D === FINAL_BOSS_AT; const hp = blobHp(run.w, D) * (final ? 160 : f && g.bossMax[run.w] < D ? 55 : 40);
  run.boss = { id: eid++, D, x: 0, d: D + 26, hp, max: hp, r: final ? 5 : 3.2, t: 0, ring: 2, aim: 1, phase: 0, friend: f?.i ?? -1, final, kind: 'boss' }; run.bullets = []; run.blobs = run.blobs.filter(b => b.d < D); run.fx.push({ t: 'boss', final, friend: f?.i ?? -1 }); }
function end(run, reason) { run.over = true; run.reason = reason; }
export function finishRun(g, run) { const w = run.w; g.shell += run.shell; g.tideShells += run.shell; g.mats[WORLDS[w].mat] += run.mats; g.critters += run.critters;
  g.best[w] = Math.max(g.best[w], run.maxD); const rec = run.maxD > g.bestEver[w]; g.bestEver[w] = Math.max(g.bestEver[w], run.maxD);
  g.n.runs++; g.n.kills += run.kills; g.n.bosses += run.bossKills; g.n.critters += run.critters; g.rate[w] = run.shell / Math.max(10, run.t);
  dailyTick(g, 'kills', run.kills); dailyTick(g, 'runs', 1); dailyTick(g, 'bosses', run.bossKills); dailyTick(g, 'critters', run.critters); dailyTick(g, 'crits', run.crits);
  g.world = w; return { rec }; }

// ---------- Save ----------
export function save(g) { g.lastSave = clock.now(); try { localStorage.setItem(SAVE_KEY, JSON.stringify(g)); } catch {} }
export function load() { try { const s = localStorage.getItem(SAVE_KEY); if (s) return migrate(JSON.parse(s)); } catch {} return null; }
export function migrate(o) { const g = newGame(); for (const k in o) g[k] = o[k]; g.n = { ...newGame().n, ...o.n }; g.settings = { ...newGame().settings, ...o.settings }; g.mats = { ...newGame().mats, ...o.mats }; return g; }
export function exportSave(g) { return btoa(unescape(encodeURIComponent(JSON.stringify(g)))); }
export function importSave(str) { const o = JSON.parse(decodeURIComponent(escape(atob(str.trim())))); if (!o || o.v !== 1) throw new Error('bad save'); return migrate(o); }

export function fmt(n) { if (n === undefined || n === null || isNaN(n)) return '0'; if (n < 1000) return n < 10 && n % 1 ? n.toFixed(1) : Math.floor(n).toString();
  const u = ['K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'Dc']; let e = Math.floor(Math.log10(n) / 3); if (e <= u.length) { const v = n / Math.pow(1000, e); return (v < 100 ? v.toFixed(2) : v.toFixed(0)) + u[e - 1]; }
  return n.toExponential(2).replace('+', ''); }
export function fmtTime(s) { s = Math.max(0, Math.ceil(s)); if (s < 60) return s + 's'; const m = Math.floor(s / 60); if (m < 60) return `${m}m ${s % 60}s`; const h = Math.floor(m / 60); return `${h}h ${m % 60}m`; }
