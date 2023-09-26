document.addEventListener('DOMContentLoaded', function () {
    const inputText = document.getElementById('inputText');
    const separateButton = document.getElementById('separateButton');
    const output = document.getElementById('output');

    separateButton.addEventListener('click', function () {
        const text = inputText.value.trim(); // Get and trim the input text
        const words = text.split(/\s+/); // Split the text by spaces

        // List of words to exclude
        const excludedWords = ["the", "and", "is", "in", "to", "a", "of", "it", "I", "you", "he", "she", "we", "they", "my", "your", "his", "her", "our", "their", "yes", "you're", "we're", "they're", "are"];

        // Create an object with words as keys and empty strings as values, excluding the excluded words
        const separatedWords = {};
        words.forEach(word => {
            const lowercaseWord = word.toLowerCase();
            if (!excludedWords.includes(lowercaseWord)) {
                separatedWords[lowercaseWord] = '';
            }
        });

        // Display the separated words (non-repeated and excluding pronouns/possessives) line by line
        let result = '';
        for (const word in separatedWords) {
            result += `"${word}": "",\n`;
        }
        output.textContent = result;
    });
});