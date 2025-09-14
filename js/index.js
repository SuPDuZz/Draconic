const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const modalText = document.getElementById('modalText');
const grid = document.getElementById('grid-placeholder');

const COLS = 6;
const ROWS = 7;

const CELL_HEIGHT = 129;
const CELL_WIDTH = 101;

let modalNumber = 0;

let relCol;
let relRow;
let soundPath;

for (let row = 0; row < ROWS; row++){
  for (let col = 0; col < COLS; col++) {
    const cell = document.createElement('button');
    cell.className = 'grid-button';
    const currentNumber = modalNumber;
    cell.addEventListener('click', () => openModal(currentNumber));
    modalNumber++;
    grid.appendChild(cell);
  } 
}

function openModal(index) {
  const content = alphabetMap[index] || alphabetMap[0];
  modalText.textContent = content.text;
  document.getElementById("modal").style.display="flex";

  relCol = content.column;
  relRow = content.row;
  soundPath = `./assets/sound/symbol-${relRow}-${relCol}.mp3`;

  x = -(relCol * CELL_WIDTH);
  y = -(relRow * CELL_HEIGHT);
  modalImage.style.backgroundPosition = `${x}px ${y}px`

}

function closeModal() {
  document.getElementById("modal").style.display="none";
}

let audio;
function playSound() {
  audio = new Audio(soundPath);
  if (audio.pause) {
    audio.play();
  }
}