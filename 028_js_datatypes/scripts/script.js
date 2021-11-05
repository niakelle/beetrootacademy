"use strict";

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