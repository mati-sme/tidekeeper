// Smoke test: load saves at many chapters, open every tab and modal, check for page errors.
import { chromium } from 'playwright-core';
import { createServer } from 'http'; import { readFileSync, existsSync } from 'fs'; import { extname, join } from 'path';
const root = new URL('../docs/', import.meta.url).pathname;
const srv = createServer((q, r) => { let p = join(root, decodeURIComponent(q.url.split('?')[0])); if (p.endsWith('/')) p += 'index.html'; if (!existsSync(p)) { r.writeHead(404); return r.end(); } r.writeHead(200, { 'content-type': { '.js': 'text/javascript', '.html': 'text/html', '.css': 'text/css' }[extname(p)] || 'application/octet-stream' }); r.end(readFileSync(p)); }).listen(8773);
const b = await chromium.launch({ executablePath: process.env.HOME + '/.cache/ms-playwright/chromium-1148/chrome-linux/chrome', args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const pg = await b.newPage({ viewport: { width: 1280, height: 800 } }); const errs = []; pg.on('pageerror', e => errs.push(e.message));
await pg.goto('http://localhost:8773/'); await pg.waitForTimeout(1500);
// fresh game: title -> dialog -> dive
await pg.keyboard.press('Space'); await pg.waitForTimeout(300); for (let i = 0; i < 8; i++) { await pg.keyboard.press('Space'); await pg.waitForTimeout(80); }
await pg.keyboard.press('Space'); await pg.waitForTimeout(1500); const st = await pg.evaluate(() => window.__tk.mode); console.log('fresh mode after space:', st);
for (const ch of [0, 3, 5, 9, 13, 14, 17, 21, 26, 31, 34, 41, 45, 47, 48]) {
  await pg.evaluate(ch => { const T = window.__tk; while (T.ui.topModal()) T.ui.topModal().close(); if (T.ui.inDialog()) for (let i = 0; i < 20; i++) T.ui.dlgNext(); if (T.run) { T.run.over = true; } T.mode = 'hub'; T.run = null; document.querySelector('#app').className = 'hub';
    const g = T.g; g.chapter = Math.min(ch, 47); g.finished = ch >= 48; g.chState = 'goal'; g.shell = 1e12; g.pearls = 50; g.tridents = 10; g.moonstones = 5; g.n.rips = 1; g.n.moons = 1; g.critters = 100; g.scrap = 1000; g.boxes = [1, 2];
    for (const k in g.mats) g.mats[k] = 1e5; if (ch >= 13 && !g.gear.length) { for (let i = 0; i < 3; i++) window.__tk.g.gear.push({ id: 900 + i, slot: ['harpoon', 'hull', 'charm'][i], r: i, tier: 1, lvl: 0, aff: { k: 'crit', v: 2 } }); }
    T.ui.render(true); }, ch);
  for (let k = 1; k <= 9; k++) { await pg.keyboard.press('Digit' + k); await pg.waitForTimeout(60); }
  await pg.evaluate(() => { const T = window.__tk; for (const sel of ['[data-act=boxes]', '[data-act=gsel]', '[data-act=proj]', '[data-act=tide]']) { T.ui.setTab(sel === '[data-act=tide]' ? 'tides' : sel === '[data-act=proj]' ? 'story' : 'forge'); const el = document.querySelector(sel); if (el) el.click(); while (T.ui.topModal()) T.ui.topModal().close(); } document.querySelector('#mission [data-act]')?.click(); while (T.ui.topModal()) T.ui.topModal().close(); if (T.ui.inDialog()) for (let i = 0; i < 20; i++) T.ui.dlgNext(); T.ui.settings(); T.ui.topModal().close(); });
  await pg.evaluate(() => { const T = window.__tk; T.launch(T.world); }); await pg.waitForTimeout(400); await pg.evaluate(() => { const T = window.__tk; if (T.run) { T.run.over = true; } }); await pg.waitForTimeout(300);
  console.log('ch', ch, 'errors so far', errs.length, errs.slice(-1)[0] || ''); }
console.log(errs.length ? 'ERRORS:\n' + [...new Set(errs)].join('\n') : 'no errors'); await b.close(); srv.close();
