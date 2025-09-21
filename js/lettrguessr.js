const DOM = {
  timerText:              document.getElementById("timer_text"),
  missesText:             document.getElementById("misses_text"),
  winrateText:            document.getElementById("winrate_text"),
  totalTimeText:          document.getElementById("total_time_text"),
  attemptsList:           document.getElementById("attempts_list"),
  guessField:             document.getElementById("guess_field"),
  lettrText:              document.getElementById("lettr_text"),
  confirmBtn:             document.getElementById("confirm_button"),
  accentHueSlide:         document.getElementById("accent_hue_slide"),
  missesSlide:            document.getElementById("misses_slide"),
  timerSlide:             document.getElementById("timer_slide"),
  vowelsCheck:            document.getElementById("vowels_check"),
  pyricVowelsCheck:       document.getElementById("pyric_vowels_check"),
  consonantsCheck:        document.getElementById("consonants_check"),
  specialConsonantsCheck: document.getElementById("special_consonants_check"),
  accentHueCheck:         document.getElementById("accent_hue_check"),
  timerBar:               document.getElementById("timer_bar"),
  missesBar:              document.getElementById("misses_bar"),
  winrateBar:             document.getElementById("winrate_bar"),
  helpBtn:                document.getElementById("help_button"),
  helpOverlay:            document.getElementById("help_overlay"),
  helpClose:              document.getElementById("help_close"),
  unredGlyphCheck:        document.getElementById("unred_glyph")
};

const qholl = get_entry_by_id(40);
console.log(qholl)
let accentHue = Math.random() * 360;
if (!DOM.accentHueCheck.checked) accentHue = DOM.accentHueSlide.value;
let guessLightness = 100;
let startTime = Date.now();
let realStartTime = Date.now();
let elapsed = 0;
let misses = 0;
let maxMisses = parseInt(DOM.missesSlide.value) || 0;
let maxTime = DOM.timerSlide.value;
let lettrsList = [];
let timesList = [];
let averateTimePerQuestion = 0;
let currentLettr = qholl;
let pyricLettr = false;
let wins = 0;
let losses = 0;
let winrate = 0;
let averageTime = 0;

function lerp(a,b,t){return a + (b - a) * t}

function updateValues(){
  if (guessLightness < 100) guessLightness = Math.min(100, guessLightness + 2);
  if (DOM.accentHueCheck.checked) accentHue = (accentHue + 0.01) % 360;
  elapsed = (Date.now() - startTime) / 1000;
  if (maxTime > 0 && elapsed >= maxTime) handleWrong(true);
  const total = wins + losses;
  winrate = total > 0 ? (wins / total) * 100 : 0;
}

function updateAverageTime(){
  const total = timesList.reduce((a, b) => a + b, 0);
  averageTime = timesList.length > 0 ? total / timesList.length : 0;
}

function updateColors(){
  document.documentElement.style.setProperty("--guess-lig", guessLightness + "%");
  document.documentElement.style.setProperty("--accent_hue", accentHue);
}

function updateBars(){
  const targetTimer  = maxTime > 0 ? Math.max(0, 100 - (elapsed / maxTime) * 100) : 100;
  const targetMisses = maxMisses > 0 ? Math.max(0, 100 - (misses / maxMisses) * 100) : 100;
  DOM.timerBar.value   = lerp(+DOM.timerBar.value, targetTimer, 0.3);
  DOM.missesBar.value  = lerp(+DOM.missesBar.value, targetMisses, 0.3);
  DOM.winrateBar.value = lerp(+DOM.winrateBar.value, winrate, 0.3);
}

function updateText(){
  DOM.missesText.textContent  = maxMisses < 1 ? `Misses: ${misses}` : maxMisses > 1 ? `Misses: ${misses}/${maxMisses}` : "Missless";
  DOM.confirmBtn.textContent  = DOM.guessField.value.length > 0 ? "Confirm" : "Skip";
  DOM.timerText.textContent   = "Time: " + (maxTime > 0 ? `${elapsed.toFixed(1)}/${maxTime}s` : `${elapsed.toFixed(1)}s`) + (averageTime > 0 ? `(${averageTime.toFixed(1)}s avg.)` : "");
  DOM.winrateText.textContent = `Winrate: ${wins}/${losses} (${winrate.toFixed(1)}%)`;
  DOM.totalTimeText.textContent = `Total time: ${((Date.now()-realStartTime)/1000).toFixed(1)}s`
}

