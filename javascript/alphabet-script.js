const preview = document.getElementById('preview');
const grid = document.getElementById('grid');

const CELL_WIDTH = 101;
const CELL_HEIGHT = 101;

const COLS = 6;
const ROWS = 7;

let selectedRow = null;
let selectedCol = null;

// Byg grid'et og tilføj klik-funktioner
for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
        const cell = document.createElement('div');
        cell.className = 'grid-cell';
        cell.dataset.row = row;
        cell.dataset.col = col;

        cell.addEventListener('click', () => {
            const x = -(col * CELL_WIDTH);
            const SPRITE_CELL_HEIGHT = 129;
            const y = -(row * SPRITE_CELL_HEIGHT);
            preview.style.backgroundPosition = `${x}px ${y}px`;

            // Gem hvilken celle der er valgt
            selectedRow = row;
            selectedCol = col;
        });

        grid.appendChild(cell);
    }
}

// Afspil lyd baseret på valgt celle
const playButton = document.getElementById('play-sound');
if (playButton) {
    playButton.addEventListener('click', () => {
        if (selectedRow !== null && selectedCol !== null) {
            const audio = new Audio(`../sounds/symbol-${selectedRow}-${selectedCol}.mp3`);
            audio.play().catch(err => console.error("Lyd kunne ikke afspilles:", err));
        } else {
            alert("Vælg et tegn i alfabetet først.");
        }
    });
}
