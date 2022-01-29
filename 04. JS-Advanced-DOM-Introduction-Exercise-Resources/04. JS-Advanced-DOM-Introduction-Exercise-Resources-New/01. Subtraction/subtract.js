function subtract() {
    const num1Element = document.getElementById('firstNumber');
    const num2Element = document.getElementById('secondNumber');
    let value1 = Number(num1Element.value);
    let value2 = Number(num2Element.value);
    const resultElement = document.getElementById('result');
    resultElement.textContent = value1 - value2;

}