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
document.querySelector('.translateButton').onclick = function () {
    let paragraph = document.querySelector('.translateOutput');

    let inputOne = document.getElementById('translateOne').value;
    let inputTwo = parseInt(document.getElementById('translateTwo').value);
    let result = '';
    let resultOutput;

    for (let i = 0; i < inputOne.length; i++) {
        let j = i - inputTwo;

        if (j < 0) {
            j += inputOne.length;
        }
        result += inputOne[j];
    }

    resultOutput = 'Число со сдвинутыми цифрами ' + result +'.';

    console.log(resultOutput);
    paragraph.innerHTML = resultOutput;
}

// task 8 - Следующий день недели
let calcEight = 1;
document.querySelector('.eight-button').onclick = function () {
    let paragraph = document.querySelector('.eight-output');
    let result = '';
    let resultOutput;

    if (calcEight > 7) {
        calcEight -= 7;
    }
    switch (calcEight) {
        case 2:
            result = 'вторник';
            calcEight++;
        break;
        case 3:
            result = 'среда';
            calcEight++;
        break;
        case 4:
            result = 'четверг';
            calcEight++;
        break;
        case 5:
            result = 'пятница';
            calcEight++;
        break;
        case 6:
            result = 'суббота';
            calcEight++;
        break;
        case 7:
            result = 'воскресенье';
            calcEight++;
        break;
        case 1:
            result = 'понедельник';
            calcEight++;
        break;
    }
   

    resultOutput = 'День недели ' + result + '.';

    console.log(resultOutput);
    paragraph.innerHTML = resultOutput;
    document.querySelector('.eight-button').innerHTML = 'Узнать день после этого';
}
document.querySelector('.eight-button-hide').onclick = function () {
    document.querySelector('.eight-div-hide').classList.add('display-none');
    document.querySelector('.eight-div-unhide').classList.remove('display-none');
}
document.querySelector('.eight-button-unhide').onclick = function () {
    document.querySelector('.eight-div-hide').classList.remove('display-none');
    document.querySelector('.eight-div-unhide').classList.add('display-none');
}

// task 9 - вывести таблицу умножения чисел от 2 до 9
document.querySelector('.umnozhButton').onclick = function () {
    let paragraph = document.querySelector('.umnozhOutput');

    let result = [];
    let resultOutput = '';

    for (let i = 2; i <= 9; i++) {
        for (let j = 1; j <= 10; j++) {
            result.push(i * j);
        }
        result.push('<br>');
    }

    console.log('mass = ' + result);

    for (let i = 0; i < result.length; i++) {
        resultOutput = resultOutput + result[i] + ' ';
    }

    console.log(resultOutput);
    paragraph.innerHTML = resultOutput;
}

// task 10 - угадай число
document.querySelector('.tenthButton').onclick = function () {
    let paragraph = document.querySelector('.tenthOutput');

    let resultOutput;
    let min = 0;
    let max = 100;
    let result = max / 2;
    

function guessing () {
    let isMore = confirm('Ваше число больше ' + result + '?');
    if (isMore) {
        min = result;
    } else {
        max = result;
    }
    result = Math.floor((min + max) / 2);
} 


let isContinue = confirm('Ваше число равно ' + result + '?');


do {
    console.log('min = ' + min + '; max = ' + max + '; result = ' + result);
    if (isContinue) {
        break;
    }
    guessing();
    isContinue = confirm('Ваше число равно ' + result + '?');
} while (!isContinue);

console.log(resultOutput);
paragraph.innerHTML = resultOutput;
}