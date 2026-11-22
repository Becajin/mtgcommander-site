# MTG Commander · Patch notes

Every update of the game, newest first. Added, removed, fixed and changed: what is new for you at the table.

## Version 2026.11.23.0000 · November 23, 2026
### Changes
- Fell the Mighty (and the other wave wipes: Supreme Verdict, Organic Extinction, Fumigate, Final Act, Martial Coup) no longer stutters: the wave froze the screen for about a second as it started; the creatures burning one after another no longer slow it down.
- Deck builder stacks (every grouping, the Curve split too): a long column no longer spills into a second column beside it. Its cards move closer together first (each card's title strip always shows); if it is still too tall, the stacks get a vertical scrollbar.
- Bot chat feels more like a conversation: bots now answer each other now and then (a greeting gets a "good luck" back, a missed land drop some sympathy, a win a "well played"), and they answer your chat too (hello, gg, thanks, a question). They have lines for the format you play (Standard, Modern, Draft, Sealed and more), no longer end lines with "lol", and table-talk lines ("why me?") only come while three or more players are still in the game.
- At tables with bots, the bots wait for your screen: when your game is still showing what happened before (bots playing against each other), they hold their next play until it has caught up (up to 6 seconds at a time). Effects no longer pile up, overlap or rush to catch up.
- Bots take a moment before letting your spells and abilities resolve (half a second to a second, a little longer when one of them has mana open), as a person would; they used to pass at once. Every play of a bot now gets its own thinking pause: a second spell or ability right after the first gets a short one instead of none.
- The format info window (the "i" in the deck builder and deck selection) is laid out anew: the format's key facts as chips at the top, the deck rules as bullet points, the brackets as numbered colored rows, the Power explained by what counts, card lists in columns (the card shows on hover) with a search over long lists, the legal sets with their names, newest first.
- Fetch lands (Polluted Delta, Prismatic Vista, Evolving Wilds ...) have their own look: the land crumbles into earth dust, wisps in the colors of the land types it can fetch run to its library leaving a trail of dust, and the land it finds comes back along the way, landing by its type (an Island in spray, a Swamp in mud, a Mountain in rock dust, a Forest in leaves, Plains in light). The life it costs is one drop of blood, no drain.
- Mossborn Hydra's heads show only for a moment (about 2.5 s) when it enters and after each landfall: the heads it has fade in, only new ones grow out; they wither away at once when it leaves the battlefield.
- Format info: the banned list shows the format's own bans (Standard: 13); the cards banned in every constructed format (conspiracies, dexterity, ante, acorn-stamped ...) are only counted below it, and only those the format's sets would allow (none in Standard, Pioneer or Modern).
- Starting a game goes straight to the loading screen: the table builds up behind it, not on screen first.
- The dice roll for the first turn shows the clean table, without the empty battlefield frames under the dice.
- Declaring attackers or blockers: the combat zoom stays while the game asks for the next creature or whom it attacks (it zoomed out and back in after each pick).
- Rejoining or reconnecting to a running game no longer plays the dice roll for who starts again.
- Conceding a Quick Play game goes back to the menu (not into that format's deck choice again); Play opens the lobby's start page; a double click on a format no longer picks a deck in the popup that opens under it.
- AI: protection tricks (instants and flash spells giving hexproof, indestructible or protection until end of turn, like Fae Flight) are kept for when removal comes at its creature, not cast for their side bonus.
- Decks screen: no My Decks / Precons tabs any more: the formats on top, and in each format My Decks is the first tab beside its precons (one search, color filter and sort for both).
- Deck lists sort by last edited, date added, name, format, colors, power level and salt level (My Decks); the precons by date, name, colors, power and salt.
- Deck lists: a search jumps to the first tab that has a matching deck (My Decks and Precons).
- Precons: reprinted decks with exactly the same cards are one tile, their sets shown together (Devour for Power: CMD/CM2).
- My Decks: tabs by origin under the search (Own decks, Imported, Precon copies, Drafts, Sealed), like the Precons' categories.
- My Decks: the Precons look: a tab per format (All first), search and color filters (right-click: without that color).
- Tournament decks: the top 8 decks of the last 10 Pro Tours, 5 World Championships and 10 Spotlight Series (195 decks, official lists); those not legal today under Past formats.
- Every 60-card precon has a picture now (the card it is named after, else its main card).
- Constructed decks: the tournament decks in tabs by event (World Championship, Pro Tour, Spotlight Series, Other), each with Current and Past formats.
- Tournament decks no longer legal (banned, rotated out) stay as past decks, with why, instead of disappearing.
- New format Past Formats: Standard, Pioneer, Modern, Legacy or Vintage as it was in a period you choose (its sets and its ban list), like the old drafts.
- Decks > Precons: no Limited, Draft, Sealed or Beejlander tabs any more (drafted decks have no precons).
- Deck choice and Precons tab: the chosen deck's plaque first, then its facts, then the episode title, theme and notes small and grey; the buttons stay in view, and many format tabs scroll instead of pushing the screen wider
- Power-Rank card quality: each card as a choice for this deck, out of 10: half its play rate, a quarter how much it does for its mana against cards of the same job (a land or a mana for 2 is full, an artifact a little less, Sol Ring above), a quarter its synergy with the commander; the breakdown lists the best 3 ramp, card draw, interaction and other cards; deck health in the deck builder with the usual targets (ramp 10-12, card draw 10-14, removal 10-12, board wipes 3-4)
- Power-Rank card draw: recursion counts too (Eternal Witness, Regrowth, Sun Titan; casting from the graveyard like Lurrus or Muldrotha a card a turn, lands from the graveyard half; a card bringing back only itself not), full marks at about 42
- Power-Rank: card draw on casting a kind of spell (Beast Whisperer) counts by how many of the deck's cards set it off; tutors used again and again (Momir Vig, Birthing Pod, Yisan) up to two and a half tutors, Momir Vig's blue half as card draw; the commander's own effects count more, as it is cast again and again (x2 at 1 mana down to x1.2 at 6), and it shows in the breakdown's lists
- Power-Rank engines from the whole deck: a payoff every creature sets off (Cathars' Crusade) with many creatures and token makers, and payoffs for a creature type (Coat of Arms, lords, Vanquisher's Banner, 'whenever an Elf enters' ...) from 16 creatures of the deck's main type (changelings too), small engines, middling from 25; spells of a kind that cost less (Herald's Horn, Dragonlord's Servant, Goblin Warchief) count as ramp by how many of the deck's cards are of that kind
- Power-Rank breakdown: the parts always in the same order, by their weight (card quality, interaction, combos & engines, ramp, speed, card draw, mana base)
- Deck choice and Precons tab: the chosen deck's bracket, Power-Rank and salt as a plaque (as in the deck builder), and its tile gets the bracket and Power-Rank as soon as they are worked out
- Decks screen, Precons tab: the decks' brackets and Power-Ranks on their tiles also when the server worked them out after you connected (the list is asked for again when the tab opens)
- Power-Rank mana base: lands tapped only on a condition count by how often (shock lands 15%, check and reveal lands 30%, slow and fast lands 40%, Battlebond lands not at all, tapped lands with cycling 20%, creature lands and scry or surveil lands 80%), tapped lands cost more, castable-on-curve is stricter (95% full, 75% none), and the mark is spread out (a typical deck about 5, was 8 to 9 for nearly all); the breakdown shows how often each land comes in tapped
- Power-Rank engines: a payoff that triggers only once each turn (Kwia Vigorbloom's Lotus) counts at most twice and gets no step up for many cards setting it off; Lotus, Treasure or Clue makers no longer count as token makers for 'whenever a creature enters' cards
- Deck builder: no more Owned marks or collection filter on the cards (everybody has every card)
- Power-Rank engines for attack decks in two pairs: what gets the team attacking (extra combats, haste, attackers made) with what pays off each attack, and what gets them through (flying, unblockable, double strike) with what pays off each hit; trample alone is no engine (Garruk's Uprising with Rolling Hamsphere)
- Power-Rank Speed: spells that cost themselves less count at about half their mana value (Ghalta 6 instead of 12, Blasphemous Act 5 instead of 9; convoke, delve, improvise, affinity too)
- Decks screen: the Card Collection tab is now Precons, every deck the server has in a tab per format (Commander, Brawl, Standard, Pioneer, Modern, Legacy, Vintage, Casual) and in it a tab per category (Wizards' precons, Game Knights, SCG VS ...; for the 60-card formats the weekly tournament decks, World Championship Decks, Duel Decks, Event Decks ...), with View deck and Copy to My Decks; the deck popup for the constructed formats has the same category tabs
- Power-Rank engines for more commanders: trigger doublers (Isshin, Felix Five-Boots, Elesh Norn, Mother of Machines), blink over two sentences (Roon of the Hidden Realm), life the opponents lost or noncombat damage to them (Florian, Niv-Mizzet, Visionary), damage boosts (Torbran) and counter doublers (Vorinclex)
- Power-Rank engines: up to 12 engines count, each next one a little less (no longer only the best four), and weaker cards make an engine worth less instead of none; four strong engines still about as much as an early infinite combo, a typical deck about 5 in Combos & engines
- Power-Rank engines for attack decks: cards that get the team in (extra combats, haste or evasion for all, evasion on equipped creatures) with cards that pay off each attack or hit (Saskia with Iroas, Daxos with Sword of Feast and Famine)
- Power-Rank engines found in many more decks (without any: 57% of the decks before, 34% now): spells decks (Guttersnipe, Young Pyromancer, Storm-Kiln Artist with the instants and sorceries), Mayhem Devil and other cards that watch any player sacrifice, and decks whose commander has a thin or no EDHREC page (partner pairs like Rankle and Torbran): a well-played card counts by what its rules text does, not just by being an artifact or a creature type
- Power-Rank: combos and engines also go in a straight line to full marks instead of a curve where one infinite combo was already 7 of 10; four strong engines are worth about as much as an early infinite combo (both about 6)
- Power-Rank engines: damage to each opponent counts as life loss (Impact Tremors, Weftstalker Ardent, Coruscation Mage with Ob Nixilis, Captive Kingpin), and "one or more opponents each lose" as a payoff; for life loss and lifegain a well-played card on the theme is an engine piece even when EDHREC rates it no special fit for the commander (Zulaport Cutthroat)
- What a card does now comes from Scryfall's Tagger (people tag every card by hand: removal, ramp, card draw, impulse draw, tutors, board wipes, counterspells, sacrifice outlets ...), read once a week, instead of guesses from the rules text: Orcish Bowmasters or Underworld Dreams no longer count as card draw, Zariel not as removal, Grenzo not as fast mana, land searches not as tutors; impulse draw counts as card draw, ramp from 6 mana on next to nothing; Find stinkers offers cards that do the same job (Ashes to Ashes: Deadly Rollick, no face burn); the Power-Rank, Find stinkers and engines all use the tags
- Power-Rank: card draw counts the cards drawn and how often (Rhystic Study more than Divination, Mind Stone only a little), ramp the mana each turn (Sol Ring 2) and the lands a spell puts out, interaction what a removal can hit (any permanent most, a narrow type less, bounce less, damage by its size) and abilities used again and again; speed also counts fast mana and cost reducers; these parts go in straight lines to full marks instead of curves that never reached 10
- Power-Rank and salt breakdowns (laid out anew: the rank with its bar, every part at a glance sorted by the points it adds, then each part in its own box with a small note and clean card lists; hover a card's name to see the card): click the Power-Rank (in the deck builder, Deck Info, the deck choice) for every part with its mark, weight and the points it adds, and the cards behind it: Game Changers, fast mana, tutors, the most and least played cards, removal, card draw and ramp by their weight, the combos (infinite ones marked) and engines, the most expensive cards, tapped lands and the cards hardest to cast on curve; click the salt for the deck's saltiest cards
- Canadian Highlander: a card's points show in its hover text at Canadian Highlander tables and in the deck builder's card info for Canadian Highlander decks
- Canadian Highlander: the deck choice shows only Canadian Highlander tournament lists, no more Commander precons or show decks; the Canadian Highlander lists of the last two weeks from BWheelerMTG on Moxfield join the tournament winners; the points list is checked when you sit down (the current list, at most 10 points)
- Synergy by the cards' text: the Power-Rank's synergy is now half the cards' rules text (the commander's themes read from its own text, such as tokens, life gain, sacrifice, artifacts, equipment, legends or a creature type, and how many of the deck's cards are on them) and half EDHREC's synergy; Deck Info shows a Synergy section (the share on theme, EDHREC's synergy, each theme with its cards, the cards fitting best and least), the Power-Rank's tooltip says it in words, and Find stinkers counts off-theme cards a little worse; the Power-Rank is the weighted mark straight on 1-100 (0 everywhere: 1, 10 everywhere: 100), not measured against the decks in the game; combos that loop or win the game (Commander Spellbook: infinite mana, damage, tokens …) get a bonus; engines count as combos too (a card that makes a commander theme happen with one that draws value from it, or with the commander in that role, such as Soul Warden with Karlov or Blood Artist with a sacrifice outlet; permanents with repeatable value and a strong EDHREC fit only, worth more the bigger their payoff (big: 5+ mana, 5+ damage to every opponent, extra combats or turns, 3+ tokens, 4+ cards; middling: 2+ mana, 2+ cards, damage to every opponent, a token; small payoffs such as a +1/+1 counter, scry or a little life count 30%; a payoff goes a step up with 15+ cards in the deck setting it off, two with 30+, so an Enchantress in a deck of thirty enchantments counts big) and the better their cards; auras and equipment work like enchantresses, tribes like lords with their members; each a third of an early two-card combo, shown in Deck Info); its weights: card quality 24%, interaction 21%, combos & engines 20%, ramp 12%, speed 10%, card draw 8%, mana base 5%; fast mana counts once, under ramp (no longer in speed and card quality too); speed, interaction, card draw and ramp scaled so a typical deck gets 5 of 10 (full marks at twice a typical deck) (synergy is no part of its own any more: its engines count under combos & engines, Deck Info still shows it)
- Find stinkers (deck builder, Suggest): the deck's weakest cards by EDHREC (played by few of the decks that could, little synergy with the commander), each with up to three better cards of the same kind (removal, board wipe, card draw, ramp, tutor; creatures and other spells whose rules read alike), in your colors and at most one mana more, to swap in with one click
- Deck builder: the bracket by the deck's name is a small plaque again (bracket, its name, Power-Rank and salt); the fold arrows point the way the search and the deck fold (up and down with the search on top, left and right side by side); List/Stacks is one toggle (on: Stacks) with its icon drawn in the game itself; the deck's art no longer reaches past its frame
- Deck art: the deck builder shows a square of the deck's art; click it to choose which part of the art shows (the deck boxes on the Decks screen are cut around the same place); List/Stacks is one icon switch; in Stacks a round switch in the middle of the divider between the search and the stacks puts the search on top or beside them; Deck Info is a big button beside Save and Back
- Deck builder tidied up: the header is two lines (the name, format, count, bracket and Power-Rank, Save and Back; under it the legality, List/Stacks, Suggest, Deck Info, Export); the legality line follows the format you pick; "Statistics" is now "Deck Info" on the right, with the bracket, Power-Rank, Game Changers and deck health on top and a green Refresh; the commander box shows only the commander and its colors; Suggest lands and Suggest cards sit in one Suggest menu; the search's filters fold away behind a Filters button; Group by and Sort by are drop-downs; in Stacks the search and the deck each fold away with an arrow button; the Show menu is gone
- Format info: an "i" button in the deck builder (beside the format) and in the deck selection explains the format: its deck rules, its banned cards (and restricted cards, banned commanders), Canadian Highlander's points list, the legal sets, and for Commander and Brawl the brackets, the Power-Rank and its parts, and the salt
- Bracket and Power-Rank apart: the bracket is Wizards' official Commander bracket (1-5) alone, and the new Power-Rank (1-100, whole numbers) rates the deck itself, weighted: card quality (how often EDHREC decks play its cards, Game Changers, fast mana, tutors), interaction, combos, speed (mana curve), synergy with the commander (EDHREC), the mana base (Frank Karsten: colors castable on curve, land count, tapped lands, costing fast decks more), card draw and ramp; interaction, draw and ramp count by how cheap and how good each card is; shown under the bracket in the deck selection, on the Decks screen, in the builder and at the table (its parts in the tooltip); bots facing your own deck pick show decks of its bracket and a similar Power-Rank
- Bot table talk fits the game: in a duel the bots no longer ask why they are attacked or talk about "the table", they speak head to head; Commander talk (commander tax, brackets, precons) only in Commander games, 60-card and Limited talk only there; when a card with a story hits the table (Sol Ring, Lightning Bolt, a Mox, Oko, Thassa's Oracle and about 70 more) a bot remarks on its Magic history or makes a pun on its name (Sad Robot, Storm Crow, Grizzly Bears, "didn't say please" for a counter, "Khaaaan!" for the Star Trek Khans, "UU, no", "Stonks" for Smothering Tithe...); the ~430 most played cards in the bots' decks (fetches, shocks, Signets, Steve, Mom, Gary...) got remarks too once a game; the bots talk more casually (slang, little fillers while they think) and nod to famous decks and plays (Combo Winter, Draw-Go, Storm)
- More card looks: commanders with their own entrances after their art: Veyran's fire and water maws, Zacama's footsteps through the board, The Gitrog Monster's swamp, Braids' black slime reaching for the screen's edges, Aesi gliding through a stormy sea, Omnath's green fire, Akiri swinging in on her rope; Decree of Pain's overlord casts his shadow over the battlefield; painted sparks, shards, leaves and drops instead of round dots, and no more ring flashes at the end of entrances
- More card looks: Stormcatch Mentor conjures plasma orbs and lightning (each prowess trigger strikes harder), Icetill Explorer a blue vortex with green spores, Resonating Lute flings ribbons of paint, Voice of Victory unfurls its red banner and sings, Windcrag Siege brings a gale and war banners, Enduring Vitality's golden elk spirit leaps (and again when it comes back), Underworld Breach cracks the ground open in a pillar of fire, Unnatural Growth falls in moonlight and makes your creatures surge each combat, Disciple of Freyalise swirls green ribbons of magic
- More card looks: Expressive Iteration paints strokes of fire and ice over the table while you choose, Silence blanks the opponents' portraits white for the turn, Ephemerate slices its creature apart and back together; sparks, embers, shards, leaves, petals and drops in the new looks are painted
- More card looks: Lotus Petal blooms in a ring of light and scatters its petals, Redirect Lightning bends blue lightning through the stack, Crackling Doom strikes each opponent's greatest creature, Snakeskin Veil wraps its creature in shed snakeskin, Buried Alive pours earth into the graveyard, Sevinne's Reclamation raises cards in golden light, Moldervine Reclamation's vines, Aura Shards' crystal shards, Warleader's Call's war banners, Branching Evolution's veins, Kindred Discovery's glowing find, Cruel Celebrant's and Bastion of Remembrance's drains
- New card looks: Seething Song erupts a pillar of lava, Flusterstorm whirls a storm round the spell it counters, Pact of Negation leaves a contract seal over you until it is due, Go for the Throat rakes with claws, Nature's Claim's roots crush its target, Decimate cracks open to each target, Wear and Tear break their targets with a red blow or a white tear, Consider lifts the top card in a blue glint

## Version 2026.11.16 · November 16, 2026
### Changes
- Star Trek creatures and ships fire phasers: their damage to a creature or a player is a red beam of light from the card with its own sound (Klingons, Romulans and Borg fire green, Cardassians and Ferengi yellow)
- Clearer sounds everywhere: the game no longer muddies the low mids of every effect and gives them more air on top; about 90 creature voices cleaned up (Bears, Wolves, birds, Elephants, Rhinos, Oxen, Spirits, Horrors, Hyenas, Griffins, Gods ...), Ravens and Crows have their own cry, a Klingon's "Qapla'!" is clear, a Warrior's roar no longer stops short, a burnt card's embers crackle like a real fire
- A creature with several types speaks as the more particular one: an Ape Beast as an Ape, a Bear Beast as a Bear; races before classes (a Goblin Rogue is a Goblin, a Human Warrior a Warrior)
- Bots talk more like their deck: a Star Trek, Middle-earth, Phyrexian, Bloomburrow, Duskmourn ... deck greets, attacks, wins and loses its own way, with a few famous lines; they remark on what really happens (a creature back from the graveyard, a stolen card, revenge on whoever took their commander, commander damage close to 21), grumble when it isn't going well, say "Mhm..." when they think long or "Decisions, decisions..." with many options, and tell a little story now and then instead of talking about nothing; art remarks only for really special printings
- After a tournament you can always start or join a new table (leaving through the standings kept you at the finished one, with no Leave button to press)
- A table that still holds you shows itself again with its Leave button whenever you try to start or join another one
- A game that has been silent for 30 seconds with no question for you asks the server for the table again by itself
- Cards a permanent exiled (impulse draw, Oblivion Ring) peek out from behind it in their own shape, no longer squashed
- Bots no longer give a creature an ability it already has when they can choose (Practiced Offense gives double strike to a lifelinker)
- Bots treat Desert's Due as removal, don't pay Marooned's {3} to tap a creature that is already tapped, and give Engineered Explosives the count that wipes their opponents' board, not their own (2 when nothing else fits)
- Limited bots' decks keep their set's basic lands

## Version 2026.11.15 · November 15, 2026
### Changes
- More commanders speak when they enter: Loot (every Loot card), Gisa and Geralf, Galadriel, Lathril, Ezuri and Rhys the Redeemed, each with three lines of their own
- Paying life sounds like it: a quick knife cut and a heartbeat; losing life to a spell or ability (Sign in Blood, The Sackville-Bagginses) is one deep heartbeat; both play the moment the life counter goes down, and never for damage (damage plays its hit)
- Damage from a spell or ability to a player has a clearer hit of its own, and hits sound at about one level whatever the damage: 1 damage is clearly heard, bigger hits a little louder, with their boom and thunder from 6
- +1/+1 counters climb up the scale: a creature getting several plays a quick rising run, several creatures one after another, each a step higher
- Clearer sounds: attackers' swings, Leonin, Dinosaurs, Sphinxes; Imps have five voices; small birds have a new chirp
- Bot turns are easier to follow: a spell right after a land gets its own pause, and every trigger stays on the stack a moment before it resolves (shorter the more there is)
- In combat the blocks overview comes first, then the hits; a trampler fights its blockers before the trample reaches the player
- A creature that lost all its abilities to another card (The Wondrous Wasp, Darksteel Mutation) shows a label saying so
- Autopay uses lands that make a color for life (Starting Town, Mana Confluence, the Horizon lands) when nothing else makes that color, and never below 2 life
- The second copy of the same trigger (two Biotech Specialists) is answered for you like the first
- Paying a mana ability's cost while casting (Gene Pollinator tapping a permanent) draws its arrow from that card, not from the spell
- The menu music no longer plays twice after leaving the Card Workshop
- Bots no longer aim a second ability at a creature their own removal is already taking, and no longer give a creature an ability it already has
- Weekly Standard: the World Championship 32 top 8 decks

## Version 2026.11.14 · November 14, 2026
### Changes
- Your commander's entrance plays every time it enters, also when you cast it again after it died (it only played the first time)
- Bots keep more for after combat: creatures that don't change the attack, and enchantments, artifacts and sorceries without a combat effect, wait for the second main phase, so their open mana can be a trick (they cast almost everything before combat)
- Suggest lands in a draft or Sealed takes one art of the set for all your basics, the five as a matching cycle; draft bots do the same
- Bots' basic lands come in one style that fits the format: a recent set in Standard, newer sets in Pioneer and Modern, the old frames (Alpha to Seventh Edition, Mirage, Urza's Saga ...) in Legacy and Vintage
- **Over 130 creature types have their own voice now**, from recordings: Elephants trumpet, Bears growl, Frogs croak, Bats chirp and flutter, Owls hoot, Ravens and Crows caw, small birds chirp, Hydras snarl with several heads, Krakens surface, Whales call, Griffins and Pegasi beat slow wings, Gods and Dragons sound by their color, Elementals by their element, and many more (Apes, Monkeys, Goats, Boars, Hyenas, Rhinos, Oxen, Foxes, Otters, Rabbits, Squirrels, Mice, Weasels, Raccoons, Badgers, Moles, Hippos, Sharks, Crabs, Fish, Turtles, Spiders, Scorpions, Sphinxes, Manticores, Basilisks, Kavu, Gargoyles, Walls, Plants, Nightmares, Illusions, Shapeshifters, Scarecrows, Imps, Banshees, Sirens, Satyrs, Halflings, Kithkin, Vedalken, Kor, Homunculi ...)
- Animal folk sound like their animal with a short spoken grunt: Leonin, Loxodon, Rhox, Aven, Nezumi, Kitsune, Ainok, Orochi, Viashino
- New sounds for the game itself: a commander's entrance (a choir and an anvil ring in a great hall), a planeswalker's (a portal zap and a whoosh), artifacts, Equipment, enchantments (a soft wind chime) and battles entering, a player knocked out (two distant bell tolls), winning and losing, a game starting, losing life by paying it, becoming the monarch, convoke, crew, embalm, persist, pumps, Equipment coming off, your untap step
- Many effect sounds redone from natural recordings: the whoosh in about 150 card looks, fire, lightning, thunder, ice, rocks, wood, leaves, flesh hits, stabs, knives, swings
- At the table and in the menus: chat messages, the draft clock under 10 seconds, rares and mythics in a pack, someone taking a seat at your table, a deck saved, a Season invitation, the end of a tournament (applause), and a quiet note when the game waits on your decision after someone else acted

## Version 2026.11.13.1623 · November 13, 2026
### Changes
- Drafts, Sealed and new tables start again after a reconnect (a second login on the same window lost its connection to the rules engine, and everything after that said "Could not create the draft.")
- A new website at mtg.becajin.de: features with pictures of every board style, the download and all patch notes

## Version 2026.11.13.1258 · November 13, 2026
### Changes
- **Star Trek** is here, complete: all 311 cards of the main set and all of Star Trek Commander, including the new mechanics (face a dilemma, assimilate, beam me up, Spacecraft and Station)
- Draft and Sealed with Star Trek boosters, packed the way Wizards packs them: planets in the land slot, the Klingon, LCARS, scene and classic Enterprise frames, LCARS shocklands, and a Stardates card in 1 of 25 packs
- The four Star Trek Commander decks to play: Federation Fleet (Jean-Luc Picard), Klingon Fury (Worf), Landing Party (Commander Spock) and We Are the Borg (The Borg Queen)
- The main menu shows the newest set on the right: its signature cards fanned out and Quick Draft, Quick Sealed and Quick Commander buttons to jump right in
- Bots in cube drafts pick by how CubeCobra's drafters rate the cards in that cube
- The rules engine is updated to the newest XMage, with its card fixes

## Version 2026.11.13.0846 · November 13, 2026
### Changes
- Choosing X counts what convoke, improvise and delve can pay (March of the Multitudes could only be cast with X = 0)
- Bots that can kill two opponents in one attack now do, instead of sending everything at one
- 24 more planeswalkers enter with their own name plate (Narset, Ugin, Karn, Kiora, Kaito, Ob Nixilis, Tibalt, Huatli, the Wanderer and more), each with its own lettering
- Ten new emotes: Laugh and point (Rakdos), Waiting… (Tinybones), Befuddled (Zndrsplt), Panic (Ral Zarek), Generous (Kenrith), Insane (Gisa grinning as on her wanted poster), Mad (Borborygmos roaring), Time is running out (Baral), Annoyed (Sorin), Snicker (Grenzo); the emote picker is grouped (Cheers, Respect, Thinking, Surprised, Upset) with each emote's name under it
- Signets and Talismans enter with their own object rising over the card, painted from each card's art, glowing in its two colors (Arcane Signet in gold), beside the mana swirl
- New Limited format: **Beejlander**. Like Sealed, but everyone gets 100 different random spells of 10 cents or less (88 commons, 10 uncommons, 2 rares or mythics, no lands) and builds a 100-card singleton deck from them, adding any basic lands; the bots play their best three or four colors with 40-45 lands. Quick Play or a table for up to 8, then Swiss rounds
- New entrances for 149 of the most-played permanents: Skullclamp, Eternal Witness, Sakura-Tribe Elder, Burnished Hart, Wayfarer's Bauble, Thran Dynamo, Expedition Map, Reclamation Sage, Hedron Archive, Esper Sentinel, Gilded Lotus, Phyrexian Metamorph, Mulldrifter, Acidic Slime, Ashnod's Altar, Wood Elves, Beast Whisperer, Caged Sun, Anger, Shadowspear; and Mana Vault, Coalition Relic, Darksteel Ingot, Rampaging Baloths, Dockside Extortionist, Scavenging Ooze, Grave Titan, Crucible of Worlds, Mother of Runes, Myr Battlesphere; and Panharmonicon, Psychosis Crawler, Mana Crypt, Whispersilk Cloak, Professional Face-Breaker, Tireless Tracker, Steel Hellkite, Clever Impersonator, Land Tax, Phyrexian Altar; and Consecrated Sphinx, Snapcaster Mage, Syr Konrad, Parallel Lives, Courser of Kruphix, Blackblade Reforged, Viscera Seer, Shriekmaw, Vedalken Orrery, Conjurer's Closet; and Idol of Oblivion, Etali, Mirror Entity, Meteor Golem, Loxodon Warhammer, Midnight Clock, Karmic Guide, Ramunap Excavator, Bane of Progress, Spark Double; and Farhaven Elf, Azusa, Greater Good, Foundry Inspector, Mirage Mirror, Ragavan, Champion of Lambholt, Duplicant, Bitterblossom, Knight of the White Orchid, Arbor Elf, Scute Swarm, Fleshbag Marauder, Coiling Oracle, Sculpting Steel, Archaeomancer, Ruby Medallion, Toski, Cursed Mirror, Liquimetal Torque, Bident of Thassa, Scroll Rack, Guttersnipe, Chasm Skulker, Noxious Gearhulk, Deathrite Shaman, Ohran Frostfang, Song of the Dryads, Loran of the Third Path; and Yavimaya Elder, Grasp of Fate, Beastmaster Ascension, Sheoldred Whispering One, Walking Ballista, Dauthi Voidwalker, Mangara, Felidar Retreat, Academy Manufactor, Warstorm Surge; and Managorger Hydra, Restoration Angel, Black Market, Gonti, Disciple of Bolas, Dictate of Erebos, Dualcaster Mage, Lifecrafter's Bestiary, Leyline of Anticipation, Altar of Dementia; and Terror of the Peaks, Etherium Sculptor, Oblivion Ring, The Ozolith, Zealous Conscripts, Sidisi, Mystic Forge, Talrand, Selvala, Plaguecrafter; and Venser, Emrakul the Promised End, Vanquisher's Banner, Dreamstone Hedron, Sapphire Medallion, Evolution Sage, Mind's Eye, Ophiomancer, Morbid Opportunist, Myr Retriever; and Darksteel Mutation, Scrap Trawler, Nevinyrral's Disk, Curse of Opulence, Combustible Gearhulk, Zendikar Resurgent, Imprisoned in the Moon, Utopia Sprawl, Unwinding Clock, Loyal Apprentice; and Terastodon, Ulamog the Ceaseless Hunger, Phyrexian Reclamation, Elemental Bond, Phantasmal Image, Mimic Vat, Grim Monolith, Goblin Bombardment, Butcher of Malakir, Palladium Myr
- More trigger looks: Terror of the Peaks's fire, Oblivion Ring's exile, The Ozolith's counters, Zealous Conscripts's steal, Sidisi's exploit, Talrand's drakes, Selvala's mana, Plaguecrafter's edict
- Their triggers have looks too: Managorger Hydra's counters, Restoration Angel's blink, Gonti's peek, Disciple of Bolas's feast, Dictate of Erebos's toll, Dualcaster Mage's copy, Altar of Dementia's mill
- Walking Ballista's pings loose a bronze bolt; Felidar Retreat's landfall and Warstorm Surge's trigger have their own looks
- The Swords of X and Y (Fire and Ice, Body and Mind, Light and Shadow, War and Peace, Truth and Justice, Sinew and Steel, Hearth and Home, Forge and Frontier, Once and Future, Wealth and Power, Feast and Famine): each sword painted after its art stands over the card in a wind from its point, its two colors streaming off its edges, as it lands and when it's equipped
- Guttersnipe's trigger: a fire rune reticle closes on each opponent, then a firebolt
- Safer server: tables, drafts and chat need a login; names, deck names and chat are plain text on one line; oversized messages are cut off as they arrive; saved seasons and replay stars survive a server rollback
- Settings changed while the connection was down are kept (at reconnect they go to the server, instead of the server's older copy coming back)
- Deck changes made offline wait for the login to be confirmed before they go up (a stale login no longer loses them)
- Tapped cards stay turned in the effects that lift them off the table (they started upright)
- Lands only pile up with their twins: Sagas at different chapters and lands with counters get piles of their own
- Targets in a graveyard, in exile or in a hand are named in the prompts (they showed as "?")
- Card texts in tooltips and the zoom show dashes and bullets instead of "&mdash;"
- Hero of Bladehold's battle cry plays once (its own horn, not the keyword's look on top)
- The mana and counters of the four-player rows shrink back as they're spent
- Questions like "Delete this deck?" or "Leave the draft?" come in the game's own window instead of a plain grey one (Escape or a click beside it: no; Enter: yes; deleting and leaving in red)
- Checkboxes and sliders in the game's gold, and every window and popup with the same frame and the same ✕ in its corner; Escape closes the popup on top first, not the screen behind it
- A new theme recolors every screen at once, the menu and Settings too (they kept the old gold until a restart); section headings in one size; success, warning and error colors and the red of Delete and Abort the same everywhere

## Version 2026.11.10.1942 · November 10, 2026
### Changes
- The commander art comes in one small pack per set: updates with new figures download only those, and the old 2.6 GB pack is removed

## Version 2026.11.10.1757 · November 10, 2026
### Changes
- Choosing a target on the stack: identical triggers are shown apart, in stack order, each saying when it resolves, what it aims at and what already targets it
- The card preview no longer stays on screen when the card or window you were pointing at disappears
- A planeswalker's ability on the stack shows its loyalty numbers with the one being used lit up
- Cards in your hand show what they cost right now when reductions or increases change it (green cheaper, red dearer)
- Pointing at your permanent shows what its abilities cost right now, when that differs from the printed cost
- The cards on the stack are larger, and the same size in duels and multiplayer (Settings: Stack card size, Large or Standard)
- Spells and abilities stay on the stack a little longer in games with bots
- Cards dissolve, burn and shatter in their table frame, without growing or changing their picture first
- One effect on many permanents now plays their animations together in quick succession, for every card
- The ability text on stack cards fits the printed text box, takes its color and leaves power/toughness free
- Target arrows show for the top two items on the stack, and for any other while you point at it
- Everything goes to the small stack; its arrow opens the large window
- A permanent pulses as its ability triggers, and the stack steps aside from the permanents behind its abilities
- A yellow line runs from a permanent to its ability or trigger on the stack
- All targeting arrows are deep orange
- Abilities and triggers pop out of their permanent and fly onto the stack as a card showing only that ability (Settings: Abilities and triggers)
- Modal spells and abilities on the stack show only the modes chosen
- The rules of a new table are a dropdown
- Planeswalkers each get a name plate as they enter: their own for the big names (Jace's illusion glass, Liliana's chains, Oko's bark and antlers and more), a plate of their color for everyone else, each plate with lettering of its own
- Bots aim damage behind a "you may pay" at their opponents (Lightning Rift went at their own face)
- Bots use Rogue's Passage and other "can't be blocked" effects when that creature, with its own pumps, kills a player
- Bots count trample when they look for a lethal attack and when they keep blockers home
- Bots don't tap their attackers for convoke before an attack that kills a player, or a big attacker nobody can block
- Bots aim triggered damage at an attacker that would kill them, use mana-sink drains like Blight Pile, hold pumps until blocks and don't cast pumps that change nothing
- Bots stop paying life to Sylvan Library when it would leave them in danger
- Bots keep mana Auras like Utopia Sprawl off opponents' lands, and don't use "may destroy" effects on their own permanents
- A creature forced to attack (goad, "attacks each combat") now shows as the attacker, not the creature you clicked last
- Six show decks with cut-off or differently spelled card names repaired: five can be played now, one (98 cards) in its episode
- Bots talk: short lines in speech bubbles at their portraits when something happens at the table (Settings can turn it off); in a duel they only say what fits two players; they get salty when they miss land drops, happy when a combo works, and chat about cool art now and then
- Zombies rise out of the ground whole, no longer squashed
- Cards show their first printing's art unless the deck picks a printing or the card was drafted
- Draft and Sealed pools show each card as you opened it; different versions of a card stay separate
- Suggest lands: a booster draft or Sealed gets random basics of the set's own art; constructed decks (now with the button too) and cubes get your favorite lands, chosen in the Profile
- The first time Quick Play opens it no longer jumps as the season row arrives
- Show decks: a list that breaks the deck rules (too many cards, added colors, odd commanders) can be played in its episode (Episode only), not as a deck of its own; decks that can't be played are greyed and say so, and Play this episode says how many of its decks can't be played
- New music: five slower Tavern pieces for the long loops of a game; the faster pieces moved to the menus

## Version 2026.11.08.2017 · November 8, 2026
### Changes
- Choosing a deck: a long description scrolls in its own room, the buttons stay in the frame

## Version 2026.11.08.1949 · November 8, 2026
### Changes
- Seasons can give each game a stipulation: a budget, colors, a bracket, commanders from certain sets and more, combined as you like. The deck builder opened from the season shows that game's limits live
- More stipulations: a price per card, the commander's type or rarity, a mana value limit, no staples, basic lands only, bad tribal, and rule breakers: add a color, double partner, any legend as commander
- Setting up a season is a wizard now (name and look, rounds, bonus points, stipulations, a last look); stipulations come from a list of templates, and admins can save their own
- Commander draft in seasons: four commanders that keep the game's limits are on offer; the first game of a season by a die roll, later ones at the end of the game before, the fewest points first. You build your deck for next week around your pick
- Budgets are now checked by the server's own card prices
- A new season bonus: after the game, rate the other players' decks for flavour with stars; the best one gets the points
- Bots time flash creatures that tap on entering (Eddymurk Crab): before your attack at your best attackers, in their own turn only for a much bigger attack, else at your end step
- After leaving a draft or sealed tournament, a Quick Play game's end leads back to the menu again, not to an empty tournament table
- Draft and Sealed bots no longer sideboard in cards of colors their deck can't cast between the games of a match
- Bot deck building: a 17th land instead of a very weak 24th spell, only real cantrips count toward cutting a land, and cards players rarely maindeck count less
- In a game, a small button on your portrait shows your deck's list as it was built, by card type (not its order, not what's left)
- Autopay: Cavern of Souls and other lands whose mana only certain spells may use are tapped first for such a spell, by that ability: a creature of the chosen type can't be countered
- Updating from inside the game works when the path to your user folder has an umlaut or other special letter; if the files can't be copied the game now says so and sends you to the download page
- Commander decks by category: tabs for Wizards precons, SCG Commander VS, Game Knights, Shuffle Up & Play and Commander at Home, over 2700 playable lists from the shows, 100 to a page
- A show deck tells its episode, pilot and theme; bots at the table take decks from the same show
- Play this episode: the bots take the other decks of that episode, in Quick Play and at a table you created. Show decks are played as they were, with cards banned since
- New format: Brawl (Quick Play and Create, 2 to 6 seats), with the Throne of Eldraine Brawl precons and the shows' Brawl decks
- Creatures have voices when they enter: beasts by size, zombies, skeletons, vampires, demons, insects, goblins, angels, snakes, birds, cats by size, wolves, dogs and dinosaurs, with their own volume slider
- Sounds end softly instead of stopping hard
- Miracle has its own look: a shaft of light on the player, whatever the card; a miracle spell no longer plays its look twice
- Hundreds more commanders step out as cut-outs
- Decisions are clearer: a click behind Look at the table no longer answers, only legal clicks count as picks, the arrows end with the question and follow cards to side seats, Whole table holds for the whole spell, and the texts say what is asked (Choose one or two, 1 of 2 chosen)
- A card no longer stays large for a moment after leaving the zoom view
- X spells: the highest X counts cost changes such as Zimone's discount
- Bot turns keep their pace at every game speed, also in big Commander turns
- Bots in multiplayer weigh who is most dangerous (engines and resources most) for their attacks and removal, ease off a player already beaten down, and keep an answer for a real threat
- Bots block a commander whose hit would be lethal commander damage
- Deck builder: Export copies the list for Moxfield, Archidekt or MTGO, or saves it as a file; search results your deck can't hold more of are greyed out; the stacks keep their layout while you click cards away
- Seasons: a list of stipulation templates, admins choose the commanders on offer in a draft and can delete a season; season games wait for their commander draft

## Version 2026.11.06.1912 · November 6, 2026
### Changes
- Deck builder: beside the big card a box with what a card costs in its printings, how popular it is (share of decks, EDHREC rank, as commander, salt), where it's legal, its rules text and more
- Deck builder, list view: pointing at a card in the search shows it big over the deck list, no longer over the cards you are choosing from
- Deck builder: a sort by price, and pointing at a card in the search shows what it costs above the card (Cardmarket, in euros)
- Deck builder: ascending or descending for every sort
- Deck builder: choose several sets at once, in a window with every set grouped by type and block, with a search bar
- Deck builder: a Land filter among the colors: with a color it shows the lands that make that mana (green and Land: every land that adds green). It replaces Basic lands; Playable only is gone for now
- Deck builder: with the Legendary filter on, a sort "Popular as commander" (by EDHREC's list of commanders)
- Deck builder: a dropdown beside the colors: cards that contain any of the chosen colors, all of them, exactly those colors, or none of them; in a commander deck also "Is commander color identity" (it replaces the Commander colors button)
- Deck builder: the search results are as sharp as the cards on the table
- The emote button moved from the chat window to a small round button on your portrait, so it no longer covers your library, graveyard and exile
- Deck building in a draft or Sealed has a Leave button
- New house rule, Two land drops: everyone may play an additional land on each of their turns
- New house rule, Creatures have haste: all creatures have haste
- New house rule, Scry every upkeep: at the beginning of their upkeep, each player scries 1
- New house rule, Cheaper first spell: the first spell each player casts each turn costs {1} less
- New house rule, Second wind: at the beginning of their end step, a player with no cards in hand draws a card
- New house rule, Lifelink commanders: commanders have lifelink
- New house rule, Fallen commanders pay: whenever a commander dies, its owner creates a Treasure
- New season bonuses an admin can pick for a season (existing seasons stay as they are): Pacifist (won a game of at least 5 rounds without casting a creature spell), Without the commander (won a game of at least 5 rounds without casting their commander), Last stand (knocked a player out while at 5 life or less), Giant killer (won with the deck in the lowest bracket at the table, alone in that bracket), Token strike (knocked a player out with damage from a token in the final blow), Overkill (dealt 20 or more combat damage to players in one turn), Big spell (cast a spell with mana value 10 or more)
- The New season form is wider and its list of bonuses scrolls, so the form always fits the screen
- Sealed: your boosters are torn open one after another, the rares and mythics gather on the table, and a Build button takes you to deck building
- Commander cut-outs for every Captain America, Doctor Doom, Invisible Woman and Iron Man (with Tony Stark)
- Opening a draft pack: the booster drops onto the table, is torn open with light pouring out, and its cards fly to their places; rares and mythics flare as they land
- The House rules emblem is now a child's crayon drawing
- Tezzeret the Seeker steps out of his card on an etherium plate
- New card looks, the last of the players' decks: Sting, Stingerquill Voxmancer, Stock Up, Stoneforge Mystic, Tekuthal, Temporal Trespass, The Destined Black Mage, The Earth Crystal, The Infamous Cruelclaw, The Seriema (the ship flies across), Theater of Horrors, Thermo-Alchemist, Thousand-Year Elixir, Thraben Charm, Tinybones, Tivit, Tower Defense, Tromell, Unstable Amulet, Valakut Exploration, Virtue of Courage (the table cracks with lava), Vivi's Persistence, War Machine (it flies in firing), Weftstalker Ardent, White Sun's Twilight, Wild-Magic Sorcerer, Wirewood Channeler, Wizard's Staff, Wolverine Riders, Wrenn's Resolve, Wyll's Reversal, Yuna and Zimone
- New card looks, each after its artwork: Red Elemental Blast, Relic of Legends (the hammer in lightning), Rishkar, Rosie Cotton, Sanctum of Stone Fangs (fangs of stone over the table), Scavenging Ooze, Sculpting Steel, Secure the Wastes (a sandstorm), Semester's End (caps in the air), Sensei's Divining Top (it hops onto your library), Share the Spoils, Sigarda's Aid (the angel glides down), Skrelv's Hive (a swarm of mites), Sokka, South Wind Avatar, Sphinx of Foresight, Spiteful Banditry, Split Up (the table cracks in two), Staff of the Storyteller and Steelshaper's Gift
- New card looks, each after its artwork: both Nahiris (Heir of the Ancients steps out of her card on a stone plate), Nalfeshnee, Nautiloid Ship (the ship glides across the table), Nibelheim Aflame (the table burns, Sephiroth in the fire), Open the Way, Oracle of Mul Daya, Painful Quandary, Part the Waterveil (the floating island), Party Thrasher, Passionate Archaeologist, Patrolling Peacemaker, Pentad Prism, Plargg and Nassari, Pristine Talisman, Prosper, Puresteel Paladin, Rasaad yn Bashir, Reckless Fireweaver and Reckless Impulse
- Bots play a few spots better: they counter with Refute even with no other cards in hand, keep the better copy when the legend rule hits, save a Treasure for the spell they planned, don't spend their mana into a ward they can't pay, and wait with an instant for the creature that hurts most
- Bots read more spots right: damage redirected to their own creature (With Great Power) is no longer treated as life they can spare, they don't kill their own creature when it is stolen for a turn, they keep counterspell mana up against a card they saw go back on top of your library, they count on the token when recruiting, they cast a creature before combat to saddle a Mount, and they read Evolving Wilds as fixing for a splash

## Version 2026.11.05.1318 · November 5, 2026
### Changes
- Emotes: a face button by the chat opens 24 emotes, and yours plays beside your portrait for everyone at the table: happy (Ragavan), laugh (Krenko), cackle (Liliana), well played (Teferi), GG (Elspeth), triumph (Elesh Norn), boast (Nicol Bolas), battle yell (Garruk), amazed (Squee), thinking (Ugin), intense thinking (Urza), suspicious (Alquist Proft), coin flip (Krark), calm (Nissa), healing (Ajani), no no no (Dovin Baan), disoriented (Fblthp), blank stare (Storm Crow), salty (Jace), disappointed (Spore Frog), sad (Grief), angry (Chandra), table flip (Tibalt) and scared (the Gilded Goose)
- Commander voice lines are clear and play to the end: nothing cuts them off any more, effects and music step back while they speak, and a card with its own line no longer roars over it. The Ur-Dragon's lines are new: the voice in front, thunder and cave echo behind it
- More planeswalkers step out of their card, each with its own name plate: Kaya, Geist Hunter (a white ghost cloud) and Chandra, Dressed to Kill (her name burning)
- Moxen enter as their own painted jewel: Chrome Mox, Mox Jasper, Mox Amber and Mox Opal
- A new font to choose in Profile > Look: Metal Mania (fiery titles, readable text)
- New card looks, each after its artwork: Empowered Autogenerator, Enthusiastic Mechanaut, Frontier Siege (the crest of your side), Great Forest Druid, Greenwarden of Murasa, Gyre Sage, Headliner Scarlett, Herald of Secret Streams, Hostile Hostel (the haunted manor rises), Increasing Devotion, Imperious Perfect, Inexorable Tide, Ingenious Artillerist, Iridescent Vinelasher, Jaws of Defeat (the jaws snap shut), Joraga Warcaller, Kellogg, Kessig Flamebreather and Laelia
- New card looks: Abyssal Harvester, Advanced Reconstruction, Aettir and Priwen, Akiri, All Will Be One (Elesh Norn rises in red mist), Arachnogenesis (a web across the table), Arwen, Ashes to Ashes, Atemsis, Baron Bertram Graywater, Biorganic Carapace, Bitter Triumph, Black Market (a rain of coins and black gems), Catapult Fodder, Cauldron of Souls, Champion of Lambholt, Chandra's Incinerator, Chasm Skulker and Chord of Calling (a griffin circles while you choose)
- New card looks: Commander's Plate, Coruscation Mage, Cosmic Cube, Creeping Bloodsucker, Crystalline Giant, Culling the Weak (hacked apart, black orbs rising from the mist), Damning Verdict (the gavel falls), both Danithas (before their stained glass), Danse Macabre, Doom Variant, Fecund Greenshell, Future Sight, Lavaspur Boots, Leyline Axe, Lifecrafter's Bestiary, Llanowar Tribe, Lux Cannon, Magewright's Stone, Magus of the Candelabra, Mahadi, Marwyn, Mass Calcify, Master Biomancer, Merciless Eviction (a black sun), Merry, Mind's Dilation and Mnemonic Betrayal
- Draft bots weigh how much a card improves their deck when drawn a little less: fewer thin decks
- New card looks after their artwork: Dazzling Theater (the curtain parts), Delina, Wild Mage (her d20 burns), Doran, Besieged by Time, Duelist's Flame, Elvish Warmaster, Experimental Augury, Extended Absence (a violet rift), Ezuri, Claw of Progress, Fathom Mage and Florian, Voldaren Scion (his violin)
- Planeswalkers with a cut-out step out of their card as they enter, like commanders but smaller, with their name and loyalty (Elspeth Tirel first, sun rays behind her)
- New card looks after their artwork: Drana and Linvala, Expel the Interlopers (a dragon of white-gold fire), Hour of Reckoning (a curtain of golden light), Imperial Seal (the sealed letter), Flowering of the White Tree (the White Tree grows), Ghost Vacuum, Heartless Summoning, Gandalf, Goblins' Bane, Elspeth Tirel (all three abilities) and Ezuri's Predation (the beasts leap at their prey)
- The rope is easy to see now: a burning rope across the middle of the table with the name of whoever is holding up the game (the bar under their portrait is thicker too)
- New card looks for cards in your decks, each after its artwork: Reclamation Sage (a lash of green light, the target breaks into stones and moss), Forgotten Ancient (vines climbing round it), Entomb (a great hand out of the grave takes the card), Roaming Throne (its heavy steps), Welcoming Vampire (bats and crimson mist), Decree of Pain (a violet lightning storm), Demonic Counsel (shadow hands and whispers), Dusk (the sun sets, big creatures fade into the dusk), Shamanic Revelation, Dawn's Truce, End the Festivities (fireworks) and Elvish Archdruid
- Ponder has its own look after its M10 art: three dark orbs with glowing rims in a misty night sky, a pale hand reaching up, one orb sinking into your hand
- Many copies of the same trigger resolving one after another (The Meathook Massacre's drains and life gains after a wipe, Blood Artist) now overlap and speed up instead of playing one by one
- A spell or ability that deals a varying amount of damage (Scourge of Valkas' X, Fling) shows how much next to its arrow
- New looks: Gray Merchant of Asphodel (black smoke round the table, the merchant rising, a drain from every opponent), Living Death (every creature rots away, then the dead walk out of the graveyards through the mist), Doomsday Excruciator (the libraries crumble into ash but for six cards)
- Updates are much smaller: the game is split into parts (code, effects, commander art, sounds, backgrounds) and an update downloads only the parts that changed. MTGCommander.exe itself stays the same file from update to update, so Windows Smart App Control should stop blocking it after each update
- Draft bots stay in their colors instead of jumping lanes over what a returning pack is missing, and build stronger decks for it
- Draft bots that come up one playable short no longer play an 18th land: they splash the best card of a third color instead (23 spells, 17 lands)
- Draft bots in Outlaws of Thunder Junction, Murders at Karlov Manor and Wilds of Eldraine draft and build their decks properly again: a card that rewards outlaws, players or spells made them take the first card of the pack
- New card looks: Austere Command (a great rune of glittering gold dust whose sparkle wave destroys), Farewell (a white hand comes apart into a flock of butterflies that carry everything away), Windfall (gusts tear the hands away), Sink into Stupor (the card sinks into a swamp), Doubling Season (its golden twin, x2 on every doubling); plus Ephemerate, Sovereign's Bite, Ulamog's Crusher, Natural Order, Gaze of Granite, Frost Bite and the shield counter break
- The AI no longer bounces your creatures with an enters effect, only to let you play them again (Into the Roil on Flametongue Kavu)
- The AI no longer sacrifices a permanent for a pump that doesn't win, and no longer channels a card for a land with lands in hand
- The AI no longer thinks a menace creature can't be blocked when it has two blockers, so it stops throwing creatures away
- Sacrifices look like what took them and what for: devoured creatures are bitten apart, altars crush them into mana, vampires drain their blood, protection outlets light a halo while the creature explodes in light, edicts rip or claw them, Phyrexian outlets melt them in acid, Food is eaten bite by bite, and more
- 123 more commanders make their entrance as cut-out figures (605 in all), among them Gollum, Arwen, Lobelia and Zegana
- The game has its own icon in the taskbar, the window and on the program file instead of the Godot icon
- The AI no longer makes a creature temporarily bigger but more fragile when a blocker would kill it and no attack follows (Flexible Waterbender)
- The AI uses Blood tokens only to discard a spare card, not the spell it is waiting to cast
- The AI no longer pays life to equip leftover equipment (Dark Knight's Greatsword at 5 life)
- The AI no longer spends cards or mana on effects that end with the turn unused: pumps, first strike or flying outside a fight, a creature animated with no attack after it, damage that kills nothing
- In answer to your spells the AI no longer fires off abilities that change nothing
- The AI no longer discards two good cards for an extra cost like Rona's recast from the graveyard; it still does with spare lands

## Version 2026.11.03.1229 · November 3, 2026
### Changes
- The AI no longer sacrifices a land for a cost while it is short of lands and has something else to give
- Against Shakedown Heavy and similar attackers, the AI only lets you draw when the hit would leave it low
- The AI casts Agonizing Remorse, and can use Memory Leak, Psychic Intrusion and similar "look at their hand and take a card" spells at all (it never targeted the opponent with them)
- The AI no longer casts Argentum Masticore and similar "discard a card or sacrifice it" permanents with no card left to discard
- The AI no longer warps a creature that does nothing the turn it enters (Bygone Colossus exiled before it could attack)
- The AI no longer spends a creature's own until-end-of-turn boosts (oil counters, pumps) when the creature can't use them that turn
- Draft bots build stronger decks: weak cards at most once, no synergy cards without their support (Graf Harvest without Zombies, lifegain or spell payoffs without enough lifegain or spells), the cheaper card when two are about as good, and at most one combat trick or situational card and two draw spells unless their deck wants more

## Version 2026.11.03.0901 · November 3, 2026
### Changes
- Draft bots build better decks: they judge cards by how much they actually add to the decks that play them (17Lands), run fewer auras and pump spells than creatures can carry, and no longer fill slots with weak artifacts like Terrarion
### Fixes
- The AI no longer attacks into Flameblade Angel and similar cards when the pings for each attacker would kill it
- Madness asks you whether to cast the card (it was cast by itself, the mana tapped for you)
- The roll for the first turn shows on a clean table: no menus or game panels behind the dice (the first game of a tournament or Quick Play still had some)

## Version 2026.11.02.2349 · November 2, 2026
### Added
- Tournaments: a Watch button on the other players' running matches
### Changes
- Your turn starts with a deep bell you can hear over the music (it was there, but too quiet)
- Sealed: 20 minutes of deck building (was 10); the settings show all six boosters
- Zoom views are wider, so more cards fit; piles of identical cards hold at most 4 (more start a new pile) and spread further apart, easier to click
- Mulligan: the view follows your answer right away (Keep: back to the table; Mulligan: the old hand goes while the new one is dealt)
- Small life drains (1-2 life, Screeching Soulbreaker) play faster
### Fixes
- Sealed table settings: the Create table button was off the bottom of the screen (the settings scroll now)
- Attack all: the arrows to choose whom to attack start from your attackers, not from a land you tapped
- Blocking a menace creature with one creature now says it needs two or more (it silently did nothing)
- Zoom view: clicking a pile picks its next card (it only counted up the front one, so you couldn't select more)
- Ward: its flare and sound play once, not again and again

## Version 2026.11.02.1953 · November 2, 2026
### Added
- 80 more commanders step out of their card art when they enter (482 in all): Akroma, Angel of Fury, Muldrotha, Karador, Chulane, Maelstrom Wanderer, Koma, Yarok, The Locust God, the Final Fantasy X guardians and more
### Changes
- Deck builder, Curve split: the cards of each mana value are stacked (creatures above, other spells below) instead of laid out side by side
### Fixes
- A creature pushed toward the lands (choosing a target) is drawn over the lands instead of sliding under them
- A combat trick on a creature in combat: the creatures it fights stay in view while you choose the target
- The next game of a match starts on a clean table: the dice no longer roll over the last game's board, log and phase bar
- The AI uses counterspells when they matter: Syncopate and other "unless they pay X" counters ask for more than the opponent has left, and a counter is no longer held through every creature while it is ahead
- The AI uses removal that only hits small creatures (Cut Down, Fatal Push and the like) on the creatures it can hit, instead of keeping it for a bigger threat it could never answer
- The AI sees creatures that grow (a +1/+1 counter each spell, each upkeep, each creature entering) as the threats they become, and aims its removal at them
- The AI keeps permanents that make a creature token again and again (Oni-Cult Anvil) instead of sacrificing them for a one-time gain
- Dragonhawk, Fate's Tempest deals its end step damage also when an opponent has already left the game

## Version 2026.11.02.1700 · November 2, 2026
### Added
- View deck in the deck popup: any precon, weekly deck or your own deck as small cards with their counts; hover a card to see it big
- Drafting: copies of a card in your deck and sideboard show as one card with x2, x3 on it
- 68 more commanders step out of their card art when they enter (402 in all): Glissa Sunslayer, Gisela, Drana, Elenda the Dusk Rose, Massacre Girl, Selvala, Bartolomé del Presidio, the Doctors and their companions and more
### Changes
- The server collects the 17Lands ratings of every draftable set in the background (only what it doesn't have yet, or what 17Lands has updated since; new sets are checked daily for their first 30 days), so draft bots have real card ratings from the first draft of a set
- The weekly decks are refreshed every Monday morning, so the weekend's tournaments are in
- Weekly decks always show their colors (taken from the cards' mana costs when the source has none)
### Fixes
- Xu-Ifit, Osteoharmonist: the creature it returns no longer keeps its enters abilities
- Sneak (Teenage Mutant Ninja Turtles): a creature cast with sneak now enters tapped and attacking, like the creature it replaced
- Game log: an exiled token shows its name instead of "a face down object", and unlocking a Room door names the Room; a Saddle activation says what it does, and "can't untap / can't get counters" notes appear once a turn instead of many times; "doesn't untap" notes (Ty Lee) name the creature instead of repeating the whole card text
- The AI keeps Snakeskin Veil and similar protection for removal instead of casting it into an empty board for the counter
- The AI casts creatures like Unsparing Boltcaster after combat, when their enters ability has a damaged creature to hit
- The AI picks the right X for reanimating vehicles like Dune Drifter, and no longer casts Argentum Masticore with an empty hand
- The AI casts blitz creatures for their full cost when it has the mana, so it keeps them
- The AI no longer sacrifices good creatures for a small optional reward (Scavenger's Talent gave up three creatures to get one back)
- The AI casts its equipment with mana it would otherwise leave unused, instead of holding it for turns
- The AI no longer sends creatures into blockers when the attack can gain nothing (a lone 1/1 into two 2/2s)
- "Choose a creature type" (Realmwalker, Moritte) names the type the bot's deck shares instead of always Shapeshifter
- The AI fights with "fights up to one target creature" auras and cards (it always left the fight empty)
- The AI no longer returns its own lands with Kazandu Stomper for nothing, and takes a land from "put a card into your hand" effects when it is short of lands
- Tomb of Annihilation: bots no longer sacrifice or discard their best card in Veils of Fear and Sandfall Cell
- Draft bots build decks that cast their spells: three colors only when the mana really supports it, splashes only when worth what they cost the main colors, a one-card second color treated as a splash, and on-color tri-lands played
- Draft bots pick dual lands their deck will play, and skip a third copy of a legendary creature (two of a good one are fine)
- Draft bots avoid top-heavy decks (no more four 6-drops with nothing at 4-5)
- Draft bots draft three colors only with fixing (outside sets built for it), and stick to the color combinations a set supports
- Draft bots no longer count counterspells as removal or play cards whose plan the deck lacks (Tolarian Terror without spells, affinity with none of the type)
- Draft bots play at most two copies of a combat trick
- Draft bots value creature lands (the Restless lands), play one land less with several cheap draw spells, and skip cards that count a type they barely have (Bat Colony without Caves)
- Draft bots always take a bomb when they see one, and Strixhaven Learn decks draft Lessons and keep some in the sideboard to fetch
- Draft bots give a deck's second color enough lands, play any-color lands, count cheap land searches as lands, and stop picking cards far below the best one
- Draft bots play enough creatures (no more 2- or 8-creature decks) and leave out cards that lock their own deck (Codie, Vociferous Codex) or need snow they don't have
- The AI exploits with Infernal Captor (and similar) when the one-turn steal hits hard: a cheap creature for their big one, not a real creature for a small attacker
- The AI puts reach and flying Auras (Reach for the Sky) on the creature that can then stop the opponent's flier, not on one with deathtouch
- The AI keeps Hakoda, Selfless Commander (and similar "sacrifice: your creatures get a buff this turn") for when it saves something: removal on the stack or a creature about to die in a fight
- The AI puts keyword counters where the keyword is new: Beorn the Fierce's trample counter no longer goes on Beorn itself
- The AI no longer taps its own creatures or already tapped ones with "tap one or two target creatures" (Gaze in Wonder)
- The AI uses its combat tricks after the blocks: it sees which creatures die in each fight, so it saves a blocked creature (indestructible, back to hand), bites a blocker or pumps to win the fight; protection like indestructible waits for the blocks instead of going on an attacker before them
- The AI counts tokens that come later (The Eagles Are Coming!'s 4/4 Bird at the next upkeep)
- The AI plots its cards: with mana left over at the end of its turn, a card with plot goes to exile, to be cast free on a later turn (it never plotted; a free cast it had chosen once was also skipped when it played its land first)
- The AI blocks big tramplers correctly: its forecast let a trampler's damage through a blocker too tough for it, so it blocked something smaller and took more
- The AI no longer blocks Anzrag, the Quake-Mole (and the like) when the extra combat its block brings would kill it
- The AI watches its library: with few cards left it stops surveiling them into the graveyard and avoids cards that mill itself (it once decked itself while far ahead)
- The AI foresees its own creatures' life-loss triggers (like Savanti Romero's) and gains life first when they would kill it
- The AI no longer buys Class levels whose abilities can't do anything on the board (Scavenger's Talent without a way to sacrifice)
- The AI doesn't attack into a blocker that can pump itself to win the fight (Desolation Prowler)
- The AI uses its creatures' tap abilities (like Iron Spider's) after your combat instead of tapping its blockers in its own turn
- When you attack, the AI plans its removal together with its blocks (including flash creatures it can still cast): it kills the attacker it can't block well, not just the biggest one
- The AI saves "exile until the next end step" cards (Hide on the Ceiling) for your combat or a winning attack, instead of clearing blockers that come right back
- The AI no longer sacrifices a creature to copy a counterspell when there is nothing else to counter (Make Disappear), which made it skip the counter entirely
- The AI plays a basic land before the land side of a double-faced card, keeping the spell side for later
- The AI no longer pays a kicker that makes it discard a full hand (Battlewing Mystic)
- When the AI must sacrifice a creature, it keeps the ones with valuable abilities (card engines, lords), not just the biggest bodies
- Abilities that tap the AI's creatures (Siege Zombie) wait until after combat, so those creatures can attack or block first
- The AI no longer puts an Aura on a creature that will be exiled at end of turn (unearth)
- The AI no longer casts Codie, Vociferous Codex while it still has creatures to cast (Codie stops permanent spells)
- The AI values its creatures' "when it deals combat damage to a player" triggers when attacking (Norman Osborn attacks now)
- The AI attacks its battles only with creatures your blockers can't simply kill, never with 0-power creatures, and not at all when it can win by attacking you
- When the AI discards, it keeps a land of a color it still needs over a plain land drop
- The AI doesn't loot with an empty hand (Faithless Looting would only throw away the cards it draws)
- The AI no longer throws away cards or creatures to pump an attacker unless it wins a fight or the game (Noose Constrictor, Fleshtaker)
- Teamwork: the AI taps only as many creatures as the cost needs, not all of them
- The AI stops paying life for pumps that do nothing (Desolation Prowler out of combat or against what can't target it)
- Flash creatures whose entering removes something (Rooftop Assassin) wait until there is a target
- The AI mulligans a hand whose lands make none of its spells' colors
- The AI doesn't promise a gift that adds nothing (a copy of a legendary creature, a counter the plain mode already does)

## Version 2026.11.02.0114 · November 2, 2026
### Fixes
- The AI counts its creature's own pump when blocking: Desolation Prowler now blocks and kills a bigger attacker by paying life for +2/+2
- The AI takes planeswalkers that make a creature every turn seriously: its removal goes at them instead of being held or spent on a token
- The AI sees what its cards' "when this enters, target ..." abilities do: in its forecast they were sometimes lost, so it held cards like Crude Bent Blade (an edict on entering) even when it needed the removal
- The AI aims its removal better: a creature that can't attack or block alone counts for less, and a creature that draws cards whenever your creatures hit counts as the engine it is

## Version 2026.11.02.0029 · November 2, 2026
### Fixes
- The AI pays the right amount of energy for Galvanic Discharge and Harnessed Lightning: what kills the target, keeping the rest (it was random: 1 damage on a 2/2, all 5 on a 1/1)
- The AI stops tapping its creatures into a Spacecraft that has already reached its last Station threshold
- "Up to one target" can mean none: the AI no longer aims such damage at its own creature when you have none (Pinnacle Kill-Ship), nor bounces its own token for nothing (Zephyr Sentinel)
- The AI no longer aims damage at itself when it is losing anyway (Boulder Dash sent 1 damage at its own face, or 2 at 2 life)
- The AI keeps an Oblivion Ring-style card (Makeshift Binding) until you have a creature to exile, instead of casting it into an empty board
- The AI casts its flash creatures: one waited for your turn even when its own turn had spent the mana, so it never came (Stormrider Spirit held for many turns)
- The AI blocks to survive a trampler: the damage a trampler pushes over a small blocker now counts, so it keeps enough blockers home and uses them
- The AI saddles its Mounts for the attack with creatures that lose nothing by it (it almost never saddled)
- The AI blocks a big attacker with three creatures when two can't kill it
- The AI keeps its blockers home when attacking would leave it dead to your trampler next turn (it put its weakest blocker in front of the trampler in its own forecast)

## Version 2026.11.01.2251 · November 1, 2026
### Added
- Villainous Wealth gets its own look: while it resolves and its caster casts the exiled cards, a ring of black smoke and mist with green and blue light closes round the table (thicker toward the edges), gold light glows up from below, and gold coins keep tumbling down behind the cards and out of the frame, most along the left and right borders, until it is done
- Foil cards from boosters shine: in draft packs, your picks and the deck building after a draft or sealed, a foil has a rainbow sheen sweeping across it now and then
### Fixes
- The AI no longer puts harmful auras on its own creatures: about 30 more (Cooped Up, Bitter Chill, Capture Sphere, World-Weary, Petrify, Kudzu and others) now go on your creatures, as they should
- Choosing a target at a table of four or more: the card you cast and its aiming arrow show fully below the banner (the card's top and the arrow's start were hidden behind it)

## Version 2026.11.01.2156 · November 1, 2026
### Fixes
- Brothers' War drafts no longer break: about every second draft crashed while the packs were made (three meld cards were listed under the wrong card numbers)
- Bots crew a Vehicle with just enough power instead of tapping every creature they have, don't crew one that came this turn, and attack with the Vehicle they crewed
- Bots read harmful auras and spells correctly instead of as buffs: Candy Grapple, Vayne's Treachery, Witness Protection, Prison Sentence, Charmed Sleep, Bubble Snare and others were held all game or put on their own creatures
- Bots keep a good card on top when a creature explores instead of always putting it into the graveyard
- Bots exploit only with a lesser creature to give and something for the payoff to hit, never their only blocker at low life or the exploiter itself
- Against "lose 3 life unless you sacrifice or discard" (Thornplate Intimidator, Tergrid's Lantern) bots take the life loss while they can spare it, and give a spare card before a permanent
- Bots no longer take Combustion Man's damage at low life, or for a creature that is already indestructible
- Bots take Academy Loremaster's extra card only when the {2} tax doesn't stop their spells, discard their hand to Moonveil Regent only with nothing worth keeping, venture into Lost Mine of Phandelver and pick dungeon rooms by what they do
- Bots attack with creatures their opponent can't block well instead of waiting, and block with lands that become creatures when that saves them
- Bots cast a fog (Holy Day, Fog) against a lethal attack
- Bots no longer cast "can't block" spells like Duel Tactics when they don't attack afterwards
- A bot that is dead on board with no way out lets the attack through instead of making pointless last plays
- Angel of Serenity's exile now checks each target like other targeted effects
- Dragon's Fire can be cast without a Dragon (the optional reveal stopped the spell)
- A Room cast as one door always enters with that door unlocked (some entered with both locked)
- Champions of the Shoal triggers only when it becomes tapped itself, not for every land tapped
- Teamwork spells cast with teamwork (Go Nuts!, Widow's Bite, Atlantis Attacks, HULK SMASH, Murdock's Crusade) and Pyrrhic Strike with its condition resolve both modes
- Reconfigure attaches only to another creature; Pestilent Cauldron's exile takes four cards from one graveyard; Bringer of the Last Gift sacrifices each creature once
- Bots choose a trigger's or a Saga's mode by what it does for them instead of always the first one
- Bots keep their removal and the lands their spells need when they discard, instead of judging cards by mana cost only
- Bots don't aim spells at a creature whose ward they can't pay, and treat a battle by who protects it
- Bots use their removal on the creature that is killing them: holding the last removal spell no longer looks better just because their blockers hold your other creatures, and a creature that kills them within a turn or two weighs much more
- Bots in multiplayer games judge the whole table: removal on any opponent's creature counts (not only on the first opponent's), attacks and blocks are played through against each opponent (a 5/5 no longer attacks into blockers that can double-block it), and an opponent already out of the game no longer makes them think they have won
- Bots discard the card they can't cast (a spell of a color none of their lands make) before a castable one
- Bots keep the lands open that their instants need: they pay in their own turn with other colors, so an answer like Kill Shot can still be cast in your attack
- Rend Flesh is a sorcery, as printed (it was an instant)
- Bots proliferate what helps them (their own good counters, your -1/-1 counters and poison), never their own poison, and count poison counters as a clock
- Draft bots build with what a card really costs: devoid Eldrazi by their cost's colors, hybrid symbols by either color, no cards needing {C} without colorless mana, a prototype's colors, a Room by its cheaper door, a modal card with a land back as half a land, and drafted snow basics instead of plain ones
### Changes
- The game starts with the Beca Games logo and an intro piece of its own; a click or a key skips the logo, the music plays on into the menu
- Commanders speak as they enter: The Ur-Dragon (with thunder rolling), Atraxa, Kelsien and Cloud each have three lines voiced by Ming, one at random each time
- New music composed for the game by Ming: ten pieces at the table, four more in the menu
- Draft and sealed boosters follow the real Play Booster collation of each set since Murders at Karlov Manor: special slots, bonus sheets (Breaking News, Mystical Archive, Through the Ages ...), Special Guests, foils and alternate printings
- Draft bots read signals by how deep each color runs and what wheels, build mana bases by Frank Karsten's source counts, and play three colors only with real fixing
- Limited deck building: cards whose every copy is in your deck leave the pool (basic lands stay)
- Spells with several targets that may pick the same one more than once show a gold badge with the count on each picked target

## Version 2026.11.01.1108 · November 1, 2026
### Fixes
- Bots now cast cards with hybrid mana like Deceit ({4}{U/B}{U/B}) for their full cost: they counted each hybrid symbol as two mana, so seven lands looked like too few and Deceit was only ever evoked or held
- Bots cast Wear Down and other gift spells whose promise needs a second target when there is only one (the promise was always made, so the spell could never be cast)
- Bots use artifact and enchantment removal (Wear Down, Naturalize) on the target there is instead of holding it all game for a better one that rarely comes
- Bots now see what Winter Moon, Winter Orb and similar locks cost them (the lands that stay tapped) and destroy them
- Bots keep instants for your turn when casting them in their own turn gains nothing: removal with no attack of their own coming, card draw like Opt, Nowhere to Run. They still cast removal before their own attack, at a planeswalker, or while you are tapped out
- Bots cast instant card draw like Opt at the end of your turn instead of holding it all game
- Bots no longer spend a shrink spell like Stab on an unblocked attacker it doesn't kill just to take a little damage off, unless the damage would be lethal or their life is low
- A creature returned from a graveyard to the battlefield now slides to its place on the table instead of flying into its owner's portrait first
- A discarded card lands on the graveyard and stays there: it no longer vanishes for a moment before the pile shows it
- Cancel skip works again: the game now stops at the very next step (also on an opponent's turn without stops there), and the cancel is repeated if the skip is still running
- Dividing your attacker's combat damage among blockers: the suggestion now kills the biggest blocker it can first, then the next
- Bots no longer flicker their own tokens (they never come back) or creatures that gain nothing from it: their own permanent only for an enters effect or to save it; Kykar makes a Spirit instead
- The end of a tournament: the last game's result leads back to the tournament page, and the winner celebration shows there, instead of both opening at once with different ways out
### Changes
- Sealed and draft deck building: your pool is the area at the top ("Your pool: 87 cards, 80 not in the deck"), the deck below; the pool no longer shows up as sideboard columns among the deck's
- Sideboarding between games of a Limited match: the sideboard is one column at the right edge, with a scrollbar when it is long
- Sealed and draft deck building gives the pool much more room: about half the screen (two rows of cards, drag the bar to change it), one row of filters above it, the statistics closed until you open them. The deck editor for your own decks keeps its layout
- Your own combat: after the attack, with nothing you could cast or activate, the attack, block and combat damage steps pass by themselves and the game goes on to your second main phase (not in Full control)
- No "Edit decks" button at draft and sealed tables: your saved decks don't play there, and the tournament deck changes in the sideboarding between games

## Version 2026.11.01.0238 · November 1, 2026
### Changes
- Smart stops (Settings > Gameplay, off by default): on opponents' turns the game stops only where you could act. Holding an instant, a flash card or an ability you can pay for, it stops at their end step and after they attack; otherwise their whole turn goes by (you are still asked when they cast something, and you still block). Your own turn stays as you set it
- Resolution preview (Settings > Gameplay, off by default): pointing at a spell or ability on the stack shows what it would do on this board, in up to four short lines beside the card ("Their Grizzly Bears dies", "You draw 2"). Hidden cards stay hidden (only counts), and choices made when it resolves are named, not guessed
- Mystery Booster and cube drafts: bots no longer read a few reprints from one set as that set's archetypes, and what fits their picks counts for more there, since the card numbers in a mix from everywhere are only general
- Etali, Primal Storm: when it attacks, the top card of each library now bursts out of a dark thundercloud crackling with red-gold lightning, hangs large and readable (one per player), then flies into exile
- Free casts (Villainous Wealth, Epic Experiment, cascade, discover, "Cast spell ...?", Etali): the cards are shown large, every castable one marked with a check; click a card to leave it out, then Cast N or Cast none. Lands and other cards that can't be cast are dimmed and labelled. With your own Etali the cards stay hanging under its storm for the choice
- 82 more commanders step out of their card art when they enter (334 in all): Etali, Talrand, Lyra Dawnbringer, Niv-Mizzet, Dragonlord Dromoka, Marchesa, Krenko Tin Street Kingpin and more
### Fixes
- Thoughtseize, Duress and similar now take the best card of your hand (they often took a weak one)
- Pithing Needle and other "choose a card name" effects name the card that hurts you most, not a random one
- Bots no longer pay for abilities that do nothing at the moment (Psychic Frog's flying with no attack, "when you attack this turn" on your turn)
- Flickerwisp and similar no longer exile your land (it came back untapped and set off your landfall)
- Bots keep Snakeskin Veil and other protection spells for a real threat instead of casting them for the counter
- Bots no longer tap a creature that is already tapped, or bounce a creature with haste that comes straight back
- The decision box no longer jumps between two spots from one question to the next when the layout edit mode (Ctrl+Alt+L) has moved it
- A sudden question ("You may discard a card", a choice, targets) no longer takes a click or F2 meant for the Pass button before it: for a moment after it appears its buttons wait. Incinerating Blast discarded a card that way, unasked
- Dividing damage among creatures: the - and + now sit under each card instead of over its power and toughness, and a badge on the card shows its power and toughness as they are now, with the damage it already has

## Version 2026.11.01.0035 · November 1, 2026
### Changes
- Bots think twice before evoking Solitude or Fury: giving up two cards is only worth it against a real threat (a big attacker, a fast clock, an engine), not a 2/1 when they are at 20 life
- Bots no longer tap a creature for mana when attacking with it is worth more than what the mana buys
- Bots pay life for a shockland or Soporific Springs to enter untapped only when the mana will likely be used, not just to keep a counterspell open
- Fewer clicks: with no mana you could use (the first turns, tapped out) and nothing free to respond with, the game passes for you at once: nobody can be bluffed then
- No more "Select attackers" when none of your creatures can attack: the step goes by without a click
- Multiplayer: another player's spell that targets only other players and their cards passes by without asking you, when you can't respond anyway
- "Play again" after a Quick Play game: the same deck against a new bot deck of the format, in one click
- Lethal warnings in combat: declaring blockers says "you die to this attack unless you block" (counting trample, double strike and poison), and declaring attackers says when the attack is lethal if they don't block
- "Why can't I play this?": hovering a card in your hand that you can't play says why (sorcery speed, not enough mana, a missing color, no legal target, a land already played)
- Keywords explained: the box beside a hovered card lists each keyword with a short reminder of what it does (flying, ward, offspring, gift and about 50 more), for cards in hand too
- Combat damage among several blockers is assigned for you when your attacker can kill all of them (the rest tramples over); when it can't, you choose, with the most kills already set up
- Hold Ctrl while casting a spell or using an ability to keep priority after it, to respond to it yourself (Full control still does this every time)
- Back out of a spell while casting it: Cancel (or Esc) now also works while choosing its required targets; the cast is undone, tapped lands untap, and your opponents never saw it
- Trigger order only when it matters: when several of your triggers happen at once and every order would end the same way (draw a card and gain life, say), they're ordered for you; when the order makes a difference, you're asked as before (Full control: always asked)
- "Remember this answer" on a trigger's question (explore's "put into the graveyard?", a "may", a mode or a number) when no further copy is waiting: the same answer every time for the rest of the game, until you press Stop at the marker beside the decision box
- At low life against a burn deck, bots no longer crack fetchlands on your turn
- Bots press a dominant board: against an opponent with few or no cards in hand they look a few turns ahead and attack when the race is theirs, even when it costs a trade. When your clock is faster they still hold back
- Modal spells ("Choose two"): the window says how many to choose, ticks the modes already chosen and how many are left; Cancel is a small button in its header instead of looking like one of the modes
- Optional costs answer with what they do: "Pay {1}{R}" or "Don't pay" for a kicker instead of Yes and No
- Choosing X shows the spell's total cost for that X as you count up or down
- Dividing damage among permanents and players (and your attacker's damage among its blockers): the targets show as their cards with - and + on each card; the number turns red once it's enough to kill that creature
- A big stack plays out faster: with four or more spells and abilities on it the animations run at 1.4 times the speed, with seven or more at 1.8; small stacks keep their full looks
- A turn timer at tables with other people (Settings > Gameplay, 1.5 minutes by default, or off): whoever holds the game up past it gets a rope; 30 seconds later the game passes for them (only plain passes and attack or block confirmations, never a real choice). Never in games against bots
- Two new house rules for tables: "Commander tax at most 6" (from the fourth cast on a commander costs its own cost plus {6}) and "Late-game card flow" (from turn 20 on, everyone may pay {3} and discard a land card to draw a card)
- With six or more lands out, a bot may keep its last land in hand as a bluff against you, so an empty-looking hand isn't a sure read. It still plays the land when the land does something, triggers landfall or the mana has a use
### Fixes
- Blocking: creatures attacking your planeswalker are no longer shown as attacking you; the attacked planeswalker's card shows under "Attacked" with the arrows of its attackers ending on it, each attacker is marked with the planeswalker it attacks, and the damage that gets through is counted for you and each planeswalker apart
- Abilities you use while being attacked (Soul Snare, Stalking Leonin, Guardian Archon): after you declare your blockers, the block view stays open with "Usable now" and a Done button, so you get the window before damage; clicking a usable card while declaring blockers declares them and uses it
- Imprinted cards (Soul Foundry, Chrome Mox, Isochron Scepter) peek out from under their permanent, like cards exiled with something
- After "Whole table", the "Zoom in" button sits in the middle of the table
- The decision box bottom right keeps one place and one size for every question; long questions and many buttons get smaller text instead of a bigger box, and the generic "Your decision" heading gives its line to the text
- The decision box no longer runs past the right edge of the screen with a long question, and no longer covers the Autopay, Auto-pass and Full control switches when it grows
- Dividing damage or counters among targets: the numbers line up in one column
- The card window's title shows the whole question ("Select target creature card from a graveyard") instead of cutting it off
- Bots cast fight spells with two targets again (Ancient Animus, Prey Upon and similar). Before, they never cast them, even in combat
- Bots no longer flash back a card that their own trigger is about to return to their hand
- Phelia, Exuberant Shepherd no longer exiles the planeswalker she is attacking: she blinks one of the bot's own creatures or a blocker instead
- Bots no longer cast "Flashback" when they have no mana left to use the flashback
- Hidden Lair and similar lands are played on the turn their colored mana is needed
- Planeswalkers no longer use a mana ability when the bot has nothing to spend the mana on (Chandra, Chill of Compliance)
- Bots no longer draw extra cards into your Orcish Bowmasters
- Bots no longer play a bounceland (Simic Growth Chamber, Dimir Aqueduct) as their first land, where it returned itself every turn
- A bot no longer keeps an opening hand whose only land is a bounceland: on its own it can only return itself
- Bots no longer cast Aetherize or Settle the Wreckage when nothing is attacking
- Bots cast The Last Ronin's Technique again (a rule meant for Aetherize had kept it in hand)
- Bots no longer cast Demonic Pact without a way to get rid of it or a win in sight, and never a second copy
- Bots expect a double block: no more lone attackers into two blockers that kill them together
- Bots no longer spend removal or counterspells on Bloodghast and other creatures that come straight back, unless the turn matters
- Bots no longer cast a second removal spell at a creature their first one already kills, or split damage only among their own creatures (Pyrokinesis)
- Bots no longer cast cantrips (Preordain, Gitaxian Probe) into your Orcish Bowmasters

## Version 2026.10.31.1439 · October 31, 2026
### New
- Sealed in Quick Play: Play → Quick Play → Limited → Sealed. Choose a set (or Chaos, Custom packs, a cube); six boosters are opened for you and for seven bots, you build a 40-card deck in 10 minutes (the rest of the pool is your sideboard), then three Swiss rounds (best of three) against the bots' decks, just like Quick Play's Draft.
### Changes
- Choices of several cards are made in one go: "any number" or "up to N" (Eerie Ultimatum, Genesis Wave, a library search for two lands, a discard of two) opens the card window as a multi-select: click cards to mark or unmark them, the bar under it counts them ("3 selected (any number)") and has Select all, Clear and one Confirm; cards that can't be added any more (a second card with the same name for Eerie Ultimatum, the limit reached) grey out. No more answering the same question once per card
- "Cast any number of them" (Villainous Wealth, Epic Experiment and similar): mark all the spells you want in one window; they are cast in the order you marked them (numbered on the cards), and you only answer each spell's own questions (its targets, modes)
- The draft bots draft by archetype: from 17Lands' game data they know, for every two-color pair of a set (and the common three-color ones in multicolor sets like Tarkir), how good each card is in that pair's decks and what its winning decks look like (creatures, instants and sorceries, curve, removal). They stay open for the first picks (strong mono-colored and colorless cards first, a gold card only when much stronger), read what keeps coming, settle into a pair step by step and then pick for it: a missing two-drop or removal spell counts more, the sixth five-drop less, and blue-red spells decks may run few creatures
- Draft bots splash only for strong cards and only with fixing (or a real bomb with three basic sources), use drafted dual lands, and play 16 lands with a very low curve, 18 with a very high one. A small bonus for shared creature types and spell payoffs (Bloomburrow's animals, prowess and magecraft)
- Draft bots know older sets too: for sets without 17Lands data (Theros, Innistrad, Return to Ravnica and over a hundred more) they rate cards by Forge's Limited pick orders instead of a rough estimate, so they no longer take sideboard cards early
- Sealed bots build from what their pool is best at instead of mostly blue-green: their colors now spread like real players' sealed decks
- Sealed: the bots (and the automatic deck for a player whose building time runs out) build from the six-booster pool the same way, a little slower: more removal and card advantage, bombs first, fewer two-drops
### Fixes
- Superior Spider-Man entering as a copy of a double-faced creature card (Boggart Trawler) no longer stops the game with an error.
- Bots no longer animate their creature lands (Den of the Bugbear, Creeping Tar Pit, Restless Reef) when they won't attack with them, and no longer pay the animation by tapping the land itself (it couldn't attack then); a creature land still comes alive for an attack that pays off
- Bots stop spending cards and mana on plays that do nothing: Sheoldred's Edict with no creature to hit (also not in answer to a creature spell, which isn't on the battlefield yet when the Edict resolves), activations that only looked good because of the spells cast after them (Barkform Harvester's graveyard ability, halflingcycling with no Halfling left), and flying, protection or animation until end of turn that nothing uses
- Bots no longer aim removal at a creature beside an untapped Mother of Runes or Giver of Runes (she protects it in answer and the removal fizzles): they wait until she is tapped
- Under your Voice of Victory bots no longer keep counterspells open for your turn (they can't cast them then): the mana goes into their own turn
- Bots keep their Food for when the life matters instead of eating it at 21 life
- Removal kept in hand stays worth something with no target yet: an edict counts as an answer, and a removal spell with nothing to hit is kept for the creature that will come (less so late, against an empty hand)
- Bots cast their creatures again when casting one sets off triggers first (Flickering Hound, Bark-Knuckle Boxer): they used to pass for turns with the creature in hand and all their mana open (Fateshaper Aspirant, Head of the Homestead)
- Bots count what a creature or mana source on the battlefield does from next turn on, so small creatures no longer stay in hand while the mana goes unused
- Bots cast Strategic Betrayal (it was never cast), and an edict now goes at an opponent's only creature instead of waiting for a better one
- Bots value extra turns (Time Walk, Time Warp) and hand attack (Thoughtseize, Duress) and cast them instead of holding them all game
- Bots equip Helm of the Host, on their best creature and before combat
- Under Voice of Victory or Teferi, Time Raveler bots cast their flash creatures and instants in their own turn instead of waiting for a turn where they can't
- Bots aim their beginning-of-combat buffs at a creature that attacks (Combat Professor), never shrink a creature with Symmetry Sage, and no longer aim Wildfire Howl's gift damage at themselves
- Bots no longer pay for a creature land's animation by tapping that land
- Bots promise a gift only when it adds something (Scrapshooter with nothing to destroy, Into the Flood Maw for a plain bounce)
- Arrogant Poet no longer pays 2 life for flying when nothing could block it
- Bots cast Multiply by Zero on your creatures (they only ever considered their own)
- Bots no longer sacrifice a big creature to Witch's Oven for nothing, and play their land drop instead of holding it
- Bots cast their creatures before spending all their mana on class levels and card draw
- Bots keep blockers home when hasty creatures can come back from your graveyard (Vengevine, Bloodghast)
- Bots choose X for Ajani's Anguish and similar "enters, deals X damage" cards to kill your best creature it can (it was cast for X=1), and keep it when X would be too small
- Bots no longer keep one-land hands (or two lands with one of the wrong color) unless they have several 1-drops to play
- Bots no longer give their double strike, lifelink or +1/+1 to your creatures (Practiced Offense, Mabel's Mettle)
- Mana Vault: bots no longer pay to untap it when it is already untapped
- Bots no longer cast creatures into your Oath of Druids
- Oildeep Gearhulk now takes your best card instead of nothing
- Bots no longer pay Phyrexian mana with life when that puts them into lethal range (Dismember, Mutagenic Growth)
- Bots no longer exile, bounce or blink their own creatures for nothing (Rise of Extus, Bury in Books, Clement, Skyskipper Duo), and weigh Resculpt's 4/4 before using it on yours
- Bots animate a creature land (or flash in a creature) to block when your attack would otherwise deal lethal damage
- Bots counter card-drawing engines like Phyrexian Arena when you tap out for them, and pump creatures like Dread Shade only after blockers are declared
- A finished library search no longer leaves a fan of face-down cards on the table (Kodama's Reach and other searches that put one card onto the battlefield and the other into your hand); the fan now always closes once the spell is done

## Version 2026.10.31.0134 · October 31, 2026
### New
- More Standard, Pioneer and Modern decks on the server: the weekly tournament lists collected over more weeks join the ones the server fetched itself (each with its cover picture).
### Changes
- Choosing a target: the spell or ability that chooses sits large in your half under the banner, and the aiming arrow comes out of it toward what you point at (it was a small card on the left with a fixed arrow).
### Fixes
- Targeting an attacking creature works again: a click on a tapped (sideways) creature inside a player's panel went to the player (Burst Lightning at the face instead of the attacker).
- "All attack": while you choose whom each creature attacks, all of your attackers stay in the attack view (only the one being asked showed, the others came back afterwards).
- Mana that may only be spent on some spells (Maelstrom of the Spirit Dragon: any color, for a Dragon or an Omen) no longer makes other spells light up as castable.

## Version 2026.10.31.0047 · October 31, 2026
### New
- 80 more commander cut-outs for the commander entrance (Kaalia of the Vast, Ghalta, Breya, Chishiro, Inquisitor Greyfax, Davros, Lathliss and more): 252 commanders now enter as their cut-out figure.
- Bots sideboard between the games of a best of 3: from what you showed in the last game they bring in answers (artifact, enchantment or graveyard hate, sweepers against wide boards, counterspells against spell-heavy decks, answers to flyers) for cards that do nothing against you, one for one and at most five, never lands
- Pump spells have a look: when Giant Growth or another "+N/+N until end of turn" spell resolves, every creature it grew gets a ring and rising wisps in the spell's colors and a "+3/+3" label, and the spell stays a moment on the stack (yours too) so you can see what happened
- Replays show how the bots saw the game ("AI view" next to the replay controls): every player's standing at each bot decision, from far behind to far ahead, and red marks where a bot expected much more of its move than it then had: pointed at, what it expected and did; clicked, the replay jumps there
- 19 more menu wallpapers (official Magic wallpapers: Kruphix, Atraxa, Modern Horizons in 4K, Aether Revolt, Amonkhet and more), cropped clear of their logos
- 40 more commanders enter the table with their cut-out figure (Galadriel, Morophon, The Mimeoplasm, Atarka, Kadena, Oloro, Saheeli and more): 172 now
- Cards in your hand that cost less (or more) right now show it when you point at them: "now {1}{U}" next to the printed cost, green when cheaper (Eddymurk Crab, affinity, convoke-free reductions, Thalia's tax ...)
- Quick Play: choose the match length, Bo1, Bo3 or Bo5 (Bo1 unless you pick another; your choice is remembered). Tables can be created as best of 5 too
- Day and night have a look: when it becomes day (the first time too) or night, a small sun with turning rays or a crescent moon with twinkling stars rises out of your condition box on soft wisps, glows and settles back in, where "☀ Day" or "☾ Night" stays
- "Same for all" for repeated triggers: when more copies of the same trigger are coming (ten tokens' death triggers, Blood Artist for each creature of a wipe), a switch "Same for all copies (N more)" sits by the question; ticked, your answer goes for every further copy: yes or no, the mode or choice, the number, and the same target while it is still legal (when it isn't, you are asked again). It lasts until the stack is empty or the turn ends; a "Same for all" marker by the decision box shows it, with Stop to be asked again. The order of triggers: copies of the same trigger are one tile ("×5") and stay together, and "Same for all" keeps that order whenever those triggers come again this turn

### Changes
- Pump spells ("+N/+N until end of turn") show in the small stack, so the large stack window no longer covers the creature their look plays on.
- Evolving Wilds and other lands that sacrifice themselves to fetch a land make a soft, low knock on wood instead of the creak that sounded like a door
- Choosing cards from several graveyards ("exile up to two target cards from graveyards" ...): the window shows each graveyard on its own rows under a heading, "Your graveyard" first, then each opponent's
- A wave of damage from the same card's triggers (several Vinelashers' landfall) plays quickly: the hits overlap instead of one after another
- Bot personalities no longer change how bots play (all play the same base logic while it is being tuned); they still shape how bots draft
- Bots at a table of three or more attack for lethal with only the creatures the kill needs (with a little margin) and keep the rest home for the players still in the game
- A wave of end-step removals from the same card ("sacrifice those tokens", "exile those tokens" for each token) plays quickly: the looks overlap instead of one after another
- Bots know a short library is a clock: below 10 cards it counts as a danger that grows with each card less, for them and for you. They don't draw themselves out, and mill against a nearly empty library (or Doomsday Excruciator leaving six cards each) is worth something to them
- Extra costs you can't pay aren't asked any more: offspring, kicker, buyback, squad and the like are only offered when your mana covers them on top of the spell (with convoke, delve, improvise or assist you're still asked)
- After a Quick Play game, "Back to the menu" opens the deck choice of the format you just played (the next game is one click away) instead of the main menu
- Explore asks short and clear: "Explore - Put into the graveyard?", the revealed card on the right in a frame of green, sparkling leaves, the answers "Into the graveyard" and "Keep on top"
- The weekly tournament decks (Standard, Pioneer, Modern) build up from week to week instead of being replaced: older lists stay while they are legal, and go to an archive only when a new set or a ban makes them illegal (or when there are more than 64)
- Bots cast creatures that don't change the fight after combat, in their second main phase: you don't see them before you block, and their open mana could be a trick
- Bots with a landfall creature crack their fetchland during combat, after blocks: the pump comes as a surprise
- Bots play the land that lets them cast the most of their hand (the right color for the double-white creature, not just any land)
- Bots race when they have to: against a flyer (or an unblockable creature) none of theirs can block, they attack instead of keeping creatures home that stop nothing; the fewer turns they have left, the harder they push; with two turns or less left, losing creatures in the attack hardly counts any more
- Bots weigh combat tricks and counterspells by how likely you hold them and what they gain if it works, not all-or-nothing: closer to death they take more risks, ahead on cards they trade into your counters
- Bots ahead on cards cast into your open counter mana when the trade is fair (their spell costs at most 2 more than your counter, up to 4 when a counter in your hand is unlikely): it spends your answers, and they have more cards
- Bots look for lethal before combat: a spell or ability that makes the attack lethal (a pump, a second copy with a trigger ...) is cast first; with two copies of a legend they keep the one that can attack
- A wave of the same trigger (Blood Artist for every creature of a wipe) goes on the stack in one quick run: the first one shows, the rest follow at once with their animations overlapping
- Declaring attackers: All attack, Done; once attackers are picked: Done, Undo, Reset, All attack; declaring blockers: Done, Undo, Reset. Done stays first when Undo and Reset appear (they used to push it away from under the mouse), in the zoom's banner too; Space still presses Done
- Bots think combat through in duels: before attacking they play out your likely blocks, the trades, the damage and your counter-attack next turn, so they swarm past too few blockers and keep a blocker home when the race is lost; when blocking they double-block a big attacker, don't block into first strike, take a hit at high life instead of throwing a creature away, and count their own attack next turn (your attackers are still tapped). What their attack triggers do counts too (Hired Claw's pings pumping everyone through Master of Barbs, battle cry ...): an all-out attack that only becomes lethal once the triggers resolve is seen as lethal

- The black removal beams (Doom Blade and other black/purple kills) leave a narrow trail of smoke instead of a wide wall that hid the table
- Questions are easier to see: the decision box names the card that asks (its name as the headline, its picture beside the question) or the step ("Declare attackers", "Declare blockers") instead of "Your decision", in larger, bolder text; choosing a target, the banner in the middle of the table leads with the exact task ("Select target creature") instead of "Choose a target", larger, with the card's text beside it

### Fixes
- The dice roll for the first turn no longer shows menus or the last game's result window behind it (the next game of a match kept the old game-over window until the first question).
- Disturb cards (Baithook Angler, Galedrifter) that are discarded, milled or countered as their front face go to the graveyard, where you can cast them with disturb; they were exiled as if their spirit side had died. A card cast with disturb is still exiled when it leaves
- Choosing attackers: a click that misses (your own land below a stack of creatures, any card that can't be attacked) is ignored; it used to be sent as the attack's target and your selected creatures dropped out. A click on an opponent's creature now counts as attacking that player
- A long opponent turn no longer rushes by: the "many effects at once" skip now starts only when effects really pour in (an endless loop), not when a busy bot turn backs up the table
- Bots block with Hornet's Nest and other creatures that make something from the damage they take, instead of letting the attacker through
- Bots keep their combat tricks for winning a fight: a pump ("+2/+2 until end of turn") on an attacker waits for your blocks, and one on an unblocked attacker that would only add damage stays in hand, unless the damage is lethal, clearly speeds up their clock, or their deck gains from the cast (prowess, heroic, a card drawn, a counter)
- Bots no longer keep creatures home that can't block (Vengeful Strangler, Vampire Interloper) as if they defended; and when even all their blockers home wouldn't survive your next attack, they attack instead of holding everything back
- Bots use removal on artifacts and other permanents whose text reads "it deals 3 damage to target creature" (Silver Bolt): they aimed it only at their own creatures (and once killed their own) and sat on two of them while your flyers killed them
- "Exile up to two target cards from a single graveyard" (Arashin Sunshield) could take cards from two graveyards when a bot chose: now one graveyard only
- Bots don't crack a fetchland after combat for life when every color they need is already there
- Bots don't use "until end of turn" abilities on creatures that can't use them (Mother of Runes protecting in its own turn, flying for a summoning-sick creature, pumps into an exile spell), don't move equipment twice in a turn, and don't strip hexproof that isn't there
- Bots keep Mother of Runes and Giver of Runes home instead of attacking for 1, and protect against your removal with the right color (Path to Exile fizzles)
- Bots don't spend removal on an equipment with no creature to carry it
- Bots keep an instant bounce (Petty Theft) for your turn unless it clears the way for their attack, and don't draw into a full hand at instant speed in their own turn
- Bots evoke Solitude instead of holding it until it is discarded to hand size
- Bots play the untapped land when it lets them cast something this turn (turn-1 Birds) and the tapped land on a turn they can't use the mana
- Chrome Mox: bots imprint their least needed card and play the Mox when it casts their next spell
- Bots think of the flash creatures your deck may hold when they attack into your open mana: how likely you hold one and can pay for it, what it would do to the attack, and what the attack gains if you don't
- Bots value being the monarch and having the initiative (about a card a turn): they take it from you and protect it
- Bots press an opponent stuck on lands instead of waiting
- Tutors that put a card into the hand fetch what the bot can cast soon, not its most expensive card
- Bots attack your planeswalkers only when that's worth more than the damage at you: no more attacks at Jace tokens while racing, never with lethal at you
- Bots judge "you may" costs: no removing the last counter of a creature, no discarding a card they need for a small effect, no sacrifice for an edict when you have no creature; and a choice between modes no longer destroys their own permanent
- Bots block an attacker with their creatures instead of spending removal on it when the block does the job
- Bots see an all-in attack through menace as lethal: they expect you to double-block a menace creature and to block in the way that saves you
- Bots cast a permanent with "when it enters, you may pay {2}" only when they have the mana for that too (Lich's Relic)
- Bots use the minus abilities of planeswalker tokens (Jace: surveil, draw) instead of letting them die with their loyalty
- Scry and surveil: bots keep the cards they need (the land for their stuck spells) and put away only what they don't
- Bots cast X spells that have no target (Walking Ballista, Green Sun's Zenith, Nature's Rhythm): they were never even considered and stayed in hand all game
- Bots never crack a fetchland at 1 life (it lost them the game), and don't pay life for a fetch they don't need when your next attack could then kill them
- Bots pay with lands that cost no life first: Ancient Tomb or Horizon Canopy only when the other lands don't cover the cost
- Bots fetch the land color their hand is waiting for (a search for a basic land: the Island for the blue cards in hand, not a third Swamp)
- Bots aim graveyard hate at your graveyard (Soul-Shackled Zombie exiles your creature card and drains you, not the bot's own sorcery)
- Bots put "whenever you attack" buffs (Battlesong Berserker's +1/+0 and menace) on a creature that is actually attacking
- Bots know a creature that dies and comes back bigger (Infernal Vessel, persist, undying) is no real kill: they don't trade into it, and block happily with their own
- Bots value cards they can't cast for lack of a color at half, so a color source (Heraldic Banner, a dual land) that unlocks them is played
- Endure: bots take the Spirit token when the creature would die in the fight even with the counters
- Bots keep their flash creatures (Ambush Viper, Bounding Wolf) for your turn: they come in as a surprise blocker or at your end step instead of in the bot's own main phase
- Bots know your creature that stays tapped (Stitched Mangler's "doesn't untap", stun counters) can't attack them next turn: they attack freely instead of keeping a guard home
- Bots no longer treat "+3/+3 until end of turn" as a bigger creature for good: they don't cast Overrun or a pump ability without an attack to use it, or pump instead of casting creatures; in a fight, tricks still count
- Bots no longer skip an attack they planned when they see themselves as the slower deck: a rule that keeps blockers home overrode the combat planning whenever both agreed (two huge Chocobos stayed home from a lethal attack)
- Bots count the cards your creature holds of theirs (Deep-Cavern Bat, Banisher Priest: exiled until it leaves): removal goes at the holder and gets the card back, instead of at a bigger creature beside it
- Bots keep a trick that only lasts the turn (Bladebrand's deathtouch) for a fight it wins, instead of casting it on a creature that stays home just for the card
- Bots cast a creature whose enters trigger needs the combat ("if an opponent lost life this turn": Bloodtithe Collector; raid) after their attack, not before it
- Bots weigh your evasive attackers by the clock they put on them: a flyer that kills them in two turns counts far more than one that needs ten, so answering it comes before drawing cards
- Autopay keeps the colors your hand still needs: with black spells in hand, the generic part of a cost is paid with an Island rather than a Swamp
- Bots cast a buff on their own creature (Honor's +1/+1 counter, an Aura) before combat when it makes a better attack, instead of skipping the attack and casting it after
- Bots keep removal that gives you a card unless the creature attacks (Prophesied End: "if it wasn't attacking, its controller draws a card") for your attack or your end step, instead of firing it in their own turn at a creature that stays home
- Bots no longer spend removal on a small creature your permanents bring right back (Moseo, Vein's New Dean returning it at your end step); they go for what stays dead, or keep the removal
- A game could freeze for good when Superior Spider-Man entered as a copy of another Superior Spider-Man in a graveyard (the copy's own "enter as a copy" kept applying); it now enters normally, and the game stops any such endless chain of replacements by itself. The same safety stop now covers the other places a game could loop forever (state-based actions and triggers feeding each other, control or ability effects that keep changing each other)
- When very many effects arrive at once (a loop the game stopped, a huge wave), the table skips their animations and shows the result right away instead of playing them one by one for minutes
- Abilities with "up to one target" no longer ask you to choose when nothing can be targeted (Moseo, Vein's New Dean's end step return with no small enough creature card in your graveyard): they just resolve
- Bots could block nothing at all against an attacker that can't be blocked by more than one creature (they kept planning a double block the game refused); they now block within the attacker's limits
- Best of 3/5: in the second and later games, cards your opponent had shown in an earlier game appeared as known cards in their hand (their draws were visible to you). What you saw now counts only for the game you saw it in
- Draft and sealed tables are a full pod of 8 (you and seven bots) with 3 Swiss rounds: the create screen showed eight seats, but the table was made with four, and the tournament ended after two rounds
- "Counter target spell unless its controller pays {2}" (It'll Quench Ya!) asks you again instead of answering No for you
- Weekly tournament decks kept from earlier weeks showed no picture on their tiles: they now show their main card
- A creature bounced back to a hand no longer shows the card it had exiled under it (Deep-Cavern Bat); a card that goes to a hand from where everyone saw it (the Bat's exiled card going back, a bounced creature) shows as known in that hand
- Bots cast X spells with the X they planned: the X never reached the spell's effect, so every X spell they chose did nothing for its X (Traumatic Critique cast for 0)
- Bots don't attack into a blocker protected from their creature (a blue Haughty Djinn into Akroma, Angel of Fury)
- Bots with Dawnbreak Reclaimer only return the creatures when their own is worth at least the opponent's (they gave Akroma, Velomachus and Seedborn Muse back to their opponents for nothing)
- Bots use more mechanics properly: evoke and other alternative costs (they chose one at random when casting, so an evoked Mulldrifter often failed), multikicker (Everflowing Chalice came with no counters), crew (they now crew vehicles at the beginning of combat with their summoning-sick or weakest creatures), suspend (never used before), dash (cast for dash in their first main phase: it attacks with haste), buyback (paid when the mana is there), foretell (with spare mana after combat)
- Bots aim removal declared as a "benefit" in the card code at your side, not their own (Prismatic Ending, Play with Fire, Dire Tactics, Amphin Mutineer, Excavation Technique and more: they went at the bots' own permanents, and yours weren't even considered). Mill goes at you, unless the bot's deck plays from its graveyard: then it mills itself
- Damage a bot aims outside its planning (a cascaded or free spell, a trigger) goes at a creature it kills rather than your face, at you when it's lethal; if it must hit its own side, the cheapest thing (a cascaded Lightning Bolt went at the face with a creature it would have killed beside)
- Bots pump their unblocked attackers after blocks (Mirror Entity, firebreathing, "+N/+0 until end of turn") when it adds damage, and use spare mana at the end of your turn on their abilities that improve their position (drawing, damage, creatures back from the graveyard ...); before, those abilities were hardly ever used
- Bots cast spells with a "pay mana or sacrifice" cost (Deadly Precision: pay {4} or sacrifice an artifact or creature): they always chose the mana, even without it, and the spell was never cast; now they sacrifice when the mana isn't there
- Cards with their own discard look (Faithless Looting, Brainstorm, Frantic Search) no longer also play the plain discard toss: it looked like the cards were discarded twice
- Bots pick better cards to cast for free (Uldaros Theorix and the like): not a second copy of a legend they control (the legend rule took it at once) and not a card whose effect needs mana spent on it (Deceit and the other incarnations do nothing for free); the most valuable of the rest first
- Bots no longer fail to cast a creature over an optional cost they can't afford ("Pay {2} for offspring?"): Iridescent Vinelasher's cast failed, and with it their land was played after the spell instead of before
- Bots see the attack coming at them: what your creatures would deal past their blockers next turn counts against them, more the lower their life. At low life against fliers they cast a creature that can block them instead of a bigger one that can't
- Bots don't evoke a creature for an effect that does nothing (Deceit's discard into an empty hand): they thought the evoked creature stayed on the battlefield
- Bots don't cast removal whose only target is their own creature (Firebending Lesson at their own Great Hall while your creature was still on the stack)
- Pumps from casting spells (prowess, Great Hall of the Biblioplex, Kiln Fiend) count for bots only when that creature attacks or blocks this turn: no more Abandon Attachments for nothing
- Bots choose colors on purpose (Room of Refuge and other "choose a color" lands): the color their hand and deck need most against the sources they have, not a random one (a Golgari bot named Blue with black cards stuck in hand); against you (protection, detriments) your most common color
- Bots cast their creatures instead of warping them for a small effect: a warped creature is exiled at the end step, so it now counts as a card to cast again later, not as a creature on the board (Haliya was warped for 1 life turn after turn while the 1-drop beside it stayed in hand). Warping still happens when its effect or a hasty attack pays off
- Bots aim temporary -X/-X at creatures it kills (Nowhere to Run's -3/-3 went at a 7/6 beside four creatures it would have killed) or at creatures in combat; with nothing to kill they keep it
- Bots don't burn their own creatures for a prowess trigger: a spell whose first line is a benefit (Impractical Joke: "damage can't be prevented this turn") counted its damage as good for the target, so they aimed it at their own side (an Elusive Otter died for Slickshot Show-Off's +2/+0)
- Bots play their shocklands tapped when they don't need the mana right away: they always paid the 2 life, so playing one looked bad and they kept them in hand (at 4 life a bot sat on three lands with Blood Crypt and Overgrown Tomb in hand). They pay only when the untapped land lets them cast a spell that turn and their life can spare it
- Bots don't throw away spells to pay a "discard a card" cost for a small gain (Iron-Shield Elf discarded a second Elf to grow Moonshadow by one counter and tapped itself out of the attack). They discard a spare land (six or more lands) or a card made for the graveyard (flashback, escape, madness ...) freely; a real spell only to save a creature from your removal or from dying in combat
- Bots hold up their counterspells and instant removal: an answer in hand counts as insurance only with the mana open to cast it (instant removal only while you have a creature worth answering, and less in the first turns, when developing matters more), worth more the more cards you hold, the lower their life and the further ahead they are on the board (the further ahead, the more they value the answers in their hand at all: a lead is lost to one big spell). A bot far ahead no longer taps out to copy a 2/2 with Three Steps Ahead while holding two counters, and loses to the drain spell it could have countered. At high life they still develop their board
- Bots keep their land drops coming: when they must discard, a land they still need (up to what their hand needs, four to six lands) is the last card to go, not the first, and a cheap spell goes before an expensive one (a bot discarded its third land to Bitter Triumph with two 3-drops, a 4-drop and Duress in hand, and sat on two lands for five turns). With "discard a card or pay 3 life" they pay the life while they have plenty
- Bots play the land that casts their spells: a land whose colored mana is only for some spells (Maelstrom of the Spirit Dragon: Dragons) no longer counts as paying the others (it was played over Sacred Foundry and the 1-drop stayed in hand)
- Bots decline a free cast that could only hit their own side (Chandra, Torch of Defiance exiled Firebending Lesson with no creature of yours around: it hit their own token instead of Chandra dealing you 2)
- Bots pay "tap an untapped creature you control" costs (Springleaf Drum) with their summoning-sick and weakest creatures, not with the creature that was about to attack (a Quantum Riddler stayed home against an empty board)
- Bots choose "discard a creature card instead of discarding two cards" (Winternight Stories, Thirst for Identity) when that one card is the smaller loss; before, they always discarded two
- Bots give flying and other keywords from their own effects to their own creatures (Stratosoarer's "target creature gains flying" went at your creature, and they even paid your ward for it)
- Bots aim lockdown Auras (Blossombind, Pacifism-like) at your biggest threat, not a 1/1 token: a locked-down creature now counts as hardly a creature
- Bots use spare mana to equip their unattached Equipment in their second main phase (a second Stalactite Dagger stayed unequipped)
- Bots see the counter-attack coming when you can give your creatures flying (Hovel Hurler): they no longer send their only flying blockers in
- Bots never aim the damage part of a spell at their own creature or themselves while another target exists (Jeskai Revelation's 4 damage hit their own Geist)
- Bots rummage and loot only when it pays (the average card they would draw is worth more than the one they throw away), and they keep the cards that are good against you: a bot rummaged every turn with Flamecache Gecko and threw away Sunspine Lynx ("players can't gain life") against a lifegain deck
- Bots judge the board more fairly: your lands counted less for them than their own, so every bot thought itself about a card and a half better off than it was
- Bots don't tap their attackers to pay for spells before combat when the mana is there (harmonize tapped a 5/5 with six lands open against an empty board), and they value the attack still to come
- Bots no longer bounce their own lethal attacker: Nurturing Pixie returned a 6/7 Aang to hand with you at 6 and nothing to block. Their own-bounce effects take a permanent that isn't about to attack, the cheapest first
- Bots finish you with divided damage: with you at 2 life, Twin Bolt goes 2 at your face instead of 1 at your creature and 1 at their own; a share of their damage never goes at their own side while there is another split
- A bot's attacker blocked by several creatures puts its damage where it kills the most valuable of them (a 4/3 blocked by a 4/5 and a 6/4 put all 4 into the 4/5 and killed nothing; now the 6/4 dies)
- Bots keep their combat tricks and protection spells for combat or for your removal (Giant Growth, Snakeskin Veil, Fleeting Flight were cast in their main phase with nothing to answer), team pumps too (Lorehold Charm's "creatures you control get +2/+1" in the main phase, then no attack)
- Bots attack before they sacrifice: a spell that costs a creature (Arbiter of Woe) is cast after combat when that creature could attack first
- Bots attack with creatures that return from the graveyard by themselves (Bloodghast): it can't block, so staying home did nothing, and its death in a block costs nothing
- The zoomed views (attack, block, targets) show the creatures in the same order as the table (two of the same name could swap places)
- Bots play their land before their spell (with the third land they kick their kicker spells instead of casting them plain and playing the land after)
- Bots use their Map, Clue and Food tokens: with spare mana at the end of their turn they explore, draw or gain life instead of keeping the tokens around
- Bots don't hold their creatures back for fear of a counterspell that can't hit them (Spell Pierce only counters noncreature spells), and never while your creatures are about to kill them
- Bots don't cast a second copy of a legend they already have (the legend rule took it straight away)
- Bots play their lands: a land kept in hand counted almost as much as one on the table (a shockland's 2 life made playing it look bad), so bots sat on one or two lands and discarded the rest
- Bots don't trade their creatures with Mobilize tokens (and other tokens sacrificed at end of turn): they take the damage when it's cheaper
- Bots keep their burn for the turn their prowess creatures can attack (they fired it at your face to pump a creature that couldn't attack); for lethal they still burn you
- Bots' 1-damage pings go where they kill something on a crowded table (the targets they could kill were dropped from their options)
- Bots in big Commander games no longer skip whole turns late in the game: their thinking ran the server out of memory (it now stops in time and plays the best it found, and thinks a bit less the more cards are in the game)
- Targets during your attack: a spell or ability with "any target" (Burst Lightning) cast while declaring attackers aimed at the player when you clicked their creature; it now goes where you click
- Clicking an Aura or Equipment on a creature while choosing a target aims at the creature (when the Aura itself can't be targeted)
- Bots keep burn for your creatures instead of throwing it at your face: damage at a player only when it is lethal, takes a turn off their clock (three turns or less), or the deck is built on it (burn, prowess, "whenever you cast"); instants wait until after combat, when a creature the fight left damaged may die to them
- Bots cast their landfall permanents before the land and the fetchland (Sazh's Chocobo came after the Fabled Passage and its land, and missed both counters)
- Bots airbend your creatures, not their own (Airbender Ascension, Aang ...): airbending counted as a benefit for its target, so they exiled their own creature and had to pay to cast it again. Their own creature only for a strong enters effect, and only on a quiet board: it always costs tempo
- The server could run out of memory in big Commander games (and the game was lost): a bot thinking about a triggered ability with many possible targets copied the whole game once for every combination of targets (over a thousand copies on a crowded table). It now tries only its few best targets
- Bots think about the targets that matter: of all the possible targets they consider the 8 most relevant (by threat and value, on the side the effect is meant for: your permanents for removal, theirs for a boost), not 18 picked at random; less memory and time, more of it for the moves that count
- Bots could never use an ability that costs mana and taps its own land (Jund Panorama and the other Panoramas, many utility lands): they paid the mana with that same land, then couldn't tap it. They now also crack their fetchlands with spare mana in their second main phase for the colors their hand needs (held only for a landfall creature still to come)
- Taking damage sometimes showed as a heal first (green + on your life and avatar) and then as damage again; the total was right, now the display is too
- Sideboarding in a constructed match shows the match's format (it said "Limited (drafted deck)" and the limited deck rules)
- Bots' mulligans: after a mulligan they put their most expensive spells on the bottom, not a land (a two-land hand became a one-land hand and the bot never got going), and they judge a hand by what it will be after the bottom; a two-land seven with nothing to cast early is sent back
- Warp cards: casting one asks again whether to cast it normally or with Warp (with Autopay on it was answered for you, often with Warp)
- Bots use every mode of their charms and other modal spells: a mode aimed at your creatures (Prismari Charm's bounce) was never considered when the spell's first mode is a good one for them (draw a card)
- Choosing a creature type (Cavern of Souls, Kindred cards): the quick picks are back, the types on the table and the three most common in your deck on top
- Autopay with Cavern of Souls: a creature spell of the chosen type gets Cavern's colored mana (it was tapped for colorless); for other spells it only pays generic mana
- Bots with counterspells use them: on your turn they only thought about spells aimed at them, so a creature you cast was never countered (blue decks kept their counters all game)
- Best of 3/5: the Victory/Defeat window no longer stays over the sideboarding screen (it sat on top and took every click); it shows a moment, then makes way
- Quick Play after a game: picking a format opened nothing anymore (the deck window was cleared away with the game); it opens again
- Bots hold a flash protection like Shardmage's Rescue (hexproof only the turn it enters) for your removal and cast it in response, so your spell or enters trigger fizzles; they no longer put it on a creature in their own main phase with nothing to answer (then lost it with its Auras to your removal next turn). Weighed by how likely your deck holds targeted removal against what the cast gains now; with nothing coming it goes on at your end step for its lasting +1/+1

## Version 2026.10.29.0829 · October 29, 2026
### Changes
- Bots cast their cheap discard and draw spells (Pilfer, cantrips) instead of holding them: a spell in hand counts for less than a creature, since it's only worth something once cast

### Fixes
- Boarded Window: a game no longer breaks off when a creature attacking a planeswalker kills it
- Bots with two Khans Devotees no longer lose their turn's thinking (each Devotee tried to pay the other's {1})

## Version 2026.10.28.2324 · October 28, 2026
### New
- 70 more commanders enter as cut-out figures, among them Kenrith, Korvold, Niv-Mizzet, Parun, Yawgmoth, The Gitrog Monster, Najeela, Lord of the Nazgûl, Éowyn, Frodo, Aragorn, Vivi, Terra, Celes, Kratos, Ezio, Jin Sakai, Ulalek, Ygra and Zurgo Stormrender (132 in all)
- Copies on the table are marked: a small tag at the bottom of the card, "Clone · copy" for a card copying something (the name is the real card's) and "token copy" for a token copy (Reflections of Littjara, Cackling Counterpart ...)
- Opening a deck in the deck builder shows "Opening <deck>…" at once, so you know it's working while a big deck loads
- Tables show each seat's deck over its chair before the game starts (as soon as the player has chosen one)
- Choosing which replacement effect applies first (Hardened Scales or Kami for each of many triggers): "Same order for the rest of this game", on by default: one click for all of them

### Changes
- Bots value cards in hand: on a calm board they draw cards and make you discard rather than chip in two damage; in a race they go for the race; flashback and other graveyard cards count as resources (theirs are kept, yours get exiled first)
- Bots don't flood the board into a likely Wrath when already far ahead, kick their kicker spells when they can pay for it and wait a turn for the kicked or overloaded version when nothing presses; delve exiles useless cards first
- Bots no longer peek: when they think ahead they don't know your hand or the order of any library. They know which cards your deck can hold and plan around those, and still remember cards they have seen (revealed, looked at)
- Chaos drafts open complete sets only (143, back to Fallen Empires): no more sets XMage only partly has, like Alpha with its ante cards missing, or cards that only work in the draft itself (Conspiracy)

### Fixes
- Opening a big deck no longer loads all its card pictures in one go: a few each frame (the deck builder stays responsive, and less memory is taken at once; a likely cause of a crash on opening a deck), and fewer pictures are kept in memory (200, ~600 MB, was 400)
- The program's log file is written as it goes, so after a crash it shows what happened (it was empty: the log was only written out on errors)
- Mulligan window: the line at the top now says it is the cost of mulliganing again ("If you mulligan again: a new 7, and when you keep, 1 card goes on the bottom"), and in Commander that your free mulligan doesn't count; what keeping costs stays on the Keep button
- Twinblade Geist: casting it with disturb works (it had no creature to enchant); a bot with it in the graveyard no longer stops casting spells for the rest of the game
- Bots with a Khans Devotee (Abzan, Jeskai, Mardu, Sultai, Temur) no longer skip their main phase
- Bots no longer pass their turn when a board offers too many options to think through
- Forecast cards (Dissension) can be used again: the game now stops in your upkeep while you hold one you can use (it passed your upkeep unless you had set a stop there)
- Best of three: the match screen shows the real score (a 2-1 showed as 2-0), and the player who lost the match is no longer told the next game is coming
- Deck builder: cards with accents in their names (Tale of Tinúviel, Lórien Revealed, Éowyn ...) no longer show as "Not in XMage"; they always played in games
- Mausoleum Turnkey: the opponent now chooses from the Turnkey player's graveyard (they were shown their own, so nothing ever came back)
- Bots name a creature type their own deck plays (Cavern of Souls, Coat of Arms ...); they picked a random one, and a Cavern on "Cow" made its mana useless

## Version 2026.10.28.1624 · October 28, 2026
### New
- A mouse cursor in the game's style: six painted pointers to choose from in Profile → Look → Mouse cursor (aged gold by default, or your system's cursor), sharp at every resolution
- 22 more commanders enter as cut-out figures: Fire Lord Azula, Flubs, Gishath, Glarb, Henzie, Kinnan, Rograkh, Sauron, Sephiroth (One-Winged Angel), Shadow the Hedgehog, Stella Lee, Teval, The Prismatic Bridge, The Wise Mothman, Thrasios, Toph, Tymna, Wilhelt, Winota, Y'shtola, Yuriko and Zhulodok
### Changes
- Bots think further ahead: they see what a creature can still reach this turn (a landfall creature with fetchlands gets blocked), aim removal at real threats (engines, lords) rather than the biggest body, keep their only removal spell for a target worth it (unless the pressure is on), and don't spend it on a creature their blockers already hold. They know their role in a duel: the faster side presses and attacks into even trades, the slower one stops racing and keeps its blockers home. They know your deck list like a player after registration (from game 2 your sideboard too): removal waits while bigger threats can still come, and the side with fewer big threats left plays to win early; with your mana open they play around the combat tricks, counterspells and instant removal your list holds (a cheaper spell first, the big threat once you tap out; no Aura into open removal mana). And they remember what hurt them: the creature that beat them in game 1 is the first target in game 2
- The mulligan is one window from start to finish: your hand big over the dimmed table, the opponents' decisions under the title, Mulligan and Keep below. A new hand just replaces the cards in it: no second Keep/Mulligan box (duels showed one) and no flicker between hands
- Decisions are never held by animations: when the game asks you something it opens at once. A card's look while you choose (Faithless Looting's and Brainstorm's spinning cards, Ponder's book, a search over your library) plays in the background for the others to see, and ends as soon as you have chosen
- Creatures killed in combat simply die: no more big spell effects picked from the killer's name (beams, fire, lightning across the table). A dark creature's short stab and deathtouch's withering stay
### Fixes
- Main menu: Play's icon and diamond were nearly invisible (drawn dark for a gold button that is dark now)
- Back in the menu after a game, its last messages no longer show up there (a game-over window over the menu after someone aborted the game)
- Choosing whom to attack (a player or their planeswalker): your attacking creatures no longer vanish from the table; they stay in your row, marked as attacking, with the arrow from them. Clicking an opponent's creature counts as clicking that player; only players, planeswalkers and battles are choices

## Version 2026.10.28.1013 · October 28, 2026
### New
- Drafts: a **Leave draft** button at the top of the draft screen (asks first): out of the draft and back to the menu
### Changes
- Leaving a game, a draft or a replay no longer restarts the whole client: only the table is made anew, the menus stay as you left them, and your connection to the server stays (no reconnect, no new login; your seat at a tournament table is never let go). Getting back to the menu or the table is quicker
### Fixes
- Drafts: double-faced cards get their flip button and show both faces on hover again (they weren't recognized by their front name)
- Tournaments: Back to the tournament now really opens the tournament's table (the game logged in again only once you opened Play, so it landed in the menu)
- Draft screen: the buttons at the top fit their text in every font (they overlapped with the wider ones)
- Drafts: the game no longer crashes the moment your first pack arrives (it happened to the drafter whose own portrait was drawn; only in the installed game)

## Version 2026.10.27.2050 · October 27, 2026
### New
- Choosing a Commander deck: each deck's bracket shows as a ribbon on its tile (as on the Decks screen)

## Version 2026.10.27.1944 · October 27, 2026
### New
- Double-faced cards in the draft: a small ⟲ button (or a right-click) turns them over; pointing at one shows both faces, in the draft and in deck building; a meld card (Graf Rats) shows the card it melds into (Chittering Host)
- Deck building: the art window has a set filter: every set the card was printed in (newest first); choosing one shows that set's printings
- Drafts: a Format dropdown: every set with boosters, newest back to the oldest (three of its packs), Chaos (every booster a random set, for everyone; Sealed: six random sets) or Custom (choose each pack: only there the packs can be clicked)
- **House rules for fun** when you create a table: pick any of One of each name (a nontoken permanent whose name is already on the battlefield goes to the graveyard, basic lands excepted), Commanders cascade, Draw two each turn, Monarch start and Initiative start (for the player who goes last), Treasure start, Only basic lands and Pauper-style (commons and uncommons only). Every player gets a "House rules" emblem listing them; the table tile and the table show them too. The AI's decks get basic lands only under that rule; Pauper-style doesn't apply to them. The ban list dropdown is now called "Ban list".
- **Planechase**, as a house rule: a plane lies above the turn strip (its picture large when you point at it; it can be moved in the layout edit mode). In your main phase, with the stack empty, the Roll button on it (or a click on the plane) rolls the planar die, a real 3D die with the chaos and planeswalker symbols: "Chaos!" does the plane's chaos ability, "Planeswalk!" takes everyone to a new plane. 21 planes. A planeswalk shows the new plane large in the middle of the table, in violet and teal aether smoke, before it lies down in its place; a plane's ability on the stack shows the plane's artwork behind its text and a card-sized cut-out of it on the right.
- **All of Planechase**: the whole Planechase Anthology, 86 planes and phenomena (it was 21): a real planar deck that visits every plane before any comes again, and phenomena (Chaotic Aether, Interplanar Tunnel, Morphic Tide, Mutual Epiphany, Planewide Disaster, Reality Shaping, Spatial Merging with two planes at once, Time Distortion) that happen once as you planeswalk into them.
- **Planechase Extended** (house rule): our own planes too, from worlds Planechase never visited (Urborg, Kaldheim, Eldraine, Kaladesh, Thunder Junction, Bloomburrow ...). Their cards are drawn in the game over the artwork of a card from that place, with its artist credited.
- **Sharper large art**: the commander entrance with card art, the plane entrance and our plane cards are gently sharpened (Scryfall's art is about 626 px wide, shown at up to 1,700 px on a 4K screen).
- **Artists credited** wherever art is shown without its card: the commander entrances, the stack window's picture, our plane cards.

### Fixes
- AI: modal spells (Blessed Alliance) are no longer cast just for their life gain while its life is fine; it keeps them for their better modes
- Skips ("My turn", End turn ...) stop when an opponent casts a spell you can counter with a counterspell in your hand and the mana for it
- AI: Selfless Spirit and the like are sacrificed only when something is about to die (a removal or wipe of the opponent's on the stack, creatures dying in combat) and worth more than it
- Best-of-3: the "Deck submitted: waiting for the next game" banner no longer comes back once the next game has started
- Counters on a card are drawn over its frame and border, not under them
- Play screen: changing a setting twice in a row (the draft format, the timer ...) no longer leaves the page empty
- AI: landcycles only when it needs a land: a color missing, or a spell in hand more than one land away (lands out and in hand counted together; 6+ lands never). No more cycling a big creature away it can almost cast
- Screeching Soulbreaker and other "damage to each opponent and you gain life" abilities: a small drain line (as big as the life), not a big black beam
- Tournaments: "Back to the tournament" after your match brings you back to the tournament (standings, the next round), not the main menu; leaving the finished game took you off the tournament table
- Best-of-3: the sideboard waits until the last attack and the deaths have played out, shows the result a moment, then the result window goes so the sideboard can be used (it sat on top of it)
- AI: it no longer attacks with everything when the others could kill it on their turns: blockers stay home against a lethal counter-attack, commander damage counted (21 from one commander).
- Many creatures dealing damage at once (Rakdos Charm, a wipe of pings): the hits play together in one quick run instead of waiting for each one's effect.
- Triggers that ask you to pay mana (extort and the like) no longer ask when you have no mana left to pay them.
- Combat: the attack zoom stays open while you take attackers back (Undo, Reset, or a click on a declared one), and each player shows the damage your attackers deal them if unblocked.
- Combat zoom: a pile of identical creatures fans out a little when you point at it, so each card is easy to click.
- X spells with two X ({X}{X}): the most you can pay is worked out right (it showed 0 to 2,147,483,647).
- A scry, surveil or look at the top of a library no longer leaves the library fanned open (only a search opens it).
- No red line from a creature to what it damages any more (the hit and the number show it).
- Sagas get the small stack (their scroll plays the chapter).
- Piles of 6 or more on the table show their count on a badge (×9).
- Nether Traitor and the like: once one of its triggers has brought it back, the others leave the stack instead of asking again.
- AI: it doesn't evoke a creature whose trigger would find nothing (Reveillark with an empty graveyard).
- Combat: after blockers are declared you get the moment to use an ability or cast an instant (attacker and defenders), instead of it passing by itself; not while you skip ahead.
- Combat: a Reset button while choosing attackers or blockers takes them all back, to choose anew.
- AI: it mutates when the card pays off for mutating (it always cast normally); it no longer has its creatures fight Grothama just to lose them.
- Mulligan: the window stays as you take a mulligan and the new hand's window takes its place, no flicker in between.
- Main menu: the line under the title is no longer covered by the Play button (with taller fonts).
- Planechase: the plane belongs to the player whose turn it is, so its "you" is always the active player (it stayed with whoever planeswalked).
- The side players' life totals sit inside their plaque (they reached over its top).
- Dice are sharp on big screens: they are drawn at the screen's own resolution (1440p, 4K) and their textures are smoothed when small; the planar die's symbols are drawn from large pictures.
- Out of a game (you lost, the others play on): the decision panel stays exactly where it is, and "Back to the menu" appears inside it; it no longer grows over the switches below.
- Planechase: only the player whose turn it is can roll the planar die (XMage let anyone roll in any main phase).

## Version 2026.10.26.2339 · October 26, 2026
### New
- A new commander entrance for 40 commanders (your group's commanders and Elesh Norn): the commander, cut out of its art, floats over a light in its color identity and a bank of smoke lit in those colors (black smoke for a dark black figure, like Be'lakor or Ob Nixilis), its feet fraying into rolling fog with its name on it, soft light flares around it and energy gathering in its bright details. Commanders without a cut-out keep the art entrance. It is the default; Settings → Display (or Profile → Look) → Commander entrance can switch back to the card art.
- A font choice (Settings → Display → Font, or Profile → Look → Font): the classic Cinzel and Crimson Pro, Marcellus, Alegreya, Spectral, Vollkorn, Grenze, and two playful ones, Uncial Antiqua and Almendra. It changes at once, everywhere.
- Three new themes (Profile → Look → Theme):
  - **Velvet card table**: a wooden table with bronze fittings, stitched leather and a tufted velvet border; the rune circle (an eight-pointed star) and a band across the middle sewn in gold thread, the artifact and enchantment marks sewn in too; menus in smooth dark red leather with bronze frames.
  - **Marble with dark stone inlays**: white marble with a dark stone border between brass strips, the rune circle (a triangle) inlaid in dark stone with brass runes, a few small black and gold inlays across the middle, the artifact and enchantment marks stamped in black with a thin gold rim; menus in dark stone with dark gold frames.
  - **Green felt card table**: green felt in a dark wood rim with bronze brackets and brass studs; the rune circle (a seven-pointed star), a band across the middle and the artifact and enchantment marks sewn in gold thread; menus in obsidian with gold frames.
  - On all three, windows have small metal fixtures in their corners instead of the gold flourishes.
- Settings pages longer than the window now scroll (a scrollbar shows).
- Creating a Commander table: choose 4 players (the default) or 5–6 players; only a 5–6 player table gets the bigger table with six seats.
- Commander for up to 6 players. While 5 or 6 are in the game it is played in the split view: the player whose turn it is across from you, two players' boards in windows on each side. Once only 4 are left, the table switches to "Table, zooms only to choose".
- At 5-6 players the zooms (attacking, choosing targets) show every opponent side by side across the top, a little smaller. Cards in the side windows shrink further when three rows (creatures, artifacts and enchantments, lands) must fit.

### Changes
- **Deck rules** when you create a table, in a dropdown where you tick several: your ban lists, Pauper-style (moved here from the house rules), No Universes Beyond, Only fantasy Universes Beyond (Middle-earth, Final Fantasy, Avatar), cards from one plane only (Ravnica, Zendikar, Innistrad, Theros, Dominaria, Tarkir and 15 more, with their Commander sets), a deck value limit and a power limit (bracket). When you pick your deck at the table, the ones that can't sit there are greyed out, and pointing at one tells you why.
- The house rules are a dropdown too (tick any).
- A commander entering plays only the commander entrance (its art, large, over the table): a card's own custom entrance (and a god's constellation) no longer plays alongside it. As a plain card in a deck it keeps its own entrance.
- Two table layouts are left to choose in the settings: "Table, zooms only to choose" and "Split view, one each side". If you used one of the others, the split views and the focus seat become "Split view, one each side", the rest the table.
- Choosing a creature type: the types on the table come first again, then the three most common creature types in your deck, then a line and all the others.

### Fixes
- AI: modal spells (Blessed Alliance) are no longer cast just for their life gain while its life is fine; it keeps them for their better modes
- Skips ("My turn", End turn ...) stop when an opponent casts a spell you can counter with a counterspell in your hand and the mana for it
- AI: Selfless Spirit and the like are sacrificed only when something is about to die (a removal or wipe of the opponent's on the stack, creatures dying in combat) and worth more than it
- Best-of-3: the "Deck submitted: waiting for the next game" banner no longer comes back once the next game has started
- Counters on a card are drawn over its frame and border, not under them
- Play screen: changing a setting twice in a row (the draft format, the timer ...) no longer leaves the page empty
- Fixed a card hitting or draining every opponent (Extended Absence, "each opponent loses 1 life") playing its effect on one player after the other: they all lose life at the same time now.
- Fixed an error when a card blown away by a cyclone look was already gone.
- Fixed the block view showing creatures that can't block any of the attackers (Grave Titan against fliers): only the ones that can block one of them are in it.
- Fixed a deck in the deck list showing another deck's result ("Not legal" for a legal deck, a wrong card count in its note) when the deck builder checked its deck at the same time.
- Fixed the deck statistics' card types counting a card twice (an Artifact Creature under Artifacts and Creatures): each card counts once, under the same type as in the stacks.

## Version 2026.10.26.1750 · October 26, 2026
### New
- New card looks: Ancient Brass Dragon and Ancient Copper Dragon (their heads rising), Archfiend of Despair, Angel of the Ruins, Gauntlet of Power, Cloud, Midgar Mercenary, Iron Man, Armored Avenger, Sheoldred's Edict, The Reaver Cleaver, Buster Sword, Hangarback Walker; Fumigate has its own board wipe of fumes.
- New card looks: Elder Brain, Ob Nixilis, Captive Kingpin and Raphael, Fiendish Savior (rising over the table), Elspeth, Storm Slayer, Nahiri, the Lithomancer (hedrons rising out of the ground), Tezzeret, Cruel Captain, Karlach, Fury of Avernus, Keeper of Secrets, Cosmogrand Zenith, Sphinx of the Final Word, Mass Manipulation, Duplicant (the creature melting into liquid metal). Elesh Norn's whole figure now rises over the table.
- New card looks: Kaldra Compleat, Hero of Bladehold (its battle cry), Kalitas, Traitor of Ghet, Chandra, Torch of Defiance, Gideon, Ally of Zendikar, Valgavoth, Terror Eater (rising over the table), Lolth, Spider Queen, The Deck of Many Things, Delayed Blast Fireball, Magister Sphinx, Twinflame Tyrant; Organic Extinction has its own board wipe of blinding light.
- New card looks: Inferno Titan, Archangel of Thune and Ghalta the Immovable (their heads rising over the table), Umezawa's Jitte (a full moon), Batterskull, Grave Pact, Terastodon, Fires of Mount Doom (a fall of lava), Polukranos, World Eater, Dream Trawler, Sanguine Bond, Terminus.
- New card looks: Improvisation Capstone (blobs of molten paint flung out of the library), Jet Medallion, Ornithopter of Paradise, Patchwork Banner, Resourceful Defense, Worn Powerstone, Elesh Norn, Grand Cenobite (her head rising over the table), Cryptic Command (its glyph of light), Massacre Wurm, Wurmcoil Engine, Hornet Queen (a swarm of hornets), Xenagos, God of Revels.
- Every god shows its art as a constellation in its colors as it enters.
- New card looks: Shadow of the Enemy (Barad-dûr's storm over the graveyard, the souls floating over on smoke), Simic Ascendancy, Sword of the Animist (green vines twining up the blade), Mithril Coat, Mox Amber, Razorkin Needlehead, Priest of Titania (misty lines of mana from each Elf), Incubation Druid, Thrummingbird, Herald's Horn, Urza's Incubator, Mentor of the Meek.

### Changes
- Every spell with a look of its own uses the small stack window, so the window no longer covers its effect (counterspells keep the large one, with their target in view).
- A land entering the battlefield now makes a card-flick sound (a different one each time) instead of the heavy thump.
- A creature killed in combat by a dark creature no longer gets black beams with heavy smoke across the table: a short stab of a dark blade and a wisp of black smoke instead.
- Menace: painted demon eyes now open out of smoke above the attacker, glow red and narrow now and then.
- New setting "Keep cards in place while choosing targets" (Settings, off by default): when you choose several targets (proliferate, "any number of"), every card stays where it is as you pick it.
- Deck builder, stacks: a click moves a card to the sideboard (and from the sideboard back into the deck), Ctrl+click takes it out of the deck, a right-click opens its menu. The menu is the same for cards in and outside the deck: Change art, Add copies (type how many), Move to sideboard / Add to sideboard, Remove from deck / Add to deck, Card details (rules text, the price of the printing in use, every artwork 10 at a time, the sets it was printed in).

### Fixes
- AI: modal spells (Blessed Alliance) are no longer cast just for their life gain while its life is fine; it keeps them for their better modes
- Skips ("My turn", End turn ...) stop when an opponent casts a spell you can counter with a counterspell in your hand and the mana for it
- AI: Selfless Spirit and the like are sacrificed only when something is about to die (a removal or wipe of the opponent's on the stack, creatures dying in combat) and worth more than it
- Best-of-3: the "Deck submitted: waiting for the next game" banner no longer comes back once the next game has started
- Counters on a card are drawn over its frame and border, not under them
- Play screen: changing a setting twice in a row (the draft format, the timer ...) no longer leaves the page empty
- Fixed creatures whose name merely contains a big creature's word getting the big entrance (Priest of Titania thudded down like a titan).
- Fixed the game crashing when you went back to the menu after a game, while an effect was still playing.
- Fixed a mulligan to fewer than 7 cards opening two windows to choose the cards for the bottom of your library.
- Fixed the highlighted lands when you drag your commander to cast it: they now include the commander tax.
- Fixed cards in a window lower down reacting to the mouse when two windows overlapped: only the window on top responds now, in every window.

## Version 2026.10.26.0945 · October 26, 2026
### New
- New card looks: Gisela, Blade of Goldnight (a sunrise and wings of light), Grenzo, Havoc Raiser, Harvester of Souls (a soul off each creature that dies), Helm of the Host, Kefka, Dancing Mad, Rakdos, Lord of Riots (a pillar of fire), Shared Animosity, Solphim, Mayhem Dominus, Sword of Feast and Famine (a black-and-green blade burning with dark and green fire), Underworld Dreams (ribbons of dream-nebula), Jhoira, Weatherlight Captain.
- Martial Coup has its own board wipe: a golden storm of dust and blades, then a dust wave tearing through the creatures.

## Version 2026.10.25.2354 · October 25, 2026
### New
- New card looks: Cathars' Crusade (banners flapping in the wind; a white wisp leaping from creature to creature, growing), Chandra's Ignition (a red nova under streams of fire), Cloud Key, Curse of Hospitality (red ribbons wrapping the cursed player like a mummy), Darksteel Plate, Dreadhorde Invasion, Duty Beyond Death (golden waves knocking arrows away), Elspeth, Sun's Champion, Erebos, God of the Dead (its art as a star sign in purple stars, an aurora), Genji Glove.
- Fell the Mighty and Final Act have their own board wipes: a sword before a rising sun, or six skull runes and a veil rune, then a wave that burns each creature to a crisp (Final Act: to ash, with purple embers).

## Version 2026.10.25.2110 · October 25, 2026
### New
- New card looks: Bolas's Citadel (its citadel rising behind it; a black pulse on each use), Authority of the Consuls, Aetherize, Bala Ged Recovery, Faerie Mastermind, Relic of Sauron, Temur Battlecrier, Sun Titan (a sunrise), Guardian Project, Harmonize, Lotus Cobra, Mana Geyser (lava thrown from a geyser).

- Link any deck to its Moxfield or Archidekt page (the deck's ⋯ menu: Link to Moxfield or Archidekt…), then update it from there whenever it changes there.

### Changes
- Flying effects leave real trails of smoke, embers and glowing motes behind them.

### Fixes
- AI: modal spells (Blessed Alliance) are no longer cast just for their life gain while its life is fine; it keeps them for their better modes
- Skips ("My turn", End turn ...) stop when an opponent casts a spell you can counter with a counterspell in your hand and the mana for it
- AI: Selfless Spirit and the like are sacrificed only when something is about to die (a removal or wipe of the opponent's on the stack, creatures dying in combat) and worth more than it
- Best-of-3: the "Deck submitted: waiting for the next game" banner no longer comes back once the next game has started
- Counters on a card are drawn over its frame and border, not under them
- Play screen: changing a setting twice in a row (the draft format, the timer ...) no longer leaves the page empty
- Fixed The Aetherspark being offered as something to attack while it's attached to a creature (it can't be attacked then): planeswalkers and battles none of your creatures may attack are no longer clickable in the attack view.
- Fixed portraits with a chosen artwork showing as a red X to everyone else (the server dropped the artwork's set and number from it).
- Fixed decks changing by themselves in the deck builder: a click on a card in your deck (to look at it in a stack) moved it to the sideboard, leaving a Commander deck at 99 cards (and a click back on it put it in again, 101). A click now only opens the card's options; the legality line says when a Commander deck has cards in its sideboard.
- Fixed choosing X for a cost paid with something other than mana (Retribution of the Ancients' +1/+1 counters, life, cards): it was capped at the mana you had; now up to all you have of it.

## Version 2026.10.25.1816 · October 25, 2026
### New
- Coin flips show: the painted coin is tossed up, spins over the table and lands on the side that came up (the king or the moon), glowing green or red for a won or lost call (Mana Crypt, Krark's Thumb ...).
- New card looks: Temur Ascendancy, Kutzil, Leyline of the Guildpact, Lotho, Black Market Connections, Baleful Strix, Deadly Dispute, Morophon, Big Score, Tatyova, Skullclamp, Solemn Simulacrum. Ghostly Prison raises a wall of white swords in mist; each attack toll shatters one.
- New card looks: Goblin Anarchomancer, Return of the Wildspeaker, Hardened Scales (scale armor growing over it), Culling Ritual, Tireless Provisioner, Akroma's Will, Muldrotha (a torrent of water its art takes shape in), Eerie Ultimatum, Deathrite Shaman, Mayhem Devil, Beast Whisperer, Wild Growth.
- New card looks: Crop Rotation, The Great Henge (vines close a circle in a ring of standing stones and a green portal opens), Whirlwind of Thought (a tornado of runes on each spell), Storm-Kiln Artist, Rapid Hybridization, Explore, Professional Face-Breaker (a flail swung into the portrait), Rishkar's Expertise, Village Rites, Scute Swarm (glowing insects swarming to each copy, more the bigger the swarm).
- New card looks: Mirari's Wake (a shiny white-green orb, an aurora over your side), Elas il-Kor, Thrill of Possibility (the discard burning), Harrow, Nissa, Leyline Tamer, Grand Abolisher (a white hush, a seal on each opponent), Pitiless Plunderer, Sylvan Library (forest light through falling leaves), Hexing Squelcher, Revitalizing Repast, Eladamri's Call, Malakir Rebirth (red mist; coming back in red mist).
- New card looks: Zulaport Cutthroat, Gamble, Goblin Electromancer, Maelstrom Wanderer (a storm vortex; its own whirlpool cascade with lightning), Inspiring Call, Gleaming Splendor, Archmage Emeritus, Morbid Opportunist, Seedborn Muse, Viscera Seer, Inkshield, Finale of Devastation (vines and a green nova).
- New painted art in looks: Hardened Scales' reptile scales, Boros Charm's golden hex bubble, the Blood token's breaking vial, Cauldron of Essence's cauldron, Path to Exile's rune portal, painted slashes, trails and water jets.
- New card looks: Impact Tremors (glowing lava cracks to each player), Nissa's leylines, Cauldron of Essence (a cauldron boiling over), Unexpected Windfall, Withering Torment, Infernal Grasp (a demonic hand drags it down), Orcish Bowmasters, Avenger of Zendikar, Snap, Hullbreaker Horror (a dark sea surge), The One Ring (its Eye of fire in the ring, the inscription in Tengwar), Exploration, Dryad of the Ilysian Grove (its art as a star sign), Diabolic Intent, Reality Shift.
- Save login on the login screen: stay logged in on this PC, on each server you use.

### Changes
- Fire that behaves like fire: flames grow out of a spreading scorch, flicker between many painted shapes, and flying fire streams back against its way with smoke and wisps.
- Many effects use the new low-detail paintings (weapons, the demon eyes, chains, vines, roots, the action cues) and a mix of both styles for smoke, mist, sparks and flames.
- Painted coins everywhere a single coin is shown: they tumble down, bounce on the table, rock on their rim and settle.
- Life drains are as big as the life: one life is a small, thin line.
- Kodama's Reach's tangled vines, Grim Affliction's veins from every edge, stabs that ram through, the Clue's magnifying glass, a golden-brown Food roll.

### Fixes
- AI: modal spells (Blessed Alliance) are no longer cast just for their life gain while its life is fine; it keeps them for their better modes
- Skips ("My turn", End turn ...) stop when an opponent casts a spell you can counter with a counterspell in your hand and the mana for it
- AI: Selfless Spirit and the like are sacrificed only when something is about to die (a removal or wipe of the opponent's on the stack, creatures dying in combat) and worth more than it
- Best-of-3: the "Deck submitted: waiting for the next game" banner no longer comes back once the next game has started
- Counters on a card are drawn over its frame and border, not under them
- Play screen: changing a setting twice in a row (the draft format, the timer ...) no longer leaves the page empty
- Fixed logging in on the test server logging you out of the live one (and back).

## Version 2026.10.25.0105 · October 25, 2026
### New
- New card looks: An Offer You Can't Refuse (a red seal, the spell gone in a heap of gold), Boros Charm (by mode: a fireball, white-gold shields, crossed swords), Rhythm of the Wild (a drumbeat; your creatures land with haste streaks), Smothering Tithe (a golden glow; the coin flies from the opponent who drew), Growth Spiral (a green and blue leaf spiral), Dovin's Veto (a sphere of light: it can't be countered), Swan Song (feathers; its Bird arrives in a poof of feathers), Esper Sentinel (a white eye over the spell), Ruinous Ultimatum (three sigils over the opponents' side, their permanents shatter), Deflecting Swat (sparks, a bent streak), Garruk's Uprising (a green roar; claws across big creatures), Jeska's Will (red orbs out of the opponent's hand, the exile glowing).

### Changes

### Fixes
- AI: modal spells (Blessed Alliance) are no longer cast just for their life gain while its life is fine; it keeps them for their better modes
- Skips ("My turn", End turn ...) stop when an opponent casts a spell you can counter with a counterspell in your hand and the mana for it
- AI: Selfless Spirit and the like are sacrificed only when something is about to die (a removal or wipe of the opponent's on the stack, creatures dying in combat) and worth more than it
- Best-of-3: the "Deck submitted: waiting for the next game" banner no longer comes back once the next game has started
- Counters on a card are drawn over its frame and border, not under them
- Play screen: changing a setting twice in a row (the draft format, the timer ...) no longer leaves the page empty
- Fixed new cards (the original dual lands, Plea for Power ...) taking up to a day to show up in the deck builder's search: the game looks for a new card list at each start (at most every half hour) instead of once a day.

## Version 2026.10.24.2343 · October 24, 2026
### New

### Changes
- Painted looks for tokens and actions: a Clue is examined under a magnifying glass, a Food roll loses a bite and crumbles, a Map unfolds and its ink route draws itself, a Blood token's vial drains, clasps shut round a creature that gets equipped or enchanted, shadow hands take a permanent whose control changes, an hourglass turns while a suspended card waits. Ward: a seal holds over the permanent while its toll shows, then breaks. -1/-1 counters, wither and infect: veins creep over the creature. Other counters (shield, oil, stun ...): a counter stamp. Cards exiled from a graveyard turn to paper ash over the pile. The monarch's crown is the painted one now (flying in and worn). Control taken: a chain in the stealing card's color creeps wiggling from the new controller to the permanent, then mist behind it and painted claws (no drain any more). -1/-1 counters: the veins grow up the creature a strand or two at a time. Graveyard hate: black vapor and mist behind the shredded cards. After a fire spell or an explosion, thin smoke keeps curling up from where it hit. Lasting afflictions show: violet vapor keeps curling off a creature with -1/-1 counters, a dark one off a creature under an opponent's Aura (Pacifism, a Cursed Role ...), as long as it lasts. A Blood token's vial fills red in clear glass, then shatters and the blood spills. Rift Bolt: red lightning out of a rift at its caster. Sedgemoor Witch enters in black vapor and mist with swirls and tiny bats.
- Painted card looks: Generous Gift's elephant sits down on the card, Cyclonic Rift's storm has a painted tornado at its heart, Three Visits shows forest spirit faces, Sol Ring's ring is painted gold, Demonic Tutor's shadow demon rises inside a red-lit cloud of smoke. Deadly Rollick stabs a flurry of daggers through the creature, one after another, all pulled back together as it goes; Assassin's Trophy stabs a bloodied dagger. Both only sound the knife going in, with a meaty hit. Toxic Deluge's oil rain splashes acid drops and oily strands. Victimize's kris and steel-link chains, Kodama's Reach's roots clutching the library, Cultivate's green mist and blooming flowers, Swords to Plowshares' painted sword.
- Withering (poison removal, deathtouch) makes no sound of its own any more.
- Admins: the old FX Lab is gone; the Card Workshop and the FX Studio (one tool) took its place.

### Fixes
- AI: modal spells (Blessed Alliance) are no longer cast just for their life gain while its life is fine; it keeps them for their better modes
- Skips ("My turn", End turn ...) stop when an opponent casts a spell you can counter with a counterspell in your hand and the mana for it
- AI: Selfless Spirit and the like are sacrificed only when something is about to die (a removal or wipe of the opponent's on the stack, creatures dying in combat) and worth more than it
- Best-of-3: the "Deck submitted: waiting for the next game" banner no longer comes back once the next game has started
- Counters on a card are drawn over its frame and border, not under them
- Play screen: changing a setting twice in a row (the draft format, the timer ...) no longer leaves the page empty
- Fixed the looks of Clue, Food, Map, Blood and Treasure tokens being used (sacrificed) never playing: the game calls them "Clue Token" and so on.

## Version 2026.10.24.1839 · October 24, 2026
### New
- 34 new cards from XMage's latest update, among them Tamiyo, Upriser Crowned, Origin of Iron Man, Silver Surfer, Galactus's Herald, Thor, Asgard's Avenger and Storm, Queen of Wakanda.
- 8 cards the group's decks use that XMage didn't have yet: Kid Loki, Photon, Mighty Marvel, Scarlet Witch, Chaotic Avenger, Azog, Moria's Ruin, Rhovanion Rampager, Jhoira, Weatherlight Corsair, The Ur-Sphinx and Jace, Multiverse Architect. Every card in the group's decks is in the game now.
- 73 more cards the precons use, so every precon plays complete: the Marvel Super Heroes Commander decks (Galactus, Devourer of Worlds, Loki, the Deceiver, Ultron, Unlimited, M'Baku, Okoye, Hawkeye, Hercules ...), the Doctor Who decks (The War Doctor, Missy, The Pandorica, The Moment, Don't Blink, the Cybermen ...), Reality Fracture (Jace's Machinations, Uldaros Theorix, Venser, Dack Fayden ...), The Hobbit (Gollum, Riddle Master, Elrond, Moon-Reader ...), Aminatou, Veil Piercer, Durnan of the Yawning Portal, Feather, Radiant Arbiter, Zinnia, Valley's Voice and more. Loot, the Anomaly hits as hard as his power is negative, and Doomsday Confluence takes as many modes as X (up to 20). Not playable: Missy's "chaos ensues" and Susan Foreman's planeswalking (the game has no planes).
- 40 of the newest cards: Loki, Lord of Misrule, Reed Richards, Smartest Man, Silver Surfer, Cosmic Voyager, Taskmaster, Nick Fury, Daredevil, Hulkling and more from Marvel, The Hobbit's Galion and Old Fat Spider, the Transformers Blaster, Prowl and Soundwave, Deadpool, Trading Card, The Celestial Toymaker, Lorehold, the Historian, Casey & Raph, Secret of Bloodbending, Cryptic Spires and others. Every Commander-legal card from 2021 on is in the game now. Not playable: The Celestial Toymaker counts only its own piles (no other pile or guess effects count yet), and Cryptic Spires' two colors are chosen as it first enters instead of at deck building.
- New card looks: Rakdos Charm (an artifact blown apart, a graveyard burning, small fireballs for the pings), Deadly Rollick (a violet knife, souls drifting off), Propaganda (a blue spiral on every taxed attacker), Damn (a white-and-black sigil, the creature crumbling), Enlightened Tutor (a golden book in holy light), Mana Drain (a blue and red vortex), Vampiric Tutor (blood splashing), Mind Stone (a psychic swirl, a glint as it draws), Victimize (a ritual circle with chains), Annie Joins Up, Delighted Halfling and Faeburrow Elder (their own entrances).

### Changes
- The FX Studio has the Card Workshop's layout (the list on the left, the effect's sample card, its state, the notebook with Color, Path, Sound, Tags, Used by and Requests), and a switch at the top goes between the two at once; a card from the Studio's lists opens in the Workshop without reloading.
- The FX Lab and the Card Workshop show a card's look exactly as a game does: they read the same list of card looks, and draws, discards and removals play through the game's own path.
- Escape goes back on every screen: the lobby a page up, Decks (its deck builder first), Settings, Profile, Replays, Seasons, the Workshop and the FX Lab.
- Status texts use one set of colors everywhere (fine, warning, problem).
- Card names as you type (the profile's avatar, the card fields) come from the offline card data: instant, and without an internet connection.
- Leaving a game works the same from the menu and from the game-over screen (a replay just closes, a tournament game is given up).
- Effects make fewer new materials and textures while they play (smoother big effects).
- Effects spawn their sparks, smoke and trails the same way on every screen (as on a 144 Hz one), and a huge effect can't flood the table any more.
- At most 400 card pictures stay loaded (a long session used more and more video memory); a commander's animated art loads in the background as the game starts.
- Connection lost: the client tries again every 3 seconds for 2 minutes, then logs you out.

### Fixes
- AI: modal spells (Blessed Alliance) are no longer cast just for their life gain while its life is fine; it keeps them for their better modes
- Skips ("My turn", End turn ...) stop when an opponent casts a spell you can counter with a counterspell in your hand and the mana for it
- AI: Selfless Spirit and the like are sacrificed only when something is about to die (a removal or wipe of the opponent's on the stack, creatures dying in combat) and worth more than it
- Best-of-3: the "Deck submitted: waiting for the next game" banner no longer comes back once the next game has started
- Counters on a card are drawn over its frame and border, not under them
- Play screen: changing a setting twice in a row (the draft format, the timer ...) no longer leaves the page empty
- Fixed a second game in the same window (a rematch, a tournament's next game) taking the first game's turn order and commanders: the table couldn't seat the players.
- Fixed Beast Within's Beast growing out of the torn card twice.
- Fixed decks with cards printed under another name (Marvel, Transformers, Final Fantasy and Secret Lair printings: "T'Challa's Protection", "Megatron", "Balamb Garden" ...) counting them as cards the game doesn't know: they play as the cards they are (Teferi's Protection, Blightsteel Colossus, Command Beacon ...).
- Fixed combat hits and lifelink not updating the life totals in the four-player rows and the side windows until the next table update.
- Fixed two removals at the same time mixing up their looks (where a card is exiled to, where the rocks or claws hit).
- Fixed emblems going to the wrong place after your plate was moved in layout edit mode.
- Fixed a few effect sounds and shakes not following the effect speed.
- Security: passwords and login tokens are never written to the server log any more; a failed request only logs what kind of message it was.
- Security: after six wrong passwords for a name, logins for it wait a few minutes; passwords can have at most 128 characters.
- Security: replays, collections, cube imports, deck brackets and bug reports need a login; oversized messages are refused.
- Security: avatars, sleeves, collections and draft settings sent to the server are cleaned to plain text; drafts only take known set codes, and cube imports run one per player.
- Security: player names, chat, card names and server messages can no longer carry text markup (links, images) into the chat, replays or the deck builder.
- Security: the test switches that open the Workshop, the FX lab, the Studio and the card review only work in development builds.
- Fixed a save that could lose data: accounts, decks, settings, stats, collections, seasons and card profiles are saved whole or not at all, and a file that can't be read is kept aside instead of being overwritten.
- Fixed the server keeping every finished game in memory until a restart; it lets go of a game a minute after it ends.
- Fixed watching the same game a second time playing every animation twice.
- Fixed small server leaks: each window's helper thread and ping timer now stop when it closes or logs in again; timers share one thread.
- Fixed a rare server error when someone logged in while a message went out to everyone.
- Fixed effects that could wait forever for a card that left the table: they give up after 5 seconds and the game goes on.
- Fixed the table freezing for good when the game screen closed in the middle of an effect, and for 10 seconds on a message missing its data.
- Fixed looping effect sounds (wind, hum) playing on in the menu after leaving a game mid-effect.
- Fixed Assassin's Trophy playing a second, generic look after its knife and rune.
- Fixed Vandalblast's artifacts vanishing before its meteors hit them: each goes as its meteor lands.
- Fixed Beast Within, Pongify and Rapid Hybridization showing the standard kill on top of their own rip and puff.
- Fixed a combat hit after non-combat damage briefly showing an old life total and a wrong number.
- Fixed the deck you pick per format not following your account to another PC.
- Fixed Back after editing a finished draft's deck going to an old screen; it goes to the menu.
- Fixed a card search in the deck builder getting cards from the previous search mixed in.
- Fixed set pictures stopping to load after a few failed downloads.
- Fixed the report window erroring when closed with Escape right after sending.
- Fixed a failed update leaving the server stopped: it is checked first and always starts again.
- Fixed errors when a creature without a power total hit something, and when a life number had already gone.
- Fixed effects that could hang when their card was removed mid-way (every effect's wait now gives up after 5 seconds).
- Fixed a fight being paired with the wrong creature after a fight whose second creature had already left.
- Fixed the card list download not being retried at the next start after a failed download.

## Version 2026.10.24.0148 · October 24, 2026
### Fixes
- AI: modal spells (Blessed Alliance) are no longer cast just for their life gain while its life is fine; it keeps them for their better modes
- Skips ("My turn", End turn ...) stop when an opponent casts a spell you can counter with a counterspell in your hand and the mana for it
- AI: Selfless Spirit and the like are sacrificed only when something is about to die (a removal or wipe of the opponent's on the stack, creatures dying in combat) and worth more than it
- Best-of-3: the "Deck submitted: waiting for the next game" banner no longer comes back once the next game has started
- Counters on a card are drawn over its frame and border, not under them
- Play screen: changing a setting twice in a row (the draft format, the timer ...) no longer leaves the page empty
- Fixed card prices in the deck builder: a card without a chosen printing shows the cheapest normal price, not the newest printing's (Nykthos showed its Pro Tour promo's).
- Fixed the offline card search missing cards whose main printing is digital only, such as the original dual lands (Tropical Island, Underground Sea ...).

## Version 2026.10.24.0104 · October 24, 2026
### New
- Added the card's own effect to the Card Workshop: it says what custom effect a card has (its own look, entrance, animated commander art, card review looks) and Play its effect plays it on the table.
- Added Supreme Verdict's own wipe: light beams down with a long deep thud and thunder, bursting into an explosion of light as it lands, then a nova rolls out (the table bending in a slightly wavy ring, a thin blue line on its crest, blue-white fire and hundreds of painted wisps streaming back inward off it, vapor and smoke behind) with a swelling swoosh and low fire crackling, tearing each creature apart as it reaches it.
- Added more card effects: the white board wipes (Supreme Verdict, Austere Command, Farewell, Day of Judgment) bring light down on the table like Wrath of God, Damn and Living Death open the black hole, Force of Will, Force of Negation, Fierce Guardianship and Pact of Negation burst into blue fire before countering, and more removals end their own way (Abrupt Decay, Nature's Claim and Krosan Grip rot, Assassin's Trophy, Hero's Downfall, Infernal Grasp, Go for the Throat, Doom Blade, Murder, Fell the Profane and Tear Asunder in shadow smoke, Sink into Stupor and Into the Roil in a dark tide, Untimely Malfunction and Smash to Smithereens shattering metal, Disenchant, Witch Enchanter and Stroke of Midnight in light).
- Added more card effects: Despark (a white and a black bolt), Anguished Unmaking (unravelling into light and shadow, souls rising), Putrefy (rot and green spores), Void Rend (a violet rift swallowing it), Deadly Rollick (shadow smoke), Vandalblast and Abrade (shattering metal), Enlightened Tutor (a white flash and feathers), Worldly Tutor (leaves bursting from the library), Mystical Tutor (a spellbook), Phyrexian Arena (a dark circle spreading under it), Timeless Lotus (a lotus of light and petals), and spellbook pages for Faithless Looting, Windfall, Sign in Blood and Read the Bones.
- Added effects of their own for more cards: Sakura-Tribe Elder bursts into cherry blossom petals when sacrificed, Feed the Swarm sends a swarm of insects over its target, Bedevil, Damn, Terminate, Rakdos Charm and Mortify burn an occult sigil into the air over theirs, spectral chains sweep over your side for Ghostly Prison, Propaganda, Sphere of Safety and Windborn Muse, Mystic Remora sends water ripples, Rhystic Study opens a spellbook and Ponder, Brainstorm, Preordain and other cantrips turn its pages, and Cyclonic Rift and Chaos Warp swirl with painted energy.
- Added animated art to the commander entrances of Felothar the Steadfast, Atraxa, Edgar Markov, Karlov of the Ghost Council, Kenrith, Krenko, Mayael the Anima, Ob Nixilis, Captive Kingpin, Rhys the Redeemed, The Ur-Dragon and Yuriko: their art moves as they enter.
- Added a Set filter to the deckbuilder's card search: only the cards printed in that set, each shown in its printing from it (with Every art: each of its printings there).
- Added the bracket as a ribbon on each Commander deck's box in the deck overview, in the bracket's color; it is kept, so it shows at once next time, and worked out again when the deck changes or with Refresh bracket in the deck's menu (the deckbuilder's Refresh updates it too).
- Added the whole card list offline: every card and every printing comes from the server (refreshed once a day from Scryfall), so the card search is instant and doesn't run into Scryfall's limits; searches show 30 cards at a time, and a card whose picture can't be loaded shows as a plain card with its name, cost, type and text.
- Added card prices: every printing in the art choice shows its Cardmarket price (trend price, refreshed daily) and opens its offers from German sellers on Cardmarket; the deck list shows each card's price and the Statistics the deck's value.
- Added Suggest cards to the deckbuilder (Commander decks): the cards decks with your commander play most (EDHREC) that your deck doesn't have yet, by category, sorted by how often they're played or by synergy; one click adds a card. Cards that would raise the deck's bracket are marked (Game Changers, mass land denial, a third extra-turn card).
- Added effects of their own for more of the most played cards: Heroic Intervention and Flawless Maneuver (a golden shield dome over each group of your permanents), Swiftfoot Boots (thin wavy speed lines and feathers), Lightning Greaves (small golden lightning trailing in and crackling over it), Beast Within (the card tears open from the middle along a glowing green seam, its halves peel away and the Beast token grows out of the tear), Generous Gift and Pongify (the permanent dissolves in white light or vanishes in a cloud of small blue puffs and dust before its token rises) and Lightning Bolt (a heavy red bolt from the sky leaving a smouldering scorch mark).
- Added the initiative banner to the layout edit mode: it has a place of its own by each player's portrait that can be moved and sized, and the banner follows it.
- Added size buttons to the layout edit mode: the picked part bigger, smaller or back to its own size (also with + and − on the keyboard).
- Added switches to the UI Review: the initiative, more player counters (energy, experience, rad), commander damage and day/night.

### Changes
- Changed the choosing spells (Brainstorm, Faithless Looting, Frantic Search): their cards keep spinning in the middle of the table, for everyone, for as long as their player is choosing, and the end (the cards put back, the discards burning or tumbling) plays when the choice is actually made.
- Changed library searches (land searches, tutors, Path to Exile's land ...): while a player is choosing from their library, it stays fanned open and scanned for everyone, the card's own searching look playing (Kodama's Reach's roots, Three Visits' spirits, a tutor's look), and it folds back when the choice is made.
- Changed Fierce Guardianship: a crackling proton stream shoots from your portrait to the spell, energy strands twisting round its core in blue and gold with tiny red lightning in it, the whole beam wandering side to side, flaring where it lands.
- Changed Teferi's Protection: after the time bubble closes, a flash of white light (as Supreme Verdict's) over mostly your side of the table, and everything inside is phased out (barely visible) until it fades.
- Changed Sakura-Tribe Elder: it vanishes in a shower of cherry blossoms that drift onto the library, and the petals carry the land to the table, landing in blossoms.
- Changed Frantic Search and Faithless Looting: three cards spin in the middle of the table while you choose, crackling with lightning, then one goes to your hand and two to the graveyard. Frantic Search's cards spin and each in turn shoots up and out and stays a moment, its spin halted, as if you were looking at it, throwing blue sparks, the discards tumbling carelessly, and its lands untap with blue glints; Looting's cards are ripped out of the library, one or two of their edges singed and burning while you choose (ragged black char, glowing red embers and a bright line, flecks flaking off), and the discards burn up where they are like the other card burnings, their ash then blowing to the graveyard, the air roaring as it is pulled into the fire.
- Changed Vandalblast (after its art): a red energy orb swells over your portrait (overloaded: longer and bigger the more artifacts), black smoke drawn in round it and blue lightning crackling over it, with a low energy hum and thunder, then an arcing, wobbling meteor of fire crackling with blue and red lightning flies from your portrait trailing black smoke lit red, the table's lightning striking down as it blasts the artifact apart with a small black-red shockwave and thunder rolling after; overloaded, a rain of them.
- Changed Putrefy: one of the two strands of its poison spiral is black; where it hits, rot cracks through it, flakes crumble off, green spores rise, and a black flower grows out of the moulding card.
- Changed Cyclonic Rift: a gust of wind blows the permanent off to its owner's hand; overloaded (after its art), a huge red-violet tornado funnel rises in the middle of the table, sucks up every permanent and whirls them round with it while blue lightning strikes round it, then a tilted shockwave with red, blue and violet wisps flings each one off to its owner's hand.
- Added to the Card Workshop: an Overloaded check box beside Play its effect, to see a spell cast overloaded.
- Changed Generous Gift: painted rays of light fall on the permanent as it dissolves into rising sparks, and the Elephant sits where it was in the light, white and glowing, with a stomp and a thud before it goes to its place.
- Changed Terminate: a red and a black slash cross the creature, red cracks split it, red-black fire bursts out of the cuts with black smoke, and it burns up in dark red fire.
- Changed Brainstorm: three cards fly to the middle of the table and spin there while you think, blue lightning crackling between them, energy beams flashing, a blue wisp aura streaming off them and an electric hum; then one goes to your hand and two back onto the library.
- Changed Birds of Paradise: it enters in a poof of feathers in all five colors drifting down.
- Changed the mana swirl for black mana: obsidian-dark wisps with a violet sheen, a darkness behind the card.
- Changed Dark Ritual: in the middle of the table, black smoke and a ring of smoking black runes, three big black orbs spinning round trailing smoke and dark wisps, frayed by black and violet lightning, then flying into the caster's mana.
- Changed Anguished Unmaking: a spear of light stabs into the card, an orb of light swells above it and bursts into light and smoke, and the card burns away from the top in an erratic front of white-gold light, black wisps and flakes streaming off it.
- Changed Kodama's Reach: a braid of roots twisting round each other like an old vine, leafy twigs off them, grows from your portrait in a bow over into the library, and a vine pulls the land out onto the table.
- Changed Three Visits: three forest spirit faces loom in the middle of the table a moment, then burst into a storm of leaves.
- Changed Lightning Greaves: lightning strikes down onto it from above, a big bolt in the middle and smaller ones from the sides.
- Changed Sol Ring: its sun is painted now (a soft glow, two star bursts turning against each other, golden embers drifting off it), the gold ring in front of it trailing sparks.
- Changed the mana swirl (mana rocks and mana creatures: Arcane Signet, the Talismans, Birds of Paradise ...): a glow behind the card split into its mana's colors (no ring), painted wisps in those colors winding round it, painted glitter dropping off them, and they meet at the top in a painted star.
- Changed Chaos Warp: the table warps round it into red rings running inward and twisting, its eye a painted orb of darkness with a red rim, the storm whirling into it painted smoke.
- Changed Swords to Plowshares: a star flashes as the light strikes, the creature dissolves into rising golden sparks, and painted golden motes settle into the player gaining the life.
- Changed Path to Exile: the creature is blown away into pale flakes and motes streaming toward its owner's exile, soft white wisps along the way.
- Changed Assassin's Trophy: the creature is backstabbed: a slit tears open in it and the blade of a green-glowing knife comes out of it from behind in a burst of black and green, the wound dripping blood and black and green poison, a green rune edged in black burning on it with green wisps winding round it like vines, then its soul is torn out and rises into the shadow smoke.
- Changed the land searches (Cultivate, Farseek, Nature's Lore, Rampant Growth ...): the library glows and leaves swirl up as it is searched, a ribbon of wisps in the land's color and leaves carries it to the table, more leaves and painted wisps rise, a painted dust cloud and pebbles where it lands; Cultivate's second land goes to the hand trailing leaves.
- Changed Heroic Intervention: each dome is a high translucent golden shell with a sheen that holds for a few seconds, a golden star flashing as it forms and glints running along its rim.
- Changed the Card Workshop: Swords to Plowshares, Path to Exile, Assassin's Trophy and the land searches play their whole look there now.
- Changed Void Rend: embers keep flying off the card and black-violet vapor rolls off it and rises.
- Changed Phyrexian Arena: a smaller blood drain, with black slick dripping off it.
- Changed Bedevil, Damn, Terminate, Rakdos Charm and Mortify: the sigil falls from above and smashes into the card, glowing red-hot, a small ring of runes flaring round it.
- Changed Pongify and Rapid Hybridization: a thick cloud of smoke swallows the whole card, and the token is uncovered as it thins.
- Changed Beast Within: something thumps against the card from inside, then it bursts open from the middle like a cocoon, four torn flaps peeling outward, slime spattering and dripping, and the Beast bursts out.
- Changed the Card Workshop: removal spells now kill their target when played, and the table is put back once the effect is done.
- Changed Demonic Tutor: a black cloud gathers in the middle of the table over a faint red pentagram, a ring of red runes turning round it and the demon's eyes opening in it, while a red-black runed mist creeps in round the screen; a thick stream of smoke reaches to the library, and the card found is carried to your hand wrapped in rolling black smoke.
- Changed Force of Will, Force of Negation, Fierce Guardianship, Pact of Negation and Mental Misstep: rippling rings spread far round the caster's portrait like a shield on water, the table bending under each, then a thick beam of blue fire with flames licking off its edges shoots from them to the counter's rune.
- Changed Craterhoof Behemoth: its shockwave lies tilted on the table like the ring of dust, starts as the card hits the table, bends the table more the more creatures stampede, carries its dust along on the wave streaming back inward, and a glowing green elephant's foot stomps onto each of your creatures as it passes, kicking up dust (no green wave or pulse anymore).
- Changed Lightning Bolt's scorch: a thin smoke trail rises off the burnt patch while the embers glow, the embers each pulsing with a soft glow and cooling from yellow to red.
- Changed Blood Artist: shorter, smaller blood drips and a thinner drain line.
- Changed fireballs to a painted fireball flying head first with its flames streaming behind, explosions to a painted explosion (a flash, boiling fire, smoke), Craterhoof Behemoth and big creatures to roll out a painted ring of dust and rocks, Swords to Plowshares, Enlightened Tutor and Generous Gift to bring light falling from above, and Propaganda, Annie Joins Up and Windborn Muse to unfurl a waving banner.
- Changed more effects to painted pictures: wet blood worked into Blood Artist's strokes, ghostly souls streaming into Reanimate trailing black-purple smoke in the same breeze, big creatures cracking the floor in their colors as they land, a painted magic circle under the counter rune, the floor cracking where Lightning Bolt strikes, and twisted metal and gear fragments bursting off destroyed artifacts.
- Changed Blasphemous Act: the floor cracks open in a pentagram under the cards (jagged, frayed cracks pressed into the stone), fire wells up in the cracks with flames rising in spots, fine fractures splinter off the lines, zigzag cracks of fire race out to each creature and each bursts into flames, while a red-black mist creeps in round the screen's edge with glowing runes spelling the card's name.
- Changed explosions: a smaller fiery core with painted flames bursting through it, dark smoke bursting and rolling over it with the fire still glowing red inside it (they were mostly an orange blob).
- Changed more effects to painted pictures: a hexagon shield dome for Heroic Intervention and Flawless Maneuver, painted feathers for Swiftfoot Boots, a frayed paper edge on Beast Within's tear, bursting smoke puffs for Pongify, painted light flashes on explosions and Lightning Bolt, flickering painted flames on burning cards, painted wisp strokes in Atraxa's wave and stone chunks flying when cards are crushed and when Craterhoof lands.
- Changed the grow effect (monstrosity, adapt): instead of a wave up the card, it swells like a serum wearing off, one part after another suddenly bulging and wobbling, stretching the parts next to it, until the whole card is big; then it springs back to its size.
- Changed a card burning up: painted flames lick along its burning edge, burning flakes with glowing edges flutter up off it, and it crumbles into finer pieces.
- Changed the effects to painted sprites: smoke puffs, dust clouds, sparks and embers and falling leaves are hand-painted now, the bats (Vampiric Tutor, Edgar Markov, Mirkwood Bats) are painted bats beating their wings, and every fire (fireballs, burning cards, explosions, Blasphemous Act's ring of fire, the storm's clouds) burns in painted flames and smoke.
- Changed haste: the creature dashes in with painted motion streaks in its own color (dash and Swiftfoot Boots: golden), and the table's lightning crackles along its edges in its color.
- Changed Atraxa's proliferate at the end of turn: a wave of fine wisps in her four colors fans out from her portrait instead of thick rings.
- Changed picking in the layout edit mode: one part at a time, picking another lets go of the one before.
- Changed the mana orbs, counters and commander damage again: each group now stands on its own point on the table, so every group of every player moves freely in the layout edit mode without moving the others.
- Changed the initiative banner: a turned pole with brass bands, a crimson banner with gold trim, a swallowtail and a golden sun, a flickering torch with embers, leaning slightly.

## Version 2026.10.23.0026 · October 23, 2026
### New
- Added Alt+click on a card in your hand: it is revealed to the other players in their reveal window.
- Added right-click on a double-faced card to turn it to its other side; double-faced cards in hand and library now show both sides on hover.
- Added Update from link to a deck's menu: a deck imported from Moxfield or Archidekt is imported again in place, keeping its name, format and art.
- Added Choose all for effects with any number of targets (Proliferate and the like): every eligible target in one click.
- Added the bracket plaque to the deckbuilder: the bracket's number large in its color, its name, and a list of why: each criterion with the bracket it points to and the cards behind it (Game Changers, mass land denial, combos, extra turns), plus what the deck passed; a Refresh button and What are brackets?
- Added a player's floating mana, counters and commander damage to their Static effects window, each in its frame.
- Added paying from your mana pool by hand: with Autopay off, floating mana is no longer spent on its own; while you pay a cost its frame lights up and a click on a color pays with that mana.
- Added yourself as a choice in the target zoom: when a spell or aura can target you (an aura enchanting a player, "target player"), your own panel at the bottom can be clicked like the others'.

### Changes
- Changed the mana orbs, counters and commander damage on the plates: each group sits in one frame that grows with it, in a fixed place, so they stay where the layout edit mode put them.
- Changed known cards on a library to show large and sharp on hover.
- Changed card highlights to a border only, without a glow around the card.
- Changed Blasphemous Act to show only its pentagram wipe, slower (about 3 seconds).
- Changed a deck's art to use the printing chosen for its icon card.

### Fixes
- AI: modal spells (Blessed Alliance) are no longer cast just for their life gain while its life is fine; it keeps them for their better modes
- Skips ("My turn", End turn ...) stop when an opponent casts a spell you can counter with a counterspell in your hand and the mana for it
- AI: Selfless Spirit and the like are sacrificed only when something is about to die (a removal or wipe of the opponent's on the stack, creatures dying in combat) and worth more than it
- Best-of-3: the "Deck submitted: waiting for the next game" banner no longer comes back once the next game has started
- Counters on a card are drawn over its frame and border, not under them
- Play screen: changing a setting twice in a row (the draft format, the timer ...) no longer leaves the page empty
- Fixed cards conjured in the FX Studio not playing their own effects (signature looks, triggers, drains, draws, Treasures, counterspells): they now play as in a game.
- Fixed the black hole that swallows a card being cut off at the card's edges.
- Fixed the deck overview's brackets missing when the deck screen opened before the connection to the server was up.
- Fixed card data and pictures from Scryfall failing when many were asked for at once (they are asked again after a moment).
- Fixed the client hanging after many effects (effect loops kept running after their node left the table).
- Fixed Abort game crashing the window of the player aborting.
- Fixed watching a game being refused after an earlier attempt.
- Fixed a click on a creature in a player's target panel choosing the player instead (Meteorite).
- Fixed cards under a window reacting to the pointer.
- Fixed a card picture that can't be found: a red X now stands in its place instead of an empty frame or a crash.
- Fixed chosen targets disappearing from the target zoom.
- Fixed the reveal window's header bar running past the window's right edge.

## Version 2026.10.22.1944 · October 22, 2026
### New
- Added effects from the card review of the 300 most played cards and 99 most played commanders: a mana swirl in their colors for mana rocks and mana creatures, a glow on commanders' triggers, glints flying to your hand for draws, the blood drain for life drained or paid, gold coins flying to new Treasures, leaves bursting from lands fetched onto the battlefield, a ripple from the caster's portrait for wave spells and a dust burst for tokens rising.
- Added real runes to the effects, spelling words in Elder Futhark: the counter rune reads Denegatum (Negate: Negatum, Mana Drain: Exhaurio), a global enchantment's circle Incantatus and its name, Rhystic Study's stream and Reanimate's circle their names, and both table floors Magic the Gathering Commander.
- Added Blasphemous Act's own effect: a burning pentagram lights up in the middle of the table, then its circle expands as a ring of fire and burns each creature it reaches.
- Added effects of their own for more of the most played cards: Reanimate, Animate Dead and Victimize (the table darkens, crooked black runes, souls trailing smoke stream out of the graveyard and swirl into a large image of the creature), Vampiric Tutor (a flock of small blood-red bats over the library), Gray Merchant of Asphodel and Exsanguinate (every opponent's life pulled in streams of blood), Craterhoof Behemoth (the table quakes, a shockwave rolls out bending the table, dust behind it), Swords to Plowshares (golden motes rising into the player gaining the life), Rhystic Study (a stream of glowing blue runes into your hand), Cyclonic Rift (a blue vortex; overloaded, a storm vortex in the middle sucking everything in) Teferi's Protection (a time bubble over your side, your permanents shimmering out), Sol Ring (a golden filigree ring spinning before a sun), Dark Ritual (a smoky black rune and three big black mana orbs), Mana Drain (the countered spell's mana flowing to its caster), Goldspan Dragon (the dragon entrance in gold) the token doublers Doubling Season, Anointed Procession and Parallel Lives (each copy sliding out of the original in a mirror flash), Blood Artist (blood brushstrokes across the screen), Edgar Markov (its Vampire tokens out of a flock of bats), Mirkwood Bats (a bat flitting to the opponent) and Chaos Warp (a red vortex crackling with red lightning).
- Added Demonic Tutor's own effect: black smoke over the library, two red demon eyes opening in it, and the card found rising wrapped in black flame (Diabolic Intent a smaller version).
- Added a Card review tab to the FX Studio with the new shared effects, and its Used by list now shows every card using an effect (built in, saved in the Card Workshop or chosen in the card review).

### Changes
- Changed the counter effect: the countered spell is pulled to the front of the stack (it was hidden deeper in it), hit by the countering card's look (a blue rune circle; Counterflux's red and blue lightning shredding it; Dovin's Veto's blue hand flicking it away), then it dissolves into smoke in its own colors.
- Changed the stack size per card as decided in the card review: the small stack for spells with a target or an effect of their own, the large one for counterspells.

### Fixes
- AI: modal spells (Blessed Alliance) are no longer cast just for their life gain while its life is fine; it keeps them for their better modes
- Skips ("My turn", End turn ...) stop when an opponent casts a spell you can counter with a counterspell in your hand and the mana for it
- AI: Selfless Spirit and the like are sacrificed only when something is about to die (a removal or wipe of the opponent's on the stack, creatures dying in combat) and worth more than it
- Best-of-3: the "Deck submitted: waiting for the next game" banner no longer comes back once the next game has started
- Counters on a card are drawn over its frame and border, not under them
- Play screen: changing a setting twice in a row (the draft format, the timer ...) no longer leaves the page empty

## Version 2026.10.22.1332 · October 22, 2026
### New
- Added a loading screen at the start of a game: a wallpaper with a gold bar filling up while the pictures of every deck's cards, every commander and the tokens those cards can make are fetched, so drawing and every play show at once (your own cards are kept ready in memory, the others on disk). It lifts when everything is there; a Continue button appears if it takes long, and the rest keeps loading behind the table. The game waits behind it: the dice roll, the first hand and the mulligan question come once you are in.
- Added a connection box at the top of the game: "Connection lost · reconnecting…" while it retries, "The server can't be reached" after a few tries and "The server isn't answering" when it stays connected but silent, each with a Leave game button; and "Signed in from another window" when the same account logs in elsewhere (that window has the game now).
- Added an effect for cards coming back from a graveyard (Meren's trigger, Raise Dead, a reanimation): the card rises out of the pile and stays large for a moment with what brought it back written under it (also when the trigger resolved by itself), then goes to the hand or the battlefield; creatures with rising souls, lands with earth and dust, spells with blue-white light, other permanents with gold motes.

### Changes
- Changed the AI to not cast an X spell for X = 0 (it did nothing), and to keep a helpful aura in hand rather than put it on an opponent's creature.
- Changed the AI to use an idle planeswalker's plus ability in its second main phase (Daretti stood idle with an empty hand).
- Changed discarded cards to appear on the graveyard pile when they land there (they showed there while still flying).
- Changed the target zoom to show your own creatures in the big frame at the top when only yours can be chosen (equip, an aura or pump for your creature); they were small at the bottom.
- Changed a long title in the choice window ("Select a card to discard · End of turn: …") to end in "…", the whole of it when you point at it (it was cut off mid-word).
- Changed the AI to skip pointless attacks: no attack into a blocker that survives it and stops all its damage, unless the attacker has an attack trigger or tramples over (it waits, or attacks a more open player instead).
- Changed the AI to count creatures that deal damage equal to their toughness (Felothar's defenders) when it attacks into them or blocks with them (it attacked into them as if they dealt nothing).
- Changed the AI to equip a creature that can attack this turn instead of one that just came onto the battlefield.
- Changed creatures that deal combat damage equal to their toughness (Felothar's defenders, Doran) to show their toughness in green in the power's place during combat, and the block preview to count it ("nobody dies" before).
- Changed damage numbers on a player to fan out a little to alternating sides as they rise, so several hits in a row no longer cover each other.
- Changed the AI to chump-block a big attacker (5 damage or more, no trample or menace) with a spare cheap creature (a token, a 1-mana 1/1) when it has two or more of them: a 1/1 Soldier token is worth 7 life.
- Changed identical creatures (eight Soldier tokens) to share one slot in the attack, block and target windows: a fanned pile with its count; attacking or blocking ones split off.
- Changed spells with an effect of their own (Wrath of God, Damnation, Toxic Deluge, Star of Extinction and the ones chosen in the card collection) to use the small stack, so the large stack window doesn't cover the effect.
- Changed the target window's top area to a framed box like its banner, starting lower when it shows no player panels (it was too tall and faded out on the right).

### Fixes
- AI: modal spells (Blessed Alliance) are no longer cast just for their life gain while its life is fine; it keeps them for their better modes
- Skips ("My turn", End turn ...) stop when an opponent casts a spell you can counter with a counterspell in your hand and the mana for it
- AI: Selfless Spirit and the like are sacrificed only when something is about to die (a removal or wipe of the opponent's on the stack, creatures dying in combat) and worth more than it
- Best-of-3: the "Deck submitted: waiting for the next game" banner no longer comes back once the next game has started
- Counters on a card are drawn over its frame and border, not under them
- Play screen: changing a setting twice in a row (the draft format, the timer ...) no longer leaves the page empty
- Fixed spells and abilities on the stack not showing in the target window when they can be chosen (Nimble Obstructionist's cycling trigger, counterspells): they now appear in its top band, as large as creatures.
- Fixed a card in the tucked hand staying enlarged or half turned after the pointer left it; the hand hover was rewritten so every card always returns to its place and size.
- Fixed a bug where choosing an opponent's planeswalker (or battle) in the attack zoom attacked the player instead: the player's panel caught the click.
- Fixed a bug where a 4-player game was stopped as a draw when the AI ran out of memory planning a turn on a crowded table (Daretti, Scrap Savant with Liquimetal Coating): it now tries at most the 20 most valuable targets of each ability.
- Fixed a bug where ninjutsu could never be used: after blockers are declared on your turn, the game now waits for you when a ninjutsu card in your hand can be used (an unblocked attacker), and the card lights up in your hand.
- Fixed a bug where a 4-player game could end as a draw with everyone alive: Protector of the Wastes failed every time a creature entered, and the server stopped the game after too many errors; a card's broken trigger can no longer end a game.
- Fixed a bug where the commander tax label was hidden under some commanders' cards.
- Fixed a bug where the mana streams started at the mana orbs on your plate instead of at the lands that were tapped.
- Fixed a bug where a card you pointed at in the tucked hand rose and then slid half back in when the table updated, and where a card cast or discarded while pointed at stayed stuck where it was.

## Version 2026.10.22.0118 · October 22, 2026
### New
- Added themes in Settings → Display → Theme (and Profile → Look): Dark stone (the look so far, the default) and Light stone: a calm, sharp native-4K limestone floor with a gothic rose window carved into its middle (rings, twelve pointed petals, a quatrefoil, angular runes, laid in with aged gold and a faint steady golden glow, turning very slowly, centered on the players' axis in a duel), every frame, plate, ring and label drawn as a single thin line in limestone and aged gold, the windows' insides the floor's own stone, and carved stone icon buttons (menu, bug report, log, chat, close, the static effects "i").
- Added three families of creature hit sounds, each in four weights by the damage and three takes that rotate so hits in a row never repeat: meaty (a swing, the crack, a deep body, drips), metal for artifact creatures, Golems, Constructs, Knights, Soldiers, Warriors and equipped creatures (steel on armor: a deep ringing strike, a blade scrape, a little wet), and bone for Skeletons, Zombies and creatures with power 8 or more (a punch, bones cracking, a wet crunch); all from natural recordings.

- Changed the layout edit mode to start with nothing to move: Ctrl+click a part to pick it (its frame shows), drag it; Ctrl+click it again to let go (every part was covered in frames before). Its Into view button brings every part that lies off the screen back onto it, picked to move on.

### Changes
- Changed a Treasure's arrival to a painted cascade of a hundred coins pouring onto it and heaping up (single coins falling before).
- Changed the graveyard's picture (on its pile, and one in its window behind the cards) to a painted gothic gravestone with moss and roots (drawn little tombstones before).
- Changed the players' names to be movable in the layout editor (they stayed under the life total before).
- Changed the stack window to come as one piece: its card appears in it together with the frame and stays locked in it (the card glided over from the hand and slid around inside before); it stays in the middle and only steps aside from what the spell or ability can aim at (its targets, or what you can choose while choosing): its cards to the nearest clear place, the text side left of them, or right of them when there's no room on the left, and the small stack when the large one would still cover a target (before, it stepped aside from every creature, and anything aiming at your things always showed small).
- Changed declaring blockers to fade your creatures that can't block any of the attackers (a flier and they have neither flying nor reach ...), a red outline while pointed at, why in the tooltip (they looked like the others before).
- Changed a long message across the middle ("Arvad the Cursed can't block that") to a smaller size, so it stays on the screen (it ran off the edges before).

- Changed one spell hitting many (Blasphemous Act, a sweeper's damage to each creature) to play its hits overlapping, each a moment after the one before, the whole run in about 2.5 seconds (each waited for the one before to finish).
- Changed autopay to tap a land wearing one of your Auras (Squirrel Nest) last of all, after mana creatures (it came before them).

### Fixes
- AI: modal spells (Blessed Alliance) are no longer cast just for their life gain while its life is fine; it keeps them for their better modes
- Skips ("My turn", End turn ...) stop when an opponent casts a spell you can counter with a counterspell in your hand and the mana for it
- AI: Selfless Spirit and the like are sacrificed only when something is about to die (a removal or wipe of the opponent's on the stack, creatures dying in combat) and worth more than it
- Best-of-3: the "Deck submitted: waiting for the next game" banner no longer comes back once the next game has started
- Counters on a card are drawn over its frame and border, not under them
- Play screen: changing a setting twice in a row (the draft format, the timer ...) no longer leaves the page empty
- Fixed a bug where parts moved in the layout edit mode (the mana orbs, counters ...) jumped back to their old place when the table was drawn anew or their column on the plate re-arranged itself (a part shown or hidden, a counter added): their nudge is applied again each time.
- Fixed a bug where the big card preview could be blurry, most at 4K, after many cards had been on the table (it enlarged a small copy of the picture); it is never drawn larger than the picture itself now.
- Fixed a bug where the zoom's emblem (the lightning bolt when choosing a target or player) hid under the banner and its Whole table button: it sits below the banner now.
- Fixed a bug where a hit on a player could show two numbers on their portrait (the hit's red one and a green or second red one from the table's update), and lifelink two +N: each life change now shows one number, and the total is the game's own.
- Fixed a bug where "… can't block that" stayed across the middle of the screen long after the blocks: it fades out by itself.
- Fixed a bug where discarding (Sidar Jabari's draw-then-discard, the end of turn with more than seven cards) opened an empty "Choose a target" zoom while the request sat in the decision panel: your hand now opens in the choice window, several cards picked at once when more are asked, with why in its title (the card and its text, or the end of turn's hand size).

## Version 2026.10.21.1730 · October 21, 2026
### New
- Added a "Usable now" row to the attack and block zooms: your permanents with an ability you can use right now (mana there, untapped for a tap cost) that aren't in the zoom already, so combat tricks on the table aren't hidden; the opponents' permanents with an ability they might use small in a row above their creatures, to point at.
- Added an effect for gaining life: green motes with glowing trails curve from what gave it to the player's portrait, then a warm bloom rises there with rings drifting up and sparks lifting; bigger the more life.

### Changes
- Changed the Blocks overview on the table to open by itself only as the combat damage starts, for about 2.5 seconds before the hits play, then fold into a Blocks button (a click opens it again); it no longer stays open while blockers are declared.
- Changed discarding several cards to overlap: each next card starts sooner after the one before, the more there are (it waited for each to land before).
- Changed the artifact and enchantment rows at 3-4 players to one row (artifacts left of the middle, enchantments right; one kind alone gets the whole row), piles peeking out from under each other like the lands when it is full (they wrapped into rows piled on top of each other before).
- Changed a duel's artifact and enchantment areas to give each pile of tokens (Treasure, Food, Clue) its own room, laid out in rows like the creatures and lands, smaller when crowded (piles fanned over their neighbors before).
- Changed damage and life numbers to grow with the amount (a point small, ten and more big), and creatures' hits to sound deep and meaty, heavier the more damage they deal: a swing through the air, the crack of the hit, a full low body and a short drippy splatter, in four weights (1-2, 3-5, 6-9, 10 and more), from natural recordings (punches before).
- Changed an opponent's spell or ability aimed at you or your permanents (Reclamation Sage's trigger) to show in the small stack, so what it aims at stays in view (in testing).
- Changed many things going on the stack in a row (storm copies, a wave of triggers) to show for less each, the more come at once (down to a fifth), so a burst doesn't crawl.
- Changed a crowded battlefield (yours, the one across) to scroll sideways, as its scrollbar runs, in as many rows as fit; cards cut by the edge show faded; the left and right seats scroll the same way along their turned boards; crowded rows never overlap any more, they scroll instead (it scrolled up and down before, and showed half cards).
- Changed creature piles to hold four side by side per layer (three before).
- Changed the attack zoom to show the opponents' planeswalkers and battles too, to attack them.
- Changed the Blocks window (blockers declared) to move when dragged by its title, so it can be put off creatures you want to use.
- Changed the graveyard, exile and reveal windows to the shared window style: a header bar, a close button (✕) in its corner (Close before); the graveyard's burial ground clearer behind the cards.
- Changed the scry and surveil windows to the shared window style: a header bar with Done, the rows named after where the cards go (on top, under, into the graveyard); scry: while you drag a card toward a row, a faded copy sticks out of the library, tilted, at its top or bottom; surveil: your graveyard stands at the end of its row and lights up as you drag toward it. Their cards are sharp at any size.
- Changed the battlefield view (a click on an opponent's portrait) to show their side as it lies: lands farthest, artifacts on the left and enchantments on the right between, creatures nearest you; a close button in its corner.
- Changed declaring attackers in the zoom: Done in the banner, an opponent you can't attack greyed with the reason (a red glow before), their creatures larger.
- Changed blocking into one window for the blocks and their outcome: a Blocked window with every fight (each attacker over its blockers, several fanned) and an Unblocked window with the attackers getting through and their damage, each lane says what dies (☠) or what damage gets through (trample too), your free creatures wait below, and the banner sums it up (blockers lined up under the attackers before).
- Changed the decision windows (choose a player, a mode, yes or no) to the shared window style: a header bar with the question and the card asking, Look at the table as a button in it; choosing a player shows a tile per player with their portrait and life (name buttons before).
- Changed the zoom (choosing a target, attackers, blockers) to show a banner across the middle: what you are deciding, a line about it (a target: the card choosing and its text, mana symbols drawn), Whole table and the decision's own buttons; the stack window steps aside meanwhile (only a small Whole table button before).
- Changed choosing a target in the zoom to show the card that chooses on the left, framed blue, with a gold arrow toward the targets.
- Changed the AI to answer on other players' turns only when it or its things are targeted or attacked, and to make its instant-speed plays at the end of the turn before its own (it searched through every option at every priority before, which kept the table waiting).
- Changed the AI's tap-or-untap choices (Derevi, Empyrial Tactician) to tap an opponent's best untapped permanent, preferring the opponent to its right (it stays tapped longest), or its own creature that gains from being tapped (inspired, summoning sick) (it picked any permanent before).
- Changed the default table layout for 3-4 players to "Table, zooms to choose" (was "All on the table" before); a layout you picked in Settings stays.

### Fixes
- AI: modal spells (Blessed Alliance) are no longer cast just for their life gain while its life is fine; it keeps them for their better modes
- Skips ("My turn", End turn ...) stop when an opponent casts a spell you can counter with a counterspell in your hand and the mana for it
- AI: Selfless Spirit and the like are sacrificed only when something is about to die (a removal or wipe of the opponent's on the stack, creatures dying in combat) and worth more than it
- Best-of-3: the "Deck submitted: waiting for the next game" banner no longer comes back once the next game has started
- Counters on a card are drawn over its frame and border, not under them
- Play screen: changing a setting twice in a row (the draft format, the timer ...) no longer leaves the page empty
- Fixed a bug where a card could come loose from the stack window while it was dragged: the stack's cards stay fixed to it.
- Fixed a bug where the AI attacked with its whole board into small deathtouch blockers (Hornet Queen's insects), trading big creatures for 1/1 tokens.
- Fixed a bug where a crowded battlefield's scrollbar stayed on screen over a zoom (it showed under the Usable now row).
- Fixed a bug where the stack window's frame and its cards drifted apart when the stack stepped aside from creatures it would cover: the frame now glides with its cards.
- Fixed a bug where the AI skipped blocks it needed against double strike and infect attackers (it counted their damage once and as life loss), even when the attack would kill it.
- Fixed a bug where a card's text in the preview lost a letter and showed an internal tag ("ust attack (Goblin Rabblemaster [fae])").
- Fixed a bug where the AI cast "target player sacrifices" spells (Wing Shards) at a player with nothing to sacrifice, such as a player who wasn't attacking.

## Version 2026.10.21.1229 · October 21, 2026
### New
- Added card type counts to the graveyard and exile windows: how many creatures, instants, sorceries, artifacts, enchantments, planeswalkers and lands lie there, each with its icon.
- Added an effect for permanents returned to their owner's hand (Unsummon, Cyclonic Rift and the like): the card rewinds, spinning backward on an arc into the hand with fading afterimages behind it, a ripple where it stood, sparkles and a soft glow where it lands.
- Added the battlefield zones to the layout edit mode: each player's creatures, lands, artifacts and enchantments can be moved and sized as a group (auras and equipment go with their creature).
- Added sizes to the layout edit mode: the mouse wheel over a part makes it bigger or smaller (5 % a step; right-click puts it back), kept in your layout profile.
- Added a grid to the layout edit mode (the Grid switch): a dragged part's corner snaps to it.
- Added a Resolution choice in Settings → Display (the window's size, from 1280 × 720 up to 3840 × 2160 as your screen allows; Fullscreen and Borderless use your screen's own).
- Added the layout edit mode for everyone: move the parts of the table where you want them (portraits, life, commander frames, mana, counters, conditions, piles, the turn strip, the log and more), per table layout and player count. Open it from Settings → Display (Edit layout…, on a sample table), from the in-game menu (Edit table layout) or with Ctrl+Alt+L at a table. Drag a part, right-click it to put it back.
- Added layout profiles: save several named layouts of your own and switch between them. Share one with a code (Copy code), and take one someone shared (Paste code). Codes only carry positions, nothing else.
- Added an effects button on every player's portrait ring: it opens a window with all their active static effects (their conditions, the effects of their permanents and their emblems, in the effect boxes). Esc, the close button or the button again closes it.
- Added the used ability on the stack: an ability's card on the stack shows its text lit in a gold box over the card (which of its abilities is used), and the permanent it comes from glows softly amber on the table while it waits.

### Changes
- Changed the big card preview to move to the left side of the screen when what you point at lies under it on the right (choosing a target with the arrow there).
- Changed the zoom when choosing a target: an equipment or aura shows the creature it is attached to peeking out behind it (whose it is).
- Changed the zombie's grave to look like torn earth: a pit darkest in its middle with a ragged lit lip, cracks running out through the table as it heaves, clods thrown aside and a shaded mound of fresh dirt with pebbles (a flat dark patch and mound before).
- Changed combat damage to a player to take the life off with each hit, as it lands (it all came off together after the damage step before).
- Changed the layout edit mode to move the menu and bug report buttons, the speed choice and the opponents' hand fans too.
- Changed discarding several cards at once to toss them out one right after another (each waited for the one before to land; now they follow 0.16 seconds apart).
- Changed the battlefield view to lay its cards out from the middle, growing outward like a battlefield (they started at the left edge before).
- Changed the commander frames to be a bit bigger (96 × 134, was 84 × 117); the layout edit mode makes them any size.
- Changed a long stack to recede into the distance: each older item a little smaller, closer and darker than the one before (14 triggers fit with room to spare before the screen's edge; they ran off the screen before).
- Changed the library, graveyard and exile piles to show only their card count, large and outlined, in a small plate at the bottom (they had the zone's name and a small number before).
- Removed the gold box with the used ability's text on its stack card (the source permanent's amber glow stays). Abilities can show in the large stack window instead: Settings → Display → Stack → Abilities and triggers.
- Changed a click on an opponent's portrait to show their battlefield large, laid out as on the table (creatures, other permanents, lands, in the table's card frames, short ones too), with their piles beside their plate (was a fan of their cards before). Esc, the plate or the portrait closes it.
- Changed the big card preview to float over every window with a shadow under it (a card in a window showed its preview behind the window before).
- Changed the battlefield scrollbars to sit along each board's outer edge, toward the screen's edge: under your cards and over the cards of the player across, beside the left and right seats' turned boards (they sat on the side facing the middle before). They only show when the creatures really don't fit (a little too many: the rows close up).
- Removed the gold filigree around the player plates for now (room for the layout).
- Changed the condition box to grow up to five conditions; more show as "+N more" on the last line, all of them in its tooltip (it grew without a limit before). The left and right seats' box now grows downward.
- Changed a combat too big for the zoom to scroll sideways: the cards shrink to 60 % at most, then a scrollbar under them shows the rest (they shrank to under half before and ran past the panel).

### Fixes
- AI: modal spells (Blessed Alliance) are no longer cast just for their life gain while its life is fine; it keeps them for their better modes
- Skips ("My turn", End turn ...) stop when an opponent casts a spell you can counter with a counterspell in your hand and the mana for it
- AI: Selfless Spirit and the like are sacrificed only when something is about to die (a removal or wipe of the opponent's on the stack, creatures dying in combat) and worth more than it
- Best-of-3: the "Deck submitted: waiting for the next game" banner no longer comes back once the next game has started
- Counters on a card are drawn over its frame and border, not under them
- Play screen: changing a setting twice in a row (the draft format, the timer ...) no longer leaves the page empty
- Fixed a bug where a card on the stack stayed behind when the stack window was moved (a commander cast from the command zone).
- Fixed a bug where a commander being dragged out of the command zone showed a blurry, blown-up picture.
- Fixed a bug where a card stayed stuck mid-drag after switching to another window: it goes back to its place.
- Fixed a bug where a permanent glowed as usable when its ability had a cost you couldn't pay (Selesnya Eulogist with no creature card in your graveyard).
- Fixed a bug where the AI used Derevi, Empyrial Tactician (and other "tap or untap target permanent" effects) to untap its opponents' permanents.
- Fixed a bug where effects could stop when the card they played on had just left the table (a counter breaking on a creature that died at once), holding the table up.
- Fixed a bug where cards were drawn grainy in some places (the reveal and zone windows, the draft, the deck builder's preview, menus, avatars and effects): every card picture is now made sharp at the size it is shown.
- Fixed a bug where cards turned blurry after they grew or shrank without the window changing (the hovered hand card, a window opening, scaled frames): they are made sharp again for their new size once they settle.
- Fixed a bug where a card's art covered its name bar when shown large (the battlefield view).
- Fixed a bug where equipment and auras peeking out behind their creature, and the graveyard and exile piles, looked grainy in the battlefield view and the split view's windows.
- Fixed a bug where an opponent's floating mana wrapped into a second row or hid behind their commander card (4 players): one row now, growing toward the table.
- Fixed a bug where the players in the side slots (focus seat) showed no floating mana.
- Fixed a bug where a side slot's static effects list was cut off: as tall as its effects (three, the rest scrolls), never past the screen's bottom.

## Version 2026.10.21.0109 · October 21, 2026
### Changes
- Removed the card picture cache limit from 2026.10.21.0041: every downloaded picture stays on your disk again, nothing is trimmed (so cards never have to load anew).

## Version 2026.10.21.0056 · October 21, 2026
### Changes
- Changed the deck tags of the 60-card precons: Standard, Pioneer, Modern, Legacy and Vintage list only the decks made for them (Challenger, Modern Event, Pro Tour and World Championship decks); Starter Kits, Planeswalker and Duel Decks, Clash Packs and the like are Casual only (they were listed wherever they happened to be legal).
- Changed a constructed format's deck list to show only its own decks (all the others were greyed out at the end).

### Fixes
- AI: modal spells (Blessed Alliance) are no longer cast just for their life gain while its life is fine; it keeps them for their better modes
- Skips ("My turn", End turn ...) stop when an opponent casts a spell you can counter with a counterspell in your hand and the mana for it
- AI: Selfless Spirit and the like are sacrificed only when something is about to die (a removal or wipe of the opponent's on the stack, creatures dying in combat) and worth more than it
- Best-of-3: the "Deck submitted: waiting for the next game" banner no longer comes back once the next game has started
- Counters on a card are drawn over its frame and border, not under them
- Play screen: changing a setting twice in a row (the draft format, the timer ...) no longer leaves the page empty
- Fixed a bug where the weekly decks (and the Moxfield lists before them) didn't show in the deck picker: they come first now, each in its own format.

## Version 2026.10.21.0041 · October 21, 2026
### New
- Added weekly decks for Standard, Pioneer, Modern and Canadian Highlander: the week's best tournament lists, one per archetype (of three lists of one deck only the best placed), up to 16 per format, ready to pick at a table and played by the bots too. They renew themselves every week.
- Added the keyword icons (the ones on the cards' badges) in front of keyword lines in a card's hover text: Flying, Deathtouch, Ward, Protection ...
- Added a click on a player's avatar (when the game asks nothing about players): an opponent's board in large (the focus seat brings it across, the split view opens their window), your own avatar your hand in large; a second click closes it.

### Changes
- Changed the card picture cache to stay under 3 GB (it grew without end): the pictures shown longest ago go first, and old copies from earlier versions of cards already downloaded anew are removed.
- Changed choices among players ("Choose a player", "Choose an opponent") to work like targets: an arrow from your plate follows the pointer and a click on a player's plate answers (the name buttons stay).
- Changed the "Next turn" button to "End turn" ("I won't respond this turn"): on your turn it ends it, on an opponent's it passes everything, their spells and abilities too, until the next turn starts; blocks are still asked (Next turn stopped whenever something was cast before). The panel says "Not responding this turn" meanwhile.
- Changed big choices (a library of 90 cards) to shrink their cards until every row fits, down to about half size (they scrolled before).
- Changed identical tokens that aren't creatures (Treasure, Food, Clue, Blood, Gold ...) to stack in piles of up to six, like lands (were laid out one by one).
- Changed rolls that keep only the highest die (Iron Mastiff attacking several players) to show every die rolled (was only the kept one); the ignored ones dim as they land.
- Changed attacks to play much faster the more attackers and players they hit (a big attack at three players up to 8 times as fast; was at most 3 times), and one source hitting each opponent hits them almost together.
- Changed bug reports to include the game's recent log lines and errors from your side (were only the game log).

### Fixes
- AI: modal spells (Blessed Alliance) are no longer cast just for their life gain while its life is fine; it keeps them for their better modes
- Skips ("My turn", End turn ...) stop when an opponent casts a spell you can counter with a counterspell in your hand and the mana for it
- AI: Selfless Spirit and the like are sacrificed only when something is about to die (a removal or wipe of the opponent's on the stack, creatures dying in combat) and worth more than it
- Best-of-3: the "Deck submitted: waiting for the next game" banner no longer comes back once the next game has started
- Counters on a card are drawn over its frame and border, not under them
- Play screen: changing a setting twice in a row (the draft format, the timer ...) no longer leaves the page empty
- Fixed a bug where a card on the stack lagged behind when you dragged the stack window (one still gliding to its place): the window and its cards move as one.
- Fixed a bug where a board wipe's black-hole effect could stay on the table for good, its dark motes swirling on, and every later move waited two seconds for it; the same hidden race was fixed in all effects.
- Fixed a bug where drifting feathers (fliers entering) and the mana stream's stray wisps held up the next move.
- Fixed a bug where the game didn't recognize "dies" triggers from their text (a broken pattern), for the effects that follow them.
- Fixed a bug where engine marks showed in a card's hover text ("ICON_REQUIREMust attack").
- Fixed a bug where the table could stop following the game after a big turn (a board wipe with many triggers): one effect that never finished held everything after it, and the game waited for your answer meanwhile. Now nothing holds the table for more than 10 seconds.
- Fixed a bug where effect leftovers made every later move wait two seconds, so the game felt slower and slower.
- Fixed a bug where piles, commander frames and previews turned blurry after the window grew (windowed to full screen on 4K); they are made sharp again for the new size.
- Fixed a bug where the big preview of a commander or a pile card was blurry: it showed the small frame's picture blown up instead of the full one.
- Fixed a bug where tokens showed without their picture in the graveyard, exile and other card windows.
- Fixed a bug where long deck names on the deck tiles were cut off ("Creative Energy Collector's …"): they shrink to fit, and pointing at a tile shows its full name.
- Fixed a bug where a card you picked in a choice of several (from a graveyard, exile or a search) vanished from the window: it stays, at the front with a green frame, and clicking it takes it back.
- Fixed a bug where "Look at the table" at the mulligan hid your hand for good: a "Show hand" button brings the window back.
- Fixed a bug where leaving a replay while it played could hang the game: the playback, its queue and the effects still running now stop before the menu comes back (by Exit or Escape → Leave game).
- Fixed a bug where pressing Improvise (or Delve, Convoke) first left a spell impossible to finish: these may only pay after your lands, so the lands were locked out and colored mana like Organic Extinction's {W}{W} could no longer be paid. Now your lands first pay what the artifacts (graveyard cards, creatures) can't, then Improvise starts.
- Fixed a bug where the creatures in the combat window (attackers and blockers) could only be pointed at: a click now works as on the table, so you can use their abilities while you have priority (and block or target with them).
- Fixed a bug where the mana flowing into a spell held up your next move for a moment (tapping your next land, answering).
- Fixed a bug where the big picture of a card you point at in a graveyard or exile window showed behind that window.

## Version 2026.10.20.2039 · October 20, 2026
### Changes
- Changed what the effects lists beside the players show (were all lines but triggers, activated abilities and entering): locks on players, cost changes, replacement effects, anthems and granted keywords, Auras and Equipment on their creature, rule changes like "no maximum hand size", thresholds like Metalcraft, once-a-turn abilities, activated abilities that set up such an effect for a while, and now every trigger of a permanent on the table. Hidden are its own entering, the card's own text ("gets +1/+1 for each ..."), mana and other activated abilities and bare keywords.

## Version 2026.10.20.2018 · October 20, 2026
### New
- Added a Settings choice for your hand (in testing): "Tucked along the bottom" lays larger cards in a fan along the bottom edge, only their title bars showing behind your plate; the card you point at rises out whole and grows to 1.6 times its size, easy to read. Your battlefield gets the room. "Above your plate" keeps it as before.

### Changes
- Changed the turn step buttons to icons (were written names): sunrise, card draw, wand, war horn, sword, shield, impact, flag and moon, the current step glowing; point at one to see its name.
- Fixed a bug where you could send a creature to block an attacker it can't block (a flier without flying or reach); its arrow only snaps to attackers it may block, and a wrong click says so.
- Changed a planeswalker commander's entrance picture to be a little larger and hardly faded at its top, so the head isn't cut off.
- Changed the graveyard, exile and commander pictures to be drawn sharp at their size on screen (they looked pixelated in a window).
- Changed the stack window in a duel to sit in the middle of the table again (was top left), and to step aside when it would cover permanents.
- Changed the combat strip to show in duels too (blockers slid in front of their attackers there before).
- Changed lands to stay in one row and overlap when there are many (a second row of lands took the creatures' room, and their scrollbar did nothing).
- Fixed a bug where the text in the large stack window ran under the stack's cards or was cut off; it gets smaller to fit, a long name too.
- Fixed a bug where a battlefield scrollbar could stay after it wasn't needed any more.
- Changed the artifact and enchantment zone marks to engraved pictures (a gold-veined hammer with a faint gold glow, a blue crystal rune with a light blue glow), faded into the stone, fading in when the table appears.

## Version 2026.10.20.1730 · October 20, 2026
### New
- Added recorded card sounds: a booster tearing open when a Sealed pool opens and on the first pick of each draft pack; a soft card flick as the other cards make room while you rearrange your hand.
- Added the combat strip at tables of 3-4 (the table layouts): once blockers are declared, every fight shows as a pair in the middle of the table, the attacker on top and its blockers under it with a gold line between them, unblocked attackers marked, an attacked planeswalker (or battle) under its attacker, until the damage starts; the battlefields stay as they are. Pointing at a card in it shows it big.
- Added stars twinkling in the scry window's blue border, like a night sky.
- Added the big card picture when you point at a card in the scry, surveil and library order windows.
- Added an emblem on every player's frame in the zoom views: a sword on attackers, a shield on defenders and on the players you may attack, a straw target dummy on the players that are targets; your own row gets one too (a sword when you attack, a shield when you block, lightning when you choose a target). Behind the players' panels, very faded: the art of their biggest attacker or of their biggest defending creature; behind the targets, the art of the spell aiming at them.
- Added the once-per-turn mark: an effect a player has used up this turn (Gisa and Geralf's "once during each of your turns, you may cast ...", triggers that work only once each turn) shows red, "used this turn", in the effects lists until the next turn.
- Added a window to order several triggers at once: they lie side by side, numbered; drag them into the order you want like cards in your hand (the one you hold follows the pointer, the others make room; the left one resolves first) and confirm once (you picked them one at a time before).
- Changed every spell and ability on the stack to show in the same stack window, only collapsed or not: one aiming at something alone, or while you choose a target, shows collapsed (it had no window at all before); its arrow expands it like any other.
- Added a Settings choice for the stack window (Large stack window for): Small (only the small stack with its STACK shine), Abilities and triggers, Abilities, triggers, instants and sorceries (everything but permanent spells), or All. The small stack's arrow fans it out into the large window, which then stays for every spell until you fold it in again (then your setting applies again).

### Changes
- Changed the hammer and rune marks of the artifact and enchantment zones to faint gold cracks like the veins, splintering off like the stone's own cracks (were brighter drawn lines before).
- Changed the static effect lists to be the same everywhere (side slots, the quad split's column) and to leave out emblems, which show as their own small cards (they were listed twice before).
- Changed the static effects in the focus seat's side slots to the card-like effect boxes (picture, name, the whole text; were cut-off single lines before).
- Changed long stacks to pack their cards tighter so they stay in their window (seven or more ran off the screen before); pointing at one of the older cards lifts it out to read.
- Fixed a bug where a token's ability on the stack showed no picture (in the stack, its window and its preview); it now shows the token.
- Fixed a bug where a bot playing a bounce land (Selesnya Sanctuary and the like) returned the bounce land itself every time and never got ahead on lands; it now returns another land, a tapped one first.
- Fixed a bug where a bot aimed spells that remove a permanent but give its owner something (Chaos Warp, Swords to Plowshares, Beast Within) at its own permanents.
- Fixed a bug where a creature that doesn't block was covered in the fight zoom by the blockers moved under their attacker; the others now step aside, and tapped blockers keep their distance from each other.
- Fixed a bug where a bot attacked into first strike blockers that kill its creature before it deals any damage (a 6/4 into a 3/2 and a 4/5 with first strike).
- Fixed a bug where the lands a spell would use didn't light up while dragging your commander from the command zone or the top card of your library onto the table (they did for hand cards).
- Changed the combat damage numbers to sit in a dark red badge on the card that was hit (moving with it, upright on a tapped card), and the card flashes red with it (the numbers floated over the table before, often unclear whose they were).
- Fixed a bug where an attacking creature stepping forward also slid sideways (toward the table's middle) and covered the card next to it, e.g. Krenko over the Goblin tokens it just made; attackers now step straight forward.
- Changed the cards on the table and in your hand to be drawn sharp at their exact size on your screen, at 1080p, 1440p and 4K alike (small print looked blocky, above all at 4K, before); switching the resolution makes them sharp anew.
- Fixed a bug where a bot's creature forced to attack (Kardur, Doomscourge; goad) attacked a player whose blocker kills it for free while another player was safe to attack; it now picks a defender it survives, then the one with the least life.
- Changed the bots' play styles to only decide between plays that are about as good (they could make a worse play before: aggro skipped trade blocks and attacked into bad trades, control chump-blocked).
- Changed the sound of a Treasure being made to a pile of coins: a recorded coin pile with several coins jingling and clinking in it (was two short jingles before).
- Changed a player your creatures can't attack (an effect keeps them from it) to glow red in the attack view, marked "can't be attacked".
- Changed the effects that cost you something for attacking a player ("creatures can't attack you unless ...") to show as card-like boxes with the card's picture and name (were a line of red text before).
- Changed the game window to open at 1920 x 1080 (the most common screen; was 1600 x 900), and switching to windowed in Settings sizes it so (smaller on a smaller screen).
- Changed the cards in the combat strip to be larger.
- Fixed a bug where choosing whom a creature forced to attack attacks (or whom everyone attacks) showed only the players, not their creatures; it now shows the attack view with every opponent's creatures, only the players it may attack can be clicked.
- Removed the high chime (heard when a Blood token appeared, and for auras, phasing, transforming, flash and more); each of these effects now has its own, softer sound.
- Changed combat damage to play faster the more creatures deal it (as before up to three, about three times as fast at eight).
- Changed the order of triggers that can't matter to go on the stack by itself: a self-pump (melee, bushido, exalted ...) of a creature with no other trigger of its own, and triggers that all read the same (you were asked for every Goblin token's melee before).
- Fixed a bug where a trigger like Unnatural Growth ("at the beginning of each combat ...") showed an arrow to the player whose turn it was, though it only pumps its controller's creatures; it also hid its stack window.
- Changed blockers at tables of 3-4 to stay in their rows while the combat strip shows the blocks (they slid over the other rows before, so it was hard to tell what blocks what).
- Changed the fight zoom to show one line per block (there were two before).
- Changed the sound of a spell going onto the stack to be quieter (it was louder than the spell's own effects before).
- Changed the card draw and library shuffle sounds to our own recordings of real cards (were sound-pack sounds before).
- Changed the stack window's fold button: fanned out, the large window stays until you fold it in, folded in it follows your setting (it was one setting kept for good before; who had folded it in starts with Small).

## Version 2026.10.20.1230 · October 20, 2026
*Partner commanders and emblems get their proper place.*

### New
- Added a second commander frame for partner commanders (Partner, Friends forever, a Background): beside the first, with its own tax, cast with a click or by dragging it onto the table like the first.
- Added emblem cards: each emblem shows as a small card with its real emblem picture by the health and name plate (above yours, below an opponent's); pointing at one shows it big.
- Added emblems to the focus seat's side slots: a row of small emblem cards.
- Added two split views to the table layouts (in testing): the duel window with the player whose turn it is, and the other two players' boards in their own windows, stacked on the left or one on each side; click a card in a window to target or attack it, the window's player to bring them into the duel window; the windows show the cards as on the table (your reduced or full card view), exact copies in a pile, crowded rows overlapping, the cards as big as the window has room for; the player's hand as card backs and their library, graveyard and exile (point at or click the graveyard or exile to see it); counters, auras and equipment behind their host, what can be targeted (gold) and where the others point; pointing at a card shows it big; the window lights up blue while its player has priority, gold on their turn; the windows step aside while a zoom is on.
- Added a third split view (in testing): everyone's own view. Your side of the table large on the left under a gold vein, the stack window above it; every other player's board as seen from their seat (their battlefield on top, their plate and hand as card backs at the bottom) stacked on the right in turn order; their avatars down the left side with their life, the commander damage they have taken, the mana in their pool, their counters (poison, experience, energy as symbols), and their conditions (Metalcraft, the city's blessing: lit while on) and static effects as small card-like boxes, each player's own list scrolling (click an avatar to target or attack that player); your enchantments and artifacts in the bottom corners of your battlefield; click a player's window to see their board large (it grows out of the window; Back or Esc puts it back). The avatar column steps aside while a zoom is on.
- Added the other players' pointers: the card another player points at gets a light frame in their color, and while they choose a target their arrow follows their pointer (only cards on the table and the stack; your hand stays private).
- Added a "Static effects" tab to the Card Workshop (admins): tick which of a card's lines are static effects; the focus seat's side slots then list exactly those (the game's guess until then).

### Changes
- Changed emblems from text plaques under the portrait (they could cover it) to cards by the command zone.
- Changed the space around each player's portrait so everything fits at once: mana in the pool and counters next to the portrait, the conditions box and the emblems beside them, the commander frames on the other side (the opponent's now mirrors yours; nothing covers anything with a partner, emblems, floating mana and counters all showing).

## Version 2026.10.20.0122 · October 20, 2026
*A new way to see a bigger table: the focus seat, in testing. Plus a round of fixes for combat, searching your library and the stack.*

### Highlights
- Added the focus seat for 3-4 player games (Settings → "Focus seat", off for now while we test it): the table is laid out like a duel, the others wait in a slot on each side.
- Added zooms while you attack, block or choose a target: only the cards that matter, big.
- Fixed a bug where hiding the card window during a library search left only Cancel, so the spell did nothing.
- Fixed a bug where declaring your last blocker confirmed the blocks by itself.

### New
**Focus seat (in testing):**
- Added the focus seat: the player whose turn it is sits across from you, as in a duel. On your own turn the player whose turn it was stays across.
- Added side slots for the other players, at the same height on both sides: portrait, life, commander tax, and a symbol with a number for hand, library, graveyard, exile, creatures, power, artifacts, enchantments, lands, other permanents, mana available and commander damage to you.
- Added card popouts to the slots: pointing at a symbol shows those cards beside the slot, a click keeps them open.
- Added a list of each side player's static effects under their slot ("Spells cost {1} more"), up to 6 lines with a scrollbar; pointing at a line shows the card.
- Added "Show board" (or a click on the portrait): that player's board slides across from you, a gold frame growing from the slot; Esc brings the turn's player back.
- Added zooms: while you declare attackers every opponent is a panel you click to attack, with the creatures that could block; while you block only the attackers on you and your possible blockers; while you choose a target only what can be chosen, by player. "Whole table" shows everything again.
- Added zooms for watching: when others attack, the fight is shown; when an opponent's spell aims at something, what it aims at is shown.
  > *Developer's note: much of this is an A/B test for the board and the zoom. Tell us what reads best.*
- Added players out of the game leaving the focus rotation and their slot.
- Added a choice of table layouts for 3-4 players (Settings → Table layout, in testing): all on the table, the focus seat with zooms, the table with zooms, or the table zoomed only while you choose.
- Added warnings in the attack zoom when attacking a player costs something or triggers against you (Propaganda, Ghostly Prison).

**Combat and choices:**
- Added a right-click while attacking or blocking: it takes back the last selected creature, else the last declared one.
- Added "Show cards" to the decision window while the card window is hidden.
- Added casting your commander by dragging it from the command zone onto the table (a click still works).
- Added the morph and manifest reminder cards for face-down permanents (disguise and cloak use them too).
- Added a fold button to the stack window: its artwork and text side folds in, only the stack's cards stay (kept).
- Added markers on permanents that won't stay: unearthed (exiled when it leaves), temporary (Sneak Attack and the like: gone at end of turn), and undying / persist while they would still come back.
- Added lines between blockers and the attackers they block in the fight zoom, each blocker straight across from its attacker.

### Changes
- Changed the stack window to show for every spell, creature spells too (was only non-creature spells and abilities before).
- Added a gold STACK shine around every card on the stack, so it is clear even with the stack window folded in.
- Changed long choices (a planeswalker's abilities, a spell's modes) to read like the card: one under the other, the loyalty cost in its badge, the text wrapped (was one long line each before).
- Fixed a bug where a creature spell whose text mentions a target later (Sparkshaper Visionary) got no stack window.
- Changed arrows to draw above the cards (they were under the bigger ones before).
- Changed crowded battlefield rows to shrink their cards, lands too (they slid over each other before).
- Changed attackers with their blockers to push apart instead of overlapping neighbouring pairs. A combat too wide for the screen gets smaller cards so every pair stays in view.
- Changed the stack window's fold button to a gold arrow in its title bar, where the artwork and text side meets the stack's cards.
- Changed a running game with no human player left to end after one minute (was three minutes before).
- Changed the Cancel skip button to always show while a skip runs.
- Fixed a bug where the defending players' panels in the fight zoom stayed put while their blockers moved under the attackers, so a blocker could look like another player's (the panel now widens with its blockers).
- Changed long card names on the reduced card view to get smaller so they fit (they were cut off with … before; only very long ones still are).
- Changed attacking creatures to charge all the way to what they hit, the player across the table too (was a short lunge of at most a card's length before).
- Changed the zoom to step aside for the whole table during combat damage, for effects that aim at nothing, and for a moment whenever a card it hid leaves the table.
- Changed the zoom's player columns to stay in turn order whoever attacks.
- Changed the attack zoom to show all of a player's creatures, tapped ones too (was only untapped ones before: an untap trick could surprise you).
- Changed the side slots' card popouts to show over a zoom's big cards.
- Changed morphs and manifests on the battlefield to show only the reminder card's art in the small frame.

### Fixes
- AI: modal spells (Blessed Alliance) are no longer cast just for their life gain while its life is fine; it keeps them for their better modes
- Skips ("My turn", End turn ...) stop when an opponent casts a spell you can counter with a counterspell in your hand and the mana for it
- AI: Selfless Spirit and the like are sacrificed only when something is about to die (a removal or wipe of the opponent's on the stack, creatures dying in combat) and worth more than it
- Best-of-3: the "Deck submitted: waiting for the next game" banner no longer comes back once the next game has started
- Counters on a card are drawn over its frame and border, not under them
- Play screen: changing a setting twice in a row (the draft format, the timer ...) no longer leaves the page empty
- Fixed a bug where Golgari Signet and other mana-only permanents glowed as if you could use them.
- Fixed a bug where a card flickered within one moment (Soul Herder) came back too large.
- Fixed a bug where the stack window followed the mouse after a drag was released elsewhere.
- Fixed a bug where finished games whose player had left stayed in the server's memory.
- Fixed a bug where "Choose how much mana to pay" (Minds Aglow and other join forces cards) offered up to 2147483647 instead of the mana you have.
- Fixed a bug where the server ran out of memory late in long 4-player games and everyone was disconnected: the AI now simulates at most 2000 moves per decision (500 when memory runs low; was 5000).

### AI opponents
- Improved responses: the AI uses a pump in response only when your spell threatens that creature and the pump protects it (no more Cloudgoat Ranger pumps in your main phase).
- Improved equipping: the AI equips each piece of equipment at most once a turn, and doesn't move it away from an untapped creature (0-mana equipment no longer wanders over four creatures before an attack).

## Version 2026.10.19.2041 · October 19, 2026
*Smarter AI in combat, choosing several cards at once from your library, and dice that really come to rest flat. Plus a batch of fixes from your bug reports.*

### Highlights
- Added a multi-pick window: "up to two lands" searches (Myriad Landscape) pick each card with a click.
- Added recorded dice sounds: every bounce of a die clicks.
- Fixed a bug where dice looked like they stood on an edge after a roll.
- Improved the AI: it no longer attacks into blocks that kill its creature for free.

### New
- Added a multi-pick window for choices of several cards: a click picks a card, which moves to the front with a green frame, and the rest stay to pick from.
  - **Ctrl+Z** takes the last pick back; clicking a picked card takes it back too.
  - **Double-click** a card to pick it and confirm right away.
  - **Done** stops early with fewer cards (as "up to" allows).
- Added card-name suggestions: typing a card's name offers real cards as you type (season background, bot portraits, live lab, FX Studio, FX Lab). The season background and bot portraits then offer every artwork of the card.
- Added recorded dice sounds: a click on every hit with the table, the edge of the screen or another die. Harder hits are louder.
- Added patch notes: on the download page and behind the new button in the game's bottom bar.

### Changes
- Changed the dice view to look down at 80° (was 65° before).
  > *Developer's note: from the old angle, the face next to the top one faced you more than the top face itself, so a die lying flat looked balanced on that edge.*
- Changed dice to lie still only when flat within 2.6° (was 6° before). They tumble until they really lie on a face.
- Changed a settled die to slide flat to its place (before, it hopped there and tilted its number toward the camera).
- Changed the duel's stack window to be 30% smaller and sit at the top left.
- Changed the version label to sit above the credits line, clear of the menu buttons.
- Changed blockers on the side seats to stand above every card on the field during combat (they slid under other rows before). This is a first step: they can now cover the attackers, and a better view is coming.
- Changed the selected card in a card picker to a green frame (was gold before, too close to the gold glow of cards you can choose).

### Fixes
- AI: modal spells (Blessed Alliance) are no longer cast just for their life gain while its life is fine; it keeps them for their better modes
- Skips ("My turn", End turn ...) stop when an opponent casts a spell you can counter with a counterspell in your hand and the mana for it
- AI: Selfless Spirit and the like are sacrificed only when something is about to die (a removal or wipe of the opponent's on the stack, creatures dying in combat) and worth more than it
- Best-of-3: the "Deck submitted: waiting for the next game" banner no longer comes back once the next game has started
- Counters on a card are drawn over its frame and border, not under them
- Play screen: changing a setting twice in a row (the draft format, the timer ...) no longer leaves the page empty
- Fixed a bug where a land sacrificed by its own ability (Myriad Landscape) stayed on the table as a picture after use.
- Fixed a bug where "up to two" library searches let you choose only one card.
- Fixed a bug where the equip icon still showed on equipment that was already attached.
- Fixed a bug where the mana payment preview ignored cost reductions.
- Fixed a bug where looping sounds (a zapping noise) kept playing when they were meant to play once.
- Fixed a bug where some menu icons were blank in the downloaded game.

### AI opponents
- Improved attacking: the AI no longer attacks into a block that kills its creature for free. It checks every block of one to three creatures, and counts deathtouch blockers as lethal.
- Improved activated abilities:
  - The AI uses effects that last only this turn when they can matter (in response, or in combat after blocks).
  - It no longer gives a creature something it already has.
  - It uses abilities that cost a card at most once a turn, and others at most 4 times a turn.
  > *Developer's note: this stops the AI from discarding its hand for indestructible, or spending all its mana on the same ability.*


## Version 2026.10.19.1749 · October 19, 2026
*This is a big one. Seasons arrive with points, standings and scheduled rounds. Bot turns now play at a human pace, combat is staged as a face-off, and almost every keyword and mechanic in the game gets its own look on the table.*

### Highlights
- Added Seasons: join one, earn placement and bonus points in your games, follow the standings and play organized rounds of Swiss duels or Commander pods.
- Changed bot turns to play at a human pace (they used to rush by before). Bots now pause before each play and hold their spells on the stack with target arrows so you can follow along.
- Changed combat into a face-off: blockers stand across from their attacker, and damage lands one hit at a time.
- Added animations for more than a hundred keywords and mechanics, from flying and trample to storm, the Ring, Sagas and dungeons, plus 373 new gold keyword icons on cards.
- Added crowded-battlefield handling: identical creatures pile up, then cards shrink, then rows scroll.
- Added condition boxes that track Delirium, Threshold, Metalcraft, Ferocious, Coven, Ascend and day/night, and light up cards whose condition is met.

### New
**Seasons:**
- Added a Seasons screen with standings and avatars, a bonus column that opens up by kind, each game with its points and replay, and the season's artwork.
- Added seasons for any format. Admins create them, players join, and a season stays open.
- Added per-season scoring: placement (4/3/2/1) or win 3 / draw 1 / loss 0, plus bonuses picked from a catalogue (first blood, saved by, commander cast three times, commander kill, commander slayer, low budget, alternate win, underdog, fast win, flawless, comeback, mulligan hero, combo penalty). Each bonus is worth -10 to +10 points.
  > *Developer's note: Games remember what happened in them, so when an admin takes a bonus out, the points it gave are removed. A newly added bonus counts from then on.*
- Added a vote after each season game for who "saved" the table.
- Added a season choice to Quick Play and Create a table (seasons of that format), and buttons to start either one straight from the season. Only members can sit at a season table, and its players join the season.
- Added Edit season for admins: name, artwork, bonuses and their points, and the fast-win turn. Each season's button shows its artwork fading in.
- Added season rounds: an admin starts Swiss duels (with byes) or Commander pods of up to four, paired by standings. A round is either manual (one player opens the match table, the others are notified and join) or scheduled (tables open at a set time). Only the paired players can sit at a match table.
- Added a season match invitation window with the season's art, the round, the players' avatars, and Later / Join the match buttons.
- Added bots to the standings (marked as bots), and season replays are now kept and labeled.

**Keyword and mechanic effects:**
- Added combat keyword looks: a flying arc and swoop, reach arrows (archers) or webs (spiders), trample footprints with stampede dust, first and double strike slashes, deathtouch rot with a black-green withering death, lifelink streams with +N, glowing menace eyes, a vigilance gleam, an indestructible golden clang and a stone edge for defender.
- Added defensive keyword looks: a ward rune ring that flares when its cost is paid, a protection halo and bounce, a prevention mist, a shield counter that cracks into shards, regeneration motes with a green bubble, a snarling ghost bear for umbra armor, and a phasing ghost.
- Added speed and timing looks: a haste dash-in with red crackle, a flash blink, split second chains, a ninjutsu smoke bomb, dash (gold afterimages and a swoosh back to hand) and blitz.
- Added counter and mechanic looks: +1/+1 counters (green), -1/-1 counters (always purple, with ooze drips for infect), tokens condensing out of motes, equipment and aura streaks, prowess, landfall, a dies ghost, poison drops and a cascade fan.
- Added a storm look: one lightning strike per copy. The bolts get thicker, branch more, fan out wider and shake harder as the count climbs.
- Added everyday action looks: counterspells (a ward rune coming down in blue bloom), exchanges of control, fights (both creatures lunge and clash), mill (cards flutter into the graveyard trailing blue-black smoke), reveals, library searches (the library fans open and the found card rises to the hand) and a quick shuffle riffle. Library effects use the owner's real sleeves.
- Added token and casting looks: Clue, Food and Treasure, proliferate, persist and undying ghosts, flashback flames, cycling, kicker rings, crew (the vehicle wakes up) and the initiative's torch banner.
- Added looks for exalted, annihilator, battle cry, myriad, transform, day/night, mutate, face-up turns, explore, connive, convoke, delve, foretell, suspend (the last time counter chimes), Blood, energy, experience, the Ring (a burning eye and a bearer outline), monstrosity/adapt, evolve, mentor/training, extort, unearth, embalm/eternalize, madness and overload (small red bolts shooting out of every permanent it hits).
- Added looks for populate, amass, afterlife, discover, rebound, buyback, living weapon, reconfigure, exploit/devour, casualty, squad, backup, vanishing/fading, plot, heroic, constellation, goad, incubate, role tokens, Map tokens, suspect, collect evidence, case solved, craft, cloak, offspring, gift and saddle.
- Added a painted scroll for Sagas (with their art), and venture into the dungeon now shows the real dungeon card with a torch moving from room to room.
  > *Developer's note: Every one of these effects follows one written style (wisps, trails, bloom, dust, curved paths) and reuses shared pieces like the lightning and drain effects, so the whole table feels like one game.*

**Table and UI:**
- Added 373 full-color gold keyword icons, drawn over the card frame. The game now recognizes every keyword on the icon sheets.
- Added condition boxes: each player gets a box listing the conditions their cards care about, with a count (Delirium of 4, Threshold of 7, Metalcraft of 3, Ferocious, Coven, Ascend of 10 and the city's blessing, day/night). Each condition has its own symbol. A card shows that symbol among its keyword icons and glows gold while the condition is met, and the active line of its text is lit in the card preview.
- Added zone slides: a card leaving the table or the stack slides onto its graveyard, exile, library or hand. A reanimated card starts from its pile, and a resolving permanent spell glides from the stack to its spot on the table.
- Added highlighting for legal choices when you pick from a set of cards (a library search, Satyr Wayfinder's reveal): the ones you can choose glow gold, and the rest are dimmed and can't be clicked. If the library gets shuffled afterwards, the cards you can pick are sorted first.
- Added a summoning sickness option under Settings → Look: drifting Z's (default) or a mist flowing over the art. Creatures already on the table switch right away.
- Added a Turbo speed setting with no pauses at all. Your saved choices still apply.

**Card Workshop and FX Studio (admins):**
- Added the Card Workshop, which goes through cards one at a time (from a deck, decklist, set or Scryfall search). It covers review status, artworks, entrance effects (including "None") and each ability's look, with live previews on the table behind it.
- Added Logic settings per card that now affect games: Always ask, Auto-resolve ("may" questions answered by their outcome, your own triggers without targets resolve by themselves), good or bad for you, and a default answer per effect (a target rule, maximum X, a mode). The server answers these for your own spells and abilities and logs the answers. Full control still asks you everything.
- Changed the FX Lab into the FX Studio, where effects and their color, path and sound variants are reviewed. Its tags decide which card gets which effect automatically.
- Added UI Review for admins: a recorded table you can view from every seat, with switches that put condition boxes, monarch, poison, floating mana, crowded boards, full hands, the stack window or a reveal on the table.

### Changes
**Pace and stack:**
- Changed bot turns to start after their banner, pause briefly at each step and before each play, and hold spells and abilities on the stack with growing target arrows before they resolve. Their attacks and blocks are held a moment too, and all of it scales with the speed setting.
- Changed the game to wait until an effect has finished before starting the next action, for at most 2 seconds and never at Turbo (the next action used to start right away).
  > *Developer's note: Bot turns used to rush by faster than anyone could read them. Now you get roughly the time a person would take, and Turbo is there for anyone who wants the old speed.*
- Changed the turn banner to last 1.5 seconds.
- Changed creatures that die together (in one combat, from one board wipe) to play their deaths at the same time (they played one after another before).
- Removed the stack window for creature spells. The card still waits on the stack so it can be answered, then its entrance plays.
- Changed a commander's triggers to wait until its entrance art has left the table.
- Changed the stack window to step aside while targets are being chosen and return once something answers. A targeting spell shows no frame until its target is picked.
- Changed the stack window to show the artwork of the exact printing that was cast (it showed Scryfall's default before).
- Changed instant and sorcery effects to start at the caster, and permanents' abilities to start at the permanent, including their damage.
- Improved picture loading: card art now loads as soon as the game sends it, so a bot's spell already has its art when it appears.

**Combat:**
- Changed blocks into a face-off: blockers stand across from their attacker, joined by short tethers.
- Changed combat damage to land one hit at a time, with each creature slamming into what it hits and playing a sound that fits its look.
- Added a red toughness number that drops as a creature takes damage.
- Added a blue pulse for attack and block candidates and a red glow for the ones you've chosen.
- Changed attack arrows to show during the attackers step (in duels too). Once blockers are declared, a blocked attacker's arrow only shows while you point at it, and all arrows hide while hits are playing.
- Removed the attack arrow in duels when it would only point at the one opponent.

**Table and UI:**
- Changed crowded creature rows to stack exact copies (same name, stats, tapped state, sickness, counters and abilities) into piles of up to nine in layers, then shrink cards to 75% at most, and finally scroll (cards only squeezed together before). Creature and land piles keep a normal gap from their neighbors.
- Changed condition boxes in 3-4 player games to sit next to each player's commander card.
- Changed the 4-player side seats to mirror each other, with counters and floating mana beside the commander card toward the middle (they were cut off at the screen's edge before).
- Changed the decision box to stay in its corner while you point at targets on the table. It only moves to the middle for questions without targets (choices, numbers, yes/no).
- Removed the reveal window for your own cards (the choice already shows them). A choice now closes an open reveal, and a yes/no question about revealed cards moves it aside.
- Changed choices among up to 10 cards (a graveyard, Satyr Wayfinder) to open a window sized to its cards, with the cards as large as fit.
- Improved the cogwheel and bug buttons: their gold symbols now fill the buttons and brighten when you point at them.

### Fixes
- AI: modal spells (Blessed Alliance) are no longer cast just for their life gain while its life is fine; it keeps them for their better modes
- Skips ("My turn", End turn ...) stop when an opponent casts a spell you can counter with a counterspell in your hand and the mana for it
- AI: Selfless Spirit and the like are sacrificed only when something is about to die (a removal or wipe of the opponent's on the stack, creatures dying in combat) and worth more than it
- Best-of-3: the "Deck submitted: waiting for the next game" banner no longer comes back once the next game has started
- Counters on a card are drawn over its frame and border, not under them
- Play screen: changing a setting twice in a row (the draft format, the timer ...) no longer leaves the page empty
- Fixed a bug where autopay answered an "add one mana of any color" question with White on its own (Painted Bluffs). The color the payment needs is now kept, and a color question after paying with an ordinary land is left to you.
- Fixed a bug where multikicker and other repeated costs offered more repeats than your mana could pay (Marshal's Anthem), and the picker now adds up the total correctly, e.g. {1}{W} x 3 = {3}{W}{W}{W}.
- Fixed a bug where re-seating at a table left condition boxes and scrollbars behind, and where the crown on a removed player plate caused an error.
- Fixed a bug where a card's choice saved in the Card Workshop fell back to automatic. Saving now confirms once the server has it.

### AI opponents
- Changed bots to take their turns at a human pace (see Changes) and removed the effect speed-up they used when they fell behind.


## Version 2026.10.18.1740 · October 18, 2026
*This is a big one. We rebuilt most of the screens around the table (decks, collection, replays, settings, drafting, tournaments, mulligans, game over), added Sealed and spectating, and spent a lot of time making the table itself easier to read: whose turn it is, what is on the stack, what was revealed and what combat did.*

### Highlights
- Added **Sealed**: open six boosters, build a 40-card deck and play it out at a table of up to 8, bots included.
- Added **spectator mode**: click a running table on the Join screen to watch the game.
- Added **a new draft pick screen** in the Arena/MTGO style, a new tournament overview and a winner's celebration at the end of a tournament.
- Added **real dice**: proper polyhedral dice models that tumble, bounce and knock into each other like real dice.
- Improved **how readable the table is**: a turn banner, visible combat damage, spells that stay on the stack long enough to read, and revealed cards that stay known.
- Added **bug reports from inside the game**: a bug button takes a screenshot and sends it to us with a short note and the game log.

### New
**Game modes:**
- Added Sealed as a new Limited table format next to Draft, for up to 8 players. Everyone opens six boosters (three chosen sets in turn, or a cube), builds a 40-card deck with the pool as the sideboard and free basic lands, then plays under the table's rule (Swiss, elimination or free play).
- Added spectator mode. Click a running table on the Join screen to watch it from the first player's seat, with all animations but no hands or decisions. A "Watching" strip has a Leave button. At a draft table you watch one of the current round's games.
- Added free play as a draft table rule next to Swiss and Elimination. It has no timer and no rounds, and each player keeps the deck they submit.
- Added a "Your deck is ready" window after a free draft. It shows your deck's colors, key cards, curve and counts, with buttons for a duel against a draft bot, a free-for-all against three draft bots, Edit deck or Later.

**Drafting and tournaments:**
- Added a new draft pick screen. The header shows the set's booster and logo, pack and pick number, passing direction, the drafters in seat order (the one passing to you is marked) and a timer ring. The pack sits in the middle, and new packs slide in from the side.
- Added a live deck below the pack while you draft. Your picks build up in columns plus a sideboard, a click moves a card between the two, and you can use the deck builder's groupings and switch on live statistics (curve, colors, card types). "Big pack" shows the pack larger, and Pick-Two shows how many picks are left in the pack.
- Added card previews on the draft screen. Pointing at a pack card makes it grow in place, and deck and sideboard cards show big in a fixed spot on the right.
- Added a new tournament screen. A strip shows the steps (Draft, Deck building, Round 1..n, Done) with the current one lit. Your own match is shown big, past rounds appear as tiles, and the standings window has portraits, gold/silver/bronze places, points and records. During deck building you see the clock and a tick for each player who has finished.
- Added a tournament winning screen with gold rays and falling sparks, the champion's portrait under a crown, 2nd and 3rd place in silver and bronze, everyone else in a row, and your own place.

**Table and UI:**
- Added turn indicators: a "Your turn" / "Mia's turn" banner with the turn number at each turn start, a gold ornament arrow bobbing over the active player's portrait, and "MIA'S TURN · 5" on the phase bar.
- Added visible combat damage. A red line flashes from each creature that dealt damage, and "−N" rises over every creature it hit, including an attacker's damage split among its blockers.
- Added emblems (planeswalker ultimates) as gold plaques beside their player's plate. Point at one to read its text.
- Added a reveal window for revealed and looked-at cards (Gitaxian Probe, reveals from a library). It opens big in the middle, titled with the source and whose cards they are. Reveals to everyone close by themselves after 4 seconds unless you point at them. Cards you only looked at stay open.
- Added memory for known cards. An opponent's hand cards you have seen lie face up in their hand fan, your own revealed cards get a "◉ revealed" tag, and cards known in a library stay known until that library is shuffled.
- Added a library view. Click a library to look through it in order, top card first, with known cards face up where they lie and card backs in between.
- Added a gold glow on your library when its top card is playable (Future Sight, Bolas's Citadel). Drag the top card onto the table to play it, like a hand card.
- Added hand reordering. Drag cards around in your hand, and the order is kept as new cards come in.
- Added a discard animation. The card lifts out of the hand (an opponent's turns face up on the way), flutters onto the graveyard and lands with a soft thud and a puff of dust.
- Added flames to mana pools. Each floating mana burns as a small flame in its color, and mana that enters the pool flares up with sparks.
- Added buttons for special actions: Delve, Convoke and Improvise while you pay, and actions such as Turn face up at priority.
- Added a pulsing gold halo behind the decision box while the game waits on you.
- Added an in-game bug button beside the cogwheel, plus "Report bug" in the main menu. It takes a screenshot and opens a window for up to 250 characters of text. We receive the picture, your note, the game log and the game's replay.
- Added the game ID to the in-game menu and the game-over window. Click it to copy it for bug reports.

**Profile:**
- Added alternate artworks for your avatar and art sleeve. "Other art…" in Profile lists every artwork of the card, newest first, and you can pick any of them.

**Admin page:**
- Added portraits (with a green dot while online), last time online, games and win rate to the accounts list.
- Added a Server tab with version, uptime, memory, running games and players online, plus the server log and a Restart button.
- Added a Feedback tab that lists the bug reports with screenshot, log and replay.

### Changes
**Decks and collection:**
- Changed the Decks screen: a click on a tile now opens the deck, and Rename / Copy / Delete moved under ⋯ or a right-click. Tiles show the deck's colors as mana symbols and a Commander deck's bracket. You can search by name or commander, filter by format and sort by recently edited, name or format. "+ New deck" and "Import a deck…" are the first tiles.
- Removed the card back setting from the Decks screen. Use Profile → Sleeve instead.
- Improved the card collection. The cards fill the width. A side panel sums up your collection and shows the selected card big, with its cost, type, how many you own and which of your decks use it. Owned counts appear as a gold ×N badge.
- Added "Import collection…", which takes a CSV file, a Moxfield link or a pasted list. Click a card in the collection to browse its printings and add it to a deck or start a new deck with it.
- Improved the deck builder layout. Cards scale (0.75 to 1.3×) so every column fits the width, stack headings are as big as fits, and the preview of the card you point at is bigger.
- Changed the stacks view to put the search on the left and the deck on the right, with a divider you can drag. The search can also go "On top", in a strip you can resize.
- Changed legality marks to a gold ✓ for legal decks and a red ✖ for illegal ones.
- Changed deck builder statistics to count the commander separately ("99 (+1 cmd.)").
- Added the bracket, the Game Changers and a Deck health guide to the commander box. Deck health checks lands, ramp, draw, removal and wipes against the usual ranges.
- Changed deck builder clicks. Clicking a search result adds it, Ctrl+click sends it to the sideboard, and Alt+click opens its options. Clicking a deck card moves it to the sideboard, Ctrl+click removes it, and right-click opens its options (art, move, remove, commander, deck art).
- Added dragging in the deck builder. Drag cards into another column, into the sideboard, or onto the search to remove them.
- Added a "Free" grouping. Drop a card into empty space to start your own column. Free columns are saved with the deck, and you can double-click a heading to rename it.
- Changed "Curve split" to show creatures on top and other spells below, per mana value. The old side-by-side version is still available as "Curve columns".
- Added an "Every art" search option that shows every artwork as its own card. Clicking one adds exactly that version, and different artworks stay separate entries, even in the saved deck file. Changing the art on one of several copies asks whether to change all copies or only that one.
- Added a "Basic lands" search filter that shows every basic land artwork.
- Added inverted filters. Right-click a filter button and it turns red: outside the commander's colors, not that color, no basic lands, and so on. This also works for the deck picker's colors, the Decks screen's formats and the Replays screen's Kept filter.
- Removed the Owned / All cards / Not owned filters for now, because everyone has every card.
- Changed Back in the deck builder to ask Save, Discard changes or Cancel when there are unsaved changes (it saved them silently before).
  > *Developer's note: Quietly saving on Back surprised more than one of you after an experimental edit. Now nothing changes until you press Save.*

**Screens:**
- Changed Replays to show each game as a tile with the winner's commander fading in, round player portraits (the winner crowned in gold), format, turns and time.
- Added Replays filters (All / ★ Kept, format, player search) and groups for Today, Yesterday, Earlier this week and Older. Unfinished games are hidden behind "Show unfinished (N)".
- Improved the replay viewer. It has new gold controls at the bottom right with a turn slider (your turns marked gold), speed buttons and Exit, plus a strip that names the game. The other players' hands show face up in their fans, the game log follows the replay, and Shift+arrows step one board change at a time.
- Changed the Settings window to be wider (1100 x 760), with big icon buttons for Sound, Display, Gameplay and Shortcuts.
- Added Settings features: a percentage and a ▶ sample on every volume slider, Mute all sound, a Windowed / Fullscreen / Borderless window choice, explanations on every page, "Reset this page" and a short "Saved ✓" after every change. In Shortcuts, a key used twice shows in red.
- Improved the login screen. A colored dot shows the server's state (green online, amber connecting, red unreachable). There is an eye button to show the password and a gold "Create an account" link.
- Changed game over to a window in the middle of the screen (it was a banner and a corner box before). It shows Victory / Defeat / Draw, every player's portrait and final life with the winner crowned, format, turns and time, and buttons for Copy game ID, Watch the replay and Back. In a match it shows the score and "Game 2 starts in a moment…". A win rains gold sparks and a defeat slowly greys the table.
- Changed the mulligan screen to "Keep this hand?" with your hand big in an arc, a short summary ("4 lands · 3 spells") and what a mulligan would cost. To put cards on the bottom, click them in the same view. Other players' choices show as tags under their names ("Kept", "Mulligan ×1").
- Changed the London mulligan to ask for the cards to put on the bottom only once you keep, so you can take another mulligan first (you had to bottom a card before mulliganing again before).

**Table:**
- Changed the stack window to about twice its old size. It now sits on top of the player frames and the log, and you drag it by its gold title bar. Point at a card in it to see the card big, or click one to target it with a counterspell.
- Changed spells and abilities to stay on the stack for a moment before they resolve (they could resolve instantly before). How long depends on your speed setting: Fast 0.9 s, Normal 1.3 s, Slow 2.6 s, Very slow 4.2 s.
- Changed the opponent pause speeds to Fast 0.35 s, Normal 0.5 s (the default), Slow 1 s and Very slow 1.6 s.
- Changed triggers to need fewer clicks (except with Full control). A triggered ability resolves without asking when you have nothing to respond with. Your own triggers that only help you or only hurt your opponents (Grave Titan, Gray Merchant of Asphodel) are confirmed for you, even when you hold responses. You still choose targets yourself.
  > *Developer's note: These only fire on their own when they have no target, no cost and no possible downside. Anything that needs a real decision still asks you.*
- Changed auto-passes to wait at least your speed setting's time, so you can see the stack.
- Added a steady glow on the cards you have picked in a choice of several (discard down to 7, sacrifice). It is green when the choice is good for you and red when it costs you something. Done only appears once the minimum is picked.
- Changed up-to choices to show Done once a target is chosen (it was Cancel before).
- Changed reveal windows to be only as big as their cards (they used the screen-sized graveyard window before). They show up to five cards in one row and more in two rows, all sized to fit without scrolling.
- Changed decision windows in the middle so you can still point at your hand cards to see them big.
- Improved the turn controls: a taller phase strip with bigger labels, the full step name ("Your turn · 12 · Combat damage") and the combat steps tinted red.
- Improved the game log: player names in gold, card names highlighted (point at one to see the card), a divider at each turn and combat lines in red.
- Improved mana pools. Your pool is wider so it no longer slips under your portrait, and opponents' pools wrap into rows beside their plate.
- Changed damage markers to sit in the card's top right corner (they covered the ability icons at the top left before).
- Changed art sleeves to a thin gold trim with a faint vignette, so they never look like face-up cards.
- Changed the dice to a real polyhedral set (d4, d6, d8, a true d10, d12, d20) in dark red with engraved gold numbers (they were built stone dice before). Other players' dice are tinted in their colors.
- Improved dice throws. Dice come in from the edge of the screen, tumble with gravity and spin, knock into each other and bounce off dice already lying on the table, then glide to their places with the number facing you.
- Changed the duel layout so lands sit a little in from the edge and tall piles no longer reach the hand. The opponent's command zone in a Commander duel moved beside their piles.
- Changed the right seat at bigger tables to mirror the left one (its piles ran into the turn controls before).
- Improved crowded hands (20 or more cards): the card you point at rises whole and its neighbors slide aside.
- Changed card texts to show symbols instead of placeholders: ✓ ✗ ⊘ ! ▶ in card hints, real dashes and bullets instead of HTML codes, and the card's name in place of "{this}".
- Changed library browse windows to open in the pile's own order (they were sorted by name before).

**Tournaments:**
- Changed Concede in a tournament match to give up only the current game, so the best of three goes on. Between games, the game-over window shows the match score, and after the match "Back to the tournament" returns you to the tournament (it went to the main menu before).
- Added a message for the winner when the opponent forfeits a match, then a return to the tournament.
- Changed Limited tables to seat up to 4 players through Quick Play, and Quick Play now takes the number of AI players you choose.
- Changed the deck you submit at a draft table to include the rest of your pool as its sideboard, so you can sideboard between games.

**Server:**
- Changed the server's memory to 80% of the machine's memory (was 70% before), with extra swap space.
- Changed games stopped by a server error to say so (they named a random winner before). Such games aren't counted in the stats.

### Fixes
- AI: modal spells (Blessed Alliance) are no longer cast just for their life gain while its life is fine; it keeps them for their better modes
- Skips ("My turn", End turn ...) stop when an opponent casts a spell you can counter with a counterspell in your hand and the mana for it
- AI: Selfless Spirit and the like are sacrificed only when something is about to die (a removal or wipe of the opponent's on the stack, creatures dying in combat) and worth more than it
- Best-of-3: the "Deck submitted: waiting for the next game" banner no longer comes back once the next game has started
- Counters on a card are drawn over its frame and border, not under them
- Play screen: changing a setting twice in a row (the draft format, the timer ...) no longer leaves the page empty
- Fixed a bug where spells on the stack couldn't be targeted (countering a specific spell).
- Fixed a bug where aiming arrows started at the wrong card (Static Orb asking what to untap) instead of the card that asks the question.
- Fixed a bug where cards seen while searching a library stayed shown after a shuffle, and the shuffle sound didn't play.
- Fixed a bug where auto-pass treated a card as castable based on a cost reduction whose condition wasn't met (Uneasy Partings).
- Fixed a bug where spells that nobody answered (Night's Whisper) resolved before anyone saw them on the stack.
- Fixed a bug where a draft pick could be doubled: a resent pack was treated as new, so the same card could be taken twice and your picks list grew far too long.
- Fixed a bug where conceding in a tournament game closed your opponent's client.
- Fixed a bug where the "Deck submitted: waiting for the next game…" banner never disappeared.
- Fixed a bug where the next tournament game against a different opponent crashed the table.
- Fixed a bug where a single game showed "Game 1 starts in a moment" on the game-over window.
- Fixed a bug where a failed automatic login showed a half-built box over the title instead of the login form.
- Fixed a bug where the deck builder shifted sideways when its top bar got too wide, pushing Save and Submit off screen.
- Fixed a bug where an older search result doubled the deck builder's search results.
- Fixed a bug where dragging a card in the deck builder showed it full size, centered it on the pointer and left stacked columns half-moved.
- Fixed a bug where dice could come to rest on an edge or corner, and the d10 rolled on its waist for six seconds.
- Fixed a bug where card windows (reveals, an opened library, graveyard or exile) slipped under the turn strip.
- Fixed a bug where a question in the middle window also appeared in the decision box behind it.
- Fixed a bug where the game log box cut off a fourth line at the bottom.
- Fixed a bug where letter tops were cut off in windowed mode ("Owned", "Playable").
- Fixed a bug where menu, play screen and settings icons were blank in the released game.

### AI opponents
- Added bots to Sealed and Draft tournaments. They build their decks from their own pools.
- Added portraits for draft bots: a card of your choice, or by default a legend that fits their style, with any artwork through "Other art…".
- Fixed a bug where Quick Play's free-for-all after a draft didn't really seat three draft bots.


## Version 2026.10.17.1948 · October 17, 2026
*This is a big one. We rebuilt how you find and set up games, from Quick Play through tables and tournaments to drafts. We also gave the whole game a new look in dark stone and worked gold, and redesigned the battlefield for duels and 3-4 player games.*

### Highlights
- Added a new Play screen: Quick Play, Create table and Join table, with best-of-three matches, AI in any seat, tournaments, draft tables and house ban lists.
- Added power level brackets: Commander decks get their official Commander Bracket (Core, Upgraded or Optimized), shown at the table and in the deck picker.
- Added a new battlefield for duels and a matching one for 3-4 players, with gold veins in the stone, ornate player plates, a gold command zone and a stack window you can drag.
- Added a Profile window: pick a portrait from any card's art, choose a card sleeve, set the look of the interface and see your stats.
- Changed the whole interface to dark stone and enamel in gold frames (was plain panels and buttons before), with larger, easier-to-read text and HD card art everywhere.
- Added a pause menu and moved every in-game question into a central window that shows the card asking, with big − / + pickers for numbers.

### New
**Play and tables:**
- Added Quick Play, which starts a game against AI right away: pick Commander, Constructed (Canadian Highlander, Standard, Pioneer, Modern, Legacy, Vintage, Casual) or Limited, then your deck.
- Added Create table, which works the same way. Pick the format, then set it up in a framed panel: players, 1 game or best of 3, house rules or draft settings. Rules that can't apply are greyed out, with the reason.
- Added table setup: the host fills seats with AI or closes them, everyone picks a deck and clicks Ready, and the host starts the game. Commander tables seat 2-4 players. Other formats seat 2.
- Added the proper Commander duel for two-player Commander, at 40 life.
- Added tournaments at a table (single elimination or Swiss, best of three), with standings after each round. AI players play their matches too.
- Added house ban lists, chosen when creating a table. Decks are checked against them, and the list shows at the table and in the Join list.
- Added Join table tiles for every open table: the host's portrait, the format and rules, and the seats as small portraits with + for open ones. One click joins. Tables in progress are listed greyed out under "Playing now", and the list updates on its own.
- Added seating halls: a long table for 2, a square one for 3-4 and a round table for 5-8 and drafts. Each seat shows the player's portrait and a ready mark, and its tooltip shows their deck and bracket.
- Added a bar below the hall with your deck (click it to change), how many players are ready, who is still choosing, a big Ready toggle and the Start button.
- Added sideboarding between the games of a best of three, in the deck builder (40-card decks at Limited tables).

**Drafts:**
- Added draft tables: draft bots fill the AI seats, you get 10 minutes to build after the draft (decks not done by then are built automatically), then Swiss or single elimination rounds of best of three, with standings.
- Added a Quick Play draft with 7 bots. Reconnecting puts you back at your draft table.
- Added draft settings that show the three packs as real boosters of their sets. Click a pack to open a set chooser with each set's key art, logo and symbol.
- Removed the Draft button from the main menu. Drafts now live in Play.
  > *Developer's note: Drafting is now just another kind of table, so it gets the same seating, ready checks, best-of-three matches and standings as everything else.*

**Brackets:**
- Added the official Commander Bracket (2 Core, 3 Upgraded, 4 Optimized) for Commander decks, based on Game Changers, mass land denial, extra turns and how early two-card combos come together. It shows on your seat (the tooltip explains why) and in the deck picker along with the deck's Game Changers.

**Profile:**
- Added the Profile window (from the main menu, or by clicking your portrait in Play) with three tabs: Profile, Look and Stats.
- Added portraits: choose any card's art in a gold ring, with card names suggested as you type. It is saved with your account.
- Added card sleeves: classic, a plain color (W/U/B/R/G/gold with the mana symbol embossed) or any card's art in a gold-trimmed border. Everyone sees your sleeve on your library, your hand and your face-down cards.
- Added Look options for button frames, plate ornaments, keyword symbols, window style and battlefield style. They change live.
- Added a redesigned Stats page with number cards, a win/loss ring, bar charts for formats, commanders and the group leaderboard, and a table of your recent games.

**Battlefield:**
- Added the duel table: both battlefields across the full width with a vein of gold between them, player plates (portrait in a gold ring, life on a gold plaque, counters and the commander beside it), the opponent's hand as fanned card backs and large mirrored piles.
- Added separate areas for artifacts and enchantments beside the middle. Your hand peeks up from the bottom, centered on your portrait, and rises when you point at it.
- Added the 3-4 player battlefield in the same look. You sit at the bottom, the player across from you at the top and the others in the side columns. Everyone gets the same bands from their edge: lands, then artifacts/enchantments, then creatures. Gold veins meet where the stack sits.
- Added a golden command zone that shows "In play" while the commander is out and the commander tax on a golden plaque.
- Added optional Focus Rotation, which turns the table so the player whose turn it is sits across from you.
- Added gold filigree that joins each player's plate to a gold molding along the screen edge.
- Added a crown for the monarch. When the title changes hands, the crown rises over the table and moves to the new monarch.
- Added a slowly turning vortex of pale light behind the exile pile (exiled cards spin in out of its middle) and a faint little burial ground behind the graveyard.
- Added separate log and chat buttons in the bottom left. The chat is joined to the game and also shows the game's full log, combat included.

**Cards and hovering:**
- Added the other side of double-faced cards (transform, modal, meld) beside the big preview when you hover them.
- Added the real identity of your own face-down cards (manifest, cloak, morph) on hover. Only their controller is told.
- Added graveyard and exile windows: click a pile to open it, hover a card for the big preview, filter, or sort by Newest first, Name, Card type or Mana value. Pointing at the pile shows a quick peek, and a second click closes the window.

**Mana and in-game windows:**
- Added mana undo for every mana source, including filter lands and mana abilities that cost more than {T}. Whatever paid for them untaps, and Treasures come back. Use the Undo button by your floating mana or Ctrl+Z.
- Added a pause menu (Escape or the cogwheel) with Resume, Settings, Concede and leave, and Abort game. Against AI, the game waits at its next question to you while the menu is open. With other people at the table, the game goes on.

### Changes
**Look and readability:**
- Changed every button to dark enamel in a frame of worked gold, with the main action filled with gold. They are drawn as shapes now, so they stay sharp at any screen size.
- Changed every window, popup and screen to a slab of the table's dark stone in a subtle gold frame. That covers settings, decks, the deck builder, pickers, dialogs, login, stats, replays and draft screens.
- Changed the text font to a serif close to the cards' rules text (titles keep theirs; buttons were in capitals before) and raised every text size, so nothing is under 15 px.
- Changed keywords on cards to big plain icons, about twice the size (were small round badges before). They shrink when a creature has many.
- Changed card images to lossless HD everywhere, search grids included. Small card pictures (previews, deck tiles) are scaled down sharply, so rules text stays crisp (was soft before).
- Changed players with no portrait and no commander to show their deck's best creature (were initials before).

**Menus:**
- Improved the main menu with an icon and a gold diamond on each button. The credits moved behind a "Credits" link, and the backgrounds stand still (they used to pan and zoom).
- Added 15 more official Magic wallpapers to the main menu rotation.
- Changed the Play screen's choices to wide buttons with card art fading in. The connection status is a colored dot by the title.
- Changed the deck picker to a grid of art tiles with name, commander, colors and set, plus a search and color filters. Double-click a deck to play it.

**Questions and choices:**
- Changed every question to a window in the middle of the screen, with the card that asks (its picture, its name or a triggered ability's text), mana shown as symbols and bigger answer buttons. Long lists show in clear columns.
- Changed the "how many times" picker (Replicate, Multikicker) to show what you are paying, big − / + buttons and the total. + only goes as high as your mana can pay.
- Changed choosing X and splitting mana between colors to − / + buttons that grey out at their limits (number field arrows before, which didn't show the limits).
- Removed the question for additional costs you can't pay (kicker, multikicker, replicate, squad).
- Changed the stack window to a gold frame on dark enamel holding the trigger preview and the stack's cards, readable over a full battlefield. Drag it anywhere. It keeps its spot for the session, and a double-click puts it back.
- Changed spells another player is still casting (choosing targets, paying) to appear only once they are actually cast.

**Gameplay flow:**
- Changed your own creature spell alone on the stack to resolve without asking you (asked every time before), unless you have full control on or someone responded.
  > *Developer's note: Passing priority on your own creature spell was a click nobody needed. As soon as anyone responds, you get asked again as usual.*
- Changed identical lands to stack up to 4 per pile. A fifth starts a new pile.
- Changed mana streams to follow a spell onto the battlefield, to the permanent it becomes.

**Sound:**
- Changed spells and combat to +5 dB and game music to -4 dB, so effects stand out against the music.
- Removed the crickets from the forest ambience.

### Fixes
- AI: modal spells (Blessed Alliance) are no longer cast just for their life gain while its life is fine; it keeps them for their better modes
- Skips ("My turn", End turn ...) stop when an opponent casts a spell you can counter with a counterspell in your hand and the mana for it
- AI: Selfless Spirit and the like are sacrificed only when something is about to die (a removal or wipe of the opponent's on the stack, creatures dying in combat) and worth more than it
- Best-of-3: the "Deck submitted: waiting for the next game" banner no longer comes back once the next game has started
- Counters on a card are drawn over its frame and border, not under them
- Play screen: changing a setting twice in a row (the draft format, the timer ...) no longer leaves the page empty
- Fixed a bug where Replicate's "how many times" didn't start at 0, so you could pay by accident.
- Fixed a bug where yes/no questions with the card's own answers didn't show them (Reckless Endeavor's two die results).
- Fixed a bug where autopay used a card whose own ability taps or sacrifices it to pay that ability (Dreamstone Hedron, Mind Stone).
- Fixed a bug where a draft table match's final score left out its last game.
- Fixed a bug where the game log showed internal object codes.
- Fixed a bug where Quick Play opened the deck popup on top of the game.

### AI opponents
- Added portraits for bots: a legendary creature that fits their personality, five per play style. The same bot name always gets the same face.
- Added sleeves for bots: their favorite color, or else their portrait's art.
- Changed draft table bots to get their names as soon as they sit down (the same characters play the draft). Bot-versus-bot matches are simulated so the rounds move along.


## Version 2026.10.16.2131 · October 16, 2026
*This is the first version of MTG Commander you can actually sit down and play: a four-player Commander table for our group, built on a full Magic rules engine, with AI opponents for any empty seats and an online server you can reach from anywhere. We also wanted removal and big moments to feel like Magic, so we spent a lot of this release on spell effects, sound and the table itself.*

### Highlights
- Added online play: one download, an account with the group code, and the game connects to our server at mtg.becajin.de, with an in-game update button when a new version is out.
- Added a four-player Commander table with Arena-style controls: drag cards to play them, click-to-attack and click-to-block, aiming arrows, automatic mana payment and MTGO-style priority stops.
- Added all 197 official Commander precons (165 playable), plus Canadian Highlander, Standard, Pioneer, Modern, Legacy, Vintage, Casual and Limited tables with ready-made decks for every format.
- Added a full deck builder and card collection with Scryfall search, statistics, alternate arts and collections shared with the group.
- Added booster and cube drafts with draft bots that have their own characters, followed by free play or a Swiss tournament.
- Added card-fitting spell effects: fire, lightning, ice, poison, blood, void, shadow, light, water, wind, earth, nature, claws, bites, stomps, stabs, energy beams and signature board wipes, each with its own sounds.

### New
**Online play and accounts:**
- Added accounts with login: sign-up needs the group code, the login is remembered, and you can change your password or log out from the main menu.
- Added server-side storage for your decks, settings and stats, so they follow you to any PC (only the server address and fullscreen stay per PC).
- Added a server address built into the client, with login progress, clear error messages, a 12-second timeout and a server status line.
- Added a version check: the main menu shows your client version, the lobby shows each player's version, and "New version" downloads the update, swaps it in and restarts the game.
- Added a download page for the game on the server.
- Added a standalone game download: one program with everything inside, plus a small zip with a short README for friends.
  > *Developer's note: The game started as something one of us hosted at home over Tailscale. Getting everyone onto one server with a built-in address and a one-click update was the top priority before the first real game night.*

**Lobby and tables:**
- Added a lobby with multiple tables, a list of who is online, and Leave table.
- Added seat choice: pick your seat at a table, and seat order is the turn order (AI players take the empty seats).
- Added a format choice per table with seat limits per format: two players play a duel with the opponent across the table, three sit left and right.
- Added automatic reconnecting after a dropped connection, which hands you back your running game.
- Added a Stats screen: every finished game is recorded per account (format, win, turns, commanders, players), with totals, per-format and per-commander numbers, your last 20 games and a group table of everyone's wins.
- Added a dice roll for the starting player: everyone rolls a real 3D stone d20 (yours gold-veined marble, ties roll again) and the highest roll chooses who starts; click to skip.
- Added 3D stone dice for cards that roll dice: the die rolls out next to its player.
- Added "Abort game" in the menu, which ends the game for everyone.

**Playing on the table:**
- Added drag-to-play from your hand: the held card follows the pointer, tilts with the motion, and your area lights up while a drop would play it; a plain click still plays.
- Added Arena-style combat: click creatures to select them, then click the player or planeswalker to attack (or the attacker to block); click a declared creature to take it back.
- Added curved, animated arrows: spells and abilities point at their targets, attackers at what they attack, blockers at what they block; while choosing, an aiming arrow follows the mouse and snaps onto valid targets.
- Added a blue aiming arrow for counterspells that points at the spell on the stack.
- Added automatic mana payment (on by default): colored mana first from the least flexible source, then basics, multicolor lands, rocks and utility lands, mana creatures last; hybrid and Phyrexian costs are planned too.
- Added a preview while dragging a card that shows the lands autopay would tap glowing blue.
- Added undo for a mana tap: right-click a land whose mana is still unused to untap it.
- Added a mana pool display next to each player's life total.
- Added MTGO-style turn steps along the bottom edge: every step is shown, with clickable stop markers for your turn and opponents' turns, plus the MTGO hotkeys F2-F11.
- Added an optional "only stop when I can respond" auto-pass, off by default, with a random short delay so your speed gives nothing away.
- Added automatic passing on your own abilities when you can't respond to them (for example Laboratory Drudge), even with auto-pass off.
- Added automatic answers when there is only one legal option, noted in the log ("Only one option: Zombie Token"); your own permanents and you yourself are never picked automatically for an optional choice.
- Added a stack display: the next item to resolve stands in front, older ones fan out behind it, and a list says who casts what at what.
- Added commander tracking: your commander is always visible in your panel, pulses gold when it can be cast from the command zone, and shows a TAX +N badge.
- Added commander damage chips with the enemy commander's art, orange from 10 and red from 15.
- Added player panels with avatars (commander art in a ring that glows for the active player and whoever has priority), floating life changes, a flash and a shake on damage, and hand size.
- Added graveyard, exile and library piles per player; hover shows their contents, and library cards you have seen (scry, surveil, cards put back) show face up on the pile until it is shuffled.
- Added a drag-and-drop window for scry, surveil and ordering cards on top or bottom, with your library shown beside the rows.
- Added a card fan for choosing cards from a library, graveyard or exile, with a big preview, filter, sort, scrolling and Hide; click marks a card, Confirm takes it, a double-click takes it at once.
- Added a search window for long choices such as a creature type, with the types on the battlefield as quick picks.
- Added a window in the middle of the screen for number choices (mana of any color, damage among blockers), with a running total.
- Added a window in the middle of the screen for decisions a card asks for (a trigger's "may", abilities, modes, piles).
- Added a picker with -/+ and "Pay xN" for multikicker and replicate costs.
- Added damage assignment among several blockers or with trample.
- Added cards you may play from exile or a graveyard (impulse draw, flashback, Curse of Hospitality) at the end of your hand, tagged and glowing in the zone's color.
- Added curses on the cursed player's side, tagged with who cast them.
- Added cards exiled by a permanent (such as Oblivion Ring) peeking out from under it when they can come back or still be used.
- Added the back face of transformed cards and of modal double-faced cards played as lands (Hagra Mauling as Hagra Broodpit).
- Added keyword icons down the left edge of permanents (flying, trample, deathtouch, lifelink, hexproof, ward, protection, infect, fear, intimidate and more), read from the current text so granted keywords show too.
- Added counter badges: +1/+1 and -1/-1 as one pill with the net value, icons for charge, time, lore, oil, poison, shield and stun counters, and loyalty on planeswalkers.
- Added a hover preview fixed on the right with the card's current rules text beside it and a live info panel (changed P/T in green or red, damage, counters, attachments, controller).
- Added an optional art-only battlefield: permanents show their art in a frame that follows the printed frame (split colors, gold, silver artifacts, nyx, a crown for legendaries).
- Added a NEW tag and a light sweep for cards you see for the first time, until you hover them.
- Added a "You are out" screen and a game over panel with "Back to the menu".
- Added a game speed setting (Fast, Normal, Slow, Very slow) that pauses after opponents' spells, attacks and turn starts.
- Added Cancel (Esc) during targeting and mana payment, which aborts the cast.

**Table look and effects:**
- Added an arcane stone table with a turning rune circle, seats that rotate toward the center, and a gold-on-dark interface.
- Added battlefield zones: lands at each player's edge, creatures in front, artifacts from the left and enchantments to the right behind them, and auras and equipment stacked behind what they are attached to.
- Added play animations: lands slam down with dust, creatures drop in by size (big ones shake the table), spells flare on the stack, and spells fly onto the stack from your hand or the caster's panel.
- Added mana streams: when you pay, glowing strands are drawn out of each land like liquid and pour into the spell, which charges up in those colors.
- Added keyword effects: flyers float and bob over their shadow, deathtouch leaves a skull, trample raises a dust cloud, lifelink streams light to the controller, and summoning-sick creatures are slightly grey and breathe slowly until a gleam shows they can attack.
- Added card-fitting removal effects chosen by the spell's name (Lightning Strike, Fireball, Swords to Plowshares ...), otherwise by its color: fire that burns and crumbles the card, branching lightning, ice spikes that freeze and shatter, poison that wilts the card like a plant, blood drained in twisting ribbons, a void black hole, shadow beams, light columns, water jets, tearing wind, earth boulders, crushing roots, claws, bites, stomps, stabbing blades, energy beams and five kinds of exile.
- Added color variants and flight paths (arc, lob, wave, helix, swarm ...) for spell effects.
- Added area effects for board wipes: a front sweeps the table in the spell's theme, with signature wipes for Damnation (a black hole), Toxic Deluge (black oil rain), Star of Extinction (a meteor and a tearing shockwave) and Wrath of God (a radiant entity lancing every card with light).
- Added a wave over the table in its colors when a global enchantment enters.
- Added ice blocks for stun counters from ice spells, which crack away when the stun ends.
- Added fates for players who lose: their avatar suffers whatever finished them, then stays dark.
- Added creature entrances: birds shed feathers, angels spread painted wings under a halo, demons and dragons spread their wings (a dragon's shadow sweeps the table first), zombies claw out of a grave, and large creatures crack the table.
- Added a commander entrance: its art shows large over the table for a few seconds with its name in gold, colored smoke and darting wisps.
- Added more entrances: gold coins rain onto a new Treasure, Rooftop Storm brings a thunderstorm over the table, and Sagas and Classes unroll on a parchment scroll with a stone plate showing the current chapter or level.
- Added a crystal-ball look for the scry window and a smoky one with blinking eyes for surveil.
- Added a shimmering ward over shroud permanents (and over hexproof ones when an opponent hovers them).

**Sound and music:**
- Added sound effects (earthy and low), music with crossfades, and a quiet ambience loop per game.
- Added themed spell sounds (fire, thunder, ice, earth, bites, blades), sword clashes and body falls in combat, and voices for big Dragons, Giants, Trolls and other creatures.
- Added commander voice lines, starting with Ob Nixilis, Captive Kingpin ("Pay your price"), with their own volume slider.

**Decks and collection:**
- Added a Decks screen with deck tiles (drag a card onto the art to change it), rename, copy, delete and a legality badge per deck.
- Added deck import from a pasted list, a file, or an Archidekt or Moxfield link, with one check that reports every problem at once (unknown or misspelled cards, missing commander, rule breaks); Moxfield files put the marked commander in the command zone.
- Added a deck builder with Scryfall search and filters (color, type, mana value, format, commander colors), a list or stacks view, a commander box, a curve split, a mana curve and a statistics panel.
- Added art choice per card: every printing is listed and the chosen one is saved in the deck.
- Added a warning on cards the game engine doesn't support yet, plus a "not in the game" deck filter.
- Added your card collection from a Moxfield CSV or a pasted list, with ownership diamonds under each card, an "Owned cards" search, a "Not owned" shopping list, and a view of friends' collections.
- Added a card browser for every Magic card.
- Added ready-made decks: the newest Canadian Highlander winner lists from Moxfield (daily) and current Standard tournament and popular decks (weekly), listed first at those tables.

**Drafts:**
- Added booster drafts (3 packs from any set) and cube drafts (several built-in cubes, four MTG Arena cubes, or any CubeCobra cube by link), with humans and draft bots.
- Added a pick screen with the pack, a preview, your picks by color and the clock, with Relaxed (75 s), Competitive (40 s) or no pick timer.
- Added Pick-Two Draft for 4-7 seats (two cards per pack before passing), on by default at 4 seats.
- Added draft deck building in the deck builder, with the pool, basic lands and suggested lands.
- Added play after a draft: a duel against one draft bot or a free-for-all against three, or a tournament where every human meets every other with standings after each round.

**Menus and settings:**
- Added a main menu over official high-res Magic wallpapers, with your own wallpapers or card art as options.
- Added Settings with Sound (volume per effect group), Shortcuts (every hotkey rebindable, two keys per action) and Display tabs (fullscreen, menu background, card back, art-only cards); Escape in a game opens it with Leave game.
- Added Replays: every game is recorded on the server with all hands, with the last 50 kept and starred ones for good; watch, export, import and delete them, with play, pause, turn skipping and speeds from 0.5x to 4x.
- Added an Admin page for admins: accounts, passwords, the group code and the draft bot characters.
- Added the FX Lab for admins, for trying every effect on a recorded table and choosing a card's effect, color, path and sounds.

### Changes
- Changed shortcut letters on prompt buttons to show only while ALT is held (always visible in tooltips).
- Changed card images to Scryfall's large pictures with round corners, about a sixth of the download size (were full-size PNGs before).
- Changed deck builder search results to sharper images (were small, pixelly thumbnails before).
- Changed the default search sort to color (W U B R G, multicolor, colorless, lands), then mana value, type and name.
- Changed the screen-switch sound to a stone rumble (was a zip sound before) and the draw sound to a short card flick (was a slide before).
- Changed the lobby to open on My decks when you have saved decks.
- Changed removal effects to play while the game goes on (the game waited for them before); targets stay on the table until the effect reaches them.
  > *Developer's note: Long effects are fun once, but not when four players wait on them every turn. The game now keeps going and the effect catches up with the card.*
- Changed leaving a game to be final: you concede and are not put back in on your next login; the last human leaving ends the game, and deserted games end after 3 minutes.
- Changed the X you can choose to go only as high as you can pay.
- Removed the decision cue sound, the hover tick and the cast shimmer.

### Fixes
- AI: modal spells (Blessed Alliance) are no longer cast just for their life gain while its life is fine; it keeps them for their better modes
- Skips ("My turn", End turn ...) stop when an opponent casts a spell you can counter with a counterspell in your hand and the mana for it
- AI: Selfless Spirit and the like are sacrificed only when something is about to die (a removal or wipe of the opponent's on the stack, creatures dying in combat) and worth more than it
- Best-of-3: the "Deck submitted: waiting for the next game" banner no longer comes back once the next game has started
- Counters on a card are drawn over its frame and border, not under them
- Play screen: changing a setting twice in a row (the draft format, the timer ...) no longer leaves the page empty
- Fixed a bug where floating mana of mixed colors was not spent automatically.
- Fixed a bug where autopay looped on filter lands, leaving mana floating and spells uncastable.
- Fixed a bug where casting your commander from the command zone failed.
- Fixed a bug where a spell could counter itself when it was the only target, without an arrow or a word.
- Fixed a bug where targets in a graveyard or exile (Cruel Revival) could not be picked.
- Fixed a bug where long choice lists overflowed the decision box.
- Fixed a bug where number fields ran over the settings in the decision box.
- Fixed a bug where damage assignment with several blockers or trample showed an empty prompt.
- Fixed a bug where target arrows came from the card clicked last instead of the spell or ability resolving (Atraxa's trigger).
- Fixed a bug where you could no longer create tables after leaving a single game early ("incompatible quit ratio").
- Fixed a bug where signing up failed on a server with Tailscale installed.
- Fixed a bug where draft packs were re-sent every 2 seconds and reset your selection.
- Fixed a bug where "no timer" in drafts still had a timer.
- Fixed a bug where Canadian Highlander lists with accented card names (Lorien Revealed) were unplayable.
- Fixed a bug where reminder text in brackets hid a keyword icon.
- Fixed a bug where an aura or equipment could drift onto the wrong creature, and where clicks hit a card under the one drawn on top.

### AI opponents
- Added AI opponents in every empty seat, playing random decks that are legal in the table's format (precons, winner lists, or a draft bot's deck at Limited tables).
- Added AI personalities: every AI seat is a named character (James, Mia, Theo ...) with a style (aggro, control, big, flyers, bombs, balanced) that shapes how it attacks, blocks and picks whom to attack.
- Added draft bot characters that pick by 17Lands card ratings, commit to colors softly, read signals and build two-color or splash decks in their style.
- Improved AI blocking: AIs block with creatures that would die only when an attack really hurts, and count every opponent's life in multiplayer.
- Improved AI attacking: AIs skip attacks that two or three blockers could kill together for free.
  > *Developer's note: The engine's AI only checked single blockers, so a 2/5 happily attacked into three creatures and died to a double block. This was the first of many AI fixes we want to make.*
- Fixed a bug where AIs looped untap abilities forever (Basalt Monolith).


