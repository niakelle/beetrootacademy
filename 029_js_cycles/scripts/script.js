// task 1 - сумма всех чисел в диапазоне
document.querySelector('.diapazonButton').onclick = function () {
    let paragraph = document.querySelector('.diapazonOutput');

    let inputOne = parseInt(document.getElementById('diapazonOne').value);
    let inputTwo = parseInt(document.getElementById('diapazonTwo').value);
    let result = 0;
    let resultOutput;

    for (let i = inputOne; i <= inputTwo; i++) {
        result += i;
    }

    resultOutput = 'Сумма чисел в заданном диапазоне = ' + result;

    console.log(resultOutput);
    paragraph.innerHTML = resultOutput;
}

// task 2 - наибольший общий делитель двух чисел
document.querySelector('.deliButton').onclick = function () {
    let paragraph = document.querySelector('.deliOutput');

    let inputOne = parseInt(document.getElementById('deliOne').value);
    let inputTwo = parseInt(document.getElementById('deliTwo').value);
    let result;
    let resultOutput;

    let minInput = Math.min(inputOne, inputTwo);

    for (let i = 1; i <= minInput; i++) {
        if (inputOne % i === 0 && inputTwo % i === 0) {
            result = i;
        }
    }

    resultOutput = 'Наибольший общий делитель у этих чисел равен ' + result +'.';

    console.log(resultOutput);
    paragraph.innerHTML = resultOutput;
}

// task 3 - все делители числа
document.querySelector('.deliteliButton').onclick = function () {
    let paragraph = document.querySelector('.deliteliOutput');

    let inputOne = parseInt(document.getElementById('deliteliOne').value);
    let result = [];
    let resultOutput;

    for (i = 1; i <= inputOne; i++) {
        if (inputOne % i === 0) {
            result.push(i);
        }
    }

    resultOutput = 'Вот все целые делители введённого числа: ';

    for (i = 0; i < result.length; i++) {
        resultOutput = resultOutput + result[i] ;
        if (i !== result.length - 1) {
            resultOutput += ', ';
        } else {
            resultOutput += '.';
        }
    }
    
    console.log(resultOutput);
    paragraph.innerHTML = resultOutput;
}

// task 4 - количество цифр
document.querySelector('.quantiButton').onclick = function () {
    let paragraph = document.querySelector('.quantiOutput');

    let inputOne = document.getElementById('quantiOne').value;
    let result;
    let resultOutput;

    resultOutput = 'Количество цифр в введенном числе равно ' + inputOne.length + '.';

    console.log(resultOutput);
    paragraph.innerHTML = resultOutput;
}

// task 5 - 10 чисел
document.querySelector('.tenButton').onclick = function () {
    let paragraph = document.querySelector('.tenOutput');

    let inputMassive = document.querySelectorAll('.tenInput');
    let result;
    let resultOutput;
    let positive = 0;
    let negative = 0;
    let nulls = 0;
    let even = 0;
    let odd = 0;

    for (let i = 0; i < inputMassive.length; i++) {
        let currentElement = parseInt(inputMassive[i].value);

        if (currentElement > 0 ) {
            positive++;
        } else if (currentElement < 0) {
            negative++;
        } else if (currentElement === 0) {
            nulls++;
        }

        // согласно википедии, ноль - тоже чётное число.
        if (currentElement % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }


    resultOutput = 'Положительных чисел: ' + positive + '; отрицательных чисел: ' + negative +
    '; нулей: ' + nulls + '. Чётных чисел: ' + even + '; нечётных чисел: ' + odd + '.';

    console.log(resultOutput);
    paragraph.innerHTML = resultOutput;
}

// task 6 - цикличный калькулятор
document.querySelector('.calcButton').onclick = function () {
    let paragraph = document.querySelector('.calcOutput');

    let inputOne = parseInt(document.getElementById('calcOne').value);
    let inputTwo = parseInt(document.getElementById('calcTwo').value);
    let operator = document.getElementById('calcSelect').value;
    let result;
    let resultOutput;

    if (operator === "+") {
        result = inputOne + inputTwo;
    } else if (operator === "-") {
        result = inputOne - inputTwo;
    } else if (operator === "*") {
        result = inputOne * inputTwo;
    } else {
        result = inputOne / inputTwo;
    }

    resultOutput = 'Результат вычислений = ' + result + '. Хотите использовать калькулятор ещё раз?';

    console.log(resultOutput);
    let isCalc = confirm(resultOutput);

    if (!isCalc) {
        let hideCalc = document.querySelector('.hidable');
        hideCalc.classList.add('display-none');
        document.querySelector('.calcHeading').innerHTML = 'Калькулятор (скрыт)';
        let unhideDiv = document.querySelector('.default-hidden');
        unhideDiv.classList.remove('display-none');
    }
}
document.querySelector('.unhideButton').onclick = function () {
    let hideCalc = document.querySelector('.hidable');
        hideCalc.classList.remove('display-none');
        document.querySelector('.calcHeading').innerHTML = 'Калькулятор (скрыт)';
    let unhideDiv = document.querySelector('.default-hidden');
        unhideDiv.classList.add('display-none');
}

// task 7 - сдвинуть цифры числа на значение