function mainLoop(){
  updateValues();
  updateText();
  updateBars();
  updateColors();
  DOM.accentHueSlide.value = accentHue;
  requestAnimationFrame(mainLoop);
}

function setRandomLettr() {
  const result = get_random_entry(
    DOM.vowelsCheck.checked,
    DOM.consonantsCheck.checked,
    DOM.pyricVowelsCheck.checked,
    DOM.specialConsonantsCheck.checked
  );

  if (!result) {
    currentLettr = qholl;
    pyricLettr = false;
  } else {
    [currentLettr, pyricLettr] = result;
  }

  DOM.lettrText.textContent = currentLettr.letter_glyph + (pyricLettr ? qholl.letter_glyph : "");
}


function recordLoss(){ losses++; skip(); }
function recordWin(){ wins++; skip(); }

function handleWrong(fatal = false){
  document.documentElement.style.setProperty("--guess-hue", 10);
  misses++;
  DOM.guessField.value = "";
  if (fatal) recordLoss();
  else if (maxMisses === 1) recordLoss();
  else if (maxMisses > 1 && misses >= maxMisses) recordLoss();
}

function handleRight(){
  document.documentElement.style.setProperty("--guess-hue", 120);
  DOM.guessField.value = "";
  recordWin();
}

function skip(){
  logAttempt();
  setRandomLettr();
  updateAverageTime();
  startTime = Date.now();
  misses = 0;
}

function logAttempt(){
  const li = document.createElement("li");
  li.textContent = `${pyricLettr ? currentLettr.letter_rom[0].toUpperCase() : currentLettr.letter_rom[0]}${misses === 0 ? " ✓" : " ✗-" + misses} (${((Date.now() - startTime) / 1000).toFixed(1)}s)`;
  DOM.attemptsList.insertBefore(li, DOM.attemptsList.firstChild);
  DOM.attemptsList.scrollTop = 0;
}

function clearAttemptsLog(){
  DOM.attemptsList.innerHTML = "";
  timesList = [];
}

document.addEventListener("keydown", e => {
  if (e.key === "Enter" && DOM.guessField.value.length > 0) DOM.confirmBtn.click();
  else if (e.key === "Escape") RESET();
});

DOM.accentHueSlide.addEventListener("input", () => { accentHue = parseFloat(DOM.accentHueSlide.value); });
DOM.missesSlide.addEventListener("input", () =>    { maxMisses = parseInt(DOM.missesSlide.value) || 0; });
DOM.timerSlide.addEventListener("input", () =>     { maxTime = parseInt(DOM.timerSlide.value) || 0; });

function RESET() {setRandomLettr(); clearAttemptsLog(); realStartTime = Date.now(); wins = 0; losses = 0; DOM.guessField.focus();};
DOM.vowelsCheck.addEventListener("input",            RESET);
DOM.pyricVowelsCheck.addEventListener("input",       RESET);
DOM.consonantsCheck.addEventListener("input",        RESET);
DOM.specialConsonantsCheck.addEventListener("input", RESET);
DOM.timerSlide.addEventListener("input",        RESET);
DOM.missesSlide.addEventListener("input", RESET);
DOM.unredGlyphCheck.addEventListener("input", () => {
  document.querySelectorAll(".glyph").forEach(el => {
    if (DOM.unredGlyphCheck.checked) el.style.color = `hsl(var(--accent_hue), 100%, 30%)`;
    else el.style.color = `#AC272B`;
  });
});
DOM.unredGlyphCheck.dispatchEvent(new Event("input"));


DOM.confirmBtn.addEventListener("click", () => {
  if (DOM.guessField.value.length === 0) {
    handleWrong(true);
    return;
  }

  const answers = currentLettr.letter_rom.map(r =>
    pyricLettr ? r.toUpperCase() : r
  );

  if (answers.includes(DOM.guessField.value)) handleRight();
  else handleWrong();

  guessLightness = 50;
});


DOM.helpBtn.addEventListener("click", () => {DOM.helpOverlay.style.display = "flex"});
DOM.helpClose.addEventListener("click", () => {DOM.helpOverlay.style.display = "none"});

window.addEventListener("click", e => {
  if (e.target === DOM.helpOverlay) DOM.helpOverlay.style.display = "none";
});

document.documentElement.style.setProperty("--guess-hue", 10);
DOM.helpOverlay.style.display = "none";
DOM.guessField.focus();
setRandomLettr();
mainLoop();