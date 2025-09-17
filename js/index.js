const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const modalText = document.getElementById('modalText');
const grid = document.getElementById('grid-placeholder');
const modalAllophone = document.getElementById('modalAllophone');
const allophoneTable = document.getElementById('allophoneTable');

const COLS = 6;
const ROWS = 7;

const CELL_HEIGHT = 129;
const CELL_WIDTH = 101;

let modalNumber = 0;

let relCol;
let relRow;
let soundPath;

//creates the grid buttons over the alphabet
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

//modal function with the number from the buttons
function openModal(index) {
  //gets the relevent info from the alphabetmap
  const content = alphabetMap[index] || alphabetMap[0];
  modalText.textContent = content.text;

  //gets the sounds path
  relCol = content.column;
  relRow = content.row;
  soundPath = `./assets/sound/symbol-${relRow}-${relCol}.mp3`;
  
  //places the img cutout at the right point of the total img.
  x = -(relCol * CELL_WIDTH);
  y = -(relRow * CELL_HEIGHT);
  modalImage.style.backgroundPosition = `${x}px ${y}px`;
   
  //hides the allophone as default, cause half of the symbols have no allophones, and there a 2 types since allophones are different for the pyric symbol
  modalAllophone.style.display = "none";
  allophoneTable.style.display = "none";

  if (relRow == '6' && relCol == '4') { //if pyric symbol
    modalImage.style.display = "block"; // show picture
    allophoneTable.style.display = "block";
    pyricAllophone(content); // runs allophone function
  } 
  else if (content.name == 'more') { // if last square (more)
    modalImage.style.display = "none";
  } 
  else { //else, aka all not wierd symbols
    modalImage.style.display = "block"; //shows img.
    if (content.allophones === "none") { // if no allophone
      modalAllophone.style.display = "none";
    } 
    else { // if allophone
      modalAllophone.style.display = "block"; //show
      modalAllophone.textContent = content.allophones;
    }
  }
  document.getElementById("modal").style.display="flex"; //show modal
}

function closeModal() { //when closed
  document.getElementById("modal").style.display="none"; // hide modal
}

let audio;
function playSound() { // when playsound button hit
  audio = new Audio(soundPath);
  if (audio.pause) {
    audio.play(); //play sound
  }
}

function pyricAllophone(content) { //allophone for pyric
  // table headers
  allophoneTable.innerHTML = `
      <tr>
        <th>Normal</th>
        <th>Pyric</th>
      </tr>
  `;
  //table content that reacts to alphabetmap
  for (let i = 0; i < content.allophones.length; i++) {
    const allo = content.allophones[i] || content.allophones[0];
    allophoneTable.innerHTML += `
      <tr>
        <td>${allo.letter}</td>
        <td>${allo.change}</td>
      </tr>
    `;
  }
}

function moreSymbols() {

}