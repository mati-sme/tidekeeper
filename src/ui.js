// Tidekeeper UI: hub tabs, mission widget, run HUD, dialog, modals, toasts, tooltips, settings.
import * as C from './core.js';
const { fmt, fmtTime, WORLDS, UPGRADES, RESEARCH, PEARL_TREE, TRIDENT_TREE, MOON_TREE, CHAPTERS, ACTS, CREW, FRIENDS, RARITY, GEAR_SLOTS, AFFIXES, RELICS, EXP_TIMES, COMPANIONS, FEATURE_CH, projTime } = C;
const $ = s => document.querySelector(s), esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
export const CUR = { shell: ['🐚', 'Shells'], pearls: ['🦪', 'Pearls'], tridents: ['🔱', 'Tridents'], moonstones: ['🌙', 'Moonstones'], critters: ['🐠', 'Critters'], scrap: ['🔩', 'Scrap'] };
WORLDS.forEach(w => CUR[w.mat] = [w.icon, w.matName]);
const have = (g, k) => k === 'shell' ? g.shell : g.mats[k] ?? g[k] ?? 0;
const costHtml = (k, n) => `<span class="cost">${CUR[k][0]} ${fmt(n)}</span>`;
const TABS = [{ id: 'dive', icon: '🌊', label: 'Dive' }, { id: 'story', icon: '📖', label: 'Story' }, { id: 'shop', icon: '🔧', label: 'Workshop' }, { id: 'lab', icon: '🧪', label: 'Lab', feat: 'lab' },
  { id: 'exp', icon: '🧭', label: 'Voyages', feat: 'exp' }, { id: 'forge', icon: '⚒️', label: 'Forge', feat: 'gear' }, { id: 'crew', icon: '👥', label: 'Crew', feat: 'crew' }, { id: 'tides', icon: '🌙', label: 'Tides', feat: 'tide' }, { id: 'log', icon: '🏆', label: 'Logbook' }];
const AVA = k => `${k}.jpg`;

