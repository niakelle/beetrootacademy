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