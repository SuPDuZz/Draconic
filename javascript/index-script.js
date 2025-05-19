const pages = [
    { name: 'Draconic Quiz', file: './quiz.html' },
    { name: 'Alphabet', file: './alphabet.html' },
    { name: 'Draconic to Romanized', file: './translate.html' },
];

const container = document.getElementById('button-container');

pages.forEach(page => {
    const btn = document.createElement('button');
    btn.textContent = page.name;
    btn.onclick = () => window.location.href = page.file;
    container.appendChild(btn);
});
