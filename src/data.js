// Tidekeeper — all game content: worlds, upgrades, research, story, crew, gear, prestige trees, achievements.
export const WORLDS = [
  { id: 'shallows', name: 'Sunlit Shallows', mat: 'coral', matName: 'Coral', icon: '🪸', fog: 0x2bb3c9, floor: 0xe7d3a2, water: 0x1a9fbf, accent: 0xff8fa3, desc: 'Warm turquoise reefs where the Gloom first crept in.' },
  { id: 'kelp', name: 'Kelp Cathedral', mat: 'kelp', matName: 'Kelp Fiber', icon: '🌿', fog: 0x1f8a6a, floor: 0x5c7a3a, water: 0x12664f, accent: 0xb6ff6a, desc: 'Towering kelp columns and green cathedral light.' },
  { id: 'city', name: 'Sunken City', mat: 'brass', matName: 'Brass Gears', icon: '⚙️', fog: 0x2f6f8f, floor: 0x8a8577, water: 0x1d4c66, accent: 0xffc96b, desc: 'Ruins of an old mer-city, full of brass machines.' },
  { id: 'frost', name: 'Frost Shelf', mat: 'frost', matName: 'Frost Glass', icon: '❄️', fog: 0x8fd0ef, floor: 0xe8f4ff, water: 0x4a8fb8, accent: 0xbdf3ff, desc: 'Under the polar ice, where icebergs sing.' },
  { id: 'vents', name: 'Ember Vents', mat: 'ember', matName: 'Ember Stone', icon: '🔥', fog: 0x4a2a30, floor: 0x2a2226, water: 0x2a1820, accent: 0xff7a2f, desc: 'Black smokers glowing with warm volcanic light.' },
  { id: 'abyss', name: 'Glowing Abyss', mat: 'glow', matName: 'Glow Pearls', icon: '✨', fog: 0x0c1440, floor: 0x141a3a, water: 0x060a24, accent: 0x7cf7ff, desc: 'The deep dark, lit only by bioluminescent friends.' },
  { id: 'trench', name: 'Moon Trench', mat: 'moon', matName: 'Moonsilver', icon: '🌙', fog: 0x2a2850, floor: 0x9aa0c8, water: 0x15143a, accent: 0xe8e4ff, desc: 'The deepest place in the sea, where the Moon Lantern fell.' },
];
WORLDS.forEach((w, i) => { w.i = i; w.hp = Math.pow(8e6, i); w.rew = Math.pow(33, i); });
export const BOSS_EVERY = 400;

// Named Guardians: 3 per world at 400m, 1200m and 2000m. Cleansing frees the trapped creature, who joins as a Friend.
export const FRIENDS = [
  ['Shelly', 'sea turtle', 'shell', 0x7fdc8a], ['Puff', 'pufferfish', 'dmg', 0xffd166], ['Coralie', 'coral crab', 'mat', 0xff8fa3],
  ['Sway', 'manta ray', 'rate', 0x9ad1ff], ['Mossbeard', 'old grouper', 'hull', 0x9bc46a], ['Tangle', 'octopus', 'shell', 0xc77dff],
  ['Gizmo', 'clockwork fish', 'dmg', 0xffc96b], ['Bellhop', 'bell jelly', 'rate', 0xffe9a8], ['Admiral', 'giant lobster', 'crit', 0xff6b5b],
  ['Snowdrop', 'baby seal', 'hull', 0xf2f7ff], ['Narwhal Nils', 'narwhal', 'dmg', 0xbdf3ff], ['Aurora', 'ice jelly', 'mat', 0x9be7ff],
  ['Cinder', 'lava eel', 'crit', 0xff7a2f], ['Basalt', 'rock crab', 'hull', 0x8d6e63], ['Fumaro', 'vent shrimp', 'shell', 0xffa36b],
  ['Glimmer', 'lantern squid', 'rate', 0x7cf7ff], ['Hush', 'ghost shark', 'dmg', 0xb3b8ff], ['Twinkle', 'comb jelly', 'mat', 0xff9df5],
  ['Selene', 'moon ray', 'crit', 0xe8e4ff], ['Crescent', 'silver nautilus', 'shell', 0xd8d4ff], ['Old Tide', 'ancient leviathan', 'dmg', 0xa59bff],
].map(([name, kind, stat, color], i) => ({ i, name, kind, stat, color, world: Math.floor(i / 3), at: [400, 1200, 2000][i % 3] }));
export const FINAL_BOSS_AT = 3600;

