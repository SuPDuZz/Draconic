const alphabetMap = [
  //row 0
  { // 0
    name: 'toru',
    row: '0', column: '0',
    text: 'toru, pronounced /t̪oru/ is represented with a "t" in the romanized way of writing. The symbol makes the sound /t̪/ when spoken.',
    allophones: '/t̪̚/ if placed word-finally or before obstruent.',
  },
  { // 1
    name: 'cáll',
    row: '0', column: '1',    
    text: 'cáll, pronounced /t͡s̠ɑ̤ˁɬ/ is represented with a "c" in the romanized way of writing. The symbol makes the sound /t͡s̠/ when spoken.',
    allophones: '/t͡ʃ/ if placed before "i" or "ī".',
  },
  { // 2
    name: 'kû',
    row: '0', column: '2',    
    text: 'kû, pronounced /kṳˁː/ is represented with a "k" in the romanized way of writing. The symbol makes the sound /k/ when spoken.',
    allophones: '/c/ if placed before "i" or "ī"; /g̥/ if intervocalically; /k̚/ if placed word-finally or before obstruent.',
  },
  { // 3
    name: 'qath',
    row: '0', column: '3',
    text: 'qath, pronounced /qɑθ/ is represented with a "q" in the romanized way of writing. The symbol makes the sound /q/ when spoken.',
    allophones: '/ɢ̥/ if intervocalically; /q̚/ if placed word-finally or before obstruent.',
  },
  { // 4
    name: 'q̇os',
    row: '0', column: '4',    
    text: 'q̇os, pronounced /ʡos̠/ is represented with a "q̇" in the romanized way of writing. The symbol makes the sound /ʡ/ when spoken. If you struggle while pronouncing this, try looking up aryepiglottic folds, and mess around with how to contract them.',
    allophones: '/ʡ̆/ if intervocalically; /ʡ̚/ if placed word-finally or before obstruent.',
  },
  { // 5
    name: 'ax',
    row: '0', column: '5',    
    text: 'ax, pronounced /ɑx/ is represented with an "´" in the romanized way of writing. The symbol makes the sound /ʔ/ when spoken.',
    allophones: '/ʔ̞/ if intervocalically; /ʔ̚/ if placed word-finally or before obstruent.',
  },

  //row 1
  { // 6
    name: 'trō',
    row: '1', column: '0',
    text: 'trō, pronounced /t̪roː/ is represented with "tr" in the romanized way of writing. The symbol makes the sound /t̪r/ when spoken.',
    allophones: '/t̪r/ if placed before obstruent',
  },
  { // 7
    name: 'sēl',
    row: '1', column: '1',
    text: 'sēl, pronounced /s̠ēl̪/ is represented with an "s" in the romanized way of writing. The symbol makes the sound /s̠/ when spoken.',
    allophones: '/ʃ/ if placed before "i" or "ī".',
  },
  { // 8
    name: 'kxæŋ',
    row: '1', column: '2',    
    text: 'kxæŋ, pronounced /k͡xaŋ/ is represented with "kx" in the romanized way of writing. The symbol makes the sound /k͡x/ when spoken.',
    allophones: '/c͡ç/ if placed before "i" or "ī".',
  },
  { // 9
    name: 'qχē',
    row: '1', column: '3',
    text: 'qχē, pronounced /q͡χeː/ is represented with "qχ" in the romanized way of writing. The symbol makes the sound /q͡χ/ when spoken.',
    allophones: 'none',
  },
  { // 10
    name: 'qħán',
    row: '1', column: '4',    
    text: 'qħán, pronounced /qˤʰɑ̤ˤn̥/ is represented with "qħ" in the romanized way of writing. The symbol makes the sound /qˤʰ/ when spoken by a human or non firebreathing creature, as ħ is just an h while breathing fire, so a dragon would just breath fire and say /qh/.',
    allophones: 'none',
  },
  { // 11
    name: 'q̇ħón',
    row: '1', column: '5',    
    text: 'q̇ħón, pronounced /ʡˤʰo̤ˤn̥/ is represented with "q̇ħ" in the romanized way of writing. The symbol makes the sound /ʡˤʰ/ when spoken by a human or non firebreathing creature, as ħ is just an h while breathing fire, so a dragon would just breath fire and say /\u02a1h/.',
    allophones: 'none',
  },  

  //row 2
  { // 12
    name: 'od',
    row: '2', column: '0',
    text: 'od, pronounced /oð/ is represented with a "d" in the romanized way of writing. The symbol makes the sound /ð/ when spoken.',
    allophones: 'none',
  },
  { // 13
    name: 'ēz',
    row: '2', column: '1',
    text: 'ēz, pronounced /eːz̠/ is represented with a "z" in the romanized way of writing. The Symbol makes the sound /z̠/ when spoken.',
    allophones: '/ʒ/ if placed before "i" or "ī".',
  },
  { // 14
    name: 'āg',
    row: '2', column: '2',    
    text: 'āg, pronounced /ɑːɣ/ is represented with a "g" in the romanized way of writing. The Symbol makes the sound /ɣ/ when spoken.',
    allophones: '/ʝ/ if placed before "i" or "ī".',
  },
  { // 15
    name: 'fe',
    row: '2', column: '3',
    text: 'fe, pronounced /ɸe/ is represented with an "f" in the romanized way of writing. The Symbol makes the sound /ɸ/ when spoken.',
    allophones: '/f/ when adjecent to "th"; /β/ if intervocalically or adjecent to z, g; /v/ when adjecent to d.',
  },
  { // 16
    name: 'thyn',
    row: '2', column: '4',
    text: 'thyn, pronounced /θən̥/ is represented with "th" in the romanized way of writing. The Symbol makes the sound /θ/ when spoken.',
    allophones: 'none',
  },
  { // 17
    name: 'llī',
    row: '2', column: '5',    
    text: 'llī, pronounced /ɬiː/ is represented with "ll" in the romanized way of writing. The symbol makes the sound /ɬ/ when spoken.',
    allophones: '/ɮ/ if intervocalically',
  },

  //row 3
  { // 18
    name: 'xæ',
    row: '3', column: '0',
    text: 'xæ, pronounced /xa/ is represented with a "x" in the romanized way of writing. The symbol makes the sound /x/ when spoken.',
    allophones: '/ç/ if placed before "i" or "ī',
  },
  { // 19
    name: 'χy',
    row: '3', column: '1',
    text: 'χy, pronounced /χə/ is represented with a "χ" in the romanized way of writing. The Symbol makes the sound /χ/ when spoken.',
    allophones: 'none',
  },
  { // 20
    name: 'har',
    row: '3', column: '2',    
    text: 'har, pronounced /hɑr/ is represented with a "h" in the romanized way of writing. The Symbol makes the sound /h/ when spoken.',
    allophones: 'none',
  },
  { // 21
    name: 'χħáth',
    row: '3', column: '3',
    text: 'χħáth, pronounced /χˤʰɑ̤ˤθ/ is represented with "χħ" in the romanized way of writing. The Symbol makes the sound /χˤʰ/ when spoken.',
    allophones: 'none',
  },
  { // 22
    name: 'ħâ',
    row: '3', column: '4',
    text: 'ħâ, pronounced /ħɑ̤ˤː/ is represented with "ħ" in the romanized way of writing. The Symbol makes the sound /ħ/ when spoken.',
    allophones: 'none',
  },
  { // 23
    name: 'rox',
    row: '3', column: '5',    
    text: 'rox, pronounced /r̥ox/ is represented with an "r" in the romanized way of writing. The symbol makes the sound /r/ or /ɾ/ when spoken.',
    allophones: '/r̥/ if placed word-initially or before voiceless obstruent.',
  }, 

  //row 4
  { // 24
    name: 'lel',
    row: '4', column: '0',
    text: 'lel, pronounced /l̥el̪/ is represented with a "l" in the romanized way of writing. The symbol makes the sound /l̪/ when spoken.',
    allophones: '/l̥/ if placed word-initially or before voiceless obstruent.',
  },
  { // 25
    name: 'eχ',
    row: '4', column: '1',
    text: 'eχ, pronounced /eχ/ is represented with an "e" in the romanized way of writing. The Symbol makes the sound /e/ when spoken.',
    allophones: 'none',
  },
  { // 26
    name: 'æfu',
    row: '4', column: '2',    
    text: 'æfu, pronounced /aɸu/ is represented with "æ" in the romanized way of writing. The Symbol makes the sound /a/ when spoken.',
    allophones: 'none',
  },
  { // 27
    name: 'y´',
    row: '4', column: '3',
    text: 'y´, pronounced /əʔ/ is represented with a "y" in the romanized way of writing. The Symbol makes the sound /ə/ when spoken.',
    allophones: 'none',
  },
  { // 28
    name: 'a´',
    row: '4', column: '4',
    text: 'a´, pronounced /ɑʔ/ is represented with an "a" in the romanized way of writing. The Symbol makes the sound /ɑ/ when spoken.',
    allophones: 'none',
  },
  { // 29
    name: 'o´',
    row: '4', column: '5',    
    text: 'o´, pronounced /oʔ/ is represented with an "o" in the romanized way of writing. The symbol makes the sound /o/ when spoken.',
    allophones: 'none',
  }, 

  //row 5
  { // 30
    name: 'u´',
    row: '5', column: '0',
    text: 'u´, pronounced /uʔ/ is represented with a "u" in the romanized way of writing. The symbol makes the sound /u/ when spoken.',
    allophones: 'none',
  },
  { // 31
    name: 'i´',
    row: '5', column: '1',
    text: 'i´, pronounced /iʔ/ is represented with an "i" in the romanized way of writing. The Symbol makes the sound /i/ when spoken.',
    allophones: 'none',
  },
  { // 32
    name: 'ē´',
    row: '5', column: '2',    
    text: 'ē´, pronounced /eːʔ/ is represented with "ē" in the romanized way of writing. The Symbol makes the sound /eː/ when spoken.',
    allophones: 'none',
  },
  { // 33
    name: 'ā´',
    row: '5', column: '3',
    text: 'ā´, pronounced /ɑːʔ/ is represented with a "a" in the romanized way of writing. The Symbol makes the sound /ɑː/ when spoken.',
    allophones: 'none',
  },
  { // 34
    name: 'ō´',
    row: '5', column: '4',
    text: 'ō´, pronounced /oːʔ/ is represented with an "ō" in the romanized way of writing. The Symbol makes the sound /oː/ when spoken.',
    allophones: 'none',
  },
  { // 35
    name: 'ū´',
    row: '5', column: '5',    
    text: 'ū´, pronounced /uːʔ/ is represented with an "ū" in the romanized way of writing. The symbol makes the sound /uː/ when spoken.',
    allophones: 'none',
  }, 

  //row 6
  { // 36
    name: 'ī´',
    row: '6', column: '0',
    text: 'ī´, pronounced /iːʔ/ is represented with a "ī" in the romanized way of writing. The symbol makes the sound /iː/ when spoken.',
    allophones: 'none',
  },
  { // 37
    name: 'má',
    row: '6', column: '1',
    text: 'má, pronounced /m̥ɑ̤ˤ/ is represented with an "m" in the romanized way of writing. The Symbol makes the sound /m/ when spoken.',
    allophones: '/m̥/ if placed word-initially or before voiceless obstruent.',
  },
  { // 38
    name: 'naχ',
    row: '6', column: '2',    
    text: 'naχ, pronounced /n̥ɑχ/ is represented with "n" in the romanized way of writing. The Symbol makes the sound /n/ when spoken.',
    allophones: '/n̥/ if placed word-initially, word-finally or before voicelss obstruent; /n̪/ before dentals; /ŋ/ before velars and uvulars.',
  },
  { // 39
    name: 'yŋ',
    row: '6', column: '3',
    text: 'yŋ, pronounced /əŋ/ is represented with a "ŋ" in the romanized way of writing. The Symbol makes the sound /ŋ/ when spoken.',
    allophones: '/ŋ̥/ before voiceless velars; /ɴ̥/ before uvulars',
  },
  { // 40
    name: 'q̇ħóll',
    row: '6', column: '4',
    text: 'q̇ħóll pronounced /ʡho̤ˤɬ/ is the symbol representing pyrification it does not do anything in and of its own. It however changes vowels to pyric vowels when placed after one.',
    allophones: [
      {letter: 'a pronounced /ɑ/', change: 'á pronounced /ɑ̤ˤ/',},
      {letter: 'o pronounced /o/', change: 'ó pronounced /o̤ˤ/',},
      {letter: 'u pronounced /u/', change: 'ú pronounced /ṳˤ/',},
      {letter: 'ā pronounced /ɑː/', change: 'â pronounced /ɑ̤ˤː/',},
      {letter: 'ō pronounced /oː/', change: 'ô pronounced /o̤ˤː/',},
      {letter: 'ū pronounced /uː/', change: 'û pronounced /ṳˁː/',},
    ],
  },
  { // 41
    name: 'more',
    row: '6', column: '5',    
    text: 'more',
    allophones: 'none',
  }, 
];