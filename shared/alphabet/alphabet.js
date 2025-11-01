function chunk(data, size = 6) {
    // Breaks data into chunks of given size, filtering out ignored entries
    const filtered = data.filter(e => e && (!e.prop ||
        (Array.isArray(e.prop)
        ? !e.prop.includes(REG.SHEET_IGNORE)
        : !e.prop[REG.SHEET_IGNORE])
    ));
    return Array.from({ length: Math.ceil(filtered.length / size) },
        (_, i) => filtered.slice(i * size, (i + 1) * size));
}


function openModal(entry) {
    if (entry.text === "") return;
    modalLabel.textContent = entry.name;
    modalText.textContent = description(entry);
    modalGlyph.textContent = entry.letter_glyph;
    modal.dataset.sound = entry.sound || "";

    playBtn.style.display = modal.dataset.sound == "" ? "none" : "block";

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
    } else allophoneTable.style.display = "none";
    modal.style.display = "flex";
}


function closeModal() {
    modal.style.display="none";
}

function playSound() {
    const sound = modal.dataset.sound;
    if (!sound) return;
    const audio = new Audio(sound);
    const p = audio.play();
    if (p && typeof p.then === 'function') p.catch(() => {/* ignore play() rejection */});
}

function generate_alphabet() {
    closeModal();

    const ALPHABET_TABLE = document.getElementById('alphabet');
    ALPHABET_TABLE.innerHTML = "";

    console.log("Generating alphabet table")

    const rows = chunk(CHARACTERS.FLAT, 6);

    rows.forEach(row => {
        const trNames = document.createElement('tr');
        const trGlyphs = document.createElement('tr');

        row.forEach(entry => {
            const tdName = document.createElement('td');
            tdName.textContent = entry.prop.includes(REG.DIFFERENT) ? `${entry.name}` : `${entry.letter} - ${entry.name}`;

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

        ALPHABET_TABLE.appendChild(trNames);
        ALPHABET_TABLE.appendChild(trGlyphs);
    });
    console.log("Generated alphabet table");
}

// MODAL
const modal = document.getElementById('modal');
const modalGlyph = document.getElementById('modalGlyph');
const modalText = document.getElementById('modalText');
const allophoneTable = document.getElementById('allophoneTable');
const modalLabel = document.getElementById('modalLabel');


// EVENTS
const closeBtn = modal.querySelector('.modalClose');
closeBtn.onclick = () => closeModal();

const playBtn = modal.querySelector('#modalSound');
playBtn.onclick = () => playSound();

document.addEventListener("keydown", e => {
if (e.key === "Escape") closeModal();
});

window.addEventListener("click", e => {
    if (e.target === modal) closeModal();
});


closeModal();
generate_alphabet();
// <iframe src="https://supduzz.github.io/Draconic/shared/alphabet/alphabet.html"></iframe>

// <div style="display: flex; justify-content: center; align-items: flex-start;">
//     <iframe 
//     id="alphabet_iframe" 
//     src="./shared/alphabet/alphabet.html" 
//     frameborder="0" 
//     title="Draconic Alphabet" 
//     style="border:0; overflow:hidden;"
//     onload="this.style.height=this.contentWindow.document.body.scrollHeight+10+'px'; this.style.width=this.contentWindow.document.body.scrollWidth+10+'px';">
//     </iframe>
// </div>
// outdated ^^^