export const CREW = {
  kai: { name: 'Kai', role: 'Keeper & pilot', bonus: null },
  marlo: { name: 'Captain Marlo', role: 'Captain of the Ark', bonus: 'shell', per: 0.08, desc: '+8% Shells per level' },
  pebble: { name: 'Pebble', role: 'Engineer', bonus: 'oxy', per: 1.5, desc: '+1.5s Oxygen per level' },
  luma: { name: 'Luma', role: 'Scientist', bonus: 'lab', per: 0.03, desc: '3% faster research per level' },
  wren: { name: 'Wren', role: 'Navigator', bonus: 'exp', per: 0.1, desc: '+10% expedition haul per level' },
  tusk: { name: 'Tusk', role: 'Forgemaster', bonus: 'gear', per: 0.05, desc: '+5% gear power per level' },
  nyx: { name: 'Nyx', role: 'Abyss guide', bonus: 'crit', per: 0.1, desc: '+10% crit damage per level' },
  orla: { name: 'Orla', role: 'The Moon Whale', bonus: 'all', per: 0.06, desc: '+6% damage and Shells per level' },
};

// Workshop upgrades. cur: 'shell' or a world material. eff is applied in core.stats().
export const UPGRADES = [
  { id: 'dmg', name: 'Harpoon Power', icon: '🔱', cur: 'shell', base: 6, g: 1.18, max: 9999, desc: '×1.1 harpoon damage', tab: 'Harpoon' },
  { id: 'rate', name: 'Rapid Reload', icon: '⚡', cur: 'shell', base: 14, g: 1.19, max: 60, desc: '+6% fire rate', tab: 'Harpoon' },
  { id: 'crit', name: 'Lucky Shot', icon: '🍀', cur: 'shell', base: 60, g: 1.24, max: 30, desc: '+2% crit chance (crits ×3)', tab: 'Harpoon' },
  { id: 'multi', name: 'Twin Barrels', icon: '🎯', cur: 'shell', base: 900, g: 40, max: 4, desc: '+1 harpoon per volley', tab: 'Harpoon', ch: 2 },
  { id: 'bomb', name: 'Bubble Bomb', icon: '🫧', cur: 'shell', base: 300, g: 1.3, max: 9999, desc: 'Every 4s a bubble bomb pops nearby Gloom. ×1.08 bomb power per level', tab: 'Harpoon', ch: 2 },
  { id: 'hull', name: 'Hull Plating', icon: '🛡️', cur: 'shell', base: 10, g: 1.17, max: 9999, desc: '×1.15 hull strength', tab: 'Sub' },
  { id: 'oxy', name: 'Oxygen Tanks', icon: '🫁', cur: 'shell', base: 25, g: 1.32, max: 25, desc: '+3s dive time', tab: 'Sub' },
  { id: 'speed', name: 'Propeller', icon: '🌀', cur: 'shell', base: 35, g: 1.25, max: 30, desc: '+4% cruising speed', tab: 'Sub' },
  { id: 'shell', name: 'Shell Sense', icon: '🐚', cur: 'shell', base: 40, g: 1.22, max: 9999, desc: '×1.06 Shells from Gloom', tab: 'Sub' },
  { id: 'start', name: 'Current Rider', icon: '🧭', cur: 'shell', base: 500, g: 2.2, max: 12, desc: 'Start dives 4% deeper toward your best distance', tab: 'Sub', ch: 4 },
  { id: 'reef', name: 'Reef Blessing', icon: '🪸', cur: 'coral', base: 12, g: 1.35, max: 9999, desc: '×1.15 damage', tab: 'Materials' },
  { id: 'kcoil', name: 'Kelp Coil', icon: '🌿', cur: 'kelp', base: 12, g: 1.36, max: 9999, desc: '×1.1 Shells and materials', tab: 'Materials' },
  { id: 'gears', name: 'Brass Gearbox', icon: '⚙️', cur: 'brass', base: 12, g: 1.38, max: 9999, desc: '×1.15 damage, ×1.08 hull', tab: 'Materials' },
  { id: 'lance', name: 'Frost Lance', icon: '❄️', cur: 'frost', base: 12, g: 1.4, max: 9999, desc: '×1.12 damage, +4% crit damage', tab: 'Materials' },
  { id: 'forge', name: 'Ember Forge', icon: '🔥', cur: 'ember', base: 12, g: 1.42, max: 9999, desc: '×1.2 Guardian damage, ×1.1 damage', tab: 'Materials' },
  { id: 'glowl', name: 'Glow Lamp', icon: '✨', cur: 'glow', base: 12, g: 1.44, max: 9999, desc: '×1.12 Shells, ×1.1 damage', tab: 'Materials' },
  { id: 'lunar', name: 'Lunar Engine', icon: '🌙', cur: 'moon', base: 12, g: 1.46, max: 9999, desc: '×1.15 damage and Shells', tab: 'Materials' },
];

