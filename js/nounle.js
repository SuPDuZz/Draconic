let nounsMap = {1: {}, 2: {}, 3: {}, 4:{}};
let validNounForms = [];
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
    init();
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

    return entries_to_text(connect_suffix(word, suffix));
}

guess_field = document.getElementById("guess");
function generate_input() {
    for (let i=0; i<noun.length; i++) {
        const field = document.createElement("input");
        field.type = "text";
        field.id = "input"+i;
        field.maxLength = 2;
        field.size = 2;
        field.className = "letter";
        field.autocomplete = "off";
        field.spellcheck = false;
        guess_field.appendChild(field);
    }
}

function guess_noun() {
  let guess = [];
  for (let i = 0; i < noun.length; i++) {
    const field = document.getElementById("input" + i);
    let letter = field.value.trim();
    letter = letter.replace(" ", "");
    let entry = text_to_entries(letter);
    if (entry.length !== 1) return false;
    guess.push(entry[0]);
  }
  
  let answerUsed = new Array(noun.length).fill(false);
  let guessColors = new Array(noun.length).fill("red");

  for (let i = 0; i < noun.length; i++) {
    if (guess[i].letter === noun[i].letter) {
      guessColors[i] = "green";
      answerUsed[i] = true;
    }
  }

  for (let i = 0; i < noun.length; i++) {
    if (guessColors[i] === "green") continue;
    for (let j = 0; j < noun.length; j++) {
      if (!answerUsed[j] && guess[i].letter === noun[j].letter) {
        guessColors[i] = "yellow";
        answerUsed[j] = true;
        break;
      }
    }
  }

  for (let i = 0; i < noun.length; i++) {
    document.getElementById("input" + i).style.backgroundColor = guessColors[i];
  }
  return true;
}

function generate_valids() {
  validNounForms = [];
  for (let declension = 1; declension <= 4; declension++) {
    const words = Object.keys(nounsMap[declension]);
    for (let word of words) {
      const genders = Object.keys(nounsMap[declension][word]);
      const numbers = ["singular", "dual", "plural"];
      for (let number of numbers) {
        for (let gender of genders) {
          const suffix = get_suffix(declension, number, gender) || "";
          const candidate = entries_to_text(connect_suffix(word, suffix));
          validNounForms.push(candidate);
        }
      }
    }
  }
  return validNounForms;
}

let valids;
function init() {
  valids = generate_valids();
  noun = text_to_entries(random_noun());
  console.log(entries_to_text(noun));
  console.log("nuh uh silly you, i wont spoil the noun for debugging and let it be");
  generate_input();
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Enter" && guess_noun()) console.log("Correct!");
});


// console.log(entries_to_text(connect_suffix("hAA", "a"))); // há
// console.log(entries_to_text(connect_suffix("hAA", "u"))); // hú
// console.log(entries_to_text(connect_suffix("hAA", "(u)"))); // hâ
// console.log(entries_to_text(connect_suffix("hAAn", "(u)"))); // hânu
// console.log(entries_to_text(connect_suffix("hAA", "(n)u"))); // hânu
// console.log(entries_to_text(connect_suffix("hAAn", "(n)u"))); // hânu
// console.log(entries_to_text(connect_suffix("hAA", "nu"))); // hânu
// console.log(entries_to_text(connect_suffix("hAAn", "nu"))); // hânnu