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

    let perfectNumber = function (a) {
        let result = 0;
        for (let i = 1; i < a; i++) {
            if (a % i === 0) {
                result += i;
            }
        }
        if (result === a) {
            return `Введенное число ${a} является совершенным.`;
        } else {
            return `Введенное число ${a} НЕ является совершенным.`;
        }
    };

    let resultOutput = perfectNumber(aa);
    console.log(resultOutput);
    document.querySelector('.fifth-task__result-output').innerHTML = resultOutput;
}

// task 6 - совершенные числа в диапазоне
document.querySelector('.sixth-task__button').onclick = function () {
    let aa = parseInt(prompt('Введите первое число диапазона'));
    let ab = parseInt(prompt('Введите второе число диапазона'));

    let perfectNumber = function (a) {
        let result = 0;
        for (i = 1; i < a; i++) {
            if (a % i === 0) {
                result += i;
            }
        }
        if (result === a) {
            return 'Число ' + a + ' является совершенным.';
        } 
    }

    let findDiapazonPerfect = function (a,b) {
        for (let i = a; i <= b; i++) {
            if (perfectNumber(i) !== undefined) {
                console.log(perfectNumber(i));
                document.querySelector('.sixth-task__result-output').innerHTML += perfectNumber(i) + '<br>';
            }
        }
    };
    findDiapazonPerfect(aa,ab);
}

// task 7 - вывод введённого времени
document.querySelector('.seventh-task__button').onclick = function () {
    let aa = prompt('Введите часы');
    let ab = prompt('Введите минуты');
    let ac = prompt('Введите секунды');

    let showTime = function (a,b,c) {
        let calcResult = '';
        calcResult += a + ':';
        if (b === '') {
            calcResult += '00' + ':';
        } else {calcResult += b + ':';}
        if (c === '') {
            calcResult += '00';
        } else {calcResult += c;}
        return calcResult;
    };

    console.log('Вы ввели время ' + showTime(aa,ab,ac) + '.');
    document.querySelector('.seventh-task__result-output').innerHTML = 'Вы ввели время ' + showTime(aa,ab,ac) + '.';
}

// task 8 - перевод времени в секунды
document.querySelector('.eight-task__button').onclick = function () {
    let aa = prompt('Введите часы');
    let ab = prompt('Введите минуты');
    let ac = prompt('Введите секунды');

    let calcSeconds = function (a,b,c) {
        let calcResult = ((parseInt(a) * 60) + parseInt(b)) * 60 + parseInt(c);

        return calcResult;
    }

    let resultOutput = 'Введенное вами время в секундах равняется ' + calcSeconds(aa,ab,ac) + '.';
    console.log(resultOutput);
    document.querySelector('.eight-task__result-output').innerHTML = resultOutput;
}

// task 9 - перевод секунд в часы и вывод в формате чч:мм:сс
document.querySelector('.ninth-task__button').onclick = function () {
    // получаем ввод секунд от пользователя
    let aa = parseInt(prompt('Введите секунды'));


    let calcHrsMinSec = function (a) {

    // переменные для секунд, минут и часов (отдельно)
    let seconds = a;
    let minutes;
    let hours;

    // делю секунды на 60 - т.е. перевожу в минуты и округляю значение вниз
    minutes = Math.floor(seconds / 60);
    // остаток от перевода в минуты присваиваю секундам
    seconds = seconds % 60;

    hours = Math.floor(minutes / 60);
    minutes = (minutes % 60);

    let massiv = [];
    massiv.push(hours);     massiv.push(minutes);     massiv.push(seconds);
    return massiv;
}

// объявляю функцию для вывода сконвертированного времени
    let displayHrsMinSec = function (a) {
        // переменная для промежуточных вычислений
        let result = '';
        let dvoetochie = ':';
        for (let i = 0; i < a.length; i++) {
            // проверка не является ли значение массива последним
            if (i !== (a.length - 1)) {
                // проверка состоит число из двух цифр или нет
                if (a[i] < 10) {
                    // если состоит из одной цифры то перед значением вставляем 0
                    result = result + '0' + a[i] + dvoetochie;
                } else {
                    // если из двух цифр, то 0 не вставляем 
                    // (число и так подходит под формат чч:мм:сс)
                    result = result + a[i] + dvoetochie;
                }
            } else {
                // всё то же что и в if ↑↑↑
                if (a[i] < 10) {
                    // если состоит из одной цифры то перед значением вставляем 0
                    result = result + '0' + a[i];
                } else {
                    // если из двух цифр то 0 не вставляем 
                    // (число и так подходит под формат чч:мм:сс)
                    result = result + a[i];
                }
            }
        } 
        // выходим из цикла for
        return result;
    }

    let resultOutput = displayHrsMinSec(calcHrsMinSec(aa));
    console.log('Конвертированное время = ' + resultOutput);
    document.querySelector('.ninth-task__result-output').innerHTML = 'Конвертированное время = ' + resultOutput;
}

// task 10 - написать функцию которая высчитывает разницу между time'ами
/* 
Написать функцию, которая считает разницу между двумя значениями времени. 
Функция принимает 6 параметров которые описывают 2 времени, 
и возвращает результат в виде строки «чч:мм:сс». 
При выполнении задания используйте функции из предыдущих 2-х заданий: 
сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу 
переведите обратно в «чч:мм:сс»
*/

document.querySelector('.tenth-task__button').onclick = function () {
    let aa = parseInt(prompt('Введите первое значение в секундах'));
    let ab = parseInt(prompt('Введите второе значение в секундах'));

    let calcHrsMinSec = function (a,b) {
        console.log(`От ${a} сек отнимаем ${b} сек, результат ↓`);
        a = a - b;
        // переменные для секунд, минут и часов (отдельно)
        let seconds = a;
        let minutes;
        let hours;
    
        // делю секунды на 60 - т.е. перевожу в минуты и округляю значение вниз
        minutes = Math.floor(seconds / 60);
        // остаток от перевода в минуты присваиваю секундам
        seconds = seconds % 60;
    
        hours = Math.floor(minutes / 60);
        minutes = (minutes % 60);
    
        let massiv = [];
        massiv.push(hours);     massiv.push(minutes);     massiv.push(seconds);
        return massiv;
    }

    let displayHrsMinSec = function (a) {
        // переменная для промежуточных вычислений
        let result = '';
        let dvoetochie = ':';
        for (let i = 0; i < a.length; i++) {
            // проверка не является ли значение массива последним
            if (i !== (a.length - 1)) {
                // проверка состоит число из двух цифр или нет
                if (a[i] < 10) {
                    // если состоит из одной цифры то перед значением вставляем 0
                    result = result + '0' + a[i] + dvoetochie;
                } else {
                    // если из двух цифр, то 0 не вставляем 
                    // (число и так подходит под формат чч:мм:сс)
                    result = result + a[i] + dvoetochie;
                }
            } else {
                // всё то же что и в if ↑↑↑
                if (a[i] < 10) {
                    // если состоит из одной цифры то перед значением вставляем 0
                    result = result + '0' + a[i];
                } else {
                    // если из двух цифр то 0 не вставляем 
                    // (число и так подходит под формат чч:мм:сс)
                    result = result + a[i];
                }
            }
        } 
        // выходим из цикла for
        return result;
    }

    let resultOutput = displayHrsMinSec(calcHrsMinSec(aa,ab));
    console.log(`Конвертированное время = ${resultOutput}`);
    document.querySelector('.tenth-task__output-one').innerHTML = `Результат время = ${resultOutput}`;
}