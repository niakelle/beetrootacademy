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
    if (event.ctrlKey && event.code === "KeyE") {
        event.preventDefault();
        console.log(`Нажатие ctrl + E.`);
        let firstTask = document.querySelector('.first-task');
        let div = document.querySelector('div.first-task__output');
        let divValue = div.innerHTML;
        console.log(divValue);
        div.remove();
        console.log(divValue);
        let textArea = document.createElement("textarea");
        firstTask.append(document.createElement('br'));
        firstTask.append(textArea);
        document.querySelector('textarea').value = divValue;
    }
    if (event.ctrlKey && event.code === "KeyE") {
        
    }
});

