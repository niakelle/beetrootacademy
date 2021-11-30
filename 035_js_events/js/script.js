/* 
1. Створити HTML-сторінку для відображення/редагування тексту. 
При відкритті сторінки текст відображається за допомогою тега div. 
При натисканні Ctrl + E, замість div з'являється textarea з тим же 
текстом, який тепер можна редагувати. При натисканні Ctrl +, замість 
textarea з'являється div з уже зміненим текстом. Не забудь вимкнути 
поведінку за замовчуванням для цих поєднань клавіш.

2. Створити HTML-сторінку з великою таблицею. При кліку на заголовок 
стовпця, необхідно відсортувати дані цього стовпця. Врахуй, що числові 
значення повинні сортуватися як числа, а не як рядки.

3. Створити HTML-сторінку з блоком тексту в рамці. Реалізувати можливість 
змінювати розмір блоку, якщо затиснути мишку в правому нижньому кутку і 
тягнути її далі.
*/

document.addEventListener("keydown", function (event) {
    // сохраняю в переменную родительский элемент в котором происходит действие событий (лол)
    let firstTask = document.querySelector('.first-task');

    // в ифку передаю комбинацию клавиш ctrl и E английскую;
    if (event.ctrlKey && event.code === "KeyE") {
        // отключаю действие браузера по-умолчанию на комбинацию клавиш ctrl + E 
        // (по дефолту срабатывает шорткат поиска в гугле)
        event.preventDefault();
        // сохраняю значение inner html нашего дива в переменную divValue;
        let divValue = document.querySelector('.first-task div').innerHTML;

        console.log(`Нажатие ctrlKey + E. 
        Убираем div. 
        Добавляем в конец элемента .first-task новый элемент textarea.
        Присваиваем значение удалённого div'а в textarea.value.
        Устанавливаем фокус на textarea (для удобства).`);

        document.querySelector('.first-task div').remove();

        firstTask.append(document.createElement("textarea"));
        document.querySelector('textarea').value = divValue;
        document.querySelector('textarea').focus();
    }

    // привязываем к ифу комбинацию клавиш ctrl и numpad+
    if (event.ctrlKey && event.code === "NumpadAdd") {
        event.preventDefault();
        console.log(`Нажатие ctrlKey + NumpadPlus.
        Создаём элемент див и добавляем его в конец элемента .first-task .
        Находим value элемента textarea и присваиваем его в div который находится в .first-task.
        Последним действием уничтожаем textarea.`);

        firstTask.append(document.createElement('div'));
        document.querySelector('.first-task div').innerHTML = document.querySelector('textarea').value;
        document.querySelector('textarea').remove();
    }
});

class Table {
    constructor (name, age, isMarried) {
        this.name = name;
        this.age = age;
        this.isMarried = isMarried;
    }


}

let arrayTable = [
    new Table ('Дарья', 19, false),
    new Table ('Тимофей', 25, false),
    new Table ('София', 22, true),
    new Table ('Георгий', 20, false),
    new Table ('Таисия', 19, true),
    new Table ('Матвей', 38, true),
    new Table ('Евгений', 77, true),
    new Table ('Елизавета', 19, false),
];

function buildTable (array) {
    let result = '<table>';
    result += '<tr><th>Имя</th><th>Возраст</th><th>Женат/Замужем?</th></tr>';
    for (let i = 0; i < arrayTable.length; i++) {
        result += `<tr><td>${array[i].name}</td><td>${array[i].age}</td><td>${array[i].isMarried}</td></tr>`;
    }

    result += '</table>';
    return result;
}

function outputSecondTask () {
    let tempVar = buildTable(arrayTable);
    document.querySelector('.second-task').append(document.createElement('div'));
    document.querySelector('.second-task div').innerHTML = tempVar;
    let tableTh = document.querySelectorAll('table tr th');
    for (let i = 0; i < tableTh.length; i++) {
        if (tableTh[i]) {
            tableTh[i].addEventListener("click", function (event) {
                console.log('it WOIKS!');
                function compareValues(a,b) {
                    if (i === 0) {
                        let nameA = a.name.toLowerCase();
                        let nameB = b.name.toLowerCase();
                        if (nameA < nameB) {
                            return -1
                        } 
                        if (nameA > nameB) {
                            return 1
                        }
                        return 0
                    }
                    if (i === 1) {
                        return a.age - b.age;
                    }
                    if (i === 2) {
                        return a.isMarried - b.isMarried;
                    }
                }
                arrayTable.sort(compareValues);
                outputSecondTask ();
            });
        }
    }
}

document.querySelector('.second-task__button').onclick = function () {
    outputSecondTask ();
    document.querySelector('.second-task__button').classList.add('hidden');
}



