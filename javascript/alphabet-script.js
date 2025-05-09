const preview = document.getElementById('preview');
const grid = document.getElementById('grid');

const CELL_WIDTH = 101;
const CELL_HEIGHT = 101;

const COLS = 6;
const ROWS = 7;

for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
        const cell = document.createElement('div');
        cell.className = 'grid-cell';
        cell.dataset.row = row;
        cell.dataset.col = col;

        cell.addEventListener('click', () => {
            const x = -(col * CELL_WIDTH);
            const SPRITE_CELL_HEIGHT = 129; // this is the actual height of each cell in the image
            const y = -(row * SPRITE_CELL_HEIGHT);
            preview.style.backgroundPosition = `${x}px ${y}px`;
        });

        grid.appendChild(cell);
    }
}
