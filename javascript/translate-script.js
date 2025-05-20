const buttonsContainer = document.getElementById('buttons');

const customCharacters = [];
for (let i = 0; i <= 40; i++) {
    customCharacters.push(String.fromCharCode(0xE000 + i));
}

customCharacters.forEach(char => {
    const button = document.createElement('button');
    button.textContent = char;
    button.className = 'char-button custom-font';
    button.addEventListener('click', () => {
        const textarea = document.getElementById('inputText');
        textarea.value += char;
        textarea.focus();
    });
    buttonsContainer.appendChild(button);
});


const alphabetMap = {
    '\uE000': 't',   // User-defined Unicode charakter (Private Use Area)
    '\uE001': 'c',
    '\uE002': 'k',
    '\uE003': 'q',
    '\uE004': 'q̇',
    '\uE005': '´',
    '\uE006': 'tr',
    '\uE007': 's',
    '\uE008': 'kx',
    '\uE009': 'qχ',
    '\uE00A': 'qħ',
    '\uE00B': 'q̇ħ',
    '\uE00C': 'd',
    '\uE00D': 'z',
    '\uE00E': 'g',
    '\uE00F': 'f',
    '\uE010': 'th',
    '\uE011': 'll',
    '\uE012': 'x',
    '\uE013': 'χ',
    '\uE014': 'h',
    '\uE015': 'χħ',
    '\uE016': 'ħ',
    '\uE017': 'r',
    '\uE018': 'l',
    '\uE019': 'e',
    '\uE01A': 'æ',
    '\uE01B': 'y',
    '\uE01C': 'a',
    '\uE01D': 'o',
    '\uE01E': 'u',
    '\uE01F': 'i',
    '\uE020': 'ē',
    '\uE021': 'ā',
    '\uE022': 'ō',
    '\uE023': 'ū',
    '\uE024': 'ī',
    '\uE025': 'm',
    '\uE026': 'n',
    '\uE027': 'ŋ',
    '\uE028': '^',
    ' ': ' ',
};

function translateText() {
    const input = document.getElementById('inputText').value;
    let output = '';

    for (let char of input) {
        output += alphabetMap[char] || char; 
    }

    document.getElementById('outputText').value = output;
}
