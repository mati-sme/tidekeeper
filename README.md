# Tidekeeper

A 3D run-based ocean adventure for macOS (and the web). The Moon Lantern fell from the sky and purple Gloom is clogging the sea. Young keeper **Kai** pilots the little sub **Minnow** with Captain Marlo's crew: dive, clean up the Gloom, free the trapped Guardians, rebuild the Ark and bring the light home.

- **Timed dives, mostly automatic:** steer with **WASD / arrows** (W rush, S brake). Harpoons aim and fire by themselves. Dodge Gloom and Guardian bubble attacks; grab lost critters and treasure chests.
- **48 story chapters in 4 acts, 7 seas:** Sunlit Shallows, Kelp Cathedral, Sunken City, Frost Shelf, Ember Vents, Glowing Abyss and the Moon Trench. Each has its own look, material and three named Guardians who become Friends when freed (21 in total).
- **The Ark:** every chapter ends with a real-time restoration (2 minutes early, up to about 3 hours at the end) that keeps building while you dive or close the game.
- **Long-term systems:** Workshop (17 upgrades), Luma's Lab (real-time research, works offline), Voyages (timed expeditions with loot), Tusk's Forge (gear from Common to Mythic with crafting, upgrading and salvage), crew training, Friends, 68 achievements and daily contracts.
- **Three prestige layers:** Ebb Tide (Pearls, Companions), Riptide (Tridents, Overdrive, extra lab bench and docks, Auto-Tide) and Moonrise (Moonstones, Moon Beam, Relics).
- Autosave, offline progress, save export/import, settings (volume, music, graphics quality, shake, tooltips) and keyboard shortcuts.

**Play on the web:** https://mati-sme.github.io/tidekeeper/
**Mac app (Apple Silicon):** download `Tidekeeper-mac-arm64.zip` from the latest Release, unzip, and drag **Tidekeeper.app** to Applications.

### First launch on macOS (the app isn't notarized)
Right-click the app → **Open** → **Open**. If macOS says it's "damaged", run this once in Terminal:
```
xattr -cr "/Applications/Tidekeeper.app"
```

### Keys
Space dive / continue · 1–9 tabs · Esc close / back · M mute · O settings · in a dive: WASD steer, Space Overdrive, E Moon Beam, P pause.

## Dev
- `npm run build` bundles `src/` into `docs/`, which is also the GitHub Pages site.
- `node sim/sim.mjs [maxHours] [campSecondsPerDive] [-v]` runs the optimal-player pacing sim. It uses the real dive code, honours real-time gates and logs time per chapter. The results are in `sim/pacing-optimal.txt`.
- `node sim/shots.mjs [outdir]` takes headless screenshots, and `node sim/uitest.mjs` is a UI smoke test across chapters.
- `npm run dist:mac` builds the arm64 `.app` (ad-hoc signed with rcodesign) and zips it into `dist/`.