export const RESEARCH = [
  { id: 'r_dmg', name: 'Sharper Spears', icon: '🔱', t: 90, tg: 1.42, c: 200, cg: 9, max: 25, desc: '×1.2 damage' },
  { id: 'r_shell', name: 'Shell Sorting', icon: '🐚', t: 120, tg: 1.42, c: 300, cg: 9, max: 25, desc: '×1.2 Shells' },
  { id: 'r_mat', name: 'Material Science', icon: '🧪', t: 150, tg: 1.42, c: 400, cg: 9, max: 25, desc: '×1.2 materials' },
  { id: 'r_oxy', name: 'Deep Lungs', icon: '🫁', t: 240, tg: 1.55, c: 800, cg: 12, max: 10, desc: '+4s dive time' },
  { id: 'r_crit', name: 'Weak-Spot Study', icon: '🎯', t: 300, tg: 1.45, c: 1500, cg: 10, max: 20, desc: '+30% crit damage' },
  { id: 'r_boss', name: 'Gloom Analysis', icon: '🔬', t: 300, tg: 1.45, c: 2000, cg: 10, max: 20, desc: '×1.3 Guardian damage' },
  { id: 'r_start', name: 'Current Maps', icon: '🗺️', t: 600, tg: 1.6, c: 5000, cg: 14, max: 8, desc: 'Start dives 3% deeper' },
  { id: 'r_exp', name: 'Wren\'s Charts', icon: '🧭', t: 600, tg: 1.5, c: 5000, cg: 10, max: 15, desc: '+20% expedition haul', ch: 9 },
  { id: 'r_drift', name: 'Night Shift', icon: '🌙', t: 900, tg: 1.5, c: 8000, cg: 10, max: 15, desc: '+10% offline Shells (base 15%)' },
];

