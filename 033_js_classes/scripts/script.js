/* Task 001
Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:
-- поле, що зберігає радіус кола;
-- get-властивість, яке повертає радіус кола;
-- set-властивість, що встановлює радіус кола;
-- get-властивість, яке повертає діаметр кола;
-- метод, що обчислює площу кола;
-- метод, що обчислює довжину кола.

Продемонструй роботу властивостей і методів.
*/

// объявляю класс
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // get-властивість, яке повертає радіус кола;
    get getRadius() {
        return this.radius;
    }

    // set-властивість, що встановлює радіус кола;
    set setRadius(radius) {
        this.radius = radius;
    }

    // get-властивість, яке повертає діаметр кола;
    get getDiameter() {
        return this.radius * 2
    }

    // метод, що обчислює площу кола;
    square() {
        return Math.PI * Math.pow(this.radius, 2)
    }

    // метод, що обчислює довжину кола.
    circumference() {
        return Math.PI * this.radius * 2
    }
}


document.querySelector('.first-task__button').onclick = function () {
    console.log('Создаём новый экземпляр Circle');
    const circle1 = new Circle (20);
    console.log(circle1);
    console.log(`Вызываем getter getRadius. Результат = "${circle1.getRadius}"`);
    console.log(`Вызываем setter setRadius и переопределяем радиус на 10. Как видим ниже, радиус объекта изменился.`);
    circle1.setRadius = 10;
    console.log(circle1);
    console.log(`Вызываем getter getDiameter. Результат = "${circle1.getDiameter}"`);
    console.log(`Вызываем метод square (площадь). Результат = "${circle1.square()}"`);
    console.log(`Вызываем метод circumference (длина окружности). Результат = "${circle1.circumference()}"`);
    console.log(`На этом task 1 закончен.`)
}

/* Task 002
Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:
--поле, яке зберігає колір маркера;
--поле, яке зберігає кількість чорнил у маркері (у відсотках);
--метод для вводу (приймає рядок і виводить текст відповідним кольором; текст виводиться до тих пір, поки в маркері є чорнило; 
один не пробільний символ — це 0,5% чорнил у маркері).
--Реалізуй клас, що описує маркер, який можна перезаправляти. Успадкуй цей клас від простого маркера і додай метод для заправки.

Продемонструй роботу написаних методів.
*/

class Marker {
    constructor (color, inkQuantity) {
        this.color = color;
        this.inkQuantity = inkQuantity;
    }

    write(string) {
        let result = '';
        for (let i = 0; i < string.length; i++) {
            if (this.inkQuantity > 0) {
                result += string[i];
                if (string[i] !== ' ') {
                    this.inkQuantity -= 0.5;
                } 
            }
        }
        if (this.inkQuantity === 0) {
            console.log("Маркер " + `%c${this.color}` + "%c цвета закончился! Предложение строкой ниже не может быть выведено полностью.", `color: ${this.color}`, `color: #fff`);
        }
        return console.log(`%c${result}`, `color:${this.color}`);
    }
}

class BetterMarker extends Marker {
    constructor (color, inkQuantity) {
        super(color,inkQuantity);
    }

    refillFull() {
        this.inkQuantity = 100;
    }
}

document.querySelector('.second-task__button').onclick = function () {
    const markerPink = new Marker ('#ff66ff', 10);
    const markerGreen = new Marker('#66ff99', 100);
    console.log(markerPink);
    console.log(markerGreen);
    console.log(`В розовом маркере осталось ${markerPink.inkQuantity}% чернил.`);
    console.log(`В зелёном маркере осталось ${markerGreen.inkQuantity}% чернил.`);
    markerPink.write('Какой-то очень длинный текст длиннее 20 символов');
    console.log(`В розовом маркере осталось ${markerPink.inkQuantity}% чернил.`);
    markerGreen.write('Какой-то не очень длинный текст, просто показываю работу зелёного маркера.');
    console.log(`В зелёном маркере осталось ${markerGreen.inkQuantity}% чернил.`);

    const markerOrange = new BetterMarker ('#ffcc66', 10);
    markerOrange.write(`Очень длинный текст, который не будет дописан до конца если маркер заправлен менее чем на 50% (или около того)`);
    console.log(`В оранжевом маркере осталось ${markerOrange.inkQuantity}% чернил.`);
    console.log('Перезаправляем маркер с помощью метода BetterMarker.refillFull');
    markerOrange.refillFull();
    console.log(`В оранжевом маркере осталось ${markerOrange.inkQuantity}% чернил.`);
    console.log(`Выводим тот же текст, который был до этого`);
    markerOrange.write(`Очень длинный текст, который не будет дописан до конца если маркер заправлен менее чем на 50% (или около того).`);
    console.log(`В оранжевом маркере осталось ${markerOrange.inkQuantity}% чернил.`);
}