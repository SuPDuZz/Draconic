const container = document.getElementById('quiz-container');
const nextBtn = document.getElementById('next-btn');

let currentQuestion = null;

generateQuestion()
function getBackgroundPosition(row, col) {
    const x = (col / 5) * 100; // 6 cols
    const y = (row / 6) * 100; // 7 rows
    return `${x}% ${y}%`;
}

function generateQuestion() {
    container.innerHTML = '';
    nextBtn.style.display = 'none';

    const symbols = document.querySelectorAll('.symbol');
    symbols.forEach(sym => {
        sym.style.backgroundImage = "url('./images/draconicnoheader.png')";
        sym.style.height = "101px";
    });

    const correct = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];

    const mode = Math.random() < 0.5 ? 'symbol-to-text' : 'text-to-symbol';

    // Pick 2 wrong options
    let choices = [correct];
    while (choices.length < 3) {
        let option = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
        if (!choices.includes(option)) choices.push(option);
    }
    choices = choices.sort(() => Math.random() - 0.5);

    if (mode === 'symbol-to-text') {
        // Show symbol
        const symbolDiv = document.createElement('div');
        symbolDiv.className = 'symbol';
        symbolDiv.style.backgroundPosition = getBackgroundPosition(correct.row, correct.col);
        container.appendChild(symbolDiv);

        // Show options
        const opts = document.createElement('div');
        opts.className = 'options';
        choices.forEach(choice => {
            const btn = document.createElement('button');
            btn.textContent = choice.translit;

            btn.dataset.correct = (choice.translit === correct.translit).toString();

            btn.onclick = () => handleAnswer(choice.translit === correct.translit, btn);
            opts.appendChild(btn);
        });
        container.appendChild(opts);

    } else {
        // Show transliteration
        const heading = document.createElement('h2');
        heading.textContent = correct.translit;
        container.appendChild(heading);

        // Show symbol choices
        const opts = document.createElement('div');
        opts.className = 'options';
        choices.forEach(choice => {
            const btn = document.createElement('button');
            const sym = document.createElement('div');
            sym.className = 'symbol';
            sym.style.backgroundPosition = getBackgroundPosition(choice.row, choice.col);
            btn.appendChild(sym);

            btn.dataset.correct = (choice.translit === correct.translit).toString();

            btn.onclick = () => handleAnswer(choice.translit === correct.translit, btn);
            opts.appendChild(btn);
        });
        container.appendChild(opts);
    }

    currentQuestion = correct;
}

function handleAnswer(isCorrect, btn) {
    // Only disable answer buttons, not the next button
    const answerButtons = container.querySelectorAll('.options button');
    answerButtons.forEach(b => b.disabled = true);

    const symbols = document.querySelectorAll('.symbol');
    symbols.forEach(sym => {
        sym.style.backgroundImage = "url('./images/draconic-adjusted.png')";
        sym.style.height = "129px";
    });

    /*btn.classList.add(isCorrect ? 'correct' : 'incorrect');*/
    answerButtons.forEach(btn => {
        if (btn.dataset.correct === "true") {
            btn.classList.add('correct');
        } else {
            btn.classList.add('incorrect');
        }
    });

    nextBtn.style.display = 'block';
    nextBtn.disabled = false; // Ensure it's clickable
}

nextBtn.onclick = generateQuestion;
