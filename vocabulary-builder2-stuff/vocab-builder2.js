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
            const phrase = `<div>&lt;li&gt;&lt;strong&gt;${i + 1}. ${englishLine}&lt;/strong&gt; - &lt;span class="translation"&gt;${portugueseLine}&lt;/span&gt;&lt;/li&gt;</div>`;
            translatedPhrases.push(phrase);
        }
    }

    displayPhrases(translatedPhrases);
}

function displayPhrases(phrases) {
    phraseContainer.innerHTML = ''; // Clear previous content
    phrases.forEach(phrase => {
        const phraseElement = document.createElement('div');
        phraseElement.innerHTML = phrase;
        phraseContainer.appendChild(phraseElement);
    });
}
