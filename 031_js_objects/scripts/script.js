/* 
1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, 
средняя скорость), и следующие функции для работы с этим объектом:

Функция для вывода на экран информации об автомобиле;

Функция для подсчета необходимого времени для преодоления переданного 
расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги 
водителю необходимо делать перерыв на 1 час.
*/

let car = {
    'proizvoditel': 'Audi',
    'model': 'R8',
    'year': 2015,
    'midSpeed': 160
}

document.querySelector('.first-task__button').onclick = function () {

    let outputYear = function (objectIn) {
        let result = 'Производитель автомобиля ' + objectIn.proizvoditel +
        '. Модель авто: ' + objectIn.model + '. Год выпуска - ' + objectIn.year +
        '. Средняя скорость автомобиля = ' + objectIn.midSpeed + ' км в час.';

        return result;

    };
    console.log(outputYear(car));
    document.querySelector('.first-task__output-one').innerHTML = outputYear(car);
}

document.querySelector('.first-task__button-two').onclick = function () {
    let aa = prompt('Введите необходимое расстояние в километрах ');

    let calcDistance = function (objectIn, a) {
        result = a / objectIn.midSpeed + (Math.floor(a / objectIn.midSpeed / 4));

        result += ' часов';
        return result;
    };

    let resultOutput = calcDistance(car, aa);
    console.log(resultOutput);
    document.querySelector('.first-task__output-two').innerHTML = resultOutput;
}

/* Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и 
следующие функции для работы с этим объектом: 

Функция сложения 2-х объектов-дробей;
Функция вычитания 2-х объектов-дробей;
Функция умножения 2-х объектов-дробей;
Функция деления 2-х объектов-дробей;
Функция сокращения объекта-дроби. */

let drobi = {};

// функция ввода значений дробных чисел
drobi.inputValues = function () {
    // 1я дробь
    let inputChislitel = parseInt(prompt('Введите числитель первой дроби'));
    let inputZnamenatel = parseInt(prompt('Введите знаменатель первой дроби'));
    this.chisOne = inputChislitel;
    this.znamOne = inputZnamenatel;
    // 2я дробь
    let inputChislitelTwo = parseInt(prompt('Введите числитель второй дроби'));
    let inputZnamenatelTwo = parseInt(prompt('Введите знаменатель второй дроби'));
    this.chisTwo = inputChislitelTwo;
    this.znamTwo = inputZnamenatelTwo;
    console.log(  `Первая дробь ${this.chisOne}/${this.znamOne} ; \n`
                + `вторая дробь ${this.chisTwo}/${this.znamTwo} .`);
},

// привязываю к кнопке функцию ввода значений дробей
document.querySelector('.second-task__button').onclick = function () {drobi.inputValues()};

drobi.summa = function () {
    let resultChis;
    let resultZnam;
    resultChis = (this.chisOne * this.znamTwo) + (this.chisTwo * this.znamOne);
    resultZnam = this.znamOne * this.znamTwo; 
    this.resultSumm = {};
    this.resultSumm.chis = resultChis;
    this.resultSumm.znam = resultZnam;
    return `Результат сложения дробей: ${this.resultSumm.chis}/${this.resultSumm.znam} .`;
}
// привязываю функцию сумм к кнопке и делаю вывод в консоль и HTML
document.querySelector('.second-task__button-summ').onclick = function () {
    let resultOutput = drobi.summa();
    console.log(resultOutput);
    document.querySelector('.second-task__output-summ').innerHTML = resultOutput;
};

// пишу функцию нахождения разницы дробей
drobi.raznica = function () {
    let resultChis;
    let resultZnam;
    resultChis = (this.chisOne * this.znamTwo) - (this.chisTwo * this.znamOne);
    resultZnam = this.znamOne * this.znamTwo; 
    this.resultRazn = {};
    this.resultRazn.chis = resultChis;
    this.resultRazn.znam = resultZnam;
    return `Разница дробей: ${this.resultRazn.chis}/${this.resultRazn.znam} .`;
}
// привязываю функцию разницы к кнопке и делаю вывод в консоль и HTML
document.querySelector('.second-task__button-razn').onclick = function () {
    let resultOutput = drobi.raznica();
    console.log(resultOutput);
    document.querySelector('.second-task__output-razn').innerHTML = resultOutput;
};

