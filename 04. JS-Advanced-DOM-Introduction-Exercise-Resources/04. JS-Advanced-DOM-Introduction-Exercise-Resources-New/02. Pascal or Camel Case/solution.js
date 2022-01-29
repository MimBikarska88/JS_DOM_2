function solve() {
    let textToConvert = document.getElementById('text').value;
    let textConvention = document.getElementById('naming-convention').value;
    const resultElement = document.getElementById('result');


    if (textConvention.trim() == 'Pascal Case') {
        let someNewText = '';
        for (let i = 0; i < textToConvert.length; ++i) {
            if (textToConvert[i] == ' ') {
                someNewText += textToConvert.charAt(i + 1).toUpperCase();
                i++;
            } else if (i == 0) {
                someNewText += textToConvert.charAt(i).toUpperCase()
            } else {
                someNewText += textToConvert.charAt(i).toLowerCase()
            }
        }
        resultElement.textContent = someNewText;

    } else if (textConvention.trim() == 'Camel Case') {

        let someNewText = '';
        for (let i = 0; i < textToConvert.length; ++i) {
            if (textToConvert[i] == ' ') {
                someNewText += textToConvert.charAt(i + 1).toUpperCase();
                i++;
            } else {
                someNewText += textToConvert.charAt(i).toLowerCase()
            }
        }
        resultElement.textContent = someNewText;
    } else {
        resultElement.textContent = 'Error!';
    }
}