// Ebb Tide (prestige 1) Pearl tree
export const PEARL_TREE = [
  { id: 'p_dmg', name: 'Pearl Spears', icon: '🔱', base: 1, g: 1.7, max: 9999, desc: '×1.3 damage' },
  { id: 'p_shell', name: 'Pearl Purse', icon: '🐚', base: 1, g: 1.7, max: 9999, desc: '×1.3 Shells' },
  { id: 'p_start', name: 'Tidal Memory', icon: '🧭', base: 3, g: 2.2, max: 10, desc: 'Start dives 4% deeper' },
  { id: 'p_oxy', name: 'Bubble Reserve', icon: '🫁', base: 2, g: 2, max: 10, desc: '+3s dive time' },
  { id: 'p_pal', name: 'Sea Pals', icon: '🐬', base: 5, g: 3, max: 3, desc: 'Unlock a Companion who dives with you (Dolphin, Turtle, Puffer)' },
  { id: 'p_palp', name: 'Pal Training', icon: '🎓', base: 4, g: 1.8, max: 9999, desc: '×1.3 Companion power', req: 'p_pal' },
  { id: 'p_mat', name: 'Pearl Nets', icon: '🕸️', base: 2, g: 1.8, max: 9999, desc: '×1.25 materials' },
  { id: 'p_keep', name: 'Keepsake', icon: '🎁', base: 8, g: 3, max: 5, desc: 'Keep 10% of Workshop levels after an Ebb Tide' },
];
export const TRIDENT_TREE = [
  { id: 't_pearl', name: 'Riptide Pearls', icon: '🦪', base: 1, g: 2.0, max: 9999, desc: '×1.4 Pearls from Ebb Tide' },
  { id: 't_dmg', name: 'Trident Might', icon: '🔱', base: 1, g: 2.0, max: 9999, desc: '×1.5 damage' },
  { id: 't_od', name: 'Overdrive', icon: '💥', base: 2, g: 1, max: 1, desc: 'Unlock Overdrive (Space in a dive): triple fire rate for 6s' },
  { id: 't_odp', name: 'Overcharge', icon: '⚡', base: 2, g: 1.8, max: 20, desc: '+1s Overdrive, -1s cooldown', req: 't_od' },
  { id: 't_lab', name: 'Second Lab Bench', icon: '🧪', base: 3, g: 1, max: 1, desc: 'Research two projects at once' },
  { id: 't_exp', name: 'Extra Dock', icon: '⚓', base: 3, g: 4, max: 2, desc: '+1 expedition slot' },
  { id: 't_auto', name: 'Auto-Tide', icon: '🔁', base: 4, g: 1, max: 1, desc: 'Ebb Tide keeps your Pearl tree and auto-buys cheap Workshop levels' },
  { id: 't_mat', name: 'Deep Haul', icon: '⛏️', base: 2, g: 2.0, max: 9999, desc: '×1.5 materials and Shells' },
];
export const MOON_TREE = [
  { id: 'm_all', name: 'Moonlight', icon: '🌕', base: 1, g: 2.3, max: 9999, desc: '×1.8 damage and Shells' },
  { id: 'm_tri', name: 'Silver Tides', icon: '🌊', base: 1, g: 2.3, max: 9999, desc: '×1.5 Tridents from Riptide' },
  { id: 'm_beam', name: 'Moon Beam', icon: '🔦', base: 2, g: 1, max: 1, desc: 'Unlock Moon Beam (E in a dive): a huge piercing beam' },
  { id: 'm_beamp', name: 'Full Moon', icon: '🌝', base: 2, g: 1.8, max: 20, desc: '×1.5 Moon Beam power', req: 'm_beam' },
  { id: 'm_relic', name: 'Relic Hunter', icon: '🏺', base: 3, g: 2.5, max: 5, desc: 'Guardians can drop Relics (+1 Relic chance tier)' },
  { id: 'm_start', name: 'Moon Path', icon: '🛤️', base: 2, g: 2.5, max: 6, desc: 'Start dives 5% deeper' },
];
export const COMPANIONS = { dolphin: { name: 'Dolphin', icon: '🐬', desc: 'Fires extra harpoons (50% power)' }, turtle: { name: 'Turtle', icon: '🐢', desc: 'Shield absorbs hits; +50% hull' }, puffer: { name: 'Puffer', icon: '🐡', desc: 'Puffs a spiky bomb every 3s' } };

export const RARITY = [
  { name: 'Common', color: '#b9c6d3', w: 50 }, { name: 'Uncommon', color: '#6ee7a8', w: 28 }, { name: 'Rare', color: '#5ab8ff', w: 14 },
  { name: 'Epic', color: '#c18bff', w: 6 }, { name: 'Legendary', color: '#ffb547', w: 1.8 }, { name: 'Mythic', color: '#ff5fa2', w: 0.2 },
];
export const GEAR_SLOTS = {
  harpoon: { name: 'Harpoon', icon: '🔱', main: 'dmg', names: ['Pin Spear', 'Coral Harpoon', 'Kelp Lance', 'Brass Repeater', 'Frost Javelin', 'Magma Trident', 'Lumen Spear', 'Moon Harpoon'] },
  hull: { name: 'Hull', icon: '🛡️', main: 'hull', names: ['Tin Shell', 'Reef Armor', 'Woven Kelp Hull', 'Gearplate', 'Glacier Hull', 'Obsidian Hull', 'Pearl Hull', 'Moonsilver Hull'] },
  engine: { name: 'Engine', icon: '🌀', main: 'oxy', names: ['Paddle Fan', 'Bubble Jet', 'Vine Turbine', 'Clockwork Screw', 'Ice Thruster', 'Steam Jet', 'Glow Drive', 'Lunar Drive'] },
  charm: { name: 'Charm', icon: '🧿', main: 'shell', names: ['Lucky Pebble', 'Sand Dollar', 'Kelp Knot', 'Brass Locket', 'Snow Globe', 'Ember Heart', 'Glow Bead', 'Moon Charm'] },
};
export const AFFIXES = { crit: '+{v}% crit chance', mat: '+{v}% materials', boss: '+{v}% Guardian damage', rate: '+{v}% fire rate', speed: '+{v}% speed' };
export const RELICS = [
  ['Trident of Tides', '×2 damage'], ['Captain\'s Compass', 'Start 5% deeper'], ['Mermaid Comb', '×2 Shells'], ['Kraken Ink', 'Bombs ×3'],
  ['Pearl Crown', '×1.5 Pearls'], ['Frozen Hourglass', '+10s dive'], ['Lava Lamp', '×2 materials'], ['Moon Locket', '×1.5 Tridents'],
];

