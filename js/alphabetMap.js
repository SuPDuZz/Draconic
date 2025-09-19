const mainText = 'pronounced {name_ipa}, represented with a "{letter_rom}" in the romanized way of writing, and "{letter}" in normal. The symbol makes the sound {letter_ipa} when spoken.'
const pyricHText = 'Letters containig /ħ/ are pronounced by dragon using /h/ and breathing out fire. Humans can use a lighter or stick to the /ħ/'
const pyricVowelText = 'Some letters following by q̇ħóll are considered pyric, and pronounced by dragon breathing out fire. Humans can use a lighter or stick to alternative sound (see first allophone).'
const soundPath = "../assets/sound/symbol-"

const allophones = {
  "before i": 'if placed before "i" or "ī"',
  "before obs": "if placed before obstruent",
  "word-final before obs": "if placed word-finally or before obstruent",
  "intervoc": "if intervocalically",
  "pyric": "if placed before q̇ħóll"
}

window.alphabetMap = [
  [ //row 0
    { // 0
      name: "toru", name_ipa: "/t̪oru/",
      letter: "t", letter_rom: ["t"], letter_ipa: "/t̪/", letter_glyph: "\uE000",
      text: mainText,
      allophones: {
         "/t̪̚/": allophones["word-final before obs"],
      },
      sound: soundPath+"0-0.mp3"
    },
    { // 1
      name: 'cáll',  name_ipa: "/t͡s̠ɑ̤ˁɬ/",
      letter: "c", letter_rom: ["c"], letter_ipa: "/t͡s̠/", letter_glyph: "\uE001",
      text: mainText,
      allophones: {
        "/t͡ʃ/": allophones["before i"],
      },
      sound: soundPath+"0-1.mp3"
    },
    { // 2
      name: 'kû',  name_ipa: "/kṳˁː/",
      letter: "k", letter_rom: ["k"], letter_ipa: "/k/", letter_glyph: "\uE002",
      text: mainText,
      allophones: {
        "/c/": allophones["before i"],
        "/g̥/": allophones["intervoc"],
        "/k̚/": allophones["word-final before obs"],
      },
      sound: soundPath+"0-2.mp3"
    },
    { // 3
      name: 'qath',  name_ipa: "/qɑθ/",
      letter: "q", letter_rom: ["q"], letter_ipa: "/q/", letter_glyph: "\uE003",
      text: mainText,
      allophones: {
        "/ɢ̥/": allophones["intervoc"],
        "/q̚/": allophones["word-final before obs"]
      },
      sound: soundPath+"0-3.mp3"
    },
    { // 4
      name: 'q̇os',  name_ipa: "/ʡos̠/",
      letter: "q̇", letter_rom: ["Q"], letter_ipa: "/ʡ/", letter_glyph: "\uE004",
      text: mainText+" If you struggle while pronouncing this, try looking up aryepiglottic folds, and mess around with how to contract them.",
      allophones: {
        "/ʡ̆/" :allophones["intervoc"],
        "/ʡ̚/": allophones["word-final before obs"]
      },
      sound: soundPath+"0-4.mp3"
    },
    { // 5
      name: 'ax',  name_ipa: "/ax/",
      letter: "´", letter_rom: ["'", "`"], letter_ipa: "/ʔ/", letter_glyph: "\uE005",
      text: mainText,
      allophones: {
        "/ʔ̞/": allophones["intervoc"],
        "/ʔ̚/": allophones["word-final before obs"]
      },
      sound: soundPath+"0-5.mp3"
    },
  ],
  [ //row 1
    { // 6
      name: 'trō',  name_ipa: "/t̪roː/",
      letter: "tr", letter_rom: ["tr"], letter_ipa: "/t̪r/", letter_glyph: "\uE006",
      text: mainText,
      allophones: {"/t̪r/": allophones["before obs"]},
      sound: soundPath+"1-0.mp3"
    },
    { // 7
      name: 'sēl',  name_ipa: "/s̠ēl̪/",
      letter: "s", letter_rom: ["s"], letter_ipa: "/s̠/", letter_glyph: "\uE007",
      text: mainText,
      allophones: {"/ʃ/": allophones["before i"]},
      sound: soundPath+"1-1.mp3"
    },
    { // 8
      name: 'kxæŋ',  name_ipa: "/k͡xaŋ/",
      letter: "kx", letter_rom: ["kx"], letter_ipa: "/k͡x/", letter_glyph: "\uE008",
      text: mainText,
      allophones: {"/c͡ç/": allophones["before i"]},
      sound: soundPath+"1-2.mp3"
    },
    { // 9
      name: 'qχē',  name_ipa: "/q͡χeː/",
      letter: "qχ", letter_rom: ["qX"], letter_ipa: "/q͡χ/", letter_glyph: "\uE009",
      text: mainText,
      allophones: {},
      sound: soundPath+"1-3.mp3"
    },
    { // 10
      name: 'qħán',  name_ipa: "/qˤʰɑ̤ˤn̥/",
      letter: "qħ", letter_rom: ["qH"], letter_ipa: "/qˤʰ/", letter_glyph: "\uE00a",
      text: mainText + " " + pyricHText,
      table_prop: {"xoffset": -10},
      allophones: {},
      sound: soundPath+"1-4.mp3"
    },
    { // 11
      name: 'q̇ħón',  name_ipa: "/ʡˤʰo̤ˤn̥/",
      letter: "q̇ħ", letter_rom: ["QH"], letter_ipa: "/ʡˤʰ/", letter_glyph: "\uE00b",
      table_prop: {"xoffset": 3},
      text: mainText + " " + pyricHText,
      allophones: {},
      sound: soundPath+"1-5.mp3"
    },
  ],  
  [
    //row 2
    { // 12
      name: 'od',  name_ipa: "/oð/",
      letter: "d", letter_rom: ["d"], letter_ipa: "/ð/", letter_glyph: "\uE00c",
      text: mainText,
      allophones: {},
      sound: soundPath+"2-0.mp3"
    },
    { // 13
      name: 'ēz',  name_ipa: "/eːz̠/",
      letter: "z", letter_rom: ["z"], letter_ipa: "/z̠/", letter_glyph: "\uE00d",
      text: mainText,
      allophones: {"/ʒ/": allophones["before i"]},
      sound: soundPath+"2-1.mp3"
    },
    { // 14
      name: 'āg',  name_ipa: "/ɑːɣ/",
      letter: "g", letter_rom: ["g"], letter_ipa: "/ɣ/", letter_glyph: "\uE00e",   
      text: mainText,
      allophones: {"/ʝ/": allophones["before i"]},
      sound: soundPath+"2-2.mp3"
    },
    { // 15
      name: 'fe',  name_ipa: "/ɸe/",
      letter: "f", letter_rom: ["f"], letter_ipa: "/ɸ/", letter_glyph: "\uE00f",
      text: mainText,
      allophones: {
        "/f/": 'when adjecent to "th"', 
        "/β/": "if intervocalically or adjecent to z, g", 
        "/v/": "when adjecent to d"
      },
      sound: soundPath+"2-3.mp3"
    },
    { // 16
      name: 'thyn',  name_ipa: "/θən̥/",
      letter: "th", letter_rom: ["th"], letter_ipa: "/θ/", letter_glyph: "\uE010",
      text: mainText,
      allophones: {},
      sound: soundPath+"2-4.mp3"
    },
    { // 17
      name: 'llī',  name_ipa: "/ɬiː/",
      letter: "ll", letter_rom: ["ll"], letter_ipa: "/ɬ/", letter_glyph: "\uE011",
      text: mainText,
      allophones: {"/ɮ/": allophones["intervoc"]},
      sound: soundPath+"2-5.mp3"
    },
  ],
  [
    //row 3
    { // 18
      name: 'xæ',  name_ipa: "/xa/",
      letter: "x", letter_rom: ["x"], letter_ipa: "/x/", letter_glyph: "\uE012",
      text: mainText,
      allophones: {"/ç/": allophones["before i"]},
      sound: soundPath+"3-0.mp3"
    },
    { // 19
      name: 'χy',  name_ipa: "/χə/",
      letter: "χ", letter_rom: ["X"], letter_ipa: "/χ/", letter_glyph: "\uE013",
      text: mainText,
      allophones: {},
      sound: soundPath+"3-1.mp3"
    },
    { // 20
      name: 'har',  name_ipa: "/hɑr/",
      letter: "h", letter_rom: ["h"], letter_ipa: "/h/", letter_glyph: "\uE014",
      text: mainText,
      allophones: {},
      sound: soundPath+"3-2.mp3"
    },
    { // 21
      name: 'χħáth',  name_ipa: "/χˤʰɑ̤ˤθ/",
      letter: "χħ", letter_rom: ["XH"], letter_ipa: "/χˤʰ/", letter_glyph: "\uE015",
      table_prop: {"size": 0.9, "xoffset": -22},
      text: mainText,
      allophones: {},
      sound: soundPath+"3-3.mp3"
    },
    { // 22
      name: 'ħâ',  name_ipa: "/ħɑ̤ˤː/",
      letter: "ħ", letter_rom: ["H"], letter_ipa: "/ħ/", letter_glyph: "\uE016",
      text: mainText,
      allophones: {},
      sound: soundPath+"3-4.mp3"
    },
    { // 23
      name: 'rox',  name_ipa: "/r̥ox/",
      letter: "r", letter_rom: ["r"], letter_ipa: "/ɾ/", letter_glyph: "\uE017",
      text: mainText,
      allophones: {"/r̥/": "if placed word-initially or before voiceless obstruent"},
      sound: soundPath+"3-5.mp3"
    }, 
  ],
  [
    //row 4
    { // 24
      name: 'lel',  name_ipa: "/l̥el̪/",
      letter: "l", letter_rom: ["l"], letter_ipa: "/l̪/", letter_glyph: "\uE018",
      text: mainText,
      allophones: {"/l̥/": "if placed word-initially or before voiceless obstruent"},
      sound: soundPath+"4-0.mp3"
    },
    { // 25
      name: 'eχ',  name_ipa: "/eχ/",
      letter: "e", letter_rom: ["e"], letter_ipa: "/e/", letter_glyph: "\uE019",
      text: mainText,
      allophones: {},
      sound: soundPath+"4-1.mp3"
    },
    { // 26
      name: 'æfu',  name_ipa: "/aɸu/",
      letter: "æ", letter_rom: ["ae"], letter_ipa: "/a/", letter_glyph: "\uE01a",
      text: mainText,
      allophones: {},
      sound: soundPath+"4-2.mp3"
    },
    { // 27
      name: 'y´',  name_ipa: "/əʔ/",
      letter: "y", letter_rom: ["y"], letter_ipa: "/ə/", letter_glyph: "\uE01b",
      text: mainText,
      allophones: {},
      sound: soundPath+"4-3.mp3"
    },
    { // 28
      name: 'a´',  name_ipa: "/ɑʔ/",
      letter: "a", letter_rom: ["a"], letter_ipa: "/ɑ/", letter_glyph: "\uE01c",
      text: mainText,
      allophones: {"/ɑ̤ˤ/": allophones["pyric"]},
      sound: soundPath+"4-4.mp3"
    },
    { // 29
      name: 'o´',  name_ipa: "/oʔ/",
      letter: "o", letter_rom: ["o"], letter_ipa: "/o/", letter_glyph: "\uE01d",
      text: mainText,
      table_prop: {"size": 0.9, "xoffset": -22},
      allophones: {"/o̤ˤ/": allophones["pyric"]},
      sound: soundPath+"4-5.mp3"
    }, 
  ],
  [
    //row 5
    { // 30
      name: 'u´',  name_ipa: "/uʔ/",
      letter: "u", letter_rom: ["u"], letter_ipa: "/u/", letter_glyph: "\uE01e",
      text: mainText,
      allophones: {"/ṳˤ/": allophones["pyric"]},
      sound: soundPath+"5-0.mp3"
    },
    { // 31
      name: 'i´',  name_ipa: "/iʔ/",
      letter: "i", letter_rom: ["i"], letter_ipa: "/i/", letter_glyph: "\uE01f",
      text: mainText,
      allophones: {},
      sound: soundPath+"5-1.mp3"
    },
    { // 32
      name: 'ē´',  name_ipa: "/eːʔ/",
      letter: "ē", letter_rom: ["ee"], letter_ipa: "/eː/", letter_glyph: "\uE020",
      text: mainText,
      allophones: {},
      sound: soundPath+"5-2.mp3"
    },
    { // 33
      name: 'ā´',  name_ipa: "/ɑːʔ/",
      letter: "ā", letter_rom: ["aa"], letter_ipa: "/ɑː/", letter_glyph: "\uE021",
      text: mainText,
      allophones: {"/ɑ̤ˤː/": allophones["pyric"]},
      sound: soundPath+"5-3.mp3"
    },
    { // 34
      name: 'ō´',  name_ipa: "/oːʔ/",
      letter: "ō", letter_rom: ["oo"], letter_ipa: "/oː/", letter_glyph: "\uE022",
      text: mainText,
      allophones: {"/o̤ˤː/": allophones["pyric"]},
      sound: soundPath+"5-4.mp3"
    },
    { // 35
      name: 'ū´',  name_ipa: "/uːʔ/",
      letter: "ū", letter_rom: ["uu"], letter_ipa: "/uː/", letter_glyph: "\uE023",
      text: mainText,
      table_prop: {"size": 0.9, "xoffset": -14},
      allophones: {"/ṳˁː/": allophones["pyric"]},
      sound: soundPath+"5-5.mp3"
    }, 
  ],
  [
    //row 6
    { // 36
      name: 'ī´',  name_ipa: "/iːʔ/",
      letter: "ī", letter_rom: ["ii"], letter_ipa: "/iː/", letter_glyph: "\uE024",
      text: mainText,
      table_prop: {"xoffset": -12},
      allophones: {},
      sound: soundPath+"6-0.mp3"
    },
    { // 37
      name: 'má',  name_ipa: "/m̥ɑ̤ˤ/",
      letter: "m", letter_rom: ["m"], letter_ipa: "/m̥/", letter_glyph: "\uE025",
      text: mainText,
      allophones: {"/m̥/": "if placed word-initially or before voiceless obstruent"},
      sound: soundPath+"6-1.mp3"
    },
    { // 38
      name: 'naχ',  name_ipa: "/n̥ɑχ/",
      letter: "n", letter_rom: ["n"], letter_ipa: "/n/", letter_glyph: "\uE026",
      text: mainText,
      allophones: {
        "/n̥/": "if placed word-initially, word-finally or before voicelss obstruent",
        "/n̪/": "before dentals",
        "/ŋ/": "before velars and uvulars"
      },
      sound: soundPath+"6-2.mp3"
    },
    { // 39
      name: 'yŋ',  name_ipa: "/əŋ/",
      letter: "ŋ", letter_rom: ["ng"], letter_ipa: "/ŋ/", letter_glyph: "\uE027",
      text: mainText,
      allophones: {
        "/ŋ̥/": "before voiceless velars",
        "/ɴ̥/": "before uvulars"
      },
      sound: soundPath+"6-3.mp3"
    },
    { // 40
      name: 'q̇ħóll',  name_ipa: "/ʡho̤ˤɬ/",
      letter: "", letter_rom: [""], letter_ipa: "", letter_glyph: "\uE028",
      text: "{name} pronounced {name_ipa} is the symbol representing pyrification it does not do anything in and of its own. It however changes vowels to pyric vowels when placed after one. Pyric letters pronounced are by dragons breathing out fire, humans can use a ligher or stick to alternative sound (see allophones).",
      table_prop: {"size": 0.85, "yoffset": -7},
      allophones: {
        'a pronounced /ɑ/': 'á pronounced /ɑ̤ˤ/',
        'o pronounced /o/': 'ó pronounced /o̤ˤ/',
        'u pronounced /u/': 'ú pronounced /ṳˤ/',
        'ā pronounced /ɑː/': 'â pronounced /ɑ̤ˤː/',
        'ō pronounced /oː/': 'ô pronounced /o̤ˤː/',
        'ū pronounced /uː/': 'û pronounced /ṳˁː/'
      },
      sound: soundPath+"6-4.mp3"
    },
    { // 41
      name: ''
    }, 
  ]
];

function get_by_id() {}
function get_by_name() {}
function get_by_rom() {}
function get_by_letter() {}
function get_by_font() {}