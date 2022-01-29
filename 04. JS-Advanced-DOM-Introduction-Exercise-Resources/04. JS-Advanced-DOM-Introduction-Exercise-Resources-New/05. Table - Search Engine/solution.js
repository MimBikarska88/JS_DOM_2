function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        const searchValue = document.getElementById('searchField').value;
        document.getElementById('searchField').value = '';
        const cellElements = Array.from(document.querySelectorAll('.container tr td'));
        cellElements.forEach((element) => element.parentElement.classList.remove('select'));
        for (let i = 0; i < cellElements.length; ++i) {
            if (cellElements[i].textContent.includes(searchValue)) {
                cellElements[i].parentElement.classList.add('select');
            }
        }

    }
}