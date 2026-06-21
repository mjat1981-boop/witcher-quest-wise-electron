export type DialogueOutcome = "good" | "bad" | "neutral";

export interface DialogueChoice {
  text: string;
  outcome: DialogueOutcome;
  result: string;
  followUp?: DialogueChoice[];
}

export interface DialogueTree {
  id: string;
  questName: string;
  context: string;
  choices: DialogueChoice[];
}

export interface DialogueSection {
  title: string;
  id: string;
  trees: DialogueTree[];
}

export const dialogueSections: DialogueSection[] = [
  {
    title: "Main Story — Critical Choices",
    id: "mainDialogue",
    trees: [
      {
        id: "dt1",
        questName: "The Whispering Hillock / Ladies of the Wood",
        context: "You discover a spirit trapped beneath a tree. The Crones want it dead. The spirit claims it can save the orphans. This choice affects the Bloody Baron's entire storyline.",
        choices: [
          {
            text: "Free the spirit trapped in the tree",
            outcome: "neutral",
            result: "The orphans of Crookback Bog are SAVED. However, the spirit attacks Downwarren village, and Anna (the Baron's wife) goes mad from the Crones' curse. The Baron hangs himself.",
            followUp: [
              { text: "Tell the Baron about Anna's fate", outcome: "bad", result: "He finds Anna mad, carries her away, and later hangs himself. Devastating scene." },
              { text: "Complete Return to Crookback Bog", outcome: "neutral", result: "See the full consequences unfold. No way to save both Anna and the children." },
            ],
          },
          {
            text: "Kill the spirit as the Crones demand",
            outcome: "neutral",
            result: "Anna is saved (partially — she's cursed but alive). The Baron takes her to find a healer. The orphans are taken by the Crones (implied to be eaten). The Baron lives but is broken.",
            followUp: [
              { text: "Lift Anna's curse (requires specific steps)", outcome: "good", result: "Anna survives. Baron leaves with her to seek healing. Bittersweet but the best outcome for the Baron." },
            ],
          },
          {
            text: "Free the spirit BEFORE meeting the Crones (if you find the tree early)",
            outcome: "good",
            result: "BEST POSSIBLE OUTCOME: Orphans saved, and because you freed it before the Crones' quest, the consequences are less severe. Still affects Anna, but you didn't make a direct choice against the Crones.",
          },
        ],
      },
      {
        id: "dt2",
        questName: "Now or Never — Triss Romance Lock",
        context: "Triss is helping mages escape Novigrad. At the docks, you have one chance to tell her how you feel. This permanently locks or unlocks the Triss romance.",
        choices: [
          {
            text: "\"Stay with me\" / \"I love you\"",
            outcome: "good",
            result: "TRISS ROMANCE LOCKED IN. She stays in Novigrad. She will appear at Kaer Morhen to help. If you ALSO told Yennefer you love her — BOTH dump you later (bad ending).",
            followUp: [
              { text: "Only romance Triss (never tell Yen you love her)", outcome: "good", result: "Triss ending: She and Geralt retire together. Sweet, peaceful ending." },
              { text: "Also tell Yennefer you love her (The Last Wish)", outcome: "bad", result: "DISASTER: Triss and Yen set up a fake romantic evening, then BOTH leave you tied to a bed. You end up alone." },
            ],
          },
          {
            text: "Let her go / Say nothing",
            outcome: "neutral",
            result: "Triss leaves. Romance with Triss is permanently closed. You can still romance Yennefer. Triss still helps at Kaer Morhen regardless.",
          },
        ],
      },
      {
        id: "dt3",
        questName: "The Last Wish — Yennefer Romance Lock",
        context: "Yennefer wants to capture a djinn to break the wish binding her and Geralt. After the djinn is freed, she asks if you still have feelings.",
        choices: [
          {
            text: "\"I love you\" / \"Nothing's changed, I love you\"",
            outcome: "good",
            result: "YENNEFER ROMANCE LOCKED IN. The wish is broken but your love is real. Yen ending: Retire together to a quiet life. If you ALSO romanced Triss — both dump you.",
            followUp: [
              { text: "Only romance Yennefer (never told Triss you love her)", outcome: "good", result: "Yennefer ending: Peaceful retirement together. Canon-closest ending." },
              { text: "Also told Triss you love her", outcome: "bad", result: "BOTH women dump you. Geralt ends up alone. Dandelion visits at Corvo Bianco instead." },
            ],
          },
          {
            text: "\"We had our time\" / \"I don't love you\"",
            outcome: "neutral",
            result: "Yennefer is hurt but accepts it. Romance with Yen is permanently closed. You can still be with Triss if you chose her.",
          },
        ],
      },
      {
        id: "dt4",
        questName: "Blood on the Battlefield — Ciri's Choice #1",
        context: "After the Battle of Kaer Morhen, Ciri is devastated by Vesemir's death. How you react determines one of the 5 key ending factors.",
        choices: [
          {
            text: "\"Think I know what might lift your spirits\" → Snowball fight",
            outcome: "good",
            result: "POSITIVE POINT FOR GOOD ENDING. Ciri needs to grieve but also needs to feel joy. The snowball fight shows her life still has good moments. +1 toward Ciri Lives ending.",
          },
          {
            text: "\"Calm down\" / \"You can't do anything about it\"",
            outcome: "bad",
            result: "NEGATIVE POINT. Dismissing Ciri's grief makes her feel unheard. -1 toward good ending. She becomes more fatalistic.",
          },
          {
            text: "\"Relax, you don't have to be good at everything\" (drinking scene)",
            outcome: "neutral",
            result: "Neutral — doesn't strongly count toward either ending. But the snowball fight option is clearly better.",
          },
        ],
      },
      {
        id: "dt5",
        questName: "Final Preparations — Ciri's Choice #2",
        context: "Ciri wants to visit Skjall's grave on Hindarsfjall (the boy who helped her). You can go with her or tell her there's no time.",
        choices: [
          {
            text: "\"Let's go\" — Visit Skjall's grave together",
            outcome: "good",
            result: "POSITIVE POINT FOR GOOD ENDING. Shows Ciri you respect her bonds and value people who helped her. She honors Skjall. +1 toward Ciri Lives ending.",
          },
          {
            text: "\"No time\" / Refuse to go",
            outcome: "bad",
            result: "NEGATIVE POINT. Ciri feels you don't care about the people who sacrificed for her. -1 toward good ending.",
          },
        ],
      },
      {
        id: "dt6",
        questName: "Final Preparations — Ciri's Choice #3 (Lodge Meeting)",
        context: "Ciri must meet with the Lodge of Sorceresses. You can go in with her or let her handle it alone.",
        choices: [
          {
            text: "\"Go alone\" — Let Ciri handle the Lodge herself",
            outcome: "good",
            result: "POSITIVE POINT FOR GOOD ENDING. Shows you trust Ciri and believe in her independence. She needs to face powerful people on her own terms. +1 toward Ciri Lives.",
          },
          {
            text: "\"I'll go with you\" — Accompany Ciri",
            outcome: "bad",
            result: "NEGATIVE POINT. Implies you don't trust Ciri to handle herself. She feels smothered. -1 toward good ending.",
          },
        ],
      },
      {
        id: "dt7",
        questName: "Final Preparations — Ciri's Choice #4 (Emhyr's Court)",
        context: "You visit Emperor Emhyr with Ciri. He offers you money for bringing Ciri to him.",
        choices: [
          {
            text: "Refuse the coin — \"I'm not doing this for the money\"",
            outcome: "good",
            result: "POSITIVE POINT FOR GOOD ENDING. Shows Ciri you're not her babysitter for hire — you genuinely care. +1 toward Ciri Lives.",
          },
          {
            text: "Accept the coin",
            outcome: "bad",
            result: "NEGATIVE POINT. Ciri feels like a transaction. You just sold your surrogate daughter. -1 toward good ending.",
          },
          {
            text: "Don't visit Emhyr at all (skip this)",
            outcome: "neutral",
            result: "If you skip the visit entirely, this point doesn't count. You just miss some lore dialogue. Not visiting = neutral.",
          },
        ],
      },
      {
        id: "dt8",
        questName: "Final Preparations — Ciri's Choice #5 (Avallac'h's Lab)",
        context: "Ciri discovers Avallac'h's lab and finds evidence he may have been studying her. She's furious and wants to destroy the lab.",
        choices: [
          {
            text: "\"Go for it\" / Let Ciri trash the lab",
            outcome: "good",
            result: "POSITIVE POINT FOR GOOD ENDING. Let Ciri express her anger constructively. She needs to feel in control. +1 toward Ciri Lives. Cathartic moment for her.",
          },
          {
            text: "\"Calm down\" / Stop her",
            outcome: "bad",
            result: "NEGATIVE POINT. Suppressing her emotions again. She feels controlled. -1 toward good ending.",
          },
        ],
      },
    ],
  },
  {
    title: "Ending Combinations",
    id: "endingDialogue",
    trees: [
      {
        id: "dt9",
        questName: "ENDING CALCULATOR — 5 Key Ciri Decisions",
        context: "The game tracks 5 binary choices about how you treat Ciri. 3 or more POSITIVE = Good Ending. 2 or fewer POSITIVE = Bad Ending. The choices are: (1) Snowball fight, (2) Visit Skjall's grave, (3) Let her face Lodge alone, (4) Refuse Emhyr's coin, (5) Let her trash the lab.",
        choices: [
          {
            text: "3+ Positive Choices — GOOD ENDING (Ciri Lives)",
            outcome: "good",
            result: "Ciri survives entering the White Frost. She returns! Two variants: If Nilfgaard wins the war AND you visited Emhyr → Ciri becomes Empress. If not → Ciri becomes a Witcher (many consider this the BEST ending).",
            followUp: [
              { text: "Ciri becomes a Witcher", outcome: "good", result: "Geralt presents her with a silver sword. She rides off as a Witcher. Most emotionally satisfying ending. Requires: 3+ positive choices AND Nilfgaard does NOT win, OR you didn't visit Emhyr." },
              { text: "Ciri becomes Empress", outcome: "neutral", result: "Ciri takes the throne of Nilfgaard. Bittersweet — she's alive but burdened with ruling. Requires: 3+ positive choices AND Nilfgaard wins AND you visited Emhyr." },
            ],
          },
          {
            text: "2 or fewer Positive Choices — BAD ENDING (Ciri Dies)",
            outcome: "bad",
            result: "Ciri enters the White Frost and does not return. Geralt is devastated. He retrieves her medallion from a monster-infested swamp. He sits alone in a cabin, surrounded by monsters. Screen fades to white. Geralt implied to die too.",
          },
        ],
      },
      {
        id: "dt10",
        questName: "Reason of State — Who Rules the North?",
        context: "Dijkstra plots to assassinate King Radovid. You can help or refuse. This determines the political fate of the Northern Kingdoms.",
        choices: [
          {
            text: "Help assassinate Radovid → Then stop Dijkstra",
            outcome: "good",
            result: "Radovid dies. Dijkstra tries to betray Roche/Ves — if you stop him, Temeria becomes a vassal state under Nilfgaard with self-governance. Mages are safe. Best political outcome.",
            followUp: [
              { text: "Stop Dijkstra from killing Roche", outcome: "good", result: "Roche and Ves survive. Temeria gets autonomy. Mages free. Best outcome for the most people." },
              { text: "Let Dijkstra kill Roche (walk away)", outcome: "neutral", result: "Dijkstra rules the North with an iron fist. Stable but brutal. Roche and Ves die. Mages are somewhat safe." },
            ],
          },
          {
            text: "Refuse to help assassinate Radovid",
            outcome: "bad",
            result: "Radovid lives. He intensifies persecution of mages and non-humans. Witch hunters reign. Dark times for the North. Nilfgaard may still win the war.",
          },
          {
            text: "Never start this quest (miss it)",
            outcome: "neutral",
            result: "Radovid lives by default. Same outcome as refusing. This quest can be easily missed — talk to Dijkstra after 'Count Reuven's Treasure'.",
          },
        ],
      },
    ],
  },
  {
    title: "Hearts of Stone — Key Dialogues",
    id: "hosDialogue",
    trees: [
      {
        id: "dt11",
        questName: "Whatsoever a Man Soweth — Olgierd's Fate",
        context: "Gaunter O'Dimm (the Man of Glass) wants Olgierd's soul. You can try to save Olgierd by solving O'Dimm's riddle in his pocket dimension.",
        choices: [
          {
            text: "Challenge O'Dimm — \"I want to save Olgierd's soul\"",
            outcome: "good",
            result: "You enter O'Dimm's dimension. Riddle answer: look at the world 'through a mirror' — find the mirror at the end of the path. You banish O'Dimm temporarily.",
            followUp: [
              { text: "Solve the riddle (find the mirror)", outcome: "good", result: "Olgierd is freed! He gives you his family sword and walks away a changed man. You get the Viper Venomous Silver Sword. O'Dimm is banished." },
              { text: "Fail the riddle (run out of time)", outcome: "bad", result: "O'Dimm takes your soul too. Game over — reload." },
            ],
          },
          {
            text: "Don't intervene — Let O'Dimm take Olgierd",
            outcome: "neutral",
            result: "O'Dimm takes Olgierd's soul. In gratitude, O'Dimm offers you a reward — choose from: Horn of Plenty (infinite food), Bottomless Carafe (infinite alcohol), or Caparison of Lament (saddle).",
          },
        ],
      },
      {
        id: "dt12",
        questName: "Dead Man's Party — Shani Romance",
        context: "During Vlodimir's party (you're possessed by a ghost), you attend a wedding with Shani. After the party, you can pursue a romantic scene.",
        choices: [
          {
            text: "Give Shani a Rowan Berry gift + romantic dialogue",
            outcome: "good",
            result: "Romantic scene with Shani. Sweet and fun. This is a standalone romance — doesn't affect Triss/Yen. No consequences. Just a nice moment.",
          },
          {
            text: "Choose other dialogue / different gift",
            outcome: "neutral",
            result: "The romance scene doesn't trigger. Shani remains a friend. No negative consequences.",
          },
        ],
      },
    ],
  },
  {
    title: "Blood and Wine — Key Dialogues",
    id: "btwDialogue",
    trees: [
      {
        id: "dt13",
        questName: "The Night of Long Fangs — The Big Path Split",
        context: "Beauclair is under vampire attack. You must choose: seek help from the Unseen Elder (ancient vampire), or investigate with Anna Henrietta/Syanna through Orianna.",
        choices: [
          {
            text: "Go to the Unseen Elder directly",
            outcome: "neutral",
            result: "Shorter path. You meet one of the most powerful beings in the Witcher universe. He can stop the attack instantly. You skip some story content but the vampire lore is incredible.",
            followUp: [
              { text: "Follow his instructions precisely", outcome: "good", result: "He stops Dettlaff. Efficient but you miss Syanna's storyline depth." },
              { text: "Defy or anger the Unseen Elder", outcome: "bad", result: "He KILLS YOU INSTANTLY. One of the few instant-death moments. Don't be rude to an ancient god-vampire." },
            ],
          },
          {
            text: "Investigate through Orianna / Find Syanna",
            outcome: "good",
            result: "Longer but more story-rich path. You enter the fairy tale Land of a Thousand Fables. You learn Syanna's full motivation. This path gives you MORE choices at the finale.",
          },
        ],
      },
      {
        id: "dt14",
        questName: "Blood and Wine Finale — Who Lives?",
        context: "At the finale, Syanna (Duchess Anna Henrietta's sister) confronts her. Whether Syanna lives and whether she reconciles with Anna depends on your choices.",
        choices: [
          {
            text: "Get the magic ribbon from the fairy tale world + persuade both sisters",
            outcome: "good",
            result: "BEST ENDING: Both sisters survive and reconcile. Syanna is imprisoned but alive. Anna Henrietta forgives (somewhat). Dettlaff dies. Everyone important lives.",
            followUp: [
              { text: "Have the ribbon AND choose reconciliation dialogue", outcome: "good", result: "Anna and Syanna embrace. Geralt is a hero. Best possible Blood & Wine ending." },
            ],
          },
          {
            text: "Don't get the ribbon / Wrong dialogue choices",
            outcome: "bad",
            result: "Syanna stabs Anna Henrietta with a hidden blade. Both sisters die. Geralt is thrown in prison (temporarily). Worst ending — tragedy all around.",
          },
          {
            text: "Kill Dettlaff before the sisters meet",
            outcome: "neutral",
            result: "Dettlaff dies. Syanna's fate depends on the ribbon. Without the ribbon, Syanna kills Anna. The ribbon is obtained in the fairy tale world — DON'T sell it.",
          },
        ],
      },
      {
        id: "dt15",
        questName: "Be It Ever So Humble — Who Visits Corvo Bianco?",
        context: "The final scene of the entire game. Who visits Geralt at his vineyard depends on ALL your romance and main game choices.",
        choices: [
          {
            text: "Romanced Triss (and only Triss)",
            outcome: "good",
            result: "Triss moves in to Corvo Bianco. Peaceful, happy ending. She helps with the vineyard.",
          },
          {
            text: "Romanced Yennefer (and only Yennefer)",
            outcome: "good",
            result: "Yennefer moves in. She complains about the rustic life but loves it. Canon-closest ending.",
          },
          {
            text: "Romanced both (or neither)",
            outcome: "neutral",
            result: "If both: you're alone, Dandelion visits and makes fun of you. If neither: Ciri visits (if she's a Witcher), or Dandelion (if Ciri is Empress/dead).",
          },
          {
            text: "Ciri became a Witcher + no romance",
            outcome: "good",
            result: "Ciri visits! She's traveling the Path and stops by. Heartwarming scene. Many consider this the most emotionally rewarding visitor.",
          },
        ],
      },
    ],
  },
  {
    title: "Bloody Baron — Family Matters",
    id: "baronDialogue",
    trees: [
      {
        id: "dt16a",
        questName: "Family Matters — First Meeting with the Baron",
        context: "Geralt meets Philip Strenger, the Bloody Baron, at Crow's Perch. He's drunk, grieving, and volatile. He knows where Ciri went — but he wants something in return.",
        choices: [
          {
            text: "\"What do you want for the information?\"",
            outcome: "neutral",
            result: "The Baron lays out his deal: find his wife Anna and daughter Tamara, and he'll tell you where Ciri went. He's manipulative but desperate. The deal is fair — accept it.",
            followUp: [
              { text: "\"Fine. Tell me about your wife.\"", outcome: "good", result: "He opens up — revealing Anna left after years of his drinking and violence. He's self-aware enough to know it was his fault. Complex character work begins." },
              { text: "\"I don't make deals with wife-beaters.\"", outcome: "bad", result: "Baron throws you out. You'll have to find another way into Crow's Perch, losing time and the easy information path." },
            ],
          },
          {
            text: "\"Tell me about Ciri first.\"",
            outcome: "neutral",
            result: "Baron insists on his terms. He won't give up information without the deal. You can push but he won't budge — accept the deal or find another approach.",
          },
        ],
      },
      {
        id: "dt16b",
        questName: "Family Matters — The Baron's Confession",
        context: "After helping the Baron, he drinks with Geralt and tells the full story of what happened with Ciri — and why his family fled. One of the game's best written scenes.",
        choices: [
          {
            text: "Listen fully — let him tell the whole story",
            outcome: "good",
            result: "The Baron reveals he beat Anna drunk and she miscarried. Ciri found them in the aftermath and helped Anna through a ritual that created the Botchling. Full tragic backstory. Don't skip dialogue.",
            followUp: [
              { text: "\"That's a heavy burden to carry.\"", outcome: "good", result: "Geralt shows empathy. The Baron breaks down slightly. He admits he's been trying to be better. Adds depth to the questline." },
              { text: "\"You brought this on yourself.\"", outcome: "neutral", result: "The Baron accepts the judgment. He doesn't argue. One of the few times a villain agrees with their condemnation." },
            ],
          },
        ],
      },
      {
        id: "dt16c",
        questName: "Family Matters — The Botchling Ritual",
        context: "You find the Botchling — the malformed spirit of the Baron's stillborn child. You can fight it or use Axii and properly bury it to transform it into a Lubberkin guardian.",
        choices: [
          {
            text: "Use Axii and perform the burial ritual (Name it)",
            outcome: "good",
            result: "The Baron names the child Dea. The Botchling transforms into a Lubberkin — a friendly spirit that guides you to Anna's trail. Heartbreaking and beautiful scene. Best outcome.",
            followUp: [
              { text: "Follow the Lubberkin to find Anna's path", outcome: "good", result: "The spirit leads you through Velen, showing where Anna went. It then peacefully fades. One of the most moving moments in the game." },
            ],
          },
          {
            text: "Fight and kill the Botchling",
            outcome: "bad",
            result: "You destroy the spirit outright. No Lubberkin guide, no peaceful resolution. The Baron is devastated. You find Anna's trail through investigation instead — harder and sadder.",
          },
        ],
      },
    ],
  },
  {
    title: "Gaunter O'Dimm — Man of Glass",
    id: "odimmDialogue",
    trees: [
      {
        id: "dt17a",
        questName: "Evil's Soft First Touches — Meeting O'Dimm",
        context: "Geralt meets a seemingly ordinary merchant in a White Orchard tavern who helps him find Yennefer's trail. He asks for nothing — yet. This is Gaunter O'Dimm, the most dangerous being in the game.",
        choices: [
          {
            text: "\"What do you want in return?\"",
            outcome: "neutral",
            result: "O'Dimm smiles and says he wants nothing — just the pleasure of helping. This is the lie at the heart of every deal he makes. He always collects. Watch every word around him.",
            followUp: [
              { text: "Accept his help freely", outcome: "neutral", result: "He gives you the information. Nothing happens yet. But he's watching. He always remembers every face, every name." },
            ],
          },
          {
            text: "\"I'll find my own way.\"",
            outcome: "neutral",
            result: "O'Dimm nods pleasantly and doesn't press. He doesn't need to. He knows you'll encounter him again regardless. Nothing you do changes the fact that he has already noticed you.",
          },
        ],
      },
      {
        id: "dt17b",
        questName: "Whatsoever a Man Soweth — O'Dimm's Riddle",
        context: "In his pocket dimension, O'Dimm gives Geralt a chance to save Olgierd by solving a riddle: 'Find me in a place where no one breathes, no heart beats, and time stands still.' The answer is a mirror.",
        choices: [
          {
            text: "Walk toward the mirror at the end of the path",
            outcome: "good",
            result: "CORRECT. O'Dimm is bound by his own rules — you've found him in a place with no breath, no heartbeat, where time stands still (a reflection). Olgierd is freed. O'Dimm is banished temporarily.",
            followUp: [
              { text: "\"A reflection has no breath, no heartbeat. Time stands still in a mirror.\"", outcome: "good", result: "O'Dimm stares at you with genuine surprise — one of the few times he's caught off guard. 'Well played, Witcher.' He vanishes. Olgierd walks free." },
            ],
          },
          {
            text: "Wander the dimension without finding the mirror (time runs out)",
            outcome: "bad",
            result: "O'Dimm collects Olgierd's soul as agreed. He turns to you with a pleasant smile: 'Shame. Perhaps next time.' Game over if you ran out of time — reload and head for the mirror immediately.",
          },
          {
            text: "Try to fight O'Dimm directly",
            outcome: "bad",
            result: "He laughs. You cannot harm him. He is not a monster to be fought — he is a force of the universe itself. The only winning move is the riddle.",
          },
        ],
      },
      {
        id: "dt17c",
        questName: "Letting O'Dimm Take Olgierd — The Reward",
        context: "If you choose not to challenge O'Dimm, he takes Olgierd's soul as payment for his unfulfilled wishes. In a surprisingly polite gesture, he offers you a reward.",
        choices: [
          {
            text: "Choose the Horn of Plenty",
            outcome: "neutral",
            result: "An endlessly refilling cornucopia of food and drink. Useful for health regen early game. Novelty value is high — you literally never need to buy food again.",
          },
          {
            text: "Choose the Bottomless Carafe",
            outcome: "neutral",
            result: "Infinite alcohol. Endless supply of Dwarven Spirit for alchemy and potion brewing. Mechanically more useful than food — alchemists love this.",
          },
          {
            text: "Choose the Caparison of Lament (Roach saddle)",
            outcome: "neutral",
            result: "A unique saddle for Roach. No practical bonus but Roach whinnies mournfully — one of the game's darker jokes. O'Dimm smiles knowingly.",
          },
        ],
      },
    ],
  },
  {
    title: "Ciri — Key Conversations with Geralt",
    id: "ciriDialogue",
    trees: [
      {
        id: "dt18a",
        questName: "Blood on the Battlefield — After Vesemir Dies",
        context: "Ciri is shattered by Vesemir's death. She's alone with Geralt. What Geralt says here is one of the 5 key choices that determines whether Ciri lives or dies.",
        choices: [
          {
            text: "\"Think I know what might cheer you up.\" → Snowball fight",
            outcome: "good",
            result: "GOOD ENDING POINT. Geralt challenges Ciri to a snowball fight in the courtyard. She resists, then laughs. She needed to feel alive, not lectured. This is the right choice. +1 toward Ciri lives.",
            followUp: [
              { text: "Let her win some throws", outcome: "good", result: "Geralt lets Ciri get a few good hits in. She cracks up. For a few minutes, neither of them is thinking about Vesemir. She tells him later this is what she needed." },
            ],
          },
          {
            text: "\"Calm down. We'll find a way.\"",
            outcome: "bad",
            result: "BAD ENDING POINT. Ciri feels dismissed. Her grief is valid — being told to calm down is the wrong response. -1 toward good ending. She withdraws emotionally.",
          },
          {
            text: "\"You don't have to be good at everything.\" (drinking)",
            outcome: "neutral",
            result: "Neutral outcome. They share a drink. It's not wrong but it's not the positive connection she needs. Doesn't count toward the ending either way.",
          },
        ],
      },
      {
        id: "dt18b",
        questName: "Final Preparations — Ciri Trashes Avallac'h's Lab",
        context: "Ciri discovers evidence that Avallac'h has been studying her — possibly manipulating her entire life. She's furious and wants to destroy his laboratory.",
        choices: [
          {
            text: "\"Go for it.\" / Step aside and let her",
            outcome: "good",
            result: "GOOD ENDING POINT. Ciri smashes the lab completely. She screams and breaks everything. It's cathartic. Geralt watches and doesn't stop her. She needed this. +1 toward Ciri lives.",
            followUp: [
              { text: "Wait until she's finished, say nothing", outcome: "good", result: "She finishes, breathes hard, looks at Geralt. 'Thank you. For not saying anything.' One of the best quiet moments in the game." },
            ],
          },
          {
            text: "\"Let's not lose our heads.\" / Calm her down",
            outcome: "bad",
            result: "BAD ENDING POINT. Ciri stops. She's obedient — but dead inside. Another moment where she's been told how to feel instead of allowed to feel it. -1 toward good ending.",
          },
        ],
      },
      {
        id: "dt18c",
        questName: "Final Preparations — Visiting Skjall's Grave",
        context: "Skjall was a young Skellige man who helped Ciri escape the Wild Hunt — and was executed for it, branded a coward. Ciri wants to go to his grave before the final battle.",
        choices: [
          {
            text: "\"Alright. Let's go.\"",
            outcome: "good",
            result: "GOOD ENDING POINT. They travel to Hindarsfjall together. Ciri kneels at his grave and speaks to him quietly. Geralt stands back. She thanks Skjall for his courage. +1 toward Ciri lives. Deeply moving.",
            followUp: [
              { text: "After — say nothing on the ride back", outcome: "good", result: "They ride back in silence. No words needed. Geralt respected something that mattered to her. She notices." },
            ],
          },
          {
            text: "\"There's no time for this.\"",
            outcome: "bad",
            result: "BAD ENDING POINT. Ciri nods quietly and doesn't argue. Skjall died for her and she never got to say goodbye. She carries that with her into the White Frost. -1 toward good ending.",
          },
        ],
      },
    ],
  },
  {
    title: "The Wild Hunt — Boss Confrontations",
    id: "huntDialogue",
    trees: [
      {
        id: "dt19a",
        questName: "Imlerith — Bald Mountain",
        context: "Geralt faces Imlerith, one of the Wild Hunt's most brutal generals, on the summit of Bald Mountain. He killed Vesemir. This is personal.",
        choices: [
          {
            text: "\"You killed Vesemir.\"",
            outcome: "neutral",
            result: "Imlerith laughs. He doesn't remember Vesemir's name — Vesemir was just an obstacle. The callousness makes the fight hit harder. Let the anger fuel the battle.",
            followUp: [
              { text: "Fight Imlerith — burn his frost shield with Igni first", outcome: "good", result: "His frost shield must be burned away before he takes real damage. After the shield breaks, he gets faster. Dodge his mace swing LATE — he delays it to trick you. Quen mandatory." },
            ],
          },
          {
            text: "Attack immediately without dialogue",
            outcome: "neutral",
            result: "Valid choice. The fight is the same regardless of whether you talk first. Skip the cutscene talk if you want to get straight to it.",
          },
        ],
      },
      {
        id: "dt19b",
        questName: "Eredin — On Thin Ice (Final Boss)",
        context: "The final confrontation with the King of the Wild Hunt. Eredin is a general first and a monster second — intelligent, patient, and utterly without mercy.",
        choices: [
          {
            text: "\"End of the line, Eredin.\"",
            outcome: "neutral",
            result: "Eredin is unmoved. He tells Geralt that Ciri's power belongs to the Hunt — that she was always meant to open the passage. He's calm. He's fought a thousand like Geralt.",
            followUp: [
              { text: "\"She makes her own choices.\"", outcome: "good", result: "Geralt's defining line in the final battle. Eredin raises his sword. The fight begins. Two phases — learn his teleport tells and dodge the frost attacks. Dimeritium Bomb to prevent freezing." },
            ],
          },
          {
            text: "Let Ciri respond to Eredin",
            outcome: "good",
            result: "If Ciri is present for the dialogue: she tells Eredin she'll never go with him. Her confidence has grown entirely from Geralt's choices throughout the game. The payoff of every positive choice.",
          },
        ],
      },
      {
        id: "dt19c",
        questName: "Avallac'h — The Truth About the Hunt",
        context: "Before the final battle, Yennefer reveals she found evidence that Avallac'h may have been betraying Geralt and Ciri all along. Confront him.",
        choices: [
          {
            text: "Confront Avallac'h with Yennefer's evidence",
            outcome: "neutral",
            result: "Avallac'h admits he manipulated events — but insists it was always to save Ciri, not betray her. His motives are genuinely ambiguous. He's not evil. He's just playing a longer game than anyone else.",
            followUp: [
              { text: "\"I don't trust you. But I'll let Ciri decide.\"", outcome: "good", result: "The only honest answer. Avallac'h accepts it. He fights alongside you anyway. Whether he's trustworthy is ultimately Ciri's call, not Geralt's." },
              { text: "Trust him completely", outcome: "neutral", result: "He seems relieved. Whether that's genuine or calculated is left deliberately unclear by the writers." },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Side Quest — Key Dialogues",
    id: "sideDialogue",
    trees: [
      {
        id: "dt20a",
        questName: "Keira Metz — For the Advancement of Learning",
        context: "After helping Keira, she reveals she stole the plague research from Fyke Isle and plans to give it to King Radovid to buy his favor.",
        choices: [
          {
            text: "\"Go to Kaer Morhen\" — Convince her to join the Witchers",
            outcome: "good",
            result: "Keira goes to Kaer Morhen and fights alongside you in the battle. She survives and later ends up with Lambert. Best outcome — gains an ally.",
          },
          {
            text: "\"Do what you want\" / Let her go to Radovid",
            outcome: "bad",
            result: "Radovid IMPALES Keira on a stake. You find her body later. Horrific outcome. Never let her go to Radovid.",
          },
          {
            text: "Fight and kill Keira",
            outcome: "bad",
            result: "You kill her on the spot. Lose an ally. No one gains the research. Worst option by far.",
          },
        ],
      },
      {
        id: "dt20b",
        questName: "Ghosts of the Past — Letho's Fate",
        context: "Letho (the kingslayer from Witcher 2) is hiding from assassins. He asks for Geralt's help. If you imported a save where Letho lives.",
        choices: [
          {
            text: "Help Letho → \"Come to Kaer Morhen\"",
            outcome: "good",
            result: "Letho joins the defense of Kaer Morhen. He's an excellent fighter — one of the best allies. He stays at Corvo Bianco afterwards if you have B&W.",
          },
          {
            text: "Help Letho but don't invite him",
            outcome: "neutral",
            result: "Letho leaves. You miss out on a powerful ally at Kaer Morhen.",
          },
          {
            text: "Kill Letho / Refuse to help",
            outcome: "bad",
            result: "Letho dies. You lose a potential ally and some interesting dialogue at Kaer Morhen.",
          },
        ],
      },
      {
        id: "dt20c",
        questName: "Carnal Sins — The Serial Killer",
        context: "A serial killer is targeting Novigrad's prominent citizens. You investigate with Dandelion. The suspects point to a cult member, but appearances are deceiving.",
        choices: [
          {
            text: "Investigate thoroughly → Discover the REAL killer (Nathaniel)",
            outcome: "good",
            result: "The real killer is a Higher Vampire disguised as a coroner. Chase him through the city. Defeating him stops the murders permanently.",
          },
          {
            text: "Accuse the wrong person (the obvious suspect)",
            outcome: "bad",
            result: "You kill an innocent man. The real killer escapes and continues murdering. You failed as a detective. The murders continue off-screen.",
          },
        ],
      },
      {
        id: "dt20d",
        questName: "King's Gambit — Skellige's Ruler",
        context: "A feast is attacked by berserkers. You can investigate with Cerys (brains) or charge in with Hjalmar (brawn). Who you help becomes the next ruler of Skellige.",
        choices: [
          {
            text: "Help Cerys an Craite investigate",
            outcome: "good",
            result: "Cerys becomes Queen of Skellige. She's a wise, diplomatic ruler. Skellige prospers under her rule. Better long-term outcome for the islands.",
          },
          {
            text: "Help Hjalmar an Craite fight",
            outcome: "neutral",
            result: "Hjalmar becomes King of Skellige. He's a warrior-king — bold but brash. Skellige is strong but more warlike. Valid choice if you prefer action.",
          },
          {
            text: "Don't help either / Ignore the feast",
            outcome: "bad",
            result: "Svanrige becomes king by default. He's a puppet ruler under his mother Birna's control. Worst outcome for Skellige.",
          },
        ],
      },
    ],
  },
];
