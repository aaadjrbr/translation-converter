const phraseContainer = document.getElementById('phrase-container');

function translateText() {
    const englishText = document.getElementById('english-input').value;
    const portugueseText = document.getElementById('portuguese-input').value;
    const englishLines = englishText.split('\n');
    const portugueseLines = portugueseText.split('\n');
    const translatedPhrases = [];

    for (let i = 0; i < Math.min(englishLines.length, portugueseLines.length); i++) {
        const englishLine = englishLines[i].trim();
        const portugueseLine = portugueseLines[i].trim();
        if (englishLine !== '' && portugueseLine !== '') {
            const phrase = `{ portuguese: "${portugueseLine}", english: "${englishLine}" },`;
            translatedPhrases.push(phrase);
        }
    }

    displayPhrases(translatedPhrases);
}

function displayPhrases(phrases) {
    phraseContainer.innerHTML = ''; // Clear previous content
    phrases.forEach(phrase => {
        const phraseElement = document.createElement('div');
        phraseElement.classList.add('phrase');
        phraseElement.textContent = phrase;
        phraseContainer.appendChild(phraseElement);
    });
}
