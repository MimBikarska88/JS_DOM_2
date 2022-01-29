function search() {
    const searchValue = document.getElementById('searchText').value;
    document.getElementById('searchText').value = '';
    const resultElement = document.getElementById('result');
    let counter = 0;
    const listTownElements = Array.from(document.querySelectorAll('#towns li'));
    listTownElements.forEach(function(element) {
        element.style.textDecoration = 'none';
        element.style.fontWeight = 'normal';
    });
    if (searchValue !== '') {
        for (let i = 0; i < listTownElements.length; ++i) {
            if (listTownElements[i].textContent.includes(searchValue)) {
                listTownElements[i].style.textDecoration = 'underline';
                listTownElements[i].style.fontWeight = 'bold';
                counter++;
            }
        }
        resultElement.textContent = `${counter} matches found`;
    }

    console.log(counter);

}