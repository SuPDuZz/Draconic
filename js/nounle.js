let nounsMap = {1: {}, 2: {}, 3: {}, 4:{}};
// declesion: {
//  noun: {gender:meaning pairs}

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



// console.log(entries_to_text(connect_suffix("hAA", "a"))); // há
// console.log(entries_to_text(connect_suffix("hAA", "u"))); // hú
// console.log(entries_to_text(connect_suffix("hAA", "(u)"))); // hâ
// console.log(entries_to_text(connect_suffix("hAAn", "(u)"))); // hânu
// console.log(entries_to_text(connect_suffix("hAA", "(n)u"))); // hânu
// console.log(entries_to_text(connect_suffix("hAAn", "(n)u"))); // hânu
// console.log(entries_to_text(connect_suffix("hAA", "nu"))); // hânu
// console.log(entries_to_text(connect_suffix("hAAn", "nu"))); // hânnu