export const EXP_TIMES = [{ m: 10, label: '10 min' }, { m: 60, label: '1 hour' }, { m: 240, label: '4 hours' }, { m: 480, label: '8 hours' }];

// Story: 48 chapters across 4 acts. g = [type, value, world?]. Types: dist, boss, mat, tide, rip, moon, exp, gear, crew, friends.
const A = (w, t) => [w, t];
export const CHAPTERS = [
  // ACT I — The Gloom Rises (Shallows, Kelp)
  { t: 'A Bubble of Hope', w: 0, g: ['dist', 250], who: 'marlo', proj: 'Patch the Ark\'s hull', lines: ['marlo|Kai! The Moon Lantern fell from the sky and shattered. Its light is gone, and purple Gloom is clogging the whole sea.', 'kai|Then we clean it up. My little sub Minnow is ready!', 'marlo|Steer with WASD. Your harpoons fire bubbles of light all by themselves. Dive and bring back Shells!'] },
  { t: 'The Grumpy Shell', w: 0, g: ['boss', 400], who: 'marlo', proj: 'Fix the galley stove', lines: ['marlo|Something big is stuck in the Gloom at 400 metres. I hear a turtle crying.', 'kai|A Guardian? We\'ll wash the Gloom off and set it free.'] },
  { t: 'Pebble\'s Workshop', w: 0, g: ['mat', 60], who: 'pebble', proj: 'Build Pebble\'s workbench', lines: ['pebble|Hi hi hi! I\'m Pebble. Bring me Coral and I\'ll make your harpoon fire TWO bubbles. Maybe three!', 'kai|Deal. And can you build bubble bombs?', 'pebble|Already sketching them!'] },
  { t: 'A Glow in the Dark', w: 0, g: ['dist', 700], who: 'luma', proj: 'Set up Luma\'s lab', lines: ['luma|Greetings. I am Luma. I study the Gloom. Research takes time, but it keeps working even while you sleep.', 'kai|A lab that works overnight? Perfect.'] },
  { t: 'Riding the Current', w: 0, g: ['boss', 1200], who: 'marlo', proj: 'Hoist the sails', lines: ['marlo|The ocean currents can carry you deeper, so you start each dive closer to your best spot.', 'luma|And if the Guardian at 1200 metres is too tough, try an Ebb Tide. I left notes in the Tides tab.', 'kai|Then the Guardian at 1200 metres is next!'] },
  { t: 'The Ebb Tide', w: 0, g: ['tide', 1], who: 'luma', proj: 'Build the Tide Pool', lines: ['luma|When the tide goes out, the sea leaves Pearls behind. Ebb Tide resets your Shells and Workshop, but Pearls make you much stronger.', 'kai|Start over... but stronger? Let\'s try it!'] },
  { t: 'Into the Kelp', w: 1, g: ['boss', 2000, 0], who: 'marlo', proj: 'Chart the Kelp Cathedral', lines: ['marlo|The deepest Shallows Guardian guards the way to the Kelp Cathedral. Free it and the path opens.', 'kai|Hold on, little octopus. I\'m coming.'] },
  { t: 'Cathedral Light', w: 1, g: ['dist', 300], who: 'marlo', proj: 'Hang the kelp lanterns', lines: ['marlo|Look at that light through the kelp! But the Gloom here is tougher. Bring back Kelp Fiber.', 'kai|Kelp Coil upgrades, here I come.'] },
  { t: 'Wren the Navigator', w: 1, g: ['boss', 400], who: 'wren', proj: 'Build the expedition dock', lines: ['wren|Psst! I\'m Wren. I know secret routes. Free the manta at 400 metres and I\'ll send our friends on expeditions.', 'kai|Expeditions that bring treasure while I dive? Yes please.'] },
  { t: 'Friends Abroad', w: 1, g: ['exp', 1], who: 'wren', proj: 'Paint the map room', lines: ['wren|Send a crew out on an expedition. Longer trips bring bigger hauls, even while you\'re away.', 'kai|Bon voyage, everyone!'] },
  { t: 'The Old Grouper', w: 1, g: ['boss', 1200], who: 'marlo', proj: 'Grow the kelp garden', lines: ['marlo|Old Mossbeard has lived in this kelp for a hundred years. The Gloom has him wrapped up tight.', 'kai|Daily contracts are in, too. Something new to chase every day.'] },
  { t: 'End of the Beginning', w: 1, g: ['boss', 2000], who: 'luma', proj: 'Repair the Ark\'s engine', lines: ['luma|The Gloom is thicker the deeper we go. Something is feeding it from far below.', 'marlo|Then the Ark sails deeper. Act Two, crew!'] },
  // ACT II — The Drowned Kingdom (City, Frost)
  { t: 'Streets Under the Sea', w: 2, g: ['dist', 300], who: 'marlo', proj: 'Dock at the Sunken City', lines: ['marlo|Long ago merfolk built this city. Their brass machines still tick.', 'pebble|Brass gears! Oh, I could build SO many things!'] },
  { t: 'Tusk\'s Forge', w: 2, g: ['boss', 400], who: 'tusk', proj: 'Light Tusk\'s forge', lines: ['tusk|Hrrm. I am Tusk. I forge gear. Guardians and expeditions drop it. Common to Mythic.', 'kai|Mythic? I want one!', 'tusk|Patience, little keeper. Patience.'] },
  { t: 'The Gear Up', w: 2, g: ['gear', 2], who: 'tusk', proj: 'Build the armory racks', lines: ['tusk|Bring me something Rare or better. Salvage the rest for scrap and I will craft more.', 'kai|One rare piece of gear, coming right up.'] },
  { t: 'Clockwork Heart', w: 2, g: ['dist', 900], who: 'pebble', proj: 'Wind the city clock', lines: ['pebble|The city clock stopped when the Gloom came. If we wind it, the whole city wakes up!', 'kai|Let\'s go deep!'] },
  { t: 'The Lobster Admiral', w: 2, g: ['boss', 1200], who: 'marlo', proj: 'Raise the city flags', lines: ['marlo|The Lobster Admiral once guarded this city. Now he\'s gloomed up and grumpy.', 'kai|He\'ll be a friend again soon.'] },
  { t: 'The Riptide', w: 2, g: ['rip', 1], who: 'luma', proj: 'Build the Riptide Engine', lines: ['luma|A Riptide is a giant Ebb Tide. It washes away your Pearls too, but leaves Tridents. Tridents unlock Overdrive!', 'kai|Big reset, bigger power. Got it.'] },
  { t: 'King of the Ruins', w: 3, g: ['boss', 2000, 2], who: 'marlo', proj: 'Open the northern gate', lines: ['marlo|Beyond the last Guardian of the city is a gate to the frozen north.', 'kai|Bundle up, Minnow.'] },
  { t: 'Under the Ice', w: 3, g: ['dist', 300], who: 'marlo', proj: 'Insulate the Ark', lines: ['marlo|Brrr! The Frost Shelf. Even my whiskers are shivering.', 'kai|Frost Glass makes stronger lances. Let\'s mine it.'] },
  { t: 'Snowdrop', w: 3, g: ['boss', 400], who: 'wren', proj: 'Build a warm nursery', lines: ['wren|There\'s a baby seal stuck at 400 metres! Hurry!', 'kai|Hang on, Snowdrop!'] },
  { t: 'The Crew Grows', w: 3, g: ['crew', 25], who: 'marlo', proj: 'Expand the crew quarters', lines: ['marlo|A strong crew makes a strong ship. Train us with the critters you rescue during dives.', 'kai|Everyone gets a level up!'] },
  { t: 'Singing Icebergs', w: 3, g: ['boss', 1200], who: 'luma', proj: 'Tune the iceberg harp', lines: ['luma|The icebergs sing when the Gloom is gone. Listen... can you hear it?', 'kai|It\'s beautiful.'] },
  { t: 'The Frozen Door', w: 3, g: ['boss', 2000], who: 'marlo', proj: 'Thaw the deep passage', lines: ['marlo|Under the ice there\'s a crack leading to warm water... and a strange glow.', 'luma|The source of the Gloom is getting closer. Act Three.'] },
  // ACT III — Fire and Darkness (Vents, Abyss)
  { t: 'Warm Waters', w: 4, g: ['dist', 300], who: 'marlo', proj: 'Heat-shield the Ark', lines: ['marlo|The Ember Vents! Hot water bubbling from the sea floor.', 'pebble|Ember Stone makes the hottest forge. Tusk will be thrilled.'] },
  { t: 'Cinder the Eel', w: 4, g: ['boss', 400], who: 'tusk', proj: 'Build the ember furnace', lines: ['tusk|A lava eel. Strong. Fast. Gloomed. Free it and the furnace burns hotter.', 'kai|Overdrive, here we go!'] },
  { t: 'Forged in Fire', w: 4, g: ['gear', 3], who: 'tusk', proj: 'Temper the great anvil', lines: ['tusk|An Epic piece. Find one or forge one. Then you are ready for the deep.', 'kai|Epic gear, here I come.'] },
  { t: 'The Vent Field', w: 4, g: ['dist', 900], who: 'marlo', proj: 'Map the vent field', lines: ['marlo|Hundreds of chimneys, all puffing warm water. Mind the Gloom!', 'kai|Steady... steady...'] },
  { t: 'Rock and Roll', w: 4, g: ['boss', 1200], who: 'pebble', proj: 'Build the steam pump', lines: ['pebble|A rock crab the size of a house! Gloomed! Help him!', 'kai|Rock and roll, Minnow!'] },
  { t: 'The Dark Below', w: 5, g: ['boss', 2000, 4], who: 'nyx', proj: 'Lower the deep lantern', lines: ['nyx|Hello, up there! I\'m Nyx. I live in the Abyss. Free the last vent Guardian and I\'ll light your way down.', 'kai|A friend in the dark. Thank you, Nyx!'] },
  { t: 'Lanterns in the Deep', w: 5, g: ['dist', 300], who: 'nyx', proj: 'String the glow lanterns', lines: ['nyx|Down here everyone makes their own light. Glow Pearls make the brightest lamps.', 'kai|It\'s like swimming through stars.'] },
  { t: 'Moonrise', w: 5, g: ['moon', 1], who: 'luma', proj: 'Build the Moon Altar', lines: ['luma|The biggest reset of all. A Moonrise washes away Tridents too, but grants Moonstones. They hold the Moon Lantern\'s power.', 'kai|For the Lantern. Moonrise!'] },
  { t: 'Glimmer', w: 5, g: ['boss', 400], who: 'nyx', proj: 'Build the abyss beacon', lines: ['nyx|My friend Glimmer is trapped! The Gloom is so dark here.', 'kai|Moon Beam ready. Let\'s go.'] },
  { t: 'Ghost Shark', w: 5, g: ['boss', 1200], who: 'nyx', proj: 'Grow the glow garden', lines: ['nyx|Hush the ghost shark is shy, not scary. The Gloom made him angry.', 'kai|Shy friends are the best friends.'] },
  { t: 'Many Friends', w: 5, g: ['friends', 15], who: 'marlo', proj: 'Build the friendship hall', lines: ['marlo|Look how many friends we\'ve freed! Every one makes the Ark stronger.', 'kai|And there are more down there.'] },
  { t: 'Edge of the Trench', w: 5, g: ['boss', 2000], who: 'luma', proj: 'Reinforce the pressure hull', lines: ['luma|Below the Abyss is the Moon Trench. That is where the Lantern fell.', 'marlo|Last act, crew. Let\'s bring the light home.'] },
  // ACT IV — The Moon Lantern (Trench + finale)
  { t: 'The Moon Trench', w: 6, g: ['dist', 300], who: 'marlo', proj: 'Descend into the Trench', lines: ['marlo|Silver sand, silver rocks... and the Gloom is thicker than ever.', 'kai|Moonsilver builds the Lunar Engine. Let\'s gather it.'] },
  { t: 'A Song in the Dark', w: 6, g: ['boss', 400], who: 'orla', proj: 'Build the singing bell', lines: ['orla|Little keeper... I am Orla, the Moon Whale. I guarded the Lantern before it fell. Free my friends.', 'kai|Orla! We\'ll fix everything, I promise.'] },
  { t: 'Moonsilver', w: 6, g: ['mat', 2500], who: 'pebble', proj: 'Forge the Lantern frame', lines: ['pebble|To rebuild the Moon Lantern we need a LOT of Moonsilver. Like... a lot a lot.', 'kai|Then we dive a lot a lot.'] },
  { t: 'The Lantern Shards', w: 6, g: ['dist', 900], who: 'orla', proj: 'Collect the first shard', lines: ['orla|The Lantern broke into pieces. The first shard glows deep in the Trench.', 'kai|I see it shining!'] },
  { t: 'Selene', w: 6, g: ['boss', 1200], who: 'orla', proj: 'Collect the second shard', lines: ['orla|Selene the moon ray holds the second shard inside the Gloom.', 'kai|Free her, get the shard. Two for one!'] },
  { t: 'Crew of Legends', w: 6, g: ['crew', 100], who: 'marlo', proj: 'Build the captain\'s bridge', lines: ['marlo|For the final dive we need the strongest crew this sea has ever seen.', 'tusk|Hrrm. Train hard, little keeper.'] },
  { t: 'Old Tide', w: 6, g: ['boss', 2000], who: 'orla', proj: 'Collect the third shard', lines: ['orla|Old Tide, the ancient leviathan, sleeps on the third shard. The Gloom gives him bad dreams.', 'kai|Time to wake up, Old Tide.'] },
  { t: 'Everyone Together', w: 6, g: ['friends', 21], who: 'wren', proj: 'Gather the whole fleet', lines: ['wren|Every friend, from every sea. Free them all and they will light the way down.', 'kai|All twenty-one. Let\'s do it.'] },
  { t: 'Deeper Still', w: 6, g: ['dist', 2800], who: 'nyx', proj: 'Collect the last shard', lines: ['nyx|Past the last Guardian the water goes black, even for me. But I can see the Gloom Heart beating.', 'kai|The last shard is there. I know it.'] },
  { t: 'Second Moonrise', w: 6, g: ['moon', 3], who: 'luma', proj: 'Charge the Lantern core', lines: ['luma|The Lantern core needs moonlight. Three Moonrises will charge it.', 'kai|Charging... charging...'] },
  { t: 'The Gloom Heart', w: 6, g: ['boss', 3600], who: 'orla', proj: 'Rebuild the Moon Lantern', lines: ['orla|At 3600 metres beats the Gloom Heart. It is not evil, little keeper. It is lonely, and it is lost in the dark.', 'kai|Then we\'ll bring it light.'] },
  { t: 'The Moon Lantern', w: 6, g: ['dist', 3700], who: 'orla', proj: 'Lift the Lantern to the sky', lines: ['orla|The Heart is calm. Carry the Lantern up... and let the whole sea shine again.', 'marlo|Kai... you did it. You really did it.', 'kai|WE did it. Every one of us.'] },
];
CHAPTERS.forEach((c, i) => { c.i = i; c.act = Math.floor(i / 12); if (c.g[0] === 'boss' || c.g[0] === 'dist') c.g[2] ??= c.w; });
export const ACTS = ['The Gloom Rises', 'The Drowned Kingdom', 'Fire and Darkness', 'The Moon Lantern'];
// Ark restoration time for chapter i (seconds). This real-time gate is the story spine.
export const projTime = i => Math.round(112 * Math.pow(1.1, i));
// Feature is available once g.chapter (current chapter index) >= value.
export const FEATURE_CH = { lab: 3, tide: 4, exp: 9, daily: 10, crew: 2, gear: 13, rip: 17, moon: 31 };
export const CREW_CH = { kai: 0, marlo: 0, pebble: 2, luma: 3, wren: 8, tusk: 13, nyx: 29, orla: 37 };
