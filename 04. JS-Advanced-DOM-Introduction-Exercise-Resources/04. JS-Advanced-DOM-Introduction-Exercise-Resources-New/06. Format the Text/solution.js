function solve() {
    let textAreaElement = document.getElementById('input');
    let outputAreaElement = document.getElementById('output');
    let sentencesTextContent = textAreaElement.value;
    let sentences = sentencesTextContent.split('.').filter(el => el.length > 1);
    const totalNumeberOfSentences = sentences.length;

    for (let i = 0; i < totalNumeberOfSentences; i += 3) {
        const paragraphElement = document.createElement('p');
        const text1 = document.createTextNode(sentences[i]);
        const text2 = document.createTextNode(sentences[i + 1]);
        const text3 = document.createTextNode(sentences[i + 2]);
        paragraphElement.appendChild(text1);
        paragraphElement.appendChild(text2);
        paragraphElement.appendChild(text3);
        outputAreaElement.appendChild(paragraphElement);
    }

}