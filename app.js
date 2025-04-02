
const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit') 
const plusBtn = document.getElementById('plus') 
const minusBtn = document.getElementById('minus')
const multiplicationBtn = document.getElementById('multiplication') 
const divisionBtn = document.getElementById('division')

let action = '';

plusBtn.onclick = function () {
    action = '+';
}

minusBtn.onclick = function () {
    action = '-';
}

multiplicationBtn.onclick = function () {
    action = '*';
}

divisionBtn.onclick = function () {
    action = '/';
}

submitBtn.onclick = function () {
    const num1 = Number(input1.value);
    const num2 = Number(input2.value);

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = "Ошибка: введены некорректные данные!";
        resultElement.style.color = "red";
        return;
    }

    let result;

    if (action === '+') {
        result = num1 + num2;
    } else if (action === '-') {
        result = num1 - num2;
    } else if (action === '*') {
        result = num1 * num2;
    } else if (action === '/') {
        if (num2 === 0) {
            resultElement.textContent = "Ошибка: деление на 0!";
            resultElement.style.color = "red";
            return;
        }
        result = num1 / num2;
    } else {
        resultElement.textContent = "Ошибка: не выбрана операция!";
        resultElement.style.color = "red";
        return;
    }

    if (result < 0) {
        resultElement.style.color = "red";
    } else {
        resultElement.style.color = "green";
    }
    resultElement.textContent = result;
    if (result ===0){
        resultElement.style.color = "orange";
    }
}