// пишу функцию умножения дробей
drobi.umnozhenie = function () {
    let resultChis;
    let resultZnam;
    resultChis = this.chisOne * this.chisTwo;
    resultZnam = this.znamOne * this.znamTwo; 
    this.resultMnozh = {};
    this.resultMnozh.chis = resultChis;
    this.resultMnozh.znam = resultZnam;
    return `Результат умножения дробей: ${this.resultMnozh.chis}/${this.resultMnozh.znam} .`;
}
// привязываю функцию умножения к кнопке и делаю вывод в консоль и HTML
document.querySelector('.second-task__button-mnozh').onclick = function () {
    let resultOutput = drobi.umnozhenie();
    console.log(resultOutput);
    document.querySelector('.second-task__output-mnozh').innerHTML = resultOutput;
};

// пишу функцию деления дробей
drobi.delenie = function () {
    let resultChis;
    let resultZnam;
    resultChis = this.chisOne * this.znamTwo;
    resultZnam = this.znamOne * this.chisTwo; 
    this.resultDelenie = {};
    this.resultDelenie.chis = resultChis;
    this.resultDelenie.znam = resultZnam;
    return `Результат деления дробей: ${this.resultDelenie.chis}/${this.resultDelenie.znam} .`;
}
// привязываю функцию деления к кнопке и делаю вывод в консоль и HTML
document.querySelector('.second-task__button-delit').onclick = function () {
    let resultOutput = drobi.delenie();
    console.log(resultOutput);
    document.querySelector('.second-task__output-delit').innerHTML = resultOutput;
};

// пишу функцию сокращения дроби
drobi.sokrashenie = function () {
    let resultChis = this.chisOne;
    let resultZnam = this.znamOne; 
    let startChis = this.chisOne;
    let startZnam = this.znamOne; 
    let obshiyDelitel;

    if (startChis < startZnam || startChis === startZnam) {
        for (let i = 1; i <= startChis; i++) {
            if (startChis % i === 0 && startZnam % i === 0) {
                obshiyDelitel = i;
            }
        }
    } else {
        for (let i = 0; i <= startZnam; i++) {
            if (startChis % i === 0 && startZnam % i === 0) {
                obshiyDelitel = i;
            }
        }
    }

    resultChis = startChis / obshiyDelitel;
    resultZnam = startZnam / obshiyDelitel;

    this.resultSokrashenie = {};
    this.resultSokrashenie.chis = resultChis;
    this.resultSokrashenie.znam = resultZnam;
    return `Результат сокращения дроби: ${this.resultSokrashenie.chis}/${this.resultSokrashenie.znam}.`;
}
// привязываю функцию сокращения к кнопке и делаю вывод в консоль и HTML
document.querySelector('.second-task__button-sokrat').onclick = function () {
    let resultOutput = drobi.sokrashenie();
    console.log(resultOutput);
    document.querySelector('.second-task__output-sokrat').innerHTML = resultOutput;
};




/* 
Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для 
роботи з цим об'єктом:
Для виведення часу на екран.
Зміни часу на передане кількість секунд.
Зміни часу на передане кількість хвилин.
Зміни часу на передане кількість годин.
Врахуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може 
змінитися і інша. 
Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», 
а не «20:30:75». 
Також потрібно передбачити можливість того що користувач може передати 150 секунд, 
або 75 хвилин.
*/

let time = {};

// при нажатии кнопки пользователь вводит в промпты секунды, минуты и часы
document.querySelector('.third-task__button').onclick = function () {
    let seconds = parseInt(prompt('Введите количество секунд.'));
    let minutes = parseInt(prompt('Введите количество минут.'));
    let hours = parseInt(prompt('Введите количество часов.'));
    
    if (!seconds) {
        seconds = 0;
    }
    if (!minutes) {
        minutes = 0;
    }
    if (!hours) {
        hours = 0;
    } 


    time.roundedTime(hours,minutes,seconds);

    return console.log(time.displayTime(time.hours,time.minutes,time.seconds));
};


