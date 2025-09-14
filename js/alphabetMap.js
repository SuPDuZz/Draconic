const alphabetMap = [
  //row 0
  { // 0
    name: 'toru',
    row: '0', column: '0',
    text: 'toru, pronounced /t\u032Aoru/ is represented with a "t" in the romanized way of writing. The symbol makes the sound /t\u032A/ when spoken.',
    allophones: '/t\u032A\u031A/ if placed word-finally or before obstruent.',
  },
  { // 1
    name: 'cáll',
    row: '0', column: '1',    
    text: 'cáll, pronounced /t\u0361s\u0320\u0251\u0324\u02c1\u026C/ is represented with a "c" in the romanized way of writing. The symbol makes the sound /t\u0361s\u0320/ when spoken.',
    allophones: '/t\u0361\u0283/ if placed before "i" or "i\u0305".',
  },
  { // 2
    name: 'kû',
    row: '0', column: '2',    
    text: 'kû, pronounced /ku\u0324\u02c1\u02d0/ is represented with a "k" in the romanized way of writing. The symbol makes the sound /k/ when spoken.',
    allophones: '/c/ if placed before "i" or "i\u0305"; /g\u0325/ if intervocalically; /k\u031a/ if placed word-finally or before obstruent.',
  },
  { // 3
    name: 'qath',
    row: '0', column: '3',
    text: 'qath, pronounced /q\u0251\u03b8/ is represented with a "q" in the romanized way of writing. The symbol makes the sound /q/ when spoken.',
    allophones: '/\u0262\u0325/ if intervocalically; /q\u031a/ if placed word-finally or before obstruent.',
  },
  { // 4
    name: 'q\u0307os',
    row: '0', column: '4',    
    text: 'q\u0307os, pronounced /\u02a1os\u0320/ is represented with a "q\u0307" in the romanized way of writing. The symbol makes the sound /\u02a1/ when spoken. \nIf you struggle while pronouncing this, try looking up aryepiglottic folds, and mess around with how to contract them.',
    allophones: '/\u02a1\u02d8/ if intervocalically; /\u02a1\u031a/ if placed word-finally or before obstruent.',
  },
  { // 5
    name: 'ax',
    row: '0', column: '5',    
    text: 'ax, pronounced /\u0251x/ is represented with an "´" in the romanized way of writing. The symbol makes the sound /\u0294/ when spoken.',
    allophones: '/\u0294\u031e/ if intervocalically; /\u0294\u031a/ if placed word-finally or before obstruent.',
  },

  //row 1
  { // 6
    name: 'tro\u0305',
    row: '1', column: '0',
    text: 'tro\u0305, pronounced /t\u032Aro\u02d0/ is represented with "tr" in the romanized way of writing. The symbol makes the sound /t\u032Ar/ when spoken.',
    allophones: '/t\u032Ar\u0325/ if placed before obstruent',
  },
  { // 7
    name: 'se\u0305l',
    row: '1', column: '1',
    text: 'se\u0305l, pronounced /s\u0320e\u0305l\u032A/ is represented with an "s" in the romanized way of writing. The symbol makes the sound /s\u0320/ when spoken.',
    allophones: '/\u0283/ if placed before "i" or "i\u0305".',
  },
  { // 8
    name: 'kx\u00e6\u014b',
    row: '1', column: '2',    
    text: 'kx\u00e6\u014b, pronounced /k\u0361xa\u014b/ is represented with "kx" in the romanized way of writing. The symbol makes the sound /k\u0361x/ when spoken.',
    allophones: '/c\u0361\u00e7/ if placed before "i" or "i\u0305".',
  },
  { // 9
    name: 'q\u03c7e\u0305',
    row: '1', column: '3',
    text: 'q\u03c7e\u0305, pronounced /q\u0361\u03c7e\u02d0/ is represented with "q\u03c7" in the romanized way of writing. The symbol makes the sound /q\u0361\u03c7/ when spoken.',
    allophones: 'none',
  },
  { // 10
    name: 'q\u0127án',
    row: '1', column: '4',    
    text: 'q\u0127án, pronounced /q\u02c1\u02b0\u0251\u0324\u02c1n\u0325/ is represented with "q\u0127" in the romanized way of writing. The symbol makes the sound /q\u02c1\u02b0/ when spoken by a human or non firebreathing creature, as \u0127 is just an h while breathing fire, so a dragon would just breath fire and say /qh/.',
    allophones: 'none',
  },
  { // 11
    name: 'q\u0307\u0127ón',
    row: '1', column: '5',    
    text: 'q\u0307\u0127ón, pronounced /\u02a1\u02c1\u02b0o\u02c1\u02b0n\u0325/ is represented with "q\u0307\u0127" in the romanized way of writing. The symbol makes the sound /\u02a1\u02c1\u02b0/ when spoken by a human or non firebreathing creature, as \u0127 is just an h while breathing fire, so a dragon would just breath fire and say /\u02a1h/.',
    allophones: 'none',
  },  

  //row 2
  { // 12
    name: 'od',
    row: '2', column: '0',
    text: 'od, pronounced /o\u00f0/ is represented with a "d" in the romanized way of writing. The symbol makes the sound /\u00f0/ when spoken.',
    allophones: 'none',
  },
  { // 13
    name: 'e\u0305z',
    row: '2', column: '1',
    text: 'e\u0305z, pronounced /e\u02d0z\u0320/ is represented with a "z" in the romanized way of writing. The Symbol makes the sound /z\u0320/ when spoken.',
    allophones: '/\u0292/ if placed before "i" or "i\u0305".',
  },
  { // 14
    name: 'a\u0305g',
    row: '2', column: '2',    
    text: 'a\u0305g, pronounced /\u0251\u02d0\u0263/ is represented with a "g" in the romanized way of writing. The Symbol makes the sound /\u0263/ when spoken.',
    allophones: '/\u029d/ if placed before "i" or "i\u0305".',
  },
  { // 15
    name: 'fe',
    row: '2', column: '3',
    text: 'fe, pronounced /\u0278e/ is represented with an "f" in the romanized way of writing. The Symbol makes the sound /\u0278/ when spoken.',
    allophones: '/f/ when adjecent to "th"; /\u03b2/ if intervocalically or adjecent to z, g; /v/ when adjecent to d.',
  },
  { // 16
    name: 'thyn',
    row: '2', column: '4',
    text: 'thyn, pronounced /\u03b8\u0259n\u0325/ is represented with "th" in the romanized way of writing. The Symbol makes the sound /\u03b8/ when spoken.',
    allophones: 'none',
  },
  { // 17
    name: 'lli\u0305',
    row: '2', column: '5',    
    text: 'lli\u0305, pronounced /\u026ci\u02d0/ is represented with "ll" in the romanized way of writing. The symbol makes the sound /\u026c/ when spoken.',
    allophones: '/\u026e/ if intervocalically',
  },

  //row 3
  { // 18
    name: 'x\u00e6',
    row: '3', column: '0',
    text: 'x\u00e6, pronounced /xa/ is represented with a "x" in the romanized way of writing. The symbol makes the sound /x/ when spoken.',
    allophones: '/\u00e7/ if placed before "i" or "i\u0305',
  },
  { // 19
    name: '\u03c7y',
    row: '3', column: '1',
    text: '\u03c7y, pronounced /\u03c7\u0259/ is represented with a "\u03c7" in the romanized way of writing. The Symbol makes the sound /\u03c7/ when spoken.',
    allophones: 'none',
  },
  { // 20
    name: 'har',
    row: '3', column: '2',    
    text: 'har, pronounced /h\u0251r/ is represented with a "h" in the romanized way of writing. The Symbol makes the sound /h/ when spoken.',
    allophones: 'none',
  },
  { // 21
    name: '\u03c7\u0127áth',
    row: '3', column: '3',
    text: '\u03c7\u0127áth, pronounced /\u03c7\u02c1\u02b0\u0251\u0324\u02c1\u03b8/ is represented with "\u03c7\u0127" in the romanized way of writing. The Symbol makes the sound /\u03c7\u02c1\u02b0/ when spoken.',
    allophones: 'none',
  },
  { // 22
    name: '\u0127â',
    row: '3', column: '4',
    text: '\u0127â, pronounced /\u0127\u0251\u0324\u02c1\u02d0/ is represented with "\u0127" in the romanized way of writing. The Symbol makes the sound /\u0127/ when spoken.',
    allophones: 'none',
  },
  { // 23
    name: 'rox',
    row: '3', column: '5',    
    text: 'rox, pronounced /r\u0325ox/ is represented with an "r" in the romanized way of writing. The symbol makes the sound /r/ or /\u027e/ when spoken.',
    allophones: '/r\u0325/ if placed word-initially or before voiceless obstruent.',
  }, 

  //row 4
  { // 24
    name: 'lel',
    row: '4', column: '0',
    text: 'lel, pronounced /l\u0325el\u032A/ is represented with a "l" in the romanized way of writing. The symbol makes the sound /l\u032A/ when spoken.',
    allophones: '/l\u0325/ if placed word-initially or before voiceless obstruent.',
  },
  { // 25
    name: 'e\u03c7',
    row: '4', column: '1',
    text: 'e\u03c7, pronounced /e\u03c7/ is represented with an "e" in the romanized way of writing. The Symbol makes the sound /e/ when spoken.',
    allophones: 'none',
  },
  { // 26
    name: '\u00e6fu',
    row: '4', column: '2',    
    text: '\u00e6fu, pronounced /a\u0278u/ is represented with "\u00e6" in the romanized way of writing. The Symbol makes the sound /a/ when spoken.',
    allophones: 'none',
  },
  { // 27
    name: 'y´',
    row: '4', column: '3',
    text: 'y´, pronounced /\u0259\u0294/ is represented with a "y" in the romanized way of writing. The Symbol makes the sound /\u0259/ when spoken.',
    allophones: 'none',
  },
  { // 28
    name: 'a´',
    row: '4', column: '4',
    text: 'a´, pronounced /\u0251\u0294/ is represented with an "a" in the romanized way of writing. The Symbol makes the sound /\u0251/ when spoken.',
    allophones: 'none',
  },
  { // 29
    name: 'o´',
    row: '4', column: '5',    
    text: 'o´, pronounced /o\u0294/ is represented with an "o" in the romanized way of writing. The symbol makes the sound /o/ when spoken.',
    allophones: 'none',
  }, 

  //row 5
  { // 30
    name: 'u´',
    row: '5', column: '0',
    text: 'u´, pronounced /u\u0294/ is represented with a "u" in the romanized way of writing. The symbol makes the sound /u/ when spoken.',
    allophones: 'none',
  },
  { // 31
    name: 'i´',
    row: '5', column: '1',
    text: 'i´, pronounced /i\u0294/ is represented with an "i" in the romanized way of writing. The Symbol makes the sound /i/ when spoken.',
    allophones: 'none',
  },
  { // 32
    name: 'e\u0305´',
    row: '5', column: '2',    
    text: 'e\u0305´, pronounced /e\u02d0\u0294/ is represented with "e\u0305" in the romanized way of writing. The Symbol makes the sound /e\u02d0/ when spoken.',
    allophones: 'none',
  },
  { // 33
    name: 'a\u0305´',
    row: '5', column: '3',
    text: 'a\u0305´, pronounced /\u0251\u02d0\u0294/ is represented with a "a" in the romanized way of writing. The Symbol makes the sound /\u0251\u02d0/ when spoken.',
    allophones: 'none',
  },
  { // 34
    name: 'o\u0305´',
    row: '5', column: '4',
    text: 'o\u0305´, pronounced /o\u02d0\u0294/ is represented with an "o\u0305" in the romanized way of writing. The Symbol makes the sound /o\u02d0/ when spoken.',
    allophones: 'none',
  },
  { // 35
    name: 'u\u0305´',
    row: '5', column: '5',    
    text: 'u\u0305´, pronounced /u\u02d0\u0294/ is represented with an "u\u0305" in the romanized way of writing. The symbol makes the sound /o/ when spoken.',
    allophones: 'none',
  }, 

  //row 6
  { // 36
    name: 'i\u0305´',
    row: '6', column: '0',
    text: 'i\u0305´, pronounced /i\u02d0\u0294/ is represented with a "i\u0305" in the romanized way of writing. The symbol makes the sound /i\u02d0/ when spoken.',
    allophones: 'none',
  },
  { // 37
    name: 'má',
    row: '6', column: '1',
    text: 'má, pronounced /m\u0325\u0251\u0324\u02c1/ is represented with an "m" in the romanized way of writing. The Symbol makes the sound /m/ when spoken.',
    allophones: '/m\u0325/ if placed word-initially or before voiceless obstruent.',
  },
  { // 38
    name: 'na\u03c7',
    row: '6', column: '2',    
    text: 'na\u03c7, pronounced /n\u0325\u0251\u03c7/ is represented with "n" in the romanized way of writing. The Symbol makes the sound /n/ when spoken.',
    allophones: '/n\u0325/ if placed word-initially, word-finally or before voicelss obstruent; /n\u032a/ before dentals; /\u014b/ before velars and uvulars.',
  },
  { // 39
    name: 'y\u014b',
    row: '6', column: '3',
    text: 'y\u014b, pronounced /\u0259\u014b/ is represented with a "\u014b" in the romanized way of writing. The Symbol makes the sound /\u014b/ when spoken.',
    allophones: '/\u014b\u0325/ before voiceless velars; /\u0274\u0325/ before uvulars',
  },
  { // 40
    name: '',
    row: '6', column: '4',
    text: '',
    allophones: 'none',
  },
  { // 41
    name: 'more',
    row: '6', column: '5',    
    text: 'more',
    allophones: 'none',
  }, 
];