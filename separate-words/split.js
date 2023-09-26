document.addEventListener('DOMContentLoaded', function () {
    const inputText = document.getElementById('inputText');
    const separateButton = document.getElementById('separateButton');
    const output = document.getElementById('output');

    separateButton.addEventListener('click', function () {
        const text = inputText.value.trim(); // Get and trim the input text
        const words = text.split(/\s+/); // Split the text by spaces

        // Create an object with words as keys and empty strings as values
        const separatedWords = {};
        words.forEach(word => {
            separatedWords[word] = '';
        });

        // Display the separated words line by line
        let result = '';
        for (const word in separatedWords) {
            result += `"${word}": "",\n`;
        }
        output.textContent = result;
    });
});
