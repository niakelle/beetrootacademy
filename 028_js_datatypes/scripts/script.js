"use strict";

// task 1
let buttonJS = document.getElementById('buttonJS');
buttonJS.onclick = function () {
    let inputValue = document.getElementById('inputValue').value;
    let outputResult = document.querySelector('.result');
    let resultCalc;

    if (inputValue < 12) {
        resultCalc = 'Вы - ребёнок. Ваш возраст равен ' + inputValue + ".";
    }
    
    else if (inputValue >= 12 && inputValue < 18) {
        resultCalc = 'Вы - подросток. Ваш возраст равен ' + inputValue + ".";
    }

    else if (inputValue >= 18 && inputValue < 60) {
        resultCalc = 'Вы - взрослый. Ваш возраст равен ' + inputValue + ".";
    }
    
    else if (inputValue >= 60 && inputValue < 110) {
        resultCalc = 'Вы - пожилой человек. У вас есть пенсионник. Ваш возраст равен ' + inputValue + ".";;
    }   
    
    else {
        resultCalc = 'Введённое значение неверно. Введите число соответствующее вашему возрасту в полных годах.'
    }

    console.log(resultCalc);
    outputResult.innerHTML = resultCalc;
}

// task 2
let specsymbolButton = document.getElementById('specsymbolButton');
specsymbolButton.onclick = function () {

    let inputValue = document.getElementById('specsymbol').value;
    let specsymbolResult = document.querySelector('.specsymbolResult');
    let resultFunction;


    if (inputValue >= 0 && inputValue <= 9) {
        switch (inputValue) {
            case '1':
                resultFunction = 'Цифре ' + inputValue + ' соответствует спецсимвол ' + '!';
                specsymbolResult.innerHTML = 'Цифре ' + inputValue + ' соответствует спецсимвол ' + '!';
            break;
            case '2':
                resultFunction = 'Цифре ' + inputValue + ' соответствует спецсимвол ' + '@';
                specsymbolResult.innerHTML = 'Цифре ' + inputValue + ' соответствует спецсимвол ' + '@';
            break;
            case '3':
                resultFunction = 'Цифре ' + inputValue + ' соответствует спецсимвол ' + '#';
                specsymbolResult.innerHTML = 'Цифре ' + inputValue + ' соответствует спецсимвол ' + '#';
            break;
            case '4':
                resultFunction = 'Цифре ' + inputValue + ' соответствует спецсимвол ' + '$';
                specsymbolResult.innerHTML =  'Цифре ' + inputValue + ' соответствует спецсимвол ' + '$';
            break;
            case '5':
                resultFunction = 'Цифре ' + inputValue + ' соответствует спецсимвол ' + '%';
                specsymbolResult.innerHTML = 'Цифре ' + inputValue + ' соответствует спецсимвол ' + '%';
            break;
            case '6':
                resultFunction = 'Цифре ' + inputValue + ' соответствует спецсимвол ' + '^';
                specsymbolResult.innerHTML = 'Цифре ' + inputValue + ' соответствует спецсимвол ' + '^';
            break;
            case '7':
                resultFunction = 'Цифре ' + inputValue + ' соответствует спецсимвол ' + '&';
                specsymbolResult.innerHTML = 'Цифре ' + inputValue + ' соответствует спецсимвол ' + '&';
            break;
            case '8':
                resultFunction = 'Цифре ' + inputValue + ' соответствует спецсимвол ' + '*';
                specsymbolResult.innerHTML = 'Цифре ' + inputValue + ' соответствует спецсимвол ' + '*';
            break;
            case '9':
                resultFunction = 'Цифре ' + inputValue + ' соответствует спецсимвол ' + '(';
                specsymbolResult.innerHTML = 'Цифре ' + inputValue + ' соответствует спецсимвол ' + '(';
            break;
            case '0':
                resultFunction = 'Цифре ' + inputValue + ' соответствует спецсимвол ' + ')';
                specsymbolResult.innerHTML = 'Цифре ' + inputValue + ' соответствует спецсимвол ' + ')';
            break;
        }
    }

    else {
        resultFunction = 'Введённое значение неверно. Введите число от 1 до 9.';
    }

    console.log(resultFunction);
}

//task 3
let threenumberButton = document.getElementById('threenumberButton');
threenumberButton.onclick = function () {
    let inputValue = document.getElementById('threenumber').value;
    let threenumberResult = document.querySelector('.threenumberResult');
    let resultFunction;

    let number = inputValue;

    if (inputValue >= 100 && inputValue <= 999) {
        if (number[0] == number[1] || number[0] == number[2] || number[1] == number [2]) {
        resultFunction = 'В введённом числе есть одинаковые цифры';
        } else {
        resultFunction = 'В введённом числе нет одинаковых цифр';
        }
    }

    else {
        resultFunction = 'Введённое значение некорректно. Введите трёхзначное число.';
    }

    console.log(resultFunction);
    threenumberResult.innerHTML = resultFunction;
}

//task 4
let leapyearButton = document.getElementById('leapyearButton');
leapyearButton.onclick = function () {
    let inputValue = document.getElementById('leapyear').value;
    let leapyearResult = document.querySelector('.leapyearResult');
    let resultFunction;

    if (inputValue % 400 === 0 || inputValue % 4 === 0 && inputValue % 100 !== 0) {
        resultFunction = 'Вы ввели ' + inputValue + ' год, этот год високосный.';
    }
    else {
        resultFunction = 'Вы ввели ' + inputValue + ' год, этот год НЕ високосный.';
    }

    console.log(resultFunction);
    leapyearResult.innerHTML = resultFunction;
}

