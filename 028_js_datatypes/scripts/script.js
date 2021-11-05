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

    let number = inputValue + '';

    if (number[0] == number[1] || number[0] == number[2] || number[1] == number [2]) {
        resultFunction = 'В введённом числе есть одинаковые цифры';
    } else {
       resultFunction = 'В введённом числе нет одинаковых цифр';
    }

    console.log(resultFunction);
    threenumberResult.innerHTML = resultFunction;
}

/* 
354 

354 / 10 = 35 (4);
35 / 10 = 3 (5);
3 / 10 = 0 (3); 


*/
