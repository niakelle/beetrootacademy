/* 
Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить 
назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. 
Написати кілька функцій для роботи з таким масивом:
Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не 
придбані, а потім - ті, що вже придбали.
Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
Створення списку (не) придбаних продуктів.
*/

class ShopItem {
    constructor (name, quantity, isBought, price) {
        this.name = name;
        this.quantity = quantity;
        this.isBought = isBought;
        this.price = price;
    }

    getSumm () {
        return this.quantity * this.price;
    }
};


let shoppingList = [
    new ShopItem ("Banana", 5, true, 15.99),
    new ShopItem ("Cocoa", 1, false, 8.35),
    new ShopItem ("Kiwi", 17, true, 99),
    new ShopItem ("Meat", 2, false, 22.85),
    new ShopItem ("Bread", 52, true, 15.99),
    new ShopItem ("Garlic", 15, false, 12.99),
    new ShopItem ("Glue", 1, false, 35.45)
];

// функция для сортировки списка продуктов; сначала некупленные
function compareValues(a, b) {
    return a.isBought - b.isBought;
}
shoppingList.sort(compareValues);

// реализация того же самого стрелочной функцией ↑
/* shoppingList.sort((a, b) => a.isBought - b.isBought);
*/
console.log(shoppingList);

// Функція приймає назву продукту і відзначає його як придбаний.
let buyProduct = function (massiv, name) {
    return massiv.map(function(item, index, array) {
        if (item.name === name) {
            item.isBought = true;
        }
        return item;
    });
};

let outputBuyProduct = buyProduct(shoppingList,'Cocoa');
console.log(outputBuyProduct);

let constructBuyList = function (massiv) {
    let result = [];
    for (let i = 0; i < massiv.length; i++) {
        if (massiv[i].isBought === false) {
            result.push(massiv[i]);
        }
    }
    return result;
} 

let toBuyList = constructBuyList(shoppingList);
console.log(toBuyList);



/* 
1.  Видалення продукту зі списку (видалення повинно проводитися шляхом створення 
    нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
2.  Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим 
    в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не 
    додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за 
    одиницю 12, а кількості товарів стало 2, то сума буде 24.
*/

// Я так понимаю по заданию что нужно создать массив без заданного продукта и 
// вывести его (хотя это и не имеет особого смысла имхо)
let createArrayWithoutProduct = function (massiv, name) {
    let result = [];
    for (let i = 0; i < massiv.length; i++) {
        if (name !== massiv[i].name) {
            result.push(massiv[i]);
        }
    }
    return result;
}

let arrayWithoutProduct = createArrayWithoutProduct(shoppingList, 'Banana');
console.log(arrayWithoutProduct);

let addItemToList = function (object, massiv) {
    let tempI = 0;
    for (let i = 0; i < massiv.length; i++) {
        if (object.name === massiv[i].name) {
            tempI = i;
        }
    }
    if (tempI !== 0) {
        massiv[tempI].quantity += object.quantity;
    } else {
        massiv.push(object);
    }
    return massiv;
}

let testObject = new ShopItem ("Cabbage", 1, true, 25.41);
let testObjectTwo = new ShopItem ("Banana", 23, true, 15.7);

console.log('Добавляем капусту');
console.log(addItemToList(testObject, shoppingList));
console.log('Добавляем повторный банан');
console.log(addItemToList(testObjectTwo, shoppingList));


// task 004-006 maximum
/* 
1.  Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
2.  Підрахунок суми всіх (не) придбаних продуктів.
3.  Показання продуктів в залежності від суми, (від більшого до меншого / від 
    меншого до більшого, в залежності від параметра функції, який вона приймає)
*/

let calcAllSumm = function (massiv) {
    let result = 0;
    for (let i = 0; i < massiv.length; i++) {
        result += massiv[i].getSumm();
    }

    return result;
}

let calcAllSummConsoleLog = calcAllSumm(shoppingList);
console.log(`Сумма всех покупок = ${calcAllSummConsoleLog}`);


// task 005 - Підрахунок суми всіх (не) придбаних продуктів.


let calcAllSummIsBought = function (massiv, isBought) {
    let result = 0;
    for (let i = 0; i < massiv.length; i++) {
        if (massiv[i].isBought === isBought) {
            result += massiv[i].getSumm();
        }
    }
    return result;
}

let calcAllSummIsBoughtResultTrue = calcAllSummIsBought(shoppingList, true);
let calcAllSummIsBoughtResultFalse = calcAllSummIsBought(shoppingList, false);

console.log (`Подсчёт суммы всех КУПЛЕННЫХ продуктов. Результат = ${calcAllSummIsBoughtResultTrue}`);
console.log(`Подсчёт суммы всех НЕ купленных продуктов. Результат = ${calcAllSummIsBoughtResultFalse}`);


// Task 006 - вывод объектов по порядку в зависимости от суммы
let outputItemsSortedByPrice = function (massiv, isLowToHigh) {
    let result = [];
    if (isLowToHigh) {
        function compareValuesSummToHigh(a, b) {
            return a.getSumm() - b.getSumm();
        }
        massiv.sort(compareValuesSummToHigh);
    } else {
        function compareValuesSummToLow(a, b) {
            return b.getSumm() - a.getSumm();
        }
        massiv.sort(compareValuesSummToLow);
    }
    for (let i = 0; i < massiv.length; i++) {
        result.push(massiv[i]);
    }

    return result;
}

let outputItemsSortedByPriceResultTrue = outputItemsSortedByPrice(shoppingList, true);
let outputItemsSortedByPriceResultFalse = outputItemsSortedByPrice(shoppingList, false);

console.log('Сортировка от меньшей суммы до большей', outputItemsSortedByPriceResultTrue);
console.log('Сортировка от большей суммы до меньшей', outputItemsSortedByPriceResultFalse);