export function createUI(G) {
  const ui = { tab: 'dive', shopTab: 'Harpoon', buyMode: 1, selItem: null, expW: null, modalStack: [] };
  const g = () => G.g;
  // ---------- toasts & tooltips ----------
  ui.toast = (icon, title, sub = '', cls = '') => { const t = document.createElement('div'); t.className = `toast ${cls}`; t.innerHTML = `<div class="ti">${icon}</div><div><b>${esc(title)}</b>${sub ? `<span>${sub}</span>` : ''}</div>`;
    const box = $('#toasts'); box.appendChild(t); while (box.children.length > 4) box.firstChild.remove(); setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 320); }, 3600); };
  const tip = $('#tip'); let tipEl = null;
  document.addEventListener('mouseover', e => { const el = e.target.closest('[data-tip]'); if (el === tipEl) return; tipEl = el; if (!el || !g().settings.tips) { tip.classList.remove('show'); return; } tip.innerHTML = el.dataset.tip; tip.classList.add('show');
    const r = el.getBoundingClientRect(), tr = tip.getBoundingClientRect(); let x = r.left + r.width / 2 - tr.width / 2, y = r.bottom + 8; if (y + tr.height > innerHeight - 8) y = r.top - tr.height - 8; tip.style.left = Math.max(8, Math.min(innerWidth - tr.width - 8, x)) + 'px'; tip.style.top = y + 'px'; });
  // ---------- modal ----------
  ui.modal = ({ title, sub = '', body = '', buttons = [{ label: 'OK', cls: 'btn-primary', key: 'Enter' }], wide = false, dismiss = true, onClose }) => {
    const root = $('#modal-root'), back = document.createElement('div'), m = document.createElement('div'); back.className = 'mback'; m.className = `modal ${wide ? 'wide' : ''}`;
    m.innerHTML = `${dismiss ? '<button class="icon-btn x" data-tip="Close <kbd>Esc</kbd>">✕</button>' : ''}<h2>${title}</h2>${sub ? `<div class="sub">${sub}</div>` : ''}<div class="mbody">${body}</div><div class="mfoot"></div>`;
    const entry = { m, back, close: null, buttons, dismiss };
    const close = (cb) => { if (entry.closed) return; entry.closed = true; m.classList.add('out'); back.classList.add('out'); setTimeout(() => { m.remove(); back.remove(); }, 200); ui.modalStack = ui.modalStack.filter(x => x !== entry); onClose?.(); cb?.(); };
    entry.close = close; buttons.forEach(b => { const el = document.createElement('button'); el.className = `btn ${b.cls || 'btn-ghost'}`; el.innerHTML = b.label + (b.key ? ` <kbd>${b.key === ' ' ? 'Space' : b.key}</kbd>` : ''); el.onclick = () => { G.sfx.ui(); if (b.keep) b.onClick?.(m); else close(() => b.onClick?.(m)); }; m.querySelector('.mfoot').appendChild(el); b.el = el; });
    if (dismiss) { back.onclick = () => close(); m.querySelector('.x').onclick = () => close(); }
    root.append(back, m); ui.modalStack.push(entry); return entry; };
  ui.topModal = () => ui.modalStack[ui.modalStack.length - 1];
  // ---------- dialog ----------
  let dlg = null;
  ui.say = (lines, done) => { if (!lines?.length) { done?.(); return; } dlg = { lines, i: 0, done, typing: null }; $('#dialog').classList.remove('hide'); showLine(); };
  function showLine() { const [who, text] = dlg.lines[dlg.i].split('|'), el = $('#dialog'); el.querySelector('.portrait').src = AVA(who); el.querySelector('.dlg-name').textContent = CREW[who]?.name || who;
    const tEl = el.querySelector('.dlg-text'); let n = 0; clearInterval(dlg.typing); tEl.textContent = ''; dlg.full = text; dlg.typing = setInterval(() => { n += 2; tEl.textContent = text.slice(0, n); if (n % 6 === 0) G.sfx.blip(); if (n >= text.length) { clearInterval(dlg.typing); dlg.typing = null; } }, 22); }
  ui.dlgNext = () => { if (!dlg) return false; const tEl = $('#dialog .dlg-text'); if (dlg.typing) { clearInterval(dlg.typing); dlg.typing = null; tEl.textContent = dlg.full; return true; }
    dlg.i++; if (dlg.i >= dlg.lines.length) { const d = dlg.done; dlg = null; $('#dialog').classList.add('hide'); d?.(); } else showLine(); return true; };
  ui.inDialog = () => !!dlg; $('#dialog').onclick = () => ui.dlgNext();
  // ---------- top bar ----------
  function renderRes() { const G0 = g(), W = WORLDS[G.world], list = [['shell', G0.shell, 'Shells: spend in the Workshop and Lab'], [W.mat, G0.mats[W.mat], `${W.matName}: gathered in ${W.name}`]];
    if (C.has(G0, 'tide') || G0.pearls) list.push(['pearls', G0.pearls, 'Pearls: from Ebb Tides, spend on the Pearl tree']); if (G0.tridents || G0.n.rips) list.push(['tridents', G0.tridents, 'Tridents: from Riptides']); if (G0.moonstones || G0.n.moons) list.push(['moonstones', G0.moonstones, 'Moonstones: from Moonrises']);
    if (C.has(G0, 'crew')) list.push(['critters', G0.critters, 'Critters: rescued in dives, used to train crew']); if (C.has(G0, 'gear')) list.push(['scrap', G0.scrap, 'Scrap: salvage gear, craft and upgrade at the Forge']);
    const box = $('#res'), sig = list.map(l => l[0]).join(); if (box.dataset.sig !== sig) { box.dataset.sig = sig; box.innerHTML = list.map(([k, , t]) => `<div class="chip" data-k="${k}" data-tip="${t}"><span class="ic">${CUR[k][0]}</span><span class="v"></span></div>`).join(''); }
    list.forEach(([k, v]) => { const el = box.querySelector(`[data-k="${k}"] .v`), s = fmt(v); if (el.textContent !== s) { el.textContent = s; } }); }
  ui.bump = k => { const el = $(`#res [data-k="${k}"]`); if (el) { el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump'); } };
  // ---------- rail ----------
  function badges() { const G0 = g(), now = C.clock.now(), b = {};
    b.story = (G0.chState === 'goal' && C.goalDone(G0) && !G0.finished && G0.mats[C.projCost(G0).mat] >= C.projCost(G0).n) || (G0.chState === 'build' && now >= G0.projEnd);
    b.lab = C.has(G0, 'lab') && G0.labQ.length < C.labSlots(G0); b.exp = C.has(G0, 'exp') && (G0.exps.some(e => now >= e.end) || G0.exps.length < C.expSlots(G0));
    b.forge = C.has(G0, 'gear') && G0.boxes.length > 0; b.log = !!G0.daily?.list.some(c => c.done && !c.claimed); b.tides = C.has(G0, 'tide') && C.pearlGain(G0) >= Math.max(1, G0.pearls * 0.5 + 1);
    b.crew = C.has(G0, 'crew') && Object.keys(G0.crew).some(k => C.crewOpen(G0, k) && G0.crew[k] < 40 && G0.critters >= C.crewCost(G0.crew[k])); return b; }
  function renderRail() { const G0 = g(), B = badges(); $('#rail').innerHTML = TABS.map((t, i) => { const lock = t.feat && !C.has(G0, t.feat);
      return `<button class="rail-btn ${ui.tab === t.id ? 'on' : ''} ${lock ? 'locked' : ''}" data-tab="${t.id}" data-tip="${lock ? `🔒 Unlocks in Chapter ${FEATURE_CH[t.feat] + 1}` : `${t.label} <kbd>${i + 1}</kbd>`}"><span class="hk">${i + 1}</span><span class="ri">${lock ? '🔒' : t.icon}</span>${t.label}${!lock && B[t.id] ? '<span class="dot"></span>' : ''}</button>`; }).join(''); }
  $('#rail').onclick = e => { const b = e.target.closest('[data-tab]'); if (!b) return; ui.setTab(b.dataset.tab); };
  ui.setTab = id => { const t = TABS.find(t => t.id === id); if (t.feat && !C.has(g(), t.feat)) { G.sfx.deny(); ui.toast('🔒', `${t.label} is locked`, `Unlocks in Chapter ${FEATURE_CH[t.feat] + 1}`); return; } ui.tab = id; G.sfx.ui(); ui.render(true); };
  // ---------- mission widget ----------
  function renderMission() { const G0 = g(), el = $('#mission'), now = C.clock.now();
    if (G0.finished) { el.innerHTML = `<div class="act">Epilogue · Endless Sea</div><h3>🌕 The sea shines again</h3><div class="muted small">The Moon Lantern is back in the sky. Keep diving for records, Mythic gear, every achievement and deeper Moonrises.</div>`; return; }
    const c = CHAPTERS[G0.chapter], [a, b] = C.goalProgress(G0), done = a >= b, pc = C.projCost(G0), W = WORLDS[c.g[2] ?? c.w];
    let action = ''; if (G0.chState === 'goal') { if (!done) action = (c.g[0] === 'dist' || c.g[0] === 'boss' || c.g[0] === 'mat') && C.worldOpen(G0, c.g[2] ?? c.w) ? `<button class="btn btn-ghost btn-sm btn-full" data-act="goto" data-w="${c.g[2] ?? c.w}">Dive in ${W.name} →</button>` : '';
      else action = `<button class="btn btn-primary btn-full" data-act="proj" data-cost="${pc.n}" data-cur="${pc.mat}">🔨 Restore: ${esc(c.proj)} · ${pc.n ? costHtml(pc.mat, pc.n) + ' · ' : ''}⏱ ${fmtTime(projTime(G0.chapter))}</button>`; }
    else if (now < G0.projEnd) action = `<div class="goal"><span>🔨 ${esc(c.proj)}</span><span data-end="${G0.projEnd}"></span></div><div class="pbar gold"><i data-start="${G0.projEnd - projTime(G0.chapter) * 1000}" data-endbar="${G0.projEnd}"></i></div><div class="small muted" style="margin-top:6px">Keeps building while you dive or close the game.</div>`;
    else action = `<button class="btn btn-teal btn-full" data-act="claim">✨ Finish restoration: ${esc(c.proj)}</button>`;
    el.innerHTML = `<div class="row" style="display:flex;gap:12px;align-items:center"><img class="who" src="${AVA(c.who)}" alt=""><div style="flex:1;min-width:0"><div class="act">Act ${c.act + 1} · ${ACTS[c.act]} · Chapter ${G0.chapter + 1}/48</div><h3>${esc(c.t)}</h3></div></div>
      ${G0.chState === 'goal' ? `<div class="goal"><span>${done ? '✅' : '🎯'} ${C.goalText(c)}</span><span class="${done ? 'good' : ''}">${c.g[0] === 'boss' || c.g[0] === 'gear' ? (done ? 'Done' : '') : `${fmt(Math.min(a, b))} / ${fmt(b)}`}</span></div><div class="pbar"><i style="width:${Math.min(100, a / b * 100)}%"></i></div>` : ''}${action}`; }
  $('#mission').onclick = e => act(e);
  // ---------- CTA ----------
  function renderCta() { const W = WORLDS[G.world]; $('#cta').innerHTML = `<button class="btn btn-primary dive-btn" data-act="dive"><span>🌊</span><span>Dive<small>${W.name} · best ${fmt(g().best[G.world])}m</small></span> <kbd>Space</kbd></button>`; }
  $('#cta').onclick = e => act(e);
  // ---------- tabs ----------
  const T = {};
  T.dive = () => { const G0 = g(); let html = '<div class="sec">Choose a sea</div><div class="grid" style="grid-template-columns:1fr">';
    WORLDS.forEach((w, i) => { const open = C.worldOpen(G0, i), bosses = FRIENDS.filter(f => f.world === i); const col = '#' + w.fog.toString(16).padStart(6, '0'), col2 = '#' + w.water.toString(16).padStart(6, '0');
      html += `<div class="card wcard ${open ? '' : 'lock'} ${G.world === i ? 'sel' : ''}" data-act="${open ? 'world' : 'lockedw'}" data-w="${i}"><div class="swatch" style="background:linear-gradient(160deg,${col},${col2})">${open ? w.icon : '🔒'}</div>
        <div style="flex:1"><h4>${w.name}</h4><div class="desc" style="margin:2px 0 0">${open ? w.desc : `Unlocks in Chapter ${C.worldOpenCh(i) + 1}`}</div>${open ? `<div class="meta"><span class="tag" data-tip="Best this Tide / best ever">📏 ${fmt(G0.best[i])}m · ${fmt(G0.bestEver[i])}m</span><span class="tag" data-tip="Guardians freed">${'<span class="gdots">' + bosses.map(f => `<i class="${G0.friends[f.i] ? 'on' : ''}"></i>`).join('') + '</span>'}</span><span class="tag">${w.icon} ${fmt(G0.mats[w.mat])}</span></div>` : ''}</div></div>`; });
    html += '</div>'; const pals = C.has(G0, 'tide') ? (G0.ptree.p_pal | 0) : 0;
    if (pals) { html += '<div class="sec">Companion</div><div class="seg">' + ['none', 'dolphin', 'turtle', 'puffer'].slice(0, pals + 1).map(k => `<button class="${(G0.companion || 'none') === k ? 'on' : ''}" data-act="pal" data-k="${k}" ${k !== 'none' ? `data-tip="${COMPANIONS[k].desc}"` : ''}>${k === 'none' ? 'None' : COMPANIONS[k].icon + ' ' + COMPANIONS[k].name}</button>`).join('') + '</div>'; }
    const S = C.stats(G0); html += `<div class="sec">Your sub</div><div class="stats"><div class="stat"><span class="muted small">Damage</span><b>${fmt(S.dmg)}</b></div><div class="stat"><span class="muted small">Fire rate</span><b>${S.rate.toFixed(1)}/s ×${S.multi}</b></div><div class="stat"><span class="muted small">Hull</span><b>${fmt(S.hull)}</b></div><div class="stat"><span class="muted small">Dive time</span><b>${S.oxy.toFixed(0)}s</b></div><div class="stat"><span class="muted small">Speed</span><b>${S.speed.toFixed(1)} m/s</b></div><div class="stat"><span class="muted small">Start depth</span><b>${Math.round(S.start * 100)}% of best</b></div></div>`;
    return { head: `<div><h2>Dive</h2><p>Pick a sea, then dive. Your harpoons fire on their own, so steer with WASD.</p></div>`, body: html }; };
  T.story = () => { const G0 = g(); let html = ''; const cur = CHAPTERS[Math.min(G0.chapter, 47)];
    html += `<div class="story-hero"><img src="${AVA(cur.who)}" alt=""><div><div class="muted small">${G0.finished ? 'The End… for now' : `Act ${cur.act + 1}: ${ACTS[cur.act]}`}</div><h3 style="font-size:22px">${G0.finished ? 'The Moon Lantern shines' : esc(cur.t)}</h3><button class="btn btn-ghost btn-sm" style="margin-top:8px" data-act="replay">💬 Replay dialogue</button></div></div>`;
    ACTS.forEach((a, ai) => { html += `<div class="sec">Act ${ai + 1} · ${a}</div>`; for (let i = ai * 12; i < ai * 12 + 12; i++) { const c = CHAPTERS[i], st = i < G0.chapter || G0.finished ? 'done' : i === G0.chapter ? 'cur' : 'fut';
      html += `<div class="chap ${st}"><div class="n">${st === 'done' ? '✓' : i + 1}</div><div style="flex:1"><div class="t">${st === 'fut' && i > G0.chapter + 1 ? '???' : esc(c.t)}</div><div class="small muted">${st === 'fut' && i > G0.chapter + 1 ? 'A mystery for later' : C.goalText(c) + ' · 🔨 ' + esc(c.proj) + ' (' + fmtTime(projTime(i)) + ')'}</div></div></div>`; } });
    return { head: `<div><h2>Story</h2><p>Help the crew rebuild the Ark, chapter by chapter. Restorations take real time.</p></div>`, body: html }; };
  T.shop = () => { const G0 = g(), tabs = ['Harpoon', 'Sub', 'Materials']; let html = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px"><div class="seg">${tabs.map(t => `<button class="${ui.shopTab === t ? 'on' : ''}" data-act="stab" data-k="${t}">${t}</button>`).join('')}</div>
      <div class="seg" data-tip="Buy amount">${[1, 10, 0].map(n => `<button class="${ui.buyMode === n ? 'on' : ''}" data-act="bmode" data-n="${n}">${n ? '×' + n : 'Max'}</button>`).join('')}</div></div><div class="grid">`;
    for (const u of UPGRADES.filter(u => u.tab === ui.shopTab)) { const av = C.upgAvail(G0, u), l = G0.upg[u.id] | 0, maxed = l >= u.max, [n, cost] = bulk(G0, u);
      const lockTxt = u.ch && G0.chapter < u.ch ? `Unlocks in Chapter ${u.ch + 1}` : `Find ${CUR[u.cur][1]} in ${WORLDS.find(w => w.mat === u.cur)?.name}`;
      html += `<div class="card ${av ? '' : 'lock'}"><div class="row"><div class="ic">${u.icon}</div><div><h4>${u.name}</h4></div><span class="lv">Lv ${l}${u.max < 9999 ? ' / ' + u.max : ''}</span></div><div class="desc">${av ? u.desc : '🔒 ' + lockTxt}</div>
        ${av ? `<button class="btn ${maxed ? 'btn-ghost' : 'btn-teal'} btn-full" data-act="buy" data-id="${u.id}" data-cost="${cost}" data-cur="${u.cur}" ${maxed ? 'disabled' : ''}>${maxed ? 'Maxed' : `${n > 1 ? `+${n} · ` : ''}${costHtml(u.cur, cost)}`}</button>` : ''}</div>`; }
    return { head: `<div><h2>Workshop</h2><p>Pebble upgrades the Minnow. Shells for the basics, sea materials for big boosts.</p></div>`, body: html + '</div>' }; };
  function bulk(G0, u) { const l = G0.upg[u.id] | 0; let n = 0, c = 0; const want = ui.buyMode || 1e9, wallet = C.curOf(G0, u.cur);
    while (n < want && l + n < u.max) { const nc = C.upgCost(u, l + n); if (n > 0 && c + nc > wallet) break; if (n === 0 && ui.buyMode === 0 && nc > wallet) { c = nc; n = 1; break; } c += nc; n++; if (n > 500) break; } return [Math.max(1, n), c || C.upgCost(u, l)]; }
  T.lab = () => { const G0 = g(), now = C.clock.now(); let html = `<div class="sec">Research benches (${G0.labQ.length}/${C.labSlots(G0)})</div>`;
    for (let i = 0; i < C.labSlots(G0); i++) { const q = G0.labQ[i]; if (q) { const r = RESEARCH.find(x => x.id === q.id); html += `<div class="card" style="margin-bottom:8px"><div class="row"><div class="ic">${r.icon}</div><div style="flex:1"><h4>${r.name} → Lv ${(G0.research[r.id] | 0) + 1}</h4><div class="pbar violet" style="margin-top:6px"><i data-start="${q.start}" data-endbar="${q.end}"></i></div></div><span class="lv" data-end="${q.end}"></span></div></div>`; }
      else html += `<div class="card" style="margin-bottom:8px;border-style:dashed"><div class="muted">🧪 Empty bench. Pick a project below; it keeps working while you're away.</div></div>`; }
    html += '<div class="sec">Projects</div><div class="grid">'; for (const r of RESEARCH) { const l = (G0.research[r.id] | 0), busy = G0.labQ.some(q => q.id === r.id), maxed = l >= r.max, cost = C.resCost(r, l), lock = r.ch && G0.chapter < r.ch;
      html += `<div class="card ${lock ? 'lock' : ''}"><div class="row"><div class="ic">${r.icon}</div><h4>${r.name}</h4><span class="lv">Lv ${l}/${r.max}</span></div><div class="desc">${lock ? `🔒 Unlocks in Chapter ${r.ch + 1}` : r.desc}</div>${lock ? '' : `<button class="btn btn-violet btn-full" data-act="res" data-id="${r.id}" data-cost="${cost}" data-cur="shell" ${maxed || busy ? 'disabled' : ''}>${maxed ? 'Complete' : busy ? 'Researching…' : `${costHtml('shell', cost)} · ⏱ ${fmtTime(C.resTime(G0, r, l))}`}</button>`}</div>`; }
    return { head: `<div><h2>Luma's Lab</h2><p>Slow but permanent upgrades. Research never resets.</p></div>`, body: html + '</div>' }; };
  T.exp = () => { const G0 = g(), now = C.clock.now(); ui.expW ??= C.topWorld(G0); let html = `<div class="sec">Docks (${G0.exps.length}/${C.expSlots(G0)})</div>`;
    G0.exps.forEach((e, i) => { const W = WORLDS[e.w], done = now >= e.end; html += `<div class="card" style="margin-bottom:8px"><div class="row"><div class="ic">${W.icon}</div><div style="flex:1"><h4>Voyage to ${W.name} · ${EXP_TIMES.find(t => t.m === e.m)?.label}</h4>${done ? '<div class="good small">Back home with treasure!</div>' : `<div class="pbar" style="margin-top:6px"><i data-start="${e.start}" data-endbar="${e.end}"></i></div>`}</div>${done ? `<button class="btn btn-primary" data-act="expc" data-i="${i}">Collect</button>` : `<span class="lv" data-end="${e.end}"></span>`}</div></div>`; });
    if (G0.exps.length < C.expSlots(G0)) { html += `<div class="sec">Send a voyage</div><div class="card"><div class="row" style="margin-bottom:10px"><span class="muted">Destination</span><select data-act="expw" style="margin-left:auto">${WORLDS.map((w, i) => C.worldOpen(G0, i) ? `<option value="${i}" ${ui.expW === i ? 'selected' : ''}>${w.icon} ${w.name}</option>` : '').join('')}</select></div><div class="grid" style="grid-template-columns:repeat(2,1fr)">`;
      for (const t of EXP_TIMES) { const h = C.expHaul(G0, ui.expW, t.m); html += `<div class="card" style="background:rgba(0,0,0,.18)"><h4>⏱ ${t.label}</h4><div class="desc">🐚 ${fmt(h.shell)} · ${WORLDS[ui.expW].icon} ${fmt(h.mat)}<br>🐠 ${h.critters} · 🔩 ${h.scrap}${h.box ? ` · 🎁 ${h.box}` : ''}</div><button class="btn btn-teal btn-full btn-sm" data-act="exps" data-m="${t.m}">Send</button></div>`; }
      html += '</div></div>'; }
    return { head: `<div><h2>Voyages</h2><p>Wren sends friends on trips. They come back with loot, even while you're away.</p></div>`, body: html }; };
  const gearMain = (G0, it) => { const p = C.gearPower(G0, it); return { harpoon: `+${fmt(30 * p)}% damage`, hull: `+${fmt(40 * p)}% hull`, engine: `+${(0.8 * p).toFixed(1)}s dive time`, charm: `+${fmt(30 * p)}% Shells` }[it.slot]; };
  const gearCard = (G0, it, cls = 'gitem') => `<div class="${cls} ${ui.selItem === it.id ? 'sel' : ''} ${Object.values(G0.equip).includes(it.id) ? 'eq' : ''}" style="--rc:${RARITY[it.r].color}" data-act="gsel" data-id="${it.id}" data-tip="<b style='color:${RARITY[it.r].color}'>${C.gearName(it)}</b><br>${gearMain(G0, it)}${it.aff ? '<br>' + AFFIXES[it.aff.k].replace('{v}', it.aff.v) : ''}<br><span class='muted'>Level ${it.lvl}/${C.gearMaxLvl(it)}</span>"><span class="glv">${it.lvl ? '+' + it.lvl : ''}</span><div class="gi">${GEAR_SLOTS[it.slot].icon}</div><div class="gn" style="color:${RARITY[it.r].color}">${GEAR_SLOTS[it.slot].names[it.tier]}</div></div>`;
  T.forge = () => { const G0 = g(); let html = '<div class="sec">Equipped</div><div class="slotrow">';
    for (const s in GEAR_SLOTS) { const it = G0.gear.find(x => x.id === G0.equip[s]); html += it ? gearCard(G0, it, 'gslot') : `<div class="gslot"><div class="gi" style="opacity:.3">${GEAR_SLOTS[s].icon}</div><div class="gn muted">${GEAR_SLOTS[s].name}<br>empty</div></div>`; }
    html += '</div>'; const sel = G0.gear.find(x => x.id === ui.selItem);
    if (sel) { const eq = Object.values(G0.equip).includes(sel.id), uc = C.gearUpCost(sel), mx = sel.lvl >= C.gearMaxLvl(sel); html += `<div class="card" style="margin-top:12px;border-color:${RARITY[sel.r].color}"><div class="row"><div class="ic">${GEAR_SLOTS[sel.slot].icon}</div><div><h4 style="color:${RARITY[sel.r].color}">${C.gearName(sel)}</h4><div class="small muted">${gearMain(G0, sel)}${sel.aff ? ' · ' + AFFIXES[sel.aff.k].replace('{v}', sel.aff.v) : ''} · Lv ${sel.lvl}/${C.gearMaxLvl(sel)}</div></div></div>
      <div style="display:flex;gap:8px;margin-top:10px"><button class="btn btn-teal" data-act="geq" ${eq ? 'disabled' : ''}>${eq ? 'Equipped' : 'Equip'}</button><button class="btn btn-primary" data-act="gup" data-cost="${uc}" data-cur="scrap" ${mx ? 'disabled' : ''}>${mx ? 'Max level' : 'Upgrade ' + costHtml('scrap', uc)}</button><button class="btn btn-coral" data-act="gsal" ${eq ? 'disabled' : ''}>Salvage +${C.salvageVal(sel)} 🔩</button></div></div>`; }
    const cc = C.craftCost(G0, C.topWorld(G0)); html += `<div class="sec">Treasure & crafting</div><div class="card"><div class="row" style="flex-wrap:wrap;gap:8px"><button class="btn btn-primary" data-act="boxes" ${G0.boxes.length ? '' : 'disabled'}>🎁 Open ${G0.boxes.length} box${G0.boxes.length === 1 ? '' : 'es'}</button><button class="btn btn-ghost" data-act="salall" data-tip="Salvage every unequipped item that is weaker than what you wear">♻️ Salvage weaker</button></div>
      <div class="desc" style="margin-top:10px">Craft a guaranteed Uncommon-or-better item from ${WORLDS[C.topWorld(G0)].name}: ${costHtml('scrap', cc.scrap)} + ${costHtml(cc.mat, cc.matN)}</div><div class="seg">${Object.entries(GEAR_SLOTS).map(([k, s]) => `<button data-act="craft" data-k="${k}" data-cost="${cc.scrap}" data-cur="scrap">${s.icon} ${s.name}</button>`).join('')}</div></div>`;
    const inv = [...G0.gear].sort((a, b) => C.gearPower(G0, b) - C.gearPower(G0, a)); html += `<div class="sec">Inventory (${inv.length})</div>${inv.length ? `<div class="inv">${inv.map(it => gearCard(G0, it)).join('')}</div>` : '<div class="muted">Free Guardians, open chests and send voyages to find gear.</div>'}`;
    return { head: `<div><h2>Tusk's Forge</h2><p>Gear from Common to Mythic. Equip the best, salvage the rest.</p></div>`, body: html }; };
  T.crew = () => { const G0 = g(); let html = '<div class="sec">Crew</div><div class="grid">';
    for (const k of Object.keys(CREW).filter(k => k !== 'kai')) { const c = CREW[k], open = C.crewOpen(G0, k), l = G0.crew[k], cost = C.crewCost(l);
      html += `<div class="card ${open ? '' : 'lock'}"><div class="crew"><img src="${open ? AVA(k) : AVA(k)}" style="${open ? '' : 'filter:brightness(0) opacity(.5)'}" alt=""><div style="flex:1"><h4>${open ? c.name : '???'}</h4><div class="small muted">${open ? c.role : 'Joins later in the story'}</div><div class="small" style="margin-top:3px">${open ? c.desc : ''}</div></div><span class="lv">Lv ${l}/40</span></div>
        ${open ? `<button class="btn btn-teal btn-full" style="margin-top:10px" data-act="train" data-k="${k}" data-cost="${cost}" data-cur="critters" ${l >= 40 ? 'disabled' : ''}>Train ${costHtml('critters', cost)}</button>` : ''}</div>`; }
    html += `</div><div class="sec">Friends freed (${C.friendCount(G0)}/21)</div><div class="friends">${FRIENDS.map(f => `<div class="fr ${G0.friends[f.i] ? 'on' : ''}" style="--fc:#${f.color.toString(16).padStart(6, '0')}" data-tip="${G0.friends[f.i] ? `<b>${f.name}</b> the ${f.kind}<br>+${f.stat === 'crit' ? '1% crit' : f.stat === 'rate' ? '4% fire rate' : '8% ' + ({ shell: 'Shells', dmg: 'damage', mat: 'materials', hull: 'hull' }[f.stat])}` : `Guardian at ${f.at}m in ${WORLDS[f.world].name}`}">${G0.friends[f.i] ? f.name : '?'}</div>`).join('')}</div>`;
    return { head: `<div><h2>Crew & Friends</h2><p>Train the crew with rescued critters. Every freed Guardian helps forever.</p></div>`, body: html }; };
  const treeHtml = (G0, L, key, cur, tree) => `<div class="grid">${L.map(n => { const l = G0[key][n.id] | 0, mx = l >= n.max, c = C.treeCost(n, l), lock = n.req && !G0[key][n.req];
    return `<div class="card ${lock ? 'lock' : ''}"><div class="row"><div class="ic">${n.icon}</div><h4>${n.name}</h4><span class="lv">Lv ${l}${n.max < 9999 ? '/' + n.max : ''}</span></div><div class="desc">${lock ? '🔒 Needs ' + L.find(x => x.id === n.req).name : n.desc}</div>${lock ? '' : `<button class="btn btn-teal btn-full" data-act="tree" data-tree="${tree}" data-id="${n.id}" data-cost="${c}" data-cur="${cur}" ${mx ? 'disabled' : ''}>${mx ? 'Maxed' : costHtml(cur, c)}</button>`}</div>`; }).join('')}</div>`;
  T.tides = () => { const G0 = g(); let html = ''; const pg = C.pearlGain(G0);
    html += `<div class="prest ebb"><h3>🌊 Ebb Tide</h3><div class="small muted">Resets Shells, Workshop Shell upgrades and this Tide's best depths. Keeps the story, materials, Lab, gear, crew and friends.</div><div class="gain">+${fmt(pg)} 🦪</div><div class="small muted">Based on your deepest dive this Tide (${fmt(C.tideP(G0))} global depth). Dive deeper for more.</div><button class="btn btn-teal" style="margin-top:10px" data-act="tide" ${pg >= 1 ? '' : 'disabled'}>Ebb Tide</button></div>`;
    html += `<div class="sec">Pearl tree · ${fmt(G0.pearls)} 🦪</div>` + treeHtml(G0, PEARL_TREE, 'ptree', 'pearls', 'pearl');
    if (C.has(G0, 'rip')) { const tg = C.tridentGain(G0); html += `<div class="sec">Riptide</div><div class="prest rip"><h3>🌀 Riptide</h3><div class="small muted">A giant Ebb Tide: also resets Pearls, the Pearl tree, material upgrades and materials.</div><div class="gain">+${fmt(tg)} 🔱</div><div class="small muted">Based on Pearls earned since the last Riptide (${fmt(G0.ripPearls)}).</div><button class="btn btn-teal" style="margin-top:10px" data-act="rip" ${tg >= 1 ? '' : 'disabled'}>Riptide</button></div>` + `<div class="sec">Trident tree · ${fmt(G0.tridents)} 🔱</div>` + treeHtml(G0, TRIDENT_TREE, 'ttree', 'tridents', 'trident'); }
    else html += `<div class="sec">Riptide</div><div class="card lock"><div class="muted">🔒 Unlocks in Chapter ${FEATURE_CH.rip + 1}</div></div>`;
    if (C.has(G0, 'moon')) { const mg = C.moonGain(G0); html += `<div class="sec">Moonrise</div><div class="prest moon"><h3>🌕 Moonrise</h3><div class="small muted">The biggest reset: also resets Tridents and the Trident tree. Moonstones carry the Lantern's power.</div><div class="gain">+${fmt(mg)} 🌙</div><div class="small muted">Based on Tridents earned since the last Moonrise (${fmt(G0.moonTri)}).</div><button class="btn btn-violet" style="margin-top:10px" data-act="moon" ${mg >= 1 ? '' : 'disabled'}>Moonrise</button></div>` + `<div class="sec">Moon tree · ${fmt(G0.moonstones)} 🌙</div>` + treeHtml(G0, MOON_TREE, 'mtree', 'moonstones', 'moon');
      if (G0.relics.length) html += `<div class="sec">Relics</div><div class="agrid">${G0.relics.map(i => `<div class="ach on"><div class="ai">🏺</div><div><b>${RELICS[i][0]}</b><div class="small muted">${RELICS[i][1]}</div></div></div>`).join('')}</div>`; }
    else if (C.has(G0, 'rip')) html += `<div class="sec">Moonrise</div><div class="card lock"><div class="muted">🔒 Unlocks in Chapter ${FEATURE_CH.moon + 1}</div></div>`;
    return { head: `<div><h2>Tides</h2><p>Reset to grow stronger. Each layer unlocks new powers.</p></div>`, body: html }; };
  T.log = () => { const G0 = g(); let html = ''; C.ensureDaily(G0);
    if (G0.daily) { html += `<div class="sec">Daily contracts · new ones every day</div><div class="grid" style="grid-template-columns:1fr">${G0.daily.list.map((c, i) => `<div class="card"><div class="row"><div class="ic">📜</div><div style="flex:1"><h4>${c.txt}</h4><div class="pbar gold" style="margin-top:6px"><i style="width:${c.p / c.n * 100}%"></i></div></div><button class="btn ${c.claimed ? 'btn-ghost' : 'btn-primary'}" data-act="daily" data-i="${i}" ${c.done && !c.claimed ? '' : 'disabled'}>${c.claimed ? 'Claimed' : c.rew.critters ? `+${c.rew.critters} 🐠` : c.rew.scrap ? `+${c.rew.scrap} 🔩` : '+1 🎁'}</button></div></div>`).join('')}</div>`; }
    else html += `<div class="card lock"><div class="muted">📜 Daily contracts unlock in Chapter ${FEATURE_CH.daily + 1}</div></div>`;
    const n = G0.n; html += `<div class="sec">Stats</div><div class="stats"><div class="stat"><span class="muted small">Dives</span><b>${fmt(n.runs)}</b></div><div class="stat"><span class="muted small">Gloom cleaned</span><b>${fmt(n.kills)}</b></div><div class="stat"><span class="muted small">Guardians freed</span><b>${fmt(n.bosses)}</b></div><div class="stat"><span class="muted small">Critters rescued</span><b>${fmt(n.critters)}</b></div><div class="stat"><span class="muted small">Tides / Riptides / Moonrises</span><b>${n.tides} / ${n.rips} / ${n.moons}</b></div><div class="stat"><span class="muted small">Played since</span><b>${new Date(G0.created).toLocaleDateString()}</b></div></div>`;
    html += `<div class="sec">Achievements ${C.achCount(G0)}/${C.ACHS.length} · each gives +3% damage, hull and Shells</div><div class="agrid">${C.ACHS.map(a => `<div class="ach ${G0.achs[a.id] ? 'on' : ''}" data-tip="${a.desc}"><div class="ai">🏅</div><div><b style="font-family:var(--h);font-weight:600">${a.name}</b><div class="small muted">${a.desc}</div></div></div>`).join('')}</div>`;
    return { head: `<div><h2>Logbook</h2><p>Daily contracts, stats and achievements.</p></div>`, body: html }; };
  ui.render = (enter = false) => { if (G.mode !== 'hub') return; const r = T[ui.tab](); $('#panel-head').innerHTML = r.head; const body = $('#panel-body'), st = enter ? 0 : body.scrollTop; body.innerHTML = r.body; body.scrollTop = st;
    if (enter) { body.classList.remove('enter'); void body.offsetWidth; body.classList.add('enter'); } renderRail(); renderMission(); renderCta(); renderRes(); ui.tick(); };
  // ---------- live refresh ----------
  ui.tick = () => { const G0 = g(), now = C.clock.now(); renderRes();
    document.querySelectorAll('[data-cost][data-cur]').forEach(b => { if (b.hasAttribute('disabled')) return; b.classList.toggle('disabled', have(G0, b.dataset.cur) < +b.dataset.cost); });
    document.querySelectorAll('[data-end]').forEach(e => { e.textContent = fmtTime((+e.dataset.end - now) / 1000); });
    document.querySelectorAll('[data-endbar]').forEach(e => { const s = +e.dataset.start, en = +e.dataset.endbar; e.style.width = Math.min(100, (now - s) / (en - s) * 100) + '%'; }); };
  ui.refreshRail = () => { renderRail(); renderMission(); };
  // ---------- actions ----------
  function act(e) { const el = e.target.closest('[data-act]'); if (!el || el.disabled) return; const G0 = g(), a = el.dataset.act, id = el.dataset.id;
    if (el.classList.contains('disabled') && !['world', 'stab', 'bmode', 'gsel', 'pal'].includes(a)) { G.sfx.deny(); el.animate([{ transform: 'translateX(-4px)' }, { transform: 'translateX(4px)' }, { transform: 'none' }], { duration: 200 }); return; }
    const ok = (snd = 'buy') => { G.sfx[snd](); G.save(); ui.render(); };
    switch (a) {
      case 'dive': G.launch(G.world); break;
      case 'goto': G.world = +el.dataset.w; G.launch(G.world); break;
      case 'world': G.world = +el.dataset.w; G.sfx.ui(); ui.render(); break;
      case 'lockedw': G.sfx.deny(); break;
      case 'pal': G0.companion = el.dataset.k === 'none' ? null : el.dataset.k; ok('ui'); break;
      case 'stab': ui.shopTab = el.dataset.k; G.sfx.ui(); ui.render(); break;
      case 'bmode': ui.buyMode = +el.dataset.n; G.sfx.ui(); ui.render(); break;
      case 'buy': { const u = UPGRADES.find(x => x.id === id); let n = 0; const [want] = bulk(G0, u); for (let i = 0; i < want; i++) if (C.buyUpg(G0, id)) n++; else break; if (n) { ok(); ui.bump(u.cur); } else G.sfx.deny(); break; }
      case 'tree': if (C.buyTree(G0, el.dataset.tree, id)) ok('upgrade' in G.sfx ? 'buy' : 'buy'); else G.sfx.deny(); break;
      case 'res': if (C.startResearch(G0, id)) { ui.toast('🧪', 'Research started', RESEARCH.find(r => r.id === id).name); ok(); } else G.sfx.deny(); break;
      case 'expw': break;
      case 'exps': if (C.startExp(G0, ui.expW, +el.dataset.m)) { ui.toast('⛵', 'Voyage launched', `${WORLDS[ui.expW].name}`); ok(); } break;
      case 'expc': { const h = C.claimExp(G0, +el.dataset.i); if (h) { ui.toast('🎉', 'Voyage returned!', `🐚 ${fmt(h.shell)} · ${WORLDS[h.w].icon} ${fmt(h.mat)} · 🐠 ${h.critters} · 🔩 ${h.scrap}${h.box ? ` · 🎁 ${h.box}` : ''}`, 'gold'); ok('critter'); G.checkAchs(); } break; }
      case 'gsel': ui.selItem = +id; G.sfx.ui(); ui.render(); break;
      case 'geq': C.equip(G0, ui.selItem); ok(); break;
      case 'gup': if (C.gearUp(G0, ui.selItem)) ok(); else G.sfx.deny(); break;
      case 'gsal': if (C.salvage(G0, ui.selItem)) { ui.selItem = null; ok(); } break;
      case 'salall': { let n = 0; for (const it of [...G0.gear]) { const cur = G0.gear.find(x => x.id === G0.equip[it.slot]); if (cur && it.id !== cur.id && C.gearPower(G0, it) <= C.gearPower(G0, cur) && C.salvage(G0, it.id)) n++; } ui.toast('♻️', `Salvaged ${n} item${n === 1 ? '' : 's'}`); ok(); break; }
      case 'boxes': { const got = []; while (G0.boxes.length) got.push(C.openBox(G0)); got.forEach(it => { if (!G0.equip[it.slot]) C.equip(G0, it.id); }); const best = got.sort((a, b) => b.r - a.r)[0];
        ui.modal({ title: '🎁 Treasure!', sub: `You opened ${got.length} box${got.length > 1 ? 'es' : ''}.`, body: `<div class="inv">${got.map(it => gearCard(G0, it)).join('')}</div>`, buttons: [{ label: 'Nice!', cls: 'btn-primary', key: 'Enter' }] }); ok('freed'); G.checkAchs(); break; }
      case 'craft': { const it = C.craft(G0, el.dataset.k); if (it) { ui.selItem = it.id; ui.toast(GEAR_SLOTS[it.slot].icon, `Crafted ${C.gearName(it)}`, '', it.r >= 3 ? 'gold' : ''); ok('freed'); G.checkAchs(); } else { G.sfx.deny(); ui.toast('🔩', 'Not enough materials', 'You need Scrap and the sea material shown.'); } break; }
      case 'train': if (C.trainCrew(G0, el.dataset.k)) { ok(); G.checkAchs(); } else G.sfx.deny(); break;
      case 'daily': if (C.claimDaily(G0, +el.dataset.i)) { ui.toast('📜', 'Contract complete!', '', 'gold'); ok('critter'); G.checkAchs(); } break;
      case 'tide': case 'rip': case 'moon': G.confirmPrestige(a); break;
      case 'proj': if (C.startProject(G0)) { ui.toast('🔨', 'Restoration started', CHAPTERS[G0.chapter].proj); ok(); } else G.sfx.deny(); break;
      case 'claim': G.claimChapter(); break;
      case 'replay': { const c = CHAPTERS[Math.min(G0.chapter, 47)]; ui.say(c.lines); break; }
    } }
  $('#panel').onclick = act; $('#panel').onchange = e => { if (e.target.dataset.act === 'expw') { ui.expW = +e.target.value; ui.render(); } };
  document.addEventListener('mouseover', e => { if (e.target.closest?.('.btn,.rail-btn,.wcard')) { const el = e.target.closest('.btn,.rail-btn,.wcard'); if (el !== ui._hov) { ui._hov = el; G.sfx.hover(); } } });
  // ---------- run HUD ----------
  let lastBossTxt = '';
  ui.hud = run => { const S = run.S, W = WORLDS[run.w]; $('#h-world').innerHTML = `<span class="ic">${W.icon}</span>${W.name}`; $('#h-depth').textContent = `${Math.floor(run.d).toLocaleString()} m`;
    $('#h-next').textContent = run.boss ? (run.boss.final ? '⚠ The Gloom Heart' : '⚠ Guardian ahead! Dodge the bubbles') : `Next Guardian at ${run.nextBoss.toLocaleString()} m`;
    const ox = Math.max(0, 1 - run.t / run.tmax), hu = Math.max(0, run.hull / S.hull); const ob = $('.bar.oxy'), hb = $('.bar.hull'); ob.querySelector('i').style.transform = `scaleX(${ox})`; ob.querySelector('span').textContent = `🫧 ${Math.ceil(run.tmax - run.t)}s`;
    hb.querySelector('i').style.transform = `scaleX(${hu})`; hb.querySelector('span').textContent = `🛡️ ${Math.ceil(hu * 100)}%`; hb.classList.toggle('low', hu < 0.3);
    $('#h-haul').innerHTML = `<div class="chip"><span class="ic">🐚</span>${fmt(run.shell)}</div><div class="chip"><span class="ic">${W.icon}</span>${fmt(run.mats)}</div>${run.critters ? `<div class="chip"><span class="ic">🐠</span>${run.critters}</div>` : ''}${run.boxes ? `<div class="chip"><span class="ic">🎁</span>${run.boxes}</div>` : ''}`;
    const B = run.boss, bb = $('#h-boss'); bb.classList.toggle('hide', !B); if (B) { const f = B.friend >= 0 ? FRIENDS[B.friend] : null, txt = B.final ? '💜 The Gloom Heart' : f && !g().friends[f.i] ? `Gloomed ${f.name} the ${f.kind}` : `Gloom Guardian · ${B.D}m`; if (txt !== lastBossTxt) { bb.querySelector('.bn').textContent = txt; lastBossTxt = txt; } bb.querySelector('i').style.transform = `scaleX(${Math.max(0, B.hp / B.max)})`; bb.querySelector('i').style.width = '100%'; }
    let ab = ''; if (S.od) ab += `<div class="abil ${run.od.cd <= 0 ? 'ready' : ''}" data-tip="Overdrive">💥<div class="cd" style="transform:scaleY(${Math.max(0, run.od.cd / S.od.cd)})"></div><kbd>Space</kbd></div>`; if (S.beam) ab += `<div class="abil ${run.beam.cd <= 0 ? 'ready' : ''}">🔦<div class="cd" style="transform:scaleY(${Math.max(0, run.beam.cd / S.beam.cd)})"></div><kbd>E</kbd></div>`;
    const ha = $('#h-abil'); if (ha.dataset.v !== ab) { ha.innerHTML = ab; ha.dataset.v = ab; } };
  $('#h-pause').onclick = () => G.pause();
  // ---------- run summary ----------
  ui.summary = (run, res, onAgain, onHub) => { const W = WORLDS[run.w], items = [[`🐚 ${fmt(run.shell)}`, 'Shells'], [`${W.icon} ${fmt(run.mats)}`, W.matName], [`📏 ${Math.floor(run.maxD).toLocaleString()} m`, res.rec ? 'New record!' : 'Distance', res.rec], [`🫧 ${run.kills}`, 'Gloom cleaned']];
    if (run.bossKills) items.push([`👑 ${run.bossKills}`, 'Guardians freed', true]); if (run.critters) items.push([`🐠 ${run.critters}`, 'Critters rescued']); if (run.boxes) items.push([`🎁 ${run.boxes}`, 'Treasure boxes', true]);
    run.newFriends.forEach(f => items.push([`💖 ${f.name}`, `the ${f.kind} joined!`, true])); if (run.relic !== null) items.push([`🏺 ${RELICS[run.relic][0]}`, RELICS[run.relic][1], true]);
    const why = run.reason === 'hull' ? 'Your hull gave out. Upgrade Hull Plating or dodge more!' : run.reason === 'quit' ? 'You surfaced early.' : 'Out of air! Oxygen Tanks give longer dives.';
    ui.modal({ title: res.rec ? '🌟 New record!' : '🫧 Dive complete', sub: why, body: `<div class="loot">${items.map(([b, s, hl], i) => `<div class="li ${hl ? 'hl' : ''}" style="animation-delay:${i * 60}ms"><b>${b}</b><span class="small muted">${s}</span></div>`).join('')}</div>`,
      buttons: [{ label: '🏠 Back to the Ark', cls: 'btn-ghost', key: 'Esc', onClick: onHub }, { label: '🌊 Dive again', cls: 'btn-primary', key: ' ', onClick: onAgain }], dismiss: false, wide: true }); };
  // ---------- settings ----------
  ui.settings = () => { const s = g().settings; const m = ui.modal({ title: '⚙️ Settings', body: `
    <div class="field"><label>Sound effects</label><input type="range" min="0" max="1" step="0.05" value="${s.vol}" data-s="vol"></div>
    <div class="field"><label>Music</label><input type="range" min="0" max="1" step="0.05" value="${s.music}" data-s="music"></div>
    <div class="field"><label>Graphics quality</label><div class="seg">${['low', 'med', 'high'].map(q => `<button class="${s.quality === q ? 'on' : ''}" data-q="${q}">${{ low: 'Low', med: 'Medium', high: 'High' }[q]}</button>`).join('')}</div></div>
    <div class="field"><label>Screen shake</label><button class="toggle ${s.shake ? 'on' : ''}" data-t="shake"></button></div>
    <div class="field"><label>Tooltips</label><button class="toggle ${s.tips ? 'on' : ''}" data-t="tips"></button></div>
    <div class="sec" style="margin-top:16px">Save</div><div class="small muted" style="margin-bottom:6px">Autosaves every few seconds. Copy this code to back up or move your save.</div>
    <textarea id="savebox" readonly>${C.exportSave(g())}</textarea>
    <div style="display:flex;gap:8px;margin-top:8px;flex-wrap:wrap"><button class="btn btn-ghost btn-sm" data-x="copy">📋 Copy</button><button class="btn btn-ghost btn-sm" data-x="import">📥 Import…</button><button class="btn btn-coral btn-sm" data-x="reset" style="margin-left:auto">Reset game</button></div>
    <div class="sec" style="margin-top:16px">Keys</div><div class="small muted" style="line-height:1.9"><kbd>Space</kbd> dive / continue · <kbd>1</kbd>–<kbd>9</kbd> tabs · <kbd>Esc</kbd> close / back · <kbd>M</kbd> mute · <kbd>O</kbd> settings<br>In a dive: <kbd>WASD</kbd> or arrows steer · <kbd>Space</kbd> Overdrive · <kbd>E</kbd> Moon Beam · <kbd>P</kbd> pause</div>`,
    buttons: [{ label: 'Done', cls: 'btn-primary', key: 'Enter' }], wide: true });
    m.m.addEventListener('input', e => { const k = e.target.dataset.s; if (k) { s[k] = +e.target.value; G.applySettings(); } });
    m.m.addEventListener('click', e => { const q = e.target.dataset.q, t = e.target.dataset.t, x = e.target.dataset.x;
      if (q) { s.quality = q; m.m.querySelectorAll('[data-q]').forEach(b => b.classList.toggle('on', b.dataset.q === q)); G.applySettings(); }
      if (t) { s[t] = !s[t]; e.target.classList.toggle('on', s[t]); G.applySettings(); }
      if (x === 'copy') { const ta = m.m.querySelector('#savebox'); ta.select(); navigator.clipboard?.writeText(ta.value).catch(() => document.execCommand('copy')); ui.toast('📋', 'Save code copied'); }
      if (x === 'import') { const im = ui.modal({ title: '📥 Import save', body: '<textarea id="imp" placeholder="Paste your save code here" style="user-select:text"></textarea>', buttons: [{ label: 'Cancel' }, { label: 'Import', cls: 'btn-primary', onClick: mm => { try { G.replaceSave(C.importSave(mm.querySelector('#imp').value)); ui.toast('✅', 'Save imported'); } catch { ui.toast('⚠️', "That save code didn't work"); } } }] }); setTimeout(() => im.m.querySelector('#imp').focus(), 50); }
      if (x === 'reset') ui.modal({ title: '⚠️ Reset everything?', sub: 'This erases your whole adventure. It cannot be undone.', buttons: [{ label: 'Keep playing', cls: 'btn-ghost' }, { label: 'Erase save', cls: 'btn-coral', onClick: () => G.hardReset() }] }); }); };
  $('#btn-settings').onclick = () => { G.sfx.ui(); ui.settings(); };
  $('#btn-mute').onclick = () => G.toggleMute();
  return ui;
}
