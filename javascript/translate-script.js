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

// User-defined Unicode charakters (Private Use Area)
const alphabetMap = {
    '\uE000': 't', '\uE001': 'c', '\uE002': 'k', '\uE003': 'q', '\uE004': 'q̇', '\uE005': '´', '\uE006': 'tr', '\uE007': 's', '\uE008': 'kx', '\uE009': 'qχ', '\uE00A': 'qħ', '\uE00B': 'q̇ħ', '\uE00C': 'd', '\uE00D': 'z', '\uE00E': 'g', '\uE00F': 'f',
    '\uE010': 'th', '\uE011': 'll', '\uE012': 'x', '\uE013': 'χ', '\uE014': 'h', '\uE015': 'χħ', '\uE016': 'ħ', '\uE017': 'r', '\uE018': 'l', '\uE019': 'e', '\uE01A': 'æ', '\uE01B': 'y', '\uE01C': 'a', '\uE01D': 'o', '\uE01E': 'u', '\uE01F': 'i',
    '\uE020': 'ē', '\uE021': 'ā', '\uE022': 'ō', '\uE023': 'ū', '\uE024': 'ī', '\uE025': 'm', '\uE026': 'n', '\uE027': 'ŋ', '\uE028': '^', ' ': ' ',
};

const baseVowels = ['e', 'æ', 'y', 'a', 'o', 'u', 'i', 'ē', 'ā', 'ō', 'ū', 'ī'];
const accentedVowels = ['é', 'ǽ', 'ý', 'á', 'ó', 'ú', 'í', 'ê', 'â', 'ô', 'û', 'î'];

function translateText() {
    const input = document.getElementById('inputText').value;
    let output = '';

    for (let i = 0; i < input.length; i++) {
        const char = input[i];

        if (char === '\uE028') {
            // Get the last character from the output
            const lastChar = output.slice(-1);
            const index = baseVowels.indexOf(lastChar);
            if (index !== -1) {
                // Replace the last character with the accented vowel
                output = output.slice(0, -1) + accentedVowels[index];
            } else {
                // If not a recognized vowel, just append the '^'
                output += '^';
            }
        } else {
            output += alphabetMap[char] || char;
        }
    }

    document.getElementById('outputText').value = output;
}

function setMode(mode) {
    const title = document.getElementById('translatorTitle');
    const draconicSection = document.getElementById('draconicSection');
    const romanizedSection = document.getElementById('romanizedSection');

    if (mode === 'draconic') {
        title.textContent = 'Draconic → Romanized';
        draconicSection.style.display = 'block';
        romanizedSection.style.display = 'none';
    } else {
        title.textContent = 'Romanized → Draconic';
        draconicSection.style.display = 'none';
        romanizedSection.style.display = 'block';
    }
}

// Buttons for Roman to Draconic
const romanCharacters = ['q̇', '´', 'χ', 'ħ', 'ŋ', 'æ', 'ē', 'ā', 'ō', 'ū', 'ī', 'é', 'ǽ', 'ý', 'á', 'ó', 'ú', 'í', 'ê', 'â', 'ô', 'û', 'î'];
const buttonsContainer2 = document.getElementById('buttons2');

romanCharacters.forEach(char => {
    const button = document.createElement('button');
    button.textContent = char;
    button.className = 'char-button custom-font';
    button.addEventListener('click', () => {
        const textarea = document.getElementById('reverseInputText');
        textarea.value += char;
        textarea.focus();
    });
    buttonsContainer2.appendChild(button);
});

// Reverse map
const reverseAlphabetMap = {};
for (const [key, value] of Object.entries(alphabetMap)) {
    if (!reverseAlphabetMap[value]) {
        reverseAlphabetMap[value] = key;
    }
}

function reverseTranslateText() {
    let input = document.getElementById('reverseInputText').value;
    let output = '';

    const romanKeys = Object.keys(reverseAlphabetMap).sort((a, b) => b.length - a.length);

    while (input.length > 0) {
        const char = input[0];

        // Handle accented vowels
        const accIndex = accentedVowels.indexOf(char);
        if (accIndex !== -1) {
            const base = baseVowels[accIndex];
            if (reverseAlphabetMap[base] && reverseAlphabetMap['^']) {
                output += reverseAlphabetMap[base] + reverseAlphabetMap['^'];
                input = input.slice(1);
                continue;
            }
        }

        // Try matching full symbols
        let matched = false;
        for (const key of romanKeys) {
            if (input.startsWith(key)) {
                output += reverseAlphabetMap[key];
                input = input.slice(key.length);
                matched = true;
                break;
            }
        }

        if (!matched) {
            // If no match, just copy the char (or optionally skip it)
            output += input[0];
            input = input.slice(1);
        }
    }

    document.getElementById('reverseOutputText').value = output;
}

const toDiscordFormat = {
    '\uE000': ':t_:', '\uE001': ':c_:', '\uE002': ':k_:', '\uE003': ':q_:', '\uE004': ':Q_:', '\uE005': ':__:',
    '\uE006': ':tr:', '\uE007': ':s_:', '\uE008': ':kx:', '\uE009': ':qX:', '\uE00A': ':qH:', '\uE00B': ':QH:',
    '\uE00C': ':d_:', '\uE00D': ':z_:', '\uE00E': ':g_:', '\uE00F': ':f_:', '\uE010': ':th:', '\uE011': ':ll:',
    '\uE012': ':x_:', '\uE013': ':X_:', '\uE014': ':h_:', '\uE015': ':XH:', '\uE016': ':H_:', '\uE017': ':r_:', 
    '\uE018': ':l_:', '\uE019': ':e_:', '\uE01A': ':ae:', '\uE01B': ':y_:', '\uE01C': ':a_:', '\uE01D': ':o_:', 
    '\uE01E': ':u_:', '\uE01F': ':i_:', '\uE020': ':ee:', '\uE021': ':aa:', '\uE022': ':oo:', '\uE023': ':uu:', 
    '\uE024': ':ii:', '\uE025': ':m_:', '\uE026': ':n_:', '\uE027': ':ng~1:', '\uE028': ':_pyr:', ' ': '   ',
};

function copyTranslatedDraconic(elementId) {
    const text = document.getElementById(elementId).value;
    let translated = '';

    for (const char of text) {
        if (toDiscordFormat[char]) {
            translated += toDiscordFormat[char];
        } else {
            translated += char; // Leave unchanged if no match
        }
    }

    navigator.clipboard.writeText(translated)
        .then(() => alert("Translated text copied to clipboard!"))
        .catch(err => alert("Failed to copy text: " + err));
}
