(()=>{var Ld=Object.defineProperty;var Dd=(i,e)=>{for(var t in e)Ld(i,t,{get:e[t],enumerable:!0})};var Nr={};Dd(Nr,{ACHS:()=>Gi,ACTS:()=>Fd,AFFIXES:()=>ro,BOSS_EVERY:()=>Cs,CHAPTERS:()=>Qt,COMPANIONS:()=>Ud,CREW:()=>En,CREW_CH:()=>lo,EXP_TIMES:()=>Nd,FEATURE_CH:()=>Rs,FINAL_BOSS_AT:()=>Hn,FRIENDS:()=>zn,GEAR_SLOTS:()=>mr,MOON_TREE:()=>so,PEARL_TREE:()=>no,RARITY:()=>ci,RELICS:()=>ao,RESEARCH:()=>Li,SAVE_KEY:()=>Is,TRIDENT_TREE:()=>io,UPGRADES:()=>Ii,WORLDS:()=>ut,achCount:()=>vr,autoBuy:()=>Fh,blobHp:()=>Ns,blobRew:()=>gr,buyTree:()=>uo,buyUpg:()=>br,checkAchs:()=>Ao,claimDaily:()=>To,claimExp:()=>Co,claimProject:()=>bo,clock:()=>xt,contactDmg:()=>Dh,craft:()=>go,craftCost:()=>Cr,crewCost:()=>Bs,crewOpen:()=>Ds,crewTotal:()=>ho,curOf:()=>yr,dailyTick:()=>Di,dayKey:()=>Oh,doMoon:()=>wo,doRip:()=>So,doTide:()=>Mo,ensureDaily:()=>Eo,equip:()=>Pr,expHaul:()=>Er,expSlots:()=>Oi,exportSave:()=>Fo,finishRun:()=>Lo,fmt:()=>ui,fmtTime:()=>Bo,friendCount:()=>Ui,gP:()=>_r,gearMaxLvl:()=>Bi,gearName:()=>Os,gearPower:()=>Gn,gearUp:()=>xo,gearUpCost:()=>Ar,goalDone:()=>ki,goalProgress:()=>Ir,goalText:()=>Lr,has:()=>st,importSave:()=>Oo,labSlots:()=>Fi,load:()=>Uo,matAmt:()=>xr,migrate:()=>No,moonGain:()=>Vi,newGame:()=>Vn,newRun:()=>Po,offline:()=>Ro,openBox:()=>vo,pearlGain:()=>hi,projCost:()=>zi,projTime:()=>oo,resCost:()=>wr,resTime:()=>Sr,rollGear:()=>mo,salvage:()=>Rr,salvageVal:()=>Tr,save:()=>Do,setRng:()=>Od,startExp:()=>po,startProject:()=>yo,startResearch:()=>fo,stats:()=>Us,stepRun:()=>Io,tickTimers:()=>Ur,tideP:()=>Dr,topWorld:()=>xn,trainCrew:()=>_o,treeCost:()=>Mr,tridentGain:()=>Hi,upgAvail:()=>Fs,upgCost:()=>Ni,worldOpen:()=>on,worldOpenCh:()=>Ls});var ut=[{id:"shallows",name:"Sunlit Shallows",mat:"coral",matName:"Coral",icon:"\u{1FAB8}",fog:2864073,floor:15192994,water:1744831,accent:16748451,desc:"Warm turquoise reefs where the Gloom first crept in."},{id:"kelp",name:"Kelp Cathedral",mat:"kelp",matName:"Kelp Fiber",icon:"\u{1F33F}",fog:2067050,floor:6060602,water:1205839,accent:11992938,desc:"Towering kelp columns and green cathedral light."},{id:"city",name:"Sunken City",mat:"brass",matName:"Brass Gears",icon:"\u2699\uFE0F",fog:3108751,floor:9078135,water:1920102,accent:16763243,desc:"Ruins of an old mer-city, full of brass machines."},{id:"frost",name:"Frost Shelf",mat:"frost",matName:"Frost Glass",icon:"\u2744\uFE0F",fog:9425135,floor:15267071,water:4886456,accent:12448767,desc:"Under the polar ice, where icebergs sing."},{id:"vents",name:"Ember Vents",mat:"ember",matName:"Ember Stone",icon:"\u{1F525}",fog:4860464,floor:2761254,water:2758688,accent:16742959,desc:"Black smokers glowing with warm volcanic light."},{id:"abyss",name:"Glowing Abyss",mat:"glow",matName:"Glow Pearls",icon:"\u2728",fog:791616,floor:1317434,water:395812,accent:8189951,desc:"The deep dark, lit only by bioluminescent friends."},{id:"trench",name:"Moon Trench",mat:"moon",matName:"Moonsilver",icon:"\u{1F319}",fog:2762832,floor:10133704,water:1381434,accent:15262975,desc:"The deepest place in the sea, where the Moon Lantern fell."}];ut.forEach((i,e)=>{i.i=e,i.hp=Math.pow(8e6,e),i.rew=Math.pow(33,e)});var Cs=400,zn=[["Shelly","sea turtle","shell",8379530],["Puff","pufferfish","dmg",16765286],["Coralie","coral crab","mat",16748451],["Sway","manta ray","rate",10146303],["Mossbeard","old grouper","hull",10208362],["Tangle","octopus","shell",13073919],["Gizmo","clockwork fish","dmg",16763243],["Bellhop","bell jelly","rate",16771496],["Admiral","giant lobster","crit",16739163],["Snowdrop","baby seal","hull",15923199],["Narwhal Nils","narwhal","dmg",12448767],["Aurora","ice jelly","mat",10217471],["Cinder","lava eel","crit",16742959],["Basalt","rock crab","hull",9268835],["Fumaro","vent shrimp","shell",16753515],["Glimmer","lantern squid","rate",8189951],["Hush","ghost shark","dmg",11778303],["Twinkle","comb jelly","mat",16752117],["Selene","moon ray","crit",15262975],["Crescent","silver nautilus","shell",14210303],["Old Tide","ancient leviathan","dmg",10853375]].map(([i,e,t,n],s)=>({i:s,name:i,kind:e,stat:t,color:n,world:Math.floor(s/3),at:[400,1200,2e3][s%3]})),Hn=3600,En={kai:{name:"Kai",role:"Keeper & pilot",bonus:null},marlo:{name:"Captain Marlo",role:"Captain of the Ark",bonus:"shell",per:.08,desc:"+8% Shells per level"},pebble:{name:"Pebble",role:"Engineer",bonus:"oxy",per:1.5,desc:"+1.5s Oxygen per level"},luma:{name:"Luma",role:"Scientist",bonus:"lab",per:.03,desc:"3% faster research per level"},wren:{name:"Wren",role:"Navigator",bonus:"exp",per:.1,desc:"+10% expedition haul per level"},tusk:{name:"Tusk",role:"Forgemaster",bonus:"gear",per:.05,desc:"+5% gear power per level"},nyx:{name:"Nyx",role:"Abyss guide",bonus:"crit",per:.1,desc:"+10% crit damage per level"},orla:{name:"Orla",role:"The Moon Whale",bonus:"all",per:.06,desc:"+6% damage and Shells per level"}},Ii=[{id:"dmg",name:"Harpoon Power",icon:"\u{1F531}",cur:"shell",base:6,g:1.18,max:9999,desc:"\xD71.1 harpoon damage",tab:"Harpoon"},{id:"rate",name:"Rapid Reload",icon:"\u26A1",cur:"shell",base:14,g:1.19,max:60,desc:"+6% fire rate",tab:"Harpoon"},{id:"crit",name:"Lucky Shot",icon:"\u{1F340}",cur:"shell",base:60,g:1.24,max:30,desc:"+2% crit chance (crits \xD73)",tab:"Harpoon"},{id:"multi",name:"Twin Barrels",icon:"\u{1F3AF}",cur:"shell",base:900,g:40,max:4,desc:"+1 harpoon per volley",tab:"Harpoon",ch:2},{id:"bomb",name:"Bubble Bomb",icon:"\u{1FAE7}",cur:"shell",base:300,g:1.3,max:9999,desc:"Every 4s a bubble bomb pops nearby Gloom. \xD71.08 bomb power per level",tab:"Harpoon",ch:2},{id:"hull",name:"Hull Plating",icon:"\u{1F6E1}\uFE0F",cur:"shell",base:10,g:1.17,max:9999,desc:"\xD71.15 hull strength",tab:"Sub"},{id:"oxy",name:"Oxygen Tanks",icon:"\u{1FAC1}",cur:"shell",base:25,g:1.32,max:25,desc:"+3s dive time",tab:"Sub"},{id:"speed",name:"Propeller",icon:"\u{1F300}",cur:"shell",base:35,g:1.25,max:30,desc:"+4% cruising speed",tab:"Sub"},{id:"shell",name:"Shell Sense",icon:"\u{1F41A}",cur:"shell",base:40,g:1.22,max:9999,desc:"\xD71.06 Shells from Gloom",tab:"Sub"},{id:"start",name:"Current Rider",icon:"\u{1F9ED}",cur:"shell",base:500,g:2.2,max:12,desc:"Start dives 4% deeper toward your best distance",tab:"Sub",ch:4},{id:"reef",name:"Reef Blessing",icon:"\u{1FAB8}",cur:"coral",base:12,g:1.35,max:9999,desc:"\xD71.15 damage",tab:"Materials"},{id:"kcoil",name:"Kelp Coil",icon:"\u{1F33F}",cur:"kelp",base:12,g:1.36,max:9999,desc:"\xD71.1 Shells and materials",tab:"Materials"},{id:"gears",name:"Brass Gearbox",icon:"\u2699\uFE0F",cur:"brass",base:12,g:1.38,max:9999,desc:"\xD71.15 damage, \xD71.08 hull",tab:"Materials"},{id:"lance",name:"Frost Lance",icon:"\u2744\uFE0F",cur:"frost",base:12,g:1.4,max:9999,desc:"\xD71.12 damage, +4% crit damage",tab:"Materials"},{id:"forge",name:"Ember Forge",icon:"\u{1F525}",cur:"ember",base:12,g:1.42,max:9999,desc:"\xD71.2 Guardian damage, \xD71.1 damage",tab:"Materials"},{id:"glowl",name:"Glow Lamp",icon:"\u2728",cur:"glow",base:12,g:1.44,max:9999,desc:"\xD71.12 Shells, \xD71.1 damage",tab:"Materials"},{id:"lunar",name:"Lunar Engine",icon:"\u{1F319}",cur:"moon",base:12,g:1.46,max:9999,desc:"\xD71.15 damage and Shells",tab:"Materials"}],Li=[{id:"r_dmg",name:"Sharper Spears",icon:"\u{1F531}",t:90,tg:1.42,c:200,cg:9,max:25,desc:"\xD71.2 damage"},{id:"r_shell",name:"Shell Sorting",icon:"\u{1F41A}",t:120,tg:1.42,c:300,cg:9,max:25,desc:"\xD71.2 Shells"},{id:"r_mat",name:"Material Science",icon:"\u{1F9EA}",t:150,tg:1.42,c:400,cg:9,max:25,desc:"\xD71.2 materials"},{id:"r_oxy",name:"Deep Lungs",icon:"\u{1FAC1}",t:240,tg:1.55,c:800,cg:12,max:10,desc:"+4s dive time"},{id:"r_crit",name:"Weak-Spot Study",icon:"\u{1F3AF}",t:300,tg:1.45,c:1500,cg:10,max:20,desc:"+30% crit damage"},{id:"r_boss",name:"Gloom Analysis",icon:"\u{1F52C}",t:300,tg:1.45,c:2e3,cg:10,max:20,desc:"\xD71.3 Guardian damage"},{id:"r_start",name:"Current Maps",icon:"\u{1F5FA}\uFE0F",t:600,tg:1.6,c:5e3,cg:14,max:8,desc:"Start dives 3% deeper"},{id:"r_exp",name:"Wren's Charts",icon:"\u{1F9ED}",t:600,tg:1.5,c:5e3,cg:10,max:15,desc:"+20% expedition haul",ch:9},{id:"r_drift",name:"Night Shift",icon:"\u{1F319}",t:900,tg:1.5,c:8e3,cg:10,max:15,desc:"+10% offline Shells (base 15%)"}],no=[{id:"p_dmg",name:"Pearl Spears",icon:"\u{1F531}",base:1,g:1.7,max:9999,desc:"\xD71.3 damage"},{id:"p_shell",name:"Pearl Purse",icon:"\u{1F41A}",base:1,g:1.7,max:9999,desc:"\xD71.3 Shells"},{id:"p_start",name:"Tidal Memory",icon:"\u{1F9ED}",base:3,g:2.2,max:10,desc:"Start dives 4% deeper"},{id:"p_oxy",name:"Bubble Reserve",icon:"\u{1FAC1}",base:2,g:2,max:10,desc:"+3s dive time"},{id:"p_pal",name:"Sea Pals",icon:"\u{1F42C}",base:5,g:3,max:3,desc:"Unlock a Companion who dives with you (Dolphin, Turtle, Puffer)"},{id:"p_palp",name:"Pal Training",icon:"\u{1F393}",base:4,g:1.8,max:9999,desc:"\xD71.3 Companion power",req:"p_pal"},{id:"p_mat",name:"Pearl Nets",icon:"\u{1F578}\uFE0F",base:2,g:1.8,max:9999,desc:"\xD71.25 materials"},{id:"p_keep",name:"Keepsake",icon:"\u{1F381}",base:8,g:3,max:5,desc:"Keep 10% of Workshop levels after an Ebb Tide"}],io=[{id:"t_pearl",name:"Riptide Pearls",icon:"\u{1F9AA}",base:1,g:2,max:9999,desc:"\xD71.4 Pearls from Ebb Tide"},{id:"t_dmg",name:"Trident Might",icon:"\u{1F531}",base:1,g:2,max:9999,desc:"\xD71.5 damage"},{id:"t_od",name:"Overdrive",icon:"\u{1F4A5}",base:2,g:1,max:1,desc:"Unlock Overdrive (Space in a dive): triple fire rate for 6s"},{id:"t_odp",name:"Overcharge",icon:"\u26A1",base:2,g:1.8,max:20,desc:"+1s Overdrive, -1s cooldown",req:"t_od"},{id:"t_lab",name:"Second Lab Bench",icon:"\u{1F9EA}",base:3,g:1,max:1,desc:"Research two projects at once"},{id:"t_exp",name:"Extra Dock",icon:"\u2693",base:3,g:4,max:2,desc:"+1 expedition slot"},{id:"t_auto",name:"Auto-Tide",icon:"\u{1F501}",base:4,g:1,max:1,desc:"Ebb Tide keeps your Pearl tree and auto-buys cheap Workshop levels"},{id:"t_mat",name:"Deep Haul",icon:"\u26CF\uFE0F",base:2,g:2,max:9999,desc:"\xD71.5 materials and Shells"}],so=[{id:"m_all",name:"Moonlight",icon:"\u{1F315}",base:1,g:2.3,max:9999,desc:"\xD71.8 damage and Shells"},{id:"m_tri",name:"Silver Tides",icon:"\u{1F30A}",base:1,g:2.3,max:9999,desc:"\xD71.5 Tridents from Riptide"},{id:"m_beam",name:"Moon Beam",icon:"\u{1F526}",base:2,g:1,max:1,desc:"Unlock Moon Beam (E in a dive): a huge piercing beam"},{id:"m_beamp",name:"Full Moon",icon:"\u{1F31D}",base:2,g:1.8,max:20,desc:"\xD71.5 Moon Beam power",req:"m_beam"},{id:"m_relic",name:"Relic Hunter",icon:"\u{1F3FA}",base:3,g:2.5,max:5,desc:"Guardians can drop Relics (+1 Relic chance tier)"},{id:"m_start",name:"Moon Path",icon:"\u{1F6E4}\uFE0F",base:2,g:2.5,max:6,desc:"Start dives 5% deeper"}],Ud={dolphin:{name:"Dolphin",icon:"\u{1F42C}",desc:"Fires extra harpoons (50% power)"},turtle:{name:"Turtle",icon:"\u{1F422}",desc:"Shield absorbs hits; +50% hull"},puffer:{name:"Puffer",icon:"\u{1F421}",desc:"Puffs a spiky bomb every 3s"}},ci=[{name:"Common",color:"#b9c6d3",w:50},{name:"Uncommon",color:"#6ee7a8",w:28},{name:"Rare",color:"#5ab8ff",w:14},{name:"Epic",color:"#c18bff",w:6},{name:"Legendary",color:"#ffb547",w:1.8},{name:"Mythic",color:"#ff5fa2",w:.2}],mr={harpoon:{name:"Harpoon",icon:"\u{1F531}",main:"dmg",names:["Pin Spear","Coral Harpoon","Kelp Lance","Brass Repeater","Frost Javelin","Magma Trident","Lumen Spear","Moon Harpoon"]},hull:{name:"Hull",icon:"\u{1F6E1}\uFE0F",main:"hull",names:["Tin Shell","Reef Armor","Woven Kelp Hull","Gearplate","Glacier Hull","Obsidian Hull","Pearl Hull","Moonsilver Hull"]},engine:{name:"Engine",icon:"\u{1F300}",main:"oxy",names:["Paddle Fan","Bubble Jet","Vine Turbine","Clockwork Screw","Ice Thruster","Steam Jet","Glow Drive","Lunar Drive"]},charm:{name:"Charm",icon:"\u{1F9FF}",main:"shell",names:["Lucky Pebble","Sand Dollar","Kelp Knot","Brass Locket","Snow Globe","Ember Heart","Glow Bead","Moon Charm"]}},ro={crit:"+{v}% crit chance",mat:"+{v}% materials",boss:"+{v}% Guardian damage",rate:"+{v}% fire rate",speed:"+{v}% speed"},ao=[["Trident of Tides","\xD72 damage"],["Captain's Compass","Start 5% deeper"],["Mermaid Comb","\xD72 Shells"],["Kraken Ink","Bombs \xD73"],["Pearl Crown","\xD71.5 Pearls"],["Frozen Hourglass","+10s dive"],["Lava Lamp","\xD72 materials"],["Moon Locket","\xD71.5 Tridents"]],Nd=[{m:10,label:"10 min"},{m:60,label:"1 hour"},{m:240,label:"4 hours"},{m:480,label:"8 hours"}];var Qt=[{t:"A Bubble of Hope",w:0,g:["dist",250],who:"marlo",proj:"Patch the Ark's hull",lines:["marlo|Kai! The Moon Lantern fell from the sky and shattered. Its light is gone, and purple Gloom is clogging the whole sea.","kai|Then we clean it up. My little sub Minnow is ready!","marlo|Steer with WASD. Your harpoons fire bubbles of light all by themselves. Dive and bring back Shells!"]},{t:"The Grumpy Shell",w:0,g:["boss",400],who:"marlo",proj:"Fix the galley stove",lines:["marlo|Something big is stuck in the Gloom at 400 metres. I hear a turtle crying.","kai|A Guardian? We'll wash the Gloom off and set it free."]},{t:"Pebble's Workshop",w:0,g:["mat",60],who:"pebble",proj:"Build Pebble's workbench",lines:["pebble|Hi hi hi! I'm Pebble. Bring me Coral and I'll make your harpoon fire TWO bubbles. Maybe three!","kai|Deal. And can you build bubble bombs?","pebble|Already sketching them!"]},{t:"A Glow in the Dark",w:0,g:["dist",700],who:"luma",proj:"Set up Luma's lab",lines:["luma|Greetings. I am Luma. I study the Gloom. Research takes time, but it keeps working even while you sleep.","kai|A lab that works overnight? Perfect."]},{t:"Riding the Current",w:0,g:["boss",1200],who:"marlo",proj:"Hoist the sails",lines:["marlo|The ocean currents can carry you deeper, so you start each dive closer to your best spot.","luma|And if the Guardian at 1200 metres is too tough, try an Ebb Tide. I left notes in the Tides tab.","kai|Then the Guardian at 1200 metres is next!"]},{t:"The Ebb Tide",w:0,g:["tide",1],who:"luma",proj:"Build the Tide Pool",lines:["luma|When the tide goes out, the sea leaves Pearls behind. Ebb Tide resets your Shells and Workshop, but Pearls make you much stronger.","kai|Start over... but stronger? Let's try it!"]},{t:"Into the Kelp",w:1,g:["boss",2e3,0],who:"marlo",proj:"Chart the Kelp Cathedral",lines:["marlo|The deepest Shallows Guardian guards the way to the Kelp Cathedral. Free it and the path opens.","kai|Hold on, little octopus. I'm coming."]},{t:"Cathedral Light",w:1,g:["dist",300],who:"marlo",proj:"Hang the kelp lanterns",lines:["marlo|Look at that light through the kelp! But the Gloom here is tougher. Bring back Kelp Fiber.","kai|Kelp Coil upgrades, here I come."]},{t:"Wren the Navigator",w:1,g:["boss",400],who:"wren",proj:"Build the expedition dock",lines:["wren|Psst! I'm Wren. I know secret routes. Free the manta at 400 metres and I'll send our friends on expeditions.","kai|Expeditions that bring treasure while I dive? Yes please."]},{t:"Friends Abroad",w:1,g:["exp",1],who:"wren",proj:"Paint the map room",lines:["wren|Send a crew out on an expedition. Longer trips bring bigger hauls, even while you're away.","kai|Bon voyage, everyone!"]},{t:"The Old Grouper",w:1,g:["boss",1200],who:"marlo",proj:"Grow the kelp garden",lines:["marlo|Old Mossbeard has lived in this kelp for a hundred years. The Gloom has him wrapped up tight.","kai|Daily contracts are in, too. Something new to chase every day."]},{t:"End of the Beginning",w:1,g:["boss",2e3],who:"luma",proj:"Repair the Ark's engine",lines:["luma|The Gloom is thicker the deeper we go. Something is feeding it from far below.","marlo|Then the Ark sails deeper. Act Two, crew!"]},{t:"Streets Under the Sea",w:2,g:["dist",300],who:"marlo",proj:"Dock at the Sunken City",lines:["marlo|Long ago merfolk built this city. Their brass machines still tick.","pebble|Brass gears! Oh, I could build SO many things!"]},{t:"Tusk's Forge",w:2,g:["boss",400],who:"tusk",proj:"Light Tusk's forge",lines:["tusk|Hrrm. I am Tusk. I forge gear. Guardians and expeditions drop it. Common to Mythic.","kai|Mythic? I want one!","tusk|Patience, little keeper. Patience."]},{t:"The Gear Up",w:2,g:["gear",2],who:"tusk",proj:"Build the armory racks",lines:["tusk|Bring me something Rare or better. Salvage the rest for scrap and I will craft more.","kai|One rare piece of gear, coming right up."]},{t:"Clockwork Heart",w:2,g:["dist",900],who:"pebble",proj:"Wind the city clock",lines:["pebble|The city clock stopped when the Gloom came. If we wind it, the whole city wakes up!","kai|Let's go deep!"]},{t:"The Lobster Admiral",w:2,g:["boss",1200],who:"marlo",proj:"Raise the city flags",lines:["marlo|The Lobster Admiral once guarded this city. Now he's gloomed up and grumpy.","kai|He'll be a friend again soon."]},{t:"The Riptide",w:2,g:["rip",1],who:"luma",proj:"Build the Riptide Engine",lines:["luma|A Riptide is a giant Ebb Tide. It washes away your Pearls too, but leaves Tridents. Tridents unlock Overdrive!","kai|Big reset, bigger power. Got it."]},{t:"King of the Ruins",w:3,g:["boss",2e3,2],who:"marlo",proj:"Open the northern gate",lines:["marlo|Beyond the last Guardian of the city is a gate to the frozen north.","kai|Bundle up, Minnow."]},{t:"Under the Ice",w:3,g:["dist",300],who:"marlo",proj:"Insulate the Ark",lines:["marlo|Brrr! The Frost Shelf. Even my whiskers are shivering.","kai|Frost Glass makes stronger lances. Let's mine it."]},{t:"Snowdrop",w:3,g:["boss",400],who:"wren",proj:"Build a warm nursery",lines:["wren|There's a baby seal stuck at 400 metres! Hurry!","kai|Hang on, Snowdrop!"]},{t:"The Crew Grows",w:3,g:["crew",25],who:"marlo",proj:"Expand the crew quarters",lines:["marlo|A strong crew makes a strong ship. Train us with the critters you rescue during dives.","kai|Everyone gets a level up!"]},{t:"Singing Icebergs",w:3,g:["boss",1200],who:"luma",proj:"Tune the iceberg harp",lines:["luma|The icebergs sing when the Gloom is gone. Listen... can you hear it?","kai|It's beautiful."]},{t:"The Frozen Door",w:3,g:["boss",2e3],who:"marlo",proj:"Thaw the deep passage",lines:["marlo|Under the ice there's a crack leading to warm water... and a strange glow.","luma|The source of the Gloom is getting closer. Act Three."]},{t:"Warm Waters",w:4,g:["dist",300],who:"marlo",proj:"Heat-shield the Ark",lines:["marlo|The Ember Vents! Hot water bubbling from the sea floor.","pebble|Ember Stone makes the hottest forge. Tusk will be thrilled."]},{t:"Cinder the Eel",w:4,g:["boss",400],who:"tusk",proj:"Build the ember furnace",lines:["tusk|A lava eel. Strong. Fast. Gloomed. Free it and the furnace burns hotter.","kai|Overdrive, here we go!"]},{t:"Forged in Fire",w:4,g:["gear",3],who:"tusk",proj:"Temper the great anvil",lines:["tusk|An Epic piece. Find one or forge one. Then you are ready for the deep.","kai|Epic gear, here I come."]},{t:"The Vent Field",w:4,g:["dist",900],who:"marlo",proj:"Map the vent field",lines:["marlo|Hundreds of chimneys, all puffing warm water. Mind the Gloom!","kai|Steady... steady..."]},{t:"Rock and Roll",w:4,g:["boss",1200],who:"pebble",proj:"Build the steam pump",lines:["pebble|A rock crab the size of a house! Gloomed! Help him!","kai|Rock and roll, Minnow!"]},{t:"The Dark Below",w:5,g:["boss",2e3,4],who:"nyx",proj:"Lower the deep lantern",lines:["nyx|Hello, up there! I'm Nyx. I live in the Abyss. Free the last vent Guardian and I'll light your way down.","kai|A friend in the dark. Thank you, Nyx!"]},{t:"Lanterns in the Deep",w:5,g:["dist",300],who:"nyx",proj:"String the glow lanterns",lines:["nyx|Down here everyone makes their own light. Glow Pearls make the brightest lamps.","kai|It's like swimming through stars."]},{t:"Moonrise",w:5,g:["moon",1],who:"luma",proj:"Build the Moon Altar",lines:["luma|The biggest reset of all. A Moonrise washes away Tridents too, but grants Moonstones. They hold the Moon Lantern's power.","kai|For the Lantern. Moonrise!"]},{t:"Glimmer",w:5,g:["boss",400],who:"nyx",proj:"Build the abyss beacon",lines:["nyx|My friend Glimmer is trapped! The Gloom is so dark here.","kai|Moon Beam ready. Let's go."]},{t:"Ghost Shark",w:5,g:["boss",1200],who:"nyx",proj:"Grow the glow garden",lines:["nyx|Hush the ghost shark is shy, not scary. The Gloom made him angry.","kai|Shy friends are the best friends."]},{t:"Many Friends",w:5,g:["friends",15],who:"marlo",proj:"Build the friendship hall",lines:["marlo|Look how many friends we've freed! Every one makes the Ark stronger.","kai|And there are more down there."]},{t:"Edge of the Trench",w:5,g:["boss",2e3],who:"luma",proj:"Reinforce the pressure hull",lines:["luma|Below the Abyss is the Moon Trench. That is where the Lantern fell.","marlo|Last act, crew. Let's bring the light home."]},{t:"The Moon Trench",w:6,g:["dist",300],who:"marlo",proj:"Descend into the Trench",lines:["marlo|Silver sand, silver rocks... and the Gloom is thicker than ever.","kai|Moonsilver builds the Lunar Engine. Let's gather it."]},{t:"A Song in the Dark",w:6,g:["boss",400],who:"orla",proj:"Build the singing bell",lines:["orla|Little keeper... I am Orla, the Moon Whale. I guarded the Lantern before it fell. Free my friends.","kai|Orla! We'll fix everything, I promise."]},{t:"Moonsilver",w:6,g:["mat",2500],who:"pebble",proj:"Forge the Lantern frame",lines:["pebble|To rebuild the Moon Lantern we need a LOT of Moonsilver. Like... a lot a lot.","kai|Then we dive a lot a lot."]},{t:"The Lantern Shards",w:6,g:["dist",900],who:"orla",proj:"Collect the first shard",lines:["orla|The Lantern broke into pieces. The first shard glows deep in the Trench.","kai|I see it shining!"]},{t:"Selene",w:6,g:["boss",1200],who:"orla",proj:"Collect the second shard",lines:["orla|Selene the moon ray holds the second shard inside the Gloom.","kai|Free her, get the shard. Two for one!"]},{t:"Crew of Legends",w:6,g:["crew",100],who:"marlo",proj:"Build the captain's bridge",lines:["marlo|For the final dive we need the strongest crew this sea has ever seen.","tusk|Hrrm. Train hard, little keeper."]},{t:"Old Tide",w:6,g:["boss",2e3],who:"orla",proj:"Collect the third shard",lines:["orla|Old Tide, the ancient leviathan, sleeps on the third shard. The Gloom gives him bad dreams.","kai|Time to wake up, Old Tide."]},{t:"Everyone Together",w:6,g:["friends",21],who:"wren",proj:"Gather the whole fleet",lines:["wren|Every friend, from every sea. Free them all and they will light the way down.","kai|All twenty-one. Let's do it."]},{t:"Deeper Still",w:6,g:["dist",2800],who:"nyx",proj:"Collect the last shard",lines:["nyx|Past the last Guardian the water goes black, even for me. But I can see the Gloom Heart beating.","kai|The last shard is there. I know it."]},{t:"Second Moonrise",w:6,g:["moon",3],who:"luma",proj:"Charge the Lantern core",lines:["luma|The Lantern core needs moonlight. Three Moonrises will charge it.","kai|Charging... charging..."]},{t:"The Gloom Heart",w:6,g:["boss",3600],who:"orla",proj:"Rebuild the Moon Lantern",lines:["orla|At 3600 metres beats the Gloom Heart. It is not evil, little keeper. It is lonely, and it is lost in the dark.","kai|Then we'll bring it light."]},{t:"The Moon Lantern",w:6,g:["dist",3700],who:"orla",proj:"Lift the Lantern to the sky",lines:["orla|The Heart is calm. Carry the Lantern up... and let the whole sea shine again.","marlo|Kai... you did it. You really did it.","kai|WE did it. Every one of us."]}];Qt.forEach((i,e)=>{var t;i.i=e,i.act=Math.floor(e/12),(i.g[0]==="boss"||i.g[0]==="dist")&&((t=i.g)[2]??(t[2]=i.w))});var Fd=["The Gloom Rises","The Drowned Kingdom","Fire and Darkness","The Moon Lantern"],oo=i=>Math.round(112*Math.pow(1.1,i)),Rs={lab:3,tide:4,exp:9,daily:10,crew:2,gear:13,rip:17,moon:31},lo={kai:0,marlo:0,pebble:2,luma:3,wren:8,tusk:13,nyx:29,orla:37};var xt={now:()=>Date.now()},Is="tidekeeper-save-v1",co=ut.map(i=>i.mat),Ct=Math.random,Od=i=>{Ct=i};function Vn(){let i={};return co.forEach(e=>i[e]=0),{v:1,created:xt.now(),seenIntro:!1,chapter:0,chState:"goal",projEnd:0,finished:!1,shell:0,mats:{...i},upg:{},research:{},labQ:[],pearls:0,ptree:{},tridents:0,ttree:{},moonstones:0,mtree:{},tideShells:0,ripPearls:0,moonTri:0,best:ut.map(()=>0),bestEver:ut.map(()=>0),bossMax:ut.map(()=>0),friends:zn.map(()=>!1),crew:{marlo:0,pebble:0,luma:0,wren:0,tusk:0,nyx:0,orla:0},critters:0,scrap:0,gear:[],equip:{},gearId:1,boxes:[],relics:[],exps:[],daily:null,achs:{},companion:null,world:0,n:{tides:0,rips:0,moons:0,runs:0,kills:0,bosses:0,critters:0,dailies:0,exps:0,maxRar:-1,crafted:0},rate:ut.map(()=>0),lastSave:xt.now(),settings:{vol:.7,music:.5,quality:"high",shake:!0,tips:!0}}}var ue=(i,e)=>i[e]|0,st=(i,e)=>i.chapter>=Rs[e]||i.finished,Lh=ut.map((i,e)=>e===0?0:Qt.findIndex(t=>t.g[2]===e)),Ls=i=>Lh[i],on=(i,e)=>e===0||i.finished||i.chapter>=Lh[e],Ds=(i,e)=>i.finished||i.chapter>=lo[e],Ui=i=>i.friends.filter(Boolean).length,ho=i=>Object.values(i.crew).reduce((e,t)=>e+t,0),vr=i=>Object.keys(i.achs).length;function Gn(i,e){return(1+e.r*.8)*(1+.6*e.tier)*(1+.12*e.lvl)*(1+En.tusk.per*i.crew.tusk)}function Us(i){let e=i.upg,t=i.research,n=i.ptree,s=i.ttree,r=i.mtree,a=i.crew,o={shell:1,dmg:1,mat:1,rate:1,hull:1,crit:0};i.friends.forEach((T,y)=>{if(!T)return;let b=zn[y].stat;b==="crit"?o.crit+=.01:o[b]+=b==="rate"?.04:.08});let l=Math.pow(1.03,vr(i)),c=T=>i.relics.includes(T)?1:0,h={dmg:1,hull:1,oxy:0,shell:1,crit:0,mat:0,boss:0,rate:0,speed:0};for(let T in i.equip){let y=i.gear.find(P=>P.id===i.equip[T]);if(!y)continue;let b=Gn(i,y);T==="harpoon"&&(h.dmg*=1+.3*b),T==="hull"&&(h.hull*=1+.4*b),T==="engine"&&(h.oxy+=.8*b),T==="charm"&&(h.shell*=1+.3*b),y.aff&&(h[y.aff.k]+=y.aff.v/100)}let u=1+En.orla.per*a.orla,d=Math.pow(1.2,ue(t,"r_dmg"))*Math.pow(1.3,ue(n,"p_dmg"))*Math.pow(1.5,ue(s,"t_dmg"))*Math.pow(1.8,ue(r,"m_all"))*l*u,f=Math.pow(1.1,ue(e,"dmg"))*Math.pow(1.15,ue(e,"reef"))*Math.pow(1.15,ue(e,"gears"))*Math.pow(1.12,ue(e,"lance"))*Math.pow(1.1,ue(e,"forge"))*Math.pow(1.1,ue(e,"glowl"))*Math.pow(1.15,ue(e,"lunar"))*Math.pow(1.2,ue(t,"r_dmg"))*Math.pow(1.3,ue(n,"p_dmg"))*Math.pow(1.5,ue(s,"t_dmg"))*Math.pow(1.8,ue(r,"m_all"))*o.dmg*l*u*h.dmg*(c(0)?2:1),v=Math.pow(1.06,ue(e,"shell"))*Math.pow(1.1,ue(e,"kcoil"))*Math.pow(1.12,ue(e,"glowl"))*Math.pow(1.15,ue(e,"lunar"))*Math.pow(1.2,ue(t,"r_shell"))*Math.pow(1.3,ue(n,"p_shell"))*Math.pow(1.5,ue(s,"t_mat"))*Math.pow(1.8,ue(r,"m_all"))*o.shell*l*u*h.shell*(1+En.marlo.per*a.marlo)*(c(2)?2:1),M=Math.pow(1.1,ue(e,"kcoil"))*Math.pow(1.2,ue(t,"r_mat"))*Math.pow(1.25,ue(n,"p_mat"))*Math.pow(1.5,ue(s,"t_mat"))*o.mat*(1+h.mat)*(c(6)?2:1),g=2.5*(1+.06*ue(e,"rate"))*o.rate*(1+h.rate),m=150*d*Math.pow(1.15,ue(e,"hull"))*Math.pow(1.08,ue(e,"gears"))*o.hull*h.hull*(i.companion==="turtle"?1.5:1),C=40+3*ue(e,"oxy")+4*ue(t,"r_oxy")+3*ue(n,"p_oxy")+En.pebble.per*a.pebble+h.oxy+(c(5)?10:0),p=Math.min(.75,.05+.02*ue(e,"crit")+o.crit+h.crit),x=3+.04*ue(e,"lance")+.3*ue(t,"r_crit")+En.nyx.per*a.nyx,S=Math.pow(1.2,ue(e,"forge"))*Math.pow(1.3,ue(t,"r_boss"))*(1+h.boss),_=Math.min(.9,.04*ue(e,"start")+.03*ue(t,"r_start")+.04*ue(n,"p_start")+.05*ue(r,"m_start")+(c(1)?.05:0)),E=Math.pow(1.3,ue(n,"p_palp"));return{dmg:f,shell:v,mat:M,rate:g,hull:m,oxy:C,crit:p,critMul:x,boss:S,start:_,pal:E,speed:10*(1+.04*ue(e,"speed"))*(1+h.speed),multi:1+ue(e,"multi"),bomb:ue(e,"bomb")?f*4*Math.pow(1.08,ue(e,"bomb")-1)*(c(3)?3:1):0,od:ue(s,"t_od")?{dur:6+ue(s,"t_odp"),cd:Math.max(8,25-ue(s,"t_odp"))}:null,beam:ue(r,"m_beam")?{pow:30*Math.pow(1.5,ue(r,"m_beamp")),cd:30}:null}}var _r=(i,e)=>1e3*i+75*i*(i-1)+e,Bd=i=>.016*i-7.5*(1-Math.exp(-i/600)),Ns=(i,e)=>1.6*Math.exp(Bd(_r(i,e))),gr=(i,e)=>2*Math.exp(.0035*_r(i,e)),xr=i=>Math.pow(1.0028,i),Dh=(i,e)=>4*Math.pow(Ns(i,e)/1.6,.8),Ni=(i,e)=>i.base*Math.pow(i.g,e),yr=(i,e)=>e==="shell"?i.shell:i.mats[e],kd=(i,e,t)=>{e==="shell"?i.shell-=t:i.mats[e]-=t};function Fs(i,e){return e.ch&&i.chapter<e.ch&&!i.finished?!1:e.cur!=="shell"?on(i,co.indexOf(e.cur)):!0}function br(i,e){let t=Ii.find(r=>r.id===e),n=ue(i.upg,e);if(!Fs(i,t)||n>=t.max)return!1;let s=Ni(t,n);return yr(i,t.cur)<s?!1:(kd(i,t.cur,s),i.upg[e]=n+1,!0)}var Mr=(i,e)=>Math.ceil(i.base*Math.pow(i.g,e)),zd={pearl:[no,"ptree","pearls"],trident:[io,"ttree","tridents"],moon:[so,"mtree","moonstones"]};function uo(i,e,t){let[n,s,r]=zd[e],a=n.find(c=>c.id===t),o=ue(i[s],t);if(o>=a.max||a.req&&!i[s][a.req])return!1;let l=Mr(a,o);return i[r]<l?!1:(i[r]-=l,i[s][t]=o+1,!0)}var Sr=(i,e,t)=>e.t*Math.pow(e.tg,t)*Math.max(.5,1-En.luma.per*i.crew.luma),wr=(i,e)=>i.c*Math.pow(i.cg,e),Fi=i=>1+ue(i.ttree,"t_lab");function fo(i,e){let t=Li.find(a=>a.id===e),n=ue(i.research,e)+i.labQ.filter(a=>a.id===e).length;if(!st(i,"lab")||i.labQ.length>=Fi(i)||n>=t.max||i.labQ.some(a=>a.id===e)||t.ch&&i.chapter<t.ch)return!1;let s=wr(t,n);if(i.shell<s)return!1;i.shell-=s;let r=xt.now();return i.labQ.push({id:e,start:r,end:r+Sr(i,t,n)*1e3}),!0}var Oi=i=>1+ue(i.ttree,"t_exp");function Er(i,e,t){let n=Us(i),s=i.bestEver[e]*.75,r=Math.pow(t,.92)*(1+.2*ue(i.research,"r_exp"))*(1+En.wren.per*i.crew.wren)*(1+.02*Ui(i));return{shell:gr(e,s)*n.shell*r*14,mat:xr(s)*n.mat*r*1.2,w:e,critters:Math.floor(t/15+1),scrap:Math.round(t*.8*(1+e*.3)),box:t>=60?Math.floor(t/120)+1:0}}function po(i,e,t){if(!st(i,"exp")||i.exps.length>=Oi(i)||!on(i,e))return!1;let n=xt.now();return i.exps.push({w:e,m:t,start:n,end:n+t*6e4}),!0}function mo(i,e,t=0,n){let s=0,r=ci.map((d,f)=>f<t?0:d.w*(f>=3?1+.1*i.crew.tusk:1));r.forEach(d=>s+=d);let a=Ct()*s,o=0;for(;o<5&&(a-=r[o],!(a<=0));o++);let l=Object.keys(mr);n??(n=l[Math.floor(Ct()*4)]);let c=Object.keys(ro),h=c[Math.floor(Ct()*c.length)],u={id:i.gearId++,slot:n,r:o,tier:e,lvl:0,aff:o>=1?{k:h,v:Math.round((o+1)*(1+e*.5)*(h==="crit"?.6:2.5))}:null};return i.n.maxRar=Math.max(i.n.maxRar,o),i.gear.push(u),u}var Os=i=>`${ci[i.r].name} ${mr[i.slot].names[i.tier]}`,Tr=i=>Math.round(4*(i.r+1)*(i.r+1)*(i.tier+1)*(1+i.lvl*.3)),Ar=i=>Math.round(6*(i.r+1)*(i.tier+1)*Math.pow(1.45,i.lvl)),Bi=i=>5+3*i.r,Cr=(i,e)=>({scrap:Math.round(30*Math.pow(e+1,1.6)),mat:ut[e].mat,matN:Math.round(80*Math.pow(2.2,e))});function go(i,e){let t=xn(i),n=Cr(i,t);return!st(i,"gear")||i.scrap<n.scrap||i.mats[n.mat]<n.matN?null:(i.scrap-=n.scrap,i.mats[n.mat]-=n.matN,i.n.crafted++,mo(i,t,1,e))}function Rr(i,e){let t=i.gear.findIndex(n=>n.id===e);return t<0||Object.values(i.equip).includes(e)?!1:(i.scrap+=Tr(i.gear[t]),i.gear.splice(t,1),!0)}function xo(i,e){let t=i.gear.find(s=>s.id===e);if(!t||t.lvl>=Bi(t))return!1;let n=Ar(t);return i.scrap<n?!1:(i.scrap-=n,t.lvl++,!0)}function Pr(i,e){let t=i.gear.find(n=>n.id===e);t&&(i.equip[t.slot]=e)}function vo(i){let e=i.boxes.shift();return e===void 0?null:mo(i,e)}var xn=i=>{let e=0;return ut.forEach((t,n)=>{on(i,n)&&(e=n)}),e},Bs=i=>Math.ceil(2*Math.pow(1.27,i));function _o(i,e){if(!Ds(i,e)||!st(i,"crew")||i.crew[e]>=40)return!1;let t=Bs(i.crew[e]);return i.critters<t?!1:(i.critters-=t,i.crew[e]++,!0)}function Ir(i,e=Qt[i.chapter]){if(!e)return[1,1];let[t,n,s]=e.g;switch(t){case"dist":return[i.bestEver[s],n];case"boss":return[i.bossMax[s]>=n?1:0,1];case"mat":return[i.mats[ut[e.w].mat],n];case"tide":return[i.n.tides,n];case"rip":return[i.n.rips,n];case"moon":return[i.n.moons,n];case"exp":return[i.n.exps,n];case"gear":return[i.n.maxRar>=n?1:0,1];case"crew":return[ho(i),n];case"friends":return[Ui(i),n]}return[0,1]}function Lr(i){let[e,t,n]=i.g,s=ut[n??i.w];switch(e){case"dist":return`Reach ${t}m in ${s.name}`;case"boss":return t===Hn?`Calm the Gloom Heart at ${t}m`:`Free the Guardian at ${t}m in ${s.name}`;case"mat":return`Hold ${t} ${ut[i.w].matName}`;case"tide":return`Perform ${t} Ebb Tide`;case"rip":return`Perform ${t} Riptide`;case"moon":return`Perform ${t} Moonrise${t>1?"s":""}`;case"exp":return"Complete a voyage";case"gear":return`Own a ${ci[t].name} or better item`;case"crew":return`Reach ${t} total crew levels`;case"friends":return`Free ${t} Friends`}return""}var ki=i=>{let[e,t]=Ir(i);return e>=t};function zi(i,e=i.chapter){let t=Qt[e],n=t.g[0]==="mat"?t.w:Math.min(t.w,xn(i));return{mat:ut[n].mat,n:t.g[0]==="mat"?0:Math.round([40,120,260,500,900,1500,2400][n]*(1+e%6*.4))}}function yo(i){if(i.finished||i.chState!=="goal"||!ki(i))return!1;let e=zi(i);return i.mats[e.mat]<e.n?!1:(i.mats[e.mat]-=e.n,i.chState="build",i.projEnd=xt.now()+oo(i.chapter)*1e3,!0)}function bo(i){return i.chState!=="build"||xt.now()<i.projEnd?!1:(i.chState="goal",i.chapter>=Qt.length-1?(i.finished=!0,i.chapter=Qt.length):i.chapter++,!0)}var Dr=i=>Math.max(...i.best.map((e,t)=>e>0?_r(t,e):0)),hi=i=>Math.floor(Math.exp(.005*(Dr(i)-400))*Math.pow(1.4,ue(i.ttree,"t_pearl"))*(i.relics.includes(4)?1.5:1)),Hi=i=>Math.floor(Math.pow(i.ripPearls,.4)/4*Math.pow(1.5,ue(i.mtree,"m_tri"))*(i.relics.includes(7)?1.5:1)),Vi=i=>Math.floor(Math.pow(i.moonTri,.5)/5);function Uh(i){let e=.1*ue(i.ptree,"p_keep"),t=ue(i.ttree,"t_auto");Ii.filter(n=>n.cur==="shell").forEach(n=>{i.upg[n.id]=Math.floor(ue(i.upg,n.id)*e)}),i.shell=0,i.tideShells=0,i.best=ut.map(()=>0),t&&Fh(i,200)}function Mo(i){let e=hi(i);return!st(i,"tide")||e<1?0:(i.pearls+=e,i.ripPearls+=e,i.n.tides++,Uh(i),e)}function Nh(i){i.pearls=0,i.ptree={},i.ripPearls=0,Ii.filter(e=>e.cur!=="shell").forEach(e=>{i.upg[e.id]=0}),co.forEach(e=>i.mats[e]=0),Uh(i)}function So(i){let e=Hi(i);return!st(i,"rip")||e<1?0:(i.tridents+=e,i.moonTri+=e,i.n.rips++,Nh(i),e)}function wo(i){let e=Vi(i);return!st(i,"moon")||e<1?0:(i.moonstones+=e,i.n.moons++,i.tridents=0,i.ttree={},i.moonTri=0,Nh(i),e)}function Fh(i,e=50){for(let t=0;t<e;t++){let n=null,s=1/0;for(let r of Ii){if(r.cur!=="shell"||!Fs(i,r)||ue(i.upg,r.id)>=r.max)continue;let a=Ni(r,ue(i.upg,r.id));a<s&&(s=a,n=r)}if(!n||s>i.shell)break;br(i,n.id)}}var Oh=i=>{let e=new Date(i);return`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`};function Eo(i){if(!st(i,"daily"))return;let e=Oh(xt.now());if(i.daily?.day===e)return;let t=0;for(let o of e)t=t*31+o.charCodeAt(0)>>>0;let n=()=>(t=t*1103515245+12345>>>0)/4294967296,r=[["kills","Clean up {n} Gloom",400],["runs","Complete {n} dives",12],["bosses","Free {n} Guardians",4],["critters","Rescue {n} critters",8],["crits","Land {n} critical hits",600]].sort(()=>n()-.5).slice(0,3),a=[{critters:15},{scrap:120},{box:1}];i.daily={day:e,list:r.map(([o,l,c],h)=>({type:o,txt:l.replace("{n}",c),n:c,p:0,done:!1,claimed:!1,rew:a[h]}))}}function Di(i,e,t=1){if(i.daily)for(let n of i.daily.list)n.type===e&&!n.done&&(n.p=Math.min(n.n,n.p+t),n.p>=n.n&&(n.done=!0))}function To(i,e){let t=i.daily?.list[e];return!t||!t.done||t.claimed?!1:(t.claimed=!0,i.n.dailies++,t.rew.critters&&(i.critters+=t.rew.critters),t.rew.scrap&&(i.scrap+=t.rew.scrap),t.rew.box&&i.boxes.push(xn(i)),!0)}var Gi=[];{let i=(e,t,n,s)=>Gi.push({id:e,name:t,desc:n,f:s});ut.forEach((e,t)=>[500,1500,2500].forEach(n=>i(`d${t}_${n}`,`${e.name} ${n}m`,`Reach ${n}m in ${e.name}`,s=>s.bestEver[t]>=n))),[[1e3,"Tidy Diver"],[1e4,"Gloom Buster"],[1e5,"Sea Sweeper"],[1e6,"Ocean Hero"]].forEach(([e,t])=>i(`k${e}`,t,`Clean up ${e.toLocaleString()} Gloom`,n=>n.n.kills>=e)),[10,50,250,1e3].forEach(e=>i(`r${e}`,`${e} Dives`,`Complete ${e} dives`,t=>t.n.runs>=e)),[10,50,200,600].forEach(e=>i(`b${e}`,`Guardian Friend ${e}`,`Free Guardians ${e} times`,t=>t.n.bosses>=e)),[1,5,25,100].forEach(e=>i(`t${e}`,`Ebb x${e}`,`Perform ${e} Ebb Tides`,t=>t.n.tides>=e)),[1,5,15].forEach(e=>i(`rp${e}`,`Riptide x${e}`,`Perform ${e} Riptides`,t=>t.n.rips>=e)),[1,3,8].forEach(e=>i(`m${e}`,`Moonrise x${e}`,`Perform ${e} Moonrises`,t=>t.n.moons>=e)),[1,2,3,4,5].forEach(e=>i(`g${e}`,`${ci[e].name} Find`,`Own a ${ci[e].name} item`,t=>t.n.maxRar>=e)),[10,50,150,250].forEach(e=>i(`c${e}`,`Crew ${e}`,`Reach ${e} total crew levels`,t=>ho(t)>=e)),[12,24,36,48].forEach(e=>i(`ch${e}`,`Chapter ${e}`,`Finish ${e} story chapters`,t=>t.chapter>=e||t.finished)),[1,10,40].forEach(e=>i(`dy${e}`,`Contractor ${e}`,`Complete ${e} daily contracts`,t=>t.n.dailies>=e)),[20,200,1500].forEach(e=>i(`cr${e}`,`Critter Pal ${e}`,`Rescue ${e} critters`,t=>t.n.critters>=e)),[5,25,100].forEach(e=>i(`ex${e}`,`Explorer ${e}`,`Finish ${e} expeditions`,t=>t.n.exps>=e)),[7,14,21].forEach(e=>i(`f${e}`,`Friends ${e}`,`Free ${e} Friends`,t=>Ui(t)>=e))}function Ao(i){let e=[];for(let t of Gi)!i.achs[t.id]&&t.f(i)&&(i.achs[t.id]=xt.now(),e.push(t));return e}function Ur(i){let e=xt.now(),t=[];for(let n=i.labQ.length-1;n>=0;n--){let s=i.labQ[n];e>=s.end&&(i.research[s.id]=ue(i.research,s.id)+1,i.labQ.splice(n,1),t.push({type:"research",id:s.id}))}return i.chState==="build"&&e>=i.projEnd&&t.push({type:"project"}),t}function Co(i,e){let t=i.exps[e];if(!t||xt.now()<t.end)return null;let n=Er(i,t.w,t.m);i.exps.splice(e,1),i.shell+=n.shell,i.tideShells+=n.shell,i.mats[ut[t.w].mat]+=n.mat,i.critters+=n.critters,i.n.critters+=n.critters,i.scrap+=n.scrap;for(let s=0;s<n.box;s++)i.boxes.push(t.w);return i.n.exps++,n}function Ro(i){let e=xt.now(),t=Math.min(12*3600,Math.max(0,(e-i.lastSave)/1e3));if(i.lastSave=e,t<60)return null;let n=i.world,s=i.rate[n]||0,r=s*t*(.15+.1*ue(i.research,"r_drift"));return i.shell+=r,i.tideShells+=r,{secs:t,shell:r}}var Bh=1;function Po(i,e){let t=Us(i),n=i.best[e],s=Math.floor(n*t.start/50)*50;for(;s>0&&Ns(e,s)>t.dmg*t.rate*1.5;)s-=50;s=Math.max(0,s);let r={w:e,S:t,d:s,d0:s,t:0,tmax:t.oxy,hull:t.hull,x:0,vx:0,blobs:[],shots:[],bullets:[],fx:[],spawnD:s+12,boss:null,nextBoss:Math.floor(s/Cs+1)*Cs,cd:0,bombCd:2,palCd:1,palShot:0,shield:0,shell:0,mats:0,kills:0,crits:0,bossKills:0,critters:0,newFriends:[],boxes:0,relic:null,over:!1,od:{t:0,cd:0},beam:{t:0,cd:0},maxD:s,slowT:0};return e===6&&i.bossMax[6]>=Hn&&r.nextBoss>Hn,r}function Hd(i,e){let t=Ct(),n=i.spawnD,s=i.w,r="blob";t<.018?r="critter":t<.022&&st(e,"gear")?r="chest":t<.045&&(r="gold");let a=Ns(s,n)*(r==="chest"?8:r==="gold"?1.5:1)*(.8+Ct()*.5),o=Ct()<.12;i.blobs.push({id:Bh++,kind:r,x:(Ct()*2-1)*10.5,d:n,hp:o?a*3:a,max:o?a*3:a,r:r==="critter"?.7:o?1.6:.95+Ct()*.3,big:o,wob:Ct()*6.28})}function kh(i,e){return zn.find(n=>n.world===i&&n.at===e)}function Ps(i,e,t,n){t.hp-=n,t.hp<=0&&!t.dead&&(t.dead=!0,zh(i,e,t))}function zh(i,e,t){let n=i.S,s=i.w;if(t===i.boss){let a=t.D,o=kh(s,a),l=e.bossMax[s]<a;i.boss=null,i.bossKills++,e.bossMax[s]=Math.max(e.bossMax[s],a),i.nextBoss=a+Cs;let c=gr(s,a)*n.shell*60*(l?3:1);i.shell+=c,i.mats+=xr(a)*n.mat*25,i.critters+=l?3:0,o&&!e.friends[o.i]&&(e.friends[o.i]=!0,i.newFriends.push(o)),st(e,"gear")&&(l||Ct()<.3)&&(i.boxes++,e.boxes.push(s));let h=ue(e.mtree,"m_relic");if(h&&Ct()<.04*h){let u=ao.map((d,f)=>f).filter(d=>!e.relics.includes(d));if(u.length){let d=u[Math.floor(Ct()*u.length)];e.relics.push(d),i.relic=d}}i.fx.push({t:"bossdown",x:t.x,d:t.d,friend:o?.i??-1});return}if(t.kind==="critter")return;i.kills++;let r=gr(s,t.d)*n.shell*(t.kind==="gold"?8:1)*(t.big?3:1);i.shell+=r,(Ct()<.18||t.big)&&(i.mats+=xr(t.d)*n.mat*(t.big?2:1)),t.kind==="chest"&&(st(e,"gear")?(i.boxes++,e.boxes.push(s)):i.shell+=r*30),i.fx.push({t:"pop",x:t.x,d:t.d,kind:t.kind,big:t.big})}var Rh=11;function Io(i,e,t,n){if(e.over)return;let s=e.S;e.t+=t;let r=n.x||0;e.vx+=(r*26-e.vx*6)*t,e.x=Math.max(-Rh,Math.min(Rh,e.x+e.vx*t));let a=n.y||0,o=s.speed*(1+.55*a);for(e.boss?o=0:e.d+o*t>=e.nextBoss&&!(e.w===6&&e.nextBoss>Hn&&i.bossMax[6]<Hn)&&(e.d=e.nextBoss,Vd(e,i),o=0),e.d+=o*t,e.maxD=Math.max(e.maxD,e.d);e.spawnD<e.d+75&&!e.boss;)e.spawnD+=2.8+Ct()*4.5,e.spawnD<e.nextBoss-6&&Hd(e,i);if(e.od.cd-=t,e.od.t-=t,e.beam.cd-=t,e.beam.t-=t,n.od&&s.od&&e.od.cd<=0&&(e.od.t=s.od.dur,e.od.cd=s.od.cd,e.fx.push({t:"od"})),n.beam&&s.beam&&e.beam.cd<=0){e.beam.cd=s.beam.cd,e.beam.t=1.2;let d=s.dmg*s.rate*s.beam.pow;for(let f of e.blobs)Math.abs(f.x-e.x)<3&&f.d>e.d&&f.kind!=="critter"&&Ps(e,i,f,d);e.boss&&Ps(e,i,e.boss,d*s.boss),e.fx.push({t:"beam",x:e.x})}let l=s.rate*(e.od.t>0?3:1);e.cd-=t;let c=()=>{let d=e.boss&&e.boss.d-e.d<34?e.boss:null,f=1e9;if(d)return d;for(let v of e.blobs){if(v.kind==="critter"||v.dead)continue;let M=v.d-e.d;if(M<-1||M>32)continue;let g=M*M+(v.x-e.x)*(v.x-e.x)*.5;g<f&&(f=g,d=v)}return d};for(;e.cd<=0;){e.cd+=1/l;let d=c();if(!d){e.cd=Math.max(e.cd,.05);break}for(let f=0;f<s.multi;f++)e.shots.push({x:e.x+(f-(s.multi-1)/2)*.5,d:e.d+1,tg:d,pal:!1})}if(i.companion==="dolphin")for(e.palCd-=t;e.palCd<=0;){e.palCd+=1/(s.rate*.6);let d=c();if(!d){e.palCd=.2;break}e.shots.push({x:e.x-2.2,d:e.d,tg:d,pal:!0})}if((s.bomb||i.companion==="puffer")&&(e.bombCd-=t,e.bombCd<=0)){e.bombCd=i.companion==="puffer"&&!s.bomb?3:4;let d=c();if(d){let f=(s.bomb||s.dmg*3)*(i.companion==="puffer"?1+.5*s.pal:1);for(let v of e.blobs)!v.dead&&v.kind!=="critter"&&Math.hypot(v.x-d.x,v.d-d.d)<6&&Ps(e,i,v,f);e.boss&&d===e.boss&&Ps(e,i,e.boss,f*s.boss),e.fx.push({t:"bomb",x:d.x,d:d.d})}}for(let d=e.shots.length-1;d>=0;d--){let f=e.shots[d],v=f.tg;if(v.dead){e.shots.splice(d,1);continue}let M=v.x-f.x,g=v.d-f.d,m=Math.hypot(M,g),C=70*t;if(m<=C+v.r*.6){let p=s.dmg*(f.pal?.5*s.pal:1),x=Ct()<s.crit;x&&(p*=s.critMul,e.crits++),v===e.boss&&(p*=s.boss),Ps(e,i,v,p),e.shots.splice(d,1),e.fx.push({t:"hit",x:f.x+M,d:f.d+g,crit:x});continue}f.x+=M/m*C,f.d+=g/m*C}let h=Dh(e.w,e.d)/(i.companion==="turtle"?1.3:1);for(let d=e.blobs.length-1;d>=0;d--){let f=e.blobs[d];if(f.dead){e.blobs.splice(d,1);continue}let v=f.d-e.d;if(f.kind!=="critter"&&f.kind!=="chest"&&(f.d-=1.6*t,v<22&&(f.x+=Math.sign(e.x-f.x)*Math.min(Math.abs(e.x-f.x),.6*t))),Math.abs(v)<f.r+.9&&Math.abs(f.x-e.x)<f.r+1.1){f.dead=!0,e.blobs.splice(d,1),f.kind==="critter"?(e.critters++,e.fx.push({t:"critter",x:f.x,d:f.d})):f.kind==="chest"?zh(e,i,f):(Ph(e,i,h*(f.big?2:1)),e.fx.push({t:"bonk",x:f.x,d:f.d}));continue}v<-5&&e.blobs.splice(d,1)}let u=e.boss;if(u){u.t+=t,u.x=Math.sin(u.t*.5)*5,u.d=Math.max(e.d+16,u.d-4*t),u.ring-=t,u.aim-=t;let d=h*.55;if(u.ring<=0){u.ring=Math.max(1.4,2.6-u.phase*.4);let f=12+u.phase*4,v=u.t;for(let M=0;M<f;M++){let g=v+M/f*6.283;e.bullets.push({x:u.x,d:u.d,vx:Math.cos(g)*7,vd:Math.sin(g)*7-2,dmg:d})}}if(u.aim<=0){u.aim=1.7;for(let f=-1;f<=1;f++){let v=e.x-u.x,M=e.d-u.d,g=Math.hypot(v,M),m=Math.atan2(M,v)+f*.18;e.bullets.push({x:u.x,d:u.d,vx:Math.cos(m)*11,vd:Math.sin(m)*11,dmg:d})}}u.phase=u.hp<u.max*.33?2:u.hp<u.max*.66?1:0}for(let d=e.bullets.length-1;d>=0;d--){let f=e.bullets[d];f.x+=f.vx*t,f.d+=f.vd*t;let v=f.d-e.d;if(Math.abs(v)<.9&&Math.abs(f.x-e.x)<1){Ph(e,i,f.dmg),e.bullets.splice(d,1);continue}(v<-6||v>40||Math.abs(f.x)>16)&&e.bullets.splice(d,1)}e.t>=e.tmax?Ih(e,"oxygen"):e.hull<=0&&Ih(e,"hull")}function Ph(i,e,t){if(e.companion==="turtle"&&i.shield<=0){i.shield=5,i.fx.push({t:"shield"});return}i.hull-=t,i.fx.push({t:"hurt",n:t})}function Vd(i,e){let t=i.nextBoss,n=kh(i.w,t),s=i.w===6&&t===Hn,r=Ns(i.w,t)*(s?160:n&&e.bossMax[i.w]<t?55:40);i.boss={id:Bh++,D:t,x:0,d:t+26,hp:r,max:r,r:s?5:3.2,t:0,ring:2,aim:1,phase:0,friend:n?.i??-1,final:s,kind:"boss"},i.bullets=[],i.blobs=i.blobs.filter(a=>a.d<t),i.fx.push({t:"boss",final:s,friend:n?.i??-1})}function Ih(i,e){i.over=!0,i.reason=e}function Lo(i,e){let t=e.w;i.shell+=e.shell,i.tideShells+=e.shell,i.mats[ut[t].mat]+=e.mats,i.critters+=e.critters,i.best[t]=Math.max(i.best[t],e.maxD);let n=e.maxD>i.bestEver[t];return i.bestEver[t]=Math.max(i.bestEver[t],e.maxD),i.n.runs++,i.n.kills+=e.kills,i.n.bosses+=e.bossKills,i.n.critters+=e.critters,i.rate[t]=e.shell/Math.max(10,e.t),Di(i,"kills",e.kills),Di(i,"runs",1),Di(i,"bosses",e.bossKills),Di(i,"critters",e.critters),Di(i,"crits",e.crits),i.world=t,{rec:n}}function Do(i){i.lastSave=xt.now();try{localStorage.setItem(Is,JSON.stringify(i))}catch{}}function Uo(){try{let i=localStorage.getItem(Is);if(i)return No(JSON.parse(i))}catch{}return null}function No(i){let e=Vn();for(let t in i)e[t]=i[t];return e.n={...Vn().n,...i.n},e.settings={...Vn().settings,...i.settings},e.mats={...Vn().mats,...i.mats},e}function Fo(i){return btoa(unescape(encodeURIComponent(JSON.stringify(i))))}function Oo(i){let e=JSON.parse(decodeURIComponent(escape(atob(i.trim()))));if(!e||e.v!==1)throw new Error("bad save");return No(e)}function ui(i){if(i==null||isNaN(i))return"0";if(i<1e3)return i<10&&i%1?i.toFixed(1):Math.floor(i).toString();let e=["K","M","B","T","Qa","Qi","Sx","Sp","Oc","No","Dc"],t=Math.floor(Math.log10(i)/3);if(t<=e.length){let n=i/Math.pow(1e3,t);return(n<100?n.toFixed(2):n.toFixed(0))+e[t-1]}return i.toExponential(2).replace("+","")}function Bo(i){if(i=Math.max(0,Math.ceil(i)),i<60)return i+"s";let e=Math.floor(i/60);return e<60?`${e}m ${i%60}s`:`${Math.floor(e/60)}h ${e%60}m`}var Gd=0,Hh=1,Wd=2;var Ju=1,$d=2,In=3,jn=0,Lt=1,zt=2,bn=0,as=1,tn=2,Vh=3,Gh=4,Xd=5,_i=100,qd=101,Yd=102,Zd=103,Jd=104,Kd=200,jd=201,Qd=202,ef=203,yl=204,bl=205,tf=206,nf=207,sf=208,rf=209,af=210,of=211,lf=212,cf=213,hf=214,Ml=0,Sl=1,wl=2,hs=3,El=4,Tl=5,Al=6,Cl=7,Ku=0,uf=1,df=2,Kn=0,Xc=1,qc=2,Yc=3,ar=4,ff=5,Zc=6,Jc=7;var ju=300,us=301,ds=302,Rl=303,Pl=304,Ha=306,Il=1e3,Mi=1001,Ll=1002,qt=1003,pf=1004;var Fr=1005;var _n=1006,ko=1007;var Si=1008;var Nn=1009,Qu=1010,ed=1011,js=1012,Kc=1013,wi=1014,yn=1015,mn=1016,jc=1017,Qc=1018,fs=1020,td=35902,nd=1021,id=1022,un=1023,sd=1024,rd=1025,os=1026,ps=1027,eh=1028,th=1029,ad=1030,nh=1031;var ih=1033,la=33776,ca=33777,ha=33778,ua=33779,Dl=35840,Ul=35841,Nl=35842,Fl=35843,Ol=36196,Bl=37492,kl=37496,zl=37808,Hl=37809,Vl=37810,Gl=37811,Wl=37812,$l=37813,Xl=37814,ql=37815,Yl=37816,Zl=37817,Jl=37818,Kl=37819,jl=37820,Ql=37821,da=36492,ec=36494,tc=36495,od=36283,nc=36284,ic=36285,sc=36286;var fa=2300,rc=2301,zo=2302,Wh=2400,$h=2401,Xh=2402;var mf=3200,gf=3201;var ld=0,xf=1,Jn="",kt="srgb",Ms="srgb-linear",Va="linear",je="srgb";var Wi=7680;var qh=519,vf=512,_f=513,yf=514,cd=515,bf=516,Mf=517,Sf=518,wf=519,Yh=35044,hd=35048;var Zh="300 es",Dn=2e3,pa=2001,Qn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ho=Math.PI/180,ac=180/Math.PI;function or(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]).toLowerCase()}function wt(i,e,t){return Math.max(e,Math.min(t,i))}function Ef(i,e){return(i%e+e)%e}function Vo(i,e,t){return(1-t)*i+t*e}function ks(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ne=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ue=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],v=n[8],M=s[0],g=s[3],m=s[6],C=s[1],p=s[4],x=s[7],S=s[2],_=s[5],E=s[8];return r[0]=a*M+o*C+l*S,r[3]=a*g+o*p+l*_,r[6]=a*m+o*x+l*E,r[1]=c*M+h*C+u*S,r[4]=c*g+h*p+u*_,r[7]=c*m+h*x+u*E,r[2]=d*M+f*C+v*S,r[5]=d*g+f*p+v*_,r[8]=d*m+f*x+v*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,v=t*u+n*d+s*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/v;return e[0]=u*M,e[1]=(s*c-h*n)*M,e[2]=(o*n-s*a)*M,e[3]=d*M,e[4]=(h*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=f*M,e[7]=(n*l-c*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Go.makeScale(e,t)),this}rotate(e){return this.premultiply(Go.makeRotation(-e)),this}translate(e,t){return this.premultiply(Go.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Go=new Ue;function ud(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ma(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Tf(){let i=ma("canvas");return i.style.display="block",i}var Jh={};function qs(i){i in Jh||(Jh[i]=!0,console.warn(i))}function Af(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Cf(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Rf(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var ze={enabled:!0,workingColorSpace:Ms,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===je&&(i.r=Un(i.r),i.g=Un(i.g),i.b=Un(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===je&&(i.r=ls(i.r),i.g=ls(i.g),i.b=ls(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Jn?Va:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Un(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ls(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Kh=[.64,.33,.3,.6,.15,.06],jh=[.2126,.7152,.0722],Qh=[.3127,.329],eu=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tu=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ze.define({[Ms]:{primaries:Kh,whitePoint:Qh,transfer:Va,toXYZ:eu,fromXYZ:tu,luminanceCoefficients:jh,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:Kh,whitePoint:Qh,transfer:je,toXYZ:eu,fromXYZ:tu,luminanceCoefficients:jh,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}});var $i,oc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$i===void 0&&($i=ma("canvas")),$i.width=e.width,$i.height=e.height;let n=$i.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=$i}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ma("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Un(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Un(t[n]/255)*255):t[n]=Un(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Pf=0,ga=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=or(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Wo(s[a].image)):r.push(Wo(s[a]))}else r=Wo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Wo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?oc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var If=0,Vt=class i extends Qn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Mi,s=Mi,r=_n,a=Si,o=un,l=Nn,c=i.DEFAULT_ANISOTROPY,h=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=or(),this.name="",this.source=new ga(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ju)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Il:e.x=e.x-Math.floor(e.x);break;case Mi:e.x=e.x<0?0:1;break;case Ll:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Il:e.y=e.y-Math.floor(e.y);break;case Mi:e.y=e.y<0?0:1;break;case Ll:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=ju;Vt.DEFAULT_ANISOTROPY=1;var nt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],v=l[9],M=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-M)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+M)<.1&&Math.abs(v+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let p=(c+1)/2,x=(f+1)/2,S=(m+1)/2,_=(h+d)/4,E=(u+M)/4,T=(v+g)/4;return p>x&&p>S?p<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(p),s=_/n,r=E/n):x>S?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=_/s,r=T/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=E/r,s=T/r),this.set(n,s,r,t),this}let C=Math.sqrt((g-v)*(g-v)+(u-M)*(u-M)+(d-h)*(d-h));return Math.abs(C)<.001&&(C=1),this.x=(g-v)/C,this.y=(u-M)/C,this.z=(d-h)/C,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},lc=class extends Qn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Vt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ga(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nt=class extends lc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},xa=class extends Vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var cc=class extends Vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],v=r[a+2],M=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=v,e[t+3]=M;return}if(u!==M||l!==d||c!==f||h!==v){let g=1-o,m=l*d+c*f+h*v+u*M,C=m>=0?1:-1,p=1-m*m;if(p>Number.EPSILON){let S=Math.sqrt(p),_=Math.atan2(S,m*C);g=Math.sin(g*_)/S,o=Math.sin(o*_)/S}let x=o*C;if(l=l*g+d*x,c=c*g+f*x,h=h*g+v*x,u=u*g+M*x,g===1-o){let S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],v=r[a+3];return e[t]=o*v+h*u+l*f-c*d,e[t+1]=l*v+h*d+c*u-o*f,e[t+2]=c*v+h*f+o*d-l*u,e[t+3]=h*v-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*v,this._y=c*f*u-d*h*v,this._z=c*h*v+d*f*u,this._w=c*h*u-d*f*v;break;case"YXZ":this._x=d*h*u+c*f*v,this._y=c*f*u-d*h*v,this._z=c*h*v-d*f*u,this._w=c*h*u+d*f*v;break;case"ZXY":this._x=d*h*u-c*f*v,this._y=c*f*u+d*h*v,this._z=c*h*v+d*f*u,this._w=c*h*u-d*f*v;break;case"ZYX":this._x=d*h*u-c*f*v,this._y=c*f*u+d*h*v,this._z=c*h*v-d*f*u,this._w=c*h*u+d*f*v;break;case"YZX":this._x=d*h*u+c*f*v,this._y=c*f*u+d*h*v,this._z=c*h*v-d*f*u,this._w=c*h*u-d*f*v;break;case"XZY":this._x=d*h*u-c*f*v,this._y=c*f*u-d*h*v,this._z=c*h*v+d*f*u,this._w=c*h*u+d*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $o.copy(this).projectOnVector(e),this.sub($o)}reflect(e){return this.sub($o.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$o=new I,nu=new dn,Fn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ln):ln.fromBufferAttribute(r,a),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Or.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Or.copy(n.boundingBox)),Or.applyMatrix4(e.matrixWorld),this.union(Or)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zs),Br.subVectors(this.max,zs),Xi.subVectors(e.a,zs),qi.subVectors(e.b,zs),Yi.subVectors(e.c,zs),Wn.subVectors(qi,Xi),$n.subVectors(Yi,qi),di.subVectors(Xi,Yi);let t=[0,-Wn.z,Wn.y,0,-$n.z,$n.y,0,-di.z,di.y,Wn.z,0,-Wn.x,$n.z,0,-$n.x,di.z,0,-di.x,-Wn.y,Wn.x,0,-$n.y,$n.x,0,-di.y,di.x,0];return!Xo(t,Xi,qi,Yi,Br)||(t=[1,0,0,0,1,0,0,0,1],!Xo(t,Xi,qi,Yi,Br))?!1:(kr.crossVectors(Wn,$n),t=[kr.x,kr.y,kr.z],Xo(t,Xi,qi,Yi,Br))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Tn=[new I,new I,new I,new I,new I,new I,new I,new I],ln=new I,Or=new Fn,Xi=new I,qi=new I,Yi=new I,Wn=new I,$n=new I,di=new I,zs=new I,Br=new I,kr=new I,fi=new I;function Xo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){fi.fromArray(i,r);let o=s.x*Math.abs(fi.x)+s.y*Math.abs(fi.y)+s.z*Math.abs(fi.z),l=e.dot(fi),c=t.dot(fi),h=n.dot(fi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Lf=new Fn,Hs=new I,qo=new I,ei=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Lf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hs.subVectors(e,this.center);let t=Hs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Hs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hs.copy(e.center).add(qo)),this.expandByPoint(Hs.copy(e.center).sub(qo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},An=new I,Yo=new I,zr=new I,Xn=new I,Zo=new I,Hr=new I,Jo=new I,va=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Yo.copy(e).add(t).multiplyScalar(.5),zr.copy(t).sub(e).normalize(),Xn.copy(this.origin).sub(Yo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(zr),o=Xn.dot(this.direction),l=-Xn.dot(zr),c=Xn.lengthSq(),h=Math.abs(1-a*a),u,d,f,v;if(h>0)if(u=a*l-o,d=a*o-l,v=r*h,u>=0)if(d>=-v)if(d<=v){let M=1/h;u*=M,d*=M,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-v?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=v?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Yo).addScaledVector(zr,d),f}intersectSphere(e,t){An.subVectors(e.center,this.origin);let n=An.dot(this.direction),s=An.dot(An)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,n,s,r){Zo.subVectors(t,e),Hr.subVectors(n,e),Jo.crossVectors(Zo,Hr);let a=this.direction.dot(Jo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xn.subVectors(this.origin,e);let l=o*this.direction.dot(Hr.crossVectors(Xn,Hr));if(l<0)return null;let c=o*this.direction.dot(Zo.cross(Xn));if(c<0||l+c>a)return null;let h=-o*Xn.dot(Jo);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tt=class i{constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,v,M,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,v,M,g)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,v,M,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=v,m[11]=M,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Zi.setFromMatrixColumn(e,0).length(),r=1/Zi.setFromMatrixColumn(e,1).length(),a=1/Zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,v=o*h,M=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+v*c,t[5]=d-M*c,t[9]=-o*l,t[2]=M-d*c,t[6]=v+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,v=c*h,M=c*u;t[0]=d+M*o,t[4]=v*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-v,t[6]=M+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,v=c*h,M=c*u;t[0]=d-M*o,t[4]=-a*u,t[8]=v+f*o,t[1]=f+v*o,t[5]=a*h,t[9]=M-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,v=o*h,M=o*u;t[0]=l*h,t[4]=v*c-f,t[8]=d*c+M,t[1]=l*u,t[5]=M*c+d,t[9]=f*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,v=o*l,M=o*c;t[0]=l*h,t[4]=M-d*u,t[8]=v*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+v,t[10]=d-M*u}else if(e.order==="XZY"){let d=a*l,f=a*c,v=o*l,M=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+M,t[5]=a*h,t[9]=f*u-v,t[2]=v*u-f,t[6]=o*h,t[10]=M*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Df,e,Uf)}lookAt(e,t,n){let s=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),qn.crossVectors(n,$t),qn.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),qn.crossVectors(n,$t)),qn.normalize(),Vr.crossVectors($t,qn),s[0]=qn.x,s[4]=Vr.x,s[8]=$t.x,s[1]=qn.y,s[5]=Vr.y,s[9]=$t.y,s[2]=qn.z,s[6]=Vr.z,s[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],v=n[2],M=n[6],g=n[10],m=n[14],C=n[3],p=n[7],x=n[11],S=n[15],_=s[0],E=s[4],T=s[8],y=s[12],b=s[1],P=s[5],D=s[9],O=s[13],V=s[2],X=s[6],G=s[10],ee=s[14],$=s[3],re=s[7],de=s[11],Se=s[15];return r[0]=a*_+o*b+l*V+c*$,r[4]=a*E+o*P+l*X+c*re,r[8]=a*T+o*D+l*G+c*de,r[12]=a*y+o*O+l*ee+c*Se,r[1]=h*_+u*b+d*V+f*$,r[5]=h*E+u*P+d*X+f*re,r[9]=h*T+u*D+d*G+f*de,r[13]=h*y+u*O+d*ee+f*Se,r[2]=v*_+M*b+g*V+m*$,r[6]=v*E+M*P+g*X+m*re,r[10]=v*T+M*D+g*G+m*de,r[14]=v*y+M*O+g*ee+m*Se,r[3]=C*_+p*b+x*V+S*$,r[7]=C*E+p*P+x*X+S*re,r[11]=C*T+p*D+x*G+S*de,r[15]=C*y+p*O+x*ee+S*Se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],v=e[3],M=e[7],g=e[11],m=e[15];return v*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+M*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+g*(+t*c*u-t*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+m*(-s*o*h-t*l*u+t*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],v=e[12],M=e[13],g=e[14],m=e[15],C=u*g*c-M*d*c+M*l*f-o*g*f-u*l*m+o*d*m,p=v*d*c-h*g*c-v*l*f+a*g*f+h*l*m-a*d*m,x=h*M*c-v*u*c+v*o*f-a*M*f-h*o*m+a*u*m,S=v*u*l-h*M*l-v*o*d+a*M*d+h*o*g-a*u*g,_=t*C+n*p+s*x+r*S;if(_===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/_;return e[0]=C*E,e[1]=(M*d*r-u*g*r-M*s*f+n*g*f+u*s*m-n*d*m)*E,e[2]=(o*g*r-M*l*r+M*s*c-n*g*c-o*s*m+n*l*m)*E,e[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*E,e[4]=p*E,e[5]=(h*g*r-v*d*r+v*s*f-t*g*f-h*s*m+t*d*m)*E,e[6]=(v*l*r-a*g*r-v*s*c+t*g*c+a*s*m-t*l*m)*E,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*f+t*l*f)*E,e[8]=x*E,e[9]=(v*u*r-h*M*r-v*n*f+t*M*f+h*n*m-t*u*m)*E,e[10]=(a*M*r-v*o*r+v*n*c-t*M*c-a*n*m+t*o*m)*E,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*f-t*o*f)*E,e[12]=S*E,e[13]=(h*M*s-v*u*s+v*n*d-t*M*d-h*n*g+t*u*g)*E,e[14]=(v*o*s-a*M*s-v*n*l+t*M*l+a*n*g-t*o*g)*E,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*d+t*o*d)*E,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,v=r*u,M=a*h,g=a*u,m=o*u,C=l*c,p=l*h,x=l*u,S=n.x,_=n.y,E=n.z;return s[0]=(1-(M+m))*S,s[1]=(f+x)*S,s[2]=(v-p)*S,s[3]=0,s[4]=(f-x)*_,s[5]=(1-(d+m))*_,s[6]=(g+C)*_,s[7]=0,s[8]=(v+p)*E,s[9]=(g-C)*E,s[10]=(1-(d+M))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Zi.set(s[0],s[1],s[2]).length(),a=Zi.set(s[4],s[5],s[6]).length(),o=Zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],cn.copy(this);let c=1/r,h=1/a,u=1/o;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=u,cn.elements[9]*=u,cn.elements[10]*=u,t.setFromRotationMatrix(cn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Dn){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f,v;if(o===Dn)f=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===pa)f=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Dn){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(a-r),d=(t+e)*c,f=(n+s)*h,v,M;if(o===Dn)v=(a+r)*u,M=-2*u;else if(o===pa)v=r*u,M=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=M,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Zi=new I,cn=new tt,Df=new I(0,0,0),Uf=new I(1,1,1),qn=new I,Vr=new I,$t=new I,iu=new tt,su=new dn,nn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return iu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(iu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return su.setFromEuler(this),this.setFromQuaternion(su,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};nn.DEFAULT_ORDER="XYZ";var _a=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Nf=0,ru=new I,Ji=new dn,Cn=new tt,Gr=new I,Vs=new I,Ff=new I,Of=new dn,au=new I(1,0,0),ou=new I(0,1,0),lu=new I(0,0,1),cu={type:"added"},Bf={type:"removed"},Ki={type:"childadded",child:null},Ko={type:"childremoved",child:null},Dt=class i extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new nn,n=new dn,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new tt},normalMatrix:{value:new Ue}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _a,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(au,e)}rotateY(e){return this.rotateOnAxis(ou,e)}rotateZ(e){return this.rotateOnAxis(lu,e)}translateOnAxis(e,t){return ru.copy(e).applyQuaternion(this.quaternion),this.position.add(ru.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(au,e)}translateY(e){return this.translateOnAxis(ou,e)}translateZ(e){return this.translateOnAxis(lu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Gr.copy(e):Gr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(Vs,Gr,this.up):Cn.lookAt(Gr,Vs,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),Ji.setFromRotationMatrix(Cn),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cu),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bf),Ko.child=e,this.dispatchEvent(Ko),Ko.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cu),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,e,Ff),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,Of,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Dt.DEFAULT_UP=new I(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hn=new I,Rn=new I,jo=new I,Pn=new I,ji=new I,Qi=new I,hu=new I,Qo=new I,el=new I,tl=new I,nl=new nt,il=new nt,sl=new nt,yi=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),hn.subVectors(e,t),s.cross(hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){hn.subVectors(s,t),Rn.subVectors(n,t),jo.subVectors(e,t);let a=hn.dot(hn),o=hn.dot(Rn),l=hn.dot(jo),c=Rn.dot(Rn),h=Rn.dot(jo),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,v=(a*h-o*l)*d;return r.set(1-f-v,v,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pn.x),l.addScaledVector(a,Pn.y),l.addScaledVector(o,Pn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return nl.setScalar(0),il.setScalar(0),sl.setScalar(0),nl.fromBufferAttribute(e,t),il.fromBufferAttribute(e,n),sl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(nl,r.x),a.addScaledVector(il,r.y),a.addScaledVector(sl,r.z),a}static isFrontFacing(e,t,n,s){return hn.subVectors(n,t),Rn.subVectors(e,t),hn.cross(Rn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),hn.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;ji.subVectors(s,n),Qi.subVectors(r,n),Qo.subVectors(e,n);let l=ji.dot(Qo),c=Qi.dot(Qo);if(l<=0&&c<=0)return t.copy(n);el.subVectors(e,s);let h=ji.dot(el),u=Qi.dot(el);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(ji,a);tl.subVectors(e,r);let f=ji.dot(tl),v=Qi.dot(tl);if(v>=0&&f<=v)return t.copy(r);let M=f*c-l*v;if(M<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(Qi,o);let g=h*v-f*u;if(g<=0&&u-h>=0&&f-v>=0)return hu.subVectors(r,s),o=(u-h)/(u-h+(f-v)),t.copy(s).addScaledVector(hu,o);let m=1/(g+M+d);return a=M*m,o=d*m,t.copy(n).addScaledVector(ji,a).addScaledVector(Qi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},dd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},Wr={h:0,s:0,l:0};function rl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ge=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,ze.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ze.workingColorSpace){if(e=Ef(e,1),t=wt(t,0,1),n=wt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=rl(a,r,e+1/3),this.g=rl(a,r,e),this.b=rl(a,r,e-1/3)}return ze.toWorkingColorSpace(this,s),this}setStyle(e,t=kt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){let n=dd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Un(e.r),this.g=Un(e.g),this.b=Un(e.b),this}copyLinearToSRGB(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return ze.fromWorkingColorSpace(Pt.copy(this),e),Math.round(wt(Pt.r*255,0,255))*65536+Math.round(wt(Pt.g*255,0,255))*256+Math.round(wt(Pt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ze.workingColorSpace){ze.fromWorkingColorSpace(Pt.copy(this),t);let n=Pt.r,s=Pt.g,r=Pt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ze.workingColorSpace){return ze.fromWorkingColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=kt){ze.fromWorkingColorSpace(Pt.copy(this),e);let t=Pt.r,n=Pt.g,s=Pt.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Yn),this.setHSL(Yn.h+e,Yn.s+t,Yn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yn),e.getHSL(Wr);let n=Vo(Yn.h,Wr.h,t),s=Vo(Yn.s,Wr.s,t),r=Vo(Yn.l,Wr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pt=new ge;ge.NAMES=dd;var kf=0,ti=class extends Qn{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=or(),this.name="",this.blending=as,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yl,this.blendDst=bl,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yl&&(n.blendSrc=this.blendSrc),this.blendDst!==bl&&(n.blendDst=this.blendDst),this.blendEquation!==_i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Tt=class extends ti{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=Ku,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var _t=new I,$r=new ne,Et=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Yh,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$r.fromBufferAttribute(this,t),$r.applyMatrix3(e),this.setXY(t,$r.x,$r.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ks(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ks(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ks(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ks(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ks(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array),r=Bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yh&&(e.usage=this.usage),e}};var ya=class extends Et{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ba=class extends Et{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var qe=class extends Et{constructor(e,t,n){super(new Float32Array(e),t,n)}},zf=0,en=new tt,al=new Dt,es=new I,Xt=new Fn,Gs=new Fn,St=new I,yt=class i extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=or(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ud(e)?ba:ya)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ue().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,n){return en.makeTranslation(e,t,n),this.applyMatrix4(en),this}scale(e,t,n){return en.makeScale(e,t,n),this.applyMatrix4(en),this}lookAt(e){return al.lookAt(e),al.updateMatrix(),this.applyMatrix4(al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qe(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Xt.setFromBufferAttribute(r),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Gs.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(Xt.min,Gs.min),Xt.expandByPoint(St),St.addVectors(Xt.max,Gs.max),Xt.expandByPoint(St)):(Xt.expandByPoint(Gs.min),Xt.expandByPoint(Gs.max))}Xt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)St.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(St));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)St.fromBufferAttribute(o,c),l&&(es.fromBufferAttribute(e,c),St.add(es)),s=Math.max(s,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Et(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let T=0;T<n.count;T++)o[T]=new I,l[T]=new I;let c=new I,h=new I,u=new I,d=new ne,f=new ne,v=new ne,M=new I,g=new I;function m(T,y,b){c.fromBufferAttribute(n,T),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,b),d.fromBufferAttribute(r,T),f.fromBufferAttribute(r,y),v.fromBufferAttribute(r,b),h.sub(c),u.sub(c),f.sub(d),v.sub(d);let P=1/(f.x*v.y-v.x*f.y);isFinite(P)&&(M.copy(h).multiplyScalar(v.y).addScaledVector(u,-f.y).multiplyScalar(P),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-v.x).multiplyScalar(P),o[T].add(M),o[y].add(M),o[b].add(M),l[T].add(g),l[y].add(g),l[b].add(g))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let T=0,y=C.length;T<y;++T){let b=C[T],P=b.start,D=b.count;for(let O=P,V=P+D;O<V;O+=3)m(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let p=new I,x=new I,S=new I,_=new I;function E(T){S.fromBufferAttribute(s,T),_.copy(S);let y=o[T];p.copy(y),p.sub(S.multiplyScalar(S.dot(y))).normalize(),x.crossVectors(_,y);let P=x.dot(l[T])<0?-1:1;a.setXYZW(T,p.x,p.y,p.z,P)}for(let T=0,y=C.length;T<y;++T){let b=C[T],P=b.start,D=b.count;for(let O=P,V=P+D;O<V;O+=3)E(e.getX(O+0)),E(e.getX(O+1)),E(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Et(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){let v=e.getX(d+0),M=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,v=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?f=l[M]*o.data.stride+o.offset:f=l[M]*h;for(let m=0;m<h;m++)d[v++]=c[f++]}return new Et(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},uu=new tt,pi=new va,Xr=new ei,du=new I,qr=new I,Yr=new I,Zr=new I,ol=new I,Jr=new I,fu=new I,Kr=new I,we=class extends Dt{constructor(e=new yt,t=new Tt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Jr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(ol.fromBufferAttribute(u,e),a?Jr.addScaledVector(ol,h):Jr.addScaledVector(ol.sub(t),h))}t.add(Jr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(r),pi.copy(e.ray).recast(e.near),!(Xr.containsPoint(pi.origin)===!1&&(pi.intersectSphere(Xr,du)===null||pi.origin.distanceToSquared(du)>(e.far-e.near)**2))&&(uu.copy(r).invert(),pi.copy(e.ray).applyMatrix4(uu),!(n.boundingBox!==null&&pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,pi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,M=d.length;v<M;v++){let g=d[v],m=a[g.materialIndex],C=Math.max(g.start,f.start),p=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let x=C,S=p;x<S;x+=3){let _=o.getX(x),E=o.getX(x+1),T=o.getX(x+2);s=jr(this,m,e,n,c,h,u,_,E,T),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let v=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let g=v,m=M;g<m;g+=3){let C=o.getX(g),p=o.getX(g+1),x=o.getX(g+2);s=jr(this,a,e,n,c,h,u,C,p,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,M=d.length;v<M;v++){let g=d[v],m=a[g.materialIndex],C=Math.max(g.start,f.start),p=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let x=C,S=p;x<S;x+=3){let _=x,E=x+1,T=x+2;s=jr(this,m,e,n,c,h,u,_,E,T),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let v=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let g=v,m=M;g<m;g+=3){let C=g,p=g+1,x=g+2;s=jr(this,a,e,n,c,h,u,C,p,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Hf(i,e,t,n,s,r,a,o){let l;if(e.side===Lt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===jn,o),l===null)return null;Kr.copy(o),Kr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Kr);return c<t.near||c>t.far?null:{distance:c,point:Kr.clone(),object:i}}function jr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,qr),i.getVertexPosition(l,Yr),i.getVertexPosition(c,Zr);let h=Hf(i,e,t,n,qr,Yr,Zr,fu);if(h){let u=new I;yi.getBarycoord(fu,qr,Yr,Zr,u),s&&(h.uv=yi.getInterpolatedAttribute(s,o,l,c,u,new ne)),r&&(h.uv1=yi.getInterpolatedAttribute(r,o,l,c,u,new ne)),a&&(h.normal=yi.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new I,materialIndex:0};yi.getNormal(qr,Yr,Zr,d.normal),h.face=d,h.barycoord=u}return h}var Yt=class i extends yt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new qe(c,3)),this.setAttribute("normal",new qe(h,3)),this.setAttribute("uv",new qe(u,2));function v(M,g,m,C,p,x,S,_,E,T,y){let b=x/E,P=S/T,D=x/2,O=S/2,V=_/2,X=E+1,G=T+1,ee=0,$=0,re=new I;for(let de=0;de<G;de++){let Se=de*P-O;for(let Be=0;Be<X;Be++){let it=Be*b-D;re[M]=it*C,re[g]=Se*p,re[m]=V,c.push(re.x,re.y,re.z),re[M]=0,re[g]=0,re[m]=_>0?1:-1,h.push(re.x,re.y,re.z),u.push(Be/E),u.push(1-de/T),ee+=1}}for(let de=0;de<T;de++)for(let Se=0;Se<E;Se++){let Be=d+Se+X*de,it=d+Se+X*(de+1),Y=d+(Se+1)+X*(de+1),te=d+(Se+1)+X*de;l.push(Be,it,te),l.push(it,Y,te),$+=6}o.addGroup(f,$,y),f+=$,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ms(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ut(i){let e={};for(let t=0;t<i.length;t++){let n=ms(i[t]);for(let s in n)e[s]=n[s]}return e}function Vf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function fd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ze.workingColorSpace}var ii={clone:ms,merge:Ut},Gf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pt=class extends ti{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gf,this.fragmentShader=Wf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ms(e.uniforms),this.uniformsGroups=Vf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ma=class extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=Dn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Zn=new I,pu=new ne,mu=new ne,It=class extends Ma{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ac*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ho*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ac*2*Math.atan(Math.tan(Ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z)}getViewSize(e,t){return this.getViewBounds(e,pu,mu),t.subVectors(mu,pu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ho*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ts=-90,ns=1,hc=class extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new It(ts,ns,e,t);s.layers=this.layers,this.add(s);let r=new It(ts,ns,e,t);r.layers=this.layers,this.add(r);let a=new It(ts,ns,e,t);a.layers=this.layers,this.add(a);let o=new It(ts,ns,e,t);o.layers=this.layers,this.add(o);let l=new It(ts,ns,e,t);l.layers=this.layers,this.add(l);let c=new It(ts,ns,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===pa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},Sa=class extends Vt{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:us,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},uc=class extends Nt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Sa(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Yt(5,5,5),r=new pt({name:"CubemapFromEquirect",uniforms:ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lt,blending:bn});r.uniforms.tEquirect.value=t;let a=new we(s,r),o=t.minFilter;return t.minFilter===Si&&(t.minFilter=_n),new hc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},ll=new I,$f=new I,Xf=new Ue,Ln=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=ll.subVectors(n,t).cross($f.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ll),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Xf.getNormalMatrix(e),s=this.coplanarPoint(ll).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},mi=new ei,Qr=new I,Qs=class{constructor(e=new Ln,t=new Ln,n=new Ln,s=new Ln,r=new Ln,a=new Ln){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Dn){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],v=s[9],M=s[10],g=s[11],m=s[12],C=s[13],p=s[14],x=s[15];if(n[0].setComponents(l-r,d-c,g-f,x-m).normalize(),n[1].setComponents(l+r,d+c,g+f,x+m).normalize(),n[2].setComponents(l+a,d+h,g+v,x+C).normalize(),n[3].setComponents(l-a,d-h,g-v,x-C).normalize(),n[4].setComponents(l-o,d-u,g-M,x-p).normalize(),t===Dn)n[5].setComponents(l+o,d+u,g+M,x+p).normalize();else if(t===pa)n[5].setComponents(o,u,M,p).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(e){return mi.center.set(0,0,0),mi.radius=.7071067811865476,mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Qr.x=s.normal.x>0?e.max.x:e.min.x,Qr.y=s.normal.y>0?e.max.y:e.min.y,Qr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Qr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function pd(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function qf(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,v)=>f.start-v.start);let d=0;for(let f=1;f<u.length;f++){let v=u[d],M=u[f];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++d,u[d]=M)}u.length=d+1;for(let f=0,v=u.length;f<v;f++){let M=u[f];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var fn=class i extends yt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],v=[],M=[],g=[];for(let m=0;m<h;m++){let C=m*d-a;for(let p=0;p<c;p++){let x=p*u-r;v.push(x,-C,0),M.push(0,0,1),g.push(p/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let C=0;C<o;C++){let p=C+c*m,x=C+c*(m+1),S=C+1+c*(m+1),_=C+1+c*m;f.push(p,x,_),f.push(x,S,_)}this.setIndex(f),this.setAttribute("position",new qe(v,3)),this.setAttribute("normal",new qe(M,3)),this.setAttribute("uv",new qe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Yf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Jf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ep=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,np=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ip=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ap=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,op=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,xp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_p=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ep=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ap=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Rp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ip=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Up=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Np=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Fp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Op=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Hp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$p=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,em=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,im=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,am=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,om=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,um=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_m=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ym=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Sm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Em=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Am=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Pm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Im=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Lm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Um=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Nm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Om=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,km=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ym=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,eg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ng=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ag=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,og=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ug=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_g=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Eg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:Yf,alphahash_pars_fragment:Zf,alphamap_fragment:Jf,alphamap_pars_fragment:Kf,alphatest_fragment:jf,alphatest_pars_fragment:Qf,aomap_fragment:ep,aomap_pars_fragment:tp,batching_pars_vertex:np,batching_vertex:ip,begin_vertex:sp,beginnormal_vertex:rp,bsdfs:ap,iridescence_fragment:op,bumpmap_pars_fragment:lp,clipping_planes_fragment:cp,clipping_planes_pars_fragment:hp,clipping_planes_pars_vertex:up,clipping_planes_vertex:dp,color_fragment:fp,color_pars_fragment:pp,color_pars_vertex:mp,color_vertex:gp,common:xp,cube_uv_reflection_fragment:vp,defaultnormal_vertex:_p,displacementmap_pars_vertex:yp,displacementmap_vertex:bp,emissivemap_fragment:Mp,emissivemap_pars_fragment:Sp,colorspace_fragment:wp,colorspace_pars_fragment:Ep,envmap_fragment:Tp,envmap_common_pars_fragment:Ap,envmap_pars_fragment:Cp,envmap_pars_vertex:Rp,envmap_physical_pars_fragment:zp,envmap_vertex:Pp,fog_vertex:Ip,fog_pars_vertex:Lp,fog_fragment:Dp,fog_pars_fragment:Up,gradientmap_pars_fragment:Np,lightmap_pars_fragment:Fp,lights_lambert_fragment:Op,lights_lambert_pars_fragment:Bp,lights_pars_begin:kp,lights_toon_fragment:Hp,lights_toon_pars_fragment:Vp,lights_phong_fragment:Gp,lights_phong_pars_fragment:Wp,lights_physical_fragment:$p,lights_physical_pars_fragment:Xp,lights_fragment_begin:qp,lights_fragment_maps:Yp,lights_fragment_end:Zp,logdepthbuf_fragment:Jp,logdepthbuf_pars_fragment:Kp,logdepthbuf_pars_vertex:jp,logdepthbuf_vertex:Qp,map_fragment:em,map_pars_fragment:tm,map_particle_fragment:nm,map_particle_pars_fragment:im,metalnessmap_fragment:sm,metalnessmap_pars_fragment:rm,morphinstance_vertex:am,morphcolor_vertex:om,morphnormal_vertex:lm,morphtarget_pars_vertex:cm,morphtarget_vertex:hm,normal_fragment_begin:um,normal_fragment_maps:dm,normal_pars_fragment:fm,normal_pars_vertex:pm,normal_vertex:mm,normalmap_pars_fragment:gm,clearcoat_normal_fragment_begin:xm,clearcoat_normal_fragment_maps:vm,clearcoat_pars_fragment:_m,iridescence_pars_fragment:ym,opaque_fragment:bm,packing:Mm,premultiplied_alpha_fragment:Sm,project_vertex:wm,dithering_fragment:Em,dithering_pars_fragment:Tm,roughnessmap_fragment:Am,roughnessmap_pars_fragment:Cm,shadowmap_pars_fragment:Rm,shadowmap_pars_vertex:Pm,shadowmap_vertex:Im,shadowmask_pars_fragment:Lm,skinbase_vertex:Dm,skinning_pars_vertex:Um,skinning_vertex:Nm,skinnormal_vertex:Fm,specularmap_fragment:Om,specularmap_pars_fragment:Bm,tonemapping_fragment:km,tonemapping_pars_fragment:zm,transmission_fragment:Hm,transmission_pars_fragment:Vm,uv_pars_fragment:Gm,uv_pars_vertex:Wm,uv_vertex:$m,worldpos_vertex:Xm,background_vert:qm,background_frag:Ym,backgroundCube_vert:Zm,backgroundCube_frag:Jm,cube_vert:Km,cube_frag:jm,depth_vert:Qm,depth_frag:eg,distanceRGBA_vert:tg,distanceRGBA_frag:ng,equirect_vert:ig,equirect_frag:sg,linedashed_vert:rg,linedashed_frag:ag,meshbasic_vert:og,meshbasic_frag:lg,meshlambert_vert:cg,meshlambert_frag:hg,meshmatcap_vert:ug,meshmatcap_frag:dg,meshnormal_vert:fg,meshnormal_frag:pg,meshphong_vert:mg,meshphong_frag:gg,meshphysical_vert:xg,meshphysical_frag:vg,meshtoon_vert:_g,meshtoon_frag:yg,points_vert:bg,points_frag:Mg,shadow_vert:Sg,shadow_frag:wg,sprite_vert:Eg,sprite_frag:Tg},ie={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},vn={basic:{uniforms:Ut([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Ut([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new ge(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Ut([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Ut([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Ut([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new ge(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Ut([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Ut([ie.points,ie.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Ut([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Ut([ie.common,ie.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Ut([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Ut([ie.sprite,ie.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Ut([ie.common,ie.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Ut([ie.lights,ie.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};vn.physical={uniforms:Ut([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};var ea={r:0,b:0,g:0},gi=new nn,Ag=new tt;function Cg(i,e,t,n,s,r,a){let o=new ge(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function v(C){let p=C.isScene===!0?C.background:null;return p&&p.isTexture&&(p=(C.backgroundBlurriness>0?t:e).get(p)),p}function M(C){let p=!1,x=v(C);x===null?m(o,l):x&&x.isColor&&(m(x,1),p=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||p)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(C,p){let x=v(p);x&&(x.isCubeTexture||x.mapping===Ha)?(h===void 0&&(h=new we(new Yt(1,1,1),new pt({name:"BackgroundCubeMaterial",uniforms:ms(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,_,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),gi.copy(p.backgroundRotation),gi.x*=-1,gi.y*=-1,gi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ag.makeRotationFromEuler(gi)),h.material.toneMapped=ze.getTransfer(x.colorSpace)!==je,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new we(new fn(2,2),new pt({name:"BackgroundMaterial",uniforms:ms(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=ze.getTransfer(x.colorSpace)!==je,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null))}function m(C,p){C.getRGB(ea,fd(i)),n.buffers.color.setClear(ea.r,ea.g,ea.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(C,p=1){o.set(C),l=p,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(C){l=C,m(o,l)},render:M,addToRenderList:g}}function Rg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(b,P,D,O,V){let X=!1,G=u(O,D,P);r!==G&&(r=G,c(r.object)),X=f(b,O,D,V),X&&v(b,O,D,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,x(b,P,D,O),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,P,D){let O=D.wireframe===!0,V=n[b.id];V===void 0&&(V={},n[b.id]=V);let X=V[P.id];X===void 0&&(X={},V[P.id]=X);let G=X[O];return G===void 0&&(G=d(l()),X[O]=G),G}function d(b){let P=[],D=[],O=[];for(let V=0;V<t;V++)P[V]=0,D[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:O,object:b,attributes:{},index:null}}function f(b,P,D,O){let V=r.attributes,X=P.attributes,G=0,ee=D.getAttributes();for(let $ in ee)if(ee[$].location>=0){let de=V[$],Se=X[$];if(Se===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(Se=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(Se=b.instanceColor)),de===void 0||de.attribute!==Se||Se&&de.data!==Se.data)return!0;G++}return r.attributesNum!==G||r.index!==O}function v(b,P,D,O){let V={},X=P.attributes,G=0,ee=D.getAttributes();for(let $ in ee)if(ee[$].location>=0){let de=X[$];de===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(de=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(de=b.instanceColor));let Se={};Se.attribute=de,de&&de.data&&(Se.data=de.data),V[$]=Se,G++}r.attributes=V,r.attributesNum=G,r.index=O}function M(){let b=r.newAttributes;for(let P=0,D=b.length;P<D;P++)b[P]=0}function g(b){m(b,0)}function m(b,P){let D=r.newAttributes,O=r.enabledAttributes,V=r.attributeDivisors;D[b]=1,O[b]===0&&(i.enableVertexAttribArray(b),O[b]=1),V[b]!==P&&(i.vertexAttribDivisor(b,P),V[b]=P)}function C(){let b=r.newAttributes,P=r.enabledAttributes;for(let D=0,O=P.length;D<O;D++)P[D]!==b[D]&&(i.disableVertexAttribArray(D),P[D]=0)}function p(b,P,D,O,V,X,G){G===!0?i.vertexAttribIPointer(b,P,D,V,X):i.vertexAttribPointer(b,P,D,O,V,X)}function x(b,P,D,O){M();let V=O.attributes,X=D.getAttributes(),G=P.defaultAttributeValues;for(let ee in X){let $=X[ee];if($.location>=0){let re=V[ee];if(re===void 0&&(ee==="instanceMatrix"&&b.instanceMatrix&&(re=b.instanceMatrix),ee==="instanceColor"&&b.instanceColor&&(re=b.instanceColor)),re!==void 0){let de=re.normalized,Se=re.itemSize,Be=e.get(re);if(Be===void 0)continue;let it=Be.buffer,Y=Be.type,te=Be.bytesPerElement,ye=Y===i.INT||Y===i.UNSIGNED_INT||re.gpuType===Kc;if(re.isInterleavedBufferAttribute){let ae=re.data,Ce=ae.stride,Ie=re.offset;if(ae.isInstancedInterleavedBuffer){for(let ke=0;ke<$.locationSize;ke++)m($.location+ke,ae.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ke=0;ke<$.locationSize;ke++)g($.location+ke);i.bindBuffer(i.ARRAY_BUFFER,it);for(let ke=0;ke<$.locationSize;ke++)p($.location+ke,Se/$.locationSize,Y,de,Ce*te,(Ie+Se/$.locationSize*ke)*te,ye)}else{if(re.isInstancedBufferAttribute){for(let ae=0;ae<$.locationSize;ae++)m($.location+ae,re.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ae=0;ae<$.locationSize;ae++)g($.location+ae);i.bindBuffer(i.ARRAY_BUFFER,it);for(let ae=0;ae<$.locationSize;ae++)p($.location+ae,Se/$.locationSize,Y,de,Se*te,Se/$.locationSize*ae*te,ye)}}else if(G!==void 0){let de=G[ee];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv($.location,de);break;case 3:i.vertexAttrib3fv($.location,de);break;case 4:i.vertexAttrib4fv($.location,de);break;default:i.vertexAttrib1fv($.location,de)}}}}C()}function S(){T();for(let b in n){let P=n[b];for(let D in P){let O=P[D];for(let V in O)h(O[V].object),delete O[V];delete P[D]}delete n[b]}}function _(b){if(n[b.id]===void 0)return;let P=n[b.id];for(let D in P){let O=P[D];for(let V in O)h(O[V].object),delete O[V];delete P[D]}delete n[b.id]}function E(b){for(let P in n){let D=n[P];if(D[b.id]===void 0)continue;let O=D[b.id];for(let V in O)h(O[V].object),delete O[V];delete D[b.id]}}function T(){y(),a=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:y,dispose:S,releaseStatesOfGeometry:_,releaseStatesOfProgram:E,initAttributes:M,enableAttribute:g,disableUnusedAttributes:C}}function Pg(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let v=0;v<u;v++)f+=h[v];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<c.length;v++)a(c[v],h[v],d[v]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let v=0;for(let M=0;M<u;M++)v+=h[M]*d[M];t.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ig(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==un&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let T=E===mn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Nn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==yn&&!T)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=v>0,_=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:C,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:S,maxSamples:_}}function Lg(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Ln,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let v=u.clippingPlanes,M=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||v===null||v.length===0||r&&!g)r?h(null):c();else{let C=r?0:n,p=C*4,x=m.clippingState||null;l.value=x,x=h(v,d,p,f);for(let S=0;S!==p;++S)x[S]=t[S];m.clippingState=x,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,v){let M=u!==null?u.length:0,g=null;if(M!==0){if(g=l.value,v!==!0||g===null){let m=f+M*4,C=d.matrixWorldInverse;o.getNormalMatrix(C),(g===null||g.length<m)&&(g=new Float32Array(m));for(let p=0,x=f;p!==M;++p,x+=4)a.copy(u[p]).applyMatrix4(C,o),a.normal.toArray(g,x),g[x+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}function Dg(i){let e=new WeakMap;function t(a,o){return o===Rl?a.mapping=us:o===Pl&&(a.mapping=ds),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Rl||o===Pl)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new uc(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var gs=class extends Ma{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},rs=4,gu=[.125,.215,.35,.446,.526,.582],bi=20,cl=new gs,xu=new ge,hl=null,ul=0,dl=0,fl=!1,vi=(1+Math.sqrt(5))/2,is=1/vi,vu=[new I(-vi,is,0),new I(vi,is,0),new I(-is,0,vi),new I(is,0,vi),new I(0,vi,-is),new I(0,vi,is),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],wa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){hl=this._renderer.getRenderTarget(),ul=this._renderer.getActiveCubeFace(),dl=this._renderer.getActiveMipmapLevel(),fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hl,ul,dl),this._renderer.xr.enabled=fl,e.scissorTest=!1,ta(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===us||e.mapping===ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hl=this._renderer.getRenderTarget(),ul=this._renderer.getActiveCubeFace(),dl=this._renderer.getActiveMipmapLevel(),fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:mn,format:un,colorSpace:Ms,depthBuffer:!1},s=_u(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_u(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ug(r)),this._blurMaterial=Ng(r,e,t)}return s}_compileMaterial(e){let t=new we(this._lodPlanes[0],e);this._renderer.compile(t,cl)}_sceneToCubeUV(e,t,n,s){let o=new It(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(xu),h.toneMapping=Kn,h.autoClear=!1;let f=new Tt({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),v=new we(new Yt,f),M=!1,g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,M=!0):(f.color.copy(xu),M=!0);for(let m=0;m<6;m++){let C=m%3;C===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):C===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));let p=this._cubeSize;ta(s,C*p,m>2?p:0,p,p),h.setRenderTarget(s),M&&h.render(v,o),h.render(e,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===us||e.mapping===ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new we(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;ta(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,cl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=vu[(s-r-1)%vu.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new we(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*bi-1),M=r/v,g=isFinite(r)?1+Math.floor(h*M):bi;g>bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${bi}`);let m=[],C=0;for(let E=0;E<bi;++E){let T=E/M,y=Math.exp(-T*T/2);m.push(y),E===0?C+=y:E<g&&(C+=2*y)}for(let E=0;E<m.length;E++)m[E]=m[E]/C;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:p}=this;d.dTheta.value=v,d.mipInt.value=p-n;let x=this._sizeLods[s],S=3*x*(s>p-rs?s-p+rs:0),_=4*(this._cubeSize-x);ta(t,S,_,3*x,2*x),l.setRenderTarget(t),l.render(u,cl)}};function Ug(i){let e=[],t=[],n=[],s=i,r=i-rs+1+gu.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-rs?l=gu[a-i+rs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,v=6,M=3,g=2,m=1,C=new Float32Array(M*v*f),p=new Float32Array(g*v*f),x=new Float32Array(m*v*f);for(let _=0;_<f;_++){let E=_%3*2/3-1,T=_>2?0:-1,y=[E,T,0,E+2/3,T,0,E+2/3,T+1,0,E,T,0,E+2/3,T+1,0,E,T+1,0];C.set(y,M*v*_),p.set(d,g*v*_);let b=[_,_,_,_,_,_];x.set(b,m*v*_)}let S=new yt;S.setAttribute("position",new Et(C,M)),S.setAttribute("uv",new Et(p,g)),S.setAttribute("faceIndex",new Et(x,m)),e.push(S),s>rs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function _u(i,e,t){let n=new Nt(i,e,t);return n.texture.mapping=Ha,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ta(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ng(i,e,t){let n=new Float32Array(bi),s=new I(0,1,0);return new pt({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function yu(){return new pt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function bu(){return new pt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function sh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Fg(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Rl||l===Pl,h=l===us||l===ds;if(c||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new wa(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new wa(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Og(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&qs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Bg(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let v in d.attributes)e.remove(d.attributes[v]);for(let v in d.morphAttributes){let M=d.morphAttributes[v];for(let g=0,m=M.length;g<m;g++)e.remove(M[g])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let v in d)e.update(d[v],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let v in f){let M=f[v];for(let g=0,m=M.length;g<m;g++)e.update(M[g],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,v=u.attributes.position,M=0;if(f!==null){let C=f.array;M=f.version;for(let p=0,x=C.length;p<x;p+=3){let S=C[p+0],_=C[p+1],E=C[p+2];d.push(S,_,_,E,E,S)}}else if(v!==void 0){let C=v.array;M=v.version;for(let p=0,x=C.length/3-1;p<x;p+=3){let S=p+0,_=p+1,E=p+2;d.push(S,_,_,E,E,S)}}else return;let g=new(ud(d)?ba:ya)(d,1);g.version=M;let m=r.get(u);m&&e.remove(m),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function kg(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,v){v!==0&&(i.drawElementsInstanced(n,f,r,d*a,v),t.update(f,n,v))}function h(d,f,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,v);let g=0;for(let m=0;m<v;m++)g+=f[m];t.update(g,n,1)}function u(d,f,v,M){if(v===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/a,f[m],M[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,M,0,v);let m=0;for(let C=0;C<v;C++)m+=f[C]*M[C];t.update(m,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function zg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Hg(i,e,t){let n=new WeakMap,s=new nt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let y=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],C=o.morphAttributes.color||[],p=0;f===!0&&(p=1),v===!0&&(p=2),M===!0&&(p=3);let x=o.attributes.position.count*p,S=1;x>e.maxTextureSize&&(S=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let _=new Float32Array(x*S*4*u),E=new xa(_,x,S,u);E.type=yn,E.needsUpdate=!0;let T=p*4;for(let b=0;b<u;b++){let P=g[b],D=m[b],O=C[b],V=x*S*4*b;for(let X=0;X<P.count;X++){let G=X*T;f===!0&&(s.fromBufferAttribute(P,X),_[V+G+0]=s.x,_[V+G+1]=s.y,_[V+G+2]=s.z,_[V+G+3]=0),v===!0&&(s.fromBufferAttribute(D,X),_[V+G+4]=s.x,_[V+G+5]=s.y,_[V+G+6]=s.z,_[V+G+7]=0),M===!0&&(s.fromBufferAttribute(O,X),_[V+G+8]=s.x,_[V+G+9]=s.y,_[V+G+10]=s.z,_[V+G+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:E,size:new ne(x,S)},n.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let M=0;M<c.length;M++)f+=c[M];let v=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Vg(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Ea=class extends Vt{constructor(e,t,n,s,r,a,o,l,c,h=os){if(h!==os&&h!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===os&&(n=wi),n===void 0&&h===ps&&(n=fs),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:qt,this.minFilter=l!==void 0?l:qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},md=new Vt,Mu=new Ea(1,1),gd=new xa,xd=new cc,vd=new Sa,Su=[],wu=[],Eu=new Float32Array(16),Tu=new Float32Array(9),Au=new Float32Array(4);function Ss(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Su[s];if(r===void 0&&(r=new Float32Array(s),Su[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ga(i,e){let t=wu[e];t===void 0&&(t=new Int32Array(e),wu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Gg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Wg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2fv(this.addr,e),Mt(t,e)}}function $g(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;i.uniform3fv(this.addr,e),Mt(t,e)}}function Xg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4fv(this.addr,e),Mt(t,e)}}function qg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(bt(t,n))return;Au.set(n),i.uniformMatrix2fv(this.addr,!1,Au),Mt(t,n)}}function Yg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(bt(t,n))return;Tu.set(n),i.uniformMatrix3fv(this.addr,!1,Tu),Mt(t,n)}}function Zg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(bt(t,n))return;Eu.set(n),i.uniformMatrix4fv(this.addr,!1,Eu),Mt(t,n)}}function Jg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Kg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2iv(this.addr,e),Mt(t,e)}}function jg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3iv(this.addr,e),Mt(t,e)}}function Qg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4iv(this.addr,e),Mt(t,e)}}function e0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function t0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2uiv(this.addr,e),Mt(t,e)}}function n0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3uiv(this.addr,e),Mt(t,e)}}function i0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4uiv(this.addr,e),Mt(t,e)}}function s0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Mu.compareFunction=cd,r=Mu):r=md,t.setTexture2D(e||r,s)}function r0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||xd,s)}function a0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||vd,s)}function o0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||gd,s)}function l0(i){switch(i){case 5126:return Gg;case 35664:return Wg;case 35665:return $g;case 35666:return Xg;case 35674:return qg;case 35675:return Yg;case 35676:return Zg;case 5124:case 35670:return Jg;case 35667:case 35671:return Kg;case 35668:case 35672:return jg;case 35669:case 35673:return Qg;case 5125:return e0;case 36294:return t0;case 36295:return n0;case 36296:return i0;case 35678:case 36198:case 36298:case 36306:case 35682:return s0;case 35679:case 36299:case 36307:return r0;case 35680:case 36300:case 36308:case 36293:return a0;case 36289:case 36303:case 36311:case 36292:return o0}}function c0(i,e){i.uniform1fv(this.addr,e)}function h0(i,e){let t=Ss(e,this.size,2);i.uniform2fv(this.addr,t)}function u0(i,e){let t=Ss(e,this.size,3);i.uniform3fv(this.addr,t)}function d0(i,e){let t=Ss(e,this.size,4);i.uniform4fv(this.addr,t)}function f0(i,e){let t=Ss(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function p0(i,e){let t=Ss(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function m0(i,e){let t=Ss(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function g0(i,e){i.uniform1iv(this.addr,e)}function x0(i,e){i.uniform2iv(this.addr,e)}function v0(i,e){i.uniform3iv(this.addr,e)}function _0(i,e){i.uniform4iv(this.addr,e)}function y0(i,e){i.uniform1uiv(this.addr,e)}function b0(i,e){i.uniform2uiv(this.addr,e)}function M0(i,e){i.uniform3uiv(this.addr,e)}function S0(i,e){i.uniform4uiv(this.addr,e)}function w0(i,e,t){let n=this.cache,s=e.length,r=Ga(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||md,r[a])}function E0(i,e,t){let n=this.cache,s=e.length,r=Ga(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||xd,r[a])}function T0(i,e,t){let n=this.cache,s=e.length,r=Ga(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||vd,r[a])}function A0(i,e,t){let n=this.cache,s=e.length,r=Ga(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||gd,r[a])}function C0(i){switch(i){case 5126:return c0;case 35664:return h0;case 35665:return u0;case 35666:return d0;case 35674:return f0;case 35675:return p0;case 35676:return m0;case 5124:case 35670:return g0;case 35667:case 35671:return x0;case 35668:case 35672:return v0;case 35669:case 35673:return _0;case 5125:return y0;case 36294:return b0;case 36295:return M0;case 36296:return S0;case 35678:case 36198:case 36298:case 36306:case 35682:return w0;case 35679:case 36299:case 36307:return E0;case 35680:case 36300:case 36308:case 36293:return T0;case 36289:case 36303:case 36311:case 36292:return A0}}var dc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=l0(t.type)}},fc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=C0(t.type)}},pc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},pl=/(\w+)(\])?(\[|\.)?/g;function Cu(i,e){i.seq.push(e),i.map[e.id]=e}function R0(i,e,t){let n=i.name,s=n.length;for(pl.lastIndex=0;;){let r=pl.exec(n),a=pl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Cu(t,c===void 0?new dc(o,i,e):new fc(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new pc(o),Cu(t,u)),t=u}}}var cs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);R0(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Ru(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var P0=37297,I0=0;function L0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Pu=new Ue;function D0(i){ze._getMatrix(Pu,ze.workingColorSpace,i);let e=`mat3( ${Pu.elements.map(t=>t.toFixed(4))} )`;switch(ze.getTransfer(i)){case Va:return[e,"LinearTransferOETF"];case je:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Iu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+L0(i.getShaderSource(e),a)}else return s}function U0(i,e){let t=D0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function N0(i,e){let t;switch(e){case Xc:t="Linear";break;case qc:t="Reinhard";break;case Yc:t="Cineon";break;case ar:t="ACESFilmic";break;case Zc:t="AgX";break;case Jc:t="Neutral";break;case ff:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var na=new I;function F0(){ze.getLuminanceCoefficients(na);let i=na.x.toFixed(4),e=na.y.toFixed(4),t=na.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function O0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ys).join(`
`)}function B0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function k0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ys(i){return i!==""}function Lu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Du(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var z0=/^[ \t]*#include +<([\w\d./]+)>/gm;function mc(i){return i.replace(z0,V0)}var H0=new Map;function V0(i,e){let t=Fe[e];if(t===void 0){let n=H0.get(e);if(n!==void 0)t=Fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return mc(t)}var G0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uu(i){return i.replace(G0,W0)}function W0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ju?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===$d?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===In&&(e="SHADOWMAP_TYPE_VSM"),e}function X0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case us:case ds:e="ENVMAP_TYPE_CUBE";break;case Ha:e="ENVMAP_TYPE_CUBE_UV";break}return e}function q0(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ds&&(e="ENVMAP_MODE_REFRACTION"),e}function Y0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ku:e="ENVMAP_BLENDING_MULTIPLY";break;case uf:e="ENVMAP_BLENDING_MIX";break;case df:e="ENVMAP_BLENDING_ADD";break}return e}function Z0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function J0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=$0(t),c=X0(t),h=q0(t),u=Y0(t),d=Z0(t),f=O0(t),v=B0(r),M=s.createProgram(),g,m,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ys).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ys).join(`
`),m.length>0&&(m+=`
`)):(g=[Nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ys).join(`
`),m=[Nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kn?"#define TONE_MAPPING":"",t.toneMapping!==Kn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==Kn?N0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,U0("linearToOutputTexel",t.outputColorSpace),F0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ys).join(`
`)),a=mc(a),a=Lu(a,t),a=Du(a,t),o=mc(o),o=Lu(o,t),o=Du(o,t),a=Uu(a),o=Uu(o),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Zh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let p=C+g+a,x=C+m+o,S=Ru(s,s.VERTEX_SHADER,p),_=Ru(s,s.FRAGMENT_SHADER,x);s.attachShader(M,S),s.attachShader(M,_),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function E(P){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(M).trim(),O=s.getShaderInfoLog(S).trim(),V=s.getShaderInfoLog(_).trim(),X=!0,G=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,S,_);else{let ee=Iu(s,S,"vertex"),$=Iu(s,_,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+ee+`
`+$)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(O===""||V==="")&&(G=!1);G&&(P.diagnostics={runnable:X,programLog:D,vertexShader:{log:O,prefix:g},fragmentShader:{log:V,prefix:m}})}s.deleteShader(S),s.deleteShader(_),T=new cs(s,M),y=k0(s,M)}let T;this.getUniforms=function(){return T===void 0&&E(this),T};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(M,P0)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=I0++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=S,this.fragmentShader=_,this}var K0=0,gc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new xc(e),t.set(e,n)),n}},xc=class{constructor(e){this.id=K0++,this.code=e,this.usedTimes=0}};function j0(i,e,t,n,s,r,a){let o=new _a,l=new gc,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(y){return c.add(y),y===0?"uv":`uv${y}`}function g(y,b,P,D,O){let V=D.fog,X=O.geometry,G=y.isMeshStandardMaterial?D.environment:null,ee=(y.isMeshStandardMaterial?t:e).get(y.envMap||G),$=ee&&ee.mapping===Ha?ee.image.height:null,re=v[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let de=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Se=de!==void 0?de.length:0,Be=0;X.morphAttributes.position!==void 0&&(Be=1),X.morphAttributes.normal!==void 0&&(Be=2),X.morphAttributes.color!==void 0&&(Be=3);let it,Y,te,ye;if(re){let et=vn[re];it=et.vertexShader,Y=et.fragmentShader}else it=y.vertexShader,Y=y.fragmentShader,l.update(y),te=l.getVertexShaderID(y),ye=l.getFragmentShaderID(y);let ae=i.getRenderTarget(),Ce=i.state.buffers.depth.getReversed(),Ie=O.isInstancedMesh===!0,ke=O.isBatchedMesh===!0,ft=!!y.map,$e=!!y.matcap,vt=!!ee,F=!!y.aoMap,Kt=!!y.lightMap,He=!!y.bumpMap,Ve=!!y.normalMap,Te=!!y.displacementMap,lt=!!y.emissiveMap,Ee=!!y.metalnessMap,R=!!y.roughnessMap,w=y.anisotropy>0,B=y.clearcoat>0,Z=y.dispersion>0,K=y.iridescence>0,q=y.sheen>0,be=y.transmission>0,oe=w&&!!y.anisotropyMap,fe=B&&!!y.clearcoatMap,Xe=B&&!!y.clearcoatNormalMap,j=B&&!!y.clearcoatRoughnessMap,pe=K&&!!y.iridescenceMap,Ae=K&&!!y.iridescenceThicknessMap,Re=q&&!!y.sheenColorMap,me=q&&!!y.sheenRoughnessMap,Ge=!!y.specularMap,Ne=!!y.specularColorMap,rt=!!y.specularIntensityMap,L=be&&!!y.transmissionMap,se=be&&!!y.thicknessMap,W=!!y.gradientMap,J=!!y.alphaMap,he=y.alphaTest>0,le=!!y.alphaHash,Le=!!y.extensions,gt=Kn;y.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(gt=i.toneMapping);let At={shaderID:re,shaderType:y.type,shaderName:y.name,vertexShader:it,fragmentShader:Y,defines:y.defines,customVertexShaderID:te,customFragmentShaderID:ye,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:ke,batchingColor:ke&&O._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&O.instanceColor!==null,instancingMorph:Ie&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Ms,alphaToCoverage:!!y.alphaToCoverage,map:ft,matcap:$e,envMap:vt,envMapMode:vt&&ee.mapping,envMapCubeUVHeight:$,aoMap:F,lightMap:Kt,bumpMap:He,normalMap:Ve,displacementMap:d&&Te,emissiveMap:lt,normalMapObjectSpace:Ve&&y.normalMapType===xf,normalMapTangentSpace:Ve&&y.normalMapType===ld,metalnessMap:Ee,roughnessMap:R,anisotropy:w,anisotropyMap:oe,clearcoat:B,clearcoatMap:fe,clearcoatNormalMap:Xe,clearcoatRoughnessMap:j,dispersion:Z,iridescence:K,iridescenceMap:pe,iridescenceThicknessMap:Ae,sheen:q,sheenColorMap:Re,sheenRoughnessMap:me,specularMap:Ge,specularColorMap:Ne,specularIntensityMap:rt,transmission:be,transmissionMap:L,thicknessMap:se,gradientMap:W,opaque:y.transparent===!1&&y.blending===as&&y.alphaToCoverage===!1,alphaMap:J,alphaTest:he,alphaHash:le,combine:y.combine,mapUv:ft&&M(y.map.channel),aoMapUv:F&&M(y.aoMap.channel),lightMapUv:Kt&&M(y.lightMap.channel),bumpMapUv:He&&M(y.bumpMap.channel),normalMapUv:Ve&&M(y.normalMap.channel),displacementMapUv:Te&&M(y.displacementMap.channel),emissiveMapUv:lt&&M(y.emissiveMap.channel),metalnessMapUv:Ee&&M(y.metalnessMap.channel),roughnessMapUv:R&&M(y.roughnessMap.channel),anisotropyMapUv:oe&&M(y.anisotropyMap.channel),clearcoatMapUv:fe&&M(y.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&M(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&M(y.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&M(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&M(y.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&M(y.sheenColorMap.channel),sheenRoughnessMapUv:me&&M(y.sheenRoughnessMap.channel),specularMapUv:Ge&&M(y.specularMap.channel),specularColorMapUv:Ne&&M(y.specularColorMap.channel),specularIntensityMapUv:rt&&M(y.specularIntensityMap.channel),transmissionMapUv:L&&M(y.transmissionMap.channel),thicknessMapUv:se&&M(y.thicknessMap.channel),alphaMapUv:J&&M(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ve||w),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(ft||J),fog:!!V,useFog:y.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ce,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Be,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:gt,decodeVideoTexture:ft&&y.map.isVideoTexture===!0&&ze.getTransfer(y.map.colorSpace)===je,decodeVideoTextureEmissive:lt&&y.emissiveMap.isVideoTexture===!0&&ze.getTransfer(y.emissiveMap.colorSpace)===je,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===zt,flipSided:y.side===Lt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Le&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&y.extensions.multiDraw===!0||ke)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return At.vertexUv1s=c.has(1),At.vertexUv2s=c.has(2),At.vertexUv3s=c.has(3),c.clear(),At}function m(y){let b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(let P in y.defines)b.push(P),b.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(C(b,y),p(b,y),b.push(i.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function C(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function p(y,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),y.push(o.mask)}function x(y){let b=v[y.type],P;if(b){let D=vn[b];P=ii.clone(D.uniforms)}else P=y.uniforms;return P}function S(y,b){let P;for(let D=0,O=h.length;D<O;D++){let V=h[D];if(V.cacheKey===b){P=V,++P.usedTimes;break}}return P===void 0&&(P=new J0(i,b,y,r),h.push(P)),P}function _(y){if(--y.usedTimes===0){let b=h.indexOf(y);h[b]=h[h.length-1],h.pop(),y.destroy()}}function E(y){l.remove(y)}function T(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:x,acquireProgram:S,releaseProgram:_,releaseShaderCache:E,programs:h,dispose:T}}function Q0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function ex(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Fu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ou(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,f,v,M,g){let m=i[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:v,renderOrder:u.renderOrder,z:M,group:g},i[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=v,m.renderOrder=u.renderOrder,m.z=M,m.group=g),e++,m}function o(u,d,f,v,M,g){let m=a(u,d,f,v,M,g);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(u,d,f,v,M,g){let m=a(u,d,f,v,M,g);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function c(u,d){t.length>1&&t.sort(u||ex),n.length>1&&n.sort(d||Fu),s.length>1&&s.sort(d||Fu)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function tx(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Ou,i.set(n,[a])):s>=r.length?(a=new Ou,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function nx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new ge};break;case"SpotLight":t={position:new I,direction:new I,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function ix(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var sx=0;function rx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ax(i){let e=new nx,t=ix(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new tt,a=new tt;function o(c){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,v=0,M=0,g=0,m=0,C=0,p=0,x=0,S=0,_=0,E=0;c.sort(rx);for(let y=0,b=c.length;y<b;y++){let P=c[y],D=P.color,O=P.intensity,V=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=D.r*O,u+=D.g*O,d+=D.b*O;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],O);E++}else if(P.isDirectionalLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ee=P.shadow,$=t.get(P);$.shadowIntensity=ee.intensity,$.shadowBias=ee.bias,$.shadowNormalBias=ee.normalBias,$.shadowRadius=ee.radius,$.shadowMapSize=ee.mapSize,n.directionalShadow[f]=$,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=P.shadow.matrix,C++}n.directional[f]=G,f++}else if(P.isSpotLight){let G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(D).multiplyScalar(O),G.distance=V,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[M]=G;let ee=P.shadow;if(P.map&&(n.spotLightMap[S]=P.map,S++,ee.updateMatrices(P),P.castShadow&&_++),n.spotLightMatrix[M]=ee.matrix,P.castShadow){let $=t.get(P);$.shadowIntensity=ee.intensity,$.shadowBias=ee.bias,$.shadowNormalBias=ee.normalBias,$.shadowRadius=ee.radius,$.shadowMapSize=ee.mapSize,n.spotShadow[M]=$,n.spotShadowMap[M]=X,x++}M++}else if(P.isRectAreaLight){let G=e.get(P);G.color.copy(D).multiplyScalar(O),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=G,g++}else if(P.isPointLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){let ee=P.shadow,$=t.get(P);$.shadowIntensity=ee.intensity,$.shadowBias=ee.bias,$.shadowNormalBias=ee.normalBias,$.shadowRadius=ee.radius,$.shadowMapSize=ee.mapSize,$.shadowCameraNear=ee.camera.near,$.shadowCameraFar=ee.camera.far,n.pointShadow[v]=$,n.pointShadowMap[v]=X,n.pointShadowMatrix[v]=P.shadow.matrix,p++}n.point[v]=G,v++}else if(P.isHemisphereLight){let G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(O),G.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[m]=G,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ie.LTC_FLOAT_1,n.rectAreaLTC2=ie.LTC_FLOAT_2):(n.rectAreaLTC1=ie.LTC_HALF_1,n.rectAreaLTC2=ie.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let T=n.hash;(T.directionalLength!==f||T.pointLength!==v||T.spotLength!==M||T.rectAreaLength!==g||T.hemiLength!==m||T.numDirectionalShadows!==C||T.numPointShadows!==p||T.numSpotShadows!==x||T.numSpotMaps!==S||T.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=M,n.rectArea.length=g,n.point.length=v,n.hemi.length=m,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=p,n.pointShadowMap.length=p,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=p,n.spotLightMatrix.length=x+S-_,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=_,n.numLightProbes=E,T.directionalLength=f,T.pointLength=v,T.spotLength=M,T.rectAreaLength=g,T.hemiLength=m,T.numDirectionalShadows=C,T.numPointShadows=p,T.numSpotShadows=x,T.numSpotMaps=S,T.numLightProbes=E,n.version=sx++)}function l(c,h){let u=0,d=0,f=0,v=0,M=0,g=h.matrixWorldInverse;for(let m=0,C=c.length;m<C;m++){let p=c[m];if(p.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(p.matrixWorld),s.setFromMatrixPosition(p.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),u++}else if(p.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(p.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(p.matrixWorld),s.setFromMatrixPosition(p.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),f++}else if(p.isRectAreaLight){let x=n.rectArea[v];x.position.setFromMatrixPosition(p.matrixWorld),x.position.applyMatrix4(g),a.identity(),r.copy(p.matrixWorld),r.premultiply(g),a.extractRotation(r),x.halfWidth.set(p.width*.5,0,0),x.halfHeight.set(0,p.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),v++}else if(p.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(p.matrixWorld),x.position.applyMatrix4(g),d++}else if(p.isHemisphereLight){let x=n.hemi[M];x.direction.setFromMatrixPosition(p.matrixWorld),x.direction.transformDirection(g),M++}}}return{setup:o,setupView:l,state:n}}function Bu(i){let e=new ax(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function ox(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Bu(i),e.set(s,[o])):r>=a.length?(o=new Bu(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var vc=class extends ti{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=mf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},_c=class extends ti{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},lx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hx(i,e,t){let n=new Qs,s=new ne,r=new ne,a=new nt,o=new vc({depthPacking:gf}),l=new _c,c={},h=t.maxTextureSize,u={[jn]:Lt,[Lt]:jn,[zt]:zt},d=new pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:lx,fragmentShader:cx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let v=new yt;v.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new we(v,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ju;let m=this.type;this.render=function(_,E,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||_.length===0)return;let y=i.getRenderTarget(),b=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),D=i.state;D.setBlending(bn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let O=m!==In&&this.type===In,V=m===In&&this.type!==In;for(let X=0,G=_.length;X<G;X++){let ee=_[X],$=ee.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let re=$.getFrameExtents();if(s.multiply(re),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/re.x),s.x=r.x*re.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/re.y),s.y=r.y*re.y,$.mapSize.y=r.y)),$.map===null||O===!0||V===!0){let Se=this.type!==In?{minFilter:qt,magFilter:qt}:{};$.map!==null&&$.map.dispose(),$.map=new Nt(s.x,s.y,Se),$.map.texture.name=ee.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();let de=$.getViewportCount();for(let Se=0;Se<de;Se++){let Be=$.getViewport(Se);a.set(r.x*Be.x,r.y*Be.y,r.x*Be.z,r.y*Be.w),D.viewport(a),$.updateMatrices(ee,Se),n=$.getFrustum(),x(E,T,$.camera,ee,this.type)}$.isPointLightShadow!==!0&&this.type===In&&C($,T),$.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(y,b,P)};function C(_,E){let T=e.update(M);d.defines.VSM_SAMPLES!==_.blurSamples&&(d.defines.VSM_SAMPLES=_.blurSamples,f.defines.VSM_SAMPLES=_.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),_.mapPass===null&&(_.mapPass=new Nt(s.x,s.y)),d.uniforms.shadow_pass.value=_.map.texture,d.uniforms.resolution.value=_.mapSize,d.uniforms.radius.value=_.radius,i.setRenderTarget(_.mapPass),i.clear(),i.renderBufferDirect(E,null,T,d,M,null),f.uniforms.shadow_pass.value=_.mapPass.texture,f.uniforms.resolution.value=_.mapSize,f.uniforms.radius.value=_.radius,i.setRenderTarget(_.map),i.clear(),i.renderBufferDirect(E,null,T,f,M,null)}function p(_,E,T,y){let b=null,P=T.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(P!==void 0)b=P;else if(b=T.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let D=b.uuid,O=E.uuid,V=c[D];V===void 0&&(V={},c[D]=V);let X=V[O];X===void 0&&(X=b.clone(),V[O]=X,E.addEventListener("dispose",S)),b=X}if(b.visible=E.visible,b.wireframe=E.wireframe,y===In?b.side=E.shadowSide!==null?E.shadowSide:E.side:b.side=E.shadowSide!==null?E.shadowSide:u[E.side],b.alphaMap=E.alphaMap,b.alphaTest=E.alphaTest,b.map=E.map,b.clipShadows=E.clipShadows,b.clippingPlanes=E.clippingPlanes,b.clipIntersection=E.clipIntersection,b.displacementMap=E.displacementMap,b.displacementScale=E.displacementScale,b.displacementBias=E.displacementBias,b.wireframeLinewidth=E.wireframeLinewidth,b.linewidth=E.linewidth,T.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let D=i.properties.get(b);D.light=T}return b}function x(_,E,T,y,b){if(_.visible===!1)return;if(_.layers.test(E.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&b===In)&&(!_.frustumCulled||n.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,_.matrixWorld);let O=e.update(_),V=_.material;if(Array.isArray(V)){let X=O.groups;for(let G=0,ee=X.length;G<ee;G++){let $=X[G],re=V[$.materialIndex];if(re&&re.visible){let de=p(_,re,y,b);_.onBeforeShadow(i,_,E,T,O,de,$),i.renderBufferDirect(T,null,O,de,_,$),_.onAfterShadow(i,_,E,T,O,de,$)}}}else if(V.visible){let X=p(_,V,y,b);_.onBeforeShadow(i,_,E,T,O,X,null),i.renderBufferDirect(T,null,O,X,_,null),_.onAfterShadow(i,_,E,T,O,X,null)}}let D=_.children;for(let O=0,V=D.length;O<V;O++)x(D[O],E,T,y,b)}function S(_){_.target.removeEventListener("dispose",S);for(let T in c){let y=c[T],b=_.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}var ux={[Ml]:Sl,[wl]:Al,[El]:Cl,[hs]:Tl,[Sl]:Ml,[Al]:wl,[Cl]:El,[Tl]:hs};function dx(i,e){function t(){let L=!1,se=new nt,W=null,J=new nt(0,0,0,0);return{setMask:function(he){W!==he&&!L&&(i.colorMask(he,he,he,he),W=he)},setLocked:function(he){L=he},setClear:function(he,le,Le,gt,At){At===!0&&(he*=gt,le*=gt,Le*=gt),se.set(he,le,Le,gt),J.equals(se)===!1&&(i.clearColor(he,le,Le,gt),J.copy(se))},reset:function(){L=!1,W=null,J.set(-1,0,0,0)}}}function n(){let L=!1,se=!1,W=null,J=null,he=null;return{setReversed:function(le){if(se!==le){let Le=e.get("EXT_clip_control");se?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT);let gt=he;he=null,this.setClear(gt)}se=le},getReversed:function(){return se},setTest:function(le){le?ae(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(le){W!==le&&!L&&(i.depthMask(le),W=le)},setFunc:function(le){if(se&&(le=ux[le]),J!==le){switch(le){case Ml:i.depthFunc(i.NEVER);break;case Sl:i.depthFunc(i.ALWAYS);break;case wl:i.depthFunc(i.LESS);break;case hs:i.depthFunc(i.LEQUAL);break;case El:i.depthFunc(i.EQUAL);break;case Tl:i.depthFunc(i.GEQUAL);break;case Al:i.depthFunc(i.GREATER);break;case Cl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=le}},setLocked:function(le){L=le},setClear:function(le){he!==le&&(se&&(le=1-le),i.clearDepth(le),he=le)},reset:function(){L=!1,W=null,J=null,he=null,se=!1}}}function s(){let L=!1,se=null,W=null,J=null,he=null,le=null,Le=null,gt=null,At=null;return{setTest:function(et){L||(et?ae(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(et){se!==et&&!L&&(i.stencilMask(et),se=et)},setFunc:function(et,rn,Sn){(W!==et||J!==rn||he!==Sn)&&(i.stencilFunc(et,rn,Sn),W=et,J=rn,he=Sn)},setOp:function(et,rn,Sn){(le!==et||Le!==rn||gt!==Sn)&&(i.stencilOp(et,rn,Sn),le=et,Le=rn,gt=Sn)},setLocked:function(et){L=et},setClear:function(et){At!==et&&(i.clearStencil(et),At=et)},reset:function(){L=!1,se=null,W=null,J=null,he=null,le=null,Le=null,gt=null,At=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],v=null,M=!1,g=null,m=null,C=null,p=null,x=null,S=null,_=null,E=new ge(0,0,0),T=0,y=!1,b=null,P=null,D=null,O=null,V=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,ee=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec($)[1]),G=ee>=1):$.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),G=ee>=2);let re=null,de={},Se=i.getParameter(i.SCISSOR_BOX),Be=i.getParameter(i.VIEWPORT),it=new nt().fromArray(Se),Y=new nt().fromArray(Be);function te(L,se,W,J){let he=new Uint8Array(4),le=i.createTexture();i.bindTexture(L,le),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Le=0;Le<W;Le++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,he):i.texImage2D(se+Le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,he);return le}let ye={};ye[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),ye[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ye[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(i.DEPTH_TEST),a.setFunc(hs),He(!1),Ve(Hh),ae(i.CULL_FACE),F(bn);function ae(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function Ce(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Ie(L,se){return u[L]!==se?(i.bindFramebuffer(L,se),u[L]=se,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=se),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=se),!0):!1}function ke(L,se){let W=f,J=!1;if(L){W=d.get(se),W===void 0&&(W=[],d.set(se,W));let he=L.textures;if(W.length!==he.length||W[0]!==i.COLOR_ATTACHMENT0){for(let le=0,Le=he.length;le<Le;le++)W[le]=i.COLOR_ATTACHMENT0+le;W.length=he.length,J=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,J=!0);J&&i.drawBuffers(W)}function ft(L){return v!==L?(i.useProgram(L),v=L,!0):!1}let $e={[_i]:i.FUNC_ADD,[qd]:i.FUNC_SUBTRACT,[Yd]:i.FUNC_REVERSE_SUBTRACT};$e[Zd]=i.MIN,$e[Jd]=i.MAX;let vt={[Kd]:i.ZERO,[jd]:i.ONE,[Qd]:i.SRC_COLOR,[yl]:i.SRC_ALPHA,[af]:i.SRC_ALPHA_SATURATE,[sf]:i.DST_COLOR,[tf]:i.DST_ALPHA,[ef]:i.ONE_MINUS_SRC_COLOR,[bl]:i.ONE_MINUS_SRC_ALPHA,[rf]:i.ONE_MINUS_DST_COLOR,[nf]:i.ONE_MINUS_DST_ALPHA,[of]:i.CONSTANT_COLOR,[lf]:i.ONE_MINUS_CONSTANT_COLOR,[cf]:i.CONSTANT_ALPHA,[hf]:i.ONE_MINUS_CONSTANT_ALPHA};function F(L,se,W,J,he,le,Le,gt,At,et){if(L===bn){M===!0&&(Ce(i.BLEND),M=!1);return}if(M===!1&&(ae(i.BLEND),M=!0),L!==Xd){if(L!==g||et!==y){if((m!==_i||x!==_i)&&(i.blendEquation(i.FUNC_ADD),m=_i,x=_i),et)switch(L){case as:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case tn:i.blendFunc(i.ONE,i.ONE);break;case Vh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case as:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case tn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Vh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}C=null,p=null,S=null,_=null,E.set(0,0,0),T=0,g=L,y=et}return}he=he||se,le=le||W,Le=Le||J,(se!==m||he!==x)&&(i.blendEquationSeparate($e[se],$e[he]),m=se,x=he),(W!==C||J!==p||le!==S||Le!==_)&&(i.blendFuncSeparate(vt[W],vt[J],vt[le],vt[Le]),C=W,p=J,S=le,_=Le),(gt.equals(E)===!1||At!==T)&&(i.blendColor(gt.r,gt.g,gt.b,At),E.copy(gt),T=At),g=L,y=!1}function Kt(L,se){L.side===zt?Ce(i.CULL_FACE):ae(i.CULL_FACE);let W=L.side===Lt;se&&(W=!W),He(W),L.blending===as&&L.transparent===!1?F(bn):F(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let J=L.stencilWrite;o.setTest(J),J&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),lt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function He(L){b!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),b=L)}function Ve(L){L!==Gd?(ae(i.CULL_FACE),L!==P&&(L===Hh?i.cullFace(i.BACK):L===Wd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),P=L}function Te(L){L!==D&&(G&&i.lineWidth(L),D=L)}function lt(L,se,W){L?(ae(i.POLYGON_OFFSET_FILL),(O!==se||V!==W)&&(i.polygonOffset(se,W),O=se,V=W)):Ce(i.POLYGON_OFFSET_FILL)}function Ee(L){L?ae(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function R(L){L===void 0&&(L=i.TEXTURE0+X-1),re!==L&&(i.activeTexture(L),re=L)}function w(L,se,W){W===void 0&&(re===null?W=i.TEXTURE0+X-1:W=re);let J=de[W];J===void 0&&(J={type:void 0,texture:void 0},de[W]=J),(J.type!==L||J.texture!==se)&&(re!==W&&(i.activeTexture(W),re=W),i.bindTexture(L,se||ye[L]),J.type=L,J.texture=se)}function B(){let L=de[re];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Xe(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Re(L){it.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),it.copy(L))}function me(L){Y.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Y.copy(L))}function Ge(L,se){let W=c.get(se);W===void 0&&(W=new WeakMap,c.set(se,W));let J=W.get(L);J===void 0&&(J=i.getUniformBlockIndex(se,L.name),W.set(L,J))}function Ne(L,se){let J=c.get(se).get(L);l.get(se)!==J&&(i.uniformBlockBinding(se,J,L.__bindingPointIndex),l.set(se,J))}function rt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},re=null,de={},u={},d=new WeakMap,f=[],v=null,M=!1,g=null,m=null,C=null,p=null,x=null,S=null,_=null,E=new ge(0,0,0),T=0,y=!1,b=null,P=null,D=null,O=null,V=null,it.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ae,disable:Ce,bindFramebuffer:Ie,drawBuffers:ke,useProgram:ft,setBlending:F,setMaterial:Kt,setFlipSided:He,setCullFace:Ve,setLineWidth:Te,setPolygonOffset:lt,setScissorTest:Ee,activeTexture:R,bindTexture:w,unbindTexture:B,compressedTexImage2D:Z,compressedTexImage3D:K,texImage2D:pe,texImage3D:Ae,updateUBOMapping:Ge,uniformBlockBinding:Ne,texStorage2D:Xe,texStorage3D:j,texSubImage2D:q,texSubImage3D:be,compressedTexSubImage2D:oe,compressedTexSubImage3D:fe,scissor:Re,viewport:me,reset:rt}}function ku(i,e,t,n){let s=fx(n);switch(t){case nd:return i*e;case sd:return i*e;case rd:return i*e*2;case eh:return i*e/s.components*s.byteLength;case th:return i*e/s.components*s.byteLength;case ad:return i*e*2/s.components*s.byteLength;case nh:return i*e*2/s.components*s.byteLength;case id:return i*e*3/s.components*s.byteLength;case un:return i*e*4/s.components*s.byteLength;case ih:return i*e*4/s.components*s.byteLength;case la:case ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ha:case ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ul:case Fl:return Math.max(i,16)*Math.max(e,8)/4;case Dl:case Nl:return Math.max(i,8)*Math.max(e,8)/2;case Ol:case Bl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case kl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Vl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case $l:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ql:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Yl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Jl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Kl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case jl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ql:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case da:case ec:case tc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case od:case nc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ic:case sc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fx(i){switch(i){case Nn:case Qu:return{byteLength:1,components:1};case js:case ed:case mn:return{byteLength:2,components:1};case jc:case Qc:return{byteLength:2,components:4};case wi:case Kc:case yn:return{byteLength:4,components:1};case td:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function px(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ne,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,w){return f?new OffscreenCanvas(R,w):ma("canvas")}function M(R,w,B){let Z=1,K=Ee(R);if((K.width>B||K.height>B)&&(Z=B/Math.max(K.width,K.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let q=Math.floor(Z*K.width),be=Math.floor(Z*K.height);u===void 0&&(u=v(q,be));let oe=w?v(q,be):u;return oe.width=q,oe.height=be,oe.getContext("2d").drawImage(R,0,0,q,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+q+"x"+be+")."),oe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function g(R){return R.generateMipmaps}function m(R){i.generateMipmap(R)}function C(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function p(R,w,B,Z,K=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let q=w;if(w===i.RED&&(B===i.FLOAT&&(q=i.R32F),B===i.HALF_FLOAT&&(q=i.R16F),B===i.UNSIGNED_BYTE&&(q=i.R8)),w===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.R8UI),B===i.UNSIGNED_SHORT&&(q=i.R16UI),B===i.UNSIGNED_INT&&(q=i.R32UI),B===i.BYTE&&(q=i.R8I),B===i.SHORT&&(q=i.R16I),B===i.INT&&(q=i.R32I)),w===i.RG&&(B===i.FLOAT&&(q=i.RG32F),B===i.HALF_FLOAT&&(q=i.RG16F),B===i.UNSIGNED_BYTE&&(q=i.RG8)),w===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RG8UI),B===i.UNSIGNED_SHORT&&(q=i.RG16UI),B===i.UNSIGNED_INT&&(q=i.RG32UI),B===i.BYTE&&(q=i.RG8I),B===i.SHORT&&(q=i.RG16I),B===i.INT&&(q=i.RG32I)),w===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RGB8UI),B===i.UNSIGNED_SHORT&&(q=i.RGB16UI),B===i.UNSIGNED_INT&&(q=i.RGB32UI),B===i.BYTE&&(q=i.RGB8I),B===i.SHORT&&(q=i.RGB16I),B===i.INT&&(q=i.RGB32I)),w===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),B===i.UNSIGNED_INT&&(q=i.RGBA32UI),B===i.BYTE&&(q=i.RGBA8I),B===i.SHORT&&(q=i.RGBA16I),B===i.INT&&(q=i.RGBA32I)),w===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),w===i.RGBA){let be=K?Va:ze.getTransfer(Z);B===i.FLOAT&&(q=i.RGBA32F),B===i.HALF_FLOAT&&(q=i.RGBA16F),B===i.UNSIGNED_BYTE&&(q=be===je?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function x(R,w){let B;return R?w===null||w===wi||w===fs?B=i.DEPTH24_STENCIL8:w===yn?B=i.DEPTH32F_STENCIL8:w===js&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===wi||w===fs?B=i.DEPTH_COMPONENT24:w===yn?B=i.DEPTH_COMPONENT32F:w===js&&(B=i.DEPTH_COMPONENT16),B}function S(R,w){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==qt&&R.minFilter!==_n?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function _(R){let w=R.target;w.removeEventListener("dispose",_),T(w),w.isVideoTexture&&h.delete(w)}function E(R){let w=R.target;w.removeEventListener("dispose",E),b(w)}function T(R){let w=n.get(R);if(w.__webglInit===void 0)return;let B=R.source,Z=d.get(B);if(Z){let K=Z[w.__cacheKey];K.usedTimes--,K.usedTimes===0&&y(R),Object.keys(Z).length===0&&d.delete(B)}n.remove(R)}function y(R){let w=n.get(R);i.deleteTexture(w.__webglTexture);let B=R.source,Z=d.get(B);delete Z[w.__cacheKey],a.memory.textures--}function b(R){let w=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(w.__webglFramebuffer[Z]))for(let K=0;K<w.__webglFramebuffer[Z].length;K++)i.deleteFramebuffer(w.__webglFramebuffer[Z][K]);else i.deleteFramebuffer(w.__webglFramebuffer[Z]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[Z])}else{if(Array.isArray(w.__webglFramebuffer))for(let Z=0;Z<w.__webglFramebuffer.length;Z++)i.deleteFramebuffer(w.__webglFramebuffer[Z]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Z=0;Z<w.__webglColorRenderbuffer.length;Z++)w.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[Z]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let B=R.textures;for(let Z=0,K=B.length;Z<K;Z++){let q=n.get(B[Z]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(B[Z])}n.remove(R)}let P=0;function D(){P=0}function O(){let R=P;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),P+=1,R}function V(R){let w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function X(R,w){let B=n.get(R);if(R.isVideoTexture&&Te(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){let Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(B,R,w);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+w)}function G(R,w){let B=n.get(R);if(R.version>0&&B.__version!==R.version){Y(B,R,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+w)}function ee(R,w){let B=n.get(R);if(R.version>0&&B.__version!==R.version){Y(B,R,w);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+w)}function $(R,w){let B=n.get(R);if(R.version>0&&B.__version!==R.version){te(B,R,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+w)}let re={[Il]:i.REPEAT,[Mi]:i.CLAMP_TO_EDGE,[Ll]:i.MIRRORED_REPEAT},de={[qt]:i.NEAREST,[pf]:i.NEAREST_MIPMAP_NEAREST,[Fr]:i.NEAREST_MIPMAP_LINEAR,[_n]:i.LINEAR,[ko]:i.LINEAR_MIPMAP_NEAREST,[Si]:i.LINEAR_MIPMAP_LINEAR},Se={[vf]:i.NEVER,[wf]:i.ALWAYS,[_f]:i.LESS,[cd]:i.LEQUAL,[yf]:i.EQUAL,[Sf]:i.GEQUAL,[bf]:i.GREATER,[Mf]:i.NOTEQUAL};function Be(R,w){if(w.type===yn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===_n||w.magFilter===ko||w.magFilter===Fr||w.magFilter===Si||w.minFilter===_n||w.minFilter===ko||w.minFilter===Fr||w.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,re[w.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,re[w.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,re[w.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,de[w.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,de[w.minFilter]),w.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Se[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===qt||w.minFilter!==Fr&&w.minFilter!==Si||w.type===yn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function it(R,w){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",_));let Z=w.source,K=d.get(Z);K===void 0&&(K={},d.set(Z,K));let q=V(w);if(q!==R.__cacheKey){K[q]===void 0&&(K[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),K[q].usedTimes++;let be=K[R.__cacheKey];be!==void 0&&(K[R.__cacheKey].usedTimes--,be.usedTimes===0&&y(w)),R.__cacheKey=q,R.__webglTexture=K[q].texture}return B}function Y(R,w,B){let Z=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Z=i.TEXTURE_3D);let K=it(R,w),q=w.source;t.bindTexture(Z,R.__webglTexture,i.TEXTURE0+B);let be=n.get(q);if(q.version!==be.__version||K===!0){t.activeTexture(i.TEXTURE0+B);let oe=ze.getPrimaries(ze.workingColorSpace),fe=w.colorSpace===Jn?null:ze.getPrimaries(w.colorSpace),Xe=w.colorSpace===Jn||oe===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let j=M(w.image,!1,s.maxTextureSize);j=lt(w,j);let pe=r.convert(w.format,w.colorSpace),Ae=r.convert(w.type),Re=p(w.internalFormat,pe,Ae,w.colorSpace,w.isVideoTexture);Be(Z,w);let me,Ge=w.mipmaps,Ne=w.isVideoTexture!==!0,rt=be.__version===void 0||K===!0,L=q.dataReady,se=S(w,j);if(w.isDepthTexture)Re=x(w.format===ps,w.type),rt&&(Ne?t.texStorage2D(i.TEXTURE_2D,1,Re,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,Re,j.width,j.height,0,pe,Ae,null));else if(w.isDataTexture)if(Ge.length>0){Ne&&rt&&t.texStorage2D(i.TEXTURE_2D,se,Re,Ge[0].width,Ge[0].height);for(let W=0,J=Ge.length;W<J;W++)me=Ge[W],Ne?L&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,me.width,me.height,pe,Ae,me.data):t.texImage2D(i.TEXTURE_2D,W,Re,me.width,me.height,0,pe,Ae,me.data);w.generateMipmaps=!1}else Ne?(rt&&t.texStorage2D(i.TEXTURE_2D,se,Re,j.width,j.height),L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,j.width,j.height,pe,Ae,j.data)):t.texImage2D(i.TEXTURE_2D,0,Re,j.width,j.height,0,pe,Ae,j.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ne&&rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,Re,Ge[0].width,Ge[0].height,j.depth);for(let W=0,J=Ge.length;W<J;W++)if(me=Ge[W],w.format!==un)if(pe!==null)if(Ne){if(L)if(w.layerUpdates.size>0){let he=ku(me.width,me.height,w.format,w.type);for(let le of w.layerUpdates){let Le=me.data.subarray(le*he/me.data.BYTES_PER_ELEMENT,(le+1)*he/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,le,me.width,me.height,1,pe,Le)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,me.width,me.height,j.depth,pe,me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Re,me.width,me.height,j.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,me.width,me.height,j.depth,pe,Ae,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,W,Re,me.width,me.height,j.depth,0,pe,Ae,me.data)}else{Ne&&rt&&t.texStorage2D(i.TEXTURE_2D,se,Re,Ge[0].width,Ge[0].height);for(let W=0,J=Ge.length;W<J;W++)me=Ge[W],w.format!==un?pe!==null?Ne?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(i.TEXTURE_2D,W,Re,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?L&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,me.width,me.height,pe,Ae,me.data):t.texImage2D(i.TEXTURE_2D,W,Re,me.width,me.height,0,pe,Ae,me.data)}else if(w.isDataArrayTexture)if(Ne){if(rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,Re,j.width,j.height,j.depth),L)if(w.layerUpdates.size>0){let W=ku(j.width,j.height,w.format,w.type);for(let J of w.layerUpdates){let he=j.data.subarray(J*W/j.data.BYTES_PER_ELEMENT,(J+1)*W/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,j.width,j.height,1,pe,Ae,he)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,pe,Ae,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Re,j.width,j.height,j.depth,0,pe,Ae,j.data);else if(w.isData3DTexture)Ne?(rt&&t.texStorage3D(i.TEXTURE_3D,se,Re,j.width,j.height,j.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,pe,Ae,j.data)):t.texImage3D(i.TEXTURE_3D,0,Re,j.width,j.height,j.depth,0,pe,Ae,j.data);else if(w.isFramebufferTexture){if(rt)if(Ne)t.texStorage2D(i.TEXTURE_2D,se,Re,j.width,j.height);else{let W=j.width,J=j.height;for(let he=0;he<se;he++)t.texImage2D(i.TEXTURE_2D,he,Re,W,J,0,pe,Ae,null),W>>=1,J>>=1}}else if(Ge.length>0){if(Ne&&rt){let W=Ee(Ge[0]);t.texStorage2D(i.TEXTURE_2D,se,Re,W.width,W.height)}for(let W=0,J=Ge.length;W<J;W++)me=Ge[W],Ne?L&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,pe,Ae,me):t.texImage2D(i.TEXTURE_2D,W,Re,pe,Ae,me);w.generateMipmaps=!1}else if(Ne){if(rt){let W=Ee(j);t.texStorage2D(i.TEXTURE_2D,se,Re,W.width,W.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,Ae,j)}else t.texImage2D(i.TEXTURE_2D,0,Re,pe,Ae,j);g(w)&&m(Z),be.__version=q.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function te(R,w,B){if(w.image.length!==6)return;let Z=it(R,w),K=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+B);let q=n.get(K);if(K.version!==q.__version||Z===!0){t.activeTexture(i.TEXTURE0+B);let be=ze.getPrimaries(ze.workingColorSpace),oe=w.colorSpace===Jn?null:ze.getPrimaries(w.colorSpace),fe=w.colorSpace===Jn||be===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let Xe=w.isCompressedTexture||w.image[0].isCompressedTexture,j=w.image[0]&&w.image[0].isDataTexture,pe=[];for(let J=0;J<6;J++)!Xe&&!j?pe[J]=M(w.image[J],!0,s.maxCubemapSize):pe[J]=j?w.image[J].image:w.image[J],pe[J]=lt(w,pe[J]);let Ae=pe[0],Re=r.convert(w.format,w.colorSpace),me=r.convert(w.type),Ge=p(w.internalFormat,Re,me,w.colorSpace),Ne=w.isVideoTexture!==!0,rt=q.__version===void 0||Z===!0,L=K.dataReady,se=S(w,Ae);Be(i.TEXTURE_CUBE_MAP,w);let W;if(Xe){Ne&&rt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,se,Ge,Ae.width,Ae.height);for(let J=0;J<6;J++){W=pe[J].mipmaps;for(let he=0;he<W.length;he++){let le=W[he];w.format!==un?Re!==null?Ne?L&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,0,0,le.width,le.height,Re,le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,Ge,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,0,0,le.width,le.height,Re,me,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,Ge,le.width,le.height,0,Re,me,le.data)}}}else{if(W=w.mipmaps,Ne&&rt){W.length>0&&se++;let J=Ee(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,se,Ge,J.width,J.height)}for(let J=0;J<6;J++)if(j){Ne?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,pe[J].width,pe[J].height,Re,me,pe[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ge,pe[J].width,pe[J].height,0,Re,me,pe[J].data);for(let he=0;he<W.length;he++){let Le=W[he].image[J].image;Ne?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,0,0,Le.width,Le.height,Re,me,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,Ge,Le.width,Le.height,0,Re,me,Le.data)}}else{Ne?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Re,me,pe[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ge,Re,me,pe[J]);for(let he=0;he<W.length;he++){let le=W[he];Ne?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,0,0,Re,me,le.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,Ge,Re,me,le.image[J])}}}g(w)&&m(i.TEXTURE_CUBE_MAP),q.__version=K.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function ye(R,w,B,Z,K,q){let be=r.convert(B.format,B.colorSpace),oe=r.convert(B.type),fe=p(B.internalFormat,be,oe,B.colorSpace),Xe=n.get(w),j=n.get(B);if(j.__renderTarget=w,!Xe.__hasExternalTextures){let pe=Math.max(1,w.width>>q),Ae=Math.max(1,w.height>>q);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,q,fe,pe,Ae,w.depth,0,be,oe,null):t.texImage2D(K,q,fe,pe,Ae,0,be,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Ve(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,K,j.__webglTexture,0,He(w)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,K,j.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(R,w,B){if(i.bindRenderbuffer(i.RENDERBUFFER,R),w.depthBuffer){let Z=w.depthTexture,K=Z&&Z.isDepthTexture?Z.type:null,q=x(w.stencilBuffer,K),be=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=He(w);Ve(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,q,w.width,w.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,q,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,q,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,R)}else{let Z=w.textures;for(let K=0;K<Z.length;K++){let q=Z[K],be=r.convert(q.format,q.colorSpace),oe=r.convert(q.type),fe=p(q.internalFormat,be,oe,q.colorSpace),Xe=He(w);B&&Ve(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,fe,w.width,w.height):Ve(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xe,fe,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,fe,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ce(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(w.depthTexture);Z.__renderTarget=w,(!Z.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),X(w.depthTexture,0);let K=Z.__webglTexture,q=He(w);if(w.depthTexture.format===os)Ve(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(w.depthTexture.format===ps)Ve(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ie(R){let w=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){let Z=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Z){let K=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Z.removeEventListener("dispose",K)};Z.addEventListener("dispose",K),w.__depthDisposeCallback=K}w.__boundDepthTexture=Z}if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ce(w.__webglFramebuffer,R)}else if(B){w.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[Z]),w.__webglDepthbuffer[Z]===void 0)w.__webglDepthbuffer[Z]=i.createRenderbuffer(),ae(w.__webglDepthbuffer[Z],R,!1);else{let K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=w.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,q)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),ae(w.__webglDepthbuffer,R,!1);else{let Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,K)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(R,w,B){let Z=n.get(R);w!==void 0&&ye(Z.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Ie(R)}function ft(R){let w=R.texture,B=n.get(R),Z=n.get(w);R.addEventListener("dispose",E);let K=R.textures,q=R.isWebGLCubeRenderTarget===!0,be=K.length>1;if(be||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=w.version,a.memory.textures++),q){B.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(w.mipmaps&&w.mipmaps.length>0){B.__webglFramebuffer[oe]=[];for(let fe=0;fe<w.mipmaps.length;fe++)B.__webglFramebuffer[oe][fe]=i.createFramebuffer()}else B.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){B.__webglFramebuffer=[];for(let oe=0;oe<w.mipmaps.length;oe++)B.__webglFramebuffer[oe]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(be)for(let oe=0,fe=K.length;oe<fe;oe++){let Xe=n.get(K[oe]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Ve(R)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let oe=0;oe<K.length;oe++){let fe=K[oe];B.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[oe]);let Xe=r.convert(fe.format,fe.colorSpace),j=r.convert(fe.type),pe=p(fe.internalFormat,Xe,j,fe.colorSpace,R.isXRRenderTarget===!0),Ae=He(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,pe,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,B.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),ae(B.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Be(i.TEXTURE_CUBE_MAP,w);for(let oe=0;oe<6;oe++)if(w.mipmaps&&w.mipmaps.length>0)for(let fe=0;fe<w.mipmaps.length;fe++)ye(B.__webglFramebuffer[oe][fe],R,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe);else ye(B.__webglFramebuffer[oe],R,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);g(w)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let oe=0,fe=K.length;oe<fe;oe++){let Xe=K[oe],j=n.get(Xe);t.bindTexture(i.TEXTURE_2D,j.__webglTexture),Be(i.TEXTURE_2D,Xe),ye(B.__webglFramebuffer,R,Xe,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,0),g(Xe)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(oe=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,Z.__webglTexture),Be(oe,w),w.mipmaps&&w.mipmaps.length>0)for(let fe=0;fe<w.mipmaps.length;fe++)ye(B.__webglFramebuffer[fe],R,w,i.COLOR_ATTACHMENT0,oe,fe);else ye(B.__webglFramebuffer,R,w,i.COLOR_ATTACHMENT0,oe,0);g(w)&&m(oe),t.unbindTexture()}R.depthBuffer&&Ie(R)}function $e(R){let w=R.textures;for(let B=0,Z=w.length;B<Z;B++){let K=w[B];if(g(K)){let q=C(R),be=n.get(K).__webglTexture;t.bindTexture(q,be),m(q),t.unbindTexture()}}}let vt=[],F=[];function Kt(R){if(R.samples>0){if(Ve(R)===!1){let w=R.textures,B=R.width,Z=R.height,K=i.COLOR_BUFFER_BIT,q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=n.get(R),oe=w.length>1;if(oe)for(let fe=0;fe<w.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let fe=0;fe<w.length;fe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,be.__webglColorRenderbuffer[fe]);let Xe=n.get(w[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xe,0)}i.blitFramebuffer(0,0,B,Z,0,0,B,Z,K,i.NEAREST),l===!0&&(vt.length=0,F.length=0,vt.push(i.COLOR_ATTACHMENT0+fe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(vt.push(q),F.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,vt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let fe=0;fe<w.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,be.__webglColorRenderbuffer[fe]);let Xe=n.get(w[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,Xe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let w=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function He(R){return Math.min(s.maxSamples,R.samples)}function Ve(R){let w=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Te(R){let w=a.render.frame;h.get(R)!==w&&(h.set(R,w),R.update())}function lt(R,w){let B=R.colorSpace,Z=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==Ms&&B!==Jn&&(ze.getTransfer(B)===je?(Z!==un||K!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),w}function Ee(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=D,this.setTexture2D=X,this.setTexture2DArray=G,this.setTexture3D=ee,this.setTextureCube=$,this.rebindTextures=ke,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Ve}function mx(i,e){function t(n,s=Jn){let r,a=ze.getTransfer(s);if(n===Nn)return i.UNSIGNED_BYTE;if(n===jc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===td)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Qu)return i.BYTE;if(n===ed)return i.SHORT;if(n===js)return i.UNSIGNED_SHORT;if(n===Kc)return i.INT;if(n===wi)return i.UNSIGNED_INT;if(n===yn)return i.FLOAT;if(n===mn)return i.HALF_FLOAT;if(n===nd)return i.ALPHA;if(n===id)return i.RGB;if(n===un)return i.RGBA;if(n===sd)return i.LUMINANCE;if(n===rd)return i.LUMINANCE_ALPHA;if(n===os)return i.DEPTH_COMPONENT;if(n===ps)return i.DEPTH_STENCIL;if(n===eh)return i.RED;if(n===th)return i.RED_INTEGER;if(n===ad)return i.RG;if(n===nh)return i.RG_INTEGER;if(n===ih)return i.RGBA_INTEGER;if(n===la||n===ca||n===ha||n===ua)if(a===je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===la)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===la)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ua)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Dl||n===Ul||n===Nl||n===Fl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Dl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ul)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Nl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ol||n===Bl||n===kl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ol||n===Bl)return a===je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===kl)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===zl||n===Hl||n===Vl||n===Gl||n===Wl||n===$l||n===Xl||n===ql||n===Yl||n===Zl||n===Jl||n===Kl||n===jl||n===Ql)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===zl)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hl)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vl)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gl)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wl)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$l)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xl)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ql)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yl)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zl)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Jl)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Kl)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jl)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ql)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===da||n===ec||n===tc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===da)return a===je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ec)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===od||n===nc||n===ic||n===sc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===da)return r.COMPRESSED_RED_RGTC1_EXT;if(n===nc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ic)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var yc=class extends It{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ht=class extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},gx={type:"move"},Zs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let M of e.hand.values()){let g=t.getJointPose(M,n),m=this._getHandJoint(c,M);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,v=.005;c.inputState.pinching&&d>f+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ht;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},xx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,bc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Vt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new pt({vertexShader:xx,fragmentShader:vx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new we(new fn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mc=class extends Qn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,v=null,M=new bc,g=t.getContextAttributes(),m=null,C=null,p=[],x=[],S=new ne,_=null,E=new It;E.viewport=new nt;let T=new It;T.viewport=new nt;let y=[E,T],b=new yc,P=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let te=p[Y];return te===void 0&&(te=new Zs,p[Y]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Y){let te=p[Y];return te===void 0&&(te=new Zs,p[Y]=te),te.getGripSpace()},this.getHand=function(Y){let te=p[Y];return te===void 0&&(te=new Zs,p[Y]=te),te.getHandSpace()};function O(Y){let te=x.indexOf(Y.inputSource);if(te===-1)return;let ye=p[te];ye!==void 0&&(ye.update(Y.inputSource,Y.frame,c||a),ye.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",X);for(let Y=0;Y<p.length;Y++){let te=x[Y];te!==null&&(x[Y]=null,p[Y].disconnect(te))}P=null,D=null,M.reset(),e.setRenderTarget(m),f=null,d=null,u=null,s=null,C=null,it.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",V),s.addEventListener("inputsourceschange",X),g.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(S),s.renderState.layers===void 0){let te={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),C=new Nt(f.framebufferWidth,f.framebufferHeight,{format:un,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let te=null,ye=null,ae=null;g.depth&&(ae=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=g.stencil?ps:os,ye=g.stencil?fs:wi);let Ce={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Ce),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),C=new Nt(d.textureWidth,d.textureHeight,{format:un,type:Nn,depthTexture:new Ea(d.textureWidth,d.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),it.setContext(s),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function X(Y){for(let te=0;te<Y.removed.length;te++){let ye=Y.removed[te],ae=x.indexOf(ye);ae>=0&&(x[ae]=null,p[ae].disconnect(ye))}for(let te=0;te<Y.added.length;te++){let ye=Y.added[te],ae=x.indexOf(ye);if(ae===-1){for(let Ie=0;Ie<p.length;Ie++)if(Ie>=x.length){x.push(ye),ae=Ie;break}else if(x[Ie]===null){x[Ie]=ye,ae=Ie;break}if(ae===-1)break}let Ce=p[ae];Ce&&Ce.connect(ye)}}let G=new I,ee=new I;function $(Y,te,ye){G.setFromMatrixPosition(te.matrixWorld),ee.setFromMatrixPosition(ye.matrixWorld);let ae=G.distanceTo(ee),Ce=te.projectionMatrix.elements,Ie=ye.projectionMatrix.elements,ke=Ce[14]/(Ce[10]-1),ft=Ce[14]/(Ce[10]+1),$e=(Ce[9]+1)/Ce[5],vt=(Ce[9]-1)/Ce[5],F=(Ce[8]-1)/Ce[0],Kt=(Ie[8]+1)/Ie[0],He=ke*F,Ve=ke*Kt,Te=ae/(-F+Kt),lt=Te*-F;if(te.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(lt),Y.translateZ(Te),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ce[10]===-1)Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let Ee=ke+Te,R=ft+Te,w=He-lt,B=Ve+(ae-lt),Z=$e*ft/R*Ee,K=vt*ft/R*Ee;Y.projectionMatrix.makePerspective(w,B,Z,K,Ee,R),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function re(Y,te){te===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(te.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let te=Y.near,ye=Y.far;M.texture!==null&&(M.depthNear>0&&(te=M.depthNear),M.depthFar>0&&(ye=M.depthFar)),b.near=T.near=E.near=te,b.far=T.far=E.far=ye,(P!==b.near||D!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,D=b.far),E.layers.mask=Y.layers.mask|2,T.layers.mask=Y.layers.mask|4,b.layers.mask=E.layers.mask|T.layers.mask;let ae=Y.parent,Ce=b.cameras;re(b,ae);for(let Ie=0;Ie<Ce.length;Ie++)re(Ce[Ie],ae);Ce.length===2?$(b,E,T):b.projectionMatrix.copy(E.projectionMatrix),de(Y,b,ae)};function de(Y,te,ye){ye===null?Y.matrix.copy(te.matrixWorld):(Y.matrix.copy(ye.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(te.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ac*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(b)};let Se=null;function Be(Y,te){if(h=te.getViewerPose(c||a),v=te,h!==null){let ye=h.views;f!==null&&(e.setRenderTargetFramebuffer(C,f.framebuffer),e.setRenderTarget(C));let ae=!1;ye.length!==b.cameras.length&&(b.cameras.length=0,ae=!0);for(let Ie=0;Ie<ye.length;Ie++){let ke=ye[Ie],ft=null;if(f!==null)ft=f.getViewport(ke);else{let vt=u.getViewSubImage(d,ke);ft=vt.viewport,Ie===0&&(e.setRenderTargetTextures(C,vt.colorTexture,d.ignoreDepthValues?void 0:vt.depthStencilTexture),e.setRenderTarget(C))}let $e=y[Ie];$e===void 0&&($e=new It,$e.layers.enable(Ie),$e.viewport=new nt,y[Ie]=$e),$e.matrix.fromArray(ke.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(ke.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(ft.x,ft.y,ft.width,ft.height),Ie===0&&(b.matrix.copy($e.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ae===!0&&b.cameras.push($e)}let Ce=s.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){let Ie=u.getDepthInformation(ye[0]);Ie&&Ie.isValid&&Ie.texture&&M.init(e,Ie,s.renderState)}}for(let ye=0;ye<p.length;ye++){let ae=x[ye],Ce=p[ye];ae!==null&&Ce!==void 0&&Ce.update(ae,te,c||a)}Se&&Se(Y,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),v=null}let it=new pd;it.setAnimationLoop(Be),this.setAnimationLoop=function(Y){Se=Y},this.dispose=function(){}}},xi=new nn,_x=new tt;function yx(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,fd(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,C,p,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,x)):m.isMeshMatcapMaterial?(r(g,m),v(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),M(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,C,p):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Lt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Lt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let C=e.get(m),p=C.envMap,x=C.envMapRotation;p&&(g.envMap.value=p,xi.copy(x),xi.x*=-1,xi.y*=-1,xi.z*=-1,p.isCubeTexture&&p.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),g.envMapRotation.value.setFromMatrix4(_x.makeRotationFromEuler(xi)),g.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,C,p){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*C,g.scale.value=p*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,C){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Lt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=C.texture,g.transmissionSamplerSize.value.set(C.width,C.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,m){m.matcap&&(g.matcap.value=m.matcap)}function M(g,m){let C=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(C.matrixWorld),g.nearDistance.value=C.shadow.camera.near,g.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function bx(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(C,p){let x=p.program;n.uniformBlockBinding(C,x)}function c(C,p){let x=s[C.id];x===void 0&&(v(C),x=h(C),s[C.id]=x,C.addEventListener("dispose",g));let S=p.program;n.updateUBOMapping(C,S);let _=e.render.frame;r[C.id]!==_&&(d(C),r[C.id]=_)}function h(C){let p=u();C.__bindingPointIndex=p;let x=i.createBuffer(),S=C.__size,_=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,S,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,p,x),x}function u(){for(let C=0;C<o;C++)if(a.indexOf(C)===-1)return a.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(C){let p=s[C.id],x=C.uniforms,S=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,p);for(let _=0,E=x.length;_<E;_++){let T=Array.isArray(x[_])?x[_]:[x[_]];for(let y=0,b=T.length;y<b;y++){let P=T[y];if(f(P,_,y,S)===!0){let D=P.__offset,O=Array.isArray(P.value)?P.value:[P.value],V=0;for(let X=0;X<O.length;X++){let G=O[X],ee=M(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,D+V,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,V),V+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(C,p,x,S){let _=C.value,E=p+"_"+x;if(S[E]===void 0)return typeof _=="number"||typeof _=="boolean"?S[E]=_:S[E]=_.clone(),!0;{let T=S[E];if(typeof _=="number"||typeof _=="boolean"){if(T!==_)return S[E]=_,!0}else if(T.equals(_)===!1)return T.copy(_),!0}return!1}function v(C){let p=C.uniforms,x=0,S=16;for(let E=0,T=p.length;E<T;E++){let y=Array.isArray(p[E])?p[E]:[p[E]];for(let b=0,P=y.length;b<P;b++){let D=y[b],O=Array.isArray(D.value)?D.value:[D.value];for(let V=0,X=O.length;V<X;V++){let G=O[V],ee=M(G),$=x%S,re=$%ee.boundary,de=$+re;x+=re,de!==0&&S-de<ee.storage&&(x+=S-de),D.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=x,x+=ee.storage}}}let _=x%S;return _>0&&(x+=S-_),C.__size=x,C.__cache={},this}function M(C){let p={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(p.boundary=4,p.storage=4):C.isVector2?(p.boundary=8,p.storage=8):C.isVector3||C.isColor?(p.boundary=16,p.storage=12):C.isVector4?(p.boundary=16,p.storage=16):C.isMatrix3?(p.boundary=48,p.storage=48):C.isMatrix4?(p.boundary=64,p.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),p}function g(C){let p=C.target;p.removeEventListener("dispose",g);let x=a.indexOf(p.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[p.id]),delete s[p.id],delete r[p.id]}function m(){for(let C in s)i.deleteBuffer(s[C]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}var Ta=class{constructor(e={}){let{canvas:t=Tf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let v=new Uint32Array(4),M=new Int32Array(4),g=null,m=null,C=[],p=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kt,this.toneMapping=Kn,this.toneMappingExposure=1;let x=this,S=!1,_=0,E=0,T=null,y=-1,b=null,P=new nt,D=new nt,O=null,V=new ge(0),X=0,G=t.width,ee=t.height,$=1,re=null,de=null,Se=new nt(0,0,G,ee),Be=new nt(0,0,G,ee),it=!1,Y=new Qs,te=!1,ye=!1,ae=new tt,Ce=new tt,Ie=new I,ke=new nt,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$e=!1;function vt(){return T===null?$:1}let F=n;function Kt(A,U){return t.getContext(A,U)}try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",le,!1),F===null){let U="webgl2";if(F=Kt(U,A),F===null)throw Kt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let He,Ve,Te,lt,Ee,R,w,B,Z,K,q,be,oe,fe,Xe,j,pe,Ae,Re,me,Ge,Ne,rt,L;function se(){He=new Og(F),He.init(),Ne=new mx(F,He),Ve=new Ig(F,He,e,Ne),Te=new dx(F,He),Ve.reverseDepthBuffer&&d&&Te.buffers.depth.setReversed(!0),lt=new zg(F),Ee=new Q0,R=new px(F,He,Te,Ee,Ve,Ne,lt),w=new Dg(x),B=new Fg(x),Z=new qf(F),rt=new Rg(F,Z),K=new Bg(F,Z,lt,rt),q=new Vg(F,K,Z,lt),Re=new Hg(F,Ve,R),j=new Lg(Ee),be=new j0(x,w,B,He,Ve,rt,j),oe=new yx(x,Ee),fe=new tx,Xe=new ox(He),Ae=new Cg(x,w,B,Te,q,f,l),pe=new hx(x,q,Ve),L=new bx(F,lt,Ve,Te),me=new Pg(F,He,lt),Ge=new kg(F,He,lt),lt.programs=be.programs,x.capabilities=Ve,x.extensions=He,x.properties=Ee,x.renderLists=fe,x.shadowMap=pe,x.state=Te,x.info=lt}se();let W=new Mc(x,F);this.xr=W,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let A=He.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=He.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(A){A!==void 0&&($=A,this.setSize(G,ee,!1))},this.getSize=function(A){return A.set(G,ee)},this.setSize=function(A,U,k=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=A,ee=U,t.width=Math.floor(A*$),t.height=Math.floor(U*$),k===!0&&(t.style.width=A+"px",t.style.height=U+"px"),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(G*$,ee*$).floor()},this.setDrawingBufferSize=function(A,U,k){G=A,ee=U,$=k,t.width=Math.floor(A*k),t.height=Math.floor(U*k),this.setViewport(0,0,A,U)},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(Se)},this.setViewport=function(A,U,k,H){A.isVector4?Se.set(A.x,A.y,A.z,A.w):Se.set(A,U,k,H),Te.viewport(P.copy(Se).multiplyScalar($).round())},this.getScissor=function(A){return A.copy(Be)},this.setScissor=function(A,U,k,H){A.isVector4?Be.set(A.x,A.y,A.z,A.w):Be.set(A,U,k,H),Te.scissor(D.copy(Be).multiplyScalar($).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(A){Te.setScissorTest(it=A)},this.setOpaqueSort=function(A){re=A},this.setTransparentSort=function(A){de=A},this.getClearColor=function(A){return A.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(A=!0,U=!0,k=!0){let H=0;if(A){let N=!1;if(T!==null){let Q=T.texture.format;N=Q===ih||Q===nh||Q===th}if(N){let Q=T.texture.type,ce=Q===Nn||Q===wi||Q===js||Q===fs||Q===jc||Q===Qc,xe=Ae.getClearColor(),ve=Ae.getClearAlpha(),Pe=xe.r,De=xe.g,_e=xe.b;ce?(v[0]=Pe,v[1]=De,v[2]=_e,v[3]=ve,F.clearBufferuiv(F.COLOR,0,v)):(M[0]=Pe,M[1]=De,M[2]=_e,M[3]=ve,F.clearBufferiv(F.COLOR,0,M))}else H|=F.COLOR_BUFFER_BIT}U&&(H|=F.DEPTH_BUFFER_BIT),k&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",le,!1),fe.dispose(),Xe.dispose(),Ee.dispose(),w.dispose(),B.dispose(),q.dispose(),rt.dispose(),L.dispose(),be.dispose(),W.dispose(),W.removeEventListener("sessionstart",bh),W.removeEventListener("sessionend",Mh),li.stop()};function J(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let A=lt.autoReset,U=pe.enabled,k=pe.autoUpdate,H=pe.needsUpdate,N=pe.type;se(),lt.autoReset=A,pe.enabled=U,pe.autoUpdate=k,pe.needsUpdate=H,pe.type=N}function le(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Le(A){let U=A.target;U.removeEventListener("dispose",Le),gt(U)}function gt(A){At(A),Ee.remove(A)}function At(A){let U=Ee.get(A).programs;U!==void 0&&(U.forEach(function(k){be.releaseProgram(k)}),A.isShaderMaterial&&be.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,k,H,N,Q){U===null&&(U=ft);let ce=N.isMesh&&N.matrixWorld.determinant()<0,xe=Rd(A,U,k,H,N);Te.setMaterial(H,ce);let ve=k.index,Pe=1;if(H.wireframe===!0){if(ve=K.getWireframeAttribute(k),ve===void 0)return;Pe=2}let De=k.drawRange,_e=k.attributes.position,Ye=De.start*Pe,at=(De.start+De.count)*Pe;Q!==null&&(Ye=Math.max(Ye,Q.start*Pe),at=Math.min(at,(Q.start+Q.count)*Pe)),ve!==null?(Ye=Math.max(Ye,0),at=Math.min(at,ve.count)):_e!=null&&(Ye=Math.max(Ye,0),at=Math.min(at,_e.count));let ct=at-Ye;if(ct<0||ct===1/0)return;rt.setup(N,H,xe,k,ve);let Ot,Je=me;if(ve!==null&&(Ot=Z.get(ve),Je=Ge,Je.setIndex(Ot)),N.isMesh)H.wireframe===!0?(Te.setLineWidth(H.wireframeLinewidth*vt()),Je.setMode(F.LINES)):Je.setMode(F.TRIANGLES);else if(N.isLine){let Me=H.linewidth;Me===void 0&&(Me=1),Te.setLineWidth(Me*vt()),N.isLineSegments?Je.setMode(F.LINES):N.isLineLoop?Je.setMode(F.LINE_LOOP):Je.setMode(F.LINE_STRIP)}else N.isPoints?Je.setMode(F.POINTS):N.isSprite&&Je.setMode(F.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Je.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))Je.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Me=N._multiDrawStarts,wn=N._multiDrawCounts,Ke=N._multiDrawCount,an=ve?Z.get(ve).bytesPerElement:1,Pi=Ee.get(H).currentProgram.getUniforms();for(let Wt=0;Wt<Ke;Wt++)Pi.setValue(F,"_gl_DrawID",Wt),Je.render(Me[Wt]/an,wn[Wt])}else if(N.isInstancedMesh)Je.renderInstances(Ye,ct,N.count);else if(k.isInstancedBufferGeometry){let Me=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,wn=Math.min(k.instanceCount,Me);Je.renderInstances(Ye,ct,wn)}else Je.render(Ye,ct)};function et(A,U,k){A.transparent===!0&&A.side===zt&&A.forceSinglePass===!1?(A.side=Lt,A.needsUpdate=!0,pr(A,U,k),A.side=jn,A.needsUpdate=!0,pr(A,U,k),A.side=zt):pr(A,U,k)}this.compile=function(A,U,k=null){k===null&&(k=A),m=Xe.get(k),m.init(U),p.push(m),k.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),A!==k&&A.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();let H=new Set;return A.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let Q=N.material;if(Q)if(Array.isArray(Q))for(let ce=0;ce<Q.length;ce++){let xe=Q[ce];et(xe,k,N),H.add(xe)}else et(Q,k,N),H.add(Q)}),p.pop(),m=null,H},this.compileAsync=function(A,U,k=null){let H=this.compile(A,U,k);return new Promise(N=>{function Q(){if(H.forEach(function(ce){Ee.get(ce).currentProgram.isReady()&&H.delete(ce)}),H.size===0){N(A);return}setTimeout(Q,10)}He.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let rn=null;function Sn(A){rn&&rn(A)}function bh(){li.stop()}function Mh(){li.start()}let li=new pd;li.setAnimationLoop(Sn),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(A){rn=A,W.setAnimationLoop(A),A===null?li.stop():li.start()},W.addEventListener("sessionstart",bh),W.addEventListener("sessionend",Mh),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,U,T),m=Xe.get(A,p.length),m.init(U),p.push(m),Ce.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(Ce),ye=this.localClippingEnabled,te=j.init(this.clippingPlanes,ye),g=fe.get(A,C.length),g.init(),C.push(g),W.enabled===!0&&W.isPresenting===!0){let Q=x.xr.getDepthSensingMesh();Q!==null&&to(Q,U,-1/0,x.sortObjects)}to(A,U,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(re,de),$e=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,$e&&Ae.addToRenderList(g,A),this.info.render.frame++,te===!0&&j.beginShadows();let k=m.state.shadowsArray;pe.render(k,A,U),te===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=g.opaque,N=g.transmissive;if(m.setupLights(),U.isArrayCamera){let Q=U.cameras;if(N.length>0)for(let ce=0,xe=Q.length;ce<xe;ce++){let ve=Q[ce];wh(H,N,A,ve)}$e&&Ae.render(A);for(let ce=0,xe=Q.length;ce<xe;ce++){let ve=Q[ce];Sh(g,A,ve,ve.viewport)}}else N.length>0&&wh(H,N,A,U),$e&&Ae.render(A),Sh(g,A,U);T!==null&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(x,A,U),rt.resetDefaultState(),y=-1,b=null,p.pop(),p.length>0?(m=p[p.length-1],te===!0&&j.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,C.pop(),C.length>0?g=C[C.length-1]:g=null};function to(A,U,k,H){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)k=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Y.intersectsSprite(A)){H&&ke.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ce);let ce=q.update(A),xe=A.material;xe.visible&&g.push(A,ce,xe,k,ke.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Y.intersectsObject(A))){let ce=q.update(A),xe=A.material;if(H&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ke.copy(A.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),ke.copy(ce.boundingSphere.center)),ke.applyMatrix4(A.matrixWorld).applyMatrix4(Ce)),Array.isArray(xe)){let ve=ce.groups;for(let Pe=0,De=ve.length;Pe<De;Pe++){let _e=ve[Pe],Ye=xe[_e.materialIndex];Ye&&Ye.visible&&g.push(A,ce,Ye,k,ke.z,_e)}}else xe.visible&&g.push(A,ce,xe,k,ke.z,null)}}let Q=A.children;for(let ce=0,xe=Q.length;ce<xe;ce++)to(Q[ce],U,k,H)}function Sh(A,U,k,H){let N=A.opaque,Q=A.transmissive,ce=A.transparent;m.setupLightsView(k),te===!0&&j.setGlobalState(x.clippingPlanes,k),H&&Te.viewport(P.copy(H)),N.length>0&&fr(N,U,k),Q.length>0&&fr(Q,U,k),ce.length>0&&fr(ce,U,k),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function wh(A,U,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[H.id]===void 0&&(m.state.transmissionRenderTarget[H.id]=new Nt(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?mn:Nn,minFilter:Si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ze.workingColorSpace}));let Q=m.state.transmissionRenderTarget[H.id],ce=H.viewport||P;Q.setSize(ce.z,ce.w);let xe=x.getRenderTarget();x.setRenderTarget(Q),x.getClearColor(V),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),$e&&Ae.render(k);let ve=x.toneMapping;x.toneMapping=Kn;let Pe=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),m.setupLightsView(H),te===!0&&j.setGlobalState(x.clippingPlanes,H),fr(A,k,H),R.updateMultisampleRenderTarget(Q),R.updateRenderTargetMipmap(Q),He.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let _e=0,Ye=U.length;_e<Ye;_e++){let at=U[_e],ct=at.object,Ot=at.geometry,Je=at.material,Me=at.group;if(Je.side===zt&&ct.layers.test(H.layers)){let wn=Je.side;Je.side=Lt,Je.needsUpdate=!0,Eh(ct,k,H,Ot,Je,Me),Je.side=wn,Je.needsUpdate=!0,De=!0}}De===!0&&(R.updateMultisampleRenderTarget(Q),R.updateRenderTargetMipmap(Q))}x.setRenderTarget(xe),x.setClearColor(V,X),Pe!==void 0&&(H.viewport=Pe),x.toneMapping=ve}function fr(A,U,k){let H=U.isScene===!0?U.overrideMaterial:null;for(let N=0,Q=A.length;N<Q;N++){let ce=A[N],xe=ce.object,ve=ce.geometry,Pe=H===null?ce.material:H,De=ce.group;xe.layers.test(k.layers)&&Eh(xe,U,k,ve,Pe,De)}}function Eh(A,U,k,H,N,Q){A.onBeforeRender(x,U,k,H,N,Q),A.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),N.onBeforeRender(x,U,k,H,A,Q),N.transparent===!0&&N.side===zt&&N.forceSinglePass===!1?(N.side=Lt,N.needsUpdate=!0,x.renderBufferDirect(k,U,H,N,A,Q),N.side=jn,N.needsUpdate=!0,x.renderBufferDirect(k,U,H,N,A,Q),N.side=zt):x.renderBufferDirect(k,U,H,N,A,Q),A.onAfterRender(x,U,k,H,N,Q)}function pr(A,U,k){U.isScene!==!0&&(U=ft);let H=Ee.get(A),N=m.state.lights,Q=m.state.shadowsArray,ce=N.state.version,xe=be.getParameters(A,N.state,Q,U,k),ve=be.getProgramCacheKey(xe),Pe=H.programs;H.environment=A.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(A.isMeshStandardMaterial?B:w).get(A.envMap||H.environment),H.envMapRotation=H.environment!==null&&A.envMap===null?U.environmentRotation:A.envMapRotation,Pe===void 0&&(A.addEventListener("dispose",Le),Pe=new Map,H.programs=Pe);let De=Pe.get(ve);if(De!==void 0){if(H.currentProgram===De&&H.lightsStateVersion===ce)return Ah(A,xe),De}else xe.uniforms=be.getUniforms(A),A.onBeforeCompile(xe,x),De=be.acquireProgram(xe,ve),Pe.set(ve,De),H.uniforms=xe.uniforms;let _e=H.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(_e.clippingPlanes=j.uniform),Ah(A,xe),H.needsLights=Id(A),H.lightsStateVersion=ce,H.needsLights&&(_e.ambientLightColor.value=N.state.ambient,_e.lightProbe.value=N.state.probe,_e.directionalLights.value=N.state.directional,_e.directionalLightShadows.value=N.state.directionalShadow,_e.spotLights.value=N.state.spot,_e.spotLightShadows.value=N.state.spotShadow,_e.rectAreaLights.value=N.state.rectArea,_e.ltc_1.value=N.state.rectAreaLTC1,_e.ltc_2.value=N.state.rectAreaLTC2,_e.pointLights.value=N.state.point,_e.pointLightShadows.value=N.state.pointShadow,_e.hemisphereLights.value=N.state.hemi,_e.directionalShadowMap.value=N.state.directionalShadowMap,_e.directionalShadowMatrix.value=N.state.directionalShadowMatrix,_e.spotShadowMap.value=N.state.spotShadowMap,_e.spotLightMatrix.value=N.state.spotLightMatrix,_e.spotLightMap.value=N.state.spotLightMap,_e.pointShadowMap.value=N.state.pointShadowMap,_e.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=De,H.uniformsList=null,De}function Th(A){if(A.uniformsList===null){let U=A.currentProgram.getUniforms();A.uniformsList=cs.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function Ah(A,U){let k=Ee.get(A);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Rd(A,U,k,H,N){U.isScene!==!0&&(U=ft),R.resetTextureUnits();let Q=U.fog,ce=H.isMeshStandardMaterial?U.environment:null,xe=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ms,ve=(H.isMeshStandardMaterial?B:w).get(H.envMap||ce),Pe=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,De=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),_e=!!k.morphAttributes.position,Ye=!!k.morphAttributes.normal,at=!!k.morphAttributes.color,ct=Kn;H.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ct=x.toneMapping);let Ot=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Je=Ot!==void 0?Ot.length:0,Me=Ee.get(H),wn=m.state.lights;if(te===!0&&(ye===!0||A!==b)){let jt=A===b&&H.id===y;j.setState(H,A,jt)}let Ke=!1;H.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==wn.state.version||Me.outputColorSpace!==xe||N.isBatchedMesh&&Me.batching===!1||!N.isBatchedMesh&&Me.batching===!0||N.isBatchedMesh&&Me.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Me.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Me.instancing===!1||!N.isInstancedMesh&&Me.instancing===!0||N.isSkinnedMesh&&Me.skinning===!1||!N.isSkinnedMesh&&Me.skinning===!0||N.isInstancedMesh&&Me.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Me.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Me.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Me.instancingMorph===!1&&N.morphTexture!==null||Me.envMap!==ve||H.fog===!0&&Me.fog!==Q||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==j.numPlanes||Me.numIntersection!==j.numIntersection)||Me.vertexAlphas!==Pe||Me.vertexTangents!==De||Me.morphTargets!==_e||Me.morphNormals!==Ye||Me.morphColors!==at||Me.toneMapping!==ct||Me.morphTargetsCount!==Je)&&(Ke=!0):(Ke=!0,Me.__version=H.version);let an=Me.currentProgram;Ke===!0&&(an=pr(H,U,N));let Pi=!1,Wt=!1,Ts=!1,ht=an.getUniforms(),gn=Me.uniforms;if(Te.useProgram(an.program)&&(Pi=!0,Wt=!0,Ts=!0),H.id!==y&&(y=H.id,Wt=!0),Pi||b!==A){Te.buffers.depth.getReversed()?(ae.copy(A.projectionMatrix),Cf(ae),Rf(ae),ht.setValue(F,"projectionMatrix",ae)):ht.setValue(F,"projectionMatrix",A.projectionMatrix),ht.setValue(F,"viewMatrix",A.matrixWorldInverse);let Bn=ht.map.cameraPosition;Bn!==void 0&&Bn.setValue(F,Ie.setFromMatrixPosition(A.matrixWorld)),Ve.logarithmicDepthBuffer&&ht.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ht.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,Wt=!0,Ts=!0)}if(N.isSkinnedMesh){ht.setOptional(F,N,"bindMatrix"),ht.setOptional(F,N,"bindMatrixInverse");let jt=N.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),ht.setValue(F,"boneTexture",jt.boneTexture,R))}N.isBatchedMesh&&(ht.setOptional(F,N,"batchingTexture"),ht.setValue(F,"batchingTexture",N._matricesTexture,R),ht.setOptional(F,N,"batchingIdTexture"),ht.setValue(F,"batchingIdTexture",N._indirectTexture,R),ht.setOptional(F,N,"batchingColorTexture"),N._colorsTexture!==null&&ht.setValue(F,"batchingColorTexture",N._colorsTexture,R));let As=k.morphAttributes;if((As.position!==void 0||As.normal!==void 0||As.color!==void 0)&&Re.update(N,k,an),(Wt||Me.receiveShadow!==N.receiveShadow)&&(Me.receiveShadow=N.receiveShadow,ht.setValue(F,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(gn.envMap.value=ve,gn.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(gn.envMapIntensity.value=U.environmentIntensity),Wt&&(ht.setValue(F,"toneMappingExposure",x.toneMappingExposure),Me.needsLights&&Pd(gn,Ts),Q&&H.fog===!0&&oe.refreshFogUniforms(gn,Q),oe.refreshMaterialUniforms(gn,H,$,ee,m.state.transmissionRenderTarget[A.id]),cs.upload(F,Th(Me),gn,R)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(cs.upload(F,Th(Me),gn,R),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ht.setValue(F,"center",N.center),ht.setValue(F,"modelViewMatrix",N.modelViewMatrix),ht.setValue(F,"normalMatrix",N.normalMatrix),ht.setValue(F,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let jt=H.uniformsGroups;for(let Bn=0,kn=jt.length;Bn<kn;Bn++){let Ch=jt[Bn];L.update(Ch,an),L.bind(Ch,an)}}return an}function Pd(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function Id(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,U,k){Ee.get(A.texture).__webglTexture=U,Ee.get(A.depthTexture).__webglTexture=k;let H=Ee.get(A);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,U){let k=Ee.get(A);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(A,U=0,k=0){T=A,_=U,E=k;let H=!0,N=null,Q=!1,ce=!1;if(A){let ve=Ee.get(A);if(ve.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(F.FRAMEBUFFER,null),H=!1;else if(ve.__webglFramebuffer===void 0)R.setupRenderTarget(A);else if(ve.__hasExternalTextures)R.rebindTextures(A,Ee.get(A.texture).__webglTexture,Ee.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let _e=A.depthTexture;if(ve.__boundDepthTexture!==_e){if(_e!==null&&Ee.has(_e)&&(A.width!==_e.image.width||A.height!==_e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(A)}}let Pe=A.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(ce=!0);let De=Ee.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(De[U])?N=De[U][k]:N=De[U],Q=!0):A.samples>0&&R.useMultisampledRTT(A)===!1?N=Ee.get(A).__webglMultisampledFramebuffer:Array.isArray(De)?N=De[k]:N=De,P.copy(A.viewport),D.copy(A.scissor),O=A.scissorTest}else P.copy(Se).multiplyScalar($).floor(),D.copy(Be).multiplyScalar($).floor(),O=it;if(Te.bindFramebuffer(F.FRAMEBUFFER,N)&&H&&Te.drawBuffers(A,N),Te.viewport(P),Te.scissor(D),Te.setScissorTest(O),Q){let ve=Ee.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,ve.__webglTexture,k)}else if(ce){let ve=Ee.get(A.texture),Pe=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,ve.__webglTexture,k||0,Pe)}y=-1},this.readRenderTargetPixels=function(A,U,k,H,N,Q,ce){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Ee.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ce!==void 0&&(xe=xe[ce]),xe){Te.bindFramebuffer(F.FRAMEBUFFER,xe);try{let ve=A.texture,Pe=ve.format,De=ve.type;if(!Ve.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-H&&k>=0&&k<=A.height-N&&F.readPixels(U,k,H,N,Ne.convert(Pe),Ne.convert(De),Q)}finally{let ve=T!==null?Ee.get(T).__webglFramebuffer:null;Te.bindFramebuffer(F.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(A,U,k,H,N,Q,ce){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Ee.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ce!==void 0&&(xe=xe[ce]),xe){let ve=A.texture,Pe=ve.format,De=ve.type;if(!Ve.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=A.width-H&&k>=0&&k<=A.height-N){Te.bindFramebuffer(F.FRAMEBUFFER,xe);let _e=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,_e),F.bufferData(F.PIXEL_PACK_BUFFER,Q.byteLength,F.STREAM_READ),F.readPixels(U,k,H,N,Ne.convert(Pe),Ne.convert(De),0);let Ye=T!==null?Ee.get(T).__webglFramebuffer:null;Te.bindFramebuffer(F.FRAMEBUFFER,Ye);let at=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Af(F,at,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,_e),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Q),F.deleteBuffer(_e),F.deleteSync(at),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,U=null,k=0){A.isTexture!==!0&&(qs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,A=arguments[1]);let H=Math.pow(2,-k),N=Math.floor(A.image.width*H),Q=Math.floor(A.image.height*H),ce=U!==null?U.x:0,xe=U!==null?U.y:0;R.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,k,0,0,ce,xe,N,Q),Te.unbindTexture()},this.copyTextureToTexture=function(A,U,k=null,H=null,N=0){A.isTexture!==!0&&(qs("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,A=arguments[1],U=arguments[2],N=arguments[3]||0,k=null);let Q,ce,xe,ve,Pe,De,_e,Ye,at,ct=A.isCompressedTexture?A.mipmaps[N]:A.image;k!==null?(Q=k.max.x-k.min.x,ce=k.max.y-k.min.y,xe=k.isBox3?k.max.z-k.min.z:1,ve=k.min.x,Pe=k.min.y,De=k.isBox3?k.min.z:0):(Q=ct.width,ce=ct.height,xe=ct.depth||1,ve=0,Pe=0,De=0),H!==null?(_e=H.x,Ye=H.y,at=H.z):(_e=0,Ye=0,at=0);let Ot=Ne.convert(U.format),Je=Ne.convert(U.type),Me;U.isData3DTexture?(R.setTexture3D(U,0),Me=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(R.setTexture2DArray(U,0),Me=F.TEXTURE_2D_ARRAY):(R.setTexture2D(U,0),Me=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let wn=F.getParameter(F.UNPACK_ROW_LENGTH),Ke=F.getParameter(F.UNPACK_IMAGE_HEIGHT),an=F.getParameter(F.UNPACK_SKIP_PIXELS),Pi=F.getParameter(F.UNPACK_SKIP_ROWS),Wt=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ct.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ct.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ve),F.pixelStorei(F.UNPACK_SKIP_ROWS,Pe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,De);let Ts=A.isDataArrayTexture||A.isData3DTexture,ht=U.isDataArrayTexture||U.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){let gn=Ee.get(A),As=Ee.get(U),jt=Ee.get(gn.__renderTarget),Bn=Ee.get(As.__renderTarget);Te.bindFramebuffer(F.READ_FRAMEBUFFER,jt.__webglFramebuffer),Te.bindFramebuffer(F.DRAW_FRAMEBUFFER,Bn.__webglFramebuffer);for(let kn=0;kn<xe;kn++)Ts&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ee.get(A).__webglTexture,N,De+kn),A.isDepthTexture?(ht&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ee.get(U).__webglTexture,N,at+kn),F.blitFramebuffer(ve,Pe,Q,ce,_e,Ye,Q,ce,F.DEPTH_BUFFER_BIT,F.NEAREST)):ht?F.copyTexSubImage3D(Me,N,_e,Ye,at+kn,ve,Pe,Q,ce):F.copyTexSubImage2D(Me,N,_e,Ye,at+kn,ve,Pe,Q,ce);Te.bindFramebuffer(F.READ_FRAMEBUFFER,null),Te.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ht?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(Me,N,_e,Ye,at,Q,ce,xe,Ot,Je,ct.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Me,N,_e,Ye,at,Q,ce,xe,Ot,ct.data):F.texSubImage3D(Me,N,_e,Ye,at,Q,ce,xe,Ot,Je,ct):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,N,_e,Ye,Q,ce,Ot,Je,ct.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,N,_e,Ye,ct.width,ct.height,Ot,ct.data):F.texSubImage2D(F.TEXTURE_2D,N,_e,Ye,Q,ce,Ot,Je,ct);F.pixelStorei(F.UNPACK_ROW_LENGTH,wn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ke),F.pixelStorei(F.UNPACK_SKIP_PIXELS,an),F.pixelStorei(F.UNPACK_SKIP_ROWS,Pi),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Wt),N===0&&U.generateMipmaps&&F.generateMipmap(Me),Te.unbindTexture()},this.copyTextureToTexture3D=function(A,U,k=null,H=null,N=0){return A.isTexture!==!0&&(qs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,H=arguments[1]||null,A=arguments[2],U=arguments[3],N=arguments[4]||0),qs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,U,k,H,N)},this.initRenderTarget=function(A){Ee.get(A).__webglFramebuffer===void 0&&R.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),Te.unbindTexture()},this.resetState=function(){_=0,E=0,T=null,Te.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=ze._getUnpackColorSpace()}},Aa=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ge(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ca=class extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Sc=class extends Vt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=qt,h=qt,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xs=class extends Et{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ss=new tt,zu=new tt,ia=[],Hu=new Fn,Mx=new tt,Ws=new we,$s=new ei,Zt=class extends we{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Mx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Fn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ss),Hu.copy(e.boundingBox).applyMatrix4(ss),this.boundingBox.union(Hu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ss),$s.copy(e.boundingSphere).applyMatrix4(ss),this.boundingSphere.union($s)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ws.geometry=this.geometry,Ws.material=this.material,Ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$s.copy(this.boundingSphere),$s.applyMatrix4(n),e.ray.intersectsSphere($s)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ss),zu.multiplyMatrices(n,ss),Ws.matrixWorld=zu,Ws.raycast(e,ia);for(let a=0,o=ia.length;a<o;a++){let l=ia[a];l.instanceId=r,l.object=this,t.push(l)}ia.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new xs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Sc(new Float32Array(s*this.count),s,this.count,eh,yn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var wc=class extends ti{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vu=new tt,Ec=new va,sa=new ei,ra=new I,er=class extends Dt{constructor(e=new yt,t=new wc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(s),sa.radius+=r,e.ray.intersectsSphere(sa)===!1)return;Vu.copy(s).invert(),Ec.copy(e.ray).applyMatrix4(Vu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let v=d,M=f;v<M;v++){let g=c.getX(v);ra.fromBufferAttribute(u,g),Gu(ra,g,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let v=d,M=f;v<M;v++)ra.fromBufferAttribute(u,v),Gu(ra,v,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Gu(i,e,t,n,s,r,a){let o=Ec.distanceSqToPoint(i);if(o<t){let l=new I;Ec.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var tr=class extends Vt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},sn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ne:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new I,s=[],r=[],a=[],o=new I,l=new tt;for(let f=0;f<=e;f++){let v=f/e;s[f]=this.getTangentAt(v,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let v=Math.acos(wt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,v))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(wt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let v=1;v<=e;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],f*v)),a[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},nr=class extends sn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ne){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Tc=class extends nr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function rh(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var aa=new I,ml=new rh,gl=new rh,xl=new rh,Ac=class extends sn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(aa.subVectors(s[0],s[1]).add(s[0]),c=aa);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(aa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=aa),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,v=Math.pow(c.distanceToSquared(u),f),M=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);M<1e-4&&(M=1),v<1e-4&&(v=M),g<1e-4&&(g=M),ml.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,v,M,g),gl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,v,M,g),xl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,v,M,g)}else this.curveType==="catmullrom"&&(ml.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),gl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),xl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(ml.calc(l),gl.calc(l),xl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Wu(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Sx(i,e){let t=1-i;return t*t*e}function wx(i,e){return 2*(1-i)*i*e}function Ex(i,e){return i*i*e}function Js(i,e,t,n){return Sx(i,e)+wx(i,t)+Ex(i,n)}function Tx(i,e){let t=1-i;return t*t*t*e}function Ax(i,e){let t=1-i;return 3*t*t*i*e}function Cx(i,e){return 3*(1-i)*i*i*e}function Rx(i,e){return i*i*i*e}function Ks(i,e,t,n,s){return Tx(i,e)+Ax(i,t)+Cx(i,n)+Rx(i,s)}var Ra=class extends sn{constructor(e=new ne,t=new ne,n=new ne,s=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ne){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ks(e,s.x,r.x,a.x,o.x),Ks(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Cc=class extends sn{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ks(e,s.x,r.x,a.x,o.x),Ks(e,s.y,r.y,a.y,o.y),Ks(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Pa=class extends sn{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Rc=class extends sn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ia=class extends sn{constructor(e=new ne,t=new ne,n=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ne){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Js(e,s.x,r.x,a.x),Js(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pc=class extends sn{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Js(e,s.x,r.x,a.x),Js(e,s.y,r.y,a.y),Js(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},La=class extends sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Wu(o,l.x,c.x,h.x,u.x),Wu(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ne().fromArray(s))}return this}},$u=Object.freeze({__proto__:null,ArcCurve:Tc,CatmullRomCurve3:Ac,CubicBezierCurve:Ra,CubicBezierCurve3:Cc,EllipseCurve:nr,LineCurve:Pa,LineCurve3:Rc,QuadraticBezierCurve:Ia,QuadraticBezierCurve3:Pc,SplineCurve:La}),Ic=class extends sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $u[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new $u[s.type]().fromJSON(s))}return this}},Lc=class extends Ic{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Pa(this.currentPoint.clone(),new ne(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ia(this.currentPoint.clone(),new ne(e,t),new ne(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Ra(this.currentPoint.clone(),new ne(e,t),new ne(n,s),new ne(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new La(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new nr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Dc=class i extends yt{constructor(e=[new ne(0,-.5),new ne(.5,0),new ne(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=wt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new I,d=new ne,f=new I,v=new I,M=new I,g=0,m=0;for(let C=0;C<=e.length-1;C++)switch(C){case 0:g=e[C+1].x-e[C].x,m=e[C+1].y-e[C].y,f.x=m*1,f.y=-g,f.z=m*0,M.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(M.x,M.y,M.z);break;default:g=e[C+1].x-e[C].x,m=e[C+1].y-e[C].y,f.x=m*1,f.y=-g,f.z=m*0,v.copy(f),f.x+=M.x,f.y+=M.y,f.z+=M.z,f.normalize(),l.push(f.x,f.y,f.z),M.copy(v)}for(let C=0;C<=t;C++){let p=n+C*h*s,x=Math.sin(p),S=Math.cos(p);for(let _=0;_<=e.length-1;_++){u.x=e[_].x*x,u.y=e[_].y,u.z=e[_].x*S,a.push(u.x,u.y,u.z),d.x=C/t,d.y=_/(e.length-1),o.push(d.x,d.y);let E=l[3*_+0]*x,T=l[3*_+1],y=l[3*_+0]*S;c.push(E,T,y)}}for(let C=0;C<t;C++)for(let p=0;p<e.length-1;p++){let x=p+C*e.length,S=x,_=x+e.length,E=x+e.length+1,T=x+1;r.push(S,_,T),r.push(E,T,_)}this.setIndex(r),this.setAttribute("position",new qe(a,3)),this.setAttribute("uv",new qe(o,2)),this.setAttribute("normal",new qe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},vs=class i extends Dc{constructor(e=1,t=1,n=4,s=8){let r=new Lc;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},ir=class i extends yt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new I,h=new ne;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new qe(a,3)),this.setAttribute("normal",new qe(o,3)),this.setAttribute("uv",new qe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Gt=class i extends yt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],v=0,M=[],g=n/2,m=0;C(),a===!1&&(e>0&&p(!0),t>0&&p(!1)),this.setIndex(h),this.setAttribute("position",new qe(u,3)),this.setAttribute("normal",new qe(d,3)),this.setAttribute("uv",new qe(f,2));function C(){let x=new I,S=new I,_=0,E=(t-e)/n;for(let T=0;T<=r;T++){let y=[],b=T/r,P=b*(t-e)+e;for(let D=0;D<=s;D++){let O=D/s,V=O*l+o,X=Math.sin(V),G=Math.cos(V);S.x=P*X,S.y=-b*n+g,S.z=P*G,u.push(S.x,S.y,S.z),x.set(X,E,G).normalize(),d.push(x.x,x.y,x.z),f.push(O,1-b),y.push(v++)}M.push(y)}for(let T=0;T<s;T++)for(let y=0;y<r;y++){let b=M[y][T],P=M[y+1][T],D=M[y+1][T+1],O=M[y][T+1];(e>0||y!==0)&&(h.push(b,P,O),_+=3),(t>0||y!==r-1)&&(h.push(P,D,O),_+=3)}c.addGroup(m,_,0),m+=_}function p(x){let S=v,_=new ne,E=new I,T=0,y=x===!0?e:t,b=x===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,g*b,0),d.push(0,b,0),f.push(.5,.5),v++;let P=v;for(let D=0;D<=s;D++){let V=D/s*l+o,X=Math.cos(V),G=Math.sin(V);E.x=y*G,E.y=g*b,E.z=y*X,u.push(E.x,E.y,E.z),d.push(0,b,0),_.x=X*.5+.5,_.y=G*.5*b+.5,f.push(_.x,_.y),v++}for(let D=0;D<s;D++){let O=S+D,V=P+D;x===!0?h.push(V,V+1,O):h.push(V+1,V,O),T+=3}c.addGroup(m,T,x===!0?1:2),m+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ei=class i extends Gt{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},sr=class i extends yt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new qe(r,3)),this.setAttribute("normal",new qe(r.slice(),3)),this.setAttribute("uv",new qe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(C){let p=new I,x=new I,S=new I;for(let _=0;_<t.length;_+=3)f(t[_+0],p),f(t[_+1],x),f(t[_+2],S),l(p,x,S,C)}function l(C,p,x,S){let _=S+1,E=[];for(let T=0;T<=_;T++){E[T]=[];let y=C.clone().lerp(x,T/_),b=p.clone().lerp(x,T/_),P=_-T;for(let D=0;D<=P;D++)D===0&&T===_?E[T][D]=y:E[T][D]=y.clone().lerp(b,D/P)}for(let T=0;T<_;T++)for(let y=0;y<2*(_-T)-1;y++){let b=Math.floor(y/2);y%2===0?(d(E[T][b+1]),d(E[T+1][b]),d(E[T][b])):(d(E[T][b+1]),d(E[T+1][b+1]),d(E[T+1][b]))}}function c(C){let p=new I;for(let x=0;x<r.length;x+=3)p.x=r[x+0],p.y=r[x+1],p.z=r[x+2],p.normalize().multiplyScalar(C),r[x+0]=p.x,r[x+1]=p.y,r[x+2]=p.z}function h(){let C=new I;for(let p=0;p<r.length;p+=3){C.x=r[p+0],C.y=r[p+1],C.z=r[p+2];let x=g(C)/2/Math.PI+.5,S=m(C)/Math.PI+.5;a.push(x,1-S)}v(),u()}function u(){for(let C=0;C<a.length;C+=6){let p=a[C+0],x=a[C+2],S=a[C+4],_=Math.max(p,x,S),E=Math.min(p,x,S);_>.9&&E<.1&&(p<.2&&(a[C+0]+=1),x<.2&&(a[C+2]+=1),S<.2&&(a[C+4]+=1))}}function d(C){r.push(C.x,C.y,C.z)}function f(C,p){let x=C*3;p.x=e[x+0],p.y=e[x+1],p.z=e[x+2]}function v(){let C=new I,p=new I,x=new I,S=new I,_=new ne,E=new ne,T=new ne;for(let y=0,b=0;y<r.length;y+=9,b+=6){C.set(r[y+0],r[y+1],r[y+2]),p.set(r[y+3],r[y+4],r[y+5]),x.set(r[y+6],r[y+7],r[y+8]),_.set(a[b+0],a[b+1]),E.set(a[b+2],a[b+3]),T.set(a[b+4],a[b+5]),S.copy(C).add(p).add(x).divideScalar(3);let P=g(S);M(_,b+0,C,P),M(E,b+2,p,P),M(T,b+4,x,P)}}function M(C,p,x,S){S<0&&C.x===1&&(a[p]=C.x-1),x.x===0&&x.z===0&&(a[p]=S/2/Math.PI+.5)}function g(C){return Math.atan2(C.z,-C.x)}function m(C){return Math.atan2(-C.y,Math.sqrt(C.x*C.x+C.z*C.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},ni=class i extends sr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Ti=class i extends sr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},_s=class i extends sr{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Da=class i extends yt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new I,v=new ne;for(let M=0;M<=s;M++){for(let g=0;g<=n;g++){let m=r+g/n*a;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),v.x=(f.x/t+1)/2,v.y=(f.y/t+1)/2,h.push(v.x,v.y)}u+=d}for(let M=0;M<s;M++){let g=M*(n+1);for(let m=0;m<n;m++){let C=m+g,p=C,x=C+n+1,S=C+n+2,_=C+1;o.push(p,x,_),o.push(x,S,_)}}this.setIndex(o),this.setAttribute("position",new qe(l,3)),this.setAttribute("normal",new qe(c,3)),this.setAttribute("uv",new qe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var mt=class i extends yt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new I,d=new I,f=[],v=[],M=[],g=[];for(let m=0;m<=n;m++){let C=[],p=m/n,x=0;m===0&&a===0?x=.5/t:m===n&&l===Math.PI&&(x=-.5/t);for(let S=0;S<=t;S++){let _=S/t;u.x=-e*Math.cos(s+_*r)*Math.sin(a+p*o),u.y=e*Math.cos(a+p*o),u.z=e*Math.sin(s+_*r)*Math.sin(a+p*o),v.push(u.x,u.y,u.z),d.copy(u).normalize(),M.push(d.x,d.y,d.z),g.push(_+x,1-p),C.push(c++)}h.push(C)}for(let m=0;m<n;m++)for(let C=0;C<t;C++){let p=h[m][C+1],x=h[m][C],S=h[m+1][C],_=h[m+1][C+1];(m!==0||a>0)&&f.push(p,x,_),(m!==n-1||l<Math.PI)&&f.push(x,S,_)}this.setIndex(f),this.setAttribute("position",new qe(v,3)),this.setAttribute("normal",new qe(M,3)),this.setAttribute("uv",new qe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ai=class i extends yt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let v=0;v<=s;v++){let M=v/s*r,g=f/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(M),u.y=(e+t*Math.cos(g))*Math.sin(M),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(M),h.y=e*Math.sin(M),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(v/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let v=1;v<=s;v++){let M=(s+1)*f+v-1,g=(s+1)*(f-1)+v-1,m=(s+1)*(f-1)+v,C=(s+1)*f+v;a.push(M,g,C),a.push(g,m,C)}this.setIndex(a),this.setAttribute("position",new qe(o,3)),this.setAttribute("normal",new qe(l,3)),this.setAttribute("uv",new qe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ua=class extends pt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},ot=class extends ti{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ld,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ys=class extends ot{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function oa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Px(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var bs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Uc=class extends bs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wh,endingEnd:Wh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case $h:r=e,o=2*t-n;break;case Xh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $h:a=e,l=2*n-t;break;case Xh:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,v=(n-t)/(s-t),M=v*v,g=M*v,m=-d*g+2*d*M-d*v,C=(1+d)*g+(-1.5-2*d)*M+(-.5+d)*v+1,p=(-1-f)*g+(1.5+f)*M+.5*v,x=f*g-f*M;for(let S=0;S!==o;++S)r[S]=m*a[h+S]+C*a[c+S]+p*a[l+S]+x*a[u+S];return r}},Nc=class extends bs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Fc=class extends bs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},pn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=oa(t,this.TimeBufferType),this.values=oa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:oa(e.times,Array),values:oa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Fc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Nc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Uc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case fa:t=this.InterpolantFactoryMethodDiscrete;break;case rc:t=this.InterpolantFactoryMethodLinear;break;case zo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fa;case this.InterpolantFactoryMethodLinear:return rc;case this.InterpolantFactoryMethodSmooth:return zo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Px(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===zo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let v=0;v!==n;++v){let M=t[u+v];if(M!==t[d+v]||M!==t[f+v]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=rc;var Ci=class extends pn{constructor(e,t,n){super(e,t,n)}};Ci.prototype.ValueTypeName="bool";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=fa;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Oc=class extends pn{};Oc.prototype.ValueTypeName="color";var Bc=class extends pn{};Bc.prototype.ValueTypeName="number";var kc=class extends bs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)dn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Na=class extends pn{InterpolantFactoryMethodLinear(e){return new kc(this.times,this.values,this.getValueSize(),e)}};Na.prototype.ValueTypeName="quaternion";Na.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends pn{constructor(e,t,n){super(e,t,n)}};Ri.prototype.ValueTypeName="string";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=fa;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var zc=class extends pn{};zc.prototype.ValueTypeName="vector";var Hc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],v=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return v}return null}}},Ix=new Hc,Vc=class{constructor(e){this.manager=e!==void 0?e:Ix,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Vc.DEFAULT_MATERIAL_NAME="__DEFAULT";var rr=class extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Fa=class extends rr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},vl=new tt,Xu=new I,qu=new I,Oa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qs,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Xu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xu),qu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qu),t.updateMatrixWorld(),vl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Yu=new tt,Xs=new I,_l=new I,Gc=class extends Oa{constructor(){super(new It(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ne(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Xs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Xs),_l.copy(n.position),_l.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(_l),n.updateMatrixWorld(),s.makeTranslation(-Xs.x,-Xs.y,-Xs.z),Yu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yu)}},Ba=class extends rr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Gc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Wc=class extends Oa{constructor(){super(new gs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ka=class extends rr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new Wc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var za=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Zu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Zu(){return performance.now()}var ah="\\[\\]\\.:\\/",Lx=new RegExp("["+ah+"]","g"),oh="[^"+ah+"]",Dx="[^"+ah.replace("\\.","")+"]",Ux=/((?:WC+[\/:])*)/.source.replace("WC",oh),Nx=/(WCOD+)?/.source.replace("WCOD",Dx),Fx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oh),Ox=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oh),Bx=new RegExp("^"+Ux+Nx+Fx+Ox+"$"),kx=["material","materials","bones","map"],$c=class{constructor(e,t,n){let s=n||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},dt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Lx,"")}static parseTrackName(e){let t=Bx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);kx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dt.Composite=$c;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ov=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Wa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Jt=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Hx=new gs(-1,1,1,-1,0,1),lh=class extends yt{constructor(){super(),this.setAttribute("position",new qe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new qe([0,2,0,0,2,0],2))}},Vx=new lh,si=class{constructor(e){this._mesh=new we(Vx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Hx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ws=class extends Jt{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof pt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ii.clone(e.uniforms),this.material=new pt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new si(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var lr=class extends Jt{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},$a=class extends Jt{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Xa=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ne);this._width=n.width,this._height=n.height,t=new Nt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:mn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ws(Wa),this.copyPass.material.blending=bn,this.clock=new za}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}lr!==void 0&&(a instanceof lr?n=!0:a instanceof $a&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var qa=class extends Jt{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ge}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var _d={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ge(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Es=class i extends Jt{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ne(e.x,e.y):new ne(256,256),this.clearColor=new ge(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Nt(r,a,{type:mn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Nt(r,a,{type:mn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Nt(r,a,{type:mn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=_d;this.highPassUniforms=ii.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new pt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ne(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Wa;this.copyUniforms=ii.clone(h.uniforms),this.blendMaterial=new pt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:tn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ge,this.oldClearAlpha=1,this.basic=new Tt,this.fsQuad=new si(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ne(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new pt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ne(.5,.5)},direction:{value:new ne(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new pt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Es.BlurDirectionX=new ne(1,0);Es.BlurDirectionY=new ne(0,1);var yd={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Ya=class extends Jt{constructor(){super();let e=yd;this.uniforms=ii.clone(e.uniforms),this.material=new Ua({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new si(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ze.getTransfer(this._outputColorSpace)===je&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Xc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===qc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Yc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ar?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Zc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Jc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ch=`float h21(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
float vn(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h21(i),h21(i+vec2(1,0)),f.x),mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){float a=.5,s=0.;for(int i=0;i<4;i++){s+=a*vn(p);p*=2.03;a*=.5;}return s;}`,Qe=(i,e)=>i+Math.random()*(e-i);function Gx(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.35,"rgba(255,255,255,.5)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new tr(i)}function Wx(){let i=document.createElement("canvas");i.width=64,i.height=256;let e=i.getContext("2d"),t=e.createLinearGradient(0,0,0,256);t.addColorStop(0,"rgba(255,255,255,.9)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,256);let n=e.createLinearGradient(0,0,64,0);return n.addColorStop(0,"rgba(0,0,0,1)"),n.addColorStop(.5,"rgba(0,0,0,0)"),n.addColorStop(1,"rgba(0,0,0,1)"),e.globalCompositeOperation="destination-out",e.fillStyle=n,e.fillRect(0,0,64,256),new tr(i)}var $x={uniforms:{tDiffuse:{value:null},uVig:{value:.9},uTint:{value:new ge(1,1,1)},uTime:{value:0},uHurt:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;uniform float uVig,uTime,uHurt;uniform vec3 uTint;varying vec2 vUv;
  void main(){vec2 uv=vUv+vec2(sin(vUv.y*14.+uTime*1.3),cos(vUv.x*12.+uTime))*0.0009;vec4 c=texture2D(tDiffuse,uv);float d=distance(vUv,vec2(.5));
  c.rgb*=mix(1.,smoothstep(.85,.25,d),uVig);c.rgb*=uTint;c.rgb=mix(c.rgb,vec3(1.,.25,.3),uHurt*smoothstep(.3,.75,d));gl_FragColor=c;}`},Ja=class{constructor(e){let t=this.renderer=new Ta({canvas:e,antialias:!0,powerPreference:"high-performance"});t.toneMapping=ar,t.toneMappingExposure=1.05,t.outputColorSpace=kt,this.scene=new Ca,this.scene.fog=new Aa(2864073,.022),this.camera=new It(52,1,.1,400),this.scene.add(this.camera),this.glow=Gx(),this.t=0,this.shake=0,this.hurt=0,this.mode="hub",this.world=-1,this.quality="high",this.camZ=0,this.U={uTime:{value:0}},this.buildLights(),this.buildSky(),this.buildFloor(),this.buildRays(),this.buildSnow(),this.buildSub(),this.buildGloom(),this.buildShots(),this.buildBoss(),this.buildParticles(),this.buildFish(),this.buildArk(),this.buildFx(),this.decor=[];let n=this.composer=new Xa(t);n.addPass(new qa(this.scene,this.camera)),this.bloom=new Es(new ne(256,256),.55,.5,.82),n.addPass(this.bloom),this.grade=new ws($x),n.addPass(this.grade),n.addPass(new Ya),this.resize(),addEventListener("resize",()=>this.resize()),this.setWorld(0),this.setQuality("high")}setQuality(e){this.quality=e;let t=e==="low"?1:e==="med"?Math.min(devicePixelRatio,1.5):Math.min(devicePixelRatio,2);if(this.renderer.setPixelRatio(t),this.bloom.enabled=e!=="low",this.snow.visible=e!=="low",this.resize(),this.world>=0){let n=this.world;this.world=-1,this.setWorld(n)}}resize(){this._off=-1;let e=innerWidth,t=innerHeight;this.renderer.setSize(e,t,!1),this.composer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}buildLights(){this.hemi=new Fa(12580095,1718848,1.4),this.scene.add(this.hemi),this.sun=new ka(16773846,2.2),this.sun.position.set(6,30,8),this.scene.add(this.sun,this.sun.target),this.subLight=new Ba(16773312,30,26,1.6),this.scene.add(this.subLight)}buildSky(){this.skyU={top:{value:new ge},bot:{value:new ge},uTime:this.U.uTime};let e=new pt({side:Lt,depthWrite:!1,fog:!1,uniforms:this.skyU,vertexShader:"varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform vec3 top,bot;uniform float uTime;varying vec3 vP;${ch}void main(){float y=vP.y*.5+.5;vec3 c=mix(bot,top,smoothstep(.2,.95,y));
      float s=fbm(vP.xz*6.+uTime*.05)*smoothstep(.7,1.,y);c+=top*s*.35;gl_FragColor=vec4(c,1.);}`});this.sky=new we(new mt(300,32,16),e),this.scene.add(this.sky)}buildFloor(){let e=new fn(170,240,120,170);e.rotateX(-Math.PI/2),this.cell=170/120;let t=this.floorMat=new ot({color:15192994,roughness:.92,metalness:0});this.floorU={uTime:this.U.uTime,uOff:{value:new ne},uCaus:{value:1},uTint:{value:new ge(1,1,1)},uLava:{value:0},uGlow:{value:0}},t.onBeforeCompile=n=>{Object.assign(n.uniforms,this.floorU),n.vertexShader=`uniform vec2 uOff;varying vec3 vW;varying float vH;${ch}
      float hgt(vec2 p){float lane=smoothstep(7.,26.,abs(p.x));return fbm(p*.045)*3.5+fbm(p*.16)*.9+lane*lane*(9.+fbm(p*.03+3.)*10.);}
`+n.vertexShader.replace("#include <beginnormal_vertex>","vec2 wp=position.xz+uOff;float e=.6;float hc=hgt(wp);vec3 objectNormal=normalize(vec3(hgt(wp-vec2(e,0))-hgt(wp+vec2(e,0)),2.*e,hgt(wp-vec2(0,e))-hgt(wp+vec2(0,e))));").replace("#include <begin_vertex>","vec3 transformed=position;transformed.y+=hc;vW=vec3(wp.x,hc,wp.y);vH=hc;"),n.fragmentShader=`uniform float uTime,uCaus,uLava,uGlow;uniform vec3 uTint;varying vec3 vW;varying float vH;${ch}
      float caus(vec2 p){p*=.35;float t=uTime*.6;float c=0.;for(int i=0;i<3;i++){vec2 q=p+vec2(sin(t+p.y*1.7),cos(t*.8+p.x*1.3))*.6;c+=abs(sin(q.x*2.1+t)+sin(q.y*2.3-t*.7));p*=1.6;}return pow(max(0.,1.-c*.28),4.);}
`+n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 float n=fbm(vW.xz*.25);diffuseColor.rgb*=uTint*mix(.72,1.18,n)*mix(1.,.8,smoothstep(2.,14.,vH));`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
 totalEmissiveRadiance+=vec3(.75,.95,1.)*caus(vW.xz)*uCaus*1.1;float lv=smoothstep(.62,.7,fbm(vW.xz*.12+uTime*.03))*uLava;totalEmissiveRadiance+=vec3(1.,.35,.08)*lv*2.5;vec2 gc=floor(vW.xz*1.3);float gs=h21(gc);float gd=length(fract(vW.xz*1.3)-.5);totalEmissiveRadiance+=mix(vec3(.2,.9,1.),vec3(.9,.4,1.),h21(gc+7.))*step(.93,gs)*smoothstep(.22,.0,gd)*(.6+.4*sin(uTime*2.+gs*40.))*uGlow*2.5;`)},this.floor=new we(e,t),this.floor.position.y=-7,this.scene.add(this.floor)}buildRays(){let e=Wx();this.rays=[];for(let t=0;t<9;t++){let n=new Tt({map:e,transparent:!0,depthWrite:!1,blending:tn,opacity:.12,color:14678783,fog:!1}),s=new we(new fn(Qe(3,7),60),n);s.userData={x:Qe(-30,30),z:Qe(-80,-10),ph:Qe(0,6)},s.rotation.z=Qe(-.35,-.15),this.scene.add(s),this.rays.push(s)}}buildSnow(){let t=new Float32Array(4800);for(let r=0;r<1600;r++)t[r*3]=Qe(-40,40),t[r*3+1]=Qe(-8,22),t[r*3+2]=Qe(-90,20);let n=new yt;n.setAttribute("position",new Et(t,3)),this.snowU={uTime:this.U.uTime,uCam:{value:new I},uCol:{value:new ge(16777215)},map:{value:this.glow}};let s=new pt({uniforms:this.snowU,transparent:!0,depthWrite:!1,blending:tn,vertexShader:`uniform float uTime;uniform vec3 uCam;varying float vA;void main(){vec3 p=position;p.y+=sin(uTime*.3+p.x)*.4-uTime*.25;p.x+=sin(uTime*.2+p.z*.3)*.5;
      p=mod(p-uCam+vec3(40.,8.,90.),vec3(80.,30.,110.))+uCam-vec3(40.,8.,90.);vec4 mv=modelViewMatrix*vec4(p,1.);gl_PointSize=clamp(90./-mv.z,1.,6.);vA=smoothstep(90.,10.,-mv.z);gl_Position=projectionMatrix*mv;}`,fragmentShader:"uniform sampler2D map;uniform vec3 uCol;varying float vA;void main(){gl_FragColor=vec4(uCol,texture2D(map,gl_PointCoord).a*.5*vA);}"});this.snow=new er(n,s),this.snow.frustumCulled=!1,this.scene.add(this.snow)}buildSub(){let e=this.sub=new Ht,t=new ys({color:16762941,roughness:.35,metalness:.1,clearcoat:1,clearcoatRoughness:.2}),n=new ot({color:2832970,roughness:.5,metalness:.6}),s=new ot({color:14263361,roughness:.3,metalness:.9}),r=new we(new vs(.8,1.6,8,20),t);r.rotation.x=Math.PI/2,e.add(r);let a=new ys({color:12580607,roughness:.05,metalness:0,transparent:!0,opacity:.38,clearcoat:1,emissive:2781056,emissiveIntensity:.3}),o=new we(new mt(.62,24,16,0,Math.PI*2,0,Math.PI/2),a);o.position.set(0,.55,-.15),e.add(o);let l=new we(new mt(.26,16,12),new ot({color:15910560,roughness:.6}));l.position.set(0,.7,-.1),e.add(l);let c=new we(new mt(.28,16,12,0,Math.PI*2,0,Math.PI/2),new ot({color:5911584,roughness:.8}));c.position.set(0,.74,-.05),e.add(c);let h=new we(new ir(.42,24),new Tt({color:16774864}));h.position.set(0,0,-1.62),h.rotation.y=Math.PI,e.add(h);let u=new we(new Ai(.45,.07,8,24),s);u.position.z=-1.6,e.add(u);for(let g of[-1,1]){let m=new we(new Yt(.9,.08,.5),t);m.position.set(g*.95,-.1,.9),e.add(m);let C=new we(new Gt(.16,.2,.9,12),n);C.rotation.x=Math.PI/2,C.position.set(g*.85,-.35,-.2),e.add(C)}let d=new we(new Yt(.08,.8,.5),t);d.position.set(0,.45,1.2),e.add(d);let f=new we(new Gt(.06,.06,.7,8),s);f.position.set(.35,.9,.3),e.add(f),this.prop=new Ht;for(let g=0;g<3;g++){let m=new we(new Yt(.12,.7,.05),s);m.rotation.z=g*2.094,m.position.y=0,this.prop.add(m)}this.prop.position.z=1.75,e.add(this.prop),this.shield=new we(new mt(1.9,24,16),new Tt({color:8379530,transparent:!0,opacity:0,blending:tn,depthWrite:!1})),e.add(this.shield),this.pal=new Ht;let v=new we(new vs(.28,.8,6,12),new ot({color:9418968,roughness:.4}));v.rotation.x=Math.PI/2,this.pal.add(v);let M=new we(new Ei(.2,.4,8),v.material);M.position.set(0,.3,.1),this.pal.add(M),this.palBody=v,e.add(this.pal),this.pal.visible=!1,this.scene.add(e)}buildGloom(){let t=new Ti(1,3),n=new Float32Array(160);for(let a=0;a<160;a++)n[a]=Math.random()*6.28;t.setAttribute("aPh",new xs(n,1));let s=new ot({color:16777215,roughness:.25,metalness:.05,emissive:3803733,emissiveIntensity:.9});s.onBeforeCompile=a=>{a.uniforms.uTime=this.U.uTime,a.vertexShader=`uniform float uTime;attribute float aPh;
`+a.vertexShader.replace("#include <begin_vertex>","vec3 transformed=position+normal*(sin(position.y*4.+uTime*3.+aPh)*.07+sin(position.x*5.+uTime*2.3+aPh*1.7)*.06+sin(position.z*3.+uTime*1.7)*.05);")},this.gloom=new Zt(t,s,160),this.gloom.instanceMatrix.setUsage(hd),this.gloom.count=0,this.gloom.frustumCulled=!1,this.scene.add(this.gloom),this.eyeW=new Zt(new mt(1,12,10),new ot({color:16777215,roughness:.2,emissive:2236962}),320),this.eyeP=new Zt(new mt(1,10,8),new Tt({color:1312799}),320);for(let a of[this.eyeW,this.eyeP])a.count=0,a.frustumCulled=!1,this.scene.add(a);this.chest=new Zt(new Yt(1.4,1,1),new ot({color:9067051,roughness:.6,emissive:16758087,emissiveIntensity:.25}),12),this.chest.count=0,this.chest.frustumCulled=!1,this.scene.add(this.chest);let r=new Ei(.35,1,8);r.rotateX(Math.PI/2),this.critter=new Zt(r,new ot({color:16755021,emissive:16742959,emissiveIntensity:.6,roughness:.4}),12),this.critter.count=0,this.critter.frustumCulled=!1,this.scene.add(this.critter),this.critHalo=new Zt(new Da(.9,1.1,24),new Tt({color:16773544,transparent:!0,opacity:.7,blending:tn,side:zt,depthWrite:!1}),12),this.critHalo.count=0,this.critHalo.frustumCulled=!1,this.scene.add(this.critHalo),this._m=new tt,this._q=new dn,this._v=new I,this._s=new I,this._c=new ge,this._e=new nn}buildShots(){let e=new mt(1,8,6);this.shots=new Zt(e,new Tt({color:new ge(10484991).multiplyScalar(2.2)}),600),this.shots.count=0,this.shots.frustumCulled=!1,this.scene.add(this.shots),this.bul=new Zt(e,new Tt({color:new ge(16736210).multiplyScalar(1.8)}),300),this.bul.count=0,this.bul.frustumCulled=!1,this.scene.add(this.bul)}buildBoss(){let e=this.boss=new Ht,t=this.bossMat=new ot({color:4855408,roughness:.2,metalness:.1,emissive:5902464,emissiveIntensity:.8});t.onBeforeCompile=o=>{o.uniforms.uTime=this.U.uTime,o.vertexShader=`uniform float uTime;
`+o.vertexShader.replace("#include <begin_vertex>","vec3 transformed=position+normal*(sin(position.y*3.+uTime*2.)*.08+sin(position.x*4.+uTime*2.7)*.06);")};let n=new we(new Ti(1,5),t);e.add(n),this.bossBody=n,this.core=new we(new mt(.45,20,14),new Tt({color:16777215,transparent:!0,opacity:.9})),e.add(this.core),this.tent=[];for(let o=0;o<6;o++){let l=[];for(let c=0;c<7;c++){let h=new we(new mt(.32-c*.03,10,8),t);e.add(h),l.push(h)}this.tent.push(l)}let s=new ot({color:16777215,roughness:.2}),r=new Tt({color:1312799});this.bossEyes=[-1,1].map(o=>{let l=new we(new mt(.24,16,12),s);l.position.set(o*.36,.25,.85);let c=new we(new mt(.12,12,8),r);return c.position.z=.17,l.add(c),e.add(l),l}),e.visible=!1,this.scene.add(e),this.friend=new Ht;let a=new we(new mt(.9,20,14),new ot({color:8379530,emissive:8379530,emissiveIntensity:.7,roughness:.3}));a.scale.set(1,.7,1.4),this.friend.add(a),this.friendBody=a;for(let o of[-1,1]){let l=new we(new mt(.5,12,8),a.material);l.scale.set(1.2,.2,.6),l.position.set(o*.9,0,.2),this.friend.add(l)}this.friend.visible=!1,this.scene.add(this.friend)}buildParticles(){let e=this.PN=2500;this.pp=new Float32Array(e*3),this.pv=new Float32Array(e*3),this.pc=new Float32Array(e*3),this.pl=new Float32Array(e),this.ps=new Float32Array(e),this.pi=0;let t=new yt;t.setAttribute("position",new Et(this.pp,3)),t.setAttribute("color",new Et(this.pc,3)),t.setAttribute("size",new Et(this.ps,1));let n=new pt({uniforms:{map:{value:this.glow}},transparent:!0,depthWrite:!1,blending:tn,vertexColors:!0,vertexShader:"attribute float size;varying vec3 vC;void main(){vC=color;vec4 mv=modelViewMatrix*vec4(position,1.);gl_PointSize=size*300./-mv.z;gl_Position=projectionMatrix*mv;}",fragmentShader:"uniform sampler2D map;varying vec3 vC;void main(){gl_FragColor=vec4(vC,texture2D(map,gl_PointCoord).a);}"});this.parts=new er(t,n),this.parts.frustumCulled=!1,this.scene.add(this.parts)}emit(e,t,n,s,r,a=6,o=.8,l=.5,c=0){let h=this._c.set(r);this.quality==="low"&&(s=Math.ceil(s/2));for(let u=0;u<s;u++){let d=this.pi=(this.pi+1)%this.PN,f=Math.random()*6.283,v=Math.acos(Qe(-1,1)),M=a*Qe(.3,1);this.pp.set([e,t,n],d*3),this.pv.set([Math.sin(v)*Math.cos(f)*M,Math.cos(v)*M+c,Math.sin(v)*Math.sin(f)*M],d*3),this.pc.set([h.r,h.g,h.b],d*3),this.pl[d]=o*Qe(.6,1.2),this.ps[d]=l*Qe(.6,1.3)}}updParticles(e){for(let n=0;n<this.PN;n++){if(this.pl[n]<=0){this.ps[n]=0;continue}this.pl[n]-=e;let s=n*3;this.pp[s]+=this.pv[s]*e,this.pp[s+1]+=this.pv[s+1]*e,this.pp[s+2]+=this.pv[s+2]*e,this.pv[s]*=.95,this.pv[s+1]=this.pv[s+1]*.95+.6*e,this.pv[s+2]*=.95,this.pl[n]<.3&&(this.ps[n]*=.9)}let t=this.parts.geometry.attributes;t.position.needsUpdate=t.color.needsUpdate=t.size.needsUpdate=!0}buildFish(){let e=new Ei(.22,.9,6);e.rotateZ(Math.PI/2);let t=70;this.fish=new Zt(e,new ot({color:16777215,roughness:.4,emissive:1118481}),t),this.fish.frustumCulled=!1,this.fishD=[];for(let n=0;n<7;n++){let s=Qe(-30,30),r=Qe(1,9),a=Qe(-80,0),o=Math.random()<.5?-1:1,l=new ge().setHSL(Math.random(),.7,.6);for(let c=0;c<10;c++)this.fishD.push({s:n,ox:Qe(-2,2),oy:Qe(-1,1),oz:Qe(-2,2),cx:s,cy:r,cz:a,dir:o,ph:Qe(0,6),col:l})}this.fishD.forEach((n,s)=>this.fish.setColorAt(s,n.col)),this.scene.add(this.fish)}buildFx(){this.bombs=[];let e=new mt(1,24,16);for(let t=0;t<6;t++){let n=new we(e,new Tt({color:10217471,transparent:!0,opacity:0,blending:tn,depthWrite:!1}));n.visible=!1,this.scene.add(n),this.bombs.push({m:n,t:1})}this.beam=new we(new Gt(1.2,1.2,60,20,1,!0),new Tt({color:15262975,transparent:!0,opacity:0,blending:tn,depthWrite:!1,side:zt})),this.beam.rotation.x=Math.PI/2,this.scene.add(this.beam)}buildArk(){let e=this.ark=new Ht,t=new ot({color:3112847,roughness:.5,metalness:.3}),n=new ot({color:15983555,roughness:.6}),s=new ot({color:14263361,roughness:.3,metalness:.9}),r=new we(new vs(2.4,9,10,28),t);r.rotation.z=Math.PI/2,r.scale.set(1,1,.85),e.add(r);let a=new we(new Yt(9,.3,3.4),n);a.position.y=2.1,e.add(a);let o=new we(new Gt(1.1,1.4,2.4,20),n);o.position.set(1.5,3.4,0),e.add(o);let l=new we(new mt(1.15,24,12,0,Math.PI*2,0,Math.PI/2),new ys({color:12580607,transparent:!0,opacity:.45,roughness:.05,clearcoat:1}));l.position.set(1.5,4.6,0),e.add(l),this.lantern=new we(new _s(.5,0),new ot({color:15262975,emissive:15262975,emissiveIntensity:.2})),this.lantern.position.set(1.5,5,0),e.add(this.lantern),this.arkLights=[];for(let d=0;d<24;d++){let f=d%2?1:-1,v=Math.floor(d/2),M=new we(new ir(.28,16),new ot({color:547,emissive:16765562,emissiveIntensity:0}));M.position.set(-5+v*.85,.6-v%2*.9,f*2.08),f<0&&(M.rotation.y=Math.PI),e.add(M);let g=new we(new Ai(.3,.05,6,16),s);g.position.copy(M.position),g.rotation.copy(M.rotation),e.add(g),this.arkLights.push(M)}this.arkParts=[];let c=new we(new Gt(.12,.15,6,10),s);c.position.set(-2.5,5,0),e.add(c),this.arkParts.push(c);let h=new we(new fn(3.4,3.6,8,8),new ot({color:16774364,side:zt,roughness:.8}));h.position.set(-2.5,5.2,.05),e.add(h),this.arkParts.push(h);let u=new Ht;for(let d=0;d<4;d++){let f=new we(new Yt(.2,1.6,.1),s);f.rotation.x=d*Math.PI/2,u.add(f)}u.position.set(-7.2,0,0),e.add(u),this.arkProp=u;for(let d=0;d<6;d++){let f=new we(new mt(.22,12,8),new ot({color:16771496,emissive:16763243,emissiveIntensity:1.5}));f.position.set(-4+d*1.8,2.6,d%2?1.5:-1.5),e.add(f),this.arkParts.push(f)}e.position.set(0,-2.6,-6),e.visible=!1,this.scene.add(e)}setArkProgress(e){this.arkLights.forEach((t,n)=>t.material.emissiveIntensity=n<e/2?1.6:0),this.arkParts.forEach((t,n)=>t.visible=e>=2+n*4),this.lantern.material.emissiveIntensity=e>=48?3:.2+e/60}setWorld(e){if(e===this.world)return;this.world=e;let t=ut[e];this.scene.fog.color.set(t.fog),this.skyU.top.value.set(t.fog).lerp(new ge(16777215),e>=4?.05:.35),this.skyU.bot.value.set(t.water).multiplyScalar(.35),this.scene.fog.density=[.02,.024,.022,.018,.026,.03,.026][e],this.floorMat.color.set(t.floor),this.floorU.uCaus.value=[.9,.5,.5,.8,.1,.05,.3][e],this.floorU.uGlow.value=e===5?1:e===6?.5:0,this.floorU.uLava.value=e===4?1:0,this.hemi.intensity=[1.5,1.3,1.2,1.6,.8,.7,.9][e],this.hemi.color.set(t.fog).lerp(new ge(16777215),.5),this.sun.intensity=[2.4,1.8,1.5,2.2,.5,.2,.8][e],this.rays.forEach(n=>{n.visible=e<=3||e===6,n.material.color.set(e===6?14210303:14678783)}),this.snowU.uCol.value.set(e===5?8189951:e===4?16756858:16777215),this.grade.uniforms.uTint.value.set(e===4?16773350:e===5?15134975:16777215),this.fish.visible=e<=3||e===6,this.fishD.forEach((n,s)=>{n.col.setHSL(e===3?.55+Math.random()*.1:e===6?.7+Math.random()*.1:Math.random(),.7,.6),this.fish.setColorAt(s,n.col)}),this.fish.instanceColor.needsUpdate=!0,this.buildDecor(e)}buildDecor(e){for(let o of this.decor)this.scene.remove(o.mesh),o.mesh.geometry.dispose();this.decor=[];let t=this.quality==="low"?.5:this.quality==="med"?.75:1,n=(o,l={})=>new ot({color:o,roughness:.6,...l}),s=o=>{let l=n(o,{side:zt});return l.onBeforeCompile=c=>{c.uniforms.uTime=this.U.uTime,c.vertexShader=`uniform float uTime;
`+c.vertexShader.replace("#include <begin_vertex>","vec3 transformed=position;float k=max(0.,position.y);vec4 ip=instanceMatrix[3];transformed.x+=sin(uTime*1.2+ip.z*.3+k*.4)*k*.08;transformed.z+=cos(uTime+ip.x*.2+k*.3)*k*.05;")},l},r=()=>{let o=new Gt(.15,.3,2,6);return o.translate(0,1,0),o},a={0:[[r(),n(16748451),70,[.6,1.6],0],[new Ti(1,1),n(16757611,{flatShading:!0}),40,[.6,1.4],.2],[new mt(1,14,10),n(13073919,{roughness:.9}),40,[.5,1.2],.1],[new ni(1,0),n(10129274,{flatShading:!0}),40,[.8,2.2],0],[(()=>{let o=new fn(.6,5,1,8);return o.translate(0,2.5,0),o})(),s(5216842),60,[.6,1.2],0]],1:[[(()=>{let o=new fn(1.2,22,1,20);return o.translate(0,11,0),o})(),s(4033082),150,[.7,1.5],0],[new ni(1,0),n(5925450,{flatShading:!0}),50,[1,2.6],0],[(()=>{let o=new fn(.7,8,1,10);return o.translate(0,4,0),o})(),s(8372026),90,[.6,1.2],0]],2:[[(()=>{let o=new Gt(.7,.8,8,12);return o.translate(0,4,0),o})(),n(12104354),40,[.7,1.4],0],[new Yt(3,3,3),n(10130564,{roughness:.8}),40,[.6,1.6],-.5],[new Ai(2.5,.45,8,20,Math.PI),n(11051666),18,[.8,1.3],0],[new Ai(.8,.18,6,12),n(14263361,{metalness:.9,roughness:.3,emissive:4465152}),40,[.6,1.4],.6],[r(),n(6997176),40,[.5,1.2],0]],3:[[new Ti(2,1),n(15267583,{flatShading:!0,roughness:.15,emissive:2775674,emissiveIntensity:.4}),50,[.8,2.6],.5],[(()=>{let o=new Ei(.6,5,6);return o.translate(0,2.5,0),o})(),n(12448767,{flatShading:!0,roughness:.1,emissive:3836586,emissiveIntensity:.5}),60,[.6,1.6],0],[new _s(1.5,0),n(15924223,{flatShading:!0,transparent:!0,opacity:.8}),30,[.8,2],12]],4:[[(()=>{let o=new Gt(.6,1.4,7,9);return o.translate(0,3.5,0),o})(),n(2761254,{flatShading:!0}),45,[.7,1.6],0],[(()=>{let o=new mt(.7,10,8);return o.translate(0,7.2,0),o})(),n(16742959,{emissive:16734751,emissiveIntensity:2.5}),45,[.7,1.6],0],[new ni(1.2,0),n(3812912,{flatShading:!0}),60,[.8,2.4],0]],5:[[new mt(.8,16,10,0,Math.PI*2,0,Math.PI/2),n(8189951,{emissive:3856383,emissiveIntensity:2,transparent:!0,opacity:.8}),40,[.6,1.6],6],[(()=>{let o=new Gt(.1,.2,1.6,6);return o.translate(0,.8,0),o})(),n(16752117,{emissive:16736210,emissiveIntensity:1.8}),80,[.6,1.8],0],[new ni(1.2,0),n(1712200,{flatShading:!0}),50,[.8,2.4],0]],6:[[new _s(1,0),n(14210303,{flatShading:!0,emissive:9075455,emissiveIntensity:1.2,roughness:.1,metalness:.4}),70,[.5,2],.6],[(()=>{let o=new Gt(.9,1.3,10,7);return o.translate(0,5,0),o})(),n(10133704,{flatShading:!0}),30,[.7,1.4],0],[new ni(1.2,0),n(6975128,{flatShading:!0}),40,[.8,2.2],0]]}[e];for(let[o,l,c,[h,u],d]of a){let f=Math.ceil(c*t),v=new Zt(o,l,f);v.frustumCulled=!1;let M=[];for(let g=0;g<f;g++){let m=Math.random()<.5?-1:1;M.push({x:m*Qe(8.5,55),z:this.camZ-Qe(-25,200),s:Qe(h,u),r:Qe(0,6.28),tilt:Qe(-.25,.25),y:d,bob:Qe(0,6)})}this.scene.add(v),this.decor.push({mesh:v,items:M})}}floorH(e,t){return-7}updDecor(){let e=this._m,t=this._q,n=this._e,s=this._v,r=this._s;for(let a of this.decor)a.items.forEach((o,l)=>{o.z>this.camZ+30?o.z-=230:o.z<this.camZ-205&&(o.z+=230);let c=Math.max(0,Math.min(1,(Math.abs(o.x)-7)/19)),h=-5+c*c*14;n.set(o.tilt,o.r,o.tilt*.5),t.setFromEuler(n);let u=this.mode==="hub"&&Math.hypot(o.x,o.z+6)<26;s.set(o.x,h+(o.y>2?o.y+Math.sin(this.t+o.bob)*.8:o.y),o.z),r.setScalar(u?1e-4:o.s),e.compose(s,t,r),a.mesh.setMatrixAt(l,e)}),a.mesh.instanceMatrix.needsUpdate=!0}render(e,t,n){this.t+=e,this.U.uTime.value=this.t,this.grade.uniforms.uTime.value=this.t;let s=this.camera;n?(this.mode="run",this.setWorld(n.w)):this.mode="hub";let r=this.mode==="hub"&&innerWidth>1100?Math.round((Math.min(640,innerWidth-460)+14-86)/2):0;r!==this._off&&(this._off=r,r?s.setViewOffset(innerWidth,innerHeight,r,0,innerWidth,innerHeight):s.clearViewOffset()),this.ark.visible=this.mode==="hub",this.sub.visible=!0;let a=0,o=0;if(this.mode==="run"){a=n.x,o=-n.d,this.sub.position.set(a,Math.sin(this.t*2)*.12,o),this.sub.rotation.set(.04*Math.sin(this.t*1.3),-n.vx*.03,-n.vx*.05);let c=a*.55,h=o+13.5;s.position.lerp(qx(c,7.6,h),Math.min(1,e*6)),Math.abs(s.position.z-h)>30&&s.position.set(c,7.6,h),s.lookAt(a*.75,.2,o-14),this.camZ=o,this.prop.rotation.z+=e*(12+(n.boss?0:18)),this.pal.visible=!!t.companion,t.companion&&(this.pal.position.set(-2.2+Math.sin(this.t*1.7)*.3,.4+Math.sin(this.t*2.3)*.3,.4),this.palBody.material.color.set(t.companion==="dolphin"?9418968:t.companion==="turtle"?8379530:16765286)),this.shield.material.opacity=Math.max(0,this.shield.material.opacity-e*1.5),Math.random()<e*30&&this.emit(a+Qe(-.2,.2),0,o+1.9,1,13629183,1.2,1.2,.18,1.5),this.syncRun(n,e)}else{this.sub.position.set(4.5+Math.sin(this.t*.6)*1.5,1.5+Math.sin(this.t)*.4,-1.5+Math.cos(this.t*.6)*1.5),this.sub.rotation.set(0,this.t*.6+Math.PI/2,Math.sin(this.t)*.1),this.prop.rotation.z+=e*10,this.pal.visible=!1;let c=this.t*.06;s.position.set(Math.sin(c)*23,5.5+Math.sin(this.t*.2),-6+Math.cos(c)*23),s.lookAt(0,1,-6),this.camZ=-6,this.arkProp.rotation.x+=e*1.2,this.gloom.count=this.eyeW.count=this.eyeP.count=this.shots.count=this.bul.count=this.chest.count=this.critter.count=this.critHalo.count=0,this.boss.visible=!1,this.beam.material.opacity=0,Math.random()<e*6&&this.emit(Qe(-6,6),-1,-6+Qe(-2,2),1,13629183,.8,3,.2,1.2)}this.shake>0&&(s.position.x+=Qe(-1,1)*this.shake,s.position.y+=Qe(-1,1)*this.shake,this.shake=Math.max(0,this.shake-e*2.5)),this.hurt=Math.max(0,this.hurt-e*2),this.grade.uniforms.uHurt.value=this.hurt;let l=this.cell;this.floor.position.x=0,this.floor.position.z=Math.round((this.camZ-70)/l)*l,this.floorU.uOff.value.set(this.floor.position.x,this.floor.position.z),this.sky.position.copy(s.position),this.snowU.uCam.value.copy(s.position),this.sun.position.set(s.position.x+6,30,this.camZ+8),this.sun.target.position.set(0,-7,this.camZ-20),this.subLight.position.set(this.sub.position.x,this.sub.position.y+1,this.sub.position.z-3),this.rays.forEach((c,h)=>{let u=c.userData;c.position.set(u.x,14,this.camZ+u.z),c.lookAt(s.position.x,14,s.position.z),c.rotateZ(-.25),c.material.opacity=(.07+.06*Math.sin(this.t*.4+u.ph))*(this.world===6?.6:1),c.position.z>s.position.z&&(u.z-=90)}),this.fishD.forEach((c,h)=>{let u=this.t*2.2*c.dir+c.cz,d=((c.cx+this.t*2.5*c.dir+60)%120+120)%120-60;Math.abs(d)<9&&(d+=Math.sign(d||1)*0),Za.set(d+c.ox,c.cy+c.oy+Math.sin(this.t*2+c.ph)*.3,this.camZ+c.cz+c.oz),Za.z>this.camZ+15&&(c.cz-=90),this._e.set(0,c.dir>0?Math.PI:0,Math.sin(this.t*6+c.ph)*.1),this._q.setFromEuler(this._e),this._s.setScalar(1),this._m.compose(Za,this._q,this._s),this.fish.setMatrixAt(h,this._m)}),this.fish.instanceMatrix.needsUpdate=!0,this.updDecor(),this.updParticles(e);for(let c of this.bombs)c.m.visible&&(c.t+=e*2.2,c.m.scale.setScalar(1+c.t*6),c.m.material.opacity=Math.max(0,.5*(1-c.t)),c.t>=1&&(c.m.visible=!1));this.beam.material.opacity=Math.max(0,this.beam.material.opacity-e*.8),this.friend.visible&&(this.friend.position.y+=e*3,this.friend.position.z-=e*2,this.friend.rotation.y+=e,this.friendT-=e,this.friendT<=0&&(this.friend.visible=!1)),this.quality==="low"?this.renderer.render(this.scene,s):this.composer.render()}syncRun(e,t){let n=this._m,s=this._q,r=this._v,a=this._s,o=this._c,l=0,c=0,h=0,u=0,d=-e.d;for(let g of e.blobs){let m=-g.d,C=Math.sin(this.t*1.5+g.wob)*.4+(g.big?.5:0);if(g.kind==="critter"){u<12&&(s.setFromAxisAngle(hh,Math.sin(this.t*3+g.wob)*.5+Math.PI),r.set(g.x,C+.3,m),a.setScalar(1),n.compose(r,s,a),this.critter.setMatrixAt(u,n),s.copy(this.camera.quaternion),a.setScalar(1+Math.sin(this.t*4)*.1),n.compose(r,s,a),this.critHalo.setMatrixAt(u,n),u++);continue}if(g.kind==="chest"){h<12&&(s.setFromAxisAngle(hh,this.t+g.wob),r.set(g.x,C,m),a.setScalar(1+(1-g.hp/g.max)*.2),n.compose(r,s,a),this.chest.setMatrixAt(h++,n));continue}if(l>=160)continue;let p=g.r*(1+.08*Math.sin(this.t*4+g.wob));s.identity(),r.set(g.x,C,m),a.set(p,p*.9,p),n.compose(r,s,a),this.gloom.setMatrixAt(l,n);let x=g.flash=Math.max(0,(g.flash||0)-t*6);o.set(g.kind==="gold"?16762941:g.big?5909130:6959008),o.lerp(Xx,x*.8),this.gloom.setColorAt(l,o),l++;let S=Math.max(-1,Math.min(1,(e.x-g.x)*.1));for(let _ of[-1,1]){if(c>=320)break;r.set(g.x+_*.36*p,C+.28*p,m+.8*p),a.setScalar(.24*p),n.compose(r,uh,a),this.eyeW.setMatrixAt(c,n),r.x+=S*.08*p,r.z+=.17*p,r.y-=.03*p,a.setScalar(.12*p),n.compose(r,uh,a),this.eyeP.setMatrixAt(c,n),c++}}this.gloom.count=l,this.eyeW.count=this.eyeP.count=c,this.chest.count=h,this.critter.count=this.critHalo.count=u;for(let g of[this.gloom,this.eyeW,this.eyeP,this.chest,this.critter,this.critHalo])g.instanceMatrix.needsUpdate=!0;this.gloom.instanceColor&&(this.gloom.instanceColor.needsUpdate=!0);let f=0;for(let g of e.shots){if(f>=600)break;let m=g.tg,C=Math.atan2(m.x-g.x,-(m.d-g.d));s.setFromAxisAngle(hh,C),r.set(g.x,.1,-g.d),a.set(.24,.24,1.1),n.compose(r,s,a),this.shots.setMatrixAt(f++,n)}this.shots.count=f,this.shots.instanceMatrix.needsUpdate=!0;let v=0;for(let g of e.bullets){if(v>=300)break;r.set(g.x,.2,-g.d),a.setScalar(.42+Math.sin(this.t*10+v)*.06),n.compose(r,uh,a),this.bul.setMatrixAt(v++,n)}this.bul.count=v,this.bul.instanceMatrix.needsUpdate=!0;let M=e.boss;if(this.boss.visible=!!M,M){let g=M.r;this.boss.position.set(M.x,1.2+Math.sin(this.t)*.5,-M.d),this.bossBody.scale.set(g,g*.92,g),this.core.position.set(0,0,0),this.core.scale.setScalar(g*(.55+.45*(1-M.hp/M.max)));let m=M.friend>=0?zn[M.friend].color:16777215;this.core.material.color.set(m),this.core.material.opacity=.25+.6*(1-M.hp/M.max),this.bossMat.emissive.set(M.final?9046586:5902464),this.bossMat.emissiveIntensity=.7+Math.max(0,M.flash||0)*2,M.flash=Math.max(0,(M.flash||0)-t*5),this.bossMat.opacity=1,this.bossBody.material.transparent=!1,this.tent.forEach((C,p)=>C.forEach((x,S)=>{let _=p/6*6.283+Math.sin(this.t*1.5+p)*.4,E=g*(.9+S*.35);x.position.set(Math.cos(_)*E,-g*.4-S*.25+Math.sin(this.t*2+S*.6+p)*.4,Math.sin(_)*E*.6),x.scale.setScalar(g*.5)})),this.bossEyes.forEach((C,p)=>{C.position.set((p?1:-1)*.36*g,.25*g,.85*g),C.scale.setScalar(g)})}for(let g of e.fx)this.onFx(g,e);e.fx.length=0}onFx(e,t){let n=-e.d,s=ut[t.w];switch(e.t){case"pop":this.emit(e.x,.3,n,e.big?40:18,e.kind==="gold"?16765286:13802495,e.big?9:6,.7,.55),this.emit(e.x,.3,n,8,16777215,3,.5,.35),this.emit(e.x,.3,n,4,s.accent,2,1.2,.5,2);break;case"hit":{let r=t.blobs.find(a=>Math.abs(a.x-e.x)<1.6&&Math.abs(a.d-e.d)<1.6);r&&(r.flash=1),t.boss&&Math.abs(t.boss.d-e.d)<t.boss.r+1&&(t.boss.flash=1),this.emit(e.x,.2,n,e.crit?8:3,e.crit?16773544:12582143,e.crit?5:3,.3,e.crit?.6:.35);break}case"bonk":case"hurt":this.shake=Math.max(this.shake,.35),this.hurt=.6,e.t==="bonk"&&this.emit(e.x,.3,n,20,10115792,7,.6,.5);break;case"critter":this.emit(e.x,.3,n,24,16773544,5,.9,.5,2);break;case"shield":this.shield.material.opacity=.5;break;case"bomb":{let r=this.bombs.find(a=>!a.m.visible);r&&(r.m.visible=!0,r.t=0,r.m.position.set(e.x,.3,n)),this.emit(e.x,.3,n,30,10217471,8,.6,.6);break}case"beam":this.beam.position.set(e.x,.3,-t.d-30),this.beam.material.opacity=.9,this.shake=.5;break;case"od":this.emit(t.x,0,-t.d,40,16765286,8,.6,.5);break;case"boss":this.shake=.6;break;case"bossdown":if(this.shake=1,this.emit(e.x,1,n,160,13802495,14,1.4,.9),this.emit(e.x,1,n,80,16773544,9,1.8,.7,2),e.friend>=0){let r=zn[e.friend];this.friend.visible=!0,this.friendT=4,this.friend.position.set(e.x,1,n),this.friendBody.material.color.set(r.color),this.friendBody.material.emissive.set(r.color),this.emit(e.x,1,n,60,r.color,6,2,.8,1)}break}}},hh=new I(0,1,0),Xx=new ge(16777215),uh=new dn,Za=new I,qx=(i,e,t)=>Za.set(i,e,t);var Ka=class{constructor(){this.ctx=null,this.vol=.7,this.music=.5,this.muted=!1,this.mood=0}unlock(){if(this.ctx){this.ctx.resume?.();return}try{let e=this.ctx=new(window.AudioContext||window.webkitAudioContext);this.master=e.createGain(),this.master.connect(e.destination),this.sfxBus=e.createGain(),this.sfxBus.connect(this.master),this.musBus=e.createGain(),this.musBus.connect(this.master);let t=e.sampleRate*2.5,n=e.createBuffer(2,t,e.sampleRate);for(let r=0;r<2;r++){let a=n.getChannelData(r);for(let o=0;o<t;o++)a[o]=(Math.random()*2-1)*Math.pow(1-o/t,3)}this.verb=e.createConvolver(),this.verb.buffer=n;let s=e.createGain();s.gain.value=.5,this.verb.connect(s),s.connect(this.master),this.apply(),this.startMusic()}catch{}}apply(){this.ctx&&(this.master.gain.value=this.muted?0:1,this.sfxBus.gain.value=this.vol*.5,this.musBus.gain.value=this.music*.22)}set(e,t){this.vol=e,this.music=t,this.apply()}tone(e,t=.12,n="sine",s=.3,r=0,a=0,o){if(!this.ctx)return;let l=this.ctx,c=l.currentTime+a,h=l.createOscillator(),u=l.createGain();h.type=n,h.frequency.setValueAtTime(e,c),r&&h.frequency.exponentialRampToValueAtTime(Math.max(30,e*r),c+t),u.gain.setValueAtTime(1e-4,c),u.gain.exponentialRampToValueAtTime(s,c+.012),u.gain.exponentialRampToValueAtTime(1e-4,c+t),h.connect(u),u.connect(o||this.sfxBus),o||u.connect(this.verb),h.start(c),h.stop(c+t+.05)}noise(e=.3,t=.2,n=800){if(!this.ctx)return;let s=this.ctx,r=s.sampleRate*e,a=s.createBuffer(1,r,s.sampleRate),o=a.getChannelData(0);for(let u=0;u<r;u++)o[u]=Math.random()*2-1;let l=s.createBufferSource(),c=s.createBiquadFilter(),h=s.createGain();l.buffer=a,c.type="bandpass",c.frequency.value=n,h.gain.setValueAtTime(t,s.currentTime),h.gain.exponentialRampToValueAtTime(.001,s.currentTime+e),l.connect(c),c.connect(h),h.connect(this.sfxBus),l.start()}ui(){this.tone(1200,.05,"sine",.07)}hover(){this.tone(1800,.03,"sine",.025)}buy(){this.tone(660,.08,"triangle",.16),this.tone(990,.12,"triangle",.14,0,.05)}deny(){this.tone(200,.12,"square",.05,.7)}pop(e=0){this.tone(500+Math.random()*300+e*60,.09,"sine",.12,1.8)}hit(){this.tone(1400+Math.random()*400,.03,"triangle",.025)}hurt(){this.noise(.25,.25,300),this.tone(140,.2,"sawtooth",.08,.6)}bomb(){this.noise(.4,.3,500),this.tone(220,.3,"sine",.15,.5)}critter(){[880,1108,1318,1760].forEach((e,t)=>this.tone(e,.15,"sine",.1,0,t*.05))}launch(){this.noise(.8,.15,400),[392,523,659].forEach((e,t)=>this.tone(e,.3,"triangle",.1,0,t*.08))}boss(){this.tone(110,1.2,"sawtooth",.08,.7),this.tone(82,1.2,"triangle",.1,.8,.2)}freed(){[523,659,784,1047,1319,1568].forEach((e,t)=>this.tone(e,.5,"sine",.14,0,t*.08))}end(){[784,659,523,659,784,1047].forEach((e,t)=>this.tone(e,.22,"triangle",.1,0,t*.07))}chapter(){[392,523,659,784,1047].forEach((e,t)=>this.tone(e,.6,"sine",.14,0,t*.1))}prestige(){this.noise(1.5,.2,300),[262,392,523,784,1047,1568].forEach((e,t)=>this.tone(e,.9,"triangle",.12,0,.2+t*.1))}blip(){this.tone(900,.04,"square",.03)}od(){this.tone(300,.5,"sawtooth",.08,3)}beam(){this.tone(1500,1.2,"sine",.12,.3),this.noise(1,.15,1500)}startMusic(){let e=this.ctx,t=[[0,4,7,11],[5,9,12,16],[-3,0,4,7],[2,5,9,12]],n=0,s=()=>{if(!this.ctx)return;let r=[220,196,174.6,233,207.6,185,164.8][this.mood]||220,a=t[Math.floor(n/8)%4],o=e.currentTime;if(n%8===0&&a.forEach((l,c)=>{let h=e.createOscillator(),u=e.createGain(),d=e.createBiquadFilter();h.type="sawtooth",h.frequency.value=r*Math.pow(2,l/12)/2,h.detune.value=(c-1.5)*6,d.type="lowpass",d.frequency.value=700,u.gain.setValueAtTime(1e-4,o),u.gain.exponentialRampToValueAtTime(.05,o+1.5),u.gain.exponentialRampToValueAtTime(1e-4,o+7.5),h.connect(d),d.connect(u),u.connect(this.musBus),u.connect(this.verb),h.start(o),h.stop(o+8)}),Math.random()<.6){let l=a[Math.floor(Math.random()*4)]+12*(1+Math.floor(Math.random()*2));this.tone(r*Math.pow(2,l/12),1.4,"sine",.06,0,0,this.musBus)}n++,setTimeout(s,1e3)};s()}};var{fmt:We,fmtTime:ja,WORLDS:Ft,UPGRADES:bd,RESEARCH:dh,PEARL_TREE:Yx,TRIDENT_TREE:Zx,MOON_TREE:Jx,CHAPTERS:cr,ACTS:fh,CREW:ph,FRIENDS:mh,RARITY:hr,GEAR_SLOTS:ri,AFFIXES:Md,RELICS:Qa,EXP_TIMES:Sd,COMPANIONS:gh,FEATURE_CH:ur,projTime:xh}=Nr,Ze=i=>document.querySelector(i),ai=i=>String(i).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),eo={shell:["\u{1F41A}","Shells"],pearls:["\u{1F9AA}","Pearls"],tridents:["\u{1F531}","Tridents"],moonstones:["\u{1F319}","Moonstones"],critters:["\u{1F420}","Critters"],scrap:["\u{1F529}","Scrap"]};Ft.forEach(i=>eo[i.mat]=[i.icon,i.matName]);var Kx=(i,e)=>e==="shell"?i.shell:i.mats[e]??i[e]??0,oi=(i,e)=>`<span class="cost">${eo[i][0]} ${We(e)}</span>`,wd=[{id:"dive",icon:"\u{1F30A}",label:"Dive"},{id:"story",icon:"\u{1F4D6}",label:"Story"},{id:"shop",icon:"\u{1F527}",label:"Workshop"},{id:"lab",icon:"\u{1F9EA}",label:"Lab",feat:"lab"},{id:"exp",icon:"\u{1F9ED}",label:"Voyages",feat:"exp"},{id:"forge",icon:"\u2692\uFE0F",label:"Forge",feat:"gear"},{id:"crew",icon:"\u{1F465}",label:"Crew",feat:"crew"},{id:"tides",icon:"\u{1F319}",label:"Tides",feat:"tide"},{id:"log",icon:"\u{1F3C6}",label:"Logbook"}],dr=i=>`${i}.jpg`;function Ed(i){let e={tab:"dive",shopTab:"Harpoon",buyMode:1,selItem:null,expW:null,modalStack:[]},t=()=>i.g;e.toast=(p,x,S="",_="")=>{let E=document.createElement("div");E.className=`toast ${_}`,E.innerHTML=`<div class="ti">${p}</div><div><b>${ai(x)}</b>${S?`<span>${S}</span>`:""}</div>`;let T=Ze("#toasts");for(T.appendChild(E);T.children.length>4;)T.firstChild.remove();setTimeout(()=>{E.classList.add("out"),setTimeout(()=>E.remove(),320)},3600)};let n=Ze("#tip"),s=null;document.addEventListener("mouseover",p=>{let x=p.target.closest("[data-tip]");if(x===s)return;if(s=x,!x||!t().settings.tips){n.classList.remove("show");return}n.innerHTML=x.dataset.tip,n.classList.add("show");let S=x.getBoundingClientRect(),_=n.getBoundingClientRect(),E=S.left+S.width/2-_.width/2,T=S.bottom+8;T+_.height>innerHeight-8&&(T=S.top-_.height-8),n.style.left=Math.max(8,Math.min(innerWidth-_.width-8,E))+"px",n.style.top=T+"px"}),e.modal=({title:p,sub:x="",body:S="",buttons:_=[{label:"OK",cls:"btn-primary",key:"Enter"}],wide:E=!1,dismiss:T=!0,onClose:y})=>{let b=Ze("#modal-root"),P=document.createElement("div"),D=document.createElement("div");P.className="mback",D.className=`modal ${E?"wide":""}`,D.innerHTML=`${T?'<button class="icon-btn x" data-tip="Close <kbd>Esc</kbd>">\u2715</button>':""}<h2>${p}</h2>${x?`<div class="sub">${x}</div>`:""}<div class="mbody">${S}</div><div class="mfoot"></div>`;let O={m:D,back:P,close:null,buttons:_,dismiss:T},V=X=>{O.closed||(O.closed=!0,D.classList.add("out"),P.classList.add("out"),setTimeout(()=>{D.remove(),P.remove()},200),e.modalStack=e.modalStack.filter(G=>G!==O),y?.(),X?.())};return O.close=V,_.forEach(X=>{let G=document.createElement("button");G.className=`btn ${X.cls||"btn-ghost"}`,G.innerHTML=X.label+(X.key?` <kbd>${X.key===" "?"Space":X.key}</kbd>`:""),G.onclick=()=>{i.sfx.ui(),X.keep?X.onClick?.(D):V(()=>X.onClick?.(D))},D.querySelector(".mfoot").appendChild(G),X.el=G}),T&&(P.onclick=()=>V(),D.querySelector(".x").onclick=()=>V()),b.append(P,D),e.modalStack.push(O),O},e.topModal=()=>e.modalStack[e.modalStack.length-1];let r=null;e.say=(p,x)=>{if(!p?.length){x?.();return}r={lines:p,i:0,done:x,typing:null},Ze("#dialog").classList.remove("hide"),a()};function a(){let[p,x]=r.lines[r.i].split("|"),S=Ze("#dialog");S.querySelector(".portrait").src=dr(p),S.querySelector(".dlg-name").textContent=ph[p]?.name||p;let _=S.querySelector(".dlg-text"),E=0;clearInterval(r.typing),_.textContent="",r.full=x,r.typing=setInterval(()=>{E+=2,_.textContent=x.slice(0,E),E%6===0&&i.sfx.blip(),E>=x.length&&(clearInterval(r.typing),r.typing=null)},22)}e.dlgNext=()=>{if(!r)return!1;let p=Ze("#dialog .dlg-text");if(r.typing)return clearInterval(r.typing),r.typing=null,p.textContent=r.full,!0;if(r.i++,r.i>=r.lines.length){let x=r.done;r=null,Ze("#dialog").classList.add("hide"),x?.()}else a();return!0},e.inDialog=()=>!!r,Ze("#dialog").onclick=()=>e.dlgNext();function o(){let p=t(),x=Ft[i.world],S=[["shell",p.shell,"Shells: spend in the Workshop and Lab"],[x.mat,p.mats[x.mat],`${x.matName}: gathered in ${x.name}`]];(st(p,"tide")||p.pearls)&&S.push(["pearls",p.pearls,"Pearls: from Ebb Tides, spend on the Pearl tree"]),(p.tridents||p.n.rips)&&S.push(["tridents",p.tridents,"Tridents: from Riptides"]),(p.moonstones||p.n.moons)&&S.push(["moonstones",p.moonstones,"Moonstones: from Moonrises"]),st(p,"crew")&&S.push(["critters",p.critters,"Critters: rescued in dives, used to train crew"]),st(p,"gear")&&S.push(["scrap",p.scrap,"Scrap: salvage gear, craft and upgrade at the Forge"]);let _=Ze("#res"),E=S.map(T=>T[0]).join();_.dataset.sig!==E&&(_.dataset.sig=E,_.innerHTML=S.map(([T,,y])=>`<div class="chip" data-k="${T}" data-tip="${y}"><span class="ic">${eo[T][0]}</span><span class="v"></span></div>`).join("")),S.forEach(([T,y])=>{let b=_.querySelector(`[data-k="${T}"] .v`),P=We(y);b.textContent!==P&&(b.textContent=P)})}e.bump=p=>{let x=Ze(`#res [data-k="${p}"]`);x&&(x.classList.remove("bump"),x.offsetWidth,x.classList.add("bump"))};function l(){let p=t(),x=xt.now(),S={};return S.story=p.chState==="goal"&&ki(p)&&!p.finished&&p.mats[zi(p).mat]>=zi(p).n||p.chState==="build"&&x>=p.projEnd,S.lab=st(p,"lab")&&p.labQ.length<Fi(p),S.exp=st(p,"exp")&&(p.exps.some(_=>x>=_.end)||p.exps.length<Oi(p)),S.forge=st(p,"gear")&&p.boxes.length>0,S.log=!!p.daily?.list.some(_=>_.done&&!_.claimed),S.tides=st(p,"tide")&&hi(p)>=Math.max(1,p.pearls*.5+1),S.crew=st(p,"crew")&&Object.keys(p.crew).some(_=>Ds(p,_)&&p.crew[_]<40&&p.critters>=Bs(p.crew[_])),S}function c(){let p=t(),x=l();Ze("#rail").innerHTML=wd.map((S,_)=>{let E=S.feat&&!st(p,S.feat);return`<button class="rail-btn ${e.tab===S.id?"on":""} ${E?"locked":""}" data-tab="${S.id}" data-tip="${E?`\u{1F512} Unlocks in Chapter ${ur[S.feat]+1}`:`${S.label} <kbd>${_+1}</kbd>`}"><span class="hk">${_+1}</span><span class="ri">${E?"\u{1F512}":S.icon}</span>${S.label}${!E&&x[S.id]?'<span class="dot"></span>':""}</button>`}).join("")}Ze("#rail").onclick=p=>{let x=p.target.closest("[data-tab]");x&&e.setTab(x.dataset.tab)},e.setTab=p=>{let x=wd.find(S=>S.id===p);if(x.feat&&!st(t(),x.feat)){i.sfx.deny(),e.toast("\u{1F512}",`${x.label} is locked`,`Unlocks in Chapter ${ur[x.feat]+1}`);return}e.tab=p,i.sfx.ui(),e.render(!0)};function h(){let p=t(),x=Ze("#mission"),S=xt.now();if(p.finished){x.innerHTML='<div class="act">Epilogue \xB7 Endless Sea</div><h3>\u{1F315} The sea shines again</h3><div class="muted small">The Moon Lantern is back in the sky. Keep diving for records, Mythic gear, every achievement and deeper Moonrises.</div>';return}let _=cr[p.chapter],[E,T]=Ir(p),y=E>=T,b=zi(p),P=Ft[_.g[2]??_.w],D="";p.chState==="goal"?y?D=`<button class="btn btn-primary btn-full" data-act="proj" data-cost="${b.n}" data-cur="${b.mat}">\u{1F528} Restore: ${ai(_.proj)} \xB7 ${b.n?oi(b.mat,b.n)+" \xB7 ":""}\u23F1 ${ja(xh(p.chapter))}</button>`:D=(_.g[0]==="dist"||_.g[0]==="boss"||_.g[0]==="mat")&&on(p,_.g[2]??_.w)?`<button class="btn btn-ghost btn-sm btn-full" data-act="goto" data-w="${_.g[2]??_.w}">Dive in ${P.name} \u2192</button>`:"":S<p.projEnd?D=`<div class="goal"><span>\u{1F528} ${ai(_.proj)}</span><span data-end="${p.projEnd}"></span></div><div class="pbar gold"><i data-start="${p.projEnd-xh(p.chapter)*1e3}" data-endbar="${p.projEnd}"></i></div><div class="small muted" style="margin-top:6px">Keeps building while you dive or close the game.</div>`:D=`<button class="btn btn-teal btn-full" data-act="claim">\u2728 Finish restoration: ${ai(_.proj)}</button>`,x.innerHTML=`<div class="row" style="display:flex;gap:12px;align-items:center"><img class="who" src="${dr(_.who)}" alt=""><div style="flex:1;min-width:0"><div class="act">Act ${_.act+1} \xB7 ${fh[_.act]} \xB7 Chapter ${p.chapter+1}/48</div><h3>${ai(_.t)}</h3></div></div>
      ${p.chState==="goal"?`<div class="goal"><span>${y?"\u2705":"\u{1F3AF}"} ${Lr(_)}</span><span class="${y?"good":""}">${_.g[0]==="boss"||_.g[0]==="gear"?y?"Done":"":`${We(Math.min(E,T))} / ${We(T)}`}</span></div><div class="pbar"><i style="width:${Math.min(100,E/T*100)}%"></i></div>`:""}${D}`}Ze("#mission").onclick=p=>m(p);function u(){let p=Ft[i.world];Ze("#cta").innerHTML=`<button class="btn btn-primary dive-btn" data-act="dive"><span>\u{1F30A}</span><span>Dive<small>${p.name} \xB7 best ${We(t().best[i.world])}m</small></span> <kbd>Space</kbd></button>`}Ze("#cta").onclick=p=>m(p);let d={};d.dive=()=>{let p=t(),x='<div class="sec">Choose a sea</div><div class="grid" style="grid-template-columns:1fr">';Ft.forEach((E,T)=>{let y=on(p,T),b=mh.filter(O=>O.world===T),P="#"+E.fog.toString(16).padStart(6,"0"),D="#"+E.water.toString(16).padStart(6,"0");x+=`<div class="card wcard ${y?"":"lock"} ${i.world===T?"sel":""}" data-act="${y?"world":"lockedw"}" data-w="${T}"><div class="swatch" style="background:linear-gradient(160deg,${P},${D})">${y?E.icon:"\u{1F512}"}</div>
        <div style="flex:1"><h4>${E.name}</h4><div class="desc" style="margin:2px 0 0">${y?E.desc:`Unlocks in Chapter ${Ls(T)+1}`}</div>${y?`<div class="meta"><span class="tag" data-tip="Best this Tide / best ever">\u{1F4CF} ${We(p.best[T])}m \xB7 ${We(p.bestEver[T])}m</span><span class="tag" data-tip="Guardians freed">${'<span class="gdots">'+b.map(O=>`<i class="${p.friends[O.i]?"on":""}"></i>`).join("")+"</span>"}</span><span class="tag">${E.icon} ${We(p.mats[E.mat])}</span></div>`:""}</div></div>`}),x+="</div>";let S=st(p,"tide")?p.ptree.p_pal|0:0;S&&(x+='<div class="sec">Companion</div><div class="seg">'+["none","dolphin","turtle","puffer"].slice(0,S+1).map(E=>`<button class="${(p.companion||"none")===E?"on":""}" data-act="pal" data-k="${E}" ${E!=="none"?`data-tip="${gh[E].desc}"`:""}>${E==="none"?"None":gh[E].icon+" "+gh[E].name}</button>`).join("")+"</div>");let _=Us(p);return x+=`<div class="sec">Your sub</div><div class="stats"><div class="stat"><span class="muted small">Damage</span><b>${We(_.dmg)}</b></div><div class="stat"><span class="muted small">Fire rate</span><b>${_.rate.toFixed(1)}/s \xD7${_.multi}</b></div><div class="stat"><span class="muted small">Hull</span><b>${We(_.hull)}</b></div><div class="stat"><span class="muted small">Dive time</span><b>${_.oxy.toFixed(0)}s</b></div><div class="stat"><span class="muted small">Speed</span><b>${_.speed.toFixed(1)} m/s</b></div><div class="stat"><span class="muted small">Start depth</span><b>${Math.round(_.start*100)}% of best</b></div></div>`,{head:"<div><h2>Dive</h2><p>Pick a sea, then dive. Your harpoons fire on their own, so steer with WASD.</p></div>",body:x}},d.story=()=>{let p=t(),x="",S=cr[Math.min(p.chapter,47)];return x+=`<div class="story-hero"><img src="${dr(S.who)}" alt=""><div><div class="muted small">${p.finished?"The End\u2026 for now":`Act ${S.act+1}: ${fh[S.act]}`}</div><h3 style="font-size:22px">${p.finished?"The Moon Lantern shines":ai(S.t)}</h3><button class="btn btn-ghost btn-sm" style="margin-top:8px" data-act="replay">\u{1F4AC} Replay dialogue</button></div></div>`,fh.forEach((_,E)=>{x+=`<div class="sec">Act ${E+1} \xB7 ${_}</div>`;for(let T=E*12;T<E*12+12;T++){let y=cr[T],b=T<p.chapter||p.finished?"done":T===p.chapter?"cur":"fut";x+=`<div class="chap ${b}"><div class="n">${b==="done"?"\u2713":T+1}</div><div style="flex:1"><div class="t">${b==="fut"&&T>p.chapter+1?"???":ai(y.t)}</div><div class="small muted">${b==="fut"&&T>p.chapter+1?"A mystery for later":Lr(y)+" \xB7 \u{1F528} "+ai(y.proj)+" ("+ja(xh(T))+")"}</div></div></div>`}}),{head:"<div><h2>Story</h2><p>Help the crew rebuild the Ark, chapter by chapter. Restorations take real time.</p></div>",body:x}},d.shop=()=>{let p=t(),S=`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px"><div class="seg">${["Harpoon","Sub","Materials"].map(_=>`<button class="${e.shopTab===_?"on":""}" data-act="stab" data-k="${_}">${_}</button>`).join("")}</div>
      <div class="seg" data-tip="Buy amount">${[1,10,0].map(_=>`<button class="${e.buyMode===_?"on":""}" data-act="bmode" data-n="${_}">${_?"\xD7"+_:"Max"}</button>`).join("")}</div></div><div class="grid">`;for(let _ of bd.filter(E=>E.tab===e.shopTab)){let E=Fs(p,_),T=p.upg[_.id]|0,y=T>=_.max,[b,P]=f(p,_),D=_.ch&&p.chapter<_.ch?`Unlocks in Chapter ${_.ch+1}`:`Find ${eo[_.cur][1]} in ${Ft.find(O=>O.mat===_.cur)?.name}`;S+=`<div class="card ${E?"":"lock"}"><div class="row"><div class="ic">${_.icon}</div><div><h4>${_.name}</h4></div><span class="lv">Lv ${T}${_.max<9999?" / "+_.max:""}</span></div><div class="desc">${E?_.desc:"\u{1F512} "+D}</div>
        ${E?`<button class="btn ${y?"btn-ghost":"btn-teal"} btn-full" data-act="buy" data-id="${_.id}" data-cost="${P}" data-cur="${_.cur}" ${y?"disabled":""}>${y?"Maxed":`${b>1?`+${b} \xB7 `:""}${oi(_.cur,P)}`}</button>`:""}</div>`}return{head:"<div><h2>Workshop</h2><p>Pebble upgrades the Minnow. Shells for the basics, sea materials for big boosts.</p></div>",body:S+"</div>"}};function f(p,x){let S=p.upg[x.id]|0,_=0,E=0,T=e.buyMode||1e9,y=yr(p,x.cur);for(;_<T&&S+_<x.max;){let b=Ni(x,S+_);if(_>0&&E+b>y)break;if(_===0&&e.buyMode===0&&b>y){E=b,_=1;break}if(E+=b,_++,_>500)break}return[Math.max(1,_),E||Ni(x,S)]}d.lab=()=>{let p=t(),x=xt.now(),S=`<div class="sec">Research benches (${p.labQ.length}/${Fi(p)})</div>`;for(let _=0;_<Fi(p);_++){let E=p.labQ[_];if(E){let T=dh.find(y=>y.id===E.id);S+=`<div class="card" style="margin-bottom:8px"><div class="row"><div class="ic">${T.icon}</div><div style="flex:1"><h4>${T.name} \u2192 Lv ${(p.research[T.id]|0)+1}</h4><div class="pbar violet" style="margin-top:6px"><i data-start="${E.start}" data-endbar="${E.end}"></i></div></div><span class="lv" data-end="${E.end}"></span></div></div>`}else S+=`<div class="card" style="margin-bottom:8px;border-style:dashed"><div class="muted">\u{1F9EA} Empty bench. Pick a project below; it keeps working while you're away.</div></div>`}S+='<div class="sec">Projects</div><div class="grid">';for(let _ of dh){let E=p.research[_.id]|0,T=p.labQ.some(D=>D.id===_.id),y=E>=_.max,b=wr(_,E),P=_.ch&&p.chapter<_.ch;S+=`<div class="card ${P?"lock":""}"><div class="row"><div class="ic">${_.icon}</div><h4>${_.name}</h4><span class="lv">Lv ${E}/${_.max}</span></div><div class="desc">${P?`\u{1F512} Unlocks in Chapter ${_.ch+1}`:_.desc}</div>${P?"":`<button class="btn btn-violet btn-full" data-act="res" data-id="${_.id}" data-cost="${b}" data-cur="shell" ${y||T?"disabled":""}>${y?"Complete":T?"Researching\u2026":`${oi("shell",b)} \xB7 \u23F1 ${ja(Sr(p,_,E))}`}</button>`}</div>`}return{head:"<div><h2>Luma's Lab</h2><p>Slow but permanent upgrades. Research never resets.</p></div>",body:S+"</div>"}},d.exp=()=>{let p=t(),x=xt.now();e.expW??(e.expW=xn(p));let S=`<div class="sec">Docks (${p.exps.length}/${Oi(p)})</div>`;if(p.exps.forEach((_,E)=>{let T=Ft[_.w],y=x>=_.end;S+=`<div class="card" style="margin-bottom:8px"><div class="row"><div class="ic">${T.icon}</div><div style="flex:1"><h4>Voyage to ${T.name} \xB7 ${Sd.find(b=>b.m===_.m)?.label}</h4>${y?'<div class="good small">Back home with treasure!</div>':`<div class="pbar" style="margin-top:6px"><i data-start="${_.start}" data-endbar="${_.end}"></i></div>`}</div>${y?`<button class="btn btn-primary" data-act="expc" data-i="${E}">Collect</button>`:`<span class="lv" data-end="${_.end}"></span>`}</div></div>`}),p.exps.length<Oi(p)){S+=`<div class="sec">Send a voyage</div><div class="card"><div class="row" style="margin-bottom:10px"><span class="muted">Destination</span><select data-act="expw" style="margin-left:auto">${Ft.map((_,E)=>on(p,E)?`<option value="${E}" ${e.expW===E?"selected":""}>${_.icon} ${_.name}</option>`:"").join("")}</select></div><div class="grid" style="grid-template-columns:repeat(2,1fr)">`;for(let _ of Sd){let E=Er(p,e.expW,_.m);S+=`<div class="card" style="background:rgba(0,0,0,.18)"><h4>\u23F1 ${_.label}</h4><div class="desc">\u{1F41A} ${We(E.shell)} \xB7 ${Ft[e.expW].icon} ${We(E.mat)}<br>\u{1F420} ${E.critters} \xB7 \u{1F529} ${E.scrap}${E.box?` \xB7 \u{1F381} ${E.box}`:""}</div><button class="btn btn-teal btn-full btn-sm" data-act="exps" data-m="${_.m}">Send</button></div>`}S+="</div></div>"}return{head:"<div><h2>Voyages</h2><p>Wren sends friends on trips. They come back with loot, even while you're away.</p></div>",body:S}};let v=(p,x)=>{let S=Gn(p,x);return{harpoon:`+${We(30*S)}% damage`,hull:`+${We(40*S)}% hull`,engine:`+${(.8*S).toFixed(1)}s dive time`,charm:`+${We(30*S)}% Shells`}[x.slot]},M=(p,x,S="gitem")=>`<div class="${S} ${e.selItem===x.id?"sel":""} ${Object.values(p.equip).includes(x.id)?"eq":""}" style="--rc:${hr[x.r].color}" data-act="gsel" data-id="${x.id}" data-tip="<b style='color:${hr[x.r].color}'>${Os(x)}</b><br>${v(p,x)}${x.aff?"<br>"+Md[x.aff.k].replace("{v}",x.aff.v):""}<br><span class='muted'>Level ${x.lvl}/${Bi(x)}</span>"><span class="glv">${x.lvl?"+"+x.lvl:""}</span><div class="gi">${ri[x.slot].icon}</div><div class="gn" style="color:${hr[x.r].color}">${ri[x.slot].names[x.tier]}</div></div>`;d.forge=()=>{let p=t(),x='<div class="sec">Equipped</div><div class="slotrow">';for(let T in ri){let y=p.gear.find(b=>b.id===p.equip[T]);x+=y?M(p,y,"gslot"):`<div class="gslot"><div class="gi" style="opacity:.3">${ri[T].icon}</div><div class="gn muted">${ri[T].name}<br>empty</div></div>`}x+="</div>";let S=p.gear.find(T=>T.id===e.selItem);if(S){let T=Object.values(p.equip).includes(S.id),y=Ar(S),b=S.lvl>=Bi(S);x+=`<div class="card" style="margin-top:12px;border-color:${hr[S.r].color}"><div class="row"><div class="ic">${ri[S.slot].icon}</div><div><h4 style="color:${hr[S.r].color}">${Os(S)}</h4><div class="small muted">${v(p,S)}${S.aff?" \xB7 "+Md[S.aff.k].replace("{v}",S.aff.v):""} \xB7 Lv ${S.lvl}/${Bi(S)}</div></div></div>
      <div style="display:flex;gap:8px;margin-top:10px"><button class="btn btn-teal" data-act="geq" ${T?"disabled":""}>${T?"Equipped":"Equip"}</button><button class="btn btn-primary" data-act="gup" data-cost="${y}" data-cur="scrap" ${b?"disabled":""}>${b?"Max level":"Upgrade "+oi("scrap",y)}</button><button class="btn btn-coral" data-act="gsal" ${T?"disabled":""}>Salvage +${Tr(S)} \u{1F529}</button></div></div>`}let _=Cr(p,xn(p));x+=`<div class="sec">Treasure & crafting</div><div class="card"><div class="row" style="flex-wrap:wrap;gap:8px"><button class="btn btn-primary" data-act="boxes" ${p.boxes.length?"":"disabled"}>\u{1F381} Open ${p.boxes.length} box${p.boxes.length===1?"":"es"}</button><button class="btn btn-ghost" data-act="salall" data-tip="Salvage every unequipped item that is weaker than what you wear">\u267B\uFE0F Salvage weaker</button></div>
      <div class="desc" style="margin-top:10px">Craft a guaranteed Uncommon-or-better item from ${Ft[xn(p)].name}: ${oi("scrap",_.scrap)} + ${oi(_.mat,_.matN)}</div><div class="seg">${Object.entries(ri).map(([T,y])=>`<button data-act="craft" data-k="${T}" data-cost="${_.scrap}" data-cur="scrap">${y.icon} ${y.name}</button>`).join("")}</div></div>`;let E=[...p.gear].sort((T,y)=>Gn(p,y)-Gn(p,T));return x+=`<div class="sec">Inventory (${E.length})</div>${E.length?`<div class="inv">${E.map(T=>M(p,T)).join("")}</div>`:'<div class="muted">Free Guardians, open chests and send voyages to find gear.</div>'}`,{head:"<div><h2>Tusk's Forge</h2><p>Gear from Common to Mythic. Equip the best, salvage the rest.</p></div>",body:x}},d.crew=()=>{let p=t(),x='<div class="sec">Crew</div><div class="grid">';for(let S of Object.keys(ph).filter(_=>_!=="kai")){let _=ph[S],E=Ds(p,S),T=p.crew[S],y=Bs(T);x+=`<div class="card ${E?"":"lock"}"><div class="crew"><img src="${dr(S)}" style="${E?"":"filter:brightness(0) opacity(.5)"}" alt=""><div style="flex:1"><h4>${E?_.name:"???"}</h4><div class="small muted">${E?_.role:"Joins later in the story"}</div><div class="small" style="margin-top:3px">${E?_.desc:""}</div></div><span class="lv">Lv ${T}/40</span></div>
        ${E?`<button class="btn btn-teal btn-full" style="margin-top:10px" data-act="train" data-k="${S}" data-cost="${y}" data-cur="critters" ${T>=40?"disabled":""}>Train ${oi("critters",y)}</button>`:""}</div>`}return x+=`</div><div class="sec">Friends freed (${Ui(p)}/21)</div><div class="friends">${mh.map(S=>`<div class="fr ${p.friends[S.i]?"on":""}" style="--fc:#${S.color.toString(16).padStart(6,"0")}" data-tip="${p.friends[S.i]?`<b>${S.name}</b> the ${S.kind}<br>+${S.stat==="crit"?"1% crit":S.stat==="rate"?"4% fire rate":"8% "+{shell:"Shells",dmg:"damage",mat:"materials",hull:"hull"}[S.stat]}`:`Guardian at ${S.at}m in ${Ft[S.world].name}`}">${p.friends[S.i]?S.name:"?"}</div>`).join("")}</div>`,{head:"<div><h2>Crew & Friends</h2><p>Train the crew with rescued critters. Every freed Guardian helps forever.</p></div>",body:x}};let g=(p,x,S,_,E)=>`<div class="grid">${x.map(T=>{let y=p[S][T.id]|0,b=y>=T.max,P=Mr(T,y),D=T.req&&!p[S][T.req];return`<div class="card ${D?"lock":""}"><div class="row"><div class="ic">${T.icon}</div><h4>${T.name}</h4><span class="lv">Lv ${y}${T.max<9999?"/"+T.max:""}</span></div><div class="desc">${D?"\u{1F512} Needs "+x.find(O=>O.id===T.req).name:T.desc}</div>${D?"":`<button class="btn btn-teal btn-full" data-act="tree" data-tree="${E}" data-id="${T.id}" data-cost="${P}" data-cur="${_}" ${b?"disabled":""}>${b?"Maxed":oi(_,P)}</button>`}</div>`}).join("")}</div>`;d.tides=()=>{let p=t(),x="",S=hi(p);if(x+=`<div class="prest ebb"><h3>\u{1F30A} Ebb Tide</h3><div class="small muted">Resets Shells, Workshop Shell upgrades and this Tide's best depths. Keeps the story, materials, Lab, gear, crew and friends.</div><div class="gain">+${We(S)} \u{1F9AA}</div><div class="small muted">Based on your deepest dive this Tide (${We(Dr(p))} global depth). Dive deeper for more.</div><button class="btn btn-teal" style="margin-top:10px" data-act="tide" ${S>=1?"":"disabled"}>Ebb Tide</button></div>`,x+=`<div class="sec">Pearl tree \xB7 ${We(p.pearls)} \u{1F9AA}</div>`+g(p,Yx,"ptree","pearls","pearl"),st(p,"rip")){let _=Hi(p);x+=`<div class="sec">Riptide</div><div class="prest rip"><h3>\u{1F300} Riptide</h3><div class="small muted">A giant Ebb Tide: also resets Pearls, the Pearl tree, material upgrades and materials.</div><div class="gain">+${We(_)} \u{1F531}</div><div class="small muted">Based on Pearls earned since the last Riptide (${We(p.ripPearls)}).</div><button class="btn btn-teal" style="margin-top:10px" data-act="rip" ${_>=1?"":"disabled"}>Riptide</button></div><div class="sec">Trident tree \xB7 ${We(p.tridents)} \u{1F531}</div>`+g(p,Zx,"ttree","tridents","trident")}else x+=`<div class="sec">Riptide</div><div class="card lock"><div class="muted">\u{1F512} Unlocks in Chapter ${ur.rip+1}</div></div>`;if(st(p,"moon")){let _=Vi(p);x+=`<div class="sec">Moonrise</div><div class="prest moon"><h3>\u{1F315} Moonrise</h3><div class="small muted">The biggest reset: also resets Tridents and the Trident tree. Moonstones carry the Lantern's power.</div><div class="gain">+${We(_)} \u{1F319}</div><div class="small muted">Based on Tridents earned since the last Moonrise (${We(p.moonTri)}).</div><button class="btn btn-violet" style="margin-top:10px" data-act="moon" ${_>=1?"":"disabled"}>Moonrise</button></div><div class="sec">Moon tree \xB7 ${We(p.moonstones)} \u{1F319}</div>`+g(p,Jx,"mtree","moonstones","moon"),p.relics.length&&(x+=`<div class="sec">Relics</div><div class="agrid">${p.relics.map(E=>`<div class="ach on"><div class="ai">\u{1F3FA}</div><div><b>${Qa[E][0]}</b><div class="small muted">${Qa[E][1]}</div></div></div>`).join("")}</div>`)}else st(p,"rip")&&(x+=`<div class="sec">Moonrise</div><div class="card lock"><div class="muted">\u{1F512} Unlocks in Chapter ${ur.moon+1}</div></div>`);return{head:"<div><h2>Tides</h2><p>Reset to grow stronger. Each layer unlocks new powers.</p></div>",body:x}},d.log=()=>{let p=t(),x="";Eo(p),p.daily?x+=`<div class="sec">Daily contracts \xB7 new ones every day</div><div class="grid" style="grid-template-columns:1fr">${p.daily.list.map((_,E)=>`<div class="card"><div class="row"><div class="ic">\u{1F4DC}</div><div style="flex:1"><h4>${_.txt}</h4><div class="pbar gold" style="margin-top:6px"><i style="width:${_.p/_.n*100}%"></i></div></div><button class="btn ${_.claimed?"btn-ghost":"btn-primary"}" data-act="daily" data-i="${E}" ${_.done&&!_.claimed?"":"disabled"}>${_.claimed?"Claimed":_.rew.critters?`+${_.rew.critters} \u{1F420}`:_.rew.scrap?`+${_.rew.scrap} \u{1F529}`:"+1 \u{1F381}"}</button></div></div>`).join("")}</div>`:x+=`<div class="card lock"><div class="muted">\u{1F4DC} Daily contracts unlock in Chapter ${ur.daily+1}</div></div>`;let S=p.n;return x+=`<div class="sec">Stats</div><div class="stats"><div class="stat"><span class="muted small">Dives</span><b>${We(S.runs)}</b></div><div class="stat"><span class="muted small">Gloom cleaned</span><b>${We(S.kills)}</b></div><div class="stat"><span class="muted small">Guardians freed</span><b>${We(S.bosses)}</b></div><div class="stat"><span class="muted small">Critters rescued</span><b>${We(S.critters)}</b></div><div class="stat"><span class="muted small">Tides / Riptides / Moonrises</span><b>${S.tides} / ${S.rips} / ${S.moons}</b></div><div class="stat"><span class="muted small">Played since</span><b>${new Date(p.created).toLocaleDateString()}</b></div></div>`,x+=`<div class="sec">Achievements ${vr(p)}/${Gi.length} \xB7 each gives +3% damage, hull and Shells</div><div class="agrid">${Gi.map(_=>`<div class="ach ${p.achs[_.id]?"on":""}" data-tip="${_.desc}"><div class="ai">\u{1F3C5}</div><div><b style="font-family:var(--h);font-weight:600">${_.name}</b><div class="small muted">${_.desc}</div></div></div>`).join("")}</div>`,{head:"<div><h2>Logbook</h2><p>Daily contracts, stats and achievements.</p></div>",body:x}},e.render=(p=!1)=>{if(i.mode!=="hub")return;let x=d[e.tab]();Ze("#panel-head").innerHTML=x.head;let S=Ze("#panel-body"),_=p?0:S.scrollTop;S.innerHTML=x.body,S.scrollTop=_,p&&(S.classList.remove("enter"),S.offsetWidth,S.classList.add("enter")),c(),h(),u(),o(),e.tick()},e.tick=()=>{let p=t(),x=xt.now();o(),document.querySelectorAll("[data-cost][data-cur]").forEach(S=>{S.hasAttribute("disabled")||S.classList.toggle("disabled",Kx(p,S.dataset.cur)<+S.dataset.cost)}),document.querySelectorAll("[data-end]").forEach(S=>{S.textContent=ja((+S.dataset.end-x)/1e3)}),document.querySelectorAll("[data-endbar]").forEach(S=>{let _=+S.dataset.start,E=+S.dataset.endbar;S.style.width=Math.min(100,(x-_)/(E-_)*100)+"%"})},e.refreshRail=()=>{c(),h()};function m(p){let x=p.target.closest("[data-act]");if(!x||x.disabled)return;let S=t(),_=x.dataset.act,E=x.dataset.id;if(x.classList.contains("disabled")&&!["world","stab","bmode","gsel","pal"].includes(_)){i.sfx.deny(),x.animate([{transform:"translateX(-4px)"},{transform:"translateX(4px)"},{transform:"none"}],{duration:200});return}let T=(y="buy")=>{i.sfx[y](),i.save(),e.render()};switch(_){case"dive":i.launch(i.world);break;case"goto":i.world=+x.dataset.w,i.launch(i.world);break;case"world":i.world=+x.dataset.w,i.sfx.ui(),e.render();break;case"lockedw":i.sfx.deny();break;case"pal":S.companion=x.dataset.k==="none"?null:x.dataset.k,T("ui");break;case"stab":e.shopTab=x.dataset.k,i.sfx.ui(),e.render();break;case"bmode":e.buyMode=+x.dataset.n,i.sfx.ui(),e.render();break;case"buy":{let y=bd.find(D=>D.id===E),b=0,[P]=f(S,y);for(let D=0;D<P&&br(S,E);D++)b++;b?(T(),e.bump(y.cur)):i.sfx.deny();break}case"tree":uo(S,x.dataset.tree,E)?T(("upgrade"in i.sfx,"buy")):i.sfx.deny();break;case"res":fo(S,E)?(e.toast("\u{1F9EA}","Research started",dh.find(y=>y.id===E).name),T()):i.sfx.deny();break;case"expw":break;case"exps":po(S,e.expW,+x.dataset.m)&&(e.toast("\u26F5","Voyage launched",`${Ft[e.expW].name}`),T());break;case"expc":{let y=Co(S,+x.dataset.i);y&&(e.toast("\u{1F389}","Voyage returned!",`\u{1F41A} ${We(y.shell)} \xB7 ${Ft[y.w].icon} ${We(y.mat)} \xB7 \u{1F420} ${y.critters} \xB7 \u{1F529} ${y.scrap}${y.box?` \xB7 \u{1F381} ${y.box}`:""}`,"gold"),T("critter"),i.checkAchs());break}case"gsel":e.selItem=+E,i.sfx.ui(),e.render();break;case"geq":Pr(S,e.selItem),T();break;case"gup":xo(S,e.selItem)?T():i.sfx.deny();break;case"gsal":Rr(S,e.selItem)&&(e.selItem=null,T());break;case"salall":{let y=0;for(let b of[...S.gear]){let P=S.gear.find(D=>D.id===S.equip[b.slot]);P&&b.id!==P.id&&Gn(S,b)<=Gn(S,P)&&Rr(S,b.id)&&y++}e.toast("\u267B\uFE0F",`Salvaged ${y} item${y===1?"":"s"}`),T();break}case"boxes":{let y=[];for(;S.boxes.length;)y.push(vo(S));y.forEach(P=>{S.equip[P.slot]||Pr(S,P.id)});let b=y.sort((P,D)=>D.r-P.r)[0];e.modal({title:"\u{1F381} Treasure!",sub:`You opened ${y.length} box${y.length>1?"es":""}.`,body:`<div class="inv">${y.map(P=>M(S,P)).join("")}</div>`,buttons:[{label:"Nice!",cls:"btn-primary",key:"Enter"}]}),T("freed"),i.checkAchs();break}case"craft":{let y=go(S,x.dataset.k);y?(e.selItem=y.id,e.toast(ri[y.slot].icon,`Crafted ${Os(y)}`,"",y.r>=3?"gold":""),T("freed"),i.checkAchs()):(i.sfx.deny(),e.toast("\u{1F529}","Not enough materials","You need Scrap and the sea material shown."));break}case"train":_o(S,x.dataset.k)?(T(),i.checkAchs()):i.sfx.deny();break;case"daily":To(S,+x.dataset.i)&&(e.toast("\u{1F4DC}","Contract complete!","","gold"),T("critter"),i.checkAchs());break;case"tide":case"rip":case"moon":i.confirmPrestige(_);break;case"proj":yo(S)?(e.toast("\u{1F528}","Restoration started",cr[S.chapter].proj),T()):i.sfx.deny();break;case"claim":i.claimChapter();break;case"replay":{let y=cr[Math.min(S.chapter,47)];e.say(y.lines);break}}}Ze("#panel").onclick=m,Ze("#panel").onchange=p=>{p.target.dataset.act==="expw"&&(e.expW=+p.target.value,e.render())},document.addEventListener("mouseover",p=>{if(p.target.closest?.(".btn,.rail-btn,.wcard")){let x=p.target.closest(".btn,.rail-btn,.wcard");x!==e._hov&&(e._hov=x,i.sfx.hover())}});let C="";return e.hud=p=>{let x=p.S,S=Ft[p.w];Ze("#h-world").innerHTML=`<span class="ic">${S.icon}</span>${S.name}`,Ze("#h-depth").textContent=`${Math.floor(p.d).toLocaleString()} m`,Ze("#h-next").textContent=p.boss?p.boss.final?"\u26A0 The Gloom Heart":"\u26A0 Guardian ahead! Dodge the bubbles":`Next Guardian at ${p.nextBoss.toLocaleString()} m`;let _=Math.max(0,1-p.t/p.tmax),E=Math.max(0,p.hull/x.hull),T=Ze(".bar.oxy"),y=Ze(".bar.hull");T.querySelector("i").style.transform=`scaleX(${_})`,T.querySelector("span").textContent=`\u{1FAE7} ${Math.ceil(p.tmax-p.t)}s`,y.querySelector("i").style.transform=`scaleX(${E})`,y.querySelector("span").textContent=`\u{1F6E1}\uFE0F ${Math.ceil(E*100)}%`,y.classList.toggle("low",E<.3),Ze("#h-haul").innerHTML=`<div class="chip"><span class="ic">\u{1F41A}</span>${We(p.shell)}</div><div class="chip"><span class="ic">${S.icon}</span>${We(p.mats)}</div>${p.critters?`<div class="chip"><span class="ic">\u{1F420}</span>${p.critters}</div>`:""}${p.boxes?`<div class="chip"><span class="ic">\u{1F381}</span>${p.boxes}</div>`:""}`;let b=p.boss,P=Ze("#h-boss");if(P.classList.toggle("hide",!b),b){let V=b.friend>=0?mh[b.friend]:null,X=b.final?"\u{1F49C} The Gloom Heart":V&&!t().friends[V.i]?`Gloomed ${V.name} the ${V.kind}`:`Gloom Guardian \xB7 ${b.D}m`;X!==C&&(P.querySelector(".bn").textContent=X,C=X),P.querySelector("i").style.transform=`scaleX(${Math.max(0,b.hp/b.max)})`,P.querySelector("i").style.width="100%"}let D="";x.od&&(D+=`<div class="abil ${p.od.cd<=0?"ready":""}" data-tip="Overdrive">\u{1F4A5}<div class="cd" style="transform:scaleY(${Math.max(0,p.od.cd/x.od.cd)})"></div><kbd>Space</kbd></div>`),x.beam&&(D+=`<div class="abil ${p.beam.cd<=0?"ready":""}">\u{1F526}<div class="cd" style="transform:scaleY(${Math.max(0,p.beam.cd/x.beam.cd)})"></div><kbd>E</kbd></div>`);let O=Ze("#h-abil");O.dataset.v!==D&&(O.innerHTML=D,O.dataset.v=D)},Ze("#h-pause").onclick=()=>i.pause(),e.summary=(p,x,S,_)=>{let E=Ft[p.w],T=[[`\u{1F41A} ${We(p.shell)}`,"Shells"],[`${E.icon} ${We(p.mats)}`,E.matName],[`\u{1F4CF} ${Math.floor(p.maxD).toLocaleString()} m`,x.rec?"New record!":"Distance",x.rec],[`\u{1FAE7} ${p.kills}`,"Gloom cleaned"]];p.bossKills&&T.push([`\u{1F451} ${p.bossKills}`,"Guardians freed",!0]),p.critters&&T.push([`\u{1F420} ${p.critters}`,"Critters rescued"]),p.boxes&&T.push([`\u{1F381} ${p.boxes}`,"Treasure boxes",!0]),p.newFriends.forEach(b=>T.push([`\u{1F496} ${b.name}`,`the ${b.kind} joined!`,!0])),p.relic!==null&&T.push([`\u{1F3FA} ${Qa[p.relic][0]}`,Qa[p.relic][1],!0]);let y=p.reason==="hull"?"Your hull gave out. Upgrade Hull Plating or dodge more!":p.reason==="quit"?"You surfaced early.":"Out of air! Oxygen Tanks give longer dives.";e.modal({title:x.rec?"\u{1F31F} New record!":"\u{1FAE7} Dive complete",sub:y,body:`<div class="loot">${T.map(([b,P,D],O)=>`<div class="li ${D?"hl":""}" style="animation-delay:${O*60}ms"><b>${b}</b><span class="small muted">${P}</span></div>`).join("")}</div>`,buttons:[{label:"\u{1F3E0} Back to the Ark",cls:"btn-ghost",key:"Esc",onClick:_},{label:"\u{1F30A} Dive again",cls:"btn-primary",key:" ",onClick:S}],dismiss:!1,wide:!0})},e.settings=()=>{let p=t().settings,x=e.modal({title:"\u2699\uFE0F Settings",body:`
    <div class="field"><label>Sound effects</label><input type="range" min="0" max="1" step="0.05" value="${p.vol}" data-s="vol"></div>
    <div class="field"><label>Music</label><input type="range" min="0" max="1" step="0.05" value="${p.music}" data-s="music"></div>
    <div class="field"><label>Graphics quality</label><div class="seg">${["low","med","high"].map(S=>`<button class="${p.quality===S?"on":""}" data-q="${S}">${{low:"Low",med:"Medium",high:"High"}[S]}</button>`).join("")}</div></div>
    <div class="field"><label>Screen shake</label><button class="toggle ${p.shake?"on":""}" data-t="shake"></button></div>
    <div class="field"><label>Tooltips</label><button class="toggle ${p.tips?"on":""}" data-t="tips"></button></div>
    <div class="sec" style="margin-top:16px">Save</div><div class="small muted" style="margin-bottom:6px">Autosaves every few seconds. Copy this code to back up or move your save.</div>
    <textarea id="savebox" readonly>${Fo(t())}</textarea>
    <div style="display:flex;gap:8px;margin-top:8px;flex-wrap:wrap"><button class="btn btn-ghost btn-sm" data-x="copy">\u{1F4CB} Copy</button><button class="btn btn-ghost btn-sm" data-x="import">\u{1F4E5} Import\u2026</button><button class="btn btn-coral btn-sm" data-x="reset" style="margin-left:auto">Reset game</button></div>
    <div class="sec" style="margin-top:16px">Keys</div><div class="small muted" style="line-height:1.9"><kbd>Space</kbd> dive / continue \xB7 <kbd>1</kbd>\u2013<kbd>9</kbd> tabs \xB7 <kbd>Esc</kbd> close / back \xB7 <kbd>M</kbd> mute \xB7 <kbd>O</kbd> settings<br>In a dive: <kbd>WASD</kbd> or arrows steer \xB7 <kbd>Space</kbd> Overdrive \xB7 <kbd>E</kbd> Moon Beam \xB7 <kbd>P</kbd> pause</div>`,buttons:[{label:"Done",cls:"btn-primary",key:"Enter"}],wide:!0});x.m.addEventListener("input",S=>{let _=S.target.dataset.s;_&&(p[_]=+S.target.value,i.applySettings())}),x.m.addEventListener("click",S=>{let _=S.target.dataset.q,E=S.target.dataset.t,T=S.target.dataset.x;if(_&&(p.quality=_,x.m.querySelectorAll("[data-q]").forEach(y=>y.classList.toggle("on",y.dataset.q===_)),i.applySettings()),E&&(p[E]=!p[E],S.target.classList.toggle("on",p[E]),i.applySettings()),T==="copy"){let y=x.m.querySelector("#savebox");y.select(),navigator.clipboard?.writeText(y.value).catch(()=>document.execCommand("copy")),e.toast("\u{1F4CB}","Save code copied")}if(T==="import"){let y=e.modal({title:"\u{1F4E5} Import save",body:'<textarea id="imp" placeholder="Paste your save code here" style="user-select:text"></textarea>',buttons:[{label:"Cancel"},{label:"Import",cls:"btn-primary",onClick:b=>{try{i.replaceSave(Oo(b.querySelector("#imp").value)),e.toast("\u2705","Save imported")}catch{e.toast("\u26A0\uFE0F","That save code didn't work")}}}]});setTimeout(()=>y.m.querySelector("#imp").focus(),50)}T==="reset"&&e.modal({title:"\u26A0\uFE0F Reset everything?",sub:"This erases your whole adventure. It cannot be undone.",buttons:[{label:"Keep playing",cls:"btn-ghost"},{label:"Erase save",cls:"btn-coral",onClick:()=>i.hardReset()}]})})},Ze("#btn-settings").onclick=()=>{i.sfx.ui(),e.settings()},Ze("#btn-mute").onclick=()=>i.toggleMute(),e}var On=i=>document.querySelector(i),z=window.__tk={g:Uo()||Vn(),mode:"hub",run:null,world:0,paused:!1,keys:{},sfx:new Ka};z.world=z.g.world||0;on(z.g,z.world)||(z.world=0);var Mn=z.scene=new Ja(On("#c3d")),Oe=z.ui=Ed(z);z.save=()=>Do(z.g);z.applySettings=()=>{let i=z.g.settings;z.sfx.set(i.vol,i.music),Mn.quality!==i.quality&&Mn.setQuality(i.quality),z.save()};z.toggleMute=()=>{z.sfx.muted=!z.sfx.muted,z.sfx.apply(),On("#btn-mute").textContent=z.sfx.muted?"\u{1F507}":"\u{1F50A}",Oe.toast(z.sfx.muted?"\u{1F507}":"\u{1F50A}",z.sfx.muted?"Sound off":"Sound on")};z.replaceSave=i=>{z.g=i,z.world=0,z.save(),Oe.render(!0)};z.hardReset=()=>{localStorage.removeItem(Is),z.g=Vn(),z.world=0,location.reload()};z.checkAchs=()=>{for(let i of Ao(z.g))Oe.toast("\u{1F3C5}",`Achievement: ${i.name}`,`${i.desc} \xB7 +3% power`,"gold")};z.launch=i=>{z.mode!=="hub"||Oe.topModal()||Oe.inDialog()||on(z.g,i)&&(z.sfx.unlock(),z.sfx.launch(),z.world=i,z.run=Po(z.g,i),z.mode="run",z.paused=!1,z.sfx.mood=i,On("#app").className="run",On("#tip").classList.remove("show"),z.g.n.runs===0&&setTimeout(()=>Oe.toast("\u{1F3AE}","Steer with WASD or the arrow keys","Your harpoons aim and fire on their own. Dodge the Gloom!"),600))};function jx(){let i=z.run,e=Lo(z.g,i);z.mode="summary",z.sfx.end(),z.save();for(let n of i.newFriends)Oe.toast("\u{1F496}",`${n.name} the ${n.kind} is free!`,"A new Friend joins the Ark","gold");z.checkAchs();let t=()=>{z.mode="hub",z.run=null,On("#app").className="hub",Oe.render(!0),Qx()};Oe.summary(i,e,()=>{t(),z.launch(z.world)},t)}z.pause=()=>{z.mode!=="run"||z.paused||(z.paused=!0,Oe.modal({title:"\u23F8 Paused",body:'<div class="muted">Take a breather. The Gloom will wait.</div>',buttons:[{label:"\u2699\uFE0F Settings",keep:!0,onClick:()=>Oe.settings()},{label:"\u{1F3C1} Surface now",cls:"btn-coral",onClick:()=>{z.paused=!1,z.run.over=!0,z.run.reason="quit"}},{label:"\u25B6 Resume",cls:"btn-primary",key:"Enter",onClick:()=>{z.paused=!1}}],onClose:()=>{z.paused=!1}}))};z.claimChapter=()=>{let i=z.g,e=i.chapter;if(bo(i)){z.sfx.chapter(),z.save(),Oe.toast("\u2728",`Chapter ${e+1} complete!`,Qt[e].proj+" restored","gold");for(let[t,n]of Object.entries(Rs))n===i.chapter&&Oe.toast("\u{1F513}","New: "+{lab:"Luma's Lab",tide:"Ebb Tide",exp:"Voyages",daily:"Daily contracts",crew:"Crew training",gear:"Tusk's Forge",rip:"Riptide",moon:"Moonrise"}[t],"Check the menu on the left","good");if(ut.forEach((t,n)=>{Ls(n)===i.chapter&&n>0&&Oe.toast(t.icon,`New sea: ${t.name}`,t.desc,"good")}),z.checkAchs(),Oe.render(),i.finished){Oe.modal({title:"\u{1F315} The Moon Lantern shines!",sub:"You finished the story of Tidekeeper.",body:'<div class="muted">The sea is bright again and every friend is home. Keep diving in endless mode: chase records, Mythic gear, every achievement and deeper Moonrises.</div>',buttons:[{label:"Hooray!",cls:"btn-primary",key:"Enter"}]});return}Oe.say(Qt[i.chapter].lines)}};z.confirmPrestige=i=>{let e=z.g,t={tide:["\u{1F30A} Ebb Tide?",`You gain <b>${ui(hi(e))} \u{1F9AA} Pearls</b>.`,"Shells, Workshop Shell upgrades and this Tide's best depths reset.",Mo,"\u{1F9AA}"],rip:["\u{1F300} Riptide?",`You gain <b>${ui(Hi(e))} \u{1F531} Tridents</b>.`,"Pearls, the Pearl tree, material upgrades and materials also reset.",So,"\u{1F531}"],moon:["\u{1F315} Moonrise?",`You gain <b>${ui(Vi(e))} \u{1F319} Moonstones</b>.`,"Tridents and the Trident tree also reset, plus everything a Riptide resets.",wo,"\u{1F319}"]}[i];Oe.modal({title:t[0],sub:t[1],body:`<div class="muted">${t[2]}</div><div style="margin-top:10px" class="good small">Always kept: story, Lab research, gear, crew, friends, achievements and voyages.</div>`,buttons:[{label:"Not yet"},{label:"Do it!",cls:i==="moon"?"btn-violet":"btn-teal",key:"Enter",onClick:()=>{let n=t[3](e);n&&(z.sfx.prestige(),Mn.shake=.6,Oe.toast(t[4],`+${ui(n)}`,"You feel the tide's power","gold"),z.world=Math.min(z.world,xn(e)),z.save(),z.checkAchs(),Oe.render())}}]})};function Qx(){let i=z.g;i.finished||i.chState==="goal"&&ki(i)&&!z._pinged?.[i.chapter]&&((z._pinged??(z._pinged={}))[i.chapter]=1,Oe.toast("\u{1F3AF}","Mission complete!","Start the restoration in the mission panel","good"))}addEventListener("keydown",i=>{let e=i.code;if(z.keys[e]=!0,i.target.tagName==="TEXTAREA"||i.target.tagName==="INPUT"&&i.target.type!=="range")return;if(z.sfx.unlock(),!On("#title").classList.contains("hide")){(e==="Space"||e==="Enter")&&(i.preventDefault(),Cd());return}if(Oe.inDialog()){(e==="Space"||e==="Enter"||e==="Escape")&&(i.preventDefault(),Oe.dlgNext());return}let t=Oe.topModal();if(t){i.preventDefault();let n=t.buttons.find(s=>s.key===" "&&e==="Space"||s.key==="Enter"&&(e==="Enter"||e==="Space"&&!t.buttons.some(r=>r.key===" "))||s.key==="Esc"&&e==="Escape");n?n.el.click():e==="Escape"&&t.dismiss&&t.close();return}if(z.mode==="run"){(e==="KeyP"||e==="Escape")&&z.pause(),e==="Space"&&i.preventDefault();return}z.mode==="hub"&&(e==="Space"?(i.preventDefault(),z.launch(z.world)):/^Digit[1-9]$/.test(e)?Oe.setTab(["dive","story","shop","lab","exp","forge","crew","tides","log"][+e.slice(5)-1]):e==="KeyM"?z.toggleMute():e==="KeyO"&&Oe.settings())});addEventListener("keyup",i=>{z.keys[i.code]=!1});addEventListener("blur",()=>{z.keys={}});document.addEventListener("pointerdown",()=>z.sfx.unlock(),{once:!0});function ev(){let i=z.keys;return{x:(i.KeyD||i.ArrowRight?1:0)-(i.KeyA||i.ArrowLeft?1:0),y:(i.KeyW||i.ArrowUp?1:0)-(i.KeyS||i.ArrowDown?1:0),od:!!i.Space,beam:!!i.KeyE}}var Td=performance.now(),vh=0,_h=0,yh=0,tv=0;function Ad(i){requestAnimationFrame(Ad);let e=Math.min(.05,(i-Td)/1e3);if(Td=i,z.mode==="run"&&!z.paused&&!Oe.topModal()){let t=z.run;vh+=e;let n=t.fx.length;for(tv=t.hull;vh>=1/60&&(Io(z.g,t,1/60,ev()),vh-=1/60,!t.over););for(let s of t.fx)s.t==="pop"?z.sfx.pop(s.big?2:0):s.t==="hurt"?z.sfx.hurt():s.t==="bomb"?z.sfx.bomb():s.t==="critter"?(z.sfx.critter(),Oe.toast("\u{1F420}","Critter rescued!")):s.t==="boss"?z.sfx.boss():s.t==="bossdown"?z.sfx.freed():s.t==="od"?z.sfx.od():s.t==="beam"?z.sfx.beam():s.t==="hit"&&Math.random()<.3&&z.sfx.hit();if(z.g.settings.shake||(Mn.shake=0),Oe.hud(t),t.over){Mn.render(e,z.g,t),jx();return}}if(Mn.render(e,z.g,z.mode==="run"||z.mode==="summary"?z.run:null),z.g.settings.shake||(Mn.shake=0),_h+=e,_h>.25){_h=0;for(let t of Ur(z.g))if(t.type==="research"){let n=Li.find(s=>s.id===t.id);Oe.toast(n.icon,`${n.name} finished!`,`Now level ${z.g.research[t.id]}`,"good"),z.save(),z.mode==="hub"&&Oe.render()}else t.type==="project"&&!z._projPing&&(z._projPing=z.g.projEnd,Oe.toast("\u{1F528}","Restoration ready!","Finish it in the mission panel","good"),z.mode==="hub"&&Oe.refreshRail());z._projPing&&z._projPing!==z.g.projEnd&&(z._projPing=0),z.mode==="hub"&&(Oe.tick(),Mn.setArkProgress(z.g.finished?48:z.g.chapter),Mn.setWorld(z.world))}yh+=e,yh>10&&(yh=0,z.save(),z.mode==="hub"&&Oe.refreshRail())}function Cd(){On("#title").classList.add("hide"),z.sfx.unlock(),z.g.seenIntro=!0,z.save(),Oe.say(Qt[0].lines)}z.applySettings();Oe.render(!0);Mn.setArkProgress(z.g.chapter);if(!z.g.seenIntro)On("#title").classList.remove("hide"),On("#btn-start").onclick=Cd;else{let i=Ro(z.g),e=Ur(z.g),t=z.g.exps.filter(n=>xt.now()>=n.end).length;if(i&&i.secs>120){let n=e.filter(s=>s.type==="research").map(s=>Li.find(r=>r.id===s.id).name);Oe.modal({title:"\u{1F319} Welcome back!",sub:`You were away for ${Bo(i.secs)}.`,body:`<div class="loot"><div class="li hl"><b>\u{1F41A} ${ui(i.shell)}</b><span class="small muted">Tidal drift Shells</span></div>${n.length?`<div class="li"><b>\u{1F9EA} ${n.length}</b><span class="small muted">Research finished</span></div>`:""}${t?`<div class="li"><b>\u26F5 ${t}</b><span class="small muted">Voyages back home</span></div>`:""}${z.g.chState==="build"&&xt.now()>=z.g.projEnd?'<div class="li hl"><b>\u{1F528} Ready</b><span class="small muted">Restoration finished</span></div>':""}</div>`,buttons:[{label:"Let's go!",cls:"btn-primary",key:"Enter"}]})}z.save(),Oe.render(!0)}addEventListener("beforeunload",()=>z.save());document.addEventListener("visibilitychange",()=>{document.hidden&&z.save()});requestAnimationFrame(Ad);})();
