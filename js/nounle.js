let nounsMap = {1: {}, 2: {}, 3: {}, 4:{}};
// declesion: {
//  noun: {gender:meaning pairs}

gednder_overrides = {
    "animates": ["e", "r", "mon", "i"],
    "animate": ["e", "r", "mon", "i"], // AAAAAAAAAA INCONSISTANT
    "inanimates": ["mag", "mun", "a"],
    "inanimate": ["mag", "mun", "a"],
    "all": ["e", "r", "mon", "i", "mag", "mun", "a"]
}

fetch("../assets/nouns.xlsx") //i dont fucking know how this works, glory to chatgpt
  .then(res => res.arrayBuffer())
  .then(buffer => {
    const workbook = XLSX.read(buffer, { type: 'array' });
    const sheetName = workbook.SheetNames[0];
    const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1 });

    rows.forEach(row => {
      if (!row[0]) return;

      const match = row[0].match(/^(.+?)\s*(?:\((\d)\))?$/);
      if (!match) return;

      const word = match[1].trim();
      const nGroup = match[2] ? parseInt(match[2]) : 1;

      let genderPart = row[2] ? row[2].trim() : row[1] ? row[1].trim() : '';
      let genders = {};

      if (genderPart) {
        genderPart.split(/\s*-\s*/).forEach(part => {
          const m = part.match(/\(([^)]+)\)\s*(.+)/);
          if (m) {
            let codes = m[1].split(",").map(c => c.trim().replace(/\./g,''));
            const description = m[2].trim();
            // fuckyou chatgpt stop commenthing thinsgh
            // Expand categories but store only real gender codes
            codes.forEach(c => {
              if (gednder_overrides[c]) {
                // expand to actual genders
                gednder_overrides[c].forEach(realCode => {
                  genders[realCode] = description;
                });
              } else {
                // single actual gender code
                genders[c] = description;
              }
            });
          }
        });
      }

      if (Object.keys(genders).length) {
        nounsMap[nGroup][word] = genders;
      }
    });

    testinit();
  })
  .catch(console.error);


noun_forms = { // im indeed crazy porting all o this from exel to js
    "e": {
        "singular": {1: "ēn", 2: "æn", 3: "ēn", 4: "ħán"},
        "dual":     {1: "(ē)χen", 2: "(y)χen", 3: "(o)χen", 4: "ħóχħon"},
        "plural":   {1: "illyn", 2: "ān", 3: "ē'yn", 4: "q̇yn"}
    },
    "r": {
        "singular": {1: "ēf", 2: "(a)xef", 3: "lef", 4: "lef"},
        "dual":     {1: "eχef", 2: "hyf", 3: "(o)χef", 4: "(o)χef"},
        "plural":   {1: "yf", 2: "hyf", 3: "'yf", 4: "'yf"}
    },
    "mon": {
        "singular": {1: "ô", 2: "ô", 3: "ô", 4: "ô"},
        "dual":     {1: "yħq̇ô", 2: "q̇ô", 3: "q̇ô", 4: "ûq̇ô"},
        "plural":   {1: "oħô", 2: "q̇ô", 3: "q̇ô", 4: "ûq̇ô"}
    },
    "i": {
        "singular": {1: "llūl", 2: "cūl", 3: "cūl", 4: "cūl"},
        "dual":     {1: "(æ)llūl", 2: "(')illūl", 3: "(')illūl", 4: "(')illūl"},
        "plural":   {1: "(æ)llūl", 2: "(')illūl", 3: "(')illūl", 4: "(')illūl"}
    },
    "mag": {
        "singular": {1: "(ō)χ", 2: "huχ", 3: "huχ", 4: "q̇ħúχ"},
        "dual":     {1: "uχ", 2: "'ūχ", 3: "'ūχ", 4: "(')ūχ"},
        "plural":   {1: "uχ", 2: "'ūχ", 3: "'ūχ", 4: "(')ūχ"}
    },
    "mun": {
        "singular": {1: "(e)rk", 2: "tyk", 3: "tyk", 4: "(á)rk"},
        "dual":     {1: "ōrk", 2: "ōrk", 3: "ōrk", 4: "(')urk"},
        "plural":   {1: "ōrk", 2: "ōrk", 3: "ōrk", 4: "(')urk"}
    },
    "a": {
        "singular": {1: "(y)q̇", 2: "(o)q̇", 3: "(o)q̇", 4: "(ú)ħáq̇"},
        "dual":     {1: "āq̇", 2: "ōq̇", 3: "ōq̇", 4: "ūq̇"},
        "plural":   {1: "āq̇", 2: "ōq̇", 3: "ōq̇", 4: "ūq̇"}
    }
}

