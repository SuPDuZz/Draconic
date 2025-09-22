// console.log(document.getElementById('alphabet').innerHTML); ??

const modal = document.getElementById('modal');
const modalGlyph = document.getElementById('modalGlyph');
const modalText = document.getElementById('modalText');
const grid = document.getElementById('grid-placeholder');
const modalAllophone = document.getElementById('modalAllophone');
const allophoneTable = document.getElementById('allophoneTable');
const modalLabel = document.getElementById('modalLabel');

function description(entry){
  if(!entry.text) return '';
  return entry.text
    .replaceAll('{name}', entry.name||'')
    .replaceAll('{name_ipa}', entry.name_ipa||'')
    .replaceAll('{letter_rom}', entry.letter_rom?.join('" or a "')||'')
    .replaceAll('{letter_ipa}', entry.letter_ipa||'')
    .replaceAll('{letter}', entry.letter||'');
}

const table = document.getElementById('alphabet');

let sound;

// generate table
function chunk(data, size = 6) {
  const filtered = data.filter(e => {
    if (!e) return false;
    if (!e.properties) return true;
    return !(
      (Array.isArray(e.properties) && e.properties.includes(window.REG.SHEET_IGNORE)) ||
      (!Array.isArray(e.properties) && e.properties[window.REG.SHEET_IGNORE])
    );
  });
  const chunks = [];
  for (let i = 0; i < filtered.length; i += size) {
    chunks.push(filtered.slice(i, i + size));
  }
  return chunks;
}

const rows = chunk(window.alphabetMap, 6);

rows.forEach(row => {
  const trNames = document.createElement('tr');
  const trGlyphs = document.createElement('tr');

  row.forEach(entry => {
    const tdName = document.createElement('td');
    tdName.textContent = `${entry.letter} - ${entry.name}`;

    const tdGlyph = document.createElement('td');
    tdGlyph.classList.add('glyph');

    const span = document.createElement('span');
    span.textContent = entry.letter_glyph || '';
    span.style.display = 'inline-block';
    span.style.transformOrigin = 'center center';

    tdName.addEventListener('click', () => openModal(entry));
    tdGlyph.addEventListener('click', () => openModal(entry));

    tdGlyph.appendChild(span);
    trNames.appendChild(tdName);
    trGlyphs.appendChild(tdGlyph);

    setTimeout(() => {
      const scaleExtra = entry.table_prop?.size || 1;
      const xOffset = entry.table_prop?.xoffset || 0;
      const yOffset = entry.table_prop?.yoffset || 0;
      span.style.transform = `scale(${scaleExtra}) translateX(${xOffset}px) translateY(${yOffset}px)`;
    });
  });

  table.appendChild(trNames);
  table.appendChild(trGlyphs);
});


//modal function with the number from the buttons
function openModal(entry) {
  if (entry.text === "") return;
  modalLabel.textContent = entry.name;
  modalText.textContent = description(entry);
  modalGlyph.textContent = entry.letter_glyph;
  sound = entry.sound;
  // Allophones
  allophoneTable.innerHTML = "";
  if (entry.allophones && Object.keys(entry.allophones).length > 0) {
    allophoneTable.style.display = "table";

    const header = document.createElement("tr");
    ["Allophone", "Condition"].forEach(text => {
      const th = document.createElement("th");
      th.textContent = text;
      header.appendChild(th);
    });
    allophoneTable.appendChild(header);

    for (const symbol in entry.allophones) {
      const tr = document.createElement("tr");
      const tdSymbol = document.createElement("td");
      tdSymbol.textContent = symbol;
      const tdCond = document.createElement("td");
      tdCond.textContent = entry.allophones[symbol];
      tr.appendChild(tdSymbol);
      tr.appendChild(tdCond);
      allophoneTable.appendChild(tr);
    }
  } else {
    allophoneTable.style.display = "none";
  }

  modal.style.display = "flex";
}


function closeModal() { //when closed
  modal.style.display="none"; // hide modal
}

let audio;
function playSound() { // when playsound button hit
  audio = new Audio(sound);
  if (audio.pause) {
    audio.play(); //play sound
  }
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

window.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});