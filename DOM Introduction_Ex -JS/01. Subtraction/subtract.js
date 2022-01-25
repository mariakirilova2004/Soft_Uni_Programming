function subtract() {
    let firstNumber = Number(document.getElementById('firstNumber').value);
    let secondNumber = Number(document.getElementById('secondNumber').value);
    let sum = document.getElementById('result');
    sum.textContent = firstNumber - secondNumber;
}