//task 5
let palindromButton = document.getElementById('palindromButton');
palindromButton.onclick = function () {
    let inputValue = document.getElementById('palindrom').value;
    let palindromResult = document.querySelector('.palindromResult');
    let resultFunction;

    inputValue += '';
    let paliCalc = '';
    
    for (let i = 4; i >= 0; i--) {
        paliCalc += inputValue[i];
    }
    if (paliCalc === inputValue) {
        resultFunction = 'Ваше число ' + paliCalc + ' является палиндромом.';
    }
    else {
        resultFunction = 'Ваше число ' + inputValue + ' НЕ является палиндромом.';
    }

    console.log(resultFunction);
    palindromResult.innerHTML = resultFunction;
}

//task 6
let usdButton = document.getElementById('usdButton');
usdButton.onclick = function () {
    let inputValue = document.getElementById('usd').value;
    let usdResult = document.querySelector('.usdResult');
    let usdSelectVal = document.getElementById('usdSelect').value;
    let resultFunction;
    let cash;

    if (inputValue > 0) {
        switch (usdSelectVal) {


            case 'eur':
                cash = inputValue * 0.87;
                resultFunction = 'Вы перевели ' + inputValue + ' USD в ' + cash + ' EUR';
            break;
            case 'uah':
                cash = inputValue * 26.1;
                resultFunction = 'Вы перевели ' + inputValue + ' USD в ' + cash + ' UAH';
            break;
            case 'azn':
                cash = inputValue * 1.7;
                resultFunction = 'Вы перевели ' + inputValue + ' USD в ' + cash + ' AZN';
            break;
        }
    } else {
        resultFunction = 'Введенное значение неправильно. Введите сумму больше нуля.'
    }

    console.log(resultFunction);
    usdResult.innerHTML = resultFunction;
}

//task 7
let discountButton = document.getElementById('discountButton');
discountButton.onclick = function () {
    let inputValue = document.getElementById('discount').value;
    let discountResult = document.querySelector('.discountResult');
    let resultFunction;

    if (inputValue > 0) {
        if (inputValue < 200) {
            resultFunction = 'Вашей суммы не хватает для получения скидки.';
        } else if (inputValue >= 200 && inputValue < 300) {
            inputValue = inputValue * 0.97;
            resultFunction = 'Сумма к оплате ' + inputValue + ' с учётом скидки 3%.';
        } else if (inputValue >= 300 && inputValue < 500) {
            inputValue = inputValue * 0.95;
            resultFunction = 'Сумма к оплате ' + inputValue + ' с учётом скидки 5%.';
        } else if (inputValue >= 500) {
            inputValue = inputValue * 0.93;
            resultFunction = 'Сумма к оплате ' + inputValue + ' с учётом скидки 7%. Достигнут максимальный процент скидки.';
        }
    } else {
        resultFunction = 'Введенное значение неверно. Введите сумму больше 0';
    }

    console.log(resultFunction);
    discountResult.innerHTML = resultFunction;
}

//task 8
let okrVKvadrButton = document.getElementById('okrVKvadrButton');
okrVKvadrButton.onclick = function () {
    let inputValueOkr = document.getElementById('okr').value;
    let inputValueKvadr = document.getElementById('kvadr').value;
    let okrVKvadrResult = document.querySelector('.okrVKvadrResult');
    let resultFunction;

    if (inputValueOkr > 0 && inputValueKvadr > 0) {
        // Рассчитываю диаметр окружности
        inputValueOkr = inputValueOkr / Math.PI;
        // Рассчитываю сторону квадрата
        inputValueKvadr = inputValueKvadr / 4;
        // Если длина диаметра меньше стороны квадрата, то окружность можно вписать в квадрат
        if (inputValueOkr < inputValueKvadr) {
            resultFunction = 'Введённую окружность длиной в ' + document.getElementById('okr').value + 
            ' можно вписать в квадрат с периметром ' + document.getElementById('kvadr').value + '.';
        } else {
            resultFunction = 'Введённую окружность длиной в ' + document.getElementById('okr').value + 
            ' НЕЛЬЗЯ вписать в квадрат с периметром ' + document.getElementById('kvadr').value + '.';
        }
    } else {
        resultFunction = 'Как минимум одно из введенных значений неверно. Введите число больше 0';
    }

    console.log(resultFunction);
    okrVKvadrResult.innerHTML = resultFunction;
}

//task 9
let testButton = document.getElementById('testButton');
testButton.onclick = function () {
    let pomidorValue = document.getElementById('pomidor').value;
    let bananValue = document.getElementById('banan').value;
    let strawberryValue = document.getElementById('strawberry').value;
    let testResult = document.querySelector('.testResult');
    let resultFunction;
    let calc = parseInt(pomidorValue) + parseInt(bananValue) + parseInt(strawberryValue);

    resultFunction = 'Вы набрали ' + calc + ' баллов.'
    if (calc === 6) {
        resultFunction += ' Все варианты ответов верны!'
    } else if (calc === 4) {
        resultFunction += ' У вас одна ошибка!'
    } else if (calc === 2) {
        resultFunction += ' У вас две ошибки!'
    } else if (calc === 0) {
        resultFunction += ' Ни одного правильного ответа. Переделывайте!'
    }

    console.log(resultFunction);
    testResult.innerHTML = resultFunction;
}

//task 10


// ↓ скопировал чтобы посмотреть как работает.
/* 
let date = prompt('Enter the date - day-month-year ');
date = date.split('-');
let oldDate = new Date(date[2], date[1]-1, date[0]); //месяцы начинаются с 0
oldDate.setDate(oldDate.getDate()+1);
alert(oldDate); 
*/