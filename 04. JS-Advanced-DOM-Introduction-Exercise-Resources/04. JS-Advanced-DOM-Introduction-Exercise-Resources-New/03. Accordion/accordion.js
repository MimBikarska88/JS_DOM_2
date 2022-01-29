function toggle() {
    const buttonElement = document.getElementsByClassName('button')[0];
    let content = buttonElement.textContent;
    if (content == 'More') {
        const divElement = document.getElementById('extra');
        divElement.style.display = 'block';
        buttonElement.textContent = 'Less';
    } else {
        const divElement = document.getElementById('extra');
        divElement.style.display = 'none';
        buttonElement.textContent = 'More';
    }
}