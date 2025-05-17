const preview = document.getElementById('preview');
const grid = document.getElementById('grid');

const CELL_WIDTH = 101;
const CELL_HEIGHT = 101;

const COLS = 6;
const ROWS = 7;

let selectedRow = null;
let selectedCol = null;

// builds the grid with 6 coloumns and 7 rows
for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
        const cell = document.createElement('div');
        cell.className = 'grid-cell';
        cell.dataset.row = row;
        cell.dataset.col = col;

        // what happens when the grids are clicked
        cell.addEventListener('click', () => {
            const x = -(col * CELL_WIDTH);
            const SPRITE_CELL_HEIGHT = 129;
            const y = -(row * SPRITE_CELL_HEIGHT);
            preview.style.backgroundPosition = `${x}px ${y}px`;

            // save which cell is chosen
            selectedRow = row;
            selectedCol = col;

            // Display the corresponding explanation text for the symbols
            const key = `${row}-${col}`;
            const data = gridData[key];

            if (data) {
                document.getElementById('info-text').innerHTML = data.content;
            } else {
                document.getElementById('info-text').innerHTML = "<p>No data for this cell.</p>";
            }
        });

        grid.appendChild(cell);
    }
}

// plays a sound file corresponding to the current chosen cell
const playButton = document.getElementById('play-sound');
if (playButton) {
    playButton.addEventListener('click', () => {
        if (selectedRow !== null && selectedCol !== null) {
            const audio = new Audio(`./sounds/symbol-${selectedRow}-${selectedCol}.mp3`);
            audio.play().catch(err => console.error("Lyd kunne ikke afspilles:", err));
        } else {
            alert("Vælg et tegn i alfabetet først.");
        }
    });
}
