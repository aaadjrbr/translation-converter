// Get references to HTML elements
const englishInput = document.getElementById("englishInput");
const portugueseInput = document.getElementById("portugueseInput");
const convertButton = document.getElementById("convertButton");
const outputTextarea = document.getElementById("outputTextarea");

// Initialize a counter for the numbers
let numberCounter = 1;

// Event listener for the Convert button
convertButton.addEventListener("click", () => {
    // Get the user's input text in English and Portuguese
    const englishText = englishInput.value.trim();
    const portugueseText = portugueseInput.value.trim();

    // Check if both fields are non-empty
    if (englishText && portugueseText) {
        // Split the input text into lines
        const englishLines = englishText.split("\n");
        const portugueseLines = portugueseText.split("\n");

        // Ensure both input texts have the same number of lines
        if (englishLines.length === portugueseLines.length) {
            // Initialize HTML output
            let htmlOutput = "";

            // Process each line and add sequential numbering
            for (let i = 0; i < englishLines.length; i++) {
                const trimmedEnglishLine = englishLines[i].trim();
                const trimmedPortugueseLine = portugueseLines[i].trim();
                if (trimmedEnglishLine !== "" && trimmedPortugueseLine !== "") {
                    // Generate the HTML for this line with sequential numbers
                    htmlOutput += `<tr>
                        <td><strong>${numberCounter}</strong> ${trimmedEnglishLine}</td>
                        <td><strong>${numberCounter}</strong> ${trimmedPortugueseLine}</td>
                    </tr>`;
                    numberCounter++;
                }
            }

            // Set the HTML output in the textarea
            outputTextarea.value = `<table>${htmlOutput}</table>`;
        } else {
            alert("The number of lines in the English and Portuguese texts must match.");
        }
    } else {
        alert("Please enter both English text and Portuguese translation.");
    }
});
