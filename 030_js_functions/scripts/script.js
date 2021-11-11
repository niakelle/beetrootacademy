// task 1 - больше меньше равно
document.querySelector('.first-task__button').onclick = function () {
    let aa = prompt('Введите 1-е число');
    let ab = prompt('Введите 2-е число');
    let firstTask = function (a, b) {
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } else {
            return 0;
        }
    }

    let resultTask = 'Результат работы функции = ' + firstTask(aa,ab);
    console.log(resultTask);
    document.querySelector('.first-task__result-output').innerHTML = resultTask;
}

// task 2 - найти факториал
document.querySelector('.second-task__button').onclick = function () {
    let input = prompt('Введите число');
    
    let functionName = function (a) {
        let result = 1;
        
        for (let i = 1; i <= input; i++) {
            result *= i;
        }

        return result;
    }


    resultOutput = 'Факториал числа ' + input + ' = ' + functionName(input) + '.';
    console.log(resultOutput);
    document.querySelector('.second-task__result-output').innerHTML = resultOutput;
}

// task 3 - три цифры превратить в число
document.querySelector('.third-task__button').onclick = function () {
    let aa = prompt('Введите 1-е число');
    let ab = prompt('Введите 2-е число');
    let ac = prompt('Введите 3-е число');
    let resultOutput;

    let funct = function (a, b, c) {
        let result = '' + a + b + c;
        return result;
    }

    resultOutput = 'Ваше число = ' + funct(aa,ab,ac) + '.';
    console.log(resultOutput);
    document.querySelector('.third-task__result-output').innerHTML = resultOutput;
}

// task 4 - вычислить площадь прямоугольника
document.querySelector('.fourth-task__button').onclick = function () {
    let aa = prompt('Введите ширину прямоугольника');
    let ab = prompt('Введите длину прямоугольника');
    let result;
    let resultOutput;
    let sUtraBilo = '';

    let calcSquare = function (a,b) {
        if (!b) {
            b = a; 
        }
        result = a * b;
        if (a === b) {
            sUtraBilo = ' Это квадрат.';
        }
        return result;
    }

    resultOutput = 'Площадь прямоугольника = ' + calcSquare(aa,ab) + '.' + sUtraBilo;
    
    console.log(resultOutput);
    document.querySelector('.fourth-task__result-output').innerHTML = resultOutput;
}

// task 5 - Совершенное число
document.querySelector('.fifth-task__button').onclick = function () {
    let aa = parseInt(prompt('Введите число для проверки'));
    let result = 0;
    let resultOutput;
    console.log(aa);
    let perfectNumber = function (a) {
        for (i = 1; i < a; i++) {
            if (a % i === 0) {
                result += i;
            }
        }
        if (result === a) {
            return 'Введенное число ' + a + ' является совершенным.';
        } else {
            return 'Введенное число ' + a + ' НЕ является совершенным.';
        }
    }

    console.log(perfectNumber(aa));
    document.querySelector('.fifth-task__result-output').innerHTML = perfectNumber(aa);
}