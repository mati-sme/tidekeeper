// Headless screenshots: hub, mid-dive, modal, late-biome Guardian. Usage: node sim/shots.mjs [outdir]
import { chromium } from 'playwright-core';
import { createServer } from 'http'; import { readFileSync, existsSync, mkdirSync } from 'fs'; import { extname, join } from 'path';
const root = new URL('../docs/', import.meta.url).pathname, out = process.argv[2] || '/workspace/test-artifacts/tidekeeper'; mkdirSync(out, { recursive: true });
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.woff2': 'font/woff2', '.png': 'image/png', '.jpg': 'image/jpeg' };
const srv = createServer((q, r) => { let p = join(root, decodeURIComponent(q.url.split('?')[0])); if (p.endsWith('/')) p += 'index.html'; if (!existsSync(p)) { r.writeHead(404); return r.end(); } r.writeHead(200, { 'content-type': types[extname(p)] || 'application/octet-stream' }); r.end(readFileSync(p)); }).listen(8771);
const b = await chromium.launch({ executablePath: process.env.HOME + '/.cache/ms-playwright/chromium-1148/chrome-linux/chrome', args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const pg = await b.newPage({ viewport: { width: 1440, height: 900 } }); pg.setDefaultTimeout(20000);
const errs = []; pg.on('pageerror', e => errs.push(e.message)); pg.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
const only = process.argv[3];
await pg.addInitScript(() => { if (localStorage.getItem('tidekeeper-save-v1')) return; const now = Date.now();
  const s = { v: 1, created: now - 86400e3 * 2, seenIntro: true, chapter: 14, chState: 'build', projEnd: now + 1500e3, shell: 4.2e9, mats: { coral: 5200, kelp: 3400, brass: 860, frost: 0, ember: 0, glow: 0, moon: 0 },
    upg: { dmg: 120, rate: 22, crit: 12, multi: 2, bomb: 18, hull: 90, oxy: 12, speed: 10, shell: 60, start: 6, reef: 30, kcoil: 22, gears: 6 }, research: { r_dmg: 6, r_shell: 5, r_mat: 4, r_oxy: 3, r_crit: 2 }, labQ: [{ id: 'r_boss', start: now - 600e3, end: now + 900e3 }],
    pearls: 340, ptree: { p_dmg: 9, p_shell: 9, p_start: 3, p_pal: 2, p_palp: 4 }, best: [2246, 2400, 1180, 0, 0, 0, 0], bestEver: [2246, 2400, 1250, 0, 0, 0, 0], bossMax: [2000, 2000, 800, 0, 0, 0, 0],
    friends: [true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false], crew: { marlo: 9, pebble: 7, luma: 6, wren: 4, tusk: 1, nyx: 0, orla: 0 }, critters: 64, scrap: 420,
    gear: [{ id: 1, slot: 'harpoon', r: 3, tier: 2, lvl: 4, aff: { k: 'crit', v: 4 } }, { id: 2, slot: 'hull', r: 2, tier: 1, lvl: 3, aff: { k: 'mat', v: 12 } }, { id: 3, slot: 'charm', r: 4, tier: 2, lvl: 1, aff: { k: 'boss', v: 20 } }, { id: 4, slot: 'engine', r: 1, tier: 2, lvl: 0, aff: { k: 'speed', v: 5 } }, { id: 5, slot: 'harpoon', r: 0, tier: 1, lvl: 0, aff: null }, { id: 6, slot: 'charm', r: 5, tier: 2, lvl: 0, aff: { k: 'rate', v: 18 } }],
    equip: { harpoon: 1, hull: 2, charm: 3, engine: 4 }, gearId: 7, boxes: [2, 2], exps: [{ w: 1, m: 60, start: now - 1800e3, end: now + 1800e3 }], companion: 'dolphin', world: 1,
    n: { tides: 6, rips: 0, moons: 0, runs: 212, kills: 18400, bosses: 31, critters: 140, dailies: 2, exps: 7, maxRar: 5, crafted: 2 }, achs: { d0_500: 1, d0_1500: 1, k1000: 1, k10000: 1, r10: 1, r50: 1, b10: 1, t1: 1, t5: 1, g1: 1, g2: 1, g3: 1, ch12: 1, f7: 1 }, rate: [0, 5e7, 0, 0, 0, 0, 0], lastSave: now, settings: { vol: 0, music: 0, quality: 'high', shake: true, tips: true } };
  localStorage.setItem('tidekeeper-save-v1', JSON.stringify(s)); });
await pg.goto('http://localhost:8771/'); await pg.waitForTimeout(3500);
const clean = () => pg.evaluate(() => { document.querySelectorAll('.toast').forEach(t => t.remove()); const T = window.__tk; while (T.ui.topModal()) T.ui.topModal().close(); });
if (errs.length) console.log('EARLY ERRORS', errs.join('\n'));
await clean(); await pg.waitForTimeout(600);
if (!only || only === '1') { await pg.keyboard.press('Digit3'); await pg.waitForTimeout(1500); await pg.mouse.move(980, 330); await pg.waitForTimeout(800); await pg.screenshot({ path: out + '/1-hub-workshop.png' }); }
if (!only || only === '2') { await pg.evaluate(() => { const T = window.__tk; T.launch(1); const r = T.run; r.tmax = 999; }); await pg.keyboard.down('KeyW'); await pg.waitForTimeout(4000); await pg.keyboard.up('KeyW'); await pg.keyboard.down('KeyA'); await pg.waitForTimeout(900); await pg.keyboard.up('KeyA'); await pg.waitForTimeout(2500);
  await pg.evaluate(() => document.querySelectorAll('.toast').forEach(t => t.remove())); await pg.screenshot({ path: out + '/2-mid-dive-kelp.png' });
  await pg.evaluate(() => { const T = window.__tk; T.run.over = true; T.run.reason = 'oxygen'; T.run.bossKills = 1; T.run.critters = 2; T.run.boxes = 1; }); await pg.waitForTimeout(1600); await pg.evaluate(() => document.querySelectorAll('.toast').forEach(t => t.remove())); await pg.screenshot({ path: out + '/3-dive-summary-modal.png' }); await clean(); }
if (!only || only === '4') { await pg.evaluate(() => { const T = window.__tk, g = T.g; g.chapter = 33; g.upg.dmg = 900; g.upg.hull = 700; const r = T.run = null; T.mode = 'hub'; document.querySelector('#app').className = 'hub'; T.launch(5); const R = T.run; R.d = 1199; R.nextBoss = 1200; R.tmax = 999; R.S.dmg = 1e-9; R.S.bomb = 0; g.companion = null; });
  await pg.waitForTimeout(6000); await pg.keyboard.down('KeyD'); await pg.waitForTimeout(700); await pg.keyboard.up('KeyD'); await pg.waitForTimeout(1200); await pg.evaluate(() => document.querySelectorAll('.toast').forEach(t => t.remove())); await pg.screenshot({ path: out + '/4-abyss-guardian.png' }); }
console.log('errors:', errs.length ? errs.join('\n') : 'none'); await b.close(); srv.close();
