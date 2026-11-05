/**
 * Extended summaries and reader reviews, keyed by book name.
 * The library database only stores a short blurb per book, so richer
 * content for the details page lives here.
 */
const bookExtras = {
  "The Hobbit": {
    summary:
      "Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry. His contentment is disturbed when the wizard Gandalf and a company of thirteen dwarves arrive on his doorstep to whisk him away on an adventure to reclaim the dwarves' mountain home — and the treasure guarded by the dragon Smaug. Along the way Bilbo outwits trolls, escapes goblin tunnels, and plays a fateful game of riddles in the dark, where he finds a ring that will shape the destiny of Middle-earth. A warm, witty quest story about discovering courage you never knew you had.",
    reviews: [
      { name: "Mahir Rahman", rating: 5, date: "2025-08-14", text: "The riddle scene with Gollum alone is worth the read. Tolkien makes a small, reluctant hero feel absolutely epic." },
      { name: "Sarah Whitfield", rating: 5, date: "2025-06-02", text: "Read it as a kid, reread it as an adult — it somehow got better. Cozy and thrilling at the same time." },
      { name: "Tanvir Ahmed", rating: 4, date: "2025-03-19", text: "A perfect gateway into fantasy. The songs slow it down a little, but Bilbo's growth is wonderful." },
    ],
  },
  Dune: {
    summary:
      "Set on the desert planet Arrakis, Dune follows Paul Atreides, whose noble family accepts stewardship of the only source of melange — the 'spice' that makes interstellar travel possible and is the most valuable substance in the universe. When his family is betrayed, Paul flees into the deep desert and rises among the Fremen, caught between prophecy, politics, and ecology. Herbert weaves religion, environment, and power into a saga that reads like myth. It remains the best-selling and arguably most influential science fiction novel ever written.",
    reviews: [
      { name: "Nadia Islam", rating: 5, date: "2025-09-01", text: "Dense at first, then completely consuming. The world-building sets the bar for the entire genre." },
      { name: "Oliver Grant", rating: 5, date: "2025-05-23", text: "Politics, religion, ecology, prophecy — somehow it all fits in one book. A masterpiece." },
      { name: "Priya Nair", rating: 4, date: "2025-02-07", text: "Took me two attempts to get into it, but once the Fremen arc starts I couldn't put it down." },
    ],
  },
  "Gone Girl": {
    summary:
      "On the morning of their fifth wedding anniversary, Nick Dunne's wife Amy disappears from their Missouri home, leaving signs of a struggle. Under media glare and mounting police suspicion, Nick's lies and evasions start to surface — but Amy's diary tells its own unsettling story. Told in alternating, wildly unreliable voices, Gone Girl is a razor-sharp dissection of a marriage and of the stories couples tell about each other. Flynn's twist redefined the modern thriller and spawned a thousand imitators.",
    reviews: [
      { name: "Jessica Moore", rating: 5, date: "2025-07-11", text: "THAT twist. I gasped out loud on a train. Nobody writes unlikeable characters this brilliantly." },
      { name: "Rafiul Hasan", rating: 4, date: "2025-04-28", text: "The 'cool girl' monologue is iconic. Second half is pure chaos in the best way." },
      { name: "Emma Collins", rating: 4, date: "2025-01-16", text: "Dark, cynical and totally gripping. I didn't trust a single narrator and loved it." },
    ],
  },
  "The Girl with the Dragon Tattoo": {
    summary:
      "Disgraced journalist Mikael Blomkvist is hired by an aging industrialist to solve a forty-year-old mystery: the disappearance of his grandniece Harriet from a family island. He is joined by Lisbeth Salander, a brilliant, fiercely private hacker with a photographic memory and a troubled past. Together they pull at a thread that unravels decades of family secrets and violence. Larsson's icy Swedish thriller introduced one of crime fiction's most unforgettable heroines.",
    reviews: [
      { name: "Henrik Dahl", rating: 5, date: "2025-08-30", text: "Lisbeth Salander is the greatest character in modern crime fiction. Period." },
      { name: "Ayesha Siddiqua", rating: 4, date: "2025-06-17", text: "Slow burn for the first 100 pages, then absolutely relentless. The island mystery is classic." },
      { name: "Daniel Reyes", rating: 4, date: "2025-03-05", text: "Brutal in places, but the investigation is meticulous and satisfying. Great winter read." },
    ],
  },
  1984: {
    summary:
      "In Airstrip One, a province of the superstate Oceania, Winston Smith rewrites history for the Ministry of Truth while Big Brother's telescreens watch every move. His quiet rebellion — a diary, a love affair, a belief that two plus two makes four — sets him on a collision course with the Thought Police. Orwell's final novel gave the world Newspeak, doublethink, and Room 101, a vocabulary we still use to describe surveillance and propaganda. Written in 1948, it feels more current with every passing year.",
    reviews: [
      { name: "Thomas Becker", rating: 5, date: "2025-09-12", text: "I reread this every few years and it never stops being terrifyingly relevant." },
      { name: "Farzana Karim", rating: 5, date: "2025-05-04", text: "The appendix on Newspeak is quietly the most chilling part. Essential reading." },
      { name: "Lucy Pemberton", rating: 4, date: "2025-02-21", text: "Bleak, brilliant, unforgettable. The last line still haunts me." },
    ],
  },
  "Sharp Objects": {
    summary:
      "Crime reporter Camille Preaker returns to her claustrophobic Missouri hometown to cover the murders of two young girls. Staying with her hypochondriac mother and eerie half-sister in the family's Victorian mansion, Camille must untangle the case while confronting the childhood damage written — literally — on her own skin. Flynn's debut is Southern gothic at its sharpest: a slow-dripping psychological mystery about mothers, daughters, and the violence women inherit.",
    reviews: [
      { name: "Megan Fletcher", rating: 4, date: "2025-07-29", text: "Darker than Gone Girl, if that's possible. The final two pages rewire the whole book." },
      { name: "Imran Chowdhury", rating: 4, date: "2025-04-10", text: "Flynn's prose cuts deep. Wind Gap feels humid and rotten in the best gothic way." },
      { name: "Sofia Marino", rating: 5, date: "2025-01-25", text: "A masterclass in atmosphere. I guessed wrong twice about the killer." },
    ],
  },
  "Sapiens: A Brief History of Humankind": {
    summary:
      "Why did Homo sapiens outlast five other human species, and how did a savannah ape come to rule the planet? Harari's answer sweeps through the Cognitive, Agricultural, and Scientific Revolutions, arguing that our true superpower is shared fiction — money, nations, religions, and corporations exist because we collectively believe in them. By turns provocative and wry, Sapiens compresses 70,000 years of history into a single gripping narrative that makes you question almost everything you assumed about being human.",
    reviews: [
      { name: "Dr. Anika Rahman", rating: 5, date: "2025-08-08", text: "The 'shared myths' framing changed how I see institutions. Endlessly quotable." },
      { name: "James O'Connor", rating: 4, date: "2025-05-30", text: "Broad strokes, sure, but as a synthesis of human history it's exhilarating." },
      { name: "Wei Chen", rating: 4, date: "2025-03-14", text: "The chapter on the Agricultural Revolution as 'history's biggest fraud' is a must-read." },
    ],
  },
  "Ender's Game": {
    summary:
      "Earth has survived two invasions by the insectoid 'buggers' and is preparing for the third. Its best hope is Ender Wiggin, a six-year-old tactical genius drafted into Battle School, where children fight zero-gravity war games that grow crueller and more real with every promotion. Isolated by design and pushed past every limit, Ender must decide what kind of commander — and person — he will become. A legendary SF novel about leadership, empathy, and the cost of being the chosen one.",
    reviews: [
      { name: "Kevin Park", rating: 5, date: "2025-09-20", text: "The battle room sequences are incredible, but the ending is what stays with you." },
      { name: "Lamia Hossain", rating: 4, date: "2025-06-25", text: "Read it in one sitting. The twist landed like a punch even though the book is older than me." },
      { name: "Marcus Webb", rating: 4, date: "2025-02-11", text: "'The enemy's gate is down' — once you get it, you never forget it." },
    ],
  },
  Becoming: {
    summary:
      "Michelle Obama's memoir moves from a one-bedroom apartment on the South Side of Chicago to Princeton, corporate law, and eight years as First Lady of the United States. With disarming honesty she writes about marriage counselling, miscarriage, the scrutiny of being the first Black First Lady, and the struggle to keep her own identity inside history's loudest spotlight. Less a political book than a story about becoming yourself over and over again — and one of the best-selling memoirs ever published.",
    reviews: [
      { name: "Denise Walker", rating: 5, date: "2025-07-04", text: "Warm, funny, and surprisingly candid. The chapters about her father are beautiful." },
      { name: "Sadia Afrin", rating: 5, date: "2025-04-18", text: "I listened to the audiobook and it felt like a long conversation with a wise friend." },
      { name: "Robert King", rating: 4, date: "2025-01-09", text: "Even if you don't care about politics, the Chicago childhood sections are worth the book alone." },
    ],
  },
  "Pride and Prejudice": {
    summary:
      "When wealthy Mr. Bingley and his proud friend Mr. Darcy arrive in the neighbourhood, the Bennet household — five daughters and a mother desperate to marry them off — is thrown into delicious turmoil. Elizabeth Bennet, quick-witted and sure of her own judgment, takes an immediate dislike to Darcy, and the two spar their way through misunderstandings, disastrous proposals, and family scandal. Austen's most beloved novel is a flawless comedy of manners and still the blueprint for every enemies-to-lovers story written since 1813.",
    reviews: [
      { name: "Charlotte Hayes", rating: 5, date: "2025-08-22", text: "Two hundred years old and still the sharpest romantic comedy ever written." },
      { name: "Nusrat Jahan", rating: 5, date: "2025-05-15", text: "Elizabeth Bennet walked so every heroine after her could run. The first proposal scene is perfection." },
      { name: "Andrew Mills", rating: 4, date: "2025-03-01", text: "Funnier than I expected. Mr. Collins might be the most cringe-inducing character in literature." },
    ],
  },
  "The Great Gatsby": {
    summary:
      "Nick Carraway rents a cottage on Long Island next to the mansion of Jay Gatsby, a mysterious millionaire who throws legendary parties yet attends none of them. Gatsby, it emerges, has built his entire glittering life around one hope: winning back Daisy Buchanan, the girl he loved before the war, who lives across the bay behind a green light at the end of her dock. Fitzgerald's jazz-age tragedy is a 180-page meditation on money, longing, and the American Dream — and a strong candidate for the great American novel.",
    reviews: [
      { name: "Elena Vasquez", rating: 5, date: "2025-09-05", text: "Every sentence is polished like glass. The last page is the best ending in American fiction." },
      { name: "Shakib Hossain", rating: 4, date: "2025-06-09", text: "Short enough to read in an evening, deep enough to think about for a month." },
      { name: "Grace Liu", rating: 4, date: "2025-02-27", text: "Hated it in high school, loved it at thirty. Some books just need you to grow up first." },
    ],
  },
  "The Immortal Life of Henrietta Lacks": {
    summary:
      "In 1951, doctors took cells from Henrietta Lacks, a poor Black tobacco farmer, without her knowledge. Those cells — HeLa — became the first immortal human cell line, enabling the polio vaccine, cancer research, gene mapping, and IVF, and have been bought and sold by the billions. Her family, meanwhile, couldn't afford health insurance and learned of her 'immortality' decades later. Skloot spent ten years untangling the science and the family's story, producing a landmark book about medical ethics, race, and who owns the human body.",
    reviews: [
      { name: "Dr. Samuel Osei", rating: 5, date: "2025-07-21", text: "Required reading for anyone in medicine. Science writing with a beating heart." },
      { name: "Rebecca Stone", rating: 5, date: "2025-04-03", text: "I came for the science, stayed for Deborah. Devastating and essential." },
      { name: "Tahmid Khan", rating: 4, date: "2025-01-30", text: "Makes complicated cell biology completely readable while never losing the human story." },
    ],
  },
  "The Da Vinci Code": {
    summary:
      "Harvard symbologist Robert Langdon is summoned to the Louvre, where a curator has been murdered and has left a trail of ciphers written in his own blood. With cryptologist Sophie Neveu, Langdon races through Paris and London, one step ahead of the police and a shadowy society, decoding clues hidden in Da Vinci's paintings that point toward a secret that could shake the foundations of Christianity. Pure propulsive puzzle-thriller — the book that made an entire generation read about Fibonacci sequences on the beach.",
    reviews: [
      { name: "Paul Richardson", rating: 4, date: "2025-08-17", text: "Is it literature? No. Did I stay up until 4am finishing it? Absolutely." },
      { name: "Mitu Akter", rating: 4, date: "2025-05-26", text: "Every chapter ends on a cliffhanger. The Louvre opening is an all-time thriller hook." },
      { name: "Giovanni Russo", rating: 3, date: "2025-02-14", text: "The history is creative, let's say — but as a page-turner it's ruthlessly effective." },
    ],
  },
  Educated: {
    summary:
      "Tara Westover was seventeen the first time she set foot in a classroom. Raised in the Idaho mountains by a survivalist father who distrusted schools, doctors, and the government, she taught herself enough mathematics and grammar to be admitted to Brigham Young University — then went on to Cambridge and Harvard. Educated is her account of a family she loved and had to leave, and of what an education actually costs when it rewrites who you are. One of the most acclaimed memoirs of the century so far.",
    reviews: [
      { name: "Hannah Brooks", rating: 5, date: "2025-09-08", text: "I had to keep reminding myself this is a true story. Unflinching and beautifully written." },
      { name: "Arif Mahmud", rating: 5, date: "2025-06-20", text: "The junkyard scenes made me wince, but the real tension is in her mind. Extraordinary." },
      { name: "Claire Dubois", rating: 4, date: "2025-03-27", text: "A memoir that reads like a thriller. Her grappling with family loyalty is heartbreaking." },
    ],
  },
  "A Song of Ice and Fire": {
    summary:
      "In the Seven Kingdoms of Westeros, where summers last decades and winters a lifetime, the death of the King's Hand drags the honourable Lord Eddard Stark into a capital full of schemers. Across the sea, the last heir of the deposed dynasty bargains for an army, while on the frozen northern Wall an ancient threat stirs that the squabbling lords refuse to believe in. Martin's saga rewrote epic fantasy's rules — no character is safe, every chapter has a knife in it — and became the phenomenon that conquered television as Game of Thrones.",
    reviews: [
      { name: "Victor Alvarez", rating: 5, date: "2025-08-25", text: "The Red Wedding broke me and I still recommend this to everyone. Fantasy with real stakes." },
      { name: "Rumana Haque", rating: 5, date: "2025-05-11", text: "POV chapters mean you love and hate everyone at once. Tyrion's chapters are gold." },
      { name: "Stephen Carter", rating: 4, date: "2025-01-19", text: "Dense, political, brutal, brilliant. Now if we could just get the next book…" },
    ],
  },
  "To Kill a Mockingbird": {
    summary:
      "In Depression-era Maycomb, Alabama, young Scout Finch watches her father Atticus, a small-town lawyer, defend Tom Robinson — a Black man falsely accused of assaulting a white woman. Through Scout's eyes, the trial and the mystery of the reclusive neighbour Boo Radley become lessons in conscience, courage, and the stubborn gap between law and justice. Lee's only novel for 55 years won the Pulitzer Prize and remains one of the most read and most taught books in the English language.",
    reviews: [
      { name: "Patricia Lane", rating: 5, date: "2025-07-15", text: "Atticus's closing argument should be read aloud once a year. Timeless." },
      { name: "Fahim Shahriar", rating: 5, date: "2025-04-22", text: "Scout's voice is perfect — funny and innocent while the adult world turns dark around her." },
      { name: "Maria Santos", rating: 4, date: "2025-02-03", text: "The Boo Radley payoff gets me every single time. A genuinely moving classic." },
    ],
  },
  "The Catcher in the Rye": {
    summary:
      "Expelled from yet another prep school, sixteen-year-old Holden Caulfield spends three aimless days adrift in New York City, dodging his parents, chasing old friends, and raging against the 'phonies' of the adult world. Beneath the sarcasm is a boy unravelling with grief for his dead brother and terror of growing up — he dreams only of standing in a rye field, catching children before they fall off the cliff. Salinger's novel has defined teenage alienation for over seventy years.",
    reviews: [
      { name: "Jake Morrison", rating: 4, date: "2025-08-03", text: "You either meet Holden at the right age or you don't. I did, and it mattered." },
      { name: "Sharmin Sultana", rating: 4, date: "2025-05-07", text: "Rereading as an adult, it's so clearly a book about grief. The carousel ending is quietly devastating." },
      { name: "Noah Fischer", rating: 3, date: "2025-01-28", text: "Holden exhausted me, which I suspect is exactly the point. Iconic voice either way." },
    ],
  },
  "The Girl on the Train": {
    summary:
      "Rachel commutes into London on the same train every day, inventing a perfect life for 'Jess and Jason', a couple she watches from the window — until one morning she sees something shocking in their garden, and the woman she's been watching disappears. Unemployed, drinking, and plagued by blackouts, Rachel inserts herself into the investigation despite being unable to trust her own memory of the night in question. A locomotive-paced thriller about the unreliable stories we tell ourselves.",
    reviews: [
      { name: "Lauren Mitchell", rating: 4, date: "2025-09-16", text: "Three unreliable narrators and I suspected all of them. Flew through it in two days." },
      { name: "Rashed Khan", rating: 4, date: "2025-06-13", text: "The blackout device is genuinely clever — the reader knows exactly as little as Rachel." },
      { name: "Isabelle Fontaine", rating: 3, date: "2025-03-09", text: "Grim but gripping. Perfect for an actual long train ride, slightly stressful too." },
    ],
  },
  "The Alchemist": {
    summary:
      "Santiago, an Andalusian shepherd boy, dreams twice of treasure buried at the Egyptian pyramids and sells his flock to pursue it. His journey across the sea and the Sahara brings him a crystal merchant afraid of his own dream, an Englishman chasing the secret of alchemy, the woman he loves, and finally the alchemist himself — each a lesson about omens and the 'Personal Legend' every person is called to live. Coelho's fable has sold over 150 million copies and is carried like a talisman by readers worldwide.",
    reviews: [
      { name: "Camila Ferreira", rating: 5, date: "2025-07-26", text: "I read it whenever I'm at a crossroads. Simple on the surface, bottomless underneath." },
      { name: "Adnan Chowdhury", rating: 4, date: "2025-04-14", text: "'When you want something, all the universe conspires…' — cheesy until it's exactly what you needed to hear." },
      { name: "Yuki Tanaka", rating: 4, date: "2025-02-18", text: "A two-hour read that lingers for months. The crystal merchant chapter is the real masterpiece." },
    ],
  },
};

export const getBookExtras = (name) => bookExtras[name?.trim()] || null;

export default bookExtras;
