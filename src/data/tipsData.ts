export interface Tip {
  id: string;
  title: string;
  content: string;
  icon: string; // emoji
}

export interface TipCategory {
  id: string;
  title: string;
  tips: Tip[];
}

export const tipCategories: TipCategory[] = [
  {
    id: "combat",
    title: "⚔️ Combat & Survival",
    tips: [
      { id: "c1", title: "Always Keep Quen Active", content: "Quen is the most important sign in the game. It absorbs one hit completely. On Death March difficulty, recast it after every hit you take. Upgrade to Active Quen to heal from absorbed damage.", icon: "🛡️" },
      { id: "c2", title: "Dodge, Don't Roll", content: "Sidestepping (dodge) is faster and uses less stamina than rolling. Roll only to escape area attacks. Most enemy combos can be avoided with a single sidestep.", icon: "🏃" },
      { id: "c3", title: "Oils Stack With Everything", content: "Sword oils don't expire on Death March if you have the Fixative skill. Apply the correct oil for every fight — it's a flat 10-50% damage boost that stacks with everything else.", icon: "🗡️" },
      { id: "c4", title: "Parry Humans, Dodge Monsters", content: "You can parry most human enemies for a free riposte. Never try to parry monsters — it doesn't work and you'll take full damage. Against humans, hold parry and wait for them to attack.", icon: "⚔️" },
      { id: "c5", title: "Use Bestiary Weaknesses", content: "Every monster has specific weaknesses listed in the Bestiary. Check it before every contract. The right oil + sign + bomb combination can make a boss fight trivially easy.", icon: "📖" },
      { id: "c6", title: "Food Heals in Real-Time", content: "Food regenerates health over time (20 seconds). On lower difficulties, eat food during fights instead of wasting potions. On Death March, food healing is reduced — rely on Swallow potion instead.", icon: "🍖" },
    ],
  },
  {
    id: "money",
    title: "💰 Money Making",
    tips: [
      { id: "m1", title: "Sell Weapons to Blacksmiths, Armor to Armorers", content: "You get better prices selling to the correct vendor type. Swords/axes go to blacksmiths, armor/gloves/boots go to armorers. Never sell to general merchants.", icon: "💰" },
      { id: "m2", title: "Loot Everything in Skellige", content: "Skellige's ocean is filled with smuggler's caches containing weapons worth 200-500 crowns each. Sail around with the boat and loot them all. Easy 50,000+ crowns.", icon: "🚢" },
      { id: "m3", title: "Exchange Foreign Currency", content: "Visit Vivaldi's Bank in Novigrad to exchange Florens and Orens for Crowns. You accumulate tons of foreign currency without realizing it.", icon: "🏦" },
      { id: "m4", title: "Dismantle Before Selling Rare Materials", content: "Some items contain rare crafting materials when dismantled (like shells → pearls). Check what components items break down into before selling.", icon: "🔨" },
      { id: "m5", title: "Hanse Bases = Infinite Money (Blood & Wine)", content: "In Toussaint, the three Hanse bases respawn enemies that drop valuable loot. Farm them for weapons to sell. Each run is worth ~5,000 crowns.", icon: "🏰" },
    ],
  },
  {
    id: "exploration",
    title: "🗺️ Exploration & Secrets",
    tips: [
      { id: "e1", title: "Get All Places of Power", content: "There are 30+ Places of Power in the game, each giving a free ability point. That's 30 free levels worth of skill points. Prioritize finding them all.", icon: "✨" },
      { id: "e2", title: "Explore Underwater", content: "Many treasure caches are underwater. Use the crossbow to kill Drowners/Sirens, then dive. Skellige has the most underwater loot in the game.", icon: "🌊" },
      { id: "e3", title: "Check Every Notice Board", content: "Notice boards unlock quest markers and points of interest on your map. Always check them when entering a new village.", icon: "📋" },
      { id: "e4", title: "Return to White Orchard", content: "Many players forget to fully explore White Orchard before leaving. Go back — there are Places of Power and quests you probably missed.", icon: "🏡" },
      { id: "e5", title: "Abandoned Sites = Free Merchants", content: "Clearing monster nests at abandoned sites restores them to settlements with merchants and fast travel points. Always clear them.", icon: "🏘️" },
    ],
  },
  {
    id: "missable",
    title: "⚠️ Missable Content",
    tips: [
      { id: "ms1", title: "Keira Metz — Don't Let Her Go to Radovid", content: "After completing 'For the Advancement of Learning,' convince Keira to go to Kaer Morhen instead of Radovid. If she goes to Radovid, she dies. If you send her to Kaer Morhen, she helps in the battle AND Lambert survives.", icon: "💀" },
      { id: "ms2", title: "Save Before the Isle of Mists", content: "Going to the Isle of Mists locks you out of several side quests. Complete ALL of these first: Now or Never (Triss), Last Wish (Yen), Cabaret, A Deadly Plot, Redania's Most Wanted.", icon: "🔒" },
      { id: "ms3", title: "Don't Romance Both Triss AND Yennefer", content: "If you tell BOTH Triss and Yennefer you love them, they team up to prank you and you end up alone. Pick ONE. This is permanent and irreversible.", icon: "💔" },
      { id: "ms4", title: "The 5 Ciri Decisions for Best Ending", content: "1) Snowball fight (positive) 2) Visit Skjall's grave 3) Don't take Emhyr's money 4) Let her trash the lab 5) Go with her to the Lodge meeting but let her go in alone. Get all 5 right for the best ending.", icon: "👸" },
      { id: "ms5", title: "Brothers in Arms — Recruit Everyone", content: "Before Kaer Morhen, complete all ally recruitment quests. Every ally you recruit fights in the battle. Missing allies means missing outcomes and possible character deaths.", icon: "🤝" },
      { id: "ms6", title: "Collect All Gwent Cards Before Isle of Mists", content: "Some Gwent cards are only available from NPCs who become unavailable after certain quests. Play every merchant and innkeeper you meet.", icon: "🃏" },
    ],
  },
  {
    id: "builds",
    title: "🧬 Character Builds",
    tips: [
      { id: "b1", title: "Cat School (Fast Attack DPS)", content: "Light armor + fast attacks + Cat School Techniques. Skills: Muscle Memory, Precise Blows, Whirl, Resolve. Gear: Feline set. Playstyle: Glass cannon — dodge everything, attack fast.", icon: "🐱" },
      { id: "b2", title: "Griffin School (Sign Build)", content: "Medium armor + sign intensity + Griffin School Techniques. Skills: All sign upgrades, especially Igni and Aard. Gear: Griffin set. Playstyle: Crowd control and sustained damage through signs.", icon: "🦅" },
      { id: "b3", title: "Bear School (Tank)", content: "Heavy armor + strong attacks + Bear School Techniques. Skills: Strength Training, Crushing Blows, Rend, Undying. Gear: Ursine set. Playstyle: Facetank hits with Quen, hit hard and slow.", icon: "🐻" },
      { id: "b4", title: "Alchemy God (Best Build)", content: "Any Witcher gear + Euphoria mutation + all decoctions. Skills: Acquired Tolerance, Heightened Tolerance, Synergy, Killing Spree. Gear: Manticore set. Playstyle: Stack toxicity to 300+ for massive damage from Euphoria mutation. The strongest build in the game.", icon: "🧪" },
      { id: "b5", title: "Wolf School (Balanced)", content: "Medium armor + mix of combat and signs + Wolf School Techniques. Skills: Resolve, Rend, Quen upgrade, Igni upgrade. Gear: Wolven set. Playstyle: The most flexible build — handles any situation. Great for first playthrough.", icon: "🐺" },
      { id: "b6", title: "Mutations Unlock in Blood & Wine", content: "Complete 'Turn and Face the Strange' in Toussaint to unlock the mutation system. Euphoria (Alchemy) is the meta pick. But Killing Spree (Combat) and Magical Sensibilities (Signs) are also excellent. You only need to reach Blood & Wine — do this as early as possible.", icon: "🧬" },
    ],
  },
  {
    id: "alchemy",
    title: "🧪 Alchemy & Potions",
    tips: [
      { id: "al1", title: "Potions Auto-Refill at Meditation", content: "Meditate with any alcohol in your inventory and ALL potions and bombs automatically refill. You never need to craft them manually after the first brew. Keep a stock of strong alcohol (Dwarven Spirit is best).", icon: "🍶" },
      { id: "al2", title: "Swallow is Your Best Friend", content: "Swallow potion provides constant health regeneration in combat — far more reliable than food on higher difficulties. Upgrade it with Superior Swallow ASAP. On Death March, this is non-negotiable.", icon: "💊" },
      { id: "al3", title: "Thunderbolt Before Every Hard Fight", content: "Thunderbolt dramatically boosts attack power for 30 seconds. Pop it right before engaging a boss or tough enemy. It stacks with sword oils and sign intensity. Superior Thunderbolt also adds a Quen effect.", icon: "⚡" },
      { id: "al4", title: "Black Blood is Free Damage vs Vampires", content: "Black Blood potion damages any enemy that bites or drinks from Geralt. Against vampires (Bruxa, Katakan, Detlaff) it punishes every single bite — they essentially hurt themselves. Always carry it in Blood & Wine.", icon: "🩸" },
      { id: "al5", title: "Golden Oriole Cures All Poison", content: "Golden Oriole not only cures poison — it briefly makes Geralt immune to it. Essential against venomous enemies like Wyverns, Royal Wyverns, and Archespores. Also useful in the cave sequences of Blood & Wine.", icon: "🐦" },
      { id: "al6", title: "Moon Dust Stops Regeneration", content: "Moon Dust bombs prevent enemies from healing or using special abilities. Critical against Werewolves (stops regen), Vampires (stops invisibility), and Werecat. Always carry Moon Dust when hunting cursed ones.", icon: "🌙" },
      { id: "al7", title: "Decoctions Last 30 Minutes — Use Them", content: "Decoctions (monster-ingredient potions) last 30 real-time minutes and give massive passive bonuses. Ekimmara Decoction heals you on hit. Succubus Decoction boosts attack power. Most players forget to use decoctions entirely — don't be one of them.", icon: "🦇" },
      { id: "al8", title: "Acquired Tolerance = More Decoctions", content: "The Acquired Tolerance skill increases max toxicity based on how many alchemy recipes you know. Learn every recipe you find. This lets you run 3-4 decoctions simultaneously — the foundation of the best builds.", icon: "📜" },
    ],
  },
  {
    id: "signs",
    title: "✨ Signs & Magic",
    tips: [
      { id: "sg1", title: "Igni — Best All-Round Damage Sign", content: "Igni deals direct fire damage and can set enemies on fire for burn damage over time. Upgrade to Firestream for sustained damage or Pyromaniac for AoE. Essential against: vampires, necrophages, ice elementals, and anything in a forest.", icon: "🔥" },
      { id: "sg2", title: "Yrden Counters Invisible Enemies", content: "Yrden magic trap slows anything that walks through it AND reveals invisible enemies like Katakan, Bruxa, and Wraiths. Drop it immediately when an enemy disappears. The upgrade Sustained Glyphs lets you place 3 traps at once.", icon: "🔮" },
      { id: "sg3", title: "Aard Staggers and Creates Openings", content: "Aard knocks enemies off balance — use it to interrupt enemy attacks or knock aerial enemies out of the sky. Unlocking the upgrade lets it freeze water-based enemies solid. Always use Aard to ground Griffins and Wyverns.", icon: "💨" },
      { id: "sg4", title: "Axii = Free Instant Win in Dialogue", content: "Axii isn't just combat — it has a dialogue option that lets Geralt charm NPCs in conversation to avoid fights, skip quest steps, or get better prices. The Puppet upgrade in combat also lets you turn enemies against each other.", icon: "😵" },
      { id: "sg5", title: "Active Quen Heals You", content: "The Active Shield upgrade for Quen heals Geralt when it absorbs a hit instead of just blocking it. On higher difficulties this is one of the best survivability skills in the game. Pair it with the Quen Intensity glyph.", icon: "🛡️" },
      { id: "sg6", title: "Alternate Signs are Game-Changers", content: "Every sign has an alternate mode (hold the sign button). Alternate Igni = Firestream cone. Alternate Aard = AoE blast. Alternate Yrden = the magic trap. Alternate Axii = Puppet. Alternate Quen = Active Shield. Most players ignore these entirely.", icon: "⭐" },
    ],
  },
  {
    id: "crafting",
    title: "🔨 Crafting & Gear",
    tips: [
      { id: "cr1", title: "Witcher Sets are Always Best in Slot", content: "Scavenger Hunt quests unlock diagrams for Witcher School gear (Cat, Griffin, Bear, Wolf, Manticore). These scale with your level via upgrades — Enhanced → Superior → Mastercrafted → Grandmaster. Never buy random gear when you can upgrade your set.", icon: "⚔️" },
      { id: "cr2", title: "Grandmaster Gear Requires Blood & Wine", content: "The Grandmaster tier for all 5 Witcher sets is only available in Toussaint. The Grandmaster bonuses are dramatic (e.g. Grandmaster Ursine gives bonus damage scaling with armor). Worth farming for end-game.", icon: "👑" },
      { id: "cr3", title: "Aerondight — Best Silver Sword in the Game", content: "Earn Aerondight by completing 'There Can Be Only One' in Blood & Wine — prove all 5 chivalric virtues. Aerondight levels up WITH you, so it's always max level. Get it as early as possible in Toussaint.", icon: "🗡️" },
      { id: "cr4", title: "Runewords & Glyphs are Worth It", content: "Runewords enchant weapons with powerful effects (Severance extends Whirl/Rend range massively). Glyphs boost armor signs. You need to fund the Ofieri Runewright in Hearts of Stone — expensive but worth every crown.", icon: "💎" },
      { id: "cr5", title: "Find a Master Craftsman Early", content: "Hattori in Novigrad (Of Swords and Dumplings quest) becomes a master swordsmith. Fergus in Crow's Perch becomes a master armorer after Master Armorers quest. Both are needed to craft the best Witcher gear.", icon: "🛠️" },
      { id: "cr6", title: "Don't Sell Crafting Components", content: "Leather, monster hide, linen, iron ore — hold onto everything. You'll need massive quantities for Witcher set upgrades. The crafting costs for Grandmaster gear are enormous. Hoard from the start.", icon: "📦" },
      { id: "cr7", title: "Dimeritium Dismantles Into Ingots", content: "Dimeritium ore is common but Dimeritium ingots (needed for crafting) are rare and expensive. Dismantle your ore into ingots instead of buying ingots at vendor prices. Saves thousands of crowns.", icon: "⛏️" },
    ],
  },
  {
    id: "dlc",
    title: "💀 Hearts of Stone & Blood and Wine",
    tips: [
      { id: "d1", title: "Start Hearts of Stone at Level 32+", content: "Hearts of Stone enemies scale to level 30-40. Going in under-levelled makes it brutal. Finish most of the main game first. The reward — Viper school swords and HoS runewright — are worth waiting for.", icon: "🖤" },
      { id: "d2", title: "Save Olgierd — Don't Fight Him", content: "In 'Whatsoever a Man Soweth', solving Gaunter O'Dimm's riddle saves Olgierd. The answer: show O'Dimm something that has no reflection (Geralt himself in a mirror works). Saving Olgierd gets you the Viper Venomous Silver Sword — much better reward than the alternative.", icon: "🪞" },
      { id: "d3", title: "The Caretaker: Kill Adds First", content: "The Caretaker boss resurrects fallen enemies to drain their souls and HEAL. Kill every summoned enemy immediately and drag their corpses away or burn them with Igni. If he reaches a corpse, he heals massive HP. Quen protects against soul drain touch.", icon: "⚰️" },
      { id: "d4", title: "Fund the Ofieri Runewright Fully", content: "In HoS, give the Ofieri merchant 5,000 + 10,000 + 15,000 crowns to fully unlock runeword enchanting. The Severance enchantment alone (doubles Whirl and Rend range) transforms combat. Expensive but game-changing.", icon: "💸" },
      { id: "d5", title: "Start Blood & Wine at Level 34+", content: "Toussaint enemies go up to level 46. Go in too early and you'll get destroyed. Complete the main game first. Blood & Wine is best experienced as a send-off — the tone is much lighter than the main game.", icon: "🍷" },
      { id: "d6", title: "Upgrade Corvo Bianco Vineyard", content: "Your vineyard home in Toussaint can be upgraded with a bed (free meditation/resting), garden (free ingredients), and guest rooms (NPC visitors). Each upgrade is cheap and pays off quickly. Do all upgrades as soon as you can afford them.", icon: "🏡" },
      { id: "d7", title: "Detlaff Phase 2 — Bats Tell You the Attack", content: "In Detlaff's second phase, he telegraphs attacks through bat swarm patterns. Bats converging = claw slam incoming. Bats spreading out = area burst. Learn the patterns before attacking. Black Blood potion punishes every hit he lands on you. Vampire Oil is essential.", icon: "🦇" },
      { id: "d8", title: "There Can Be Only One — 5 Virtues", content: "To get Aerondight, prove all 5 chivalric virtues at the Lady of the Lake: Valor (fight a knight), Honor (keep your word), Compassion (help a beggar), Generosity (give away something valuable), Wisdom (make the right choice in a dilemma). Can all be done in one visit to Toussaint.", icon: "⚔️" },
      { id: "d9", title: "Blood & Wine Ending: Who Visits Corvo Bianco", content: "Your romance choice determines who visits at the end: Yennefer or Triss (if you romanced them), otherwise Ciri (if she survived) or Dandelion. The vineyard ending is one of the most emotional moments in the game — make sure your choices reflect who Geralt is to you.", icon: "🌅" },
    ],
  },
  {
    id: "deathmarch",
    title: "☠️ Death March Survival",
    tips: [
      { id: "dm1", title: "Death March Changes Everything", content: "On Death March: enemies deal 150% damage, you deal 75% damage, health doesn't regenerate outside combat, and food healing is halved. Every fight requires preparation. Never skip oils, potions, or Quen.", icon: "💀" },
      { id: "dm2", title: "Quen First, Always", content: "On Death March, recast Quen after every single hit. One unblocked hit from a boss can one-shot you. Active Shield Quen (alternate mode) heals you when it absorbs a hit — this is your primary sustain on Death March.", icon: "🛡️" },
      { id: "dm3", title: "Never Skip Meditation", content: "Meditate before every significant fight to refill potions and bombs. Keep Dwarven Spirit or White Gull in your inventory at all times — they're the required alcohol for refilling. Running out mid-dungeon on Death March is a death sentence.", icon: "🧘" },
      { id: "dm4", title: "Oils Are Not Optional", content: "On Death March, fighting without the correct oil means fights take 3x longer. Longer fights = more mistakes = death. Apply the right oil before every encounter, even trash mobs. The Fixative skill makes oils permanent — get it immediately.", icon: "🗡️" },
      { id: "dm5", title: "Crowd Control Is Your Lifeline", content: "Never fight more than 2 enemies at once on Death March. Use Aard to knock enemies down, Igni to scatter groups, Yrden to slow rushers. Kite enemies through your Yrden traps. Fighting surrounded is almost always fatal.", icon: "🎯" },
      { id: "dm6", title: "Level Up Through Quests, Not Combat", content: "On Death March, trying to grind combat XP against high-level enemies is suicidal. Do side quests — they give more XP anyway. Stay within 5 levels of your enemies. Running into a level 20 zone at level 10 will kill you instantly.", icon: "📈" },
    ],
  },
];