// функция для округления времени и перезаписи его значений в объекте
time.roundedTime = function (hrs,mins,secs) {
    let tempSeconds, tempMinutes, tempHours;

    tempSeconds = secs % 60;
    tempMinutes = (Math.floor(secs / 60) + mins) % 60;
    tempHours = Math.floor((Math.floor(secs / 60) + mins) / 60) + hrs;

    time.seconds = tempSeconds;
    time.minutes = tempMinutes;
    time.hours = tempHours;
};


// функция для вывода времени из объекта в правильном формате чч:мм:сс
time.displayTime = function (hrs,mins,secs) {
    let calcResult = '';

    // если число состоит из одной цифры, то перед числом дописать 0
    // (считаем, что пользователь умный и не будет вводить отрицательные значения)
    if (hrs < 10) {
        calcResult += '0' + hrs + ':';
    } else {
        calcResult += hrs + ':';
    }

    // для минут
    if (mins < 10) {
        calcResult += '0' + mins + ':';
    } else {
        calcResult += mins + ':';
    }

   // для секунд
    if (secs < 10) {
        calcResult += '0' + secs;
    } else { 
        calcResult += secs;
    }

    return calcResult;
};



// пишу функцию для добавления какого-то количества секунд к текущему времени
time.changeSeconds = function (inputSeconds) {
    let result = time.seconds + time.minutes * 60 + time.hours * 3600 +
    inputSeconds;
    // прибавляем и присваиваем .seconds объекта inputSeconds
    time.minutes = 0;
    time.hours = 0;

    time.seconds = result;
    // вызываем функцию для округления значений времени
    time.roundedTime(time.hours,time.minutes,time.seconds);
    // функция возвращает отформатированный вывод времени из объекта
    return time.displayTime(time.hours,time.minutes,time.seconds);
}

document.querySelector('.third-task__button-changeSeconds').onclick = function () {
    let inputSeconds = parseInt(prompt('Сколько секунд прибавить?'));
    let resultFunction = time.changeSeconds(inputSeconds);
    console.log(resultFunction);
    document.querySelector('.third-task__output-changeSeconds').innerHTML = resultFunction;
}


// пишу функцию для добавления какого-то количества минут к текущему времени
time.changeMinutes = function (inputMinutes) {
    let result = time.minutes + time.hours * 60 + inputMinutes;
    // прибавляем и присваиваем .minutes объекта inputMinutes
    time.hours = 0;
    time.minutes = result;
    // вызываем функцию для округления значений времени
    time.roundedTime(time.hours,time.minutes,time.seconds);
    // функция возвращает отформатированный вывод времени из объекта
    return time.displayTime(time.hours,time.minutes,time.seconds);
}
// привязываю к кнопке ввод, вызов и вывод результата функции
document.querySelector('.third-task__button-changeMinutes').onclick = function () {
    let inputMinutes = parseInt(prompt('Сколько минут прибавить?'));
    let storedFunction = time.changeMinutes(inputMinutes);
    console.log(storedFunction);
    document.querySelector('.third-task__output-changeMinutes').innerHTML = storedFunction;
}


// пишу функцию для добавления какого-то количества часов к текущему времени
time.changeHours = function (inputHours) {
    let result = time.hours + inputHours;
    // прибавляем и присваиваем .hours объекта inputHours
    time.hours = result;
    // функцию для округления не вызываем т.к. в условии нет задания →
    // → округлять часы до дней (делить на 24)

    // функция возвращает отформатированный вывод времени из объекта
    return time.displayTime(time.hours,time.minutes,time.seconds);
}
// привязываю к кнопке ввод, вызов и вывод результата функции
document.querySelector('.third-task__button-changeHours').onclick = function () {
    let inputHours = parseInt(prompt('Сколько часов прибавить?'));
    let storedFunction = time.changeHours(inputHours);
    console.log(storedFunction);
    document.querySelector('.third-task__output-changeHours').innerHTML = storedFunction;
}