// we need a fuckin uhhhh uhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh

function get_suffix(declension, number, gender) {
    if (!noun_forms[gender]) return null;
    if (!noun_forms[gender][number]) return null;
    return noun_forms[gender][number][declension] || null;
}

function connect_suffix(text, suffix) {
    let text_entries = text_to_entries(text);
    let suffix_entries = text_to_entries(suffix);
    if (!text_entries || !suffix_entries) return [];

    const last_text = text_entries[text_entries.length - 1];
    let first_suffix = suffix_entries[0];

    if (first_suffix) {
        if (first_suffix.properties.includes(window.REG.VOWEL)) {
            if (first_suffix.properties.includes(window.REG.OPTIONAL)) {
                if (last_text && last_text.properties.includes(window.REG.VOWEL)) {
                    suffix_entries.shift(); // skip optional vowel after vowel
                }
            } else if (last_text && last_text.properties.includes(window.REG.VOWEL)) {
                if (last_text.properties.includes(window.REG.PYRIC)) {
                    const pyric = get_pyric_equivalent(first_suffix);
                    if (pyric) first_suffix = pyric;
                    suffix_entries[0] = first_suffix;
                }
                // do not pop; keep both vowels if not optional
            }
        } else if (first_suffix.properties.includes(window.REG.CONSONANT) && first_suffix.properties.includes(window.REG.OPTIONAL)) {
            if (!last_text || !last_text.properties.includes(window.REG.VOWEL)) {
                suffix_entries.shift();
            }
        }
    }

    return [...text_entries, ...suffix_entries];
}

function random_noun() {
    const declension = 1+Math.floor(Math.random() * 4);

    const wordKeys = Object.keys(nounsMap[declension]);
    const word = wordKeys[Math.floor(Math.random() * wordKeys.length)];
    
    const numbers = ["singular", "dual", "plural"];
    const number = numbers[Math.floor(Math.random() * numbers.length)];

    const genders = Object.keys(nounsMap[declension][word])
    const gender = genders[Math.floor(Math.random() * genders.length)];

    const suffix = get_suffix(declension, number, gender) || "";

    return [entries_to_text(connect_suffix(word, suffix)), number, nounsMap[declension][word][gender]];
}

function testinit() {
    // for (let i = 0; i < 100; i++) {
    //     console.log(random_noun());
    // }
const lengthCounts = {};
const numbers = ["singular", "dual", "plural"];

for (let decl in nounsMap) {
    for (let word in nounsMap[decl]) {
        for (let gender in nounsMap[decl][word]) {
            for (let number of numbers) {
                const suffix = get_suffix(decl, number, gender) || "";
                const fullWord = entries_to_text(connect_suffix(word, suffix));
                const len = fullWord.length;
                lengthCounts[len] = (lengthCounts[len] || 0) + 1;
            }
        }
    }
}

for (let len = 3; len <= 16; len++) {
    console.log(`${lengthCounts[len] || 0} words have ${len} letters`);
}


}




// console.log(entries_to_text(connect_suffix("hAA", "a"))); // há
// console.log(entries_to_text(connect_suffix("hAA", "u"))); // hú
// console.log(entries_to_text(connect_suffix("hAA", "(u)"))); // hâ
// console.log(entries_to_text(connect_suffix("hAAn", "(u)"))); // hânu
// console.log(entries_to_text(connect_suffix("hAA", "(n)u"))); // hânu
// console.log(entries_to_text(connect_suffix("hAAn", "(n)u"))); // hânu
// console.log(entries_to_text(connect_suffix("hAA", "nu"))); // hânu
// console.log(entries_to_text(connect_suffix("hAAn", "nu"))); // hânnu