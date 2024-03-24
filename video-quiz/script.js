function convertText() {
    const textInput = document.getElementById('textInput').value;
    const lines = textInput.split('\n').map(line => line.trim());
    let output = '';

    lines.forEach((line, index) => {
        const startTime = index * 10;
        const endTime = startTime + 5;
        output += `{
  startTime: ${startTime}, // Começa em ${startTime} segundos
  endTime: ${endTime}, // Termina em ${endTime} segundos
  correctAnswer: "${line}"
},
`;
    });

    document.getElementById('output').textContent = output;
}
